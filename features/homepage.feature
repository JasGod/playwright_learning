Feature: Random
  A random feature using some Playwright stuff

Scenario Outline: Govuk accessibility statement link
  Given I view <url>
  When I click 'Accessibility statement'
  Then I expect to be on the accessibility page

  Examples:
    | url |
    | 'www.gov.uk' |