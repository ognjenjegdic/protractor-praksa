let signInPage = function () {

    this.signIn = element.all(by.css('div[class="user-info"] a')).first();
    this.signInTitle = element(by.css('header[class="page-header"] h1'));
    this.signInEmail = element(by.css('form[id="login-form"] input[name="email"]'));
    this.signInPassword = element(by.css('form[id="login-form"] input[name="password"]'));
    this.submitLogin = element(by.css('button[id="submit-login"]'));
    this.usersName = element.all(by.css('div[class="user-info"] a')).get(1);
    this.emailErrorMessage = element(by.css('div[class="help-block"] ul li'));
};
module.exports = signInPage;