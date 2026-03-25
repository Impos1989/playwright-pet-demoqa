import { Page, test, expect } from "@playwright/test";
import { MainPage } from "../../pages/MainPage";
import { ElementsPage } from "../../pages/ElementsPage";

export class ElementsSteps {
  private readonly mainPage: MainPage;
  private readonly elementsPage: ElementsPage;

  constructor(page: Page) {
    this.mainPage = new MainPage(page);
    this.elementsPage = new ElementsPage(page);
  }

  async navigateToTextBox(): Promise<void> {
    await test.step("Открыть главную и перейти в Elements", async () => {
      await this.mainPage.open();
      await this.mainPage.elementsCategoryCard.click();
    });

    await test.step('Выбрать "Text Box" в боковом меню', async () => {
      await this.elementsPage.textBoxMenuOption.click();
      await expect(this.elementsPage.fullNameInput).toBeVisible();
    });
  }

  async fillFullName(name: string): Promise<void> {
    await test.step(`Ввести полное имя: ${name}`, async () => {
      await this.elementsPage.fullNameInput.fill(name);
    });
  }

  async fillEmail(email: string): Promise<void> {
    await test.step(`Ввести email: ${email}`, async () => {
      await this.elementsPage.emailInput.fill(email);
    });
  }

  async submitForm(): Promise<void> {
    await test.step("Нажать кнопку Submit", async () => {
      await this.elementsPage.submitButton.click();
    });
  }
}
