var commonfunc = require('../core/ActionDriver.js');
var courses = "//h5";
browser.waitForVisible(courses);
var verifyTitle = function(){
    commonfunc.compareText(courses, "Courses");
}
module.exports = {verifyTitle};