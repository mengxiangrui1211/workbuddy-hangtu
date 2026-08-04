<script setup>
import { useData } from 'vitepress'

const { frontmatter } = useData()
</script>

<template>
  <div v-if="frontmatter.difficulty" class="hb-review">
    <div class="hb-review-head">⚓ 本章复盘 · 让这一次成功沉淀下来</div>
    <ul class="hb-review-list">
      <li>我跑通了本章任务，并对照文中的「验收标准」逐项确认。</li>
      <li>我把关键的提示词 / 配置 / 命令记进了自己的笔记或知识库。</li>
      <li>如果这类事会重复出现，我会考虑把它沉淀成 Skill 或自动化。</li>
    </ul>
    <div class="hb-review-foot">
      <a v-if="frontmatter.next" class="hb-review-next" :href="frontmatter.next">
        下一站 · {{ frontmatter.nextTitle }} →
      </a>
      <span v-else class="hb-review-done">🎉 你已走完整张航海图——去组你的 AI 舰队吧。</span>
    </div>
  </div>
</template>
