import { defineConfig } from 'vitepress'

export default defineConfig({
  title: 'WorkBuddy 航海图',
  titleTemplate: ':title · 从 0 到一支 AI 舰队',
  description: 'WorkBuddy 从零到精通原创实战教程：安装上手、真实案例、进阶 Skill 与多 Agent、岗位与行业落地。',
  lang: 'zh-CN',
  head: [
    ['link', { rel: 'icon', href: '/logo.svg', type: 'image/svg+xml' }]
  ],
  lastUpdated: true,
  cleanUrls: true,
  ignoreDeadLinks: true,
  appearance: 'dark',
  themeConfig: {
    logo: '/logo.svg',
    nav: [
      { text: '航海图首页', link: '/' },
      { text: '航线图 · 难度地图', link: '/difficulty-map' },
      { text: '第一篇 · 使用手册', link: '/bluebook/part1-getting-started/' },
      { text: '第二篇 · 案例篇', link: '/bluebook/part2-cases/' },
      { text: '第三篇 · 进阶篇', link: '/bluebook/part3-advanced/' },
      { text: '第四篇 · 岗位与行业', link: '/bluebook/part4-roles/' },
      { text: '阅读指南', link: '/reading-guide' },
      { text: '官方文档', link: 'https://www.workbuddy.cn/docs/workbuddy/Overview', target: '_blank' }
    ],
    sidebar: [
      {
        text: '开始之前',
        items: [
          { text: '航线图 · 难度地图', link: '/difficulty-map' },
          { text: '如何阅读这本航海图', link: '/reading-guide' }
        ]
      },
      {
        text: '第一篇 · 使用手册：先把 WorkBuddy 用起来',
        collapsed: false,
        items: [
          { text: '本篇导览', link: '/bluebook/part1-getting-started/' },
          { text: '第 1 章 初识 WorkBuddy', link: '/bluebook/part1-getting-started/ch01-intro/' },
          { text: '第 2 章 下载、安装、登录与更新', link: '/bluebook/part1-getting-started/ch02-install/' },
          { text: '第 3 章 主界面、任务与工作区', link: '/bluebook/part1-getting-started/ch03-interface/' },
          { text: '第 4 章 快速完成第一个任务', link: '/bluebook/part1-getting-started/ch04-first-task/' },
          { text: '第 5 章 加载一个真正用得上的 Skill', link: '/bluebook/part1-getting-started/ch05-skill/' },
          { text: '第 6 章 专家和专家团', link: '/bluebook/part1-getting-started/ch06-experts/' },
          { text: '第 7 章 使用连接器', link: '/bluebook/part1-getting-started/ch07-connector/' },
          { text: '第 8 章 接入小程序与 IM 助理', link: '/bluebook/part1-getting-started/ch08-im/' },
          { text: '第 9 章 如何接入外部 API', link: '/bluebook/part1-getting-started/ch09-api/' },
          { text: '第 10 章 自动化任务', link: '/bluebook/part1-getting-started/ch10-automation/' },
          { text: '课外补给：一章看懂 AI 工作系统', link: '/bluebook/part1-getting-started/extra-ai-work-system/' }
        ]
      },
      {
        text: '第二篇 · 案例篇：从一项任务到一支 AI 团队',
        collapsed: true,
        items: [
          { text: '本篇导览', link: '/bluebook/part2-cases/' },
          { text: '第 11 章 办公三件套：Word、Excel、PPT', link: '/bluebook/part2-cases/ch11-office/' },
          { text: '第 12 章 从整理桌面文件这些小事做起', link: '/bluebook/part2-cases/ch12-files/' },
          { text: '第 13 章 远程控制你的电脑', link: '/bluebook/part2-cases/ch13-remote/' },
          { text: '第 14 章 生活助手：减少琐碎', link: '/bluebook/part2-cases/ch14-life/' },
          { text: '第 15 章 资讯整合：把信息流变成每日通知', link: '/bluebook/part2-cases/ch15-news/' },
          { text: '第 16 章 收藏不是知识管理', link: '/bluebook/part2-cases/ch16-knowledge/' },
          { text: '第 17 章 会议结束不是终点', link: '/bluebook/part2-cases/ch17-meeting/' },
          { text: '第 18 章 把投资分析变成日常', link: '/bluebook/part2-cases/ch18-invest/' },
          { text: '第 19 章 一句话召唤 AI 视频团队', link: '/bluebook/part2-cases/ch19-video/' },
          { text: '第 20 章 自媒体增长闭环', link: '/bluebook/part2-cases/ch20-media/' },
          { text: '第 21 章 WorkBuddy 也能做 GEO 专家', link: '/bluebook/part2-cases/ch21-geo/' }
        ]
      },
      {
        text: '第三篇 · 进阶篇：把案例变成自己的工作系统',
        collapsed: true,
        items: [
          { text: '本篇导览', link: '/bluebook/part3-advanced/' },
          { text: '第 22 章 打造 Skill：把知识蒸馏为可执行能力', link: '/bluebook/part3-advanced/ch22-skill-building/' },
          { text: '第 23 章 实操案例集补充', link: '/bluebook/part3-advanced/ch23-cases-extra/' },
          { text: '第 24 章 如何进行多 Agent 系统设计', link: '/bluebook/part3-advanced/ch24-multi-agent/' },
          { text: '第 25 章 自动化工作流的可靠性', link: '/bluebook/part3-advanced/ch25-reliability/' }
        ]
      },
      {
        text: '第四篇 · 岗位与行业落地',
        collapsed: true,
        items: [
          { text: '本篇导览', link: '/bluebook/part4-roles/' },
          { text: '第 26 章 岗位路线图：把 WorkBuddy 用深', link: '/bluebook/part4-roles/ch26-roles/' },
          { text: '第 27 章 行业路线图：从通用到行业工作流', link: '/bluebook/part4-roles/ch27-industries/' }
        ]
      }
    ],
    outline: { label: '本页目录', level: [2, 3] },
    docFooter: { prev: '上一章', next: '下一章' },
    lastUpdated: { text: '最后更新' },
    search: { provider: 'local', options: { translations: { button: { buttonText: '搜索' }, modal: { noResultsText: '找不到结果', resetButtonTitle: '重置', footer: { selectText: '选择', navigateText: '切换' } } } } },
    socialLinks: [
      { icon: 'github', link: 'https://github.com/AlephAITech/WorkBuddyGuide' }
    ],
    returnToTopLabel: '回到顶部',
    sidebarMenuLabel: '菜单',
    darkModeSwitchLabel: '主题',
    lightModeSwitchTitle: '切换到亮色',
    darkModeSwitchTitle: '切换到暗色'
  }
})
