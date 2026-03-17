# Little Lanterns Cove Website

Static website starter for `littlelanternscove.com`.

## Tech Stack

- Plain `HTML`, `CSS`, and vanilla `JavaScript`
- No framework
- No bundler
- No build step

If you can edit files and upload them, you can run this site.

## Edit Your App Links

Open `apps.js` and edit each item in the `APPS` array:

- `name`: app name
- `subtitle`: short app description
- `ageBand`: age guidance
- `status`: `"Live now"` or `"Coming soon"`
- `appStoreUrl`: full App Store URL (leave empty for coming soon)

## Run Locally

Option 1 (simplest): open `index.html` directly in your browser.

Option 2 (recommended): run a tiny local server:

```bash
python3 -m http.server 8080
```

Then open `http://localhost:8080`.

## Deploy: GitHub Pages

1. Push this folder to a GitHub repo.
2. In GitHub, open `Settings` -> `Pages`.
3. Set source to `Deploy from a branch`.
4. Choose branch `main` and folder `/ (root)`.
5. Save.
6. Add your DNS records for `littlelanternscove.com` to point to GitHub Pages.

`CNAME` file is included and already set to `littlelanternscove.com`.

## Deploy: FTP

Upload these files to your web root:

- `index.html`
- `privacy.html`
- `styles.css`
- `apps.js`
- `CNAME` (optional for non-GitHub hosts)

No server-side setup is required.
