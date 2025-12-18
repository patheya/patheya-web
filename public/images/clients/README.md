# Client Logos

This directory contains client company logos displayed on the homepage.

## File Requirements

### Format
- **SVG** (preferred) - Scalable and small file size
- **PNG** with transparent background (fallback)

### Size & Resolution
- Minimum: 300×100px
- Recommended: 600×200px (2x for retina displays)
- Aspect ratio: Horizontal layout preferred (width > height)

### File Naming Convention
Use lowercase with hyphens:
- ✅ `acme-corporation-logo.svg`
- ✅ `tech-solutions-logo.png`
- ❌ `AcmeCorp Logo.svg`
- ❌ `logo_1.png`

### Image Optimization
- **SVG**: Optimize with SVGO or similar tools
- **PNG**: Use transparent background, optimize with ImageOptim or TinyPNG
- **File size**: Keep under 50KB per logo

## Adding Your Logos

1. Place logo files in this directory (`public/images/clients/`)
2. Update the client data in: `src/data/clients.ts`
3. Match the filename exactly in the `logo` property

### Example

If your file is: `public/images/clients/microsoft-logo.svg`

Update `src/data/clients.ts`:
```typescript
{
  id: 'microsoft',
  name: 'Microsoft',
  logo: '/images/clients/microsoft-logo.svg',
  alt: 'Microsoft logo',
}
```

## Logo Guidelines

- Use official brand logos from client's press kit or website
- Ensure consistent visual weight across all logos
- Test in both light and dark modes
- Logos should work well in full color
- Maintain aspect ratio and proper spacing
