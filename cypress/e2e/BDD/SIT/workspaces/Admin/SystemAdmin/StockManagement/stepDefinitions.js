// /// <reference types="Cypress" />
// /// <reference types = "Cypress-iframe"/>

// //----------------Imports---------------------------------------------------------------------
// import 'cypress-iframe'
// import { Given, When, Then, And, Before } from "@badeball/cypress-cucumber-preprocessor";
// import homePage from '../../../../../../../../support/pageObjects/homePage'
// import "../../../../../../../../support/Utils/generic";
// import "../../../../../../../../support/Utils/StockCommands";
// import stockInitiation from '../../../../../../../../support/pageObjects/StockManagement/stockInitiation';
// import stockManagement from '../../../../../../../../support/pageObjects/StockManagement/stockManagement';
// import myActivity from '../../../../../../../../support/pageObjects/MyActivity/myActivity';
// import { add } from 'lodash';
// import manageUsers from '../../../../../../../../support/pageObjects/UserManagement/manageUsers';
// import approvals from '../../../../../../../../support/pageObjects/UserManagement/approvals';
// import adminTransaction from '../../../../../../../../support/pageObjects/AdminTransaction/adminTransaction';


// //----------------Object Declaration-----------------------------------------------------------------

// const welcomePage = new homePage()
// const stockInitiationPage = new stockInitiation()
// const stockManagementPage = new stockManagement()
// const myActivityPage = new myActivity()
// const manageUsersPage = new manageUsers()
// const approvalPage = new approvals()
// const adminTransactionPage = new adminTransaction()


// var filenamestock = 'cypress/fixtures/StockManagement.json'
// var filename = 'cypress/fixtures/userData/AdminTransaction.json'
// var SYSfilename = 'cypress/fixtures/userData/SystemAdminLogin.json'
// const o2cBusinessNo = 'cypress/fixtures/userData/BusinessUsersDataO2C.json'

// var mobile
// const uuid = () => Cypress._.random(1e8)
// mobile = "77" + uuid()

// var refno
// refno = "12" + uuid()

// var amount
// const uuuid = () => Cypress._.random(1e3)
// amount = uuuid()

// var amount1
// const uuuuid = () => Cypress._.random(1e11)
// amount1 = uuuuid()

// const uid = () => Cypress._.random(1e2)
// const id = uid()
// const testname = `testname${id}`
// var name

// // var filename = 'cypress/fixtures/userData/AdminTransaction.json'
// // var SYSfilename = 'cypress/fixtures/userData/SystemAdminLogin.json'

// function getRandomName() {
//   name = "";
//   var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
//   for (var i = 0; i < 5; i++)
//     name += possible.charAt(Math.floor(Math.random() * possible.length));
//   return name;
// }
// //----------------BDD Hooks-----------------------------------------------------------------

// //------------------------------------------------------------------------------
// And('Reject the initiated stock', function () {
//   approvalPage.getRejectButton().click()
//   approvalPage.getRejectComment().type(getRandomName(), { force: true })
//   approvalPage.getRejectRequest().click({ force: true })
// })


// And('Click on approval management', function () {
//   approvalPage.getApprovalManagement().click({ force: true })
//   approvalPage.getApprovalUserDetails().should('contain','Approvals')

// })


// Then('Click on Reset Button',function(){
//   stockInitiationPage.getResetButton().click()
// })


// //---- Sudheer

// When('Navigate to Admin Transaction and Click on Stock Balance Enquiry',function(){
//   stockInitiationPage.getAdminTransaction().click()
//   stockInitiationPage.getMoreView().eq(1).click()
//   stockInitiationPage.getStockBalanceEnquiry().click()
// })

// When('Select currency and Select Stock Account',function(){
//   stockInitiationPage.getCurrency().select("US Dollar")
//   stockInitiationPage.getStockAccount().select("Operator Main Wallet")
// })

// When('Navigate to Admin Transaction and Click on Stock Withdraw',function(){
//   stockInitiationPage.getAdminTransaction().click()
//   stockInitiationPage.getStockWithdraw().click()
// })

// And('Enter all the Stock Information for withdraw',function(){
//   stockInitiationPage.getCurrency().select("US Dollar")
//   stockInitiationPage.getFromStockAccount().select("Operator Main Wallet")
//   stockInitiationPage.getTrustBank().select("TBN101")
//  // stockInitiationPage.getAccountNumber().select("*****2102 ").eq(0)
// cy.getAccountNumber()
//   stockInitiationPage.getTransactionAmount().type(amount)
//   stockInitiationPage.getReferencenumber().type(refno)
//   stockInitiationPage.getRemarks().type(getRandomName())
// })

// Then('Click on Delete and Confirm Success Message',function(){
//   stockInitiationPage.getDeleteButton().click({force:true})
//   stockInitiationPage.getSaveButton().click({force:true}) 
//   stockInitiationPage.getSuccessMessage().contains(" Your transaction request has been initiated, and is now pending confirmation ")
//   stockInitiationPage.getDone().click({force:true})
// })

// And('Enter all the Reimbursement Information for reset',function(){
//   stockInitiationPage.getCurrency().select("US Dollar")
//   stockInitiationPage.getUserType().select("Operator")
// stockInitiationPage.getResetAccountNumber().select("Income Account")

//   stockInitiationPage.getTransactionAmount().type(amount)
//   stockInitiationPage.getReferencenumber().type(refno+getRandomName())
//   stockInitiationPage.getRemarks().type(getRandomName())
//   stockInitiationPage.getReferenceDate().type('2023-01-24')
// })


