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
    await test.step("Открыть главную и перейти в раздел Text Box", async () => {
      await this.mainPage.open();
      await this.mainPage.elementsCategoryCard.click();
      await this.elementsPage.textBoxMenuOption.click();
    });
  }
}
