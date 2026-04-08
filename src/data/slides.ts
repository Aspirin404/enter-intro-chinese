/**
 * Slide HTML template functions
 * Each function returns an HTML string for one slide
 */
import { content as C, brand as BR } from './content';

function renderLinks(keys: string[]) {
  return keys.map(k => {
    const l = BR.links[k];
    if (!l) return '';
    return `<a class="link-item" href="${l.url}" target="_blank" rel="noopener"><span class="li-icon">${l.icon}</span>${l.label}</a>`;
  }).join('');
}

function renderChips(chips: string[]) {
  return chips.map(c => `<span class="chip">${c}</span>`).join('');
}

export function getSlideHTML(): string[] {
  return [
    // Slide 01 — Cover
    (() => {
      const d = C.cover;
      const meta = d.meta.map((m, i) => (i > 0 ? '<div class="dot-sep"></div>' : '') + `<span>${m}</span>`).join('');
      return `<section class="slide s-cover is-active" data-index="0" data-title="\u5C01\u9762"><div class="red-bar"></div><div class="content"><p class="c-label anim-in">${d.label}</p><h1 class="anim-in-2">Enter<span class="dot">.</span>pro</h1><p class="subtitle anim-in-3">${d.subtitle}</p><p class="slogan anim-in-4">"${BR.slogan}"</p><div class="meta anim-in-5">${meta}</div></div></section>`;
    })(),

    // Slide 02 — What
    (() => {
      const d = C.what;
      return `<section class="slide s-what" data-index="1" data-title="Enter \u662F\u4EC0\u4E48"><div class="s-inner"><div class="s-col-left left anim-in"><p class="section-label">${d.chapter}</p><h2>${d.title}</h2><p class="slogan" style="margin-top:16px">"Just press Enter,<br>ship like a pro."</p></div><div class="s-col-right right anim-in-2"><p class="section-label">\u4E00\u53E5\u8BDD\u4ECB\u7ECD</p><p class="intro-text">${d.intro}</p><div style="width:32px;height:2px;background:var(--red);margin-bottom:24px;"></div><div class="links">${renderLinks(d.linkKeys)}</div></div></div></section>`;
    })(),

    // Slide 03 — Audience
    (() => {
      const d = C.audience;
      const items = d.items.map((item, i) => `<div class="item anim-in-${i + 2}"><div class="num-badge red">${item.num}</div><div class="item-body"><h4>${item.title}</h4><p>${item.body}</p></div></div>`).join('');
      return `<section class="slide s-audience bg-white" data-index="2" data-title="\u76EE\u6807\u53D7\u4F17\u4E0E\u7406\u5FF5"><div class="header-row"></div><div class="inner"><div class="left-title anim-in"><p class="section-label">${d.chapter}</p><h2>${d.title}</h2><p style="margin-top:14px;font-size:10px;color:var(--gray-500);line-height:1.7;">${d.tagline}</p></div><div class="items">${items}</div></div></section>`;
    })(),

    // Slide 04 — QuickStart
    (() => {
      const d = C.quickstart;
      const steps = d.steps.map((s, i) => {
        const darkCls = s.dark ? ' dark' : '';
        const arrow = i < d.steps.length - 1 ? `<div class="arrow anim-in-${i + 2}">\u2192</div>` : '';
        return `<div class="step${darkCls} anim-in-${i + 2}"><p class="step-num">${s.num}</p><div class="step-icon">${s.icon}</div><h3>${s.title}</h3><p>${s.body}</p><p class="step-tag">${s.tag}</p></div>${arrow}`;
      }).join('');
      return `<section class="slide s-quickstart" data-index="3" data-title="\u5982\u4F55\u5FEB\u901F\u521B\u4F5C"><div class="inner"><div class="header anim-in"><p class="section-label" style="margin:0">${d.chapter}</p><h2>${d.title}</h2></div><div class="steps">${steps}</div></div></section>`;
    })(),

    // Slide 05 — Modes
    (() => {
      const d = C.modes;
      const cards = d.items.map((item, i) => {
        const featuredCls = item.featured ? ' featured' : '';
        const exampleRow = item.example ? `<p class="mode-example">${item.example}</p>` : '';
        return `<div class="mode-card${featuredCls} anim-in-${i + 2}"><div class="icon-circle${item.featured ? ' red' : ''}" style="font-size:16px;">${item.icon}</div><div class="mode-body"><h4>${item.title}</h4><p>${item.body}</p>${exampleRow}</div></div>`;
      }).join('');
      return `<section class="slide s-modes" data-index="4" data-title="\u4E09\u79CD\u521B\u4F5C\u6A21\u5F0F"><div class="s-inner"><div class="s-col-left left anim-in"><p class="section-label" style="color:rgba(255,255,255,0.4)">${d.chapter}</p><h2 style="color:#fff;font-size:clamp(24px,3.5vw,40px);font-weight:900;margin-bottom:14px;line-height:1.1;">${d.title}</h2><p style="font-size:11px;color:var(--gray-500);line-height:1.65;">${d.note}</p></div><div class="s-col-right right" style="gap:12px;display:flex;flex-direction:column;justify-content:center;">${cards}</div></div></section>`;
    })(),

    // Slide 06 — Plan Mode
    (() => {
      const d = C.planMode;
      const feats = d.features.map((f, i) => `<div class="feat anim-in-${i + 2}"><span class="feat-icon">${f.icon}</span><div class="feat-body"><h4>${f.title}</h4><p>${f.body}</p></div></div>${i < d.features.length - 1 ? '<div class="divider"></div>' : ''}`).join('');
      return `<section class="slide s-plan bg-white" data-index="5" data-title="Plan Mode"><div class="top-accent"></div><div class="inner"><div class="left anim-in"><p class="section-label">${d.chapter}</p><span class="badge">${d.badge}</span><h2>${d.title}</h2><p>${d.intro}</p></div><div class="right">${feats}<div class="divider"></div><div class="tip anim-in-5">${d.tip}</div></div></div></section>`;
    })(),

    // Slide 07 — MaaS
    (() => {
      const d = C.maas;
      const newFeats = d.newFeatures.map(f => `<div class="new-feat"><h5>${f.icon} ${f.title}</h5><p>${f.body}</p></div>`).join('');
      const modelGroups = d.modelGroups.map(g => {
        const chips = g.models.map(m => `<div class="mchip${m.hot ? ' hot' : ''}"><h5>${m.name}</h5><p>${m.desc}</p></div>`).join('');
        return `<p class="cat-label">${g.label}</p><div class="chips">${chips}</div>`;
      }).join('');
      return `<section class="slide s-maas" data-index="6" data-title="Enter MaaS"><div class="inner"><div class="header anim-in"><p class="section-label" style="margin:0;color:rgba(255,255,255,0.3)">${d.chapter}</p><h2>${d.title}</h2><span class="new-badge">${d.badge}</span><span class="sub">${d.subtitle}</span></div><div class="body"><div class="intro anim-in-2"><p>${d.intro}</p>${newFeats}</div><div class="models anim-in-3">${modelGroups}</div></div></div></section>`;
    })(),

    // Slide 08 — Skills
    (() => {
      const d = C.skills;
      const sk = d.enterSkills;
      const mc = d.mcp;
      let skillItems = sk.items.map((item, i) => `<div class="skill-item${i === 0 ? ' featured' : ''}"><h5>${item.icon} ${item.title}</h5><p>${item.body}</p></div>`).join('');
      const mcpSteps = mc.steps.map((s, i) => `<div class="mcp-step"><div class="num-badge" style="background:var(--black);color:#fff;font-size:9px;">${i + 1}</div><p>${s}</p></div>`).join('');
      const mcpChips = mc.chips.map(c => `<span class="chip">${c}</span>`).join('');
      return `<section class="slide s-skills" data-index="7" data-title="Skills & MCP"><div class="top-bar"></div><div class="inner"><div class="header anim-in"><p class="section-label" style="margin:0">${d.chapter}</p><h2>${d.title}</h2></div><div class="cols"><div class="col dark anim-in-2"><div class="col-head"><div class="icon-circle red" style="width:32px;height:32px;font-size:15px;">\u26A1</div><h3>${sk.title}</h3><span class="new-tag">NEW</span></div><p class="intro">${sk.intro}</p>${skillItems}</div><div class="col white anim-in-3"><div class="col-head"><div class="icon-circle" style="width:32px;height:32px;font-size:15px;">\u{1F50C}</div><h3>${mc.title}</h3><span class="new-tag">NEW</span></div><p class="intro">${mc.intro}</p>${mcpSteps}<div class="svc-chips">${mcpChips}</div><div class="note">${mc.note}</div></div></div></div></section>`;
    })(),

    // Slide 09 — Cloud
    (() => {
      const d = C.cloud;
      const services = d.services.map(s => `<div class="fc"><span class="fi">${s.icon}</span><div><h4>${s.title}</h4><p>${s.body}</p></div></div>`).join('');
      return `<section class="slide s-cloud" data-index="8" data-title="Enter Cloud"><div class="s-inner"><div class="s-col-left left anim-in"><p class="section-label" style="color:rgba(255,255,255,0.4)">${d.chapter}</p><h2>${d.title}</h2><span class="badge">${d.badge}</span><p>${d.intro}</p><div class="enable-box"><h5>${d.enableTip.title}</h5><p>${d.enableTip.body}</p></div></div><div class="s-col-right right anim-in-2"><p class="section-label">${d.servicesTitle}</p><h3 style="font-size:clamp(13px,1.6vw,16px);font-weight:900;color:var(--black);margin-bottom:12px;">${d.servicesSubtitle}</h3><div class="right-inner"><div class="feat-grid">${services}</div><div class="free-launch-banner"><span class="free-icon">\u{1F389}</span><div><strong>${d.freeBanner}</strong></div></div><div class="agent-bar"><span class="ai">\u{1F916}</span><p>${d.agentTip}</p></div></div></div></div></section>`;
    })(),

    // Slide 10 — Integrations
    (() => {
      const d = C.integrations;
      const cards = d.cards;
      const leftCard = (() => {
        const card = cards[0];
        const steps = card.steps!.map((s, i) => `<div class="step-row"><span class="step-num">${i + 1}</span><span>${s}</span></div>`).join('');
        return `<div class="icard accent anim-in-2"><div class="icard-body"><div class="stripe"></div><div class="icard-head"><div class="icon-circle light" style="font-size:18px;">${card.icon}</div><h3>${card.title}</h3></div><p class="desc">${card.desc}</p><div class="icard-steps">${steps}</div></div><div class="tags">${renderChips(card.chips)}</div></div>`;
      })();
      const rightCards = cards.slice(1).map((card, i) => {
        const list = (card.list || []).map(li => `<li>${li}</li>`).join('');
        return `<div class="icard white anim-in-${i + 3}"><div class="icard-body"><div class="stripe"></div><div class="icard-head"><div class="icon-circle light" style="font-size:18px;">${card.icon}</div><h3>${card.title}</h3></div><p class="desc">${card.desc}</p><ul class="icard-list">${list}</ul></div><div class="tags">${renderChips(card.chips)}</div></div>`;
      }).join('');
      return `<section class="slide s-integrations" data-index="9" data-title="\u96C6\u6210\u80FD\u529B"><div class="inner"><div class="header anim-in"><p class="section-label" style="margin:0">${d.chapter}</p><h2>${d.title}</h2></div><div class="cards"><div class="cards-col-left">${leftCard}</div><div class="cards-col-right">${rightCards}</div></div></div></section>`;
    })(),

    // Slide 11 — Templates
    (() => {
      const d = C.templates;
      const tplTags = d.templateTags.map(t => {
        const isRed = d.templateTagsRed.includes(t);
        return `<span class="chip${isRed ? ' red' : ''}">${t}</span>`;
      }).join('');
      const modelRows = d.modelGroups.map((g, gi) => {
        const rows = g.models.map(m => {
          const colorStyle = m.color ? `background:${m.color}` : '';
          return `<div class="model-row"><span class="model-name">${m.name}</span><div class="model-bar-bg"><div class="model-bar" style="width:${m.width};${colorStyle}"></div></div><span class="model-type">${m.type}</span></div>`;
        }).join('');
        const divider = gi < d.modelGroups.length - 1 ? '<div style="height:1px;background:var(--gray-100);margin:6px 0;"></div>' : '';
        return rows + divider;
      }).join('');
      return `<section class="slide s-templates bg-white" data-index="10" data-title="\u6A21\u677F & \u6A21\u578B"><div class="s-inner"><div class="s-col-left left anim-in" style="border-right:1px solid var(--gray-100);"><p class="section-label">${d.chapter}</p><h2>${d.title}</h2><p style="font-size:10px;color:var(--gray-500);line-height:1.65;margin:12px 0 14px;">${d.templateDesc}</p><div class="tpl-tags">${tplTags}</div></div><div class="s-col-right right anim-in-2"><p class="section-label">\u652F\u6301\u7684 AI \u6A21\u578B</p><h3 style="font-size:16px;font-weight:900;color:var(--black);margin-bottom:18px;">${d.modelsTitle}</h3><div>${modelRows}</div></div></div></section>`;
    })(),

    // Slide 12 — Credits
    (() => {
      const d = C.credits;
      const freeItems = d.freeCredits.map(item => `<div class="credit-item"><div class="ci-icon">${item.icon}</div><div class="ci-body"><h4>${item.title}</h4><p>${item.desc}</p></div></div>`).join('');
      return `<section class="slide s-credits" data-index="11" data-title="\u79EF\u5206\u4E0E\u4F1A\u5458"><div class="s-inner"><div class="s-col-left left anim-in"><p class="section-label" style="color:rgba(255,255,255,0.35)">${d.chapter}</p><h2>${d.title}</h2>${freeItems}</div><div class="s-col-right right anim-in-2"><h3>\u5728\u4FA7\u8FB9\u680F\u968F\u65F6\u67E5\u770B\u4F59\u989D</h3><div class="balance"><p class="hint">${d.balance.hint}</p><p class="amount">${d.balance.amount}</p><p class="unit">${d.balance.unit}</p></div><div class="plan-box"><span style="font-size:18px;">${d.plan.icon}</span><div><h4>${d.plan.title}</h4><p>${d.plan.body}</p></div></div></div></div></section>`;
    })(),

    // Slide 13 — Tips
    (() => {
      const d = C.tips;
      const cards = d.cards.map((card, i) => {
        const accentCls = card.accent ? ' accent' : ' light';
        const animIdx = i < 2 ? 2 : (i < 4 ? 3 : 4);
        const tagRow = card.tag ? `<span class="tip-hl">${card.tag}</span>` : '';
        return `<div class="tip-card${accentCls} anim-in-${animIdx}"><div class="tip-top"><span class="tip-emoji">${card.icon}</span><h4>${card.title}</h4></div><p>${card.body}</p>${tagRow}</div>`;
      }).join('');
      const bb = d.bottomBar;
      return `<section class="slide s-tips" data-index="12" data-title="\u4F7F\u7528\u6280\u5DE7"><div class="inner"><div class="header anim-in"><p class="section-label" style="margin:0">${d.chapter}</p><h2>${d.title}</h2></div><div class="grid">${cards}</div><div class="bottom-bar anim-in-5"><p class="bb-text">${bb.text}</p><a class="bb-link" href="${bb.linkUrl}" target="_blank" rel="noopener">${bb.linkText}</a></div></div></section>`;
    })(),

    // Slide 14 — Contact
    (() => {
      const d = C.contact;
      const contacts = d.contacts.map((c, i) => {
        const divider = i < d.contacts.length - 1 ? '<div style="height:1px;background:var(--gray-100);margin:4px 0 12px;"></div>' : '';
        return `<a class="link-row" href="${c.url}" target="_blank" rel="noopener"><div class="link-icon">${c.icon}</div><div class="link-info"><p class="lt">${c.label}</p><p class="lv">${c.value}</p></div></a>${divider}`;
      }).join('');
      return `<section class="slide s-contact bg-white" data-index="13" data-title="\u8054\u7CFB\u6211\u4EEC"><div class="red-border-left"></div><div class="s-inner"><div class="s-col-left left anim-in" style="border-right:1px solid var(--gray-100);"><p class="section-label">${d.sectionLabel}</p><h2>${d.title}</h2><p class="tagline">${d.tagline}</p><div class="cta" onclick="window.open('${d.ctaUrl}','_blank')"><span>${d.ctaText}</span><span class="arr">\u2192</span></div></div><div class="s-col-right right anim-in-2"><h3>${d.contactsTitle}</h3>${contacts}<div class="wechat-note">${d.wechatNote}</div></div></div></section>`;
    })(),
  ];
}

export const SLIDE_TITLES = [
  '\u5C01\u9762', 'Enter \u662F\u4EC0\u4E48', '\u76EE\u6807\u53D7\u4F17\u4E0E\u7406\u5FF5', '\u5982\u4F55\u5FEB\u901F\u521B\u4F5C',
  '\u4E09\u79CD\u521B\u4F5C\u6A21\u5F0F', 'Plan Mode', 'Enter MaaS', 'Skills & MCP',
  'Enter Cloud', '\u96C6\u6210\u80FD\u529B', '\u6A21\u677F & \u6A21\u578B', '\u79EF\u5206\u4E0E\u4F1A\u5458',
  '\u4F7F\u7528\u6280\u5DE7', '\u8054\u7CFB\u6211\u4EEC',
];

export const SLIDE_ICONS = ['\u{1F3AF}','\u2728','\u{1F465}','\u26A1','\u{1F3A8}','\u{1F5C2}','\u{1F916}','\u26A1','\u2601\uFE0F','\u{1F517}','\u{1F4CB}','\u{1F48E}','\u{1F4A1}','\u{1F4EC}'];
