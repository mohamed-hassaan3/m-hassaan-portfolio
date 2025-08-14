# 🌐 Mohamed Hassaan Portfolio

![Next.js](https://img.shields.io/badge/Next.js-15-black?style=flat&logo=nextdotjs)  
![TypeScript](https://img.shields.io/badge/TypeScript-blue?style=flat&logo=typescript)  
![Tailwind CSS](https://img.shields.io/badge/TailwindCSS-06B6D4?style=flat&logo=tailwindcss)  

A modern, responsive, and SEO-friendly developer portfolio built with **Next.js (App Router)**, **TypeScript**, and **Tailwind CSS**.  
Showcases projects, skills, and experiences with optimized performance and accessible design.

---

## ✨ Features

- ⚡ **Fast & SEO-Optimized** — Static Site Generation (SSG) with dynamic metadata
- 🖼 **Optimized Images** — `next/image` for responsive, high-performance visuals
- 📂 **Local JSON Content** — Easy project updates without a CMS
- 🎯 **Accessible Design** — WCAG-friendly UI with Tailwind CSS
- 🔍 **Social Share Ready** — Rich Open Graph previews per project

---

## 🛠 Tech Stack

- **Framework**: [Next.js 15](https://nextjs.org/) (App Router)
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **Images**: [next/image](https://nextjs.org/docs/api-reference/next/image)
- **Deployment**: [Vercel](https://vercel.com/)

---

## 📂 Project Structure

```plaintext
├── app/
│   ├── layout.tsx          # Root layout with global metadata
│   ├── page.tsx            # Homepage / About section
│   ├── project/[slug]/
│   │   └── page.tsx        # Dynamic project details
│   └── sitemap.ts          # Sitemap generator
├── data/
│   └── projects.json       # Project data (slug, name, description, image, etc.)
├── public/                 # Static assets and images
├── styles/                 # Global styles & Tailwind config
├── next.config.ts          # Next.js configuration
└── package.json
