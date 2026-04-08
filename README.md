# My Gaming World

A personal gaming portfolio website showcasing my favorite games: Genshin Impact, Arknights Endfield, Colorful Stage (Project Sekai), Minecraft, and Roblox.

## Tech Stack

- React 19
- Vite 7
- TypeScript
- Tailwind CSS v4
- Framer Motion (animations)
- shadcn/ui components

## Getting Started

### Install dependencies

```bash
npm install
```

### Run in development

```bash
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

### Build for production

```bash
npm run build
```

The output will be in the `dist/` folder. You can deploy it to GitHub Pages, Netlify, Vercel, or any static host.

## Deploy to GitHub Pages

1. Install the gh-pages package:
   ```bash
   npm install --save-dev gh-pages
   ```

2. Add these scripts to `package.json`:
   ```json
   "predeploy": "npm run build",
   "deploy": "gh-pages -d dist"
   ```

3. Set `base` in `vite.config.ts` to your repo name:
   ```ts
   base: "/your-repo-name/",
   ```

4. Run:
   ```bash
   npm run deploy
   ```
