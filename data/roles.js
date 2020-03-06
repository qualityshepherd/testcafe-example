import { Role } from "testcafe";
import loginPage from "../pages/loginPage";

const loginPageUrl = `${loginPage.baseUrl}${loginPage.url}`;

/**
 * Testcafe uses `Roles` to define user roles for logins that are triggered only _once_ per test file.
 * Thus they can be used in a `beforeEach` and they will only perform the login one time for all tests.
 *
 * Honestly, Roles kinda suck. I _really_ wish they'd build a proper beforeAll/afterAll hook and let us
 * write our own. I can see this being a deal-breaker for many...
 *
 * https://devexpress.github.io/testcafe/documentation/test-api/authentication/user-roles.html
 *
 * To use in your test file...
 *
 * import { test } from '../data/roles';
 * ...
 * .beforeEach(async t => {
 *      await t.useRole(test);
 */

export const validUser = Role(
  loginPageUrl,
  async () => {
    await loginPage.login("test", 'test');
  },
  { preserveUrl: true }
);

export const invalidUser = Role(
  loginPageUrl,
  async () => {
    await loginPage.login("invalid", 'user');
  },
  { preserveUrl: true }
);