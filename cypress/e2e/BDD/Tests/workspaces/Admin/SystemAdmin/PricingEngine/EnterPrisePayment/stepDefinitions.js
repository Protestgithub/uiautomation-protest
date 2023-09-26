/// <reference types="Cypress" />
/// <reference types = "Cypress-iframe"/>

//----------------Imports---------------------------------------------------------------------
import { And, Then, When } from "@badeball/cypress-cucumber-preprocessor";
import 'cypress-iframe';
import homePage from '../../../../../../../../support/pageObjects/homePage';
import PricingEnginePage from '../../../../../../../../support/pageObjects/PricingEngine/PricingEnginePage';
import "../../../../../../../../support/Utils/generic";

//----------------Object Declaration----------------------------------------------------------

const welcomePage = new homePage()
const pricingEnginePage = new PricingEnginePage()
var fileis = 'cypress/fixtures/userData/Aservice.json'
var filename = 'cypress/fixtures/userData/Bank&Walletdata.json'

//----------------BDD Hooks-----------------------------------------------------------------

var name
function getRandomName() {
  name = "";
  var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
  for (var i = 0; i < 5; i++)
    name += possible.charAt(Math.floor(Math.random() * possible.length));
  return name;
}

//---------------------------------------------------------------------------------------------

And('Click on the Enterprise Payment Service Policy', function () {
  cy.intercept('/shulka/referenceData*').as('PricingEngine')
  pricingEnginePage.getEnterprisePayment().click({ force: true })
  cy.wait('@PricingEngine')
})

And('Click on EnterPrise Payment to add service charge.', function () {
  var number = "0.5"
  var numberone = "0.8"
  pricingEnginePage.getAddNewRuleBtn().click()
  var nameone = getRandomName()
  pricingEnginePage.getRuleName().type(nameone, { force: true })
  cy.readFile(fileis).then((data) => {
    data.EnterprisePaymentRule = nameone
    cy.writeFile(fileis, data)
  })
  pricingEnginePage.getDatePickerStart().dblclick({ force: true })
  cy.waitUntil(() => {
    return cy.iframe().find('div.xdsoft_datepicker.active').eq(0).should('be.visible', { force: true })
  })
  pricingEnginePage.getCalanderStart().should('be.visible', { force: true })
  pricingEnginePage.getCurrentDateSelect().click({ force: true })
  pricingEnginePage.getDatePickerEnd().dblclick({ force: true })
  cy.waitUntil(() => {
    return cy.iframe().find('div.xdsoft_datepicker.active').eq(1).should('be.visible', { force: true })
  })
  Cypress._.times(4, () => {
    pricingEnginePage.getnextmonth().click()
  })
  pricingEnginePage.getCurrentDateSelect().click({ force: true })
  pricingEnginePage.getWhoPays().select(this.data05.WhoPays, { force: true })
  pricingEnginePage.getSVAType().select(this.data05.SenderSVAtype, { force: true })
  pricingEnginePage.getWhomeToPay().select(this.data05.WhomeToPay, { force: true })
  pricingEnginePage.getChargeStatmentPricing().click({ force: true })
  pricingEnginePage.getPricingPercntage().type(number)
  pricingEnginePage.getPricingFixedAmt().type(numberone)
  pricingEnginePage.getSaveDraftBtn().trigger('mouseover').click({ force: true })
  pricingEnginePage.getSubmitPolicy().click({ force: true })
  pricingEnginePage.getSubmitBtn().click({ force: true })
})

Then('Aprove the created service charge for Enteprise Payment rule', function () {
  if(Cypress.env('PricingEngineApproval').includes("Yes")){
  cy.intercept('/shulka/referenceData*').as('PricingEngine')
  pricingEnginePage.getApproval().click()
  cy.wait('@PricingEngine')
  pricingEnginePage.getServiceRule().contains('Service Charge Policy').click()
  pricingEnginePage.getApprovalCashIn().contains('Enterprise Payment').click()
  
  cy.readFile(fileis).then((data) => {
    var ruleName = data.EnterprisePaymentRule
    pricingEnginePage.getApprovalRuleName().contains(ruleName).click()
  })
  pricingEnginePage.getApprovalBtn().click()
  pricingEnginePage.getApprovalBtn().eq(0).click()
  pricingEnginePage.getdiscountRule().click()
  pricingEnginePage.getApprovalBtn().click()
  pricingEnginePage.gettaxationRule().click()
  pricingEnginePage.getApprovalBtn().click()
  pricingEnginePage.getApprovalSubmitBtn().click()  
  pricingEnginePage.getApprovalConfirmBtn().click()
  pricingEnginePage.getApprovalsuccessText().should('contain.text', 'Approved changes successfully')
  }
  else{
    cy.log("Approved")
  }
})
