import { Page } from "@playwright/test";
import { BasePage } from "./BasePage";

export class ElementsPage extends BasePage {
  // Боковое меню
  readonly textBoxMenuOption = this.page
    .locator(".left-pannel .menu-list li")
    .filter({ hasText: "Text Box" });

  // Поля формы
  readonly fullNameInput = this.page.getByPlaceholder("Full Name");
  readonly emailInput = this.page.getByPlaceholder("name@example.com");
  readonly submitButton = this.page.getByRole("button", { name: "Submit" });

  // Результат
  readonly outputName = this.page.locator("#name");

  constructor(page: Page) {
    super(page);
  }
}
