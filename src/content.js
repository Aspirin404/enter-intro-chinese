/**
 * ╔══════════════════════════════════════════════════════════╗
 * ║          Enter.pro 内容数据层  —  src/content.js          ║
 * ╠══════════════════════════════════════════════════════════╣
 * ║  所有幻灯片的文字、链接、列表数据都在这里。                   ║
 * ║  要改内容 → 只需修改这个文件，不用碰任何 HTML。              ║
 * ║  要改布局 → 去 src/slides.js 修改模板函数。                 ║
 * ║  要改颜色 → 去 styles/tokens.css 修改 CSS 变量。            ║
 * ╚══════════════════════════════════════════════════════════╝
 */

window.EnterContent = {

  /* ──────────────────────────────────────────────
     全局品牌信息（多个 slide 共用）
  ────────────────────────────────────────────── */
  brand: {
    name:   'Enter.pro',
    slogan: 'Just press Enter, ship like a pro.',
    year:   2026,
    links: {
      website: { url: 'https://enter.pro',              icon: '🌐', label: 'enter.pro' },
      forum:   { url: 'https://forum.enter.pro',        icon: '💬', label: 'forum.enter.pro' },
      discord: { url: 'https://discord.gg/BCyR5hXw',   icon: '🎮', label: 'discord.gg/BCyR5hXw' },
      twitter: { url: 'https://x.com/Enter_AI_pro',    icon: '🐦', label: '@Enter_AI_pro' },
      youtube: { url: 'https://youtube.com/@EnterProAI',icon: '▶',  label: '@EnterProAI' },
      blog:    { url: 'https://enter.pro/blog',         icon: '📝', label: 'enter.pro/blog' },
      support: { url: 'mailto:support@enter.pro',       icon: '📧', label: 'support@enter.pro' },
    },
  },

  /* ──────────────────────────────────────────────
     SLIDE 01 — 封面
  ────────────────────────────────────────────── */
  cover: {
    label:    'Product Guide · 2026',
    subtitle: '产品使用手册及技巧',
    meta:     ['enter.pro', 'AI 协作共创平台', '从想法到产品，一键直达'],
  },

  /* ──────────────────────────────────────────────
     SLIDE 02 — Enter 是什么
  ────────────────────────────────────────────── */
  what: {
    chapter: 'Chapter 01',
    title:   'Enter<span style="color:var(--red)">.</span>pro<br>是什么？',
    intro:   'Enter 是一款主打 <strong>AI 协作共创</strong> 的通用网站 / 应用构建平台，通过对话即可完成从 <strong>想法 → 原型 → 完整产品</strong> 的全流程开发。',
    // links 从 brand.links 自动生成，不需要在这里重复定义
    linkKeys: ['website', 'forum', 'discord', 'twitter', 'youtube'], // 控制显示哪些链接
  },

  /* ──────────────────────────────────────────────
     SLIDE 03 — 目标受众与理念
  ────────────────────────────────────────────── */
  audience: {
    chapter: 'Chapter 02',
    title:   '目标受众<br>与理念',
    tagline: 'AI 不是减少创意，<br>而是解放创意、帮助表达。',
    items: [
      {
        num:   1,
        title: '零门槛创意表达',
        body:  '对 AI 辅助编程感兴趣，<span class="acc">不被编程经验门槛约束</span>，大胆尽情表达创意，追求做出高质量网站 / 应用。',
      },
      {
        num:   2,
        title: 'AI 与创作者的协作关系',
        body:  '持续探索 AI 在应用开发的智能应用，研究 AI 与创作者的协作关系。<span class="acc">AI 不是替代创意，而是解放创意。</span>',
      },
      {
        num:   3,
        title: '从想法到完整产品',
        body:  '支持从 <span class="acc">想法 → 原型 → 完整产品</span> 的全流程开发，让每个人都能快速将创意变成可上线的真实产品。',
      },
    ],
  },

  /* ──────────────────────────────────────────────
     SLIDE 04 — 如何快速创作
  ────────────────────────────────────────────── */
  quickstart: {
    chapter: 'Chapter 03',
    title:   '如何快速创作？',
    steps: [
      {
        num:   'STEP 01',
        icon:  '💡',
        title: '输入想法',
        body:  '在输入框中描述你想要创建的网站或应用。没有想法？试试 "Good Luck" 按钮体验随机 Prompt。',
        tag:   '可上传图片 / 文本 / 视频 / 代码',
        dark:  false,
      },
      {
        num:   'STEP 02',
        icon:  '🗂',
        title: '开启 Plan Mode',
        body:  'AI 先规划项目结构，生成结构化 Project Plan，由你确认后再开始编写代码。',
        tag:   '推荐开启，节省积分',
        dark:  true,
      },
      {
        num:   'STEP 03',
        icon:  '🔄',
        title: '对话迭代',
        body:  '在左侧对话框与 AI 持续对话，不断优化你的产品。遇到问题可上传截图或 F12 报错直接甩给 AI。',
        tag:   '截图 + F12 报错是 Debug 利器',
        dark:  false,
      },
      {
        num:   'STEP 04',
        icon:  '🚀',
        title: '发布上线',
        body:  '点击右上角 "Publish"，项目即刻发布上线，获得可直接分享的公开链接。',
        tag:   '一键发布，即时可达',
        dark:  false,
      },
    ],
  },

  /* ──────────────────────────────────────────────
     SLIDE 05 — 三种创作模式
  ────────────────────────────────────────────── */
  modes: {
    chapter: 'Chapter 04',
    title:   '三种<br>创作模式',
    note:    '无论哪种模式，Enter 都支持<span style="color:var(--red);font-weight:700;">实时预览</span>，右侧窗口即时呈现效果。',
    items: [
      {
        icon:     '💬',
        title:    '对话模式',
        body:     '在左侧对话面板通过自然语言与 AI 对话，描述想要的功能或修改，AI 自动生成代码。',
        example:  '"Add a dark mode toggle" · "Change color scheme to blue"',
        featured: true,
      },
      {
        icon:     '👆',
        title:    'Visual Edit 模式',
        body:     '在右侧预览窗口点击 Visual Edit 按钮（小箭头），选中任意区域，直接可视化调整。无需写代码。',
        featured: false,
      },
      {
        icon:     '👨‍💻',
        title:    '代码模式',
        body:     '点击上方 Code 按钮切换代码模式，直接在代码编辑器中查找、查看、修改代码，适合有技术背景的用户。',
        featured: false,
      },
    ],
  },

  /* ──────────────────────────────────────────────
     SLIDE 06 — Plan Mode
  ────────────────────────────────────────────── */
  planMode: {
    chapter: 'Chapter 05',
    badge:   '核心功能',
    title:   'Plan<br>Mode',
    intro:   'Plan Mode 是 Enter 的核心功能之一，作为你的<strong>产品经理和架构师</strong>，在写代码前帮你规划整个项目。',
    features: [
      {
        icon:  '🔍',
        title: '只读代码，不修改',
        body:  '在此模式下 Enter 不会写代码，只专注于需求理解和逻辑规划，确保方向正确。',
      },
      {
        icon:  '🤝',
        title: '确认需求范围',
        body:  '若需求不明确，Enter 会主动与你确认细节，避免方向跑偏，确保理解准确。',
      },
      {
        icon:  '📋',
        title: '生成结构化执行计划',
        body:  '你会收到包含目标、范围、实现方式的执行链。<strong>仅获得你的确认后</strong>，才真正开始写代码。',
      },
    ],
    tip: '💡 <strong>使用技巧：</strong>开启 Plan Mode 可显著减少积分消耗，是最高效的创作方式。还支持结构化 Q&A 让你点击确认，计划可 Git 追踪和回滚。',
  },

  /* ──────────────────────────────────────────────
     SLIDE 07 — Enter MaaS
  ────────────────────────────────────────────── */
  maas: {
    chapter:  'Chapter 06',
    title:    'Enter <span class="acc">MaaS</span>',
    badge:    'AI All 升级',
    subtitle: 'Model as a Service — 无需任何 API 密钥',
    intro:    'AI All 升级为 Enter MaaS，成为项目内独立模块，更清晰、更强大，<strong style="color:#fff;">并可在 Enter 外部使用。</strong>',
    newFeatures: [
      {
        icon:  '🎯',
        title: '专属 MaaS 面板',
        body:  '从 Settings 升级为顶层独立模块，每个模型的能力、价格、成功率一目了然',
      },
      {
        icon:  '💰',
        title: '透明 Token 定价',
        body:  '每百万 Token 的输入/输出价格在调用前完全可见，无任何隐性收费',
      },
      {
        icon:   '🔑',
        title:  '外部 API 访问（新）',
        body:   'Enter API Key 现可在任何项目、工具中使用，模型能力随身携带',
        isNew:  true,
      },
    ],
    modelGroups: [
      {
        label: '🧠 大语言模型 LLM',
        models: [
          { name: 'GPT-5.4 Pro',       desc: '强推理 / 编码', hot: true },
          { name: 'Claude Sonnet 4.5', desc: '长文 / 分析' },
          { name: 'Gemini 3.1 Pro',    desc: '多模态' },
          { name: 'Grok 3.5',          desc: '实时信息' },
        ],
      },
      {
        label: '🖼 图像生成 Image',
        models: [
          { name: 'FLUX Kontext Pro', desc: '角色一致性', hot: true },
          { name: 'GPT-Image-1',      desc: '理解 + 生成' },
          { name: 'Stable Diffusion', desc: '开源经典' },
        ],
      },
    ],
  },

  /* ──────────────────────────────────────────────
     SLIDE 08 — Skills & MCP
  ────────────────────────────────────────────── */
  skills: {
    chapter: 'Chapter 07',
    title:   'Skills &amp; MCP — 让 Agent 更强',
    enterSkills: {
      title: 'Enter Skills',
      intro: 'Skills 是能力包，让 Agent 从通才变成专家。开启 Skill，Agent 就掌握了该领域的知识和操作流程。',
      items: [
        { icon: '🏢', title: '官方 Skills',   body: 'Enter 团队维护，覆盖错误检测、依赖安装、CRUD API、Stripe 接入等高频场景' },
        { icon: '🌍', title: '社区 Skills',   body: '从 GitHub / agentskills.io 等平台通过 URL 直接导入' },
        { icon: '🛠', title: '自定义 Skills', body: '在对话中描述需求让 Agent 生成，或导入 GitHub 仓库，或上传 .skill 文件' },
      ],
    },
    mcp: {
      title: 'MCP 集成',
      intro: 'MCP（Model Context Protocol）让 Agent 直接调用外部服务，一段 JSON 配置即可接入任意工具。',
      steps: [
        '在 Agent Panel → MCPs 中点击 "Add MCP"',
        '粘贴 MCP Server 的 JSON 配置（url 方式）',
        '点击 Connect，Agent 即可直接调用外部工具',
      ],
      chips: ['Notion', 'Supabase', 'Context7', '任意 HTTP MCP'],
      note:  '⚠️ Enter 仅支持 <span>url 方式</span>（Streamable HTTP / SSE），暂不支持 stdio 本地进程方式。',
    },
  },

  /* ──────────────────────────────────────────────
     SLIDE 09 — Enter Cloud
  ────────────────────────────────────────────── */
  cloud: {
    chapter: 'Chapter 08',
    title:   'Enter<br><span class="acc">Cloud</span>',
    badge:   '全新发布',
    intro:   '内置后端服务，无需注册外部账号，无需切换标签页。一键启用，立即构建全栈应用。',
    enableTip: {
      title: '🚀 零配置启用',
      body:  '在项目右侧找到 Cloud → Enable，或直接告诉 Agent "我需要数据库"，自动完成配置',
    },
    servicesTitle: '五大内置服务',
    servicesSubtitle: '数据库 · 函数 · 存储 · 密钥 · 认证 — 全在一处',
    services: [
      { icon: '🗄', title: 'Database',       body: '托管 PostgreSQL，可视化编辑表数据、配置 RLS 策略' },
      { icon: '⚡', title: 'Functions',      body: 'Edge Functions 边缘函数，查看代码、日志和调用指标' },
      { icon: '📦', title: 'Storage',        body: '对象存储，Bucket 管理，图片直接预览' },
      { icon: '🔐', title: 'Secrets',        body: '安全管理环境变量和 API Key，值默认加密隐藏' },
      { icon: '👤', title: 'Authentication', body: '用户管理 + 登录配置，邮箱认证开箱即用' },
    ],
    freeBanner: '发布期间完全免费 — 无需额外费用，现在开启即可使用全部五项服务',
    agentTip:   'Agent 深度整合：<span>"创建 users 表"</span> · <span>"查询最近7天订单"</span> · <span>"写一个发邮件的 Edge Function"</span>',
  },

  /* ──────────────────────────────────────────────
     SLIDE 10 — 集成能力
  ────────────────────────────────────────────── */
  integrations: {
    chapter: 'Chapter 09',
    title:   '集成能力：GitHub · Supabase · Stripe',
    cards: [
      {
        icon:  '🐙',
        title: 'GitHub<br>双向同步',
        desc:  '提供完整的 GitHub 集成，代码双向流动，工程师协作无缝衔接。连接一次，永久受益。',
        steps: [
          'Dashboard → New Chat → <strong>Import from GitHub</strong>',
          '通过 OAuth 授权 GitHub 账号',
          '选择 Repo 和分支，双向同步立即开始',
          '代码变更自动同步，版本历史完整保留',
        ],
        chips:   ['导入仓库', '双向同步', '版本保护', '团队协作'],
        accent:  true,
      },
      {
        icon:  '🗄',
        title: 'Supabase<br>后端集成',
        desc:  '一键连接 Supabase，为应用添加完整后端能力，告别手动搭建服务器。',
        list:  [
          'PostgreSQL 数据库 + 自动生成 RESTful API',
          '用户注册 / 登录 Auth 开箱即用',
          '文件存储 Storage + Edge Functions',
        ],
        chips:   ['数据库', 'Auth 认证', 'Edge Functions'],
        accent:  false,
      },
      {
        icon:  '💳',
        title: 'Stripe<br>商业化集成',
        desc:  '一键接入 Stripe 支付，让你的应用快速实现商业化变现，坐上商业化快车。',
        list:  [
          '支持一次性付款 / 订阅制两种模式',
          '无需自建支付后端，Enter 自动配置',
          '全球主流信用卡与本地支付方式',
        ],
        chips:   ['在线支付', '订阅管理', '快速商业化'],
        accent:  false,
      },
    ],
  },

  /* ──────────────────────────────────────────────
     SLIDE 11 — 模板 & 模型
  ────────────────────────────────────────────── */
  templates: {
    chapter:         'Chapter 10',
    title:           '模板系统 &amp;<br>模型选择',
    templateDesc:    '丰富的免费社区模板，帮助你快速启动项目，覆盖主流应用类型。',
    templateTags:    ['Landing Page', 'Portfolio', 'Forum', 'EDM', 'Blog', 'Dashboard', 'AI App', 'Platform', 'Core Page'],
    templateTagsRed: ['Landing Page'], // 高亮显示为红色的 tag
    modelsTitle:     '业内最先进模型，随意切换',
    modelGroups: [
      {
        models: [
          { name: 'Claude 4.5 Opus',   width: '96%',              type: '推理' },
          { name: 'Claude 4.5 Sonnet', width: '85%',              type: '写作' },
        ],
      },
      {
        models: [
          { name: 'Gemini 3.1 Pro',   width: '88%', color: '#333', type: '多模态' },
          { name: 'Gemini 3.1 Flash', width: '72%', color: '#333', type: '快速' },
        ],
      },
      {
        models: [
          { name: 'GPT-5.4 Pro', width: '92%', color: '#555', type: '逻辑' },
          { name: 'GPT-5.2 Pro', width: '80%', color: '#555', type: '规划' },
        ],
      },
    ],
  },

  /* ──────────────────────────────────────────────
     SLIDE 12 — 积分与会员
  ────────────────────────────────────────────── */
  credits: {
    chapter: 'Chapter 11',
    title:   '积分与<br>会员',
    freeCredits: [
      { icon: '🎁', title: '新用户注册',   desc: '赠送 100 免费积分' },
      { icon: '📅', title: '每日登录',     desc: '额外获得 100 积分' },
      { icon: '👥', title: '邀请好友注册', desc: '每次邀请获得 100 积分' },
    ],
    balance: {
      hint:   '当前积分余额',
      amount: '100+',
      unit:   'Credits — 点击 "Credits" 查看详细消耗记录',
    },
    plan: {
      icon:  '👑',
      title: '会员订阅计划',
      body:  'Enter 正在推出会员订阅计划，敬请期待！',
    },
  },

  /* ──────────────────────────────────────────────
     SLIDE 13 — 使用技巧
  ────────────────────────────────────────────── */
  tips: {
    chapter: 'Chapter 12',
    title:   '使用技巧 — 更少积分，更多构建',
    cards: [
      {
        icon:    '🗂',
        title:   '优先用 Plan Mode',
        body:    '在开始编码前用 Plan Mode 规划项目结构和功能，可显著减少积分消耗，避免因理解偏差导致的反复修改，是复杂项目的首选工作流。',
        tag:     '节省积分首选',
        accent:  true,
      },
      {
        icon:  '🎯',
        title: '具体描述需求',
        body:  '向 AI 提供详细、具体的需求描述，包括目标用户、功能边界和视觉风格参考，能获得更准确的结果，大幅减少来回修改次数。',
      },
      {
        icon:  '📋',
        title: '善用模板起步',
        body:  '从社区模板开始可以节省大量时间，先跑通基础框架，再根据需求进行个性化定制，比从零开始效率高 3-5 倍。',
      },
      {
        icon:  '🔗',
        title: '连 GitHub 做版本控制',
        body:  '连接 GitHub 进行版本控制，保护代码安全，方便团队协作和代码回滚，也让项目可以随时导入其他平台继续迭代。',
      },
      {
        icon:  '🤖',
        title: '选对模型省积分',
        body:  '复杂任务用 Claude Opus，日常开发用 Claude Sonnet，快速原型验证用 Gemini Flash 最省积分。',
      },
      {
        icon:  '📸',
        title: '截图 + F12 Debug',
        body:  '遇到 UI 问题直接截图发给 AI；遇到代码报错打开 F12 控制台，把错误信息完整贴给 AI，命中率最高。',
      },
    ],
    bottomBar: {
      text:    '💡 <strong>核心节奏：</strong>开始前用 Plan Mode 规划，编码时具体描述需求，卡住时上传截图 + F12 错误信息 — 这是高效 vibe coding 的三步心法。',
      linkText: '查看更多技巧 →',
      linkUrl:  'https://blog.enter.pro',
    },
  },

  /* ──────────────────────────────────────────────
     SLIDE 14 — 联系我们
  ────────────────────────────────────────────── */
  contact: {
    sectionLabel: 'Get In Touch',
    title:        '联系<br><span class="acc">Enter</span>',
    tagline:      '有问题？有想法？<br>我们在这里。',
    ctaText:      '立即开始创作',
    ctaUrl:       'https://enter.pro',
    contactsTitle: '联系方式',
    contacts: [
      { icon: '🌐', label: '官网',      value: 'enter.pro',                     url: 'https://enter.pro' },
      { icon: '📝', label: '博客 / 论坛', value: 'enter.pro/blog · forum.enter.pro', url: 'https://enter.pro/blog' },
      { icon: '🎮', label: 'Discord 社区', value: 'discord.gg/BCyR5hXw',          url: 'https://discord.gg/BCyR5hXw' },
      { icon: '📧', label: '邮箱支持',  value: 'support@enter.pro',             url: 'mailto:support@enter.pro' },
    ],
    wechatNote: '💬 中国大陆用户可加入 <span>Enter.pro 官方微信群</span>，扫码入群交流。',
  },

}; // end window.EnterContent
