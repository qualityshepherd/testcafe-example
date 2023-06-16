
## Testcafe Example
Example e2e tests (some of which are slightly silly) written in [Testcafe](https://github.com/DevExpress/testcafe), that:
- use a page object pattern (now with 100% _less class_)
- are es6y
- use async/await
- run in parallel
- run on multiple browsers
- run headlessly
- run tests on [BrowserStack](https://browserstack.com)

## Setup
1. clone `clone git@github.com:qualityshepherd/testcafe-example.git`
2. install `npm i`

## Run
* run `npm test` to watch in browser, or
* `npm run all` to run parallel, headless, on Chrome and Firefox or
* `npm run browserstack` to run tests in the cloud (requires an account and env keys to be set)
* `npm run` to see more options

## Feedback
Testcafe is really good; I used it for years but it has two issues that ultimately became deal-breakers for me:
1. no `beforeAll` which sucks on it's own but also means you have to use `Roles`... which _really_ sucks.
2. they shard/thread tests at the _test level_ instead of the _file level_.

---

![Test Run Gif](https://qualityshepherd.com/screencasts/testrun.gif)
