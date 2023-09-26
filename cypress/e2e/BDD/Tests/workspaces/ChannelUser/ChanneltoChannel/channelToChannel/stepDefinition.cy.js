/// <reference types="Cypress" />
/// <reference types = "Cypress-iframe"/>

//----------------Imports---------------------------------------------------------------------

import 'cypress-iframe'
import { Given, When, Then, And,Before} from "@badeball/cypress-cucumber-preprocessor";
import homePage from '../../../../../../../support/pageObjects/homePage';
import "../../../../../../../support/Utils/generic";
import PricingEnginePage from '../../../../../../../support/pageObjects/PricingEngine/PricingEnginePage';
import manageUsers from '../../../../../../../support/pageObjects/UserManagement/manageUsers';
import { readConfigFile } from 'typescript';

//----------------Object Declaration----------------------------------------------------------

const welcomePage = new homePage()
const pricingEnginePage = new PricingEnginePage()
const manageUsersPage = new manageUsers()
var fileis = 'cypress/fixtures/userData/Aservice.json'
var name
function getRandomName() {
  name = "";
  var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
  for (var i = 0; i < 5; i++)
    name += possible.charAt(Math.floor(Math.random() * possible.length));
  return name;
}

//--------------------------------------------------------------------------------------------------------

// When('Click on Pricing Engine', function () {
//     welcomePage.getPricingEngineLink().click({ force: true })
//     cy.wait(2000)
//   })

// And('Click on the Service Policy', function () {
//     cy.wait(6000)
//     pricingEnginePage.getCashIN().click({ force: true })
//     cy.wait(4000)
// })

//-----------------------------------------------------------------------------------------------


And('Delete service policy', function(){
  cy.wait(2000)
  pricingEnginePage.getDeleteCashin().click({ force: true })
  pricingEnginePage.getYes().click()
  pricingEnginePage.getSaveDraftBtn().trigger('mouseover').click({ force: true })
  cy.wait(2000)
  pricingEnginePage.getSubmitPolicy().click({force:true})
  cy.wait(2000)
  cy.intercept('/shulka/serviceChargePolicy').as('getSubmit')
  pricingEnginePage.getSubmitBtn().click({ force: true })
  cy.wait('@getSubmit', { timeout: 30000 })
  // pricingEnginePage.getServiceHeader().should('have.text', this.data05.textmsg)
})
And('Click on the C2C Service Policy', function () {
  cy.intercept('/shulka/referenceData*').as('PricingEngine')
  pricingEnginePage.getC2C().click({ force: true })
  cy.wait('@PricingEngine', {timeout:30000})
})
And('Click on any service to modify service charge.', function () {
  const uuid = () => Cypress._.random(1e2)
  var number = "3" + uuid()
  const uuidone = () => Cypress._.random(1e3)

  var numberone="8" + uuidone()
  cy.wait(1000)
   pricingEnginePage.getViewRule().click()
   cy.wait(1000)
   pricingEnginePage.getClickOnRuleName().click()
   cy.wait(2000)
  var nameone="Clone"
  
  pricingEnginePage.getRuleName().type(nameone, { force: true })
  cy.wait(1000)
cy.writeFile(fileis,{ServiceRuleName:nameone})



  // cy.wait(5000)
  // pricingEnginePage.getMinCharge().type(number)
  // pricingEnginePage.getMaxCharge().type(numberone)
  // pricingEnginePage.getDatePickerStart().dblclick({ force: true })
  // cy.wait(2000)
  // pricingEnginePage.getCalanderStart().should('be.visible', { force: true })
  // pricingEnginePage.getCurrentDateSelect().click({ force: true })
  // pricingEnginePage.getDatePickerEnd().dblclick({ force: true })
  // cy.wait(2000)
  // Cypress._.times(4, () => {
  //   pricingEnginePage.getnextmonth().click()})
  //   pricingEnginePage.getCurrentDateSelect().click({ force: true })
  // pricingEnginePage.getWhoPays().select(this.data05.WhoPays, { force: true })
  // pricingEnginePage.getSVAType().select(this.data05.SenderSVAtype, { force: true })
  // pricingEnginePage.getWhomeToPay().select(this.data05.WhomeToPay, { force: true })
  // pricingEnginePage.getChargeStatmentPricing().click({ force: true })
  // pricingEnginePage.getPricingPercntage().type(number)
  // pricingEnginePage.getPricingFixedAmt().type(numberone)

   pricingEnginePage.getSaveDraftBtn().trigger('mouseover').click({ force: true })
   cy.wait(2000)
  pricingEnginePage.getSubmitPolicy().click({force:true})
   cy.wait(2000)
  cy.intercept('/shulka/serviceChargePolicy').as('getSubmit')
  pricingEnginePage.getSubmitBtn().click({ force: true })
  cy.wait('@getSubmit', { timeout: 30000 })
  //pricingEnginePage.getServiceHeader().should('have.text', this.data05.textmsg)
})


And('Click on the TransactionTax for C2C', function(){
cy.intercept('/shulka/referenceData*').as('PricingEngine')
  pricingEnginePage.getTransactionTax().click()
  cy.wait('@PricingEngine', {timeout:30000})
  cy.wait(2000)
 pricingEnginePage.getC2C().click()
  cy.wait(5000)
})


Then ('Verify amount Credited to the user for C2C transaction',function()
{
  cy.readFile('cypress/fixtures/userData/C2CTransactionData1.json').then((data) => {
   TID= data.C2cTransactionID 
   cy.wait(2000)
  manageUsersPage.getCreditedAmount().eq(1).contains(TID)
   cy.wait(1000)
  manageUsersPage. getCreditedAmount().eq(5).contains('Success')
 
  })
})