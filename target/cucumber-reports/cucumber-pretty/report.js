$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("Demoautomation.feature");
formatter.feature({
  "line": 2,
  "name": "Registering Demo Automation Form",
  "description": "",
  "id": "registering-demo-automation-form",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@TestCase_DemoAutomation"
    }
  ]
});
formatter.scenario({
  "line": 4,
  "name": "Navigation to Register Page",
  "description": "",
  "id": "registering-demo-automation-form;navigation-to-register-page",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 5,
  "name": "I Luanch demo URL",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "I enter the First Name as \"ABC\"",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "I enter the Last Name as \"XYZ\"",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "I enter the Address as \"#43\"",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "I enter the Email Address as \"Seetharaman.t@gmail.com\"",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "I enter the Phone as \"9976762909\"",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "Click On Submit button",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "data table should get displayed",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinition.luanch()"
});
formatter.result({
  "duration": 19832888100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "ABC",
      "offset": 27
    }
  ],
  "location": "StepDefinition.enterFname(String)"
});
formatter.result({
  "duration": 1207892300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "XYZ",
      "offset": 26
    }
  ],
  "location": "StepDefinition.enterlname(String)"
});
formatter.result({
  "duration": 242151500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "#43",
      "offset": 24
    }
  ],
  "location": "StepDefinition.enterAddress(String)"
});
formatter.result({
  "duration": 199185500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Seetharaman.t@gmail.com",
      "offset": 30
    }
  ],
  "location": "StepDefinition.enterEmail(String)"
});
formatter.result({
  "duration": 544837600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "9976762909",
      "offset": 22
    }
  ],
  "location": "StepDefinition.enterPhone(String)"
});
formatter.result({
  "duration": 218895000,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinition.clickSubmit()"
});
formatter.result({
  "duration": 115457300,
  "status": "passed"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.scenario({
  "line": 14,
  "name": "Navigation to Register Page",
  "description": "",
  "id": "registering-demo-automation-form;navigation-to-register-page",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 15,
  "name": "I Luanch demo URL",
  "keyword": "Given "
});
formatter.step({
  "line": 16,
  "name": "I enter the First Name as \"DEF\"",
  "keyword": "When "
});
formatter.step({
  "line": 17,
  "name": "I enter the Last Name as \"WXY\"",
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "I enter the Address as \"#43\"",
  "keyword": "And "
});
formatter.step({
  "line": 19,
  "name": "I enter the Email Address as \"Seetharaman.t@gmail.com\"",
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "I enter the Phone as \"9976762909\"",
  "keyword": "And "
});
formatter.step({
  "line": 21,
  "name": "Click On Submit button",
  "keyword": "And "
});
formatter.step({
  "line": 22,
  "name": "data table should get displayed",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinition.luanch()"
});
formatter.result({
  "duration": 13133209300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "DEF",
      "offset": 27
    }
  ],
  "location": "StepDefinition.enterFname(String)"
});
formatter.result({
  "duration": 239019300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "WXY",
      "offset": 26
    }
  ],
  "location": "StepDefinition.enterlname(String)"
});
formatter.result({
  "duration": 115369100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "#43",
      "offset": 24
    }
  ],
  "location": "StepDefinition.enterAddress(String)"
});
formatter.result({
  "duration": 114487800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Seetharaman.t@gmail.com",
      "offset": 30
    }
  ],
  "location": "StepDefinition.enterEmail(String)"
});
formatter.result({
  "duration": 1752645200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "9976762909",
      "offset": 22
    }
  ],
  "location": "StepDefinition.enterPhone(String)"
});
formatter.result({
  "duration": 231783300,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinition.clickSubmit()"
});
formatter.result({
  "duration": 210717500,
  "status": "passed"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.scenarioOutline({
  "line": 25,
  "name": "Navigation to Register Page",
  "description": "",
  "id": "registering-demo-automation-form;navigation-to-register-page",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 24,
      "name": "@Seetharaman"
    }
  ]
});
formatter.step({
  "line": 26,
  "name": "I Luanch demo URL",
  "keyword": "Given "
});
formatter.step({
  "line": 27,
  "name": "I enter the First Name as \"\u003cFirstname\u003e\"",
  "keyword": "When "
});
formatter.step({
  "line": 28,
  "name": "I enter the Last Name as \"\u003cLastname\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 29,
  "name": "I enter the Address as \"\u003cAddress\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 30,
  "name": "I enter the Email Address as \"\u003cEmail\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 31,
  "name": "I enter the Phone as \"\u003cPhone\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 32,
  "name": "Click On Submit button",
  "keyword": "And "
});
formatter.step({
  "line": 33,
  "name": "data table should get displayed",
  "keyword": "Then "
});
formatter.examples({
  "line": 35,
  "name": "",
  "description": "",
  "id": "registering-demo-automation-form;navigation-to-register-page;",
  "rows": [
    {
      "cells": [
        "Firstname",
        "Lastname",
        "Address",
        "Email",
        "Phone"
      ],
      "line": 36,
      "id": "registering-demo-automation-form;navigation-to-register-page;;1"
    },
    {
      "cells": [
        "Seetharaman",
        "T",
        "#44",
        "seetharaman.t@gmail.com",
        "9976762909"
      ],
      "line": 37,
      "id": "registering-demo-automation-form;navigation-to-register-page;;2"
    },
    {
      "cells": [
        "Gokul",
        "S",
        "#45",
        "Gokul@gmail.com",
        "9976762900"
      ],
      "line": 38,
      "id": "registering-demo-automation-form;navigation-to-register-page;;3"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 37,
  "name": "Navigation to Register Page",
  "description": "",
  "id": "registering-demo-automation-form;navigation-to-register-page;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 24,
      "name": "@Seetharaman"
    },
    {
      "line": 1,
      "name": "@TestCase_DemoAutomation"
    }
  ]
});
formatter.step({
  "line": 26,
  "name": "I Luanch demo URL",
  "keyword": "Given "
});
formatter.step({
  "line": 27,
  "name": "I enter the First Name as \"Seetharaman\"",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 28,
  "name": "I enter the Last Name as \"T\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 29,
  "name": "I enter the Address as \"#44\"",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 30,
  "name": "I enter the Email Address as \"seetharaman.t@gmail.com\"",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 31,
  "name": "I enter the Phone as \"9976762909\"",
  "matchedColumns": [
    4
  ],
  "keyword": "And "
});
formatter.step({
  "line": 32,
  "name": "Click On Submit button",
  "keyword": "And "
});
formatter.step({
  "line": 33,
  "name": "data table should get displayed",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinition.luanch()"
});
formatter.result({
  "duration": 13450388000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Seetharaman",
      "offset": 27
    }
  ],
  "location": "StepDefinition.enterFname(String)"
});
formatter.result({
  "duration": 176592400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "T",
      "offset": 26
    }
  ],
  "location": "StepDefinition.enterlname(String)"
});
formatter.result({
  "duration": 120172200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "#44",
      "offset": 24
    }
  ],
  "location": "StepDefinition.enterAddress(String)"
});
formatter.result({
  "duration": 159849900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "seetharaman.t@gmail.com",
      "offset": 30
    }
  ],
  "location": "StepDefinition.enterEmail(String)"
});
formatter.result({
  "duration": 1259474200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "9976762909",
      "offset": 22
    }
  ],
  "location": "StepDefinition.enterPhone(String)"
});
formatter.result({
  "duration": 391608700,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinition.clickSubmit()"
});
formatter.result({
  "duration": 2105661200,
  "status": "passed"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.scenario({
  "line": 38,
  "name": "Navigation to Register Page",
  "description": "",
  "id": "registering-demo-automation-form;navigation-to-register-page;;3",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 24,
      "name": "@Seetharaman"
    },
    {
      "line": 1,
      "name": "@TestCase_DemoAutomation"
    }
  ]
});
formatter.step({
  "line": 26,
  "name": "I Luanch demo URL",
  "keyword": "Given "
});
formatter.step({
  "line": 27,
  "name": "I enter the First Name as \"Gokul\"",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 28,
  "name": "I enter the Last Name as \"S\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 29,
  "name": "I enter the Address as \"#45\"",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 30,
  "name": "I enter the Email Address as \"Gokul@gmail.com\"",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 31,
  "name": "I enter the Phone as \"9976762900\"",
  "matchedColumns": [
    4
  ],
  "keyword": "And "
});
formatter.step({
  "line": 32,
  "name": "Click On Submit button",
  "keyword": "And "
});
formatter.step({
  "line": 33,
  "name": "data table should get displayed",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinition.luanch()"
});
formatter.result({
  "duration": 13168920000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Gokul",
      "offset": 27
    }
  ],
  "location": "StepDefinition.enterFname(String)"
});
formatter.result({
  "duration": 290016400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "S",
      "offset": 26
    }
  ],
  "location": "StepDefinition.enterlname(String)"
});
formatter.result({
  "duration": 176446500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "#45",
      "offset": 24
    }
  ],
  "location": "StepDefinition.enterAddress(String)"
});
formatter.result({
  "duration": 183861800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Gokul@gmail.com",
      "offset": 30
    }
  ],
  "location": "StepDefinition.enterEmail(String)"
});
formatter.result({
  "duration": 852022600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "9976762900",
      "offset": 22
    }
  ],
  "location": "StepDefinition.enterPhone(String)"
});
formatter.result({
  "duration": 350970400,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinition.clickSubmit()"
});
formatter.result({
  "duration": 442777800,
  "status": "passed"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
});