"""
产品 Logo 去白底 — floodfill 边界法（零依赖）

原理：
- 旧版按"RGB 欧氏距离 < 阈值 = 背景白"逐像素判断，会误删主体里的白色（船帆/眼白/浪尖/灯笼玻璃）。
- 新版只把"从图像四边能沿近白像素走通的区域"当背景，被深色圈围住的内部白色自动保留。
- 软边：边界带做 alpha 中间值 + 高斯模糊，避免硬切白边。

输入：public/logo.png（白底 PNG）
输出：public/logo.png（RGBA 透明，覆盖）
验证：public/_verify_light.png（#E5E7EB 浅灰底）+ public/_verify_dark.png（#1A2034 深底）

依赖：仅系统 Pillow（pip install pillow）。零 numpy/scipy。
"""
import math
import os
import shutil
import subprocess
import tempfile
from collections import deque

from PIL import Image, ImageFilter, ImageDraw

SRC = "public/logo.png"
OUT_LIGHT = "public/_verify_light.png"
OUT_DARK = "public/_verify_dark.png"
ORIG_GIT_REF = "58226ac:public/logo.png"  # 原白底 PNG 在 git 里的位置


# ---------- 1. 必要时从 git 恢复原始白底 ----------
def restore_original_if_already_transparent():
    im = Image.open(SRC)
    if im.mode != "RGBA":
        return
    # 检查 alpha 通道：若超过 30% 像素已近全透明，认为是上一次抠过的
    alpha = im.split()[3]
    hist = alpha.histogram()
    near_zero = sum(hist[:10])  # alpha 0~9 的像素数
    total = im.size[0] * im.size[1]
    if near_zero > total * 0.3:
        print(f"[restore] {SRC} 已是透明版（{near_zero*100/total:.0f}% 透明），从 git {ORIG_GIT_REF} 恢复原白底 ...")
        tmp = os.path.join(tempfile.gettempdir(), "logo-orig-restore.png")
        with open(tmp, "wb") as f:
            subprocess.check_call(["git", "show", ORIG_GIT_REF], stdout=f)
        shutil.copy(tmp, SRC)
        print(f"[restore] OK ({os.path.getsize(SRC)} bytes)")


restore_original_if_already_transparent()


# ---------- 2. 读图 + 计算"近白"掩码 ----------
im = Image.open(SRC).convert("RGBA")
W, H = im.size
src_px = im.load()

# 距离纯白的欧氏距离（用整数近似 sqrt 避免 math.sqrt 调用 100 万次）
def dist_white_int(r, g, b):
    dr, dg, db = 255 - r, 255 - g, 255 - b
    # 平方和
    return dr * dr + dg * dg + db * db

# 阈值 65² = 4225（RGB 距纯白 ~65 单位才被算"近白"）
NEAR2 = 65 * 65

# near[y][x] = True 表示该像素是"候选白"
near = [[False] * W for _ in range(H)]
for y in range(H):
    row_near = near[y]
    for x in range(W):
        r, g, b, _ = src_px[x, y]
        if dist_white_int(r, g, b) < NEAR2:
            row_near[x] = True


# ---------- 3. BFS 从四边 flood fill ----------
visited = [[False] * W for _ in range(H)]
q = deque()
for x in range(W):
    if near[0][x] and not visited[0][x]:
        visited[0][x] = True; q.append((0, x))
    if near[H - 1][x] and not visited[H - 1][x]:
        visited[H - 1][x] = True; q.append((H - 1, x))
for y in range(H):
    if near[y][0] and not visited[y][0]:
        visited[y][0] = True; q.append((y, 0))
    if near[y][W - 1] and not visited[y][W - 1]:
        visited[y][W - 1] = True; q.append((y, W - 1))

while q:
    y, x = q.popleft()
    # 4-邻域
    if y > 0 and near[y - 1][x] and not visited[y - 1][x]:
        visited[y - 1][x] = True; q.append((y - 1, x))
    if y < H - 1 and near[y + 1][x] and not visited[y + 1][x]:
        visited[y + 1][x] = True; q.append((y + 1, x))
    if x > 0 and near[y][x - 1] and not visited[y][x - 1]:
        visited[y][x - 1] = True; q.append((y, x - 1))
    if x < W - 1 and near[y][x + 1] and not visited[y][x + 1]:
        visited[y][x + 1] = True; q.append((y, x + 1))


# ---------- 4. 构建 alpha 通道 ----------
# visited=True → 0（背景）
# 其余像素 → 255（主体）
# 边界 1 像素带做 alpha=128 让高斯模糊平滑过渡
alpha = Image.new("L", (W, H), 255)
a_px = alpha.load()
for y in range(H):
    for x in range(W):
        if visited[y][x]:
            a_px[x, y] = 0
        else:
            # 检查 4-邻域是否有 visited（是边界像素）
            border = False
            if y > 0 and visited[y - 1][x]: border = True
            elif y < H - 1 and visited[y + 1][x]: border = True
            elif x > 0 and visited[y][x - 1]: border = True
            elif x < W - 1 and visited[y][x + 1]: border = True
            if border:
                a_px[x, y] = 128

# 高斯模糊 alpha，让边界带的 128 平滑过渡成 0↔255
alpha = alpha.filter(ImageFilter.GaussianBlur(radius=1.0))


# ---------- 5. 把 alpha 贴回原图，写 RGBA PNG ----------
out = im.copy()
out.putalpha(alpha)
out.save(SRC, "PNG")


# ---------- 6. 叠底验证 ----------
def composite(bg_hex):
    bg = Image.new("RGB", (W, H), bg_hex)
    return Image.alpha_composite(bg.convert("RGBA"), out).convert("RGB")

composite((229, 231, 235)).save(OUT_LIGHT, "PNG")   # 浅灰
composite((26, 32, 44)).save(OUT_DARK, "PNG")       # 深蓝灰

# 统计透明占比
a_arr = list(alpha.getdata())
tp = sum(1 for v in a_arr if v < 10)
print(f"[done] {W}x{H}  transparent={tp*100/(W*H):.1f}%  -> {SRC}")
print(f"[verify] light -> {OUT_LIGHT}")
print(f"[verify] dark  -> {OUT_DARK}")
