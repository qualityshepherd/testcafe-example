import { Selector as $, t } from 'testcafe';
import basePage from './basePage';
import search from './searchModule';

const homePage = {
  url:               '',
  // include modules...
  search,
  posts:          $('div.post'),
  postTitleLinks: $('h2 a'),
  siteTitle:      $('h1 a'),
  sidebar:        $('div#sidebar'),
  githubLink:     $('a#githubLink'),
  prevPageLink:   $('a').withText('← Older Entries'),

  /**
   * test if post title exists
   * @param  {string} postTitle
   * @return {bool}
   */
  async postTitleExists(postTitle) {
    return await $('a').withText(postTitle).exists;
  },

  /**
   * Page back till we find the post title or run out of posts
   * @param  {string} postTitle
   * @return {bool}
   */
  async findPostByPaging(postTitle) {
    await t.click(this.prevPageLink);
    await this.postTitleExists(postTitle) ? true : await this.findPostByPaging(postTitle);
  }
}
export default {...basePage, ...homePage}