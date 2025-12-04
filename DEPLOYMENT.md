# Deployment Guide - Sansel Systems Website

## 🚀 Deploy to Netlify (Recommended - FREE)

### Option 1: Drag & Drop Deploy

1. **Build the project**:
   ```bash
   npm run build
   ```

2. **Go to**: [netlify.com](https://www.netlify.com/)

3. **Sign up/Login** with GitHub or email

4. **Drag & drop** the `build` folder to Netlify

5. **Done!** Your site is live

### Option 2: Git Deploy (Auto-Deploy on Push)

1. **Initialize Git** (if not already):
   ```bash
   git init
   git add .
   git commit -m "Initial commit - Sansel Systems website"
   ```

2. **Push to GitHub**:
   ```bash
   git remote add origin YOUR_GITHUB_REPO_URL
   git push -u origin main
   ```

3. **Connect to Netlify**:
   - Go to [netlify.com](https://www.netlify.com/)
   - Click "Add new site" → "Import an existing project"
   - Choose GitHub
   - Select your repository
   - Build settings:
     - Build command: `npm run build`
     - Publish directory: `build`
   - Click "Deploy site"

4. **Auto-deploy**: Now every git push automatically deploys!

---

## 🌐 Deploy to Vercel (Alternative - FREE)

1. **Install Vercel CLI**:
   ```bash
   npm install -g vercel
   ```

2. **Deploy**:
   ```bash
   vercel
   ```

3. **Follow the prompts**:
   - Login/Signup
   - Confirm project settings
   - Deploy!

### Or use Vercel Dashboard:

1. Go to [vercel.com](https://vercel.com/)
2. Import your GitHub repository
3. Deploy automatically

---

## 🐧 Deploy to Your Own Server (Linux)

### Requirements:
- Ubuntu/Debian server
- Node.js installed
- Nginx (for production)

### Steps:

1. **Build the project**:
   ```bash
   npm run build
   ```

2. **Copy build folder to server**:
   ```bash
   scp -r build/ user@your-server-ip:/var/www/sansel-systems/
   ```

3. **Configure Nginx**:
   ```nginx
   server {
       listen 80;
       server_name yourdomain.com;
       
       root /var/www/sansel-systems/build;
       index index.html;
       
       location / {
           try_files $uri $uri/ /index.html;
       }
   }
   ```

4. **Restart Nginx**:
   ```bash
   sudo systemctl restart nginx
   ```

---

## 📦 Deploy to GitHub Pages

1. **Install gh-pages**:
   ```bash
   npm install --save-dev gh-pages
   ```

2. **Add to package.json**:
   ```json
   {
     "homepage": "https://yourusername.github.io/sansel-systems",
     "scripts": {
       "predeploy": "npm run build",
       "deploy": "gh-pages -d build"
     }
   }
   ```

3. **Deploy**:
   ```bash
   npm run deploy
   ```

---

## ☁️ Deploy to AWS S3 + CloudFront

1. **Build the project**:
   ```bash
   npm run build
   ```

2. **Create S3 bucket**:
   - Enable static website hosting
   - Upload `build` folder contents

3. **Configure CloudFront**:
   - Create distribution
   - Point to S3 bucket
   - Enable HTTPS

4. **Update DNS** to point to CloudFront

---

## 🔒 Custom Domain Setup

### For Netlify/Vercel:

1. Go to site settings
2. Add custom domain
3. Update DNS records (provided by platform)
4. SSL automatically configured

### DNS Records Example:
```
Type: A
Name: @
Value: [Platform IP]

Type: CNAME
Name: www
Value: [Platform domain]
```

---

## 📊 Post-Deployment Checklist

- [ ] Test all pages load correctly
- [ ] Check responsive design on mobile
- [ ] Verify all routes work (refresh page on each route)
- [ ] Test enquiry form submission
- [ ] Check browser console for errors
- [ ] Verify images and styles load
- [ ] Test on different browsers
- [ ] Set up analytics (Google Analytics)
- [ ] Configure SEO meta tags
- [ ] Enable HTTPS

---

## 🔧 Environment Variables (For Future Backend)

When you add backend, create `.env` file:

```env
REACT_APP_API_URL=https://api.yourdomain.com
REACT_APP_PAYMENT_KEY=your_razorpay_key
```

**Important**: Add `.env` to `.gitignore`

---

## 📈 Performance Optimization

Before deploying:

```bash
# Analyze bundle size
npm run build
npx source-map-explorer 'build/static/js/*.js'

# Install compression
npm install compression --save
```

---

## 🆘 Common Deployment Issues

### Issue: Routes return 404 on refresh

**Fix**: Configure server for SPA

**Netlify**: Create `public/_redirects`:
```
/*    /index.html   200
```

**Vercel**: Create `vercel.json`:
```json
{
  "rewrites": [{ "source": "/(.*)", "destination": "/index.html" }]
}
```

### Issue: Build fails

```bash
# Clear cache and rebuild
rm -rf node_modules build
npm install
npm run build
```

### Issue: Styles not loading

Check that all CSS imports are correct and files exist.

---

## 🎉 Recommended: Netlify

**Why Netlify?**
- ✅ Free tier is generous
- ✅ Automatic HTTPS
- ✅ CDN included
- ✅ Easy custom domain
- ✅ Auto-deploy from Git
- ✅ Great for React apps

**Deploy in 2 minutes**: `npm run build` → Drag `build` folder to Netlify!

---

## 📞 Need Help?

- [Netlify Docs](https://docs.netlify.com/)
- [Vercel Docs](https://vercel.com/docs)
- [Create React App Deployment](https://create-react-app.dev/docs/deployment/)

---

**Your Sansel Systems website is ready to go live! 🚀**
