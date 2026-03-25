import { Page } from "@playwright/test";
import { BasePage } from "./BasePage";

export class TextBoxPage extends BasePage {
  readonly fullNameInput = this.page.getByPlaceholder("Full Name");
  readonly emailInput = this.page.getByPlaceholder("name@example.com");
  readonly currentAddressInput = this.page.getByPlaceholder("Current Address");
  readonly permanentAddressInput = this.page.locator("#permanentAddress"); // Тут плейсхолдера нет, используем ID

  readonly submitButton = this.page.getByRole("button", { name: "Submit" });

  readonly outputName = this.page.locator("#output #name");
  readonly outputEmail = this.page.locator("#output #email");
  readonly outputCurrentAddress = this.page.locator("#output #currentAddress");
  readonly outputPermanentAddress = this.page.locator(
    "#output #permanentAddress",
  );

  constructor(page: Page) {
    super(page);
  }
}
