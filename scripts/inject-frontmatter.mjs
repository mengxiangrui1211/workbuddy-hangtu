// 给 28 个章节 index.md 注入：
//   1) 头部 frontmatter 元数据（difficulty/time/tags/scene/next）
//   2) H1 之后的「元数据信息条」HTML（.hb-chapter-meta）
//   3) 文末的「本章复盘」HTML（.hb-review）
// 数据来自 .vitepress/theme/route-data.mjs（单一数据源）。
// 幂等：用 <!-- hb-meta / hb-review --> 标记包裹，重跑会先剥离再重写。
// 用法：node scripts/inject-frontmatter.mjs
import { readFileSync, writeFileSync } from 'node:fs'
import { fileURLToPath } from 'node:url'
import { dirname, resolve } from 'node:path'

const __dirname = dirname(fileURLToPath(import.meta.url))
const root = resolve(__dirname, '..')
const { chapters, difficultyLabel } = await import('../.vitepress/theme/route-data.mjs')

const stars = (d) => '★'.repeat(d) + '☆'.repeat(3 - d)

function stripMarkers(s) {
  // 去掉已存在的注入块（含标记与相邻空行）
  s = s.replace(/\n*<!-- hb-meta-start -->[\s\S]*?<!-- hb-meta-end -->\n*/g, '\n')
  s = s.replace(/\n*<!-- hb-review-start -->[\s\S]*?<!-- hb-review-end -->\n*/g, '\n')
  return s
}

function metaBlock(c) {
  const tags = c.tags.map((t) => `    <span class="hb-mtag">${t}</span>`).join('\n')
  return `<!-- hb-meta-start -->
<div class="hb-chapter-meta">
  <div class="hb-meta-row">
    <span class="hb-meta-item"><span class="hb-meta-k">难度</span> <span class="hb-stars" title="${difficultyLabel[c.difficulty]}">${stars(c.difficulty)}</span> <span class="hb-meta-sub">${difficultyLabel[c.difficulty]}</span></span>
    <span class="hb-meta-item"><span class="hb-meta-k">预计</span> <b>${c.time}</b> 分钟</span>
    <span class="hb-meta-item hb-meta-scene"><span class="hb-meta-k">场景</span> ${c.scene}</span>
  </div>
  <div class="hb-meta-tags">
${tags}
  </div>
</div>
<!-- hb-meta-end -->`
}

function reviewBlock(c) {
  const foot = c.next
    ? `    <a class="hb-review-next" href="${c.next}">下一站 · ${c.nextTitle} →</a>`
    : `    <span class="hb-review-done">🎉 你已走完整张航海图——去组你的 AI 舰队吧。</span>`
  return `<!-- hb-review-start -->
<div class="hb-review">
  <div class="hb-review-head">⚓ 本章复盘 · 让这一次成功沉淀下来</div>
  <ul class="hb-review-list">
    <li>我跑通了本章任务，并对照文中的「验收标准」逐项确认。</li>
    <li>我把关键的提示词 / 配置 / 命令记进了自己的笔记或知识库。</li>
    <li>如果这类事会重复出现，我会考虑把它沉淀成 Skill 或自动化。</li>
  </ul>
  <div class="hb-review-foot">
${foot}
  </div>
</div>
<!-- hb-review-end -->`
}

let done = 0
for (const c of chapters) {
  const fpath = resolve(root, c.file)
  let content = readFileSync(fpath, 'utf8')

  // 1) 剥离旧的 frontmatter（仅顶部）
  if (content.startsWith('---\n')) {
    const end = content.indexOf('\n---\n')
    if (end !== -1) content = content.slice(end + 5)
  }
  // 2) 剥离旧的注入块
  content = stripMarkers(content)

  // 3) 组装新的 frontmatter
  const tagsLine = '[' + c.tags.join(', ') + ']'
  const fm = [
    '---',
    `difficulty: ${c.difficulty}`,
    `time: ${c.time}`,
    `tags: ${tagsLine}`,
    `scene: ${c.scene}`,
    `next: ${c.next}`,
    `nextTitle: ${c.nextTitle}`,
    '---',
    ''
  ].join('\n')

  // 4) 在第一个 H1 之后插入元数据条
  const lines = content.split('\n')
  let h1Idx = lines.findIndex((l) => /^#\s/.test(l))
  if (h1Idx === -1) h1Idx = 0
  lines.splice(h1Idx + 1, 0, '', metaBlock(c), '')
  // 5) 文末追加复盘块
  lines.push('', reviewBlock(c), '')

  writeFileSync(fpath, fm + lines.join('\n'), 'utf8')
  done++
  console.log(`+ injected -> ${c.file}`)
}

console.log(`\n完成：共处理 ${done} 章。`)
