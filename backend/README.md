# Sayan Roy — Portfolio Backend

Node.js / Express backend for [my-portfolio-website-rho-black.vercel.app](https://my-portfolio-website-rho-black.vercel.app).

## Features

| Endpoint | Method | Description |
|---|---|---|
| `/api/health` | GET | Server health check |
| `/api/contact` | POST | Contact form → email to you + auto-reply to sender |
| `/api/projects` | GET | List all projects (`?featured=true` to filter) |
| `/api/projects/:id` | GET | Single project by ID |
| `/api/resume` | GET | Proxy-download your resume PDF |

## Quick Start

### 1. Install dependencies
```bash
npm install
```

### 2. Set up environment variables
```bash
cp .env.example .env
```

Edit `.env` and fill in your values:
- `EMAIL_USER` — your Gmail address (`mr.sayan14@gmail.com`)
- `EMAIL_PASS` — **Gmail App Password** (NOT your real Gmail password)
  - Go to: Google Account → Security → 2-Step Verification → App Passwords
  - Create one for "Mail" and paste it here
- `FRONTEND_URL` — your Vercel URL (already set in `.env.example`)

### 3. Run the server
```bash
# Development (auto-restarts on file change)
npm run dev

# Production
npm start
```

Server starts on `http://localhost:5000`.

---

## Connecting to Your Frontend

In your React portfolio, replace the contact form `fetch` with:

```js
const response = await fetch("https://YOUR_BACKEND_URL/api/contact", {
  method: "POST",
  headers: { "Content-Type": "application/json" },
  body: JSON.stringify({ name, email, message }),
});
const data = await response.json();
```

---

## Deployment (Render — Free Tier)

1. Push this folder to a new GitHub repo
2. Go to [render.com](https://render.com) → New Web Service → Connect repo
3. Set:
   - **Build Command:** `npm install`
   - **Start Command:** `npm start`
4. Add all your `.env` variables under **Environment**
5. Deploy — you'll get a URL like `https://sayan-portfolio-api.onrender.com`

---

## API Examples

### Contact Form
```bash
curl -X POST http://localhost:5000/api/contact \
  -H "Content-Type: application/json" \
  -d '{"name":"Alice","email":"alice@example.com","message":"Hi Sayan, great portfolio!"}'
```

### Projects
```bash
curl http://localhost:5000/api/projects
curl http://localhost:5000/api/projects?featured=true
curl http://localhost:5000/api/projects/1
```

### Resume
```bash
curl -O http://localhost:5000/api/resume
# saves as Sayan_Roy_Resume.pdf
```
