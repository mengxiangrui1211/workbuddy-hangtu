---
difficulty: 2
time: 15
tags: [小程序, IM]
scene: 把 WorkBuddy 接到微信 / IM
next: /bluebook/part1-getting-started/ch09-api/
nextTitle: 如何接入外部 API
---


# 第 8 章 WorkBuddy 接入小程序与 IM 助理

<!-- hb-meta-start -->
<div class="hb-chapter-meta">
  <div class="hb-meta-row">
    <span class="hb-meta-item"><span class="hb-meta-k">难度</span> <span class="hb-stars" title="进阶">★★☆</span> <span class="hb-meta-sub">进阶</span></span>
    <span class="hb-meta-item"><span class="hb-meta-k">预计</span> <b>15</b> 分钟</span>
    <span class="hb-meta-item hb-meta-scene"><span class="hb-meta-k">场景</span> 把 WorkBuddy 接到微信 / IM</span>
  </div>
  <div class="hb-meta-tags">
    <span class="hb-mtag">小程序</span>
    <span class="hb-mtag">IM</span>
  </div>
</div>
<!-- hb-meta-end -->


把 WorkBuddy 留在对话框里还不够——接进**微信 / 飞书等 IM** 和**小程序**，你就能在常用入口随时使唤它。

## 两种常见入口

| 入口 | 体验 | 适合 |
| --- | --- | --- |
| **IM 助理**（飞书/企微等） | 在群或私聊里 @ 它下任务 | 团队协同、移动办公 |
| **小程序** | 手机上随时打开用 | 碎片化场景、外出 |

## 怎么接

1. 在 WorkBuddy 的「入口 / 渠道」设置里，选择要绑定的 IM 或小程序。
2. 按引导完成账号绑定与授权。
3. 绑定后，在对应 IM 里就能像和同事一样给它派活。

## 实用场景

- 在飞书群里 `@WorkBuddy 把今天会议纪要整理成待办表`。
- 出门在外用小程序 `生成一张今日数据卡片发我`。
- 把自动化结果推送到 IM（见第 10 章）。

::: warning 群聊里的边界
在群里使用时，注意**不要让它处理群里的敏感文件/对话**。先在小范围私聊验证，再放开到团队。
:::

::: tip 让它「主动找你」
配合自动化（第 10 章），可以让 WorkBuddy 定时把日报、资讯摘要主动推到你的 IM，而不是你每次去问。
:::

下一章，聊聊更底层的「接入外部 API」。


<!-- hb-review-start -->
<div class="hb-review">
  <div class="hb-review-head">⚓ 本章复盘 · 让这一次成功沉淀下来</div>
  <ul class="hb-review-list">
    <li>我跑通了本章任务，并对照文中的「验收标准」逐项确认。</li>
    <li>我把关键的提示词 / 配置 / 命令记进了自己的笔记或知识库。</li>
    <li>如果这类事会重复出现，我会考虑把它沉淀成 Skill 或自动化。</li>
  </ul>
  <div class="hb-review-foot">
    <a class="hb-review-next" href="/bluebook/part1-getting-started/ch09-api/">下一站 · 如何接入外部 API →</a>
  </div>
</div>
<!-- hb-review-end -->
