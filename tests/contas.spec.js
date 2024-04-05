// @ts-check
const { test, expect } = require('@playwright/test');

test('Realizar o login e criar uma conta', async ({ page }) => {
  await page.goto('https://seubarriga.wcaquino.me/login');
  await expect(page).toHaveTitle(/Seu Barriga - Log in/);

  const emailInput = await page.getByPlaceholder('Email').fill('fulano@qa.com');
  const senhaInput = await page.getByPlaceholder('Password').fill('teste');
  const loginButton = await page.getByRole('button', { name: 'Entrar' }).click();

  await page.goto('https://seubarriga.wcaquino.me/addConta');
  await expect(page).toHaveTitle(/Seu Barriga - Adicionar Conta/);
  const contaInput = await page.locator('input[id="nome"]').fill('Conta de Teste 4');
  const contaButton = await page.locator('button[type="submit"]').click();
});