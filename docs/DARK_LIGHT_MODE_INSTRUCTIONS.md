Here's a comprehensive set of instructions for Claude Code to implement Dark/Light mode in your Next.js application:

---

## Dark/Light Mode Implementation Instructions

**Project Context:**
- Next.js 14+ with App Router
- React with TypeScript
- TailwindCSS for styling
- Need Dark/Light/System mode toggle with OLED-compatible colors

**Requirements:**

1. **Theme Provider Setup**
   - Install and configure `next-themes` package for theme management
   - Set up a ThemeProvider component that wraps the application
   - Configure to support 'light', 'dark', and 'system' modes
   - Enable class-based theme switching for Tailwind

2. **Tailwind Configuration**
   - Enable dark mode with 'class' strategy in tailwind.config.js
   - Extend the color palette with OLED-compatible dark mode colors using Slate variations (slate-950, slate-900, slate-800 for backgrounds)
   - Define color variables that work for both light and dark modes
   - Set up custom color tokens if needed for consistent theming

3. **Theme Toggle Component**
   - Create a toggle component with three states: Light, Dark, and System
   - Use icons (Sun, Moon, Monitor/Desktop) to represent each mode
   - Show the current active theme state visually
   - Make it accessible with proper ARIA labels
   - Position it appropriately (header, navbar, or settings area)

4. **Logo Switching Logic**
   - Implement conditional logo rendering based on current theme
   - Create separate logo assets for light and dark modes (or instruct where to place them)
   - Use the theme context to detect current mode and switch logos accordingly
   - Ensure smooth transitions without flickering

5. **Color Scheme Implementation**
   - Apply dark mode classes throughout the application using Tailwind's `dark:` prefix
   - For OLED dark mode, use deep blacks and slate variations:
     - Background: `bg-slate-950` or `bg-black`
     - Cards/Surfaces: `bg-slate-900` or `bg-slate-950`
     - Borders: `border-slate-800`
     - Text: `text-slate-50`, `text-slate-200`, `text-slate-400`
   - Ensure proper contrast ratios for accessibility

6. **Prevent Flash of Unstyled Content**
   - Add a script in the root layout to prevent theme flashing on page load
   - Ensure the theme is applied before the page renders
   - Handle SSR/SSG correctly with next-themes

7. **Persistence**
   - Ensure theme preference is saved to localStorage
   - Restore user's theme choice on subsequent visits
   - Handle system preference changes in real-time when 'system' mode is selected

8. **Global Styles**
   - Update globals.css with CSS variables for theme-aware colors
   - Define color variables for both light and dark modes
   - Use these variables throughout the app for consistency

**Implementation Steps:**
1. Install dependencies: `npm install next-themes`
2. Create ThemeProvider component in `components/providers/theme-provider.tsx`
3. Wrap the application with ThemeProvider in root layout
4. Configure Tailwind for dark mode
5. Create ThemeToggle component with three-way switch
6. Implement logo switching logic
7. Add dark mode classes to all components
8. Test theme switching, persistence, and system preference detection

**Testing Checklist:**
- Theme toggle switches between all three modes correctly
- Theme persists across page refreshes
- System mode responds to OS theme changes
- Logo switches appropriately
- No flash of unstyled content on page load
- All UI elements are visible and have proper contrast in both themes
- OLED dark mode uses true blacks/deep slate colors

---
