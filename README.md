# CreatorKit — AI Tools for YouTube Creators

Three AI-powered tools for serious YouTubers:
- **Thumbnail Generator** — 5 psychologically-optimised concepts with CTR psychology
- **Script Generator** — Full scripts with hooks, structure, and CTAs
- **Topic Research** — Structured briefs with angles, hooks, and pain points

Powered by Google Gemini AI.

---

## 🚀 Deploy to Vercel (3 steps)

### 1. Push this folder to GitHub
```bash
git init
git add .
git commit -m "initial commit"
git remote add origin https://github.com/YOUR_USERNAME/creator-kit.git
git push -u origin main
```

### 2. Import to Vercel
- Go to [vercel.com/new](https://vercel.com/new)
- Import your GitHub repo
- Vercel auto-detects Next.js — no config needed

### 3. Add your API key
- In Vercel dashboard → **Settings → Environment Variables**
- Add: `GEMINI_API_KEY` = your key from [aistudio.google.com](https://aistudio.google.com)
- Redeploy (Deployments → Redeploy)

---

## 💻 Run Locally

```bash
npm install
cp .env.example .env.local
# Edit .env.local and add your GEMINI_API_KEY
npm run dev
```

Open [http://localhost:3000](http://localhost:3000)

---

## 📁 Project Structure

```
creator-kit/
├── app/
│   ├── layout.jsx          # Root layout
│   ├── page.jsx            # Main UI (all 3 tools)
│   └── api/
│       └── chat/
│           └── route.js    # Gemini API proxy
├── package.json
├── next.config.js
├── vercel.json
└── .env.example
```
