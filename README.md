# WebdriverIO Boilerplate project

## Documentation

- [WebdriverIO docs](https://webdriver.io/docs/gettingstarted)

## Commands

Install dependencies:

```bash
yarn
```

Run all tests:

```bash
yarn wdio
```

Run a specific spec (for example /specs/homepageBasic.js"):

```bash
yarn wdio --spec=/specs/homepageBasic.js
```

Run a specific suite of test (previously defined in wdio.conf.js)):

```bash
yarn wdio --suite=homepage
```

Run all tests in headless mode:

```bash
headless=yes yarn wdio
```

Run all tests in Firefox:

```bash
browser=firefox yarn wdio
```
