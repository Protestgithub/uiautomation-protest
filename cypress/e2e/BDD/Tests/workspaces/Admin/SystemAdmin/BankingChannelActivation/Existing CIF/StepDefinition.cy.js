/// <reference types="Cypress" />
/// <reference types = "Cypress-iframe"/>

//----------------Imports---------------------------------------------------------------------
import { And, Then, When } from "@badeball/cypress-cucumber-preprocessor";
import 'cypress-iframe';
import BankingActivation from '../../../../../../../../support/pageObjects/BankingActivation';
import homePage from '../../../../../../../../support/pageObjects/homePage';
import loginPage from "../../../../../../../../support/pageObjects/loginPage";
import "../../../../../../../../support/Utils/bankingActivationCommands";
import "../../../../../../../../support/Utils/generic";

//----------------Object Declaration----------------------------------------------------------
const welcomePage = new homePage()
const bankingActivationPage = new BankingActivation()
const pageLogin = new loginPage()

//----------------------------------------POC - CODE-------------------------------------------------------
//---------------------------------------------System Admin Login----------------------------------------------------
//--------------------------------Banking Channel Activation-------------------------------------------
//------------TC_155-------------------------------------------------------------------------------------

// When('Navigate to Banking Channel Activation and click', function () {

//   cy.intercept(this.data20.BankingChannelActivation).as('getBankingActivationPage')
//   welcomePage.getBankingChannelActivation().click({ force: true })
//   cy.wait('@getBankingActivationPage', { timeout: 30000 })
//   cy.frameLoaded(pageLogin.getiFrame())

// })

And('Enter the CIF number and search for the user', function () {

  bankingActivationPage.getEnterCIFNumber().type(this.data06.CIFnumberBanking, { force: true })
  //
  cy.intercept(this.data20.SearchButton).as('getcifsearch')
  bankingActivationPage.getSearchButton().click()
  cy.wait('@getcifsearch', { timeout: 30000 })
})
And('Click on Mobile Banking Activation', function () {
  //
  bankingActivationPage.getMobileBankingButton().click({ force: true })
})
Then('Confirm and Verify the Mob Banking Activtion Message sent to user', function () {
  //
  cy.getMobBankingActivationMessage(Cypress.env('Adminurl'), Cypress.env('port'))

})
//----------TC_156--------------------------------------------------------------------------------------

And('Click on Internet Banking Activation', function () {
  //
  cy.waitUntil(() => {

    return cy.iframe().find('h3.add-user-reports-title.panel-title.ng-star-inserted').should('be.visible', { force: true })

  })
  bankingActivationPage.getInternetBankingButton().click({ force: true })

})

Then('Confirm and Verify the Internet Banking Activtion Message sent to user', function () {
  //
  cy.getInternetBankingActivationMessage(Cypress.env('Adminurl'), Cypress.env('port'))

})
//-----------TC_157--------------------------------------------------------------------------------------

And('Enter the Activated CIF number and search for the user', function () {

  bankingActivationPage.getEnterCIFNumber().type(this.data06.CIFnumberBanking, { force: true })
  bankingActivationPage.getSearchButton().click({ force: true })
})

Then('verify admin is able to see the Activated Message', function () {
  
  bankingActivationPage.getMobActivatedMsg().eq(0).should('include.text', ' Mobile Banking Activated ')
  
  bankingActivationPage.getInternetActivatedMsg().should('include.text', ' Internet Banking Activated ')

})

