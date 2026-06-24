# Yene Health - Healthcare E-Commerce & Telemedicine Platform

A modern, responsive healthcare platform that combines e-commerce functionality with telemedicine services, providing users with seamless access to healthcare products, medical consultations, and educational resources.

## 🌟 Project Overview

Yene Health is a comprehensive digital health solution designed to make healthcare more accessible and convenient. The platform features:

- **🛍️ E-Commerce Marketplace**: Browse and purchase vitamins, supplements, baby formula, OTC medications, and healthcare products
- **👨‍⚕️ Telemedicine Services**: Connect with healthcare professionals through online consultations
- **📚 Health Education**: Access curated articles and resources about women's health, hormones, aging, and wellness
- **🎯 Personalized Experience**: Intuitive product discovery with filtering, sorting, and quick view features
- **📱 Responsive Design**: Optimized experience across desktop, tablet, and mobile devices

## 🚀 Features

### Product Marketplace

- Featured product carousel with promotional banners
- Product categories: Vitamins & Supplements, Mommy & Baby, OTC, Cough Cold & Flu
- Real-time pricing with discount indicators
- Quick view functionality for rapid product browsing
- Wishlist and shopping cart integration
- Advanced search with filter and sort capabilities

### Telemedicine Integration

- Floating "See a Doctor" button for instant access to medical consultations
- Real-time online doctor availability status
- Seamless transition to telehealth services

### Educational Content

- Curated health articles covering women's health topics
- Featured learning section with expert insights
- Topics include hormonal health, menopause, nutrition, and preventive care

### User Experience

- Modern, clean interface with custom color theming
- Smooth animations and transitions
- Intuitive navigation with mobile-optimized menu
- Multi-language support (English, Amharic, French)
- Dark/light theme support via theme provider

## 🛠️ Technology Stack

- **Framework**: React 19.2.6 with TypeScript
- **Build Tool**: Vite 8
- **Styling**: Tailwind CSS 4 with custom configuration
- **UI Components**: shadcn/ui + Radix UI primitives
- **Icons**: Lucide React
- **Fonts**: Geist Variable Font
- **Code Quality**: ESLint, Prettier

## 📦 Installation

1. Clone the repository:

```bash
git clone <repository-url>
cd yene-health
```

2. Install dependencies:

```bash
pnpm install
```

3. Start the development server:

```bash
pnpm dev
```

4. Open your browser and navigate to `http://localhost:5173`

## 🏗️ Project Structure

```
yene-health/
├── src/
│   ├── components/
│   │   ├── ui/              # shadcn/ui components (Button, Card, Sheet, etc.)
│   │   ├── Header.tsx       # Main navigation and search
│   │   ├── Hero.tsx         # Product showcase and featured content
│   │   ├── FloatingDoctorButton.tsx  # Telemedicine CTA
│   │   ├── AppDownloadBanner.tsx     # Mobile app promotion
│   │   └── Footer.tsx       # Site footer with links
│   ├── lib/
│   │   └── utils.ts         # Utility functions
│   ├── assets/              # Images and logos
│   ├── App.tsx              # Main application component
│   ├── main.tsx             # Application entry point
│   └── index.css            # Global styles
├── public/                  # Static assets
└── package.json
```

## 📜 Available Scripts

- `pnpm dev` - Start development server
- `pnpm build` - Build for production
- `pnpm preview` - Preview production build
- `pnpm lint` - Run ESLint
- `pnpm format` - Format code with Prettier
- `pnpm typecheck` - Run TypeScript type checking

## 🎨 Design System

### Color Palette

- **Primary**: `#E17A6E` (Warm coral - main brand color)
- **Secondary**: `#3498db` (Blue - accents and CTAs)
- **Background**: `#f8f8f8` (Light gray)
- **Text**: `#0f0f0f` (Near black)

### Typography

- Font Family: Geist Variable
- Responsive font sizing for optimal readability across devices

## 🌐 Adding UI Components

To add new shadcn/ui components:

```bash
npx shadcn@latest add <component-name>
```

Example:

```bash
npx shadcn@latest add dialog
```

Components will be added to `src/components/ui/`

## 🔧 Configuration

- **Vite Config**: `vite.config.ts`
- **TypeScript**: `tsconfig.json`, `tsconfig.app.json`, `tsconfig.node.json`
- **Tailwind**: Uses Tailwind CSS 4 with `@tailwindcss/vite` plugin
- **ESLint**: `eslint.config.js`
- **Prettier**: `.prettierrc`, `.prettierignore`

## 🚀 Deployment

1. Build the production bundle:

```bash
pnpm build
```

2. The optimized files will be in the `dist/` directory

3. Deploy to your preferred hosting platform (Vercel, Netlify, AWS, etc.)

## 🤝 Business Integration

The platform includes integration with Yene Health's business marketplace:

- Link: `https://marketplace.yenehealth.com`
- Target audience: Healthcare businesses and providers
- Separate B2B portal for bulk orders and partnerships

## 📱 Mobile App

The platform promotes mobile app downloads for enhanced user experience with native features and offline capabilities.

## 🔒 Security & Privacy

- Secure checkout process
- HIPAA-compliant telemedicine features
- Privacy-focused data handling
- Secure payment integration

## 📄 License

Copyright © 2024 Yene Health. All rights reserved.

## 📞 Contact

- Website: [https://yenehealth.com](https://yenehealth.com)
- ERP/Admin: [https://erp.yenehealth.com](https://erp.yenehealth.com)

---

Built with ❤️ by the Yene Health team
