let signInPage = require('../pages/signIn-page');

describe('Login with proper account', function() {
    let signIn = new signInPage();

    it('Should check title on signIn page', function () {
        browser.get(browser.baseUrl);
        browser.switchTo().frame(0);
        browser.sleep(2000);
        signIn.signIn.click();
        browser.sleep(1000);
        expect(signIn.signInTitle.getText()).toBe('Log in to your account');
    });

    it('should not login with invalid mail', function () {
        signIn.signInEmail.sendKeys('testest@test');
        signIn.signInPassword.sendKeys('testing');
        signIn.submitLogin.click();
        browser.sleep(1000);
        expect(signIn.signIn.getText()).toContain('Sign in');
        //expect(signIn.emailErrorMessage.getText()).toBe('Invalid format.');
    });
});