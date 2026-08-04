<script setup>
import { useData } from 'vitepress'
import { difficultyLabel, stars } from '../route-data.mjs'

const { frontmatter } = useData()
</script>

<template>
  <div v-if="frontmatter.difficulty" class="hb-chapter-meta">
    <div class="hb-meta-row">
      <span class="hb-meta-item">
        <span class="hb-meta-k">难度</span>
        <span class="hb-stars" :title="difficultyLabel[frontmatter.difficulty]">{{ stars(frontmatter.difficulty) }}</span>
        <span class="hb-meta-sub">{{ difficultyLabel[frontmatter.difficulty] }}</span>
      </span>
      <span class="hb-meta-item">
        <span class="hb-meta-k">预计</span>
        <b>{{ frontmatter.time || '—' }}</b> 分钟
      </span>
      <span class="hb-meta-item hb-meta-scene" v-if="frontmatter.scene">
        <span class="hb-meta-k">场景</span>
        {{ frontmatter.scene }}
      </span>
    </div>
    <div class="hb-meta-tags" v-if="frontmatter.tags && frontmatter.tags.length">
      <span class="hb-mtag" v-for="t in frontmatter.tags" :key="t">{{ t }}</span>
    </div>
  </div>
</template>
