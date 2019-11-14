import { Selector as $, t } from 'testcafe';

/**
 * search exists on multiple pages so we make it a module
 * that we can then require on multiple pages
 */
const searchModule = {
    box:          $('input#s'),
    searchBtn:    $('#searchbtn'),
    resultsPage:  $('body.search'),
    noResultsMsg: $('h2').withText('No posts found. Please try a different search.'),

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
export default searchModule