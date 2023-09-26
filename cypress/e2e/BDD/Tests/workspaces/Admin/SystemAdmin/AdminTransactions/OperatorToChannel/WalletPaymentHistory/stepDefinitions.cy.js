/// <reference types="Cypress" />
/// <reference types = "Cypress-iframe"/>

//----------------Imports---------------------------------------------------------------------
import 'cypress-iframe'
import { Given, When, Then, And, Before } from "@badeball/cypress-cucumber-preprocessor";
import loginPage from '../../../../../../../../../support/pageObjects/loginPage';
import homePage from '../../../../../../../../../support/pageObjects/homePage';

import "../../../../../../../../../support/Utils/generic";
import "../../../../../../../../../support/Utils/BusinessUserCommands";
import "../../../../../../../../../support/Utils/subscriberCommands";
import O2CTransferInitiate from '../../../../../../../../../support/pageObjects/OperatorToChannel/O2CTransferInitiate';
import TransferRulePage from '../../../../../../../../../support/pageObjects/TransferRules/TransferRulePage';
import Approval from '../../../../../../../../../support/pageObjects/TransferRules/Approval';
import TransactionCorrection from '../../../../../../../../../support/pageObjects/TransactionCorrection';

import manageUsers from '../../../../../../../../../support/pageObjects/UserManagement/manageUsers';
import register from '../../../../../../../../../support/pageObjects/UserManagement/register';
import approvals from '../../../../../../../../../support/pageObjects/UserManagement/approvals';

//----------------Object Declaration-----------------------------------------------------------------

const registerPage = new register()
const approvalPage = new approvals()
const manageUsersPage = new manageUsers()




//----------------Object Declaration-----------------------------------------------------------------

const pageLogin = new loginPage()
const welcomePage = new homePage()
const O2CTransferInitiatePage = new O2CTransferInitiate()
const transferrulepage = new TransferRulePage()
const transferruleapprovalpage = new Approval()
const TransferRuleApproval = new Approval()
const tranCorrPage = new TransactionCorrection()
const uid = () => Cypress._.random(1e10)
const uuid = () => Cypress._.random(1e5)
var TransferAmount = uuid()
var ReferenceNumber = uuid()
var number = uuid()
var Amount = uid()
var name, BAMobileNumber
var TransactionFleO2C = "cypress/fixtures/userData/TransactionFile.json"
var filename = "cypress/fixtures/userData/O2CBulkData.json"
var BBAFile = "cypress/fixtures/userData/BusinessUsersDataO2C.json"
var O2CFile = "cypress/fixtures/userData/O2Cdata.json"

function getRandomName() {
  name = "";
  var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
  for (var i = 0; i < 5; i++)
    name += possible.charAt(Math.floor(Math.random() * possible.length));
  return name;
}
//----------------BDD Hooks-----------------------------------------------------------------

////////////////////////////// SUDHEER ////////////////////////////////////////

//----------TC_129-------To verify that Admin user can view all the transaction details under Order details menu------------


And('Enter Mobile numberin search Menu', function () {
  cy.getBusinessUserMobNum()
})



//----------TC_130-------To verify that Admin user can check all the Order Details of a customer/ business users successfully------------


And('Enter Mobile number and KYC number in search menu for customerbusiness users', function () {
  cy.getBusinessUserMobNum()
  manageUsersPage.getBusinessUserDetail().should('contain.text', ' Business')
})



Then('Click on order details for customerbusiness users', function () {
  manageUsersPage.getOrderDetailsButton().click({ force: true })
  manageUsersPage.getOrderDetailsMessage().should('have.text', ' Manage Users  > View Details')
})

// //---------TC_131------To verify that latest order transactions will be displayed on the first page of Order details screen.------------

Then('Click on order details for latest order transactions', function () {
  cy.wait(3000)
  manageUsersPage.getOrderDetailsButton().click({ force: true })
  manageUsersPage.getWalletExpandButton().click({ force: true })
  manageUsersPage.getViewMoreDetailsButton().click({ force: true })
  manageUsersPage.getLatestTrasanction().should('have.text', '1')
})


//---------TC_132-----To verify that all the wallet transactions are displayed in statement screen sucessfully.------------

And('Click on Wallet Payment History', function () {
  manageUsersPage.getWalletPaymentHistoryButton().click({ force: true })

})

And('Click on expand button', function () {
  manageUsersPage.getWalletExpandButton().click({ force: true })
})

Then('Click on wallet view Details', function () {
  manageUsersPage.getViewMoreDetailsButton().click({ force: true })
  manageUsersPage.getDateRangeAssert().should('contain.text', 'More Details')
})



//-------TC_133------To verify that user can able to view all the wallet transactions by entering valid transaction id.------------


And('Click on Wallet Payment History for valid transaction with id', function () {
  manageUsersPage.getWalletPaymentHistoryButton().click({ force: true })

})

And('Click on expand button on valid transaction with id', function () {
  cy.readFile(TransactionFleO2C).then((data) => {
    let TID = data.TransactionID
    manageUsersPage.getSearchTransactionId().type(TID, { force: true }).click({ force: true })
  })
  manageUsersPage.getWalletExpandButton().click({ force: true })
  cy.waitUntil(()=>{
    return cy.iframe().find('label.label-text.ng-star-inserted').eq(0).should('be.visible', { force: true })
  }) 
})

Then('Click on view Details for wallet transactions with id', function () {
  manageUsersPage.getViewMoreDetailsButton().click({ force: true })
})






//-----TC_134-----To verify that user can able to fetch the Statement based on the transaction type (success, fail etc.)------------


And('Click on Wallet Payment History for transaction type', function () {
  manageUsersPage.getWalletPaymentHistoryButton().click({ force: true })
})

And('Click on filter and Select status type and Select apply', function () {
  manageUsersPage.getFilterStatementButton().click({ force: true })
  manageUsersPage.getStatus().click()
  cy.waitUntil(()=>{
    return cy.iframe().find('label.filter-header.ng-star-inserted').should('be.visible', { force: true })
  }) 
  manageUsersPage.getApplyFilterButton().click({ force: true })
})
And('Click on expand button for transaction type', function () {
  cy.wait(3000)
  manageUsersPage.getWalletExpandButton().click({ force: true })
  cy.waitUntil(()=>{
    return cy.iframe().find('label.label-text.ng-star-inserted').eq(0).should('be.visible', { force: true })
  }) 
})

Then('Click on view Details for transaction', function () {
  manageUsersPage.getViewMoreDetailsButton().click({ force: true })
})


//-----TC_135-------To verify that user can able to fetch the Statement based on the Date range.------------

And('Click on Wallet Payment History based on the Date', function () {
  manageUsersPage.getWalletPaymentHistoryButton().click({ force: true })
  cy.waitUntil(()=>{
    return cy.iframe().find('div.filter-container').should('be.visible', { force: true })
  }) 
})

And('Click on filter', function () {
  manageUsersPage.getFilterStatementButton().click({ force: true })
  cy.waitUntil(()=>{
    return cy.iframe().find('label.filter-header.ng-star-inserted').should('be.visible', { force: true })
  }) 
})


// And('Click on expand button based on the Date', function () {
//   manageUsersPage.getWalletExpandButton().click({ force: true })
// })

And('Select start date and end date and  Click apply', function () {
  cy.wait(2000)
  manageUsersPage.getDatePickerStart().click({ force: true })
  manageUsersPage.getStartDate().contains(this.data2.usercalender.startday).click({ force: true })
  manageUsersPage.getDatePickerEnd().click({ force: true })
  manageUsersPage.getEndDate().click({ force: true })
  manageUsersPage.getApplyFilterButton().click({ force: true })
})
And('Click on expand button based on the Date', function () {
  manageUsersPage.getWalletExpandButton().click({ force: true })
  cy.waitUntil(()=>{
    return cy.iframe().find('label.label-text.ng-star-inserted').eq(0).should('be.visible', { force: true })
  }) 
})

Then('Click on view Details based on the Date range', function () {
  cy.wait(3000)
  manageUsersPage.getWalletExpandButton().click({ force: true })
  cy.iframe().find('#view-more-details').contains(' View Details ')
})
