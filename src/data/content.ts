/**
 * Enter.pro content data layer — i18n
 * All slide text, links, and list data for zh/en.
 */

export type Locale = 'zh' | 'en';

export const brand = {
  name: 'Enter.pro',
  slogan: 'Just press Enter, ship like a pro.',
  year: 2026,
  links: {
    website: { url: 'https://enter.pro', icon: '\u{1F310}', label: 'enter.pro' },
    forum: { url: 'https://forum.enter.pro', icon: '\u{1F4AC}', label: 'forum.enter.pro' },
    discord: { url: 'https://discord.gg/BCyR5hXw', icon: '\u{1F3AE}', label: 'discord.gg/BCyR5hXw' },
    twitter: { url: 'https://x.com/Enter_AI_pro', icon: '\u{1F426}', label: '@Enter_AI_pro' },
    youtube: { url: 'https://youtube.com/@EnterProAI', icon: '\u25B6', label: '@EnterProAI' },
    blog: { url: 'https://enter.pro/blog', icon: '\u{1F4DD}', label: 'enter.pro/blog' },
    support: { url: 'mailto:support@enter.pro', icon: '\u{1F4E7}', label: 'support@enter.pro' },
  } as Record<string, { url: string; icon: string; label: string }>,
};

const zh = {
  cover: {
    label: 'Product Guide \u00B7 2026',
    subtitle: '\u4EA7\u54C1\u4F7F\u7528\u624B\u518C\u53CA\u6280\u5DE7',
    meta: ['enter.pro', 'AI \u534F\u4F5C\u5171\u521B\u5E73\u53F0', '\u4ECE\u60F3\u6CD5\u5230\u4EA7\u54C1\uFF0C\u4E00\u952E\u76F4\u8FBE'],
  },
  what: {
    chapter: 'Chapter 01',
    title: 'Enter<span style="color:var(--red)">.</span>pro<br>\u662F\u4EC0\u4E48\uFF1F',
    introLabel: '\u4E00\u53E5\u8BDD\u4ECB\u7ECD',
    intro: 'Enter \u662F\u4E00\u6B3E\u4E3B\u6253 <strong>AI \u534F\u4F5C\u5171\u521B</strong> \u7684\u901A\u7528\u7F51\u7AD9 / \u5E94\u7528\u6784\u5EFA\u5E73\u53F0\uFF0C\u901A\u8FC7\u5BF9\u8BDD\u5373\u53EF\u5B8C\u6210\u4ECE <strong>\u60F3\u6CD5 \u2192 \u539F\u578B \u2192 \u5B8C\u6574\u4EA7\u54C1</strong> \u7684\u5168\u6D41\u7A0B\u5F00\u53D1\u3002',
    linkKeys: ['website', 'forum', 'discord', 'twitter', 'youtube'],
  },
  audience: {
    chapter: 'Chapter 02',
    title: '\u76EE\u6807\u53D7\u4F17<br>\u4E0E\u7406\u5FF5',
    tagline: 'AI \u4E0D\u662F\u51CF\u5C11\u521B\u610F\uFF0C<br>\u800C\u662F\u89E3\u653E\u521B\u610F\u3001\u5E2E\u52A9\u8868\u8FBE\u3002',
    items: [
      { num: 1, title: '\u96F6\u95E8\u69DB\u521B\u610F\u8868\u8FBE', body: '\u5BF9 AI \u8F85\u52A9\u7F16\u7A0B\u611F\u5174\u8DA3\uFF0C<span class="acc">\u4E0D\u88AB\u7F16\u7A0B\u7ECF\u9A8C\u95E8\u69DB\u7EA6\u675F</span>\uFF0C\u5927\u80C6\u5C3D\u60C5\u8868\u8FBE\u521B\u610F\uFF0C\u8FFD\u6C42\u505A\u51FA\u9AD8\u8D28\u91CF\u7F51\u7AD9 / \u5E94\u7528\u3002' },
      { num: 2, title: 'AI \u4E0E\u521B\u4F5C\u8005\u7684\u534F\u4F5C\u5173\u7CFB', body: '\u6301\u7EED\u63A2\u7D22 AI \u5728\u5E94\u7528\u5F00\u53D1\u7684\u667A\u80FD\u5E94\u7528\uFF0C\u7814\u7A76 AI \u4E0E\u521B\u4F5C\u8005\u7684\u534F\u4F5C\u5173\u7CFB\u3002<span class="acc">AI \u4E0D\u662F\u66FF\u4EE3\u521B\u610F\uFF0C\u800C\u662F\u89E3\u653E\u521B\u610F\u3002</span>' },
      { num: 3, title: '\u4ECE\u60F3\u6CD5\u5230\u5B8C\u6574\u4EA7\u54C1', body: '\u652F\u6301\u4ECE <span class="acc">\u60F3\u6CD5 \u2192 \u539F\u578B \u2192 \u5B8C\u6574\u4EA7\u54C1</span> \u7684\u5168\u6D41\u7A0B\u5F00\u53D1\uFF0C\u8BA9\u6BCF\u4E2A\u4EBA\u90FD\u80FD\u5FEB\u901F\u5C06\u521B\u610F\u53D8\u6210\u53EF\u4E0A\u7EBF\u7684\u771F\u5B9E\u4EA7\u54C1\u3002' },
    ],
  },
  quickstart: {
    chapter: 'Chapter 03',
    title: '\u5982\u4F55\u5FEB\u901F\u521B\u4F5C\uFF1F',
    steps: [
      { num: 'STEP 01', icon: '\u{1F4A1}', title: '\u8F93\u5165\u60F3\u6CD5', body: '\u5728\u8F93\u5165\u6846\u4E2D\u63CF\u8FF0\u4F60\u60F3\u8981\u521B\u5EFA\u7684\u7F51\u7AD9\u6216\u5E94\u7528\u3002\u6CA1\u6709\u60F3\u6CD5\uFF1F\u8BD5\u8BD5 "Good Luck" \u6309\u94AE\u4F53\u9A8C\u968F\u673A Prompt\u3002', tag: '\u53EF\u4E0A\u4F20\u56FE\u7247 / \u6587\u672C / \u89C6\u9891 / \u4EE3\u7801', dark: false },
      { num: 'STEP 02', icon: '\u{1F5C2}', title: '\u5F00\u542F Plan Mode', body: 'AI \u5148\u89C4\u5212\u9879\u76EE\u7ED3\u6784\uFF0C\u751F\u6210\u7ED3\u6784\u5316 Project Plan\uFF0C\u7531\u4F60\u786E\u8BA4\u540E\u518D\u5F00\u59CB\u7F16\u5199\u4EE3\u7801\u3002', tag: '\u63A8\u8350\u5F00\u542F\uFF0C\u8282\u7701\u79EF\u5206', dark: true },
      { num: 'STEP 03', icon: '\u{1F504}', title: '\u5BF9\u8BDD\u8FED\u4EE3', body: '\u5728\u5DE6\u4FA7\u5BF9\u8BDD\u6846\u4E0E AI \u6301\u7EED\u5BF9\u8BDD\uFF0C\u4E0D\u65AD\u4F18\u5316\u4F60\u7684\u4EA7\u54C1\u3002\u9047\u5230\u95EE\u9898\u53EF\u4E0A\u4F20\u622A\u56FE\u6216 F12 \u62A5\u9519\u76F4\u63A5\u7529\u7ED9 AI\u3002', tag: '\u622A\u56FE + F12 \u62A5\u9519\u662F Debug \u5229\u5668', dark: false },
      { num: 'STEP 04', icon: '\u{1F680}', title: '\u53D1\u5E03\u4E0A\u7EBF', body: '\u70B9\u51FB\u53F3\u4E0A\u89D2 "Publish"\uFF0C\u9879\u76EE\u5373\u523B\u53D1\u5E03\u4E0A\u7EBF\uFF0C\u83B7\u5F97\u53EF\u76F4\u63A5\u5206\u4EAB\u7684\u516C\u5F00\u94FE\u63A5\u3002', tag: '\u4E00\u952E\u53D1\u5E03\uFF0C\u5373\u65F6\u53EF\u8FBE', dark: false },
    ],
  },
  modes: {
    chapter: 'Chapter 04',
    title: '\u4E09\u79CD<br>\u521B\u4F5C\u6A21\u5F0F',
    note: '\u65E0\u8BBA\u54EA\u79CD\u6A21\u5F0F\uFF0CEnter \u90FD\u652F\u6301<span style="color:var(--red);font-weight:700;">\u5B9E\u65F6\u9884\u89C8</span>\uFF0C\u53F3\u4FA7\u7A97\u53E3\u5373\u65F6\u5448\u73B0\u6548\u679C\u3002',
    items: [
      { icon: '\u{1F4AC}', title: '\u5BF9\u8BDD\u6A21\u5F0F', body: '\u5728\u5DE6\u4FA7\u5BF9\u8BDD\u9762\u677F\u901A\u8FC7\u81EA\u7136\u8BED\u8A00\u4E0E AI \u5BF9\u8BDD\uFF0C\u63CF\u8FF0\u60F3\u8981\u7684\u529F\u80FD\u6216\u4FEE\u6539\uFF0CAI \u81EA\u52A8\u751F\u6210\u4EE3\u7801\u3002', example: '"Add a dark mode toggle" \u00B7 "Change color scheme to blue"', featured: true },
      { icon: '\u{1F446}', title: 'Visual Edit \u6A21\u5F0F', body: '\u5728\u53F3\u4FA7\u9884\u89C8\u7A97\u53E3\u70B9\u51FB Visual Edit \u6309\u94AE\uFF08\u5C0F\u7BAD\u5934\uFF09\uFF0C\u9009\u4E2D\u4EFB\u610F\u533A\u57DF\uFF0C\u76F4\u63A5\u53EF\u89C6\u5316\u8C03\u6574\u3002\u65E0\u9700\u5199\u4EE3\u7801\u3002', featured: false },
      { icon: '\u{1F468}\u200D\u{1F4BB}', title: '\u4EE3\u7801\u6A21\u5F0F', body: '\u70B9\u51FB\u4E0A\u65B9 Code \u6309\u94AE\u5207\u6362\u4EE3\u7801\u6A21\u5F0F\uFF0C\u76F4\u63A5\u5728\u4EE3\u7801\u7F16\u8F91\u5668\u4E2D\u67E5\u627E\u3001\u67E5\u770B\u3001\u4FEE\u6539\u4EE3\u7801\uFF0C\u9002\u5408\u6709\u6280\u672F\u80CC\u666F\u7684\u7528\u6237\u3002', featured: false },
    ],
  },
  planMode: {
    chapter: 'Chapter 05',
    badge: '\u6838\u5FC3\u529F\u80FD',
    title: 'Plan<br>Mode',
    intro: 'Plan Mode \u662F Enter \u7684\u6838\u5FC3\u529F\u80FD\u4E4B\u4E00\uFF0C\u4F5C\u4E3A\u4F60\u7684<strong>\u4EA7\u54C1\u7ECF\u7406\u548C\u67B6\u6784\u5E08</strong>\uFF0C\u5728\u5199\u4EE3\u7801\u524D\u5E2E\u4F60\u89C4\u5212\u6574\u4E2A\u9879\u76EE\u3002',
    features: [
      { icon: '\u{1F50D}', title: '\u53EA\u8BFB\u4EE3\u7801\uFF0C\u4E0D\u4FEE\u6539', body: '\u5728\u6B64\u6A21\u5F0F\u4E0B Enter \u4E0D\u4F1A\u5199\u4EE3\u7801\uFF0C\u53EA\u4E13\u6CE8\u4E8E\u9700\u6C42\u7406\u89E3\u548C\u903B\u8F91\u89C4\u5212\uFF0C\u786E\u4FDD\u65B9\u5411\u6B63\u786E\u3002' },
      { icon: '\u{1F91D}', title: '\u786E\u8BA4\u9700\u6C42\u8303\u56F4', body: '\u82E5\u9700\u6C42\u4E0D\u660E\u786E\uFF0CEnter \u4F1A\u4E3B\u52A8\u4E0E\u4F60\u786E\u8BA4\u7EC6\u8282\uFF0C\u907F\u514D\u65B9\u5411\u8DD1\u504F\uFF0C\u786E\u4FDD\u7406\u89E3\u51C6\u786E\u3002' },
      { icon: '\u{1F4CB}', title: '\u751F\u6210\u7ED3\u6784\u5316\u6267\u884C\u8BA1\u5212', body: '\u4F60\u4F1A\u6536\u5230\u5305\u542B\u76EE\u6807\u3001\u8303\u56F4\u3001\u5B9E\u73B0\u65B9\u5F0F\u7684\u6267\u884C\u94FE\u3002<strong>\u4EC5\u83B7\u5F97\u4F60\u7684\u786E\u8BA4\u540E</strong>\uFF0C\u624D\u771F\u6B63\u5F00\u59CB\u5199\u4EE3\u7801\u3002' },
    ],
    tip: '\u{1F4A1} <strong>\u4F7F\u7528\u6280\u5DE7\uFF1A</strong>\u5F00\u542F Plan Mode \u53EF\u663E\u8457\u51CF\u5C11\u79EF\u5206\u6D88\u8017\uFF0C\u662F\u6700\u9AD8\u6548\u7684\u521B\u4F5C\u65B9\u5F0F\u3002\u8FD8\u652F\u6301\u7ED3\u6784\u5316 Q&A \u8BA9\u4F60\u70B9\u51FB\u786E\u8BA4\uFF0C\u8BA1\u5212\u53EF Git \u8FFD\u8E2A\u548C\u56DE\u6EDA\u3002',
  },
  maas: {
    chapter: 'Chapter 06',
    title: 'Enter <span class="acc">MaaS</span>',
    badge: 'AI All \u5347\u7EA7',
    subtitle: 'Model as a Service \u2014 \u65E0\u9700\u4EFB\u4F55 API \u5BC6\u94A5',
    intro: 'AI All \u5347\u7EA7\u4E3A Enter MaaS\uFF0C\u6210\u4E3A\u9879\u76EE\u5185\u72EC\u7ACB\u6A21\u5757\uFF0C\u66F4\u6E05\u6670\u3001\u66F4\u5F3A\u5927\uFF0C<strong style="color:#fff;">\u5E76\u53EF\u5728 Enter \u5916\u90E8\u4F7F\u7528\u3002</strong>',
    newFeatures: [
      { icon: '\u{1F3AF}', title: '\u4E13\u5C5E MaaS \u9762\u677F', body: '\u4ECE Settings \u5347\u7EA7\u4E3A\u9876\u5C42\u72EC\u7ACB\u6A21\u5757\uFF0C\u6BCF\u4E2A\u6A21\u578B\u7684\u80FD\u529B\u3001\u4EF7\u683C\u3001\u6210\u529F\u7387\u4E00\u76EE\u4E86\u7136', isNew: false },
      { icon: '\u{1F4B0}', title: '\u900F\u660E Token \u5B9A\u4EF7', body: '\u6BCF\u767E\u4E07 Token \u7684\u8F93\u5165/\u8F93\u51FA\u4EF7\u683C\u5728\u8C03\u7528\u524D\u5B8C\u5168\u53EF\u89C1\uFF0C\u65E0\u4EFB\u4F55\u9690\u6027\u6536\u8D39', isNew: false },
      { icon: '\u{1F511}', title: '\u5916\u90E8 API \u8BBF\u95EE\uFF08\u65B0\uFF09', body: 'Enter API Key \u73B0\u53EF\u5728\u4EFB\u4F55\u9879\u76EE\u3001\u5DE5\u5177\u4E2D\u4F7F\u7528\uFF0C\u6A21\u578B\u80FD\u529B\u968F\u8EAB\u643A\u5E26', isNew: true },
    ],
    modelGroups: [
      { label: '\u{1F9E0} \u5927\u8BED\u8A00\u6A21\u578B LLM', models: [
        { name: 'GPT-5.4 Pro', desc: '\u5F3A\u63A8\u7406 / \u7F16\u7801', hot: true },
        { name: 'Claude Sonnet 4.5', desc: '\u957F\u6587 / \u5206\u6790', hot: false },
        { name: 'Gemini 3.1 Pro', desc: '\u591A\u6A21\u6001', hot: false },
        { name: 'Grok 3.5', desc: '\u5B9E\u65F6\u4FE1\u606F', hot: false },
      ]},
      { label: '\u{1F5BC} \u56FE\u50CF\u751F\u6210 Image', models: [
        { name: 'FLUX Kontext Pro', desc: '\u89D2\u8272\u4E00\u81F4\u6027', hot: true },
        { name: 'GPT-Image-1', desc: '\u7406\u89E3 + \u751F\u6210', hot: false },
        { name: 'Stable Diffusion', desc: '\u5F00\u6E90\u7ECF\u5178', hot: false },
      ]},
    ],
  },
  skills: {
    chapter: 'Chapter 07',
    title: 'Skills & MCP \u2014 \u8BA9 Agent \u66F4\u5F3A',
    enterSkills: {
      title: 'Enter Skills',
      intro: 'Skills \u662F\u80FD\u529B\u5305\uFF0C\u8BA9 Agent \u4ECE\u901A\u624D\u53D8\u6210\u4E13\u5BB6\u3002\u5F00\u542F Skill\uFF0CAgent \u5C31\u638C\u63E1\u4E86\u8BE5\u9886\u57DF\u7684\u77E5\u8BC6\u548C\u64CD\u4F5C\u6D41\u7A0B\u3002',
      items: [
        { icon: '\u{1F3E2}', title: '\u5B98\u65B9 Skills', body: 'Enter \u56E2\u961F\u7EF4\u62A4\uFF0C\u8986\u76D6\u9519\u8BEF\u68C0\u6D4B\u3001\u4F9D\u8D56\u5B89\u88C5\u3001CRUD API\u3001Stripe \u63A5\u5165\u7B49\u9AD8\u9891\u573A\u666F' },
        { icon: '\u{1F30D}', title: '\u793E\u533A Skills', body: '\u4ECE GitHub / agentskills.io \u7B49\u5E73\u53F0\u901A\u8FC7 URL \u76F4\u63A5\u5BFC\u5165' },
        { icon: '\u{1F6E0}', title: '\u81EA\u5B9A\u4E49 Skills', body: '\u5728\u5BF9\u8BDD\u4E2D\u63CF\u8FF0\u9700\u6C42\u8BA9 Agent \u751F\u6210\uFF0C\u6216\u5BFC\u5165 GitHub \u4ED3\u5E93\uFF0C\u6216\u4E0A\u4F20 .skill \u6587\u4EF6' },
      ],
    },
    mcp: {
      title: 'MCP \u96C6\u6210',
      intro: 'MCP\uFF08Model Context Protocol\uFF09\u8BA9 Agent \u76F4\u63A5\u8C03\u7528\u5916\u90E8\u670D\u52A1\uFF0C\u4E00\u6BB5 JSON \u914D\u7F6E\u5373\u53EF\u63A5\u5165\u4EFB\u610F\u5DE5\u5177\u3002',
      steps: [
        '\u5728 Agent Panel \u2192 MCPs \u4E2D\u70B9\u51FB "Add MCP"',
        '\u7C98\u8D34 MCP Server \u7684 JSON \u914D\u7F6E\uFF08url \u65B9\u5F0F\uFF09',
        '\u70B9\u51FB Connect\uFF0CAgent \u5373\u53EF\u76F4\u63A5\u8C03\u7528\u5916\u90E8\u5DE5\u5177',
      ],
      chips: ['Notion', 'Supabase', 'Context7', '\u4EFB\u610F HTTP MCP'],
      note: '\u26A0\uFE0F Enter \u4EC5\u652F\u6301 <span>url \u65B9\u5F0F</span>\uFF08Streamable HTTP / SSE\uFF09\uFF0C\u6682\u4E0D\u652F\u6301 stdio \u672C\u5730\u8FDB\u7A0B\u65B9\u5F0F\u3002',
    },
  },
  cloud: {
    chapter: 'Chapter 08',
    title: 'Enter<br><span class="acc">Cloud</span>',
    badge: '\u5168\u65B0\u53D1\u5E03',
    intro: '\u5185\u7F6E\u540E\u7AEF\u670D\u52A1\uFF0C\u65E0\u9700\u6CE8\u518C\u5916\u90E8\u8D26\u53F7\uFF0C\u65E0\u9700\u5207\u6362\u6807\u7B7E\u9875\u3002\u4E00\u952E\u542F\u7528\uFF0C\u7ACB\u5373\u6784\u5EFA\u5168\u6808\u5E94\u7528\u3002',
    enableTip: { title: '\u{1F680} \u96F6\u914D\u7F6E\u542F\u7528', body: '\u5728\u9879\u76EE\u53F3\u4FA7\u627E\u5230 Cloud \u2192 Enable\uFF0C\u6216\u76F4\u63A5\u544A\u8BC9 Agent "\u6211\u9700\u8981\u6570\u636E\u5E93"\uFF0C\u81EA\u52A8\u5B8C\u6210\u914D\u7F6E' },
    servicesTitle: '\u4E94\u5927\u5185\u7F6E\u670D\u52A1',
    servicesSubtitle: '\u6570\u636E\u5E93 \u00B7 \u51FD\u6570 \u00B7 \u5B58\u50A8 \u00B7 \u5BC6\u94A5 \u00B7 \u8BA4\u8BC1 \u2014 \u5168\u5728\u4E00\u5904',
    services: [
      { icon: '\u{1F5C4}', title: 'Database', body: '\u6258\u7BA1 PostgreSQL\uFF0C\u53EF\u89C6\u5316\u7F16\u8F91\u8868\u6570\u636E\u3001\u914D\u7F6E RLS \u7B56\u7565' },
      { icon: '\u26A1', title: 'Functions', body: 'Edge Functions \u8FB9\u7F18\u51FD\u6570\uFF0C\u67E5\u770B\u4EE3\u7801\u3001\u65E5\u5FD7\u548C\u8C03\u7528\u6307\u6807' },
      { icon: '\u{1F4E6}', title: 'Storage', body: '\u5BF9\u8C61\u5B58\u50A8\uFF0CBucket \u7BA1\u7406\uFF0C\u56FE\u7247\u76F4\u63A5\u9884\u89C8' },
      { icon: '\u{1F510}', title: 'Secrets', body: '\u5B89\u5168\u7BA1\u7406\u73AF\u5883\u53D8\u91CF\u548C API Key\uFF0C\u503C\u9ED8\u8BA4\u52A0\u5BC6\u9690\u85CF' },
      { icon: '\u{1F464}', title: 'Authentication', body: '\u7528\u6237\u7BA1\u7406 + \u767B\u5F55\u914D\u7F6E\uFF0C\u90AE\u7BB1\u8BA4\u8BC1\u5F00\u7BB1\u5373\u7528' },
    ],
    freeBanner: '\u53D1\u5E03\u671F\u95F4\u5B8C\u5168\u514D\u8D39 \u2014 \u65E0\u9700\u989D\u5916\u8D39\u7528\uFF0C\u73B0\u5728\u5F00\u542F\u5373\u53EF\u4F7F\u7528\u5168\u90E8\u4E94\u9879\u670D\u52A1',
    agentTip: 'Agent \u6DF1\u5EA6\u6574\u5408\uFF1A<span>"\u521B\u5EFA users \u8868"</span> \u00B7 <span>"\u67E5\u8BE2\u6700\u8FD17\u5929\u8BA2\u5355"</span> \u00B7 <span>"\u5199\u4E00\u4E2A\u53D1\u90AE\u4EF6\u7684 Edge Function"</span>',
  },
  integrations: {
    chapter: 'Chapter 09',
    title: '\u96C6\u6210\u80FD\u529B\uFF1AGitHub \u00B7 Supabase \u00B7 Stripe',
    cards: [
      {
        icon: '\u{1F419}', title: 'GitHub<br>\u53CC\u5411\u540C\u6B65',
        desc: '\u63D0\u4F9B\u5B8C\u6574\u7684 GitHub \u96C6\u6210\uFF0C\u4EE3\u7801\u53CC\u5411\u6D41\u52A8\uFF0C\u5DE5\u7A0B\u5E08\u534F\u4F5C\u65E0\u7F1D\u8854\u63A5\u3002\u8FDE\u63A5\u4E00\u6B21\uFF0C\u6C38\u4E45\u53D7\u76CA\u3002',
        steps: ['Dashboard \u2192 New Chat \u2192 <strong>Import from GitHub</strong>', '\u901A\u8FC7 OAuth \u6388\u6743 GitHub \u8D26\u53F7', '\u9009\u62E9 Repo \u548C\u5206\u652F\uFF0C\u53CC\u5411\u540C\u6B65\u7ACB\u5373\u5F00\u59CB', '\u4EE3\u7801\u53D8\u66F4\u81EA\u52A8\u540C\u6B65\uFF0C\u7248\u672C\u5386\u53F2\u5B8C\u6574\u4FDD\u7559'],
        chips: ['\u5BFC\u5165\u4ED3\u5E93', '\u53CC\u5411\u540C\u6B65', '\u7248\u672C\u4FDD\u62A4', '\u56E2\u961F\u534F\u4F5C'],
        accent: true,
      },
      {
        icon: '\u{1F5C4}', title: 'Supabase<br>\u540E\u7AEF\u96C6\u6210',
        desc: '\u4E00\u952E\u8FDE\u63A5 Supabase\uFF0C\u4E3A\u5E94\u7528\u6DFB\u52A0\u5B8C\u6574\u540E\u7AEF\u80FD\u529B\uFF0C\u544A\u522B\u624B\u52A8\u642D\u5EFA\u670D\u52A1\u5668\u3002',
        list: ['PostgreSQL \u6570\u636E\u5E93 + \u81EA\u52A8\u751F\u6210 RESTful API', '\u7528\u6237\u6CE8\u518C / \u767B\u5F55 Auth \u5F00\u7BB1\u5373\u7528', '\u6587\u4EF6\u5B58\u50A8 Storage + Edge Functions'],
        chips: ['\u6570\u636E\u5E93', 'Auth \u8BA4\u8BC1', 'Edge Functions'],
        accent: false,
      },
      {
        icon: '\u{1F4B3}', title: 'Stripe<br>\u5546\u4E1A\u5316\u96C6\u6210',
        desc: '\u4E00\u952E\u63A5\u5165 Stripe \u652F\u4ED8\uFF0C\u8BA9\u4F60\u7684\u5E94\u7528\u5FEB\u901F\u5B9E\u73B0\u5546\u4E1A\u5316\u53D8\u73B0\uFF0C\u5750\u4E0A\u5546\u4E1A\u5316\u5FEB\u8F66\u3002',
        list: ['\u652F\u6301\u4E00\u6B21\u6027\u4ED8\u6B3E / \u8BA2\u9605\u5236\u4E24\u79CD\u6A21\u5F0F', '\u65E0\u9700\u81EA\u5EFA\u652F\u4ED8\u540E\u7AEF\uFF0CEnter \u81EA\u52A8\u914D\u7F6E', '\u5168\u7403\u4E3B\u6D41\u4FE1\u7528\u5361\u4E0E\u672C\u5730\u652F\u4ED8\u65B9\u5F0F'],
        chips: ['\u5728\u7EBF\u652F\u4ED8', '\u8BA2\u9605\u7BA1\u7406', '\u5FEB\u901F\u5546\u4E1A\u5316'],
        accent: false,
      },
    ],
  },
  templates: {
    chapter: 'Chapter 10',
    title: '\u6A21\u677F\u7CFB\u7EDF &<br>\u6A21\u578B\u9009\u62E9',
    templateDesc: '\u4E30\u5BCC\u7684\u514D\u8D39\u793E\u533A\u6A21\u677F\uFF0C\u5E2E\u52A9\u4F60\u5FEB\u901F\u542F\u52A8\u9879\u76EE\uFF0C\u8986\u76D6\u4E3B\u6D41\u5E94\u7528\u7C7B\u578B\u3002',
    templateTags: ['Landing Page', 'Portfolio', 'Forum', 'EDM', 'Blog', 'Dashboard', 'AI App', 'Platform', 'Core Page'],
    templateTagsRed: ['Landing Page'],
    modelsLabel: '\u652F\u6301\u7684 AI \u6A21\u578B',
    modelsTitle: '\u4E1A\u5185\u6700\u5148\u8FDB\u6A21\u578B\uFF0C\u968F\u610F\u5207\u6362',
    modelGroups: [
      { models: [{ name: 'Claude 4.5 Opus', width: '96%', color: '', type: '\u63A8\u7406' }, { name: 'Claude 4.5 Sonnet', width: '85%', color: '', type: '\u5199\u4F5C' }] },
      { models: [{ name: 'Gemini 3.1 Pro', width: '88%', color: '#333', type: '\u591A\u6A21\u6001' }, { name: 'Gemini 3.1 Flash', width: '72%', color: '#333', type: '\u5FEB\u901F' }] },
      { models: [{ name: 'GPT-5.4 Pro', width: '92%', color: '#555', type: '\u903B\u8F91' }, { name: 'GPT-5.2 Pro', width: '80%', color: '#555', type: '\u89C4\u5212' }] },
    ],
  },
  credits: {
    chapter: 'Chapter 11',
    title: '\u79EF\u5206\u4E0E<br>\u4F1A\u5458',
    sidebarHint: '\u5728\u4FA7\u8FB9\u680F\u968F\u65F6\u67E5\u770B\u4F59\u989D',
    freeCredits: [
      { icon: '\u{1F381}', title: '\u65B0\u7528\u6237\u6CE8\u518C', desc: '\u8D60\u9001 100 \u514D\u8D39\u79EF\u5206' },
      { icon: '\u{1F4C5}', title: '\u6BCF\u65E5\u767B\u5F55', desc: '\u989D\u5916\u83B7\u5F97 100 \u79EF\u5206' },
      { icon: '\u{1F465}', title: '\u9080\u8BF7\u597D\u53CB\u6CE8\u518C', desc: '\u6BCF\u6B21\u9080\u8BF7\u83B7\u5F97 100 \u79EF\u5206' },
    ],
    balance: { hint: '\u5F53\u524D\u79EF\u5206\u4F59\u989D', amount: '100+', unit: 'Credits \u2014 \u70B9\u51FB "Credits" \u67E5\u770B\u8BE6\u7EC6\u6D88\u8017\u8BB0\u5F55' },
    plan: { icon: '\u{1F451}', title: '\u4F1A\u5458\u8BA2\u9605\u8BA1\u5212', body: 'Enter \u6B63\u5728\u63A8\u51FA\u4F1A\u5458\u8BA2\u9605\u8BA1\u5212\uFF0C\u656C\u8BF7\u671F\u5F85\uFF01' },
  },
  tips: {
    chapter: 'Chapter 12',
    title: '\u4F7F\u7528\u6280\u5DE7 \u2014 \u66F4\u5C11\u79EF\u5206\uFF0C\u66F4\u591A\u6784\u5EFA',
    cards: [
      { icon: '\u{1F5C2}', title: '\u4F18\u5148\u7528 Plan Mode', body: '\u5728\u5F00\u59CB\u7F16\u7801\u524D\u7528 Plan Mode \u89C4\u5212\u9879\u76EE\u7ED3\u6784\u548C\u529F\u80FD\uFF0C\u53EF\u663E\u8457\u51CF\u5C11\u79EF\u5206\u6D88\u8017\uFF0C\u907F\u514D\u56E0\u7406\u89E3\u504F\u5DEE\u5BFC\u81F4\u7684\u53CD\u590D\u4FEE\u6539\uFF0C\u662F\u590D\u6742\u9879\u76EE\u7684\u9996\u9009\u5DE5\u4F5C\u6D41\u3002', tag: '\u8282\u7701\u79EF\u5206\u9996\u9009', accent: true },
      { icon: '\u{1F3AF}', title: '\u5177\u4F53\u63CF\u8FF0\u9700\u6C42', body: '\u5411 AI \u63D0\u4F9B\u8BE6\u7EC6\u3001\u5177\u4F53\u7684\u9700\u6C42\u63CF\u8FF0\uFF0C\u5305\u62EC\u76EE\u6807\u7528\u6237\u3001\u529F\u80FD\u8FB9\u754C\u548C\u89C6\u89C9\u98CE\u683C\u53C2\u8003\uFF0C\u80FD\u83B7\u5F97\u66F4\u51C6\u786E\u7684\u7ED3\u679C\uFF0C\u5927\u5E45\u51CF\u5C11\u6765\u56DE\u4FEE\u6539\u6B21\u6570\u3002', accent: false },
      { icon: '\u{1F4CB}', title: '\u5584\u7528\u6A21\u677F\u8D77\u6B65', body: '\u4ECE\u793E\u533A\u6A21\u677F\u5F00\u59CB\u53EF\u4EE5\u8282\u7701\u5927\u91CF\u65F6\u95F4\uFF0C\u5148\u8DD1\u901A\u57FA\u7840\u6846\u67B6\uFF0C\u518D\u6839\u636E\u9700\u6C42\u8FDB\u884C\u4E2A\u6027\u5316\u5B9A\u5236\uFF0C\u6BD4\u4ECE\u96F6\u5F00\u59CB\u6548\u7387\u9AD8 3-5 \u500D\u3002', accent: false },
      { icon: '\u{1F517}', title: '\u8FDE GitHub \u505A\u7248\u672C\u63A7\u5236', body: '\u8FDE\u63A5 GitHub \u8FDB\u884C\u7248\u672C\u63A7\u5236\uFF0C\u4FDD\u62A4\u4EE3\u7801\u5B89\u5168\uFF0C\u65B9\u4FBF\u56E2\u961F\u534F\u4F5C\u548C\u4EE3\u7801\u56DE\u6EDA\uFF0C\u4E5F\u8BA9\u9879\u76EE\u53EF\u4EE5\u968F\u65F6\u5BFC\u5165\u5176\u4ED6\u5E73\u53F0\u7EE7\u7EED\u8FED\u4EE3\u3002', accent: false },
      { icon: '\u{1F916}', title: '\u9009\u5BF9\u6A21\u578B\u7701\u79EF\u5206', body: '\u590D\u6742\u4EFB\u52A1\u7528 Claude Opus\uFF0C\u65E5\u5E38\u5F00\u53D1\u7528 Claude Sonnet\uFF0C\u5FEB\u901F\u539F\u578B\u9A8C\u8BC1\u7528 Gemini Flash \u6700\u7701\u79EF\u5206\u3002', accent: false },
      { icon: '\u{1F4F8}', title: '\u622A\u56FE + F12 Debug', body: '\u9047\u5230 UI \u95EE\u9898\u76F4\u63A5\u622A\u56FE\u53D1\u7ED9 AI\uFF1B\u9047\u5230\u4EE3\u7801\u62A5\u9519\u6253\u5F00 F12 \u63A7\u5236\u53F0\uFF0C\u628A\u9519\u8BEF\u4FE1\u606F\u5B8C\u6574\u8D34\u7ED9 AI\uFF0C\u547D\u4E2D\u7387\u6700\u9AD8\u3002', accent: false },
    ],
    bottomBar: {
      text: '\u{1F4A1} <strong>\u6838\u5FC3\u8282\u594F\uFF1A</strong>\u5F00\u59CB\u524D\u7528 Plan Mode \u89C4\u5212\uFF0C\u7F16\u7801\u65F6\u5177\u4F53\u63CF\u8FF0\u9700\u6C42\uFF0C\u5361\u4F4F\u65F6\u4E0A\u4F20\u622A\u56FE + F12 \u9519\u8BEF\u4FE1\u606F \u2014 \u8FD9\u662F\u9AD8\u6548 vibe coding \u7684\u4E09\u6B65\u5FC3\u6CD5\u3002',
      linkText: '\u67E5\u770B\u66F4\u591A\u6280\u5DE7 \u2192',
      linkUrl: 'https://blog.enter.pro',
    },
  },
  contact: {
    sectionLabel: 'Get In Touch',
    title: '\u8054\u7CFB<br><span class="acc">Enter</span>',
    tagline: '\u6709\u95EE\u9898\uFF1F\u6709\u60F3\u6CD5\uFF1F<br>\u6211\u4EEC\u5728\u8FD9\u91CC\u3002',
    ctaText: '\u7ACB\u5373\u5F00\u59CB\u521B\u4F5C',
    ctaUrl: 'https://enter.pro',
    contactsTitle: '\u8054\u7CFB\u65B9\u5F0F',
    contacts: [
      { icon: '\u{1F310}', label: '\u5B98\u7F51', value: 'enter.pro', url: 'https://enter.pro' },
      { icon: '\u{1F4DD}', label: '\u535A\u5BA2 / \u8BBA\u575B', value: 'enter.pro/blog \u00B7 forum.enter.pro', url: 'https://enter.pro/blog' },
      { icon: '\u{1F3AE}', label: 'Discord \u793E\u533A', value: 'discord.gg/BCyR5hXw', url: 'https://discord.gg/BCyR5hXw' },
      { icon: '\u{1F4E7}', label: '\u90AE\u7BB1\u652F\u6301', value: 'support@enter.pro', url: 'mailto:support@enter.pro' },
    ],
    wechatNote: '\u{1F4AC} \u4E2D\u56FD\u5927\u9646\u7528\u6237\u53EF\u52A0\u5165 <span>Enter.pro \u5B98\u65B9\u5FAE\u4FE1\u7FA4</span>\uFF0C\u626B\u7801\u5165\u7FA4\u4EA4\u6D41\u3002',
  },
  // UI strings
  ui: {
    slideOverview: '\u5E7B\u706F\u7247\u603B\u89C8',
    keyboardShortcuts: '\u952E\u76D8\u5FEB\u6377\u952E',
    prevNext: '\u4E0A / \u4E0B\u4E00\u5F20',
    fullscreen: '\u5168\u5C4F',
    closePanel: '\u5173\u95ED\u9762\u677F',
    showShortcuts: '\u663E\u793A\u5FEB\u6377\u952E',
    close: '\u5173\u95ED',
    fullscreenBtn: '\u5168\u5C4F (F)',
    overviewBtn: '\u5E7B\u706F\u7247\u603B\u89C8 (O)',
    prevBtn: '\u4E0A\u4E00\u5F20 (\u2190)',
    nextBtn: '\u4E0B\u4E00\u5F20 (\u2192)',
    shortcutsBtn: '\u952E\u76D8\u5FEB\u6377\u952E (?)',
  },
  slideTitles: [
    '\u5C01\u9762', 'Enter \u662F\u4EC0\u4E48', '\u76EE\u6807\u53D7\u4F17\u4E0E\u7406\u5FF5', '\u5982\u4F55\u5FEB\u901F\u521B\u4F5C',
    '\u4E09\u79CD\u521B\u4F5C\u6A21\u5F0F', 'Plan Mode', 'Enter MaaS', 'Skills & MCP',
    'Enter Cloud', '\u96C6\u6210\u80FD\u529B', '\u6A21\u677F & \u6A21\u578B', '\u79EF\u5206\u4E0E\u4F1A\u5458',
    '\u4F7F\u7528\u6280\u5DE7', '\u8054\u7CFB\u6211\u4EEC',
  ],
};

const en: typeof zh = {
  cover: {
    label: 'Product Guide \u00B7 2026',
    subtitle: 'Product Manual & Tips',
    meta: ['enter.pro', 'AI Co-Creation Platform', 'From Idea to Product, One Click Away'],
  },
  what: {
    chapter: 'Chapter 01',
    title: 'What is<br>Enter<span style="color:var(--red)">.</span>pro?',
    introLabel: 'In a Nutshell',
    intro: 'Enter is a universal website / app building platform focused on <strong>AI co-creation</strong>. Through conversation, you can complete the full development cycle from <strong>idea \u2192 prototype \u2192 finished product</strong>.',
    linkKeys: ['website', 'forum', 'discord', 'twitter', 'youtube'],
  },
  audience: {
    chapter: 'Chapter 02',
    title: 'Target Audience<br>& Philosophy',
    tagline: 'AI doesn\'t reduce creativity,<br>it unleashes and empowers it.',
    items: [
      { num: 1, title: 'Zero-Barrier Creative Expression', body: 'Interested in AI-assisted coding, <span class="acc">unconstrained by programming experience</span>. Express your creativity freely and build high-quality websites / apps.' },
      { num: 2, title: 'AI-Creator Collaboration', body: 'Exploring AI in application development, studying the collaboration between AI and creators. <span class="acc">AI doesn\'t replace creativity \u2014 it unleashes it.</span>' },
      { num: 3, title: 'From Idea to Finished Product', body: 'Supporting the full development cycle from <span class="acc">idea \u2192 prototype \u2192 finished product</span>, enabling everyone to quickly turn creativity into a real, deployable product.' },
    ],
  },
  quickstart: {
    chapter: 'Chapter 03',
    title: 'Quick Start Guide',
    steps: [
      { num: 'STEP 01', icon: '\u{1F4A1}', title: 'Describe Your Idea', body: 'Describe the website or app you want to create in the input box. No ideas? Try the "Good Luck" button for a random prompt.', tag: 'Upload images / text / video / code', dark: false },
      { num: 'STEP 02', icon: '\u{1F5C2}', title: 'Enable Plan Mode', body: 'AI first plans the project structure, generates a structured Project Plan, and starts coding only after your confirmation.', tag: 'Recommended \u2014 saves credits', dark: true },
      { num: 'STEP 03', icon: '\u{1F504}', title: 'Iterate via Chat', body: 'Chat with AI in the left panel to continuously refine your product. When stuck, upload screenshots or F12 errors directly to AI.', tag: 'Screenshots + F12 errors are debugging superpowers', dark: false },
      { num: 'STEP 04', icon: '\u{1F680}', title: 'Publish', body: 'Click "Publish" in the top right corner. Your project goes live instantly with a shareable public link.', tag: 'One-click deploy, instantly accessible', dark: false },
    ],
  },
  modes: {
    chapter: 'Chapter 04',
    title: 'Three<br>Creation Modes',
    note: 'All modes support <span style="color:var(--red);font-weight:700;">real-time preview</span> \u2014 see changes instantly in the right panel.',
    items: [
      { icon: '\u{1F4AC}', title: 'Chat Mode', body: 'Chat with AI using natural language in the left panel. Describe desired features or changes, and AI automatically generates the code.', example: '"Add a dark mode toggle" \u00B7 "Change color scheme to blue"', featured: true },
      { icon: '\u{1F446}', title: 'Visual Edit Mode', body: 'Click the Visual Edit button (arrow icon) in the right preview panel, select any area, and make visual adjustments directly. No code needed.', featured: false },
      { icon: '\u{1F468}\u200D\u{1F4BB}', title: 'Code Mode', body: 'Click the Code button at the top to switch to code mode. Search, view, and edit code directly in the code editor. Best for users with technical background.', featured: false },
    ],
  },
  planMode: {
    chapter: 'Chapter 05',
    badge: 'Core Feature',
    title: 'Plan<br>Mode',
    intro: 'Plan Mode is one of Enter\'s core features, acting as your <strong>product manager and architect</strong> to plan the entire project before writing any code.',
    features: [
      { icon: '\u{1F50D}', title: 'Read-Only, No Modifications', body: 'In this mode, Enter won\'t write code \u2014 it focuses solely on understanding requirements and logical planning to ensure the right direction.' },
      { icon: '\u{1F91D}', title: 'Confirm Requirements Scope', body: 'If requirements are unclear, Enter proactively confirms details with you to avoid deviation and ensure accurate understanding.' },
      { icon: '\u{1F4CB}', title: 'Generate Structured Execution Plan', body: 'You\'ll receive an execution chain with goals, scope, and implementation approach. <strong>Code is written only after your confirmation.</strong>' },
    ],
    tip: '\u{1F4A1} <strong>Pro Tip:</strong> Enabling Plan Mode significantly reduces credit consumption \u2014 the most efficient way to create. Also supports structured Q&A for click-to-confirm, and plans are Git-trackable and rollback-friendly.',
  },
  maas: {
    chapter: 'Chapter 06',
    title: 'Enter <span class="acc">MaaS</span>',
    badge: 'AI All Upgrade',
    subtitle: 'Model as a Service \u2014 No API Keys Required',
    intro: 'AI All upgraded to Enter MaaS, now an independent module within projects \u2014 clearer, more powerful, <strong style="color:#fff;">and usable outside of Enter.</strong>',
    newFeatures: [
      { icon: '\u{1F3AF}', title: 'Dedicated MaaS Panel', body: 'Upgraded from Settings to a top-level independent module. Each model\'s capabilities, pricing, and success rate at a glance.', isNew: false },
      { icon: '\u{1F4B0}', title: 'Transparent Token Pricing', body: 'Input/output pricing per million tokens is fully visible before invocation. No hidden fees whatsoever.', isNew: false },
      { icon: '\u{1F511}', title: 'External API Access (New)', body: 'Enter API Key can now be used in any project or tool. Model capabilities go wherever you go.', isNew: true },
    ],
    modelGroups: [
      { label: '\u{1F9E0} Large Language Models (LLM)', models: [
        { name: 'GPT-5.4 Pro', desc: 'Reasoning / Coding', hot: true },
        { name: 'Claude Sonnet 4.5', desc: 'Long-form / Analysis', hot: false },
        { name: 'Gemini 3.1 Pro', desc: 'Multimodal', hot: false },
        { name: 'Grok 3.5', desc: 'Real-time Info', hot: false },
      ]},
      { label: '\u{1F5BC} Image Generation', models: [
        { name: 'FLUX Kontext Pro', desc: 'Character Consistency', hot: true },
        { name: 'GPT-Image-1', desc: 'Understanding + Generation', hot: false },
        { name: 'Stable Diffusion', desc: 'Open Source Classic', hot: false },
      ]},
    ],
  },
  skills: {
    chapter: 'Chapter 07',
    title: 'Skills & MCP \u2014 Supercharge Your Agent',
    enterSkills: {
      title: 'Enter Skills',
      intro: 'Skills are capability packs that turn Agent from generalist to specialist. Enable a Skill, and Agent masters the domain\'s knowledge and workflows.',
      items: [
        { icon: '\u{1F3E2}', title: 'Official Skills', body: 'Maintained by the Enter team, covering error detection, dependency installation, CRUD API, Stripe integration, and more.' },
        { icon: '\u{1F30D}', title: 'Community Skills', body: 'Import directly via URL from GitHub / agentskills.io and other platforms.' },
        { icon: '\u{1F6E0}', title: 'Custom Skills', body: 'Describe requirements in chat for Agent to generate, import from GitHub repos, or upload .skill files.' },
      ],
    },
    mcp: {
      title: 'MCP Integration',
      intro: 'MCP (Model Context Protocol) lets Agent directly call external services. A single JSON config connects any tool.',
      steps: [
        'In Agent Panel \u2192 MCPs, click "Add MCP"',
        'Paste the MCP Server JSON config (url method)',
        'Click Connect \u2014 Agent can now directly call external tools',
      ],
      chips: ['Notion', 'Supabase', 'Context7', 'Any HTTP MCP'],
      note: '\u26A0\uFE0F Enter only supports <span>url method</span> (Streamable HTTP / SSE). stdio local process method is not yet supported.',
    },
  },
  cloud: {
    chapter: 'Chapter 08',
    title: 'Enter<br><span class="acc">Cloud</span>',
    badge: 'New Release',
    intro: 'Built-in backend services. No external account registration, no tab switching. One-click enable, instantly build full-stack apps.',
    enableTip: { title: '\u{1F680} Zero-Config Setup', body: 'Find Cloud \u2192 Enable in the project sidebar, or simply tell Agent "I need a database" \u2014 configuration is automatic.' },
    servicesTitle: 'Five Built-in Services',
    servicesSubtitle: 'Database \u00B7 Functions \u00B7 Storage \u00B7 Secrets \u00B7 Auth \u2014 All in One Place',
    services: [
      { icon: '\u{1F5C4}', title: 'Database', body: 'Managed PostgreSQL with visual table editing and RLS policy configuration.' },
      { icon: '\u26A1', title: 'Functions', body: 'Edge Functions with code viewing, logs, and invocation metrics.' },
      { icon: '\u{1F4E6}', title: 'Storage', body: 'Object storage with bucket management and direct image preview.' },
      { icon: '\u{1F510}', title: 'Secrets', body: 'Securely manage environment variables and API keys. Values are encrypted by default.' },
      { icon: '\u{1F464}', title: 'Authentication', body: 'User management + login configuration. Email authentication works out of the box.' },
    ],
    freeBanner: 'Completely free during launch \u2014 no extra costs. Enable now to access all five services.',
    agentTip: 'Deep Agent integration: <span>"Create a users table"</span> \u00B7 <span>"Query orders from the last 7 days"</span> \u00B7 <span>"Write an email-sending Edge Function"</span>',
  },
  integrations: {
    chapter: 'Chapter 09',
    title: 'Integrations: GitHub \u00B7 Supabase \u00B7 Stripe',
    cards: [
      {
        icon: '\u{1F419}', title: 'GitHub<br>Bi-directional Sync',
        desc: 'Complete GitHub integration with bi-directional code flow and seamless engineer collaboration. Connect once, benefit forever.',
        steps: ['Dashboard \u2192 New Chat \u2192 <strong>Import from GitHub</strong>', 'Authorize GitHub account via OAuth', 'Select repo and branch \u2014 bi-directional sync starts immediately', 'Code changes auto-sync with complete version history'],
        chips: ['Import Repo', 'Bi-directional Sync', 'Version Protection', 'Team Collaboration'],
        accent: true,
      },
      {
        icon: '\u{1F5C4}', title: 'Supabase<br>Backend Integration',
        desc: 'One-click Supabase connection adds complete backend capabilities to your app. No more manual server setup.',
        list: ['PostgreSQL database + auto-generated RESTful API', 'User registration / login Auth out of the box', 'File storage + Edge Functions'],
        chips: ['Database', 'Auth', 'Edge Functions'],
        accent: false,
      },
      {
        icon: '\u{1F4B3}', title: 'Stripe<br>Monetization',
        desc: 'One-click Stripe payment integration for rapid app monetization. Get on the commercialization fast track.',
        list: ['One-time payment / subscription \u2014 two modes supported', 'No self-built payment backend \u2014 Enter configures automatically', 'Global credit cards and local payment methods'],
        chips: ['Online Payments', 'Subscription Mgmt', 'Quick Monetization'],
        accent: false,
      },
    ],
  },
  templates: {
    chapter: 'Chapter 10',
    title: 'Templates &<br>Model Selection',
    templateDesc: 'Rich free community templates to help you quickly launch projects, covering mainstream application types.',
    templateTags: ['Landing Page', 'Portfolio', 'Forum', 'EDM', 'Blog', 'Dashboard', 'AI App', 'Platform', 'Core Page'],
    templateTagsRed: ['Landing Page'],
    modelsLabel: 'Supported AI Models',
    modelsTitle: 'Industry-Leading Models, Switch Freely',
    modelGroups: [
      { models: [{ name: 'Claude 4.5 Opus', width: '96%', color: '', type: 'Reasoning' }, { name: 'Claude 4.5 Sonnet', width: '85%', color: '', type: 'Writing' }] },
      { models: [{ name: 'Gemini 3.1 Pro', width: '88%', color: '#333', type: 'Multimodal' }, { name: 'Gemini 3.1 Flash', width: '72%', color: '#333', type: 'Fast' }] },
      { models: [{ name: 'GPT-5.4 Pro', width: '92%', color: '#555', type: 'Logic' }, { name: 'GPT-5.2 Pro', width: '80%', color: '#555', type: 'Planning' }] },
    ],
  },
  credits: {
    chapter: 'Chapter 11',
    title: 'Credits &<br>Membership',
    sidebarHint: 'Check balance anytime in the sidebar',
    freeCredits: [
      { icon: '\u{1F381}', title: 'New User Registration', desc: '100 free credits' },
      { icon: '\u{1F4C5}', title: 'Daily Login', desc: 'Earn 100 extra credits' },
      { icon: '\u{1F465}', title: 'Invite Friends', desc: '100 credits per referral' },
    ],
    balance: { hint: 'Current Credit Balance', amount: '100+', unit: 'Credits \u2014 Click "Credits" to view detailed usage history' },
    plan: { icon: '\u{1F451}', title: 'Membership Subscription Plan', body: 'Enter is launching a membership subscription plan. Stay tuned!' },
  },
  tips: {
    chapter: 'Chapter 12',
    title: 'Pro Tips \u2014 Less Credits, More Building',
    cards: [
      { icon: '\u{1F5C2}', title: 'Use Plan Mode First', body: 'Plan project structure and features with Plan Mode before coding. Significantly reduces credit consumption and avoids repeated modifications from misunderstandings. The go-to workflow for complex projects.', tag: 'Best for Saving Credits', accent: true },
      { icon: '\u{1F3AF}', title: 'Be Specific in Descriptions', body: 'Provide detailed, specific requirement descriptions to AI, including target users, feature boundaries, and visual style references. Get more accurate results and drastically reduce back-and-forth iterations.', accent: false },
      { icon: '\u{1F4CB}', title: 'Start with Templates', body: 'Starting from community templates saves massive time. Get the foundation running first, then customize as needed. 3-5x more efficient than starting from scratch.', accent: false },
      { icon: '\u{1F517}', title: 'Connect GitHub for Version Control', body: 'Connect GitHub for version control to protect your code, enable team collaboration and rollbacks. Projects can be imported to other platforms anytime for continued iteration.', accent: false },
      { icon: '\u{1F916}', title: 'Choose the Right Model', body: 'Use Claude Opus for complex tasks, Claude Sonnet for daily development, and Gemini Flash for quick prototype validation \u2014 the most credit-efficient approach.', accent: false },
      { icon: '\u{1F4F8}', title: 'Screenshot + F12 Debug', body: 'For UI issues, screenshot and send to AI directly. For code errors, open F12 console and paste the complete error message to AI \u2014 highest success rate.', accent: false },
    ],
    bottomBar: {
      text: '\u{1F4A1} <strong>Core Workflow:</strong> Plan with Plan Mode before starting, describe requirements specifically when coding, upload screenshots + F12 errors when stuck \u2014 the three-step method for efficient vibe coding.',
      linkText: 'More Tips \u2192',
      linkUrl: 'https://blog.enter.pro',
    },
  },
  contact: {
    sectionLabel: 'Get In Touch',
    title: 'Contact<br><span class="acc">Enter</span>',
    tagline: 'Questions? Ideas?<br>We\'re here for you.',
    ctaText: 'Start Creating Now',
    ctaUrl: 'https://enter.pro',
    contactsTitle: 'Contact Us',
    contacts: [
      { icon: '\u{1F310}', label: 'Website', value: 'enter.pro', url: 'https://enter.pro' },
      { icon: '\u{1F4DD}', label: 'Blog / Forum', value: 'enter.pro/blog \u00B7 forum.enter.pro', url: 'https://enter.pro/blog' },
      { icon: '\u{1F3AE}', label: 'Discord Community', value: 'discord.gg/BCyR5hXw', url: 'https://discord.gg/BCyR5hXw' },
      { icon: '\u{1F4E7}', label: 'Email Support', value: 'support@enter.pro', url: 'mailto:support@enter.pro' },
    ],
    wechatNote: '\u{1F4AC} China mainland users can join the <span>Enter.pro official WeChat group</span> by scanning the QR code.',
  },
  ui: {
    slideOverview: 'Slide Overview',
    keyboardShortcuts: 'Keyboard Shortcuts',
    prevNext: 'Previous / Next Slide',
    fullscreen: 'Fullscreen',
    closePanel: 'Close Panel',
    showShortcuts: 'Show Shortcuts',
    close: 'Close',
    fullscreenBtn: 'Fullscreen (F)',
    overviewBtn: 'Slide Overview (O)',
    prevBtn: 'Previous (\u2190)',
    nextBtn: 'Next (\u2192)',
    shortcutsBtn: 'Keyboard Shortcuts (?)',
  },
  slideTitles: [
    'Cover', 'What is Enter', 'Audience & Philosophy', 'Quick Start',
    'Three Creation Modes', 'Plan Mode', 'Enter MaaS', 'Skills & MCP',
    'Enter Cloud', 'Integrations', 'Templates & Models', 'Credits & Membership',
    'Pro Tips', 'Contact Us',
  ],
};

const locales = { zh, en };

export function getContent(locale: Locale) {
  return locales[locale];
}

export type ContentType = typeof zh;
