import { Selector as $, t } from 'testcafe';
import basePage from './basePage';

/**
 * search can exist on multiple pages so we make it a module
 * that we can then require on multiple pages
 */
const searchModule = {
  url:          '?search',
  box:          $('#search_input'),
  searchBtn:    $('[type="submit"]'),
  results: $('.search-result'),
  noResultsMsg: $('#no-results'),

  /**
   * Search blog posts
   * @param  {string}
   */
  async forText(text) {
    await t
      .typeText(this.box, text)
      .click(this.searchBtn);
  }
}
export default {...basePage, ...searchModule}