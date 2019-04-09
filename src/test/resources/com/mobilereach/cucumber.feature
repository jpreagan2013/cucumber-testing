Feature: LoginTests

@tester
Scenario Outline: I am trying to login to app

Given I am at the Login Screen
When I type 192.168.0.52
Then I press log in

Given I am at the "<page>" Screen
Then I press "<button>"

Examples:
 |page | button |
 |login| login  |
 |home | logout |