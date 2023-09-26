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


let filename = 'cypress/fixtures/userData/W2BandB2W.json'
function getRandomNumber() {
  name = "";
  var possible = "123";
  for (var i = 0; i < 1; i++)
    name += possible.charAt(Math.floor(Math.random() * possible.length));
  return name;
}
//-----------------------------------

And('Search W2B transaction using TransactionId',function(){
  cy.readFile(filename).then((user)=>{
    let Id = user.W2BId1
    manageUsersPage.getSearchTransactionId().type(Id+'{enter}', { force: true }).click({ force: true })
  })
  cy.wait(2000)
})
And('Search W2B transaction using TransactionId2',function(){
  cy.readFile(filename).then((user)=>{
    let Id = user.W2BId2
    manageUsersPage.getSearchTransactionId().type(Id+'{enter}', { force: true }).click({ force: true })
  })
  cy.wait(2000)
})
And('Search W2B transaction using TransactionId3',function(){
  cy.readFile(filename).then((user)=>{
    let Id = user.W2BId3
    manageUsersPage.getSearchTransactionId().type(Id+'{enter}', { force: true }).click({ force: true })
  })
  cy.wait(2000)
})
And('Search W2B transaction using TransactionId4',function(){
  cy.readFile(filename).then((user)=>{
    let Id = user.W2BId4
    manageUsersPage.getSearchTransactionId().type(Id+'{enter}', { force: true }).click({ force: true })
  })
  cy.wait(2000)
})
And('Get W2B OrderId',function(){
  manageUsersPage.getWalletExpandButton().click({ force: true })
  manageUsersPage.getViewMoreDetailsButton().click({ force: true })
  cy.wait(2000)
  cy.readFile(filename).then((user)=>{
    W2B.getOrderId().then((data)=>{
    let orderId = data.text().trim()
    user.W2BOrderId = orderId
    cy.log(user)
    cy.writeFile(filename,user)
  })
  })
  W2B.getClose().click()
})


And('Initiate W2B reverse transaction',function(){
  manageUsersPage.getreversetransaction().eq(0).click({force:true})
  manageUsersPage.getreason().type('NIL')
  manageUsersPage.getReverYes().click({ force: true })
  manageUsersPage.getintiatedmessage().contains(this.data10.initiatedMessage)  
})
And('Initiate W2B reverse transaction and Reverse Service charge',function(){
  manageUsersPage.getreversetransaction().eq(0).click({force:true})
  manageUsersPage.getreason().type('NIL')
  manageUsersPage.getreverseservicecharge().click({ force: true })
  manageUsersPage.getReverYes().click({ force: true })
  manageUsersPage.getintiatedmessage().contains(this.data10.initiatedMessage)  
})
And('Initiate W2B reverse transaction and Reverse Comission',function(){
  manageUsersPage.getreversetransaction().eq(0).click({force:true})
  manageUsersPage.getreason().type('NIL')
  manageUsersPage.getreversecommission().click({ force: true })
  manageUsersPage.getReverYes().click({ force: true })
  manageUsersPage.getintiatedmessage().contains(this.data10.initiatedMessage)  
})
And('Initiate W2B reverse transaction to Commission and ServiceCharge Reversal',function(){
  manageUsersPage.getreversetransaction().eq(0).click({force:true})
  manageUsersPage.getreason().type('NIL')
  manageUsersPage.getreverseservicecharge().click({ force: true })
  manageUsersPage.getreversecommission().click({ force: true })
  manageUsersPage.getReverYes().click({ force: true })
  manageUsersPage.getintiatedmessage().contains(this.data10.initiatedMessage)  
})


And('Navigate to MyActivity and get Transaction initiated time',function(){
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
And('Click on Transaction reversal data',function(){
  cy.getReversalApproval(filename)
})
And('Approve the reversal transaction',function(){
  approvalPage.getApproveButton().click({ force: true })
  approvalPage.getApproveRequest().click({ force: true })
  approvalPage.getApproveConfirmationMessage()
})

//------------------------------------------------

And('Enter Fulfillment Reversal details for download',function(){
  DownloadAmbpage.getAmbtype().select(this.data16.FulfillmentReversalType, { force: true })
  DownloadAmbpage.getPartyType().select(this.data16.PartyType, { force: true })
  cy.wait(3000)
})

And('Select Fulfillment Reversal operation name', function () {
  BulkSettlementpage.getOperatorName().select(this.data16.FulfillmentReversalType, { force: true })
})
And('Select Payment Reversal operation name', function () {
  BulkSettlementpage.getOperatorName().select(this.data16.PaymentReversalType, { force: true })
})

And('Click on Download template', function () {
  BulkSettlementpage.getDownloadTemplate().click()
})

And('Convet W2B FulfillmentReversal csv to json, Update data and convert json to csv',function(){
  cy.CSVToJSON(BulkFulfillmentReversal,BulkFulfillmentReversaljson)

  cy.readFile(BulkFulfillmentReversaljson).then((data)=>{
    cy.readFile(filename).then((user)=>{  
      let orderId = user.W2BOrderId
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

And('Convet W2B PaymentReversal csv to json, Update data and convert json to csv',function(){
  cy.CSVToJSON(BulkPaymentReversal,BulkPaymentReversaljson)

  cy.readFile(BulkPaymentReversaljson).then((data)=>{
    cy.readFile(filename).then((user)=>{  
      let orderId = user.W2BOrderId
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


And('Update Fullfillment Reversal template and verify Success message',function(){
  BulkSettlementpage.getUploadfile().attachFile(W2BBulkFulfillmentReversal)
  BulkSettlementpage.getSubmitbttn().click()
  W2B.getBulkInitiateSuccessMsg().contains('The bulk request file has been uploaded and the processing has been initiated')
})

And('Update Payment Reversal template and verify Success message',function(){
  BulkSettlementpage.getUploadfile().attachFile(W2BBulkPaymentReversal)
  BulkSettlementpage.getSubmitbttn().click()
  W2B.getBulkInitiateSuccessMsg().contains('The bulk request file has been uploaded and the processing has been initiated')
})

When('Navigate to Ambiguous order and click on Bulk Approval',function(){
  welcomePage.getAmbiguousOrderTransacation().scrollIntoView()
  welcomePage.getAmbiguousOrderTransacation().click()
  welcomePage.getAmbiguousBulkApprovals().click()
  cy.wait(4000)
})

And('click on initiated fulfillment reversal',function(){
  W2B.getBulkAmbiguousApproval().contains('Fulfillment Reversal Ambiguous').click()
})
And('click on initiated Payment reversal',function(){
  W2B.getBulkAmbiguousApproval().contains('Payment Reversal Ambiguous').click()
})


Then('Approve the Initiated Ambiguous bulk and verify success message',function(){
  W2B.getBulkApproveButton().click()
  W2B.getBulkApprovalSuccess().contains('Approval for the bulk request file has been initiated')
})

Then('Reject the Ambiguous Fulfillment Reversal',function(){
  W2B.getBulkReject().click()
  W2B.getBulkApprovalSuccess().contains('Bulk Operation request has been rejected successfully for the batch ID')
})
