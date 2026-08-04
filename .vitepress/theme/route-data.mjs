// ============================================================
// WorkBuddy 航海图 · 共享航线数据（单一数据源）
// 被以下三处共用：
//   1) 章节 frontmatter 注入脚本（scripts/inject-frontmatter.mjs）
//   2) ChapterMeta / ChapterReview 主题组件（读取页面 frontmatter）
//   3) RouteMap 难度地图组件（渲染整张航线图）
// 修改章节难度 / 用时 / 标签，只改这里即可。
// ============================================================

export const chapters = [
  // ---------- 第一篇 · 使用手册 ----------
  { part: '第一篇 · 使用手册', partFolder: 'part1-getting-started', slug: 'ch01-intro', num: 1, title: '初识 WorkBuddy', difficulty: 1, time: 8, tags: ['产品认知'], scene: '用一句话建立 WorkBuddy 的心智模型' },
  { part: '第一篇 · 使用手册', partFolder: 'part1-getting-started', slug: 'ch02-install', num: 2, title: '下载、安装、登录与更新', difficulty: 1, time: 10, tags: ['安装', '登录'], scene: '把它装到你的电脑并登录' },
  { part: '第一篇 · 使用手册', partFolder: 'part1-getting-started', slug: 'ch03-interface', num: 3, title: '主界面、任务与工作区', difficulty: 1, time: 12, tags: ['界面', '工作区'], scene: '熟悉主界面、任务区与工作区' },
  { part: '第一篇 · 使用手册', partFolder: 'part1-getting-started', slug: 'ch04-first-task', num: 4, title: '快速完成第一个任务', difficulty: 1, time: 15, tags: ['第一个任务'], scene: '跑通你的第一个真实任务' },
  { part: '第一篇 · 使用手册', partFolder: 'part1-getting-started', slug: 'ch05-skill', num: 5, title: '加载一个真正用得上的 Skill', difficulty: 1, time: 15, tags: ['Skill'], scene: '加载并调用一个 Skill' },
  { part: '第一篇 · 使用手册', partFolder: 'part1-getting-started', slug: 'ch06-experts', num: 6, title: '专家和专家团', difficulty: 1, time: 12, tags: ['专家'], scene: '用专家团解决专业问题' },
  { part: '第一篇 · 使用手册', partFolder: 'part1-getting-started', slug: 'ch07-connector', num: 7, title: '使用连接器', difficulty: 2, time: 18, tags: ['连接器'], scene: '接入第三方服务与数据' },
  { part: '第一篇 · 使用手册', partFolder: 'part1-getting-started', slug: 'ch08-im', num: 8, title: '接入小程序与 IM 助理', difficulty: 2, time: 15, tags: ['小程序', 'IM'], scene: '把 WorkBuddy 接到微信 / IM' },
  { part: '第一篇 · 使用手册', partFolder: 'part1-getting-started', slug: 'ch09-api', num: 9, title: '如何接入外部 API', difficulty: 2, time: 20, tags: ['API', '外部集成'], scene: '接入外部 API 与数据' },
  { part: '第一篇 · 使用手册', partFolder: 'part1-getting-started', slug: 'ch10-automation', num: 10, title: '自动化任务', difficulty: 2, time: 20, tags: ['自动化'], scene: '设一个定时自动化任务' },
  { part: '第一篇 · 使用手册', partFolder: 'part1-getting-started', slug: 'extra-ai-work-system', num: 0, title: '课外补给：一章看懂 AI 工作系统', difficulty: 2, time: 15, tags: ['方法论'], scene: '理解 TASK→CASE→WORKFLOW→TEAM' },

  // ---------- 第二篇 · 案例篇 ----------
  { part: '第二篇 · 案例篇', partFolder: 'part2-cases', slug: 'ch11-office', num: 11, title: '办公三件套：Word、Excel、PPT', difficulty: 1, time: 15, tags: ['办公', 'PPT', 'Excel'], scene: '一句话出文档 / 表格 / PPT' },
  { part: '第二篇 · 案例篇', partFolder: 'part2-cases', slug: 'ch12-files', num: 12, title: '从整理桌面文件这些小事做起', difficulty: 1, time: 12, tags: ['文件整理'], scene: '批量整理与重命名' },
  { part: '第二篇 · 案例篇', partFolder: 'part2-cases', slug: 'ch13-remote', num: 13, title: '远程控制你的电脑', difficulty: 2, time: 15, tags: ['远程控制'], scene: '远程操控你的电脑' },
  { part: '第二篇 · 案例篇', partFolder: 'part2-cases', slug: 'ch14-life', num: 14, title: '生活助手：减少琐碎', difficulty: 1, time: 12, tags: ['生活'], scene: '用 AI 打理生活琐事' },
  { part: '第二篇 · 案例篇', partFolder: 'part2-cases', slug: 'ch15-news', num: 15, title: '资讯整合：把信息流变成每日通知', difficulty: 2, time: 18, tags: ['资讯', '自动化'], scene: '把信息流变成每日通知' },
  { part: '第二篇 · 案例篇', partFolder: 'part2-cases', slug: 'ch16-knowledge', num: 16, title: '收藏不是知识管理', difficulty: 2, time: 15, tags: ['知识管理'], scene: '建可检索的知识库' },
  { part: '第二篇 · 案例篇', partFolder: 'part2-cases', slug: 'ch17-meeting', num: 17, title: '会议结束不是终点', difficulty: 2, time: 15, tags: ['会议'], scene: '会后自动出纪要 / 待办' },
  { part: '第二篇 · 案例篇', partFolder: 'part2-cases', slug: 'ch18-invest', num: 18, title: '把投资分析变成日常', difficulty: 3, time: 25, tags: ['投资', '分析'], scene: '例行化投资分析' },
  { part: '第二篇 · 案例篇', partFolder: 'part2-cases', slug: 'ch19-video', num: 19, title: '一句话召唤 AI 视频团队', difficulty: 2, time: 20, tags: ['视频'], scene: '用 AI 生成视频' },
  { part: '第二篇 · 案例篇', partFolder: 'part2-cases', slug: 'ch20-media', num: 20, title: '自媒体增长闭环', difficulty: 3, time: 25, tags: ['自媒体', '增长'], scene: '搭自媒体增长闭环' },
  { part: '第二篇 · 案例篇', partFolder: 'part2-cases', slug: 'ch21-geo', num: 21, title: 'WorkBuddy 也能做 GEO 专家', difficulty: 3, time: 20, tags: ['GEO', '搜索'], scene: '用 AI 做 GEO 优化' },

  // ---------- 第三篇 · 进阶篇 ----------
  { part: '第三篇 · 进阶篇', partFolder: 'part3-advanced', slug: 'ch22-skill-building', num: 22, title: '打造 Skill：把知识蒸馏为可执行能力', difficulty: 3, time: 30, tags: ['Skill 开发'], scene: '把知识蒸馏成 Skill' },
  { part: '第三篇 · 进阶篇', partFolder: 'part3-advanced', slug: 'ch23-cases-extra', num: 23, title: '实操案例集补充', difficulty: 2, time: 20, tags: ['案例'], scene: '进阶实操案例' },
  { part: '第三篇 · 进阶篇', partFolder: 'part3-advanced', slug: 'ch24-multi-agent', num: 24, title: '如何进行多 Agent 系统设计', difficulty: 3, time: 30, tags: ['多 Agent'], scene: '设计多 Agent 系统' },
  { part: '第三篇 · 进阶篇', partFolder: 'part3-advanced', slug: 'ch25-reliability', num: 25, title: '自动化工作流的可靠性', difficulty: 3, time: 25, tags: ['可靠性', '自动化'], scene: '让自动化稳定可靠' },

  // ---------- 第四篇 · 岗位与行业 ----------
  { part: '第四篇 · 岗位与行业', partFolder: 'part4-roles', slug: 'ch26-roles', num: 26, title: '岗位路线图：把 WorkBuddy 用深', difficulty: 2, time: 20, tags: ['岗位'], scene: '设计岗位级工作流' },
  { part: '第四篇 · 岗位与行业', partFolder: 'part4-roles', slug: 'ch27-industries', num: 27, title: '行业路线图：从通用到行业工作流', difficulty: 2, time: 20, tags: ['行业'], scene: '设计行业级工作流' }
]

// 第一遍：先算每章自身的 file / link
chapters.forEach((c) => {
  c.file = `bluebook/${c.partFolder}/${c.slug}/index.md`
  c.link = `/bluebook/${c.partFolder}/${c.slug}/`
})
// 第二遍：再算「下一站」（基于已就绪的 link，避免顺序引用未赋值字段）
chapters.forEach((c, i) => {
  const nxt = chapters[i + 1]
  c.next = nxt ? nxt.link : null
  c.nextTitle = nxt ? nxt.title : null
})

export const difficultyLabel = {
  1: '入门',
  2: '进阶',
  3: '深入'
}

export function stars(level) {
  return '★'.repeat(level) + '☆'.repeat(3 - level)
}
