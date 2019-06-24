[![Codeship Status for qualityshepherd/testcafe-example](https://app.codeship.com/projects/833a4d80-7100-0137-f6e1-16b3e657657a/status?branch=master)](https://app.codeship.com/projects/348317). [![BrowserStack Status](https://www.browserstack.com/automate/badge.svg?badge_key=YXhPNlJhUHl6U2NuMGxIN3pNNmxCUT09LS10K3FXaHdoTlFPanJBam5lVkdaYzhRPT0=--a9135a7dae970aebc64df6be02dbd5a871761883)](https://www.browserstack.com/automate/public-build/)


## Testcafe Example
Example e2e tests (some of which are slightly silly) written in [Testcafe](https://github.com/DevExpress/testcafe), that:
- use a page object pattern
- run in parallel
- run on multiple browsers
- run headlessly
- run api tests
- run tests on [BrowserStack](https://browserstack.com)

## Setup
1. clone `clone git@github.com:qualityshepherd/testcafe-example.git`
2. install `npm i`

## Run
* run `npm test` to watch in browser, or
* `npm run all` to run parallel, headless, on Chrome and Firefox or
* `npm run browserstack` to run tests in the cloud (requires an account and env keys to be set)
* `npm run` to see more options

---

![Test Run Gif](https://qualityshepherd.com/screencasts/testrun.gif)

---
[![Browserstack Logo](https://qualityshepherd.com/browserstack_logo.png)](https://browserstack.com)