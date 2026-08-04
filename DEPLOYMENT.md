# 部署说明（Cloudflare Pages）

《WorkBuddy 航海图》采用 VitePress 静态构建，并通过 Cloudflare Pages 的 GitHub 集成持续部署。
仓库即唯一真相源：push 到 `main` 即触发自动重建与发布。

## Cloudflare Pages 设置

在 Cloudflare 控制台选择 **Workers & Pages → Create application → Pages → Import an existing Git repository**，
授权并选择你的仓库 `workbuddy-hangtu`。

使用以下配置：

| 配置项 | 值 |
| --- | --- |
| Project name | `workbuddy-hangtu` |
| Production branch | `main` |
| Framework preset | `VitePress`（也可选 None） |
| Build command | `npm run build` |
| Build output directory | `.vitepress/dist` |
| Root directory | `/`（仓库根即本站根） |
| Node.js version | `22` |

> 仓库根目录包含 `package.json` 与 `.vitepress/`，VitePress 会自动读取根级配置，构建产物输出到 `.vitepress/dist`。

构建依赖通过 `package-lock.json` 固定，Cloudflare 构建时使用 `npm ci` 安装。

## 本地使用同一套构建

```bash
npm ci
npm run build      # 构建到 .vitepress/dist
npm run dev        # 本地预览 http://localhost:5173（热更新）
```

## 自动部署行为

- 推送到 `main`：发布生产版本（约 1–2 分钟生效）。
- Pull Request / 其他分支：由 Cloudflare Pages 生成预览部署。
- 构建输出是纯静态文件，不需要数据库或服务端密钥。

## 自定义域名（可选）

如需绑定自己的域名，在 Cloudflare Pages 的 **Custom domains** 中添加，并同步更新 `vitePress` 配置里的 `site`。

## 许可

本站为独立原创教程内容；站点工程结构借鉴《WorkBuddy 实战蓝皮书》（MIT 开源），但正文由作者独立撰写，未复制原书文本。
