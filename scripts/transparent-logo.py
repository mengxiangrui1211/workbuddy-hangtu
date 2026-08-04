import math
from PIL import Image, ImageFilter

SRC = "public/logo.png"        # 原白底 PNG（同时作为输出，覆盖）
OUT_LIGHT = "public/_verify_light.png"  # 叠浅底验证（模拟亮色主题）
OUT_DARK = "public/_verify_dark.png"    # 叠深底验证（模拟暗色主题）

# 1) 去白底 -> 透明
im = Image.open(SRC).convert("RGBA")
W, H = im.size
px = im.load()
for y in range(H):
    for x in range(W):
        r, g, b, a = px[x, y]
        # 与纯白 (255,255,255) 的欧氏距离
        d = math.sqrt((255 - r) ** 2 + (255 - g) ** 2 + (255 - b) ** 2)
        if d < 12:
            na = 0
        elif d < 42:           # 软过渡带，避免硬边白边
            na = int(255 * (d - 12) / (42 - 12))
        else:
            na = 255
        px[x, y] = (r, g, b, na)

# 2) 只对 alpha 通道做轻微高斯模糊，平滑边缘，不糊主体
alpha = im.split()[3].filter(ImageFilter.GaussianBlur(0.7))
im.putalpha(alpha)

transparent = im.copy()
im.save(SRC, "PNG")  # 覆盖为透明 logo

# 3) 叠底验证
def composite(bg_hex):
    bg = Image.new("RGB", (W, H), bg_hex)
    return Image.alpha_composite(bg.convert("RGBA"), transparent.convert("RGBA")).convert("RGB")

composite((229, 231, 235)).save(OUT_LIGHT, "PNG")   # 浅灰 #E5E7EB
composite((26, 32, 44)).save(OUT_DARK, "PNG")       # 深蓝灰 #1A2034

# 统计透明像素占比
ta = transparent.split()[3]
tp = sum(1 for v in ta.getdata() if v < 10)
print(f"size={W}x{H}  transparent≈{tp*100//(W*H)}%  saved -> {SRC}")
print(f"verify light -> {OUT_LIGHT}")
print(f"verify dark   -> {OUT_DARK}")
