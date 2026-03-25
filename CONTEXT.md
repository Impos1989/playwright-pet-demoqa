# CONTEXT.MD (Pet Project Playwright)
- **Project:** DemoQA (Automation)
- **Architecture:** Layered POM + DI.
- **Current Status:** 
  - `ElementsSteps` исправлен: добавлен `this.page` для ассертов URL.
  - Добавлены нативные проверки `toHaveURL` в методы навигации.
  - Фикстура `checkBoxSteps` зарегистрирована в `test-setup.ts`.
- **Next Step:** Написание теста `smokeCheck.spec.ts`.
