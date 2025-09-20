# AjanjaCare Pharmacy & Health

> A modern, responsive pharmacy website built with React, TypeScript, and CSS Modules

[![Live Demo](https://img.shields.io/badge/Live%20Demo-Visit%20Site-brightgreen?style=for-the-badge)](https://your-demo-url.vercel.app)
[![GitHub](https://img.shields.io/badge/GitHub-View%20Code-black?style=for-the-badge&logo=github)](https://github.com/yourusername/pharmacy-website)

---

## 🚀 Quick Start

```bash
# Clone the repository
git clone https://github.com/yourusername/pharmacy-website.git
cd pharmacy-website

# Install dependencies
npm install

# Start development server
npm run dev
```

Visit `http://localhost:5173` to see the application running.

---

## 📋 Table of Contents

- [About](#about)
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Getting Started](#getting-started)
- [Project Structure](#project-structure)
- [Scripts](#scripts)
- [Contributing](#contributing)
- [License](#license)
- [Contact](#contact)

---

## 🏥 About

AjanjaCare Pharmacy & Health is a professional online portal designed for modern pharmacy and health services. Built with performance, accessibility, and user experience in mind, it provides a seamless interface for patients to explore pharmacy offerings and health services.

### Key Highlights

- ✅ **Fully Responsive** - Works perfectly on all devices
- ✅ **Type-Safe** - Built with TypeScript for reliability
- ✅ **Modern UI/UX** - Clean, professional design
- ✅ **Accessible** - WCAG compliant with semantic HTML
- ✅ **Fast Performance** - Optimized with Vite build tool

---

## ⭐ Features

| Feature | Description |
|---------|-------------|
| 🎠 **Interactive Hero Carousel** | Dynamic banner showcasing promotions and key content |
| 🛒 **Shop Categories** | Responsive carousel for browsing products and services |
| 💊 **Service Cards** | Highlight pharmacy offerings and patient care |
| 🏥 **Hospital Partnerships** | Information about healthcare collaborations |
| 📱 **Mobile Optimized** | Perfect experience across all screen sizes |
| ♿ **Accessibility Ready** | Screen reader friendly with ARIA labels |

---

## 🛠️ Tech Stack

### Frontend
![React](https://img.shields.io/badge/React-18.2.0-61DAFB?style=flat-square&logo=react)
![TypeScript](https://img.shields.io/badge/TypeScript-5.3-3178C6?style=flat-square&logo=typescript)
![CSS Modules](https://img.shields.io/badge/CSS%20Modules-000000?style=flat-square&logo=css3)

### Build & Dev Tools
![Vite](https://img.shields.io/badge/Vite-4.5-646CFF?style=flat-square&logo=vite)
![ESLint](https://img.shields.io/badge/ESLint-4B32C3?style=flat-square&logo=eslint)

### Icons & Assets
![Lucide React](https://img.shields.io/badge/Lucide%20React-000000?style=flat-square&logo=lucide)

---

## 🏃 Getting Started

### Prerequisites

- Node.js (v18 or higher)
- npm or yarn package manager

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/pharmacy-website.git
   cd pharmacy-website
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   ```

3. **Start development server**
   ```bash
   npm run dev
   # or
   yarn dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:5173`

### Environment Variables

Create a `.env.local` file in the root directory (if needed):

```env
VITE_API_URL=your_api_url_here
VITE_APP_NAME=AjanjaCare Pharmacy
```

---

## 📁 Project Structure

```
pharmacy-website/
├── 📂 public/                 # Static assets
├── 📂 src/
│   ├── 📂 assets/            # Images & static files
│   ├── 📂 components/        # React components
│   │   ├── 📂 layout/
│   │   │   ├── 📂 header/    # Header components
│   │   │   ├── 📂 main/      # Main content components
│   │   │   └── 📂 sections/  # Section components
│   │   └── index.ts          # Component exports
│   ├── 📂 types/             # TypeScript type definitions
│   ├── App.tsx               # Main App component
│   ├── App.css               # Global styles
│   └── main.tsx              # Entry point
├── 📄 package.json           # Dependencies & scripts
├── 📄 tsconfig.json          # TypeScript configuration
├── 📄 vite.config.ts         # Vite configuration
└── 📄 README.md              # Project documentation
```

---

## 📝 Scripts

| Script | Description |
|--------|-------------|
| `npm run dev` | Start development server |
| `npm run build` | Create production build |
| `npm run preview` | Preview production build locally |
| `npm run lint` | Run ESLint for code quality |
| `npm run type-check` | Run TypeScript type checking |

---

## 🚢 Deployment

### Build for Production

```bash
npm run build
```

The build artifacts will be stored in the `dist/` directory.

### Deploy to Vercel

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/yourusername/pharmacy-website)

### Deploy to Netlify

[![Deploy to Netlify](https://www.netlify.com/img/deploy/button.svg)](https://app.netlify.com/start/deploy?repository=https://github.com/yourusername/pharmacy-website)

---

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

### Development Workflow

1. **Fork the repository**
2. **Create a feature branch**
   ```bash
   git checkout -b feature/amazing-feature
   ```
3. **Make your changes**
4. **Commit your changes**
   ```bash
   git commit -m 'feat: add amazing feature'
   ```
5. **Push to the branch**
   ```bash
   git push origin feature/amazing-feature
   ```
6. **Open a Pull Request**

### Commit Convention

This project follows [Conventional Commits](https://www.conventionalcommits.org/):

- `feat:` New features
- `fix:` Bug fixes
- `docs:` Documentation changes
- `style:` Code style changes
- `refactor:` Code refactoring
- `test:` Adding tests
- `chore:` Maintenance tasks

---

## 🛣️ Roadmap

- [ ] **Multi-page Navigation** - Implement React Router
- [ ] **Backend Integration** - Connect with pharmacy API
- [ ] **User Authentication** - Patient login system
- [ ] **Online Ordering** - Shopping cart functionality
- [ ] **Payment Gateway** - Secure payment processing
- [ ] **Admin Dashboard** - Inventory management
- [ ] **Mobile App** - React Native version
- [ ] **Testing Suite** - Unit & integration tests

---

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

## 👨‍💻 Author

**Ajanja AustineAJ**

- 🌐 Portfolio: [your-portfolio.com](https://your-portfolio.com)
- 💼 LinkedIn: [Ajanja AustineAJ](https://linkedin.com/in/ajanja-austine)
- 🐙 GitHub: [@AjanjaAustineAJ](https://github.com/AjanjaAustineAJ)
- 📧 Email: [ajanja@example.com](mailto:ajanja@example.com)

---

## 🙏 Acknowledgments

- [React](https://reactjs.org/) - The web framework used
- [TypeScript](https://www.typescriptlang.org/) - For type safety
- [Vite](https://vitejs.dev/) - Fast build tool
- [Lucide](https://lucide.dev/) - Beautiful icons
- [Vercel](https://vercel.com/) - Deployment platform

---

## 📊 GitHub Stats

![GitHub stars](https://img.shields.io/github/stars/yourusername/pharmacy-website?style=social)
![GitHub forks](https://img.shields.io/github/forks/yourusername/pharmacy-website?style=social)
![GitHub issues](https://img.shields.io/github/issues/yourusername/pharmacy-website)
![GitHub pull requests](https://img.shields.io/github/issues-pr/yourusername/pharmacy-website)

---

<div align="center">
  <p>⭐ Star this repository if you found it helpful!</p>
  <p>Made with ❤️ by <a href="https://github.com/AjanjaAustineAJ">Ajanja AustineAJ</a></p>
</div>