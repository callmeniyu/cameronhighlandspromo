# Deployment Guide - Cameron Highlands Tours

## 🚀 Deployment Options

### Option 1: Vercel (Recommended - Free & Easy)

Vercel is the company behind Next.js and offers the best deployment experience.

#### Steps:

1. **Push to GitHub**

   ```bash
   git init
   git add .
   git commit -m "Initial commit - Cameron Highlands promo site"
   git remote add origin YOUR_GITHUB_REPO_URL
   git push -u origin main
   ```

2. **Deploy to Vercel**

   - Visit [vercel.com](https://vercel.com)
   - Sign up/Login with GitHub
   - Click "New Project"
   - Import your repository
   - Vercel will auto-detect Next.js settings
   - Click "Deploy"
   - Your site will be live in 2-3 minutes!

3. **Add Custom Domain**
   - In Vercel dashboard, go to your project
   - Click "Settings" → "Domains"
   - Add `cameronhighlandstour.com`
   - Follow DNS configuration instructions
   - Update your domain's DNS settings (usually takes 24-48 hours)

#### DNS Configuration for cameronhighlandstour.com

Add these records to your domain provider:

```
Type: A
Name: @
Value: 76.76.21.21

Type: CNAME
Name: www
Value: cname.vercel-dns.com
```

---

### Option 2: Netlify

1. **Build the site**

   ```bash
   npm run build
   ```

2. **Deploy**

   - Visit [netlify.com](https://netlify.com)
   - Sign up/Login
   - Drag and drop your `.next` folder
   - Or connect GitHub repo for continuous deployment

3. **Add Custom Domain**
   - Go to "Domain settings"
   - Add `cameronhighlandstour.com`
   - Follow DNS instructions

---

### Option 3: Traditional Hosting (cPanel/VPS)

1. **Build for production**

   ```bash
   npm run build
   npm run start
   ```

2. **Requirements on server**

   - Node.js >= 20.9.0
   - PM2 for process management

3. **Deploy steps**

   ```bash
   # On your server
   npm install
   npm run build

   # Install PM2
   npm install -g pm2

   # Start the app
   pm2 start npm --name "cameronhighlands" -- start

   # Configure to start on reboot
   pm2 startup
   pm2 save
   ```

4. **Nginx Configuration** (if using reverse proxy)
   ```nginx
   server {
       listen 80;
       server_name cameronhighlandstour.com www.cameronhighlandstour.com;

       location / {
           proxy_pass http://localhost:3000;
           proxy_http_version 1.1;
           proxy_set_header Upgrade $http_upgrade;
           proxy_set_header Connection 'upgrade';
           proxy_set_header Host $host;
           proxy_cache_bypass $http_upgrade;
       }
   }
   ```

---

## 🔧 Environment Variables

If you add any environment variables later, create `.env.local`:

```env
NEXT_PUBLIC_SITE_URL=https://cameronhighlandstour.com
NEXT_PUBLIC_WHATSAPP=60196592141
```

Remember to add these in Vercel/Netlify dashboard as well.

---

## ✅ Pre-Deployment Checklist

- [ ] Test the site locally: `npm run build && npm start`
- [ ] Verify all images load correctly
- [ ] Test WhatsApp links on mobile
- [ ] Check responsive design on different devices
- [ ] Test all animations work smoothly
- [ ] Verify SEO meta tags with browser dev tools
- [ ] Test loading speed with Lighthouse
- [ ] Ensure all links work
- [ ] Check console for errors

---

## 📊 Post-Deployment Tasks

### 1. Submit Sitemap to Google

- Visit [Google Search Console](https://search.google.com/search-console)
- Add property: `cameronhighlandstour.com`
- Submit sitemap: `https://cameronhighlandstour.com/sitemap.xml`

### 2. Set up Analytics

- Google Analytics 4
- Google Tag Manager (optional)
- Facebook Pixel (optional for ads)

### 3. Test Performance

- Run [Google PageSpeed Insights](https://pagespeed.web.dev/)
- Aim for 90+ score on mobile and desktop

### 4. Social Media Setup

- Test Open Graph tags with [Facebook Debugger](https://developers.facebook.com/tools/debug/)
- Test Twitter Cards with [Twitter Card Validator](https://cards-dev.twitter.com/validator)

---

## 🔄 Continuous Updates

With Vercel/Netlify connected to GitHub:

1. Make changes to code
2. Commit and push to GitHub
3. Automatic deployment happens!

```bash
git add .
git commit -m "Update tour prices"
git push
```

---

## 📱 Testing Checklist

Before going live, test on:

- [ ] Desktop Chrome
- [ ] Desktop Firefox
- [ ] Desktop Safari
- [ ] Mobile Chrome (Android)
- [ ] Mobile Safari (iPhone)
- [ ] Tablet (iPad)

---

## 🆘 Troubleshooting

### Build fails

```bash
# Clear cache and rebuild
rm -rf .next
rm -rf node_modules
npm install
npm run build
```

### Images not loading

- Check `next.config.ts` has correct image domains
- Verify image URLs are accessible

### Slow loading

- Use Next.js Image component for optimization
- Enable image optimization in hosting platform
- Check Lighthouse report for suggestions

---

## 📞 Support

For deployment issues:

- Vercel: [vercel.com/docs](https://vercel.com/docs)
- Next.js: [nextjs.org/docs](https://nextjs.org/docs)

---

**Estimated Deployment Time:** 15-30 minutes (Vercel) or 1-2 hours (VPS)

**Recommended:** Use Vercel for simplicity, automatic SSL, CDN, and great performance.
