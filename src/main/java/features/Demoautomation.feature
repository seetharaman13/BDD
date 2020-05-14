@TestCase_DemoAutomation
Feature: Registering Demo Automation Form

  Scenario: Navigation to Register Page
    Given I Luanch demo URL
    When I enter the First Name as "ABC"
    And I enter the Last Name as "XYZ"
    And I enter the Address as "#43"
    And I enter the Email Address as "Seetharaman.t@gmail.com"
    And I enter the Phone as "9976762909"
    And Click On Submit button
    Then data table should get displayed

  Scenario: Navigation to Register Page
    Given I Luanch demo URL
    When I enter the First Name as "DEF"
    And I enter the Last Name as "WXY"
    And I enter the Address as "#43"
    And I enter the Email Address as "Seetharaman.t@gmail.com"
    And I enter the Phone as "9976762909"
    And Click On Submit button
    Then data table should get displayed

@Seetharaman 
  Scenario Outline: Navigation to Register Page
    Given I Luanch demo URL
    When I enter the First Name as "<Firstname>"
    And I enter the Last Name as "<Lastname>"
    And I enter the Address as "<Address>"
    And I enter the Email Address as "<Email>"
    And I enter the Phone as "<Phone>"
    And Click On Submit button
    Then data table should get displayed

    Examples: 
      | Firstname   | Lastname | Address | Email                   | Phone      |
      | Seetharaman | T        | #44     | seetharaman.t@gmail.com | 9976762909 |
      | Gokul       | S        | #45     | Gokul@gmail.com         | 9976762900 |
