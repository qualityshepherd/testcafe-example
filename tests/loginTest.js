import loginPage from '../pages/loginPage';
import homePage from '../pages/homePage';

fixture `Login Test`.beforeEach(async () => {
  await loginPage.goto();
})

test('should log into QualityShepherd.com', async t => {
  await loginPage.login('test', 'test');

  await t.expect(homePage.siteTitle.exists).ok();
});

test('invalid credentials should display error', async t => {
  await loginPage.login('invalid-username', 'invalid-password');

  await t.expect(loginPage.errorMsg.visible).ok();
});