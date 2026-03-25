import { Page } from "@playwright/test";
import { BasePage } from "./BasePage";

export class CheckBoxPage extends BasePage {
  readonly expandAllButton = this.page.getByRole("button", {
    name: "Expand all",
  });

  readonly homeCheckBox = this.page.getByRole("checkbox", {
    name: "Select Home",
  });

  readonly resultText = this.page.locator("#result");

  constructor(page: Page) {
    super(page);
  }
}
