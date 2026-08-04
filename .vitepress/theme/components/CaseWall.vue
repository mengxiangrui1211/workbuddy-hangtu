<script setup>
import { cases, colorFor } from '../data/cases'
</script>

<template>
  <div class="hb-casewall">
    <component
      :is="c.link ? 'a' : 'div'"
      v-for="c in cases"
      :key="c.id"
      class="hb-case"
      :class="{ 'hb-case--example': c.example }"
      :href="c.link || undefined"
      :target="c.link ? '_blank' : undefined"
      rel="noopener"
    >
      <div
        class="hb-case-thumb"
        :style="
          c.image
            ? { backgroundImage: `url(${c.image})` }
            : { background: `linear-gradient(135deg, ${colorFor(c.scene)}33, ${colorFor(c.scene)}66)` }
        "
      >
        <img v-if="c.image" :src="c.image" :alt="c.title" loading="lazy" />
        <span v-else class="hb-case-scene" :style="{ color: colorFor(c.scene) }">{{ c.scene }}</span>
        <span v-if="c.example" class="hb-case-badge">示例</span>
      </div>

      <div class="hb-case-body">
        <div class="hb-case-meta">
          <span class="hb-case-tag" :style="{ background: colorFor(c.scene) + '22', color: colorFor(c.scene) }">
            {{ c.scene }}
          </span>
          <span v-if="c.chapter" class="hb-case-chapter">{{ c.chapter }}</span>
        </div>
        <h3 class="hb-case-title">{{ c.title }}</h3>
        <p v-if="c.summary" class="hb-case-summary">{{ c.summary }}</p>
        <div class="hb-case-foot">
          <span class="hb-case-author">@{{ c.author }}</span>
          <span v-if="c.date" class="hb-case-date">{{ c.date }}</span>
        </div>
      </div>
    </component>
  </div>
</template>

<style scoped>
.hb-casewall {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(260px, 1fr));
  gap: 18px;
  margin: 28px 0 8px;
}
.hb-case {
  display: flex;
  flex-direction: column;
  border: 1px solid var(--vp-c-divider);
  border-radius: 14px;
  overflow: hidden;
  background: var(--vp-c-bg-soft);
  text-decoration: none;
  color: inherit;
  transition: transform 0.18s ease, box-shadow 0.18s ease, border-color 0.18s ease;
}
.hb-case:hover {
  transform: translateY(-3px);
  box-shadow: 0 10px 30px rgba(14, 165, 233, 0.18);
  border-color: var(--vp-c-brand-1);
}
.hb-case--example {
  border-style: dashed;
  opacity: 0.92;
}
.hb-case-thumb {
  position: relative;
  aspect-ratio: 16 / 10;
  background-size: cover;
  background-position: center;
  display: flex;
  align-items: center;
  justify-content: center;
}
.hb-case-thumb img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
.hb-case-scene {
  font-size: 22px;
  font-weight: 700;
  letter-spacing: 1px;
}
.hb-case-badge {
  position: absolute;
  top: 8px;
  right: 8px;
  font-size: 11px;
  padding: 1px 8px;
  border-radius: 999px;
  background: rgba(100, 116, 139, 0.85);
  color: #fff;
}
.hb-case-body {
  padding: 14px 16px 16px;
  display: flex;
  flex-direction: column;
  gap: 8px;
  flex: 1;
}
.hb-case-meta {
  display: flex;
  align-items: center;
  gap: 8px;
  flex-wrap: wrap;
}
.hb-case-tag {
  font-size: 12px;
  padding: 1px 9px;
  border-radius: 999px;
  font-weight: 600;
}
.hb-case-chapter {
  font-size: 12px;
  color: var(--vp-c-text-2);
}
.hb-case-title {
  font-size: 15.5px;
  line-height: 1.45;
  margin: 0;
  font-weight: 700;
}
.hb-case-summary {
  font-size: 13px;
  line-height: 1.6;
  color: var(--vp-c-text-2);
  margin: 0;
  flex: 1;
}
.hb-case-foot {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 4px;
  font-size: 12px;
  color: var(--vp-c-text-3);
}
.hb-case-author {
  font-weight: 600;
  color: var(--vp-c-brand-1);
}
</style>
