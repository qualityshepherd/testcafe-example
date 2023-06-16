import homePage from '../pages/homePage'

fixture`Quality Shepherd`
  .beforeEach(async t => { // beforeAll hack
    await homePage.goto()
  })

test('should display n posts per page', async t => {
  await t.expect(homePage.posts.count).eql(7)
})

test('should find an older post by paging', async t => {
  const postTitle = 'Protractor - How To Page Object'
  await homePage.findPostByPaging(postTitle)

  await t.expect(await homePage.postTitleExists(postTitle)).ok()
})
