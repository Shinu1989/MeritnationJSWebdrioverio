var commonfunc = require('../core/ActionDriver.js');
     var username = "//input[contains(@id,'username_login')]";
     var password = "//input[contains(@id,'password_login')]";
    var loginBtn = "//button[contains(@id,'loginBtn_1')]";
 
  var loginUserPage =function(inputUsername, inputPassword){
      commonfunc.type(username,inputUsername)
    // browser.setValue(username,"sunaina@test.com");
    commonfunc.type(password,inputPassword)
     //browser.setValue(password,"12345678");
     commonfunc.click(loginBtn);

   } ;


module.exports={loginUserPage};



