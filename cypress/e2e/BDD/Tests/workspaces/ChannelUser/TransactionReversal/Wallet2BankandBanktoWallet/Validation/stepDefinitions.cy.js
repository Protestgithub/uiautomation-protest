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
import approvals from '../../../../../../../../support/pageObjects/UserManagement/approvals';

//----------------Object Declaration-----------------------------------------------------------------
const pageLogin = new loginPage()
const manageUsersPage = new manageUsers()
const welcomePage = new homePage()
const W2B = new W2BandB2W()
const approvalPage = new approvals()

let filename = 'cypress/fixtures/userData/W2BandB2W.json'

function getRandomNumber() {
  name = "";
  var possible = "10";
  for (var i = 0; i < 1; i++)
    name += possible.charAt(Math.floor(Math.random() * possible.length));
  return name;
}

//-----------------------------------------------------------------------


And('Verify cannot reinitiate reversal error message',function(){
  manageUsersPage.getreversetransaction().eq(0).click({force:true})
  manageUsersPage.getreason().type('NIL')
  manageUsersPage.getReverYes().click({ force: true })
  W2B.getReInitiateErrorMessage().contains('Order cancellation already initiated')
})

Then('Verify Business user should not able to reverse transaction',function(){
  manageUsersPage.getViewAllDetailsButton().should('be.disabled')
})

Then('Verify business user cannot be able to approve reversal transaction',function(){
    cy.get('iframe').then(($ele) => {
        cy.log($ele)
        if ($ele.find('[data-testid*="APPROVALS"]').length > 0) {
            cy.log('Failed')
        } else {
            cy.log('Psssed')
        }
    })
})

Then('Search With Wrong TransactionId and verify error message',function(){
  manageUsersPage.getSearchTransactionId().type(getRandomNumber()+'{enter}', { force: true }).click({ force: true })
  W2B.getReInitiateErrorMessage().contains('No Records Available')
})

And('Search W2B Reversal Transaction with OrderId',function(){
  cy.readFile(filename).then((data)=>{
    let orderid = data.W2BOrderId
    W2B.getSearchOrderID().type(orderid+'{enter}')
  })
  cy.wait(2000)
})

And('Click on Expand and check state of W2B Transaction',function(){
  W2B.getExpandButton().click()
  W2B.getState().contains('FULFILLMENT_SUCCESS')
})

And('Search Transaction Reversal order',function(){
  cy.readFile(filename).then((data)=>{
    let orderid = data.B2WOrderId
    W2B.getSearchOrderID().type(orderid+'{enter}')
  })
  cy.wait(2000)
})
Then('Verify Transaction reversal Initiated state',function(){
  W2B.getExpandButton().click()
  cy.wait(2000)
  W2B.getState().contains('CANCELLATION_INITIATED')
  manageUsersPage.getOrderStatus().should('contain',' PENDING')
})
Then('Verify W2B Transaction reversal Approved state',function(){
  W2B.getExpandButton().click()
  cy.wait(2000)
  W2B.getState().contains('FULFILLMENT_REVERSAL_INITIATED')
  manageUsersPage.getOrderStatus().should('contain',' PENDING')
})
Then('Verify B2W Transaction reversal Approved state',function(){
  W2B.getExpandButton().click()
  cy.wait(2000)
  W2B.getState().contains('PAYMENT_REVERSAL_INITIATED')
  manageUsersPage.getOrderStatus().should('contain',' PENDING')
})

Then('Verify Transaction reversal state',function(){
  W2B.getExpandButton().click()
  cy.wait(2000)
  W2B.getState().contains('PAYMENT_REVERSAL_SUCCESS')
  manageUsersPage.getCancelledStatus().should('contain',' CANCELLED')
})
Then('Verify Transaction reversal Rejection state',function(){
  W2B.getExpandButton().click()
  cy.wait(2000)
  W2B.getState().contains('FULFILLMENT_SUCCESS')
  manageUsersPage.getCancelledStatus().should('contain',' SUCCESS')
})

And('Click on Filter and apply suitable filter',function(){
  manageUsersPage.getFilterStatementButton().click({ force: true })
  manageUsersPage.getStatus().click()
  manageUsersPage.getExtraServices().type('Wallet To Bank')
  manageUsersPage.getWalletToBankFilter().click()
  manageUsersPage.getApplyFilterButton().click({ force: true })
})
Then('Verify the transactions',function(){
  manageUsersPage.getTransactions().eq(0).should('exist')
})
Then('Click on Expand more and Verify the details',function(){
  manageUsersPage.getExpandMore().click()
  manageUsersPage.getPrePostBalance().eq(0).should('be.visible')
  manageUsersPage.getPrePostBalance().eq(1).should('be.visible')
  manageUsersPage.getViewMoreDetailsButton().should('be.visible')
})
Then('Verify the More Details page',function(){
  manageUsersPage.getViewMoreDetailsButton().should('be.visible').click({ force: true })
  manageUsersPage.getMoreDetailsPage().should('exist')
})
Then('Verify Reversal and share recipt button',function(){
  manageUsersPage.getClose().click()
  manageUsersPage.getreversetransaction().eq(0).should('be.visible')
  manageUsersPage.getreversetransaction().eq(0).should('be.visible')
})
Then('Verify ReverseTransaction page',function(){
  manageUsersPage.getreversetransaction().eq(0).click({force:true})
  manageUsersPage.getreason().should('be.visible')
  manageUsersPage.getreverseservicecharge().should('be.visible')
  manageUsersPage.getreversecommission().should('be.visible')
  manageUsersPage.getReverYes().should('be.visible')
  manageUsersPage.getReverNo().should('be.visible')
})

Then('Verify navigated previous page',function(){
  manageUsersPage.getReverNo().click()
  manageUsersPage.getTransactions().eq(0).should('be.visible')
})