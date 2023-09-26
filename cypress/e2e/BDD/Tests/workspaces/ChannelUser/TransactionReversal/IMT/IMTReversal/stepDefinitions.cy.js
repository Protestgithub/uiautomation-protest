/// <reference types= "Cypress" />
// <reference types= "Cypress-iframe" />

//import 'cypress-iframe'
import { Given, When, Then, And, Before } from "@badeball/cypress-cucumber-preprocessor";
import "../../../../../../../../support/Utils/generic"
//import LoginPage from "../../../../../support/pageObjects/ConsumerPortalUserLogin/LoginPage";
import LoginPage from "../../../../../../../../support/pageObjects/ConsumerPortalUserLogin/LoginPage";
//import HomePage from "../../../../../support/pageObjects/ConsumerPortalHomePage/HomePage";
import HomePage from "../../../../../../../../support/pageObjects/ConsumerPortalHomePage/HomePage";
import IMT from "../../../../../../../../support/pageObjects/InternationalTransfer/InternationalTransfer";
import W2BandB2W from '../../../../../../../../support/pageObjects/W2BandB2W/W2BandB2W';
import manageUsers from '../../../../../../../../support/pageObjects/UserManagement/manageUsers';
import PricingEnginePage from '../../../../../../../../support/pageObjects/PricingEngine/PricingEnginePage';


const UserLoginPage = new LoginPage()
const WelcomePage = new HomePage()
const InternationalTransferPage = new IMT()
const W2B = new W2BandB2W()
const manageUsersPage = new manageUsers()
const pricingEnginePage = new PricingEnginePage()


var InternationalTransferdata = 'cypress/fixtures/userData/InternationalTransfer.json'

var mobile
const uuid = () => Cypress._.random(1e8)
mobile = "77" + uuid()
const uuid1 = () => Cypress._.random(1e10)
AccountNumber = uuid1()

const BulkFulfillmentReversal ='cypress/fixtures/templates/BULK_FULFILLMENT_REVERSAL_AMBIGUOUS_SETTLEMENT-template.csv'
const BulkFulfillmentReversaljson = 'cypress/fixtures/BulkData/BULK_FULFILLMENT_REVERSAL_AMBIGUOUS_SETTLEMENT-template.json'
const W2BBulkFulfillmentReversal = 'templates/BULK_FULFILLMENT_REVERSAL_AMBIGUOUS_SETTLEMENT-template.csv'

const BulkPaymentReversal ='cypress/fixtures/templates/BULK_PAYMENT_REVERSAL_AMBIGUOUS_SETTLEMENT-template.csv'
const BulkPaymentReversaljson = 'cypress/fixtures/BulkData/BULK_PAYMENT_REVERSAL_AMBIGUOUS_SETTLEMENT-template.json'
const W2BBulkPaymentReversal = 'templates/BULK_PAYMENT_REVERSAL_AMBIGUOUS_SETTLEMENT-template.csv'

//----------------------------------------------------------------------------------------
And('Get IMT TransactionId',function(){
    W2B.getTransactionId().then((data)=>{
      cy.readFile(InternationalTransferdata).then((user)=>{
      let Id = data.text()
      user.IMTId = Id
      cy.writeFile(InternationalTransferdata,user)
      })
    })
    W2B.getSuccessMessage().contains('Payment successful')
})
//--------------------------------------

And('Search IMT transaction using TransactionId',function(){
  cy.readFile(InternationalTransferdata).then((user)=>{
    let Id = user.IMTId
    manageUsersPage.getSearchTransactionId().type(Id+'{enter}', { force: true }).click({ force: true })
  })
  cy.wait(2000)
})
//------------------------
And('Search IMT Transaction with OrderId',function(){
  cy.readFile(InternationalTransferdata).then((data)=>{
    let orderid = data.IMTOrderId
    W2B.getSearchOrderID().type(orderid+'{enter}')
  })
  cy.wait(2000)
})
//-------------------------------
And('Convert IMT FulfillmentReversal csv to json, Update data and convert json to csv',function(){
  cy.CSVToJSON(BulkFulfillmentReversal,BulkFulfillmentReversaljson)

  cy.readFile(BulkFulfillmentReversaljson).then((data)=>{
    cy.readFile(InternationalTransferdata).then((user)=>{  
      let orderId = user.IMTOrderId
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

And('Convert IMT FulfillmentReversal csv to json, Update data and convert json to csv for Rejection',function(){
  cy.CSVToJSON(BulkFulfillmentReversal,BulkFulfillmentReversaljson)

  cy.readFile(BulkFulfillmentReversaljson).then((data)=>{
    cy.readFile(InternationalTransferdata).then((user)=>{  
      let orderId = user.IMTOrderId
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

//---------------------------------------------------------------------------------
And('Click on IMT',function(){
  cy.intercept('/shulka/referenceData*').as('PricingEngine')
  pricingEnginePage.getIMT().click()
  cy.wait('@PricingEngine', {timeout:40000})
  cy.wait(2000)
})
