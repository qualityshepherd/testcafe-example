import homePage from '../pages/homePage'

fixture`Search`.beforeEach(async t => {
  await homePage.goto()
})

test('should return search results', async t => {
  await homePage.search.forText('testcafe')

  await t.expect(homePage.search.results.count).gt(0)
})

test('unfound search term should return no results', async t => {
  await homePage.search.forText('sfdslkjsfkjslkdf')

  await t.expect(homePage.search.noResultsMsg.visible).ok()
})
