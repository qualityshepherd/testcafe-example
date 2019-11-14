[![Codeship Status for qualityshepherd/testcafe-example](https://app.codeship.com/projects/833a4d80-7100-0137-f6e1-16b3e657657a/status?branch=master)](https://app.codeship.com/projects/348317).


## Testcafe Example
Example e2e tests (some of which are slightly silly) written in [Testcafe](https://github.com/DevExpress/testcafe), that:
- use a page object pattern (now with 100% _less class_)
- are written in Javascript es6
- use async/await
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
