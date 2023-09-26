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

//------------------------------------Pricing Engine--------------------------------------------------
//-----------TC_33------------------Service Charge Calcultor-----------------------------------------
When('Click on Pricing Engine', function () {
  cy.intercept('/shulka/referenceData*').as('PricingEngine')
  welcomePage.getPricingEngineLink().click({ force: true })
  cy.wait('@PricingEngine', {timeout:40000})
})
And('Click on Pricing Caluclator', function () {
  cy.intercept('/shulka/referenceData*').as('PricingEngine')
  pricingEnginePage.getPricingCalculator().click({ force: true })
  cy.wait('@PricingEngine', {timeout:40000})
  pricingEnginePage.getCashIN().click({ force: true })
  cy.wait('@PricingEngine', {timeout:40000})
})
And('Enter the party Details', function () {
  
  cy.readFile(filename).then((data) => {
    let name = data.BankName
    cy.wait('@PricingEngine', {timeout:40000})
    pricingEnginePage.getSenderBankName().select(this.data05.SenderBankname, { force: true })
    pricingEnginePage.getSenderSVAType().select(this.data05.SenderSVAtype, { force: true })
    pricingEnginePage.getSenderRole().select(this.data05.SenderRole, { force: true })
    pricingEnginePage.getSenderHierarchy().select(this.data05.SenderHierarchy, { force: true })
    pricingEnginePage.getSenderGrade().select(this.data05.SenderGrade, { force: true })
    pricingEnginePage.getReceiverBankName().select(this.data05.ReceiverBankname, { force: true })
    pricingEnginePage.getReceiverSVAType().select(this.data05.ReceiverSVAtype, { force: true })
    pricingEnginePage.getReceiverRole().select(this.data05.ReceiverRole, { force: true })
    pricingEnginePage.getReceiverHierarchy().select(this.data05.ReceiverHierarchy, { force: true })
    pricingEnginePage.getReceiverGrade().select(this.data05.ReceiverGrade, { force: true })
  })
})
And('Enter Other Details', function () {
  pricingEnginePage.getCurrencyType().select(this.data05.Currency, { force: true })
  pricingEnginePage.getTransactionAmt().type(this.data05.TransactionAmt, { force: true })
  pricingEnginePage.getTransactionDateTime()
  pricingEnginePage.getBearerCode().select(this.data05.Bearer, { force: true })
})
Then('Calculate Service Charge', function () {
  pricingEnginePage.getCalculate().click({ force: true })
  pricingEnginePage.getassertpc().should('contain.text', this.data05.resumsg)
})

//----------------------------Arpitha Pricing EEngine TestCases------------------------------------


//-------------------------------------------TC-27 View PricingEngine Module-----------------------------------------

Then('System admin should be able to view pricing engine module on web.', function () {
  
  cy.waitUntil(() => {
    return cy.iframe().find('#main-menu-service-charge-service-selector').should('be.visible', { force: true })
  })
})

//----------------------------------------Tc-28---------------------------------------------------------

Then('User other than System admin should not able to view pricing engine module on web.', function () {
  
  welcomePage.getPricingEngineLink().should('not.exist');
})

//------------------------------------------Tc-29---------------------------------------------------
Then('User should be redirected to a new page for pricing engine.', function () {
  
  cy.waitUntil(() => {
    return cy.iframe().find('h5.page-heading').should("contain", "Service Charge Policy")
  })
})


//---------------------------------------Tc-32---------------------------------------------------------
And('Click on commission', function () {
  cy.intercept('/shulka/referenceData*').as('PricingEngine')
  pricingEnginePage.getCommissionTab().dblclick({ force: true })
  cy.wait('@PricingEngine', {timeout:40000})
})

And('Click on commission and select the service you want to add commission profile for', function () {

  var number = "0.5"
  var numberone = "0.8"
  var nameone = getRandomName()
  cy.intercept('/shulka/referenceData*').as('PricingEngine')
  pricingEnginePage.getCashIN().click()
  cy.wait('@PricingEngine', {timeout:40000})
  cy.wait(2000)
    pricingEnginePage.getCurrency().select(this.data05.Currency)
  pricingEnginePage.getCurrencyChangeButton().click()
  cy.wait('@PricingEngine', {timeout:40000})
  cy.wait(2000)
  pricingEnginePage.getAddNewRuleBtn().click()
  pricingEnginePage.getRuleName().type(nameone, { force: true })
  cy.readFile(fileis).then((data) => {
    data.CommissionRuleName = nameone
    cy.writeFile(fileis, data)
  })
  //   pricingEnginePage.getMinCharge().type(number)
  //   pricingEnginePage.getMaxCharge().type(numberone)
  pricingEnginePage.getDatePickerStart().dblclick({ force: true })
  
  pricingEnginePage.getCalanderStart().should('be.visible', { force: true })
  pricingEnginePage.getCurrentDateSelect().click({ force: true })
  pricingEnginePage.getDatePickerEnd().dblclick({ force: true })
  pricingEnginePage.getMonthNamerStart().contains(this.data05.month).click({ force: true })//(this.data05.month,{force: true}).click() 
  pricingEnginePage.getYearNameStart().contains(this.data05.year).click({ force: true })
  
  pricingEnginePage.getCalanderDaysStart().filter(':visible').contains(this.data05.day).click({ force: true })
  pricingEnginePage.getSenderRoleCom().select(this.data05.SenderRole, { force: true })
  pricingEnginePage.getSenderHierarchyCom().select(this.data05.SenderHierarchy, { force: true })
  
  pricingEnginePage.getSenderGradeCom1().click({ force: true })
  
  pricingEnginePage.getSenderGradeCom2().click({ force: true })
  
  pricingEnginePage.getGradebtnclick().click({ force: true })
  
  pricingEnginePage.getWhoPays().select(this.data05.WhoPaysCom, { force: true })
  pricingEnginePage.getSVAType().select(this.data05.SenderSVAtypeCom, { force: true })
  pricingEnginePage.getWhomeToPay().select(this.data05.WhomeToPayCom, { force: true })
  pricingEnginePage.getChargeStatmentPricing().click({ force: true })
  pricingEnginePage.getPricingPercntage().type(number)
  cy.readFile(fileis).then((data) => {
    data.CommissionRulePercentage = number
    cy.writeFile(fileis, data)

  })
  pricingEnginePage.getPricingFixedAmt().type(numberone)
  cy.readFile(fileis).then((data) => {
    data.CommissionRuleFixed = numberone
    cy.writeFile(fileis, data)

  })
  pricingEnginePage.getSaveDraftBtn().trigger('mouseover').click({ force: true })
  
  pricingEnginePage.getSubmitPolicy().dblclick({ force: true })
  cy.wait(2000)
  //cy.intercept('/shulka/serviceChargePolicy').as('getSubmit') //commented intercept on 17/07/23
  pricingEnginePage.getSubmitBtn().click({ force: true })
  //cy.wait('@getSubmit', { timeout: 30000 })
  // pricingEnginePage.getCommissionHeader().should('contain', this.data05.comsuccess)
})
And('Click on the Cash out Service Policy', function () {
  cy.intercept('/shulka/referenceData*').as('PricingEngine')
  pricingEnginePage.getCashOut().click({ force: true })
  cy.wait('@PricingEngine', {timeout:40000})
})

Then('Delete the Service Policy',function() {
  cy.wait(3000)
  cy.intercept('/shulka/referenceData*').as('PricingEngine')
  pricingEnginePage.getSearchedRule().click({ force : true})
  cy.wait(2000)
  cy.wait('@PricingEngine', {timeout:40000})
  pricingEnginePage.getPolicyview().click({force:true})
  cy.wait('@PricingEngine', {timeout:40000})
//   cy.getServiceName(fileis)
//   cy.wait('@PricingEngine', {timeout:40000})
cy.wait(1000)
  cy.iframe().find('.remove-charge-rule').eq(0).click({force:true})
  cy.wait(2000)
  cy.iframe().find('.footer-confirm-button').eq(2).click({force:true})
    cy.wait(2000)
  // cy.waitUntil(() => {
  //   return cy.iframe().find('[class="alert alert-success"]').contains('success')
  // })
  pricingEnginePage.getSaveDraftBtn().trigger('mouseover').click({ force: true })
  pricingEnginePage.getSubmitPolicy().click({ force: true })
  cy.wait(2000)
 //cy.intercept('/shulka/serviceChargePolicy').as('getSubmit')
  pricingEnginePage.getSubmitBtn().click({ force: true })
  cy.wait('@PricingEngine', {timeout:40000})
//   cy.waitUntil(() => {
//     return cy.iframe().find('[class="alert alert-success"]').contains('success')
//   })
})


And('Click on Search and Seacrh for discount rule',function() {
  cy.getRuleName(this.data005.ServiceChargeDiscountRuleName)
})


And('Click on Search and Seacrh for ServicechargeTaxation',function() {
  cy.getRuleName(this.data005.ServicechargeTaxationule)
})

And('Click on Search and Seacrh for commissionrule',function() {
  cy.getRuleName(this.data005.CommissionTaxationRule)
})

And('Click on Search and Seacrh for TransactionTax',function() {
  cy.getRuleName(this.data005.TransactionTaxRule)
})

//--------------------------------
Then('Aprove the created service charge', function () {
    cy.wait(2000)
  if(Cypress.env('PricingEngineApproval').includes("Yes")){
  cy.intercept('/shulka/referenceData*').as('PricingEngine')
  pricingEnginePage.getApproval().click()
  cy.wait('@PricingEngine', {timeout:40000})
  pricingEnginePage.getServiceRule().contains('Service Charge Policy').click()
  pricingEnginePage.getApprovalCashIn().contains('Cash In').click()
  
  cy.readFile(fileis).then((data) => {
    var ruleName = data.ServiceRuleName
    pricingEnginePage.getApprovalRuleName().contains(ruleName).click()
  })
  pricingEnginePage.getApprovalBtn().click()
  pricingEnginePage.getApprovalBtn().eq(0).click()
  pricingEnginePage.getApprovalSubmitBtn().click()
  pricingEnginePage.getApprovalConfirmBtn().click()
  pricingEnginePage.getApprovalsuccessText().should('contain.text', 'Approved changes successfully')
  }
  else{
    cy.log("Approved")
  }
})

Then('Aprove the created service charge for Commission rule', function () {
    cy.wait(2000)
  if(Cypress.env('PricingEngineApproval').includes("Yes")){
  cy.intercept('/shulka/referenceData*').as('PricingEngine')
  pricingEnginePage.getApproval().click()
  cy.wait('@PricingEngine', {timeout:40000})
  pricingEnginePage.getCommissionRule().contains('Commission Policy').click()
  pricingEnginePage.getApprovalCashIn().contains('Cash In').click()
  
  cy.readFile(fileis).then((data) => {
    var ruleName = data.CommissionRuleName
    pricingEnginePage.getApprovalRuleName().contains(ruleName).click()
  })
  pricingEnginePage.getApprovalBtn().click()
  pricingEnginePage.getApprovalBtn().eq(0).click()
  pricingEnginePage.getApprovalSubmitBtn().click()  
  pricingEnginePage.getApprovalConfirmBtn().click()
  cy.wait(2000)
  pricingEnginePage.getApprovalsuccessText().should('contain.text', 'Approved changes successfully')
  }
  else{
    cy.log("Approved")
  }
})
