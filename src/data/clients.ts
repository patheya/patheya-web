import { Client } from '@/types'

/**
 * Client Logos Configuration
 *
 * Instructions for adding your client logos:
 * 1. Place logo files in: /public/images/clients/
 * 2. Recommended formats: SVG (preferred) or PNG with transparent background
 * 3. Recommended size: Minimum 300x100px (or 2x display size)
 * 4. File naming: use lowercase with hyphens (e.g., company-name-logo.svg)
 * 5. Update the logo path below to match your file name
 *
 * Example file structure:
 * public/
 *   images/
 *     clients/
 *       acme-corp-logo.svg
 *       tech-solutions-logo.png
 *       global-inc-logo.svg
 */

export const clients: Client[] = [
  {
    id: 'client-1',
    name: 'FTB Colab',
    logo: '/images/clients/ftb_colab.png',
    width: 389,
    height: 194,
    alt: 'FTB Colab logo',
  },
  {
    id: 'client-2',
    name: 'DG Future Tech',
    logo: '/images/clients/dgft.png',
    width: 500,
    height: 300,
    scale: 1.4,
    alt: 'DG Future Tech logo',
  },
  {
    id: 'client-3',
    name: 'Matsya Capital',
    logo: '/images/clients/matsya_capital.png',
    width: 1806,
    height: 634,
    alt: 'Matsya Capital logo',
  },
  {
    id: 'client-4',
    name: 'NoGuiltTrip',
    logo: '/images/clients/noguitltrip_full.svg',
    width: 127,
    height: 27,
    alt: 'NoGuiltTrip logo',
  },
  {
    id: 'client-5',
    name: 'Skoda',
    logo: '/images/clients/skoda_vw_india.jpg',
    width: 759,
    height: 377,
    scale: 1.35,
    alt: 'Skoda logo',
  },
  {
    id: 'client-6',
    name: 'Ignite Life Science Foundation',
    logo: '/images/clients/ignite_image.png',
    width: 770,
    height: 206,
    scale: 1.15,
    alt: 'Ignite Life Science Foundation',
  },
  {
    id: 'client-7',
    name: 'Light House',
    logo: '/images/clients/light_house_logo_dark.png',
    width: 496,
    height: 112,
    alt: 'Light House',
  },
  {
    id: 'client-8',
    name: 'Hexagon',
    logo: '/images/clients/hexagon.png',
    width: 554,
    height: 203,
    scale: 1.2,
    alt: 'Hexagon logo',
  },
  {
    id: 'client-10',
    name: 'Food to Home',
    logo: '/images/clients/f2h-new-logo2.png',
    width: 661,
    height: 228,
    alt: 'Food to Home',
  },
  {
    id: 'client-11',
    name: 'Mr. Perfect',
    logo: '/images/clients/mr_perfect_logo.png',
    width: 1920,
    height: 668,
    scale: 0.9,
    alt: 'Mr. Perfect logo',
  },
  {
    id: 'client-12',
    name: 'CARe',
    logo: '/images/clients/care-logo-dark.png',
    width: 1054,
    height: 259,
    alt: 'CARe logo',
  },
  {
    id: 'client-13',
    name: 'Sparc',
    logo: '/images/clients/sparc_logo.png',
    width: 936,
    height: 744,
    alt: 'Sparc logo',
  },
  {
    id: 'client-14',
    name: 'The GreenZilla',
    logo: '/images/clients/gz-logo.png',
    width: 829,
    height: 196,
    alt: 'The GreenZilla logo',
  },
  {
    id: 'client-15',
    name: 'Moovvfit',
    // Filenames name the ink color, not the theme: dark-ink logo shows in light
    // theme (light background); light-ink logo shows in dark theme.
    logo: '/images/clients/moovvfit_logo_dark.svg',
    width: 337,
    height: 61,
    logoDark: '/images/clients/moovvfit_logo_light.svg',
    alt: 'Moovvfit logo',
  },
]
