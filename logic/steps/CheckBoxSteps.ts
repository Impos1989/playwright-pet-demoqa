import { Page, test } from "@playwright/test";
import { CheckBoxPage } from "../../pages/CheckBoxPage";

export class CheckBoxSteps {
  private readonly checkBoxPage: CheckBoxPage;

  constructor(page: Page) {
    this.checkBoxPage = new CheckBoxPage(page);
  }

  async expandAllFolders(): Promise<void> {
    await test.step("Развернуть все папки дерева", async () => {
      await this.checkBoxPage.expandAllButton.click();
    });
  }

  async checkHome(): Promise<void> {
    await test.step('Выбрать чекбокс "Home"', async () => {
      await this.checkBoxPage.homeCheckBox.click();
    });
  }
}
