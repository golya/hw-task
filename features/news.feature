Feature: As a user I would like to read
  the hackernews

  Scenario: The user see the first news
    Given the hacker news post a new item with title "New example" with url "https://example.com/"
    Then the user see the news with title "New example" and url "https://example.com/"

  Scenario: The user can step through the news
    Given the hacker news post a new item with title "First" with url "https://example.com/"
    Given the hacker news post a new item with title "Second" with url "https://example.com/"
    Given the user see the news with title "First" and url "https://example.com/"
    When the user click to the next button
    Then the user see the news with title "Second" and url "https://example.com/"
    And the user click to the previous button
    Then the user see the news with title "First" and url "https://example.com/"