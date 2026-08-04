<script setup>
import { chapters, difficultyLabel, stars } from '../route-data.mjs'

// 数据静态，直接在前端/SSR 两侧算好，避免 computed / 解构在 SSR 下出问题
const parts = []
const index = new Map()
for (const c of chapters) {
  if (!index.has(c.part)) {
    index.set(c.part, parts.length)
    parts.push({ part: c.part, list: [] })
  }
  parts[index.get(c.part)].list.push(c)
}
const totalTime = chapters.reduce((s, c) => s + (c.time || 0), 0)
</script>

<template>
  <div class="hb-routemap">
    <!-- 图例 -->
    <div class="hb-rm-legend">
      <span class="hb-rm-legend-item"><span class="hb-stars">★☆☆</span> 入门 · 跟着做就能跑</span>
      <span class="hb-rm-legend-item"><span class="hb-stars">★★☆</span> 进阶 · 需要一点配置</span>
      <span class="hb-rm-legend-item"><span class="hb-stars">★★★</span> 深入 · 体系化 / 开发向</span>
      <span class="hb-rm-legend-item hb-rm-legend-time">⏱ 全程约 {{ totalTime }} 分钟</span>
    </div>

    <div class="hb-rm-part" v-for="p in parts" :key="p.part">
      <div class="hb-rm-part-head">{{ p.part }}</div>
      <div class="hb-rm-rows">
        <a class="hb-rm-row" v-for="c in p.list" :key="c.link" :href="c.link">
          <span class="hb-rm-num">{{ c.num === 0 ? '＋' : c.num }}</span>
          <span class="hb-rm-title">{{ c.title }}</span>
          <span class="hb-rm-stars" :title="difficultyLabel[c.difficulty]">{{ stars(c.difficulty) }}</span>
          <span class="hb-rm-time">{{ c.time }}′</span>
          <span class="hb-rm-tags">
            <span class="hb-rm-tag" v-for="t in c.tags" :key="t">{{ t }}</span>
          </span>
        </a>
      </div>
    </div>
  </div>
</template>
