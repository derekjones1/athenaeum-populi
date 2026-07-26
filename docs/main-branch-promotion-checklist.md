# Main-branch production deployment checklist

This is the current promotion, verification, smoke-test, and rollback runbook
for Athenaeum Populi. The repository already uses the production Hugo
architecture; this procedure does not replace Git history, move directories,
or create a staging Worker.

The only deployment target is the existing Cloudflare Worker named
`athenaeum-populi`. Pull requests verify but do not deploy. A push to `main`
deploys only after the complete verification job succeeds.

## 1. Before opening or merging a pull request

From the repository root, use the pinned Node dependencies and run the local CI
equivalent:

```sh
npm ci
npm run ci
```

`npm run ci` must pass all of these layers:

- unit, content-structure, authoring, math-rendering, and real-grader checks;
- a clean Hugo production build;
- the global Pagefind index;
- route-parity, internal-link, search-coverage, and artifact audits.

Review `git status --short` and the diff before publishing a branch. Do not
commit `node_modules/`, `public/`, `.hugo_cache/`, `resources/_gen/`, source
PDFs, local environment files, or editor state.

## 2. Repository and Cloudflare prerequisites

GitHub Actions requires these repository secrets:

- `CLOUDFLARE_API_TOKEN`, scoped to deploy the production Worker;
- `CLOUDFLARE_ACCOUNT_ID`, for the account that owns that Worker.

Keep normal branch protection on `main`: require review and the verification
job, prohibit force pushes, and do not allow the deploy job to bypass its
`verify` dependency. Never place Cloudflare credentials in tracked files.

`wrangler.jsonc` must continue to target `athenaeum-populi` and publish
`./public` as static assets. The production custom-domain mapping is managed in
Cloudflare, not in this repository.

## 3. Pull-request gate

Open a pull request and confirm that **CI and Deploy / verify** passes. The
workflow uses:

- Node.js 22;
- Hugo extended 0.164.0;
- the lockfile-pinned dependencies, including Pagefind 1.5.2;
- the same `npm test`, build, and post-build checks used locally.

The production deploy job must be skipped for pull-request events. Resolve all
verification failures before merging; do not use a manual deployment to work
around a failing gate.

## 4. Promote `main`

Merge through the protected branch workflow. The push to `main` starts a fresh
verification job. After it succeeds, the dependent **Deploy production** job
rebuilds the same revision and publishes `public/` with the pinned Wrangler
version.

If an otherwise valid deployment needs to be retried, use **GitHub → Actions →
CI and Deploy → Run workflow**, enable **Deploy the verified build**, and run it
against `main`. A manual run with deployment disabled is verification-only.

Do not create a staging Worker or deploy an unreviewed local working tree.

## 5. Production smoke test

After GitHub reports a successful deploy, verify:

- `https://athenaeumpopuli.org/` loads normally;
- representative deep textbook routes and one legacy-compatible route load;
- a nonexistent route returns the site's 404 page with HTTP status 404;
- one global search finds results from more than one book and opens them;
- a fill-in accepts a correct answer and rejects an incorrect answer;
- a multiple-choice exercise and GraphPlot interaction work;
- display and inline math render correctly;
- static figures remain legible in light and dark modes;
- browser developer tools show no failed Pagefind, KaTeX, font, or JavaScript
  requests.

Check Cloudflare Worker metrics and errors after deployment. Treat widespread
route failures, broken global search, site-wide exercise failures, missing
assets, or a sustained Worker error spike as rollback triggers.

## 6. Rollback

In **Cloudflare Workers & Pages → athenaeum-populi → Deployments**, select the
previous known-good deployment and roll back to it. An authenticated operator
may instead run:

```sh
npx --yes wrangler@4.112.0 rollback --name athenaeum-populi
```

Rollback changes the active Cloudflare version; it does not change GitHub.
Diagnose and fix the repository separately, pass `npm run ci`, and promote a
new reviewed revision through `main`.
