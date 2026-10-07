import type { CSSProperties } from 'react'
import type { ProductBrand } from '@/types'

const hexToRgbChannels = (hex: string) => {
  const value = hex.replace('#', '')
  const r = parseInt(value.slice(0, 2), 16)
  const g = parseInt(value.slice(2, 4), 16)
  const b = parseInt(value.slice(4, 6), 16)
  return `${r} ${g} ${b}`
}

/**
 * Scopes the `product` Tailwind colours (bg-product, text-product-strong, …)
 * to a product's brand. Apply to the outermost element of a product surface.
 */
export function productThemeStyle(brand: ProductBrand): CSSProperties {
  return {
    '--product-brand': hexToRgbChannels(brand.brand),
    '--product-strong': hexToRgbChannels(brand.strong),
    '--product-accent': hexToRgbChannels(brand.accent),
    '--product-tint': hexToRgbChannels(brand.tint),
  } as CSSProperties
}
