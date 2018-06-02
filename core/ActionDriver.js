
var assert = require('assert');
var expect = require('chai').expect;

var waitForElement = function (loc) {
    browser.waitForVisible(loc);
}
var click = function (loc) {
    browser.waitForVisible(loc);
    browser.click(loc);
}
var type = function (loc, text) {
    browser.waitForVisible(loc,3000);
    browser.setValue(loc, text);
}

var navigateTo = function (text) {
    browser.url(text);
}

var getTitle = function () {
    return browser.getTitle();
}

var compareText = function (loc, text) {
    var text1 = browser.getText(loc);

    expect(text1).to.equal(text);
    //assert.equal(text1,text);

}
var isElementPresent = function (loc) {
    var element = browser.element(loc);
    element.isVisible();
}

var calculateListsize = function (loc) {
    var element = browser.elements(loc);
    console.log(element.value.length);

}

module.exports = {
    waitForElement,type, navigateTo, getTitle,
    compareText, isElementPresent, calculateListsize, click
};