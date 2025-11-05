# Portfolio Website

A modern, responsive portfolio website built with React, TypeScript, and Tailwind CSS.

## Features

- 🎨 Modern, responsive design
- 🌙 Dark/Light mode support
- ⚡ Fast performance with Vite
- 🎭 Smooth animations with Framer Motion
- 📱 Mobile-first responsive design
- 🚀 Deployed via GitHub Pages

## Tech Stack

- **Frontend**: React 18, TypeScript
- **Styling**: Tailwind CSS, Radix UI components
- **Animations**: Framer Motion
- **Build Tool**: Vite
- **Deployment**: GitHub Pages via GitHub Actions

## Getting Started

### Prerequisites
- Node.js 18+
- npm or yarn

### Installation

1. Clone the repository
```bash
git clone https://github.com/yourusername/portfolio.git
cd portfolio
```

2. Install dependencies
```bash
npm install
```

3. Start the development server
```bash
npm run dev
```

4. Open [http://localhost:5173](http://localhost:5173) to view it in the browser.

## Deployment

This project is configured for automatic deployment to GitHub Pages using GitHub Actions.

### Setup GitHub Pages

1. Go to your repository settings
2. Navigate to "Pages" in the left sidebar
3. Under "Source", select "GitHub Actions"
4. Push to the `main` branch to trigger deployment

### Manual Deployment

```bash
npm run build
npm run preview
```

## Project Structure

```
src/
├── components/          # Reusable UI components
│   ├── layout/         # Layout components (Navigation)
│   ├── sections/       # Page sections (Hero, About, Skills, etc.)
│   ├── shared/         # Shared components
│   └── ui/             # UI components from Radix UI
├── data/               # Static data and content
├── hooks/              # Custom React hooks
├── lib/                # Utility functions
├── types/              # TypeScript type definitions
└── utils/              # Helper functions
```

## Customization

### Personal Information
Update your personal information in `src/data/portfolio.ts`:
- Personal details
- Skills and categories
- Projects
- Contact information

### Styling
- Colors and themes: Modify Tailwind config
- Components: Update individual component files
- Animations: Adjust Framer Motion configurations

### Content Sections
Each section is a separate component in `src/components/sections/`:
- `HeroSection.tsx` - Landing section with introduction
- `AboutSection.tsx` - About me and journey
- `SkillsSection.tsx` - Technical skills categorized
- `ProjectsSection.tsx` - Featured projects
- `ContactSection.tsx` - Contact information and form

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is open source and available under the [MIT License](LICENSE).
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...

      // Remove tseslint.configs.recommended and replace with this
      tseslint.configs.recommendedTypeChecked,
      // Alternatively, use this for stricter rules
      tseslint.configs.strictTypeChecked,
      // Optionally, add this for stylistic rules
      tseslint.configs.stylisticTypeChecked,

      // Other configs...
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])
```

You can also install [eslint-plugin-react-x](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-x) and [eslint-plugin-react-dom](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-dom) for React-specific lint rules:

```js
// eslint.config.js
import reactX from 'eslint-plugin-react-x'
import reactDom from 'eslint-plugin-react-dom'

export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...
      // Enable lint rules for React
      reactX.configs['recommended-typescript'],
      // Enable lint rules for React DOM
      reactDom.configs.recommended,
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])
```
