import qsHomePage from '../pages/qsHomePage';
import githubPage from '../pages/githubPage';

// someday Testcafe will have a `beforeAll`
fixture `Quality Shepherd blog`.beforeEach(async (t) => {
  await qsHomePage.goto();
});

  test('should display 5 posts per page', async t => {
    await t.expect(qsHomePage.posts.count).eql(5);
  });

  test('should return search results', async t =>  {
    await qsHomePage.search.forText('testcafe')

    await t
      .expect(qsHomePage.search.resultsPage.exists).ok()
      .expect(qsHomePage.posts.count).gt(0);
  });

  test('unfound search term should return no results', async t =>  {
    await qsHomePage.search.forText('sfdslkjsfkjslkdf');

    await t.expect(qsHomePage.search.noResultsMsg.with({ visibilityCheck: true })).ok();
  });

  // switching windows is coming... testcafe currently opens new windows in _self
  // https://github.com/DevExpress/testcafe/issues/912
  test('should open social media link in new window', async t =>  {
    await t
      .click(qsHomePage.githubLink)
      .expect(githubPage.isLoaded).ok();
  });

  test('sidebar should have a set width', async t =>  {
    await t.expect(qsHomePage.sidebar.clientWidth).eql(280);
  });

  test('should find an older post by paging', async t =>  {
    const postTitle = 'Protractor: How To Page Object';
    await qsHomePage.findPostByPaging(postTitle);

    await t.expect(await qsHomePage.postTitleExists(postTitle)).ok();
  });