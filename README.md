# cypress-e2e

End-to-end test framework built with **Cypress** and **TypeScript**, testing the [SauceDemo](https://www.saucedemo.com) web application.

---

## Test Coverage
| # | Test Case | Type |
|---|-----------|------|
| 1 | Successful login with valid credentials | Positive |
| 2 | Failed login with invalid credentials | Negative |
| 3 | Locked out user sees correct error message | Negative |
| 4 | Sort products by price (low to high) | Functional |
| 5 | Add multiple items to cart and verify count | Functional |
| 6 | Complete full checkout flow | E2E Happy Path |
| 7 | Logout and verify session is cleared | Security |

## Key Implementation Details

- **Page Object Model** — all page interactions are encapsulated in page classes, keeping tests clean and maintainable
- **Custom Commands** — reusable `cy.login()` command to avoid repetition across tests
- **Fixtures** — test data (users, products) is stored separately from test logic
- **Environment Variables** — no hardcoded credentials; secrets are handled via `.env` and GitHub Secrets in CI
- **Network Interception** — `cy.intercept()` used to spy on and stub network requests where applicable

---

## Tech Stack

- **Test Framework**: Cypress
- **Language**: TypeScript
- **Design Pattern**: Page Object Model
- **Test Reporting**: Allure
- **CI/CD**: GitHub Actions

## Getting Strated

1. Clone the repository
2. Install dependencies
3. Set up enviroment variables

## Running Tests

**Run tests in Cypress UI (interactive mode)**
```bash
npm run cy:open
```

**Run all tests headlessly**
```bash
npm run cy:run
```

**Run a specific test file**
```bash
npm run cy:run -- --spec "cypress/e2e/auth/login.cy.ts"
```

**Generate and open the report**
```bash
npm run report
```

## CI/CD

Tests run automatically on every push and pull request via GitHub Actions.
CI runs automatically generate and publish the Allure report as a GitHub Actions artifact on every push.

TBD

## 💆‍♀️ Author

**Veronika Batsiashava** — [LinkedIn](https://www.linkedin.com/in/veronika-batsiashava/) · [GitHub](https://github.com/Veroniks)