# Portfolio

A modern and responsive personal portfolio website designed to showcase your projects, skills, experience, education, and contact information.

Use this project as a starting point for building your own developer portfolio.

## Features

* Responsive design
* Light and dark mode
* Projects showcase
* Skills section
* Work experience
* Education section
* About section
* Social media links
* Contact form
* Email integration
* Smooth and modern user interface

## Getting Started

You can use this portfolio in two ways:

* Fork the repository and customize your copy
* Clone the repository and create a new project from it

## Option 1: Fork on GitHub

1. Open the repository on GitHub.
2. Click **Fork**.
3. Select your GitHub account.
4. Clone your fork locally:

```bash
git clone https://github.com/<your-username>/<your-fork>.git
cd <your-fork>
```

5. Install dependencies:

```bash
npm install
```

6. Create your environment file:

```bash
cp .env.example .env
```

7. Configure the required environment variables.

8. Start the development server:

```bash
npm run dev
```

## Option 2: Clone and Create a New Repository

Clone the project and remove its existing Git history:

```bash
git clone https://github.com/<repository-owner>/<repository-name>.git my-portfolio
cd my-portfolio

rm -rf .git

git init
git add .
git commit -m "Create my portfolio"

git branch -M main
git remote add origin https://github.com/<your-username>/<your-repository>.git
git push -u origin main
```

## Environment Variables

Create a `.env` file based on `.env.example`.

Example:

```env
RESEND_API_KEY=RESENDER_your_actual_api_key_here
```

Replace the placeholder value with your own API key.

> Never commit your actual API keys or sensitive environment variables to your repository.

## Personalization

Most of the portfolio content can be customized from:

```text
details.ts
```

Update the following information:

* Name
* Professional title
* Email address
* Location
* Profile images
* Personal description
* Social media links
* Projects
* Work experience
* Education
* About section
* Technical skills

You should also review and update:

* Profile images
* Project screenshots
* Public assets
* Metadata
* Page title
* Favicon
* Resume links
* Contact information

Before deploying, search the project for existing placeholder or personal information and replace it with your own.

## Development

Install dependencies:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

Build the project for production:

```bash
npm run build
```

Run the production build:

```bash
npm start
```

## Deployment

After building the project, you can deploy it to any platform.

Popular options include:

* Vercel
* Netlify

Make sure to configure all required environment variables in your deployment platform before publishing.
