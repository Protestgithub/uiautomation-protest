/// <reference types="Cypress" />
/// <reference types = "Cypress-iframe"/>

//----------------Imports---------------------------------------------------------------------
import { Before, When } from "@badeball/cypress-cucumber-preprocessor";
import 'cypress-iframe';
import homePage from '../../../../../../../../support/pageObjects/homePage';
import NewSubscriberCommission from '../../../../../../../../support/pageObjects/ServiceCharge/NewSubscriberCommission';
import "../../../../../../../../support/Utils/BusinessUserCommands";
import "../../../../../../../../support/Utils/generic";
import "../../../../../../../../support/Utils/subscriberCommands";
//----------------Object Declaration-----------------------------------------------------------------

const newSubCommission = new NewSubscriberCommission()

var name
function getRandomName() {
  name = "SubComRule";
  var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
  for (var i = 0; i < 5; i++)
    name += possible.charAt(Math.floor(Math.random() * possible.length));
  return name;
}

//----------------Object Declaration-----------------------------------------------------------------

const welcomePage = new homePage()




//-----------------------------------------------------------------------------------------------
//-----------------------------------------------------------------------------------------
When('Navigate to Service Charge>>New Subscriber Commission Rule', function () {
  welcomePage.getServiceCharge().click({ force: true })
  cy.intercept(this.data20.NewSubscriberComm).as('getnewsubscibercomm')
  welcomePage.getNewSubscriberCommissionRule().click({ force: true })
  cy.wait('@getnewsubscibercomm', { timeout: 30000 })
  cy.wait(2000)
  newSubCommission.getSubscriberCommissionRuleName().type(getRandomName())
  newSubCommission.getCount().type("1")
  newSubCommission.getValidity().type("10")
  newSubCommission.getCheckAll().click({ force: true })
  newSubCommission.getSaveButton().click({ force: true })
})