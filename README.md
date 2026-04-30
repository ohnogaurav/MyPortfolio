# Developer Portfolio

Modern, minimal developer portfolio built with Next.js 14 (App Router), Tailwind CSS, Spotify API, and GitHub API.

---

## Setup

### 1. Install dependencies

```bash
npm install
```

### 2. Configure environment variables

```bash
cp .env.local.example .env.local
```

Edit `.env.local` with your credentials:

**Spotify:**
1. Create an app at https://developer.spotify.com/dashboard
2. Get `CLIENT_ID` and `CLIENT_SECRET`
3. Generate a refresh token using the Authorization Code flow
   - Use a tool like https://spotify-refresh-token-generator.netlify.app

**GitHub:**
1. Go to https://github.com/settings/tokens
2. Generate a token with `public_repo` scope
3. Set `GITHUB_USERNAME` to your GitHub handle

> API keys are optional. The app falls back gracefully — "Not Playing Anything" for Spotify, static fallback data for GitHub.

### 3. Update content

Edit `/data/portfolioData.js` — all site content lives here. No component changes needed.

### 4. Run locally

```bash
npm run dev
```

Visit http://localhost:3000

---

## Project Structure

```
/app
  /components       # One file per section
  /api
    /spotify        # GET /api/spotify
    /github         # GET /api/github
  page.jsx          # Root page — assembles sections
  layout.jsx        # Root layout with fonts
  globals.css       # Tailwind + CSS variables

/data
  portfolioData.js  # All content — edit only this file
```

---

## Deployment (Vercel)

```bash
# 1. Push to GitHub
git init && git add . && git commit -m "init"
git remote add origin https://github.com/YOUR_USERNAME/portfolio.git
git push -u origin main

# 2. Deploy
# Go to https://vercel.com/new → Import your repo → Deploy
# Add environment variables in Vercel dashboard → Settings → Environment Variables
```

That's it. Vercel handles build + CDN automatically.

---

## Customization

All content is in `/data/portfolioData.js`:

- `personal` — name, role, tagline, availability
- `projects` — add/remove projects, change filters
- `experience` — work history
- `skills` — tech categories
- `research` — papers or writeups
- `blog` — posts with tags
- `lifeGallery` — non-work photos (replace emoji with `<Image>` from `next/image`)
- `nonTechSkills` — tag list
- `beme` — personal statements
- `links` — social links, resume URL
