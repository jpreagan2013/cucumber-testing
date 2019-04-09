$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/test/resources/com/mobilereach/cucumber.feature");
formatter.feature({
  "name": "LoginTests",
  "description": "",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "name": "I am trying to login to app",
  "description": "",
  "keyword": "Scenario Outline",
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
formatter.step({
  "name": "I type 192.168.0.52",
  "keyword": "When "
});
formatter.step({
  "name": "I press log in",
  "keyword": "Then "
});
formatter.step({
  "name": "I am at the \"\u003cpage\u003e\" Screen",
  "keyword": "Given "
});
formatter.step({
  "name": "I press \"\u003cbutton\u003e\"",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "page",
        "button"
      ]
    },
    {
      "cells": [
        "login",
        "login"
      ]
    },
    {
      "cells": [
        "home",
        "logout"
      ]
    }
  ]
});
formatter.scenario({
  "name": "I am trying to login to app",
  "description": "",
  "keyword": "Scenario Outline",
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
formatter.step({
  "name": "I am at the \"login\" Screen",
  "keyword": "Given "
});
formatter.match({
  "location": "AppTest.gotoScreen(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I press \"login\"",
  "keyword": "Then "
});
formatter.match({
  "location": "AppTest.pressButton(String)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "I am trying to login to app",
  "description": "",
  "keyword": "Scenario Outline",
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
formatter.step({
  "name": "I am at the \"home\" Screen",
  "keyword": "Given "
});
formatter.match({
  "location": "AppTest.gotoScreen(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I press \"logout\"",
  "keyword": "Then "
});
formatter.match({
  "location": "AppTest.pressButton(String)"
});
formatter.result({
  "status": "passed"
});
});