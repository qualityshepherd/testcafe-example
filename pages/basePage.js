import { t } from "testcafe";
import minimist from "minimist";

// get env from cli or use default
const args = minimist(process.argv.slice(2));
const env = args.env || "https://qualityshepherd.com";

export default class BasePage {
  constructor() {
    this.baseUrl = env;
  }

  /**
   * wrapper for navigateTo so we can use relative urls and append them to baseUrl
   * @param  {string} relativeUrl
   * @return {promise}
   */
  async goto(relativeUrl = null) {
    if (relativeUrl) {
      // navigate via relative paths
      await t.navigateTo(`${this.url}${relativeUrl}`);
    } else {
      // get url from page object
      await t.navigateTo(this.url);
    }
  }
}