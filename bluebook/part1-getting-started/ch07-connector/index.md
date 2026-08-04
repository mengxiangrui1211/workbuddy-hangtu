---
difficulty: 2
time: 18
tags: [连接器]
scene: 接入第三方服务与数据
next: /bluebook/part1-getting-started/ch08-im/
nextTitle: 接入小程序与 IM 助理
---


# 第 7 章 WorkBuddy 使用连接器

<!-- hb-meta-start -->
<div class="hb-chapter-meta">
  <div class="hb-meta-row">
    <span class="hb-meta-item"><span class="hb-meta-k">难度</span> <span class="hb-stars" title="进阶">★★☆</span> <span class="hb-meta-sub">进阶</span></span>
    <span class="hb-meta-item"><span class="hb-meta-k">预计</span> <b>18</b> 分钟</span>
    <span class="hb-meta-item hb-meta-scene"><span class="hb-meta-k">场景</span> 接入第三方服务与数据</span>
  </div>
  <div class="hb-meta-tags">
    <span class="hb-mtag">连接器</span>
  </div>
</div>
<!-- hb-meta-end -->


连上了工具，WorkBuddy 才真正「长出手脚」。**连接器（Connector）** 就是它和你常用软件之间的桥。

## 连接器是什么

- 连接器对接一个外部服务（飞书、腾讯文档、GitHub、邮箱、云盘……）。
- 连上后，WorkBuddy 能**读写**该服务的数据、调用其能力。
- 技术底层通常是 **MCP（Model Context Protocol）** 服务。

## 怎么连

1. 在连接器列表找到目标服务（如「飞书」）。
2. 按引导授权登录；部分需要填 Token / API Key。
3. 授权后状态变为「已连接」，即可在任务中调用。

::: tip 配置文件在哪
连接器配置通常写在用户目录的 `mcp.json`（如 `~/.workbuddy/mcp.json`）。高级玩法可手动编辑该文件增删连接器，但新手用界面引导即可。
:::

## 连上之后能做什么

- 连**飞书**：发消息、读日历、写云文档。
- 连**腾讯文档**：建表、填数、生成报告。
- 连**GitHub**：查 PR、读 issue、跑流水线。

::: danger 授权即授权数据
连接器一旦授权，WorkBuddy 就能按你给的权限访问对应账号数据。**只连你信任、且确实需要的服务**，并定期检查已连接列表，移除不再用的。
:::

::: info 连不上的常见原因
- Token 过期 → 重新登录刷新。
- 权限范围不够 → 在对应平台补授权。
- 网络/沙箱限制 → 看客户端提示，必要时在允许的环境中重试。
:::

下一章，把它接进你的 IM 和小程序。


<!-- hb-review-start -->
<div class="hb-review">
  <div class="hb-review-head">⚓ 本章复盘 · 让这一次成功沉淀下来</div>
  <ul class="hb-review-list">
    <li>我跑通了本章任务，并对照文中的「验收标准」逐项确认。</li>
    <li>我把关键的提示词 / 配置 / 命令记进了自己的笔记或知识库。</li>
    <li>如果这类事会重复出现，我会考虑把它沉淀成 Skill 或自动化。</li>
  </ul>
  <div class="hb-review-foot">
    <a class="hb-review-next" href="/bluebook/part1-getting-started/ch08-im/">下一站 · 接入小程序与 IM 助理 →</a>
  </div>
</div>
<!-- hb-review-end -->
