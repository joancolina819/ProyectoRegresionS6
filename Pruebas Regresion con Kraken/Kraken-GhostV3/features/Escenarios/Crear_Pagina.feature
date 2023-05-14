Feature: Crear un Pagina


@user1 @web
Scenario: Como primer usuario inicio sesion y crear un post con solo titulo
  Given I navigate to page "http://localhost:3001/ghost/#/signin"
  And I wait for 5 seconds
  When I enter email "<USERNAME1>"
  And I wait for 2 seconds
  And I enter password "<PASSWORD1>"
  And I wait for 2 seconds
  And I click next
  And I wait for 5 seconds
  And I click pages
  And I wait for 5 seconds
  And I click newPage
  And I wait for 5 seconds
  And I enter title page "<pageTest1>"
  And I wait for 2 seconds
  And I click open options
  And I wait for 2 seconds
  And I open publish
  And I wait for 2 seconds
  And I click publish
  And I wait for 5 seconds
  And I click pages

@user2 @web
Scenario: Como primer usuario inicio sesion y crear un post con solo titulo
  Given I navigate to page "http://localhost:3001/ghost/#/signin"
  And I wait for 5 seconds
  When I enter email "<USERNAME1>"
  And I wait for 2 seconds
  And I enter password "<PASSWORD1>"
  And I wait for 2 seconds
  And I click next
  And I wait for 5 seconds
  And I click pages
  And I wait for 5 seconds
  And I click newPage
  And I wait for 5 seconds
  And I enter body page "<pageTest1>"
  And I wait for 2 seconds
  And I click on title
  And I wait for 2 seconds
  And I open publish
  And I wait for 2 seconds
  And I click publish
  And I wait for 5 seconds
  And I click pages




@user3 @web
Scenario: Como primer usuario inicio sesion y crear un post con solo titulo
  Given I navigate to page "http://localhost:3001/ghost/#/signin"
  And I wait for 5 seconds
  When I enter email "<USERNAME1>"
  And I wait for 2 seconds
  And I enter password "<PASSWORD1>"
  And I wait for 2 seconds
  And I click next
  And I wait for 5 seconds
  And I click pages
  And I wait for 5 seconds
  And I click newPage
  And I wait for 5 seconds
  And I enter title page "<pageTest1>"
  And I wait for 2 seconds
  And I enter body page "<pageTest1>"
  And I wait for 2 seconds
  And I open publish
  And I wait for 2 seconds
  And I click publish
  And I wait for 5 seconds
  And I click pages



@user4 @web
Scenario: Como primer usuario inicio sesion y crear un post con solo titulo
  Given I navigate to page "http://localhost:3001/ghost/#/signin"
  And I wait for 5 seconds
  When I enter email "<USERNAME1>"
  And I wait for 2 seconds
  And I enter password "<PASSWORD1>"
  And I wait for 2 seconds
  And I click next
  And I wait for 5 seconds
  And I click pages
  And I wait for 5 seconds
  And I click newPage
  And I wait for 5 seconds
  And I enter title page "<pageTest1>"
  And I wait for 2 seconds
  And I enter body page "<pageTest1>"
  And I wait for 2 seconds
  And I click open options
  And I enter url "<pageTest1>"
  And I click close options
  And I wait for 2 seconds
  And I open publish
  And I wait for 2 seconds
  And I click publish
  And I wait for 5 seconds
  And I click pages