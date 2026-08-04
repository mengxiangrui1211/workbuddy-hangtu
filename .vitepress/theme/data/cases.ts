export interface CaseItem {
  id: string
  title: string
  author: string
  scene: string
  summary?: string
  image?: string
  chapter?: string
  link?: string
  example?: boolean
  date?: string
}

// 案例墙数据。真实投稿到达后，在此数组追加条目即可（图片放 public/cases/，引用 /cases/xxx.png）。
// example: true 的条目为「投稿模板效果演示」，仅用于展示版式，不冒充真实投稿。
export const cases: CaseItem[] = [
  {
    id: 'eg-1',
    title: '用 WorkBuddy 把 30 份周报合并成一份季度汇总',
    author: '示例作者',
    scene: '办公文档',
    summary: 'prompt 写清楚「保留每个项目的进展 + 风险」，一次就对齐了格式。',
    chapter: '第 11 章 办公三件套',
    example: true,
    date: '2026-08-05'
  },
  {
    id: 'eg-2',
    title: '每天早上的资讯简报自动推到飞书',
    author: '示例作者',
    scene: '资讯整合',
    summary: '连接器 + 自动化，省掉我每天手动刷 5 个 App。',
    chapter: '第 15 章 资讯整合',
    example: true,
    date: '2026-08-05'
  }
]

// 场景 → 主题色（与品牌海蓝青一致）
export const sceneColor: Record<string, string> = {
  办公文档: '#0EA5E9',
  文件整理: '#14B8A6',
  投资分析: '#F59E0B',
  视频: '#A855F7',
  自媒体: '#EC4899',
  资讯整合: '#38BDF8',
  远程控制: '#22D3EE',
  知识管理: '#34D399',
  会议: '#FB923C',
  其他: '#64748B'
}

export function colorFor(scene: string): string {
  return sceneColor[scene] || '#64748B'
}
