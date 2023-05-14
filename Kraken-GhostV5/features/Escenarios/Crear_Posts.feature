Feature: Crear posts

@user1 @web
Scenario: Crear post con campos vacios
  Given I navigate to page "http://localhost:2368/ghost/#/signin"
  And I wait for 5 seconds
  When I enter email "<USERNAME1>"
  And I wait for 2 seconds
  And I enter password "<PASSWORD1>"
  And I wait for 2 seconds
  And I click next
  And I wait for 5 seconds
  Given I navigate to page "http://localhost:2368/ghost/#/posts"
  And I wait for 5 seconds
  And I click posts
  And I wait for 5 seconds
  When I enter post title " "
  And I wait for 2 seconds
  And I click write post
  And I wait for 3 seconds
  When I enter body " "
  And I wait for 2 seconds
  And I click publish
  And I wait for 5 seconds

@user2 @web
Scenario: Crear post solo con titulo
  Given I navigate to page "http://localhost:2368/ghost/#/signin"
  And I wait for 5 seconds
  When I enter email "<USERNAME1>"
  And I wait for 2 seconds
  And I enter password "<PASSWORD1>"
  And I wait for 2 seconds
  And I click next
  And I wait for 5 seconds
  Given I navigate to page "http://localhost:2368/ghost/#/posts"
  And I wait for 5 seconds
  And I click posts
  And I wait for 5 seconds
  When I enter post title "<POSTTITLE>"
  And I wait for 2 seconds
  And I click write post
  And I wait for 3 seconds
  And I click publish
  And I wait for 5 seconds

@user3 @web
Scenario: Crear post solo con body
  Given I navigate to page "http://localhost:2368/ghost/#/signin"
  And I wait for 5 seconds
  When I enter email "<USERNAME1>"
  And I wait for 2 seconds
  And I enter password "<PASSWORD1>"
  And I wait for 2 seconds
  And I click next
  And I wait for 5 seconds
  Given I navigate to page "http://localhost:2368/ghost/#/posts"
  And I wait for 5 seconds
  And I click posts
  And I wait for 5 seconds
  And I click write post
  And I wait for 3 seconds
  When I enter body "<BODYTITLE>"
  And I wait for 2 seconds
  And I click publish
  And I wait for 5 seconds

@user4 @web
Scenario: Crear post con titulo y body
  Given I navigate to page "http://localhost:2368/ghost/#/signin"
  And I wait for 5 seconds
  When I enter email "<USERNAME1>"
  And I wait for 2 seconds
  And I enter password "<PASSWORD1>"
  And I wait for 2 seconds
  And I click next
  And I wait for 5 seconds
  Given I navigate to page "http://localhost:2368/ghost/#/posts"
  And I wait for 5 seconds
  And I click posts
  And I wait for 5 seconds
  When I enter post title "<POSTTITLE>"
  And I wait for 2 seconds
  And I click write post
  And I wait for 3 seconds
  When I enter body "<BODYTITLE>"
  And I wait for 2 seconds
  And I click publish
  And I wait for 5 seconds
