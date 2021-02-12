import { Selector as $, t } from 'testcafe'
import basePage from './basePage'
import search from './searchModule'

const homePage = {
  url: '',
  // include modules...
  search,
  posts: $('div.post'),
  siteTitle: $('h1'),
  githubLink: $('#github-social'),
  loadMoreBtn: $('#load-more'),

  /**
   * test if post title exists
   * @param  {string} postTitle
   * @return {bool}
   */
  async postTitleExists (postTitle) {
    return await $('a').withText(postTitle).exists
  },

  /**
   * Page back till we find the post title or run out of posts
   * @param  {string} postTitle
   * @return {bool}
   */
  async findPostByPaging (postTitle) {
    await t.click(this.loadMoreBtn)
    return await this.postTitleExists(postTitle) ? true : await this.findPostByPaging(postTitle)
  }
}
export default { ...basePage, ...homePage }
