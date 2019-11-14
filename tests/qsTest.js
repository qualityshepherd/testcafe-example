import homePage from '../pages/homePage';
import githubPage from '../pages/githubPage';

// someday Testcafe will have a `beforeAll`
fixture `Quality Shepherd blog`.beforeEach(async (t) => {
  await homePage.goto();
});

test('should display 5 posts per page', async t => {
  await t.expect(homePage.posts.count).eql(5);
});

test('should return search results', async t =>  {
  await homePage.search.forText('testcafe')

  await t
    .expect(homePage.search.resultsPage.exists).ok()
    .expect(homePage.posts.count).gt(0);
});

test('unfound search term should return no results', async t =>  {
  await homePage.search.forText('sfdslkjsfkjslkdf');

  await t.expect(homePage.search.noResultsMsg.with({ visibilityCheck: true })).ok();
});

// switching windows is coming... testcafe currently opens new windows in _self
// https://github.com/DevExpress/testcafe/issues/912
test('should open social media link in new window', async t =>  {
  await t
    .click(homePage.githubLink)
    .expect(githubPage.username.visible).ok();
});

test('sidebar should have a set width', async t =>  {
  await t.expect(homePage.sidebar.clientWidth).eql(280);
});

test('should find an older post by paging', async t =>  {
  const postTitle = 'Protractor: How To Page Object';
  await homePage.findPostByPaging(postTitle);

  await t.expect(await homePage.postTitleExists(postTitle)).ok();
});