import homePage from '../pages/homePage'
import githubPage from '../pages/githubPage'

fixture`Quality Shepherd`
  .beforeEach(async t => { // beforeAll hack
    await homePage.goto()
  })

test('should display n posts per page', async t => {
  await t.expect(homePage.posts.count).eql(7)
})

// switching windows is coming... testcafe currently opens new windows in _self
// https://github.com/DevExpress/testcafe/issues/912
test('should open social media link in new window', async t => {
  await t
    .click(homePage.githubLink)
    .expect(githubPage.username.visible).ok()
})

test('should find an older post by paging', async t => {
  const postTitle = 'Protractor - How To Page Object'
  await homePage.findPostByPaging(postTitle)

  await t.expect(await homePage.postTitleExists(postTitle)).ok()
})
