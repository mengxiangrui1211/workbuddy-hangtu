---
difficulty: 2
time: 20
tags: [案例]
scene: 进阶实操案例
next: /bluebook/part3-advanced/ch24-multi-agent/
nextTitle: 如何进行多 Agent 系统设计
---


# 第 23 章 实操案例集补充

<!-- hb-meta-start -->
<div class="hb-chapter-meta">
  <div class="hb-meta-row">
    <span class="hb-meta-item"><span class="hb-meta-k">难度</span> <span class="hb-stars" title="进阶">★★☆</span> <span class="hb-meta-sub">进阶</span></span>
    <span class="hb-meta-item"><span class="hb-meta-k">预计</span> <b>20</b> 分钟</span>
    <span class="hb-meta-item hb-meta-scene"><span class="hb-meta-k">场景</span> 进阶实操案例</span>
  </div>
  <div class="hb-meta-tags">
    <span class="hb-mtag">案例</span>
  </div>
</div>
<!-- hb-meta-end -->


几个高频、可直接抄的 CASE 模板，拿去就能用，跑顺了记得沉淀成自己的。

## CASE A：邮件/消息分诊

```
整理我邮箱里今天未读、且 important 的邮件：
- 按「需我回复 / 仅需知会 / 可忽略」三类。
- 每封一句话概括 + 建议下一步。
- 需回复的，帮我起草回复草稿（中文，礼貌简洁）。
只整理和起草，不发送。
```
验收：分类清晰、草稿可直接改发。

## CASE B：代码审查助手

```
审查这段代码（贴代码/给路径）：
- 列出 3 个最高优先级问题（正确性与安全）。
- 每个给修改建议 + 示例。
- 不重写全部，只改关键处。
```
验收：问题有依据、示例可运行。

## CASE C：脏数据清洗

```
清洗这个 CSV（路径）：
- 统一日期格式为 YYYY-MM-DD。
- 去重、补缺失标记为「未知」。
- 输出清洗后文件和一份「改动说明」。
先预览改动，确认后我再让你写盘。
```
验收：改动可追溯、不丢数据。

## CASE D：竞品速览

```
做一份「XX 功能」竞品速览：
- 选 3 个主流竞品。
- 每项：定位 / 核心能力 / 定价区间 / 差异化。
- 末尾给一张对比表。
来源标注清楚。
```
验收：信息有来源、对比维度一致。

::: tip 模板的复用方式
把上面任一个存成 CASE 文档，下次改改主题/字段直接复用；高频的就升级成 Skill（第 22 章）。
:::

::: warning 草稿 ≠ 发出
分诊、起草、审查类 CASE 一律「只产出不发送」，人工终审后再动作。
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
    <a class="hb-review-next" href="/bluebook/part3-advanced/ch24-multi-agent/">下一站 · 如何进行多 Agent 系统设计 →</a>
  </div>
</div>
<!-- hb-review-end -->
