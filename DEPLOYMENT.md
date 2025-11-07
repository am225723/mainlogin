# Deployment Guide

## 🚀 Production Deployment Options

### Option 1: Vercel (Recommended)
**Best for**: React/Vite applications, automatic deployments

#### Steps:
1. Install Vercel CLI:
```bash
npm install -g vercel
```

2. Build the project:
```bash
npm run build
```

3. Deploy:
```bash
vercel
```

4. Follow prompts:
   - Link to existing project or create new
   - Set project name
   - Confirm settings

5. Production deployment:
```bash
vercel --prod
```

**Benefits**:
- Automatic HTTPS
- Global CDN
- Instant rollbacks
- Preview deployments
- Zero configuration

---

### Option 2: Netlify
**Best for**: Static sites, drag-and-drop deployment

#### Steps:
1. Install Netlify CLI:
```bash
npm install -g netlify-cli
```

2. Build the project:
```bash
npm run build
```

3. Deploy:
```bash
netlify deploy
```

4. Production deployment:
```bash
netlify deploy --prod
```

**Alternative**: Drag and drop `dist` folder to Netlify dashboard

**Benefits**:
- Form handling
- Serverless functions
- Split testing
- Analytics included

---

### Option 3: GitHub Pages
**Best for**: Free hosting, GitHub integration

#### Steps:
1. Install gh-pages:
```bash
npm install --save-dev gh-pages
```

2. Update `package.json`:
```json
{
  "homepage": "https://yourusername.github.io/mental-health-login",
  "scripts": {
    "predeploy": "npm run build",
    "deploy": "gh-pages -d dist"
  }
}
```

3. Update `vite.config.js`:
```javascript
export default defineConfig({
  base: '/mental-health-login/',
  plugins: [react()],
})
```

4. Deploy:
```bash
npm run deploy
```

**Benefits**:
- Free hosting
- GitHub integration
- Version control

---

### Option 4: AWS S3 + CloudFront
**Best for**: Enterprise, custom domains, full control

#### Steps:
1. Build the project:
```bash
npm run build
```

2. Create S3 bucket:
```bash
aws s3 mb s3://your-bucket-name
```

3. Configure bucket for static hosting:
```bash
aws s3 website s3://your-bucket-name --index-document index.html
```

4. Upload files:
```bash
aws s3 sync dist/ s3://your-bucket-name
```

5. Set up CloudFront distribution for HTTPS and CDN

**Benefits**:
- Full control
- Scalability
- Custom configurations
- Enterprise features

---

### Option 5: Firebase Hosting
**Best for**: Firebase ecosystem, real-time features

#### Steps:
1. Install Firebase CLI:
```bash
npm install -g firebase-tools
```

2. Login:
```bash
firebase login
```

3. Initialize:
```bash
firebase init hosting
```

4. Build:
```bash
npm run build
```

5. Deploy:
```bash
firebase deploy
```

**Benefits**:
- Free SSL
- Global CDN
- Easy rollbacks
- Firebase integration

---

## 🔧 Pre-Deployment Checklist

### Code Optimization
- [ ] Remove console.logs
- [ ] Optimize images
- [ ] Minify CSS/JS (automatic with Vite)
- [ ] Remove unused dependencies
- [ ] Update version numbers

### Security
- [ ] Move Supabase keys to environment variables
- [ ] Enable CORS properly
- [ ] Set up rate limiting
- [ ] Configure CSP headers
- [ ] Enable HTTPS only

### Supabase Configuration
- [ ] Enable email verification
- [ ] Configure redirect URLs
- [ ] Set up Row Level Security (RLS)
- [ ] Configure email templates
- [ ] Set up proper auth policies

### Testing
- [ ] Test on multiple browsers
- [ ] Test on mobile devices
- [ ] Test authentication flow
- [ ] Test password reset
- [ ] Check all animations
- [ ] Verify responsive design
- [ ] Test error handling

### Performance
- [ ] Run Lighthouse audit
- [ ] Check load times
- [ ] Optimize images
- [ ] Enable compression
- [ ] Set up caching

---

## 🌍 Environment Variables

### Create `.env` file:
```env
VITE_SUPABASE_URL=https://froxodstewdswllgokmu.supabase.co
VITE_SUPABASE_ANON_KEY=your_anon_key_here
```

### Update `src/supabaseClient.js`:
```javascript
import { createClient } from '@supabase/supabase-js'

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY

export const supabase = createClient(supabaseUrl, supabaseAnonKey)
```

### Set environment variables in hosting platform:
- **Vercel**: Project Settings → Environment Variables
- **Netlify**: Site Settings → Build & Deploy → Environment
- **GitHub Pages**: Repository Settings → Secrets
- **AWS**: Parameter Store or Secrets Manager
- **Firebase**: Firebase Console → Project Settings

---

## 📊 Post-Deployment Steps

### 1. Configure Custom Domain
- Purchase domain (Namecheap, GoDaddy, etc.)
- Add DNS records (A or CNAME)
- Enable SSL certificate
- Test domain propagation

### 2. Set Up Analytics
```bash
npm install @vercel/analytics
# or
npm install react-ga4
```

### 3. Configure Monitoring
- Set up error tracking (Sentry)
- Configure uptime monitoring
- Set up performance monitoring
- Enable real user monitoring

### 4. SEO Optimization
- Add meta tags
- Create sitemap.xml
- Add robots.txt
- Configure Open Graph tags
- Add structured data

### 5. Security Headers
Add to hosting configuration:
```
X-Frame-Options: DENY
X-Content-Type-Options: nosniff
X-XSS-Protection: 1; mode=block
Referrer-Policy: strict-origin-when-cross-origin
Content-Security-Policy: default-src 'self'
```

---

## 🔄 Continuous Deployment

### GitHub Actions (Vercel)
Create `.github/workflows/deploy.yml`:
```yaml
name: Deploy to Vercel
on:
  push:
    branches: [main]

jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v2
      - uses: actions/setup-node@v2
      - run: npm install
      - run: npm run build
      - uses: amondnet/vercel-action@v20
        with:
          vercel-token: ${{ secrets.VERCEL_TOKEN }}
          vercel-org-id: ${{ secrets.ORG_ID }}
          vercel-project-id: ${{ secrets.PROJECT_ID }}
```

### GitLab CI/CD
Create `.gitlab-ci.yml`:
```yaml
stages:
  - build
  - deploy

build:
  stage: build
  script:
    - npm install
    - npm run build
  artifacts:
    paths:
      - dist/

deploy:
  stage: deploy
  script:
    - npm run deploy
  only:
    - main
```

---

## 🐛 Troubleshooting

### Build Errors
```bash
# Clear cache
rm -rf node_modules
rm package-lock.json
npm install

# Clear Vite cache
rm -rf .vite
npm run build
```

### Deployment Fails
- Check build logs
- Verify environment variables
- Test build locally
- Check file permissions
- Verify dependencies

### Images Not Loading
- Check file paths (case-sensitive)
- Verify images in `public` folder
- Check CDN configuration
- Test image URLs directly

### Supabase Connection Issues
- Verify environment variables
- Check Supabase project status
- Verify API keys
- Check CORS settings
- Test connection locally

---

## 📈 Performance Optimization

### Image Optimization
```bash
# Install image optimizer
npm install --save-dev vite-plugin-imagemin

# Add to vite.config.js
import viteImagemin from 'vite-plugin-imagemin'

export default defineConfig({
  plugins: [
    react(),
    viteImagemin({
      gifsicle: { optimizationLevel: 7 },
      optipng: { optimizationLevel: 7 },
      mozjpeg: { quality: 80 },
      pngquant: { quality: [0.8, 0.9] },
      svgo: { plugins: [{ name: 'removeViewBox' }] }
    })
  ]
})
```

### Code Splitting
```javascript
// Lazy load components
import { lazy, Suspense } from 'react'

const Dashboard = lazy(() => import('./Dashboard'))

function App() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Dashboard />
    </Suspense>
  )
}
```

### Caching Strategy
```javascript
// vite.config.js
export default defineConfig({
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ['react', 'react-dom'],
          supabase: ['@supabase/supabase-js']
        }
      }
    }
  }
})
```

---

## 🎯 Production Checklist

### Before Launch
- [ ] All features tested
- [ ] Performance optimized
- [ ] Security configured
- [ ] Analytics set up
- [ ] Error tracking enabled
- [ ] Backup strategy in place
- [ ] Documentation complete
- [ ] Team trained

### Launch Day
- [ ] Deploy to production
- [ ] Verify deployment
- [ ] Test all features
- [ ] Monitor errors
- [ ] Check analytics
- [ ] Announce launch

### Post-Launch
- [ ] Monitor performance
- [ ] Track user feedback
- [ ] Fix critical bugs
- [ ] Optimize based on data
- [ ] Plan next iteration

---

**Your app is ready for production deployment! 🚀**