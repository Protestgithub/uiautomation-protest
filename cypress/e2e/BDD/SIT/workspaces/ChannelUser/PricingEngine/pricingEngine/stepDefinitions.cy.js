/// <reference types="Cypress" />
/// <reference types = "Cypress-iframe"/>

//----------------Imports---------------------------------------------------------------------
import { And, Then, When } from "@badeball/cypress-cucumber-preprocessor";
import 'cypress-iframe';
import homePage from '../../../../../../../support/pageObjects/homePage';
import PricingEnginePage from '../../../../../../../support/pageObjects/PricingEngine/PricingEnginePage';
import "../../../../../../../support/Utils/generic";

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

//------------------------------------Pricing Engine--------------------------------------------------
And('Verify admin is able to access to pricing the calculator',function(){
  pricingEnginePage.getPricingEnginePage().should('be.visible')
})
//----------------------------------
Then('Verify by whom service charge can be pay',function(){
  pricingEnginePage.getAddNewRuleBtn().click()
  pricingEnginePage.getWhoPays().should('contain','Payment Gateway')
  pricingEnginePage.getWhoPays().should('contain','Sender')
  pricingEnginePage.getWhoPays().should('contain','Receiver')
  pricingEnginePage.getWhoPays().should('contain','Sender Owner')
  pricingEnginePage.getWhoPays().should('contain','Receiver Owner')
  pricingEnginePage.getWhoPays().should('contain','Sender Parent')
  pricingEnginePage.getWhoPays().should('contain','Receiver Parent')
  pricingEnginePage.getWhoPays().should('contain','Other')
})
//--------------------------------------------
Then('Verify To whom service charge will be paid',function(){
  pricingEnginePage.getWhomeToPay().should('contain','Service Provider')
})
//--------------------------------------------
Then('Verify the Account types list',function(){
  pricingEnginePage.getWhoPays().select(this.data05.WhoPays, { force: true })
  pricingEnginePage.getSVAType().should('contain','Bonus SVA')
  pricingEnginePage.getSVAType().should('contain','Commission')
  pricingEnginePage.getSVAType().should('contain','Credit Card')
  pricingEnginePage.getSVAType().should('contain','Normal')
  pricingEnginePage.getSVAType().should('contain','Remittance')
  pricingEnginePage.getSVAType().should('contain','Salary')
  pricingEnginePage.getSVAType().should('contain','SAVINGCLUB')

})
//------------------------------------------------
Then('Verify the Slab is based on Transaction Amount for both service charge and commission',function(){
  pricingEnginePage.getSlab().click()
  pricingEnginePage.getBasedOnTransactionAmount().should('contain','Transaction Amount')
})
And('Click on Any service',function(){
  cy.intercept('/shulka/referenceData*').as('PricingEngine')
  pricingEnginePage.getCashIN().click()
  cy.wait('@PricingEngine', {timeout:40000})
  cy.wait(2000)
  pricingEnginePage.getAddNewRuleBtn().click()
})
//------------------------------------------------------------------
Then('Verify Pricing Calculator page options',function(){
  pricingEnginePage.getSenderBankName().should('be.visible')
  pricingEnginePage.getSenderSVAType().should('be.visible')
  pricingEnginePage.getSenderRole().should('be.visible')
  pricingEnginePage.getReceiverBankName().should('be.visible')
  pricingEnginePage.getReceiverSVAType().should('be.visible')
  pricingEnginePage.getReceiverRole().should('be.visible')

  pricingEnginePage.getCurrencyType().should('be.visible')
  pricingEnginePage.getTransactionAmt().should('be.visible')
  pricingEnginePage.getTransactionDateTime().should('be.visible')
  pricingEnginePage.getBearerCode().should('be.visible')
})

//----------------------------------------------------------------
Then('Verify Payer and payee entered will be same',function(){
  pricingEnginePage.getWhoPays().select('Service Provider', { force: true })
  pricingEnginePage.getWhomeToPay().select('Service Provider', { force: true })
  pricingEnginePage.getNewChargeStatement().click()
  pricingEnginePage.getWhoPays1().select('Service Provider', { force: true })
  pricingEnginePage.getWhomeToPay1().select('Service Provider', { force: true })
})