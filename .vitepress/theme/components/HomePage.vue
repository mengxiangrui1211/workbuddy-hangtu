<script setup lang="ts">
import PixelIcon from "./PixelIcon.vue";
import PixelIconSprite from "./PixelIconSprite.vue";
</script>

<template>
  <main class="wb-home">
    <PixelIconSprite />
    <section class="wb-hero" aria-labelledby="wb-hero-title">
      <div class="wb-hero__stage">
        <div class="wb-hero__copy">
          <p class="wb-pixel-label">OPEN-SOURCE · 27 章 · 2026</p>
          <h1 id="wb-hero-title" class="wb-hero__title--hangtu">
            WorkBuddy 航海图
          </h1>
          <p class="wb-hero__summary">
            一套以真实工作为主线的 WorkBuddy 实战路径。先 0→1
            用起来，再把每次成功沉淀为可复用的工作系统，从第一项任务，到一支
            AI 舰队。
          </p>
          <div class="wb-hero__actions">
            <a class="wb-button wb-button--primary" href="/bluebook/part1-getting-started/">
              <span>从第一篇开始</span>
              <PixelIcon name="arrow-right" />
            </a>
            <a class="wb-button wb-button--outline" href="/reading-guide">查看阅读路线</a>
          </div>
        </div>

        <div class="wb-hero__art" aria-label="WorkBuddy 航海图 像素图标组合">
          <span class="wb-hero__monogram">NAV_</span>
          <div class="wb-hero__logo-card">
            <img src="/logo.png" alt="WorkBuddy 航海图" />
          </div>
          <span class="wb-icon-card wb-icon-card--buddy">
            <PixelIcon name="compass" />
          </span>
          <span class="wb-icon-card wb-icon-card--book">
            <PixelIcon name="anchor" />
          </span>
          <span class="wb-icon-card wb-icon-card--flow">
            <PixelIcon name="book" />
          </span>
          <span class="wb-icon-card wb-icon-card--work">
            <PixelIcon name="briefcase" />
          </span>
          <div class="wb-hero__metrics" aria-label="航海图内容规模">
            <span><b>27</b> CHAPTERS</span>
            <span><b>4</b> PARTS</span>
            <span><b>∞</b> WORKFLOWS</span>
          </div>
        </div>
      </div>

      <div class="wb-value-strip" aria-label="航海图价值">
        <div class="wb-value-strip__item">
          <PixelIcon name="check-box" />
          <span><b>真实任务</b><small>REAL TASKS</small></span>
        </div>
        <div class="wb-value-strip__item">
          <PixelIcon name="refresh" />
          <span><b>可复现</b><small>REPRODUCIBLE</small></span>
        </div>
        <div class="wb-value-strip__item">
          <PixelIcon name="handshake" />
          <span><b>社区共创</b><small>OPEN SOURCE</small></span>
        </div>
        <div class="wb-value-strip__item">
          <PixelIcon name="grid" />
          <span><b>系统沉淀</b><small>WORK SYSTEM</small></span>
        </div>
      </div>
    </section>

    <section class="wb-section wb-reading" aria-labelledby="wb-reading-title">
      <div class="wb-section__heading">
        <div>
          <p class="wb-pixel-label">READING PATH / 01—04</p>
          <h2 id="wb-reading-title">四段航程，按你的目标进入</h2>
        </div>
        <p>从个人上手到组织落地，循序渐进，构建你的 WorkBuddy 工作系统。</p>
      </div>

      <div class="wb-reading-grid">
        <a class="wb-reading-card" href="/bluebook/part1-getting-started/">
          <span class="wb-reading-card__icon"><PixelIcon name="user" /></span>
          <span class="wb-reading-card__content">
            <small>PART 01 · CH. 01—10</small>
            <strong>从 0 到 1：先把 WorkBuddy 用起来</strong>
            <span>安装、界面、第一个任务、Skill、连接器、API 与自动化。</span>
            <em><b>新手推荐</b><b>先完成一项任务</b></em>
          </span>
          <PixelIcon name="arrow-right" class="wb-reading-card__arrow" />
        </a>

        <a class="wb-reading-card" href="/bluebook/part2-cases/">
          <span class="wb-reading-card__icon"><PixelIcon name="briefcase" /></span>
          <span class="wb-reading-card__content">
            <small>PART 02 · CH. 11—21</small>
            <strong>进入真实案例：让任务开始流动</strong>
            <span>办公、文件、远程、资讯、知识、会议、投资和内容增长。</span>
            <em><b>11 个案例</b><b>任务驱动</b></em>
          </span>
          <PixelIcon name="arrow-right" class="wb-reading-card__arrow" />
        </a>

        <a class="wb-reading-card" href="/bluebook/part3-advanced/">
          <span class="wb-reading-card__icon"><PixelIcon name="sitemap" /></span>
          <span class="wb-reading-card__content">
            <small>PART 03 · CH. 22—25</small>
            <strong>把案例变成可复用的工作系统</strong>
            <span>打造 Skill、多 Agent 系统设计与可靠的自动化工作流。</span>
            <em><b>系统进阶</b><b>可靠自动化</b></em>
          </span>
          <PixelIcon name="arrow-right" class="wb-reading-card__arrow" />
        </a>

        <a class="wb-reading-card" href="/bluebook/part4-roles/">
          <span class="wb-reading-card__icon"><PixelIcon name="users" /></span>
          <span class="wb-reading-card__content">
            <small>PART 04 · CH. 26—27</small>
            <strong>落到岗位与行业，组建 AI 团队</strong>
            <span>从通用能力出发，设计适合不同岗位和行业的工作流。</span>
            <em><b>团队落地</b><b>行业路线</b></em>
          </span>
          <PixelIcon name="arrow-right" class="wb-reading-card__arrow" />
        </a>
      </div>
    </section>

    <section class="wb-section wb-task-index" aria-labelledby="wb-task-index-title">
      <div class="wb-section__heading wb-section__heading--compact">
        <div>
          <p class="wb-pixel-label">START WITH A REAL TASK</p>
          <h2 id="wb-task-index-title">你现在想让 AI 帮你做什么？</h2>
        </div>
        <p>不必从头读。带着问题进来，先跑通一个能验收的结果。</p>
      </div>

      <div class="wb-task-grid">
        <a href="/bluebook/part2-cases/ch11-office/">
          <PixelIcon name="briefcase" /><strong>办公文档</strong><span>Word · Excel · PPT</span>
        </a>
        <a href="/bluebook/part2-cases/ch12-files/">
          <PixelIcon name="folder-open" /><strong>文件与远程</strong><span>整理 · 查找 · 执行</span>
        </a>
        <a href="/bluebook/part2-cases/ch15-news/">
          <PixelIcon name="newspaper" /><strong>资讯与知识</strong><span>收集 · 筛选 · 复用</span>
        </a>
        <a href="/bluebook/part2-cases/ch18-invest/">
          <PixelIcon name="chart-line" /><strong>专业分析</strong><span>投资 · 研究 · 诊断</span>
        </a>
        <a href="/bluebook/part2-cases/ch19-video/">
          <PixelIcon name="video-camera" /><strong>内容生产</strong><span>视频 · 自媒体 · GEO</span>
        </a>
        <a href="/bluebook/part3-advanced/ch24-multi-agent/">
          <PixelIcon name="robot" /><strong>AI 工作系统</strong><span>Skill · Agent · 自动化</span>
        </a>
      </div>
    </section>

    <section class="wb-section wb-system" aria-labelledby="wb-system-title">
      <div class="wb-system__intro">
        <p class="wb-pixel-label">FROM TASK TO TEAM</p>
        <h2 id="wb-system-title">一次成功，不该只发生一次。</h2>
        <p>航海图真正关心的不是“AI 会什么”，而是如何把一个结果沉淀成稳定、可协作、可复用的工作系统。</p>
      </div>
      <ol class="wb-system__steps">
        <li><b>01</b><strong>TASK</strong><span>完成一个真实任务</span></li>
        <li><b>02</b><strong>CASE</strong><span>复盘成可复现案例</span></li>
        <li><b>03</b><strong>WORKFLOW</strong><span>沉淀 Skill 与自动化</span></li>
        <li><b>04</b><strong>AI TEAM</strong><span>组合成协作团队</span></li>
      </ol>
    </section>

    <section class="wb-community" aria-labelledby="wb-community-title">
      <div>
        <p class="wb-pixel-label">BUILD IN PUBLIC · LEARN IN PUBLIC</p>
        <h2 id="wb-community-title">这本航海图，也可以由你继续画下去。</h2>
      </div>
      <div class="wb-community__actions">
        <a class="wb-button wb-button--acid" href="/contribute">参与共创</a>
        <a class="wb-button wb-button--dark-outline" href="https://github.com/mengxiangrui1211/workbuddy-hangtu">前往 GitHub</a>
      </div>
      <PixelIcon name="compass" class="wb-community__icon" />
    </section>
  </main>
</template>
