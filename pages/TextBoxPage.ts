import { Page } from "@playwright/test";
import { BasePage } from "./BasePage";

export class TextBoxPage extends BasePage {
  readonly fullNameInput = this.page.getByPlaceholder("Full Name");
  readonly emailInput = this.page.getByPlaceholder("name@example.com");
  readonly submitButton = this.page.getByRole("button", { name: "Submit" });
  readonly outputName = this.page.locator("#name");

  constructor(page: Page) {
    super(page);
  }
}
