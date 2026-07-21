# Engineering roadmap / TODO

Prioritized backlog for turning this portfolio into a full software-engineering showcase. Ordered by value-for-effort **in this repo's context** (solo, static-generated, content-heavy, Vercel-deployed).

## P0 — quality gates (cheap, do first)

- [ ] **CI on GitHub Actions**: lint + `tsc --noEmit` + `next build` on every push/PR. Vercel already handles CD (preview per branch, prod on main) — CI adds the quality gate in front of it.
- [ ] **Link checker (scheduled)**: many pages link to `yuan00611.github.io`, YouTube, ACM/IEEE, gov sites. A weekly CI job (e.g. lychee) catching dead links protects the site's credibility. *This repo's most portfolio-specific risk.*
- [ ] **Per-page SEO metadata + OG images**: every `/projects/*` currently shares one global title/description (pages are client components). Needs a small refactor — server `layout.tsx` or server-wrapper per route with `generateMetadata`, plus `next/og` share images and a sitemap. **Higher real-world value than any monitoring tool on this list.**

## P1 — testing & accessibility (on-brand)

- [ ] **Playwright smoke suite**: all 24 routes render, nav works, theme toggle flips `html.dark`, YouTube iframes present. The tests this repo actually needs — not unit tests for content pages.
- [ ] **Accessibility audit in CI**: axe-core via Playwright on every page, both themes. The portfolio claims WCAG expertise (LifeLong page) — the repo should prove it on itself.
- [ ] **Lighthouse CI with budgets**: perf/a11y/SEO/best-practices thresholds per PR. Watch LCP on image-heavy case pages.
- [ ] **Re-host archive images**: wind / carbon / vincent / hnd / museum / liberary assets still hotlink the old GitHub Pages site — single point of failure and a perf cost. Move to `public/`, drop `remotePatterns`.

## P2 — design system as artifact

- [ ] **Extract design tokens**: colors / type scale / spacing / the 12 case-study duo-palettes out of `globals.css` + `page.css.tsx` files into a tokens module. Prerequisite that makes both Storybook and Figma sync 10× easier.
- [ ] **Storybook**: scope it to shared primitives (`components/ui`, Reveal, Navigation, card/pillar/archive patterns) + a **palette gallery story** showing all 12 case-study palettes in both themes. Debbie cites Storybook practice at Athena — this shows it instead of telling it.
- [ ] **Chromatic or Storybook test-runner** (optional): visual regression on the primitives once Storybook exists.
- [ ] **Motion case study — "The motion system behind this site"**: a case page that makes MOTION the protagonist, using assets that already exist — IntroOverlay orb animation, CapabilityStrip keyframes, scroll reveals, reduced-motion handling, WWB game feel. Feeds the Design Engineer / Design Systems positioning; merges with Storybook (motion primitives as stories). Optional companion: an interaction lab in `debbie-labs` (springs, micro-interactions) that graduates pieces into the case page.

## P3 — showcase experiments

- [ ] **Figma design-system sync (Figma MCP)**: push the extracted tokens + primitives into a Figma library. Low infra ROI for a solo site, **high value as a design-technologist showcase** — code→design bridging is literally the positioning. Do after token extraction.
- [ ] **Bundle analysis**: `@next/bundle-analyzer` pass; styled-components runtime and per-route JS are the things to look at.
- [ ] **Dependabot/Renovate**: automated dependency PRs (pairs with CI from P0).

## Perspective links — the "Prism" experiment

Same truth, different lens: let the same verified work re-narrate itself per audience. Trust principles: never invent experience; always show the current lens; one click back to the full story; visitor never fills a form (one-tap persona chips at most — sender-side links do the targeting).

- [ ] **Phase 1 — hand-authored lens switcher** on the homepage: "Meet Debbie as: Storyteller / Design Engineer / Frontend Engineer / Forward Deployed Engineer". Switching changes hero headline, section order, and card emphasis. Zero runtime AI, zero hallucination risk — and it doubles as the site's strongest AI-interaction case study (it demonstrates the calibrated-trust thesis on itself).
- [ ] **Phase 2 — application-specific links** (`/for/<company>` style): AI-assisted generation *offline*, human-reviewed before publish, evidence-linked.
- [ ] **Phase 3 (parked) — SaaS validation**: only revisit after ~10 real people confirm the same pain ("have you made 2+ resumes/portfolios from the same experience with different narratives?"). Job-seeker tools churn when users get hired — sprint pricing, not subscriptions, if it ever happens.
- [ ] **Content triage — NTU Maker / Animation** and other exploratory work: sort each piece into the existing weight classes (archive row / About mention / deliberately omitted). Test: can it connect to one of the three axes in a sentence? Animation is extra interesting — it's evidence for the hero's MOTION keyword.
- [ ] **Numeracy Lab data-storytelling articles** (OKAPI 三國 series + 數感 column): route to Story To Be's data-storytelling section when the studio site is rebuilt; resume gets the internship entry. Positioning: published data storytelling, not "data viz skills" — D3 evidence lives in Dell.

## Identity & repo structure — Story To Be

Three identities, three homes — never merged: **debbie-portfolio** (career; curated, evidence-linked) · **Story To Be** (studio brand — narrative-games publisher, for players/clients) · **debbie-labs** (private playground; messy on purpose). Pipeline: experiments start in labs → graduate either into portfolio case studies (career evidence) or Story To Be products (brand/commercial).

- [ ] **Scaffold `debbie-labs`** repo: README + one-folder-per-experiment convention + graduation rule (grown up → own repo).
- [ ] **Rewrite the Story To Be studio site** ([storytobestudio.com](https://storytobestudio.com/), repo `storytobe/storytobe.github.io` — currently a BootstrapMade template): full narrative + page rewrite. Thesis: *stories in every medium* — games, data storytelling, immersive. Works get studio product pages (WWB "Play it" page, dataviz pieces as data stories) while portfolio case studies stay unchanged — same truth, two lenses; "A Story To Be game" credit cross-links the two. **Decided (2026-07-20): works-first.** Homepage leads with works; collaboration via a simple email contact ("Interested in working together? → email") — no service menu, no Calendly-forward front door. A service only earns a mention once a work proves it (immersive ✓ via Wind/Museum AR; AI-workflow-for-creative-teams pending a public "How we build with AI" page). Run the narrative process (thesis → audit → line-by-line copy) before rebuilding.
- [ ] **Vault triage — Blender / AutoCAD / Maker**: everything goes into the vault (labs / asset library); surface per target only. AutoCAD + CAE degree → gold for AEC-tech roles (e.g. Autodesk); Blender → pipeline evidence for 3D-web/spatial (Three.js/R3F); Maker → already evidenced by the Arduino work on the Wind page. Default-hidden ≠ deleted — the resume shows the lens, the vault keeps the truth.

## Deliberately skipped (with reasons)

- **Datadog**: RUM/APM for a static personal site is overkill and paid. `@vercel/analytics` is already installed; add **Vercel Speed Insights** for free web-vitals RUM instead. Revisit Datadog only as a deliberate learning lab, not as infrastructure this site needs.
- **Sentry / error monitoring**: a statically generated content site has almost no runtime error surface. Not worth the wiring.
- **Unit test coverage targets**: wrong tool for content pages; the Playwright + axe + Lighthouse stack above is the right pyramid for this repo.

## Content open items (carried from worklog)

- [ ] Confirm 輔具之友 gov link opens in a browser (curl-blocked)
- [ ] Swap WWB journal / homepage thumbs when newer screenshots exist

---

# 中文版

依「這個 repo 的情境」(個人專案、靜態生成、內容為主、Vercel 部署)按 CP 值排序的工程待辦。

## P0 — 品質閘門(便宜,先做)

- [ ] **GitHub Actions CI**:每次 push/PR 跑 lint + `tsc --noEmit` + `next build`。Vercel 已經是 CD(branch preview + main 上 prod)——CI 是補在前面的品質閘門。
- [ ] **連結檢查(排程)**:大量頁面連到 `yuan00611.github.io`、YouTube、ACM/IEEE、政府網站。每週 CI(如 lychee)抓死連結,保護網站可信度。*這個 repo 最專屬的風險。*
- [ ] **每頁 SEO metadata + OG 圖**:目前所有 `/projects/*` 共用同一組全域 title/description(頁面是 client component)。需要小重構——server layout 或 server wrapper 配 `generateMetadata`,加 `next/og` 分享圖和 sitemap。**真實價值高於清單上任何監控工具。**

## P1 — 測試與無障礙(最對品牌)

- [ ] **Playwright smoke 測試**:24 條路由會渲染、導覽有效、主題切換翻轉 `html.dark`、YouTube iframe 存在。這個 repo 真正需要的測試形狀——不是內容頁的 unit test。
- [ ] **CI 裡的無障礙稽核**:axe-core 走 Playwright 掃每一頁、兩種主題。Portfolio 拿 WCAG 專業說故事(LifeLong 頁)——repo 該在自己身上證明。
- [ ] **Lighthouse CI 設 budget**:每個 PR 檢查 perf/a11y/SEO/best-practices 門檻。盯緊圖多案例頁的 LCP。
- [ ] **舊站圖片搬家**:風機 / 碳足跡 / 梵谷 / HnD / 博物館 / Liberary 素材還在外連舊 GitHub Pages——單點故障 + 效能成本。搬進 `public/`,移除 `remotePatterns`。

## P2 — Design system 作為作品

- [ ] **抽取 design tokens**:把顏色 / 字級 / 間距 / 12 套案例雙色盤從 `globals.css` 和各 `page.css.tsx` 抽成 tokens 模組。這是讓 Storybook 和 Figma 同步都容易十倍的前置。
- [ ] **Storybook**:限縮範圍——共用 primitives(`components/ui`、Reveal、Navigation、卡片/柱/archive 模式)+ 一個**「12 套色盤雙主題總覽」story**。Athena 經歷有引用 Storybook——用做的證明,不用說的。
- [ ] **Chromatic 或 Storybook test-runner**(選配):Storybook 建好後對 primitives 做視覺回歸。
- [ ] **Motion 案例頁——「The motion system behind this site」**:讓 MOTION 當主角的案例頁,素材全部現成——IntroOverlay orb 動畫、CapabilityStrip keyframes、scroll reveal、reduced-motion 處理、拾字旅人的 game feel。餵養 Design Engineer / Design Systems 定位;與 Storybook 合流(motion primitives 做成 stories)。選配:`debbie-labs` 開 interaction lab(spring、micro-interactions),成熟的畢業進案例頁。

## P3 — Showcase 實驗

- [ ] **Figma design system 同步(Figma MCP)**:把抽好的 tokens + primitives 推進 Figma library。對個人網站基礎建設 ROI 低,**作為 design technologist 的 showcase 價值高**——code→design 橋接就是定位本身。tokens 抽取後再做。
- [ ] **Bundle 分析**:跑一輪 `@next/bundle-analyzer`;styled-components runtime 和各路由 JS 是重點。
- [ ] **Dependabot/Renovate**:依賴更新自動化(配 P0 的 CI)。

## Perspective links —「Prism」實驗

Same truth, different lens:讓同一批經過驗證的作品,對不同觀眾重新敘事。信任原則:絕不虛構經歷;永遠顯示當前視角;一鍵回到完整版;訪客絕不填表單(最多一鍵 persona chips——定向靠寄件端連結)。

- [ ] **Phase 1 — 手寫視角切換器**:首頁「Meet Debbie as: Storyteller / Design Engineer / Frontend Engineer / Forward Deployed Engineer」。切換改變 hero headline、區塊排序、卡片強調。零 runtime AI、零幻覺風險——而且本身就是全站最強的 AI 互動案例(用自己示範 calibrated trust 論文)。
- [ ] **Phase 2 — 求職專屬連結**(`/for/<company>` 形式):AI **離線**輔助生成、發布前人工審核、證據連結。
- [ ] **Phase 3(停車場)— SaaS 驗證**:找到約 10 個真人確認同樣的痛(「你有沒有用同一批經歷做過兩份以上敘事不同的履歷/作品集?」)再重啟。求職工具的用戶找到工作就流失——真要做,用衝刺定價,不用訂閱。
- [ ] **內容分層 — NTU Maker / Animation** 等探索型作品:逐件分進現有量級(archive row / About 一句話 / 刻意不放)。判斷標準:能不能用一句話接上三軸之一?Animation 特別有趣——它是 hero 的 MOTION 關鍵字的證據。
- [ ] **數感實驗室 data storytelling 文章**(OKAPI 三國系列 + 數感專欄):Story To Be 重建時歸入 data storytelling 作品區;履歷加實習條目。定位:已發表的 data storytelling,不是「data viz 技能」——D3 證據在 Dell 那邊。

## 身分與 repo 分工 — Story To Be

三個身分、三個家,絕不合併:**debbie-portfolio**(職業;精選、證據連結)·**Story To Be**(工作室品牌——敘事遊戲發行,給玩家/客戶)·**debbie-labs**(私人實驗場;亂是特權)。管線:實驗在 labs 誕生 → 成熟後往兩邊畢業:portfolio 案例頁(職涯證據)或 Story To Be 產品(品牌/商業)。

- [ ] **建立 `debbie-labs`** repo:README + 一實驗一資料夾慣例 + 畢業規則(長大就搬成獨立 repo)。
- [ ] **重寫 Story To Be 工作室網站**([storytobestudio.com](https://storytobestudio.com/),repo `storytobe/storytobe.github.io`——目前是 BootstrapMade 模板):整個敘事 + 頁面重寫。Thesis:*用各種媒介說故事*——遊戲、data storytelling、immersive。作品開工作室視角的產品頁(拾字旅人的「Play it」頁、資料視覺化以 data stories 呈現),portfolio 案例頁不動——同一個真相,兩個鏡頭;「A Story To Be game」掛牌互連。**已決定(2026-07-20):作品先行。**首頁以作品開場;合作用簡單的 email 聯繫(「有興趣合作?→ email」)——不做服務選單、不把 Calendly 當大門。服務要有作品證明才上檯面(immersive ✓ 風機/Museum AR;AI workflow for creative teams 待寫一頁公開的「How we build with AI」)。重建前先跑敘事流程(主軸 → 健檢 → 逐字文案提案)。
- [ ] **分倉整理 — Blender / AutoCAD / Maker**:全部進 vault(labs / 素材庫),檯面按目標調用。AutoCAD + 土木 CAE 碩士 → 投 AEC-tech(如 Autodesk)是黃金組合;Blender → 3D web / spatial 的管線證據(Three.js/R3F);Maker → 風機頁的 Arduino 已經是證據。預設隱藏 ≠ 刪除——履歷呈現鏡頭,vault 保存真相。

## 刻意跳過(附理由)

- **Datadog**:對靜態個人網站做 RUM/APM 是大砲打蚊子,而且要錢。已裝 `@vercel/analytics`,改補免費的 **Vercel Speed Insights** 拿 web vitals。除非目標是刻意學 Datadog——那是 learning lab,不是這個站需要的基礎建設。
- **Sentry / 錯誤監控**:靜態生成的內容站幾乎沒有 runtime 錯誤面。不值得接。
- **Unit test 覆蓋率目標**:對內容頁是錯的工具;上面的 Playwright + axe + Lighthouse 才是這個 repo 正確的測試金字塔。

## 內容未結事項(承接 worklog)

- [ ] 輔具之友政府連結請在瀏覽器確認可開(curl 被擋)
- [ ] 拾字旅人 journal / 首頁縮圖之後有新截圖可換
