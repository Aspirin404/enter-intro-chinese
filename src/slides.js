/**
 * ╔══════════════════════════════════════════════════════════╗
 * ║         Enter.pro 幻灯片模板层  —  src/slides.js          ║
 * ╠══════════════════════════════════════════════════════════╣
 * ║  每个函数是一个 HTML 模板，数据来自 window.EnterContent。   ║
 * ║  要改文案/链接/列表 → 去 src/content.js                   ║
 * ║  要改布局/结构     → 在这里改对应的模板函数                  ║
 * ╚══════════════════════════════════════════════════════════╝
 *
 *  依赖：src/content.js 必须在本文件之前加载
 */

(function () {

// 快捷引用
var C  = window.EnterContent;
var BR = C.brand;

/* ── 小工具函数 ─────────────────────────────── */

/** 渲染品牌链接列表 */
function renderLinks(keys) {
  return keys.map(function (k) {
    var l = BR.links[k];
    return '<a class="link-item" href="' + l.url + '" target="_blank" rel="noopener">'
         + '<span class="li-icon">' + l.icon + '</span>' + l.label + '</a>';
  }).join('');
}

/** 渲染 chips */
function renderChips(chips, redFirst) {
  return chips.map(function (c, i) {
    var cls = (redFirst && i === 0) ? 'chip red' : 'chip';
    return '<span class="' + cls + '">' + c + '</span>';
  }).join('');
}


/* ═══════════════════════════════════════════
   SLIDE 01 — 封面
═══════════════════════════════════════════ */
function slide01Cover() {
  var d = C.cover;
  var meta = d.meta.map(function (m, i) {
    return (i > 0 ? '<div class="dot-sep"></div>' : '') + '<span>' + m + '</span>';
  }).join('');

  return `
  <section class="slide s-cover" data-index="0" data-title="封面">
    <div class="red-bar"></div>
    <div class="content">
      <p class="c-label anim-in">${d.label}</p>
      <h1 class="anim-in-2">Enter<span class="dot">.</span>pro</h1>
      <p class="subtitle anim-in-3">${d.subtitle}</p>
      <p class="slogan anim-in-4">"${BR.slogan}"</p>
      <div class="meta anim-in-5">${meta}</div>
    </div>
  </section>`;
}


/* ═══════════════════════════════════════════
   SLIDE 02 — Enter 是什么
═══════════════════════════════════════════ */
function slide02What() {
  var d = C.what;
  return `
  <section class="slide s-what" data-index="1" data-title="Enter 是什么">
    <div class="s-inner">
      <div class="s-col-left left anim-in">
        <p class="section-label">${d.chapter}</p>
        <h2>${d.title}</h2>
        <p class="slogan" style="margin-top:16px">"Just press Enter,<br>ship like a pro."</p>
      </div>
      <div class="s-col-right right anim-in-2">
        <p class="section-label">一句话介绍</p>
        <p class="intro-text">${d.intro}</p>
        <div style="width:32px;height:2px;background:var(--red);margin-bottom:24px;"></div>
        <div class="links">${renderLinks(d.linkKeys)}</div>
      </div>
    </div>
  </section>`;
}


/* ═══════════════════════════════════════════
   SLIDE 03 — 目标受众与理念
═══════════════════════════════════════════ */
function slide03Audience() {
  var d = C.audience;
  var items = d.items.map(function (item, i) {
    return `
      <div class="item anim-in-${i + 2}">
        <div class="num-badge red">${item.num}</div>
        <div class="item-body">
          <h4>${item.title}</h4>
          <p>${item.body}</p>
        </div>
      </div>`;
  }).join('');

  return `
  <section class="slide s-audience bg-white" data-index="2" data-title="目标受众与理念">
    <div class="header-row"></div>
    <div class="inner">
      <div class="left-title anim-in">
        <p class="section-label">${d.chapter}</p>
        <h2>${d.title}</h2>
        <p style="margin-top:14px;font-size:10px;color:var(--gray-500);line-height:1.7;">${d.tagline}</p>
      </div>
      <div class="items">${items}</div>
    </div>
  </section>`;
}


/* ═══════════════════════════════════════════
   SLIDE 04 — 如何快速创作
═══════════════════════════════════════════ */
function slide04QuickStart() {
  var d = C.quickstart;
  var steps = d.steps.map(function (s, i) {
    var darkCls = s.dark ? ' dark' : '';
    var animIdx = i + 2;
    var arrow   = i < d.steps.length - 1
      ? '<div class="arrow anim-in-' + (animIdx) + '">→</div>'
      : '';
    return `
      <div class="step${darkCls} anim-in-${animIdx}">
        <p class="step-num">${s.num}</p>
        <div class="step-icon">${s.icon}</div>
        <h3>${s.title}</h3>
        <p>${s.body}</p>
        <p class="step-tag">${s.tag}</p>
      </div>${arrow}`;
  }).join('');

  return `
  <section class="slide s-quickstart" data-index="3" data-title="如何快速创作">
    <div class="inner">
      <div class="header anim-in">
        <p class="section-label" style="margin:0">${d.chapter}</p>
        <h2>${d.title}</h2>
      </div>
      <div class="steps">${steps}</div>
    </div>
  </section>`;
}


/* ═══════════════════════════════════════════
   SLIDE 05 — 三种创作模式
═══════════════════════════════════════════ */
function slide05Modes() {
  var d = C.modes;
  var cards = d.items.map(function (item, i) {
    var featuredCls = item.featured ? ' featured' : '';
    var exampleRow  = item.example
      ? '<p class="mode-example">' + item.example + '</p>'
      : '';
    return `
      <div class="mode-card${featuredCls} anim-in-${i + 2}">
        <div class="icon-circle${item.featured ? ' red' : ''}" style="font-size:16px;">${item.icon}</div>
        <div class="mode-body">
          <h4>${item.title}</h4>
          <p>${item.body}</p>
          ${exampleRow}
        </div>
      </div>`;
  }).join('');

  return `
  <section class="slide s-modes" data-index="4" data-title="三种创作模式">
    <div class="s-inner">
      <div class="s-col-left left anim-in">
        <p class="section-label" style="color:rgba(255,255,255,0.4)">${d.chapter}</p>
        <h2 style="color:#fff;font-size:clamp(24px,3.5vw,40px);font-weight:900;margin-bottom:14px;line-height:1.1;">${d.title}</h2>
        <p style="font-size:11px;color:var(--gray-500);line-height:1.65;">${d.note}</p>
      </div>
      <div class="s-col-right right" style="gap:12px;display:flex;flex-direction:column;justify-content:center;">
        ${cards}
      </div>
    </div>
  </section>`;
}


/* ═══════════════════════════════════════════
   SLIDE 06 — Plan Mode
═══════════════════════════════════════════ */
function slide06PlanMode() {
  var d = C.planMode;
  var feats = d.features.map(function (f, i) {
    return `
      <div class="feat anim-in-${i + 2}">
        <span class="feat-icon">${f.icon}</span>
        <div class="feat-body">
          <h4>${f.title}</h4>
          <p>${f.body}</p>
        </div>
      </div>
      ${i < d.features.length - 1 ? '<div class="divider"></div>' : ''}`;
  }).join('');

  return `
  <section class="slide s-plan bg-white" data-index="5" data-title="Plan Mode">
    <div class="top-accent"></div>
    <div class="inner">
      <div class="left anim-in">
        <p class="section-label">${d.chapter}</p>
        <span class="badge">${d.badge}</span>
        <h2>${d.title}</h2>
        <p>${d.intro}</p>
      </div>
      <div class="right">
        ${feats}
        <div class="divider"></div>
        <div class="tip anim-in-5">${d.tip}</div>
      </div>
    </div>
  </section>`;
}


/* ═══════════════════════════════════════════
   SLIDE 07 — Enter MaaS
═══════════════════════════════════════════ */
function slide07MaaS() {
  var d = C.maas;

  var newFeats = d.newFeatures.map(function (f) {
    var borderStyle = f.isNew ? 'border-color:rgba(255,255,255,0.15)' : '';
    var titleStyle  = f.isNew ? 'style="color:#fff;"' : '';
    return `
      <div class="new-feat" style="${borderStyle}">
        <h5 ${titleStyle}>${f.icon} ${f.title}</h5>
        <p>${f.body}</p>
      </div>`;
  }).join('');

  var modelGroups = d.modelGroups.map(function (g) {
    var chips = g.models.map(function (m) {
      return '<div class="mchip' + (m.hot ? ' hot' : '') + '"><h5>' + m.name + '</h5><p>' + m.desc + '</p></div>';
    }).join('');
    return '<p class="cat-label">' + g.label + '</p><div class="chips">' + chips + '</div>';
  }).join('');

  return `
  <section class="slide s-maas" data-index="6" data-title="Enter MaaS">
    <div class="inner">
      <div class="header anim-in">
        <p class="section-label" style="margin:0;color:rgba(255,255,255,0.3)">${d.chapter}</p>
        <h2>${d.title}</h2>
        <span class="new-badge">${d.badge}</span>
        <span class="sub">${d.subtitle}</span>
      </div>
      <div class="body">
        <div class="intro anim-in-2">
          <p>${d.intro}</p>
          ${newFeats}
        </div>
        <div class="models anim-in-3">${modelGroups}</div>
      </div>
    </div>
  </section>`;
}


/* ═══════════════════════════════════════════
   SLIDE 08 — Skills & MCP
═══════════════════════════════════════════ */
function slide08Skills() {
  var d  = C.skills;
  var sk = d.enterSkills;
  var mc = d.mcp;

  var skillItems = sk.items.map(function (item) {
    return `
      <div class="skill-item">
        <h5>${item.icon} ${item.title}</h5>
        <p>${item.body}</p>
      </div>`;
  }).join('');
  // first one gets featured class
  skillItems = skillItems.replace('class="skill-item"', 'class="skill-item featured"');

  var mcpSteps = mc.steps.map(function (s, i) {
    return `
      <div class="mcp-step">
        <div class="num-badge" style="background:var(--black);color:#fff;font-size:9px;">${i + 1}</div>
        <p>${s}</p>
      </div>`;
  }).join('');

  var mcpChips = mc.chips.map(function (c) {
    return '<span class="chip">' + c + '</span>';
  }).join('');

  return `
  <section class="slide s-skills" data-index="7" data-title="Skills & MCP">
    <div class="top-bar"></div>
    <div class="inner">
      <div class="header anim-in">
        <p class="section-label" style="margin:0">${d.chapter}</p>
        <h2>${d.title}</h2>
      </div>
      <div class="cols">
        <div class="col dark anim-in-2">
          <div class="col-head">
            <div class="icon-circle red" style="width:32px;height:32px;font-size:15px;">⚡</div>
            <h3>${sk.title}</h3>
            <span class="new-tag">NEW</span>
          </div>
          <p class="intro">${sk.intro}</p>
          ${skillItems}
        </div>
        <div class="col white anim-in-3">
          <div class="col-head">
            <div class="icon-circle" style="width:32px;height:32px;font-size:15px;">🔌</div>
            <h3>${mc.title}</h3>
            <span class="new-tag">NEW</span>
          </div>
          <p class="intro">${mc.intro}</p>
          ${mcpSteps}
          <div class="svc-chips">${mcpChips}</div>
          <div class="note">${mc.note}</div>
        </div>
      </div>
    </div>
  </section>`;
}


/* ═══════════════════════════════════════════
   SLIDE 09 — Enter Cloud
═══════════════════════════════════════════ */
function slide09Cloud() {
  var d = C.cloud;

  var services = d.services.map(function (s) {
    return `
      <div class="fc">
        <span class="fi">${s.icon}</span>
        <div><h4>${s.title}</h4><p>${s.body}</p></div>
      </div>`;
  }).join('');

  return `
  <section class="slide s-cloud" data-index="8" data-title="Enter Cloud">
    <div class="s-inner">
      <div class="s-col-left left anim-in">
        <p class="section-label" style="color:rgba(255,255,255,0.4)">${d.chapter}</p>
        <h2>${d.title}</h2>
        <span class="badge">${d.badge}</span>
        <p>${d.intro}</p>
        <div class="enable-box">
          <h5>${d.enableTip.title}</h5>
          <p>${d.enableTip.body}</p>
        </div>
      </div>
      <div class="s-col-right right anim-in-2">
        <p class="section-label">${d.servicesTitle}</p>
        <h3 style="font-size:clamp(13px,1.6vw,16px);font-weight:900;color:var(--black);margin-bottom:12px;">${d.servicesSubtitle}</h3>
        <div class="right-inner">
          <div class="feat-grid">${services}</div>
          <div class="free-launch-banner">
            <span class="free-icon">🎉</span>
            <div><strong>${d.freeBanner}</strong></div>
          </div>
          <div class="agent-bar">
            <span class="ai">🤖</span>
            <p>${d.agentTip}</p>
          </div>
        </div>
      </div>
    </div>
  </section>`;
}


/* ═══════════════════════════════════════════
   SLIDE 10 — 集成能力
═══════════════════════════════════════════ */
function slide10Integrations() {
  var d = C.integrations;
  var cards = d.cards;

  // 左栏：第一张卡（accent 深色）
  var leftCard = (function (card) {
    var steps = card.steps.map(function (s, i) {
      return '<div class="step-row"><span class="step-num">' + (i + 1) + '</span><span>' + s + '</span></div>';
    }).join('');
    return `
      <div class="icard accent anim-in-2">
        <div class="icard-body">
          <div class="stripe"></div>
          <div class="icard-head">
            <div class="icon-circle light" style="font-size:18px;">${card.icon}</div>
            <h3>${card.title}</h3>
          </div>
          <p class="desc">${card.desc}</p>
          <div class="icard-steps">${steps}</div>
        </div>
        <div class="tags">${renderChips(card.chips)}</div>
      </div>`;
  })(cards[0]);

  // 右栏：其余两张（白色）
  var rightCards = cards.slice(1).map(function (card, i) {
    var list = (card.list || []).map(function (li) {
      return '<li>' + li + '</li>';
    }).join('');
    return `
      <div class="icard white anim-in-${i + 3}">
        <div class="icard-body">
          <div class="stripe"></div>
          <div class="icard-head">
            <div class="icon-circle light" style="font-size:18px;">${card.icon}</div>
            <h3>${card.title}</h3>
          </div>
          <p class="desc">${card.desc}</p>
          <ul class="icard-list">${list}</ul>
        </div>
        <div class="tags">${renderChips(card.chips)}</div>
      </div>`;
  }).join('');

  return `
  <section class="slide s-integrations" data-index="9" data-title="集成能力">
    <div class="inner">
      <div class="header anim-in">
        <p class="section-label" style="margin:0">${d.chapter}</p>
        <h2>${d.title}</h2>
      </div>
      <div class="cards">
        <div class="cards-col-left">${leftCard}</div>
        <div class="cards-col-right">${rightCards}</div>
      </div>
    </div>
  </section>`;
}


/* ═══════════════════════════════════════════
   SLIDE 11 — 模板 & 模型
═══════════════════════════════════════════ */
function slide11Templates() {
  var d = C.templates;

  var tplTags = d.templateTags.map(function (t) {
    var isRed = d.templateTagsRed.indexOf(t) !== -1;
    return '<span class="chip' + (isRed ? ' red' : '') + '">' + t + '</span>';
  }).join('');

  var modelRows = d.modelGroups.map(function (g, gi) {
    var rows = g.models.map(function (m) {
      var colorStyle = m.color ? 'background:' + m.color : '';
      return `
        <div class="model-row">
          <span class="model-name">${m.name}</span>
          <div class="model-bar-bg"><div class="model-bar" style="width:${m.width};${colorStyle}"></div></div>
          <span class="model-type">${m.type}</span>
        </div>`;
    }).join('');
    var divider = gi < d.modelGroups.length - 1
      ? '<div style="height:1px;background:var(--gray-100);margin:6px 0;"></div>'
      : '';
    return rows + divider;
  }).join('');

  return `
  <section class="slide s-templates bg-white" data-index="10" data-title="模板 & 模型">
    <div class="s-inner">
      <div class="s-col-left left anim-in" style="border-right:1px solid var(--gray-100);">
        <p class="section-label">${d.chapter}</p>
        <h2>${d.title}</h2>
        <p style="font-size:10px;color:var(--gray-500);line-height:1.65;margin:12px 0 14px;">${d.templateDesc}</p>
        <div class="tpl-tags">${tplTags}</div>
      </div>
      <div class="s-col-right right anim-in-2">
        <p class="section-label">支持的 AI 模型</p>
        <h3 style="font-size:16px;font-weight:900;color:var(--black);margin-bottom:18px;">${d.modelsTitle}</h3>
        <div>${modelRows}</div>
      </div>
    </div>
  </section>`;
}


/* ═══════════════════════════════════════════
   SLIDE 12 — 积分与会员
═══════════════════════════════════════════ */
function slide12Credits() {
  var d = C.credits;

  var freeItems = d.freeCredits.map(function (item) {
    return `
      <div class="credit-item">
        <div class="ci-icon">${item.icon}</div>
        <div class="ci-body"><h4>${item.title}</h4><p>${item.desc}</p></div>
      </div>`;
  }).join('');

  return `
  <section class="slide s-credits" data-index="11" data-title="积分与会员">
    <div class="s-inner">
      <div class="s-col-left left anim-in">
        <p class="section-label" style="color:rgba(255,255,255,0.35)">${d.chapter}</p>
        <h2>${d.title}</h2>
        ${freeItems}
      </div>
      <div class="s-col-right right anim-in-2">
        <h3>在侧边栏随时查看余额</h3>
        <div class="balance">
          <p class="hint">${d.balance.hint}</p>
          <p class="amount">${d.balance.amount}</p>
          <p class="unit">${d.balance.unit}</p>
        </div>
        <div class="plan-box">
          <span style="font-size:18px;">${d.plan.icon}</span>
          <div><h4>${d.plan.title}</h4><p>${d.plan.body}</p></div>
        </div>
      </div>
    </div>
  </section>`;
}


/* ═══════════════════════════════════════════
   SLIDE 13 — 使用技巧
═══════════════════════════════════════════ */
function slide13Tips() {
  var d = C.tips;

  var cards = d.cards.map(function (card, i) {
    var accentCls = card.accent ? ' accent' : ' light';
    var animIdx   = i < 2 ? 2 : (i < 4 ? 3 : 4);
    var tagRow    = card.tag ? '<span class="tip-hl">' + card.tag + '</span>' : '';
    return `
      <div class="tip-card${accentCls} anim-in-${animIdx}">
        <div class="tip-top"><span class="tip-emoji">${card.icon}</span><h4>${card.title}</h4></div>
        <p>${card.body}</p>
        ${tagRow}
      </div>`;
  }).join('');

  var bb = d.bottomBar;
  return `
  <section class="slide s-tips" data-index="12" data-title="使用技巧">
    <div class="inner">
      <div class="header anim-in">
        <p class="section-label" style="margin:0">${d.chapter}</p>
        <h2>${d.title}</h2>
      </div>
      <div class="grid">${cards}</div>
      <div class="tips-spacer"></div>
      <div class="bottom-bar anim-in-5">
        <p class="bb-text">${bb.text}</p>
        <a class="bb-link" href="${bb.linkUrl}" target="_blank" rel="noopener">${bb.linkText}</a>
      </div>
    </div>
  </section>`;
}


/* ═══════════════════════════════════════════
   SLIDE 14 — 联系我们
═══════════════════════════════════════════ */
function slide14Contact() {
  var d = C.contact;

  var contacts = d.contacts.map(function (c, i) {
    var divider = i < d.contacts.length - 1
      ? '<div style="height:1px;background:var(--gray-100);margin:4px 0 12px;"></div>'
      : '';
    return `
      <a class="link-row" href="${c.url}" target="_blank" rel="noopener">
        <div class="link-icon">${c.icon}</div>
        <div class="link-info"><p class="lt">${c.label}</p><p class="lv">${c.value}</p></div>
      </a>${divider}`;
  }).join('');

  return `
  <section class="slide s-contact bg-white" data-index="13" data-title="联系我们">
    <div class="red-border-left"></div>
    <div class="s-inner">
      <div class="s-col-left left anim-in" style="border-right:1px solid var(--gray-100);">
        <p class="section-label">${d.sectionLabel}</p>
        <h2>${d.title}</h2>
        <p class="tagline">${d.tagline}</p>
        <div class="cta" onclick="window.open('${d.ctaUrl}','_blank')">
          <span>${d.ctaText}</span><span class="arr">→</span>
        </div>
      </div>
      <div class="s-col-right right anim-in-2">
        <h3>${d.contactsTitle}</h3>
        ${contacts}
        <div class="wechat-note">${d.wechatNote}</div>
      </div>
    </div>
  </section>`;
}


/* ── 按顺序导出所有 slides ── */
window.EnterSlides = {
  ALL: [
    slide01Cover,
    slide02What,
    slide03Audience,
    slide04QuickStart,
    slide05Modes,
    slide06PlanMode,
    slide07MaaS,
    slide08Skills,
    slide09Cloud,
    slide10Integrations,
    slide11Templates,
    slide12Credits,
    slide13Tips,
    slide14Contact,
  ]
};

})(); // end IIFE
