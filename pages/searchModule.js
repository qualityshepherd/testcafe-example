import { Selector as $, t } from 'testcafe';
import basePage from './basePage';

/**
 * search can exist on multiple pages so we make it a module
 * that we can then require on multiple pages
 */
const searchModule = {
  box:          $('#search'),
  results: $('.post-title'),
  noResultsMsg: $('#no-results'),

  /**
   * Search blog posts
   * @param  {string}
   */
  async forText(text) {
    await t
      .typeText(this.box, text)
      .pressKey('enter');
  }
}
export default {...basePage, ...searchModule}