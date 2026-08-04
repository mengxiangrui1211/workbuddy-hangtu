---
difficulty: 2
time: 20
tags: [API, 外部集成]
scene: 接入外部 API 与数据
next: /bluebook/part1-getting-started/ch10-automation/
nextTitle: 自动化任务
---


# 第 9 章 如何接入外部 API

当现成连接器不够用时，你可以让 WorkBuddy 直接对接**任意外部 API**——比如你们公司的内部系统、第三方数据接口。

## 什么场景需要直接接 API

- 内部系统没有现成连接器。
- 需要调用带鉴权的私有接口。
- 想把 WorkBuddy 嵌进你自己的业务流程（Webhook 触发）。

## 三种接法

### 1. 通过 MCP 自定义连接器
写一个 MCP server 暴露你的接口，注册进 `mcp.json`，WorkBuddy 就能像用内置连接器一样调用它。适合**长期复用**。

### 2. 让 WorkBuddy 直接请求
对话里告诉它接口地址、参数、鉴权方式，它用 HTTP 请求帮你取数/写入。适合**一次性**调试。

```
帮我用 GET 请求这个接口取今日订单数：
https://api.example.com/orders/today
Header 里带 Authorization: Bearer <token>
把结果整理成一句话给我
```

### 3. Webhook 被动触发
把 WorkBuddy 暴露成一个可被打钩（webhook）的入口，外部事件来了自动跑任务。适合**事件驱动**自动化。

::: danger 密钥别写进对话明文
API Key / Token 不要直接贴在聊天里长期留存。优先用连接器配置或环境变量管理，必要时用完即清。
:::

::: tip 先小后大
第一次接 API，先用「只读 + 测试环境」验证连通性和字段，确认无误再放开写权限。
:::

下一章，把重复的事交给「自动化」。
