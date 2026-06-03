# NovaLaunch Website

A sleek landing page and admin/user login experience built with HTML, CSS, JavaScript, and a minimal Express backend.

## Overview

This project delivers a modern marketing site for NovaLaunch with pages for home, features, services, pricing, testimonials, contact, login, and dashboards. It includes a preloader swing animation effect on the landing page.

## Features

- Responsive landing page design
- Smooth reveal animations on scroll
- Preloader swing motion effect before page load
- Pricing, testimonials, services, and contact pages
- Login page with basic Express backend support
- Admin and user dashboard pages

## Getting Started

### Prerequisites

- Node.js installed

### Install

```bash
npm install
```

### Run

```bash
npm install
npm start
```

Or start with the alias:

```bash
npm run bot
```

Then open the site in your browser at:

```text
http://localhost:3000
```

## Login Credentials

- Admin: `admin@example.com` / `admin123`
- User: `user@example.com` / `user123`

## Authentication

This project includes a simple Express backend with session-based login authentication. The login form sends credentials to `/api/login`, and authenticated users are redirected to the appropriate dashboard.

## Project Structure

- `index.html` - main landing page
- `features.html` - features overview
- `services.html` - services page
- `pricing.html` - pricing page
- `testimonials.html` - testimonials page
- `contact.html` - contact page
- `login.html` - login page
- `user-dashboard.html` - user dashboard
- `admin-dashboard.html` - admin dashboard
- `style.css` - global styling
- `script.js` - page animation and form handling
- `server.js` - Express server backend
- `package.json` - project metadata and dependencies

## Notes

- The landing page now includes a preloader animation that swings into view before the main content appears.
- The Express server serves the site and supports any login-related routing implemented in `server.js`.
