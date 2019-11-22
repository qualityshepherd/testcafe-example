import loginPage from '../pages/loginPage';
import homePage from '../pages/homePage';
import { validUser, invalidUser } from '../data/roles';

fixture `Login Test`;

// uses testcafe's User Roles functionality
// https://devexpress.github.io/testcafe/documentation/test-api/authentication/user-roles.html
test('should log into QualityShepherd.com', async t => {
  await t
    .useRole(validUser)
    .expect(homePage.siteTitle.exists).ok();
});

// Roles navigates/refreshes page before we can get the error msg
// so we 'role' our own (see what I did there?)
test('invalid credentials should display error', async t => {
  await loginPage.goto();
  await loginPage.login('invalid_username', 'invalid_password');

  await t.expect(loginPage.errorMsg.visible).ok();
});