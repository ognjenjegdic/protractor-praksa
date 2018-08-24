let signInPage = require('../pages/signIn-page');

describe('Login with proper account', function() {
    let signIn = new signInPage();

    it('Should check title on signIn page', function() {
        browser.manage().deleteAllCookies();
        browser.get(browser.baseUrl);
        browser.switchTo().frame(0);
        browser.sleep(2000);
        signIn.signIn.click();
        browser.sleep(2000);
        signIn.signInTitle.getText().then(function (text) {
            console.log(text);
        });
        expect(signIn.signInTitle.getText()).toBe('Log in to your account');
    });
    
    it('Should Login with proper credencials', function () {
        signIn.signInEmail.sendKeys('ognjen@mailinator.com');
        signIn.signInPassword.sendKeys('testing');
        signIn.submitLogin.click();
        browser.sleep(1000);
        expect(signIn.signIn.getText()).toContain('Sign out');
    });

    it('Should check users name', function() {
        expect(signIn.usersName.getText()).toBe('test test');
    });

    it('Should check if user is on Your Account page', function () {
        expect(signIn.signInTitle.getText()).toBe('Your account');
    });


});

