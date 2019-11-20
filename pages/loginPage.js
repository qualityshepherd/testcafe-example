import { Selector as $, t } from 'testcafe';
import basePage from './basePage';

const loginPage = {
  url:            'login/',
  usernameInput:  $('#username'),
  passwordInput:  $('#password'),
  loginBtn:       $('#login'),
  errorMsg:       $('#errorMessage'),

  async login(username, password) {
    await t
      .typeText(this.usernameInput, username)
      .typeText(this.passwordInput, password)
      .click(this.loginBtn);
  }
}
export default {...basePage, ...loginPage}