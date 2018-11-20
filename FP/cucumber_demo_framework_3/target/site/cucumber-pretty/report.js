$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("dark-sky-forcast.feature");
formatter.feature({
  "line": 2,
  "name": "Forecast",
  "description": "",
  "id": "forecast",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@darkSkyregression"
    },
    {
      "line": 1,
      "name": "@web"
    }
  ]
});
formatter.before({
  "duration": 5622548229,
  "status": "passed"
});
formatter.scenario({
  "line": 5,
  "name": "Verify current temp",
  "description": "",
  "id": "forecast;verify-current-temp",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 4,
      "name": "@forecast1"
    }
  ]
});
formatter.step({
  "line": 6,
  "name": "Clear search text field",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "Enter 347 West 30th Street, New York City, NY into the search field",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "Click on search magnifying glass",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "Verify current temperature is between low and high value",
  "keyword": "Then "
});
formatter.match({
  "location": "DarkSkySD.clearSearchField()"
});
formatter.result({
  "duration": 1073862016,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "347 West 30th Street, New York City, NY",
      "offset": 6
    }
  ],
  "location": "DarkSkySD.addressOrZipcode(String)"
});
formatter.result({
  "duration": 278060742,
  "status": "passed"
});
formatter.match({
  "location": "DarkSkySD.clickOnMagGlass()"
});
formatter.result({
  "duration": 82110160,
  "status": "passed"
});
formatter.match({
  "location": "DarkSkySD.verifyTemp()"
});
formatter.result({
  "duration": 1102121280,
  "error_message": "org.openqa.selenium.StaleElementReferenceException: stale element reference: element is not attached to the page document\n  (Session info: chrome\u003d70.0.3538.102)\n  (Driver info: chromedriver\u003d2.42.591059 (a3d9684d10d61aa0c45f6723b327283be1ebaad8),platform\u003dMac OS X 10.14.0 x86_64) (WARNING: The server did not provide any stacktrace information)\nCommand duration or timeout: 0 milliseconds\nFor documentation on this error, please visit: http://seleniumhq.org/exceptions/stale_element_reference.html\nBuild info: version: \u00273.7.1\u0027, revision: \u00278a0099a\u0027, time: \u00272017-11-06T21:01:39.354Z\u0027\nSystem info: host: \u0027VictoriSheremet\u0027, ip: \u00272604:2000:1405:40d:0:0:0:237%en0\u0027, os.name: \u0027Mac OS X\u0027, os.arch: \u0027x86_64\u0027, os.version: \u002710.14\u0027, java.version: \u00271.8.0_181\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, acceptSslCerts: false, applicationCacheEnabled: false, browserConnectionEnabled: false, browserName: chrome, chrome: {chromedriverVersion: 2.42.591059 (a3d9684d10d61a..., userDataDir: /var/folders/qh/p7p79jf96dz...}, cssSelectorsEnabled: true, databaseEnabled: false, goog:chromeOptions: {debuggerAddress: localhost:52105}, handlesAlerts: true, hasTouchScreen: false, javascriptEnabled: true, locationContextEnabled: true, mobileEmulationEnabled: false, nativeEvents: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: MAC, platformName: MAC, rotatable: false, setWindowRect: true, takesHeapSnapshot: true, takesScreenshot: true, unexpectedAlertBehaviour: , unhandledPromptBehavior: , version: 70.0.3538.102, webStorageEnabled: true}\nSession ID: 69cff5468d5144632c83006cf9c3c472\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\n\tat org.openqa.selenium.remote.ErrorHandler.createThrowable(ErrorHandler.java:214)\n\tat org.openqa.selenium.remote.ErrorHandler.throwIfResponseFailed(ErrorHandler.java:166)\n\tat org.openqa.selenium.remote.http.JsonHttpResponseCodec.reconstructValue(JsonHttpResponseCodec.java:40)\n\tat org.openqa.selenium.remote.http.AbstractHttpResponseCodec.decode(AbstractHttpResponseCodec.java:80)\n\tat org.openqa.selenium.remote.http.AbstractHttpResponseCodec.decode(AbstractHttpResponseCodec.java:44)\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:164)\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:600)\n\tat org.openqa.selenium.remote.RemoteWebElement.execute(RemoteWebElement.java:279)\n\tat org.openqa.selenium.remote.RemoteWebElement.getText(RemoteWebElement.java:160)\n\tat framework.BasePage.getTextFromElement(BasePage.java:35)\n\tat framework.web_pages.DarkSkyHomePage.verifyTempValue(DarkSkyHomePage.java:32)\n\tat stepdefinition.DarkSkySD.verifyTemp(DarkSkySD.java:29)\n\tat ✽.Then Verify current temperature is between low and high value(dark-sky-forcast.feature:9)\n",
  "status": "failed"
});
formatter.after({
  "duration": 338792247,
  "status": "passed"
});
});