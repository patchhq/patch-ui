import { HeroTitle } from "./components/hero-title";

const NPM_CLI = "https://www.npmjs.com/package/@patch-dev/cli";
const GITHUB = "https://github.com/patchhq/patch";
const DEMO_MP4 =
  "https://github.com/patchhq/patch/raw/main/docs/demo/patch-demo.mp4";

export default function Home() {
  return (
    <>
      <header className="hero">
        <div className="wrap hero-nav">
          <span className="mark">
            <span className="mark-cmd">patch --version</span>
          </span>
          <a href="#demo">watch the demo ↓</a>
        </div>
        <div className="wrap hero-main">
          <p className="hero-eyebrow animate-rise">open source · apache-2.0</p>
          <HeroTitle />
          <p className="sub animate-rise-delay">
            Detect upstream API breaking changes and Dependabot-style dependency
            updates — then open PRs that fix your TypeScript/JavaScript
            codebase.
          </p>
          <div className="hero-actions animate-rise-delay">
            <a
              className="cmd-pill"
              href={NPM_CLI}
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className="bar">$</span>
              npx patch init
            </a>
            <a className="hero-ghost" href={GITHUB} target="_blank" rel="noopener noreferrer">
              View on GitHub →
            </a>
          </div>
        </div>
        <div className="hunk-watermark">@@ -12,3 +12,7 @@</div>
      </header>

      <section className="doc" id="demo">
        <div className="wrap">
          <p className="eyebrow">@@ demo @@</p>
          <h2 className="doc-title">Watch a scan become a PR</h2>
          <p className="doc-lede">
            From upstream break to a reviewed fix — connectors, classification,
            and the agentic loop in one pass.{" "}
            <a href={DEMO_MP4} target="_blank" rel="noopener noreferrer">
              Raw MP4 on GitHub →
            </a>
          </p>
          <div className="demo-frame">
            <video
              className="demo-video"
              src="/demos/patch-demo.mp4"
              autoPlay
              muted
              loop
              playsInline
              preload="auto"
              aria-label="Patch demo: detecting an upstream break and opening a fix pull request"
            >
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
      </section>

      <section className="doc" id="jobs">
        <div className="wrap">
          <p className="eyebrow">@@ two jobs, one bot @@</p>
          <h2 className="doc-title">API breaks and dependency bumps</h2>
          <p className="doc-lede">
            Same scan → classify → PR/Issue pipeline. One bot for SDK surface
            changes and for npm version/security updates.
          </p>

          <div className="split-grid">
            <article className="split-card">
              <h3>API breaking changes</h3>
              <p>
                OpenAPI diffs, package <code>.d.ts</code> diffs, and doc scrape
                feed an agentic fix loop with validation and confidence
                ceilings — then a PR or Issue.
              </p>
              <ul>
                <li>openapi-diff · package-diff · doc-scrape</li>
                <li>propose → validate → revise ≤3</li>
                <li>confidence ≥ threshold → PR</li>
              </ul>
            </article>
            <article className="split-card">
              <h3>Dependabot-style updates</h3>
              <p>
                Watches npm <code>package.json</code> dependencies. Patch +
                minor bumps by default; majors opt-in. OSV advisories raise
                confidence so security bumps land as PRs.
              </p>
              <ul>
                <li>dependency-update connector</li>
                <li>npm only in MVP</li>
                <li>enabled by patch init when package.json exists</li>
              </ul>
            </article>
          </div>
        </div>
      </section>

      <section className="doc" id="how">
        <div className="wrap">
          <p className="eyebrow">@@ how it works @@</p>
          <h2 className="doc-title">From upstream shift to reviewed PR</h2>
          <p className="doc-lede">
            Connectors watch API sources and npm deps. Scanners map API changes
            onto call sites; dependency updates bump{" "}
            <code>package.json</code>. An agentic fix loop proposes, validates,
            and revises — then the GitHub App opens a PR or Issue by confidence.
          </p>

          <pre className="pipeline" aria-label="Patch pipeline">
            <span className="hi">patch init</span>
            <span className="dim">
              {" "}
              → detect API deps + languages → config + Action + App install
            </span>
            {"\n"}
            {"                │\n"}
            {"                ▼ "}
            <span className="dim">(on schedule)</span>
            {"\n"}
            connector fetch → diff snapshot → classify (ChangeEvent)
            {"\n"}
            {"      → map FixInstruction → LanguageScanner(s) / package.json\n"}
            {"      → agentic fix loop (propose → validate → revise ≤3)\n"}
            {"      → confidence ≥ threshold? "}
            <span className="hi">PR</span>
            {" : Issue → update snapshot"}
          </pre>

          <div className="comp-block">
            <p className="comp-label">change event types</p>
            <div className="pill-row">
              <span className="pill">renamed</span>
              <span className="pill">removed</span>
              <span className="pill">added_required_param</span>
              <span className="pill">type_changed</span>
              <span className="pill">security_advisory</span>
              <span className="pill">dependency_bump</span>
            </div>
          </div>
        </div>
      </section>

      <section className="doc" id="models">
        <div className="wrap">
          <p className="eyebrow">@@ bring your own model @@</p>
          <h2 className="doc-title">Anthropic or OpenAI — your key</h2>
          <p className="doc-lede">
            Classify and fix call a pluggable provider. Config stores{" "}
            <code>provider</code> and <code>api_key_env</code> only — never the
            key. <code>patch init</code> asks which to use;{" "}
            <code>patch scan</code> fails fast if that env var is missing.
          </p>

          <div className="split-grid">
            <article className="split-card">
              <h3>Anthropic · Claude</h3>
              <p>
                Set <code>provider: &quot;anthropic&quot;</code> and{" "}
                <code>api_key_env: &quot;ANTHROPIC_API_KEY&quot;</code>.
              </p>
            </article>
            <article className="split-card">
              <h3>OpenAI · GPT</h3>
              <p>
                Set <code>provider: &quot;openai&quot;</code> and{" "}
                <code>api_key_env: &quot;OPENAI_API_KEY&quot;</code>.
              </p>
            </article>
          </div>
        </div>
      </section>

      <section className="doc" id="connectors">
        <div className="wrap">
          <p className="eyebrow">@@ connectors @@</p>
          <h2 className="doc-title">Four connectors, one pipeline</h2>
          <p className="doc-lede">
            Downstream stages do not special-case connector types. API sources
            and dependency updates share the same classify → fix → publish path.
          </p>

          <div className="connector-grid">
            <article className="connector">
              <p className="name">openapi-diff</p>
              <p className="source">
                Formal OpenAPI JSON/YAML. Structural contract diffs with the
                highest signal.
              </p>
              <p className="rel">reliability · highest</p>
            </article>
            <article className="connector">
              <p className="name">package-diff</p>
              <p className="source">
                npm/PyPI plus <code>.d.ts</code> signatures. Exact surface-area
                comparison.
              </p>
              <p className="rel">reliability · high</p>
            </article>
            <article className="connector">
              <p className="name">dependency-update</p>
              <p className="source">
                npm registry + OSV advisories. Dependabot-style version and
                security bumps for <code>package.json</code>.
              </p>
              <p className="rel">reliability · high</p>
            </article>
            <article className="connector">
              <p className="name">doc-scrape</p>
              <p className="source">
                HTML docs with no formal spec. The LLM carries more of the
                burden.
              </p>
              <p className="rel">reliability · lower</p>
            </article>
          </div>
        </div>
      </section>

      <section className="doc" id="start">
        <div className="wrap">
          <p className="eyebrow">@@ quick start @@</p>
          <h2 className="doc-title">Init, scan, review</h2>
          <p className="doc-lede">
            The bin is named <code>patch</code>. The npm package is{" "}
            <a href={NPM_CLI} target="_blank" rel="noopener noreferrer">
              <code>@patch-dev/cli</code>
            </a>
            . Confirm connectors (including{" "}
            <code>dependency-update</code> when a <code>package.json</code>{" "}
            exists), pick a model provider, install the GitHub App, and let
            scheduled scans open PRs.
          </p>

          <pre className="code-block">
            <span className="comment">
              # In your TS/JS repo
              {"\n"}
            </span>
            <span className="cmd">npx patch init</span>
            {"\n"}
            <span className="cmd">npx patch scan --dry-run</span>
            {"\n\n"}
            <span className="comment">
              # If npx patch hits the wrong package:
              {"\n"}
            </span>
            <span className="cmd">
              npx -y --package=@patch-dev/cli patch init
            </span>
            {"\n\n"}
            <span className="comment">
              # Required: ANTHROPIC_API_KEY or OPENAI_API_KEY
              {"\n"}
            </span>
            <span className="comment">
              # (matches patch.config.json → model.api_key_env)
              {"\n\n"}
            </span>
            <span className="comment">
              # Optional: GITHUB_TOKEN or the Patch GitHub App
              {"\n"}
            </span>
            <span className="comment">
              # Without it, reports land in .patch/reports/
            </span>
          </pre>
        </div>
      </section>

      <section className="doc" id="confidence">
        <div className="wrap">
          <p className="eyebrow">@@ confidence @@</p>
          <h2 className="doc-title">Validation caps the score</h2>
          <p className="doc-lede">
            Above <code>confidence_threshold</code> (default{" "}
            <code>0.7</code>) → PR via the GitHub App (or{" "}
            <code>GITHUB_TOKEN</code>). Below → Issue with the same diagnosis.
            You always review before it merges.
          </p>

          <div className="comp-block">
            <p className="comp-label">confidence, capped by validation</p>
            <div className="conf-row">
              <div className="conf high">
                <span className="dot" />
                <div className="txt">
                  <span className="label">High</span>
                  <span className="rule">tsc + tests pass · uncapped</span>
                </div>
              </div>
              <div className="conf mod">
                <span className="dot" />
                <div className="txt">
                  <span className="label">Moderate</span>
                  <span className="rule">tsc passes, no tests · ≤ 0.75</span>
                </div>
              </div>
              <div className="conf low">
                <span className="dot" />
                <div className="txt">
                  <span className="label">Low</span>
                  <span className="rule">tsc fails · ≤ 0.25</span>
                </div>
              </div>
            </div>
          </div>

          <div className="comp-block">
            <p className="comp-label">what a fix looks like</p>
            <div className="example-grid">
              <div className="diff-card">
                <div className="diff-head">
                  <span className="src">openai-node · CHANGELOG.md</span>
                  <span className="src">v5.2.0</span>
                </div>
                <div className="diff-body">
                  <div className="diff-line ctx">
                    {"  const res = await openai.chat.completions.create({"}
                  </div>
                  <div className="diff-line rm">{"-   messages,"}</div>
                  <div className="diff-line add">{"+   input: messages,"}</div>
                  <div className="diff-line ctx">{"    model,"}</div>
                  <div className="diff-line ctx">{"  });"}</div>
                </div>
              </div>

              <article className="pr-card">
                <p className="pr-title">
                  Patch: <code>chat.completions.create</code> →{" "}
                  <code>responses.create</code>
                </p>
                <div className="pr-meta">
                  <div className="conf high" style={{ minWidth: 0 }}>
                    <span className="dot" />
                    <span className="label">High confidence</span>
                  </div>
                  <span className="pill">3 call sites</span>
                </div>
                <p className="pr-rationale">
                  openai-node v5.2.0 renamed this method and swapped the
                  messages param for input. Same shape, new name — updated all
                  three call sites and the type-check passes clean.
                </p>
                <p className="pr-foot">
                  Opened by Patch · source: npm CHANGELOG · review before
                  merging
                </p>
              </article>
            </div>
          </div>
        </div>
      </section>

      <section className="doc" id="open-source">
        <div className="wrap">
          <p className="eyebrow">@@ open source @@</p>
          <h2 className="doc-title">Open source first. Hosted when you want it.</h2>
          <p className="doc-lede">
            Patch is open source under Apache-2.0 — the CLI, connectors,
            scanners, PR templates, and schemas. Run it yourself, fork it, or
            use hosted scheduling when you&apos;d rather not operate the
            pipeline.
          </p>

          <div className="split-grid">
            <article className="split-card">
              <h3>Open source · Apache-2.0</h3>
              <p>
                Everything you need to detect breaks, bump deps, and propose
                fixes ships in the open.
              </p>
              <ul>
                <li>
                  <a href={NPM_CLI} target="_blank" rel="noopener noreferrer">
                    @patch-dev/cli
                  </a>
                </li>
                <li>connectors + scanners</li>
                <li>schemas + PR templates</li>
              </ul>
            </article>
            <article className="split-card">
              <h3>Hosted</h3>
              <p>
                Cross-customer scheduler, billed model calls, and certified
                connector packs for APIs without formal specs.
              </p>
              <ul>
                <li>multi-tenant scheduler</li>
                <li>LLM classification + fixes</li>
                <li>certified connector packs</li>
              </ul>
            </article>
          </div>
        </div>
      </section>

      <section className="doc" id="limits">
        <div className="wrap">
          <p className="eyebrow">@@ known mvp limitations @@</p>
          <h2 className="doc-title">Honest about the edges</h2>
          <p className="doc-lede">
            Call-site scanning ships for TypeScript/JavaScript; other language
            scanners detect the repo but do not yet match call sites. Dependency
            updates are npm-only. Dynamic <code>import()</code> is not scanned;
            the PyPI registry path is stubbed.
          </p>
          <div className="pill-row">
            <span className="pill">TS/JS call sites · shipping</span>
            <span className="pill">dependency-update · npm only</span>
            <span className="pill">dynamic import() not scanned</span>
            <span className="pill">PyPI path stubbed</span>
          </div>
          <div className="btn-row" style={{ marginTop: 40 }}>
            <a
              className="btn btn-primary"
              href={NPM_CLI}
              target="_blank"
              rel="noopener noreferrer"
            >
              Install the CLI
            </a>
            <a
              className="btn btn-ghost"
              href={GITHUB}
              target="_blank"
              rel="noopener noreferrer"
            >
              Star the open source repo →
            </a>
          </div>
        </div>
      </section>

      <footer>
        <div className="wrap foot-row">
          <div>
            <p className="wordmark">patch</p>
            <p>
              Open source under Apache-2.0. API breaks and npm dependency
              updates — same bot.{" "}
              <a href={NPM_CLI} target="_blank" rel="noopener noreferrer">
                npm
              </a>
              {" · "}
              <a href={GITHUB} target="_blank" rel="noopener noreferrer">
                GitHub
              </a>
            </p>
          </div>
          <div className="foot-hunk">@@ -0,0 +1,1 @@ eof</div>
        </div>
      </footer>
    </>
  );
}
