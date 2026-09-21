# 🧪 End-to-End Automation Testing (Learning Purpose)

A hands-on **Playwright** end-to-end testing project built for learning and practicing modern web automation techniques. The tests cover real-world scenarios like login flows, form submissions, e-commerce order creation, child window handling, and more.

---

## 📋 Table of Contents

- [Tech Stack](#-tech-stack)
- [Prerequisites](#-prerequisites)
- [Getting Started](#-getting-started)
- [Project Structure](#-project-structure)
- [Test Suites](#-test-suites)
- [Running Tests](#-running-tests)
- [CI/CD](#-cicd)
- [Environment Variables](#-environment-variables)
- [Learning Topics Covered](#-learning-topics-covered)
- [License](#-license)

---

## 🛠 Tech Stack

| Tool | Purpose |
|---|---|
| [Playwright](https://playwright.dev/) | Browser automation & testing framework |
| [Node.js](https://nodejs.org/) | JavaScript runtime |
| [dotenv](https://www.npmjs.com/package/dotenv) | Environment variable management |
| [GitHub Actions](https://github.com/features/actions) | CI/CD pipeline |

---

## ✅ Prerequisites

- **Node.js** (LTS version recommended)
- **npm** (comes with Node.js)

---

## 🚀 Getting Started

1. **Clone the repository**
   ```bash
   git clone https://github.com/<your-username>/End-to-end-automation_testing-for-learning-purpose.git
   cd End-to-end-automation_testing-for-learning-purpose
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Install Playwright browsers**
   ```bash
   npx playwright install --with-deps
   ```

4. **Create a `.env` file** (if not already present)
   ```env
   BASE_URL=https://rahulshettyacademy.com/loginpagePractise/
   ```

5. **Run the tests**
   ```bash
   npx playwright test
   ```

---

## 📁 Project Structure

```
├── .env                        # Environment variables (not committed to git)
├── .github/
│   └── workflows/
│       └── playwright.yml      # GitHub Actions CI pipeline
├── tests/
│   ├── UIBasictest.spec.js     # UI interaction & form automation tests
│   └── clientapp.spec.js       # E-commerce order creation test
├── playwright.config.js        # Playwright configuration
├── package.json                # Project metadata & dependencies
└── README.md                   # This file
```

---

## 🧪 Test Suites

### 1. `UIBasictest.spec.js` — UI Interaction Tests

| Test | Description | Target Site |
|---|---|---|
| **UI basic test** | Login flow on Sauce Demo using browser context | [saucedemo.com](https://www.saucedemo.com/) |
| **Second UI test** | Login, dropdown selection, radio buttons, checkboxes, and form submission | [rahulshettyacademy.com](https://rahulshettyacademy.com/loginpagePractise/) |
| **Third UI test** | Complete form fill (name, email, password, gender, DOB) and shopping flow | [rahulshettyacademy.com/angularpractice](https://rahulshettyacademy.com/angularpractice/) |
| **Child Windows** | Handling child browser windows/tabs using `context.waitForEvent('page')` | [rahulshettyacademy.com](https://rahulshettyacademy.com/loginpagePractise/) |

### 2. `clientapp.spec.js` — E-Commerce Order Flow

| Test | Description | Target Site |
|---|---|---|
| **Verify order creation** | End-to-end purchase flow: login → add product to cart → checkout → select country → place order → verify confirmation | [rahulshettyacademy.com/client](https://rahulshettyacademy.com/client) |

---

## ▶️ Running Tests

```bash
# Run all tests (headless)
npx playwright test

# Run a specific test file
npx playwright test tests/clientapp.spec.js

# Run in headed mode (see the browser)
npx playwright test --headed

# Run with Playwright UI mode (interactive)
npx playwright test --ui

# Run in debug mode (step through tests)
npx playwright test --debug

# View the HTML report after a test run
npx playwright show-report
```

---

## ⚙️ CI/CD

This project includes a **GitHub Actions** workflow (`.github/workflows/playwright.yml`) that:

1. Triggers on **push** and **pull request** to `main` / `master` branches
2. Sets up Node.js (LTS) on Ubuntu
3. Installs dependencies and Playwright browsers
4. Runs all Playwright tests
5. Uploads the **HTML test report** as an artifact (retained for 30 days)

---

## 🔐 Environment Variables

| Variable | Description | Default |
|---|---|---|
| `BASE_URL` | Base URL for the login practice site | `https://rahulshettyacademy.com/loginpagePractise/` |

Environment variables are loaded via `dotenv` in `playwright.config.js`.

---

## 📚 Learning Topics Covered

This project demonstrates the following Playwright concepts:

- ✅ **Locator strategies** — `getByRole`, `getByPlaceholder`, `getByLabel`, `getByText`, `locator` (CSS & XPath)
- ✅ **Form interactions** — filling inputs, selecting dropdowns, checking/unchecking checkboxes, radio buttons
- ✅ **Assertions** — `toBeVisible`, `toBeChecked`, `toBeFalsy`
- ✅ **Navigation & waiting** — `goto`, `waitForLoadState`, `waitFor`
- ✅ **Filtering locators** — `.filter({hasText: ...})`
- ✅ **Browser contexts** — creating isolated browser sessions
- ✅ **Child window handling** — `context.waitForEvent('page')` with `Promise.all`
- ✅ **Environment variables** — using `dotenv` for configuration
- ✅ **CI/CD integration** — GitHub Actions automated test pipeline
- ✅ **HTML reporting** — built-in Playwright reporter

---

## 📄 License

This project is licensed under the **ISC License**.

---

> **Note:** This project is created purely for **learning and practice purposes**. The test credentials and target websites are from public training resources.

