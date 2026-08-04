# Conor Chalcroft

Personal research lab / digital garden — projects, experiments, and things I'm building out of curiosity at the intersection of machine learning, AI, statistics, and scientific computing.

## Stack

- Next.js
- TypeScript
- Tailwind CSS

## Develop

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Deploy

The site is set up for [GitHub Pages](https://conorchalcroft-codes.github.io) via static export and GitHub Actions.

1. Push to `main`
2. In the repo: **Settings → Pages → Source → GitHub Actions**
3. The [deploy workflow](.github/workflows/deploy.yml) builds and publishes on each push

## Structure

```
src/
├── app/          # routes (home, projects, writing, about, contact)
├── components/   # shared UI
├── data/         # site + project content
└── lib/          # utilities (as needed)
```

See `PROJECT_CONTEXT.md` for purpose, tone, and design principles.
