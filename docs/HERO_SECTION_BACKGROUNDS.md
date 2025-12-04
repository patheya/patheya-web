# Hero Section Background Enhancement Prompt (Dark/Light Theme Compatible)

Please enhance all hero sections across the website by adding modern, visually striking backgrounds using Glassmorphism, Claymorphism, or Neonmorphism design styles. Apply these backgrounds to existing hero sections without changing the current content or layout structure.

**IMPORTANT:** All background implementations must support both dark and light theme modes. Use Tailwind's `dark:` prefix or CSS custom properties that respond to theme changes.

## Design Style Implementation Guide

### 1. GLASSMORPHISM (Apply to: Homepage, Services, About, Contact)

**Visual Effect:** Frosted glass with semi-transparent layers

**LIGHT THEME Implementation:**
```css
/* Main hero container background - LIGHT */
background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
/* OR */
background: linear-gradient(120deg, #89f7fe 0%, #66a6ff 100%);

/* Glass overlay panel - LIGHT */
background: rgba(255, 255, 255, 0.15);
backdrop-filter: blur(10px);
-webkit-backdrop-filter: blur(10px);
border: 1px solid rgba(255, 255, 255, 0.25);
border-radius: 16px;
box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);

/* Text color - LIGHT */
color: #ffffff; /* or dark text if background is light enough */
```

**DARK THEME Implementation:**
```css
/* Main hero container background - DARK */
background: linear-gradient(135deg, #1e293b 0%, #0f172a 100%);
/* OR with subtle color */
background: linear-gradient(120deg, #1e3a8a 0%, #1e1b4b 100%);

/* Glass overlay panel - DARK */
background: rgba(15, 23, 42, 0.4);
backdrop-filter: blur(10px);
-webkit-backdrop-filter: blur(10px);
border: 1px solid rgba(148, 163, 184, 0.2);
border-radius: 16px;
box-shadow: 0 8px 32px 0 rgba(0, 0, 0, 0.5);

/* Text color - DARK */
color: #f1f5f9;
```

**Tailwind CSS Classes:**
```html
<!-- Light theme base -->
<div class="bg-gradient-to-br from-indigo-500 to-purple-600 
            dark:from-slate-800 dark:to-slate-900">
  
  <!-- Glass panel -->
  <div class="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl shadow-xl
              dark:bg-slate-900/40 dark:border-slate-400/20 dark:shadow-2xl">
    
    <!-- Text -->
    <h1 class="text-white dark:text-slate-100">Hero Title</h1>
    <p class="text-white/90 dark:text-slate-300">Description</p>
  </div>
</div>
```

**Animated gradient orbs (theme-aware):**
```css
/* Light theme orbs */
.orb-light {
  background: radial-gradient(circle, rgba(102, 126, 234, 0.6), rgba(118, 75, 162, 0.4));
  filter: blur(60px);
}

/* Dark theme orbs */
.orb-dark {
  background: radial-gradient(circle, rgba(59, 130, 246, 0.3), rgba(99, 102, 241, 0.2));
  filter: blur(60px);
}
```

**Animation:**
```css
@keyframes float {
  0%, 100% { transform: translateY(0px) rotate(0deg); }
  50% { transform: translateY(-20px) rotate(5deg); }
}
```

---

### 2. CLAYMORPHISM (Apply to: Technology/Solutions, Portfolio/Case Studies)

**Visual Effect:** Soft, inflated, tactile appearance

**LIGHT THEME Implementation:**
```css
/* Main hero container background - LIGHT */
background: linear-gradient(135deg, #ffecd2 0%, #fcb69f 100%);
/* OR for tech-focused */
background: linear-gradient(135deg, #e0c3fc 0%, #8ec5fc 100%);
/* OR neutral */
background: #f0f4f8;

/* Clay elements - LIGHT */
background: #e0e5ec;
border-radius: 30px;
box-shadow: 
  9px 9px 16px rgba(163, 177, 198, 0.6),
  -9px -9px 16px rgba(255, 255, 255, 0.5),
  inset 2px 2px 4px rgba(255, 255, 255, 0.2);

/* Text color - LIGHT */
color: #2d3748;
```

**DARK THEME Implementation:**
```css
/* Main hero container background - DARK */
background: linear-gradient(135deg, #1e293b 0%, #334155 100%);
/* OR with subtle color */
background: linear-gradient(135deg, #312e81 0%, #1e3a8a 100%);

/* Clay elements - DARK */
background: #1e293b;
border-radius: 30px;
box-shadow: 
  9px 9px 16px rgba(0, 0, 0, 0.4),
  -9px -9px 16px rgba(71, 85, 105, 0.1),
  inset 2px 2px 4px rgba(71, 85, 105, 0.1);

/* Text color - DARK */
color: #f1f5f9;
```

**Tailwind CSS Classes:**
```html
<!-- Light theme base -->
<div class="bg-gradient-to-br from-orange-100 to-pink-200
            dark:from-slate-800 dark:to-slate-700">
  
  <!-- Clay panel -->
  <div class="bg-slate-200 rounded-[30px]
              dark:bg-slate-800
              shadow-[9px_9px_16px_rgba(163,177,198,0.6),-9px_-9px_16px_rgba(255,255,255,0.5)]
              dark:shadow-[9px_9px_16px_rgba(0,0,0,0.4),-9px_-9px_16px_rgba(71,85,105,0.1)]">
    
    <!-- Text -->
    <h1 class="text-gray-800 dark:text-slate-100">Hero Title</h1>
    <p class="text-gray-600 dark:text-slate-300">Description</p>
  </div>
</div>
```

**Decorative shapes (theme-aware):**
```css
/* Light theme shapes */
.clay-shape-light {
  background: #FFE5E5;
  border-radius: 50%;
  box-shadow: 6px 6px 12px rgba(163, 177, 198, 0.6),
              -6px -6px 12px rgba(255, 255, 255, 0.5);
}

/* Dark theme shapes */
.clay-shape-dark {
  background: #334155;
  border-radius: 50%;
  box-shadow: 6px 6px 12px rgba(0, 0, 0, 0.4),
              -6px -6px 12px rgba(71, 85, 105, 0.1);
}
```

---

### 3. NEONMORPHISM (Apply to: Careers, Innovation/AI pages)

**Visual Effect:** Cyberpunk aesthetic with glowing neon accents

**LIGHT THEME Implementation:**
```css
/* Main hero container background - LIGHT */
/* Note: Neonmorphism works best on dark backgrounds, but here's a light adaptation */
background: linear-gradient(135deg, #f0f9ff 0%, #e0f2fe 100%);
/* OR */
background: radial-gradient(circle at 20% 50%, #dbeafe 0%, #f8fafc 50%, #ffffff 100%);

/* Neon accent panels - LIGHT (subtle glow) */
background: rgba(255, 255, 255, 0.8);
border: 2px solid #0ea5e9;
border-radius: 16px;
box-shadow: 
  0 0 10px rgba(14, 165, 233, 0.3),
  0 0 20px rgba(14, 165, 233, 0.2),
  inset 0 0 10px rgba(14, 165, 233, 0.05);

/* Text color - LIGHT */
color: #0f172a;

/* Accent glow - LIGHT (muted) */
text-shadow: 
  0 0 5px rgba(14, 165, 233, 0.3),
  0 0 10px rgba(14, 165, 233, 0.2);
```

**DARK THEME Implementation (Recommended):**
```css
/* Main hero container background - DARK */
background: linear-gradient(135deg, #0a0e27 0%, #1a1a2e 100%);
/* OR */
background: radial-gradient(circle at 20% 50%, #1e3a8a 0%, #0f172a 50%, #000000 100%);

/* Neon glow panels - DARK */
background: rgba(10, 14, 39, 0.8);
border: 2px solid #00D9FF;
border-radius: 16px;
box-shadow: 
  0 0 20px rgba(0, 217, 255, 0.5),
  0 0 40px rgba(0, 217, 255, 0.3),
  inset 0 0 20px rgba(0, 217, 255, 0.1);

/* Text color - DARK */
color: #f8fafc;

/* Neon text glow - DARK */
text-shadow: 
  0 0 10px rgba(0, 217, 255, 0.8),
  0 0 20px rgba(0, 217, 255, 0.6),
  0 0 30px rgba(0, 217, 255, 0.4);

/* Glowing accent lines - DARK */
background: linear-gradient(90deg, 
  transparent 0%, 
  #00D9FF 50%, 
  transparent 100%
);
box-shadow: 0 0 10px #00D9FF;
```

**Tailwind CSS Classes:**
```html
<!-- Dark theme preferred, with light theme fallback -->
<div class="bg-gradient-to-br from-sky-50 to-blue-100
            dark:from-[#0a0e27] dark:to-[#1a1a2e]">
  
  <!-- Neon panel -->
  <div class="bg-white/80 border-2 border-sky-500 rounded-2xl
              dark:bg-[#0a0e27]/80 dark:border-cyan-400
              shadow-[0_0_10px_rgba(14,165,233,0.3),0_0_20px_rgba(14,165,233,0.2)]
              dark:shadow-[0_0_20px_rgba(0,217,255,0.5),0_0_40px_rgba(0,217,255,0.3)]">
    
    <!-- Text with glow -->
    <h1 class="text-slate-900 dark:text-slate-50
               dark:[text-shadow:0_0_10px_rgba(0,217,255,0.8),0_0_20px_rgba(0,217,255,0.6)]">
      Hero Title
    </h1>
    <p class="text-slate-700 dark:text-slate-200">Description</p>
  </div>
</div>
```

**Neon color palette (theme-aware):**
```css
/* LIGHT THEME - Muted neon colors */
--neon-primary-light: #0ea5e9;    /* Sky blue */
--neon-secondary-light: #a855f7;  /* Purple */
--neon-accent-light: #10b981;     /* Emerald */

/* DARK THEME - Vibrant neon colors */
--neon-primary-dark: #00D9FF;     /* Cyan */
--neon-secondary-dark: #FF00FF;   /* Magenta */
--neon-accent-dark: #00FF88;      /* Neon Green */
--neon-warning-dark: #FFFF00;     /* Electric Yellow */
```

**Animation (works for both themes):**
```css
@keyframes neonPulse {
  0%, 100% { 
    box-shadow: 0 0 20px var(--neon-color-weak),
                0 0 40px var(--neon-color-weaker);
  }
  50% { 
    box-shadow: 0 0 30px var(--neon-color-strong),
                0 0 60px var(--neon-color-medium);
  }
}

/* Apply with theme-aware custom properties */
.neon-element {
  --neon-color-strong: rgba(14, 165, 233, 0.4);
  --neon-color-medium: rgba(14, 165, 233, 0.3);
  --neon-color-weak: rgba(14, 165, 233, 0.2);
  --neon-color-weaker: rgba(14, 165, 233, 0.1);
}

.dark .neon-element {
  --neon-color-strong: rgba(0, 217, 255, 0.8);
  --neon-color-medium: rgba(0, 217, 255, 0.5);
  --neon-color-weak: rgba(0, 217, 255, 0.3);
  --neon-color-weaker: rgba(0, 217, 255, 0.2);
}
```

---

## Implementation Requirements

### For ALL hero sections:
1. **Keep existing content structure** - only add/modify background layers
2. **Theme Detection**: Ensure backgrounds respond to the current theme (light/dark)
3. **Use CSS Custom Properties** for easy theme switching:
```css
:root {
  /* Light theme variables */
  --hero-bg-start: #667eea;
  --hero-bg-end: #764ba2;
  --glass-bg: rgba(255, 255, 255, 0.15);
  --glass-border: rgba(255, 255, 255, 0.25);
  --text-primary: #1e293b;
  --text-secondary: #475569;
}

.dark {
  /* Dark theme variables */
  --hero-bg-start: #1e293b;
  --hero-bg-end: #0f172a;
  --glass-bg: rgba(15, 23, 42, 0.4);
  --glass-border: rgba(148, 163, 184, 0.2);
  --text-primary: #f1f5f9;
  --text-secondary: #cbd5e1;
}
```

4. **Add animated background elements** (theme-aware):
   - Floating gradient orbs for glassmorphism (adjust colors per theme)
   - Soft shapes for claymorphism (adjust shadows per theme)
   - Glowing particles or grid lines for neonmorphism (intensity varies by theme)

5. **Ensure text contrast** in both themes:
   - Use high contrast text colors that adapt to theme
   - Test with WCAG AA standards (4.5:1 ratio minimum)
   - Light theme: dark text on light backgrounds
   - Dark theme: light text on dark backgrounds

6. **Add subtle animations** (same for both themes):
   - Floating/pulsing effects (3-5 second duration)
   - Gradient shifts for glassmorphism backgrounds
   - Neon pulse effects for neonmorphism (intensity varies by theme)

7. **Responsive behavior** (both themes):
   - Simplify backdrop-blur effects on mobile for performance
   - Reduce glow intensity on smaller screens
   - Scale down decorative elements appropriately
   - Maintain visual hierarchy across devices

8. **Smooth theme transitions**:
```css
/* Add transitions for smooth theme switching */
.hero-section {
  transition: background-color 0.3s ease,
              border-color 0.3s ease,
              box-shadow 0.3s ease,
              color 0.3s ease;
}
```

### Technical notes:
- Use Tailwind CSS `dark:` prefix for theme-specific styling
- Use CSS custom properties (variables) for colors that change between themes
- For complex effects, add custom CSS with theme-aware selectors
- Use CSS transforms for animations (better performance)
- Add `-webkit-` prefixes for Safari support on backdrop-filter
- Test blur effects on lower-end devices and provide fallbacks
- Ensure smooth transitions when switching between themes (0.3s ease recommended)

### Theme-aware Tailwind example:
```html
<!-- Button with theme-aware neon glow -->
<button class="
  bg-sky-500 text-white
  dark:bg-cyan-400 dark:text-slate-900
  shadow-lg shadow-sky-500/50
  dark:shadow-cyan-400/50
  hover:shadow-xl hover:shadow-sky-500/70
  dark:hover:shadow-xl dark:hover:shadow-cyan-400/70
  transition-all duration-300
">
  Get Started
</button>
```

### Color harmony (both themes):
- **Light theme**: Ensure backgrounds are bright/soft, text is dark with good contrast
- **Dark theme**: Ensure backgrounds are dark, text is light with good contrast
- Maintain sufficient contrast ratio (WCAG AA: 4.5:1 for text)
- Use opacity adjustments if backgrounds are too bold
- Test with actual theme switcher to ensure smooth transitions

---

## Expected Result

After implementation, each hero section should have:
- A visually stunning, modern background that matches its design style
- **Perfect adaptation to both light and dark themes** with smooth transitions
- Appropriate contrast and readability in both theme modes
- Smooth, subtle animations that enhance without distracting
- Perfect text readability with proper contrast in both themes
- Consistent premium feel across all pages and both themes
- Optimized performance with 60fps animations
- Theme-aware color palettes that look great in both modes

### Theme-specific expectations:

**Light Theme:**
- Bright, vibrant gradients for glassmorphism
- Soft, pastel colors for claymorphism
- Muted neon accents (or skip neonmorphism in favor of glassmorphism)
- High contrast dark text on light backgrounds

**Dark Theme:**
- Deep, rich gradients for glassmorphism
- Darker clay with subtle highlights for claymorphism
- Full intensity neon effects for neonmorphism
- High contrast light text on dark backgrounds

The overall effect should make visitors immediately recognize this as a cutting-edge, professional software development company, **regardless of their theme preference**.