# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Installing Playwright browsers

Install the configured Chromium and Firefox browsers (run once per machine or
after upgrading Playwright):

```powershell
npm run playwright:install
```

The install script enables Node.js system certificate trust for Windows
environments that inspect HTTPS traffic. If your organization requires a custom
certificate, install it in the Windows certificate store or set
`NODE_EXTRA_CA_CERTS` to a readable PEM file.

## Playwright end-to-end tests

The Playwright configuration starts the Create React App development server
automatically at `http://127.0.0.1:3000`, runs tests in Chromium and Firefox, and
writes an HTML report to `playwright-report/`.

Run all tests:

```powershell
npm run test:e2e
```

Run a specific test file or test by name:

```powershell
npx playwright test tests/home.spec.ts
npx playwright test -g "homepage displays the React application"
```

Run tests in headed mode, UI mode, or debug mode:

```powershell
npm run test:e2e:headed
npm run test:e2e:ui
npm run test:e2e:debug
```

Run against a specific browser:

```powershell
npm run test:e2e:chromium
npm run test:e2e:firefox
```

Run with two, four, or one worker (one worker runs tests sequentially):

```powershell
npm run test:e2e:workers:2
npm run test:e2e:workers:4
npm run test:e2e:workers:1
```

View the most recent HTML report after a test run:

```powershell
npm run test:e2e:report
```

### Generate tests with Codegen

Start the app in one terminal, then launch Codegen in another:

```powershell
npm start
npm run test:e2e:codegen
```

Use the opened browser to interact with the app. Codegen records actions and
generates Playwright test code in the Inspector.

### GitHub Actions

The workflow in `.github/workflows/playwright.yml` checks out the repository,
sets up Node.js, installs npm dependencies and the Playwright browsers, builds
the React app, runs the tests (which start the app automatically), and uploads
the HTML report as a workflow artifact.

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
