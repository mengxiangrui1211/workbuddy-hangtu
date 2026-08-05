// 临时桩：当 mermaid 包未安装时，构建期通过 vite.alias 指向此文件，
// 让 Rollup 能解析。运行时 MermaidDiagram 调用 render 会抛错并被 try/catch 兜成源码回退。
// 一旦正式安装 mermaid，请删除 config.mjs 中对应的 alias 配置。
const mermaid = {
  initialize() {},
  async render() {
    throw new Error("mermaid 依赖未安装：构建期使用 stub，运行时无图表")
  },
}

export default mermaid
