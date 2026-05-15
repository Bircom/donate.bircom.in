# Donate — Bircom Search and Rescue Foundation

Canonical donation page for [donate.bircom.in](https://donate.bircom.in/).

Bank details, Section 80G information, and India / foreign donor instructions. Paired with the Foundation site at [sar.bircom.in](https://sar.bircom.in/).

## Development

```sh
cd site
npm install
npm run dev
```

## Production build

```sh
cd site
npm run lint
npm run build
```

GitHub Pages deploys `site/dist` on push to `main` (see `.github/workflows/pages.yml`).

**Pages must use GitHub Actions** (`build_type: workflow`), not legacy branch deploy.
