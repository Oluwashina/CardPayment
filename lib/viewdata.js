
// Where Ip connection is kept

function ViewData() {}

// Live Server Url
// ViewData.prototype.ControllerRouteURL = "https://asteroid.astrapay.com.ng/asteroid/webapi/";
// ViewData.prototype.ControllerRouteSecureCallsURL = "https://asteroid.astrapay.com.ng/asteroid/webapi/secure/";

// Test Server url
ViewData.prototype.ControllerRouteURL = "http://192.168.1.168:8080/asteroid/webapi/";
ViewData.prototype.ControllerRouteSecureCallsURL = "http://192.168.1.168:8080/asteroid/webapi/secure/";


ViewData.prototype.storeUserDetails = function(key, value) { $.cookie(key, value) };
ViewData.prototype.getStoredUserDetail = function(key) { return $.cookie(key) };
ViewData.prototype.deleteStoredUserDetail = function(key) { $.removeCookie(key) };
ViewData.prototype.clearUserDetails = function() {
    var cookies = $.cookie();
    for (var cookie in cookies) {
        $.removeCookie(cookie);
    }
};