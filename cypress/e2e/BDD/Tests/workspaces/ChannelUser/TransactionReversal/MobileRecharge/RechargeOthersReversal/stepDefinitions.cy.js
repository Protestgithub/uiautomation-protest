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
import PricingEnginePage from '../../../../../../../../support/pageObjects/PricingEngine/PricingEnginePage';

//----------------Object Declaration-----------------------------------------------------------------
const pageLogin = new loginPage()
const manageUsersPage = new manageUsers()
const welcomePage = new homePage()
const W2B = new W2BandB2W()
const pricingEnginePage = new PricingEnginePage()

const uuid = () => Cypress._.random(1e1)
Amount = uuid()
let Amount
var MobileRechargedata = 'cypress/fixtures/userData/MobileRecharge.json'

const BulkFulfillmentReversal ='cypress/fixtures/templates/BULK_FULFILLMENT_REVERSAL_AMBIGUOUS_SETTLEMENT-template.csv'
const BulkFulfillmentReversaljson = 'cypress/fixtures/BulkData/BULK_FULFILLMENT_REVERSAL_AMBIGUOUS_SETTLEMENT-template.json'
const W2BBulkFulfillmentReversal = 'templates/BULK_FULFILLMENT_REVERSAL_AMBIGUOUS_SETTLEMENT-template.csv'

const BulkPaymentReversal ='cypress/fixtures/templates/BULK_PAYMENT_REVERSAL_AMBIGUOUS_SETTLEMENT-template.csv'
const BulkPaymentReversaljson = 'cypress/fixtures/BulkData/BULK_PAYMENT_REVERSAL_AMBIGUOUS_SETTLEMENT-template.json'
const W2BBulkPaymentReversal = 'templates/BULK_PAYMENT_REVERSAL_AMBIGUOUS_SETTLEMENT-template.csv'


function getRandomNumber() {
  name = "";
  var possible = "56789";
  for (var i = 0; i < 1; i++)
    name += possible.charAt(Math.floor(Math.random() * possible.length));
  return name;
}

//-----------------------------------------------------

And('Get Recharge TransactionId',function(){
    W2B.getTransactionId().then((data)=>{
      cy.readFile(MobileRechargedata).then((user)=>{
      let Id = data.text()
      user.RechargeId1 = Id
      cy.writeFile(MobileRechargedata,user)
      })
    })
    W2B.getSuccessMessage().contains('Recharge successful')
})
And('Get Recharge TransactionId for Bank Instrument',function(){
  W2B.getViewHistory().click()
  W2B.geB2WTransaction().click()
  W2B.getB2WTransactionId().then((data)=>{
    cy.readFile(MobileRechargedata).then((user)=>{
      let Id = data.text().split(' ')
      let ID = Id[3]
      user.RechargeId1 = ID 
      cy.writeFile(MobileRechargedata,user)
      })
    })
})

//--------------------------------------

And('Search Recharge transaction using TransactionId',function(){
  cy.readFile(MobileRechargedata).then((user)=>{
    let Id = user.RechargeId1
    manageUsersPage.getSearchTransactionId().type(Id+'{enter}', { force: true }).click({ force: true })
  })
  cy.wait(2000)
})
And('Get Recharge OrderId',function(){
  manageUsersPage.getWalletExpandButton().click({ force: true })
  manageUsersPage.getViewMoreDetailsButton().click({ force: true })
  cy.wait(2000)
  cy.readFile(MobileRechargedata).then((user)=>{
    W2B.getB2WOrderId().eq(2).then((data)=>{
    let orderId = data.text().trim()
    user.RechargeOrderId = orderId
    cy.log(user)
    cy.writeFile(MobileRechargedata,user)
  })
  })
  W2B.getClose().click()
})

//------------------------
And('Search Recharge Reversal Transaction with OrderId',function(){
  cy.readFile(MobileRechargedata).then((data)=>{
    let orderid = data.RechargeOrderId
    W2B.getSearchOrderID().clear().type(orderid+'{enter}')
  })
  cy.wait(2000)
})

//-------------------------------
And('Convert MobileRecharge FulfillmentReversal csv to json, Update data and convert json to csv',function(){
  cy.CSVToJSON(BulkFulfillmentReversal,BulkFulfillmentReversaljson)

  cy.readFile(BulkFulfillmentReversaljson).then((data)=>{
    cy.readFile(MobileRechargedata).then((user)=>{  
      let orderId = user.RechargeOrderId
    data["Order Id*"] = orderId
    })
    data["Internal Reference Id*"] = "123456",
    data["Status(true/false)*"] = "TRUE",
    data["Phase*"] = "FULFILLMENT_REVERSAL",
    data["Payment ReferenceId"] = "",
    data["Fulfillment ReferenceId"] = "",
    data["Payment Reversal ReferenceId"] = "",
    data["Fulfilment Reversal ReferenceId*"] = "12345",
    data["Bank TransactionId"] = ""
    cy.writeFile(BulkFulfillmentReversaljson, data)

  })
  cy.JSONToCSV(BulkFulfillmentReversaljson,BulkFulfillmentReversal)
})

And('Convert MobileRecharge FulfillmentReversal csv to json, Update data and convert json to csv for Rejection',function(){
  cy.CSVToJSON(BulkFulfillmentReversal,BulkFulfillmentReversaljson)

  cy.readFile(BulkFulfillmentReversaljson).then((data)=>{
    cy.readFile(MobileRechargedata).then((user)=>{  
      let orderId = user.RechargeOrderId
    data["Order Id*"] = orderId
    })
    data["Internal Reference Id*"] = "123456",
    data["Status(true/false)*"] = "FALSE",
    data["Phase*"] = "FULFILLMENT_REVERSAL",
    data["Payment ReferenceId"] = "",
    data["Fulfillment ReferenceId"] = "",
    data["Payment Reversal ReferenceId"] = "",
    data["Fulfilment Reversal ReferenceId*"] = "12345",
    data["Bank TransactionId"] = ""
    cy.writeFile(BulkFulfillmentReversaljson, data)

  })
  cy.JSONToCSV(BulkFulfillmentReversaljson,BulkFulfillmentReversal)
})

//--------------------------
And('Convet Recharge PaymentReversal csv to json, Update data and convert json to csv',function(){
  cy.CSVToJSON(BulkPaymentReversal,BulkPaymentReversaljson)

  cy.readFile(BulkPaymentReversaljson).then((data)=>{
    cy.readFile(MobileRechargedata).then((user)=>{  
      let orderId = user.RechargeOrderId
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
And('Initiate reverse transaction from order details',function(){
  manageUsersPage.getreversetransaction().eq(0).click({force:true})
  manageUsersPage.getreason().type('NIL')
  manageUsersPage.getOrderReverseYes().click({ force: true })
  manageUsersPage.getintiatedmessage().contains(this.data10.initiatedMessage)  
})

//----------------------------------------------------------------------------------
And('Click on Recharge-Others',function(){
  cy.intercept('/shulka/referenceData*').as('PricingEngine')
  pricingEnginePage.getRechargeOthers().click()
  cy.wait('@PricingEngine', {timeout:40000})
  cy.wait(2000)
})
