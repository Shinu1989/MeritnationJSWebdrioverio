var HomePage1 = require('../pages/HomePage');
var LoginPage = require('../pages/LoginPage.js');
var commands = require('../core/ActionDriver.js');
var userPage = require('../pages/UserPage');
var dataRequired = require('../data/data.json');

describe('login form', function () {
    it('should deny access with wrong creds', function () {
       // commands.navigateTo('https://meritnation.com');
        browser.url('/');
        browser.windowHandleMaximize();
       HomePage1.clickLoginLink();
   // LoginPage.loginUserPage("sunaina@test.com","12345678");
   LoginPage.loginUserPage(dataRequired.username, dataRequired.password);
    userPage.verifyTitle();

        
    });

   
});