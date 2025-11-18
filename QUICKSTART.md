# 🚀 Quick Start Guide - Cameron Highlands Tours Website

## In 5 Minutes, Get Your Website Running!

### Step 1: Check Node Version

```bash
node --version
```

**Required:** v20.9.0 or higher

If you have an older version, update Node.js from [nodejs.org](https://nodejs.org)

---

### Step 2: Install Dependencies

```bash
cd promo
npm install
```

This installs all required packages (takes 1-2 minutes)

---

### Step 3: Run Development Server

```bash
npm run dev
```

Open browser and visit: **http://localhost:3000**

---

### Step 4: Make It Live! 🌐

#### Option A: Deploy to Vercel (Easiest - 5 minutes)

1. **Create GitHub Repo**
   ```bash
   git init
   git add .
   git commit -m "Cameron Highlands promo site"
   ```
2. **Push to GitHub**

   - Create repo on GitHub.com
   - Follow instructions to push your code

3. **Deploy on Vercel**

   - Go to [vercel.com](https://vercel.com)
   - Sign up with GitHub
   - Click "New Project"
   - Select your repo
   - Click "Deploy"
   - Done! 🎉

4. **Add Your Domain**
   - In Vercel dashboard → Settings → Domains
   - Add: `cameronhighlandstour.com`
   - Update DNS (instructions provided by Vercel)

---

## 🎨 Customization Quick Guide

### Change Phone Number

Find and replace `60196592141` with your WhatsApp number in:

- `app/page.tsx`

### Update Tour Prices

Edit `app/page.tsx` → Find the `tours` array (around line 230)

### Change Colors

Edit `app/globals.css` → Modify CSS variables at the top

### Add/Remove Tours

Edit `app/page.tsx` → Add/remove items in the `tours` array

---

## 📊 Post-Launch (Day 1)

### 1. Google Search Console

- Visit: https://search.google.com/search-console
- Add property: `cameronhighlandstour.com`
- Submit sitemap: `https://cameronhighlandstour.com/sitemap.xml`

### 2. Google Analytics

- Visit: https://analytics.google.com
- Create property
- Add tracking code to `app/layout.tsx` (in `<head>`)

### 3. Google Business Profile

- Visit: https://business.google.com
- Create listing for your tour business
- Add photos, description, contact info

---

## ✅ What You Get

✨ **Beautiful modern design** with animations  
📱 **Mobile-responsive** - works perfectly on all devices  
🚀 **Super fast** - optimized with Next.js  
🔍 **SEO-ready** - all keywords integrated  
📊 **Analytics-ready** - easy to track visitors  
💬 **WhatsApp integration** - direct booking links

---

## 📁 Important Files

| File              | What It Does             |
| ----------------- | ------------------------ |
| `app/page.tsx`    | Main website content     |
| `app/layout.tsx`  | SEO settings & meta tags |
| `app/globals.css` | Styles & animations      |
| `README.md`       | Full documentation       |
| `DEPLOYMENT.md`   | Deployment instructions  |
| `SEO_GUIDE.md`    | SEO checklist            |

---

## 🆘 Common Issues

### Build Fails

```bash
rm -rf .next node_modules
npm install
npm run build
```

### Port Already in Use

```bash
npm run dev -- -p 3001
```

(Runs on port 3001 instead)

### Images Not Loading

Check `next.config.ts` - image domains are configured

---

## 📞 Need Help?

Check these docs:

1. `README.md` - Features & tech details
2. `DEPLOYMENT.md` - How to deploy
3. `SEO_GUIDE.md` - SEO checklist
4. `PROJECT_SUMMARY.md` - Complete overview

---

## 🎯 Success Checklist

Day 1:

- [ ] Website running locally
- [ ] Deployed to Vercel
- [ ] Domain connected
- [ ] Google Search Console setup

Week 1:

- [ ] Google Analytics tracking
- [ ] Google Business Profile created
- [ ] Sitemap submitted
- [ ] First booking received! 🎉

---

**That's it! You're ready to attract customers and grow your tour business! 🌿**

Questions? Check the documentation files or contact your developer.

---

_Built with Next.js 16, React 19, Tailwind CSS, and Framer Motion_
