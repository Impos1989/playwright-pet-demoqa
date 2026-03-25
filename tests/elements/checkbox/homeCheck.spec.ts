import { test, expect } from "../../../logic/fixtures/test-setup";

test.describe("Elements > Check Box", () => {
  test("Выбор всех элементов через корневой чекбокс Home @Smoke", async ({
    elementsSteps,
    checkBoxSteps,
  }) => {
    await elementsSteps.navigateToCheckBox();
    await checkBoxSteps.checkHome();
    
    // DemoQA при выборе Home пишет "You have selected : home desktop notes ..."
    const result = checkBoxSteps["checkBoxPage"].resultText;
    await expect(result).toBeVisible();
    await expect(result).toContainText("home");
  });
});
