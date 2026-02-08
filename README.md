# <p align="center">✨ My Portfolio Website ✨</p>

<div id="top"></div>

<div align="center">

![Portfolio Banner](https://user-images.githubusercontent.com/73993775/217269880-d5c821a3-01e7-4b7a-9732-e7784c2edc94.gif)

### 🌐 **[Live Demo](https://rakeshroshan.netlify.app/)** | 📧 **[Contact Me](https://rakesh9100.bio.link)**

[![Astro](https://img.shields.io/badge/Astro-FF5D01?style=for-the-badge&logo=astro&logoColor=white)](https://astro.build/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)
[![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)](https://www.w3schools.com/js/)
[![Docker](https://img.shields.io/badge/Docker-2496ED?style=for-the-badge&logo=docker&logoColor=white)](https://www.docker.com/)
[![CI/CD](https://img.shields.io/badge/CI%2FCD-GitHub_Actions-2088FF?style=for-the-badge&logo=github-actions&logoColor=white)](https://github.com/features/actions)

[![CI/CD Pipeline](https://github.com/Rakesh9100/My-Portfolio-Website/actions/workflows/ci-cd.yml/badge.svg)](https://github.com/Rakesh9100/My-Portfolio-Website/actions)
[![Netlify Status](https://api.netlify.com/api/v1/badges/a6ba9a47-0451-4ecc-996b-7d9b45083991/deploy-status)](https://app.netlify.com/projects/rakeshroshan/deploys)

</div>

---

## 📑 Table of Contents

- [Introduction](#-introduction)
- [Technology Stack](#-technology-stack)
- [DevOps Features](#-devops-features)
- [Screenshots](#-screenshots)
- [Quick Start](#-quick-start)
- [Docker Deployment](#-docker-deployment)
- [Easter Eggs](#-easter-eggs)
- [Contact](#-contact)

---

## 📌 Introduction

A **modern, fully responsive portfolio website** built with Astro, Tailwind CSS, and TypeScript. Features smooth animations, interactive elements, hidden easter eggs, and optimized performance across all devices.

**What makes this special:**
- 🎨 6 customizable theme colors
- 🎭 Smooth animations
- 🥚 Hidden easter eggs
- 📊 Real-time performance metrics
- 📱 Fully responsive (mobile, tablet, desktop)
- 🐳 DevOps-enabled with Docker & CI/CD
- 🏥 Health monitoring endpoints
- 📊 DevOps dashboard

---

## 🎯 Technology Stack

**Core:**
- ⚡ **Astro** - Modern static site generator
- 🎨 **Tailwind CSS** - Utility-first CSS framework
- 📘 **TypeScript** - Type-safe JavaScript
- 🟨 **JavaScript** - Dynamic functionality

**DevOps & Infrastructure:**
- 🐳 **Docker** - Containerization with multi-stage builds
- ⚙️ **GitHub Actions** - CI/CD automation
- 🌐 **Nginx** - Production web server
- 🔒 **Trivy** - Security vulnerability scanning
- 📊 **Lighthouse CI** - Performance monitoring
- 🤖 **Dependabot** - Automated dependency updates

**Libraries:**
- ⌨️ **Typed.js** - Typing animations
- 🎨 **Custom CSS Animations** - Smooth scroll-triggered animations
- 🎯 **Custom Tilt Effects** - Lightweight 3D hover effects

---

## 🚀 DevOps Features

This portfolio showcases real DevOps practices and tools:

### 🐳 Containerization
- Multi-stage Docker build reducing image size to 70.2MB
- Docker Compose for one-command deployment
- Optimized production-ready Nginx configuration

### 🔄 CI/CD Pipeline
- Automated testing with GitHub Actions
- TypeScript checking and build validation
- Security scanning with Trivy
- Performance monitoring with Lighthouse CI
- Automated Docker image builds and testing

### 🏥 Health Monitoring
- Health check endpoint: `/health`
- Automated container health checks every 30s
- DevOps dashboard: `/dashboard`
- Real-time system status monitoring

### 🔒 Security
- Enhanced security headers (CSP, XSS protection)
- Automated vulnerability scanning
- Dependabot for dependency updates
- Multi-stage builds for minimal attack surface

### 📊 Monitoring & Observability
- Live DevOps dashboard showing system status
- Build information and metrics
- CI/CD pipeline status
- Container health monitoring

**Access DevOps Features:**
- 🏥 Health Check: [https://rakeshroshan.netlify.app/health](https://rakeshroshan.netlify.app/health)
- 📊 DevOps Dashboard: [https://rakeshroshan.netlify.app/dashboard](https://rakeshroshan.netlify.app/dashboard)

---

## 📸 Screenshots

### Home Section
![Home](https://github.com/user-attachments/assets/af509c63-1a83-479f-abdd-091c75b65fa7)

### About Section
![About](https://github.com/user-attachments/assets/66f36331-2c71-4d54-a096-8f859ec2e3d1)

---

## ⚡ Quick Start

### Prerequisites

- **Node.js** v18.14.1 or higher - [Download](https://nodejs.org/)
- **npm** (comes with Node.js)
- **Docker** (optional, for containerized deployment) - [Download](https://www.docker.com/)

### Installation (3 Steps)

**1. Clone the repository**
```bash
git clone https://github.com/Rakesh9100/My-Portfolio-Website.git
cd My-Portfolio-Website
```

**2. Install dependencies**
```bash
npm install
```

**3. Start development server**
```bash
npm run dev
```
🌐 Open browser to: **http://localhost:4321**

---

## 🐳 Docker Deployment

### Using Docker Compose (Recommended)

```bash
# Build and run the container
docker-compose up -d

# Access the site
# Portfolio: http://localhost:8080
# Health Check: http://localhost:8080/health
# Dashboard: http://localhost:8080/dashboard

# View logs
docker logs -f portfolio-website

# Stop the container
docker-compose down
```

### Using Docker Directly

```bash
# Build the image
docker build -t portfolio .

# Run the container
docker run -d -p 8080:80 --name portfolio-website portfolio

# Check health status
docker ps
```

### Docker Features
- ✅ Multi-stage build (Node.js → Nginx)
- ✅ Optimized image size (70.2MB)
- ✅ Automated health checks
- ✅ Production-ready Nginx configuration
- ✅ Gzip compression enabled
- ✅ Static asset caching

---

## 🎮 Easter Eggs

Hidden interactive features! Try typing these anywhere on the page **(desktop only)**:

| Keyword | Effect | Description |
|---------|--------|-------------|
| **:)** | 😊 Emoji Rain | Falling emojis animation |
| **deploy** | 🚀 Confetti Burst | Celebration confetti |
| **dev:** | 💻 Developer Console | Stats in browser console |
| **devops** | ⚙️ CI/CD Pipeline | Pipeline animation |

**Hint:** Check the footer for a clue! 👀

**Note:** Easter eggs are disabled on mobile for better performance.

---

## 🔄 CI/CD Pipeline

The project uses GitHub Actions for automated CI/CD:

```
┌─────────────┐      ┌──────────────┐      ┌─────────────┐
│   GitHub    │────▶│GitHub Actions│────▶ │   Netlify   │
│ Repository  │      │   CI/CD      │      │   Hosting   │
└─────────────┘      └──────────────┘      └─────────────┘
                            │
                            ▼
                    ┌──────────────┐
                    │ Docker Image │
                    │  Multi-stage │
                    │     Build    │
                    └──────────────┘
```

**Pipeline Stages:**
1. **Build & Test** - Install dependencies, build app, TypeScript checks, Lighthouse CI
2. **Security Scan** - Trivy vulnerability scanning
3. **Docker Build** - Build and test Docker image with health checks
4. **Deploy** - Automatic deployment to Netlify

---

## 📞 Contact

**Connect with me through any social handles mentioned in this bio link tree.**

[![Bio Link](https://img.shields.io/badge/bio.link-000000%7D?style=for-the-badge&logo=biolink&logoColor=white&labelColor=ff5858&color=bf58ff)](https://rakesh9100.bio.link)

---

## 🌟 Show Your Support

Give a ⭐ if you like this project!

---

<div align="center">

### 💻 Built with ❤️ by Rakesh Roshan

[![Built with Love](https://forthebadge.com/images/badges/built-with-love.svg)](https://forthebadge.com)
[![Powered by Coffee](https://forthebadge.com/images/badges/powered-by-coffee.svg)](https://forthebadge.com)

**Happy Coding! 👨‍💻**

</div>

<p align="right">(<a href="#top">⬆️ back to top</a>)</p>
