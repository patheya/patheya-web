# Quick Start Guide - Patheya Technologies Website

## Getting Started

This guide will help you get the Patheya Technologies website up and running on your local machine.

## Prerequisites

Before you begin, ensure you have the following installed:
- **Node.js** 18.0 or higher
- **npm** 9.0 or higher

Check your versions:
```bash
node --version
npm --version
```

## Installation

1. **Navigate to the project directory:**
   ```bash
   cd patheya-web
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Run the development server:**
   ```bash
   npm run dev
   ```

4. **Open your browser:**
   Visit [http://localhost:3000](http://localhost:3000) to view the site

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Create production build
- `npm start` - Start production server
- `npm run lint` - Run ESLint
- `npm run type-check` - Run TypeScript type checking

## Project Structure

```
patheya-web/
├── src/
│   ├── app/              # Next.js pages (App Router)
│   │   ├── layout.tsx    # Root layout
│   │   └── page.tsx      # Homepage
│   ├── components/       # React components
│   ├── lib/             # Utility functions
│   │   └── utils.ts     # Helper functions
│   ├── styles/          # Global styles
│   │   └── globals.css  # Tailwind CSS imports
│   └── types/           # TypeScript types
│       └── index.ts     # Type definitions
├── public/
│   ├── images/          # Images and branding assets
│   └── fonts/           # Custom fonts (if any)
├── docs/                # Documentation
├── PRD.md              # Product Requirements Document
└── README.md           # Project overview
```

## Key Technologies

- **Next.js 14+** - React framework with App Router
- **TypeScript** - Type-safe JavaScript
- **Tailwind CSS** - Utility-first CSS framework
- **Framer Motion** - Animation library
- **Lucide Icons** - Icon library

## Development Workflow

1. **Create a new branch** for your feature:
   ```bash
   git checkout -b feature/your-feature-name
   ```

2. **Make your changes** and test locally

3. **Commit your changes** using conventional commits:
   ```bash
   git commit -m "feat: add new feature"
   ```

4. **Push to repository:**
   ```bash
   git push origin feature/your-feature-name
   ```

## Building for Production

1. **Create a production build:**
   ```bash
   npm run build
   ```

2. **Test the production build locally:**
   ```bash
   npm start
   ```

3. **Deploy** (Vercel recommended):
   - Connect your Git repository to Vercel
   - Vercel will automatically deploy on push to main branch

## Troubleshooting

### Port Already in Use
If port 3000 is already in use, you can specify a different port:
```bash
PORT=3001 npm run dev
```

### Module Not Found
If you encounter module errors after pulling changes:
```bash
rm -rf node_modules package-lock.json
npm install
```

### TypeScript Errors
Run type checking to identify issues:
```bash
npm run type-check
```

## Next Steps

1. **Read the PRD.md** to understand project requirements and phases
2. **Review the code structure** in `src/` directory
3. **Start implementing features** according to the development phases outlined in PRD.md
4. **Test on multiple devices** and browsers regularly

## Useful Commands

```bash
# Install a new package
npm install package-name

# Install a dev dependency
npm install --save-dev package-name

# Update dependencies
npm update

# Check for outdated packages
npm outdated

# Clear Next.js cache
rm -rf .next
```

## Resources

- [PRD.md](../PRD.md) - Complete project requirements
- [Next.js Documentation](https://nextjs.org/docs)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [TypeScript Documentation](https://www.typescriptlang.org/docs)

## Need Help?

- Check the PRD.md for detailed requirements
- Review Next.js documentation for framework questions
- Check existing components for reference implementations

---

Happy coding! 🚀
