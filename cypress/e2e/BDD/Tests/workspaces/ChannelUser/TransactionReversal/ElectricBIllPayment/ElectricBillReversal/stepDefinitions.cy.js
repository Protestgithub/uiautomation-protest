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

//----------------Object Declaration-----------------------------------------------------------------
const pageLogin = new loginPage()
const manageUsersPage = new manageUsers()
const welcomePage = new homePage()
const W2B = new W2BandB2W()
const myActivityPage = new myActivity()
const approvalPage = new approvals()
const DownloadAmbpage = new DownloadAmb()
const BulkSettlementpage = new BulkSettlement()

const BulkFulfillmentReversal ='cypress/fixtures/templates/BULK_FULFILLMENT_REVERSAL_AMBIGUOUS_SETTLEMENT-template.csv'
const BulkFulfillmentReversaljson = 'cypress/fixtures/BulkData/BULK_FULFILLMENT_REVERSAL_AMBIGUOUS_SETTLEMENT-template.json'
const W2BBulkFulfillmentReversal = 'templates/BULK_FULFILLMENT_REVERSAL_AMBIGUOUS_SETTLEMENT-template.csv'

const BulkPaymentReversal ='cypress/fixtures/templates/BULK_PAYMENT_REVERSAL_AMBIGUOUS_SETTLEMENT-template.csv'
const BulkPaymentReversaljson = 'cypress/fixtures/BulkData/BULK_PAYMENT_REVERSAL_AMBIGUOUS_SETTLEMENT-template.json'
const W2BBulkPaymentReversal = 'templates/BULK_PAYMENT_REVERSAL_AMBIGUOUS_SETTLEMENT-template.csv'

let filename = 'cypress/fixtures/userData/ElectricBill.json'


//--------------------------------------------------------------------------------------------------

And('Search Electric bill payment transaction using TransactionId1',function(){
  cy.readFile(filename).then((user)=>{
    let Id = user.EBPID
    manageUsersPage.getSearchTransactionId().type(Id+'{enter}', { force: true }).click({ force: true })
  })
  cy.wait(3000)
})
And('Search Electric bill payment transaction using TransactionId2',function(){
  cy.readFile(filename).then((user)=>{
    let Id = user.EBPID
    manageUsersPage.getSearchTransactionId().type(Id+'{enter}', { force: true }).click({ force: true })
  })
  cy.wait(3000)
})
And('Search Electric bill payment transaction using TransactionId3',function(){
  cy.readFile(filename).then((user)=>{
    let Id = user.EBPID
    manageUsersPage.getSearchTransactionId().type(Id+'{enter}', { force: true }).click({ force: true })
  })
  cy.wait(3000)
})
And('Search Electric bill payment transaction using TransactionId4',function(){
  cy.readFile(filename).then((user)=>{
    let Id = user.EBPID
    manageUsersPage.getSearchTransactionId().type(Id+'{enter}', { force: true }).click({ force: true })
  })
  cy.wait(3000)
})

And('Get ElecticBill OrderId',function(){
  manageUsersPage.getWalletExpandButton().click({ force: true })
  manageUsersPage.getViewMoreDetailsButton().click({ force: true })
  cy.wait(2000)
  cy.readFile(filename).then((user)=>{
    W2B.getB2WOrderId().eq(2).then((data)=>{
    let orderId = data.text().trim()
    user.EBillOrderId = orderId
    cy.writeFile(filename,user)
  })
  })
  W2B.getClose().click()
})

And('Convert BillPayment FulfillmentReversal csv to json, Update data and convert json to csv',function(){
  cy.CSVToJSON(BulkFulfillmentReversal,BulkFulfillmentReversaljson)

  cy.readFile(BulkFulfillmentReversaljson).then((data)=>{
    cy.readFile(filename).then((user)=>{  
      let orderId = user.EBillOrderId
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

And('Navigate to MyActivity and get Bill PaymentTransaction initiated time',function(){
  welcomePage.getMyActivity().click()
  cy.readFile('cypress/fixtures/userData/SystemAdminLogin.json').then((user) => {
    let Mobile = user.MobileNumber
    var SysAdminUserMobile = " " + Mobile
    manageUsersPage.getAssertMobile().eq(1).contains(SysAdminUserMobile)
  })
  
  W2B.getTransactionTime().eq(0).invoke('text').then((time) => {
    time = time.trim()
    cy.log(time)
    cy.readFile(filename).then((data)=>{
        data.RevertedOnTime = time
      cy.writeFile(filename, data)
    })
  })
})

And('Click on BillPayment Transaction reversal data',function(){
  cy.getReversalApproval(filename)
})

And('Convet BillPayment PaymentReversal csv to json, Update data and convert json to csv',function(){
  cy.CSVToJSON(BulkPaymentReversal,BulkPaymentReversaljson)

  cy.readFile(BulkPaymentReversaljson).then((data)=>{
    cy.readFile(filename).then((user)=>{  
      let orderId = user.EBillOrderId
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

And('Search Bill pay Transaction Reversal order',function(){
  cy.readFile(filename).then((data)=>{
    let orderid = data.EBillOrderId
    W2B.getSearchOrderID().clear().type(orderid+'{enter}')
  })
  cy.wait(2000)
})
