var commonfunc = require('../core/ActionDriver.js');
 var loginlink = '//*[@id="main-header"]/div[1]/div[2]/div[2]/a[1]/span[1]';


     var clickLoginLink = function () {
        commonfunc.click(loginlink);
    
    }
module.exports = {clickLoginLink};