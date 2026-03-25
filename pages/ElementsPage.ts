import { Page } from "@playwright/test";
import { BasePage } from "./BasePage";

export class ElementsPage extends BasePage {
  readonly textBoxMenuOption = this.page
    .locator(".left-pannel .menu-list li")
    .filter({ hasText: "Text Box" });
  readonly checkBoxMenuOption = this.page
    .locator(".left-pannel .menu-list li")
    .filter({ hasText: "Check Box" });

  constructor(page: Page) {
    super(page);
  }
}
