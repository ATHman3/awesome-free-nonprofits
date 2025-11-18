# Deployment Guide

This guide explains how to deploy the Awesome Free Nonprofits project to GitHub Pages with a custom domain.

## Prerequisites

- GitHub account
- Repository with the project code
- Custom domain (optional)

## GitHub Pages Setup

### 1. Enable GitHub Actions

The project includes a GitHub Actions workflow (`.github/workflows/deploy.yml`) that automatically builds and deploys the site when you push to the `main` branch.

### 2. Configure GitHub Pages

1. Go to your repository on GitHub
2. Navigate to **Settings** → **Pages**
3. Under **Build and deployment**:
   - Source: Select "GitHub Actions"
4. Save the settings

### 3. Push Your Code

```bash
git add .
git commit -m "Initial commit"
git push origin main
```

The GitHub Action will automatically:
1. Parse the README.md
2. Generate services.json
3. Build the React app
4. Deploy to GitHub Pages

Your site will be available at: `https://<username>.github.io/<repository-name>/`

## Custom Domain Setup

### Step 1: Configure DNS

Add a CNAME record in your domain's DNS settings:

**For a subdomain (e.g., nonprofits.athman3.com):**
```
Type: CNAME
Name: nonprofits (or your subdomain)
Value: <username>.github.io
TTL: 3600 (or your provider's default)
```

**For an apex domain (e.g., athman3.com):**
```
Type: A
Name: @ (or leave blank)
Value: 185.199.108.153
       185.199.109.153
       185.199.110.153
       185.199.111.153
TTL: 3600
```

### Step 2: Update CNAME File

The `app/public/CNAME` file contains your custom domain:

```
nonprofits.athman3.com
```

Update this file with your own domain before deploying.

### Step 3: Configure Custom Domain in GitHub

1. Go to **Settings** → **Pages** in your GitHub repository
2. Under **Custom domain**, enter your domain (e.g., `nonprofits.athman3.com`)
3. Wait for DNS check to complete (may take a few minutes)
4. Enable **Enforce HTTPS** (recommended)

### DNS Propagation

DNS changes can take up to 48 hours to propagate, but usually complete within a few hours. You can check the status using:

```bash
dig nonprofits.athman3.com
# or
nslookup nonprofits.athman3.com
```

## Updating the Site

The site automatically updates when you:

1. Add new services to `README.md`
2. Modify existing services
3. Update the React application code

Simply push your changes to the `main` branch:

```bash
git add .
git commit -m "Add new service: ServiceName"
git push origin main
```

The GitHub Action will automatically rebuild and redeploy the site.

## Local Testing Before Deployment

Always test your changes locally before pushing:

```bash
# Parse README and start dev server
npm run dev

# Or test the production build
npm run build
cd app/dist
python -m http.server 8000
# Visit http://localhost:8000
```

## Troubleshooting

### Site not updating

1. Check the **Actions** tab in your GitHub repository
2. Look for failed workflows
3. Check the workflow logs for errors

### Custom domain not working

1. Verify DNS settings with your domain provider
2. Check that the CNAME file contains the correct domain
3. Wait for DNS propagation (up to 48 hours)
4. Verify GitHub Pages settings show your custom domain

### Build errors

1. Check the GitHub Actions logs
2. Test the build locally: `npm run build`
3. Verify all dependencies are properly installed
4. Check for linting errors: `npm run lint` (if configured)

### 404 errors on routes

Make sure the `base` in `vite.config.js` matches your deployment path:
- For custom domain: `base: '/'`
- For GitHub Pages without custom domain: `base: '/repository-name/'`

## Security

- Always use HTTPS (enforced by GitHub Pages)
- Keep dependencies updated
- Review pull requests carefully before merging
- Use branch protection rules for the main branch

## Monitoring

Monitor your site's performance and availability:

1. **GitHub Actions**: Check workflow runs
2. **GitHub Insights**: Monitor traffic and visitors
3. **Uptime monitoring**: Use services like UptimeRobot (optional)

## Support

If you encounter issues:

1. Check the [GitHub Pages documentation](https://docs.github.com/en/pages)
2. Review the [GitHub Actions documentation](https://docs.github.com/en/actions)
3. Open an issue in the repository

