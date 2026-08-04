// 给 27 个章节 index.md 头部追加 frontmatter 元数据（难度 / 用时 / 标签 / 场景 / 下一站）。
// 数据来自 .vitepress/theme/route-data.mjs（单一数据源）。幂等：已含 frontmatter 则跳过。
// 用法：node scripts/inject-frontmatter.mjs
import { readFileSync, writeFileSync } from 'node:fs'
import { fileURLToPath } from 'node:url'
import { dirname, resolve } from 'node:path'

const __dirname = dirname(fileURLToPath(import.meta.url))
const root = resolve(__dirname, '..')
const { chapters } = await import('../.vitepress/theme/route-data.mjs')

let done = 0
let skipped = 0

for (const c of chapters) {
  const fpath = resolve(root, c.file)
  let content = readFileSync(fpath, 'utf8')
  // 幂等：若已有头部 frontmatter，先剥掉再重写（保证 next 链接等字段最新）
  if (content.startsWith('---\n')) {
    const end = content.indexOf('\n---\n')
    if (end !== -1) {
      content = content.slice(end + 5)
    } else {
      skipped++
      continue
    }
  }
  const tags = '[' + c.tags.join(', ') + ']'
  const fm = [
    '---',
    `difficulty: ${c.difficulty}`,
    `time: ${c.time}`,
    `tags: ${tags}`,
    `scene: ${c.scene}`,
    `next: ${c.next}`,
    `nextTitle: ${c.nextTitle}`,
    '---',
    ''
  ].join('\n')
  writeFileSync(fpath, fm + '\n' + content, 'utf8')
  done++
  console.log(`+ frontmatter -> ${c.file}`)
}

console.log(`\n完成：新增 ${done} 个，跳过(已存在) ${skipped} 个，共 ${chapters.length} 章。`)
