# Anshuman Behera — Angular Portfolio

A responsive Angular portfolio based on the latest resume supplied by Anshuman Behera.

## Stack
- Angular standalone component + TypeScript
- Responsive CSS with dark/light theme toggle
- RxJS-era Angular frontend experience represented in the skills and experience sections
- CSS-generated project illustrations (no invented project screenshots)
- Contact form opens a pre-filled `mailto:` draft; no server-side submission

## Run locally
Requires a supported Node.js LTS version and npm.

```bash
npm install
npm start
```

Open `http://localhost:4200`.

## Production build
```bash
npm run build
```

## Resume
`src/assets/Anshuman-Behera-Resume.pdf` is the actual PDF supplied by the user. The download button uses this file.

## Before publishing
1. Check all text and links, especially any employer/client confidentiality restrictions.
2. Confirm the metrics and wording reflect approved public claims.
3. Add approved screenshots, live demos, and repository links where available.
4. If you need form submissions delivered without the visitor's email app, connect a backend or form service.
5. Run `npm install`, `npm run build`, and test mobile and desktop layouts.


## Deploy to GitHub Pages
A GitHub Actions workflow is included at `.github/workflows/deploy.yml`. It builds the Angular app with a base path derived from the repository name and deploys on pushes to `main`.

1. Create a GitHub repository for this project (or upload these files to your existing portfolio repository).
2. Push the project files to the `main` branch.
3. In the repository, open **Settings → Pages** and set the build/deployment source to **GitHub Actions**.
4. Open **Actions** and wait for the deployment workflow to complete.
5. Your Pages URL will be shown in the deployment job. For a project repository it is typically `https://<username>.github.io/<repository-name>/`.

The workflow expects the Angular browser output at `dist/anshuman-portfolio/browser`, matching this project's Angular application builder configuration.

## Profile photo
The portfolio has a CSS developer illustration for now. To use a real headshot, add an approved image to `src/assets/` and update the hero markup/styles to reference it. No personal photo was provided with the latest request yet.
