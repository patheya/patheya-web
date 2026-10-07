import { readFile } from 'node:fs/promises'
import { join } from 'node:path'
import { ImageResponse } from 'next/og'
import { products, getProductBySlug, productStatusLabel } from '@/lib/data/products'

export const alt = 'Patheya Technologies product'
export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'

export function generateStaticParams() {
  return products.map((product) => ({ slug: product.slug }))
}

export default async function OpengraphImage({ params }: { params: { slug: string } }) {
  const product = getProductBySlug(params.slug) ?? products[0]
  // Prerendered at build time (generateStaticParams), so reading from public/ is safe
  const iconData = await readFile(join(process.cwd(), 'public', product.icon))
  const iconSrc = `data:image/png;base64,${Buffer.from(iconData).toString('base64')}`
  const { brand, strong, accent, tint } = product.brand

  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          position: 'relative',
          background: `linear-gradient(135deg, #ffffff 0%, ${tint} 100%)`,
          fontFamily: 'sans-serif',
        }}
      >
        <div
          style={{
            position: 'absolute',
            right: -160,
            top: -160,
            width: 560,
            height: 560,
            borderRadius: 9999,
            background: brand,
            opacity: 0.18,
          }}
        />
        <div
          style={{
            position: 'absolute',
            right: 120,
            bottom: -220,
            width: 420,
            height: 420,
            borderRadius: 9999,
            background: accent,
            opacity: 0.14,
          }}
        />
        <div style={{ width: 16, height: '100%', display: 'flex', background: `linear-gradient(180deg, ${brand}, ${accent})` }} />
        <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between', padding: '64px 72px', flex: 1 }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 32 }}>
            <div
              style={{
                display: 'flex',
                width: 148,
                height: 148,
                borderRadius: 32,
                background: '#ffffff',
                boxShadow: '0 12px 32px rgba(15, 23, 42, 0.12)',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={iconSrc} width={120} height={120} alt="" />
            </div>
            <div style={{ display: 'flex', flexDirection: 'column' }}>
              <div style={{ fontSize: 76, fontWeight: 800, color: '#0f172a', lineHeight: 1 }}>{product.name}</div>
              <div style={{ fontSize: 32, color: strong, marginTop: 14 }}>{product.tagline}</div>
            </div>
          </div>
          <div style={{ display: 'flex', fontSize: 40, color: '#334155', lineHeight: 1.3, maxWidth: 940 }}>
            {product.hero.headline}
          </div>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
            <div style={{ display: 'flex', fontSize: 26, color: '#475569' }}>
              A product by&nbsp;<span style={{ color: '#0f172a', fontWeight: 700 }}>Patheya Technologies</span>
            </div>
            <div
              style={{
                display: 'flex',
                fontSize: 24,
                fontWeight: 700,
                color: '#ffffff',
                background: product.status === 'live' ? '#047857' : '#b45309',
                padding: '10px 24px',
                borderRadius: 9999,
              }}
            >
              {productStatusLabel[product.status]}
            </div>
          </div>
        </div>
      </div>
    ),
    { ...size }
  )
}
