$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("classpath:com/mobilereach/cucumber.feature");
formatter.feature({
  "name": "LoginTests",
  "description": "",
  "keyword": "Feature"
});
formatter.scenario({
  "name": "I am trying to login to app",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@tester"
    }
  ]
});
formatter.step({
  "name": "I am at the Login Screen",
  "keyword": "Given "
});
formatter.match({
  "location": "AppTest.loginPage()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I type 192.168.0.52",
  "keyword": "When "
});
formatter.match({
  "location": "AppTest.type(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I press log in",
  "keyword": "Then "
});
formatter.match({
  "location": "AppTest.pressLogIn()"
});
formatter.result({
  "status": "passed"
});
});