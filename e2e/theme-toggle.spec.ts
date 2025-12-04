import { test, expect } from '@playwright/test'

test.describe('Dark/Light Mode Toggle', () => {
  test.beforeEach(async ({ page }) => {
    // Navigate to homepage before each test
    await page.goto('/')
    // Wait for the theme toggle to be visible and mounted
    await page.waitForSelector('[aria-label="Light mode"]', { state: 'visible' })
  })

  test('should render theme toggle with all three buttons', async ({ page }) => {
    // Check that all three theme buttons are present
    const lightButton = page.getByRole('button', { name: 'Light mode' })
    const darkButton = page.getByRole('button', { name: 'Dark mode' })
    const systemButton = page.getByRole('button', { name: 'System mode' })

    await expect(lightButton).toBeVisible()
    await expect(darkButton).toBeVisible()
    await expect(systemButton).toBeVisible()
  })

  test('should start with light theme by default', async ({ page }) => {
    // Check that the html element has the 'light' class or doesn't have 'dark' class
    const htmlElement = page.locator('html')

    // The default theme is light, so the html element should not have 'dark' class
    const htmlClasses = await htmlElement.getAttribute('class')
    expect(htmlClasses).not.toContain('dark')

    // Check that the light button appears selected (has shadow-sm class)
    const lightButton = page.getByRole('button', { name: 'Light mode' })
    const buttonClasses = await lightButton.getAttribute('class')
    expect(buttonClasses).toContain('shadow-sm')
  })

  test('should switch to dark mode when dark button is clicked', async ({ page }) => {
    const darkButton = page.getByRole('button', { name: 'Dark mode' })
    const htmlElement = page.locator('html')

    // Click the dark mode button
    await darkButton.click()

    // Wait a moment for the theme to apply
    await page.waitForTimeout(100)

    // Check that the html element now has the 'dark' class
    const htmlClasses = await htmlElement.getAttribute('class')
    expect(htmlClasses).toContain('dark')

    // Check that the dark button appears selected
    const buttonClasses = await darkButton.getAttribute('class')
    expect(buttonClasses).toContain('shadow-sm')
  })

  test('should switch to light mode when light button is clicked after dark mode', async ({ page }) => {
    const lightButton = page.getByRole('button', { name: 'Light mode' })
    const darkButton = page.getByRole('button', { name: 'Dark mode' })
    const htmlElement = page.locator('html')

    // First switch to dark mode
    await darkButton.click()
    await page.waitForTimeout(100)

    // Verify dark mode is active
    let htmlClasses = await htmlElement.getAttribute('class')
    expect(htmlClasses).toContain('dark')

    // Switch back to light mode
    await lightButton.click()
    await page.waitForTimeout(100)

    // Verify light mode is active (dark class removed)
    htmlClasses = await htmlElement.getAttribute('class')
    expect(htmlClasses).not.toContain('dark')

    // Check that the light button appears selected
    const buttonClasses = await lightButton.getAttribute('class')
    expect(buttonClasses).toContain('shadow-sm')
  })

  test('should switch to system mode when system button is clicked', async ({ page }) => {
    const systemButton = page.getByRole('button', { name: 'System mode' })

    // Click the system mode button
    await systemButton.click()
    await page.waitForTimeout(100)

    // Check that the system button appears selected
    const buttonClasses = await systemButton.getAttribute('class')
    expect(buttonClasses).toContain('shadow-sm')

    // Note: We can't easily test if it matches system preference without
    // mocking the system preference, but we can verify the button state
  })

  test('should persist theme selection across page reloads', async ({ page }) => {
    const darkButton = page.getByRole('button', { name: 'Dark mode' })
    const htmlElement = page.locator('html')

    // Switch to dark mode
    await darkButton.click()
    await page.waitForTimeout(100)

    // Verify dark mode is active
    let htmlClasses = await htmlElement.getAttribute('class')
    expect(htmlClasses).toContain('dark')

    // Reload the page
    await page.reload()

    // Wait for theme toggle to be visible again
    await page.waitForSelector('[aria-label="Dark mode"]', { state: 'visible' })
    await page.waitForTimeout(200)

    // Verify dark mode is still active after reload
    htmlClasses = await htmlElement.getAttribute('class')
    expect(htmlClasses).toContain('dark')

    // Verify dark button is still selected
    const buttonClasses = await darkButton.getAttribute('class')
    expect(buttonClasses).toContain('shadow-sm')
  })

  test('should apply dark mode styles to the page background', async ({ page }) => {
    const darkButton = page.getByRole('button', { name: 'Dark mode' })
    const bodyElement = page.locator('body')

    // Get initial background color (light mode)
    const lightBgColor = await bodyElement.evaluate((el) => {
      return window.getComputedStyle(el).backgroundColor
    })

    // Switch to dark mode
    await darkButton.click()
    await page.waitForTimeout(100)

    // Get dark mode background color
    const darkBgColor = await bodyElement.evaluate((el) => {
      return window.getComputedStyle(el).backgroundColor
    })

    // The background colors should be different
    expect(lightBgColor).not.toBe(darkBgColor)
  })

  test('should have accessible aria-labels on all theme buttons', async ({ page }) => {
    // Verify all buttons have proper aria-labels
    await expect(page.getByRole('button', { name: 'Light mode' })).toHaveAttribute('aria-label', 'Light mode')
    await expect(page.getByRole('button', { name: 'Dark mode' })).toHaveAttribute('aria-label', 'Dark mode')
    await expect(page.getByRole('button', { name: 'System mode' })).toHaveAttribute('aria-label', 'System mode')
  })

  test('should show correct icons in theme buttons', async ({ page }) => {
    const lightButton = page.getByRole('button', { name: 'Light mode' })
    const darkButton = page.getByRole('button', { name: 'Dark mode' })
    const systemButton = page.getByRole('button', { name: 'System mode' })

    // Check that each button contains an SVG icon (Lucide icons are SVG)
    await expect(lightButton.locator('svg')).toBeVisible()
    await expect(darkButton.locator('svg')).toBeVisible()
    await expect(systemButton.locator('svg')).toBeVisible()
  })
})
