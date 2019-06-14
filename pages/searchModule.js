import { Selector as $, t } from 'testcafe';
import BasePage from './basePage';

/**
 * search exists on multiple pages so we make it a module
 * that we can then require on multiple pages
 */
class SearchModule extends BasePage {
  constructor() {
    super();
    this.box            = $('input#s');
    this.searchBtn      = $('#searchbtn');
    this.resultsPage    = $('body.search');
    this.noResultsMsg   = $('h2').withText('No posts found. Please try a different search.');
  }

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
export default new SearchModule();