---
difficulty: 3
time: 30
tags: [多 Agent]
scene: 设计多 Agent 系统
next: /bluebook/part3-advanced/ch25-reliability/
nextTitle: 自动化工作流的可靠性
---


# 第 24 章 如何进行多 Agent 系统设计

<!-- hb-meta-start -->
<div class="hb-chapter-meta">
  <div class="hb-meta-row">
    <span class="hb-meta-item"><span class="hb-meta-k">难度</span> <span class="hb-stars" title="深入">★★★</span> <span class="hb-meta-sub">深入</span></span>
    <span class="hb-meta-item"><span class="hb-meta-k">预计</span> <b>30</b> 分钟</span>
    <span class="hb-meta-item hb-meta-scene"><span class="hb-meta-k">场景</span> 设计多 Agent 系统</span>
  </div>
  <div class="hb-meta-tags">
    <span class="hb-mtag">多 Agent</span>
  </div>
</div>
<!-- hb-meta-end -->


单一 Agent 能干活；**多 Agent 系统**能搞定「一个人干不完」的复杂目标——把大任务拆给多个各有所长的 Agent 协作。

## 三种常见结构

```
顺序链（Pipeline）      并行扇出（Fan-out）      主管-下属（Supervisor）
A→B→C                   A ┬→ B                   Supervisor
                         ├→ C → 汇总              ├→ 研究员
                         └→ D                     ├→ 写作者
                                                  └→ 审核员
```
- **顺序链**：上一步产出是下一步输入（调研→写作→排版）。
- **并行扇出**：互不依赖，各自算完再汇总（多视角评估）。
- **主管-下属**：一个调度者派活、收口、质控（复杂项目首选）。

## 设计步骤

1. **切分职责**：哪些环节能独立？哪些有前后依赖？
2. **定接口**：Agent 之间传什么（文本/文件/结构化 JSON）？
3. **定验收**：每个 Agent 的产出怎么算合格？
4. **加审核关**：关键产出过一道「审核 Agent」再放行。
5. **可观测**：每步留日志，出问题能定位到哪一环。

## 任务描述示例（主管-下属）

```
做一个「行业研究报告」系统：
- 研究员 Agent：搜集 5 个来源，提炼事实。
- 写作者 Agent：基于事实出 1500 字报告。
- 审核 Agent：核对事实出处、标红无来源断言。
- 主管：串起来，最后只交付「审核通过」的版本。
先给我看大纲再 full run。
```

## 常见坑

::: danger 别让 Agent 互相信任
默认 Agent 之间不该盲目采信彼此。关键事实要**带来源**，审核关要独立。
:::

::: warning 成本与延迟
Agent 越多，耗时和调用成本越高。能顺序就别并行叠满；非必要不拉满。
:::

::: tip 从「假装多 Agent」起步
新手不必真写多 Agent 代码：在**一个任务里**按顺序让 WorkBuddy 扮演「先调研、再写、最后审」，就能体会协作节奏，再考虑固化成系统。
:::


<!-- hb-review-start -->
<div class="hb-review">
  <div class="hb-review-head">⚓ 本章复盘 · 让这一次成功沉淀下来</div>
  <ul class="hb-review-list">
    <li>我跑通了本章任务，并对照文中的「验收标准」逐项确认。</li>
    <li>我把关键的提示词 / 配置 / 命令记进了自己的笔记或知识库。</li>
    <li>如果这类事会重复出现，我会考虑把它沉淀成 Skill 或自动化。</li>
  </ul>
  <div class="hb-review-foot">
    <a class="hb-review-next" href="/bluebook/part3-advanced/ch25-reliability/">下一站 · 自动化工作流的可靠性 →</a>
  </div>
</div>
<!-- hb-review-end -->
