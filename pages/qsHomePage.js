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

        this.url = 'http://qualityshepherd.com';
    }
}
export default new QsHomePage();