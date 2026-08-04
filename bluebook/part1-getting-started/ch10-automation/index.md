---
difficulty: 2
time: 20
tags: [自动化]
scene: 设一个定时自动化任务
next: /bluebook/part1-getting-started/extra-ai-work-system/
nextTitle: 课外补给：一章看懂 AI 工作系统
---


# 第 10 章 WorkBuddy 自动化任务

<!-- hb-meta-start -->
<div class="hb-chapter-meta">
  <div class="hb-meta-row">
    <span class="hb-meta-item"><span class="hb-meta-k">难度</span> <span class="hb-stars" title="进阶">★★☆</span> <span class="hb-meta-sub">进阶</span></span>
    <span class="hb-meta-item"><span class="hb-meta-k">预计</span> <b>20</b> 分钟</span>
    <span class="hb-meta-item hb-meta-scene"><span class="hb-meta-k">场景</span> 设一个定时自动化任务</span>
  </div>
  <div class="hb-meta-tags">
    <span class="hb-mtag">自动化</span>
  </div>
</div>
<!-- hb-meta-end -->


会自己跑的任务，才是真正省时间的任务。**自动化（Automation）** 让 WorkBuddy 按时间表或触发条件，自动执行你定义好的工作。

## 两种自动化

| 类型 | 含义 | 例子 |
| --- | --- | --- |
| **周期任务（recurring）** | 按规则重复跑 | 每天 9 点生成昨日数据日报 |
| **一次性（once）** | 指定时间跑一次 | 周五 18:00 提醒我写周报 |

## 怎么建

在自动化设置里描述「做什么 + 何时做」，例如：

```
每天早 9 点，拉取昨天的销售数据，
生成一页摘要（含环比），推送到飞书我的会话。
```

系统会把它落成一条调度规则（底层常用 `rrule` 周期表达式）。

## 周期表达式速记

- `FREQ=DAILY` 每天
- `FREQ=WEEKLY;BYDAY=MO` 每周一
- `FREQ=MONTHLY;BYMONTHDAY=1` 每月 1 号

## 可靠性要点（进阶在第 25 章细讲）

- 给任务**明确的时间窗口**和**失败回退**（跑挂了怎么办）。
- 涉及写操作，先小范围验证再全量。
- 定期回看运行记录，清理不再需要的自动化。

::: tip 自动化的黄金法则
**先手动跑通，再自动化。** 一个你都没手动验证过的流程，自动化只会稳定地出错。
:::

::: warning 自动化也会「闯祸」
自动执行 + 写权限 = 可能批量改动数据。上线前务必在测试范围验证，并保留回滚/告警。
:::

第一篇到此结束。课外补给帮你建立贯穿全书的思维模型。


<!-- hb-review-start -->
<div class="hb-review">
  <div class="hb-review-head">⚓ 本章复盘 · 让这一次成功沉淀下来</div>
  <ul class="hb-review-list">
    <li>我跑通了本章任务，并对照文中的「验收标准」逐项确认。</li>
    <li>我把关键的提示词 / 配置 / 命令记进了自己的笔记或知识库。</li>
    <li>如果这类事会重复出现，我会考虑把它沉淀成 Skill 或自动化。</li>
  </ul>
  <div class="hb-review-foot">
    <a class="hb-review-next" href="/bluebook/part1-getting-started/extra-ai-work-system/">下一站 · 课外补给：一章看懂 AI 工作系统 →</a>
  </div>
</div>
<!-- hb-review-end -->
