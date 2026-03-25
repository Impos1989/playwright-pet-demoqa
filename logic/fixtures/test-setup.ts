import { test as base, expect } from "@playwright/test";
import { ElementsSteps } from "../steps/ElementsSteps";
import { TextBoxSteps } from "../steps/TextBoxSteps";
import { CheckBoxSteps } from "../steps/CheckBoxSteps";

type MyFixtures = {
  elementsSteps: ElementsSteps;
  textBoxSteps: TextBoxSteps;
  checkBoxSteps: CheckBoxSteps;
};

export const test = base.extend<MyFixtures>({
  elementsSteps: async ({ page }, use) => {
    await use(new ElementsSteps(page));
  },
  textBoxSteps: async ({ page }, use) => {
    await use(new TextBoxSteps(page));
  },
  checkBoxSteps: async ({ page }, use) => {
    await use(new CheckBoxSteps(page));
  },
});

export { expect };
