import { Selector as $, t } from 'testcafe';
import BasePage from './basePage';
import search from './searchModule';

class QsHomePage extends BasePage {
  constructor() {
    super();
    this.url                = `${this.baseUrl}/`;

    // include modules...
    this.search             = search;

    this.posts              = $('div.post');
    this.postTitleLinks     = $('h2 a');
    this.siteTitle          = $('h1 a');
    this.sidebar            = $('div#sidebar');
    this.githubLink         = $('a#githubLink');
    this.prevPageLink       = $('a').withText('← Older Entries');
  }

  /**
   * test if post title exists
   * @param  {string} postTitle
   * @return {bool}
   */
  async postTitleExists(postTitle) {
    return await $('a').withText(postTitle).exists;
  }

  /**
   * Page back till we find the post title or run out of posts
   * @param  {string} postTitle
   * @return {bool}
   */
  async findPostByPaging(postTitle) {
    if(await this.postTitleExists(postTitle)) {
        return true;
    } else if(await this.prevPageLink.exists) {
        await t.click(this.prevPageLink);
        await this.findPostByPaging(postTitle); // call recursively till found...
    } else {
        // post not found
        return false;
    }
  }
}
export default new QsHomePage();