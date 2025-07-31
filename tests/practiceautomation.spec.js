import { test, expect } from '@playwright/test';
import { hyundaiPage } from '../pages/objectClass';

test.beforeEach(async ({ page }) => {
  const mackoy = new hyundaiPage(page);
  await mackoy.gotothiswebsite();
  await mackoy.login('student', 'Password123'); // ✅ pass values
  // await page.goto('https://practicetestautomation.com/practice-test-login/');
  // await page.getByRole('textbox', { name: 'Username' }).click();
  // await page.getByRole('textbox', { name: 'Username' }).fill('student');
  // await page.getByRole('textbox', { name: 'Password' }).click();
  // await page.getByRole('textbox', { name: 'Password' }).fill('Password123');
  // await page.getByRole('button', { name: 'Submit' }).click();
});

test('contact', async ({ page }) => {
  const mackoy = new hyundaiPage(page);
  await mackoy.contact(
    'Melvin',
    'Paterno',
    'marklowell123@gmail.com',
    'test'
  );
  // await page.goto('https://practicetestautomation.com/'); // ✅ Add correct navigation
  // const contactLink = page.getByRole('link', { name: 'Contact' });
  // await expect(contactLink).toBeVisible();
  // await contactLink.click();
  // const firstName = page.getByRole('textbox', { name: 'First' });
  // await expect(firstName).toBeVisible();
  // await firstName.fill('Melvin');
  // const lastName = page.getByRole('textbox', { name: 'Last' });
  // await expect(lastName).toBeVisible();
  // await lastName.fill('Paterno');
  // const email = page.getByRole('textbox', { name: 'Email *' });
  // await expect(email).toBeVisible();
  // await email.fill('marklowell123@gmail.com');
  // const message = page.getByRole('textbox', { name: 'Comment or Message *' });
  // await expect(message).toBeVisible();
  // await message.fill('test');

  // // ⚠️ reCAPTCHA likely won't work in Playwright automation — skip in most test environments
  // // const frame = page.frameLocator('iframe[name="a-jtp5mcll6aff"]');
  // // await frame.getByRole('checkbox', { name: "I'm not a robot" }).click();

  // const formSubmit = page.getByRole('button', { name: 'Submit' });
  // await expect(formSubmit).toBeVisible();
  // await formSubmit.click();
  
});

