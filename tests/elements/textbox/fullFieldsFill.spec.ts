import { test, expect } from "../../../logic/fixtures/test-setup";
import { EXPECTED_USER } from "../../../utils/test-data";

test("Полное заполнение всех полей формы @RegressBL", async ({
  elementsSteps,
  textBoxSteps,
}) => {
  await elementsSteps.navigateToTextBox();

  await textBoxSteps.fillFullName(EXPECTED_USER.fullName);
  await textBoxSteps.fillEmail(EXPECTED_USER.email);
  await textBoxSteps.fillCurrentAddress(EXPECTED_USER.currentAddress!);
  await textBoxSteps.fillPermanentAddress(EXPECTED_USER.permanentAddress!);

  await textBoxSteps.submitForm();

  const page = textBoxSteps["textBoxPage"];
  await expect(page.outputName).toContainText(EXPECTED_USER.fullName);
  await expect(page.outputEmail).toContainText(EXPECTED_USER.email);
  await expect(page.outputCurrentAddress).toContainText(
    EXPECTED_USER.currentAddress!,
  );
  await expect(page.outputPermanentAddress).toContainText(
    EXPECTED_USER.permanentAddress!,
  );
});
