import { test as base, expect } from "@playwright/test";
import { ElementsSteps } from "../steps/ElementsSteps";
import { TextBoxSteps } from "../steps/TextBoxSteps";

type MyFixtures = {
  elementsSteps: ElementsSteps;
  textBoxSteps: TextBoxSteps;
};

export const test = base.extend<MyFixtures>({
  elementsSteps: async ({ page }, use) => {
    await use(new ElementsSteps(page));
  },
  textBoxSteps: async ({ page }, use) => {
    await use(new TextBoxSteps(page));
  },
});

export { expect };
