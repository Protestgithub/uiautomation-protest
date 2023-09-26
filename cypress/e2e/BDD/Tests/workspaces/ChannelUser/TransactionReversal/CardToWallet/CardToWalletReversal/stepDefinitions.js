/// <reference types="Cypress" />
/// <reference types = "Cypress-iframe"/>

//----------------Imports---------------------------------------------------------------------
import 'cypress-iframe'
import { Given, When, Then, And, Before } from "@badeball/cypress-cucumber-preprocessor";
import "../../../../../../../../support/Utils/generic";
import loginPage from '../../../../../../../../support/pageObjects/loginPage';
import manageUsers from '../../../../../../../../support/pageObjects/UserManagement/manageUsers';
import homePage from '../../../../../../../../support/pageObjects/homePage';
import "../../../../../../../../support/Utils/subscriberCommands";
import "../../../../../../../../support/Utils/AdministratorCommands";
import "../../../../../../../../support/Utils/BusinessUserCommands";
import W2BandB2W from '../../../../../../../../support/pageObjects/W2BandB2W/W2BandB2W';
import myActivity from '../../../../../../../../support/pageObjects/MyActivity/myActivity';
import approvals from '../../../../../../../../support/pageObjects/UserManagement/approvals';
import DownloadAmb from '../../../../../../../../support/pageObjects/AmbiguousTransaction/DownloadAmb';
import BulkSettlement from '../../../../../../../../support/pageObjects/AmbiguousTransaction/BulkSettlement';
import PricingEnginePage from '../../../../../../../../support/pageObjects/PricingEngine/PricingEnginePage';

//----------------Object Declaration-----------------------------------------------------------------
const pageLogin = new loginPage()
const manageUsersPage = new manageUsers()
const welcomePage = new homePage()
const W2B = new W2BandB2W()
const myActivityPage = new myActivity()
const approvalPage = new approvals()
const DownloadAmbpage = new DownloadAmb()
const BulkSettlementpage = new BulkSettlement()
const pricingEnginePage = new PricingEnginePage()


const BulkFulfillmentReversal ='cypress/fixtures/templates/BULK_FULFILLMENT_REVERSAL_AMBIGUOUS_SETTLEMENT-template.csv'
const BulkFulfillmentReversaljson = 'cypress/fixtures/BulkData/BULK_FULFILLMENT_REVERSAL_AMBIGUOUS_SETTLEMENT-template.json'
const W2BBulkFulfillmentReversal = 'templates/BULK_FULFILLMENT_REVERSAL_AMBIGUOUS_SETTLEMENT-template.csv'

const BulkPaymentReversal ='cypress/fixtures/templates/BULK_PAYMENT_REVERSAL_AMBIGUOUS_SETTLEMENT-template.csv'
const BulkPaymentReversaljson = 'cypress/fixtures/BulkData/BULK_PAYMENT_REVERSAL_AMBIGUOUS_SETTLEMENT-template.json'
const W2BBulkPaymentReversal = 'templates/BULK_PAYMENT_REVERSAL_AMBIGUOUS_SETTLEMENT-template.csv'


let filename = 'cypress/fixtures/userData/CardToWallet.json'

function getRandomNumber() {
  name = "";
  var possible = "3";
  for (var i = 0; i < 1; i++)
    name += possible.charAt(Math.floor(Math.random() * possible.length));
  return name;
}

//--------------------------------------------------------------------------
And('Enter Amount and Select Card and Click on Proceed',function(){
  cy.readFile(filename).then((data)=>{
    let Amount =getRandomNumber()
    data.TransferAmount = Amount
  W2B.getB2WAmount().type(Amount)
  cy.writeFile(filename,data)
})
cy.wait(2000)
  W2B.getInstrumentType().eq(1).click()
  W2B.getCard().click()
  W2B.getB2WProceed().click()
})

Then('Enter C2W Pin and verify',function(){
  W2B.getTrasactionPin().type('1357')
  cy.intercept('/consumerportalui/mobiquitypay/v1/order/card_to_wallet').as('getC2W')
  cy.intercept('/consumerportalui/mobiquitypay/serviceRequest/resume/any').as('getResume')
  W2B.getVerify().click()
  cy.getC2WApproval()
  W2B.getSuccessMessage().contains('Payment successful')
})
And('Get C2W TransactionId',function(){
  W2B.getViewHistory().click()
  W2B.geB2WTransaction().click()
  W2B.getB2WTransactionId().then((data)=>{
    cy.readFile(filename).then((user)=>{
      let Id = data.text().split(' ')
      let ID = Id[3]
      user.C2WId = ID 
      cy.writeFile(filename,user)
      })
    })
})

And('Search C2W transaction using TransactionId1',function(){
  cy.readFile(filename).then((user)=>{
    let Id = user.C2WId
    manageUsersPage.getSearchTransactionId().type(Id+'{enter}', { force: true }).click({ force: true })
  })
  cy.wait(3000)
})

And('Convet C2W PaymentReversal csv to json, Update data and convert json to csv',function(){
  cy.CSVToJSON(BulkPaymentReversal,BulkPaymentReversaljson)

  cy.readFile(BulkPaymentReversaljson).then((data)=>{
    cy.readFile(filename).then((user)=>{  
      let orderId = user.C2WOrderId
    data["Order Id*"] = orderId
    })
    data["Internal Reference Id*"] = "123456",
    data["Status(true/false)*"] = "TRUE",
    data["Phase*"] = "PAYMENT_REVERSAL",
    data["Payment ReferenceId"] = "",
    data["Fulfillment ReferenceId"] = "",
    data["Payment Reversal ReferenceId*"] = "12345",
    data["Fulfilment Reversal ReferenceId"] = "",
    data["Bank TransactionId"] = ""
    cy.writeFile(BulkPaymentReversaljson, data)

  })
  cy.JSONToCSV(BulkPaymentReversaljson,BulkPaymentReversal)
})


//------------------------------------------------------------------------
And('Click on Card To Wallet',function(){
  cy.intercept('/shulka/referenceData*').as('PricingEngine')
  pricingEnginePage.getCardToWallet().click()
  cy.wait('@PricingEngine', {timeout:40000})
  cy.wait(2000)
})
And('Enter all the details and add commission', function () {

  var number = "0.5"
  var numberone = "0.8"
  pricingEnginePage.getCurrency().select(this.data05.Currency)
  pricingEnginePage.getCurrencyChangeButton().click()
  cy.wait(3000)
  cy.wait('@PricingEngine', {timeout:40000})
  pricingEnginePage.getAddNewRuleBtn().click()
  pricingEnginePage.getRuleName().type("Default Charge", { force: true })
  pricingEnginePage.getDatePickerStart().dblclick({ force: true })
  
  pricingEnginePage.getCalanderStart().should('be.visible', { force: true })
  pricingEnginePage.getCurrentDateSelect().click({ force: true })
  pricingEnginePage.getDatePickerEnd().dblclick({ force: true })
  pricingEnginePage.getMonthNamerStart().contains(this.data05.month).click({ force: true })//(this.data05.month,{force: true}).click() 
  pricingEnginePage.getYearNameStart().contains(this.data05.year).click({ force: true })
  
  pricingEnginePage.getCalanderDaysStart().filter(':visible').contains(this.data05.day).click({ force: true })
  pricingEnginePage.getSenderRoleCom().select('Operator', { force: true })
  pricingEnginePage.getSenderHierarchyCom().select('Operator', { force: true })
  
  pricingEnginePage.getSenderGradeCom1().click({ force: true })
  
  pricingEnginePage.getSenderGradeCom2().click({ force: true })
  
  pricingEnginePage.getGradebtnclick().click({ force: true })

  pricingEnginePage.getWhoPays().select(this.data05.WhoPaysCom, { force: true })
  pricingEnginePage.getSVAType().select(this.data05.SenderSVAtypeCom, { force: true })
  pricingEnginePage.getWhomeToPay().select(this.data05.WhomeToPayCom, { force: true })
  pricingEnginePage.getChargeStatmentPricing().click({ force: true })
  pricingEnginePage.getPricingPercntage().type(number)
  pricingEnginePage.getPricingFixedAmt().type(numberone)
  pricingEnginePage.getSaveDraftBtn().trigger('mouseover').click({ force: true })
  
  pricingEnginePage.getSubmitPolicy().dblclick({ force: true })
  cy.wait(2000)
  //cy.intercept('/shulka/serviceChargePolicy').as('getSubmit') //commented intercept on 17/07/23
  pricingEnginePage.getSubmitBtn().click({ force: true })
  //cy.wait('@getSubmit', { timeout: 30000 })
  // pricingEnginePage.getCommissionHeader().should('contain', this.data05.comsuccess)
})

And('Enter all details and add service charge', function () {
  cy.wait(5000)
  var number = "0.5"
  var numberone = "0.8"
  pricingEnginePage.getCurrency().select(this.data05.Currency)
  pricingEnginePage.getCurrencyChangeButton().click()
  cy.wait(3000)
  cy.wait('@PricingEngine', {timeout:40000})
  pricingEnginePage.getAddNewRuleBtn().click()
  pricingEnginePage.getRuleName().type("Default Charge", { force: true })
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
  pricingEnginePage.getWhoPays().select('Sender', { force: true })
  pricingEnginePage.getSVAType().select("Normal", { force: true })
  pricingEnginePage.getWhomeToPay().select(this.data05.WhomeToPay, { force: true })
  pricingEnginePage.getChargeStatmentPricing().click({ force: true })
  pricingEnginePage.getPricingPercntage().type(number)
  pricingEnginePage.getPricingFixedAmt().type(numberone)
  pricingEnginePage.getSaveDraftBtn().trigger('mouseover').click({ force: true })
  cy.wait(1000)
  //cy.intercept(this.data20.SubmitPolicy).as('getSubmitPolicy')
  pricingEnginePage.getSubmitPolicy().click({ force: true })
  cy.wait(1000)
  //cy.wait('@getSubmitPolicy', { timeout: 30000 })
  //cy.intercept(this.data20.SubmitBtn).as('getSubmit')
  cy.intercept('/shulka/serviceChargePolicy').as('getSubmit')
  pricingEnginePage.getSubmitBtn().click({ force: true })
  cy.wait('@getSubmit', { timeout: 30000 })

  //cy.wait('@getSubmit', { timeout: 30000 })
  // pricingEnginePage.getServiceHeader().contains(this.data05.textmsg)
})

Then('Aprove the created Card to wallet service charge', function () {
  cy.wait(2000)
if(Cypress.env('PricingEngineApproval').includes("Yes")){
cy.intercept('/shulka/referenceData*').as('PricingEngine')
pricingEnginePage.getApproval().click()
cy.wait('@PricingEngine', {timeout:40000})
pricingEnginePage.getServiceRule().contains('Service Charge Policy').click()
pricingEnginePage.getApprovalCashIn().contains('Card To Wallet Service').click()
pricingEnginePage.getApprovalRuleName().contains("Default Charge").click()
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

Then('Aprove the created card to wallet Commission rule', function () {
  cy.wait(2000)
if(Cypress.env('PricingEngineApproval').includes("Yes")){
cy.intercept('/shulka/referenceData*').as('PricingEngine')
pricingEnginePage.getApproval().click()
cy.wait('@PricingEngine', {timeout:40000})
pricingEnginePage.getCommissionRule().contains('Commission Policy').click()
pricingEnginePage.getApprovalCashIn().contains('Card to wallet').click()
pricingEnginePage.getApprovalRuleName().contains("Default Charge").click()
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
And('Check if the rule exist and delete the rule',function() {
  pricingEnginePage.getCurrency().select(this.data05.Currency)
  pricingEnginePage.getCurrencyChangeButton().click()
  cy.wait(3000)
  cy.wait('@PricingEngine', {timeout:40000})
  cy.get('iframe').then(($frame) => {
    const content = $frame.contents();
    if (content.find('i#remove-charge-rule-0').length>0) {
      pricingEnginePage.getDeleteIcon().click()
      cy.iframe().find('.footer-confirm-button').eq(2).click({force:true})
      pricingEnginePage.getSaveDraftBtn().trigger('mouseover').click({ force: true })
      pricingEnginePage.getSubmitPolicy().click({ force: true })
      cy.wait(2000)
     //cy.intercept('/shulka/serviceChargePolicy').as('getSubmit')
      pricingEnginePage.getSubmitBtn().click({ force: true })
      cy.wait('@PricingEngine', {timeout:40000})
        } else {
      cy.log('No rule to delete')
 }
  })
})
