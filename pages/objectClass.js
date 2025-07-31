
import { expect } from '@playwright/test';

export class hyundaiPage {
  
  constructor(page) {
    this.page = page;

    // login
    this.username_textbox = page.getByRole('textbox', { name: 'Username' });
    this.password_textbox = page.getByRole('textbox', { name: 'Password' });
    this.submit_button = page.getByRole('button', { name: 'Submit' });

    // contact form
    this._contactLink = page.getByRole('link', { name: 'Contact' });
    this._firstName = page.getByRole('textbox', { name: 'First' });
    this._lastName = page.getByRole('textbox', { name: 'Last' });
    this._email = page.getByRole('textbox', { name: 'Email *' });
    this._message = page.getByRole('textbox', { name: 'Comment or Message *' });
    this._submitButton = page.getByRole('button', { name: 'Submit' });
  }

  async gotothiswebsite() {
    await this.page.goto('https://practicetestautomation.com/practice-test-login/');
  }

  async login(username, password) {
    await expect(this.username_textbox).toBeVisible();
    await this.username_textbox.fill(username);
    await expect(this.password_textbox).toBeVisible();
    await this.password_textbox.fill(password);
    await expect(this.submit_button).toBeVisible();
    await this.submit_button.click();
  }

  async contact(first, last, email, message) {
    await this.page.goto('https://practicetestautomation.com/');

    await expect(this._contactLink).toBeVisible();
    await this._contactLink.click();

    await expect(this._firstName).toBeVisible();
    await this._firstName.fill(first);

    await expect(this._lastName).toBeVisible();
    await this._lastName.fill(last);

    await expect(this._email).toBeVisible();
    await this._email.fill(email);

    await expect(this._message).toBeVisible();
    await this._message.fill(message);

    await expect(this._submitButton).toBeVisible();
    await this._submitButton.click();
  }
}
