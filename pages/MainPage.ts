import { Page } from "@playwright/test";
import { BasePage } from "./BasePage";

export class MainPage extends BasePage {
  readonly elementsCategoryCard = this.page
    .locator(".card")
    .filter({ hasText: "Elements" });

  constructor(page: Page) {
    super(page);
  }
}
