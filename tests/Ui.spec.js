const { test, expect } = require('@playwright/test');
const fs = require('fs');


test('Finacplus Assignment - DemoQA Login', async ({ page }) => {
    const username = 'gkarthik2233';
    const password = 'Gkarthik@2233';
    await page.goto('https://demoqa.com/');
    await page.locator('.card-body h5').nth(5).click();
    await page.getByRole('button', { name: 'Login' }).click();
    await page.getByPlaceholder('UserName').fill('gkarthik2233');
    await page.getByPlaceholder('Password').fill('Gkarthik@2233');
    await page.getByRole('button', { name: 'Login' }).click();
    await page.waitForTimeout(20000);

    const userval = await page.locator('#userName-value');
    await expect(userval).toBeVisible();
    const displayedUsername = await userval.textContent();
    expect(displayedUsername).toBe(username);

    const logoutButton = await page.locator('#submit');
    await expect(logoutButton).toBeVisible();
    await page.pause();

    const searchBox = await page.locator('#searchBox');
    await searchBox.fill('Learning JavaScript Design Patterns');
    await page.waitForTimeout(1000);
    const bookTitle = await page.locator('text=Learning JavaScript Design Patterns');
    await expect(bookTitle).toBeVisible();

    const elements = page.locator('[style*="width: 100px"]');
    const text = await elements.nth(3).textContent();
    console.log(`Title: ${text}`);
    const text1 = await elements.nth(4).textContent();
    console.log(`Author: ${text1}`);
    const text2 = await elements.nth(5).textContent();
    console.log(`Publisher: ${text2}`);
    const fileContent = `Title: ${text}\nAuthor: ${text1}\nPublisher: ${text2}\n`;
    fs.writeFileSync('auto.txt', fileContent);
    await page.locator('#submit').click();
    console.log('Book details saved to auto.txt');

});
