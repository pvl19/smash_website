## React template

This repository now contains a minimal Vite + React template scaffold in the `src/` folder.

To run locally (macOS / zsh):

```bash
# install dependencies
npm install

# start dev server
npm run dev
```

Build for production:

```bash
npm run build
npm run preview
```

If you'd like a different tooling (Create React App, Next.js, or custom setup), tell me and I can convert this scaffold.

GitHub Pages deployment
-----------------------

This repo is configured for GitHub Pages. The Vite base path is set to `/smash_website/` and a GitHub Actions workflow will build and publish the `dist/` folder to the `gh-pages` branch when you push to `main`.

Notes:
- The configured site URL: https://pvl19.github.io/smash_website
- The workflow uses the default `GITHUB_TOKEN` so no extra secrets are required.
- If you'd prefer a manual deploy, run:

```bash
# install gh-pages once locally
npm install --save-dev gh-pages

# build and deploy
npm run deploy
```

# copy to physics server
scp -r dist/* username@web.physics.ucsd.edu:/var/www/vhosts/smash.ucsd.edu