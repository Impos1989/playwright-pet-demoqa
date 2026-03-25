import { test as base, expect } from "@playwright/test";
import { ElementsSteps } from "../steps/ElementsSteps";


type MyFixtures = {
  elementsSteps: ElementsSteps;
};

// Расширяем базовый тест
export const test = base.extend<MyFixtures>({
  elementsSteps: async ({ page }, use) => {
    // Создаем экземпляр степов и передаем его в тест
    const elementsSteps = new ElementsSteps(page);
    await use(elementsSteps);
  },
});

export { expect };
