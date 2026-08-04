---
difficulty: 1
time: 15
tags: [Skill]
scene: 加载并调用一个 Skill
next: /bluebook/part1-getting-started/ch06-experts/
nextTitle: 专家和专家团
---


# 第 5 章 加载一个真正用得上的 Skill

<!-- hb-meta-start -->
<div class="hb-chapter-meta">
  <div class="hb-meta-row">
    <span class="hb-meta-item"><span class="hb-meta-k">难度</span> <span class="hb-stars" title="入门">★☆☆</span> <span class="hb-meta-sub">入门</span></span>
    <span class="hb-meta-item"><span class="hb-meta-k">预计</span> <b>15</b> 分钟</span>
    <span class="hb-meta-item hb-meta-scene"><span class="hb-meta-k">场景</span> 加载并调用一个 Skill</span>
  </div>
  <div class="hb-meta-tags">
    <span class="hb-mtag">Skill</span>
  </div>
</div>
<!-- hb-meta-end -->


有些任务很专业（做公众号封面、生成 PPT、查股票），靠通用对话容易跑偏。**Skill（技能）** 就是给 WorkBuddy 装的「专业外挂」——封装了某领域的最佳实践和工具调用。

## Skill 是什么

- 一个 Skill = 一组**经过验证的工作流 + 指令 + 工具用法**。
- 加载后，WorkBuddy 在该领域会更稳、更对路。
- 分两级：**用户级**（所有项目可用）和**项目级**（仅当前项目）。

## 怎么用起来

当任务匹配某个 Skill 时，WorkBuddy 通常会自动调用。你也可以主动触发：

```
用 wechat-cover-generator 这个技能，给我做一张公众号封面：
主题「AI 提效」，风格「暗色终端」，标题大字。
```

找不到合适的技能时，可以让它去**技能市场/推荐库**搜索：

```
帮我找一个能做微信公众号封面的技能
```

## 看到一个好用的 Skill 时

- 留意它的**前置要求**（比如某些需要浏览器、某些要联网装依赖）。
- 留意它**适合 / 不适合**的场景，避免硬套。

::: tip 判断要不要上 Skill
如果某个任务你反复做、且步骤固定（封面图、周报、数据看板），就值得用 Skill。一次性临时需求，直接对话即可。
:::

::: info 你可以自己造 Skill
当某个流程被你跑顺了，可以把它沉淀成自己的 Skill（详见第三篇第 22 章），下次一句话复用。这是从「用工具」到「建系统」的关键一步。
:::

下一章，认识更专业的「专家」。


<!-- hb-review-start -->
<div class="hb-review">
  <div class="hb-review-head">⚓ 本章复盘 · 让这一次成功沉淀下来</div>
  <ul class="hb-review-list">
    <li>我跑通了本章任务，并对照文中的「验收标准」逐项确认。</li>
    <li>我把关键的提示词 / 配置 / 命令记进了自己的笔记或知识库。</li>
    <li>如果这类事会重复出现，我会考虑把它沉淀成 Skill 或自动化。</li>
  </ul>
  <div class="hb-review-foot">
    <a class="hb-review-next" href="/bluebook/part1-getting-started/ch06-experts/">下一站 · 专家和专家团 →</a>
  </div>
</div>
<!-- hb-review-end -->
