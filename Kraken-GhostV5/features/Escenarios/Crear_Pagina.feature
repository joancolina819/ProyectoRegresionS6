Feature: Crear un Pagina

@user1 @web
Scenario: Como primer usuario inicio sesion y crear un post con solo titulo
  Given I navigate to page "http://localhost:2368/ghost/#/signin"
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
  And I click away
  And I wait for 2 seconds
  And I click away
  And I wait for 2 seconds
  And I click publish page
  And I wait for 2 seconds
  And I click continue
  And I wait for 2 seconds
  And I click confirm-continue
  Then I click close-publish
  And I wait for 5 seconds
  And I click pages


@user2 @web
Scenario: Como primer usuario inicio sesion y crear un post con solo titulo
  Given I navigate to page "http://localhost:2368/ghost/#/signin"
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
  And I click away
  And I wait for 2 seconds
  And I click away
  And I wait for 2 seconds
  And I click publish page
  And I wait for 2 seconds
  And I click continue
  And I wait for 2 seconds
  And I click confirm-continue
  Then I click close-publish
  And I wait for 5 seconds
  And I click pages


@user3 @web
Scenario: Como primer usuario inicio sesion y crear un post con solo titulo
  Given I navigate to page "http://localhost:2368/ghost/#/signin"
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
  And I click away
  And I wait for 2 seconds
  And I click away
  And I wait for 2 seconds
  And I click publish page
  And I wait for 2 seconds
  And I click continue
  And I wait for 2 seconds
  And I click confirm-continue
  Then I click close-publish
  And I wait for 5 seconds
  And I click pages


@user4 @web
Scenario: Como primer usuario inicio sesion y crear un post con solo titulo
  Given I navigate to page "http://localhost:2368/ghost/#/signin"
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
  And I click away
  And I wait for 2 seconds
  And I enter url "<pageTest1>"
  And I wait for 2 seconds
  And I click away
  And I wait for 2 seconds
  And I click publish page
  And I wait for 2 seconds
  And I click continue
  And I wait for 2 seconds
  And I click confirm-continue
  Then I click close-publish
  And I wait for 5 seconds
  And I click pages