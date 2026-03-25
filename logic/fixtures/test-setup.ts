import { test as base } from "@playwright/test";
import { ElementsSteps } from "../steps/ElementsSteps"; // Мы его создадим следующим шагом

// Объявляем типы наших степов
type MySteps = {
  elementsSteps: ElementsSteps;
};

export const test = base.extend<MySteps>({
  // Инициализируем степы. Playwright сам прокинет 'page' внутрь.
  elementsSteps: async ({ page }, use) => {
    await use(new ElementsSteps(page));
  },
});

export { expect } from "@playwright/test";
