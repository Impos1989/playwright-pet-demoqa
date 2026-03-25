import { Page, test } from "@playwright/test";
import { TextBoxPage } from "../../pages/TextBoxPage";

export class TextBoxSteps {
  private readonly textBoxPage: TextBoxPage;

  constructor(page: Page) {
    this.textBoxPage = new TextBoxPage(page);
  }

  async fillFullName(name: string): Promise<void> {
    await test.step(`Ввести полное имя: ${name}`, async () => {
      await this.textBoxPage.fullNameInput.fill(name);
    });
  }

  async fillEmail(email: string): Promise<void> {
    await test.step(`Ввести email: ${email}`, async () => {
      await this.textBoxPage.emailInput.fill(email);
    });
  }

  async submitForm(): Promise<void> {
    await test.step("Нажать кнопку Submit", async () => {
      await this.textBoxPage.submitButton.click();
    });
  }
}
