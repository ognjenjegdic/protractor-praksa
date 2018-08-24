let SpecReporter = require('jasmine-spec-reporter').SpecReporter;

exports.config = {

    //seleniumAddress: 'http://localhost:4444/wd/hub',

    directConnect: true,

    baseUrl: 'http://demo.prestashop.com/en/?view=front',

    specs: ['./tests/loginWithProperAccount.js',
            //'./tests/loginInvalidEmail.spec.js'
    ],

    jasmineNodeOpts: {
            print: function() {},
    },

    onPrepare: function () {
        browser.ignoreSynchronization = true;

        browser.driver.manage().window().maximize();

        jasmine.getEnv().addReporter(new SpecReporter({
            spec: {
                displayStacktrace: true
            }
        }));
    }
};