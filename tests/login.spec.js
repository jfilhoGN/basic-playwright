// @ts-check
const { test, expect } = require('@playwright/test');

test('Acessar tela inicial e fazer login', async ({ page }) => {
  await page.goto('https://seubarriga.wcaquino.me/login');
  await expect(page).toHaveTitle(/Seu Barriga - Log in/);

  const emailInput = await page.getByPlaceholder('Email').fill('fulano@qa.com');
  const senhaInput = await page.getByPlaceholder('Password').fill('teste');
  const loginButton = await page.getByRole('button', { name: 'Entrar' }).click();

});