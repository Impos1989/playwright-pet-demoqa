# Playwright Pet Project (DemoQA)

Современный фреймворк для автоматизации DemoQA. Фокус на типизации, читаемости отчетов и стабильности.

### Стек
- **Playwright (TS)** — ядро.
- **Custom Fixtures** — Dependency Injection для степов.
- **Page Object Model** — изоляция локаторов.
- **Business Steps** — описание сценариев человеческим языком.

## Архитектура (Layered POM + DI)
- **/pages**: Только локаторы (тип `Locator`). Без логики.
- **/logic/steps**: Бизнес-логика, обернутая в `test.step`.
- **/logic/fixtures**: Внедрение зависимостей (Dependency Injection).
- **/logic/models**: TS-интерфейсы данных.
- **/utils** — спецификации тестов.
- **/tests** — хелперы и генераторы.

## Правила разработки
- **No Chaining**: Только чистый `await`.
- **Web-First Assertions**: Нативные ожидания Playwright.
- **Strict TS**: Строгая типизация.
- **Reporting**: Allure / HTML Report.
- **Modern Locators**: Приоритет `getByRole`, `getByPlaceholder`, `filter`. Минимум CSS-селекторов и ID.

### 🚦 Запуск
`npx playwright test`
`npx playwright test --grep @Smoke`