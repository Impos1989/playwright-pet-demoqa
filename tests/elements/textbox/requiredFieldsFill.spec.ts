import { test, expect } from "../../../logic/fixtures/test-setup";
import { EXPECTED_USER } from "../../../utils/test-data";

test("Краткое заполнение формы (только обязательные поля) @Smoke", async ({
  elementsSteps,
  textBoxSteps,
}) => {
  await elementsSteps.navigateToTextBox();

  await textBoxSteps.fillFullName(EXPECTED_USER.fullName);
  await textBoxSteps.fillEmail(EXPECTED_USER.email);
  await textBoxSteps.submitForm();

  const page = textBoxSteps["textBoxPage"];
  await expect(page.outputName).toContainText(EXPECTED_USER.fullName);
  await expect(page.outputEmail).toContainText(EXPECTED_USER.email);
});
