Feature: Cambiar informacion personal

@user1 @web
Scenario: Como primer usuario quiero actualizar el nombre del usuario
  Given I navigate to page "http://localhost:2368/ghost/#/signin"
  And I wait for 5 seconds
  When I enter email "<USERNAME1>"
  And I wait for 2 seconds
  And I enter password "<PASSWORD1>"
  And I wait for 2 seconds
  And I click next
  And I wait for 5 seconds
  And I click iconoPersonal
  And I wait for 5 seconds
  And I click your profile
  And I wait for 5 seconds
  And I enter name actualizado "<NAME>"
  And I wait for 2 seconds
  And I click save
  And I wait for 2 seconds


@user2 @web
Scenario: Como primer usuario quiero actualizar el nombre y correo del usuario
  Given I navigate to page "http://localhost:2368/ghost/#/signin"
  And I wait for 5 seconds
  When I enter email "<USERNAME1>"
  And I wait for 2 seconds
  And I enter password "<PASSWORD1>"
  And I wait for 2 seconds
  And I click next
  And I wait for 5 seconds
  And I click iconoPersonal
  And I wait for 5 seconds
  And I click your profile
  And I wait for 5 seconds
  And I enter name actualizado "<NAME>"
  And I wait for 2 seconds
  And I enter new correo "<USERNAME1UPDATE>"
  And I wait for 2 seconds
  And I click save
  And I wait for 2 seconds


@user3 @web
Scenario: Como primer usuario quiero actualizar el nombre, correo y slug del usuario
  Given I navigate to page "http://localhost:2368/ghost/#/signin"
  And I wait for 5 seconds
  When I enter email "<USERNAME1>"
  And I wait for 2 seconds
  And I enter password "<PASSWORD1>"
  And I wait for 2 seconds
  And I click next
  And I wait for 5 seconds
  And I click iconoPersonal
  And I wait for 5 seconds
  And I click your profile
  And I wait for 5 seconds
  And I enter name actualizado "<NAME>"
  And I wait for 2 seconds
  And I enter new correo "<USERNAME1UPDATE>"
  And I wait for 2 seconds
  And I enter new slug "<slug>"
  And I wait for 2 seconds
  And I click save
  And I wait for 2 seconds




@user4 @web
Scenario: Como primer usuario quiero actualizar el nombre, correo y slug del usuario con valores vacios
  Given I navigate to page "http://localhost:2368/ghost/#/signin"
  And I wait for 5 seconds
  When I enter email "<USERNAME1>"
  And I wait for 2 seconds
  And I enter password "<PASSWORD1>"
  And I wait for 2 seconds
  And I click next
  And I wait for 5 seconds
  And I click iconoPersonal
  And I wait for 5 seconds
  And I click your profile
  And I wait for 5 seconds
  And I enter name actualizado " "
  And I wait for 2 seconds
  And I enter new correo " "
  And I wait for 2 seconds
  And I enter new slug " "
  And I wait for 2 seconds
  And I click save
  And I wait for 2 seconds






  