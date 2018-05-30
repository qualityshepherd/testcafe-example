import { Selector as $, t } from 'testcafe';
import BasePage from './basePage';
import search from './searchModule';

class QsHomePage extends BasePage {
    constructor() {
        super();
        // include modules...
        this.search             = search;

        this.posts              = $('div.post');
        this.postTitleLinks     = $('h2 a');
        this.siteTitle          = $('h1 a');
        // sidebar...
        this.sidebar            = $('div#sidebar');
        // social media links....
        this.githubLink         = $('a#githubLink');
        // pagination
        this.prevPageLink       = $('a').withText('← Older Entries');

        this.url = 'http://qualityshepherd.com';
    }

    /**
     * check if a post title exists
     * @param  {string} postTitle
     * @return {bool}
     */
    postTitleExists(postTitle) {
        return element(by.cssContainingText('a', postTitle)).isPresent();
    }

    /**
     * Page back till we find the post title
     * or run out of previous posts
     * @param  {string} postTitle
     * @return {bool}
     */
    findPostByPaging(postTitle) {
        return this.postTitleExists(postTitle).then(found => {
            if(found) {
                // found it!
                return true;
            } else {
                // prevPageLink not displayed on first page
                this.prevPageLink.isPresent().then(yup => {
                    if(yup) {
                        this.prevPageLink.click();
                        this.findPostByPaging(postTitle); // call recursively till found...
                        // wait for page to load...
                        this.loaded();
                    } else {
                        // post not found
                        return false;
                    }
                });
            }
        });
    }
}
export default new QsHomePage();


// export default class Page {
//     constructor () {
//         this.loginInput    = $('#login');
//         this.passwordInput = $('#password');
//         this.signInButton  = $('#sign-in-button');
//     }
//     async login (t) {
//         await t
//             .typeText(this.loginInput, 'MyLogin')
//             .typeText(this.passwordInput, 'Pa$word')
//             .click(this.signInButton);
//     }
// }