import { test, expect } from '@playwright/test'

test.describe('Dark Mode - Page Sections', () => {
  test.beforeEach(async ({ page }) => {
    // Navigate to homepage
    await page.goto('/')
    // Wait for the theme toggle to be visible
    await page.waitForSelector('[aria-label="Dark mode"]', { state: 'visible' })
  })

  test('Hero section should have dark background in dark mode', async ({ page }) => {
    const darkButton = page.getByRole('button', { name: 'Dark mode' })

    // Switch to dark mode
    await darkButton.click()
    await page.waitForTimeout(200)

    // Check that the Hero section has proper dark background
    const heroSection = page.locator('section').first()
    const heroClasses = await heroSection.getAttribute('class')

    // Verify it has dark mode gradient classes
    expect(heroClasses).toContain('dark:from-slate-900')
    expect(heroClasses).toContain('dark:via-slate-800')
    expect(heroClasses).toContain('dark:to-slate-900')

    // Verify the background is not white
    const bgColor = await heroSection.evaluate((el) => {
      return window.getComputedStyle(el).backgroundColor
    })

    // In dark mode, background should be a dark color (not white)
    // White is typically rgb(255, 255, 255), dark should be much darker
    expect(bgColor).not.toBe('rgb(255, 255, 255)')
  })

  test('Hero section text should be visible in dark mode', async ({ page }) => {
    const darkButton = page.getByRole('button', { name: 'Dark mode' })

    // Switch to dark mode
    await darkButton.click()
    await page.waitForTimeout(200)

    // Check the main heading "Build at the speed of innovation"
    const heading = page.locator('h1').first()
    await expect(heading).toBeVisible()

    // Get the text color of the heading
    const textColor = await heading.evaluate((el) => {
      return window.getComputedStyle(el).color
    })

    // In dark mode, text should be light (not dark/black)
    // Black/dark text would be rgb(0-50, 0-50, 0-50) range
    expect(textColor).not.toMatch(/rgb\((0|[1-4]\d|50), (0|[1-4]\d|50), (0|[1-4]\d|50)\)/)
  })

  test('Technology Stack section should have dark background in dark mode', async ({ page }) => {
    const darkButton = page.getByRole('button', { name: 'Dark mode' })

    // Switch to dark mode
    await darkButton.click()
    await page.waitForTimeout(200)

    // Find the Technology Stack section by its heading
    const techStackHeading = page.getByRole('heading', { name: 'Our Technology Stack' })
    await expect(techStackHeading).toBeVisible()

    // Get the section element
    const techSection = page.locator('section').filter({ has: techStackHeading })
    const sectionClasses = await techSection.getAttribute('class')

    // Verify it has dark mode background class
    expect(sectionClasses).toContain('dark:bg-slate-900')

    // Verify the background is dark
    const bgColor = await techSection.evaluate((el) => {
      return window.getComputedStyle(el).backgroundColor
    })

    // Should not be white background
    expect(bgColor).not.toBe('rgb(255, 255, 255)')
  })

  test('All sections should have appropriate dark mode styling', async ({ page }) => {
    const darkButton = page.getByRole('button', { name: 'Dark mode' })

    // Switch to dark mode
    await darkButton.click()
    await page.waitForTimeout(200)

    // Check that the html element has dark class
    const htmlElement = page.locator('html')
    const htmlClasses = await htmlElement.getAttribute('class')
    expect(htmlClasses).toContain('dark')

    // Verify main sections exist and are visible
    const sections = [
      { heading: 'Build at the speed of', type: 'Hero' },
      { heading: 'Our Services', type: 'Services' },
      { heading: 'Our Technology Stack', type: 'Technology' },
      { heading: 'What Our Clients Say', type: 'Testimonials' },
      { heading: 'Ready to start your project', type: 'CTA' },
    ]

    for (const section of sections) {
      const sectionElement = page.locator(`text=${section.heading}`).first()
      await expect(sectionElement).toBeVisible()
    }
  })

  test('Stats section should be visible and styled in dark mode', async ({ page }) => {
    const darkButton = page.getByRole('button', { name: 'Dark mode' })

    // Switch to dark mode
    await darkButton.click()
    await page.waitForTimeout(200)

    // Find stats (Happy Clients, Projects Completed, etc.)
    const statsLabel = page.locator('text=Happy Clients').first()
    await expect(statsLabel).toBeVisible()

    // Stats should have light text in dark mode
    const statColor = await statsLabel.evaluate((el) => {
      return window.getComputedStyle(el).color
    })

    // Should not be black/dark text
    expect(statColor).not.toMatch(/rgb\((0|[1-4]\d|50), (0|[1-4]\d|50), (0|[1-4]\d|50)\)/)
  })

  test('Cards should have dark styling in dark mode', async ({ page }) => {
    const darkButton = page.getByRole('button', { name: 'Dark mode' })

    // Switch to dark mode
    await darkButton.click()
    await page.waitForTimeout(200)

    // Find service cards
    const serviceCard = page.locator('text=Software Development').first()
    await expect(serviceCard).toBeVisible()

    // Get the card's background color
    const cardElement = serviceCard.locator('..').locator('..')
    const cardBg = await cardElement.evaluate((el) => {
      return window.getComputedStyle(el).backgroundColor
    })

    // Card should have dark background in dark mode, not white
    expect(cardBg).not.toBe('rgb(255, 255, 255)')
  })

  test('Theme should persist when switching between sections', async ({ page }) => {
    const darkButton = page.getByRole('button', { name: 'Dark mode' })

    // Switch to dark mode
    await darkButton.click()
    await page.waitForTimeout(200)

    // Scroll to different sections
    await page.locator('text=Our Services').first().scrollIntoViewIfNeeded()
    await page.waitForTimeout(100)

    await page.locator('text=Our Technology Stack').first().scrollIntoViewIfNeeded()
    await page.waitForTimeout(100)

    // Verify dark mode is still active
    const htmlElement = page.locator('html')
    const htmlClasses = await htmlElement.getAttribute('class')
    expect(htmlClasses).toContain('dark')

    // Verify dark button is still selected
    const buttonClasses = await darkButton.getAttribute('class')
    expect(buttonClasses).toContain('shadow-sm')
  })
})
