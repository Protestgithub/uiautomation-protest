/// <reference types="Cypress" />
/// <reference types = "Cypress-iframe"/>

//----------------Imports---------------------------------------------------------------------
import { And, Then, When } from "@badeball/cypress-cucumber-preprocessor";
import 'cypress-iframe';
import BankingActivation from '../../../../../../../../support/pageObjects/BankingActivation';
import homePage from '../../../../../../../../support/pageObjects/homePage';
import "../../../../../../../../support/Utils/bankingActivationCommands";
import "../../../../../../../../support/Utils/generic";

//----------------Object Declaration----------------------------------------------------------
const welcomePage = new homePage()
const bankingActivationPage = new BankingActivation()
const timestamp = (new Date).getTime()
let mobtimestamp = timestamp.toString()
let mobtimestamp1 = mobtimestamp.substring(5)
let mobileNumberCIF = "77" + mobtimestamp1

//----------------------------------------POC - CODE-------------------------------------------------------
//---------------------------------------------System Admin Login----------------------------------------------------
//--------------------------------Banking Channel Activation-------------------------------------------
//------------TC_155-------------------------------------------------------------------------------------

When('Navigate to Banking Channel Activation and click', function () {
  cy.intercept(this.data20.BankingChannel).as('getBankingActivationPage')
  welcomePage.getBankingChannelActivation().click({ force: true })
  cy.wait('@getBankingActivationPage', { timeout: 30000 })

})

//--------TC_158-----------------------------------------------------------------------------------------
And('Enter the Full KYC mobile number and search for the user', function () {
  //
  cy.waitUntil(() => {

    return cy.iframe().find('div.panel-heading').eq(0).should('be.visible', { force: true })

  })
  bankingActivationPage.getEnterCIFNumber().type(mobileNumberCIF, { force: true })
  //
  bankingActivationPage.getSearchButton().click()
})
And('Click on next and activate mobile Banking', function () {
  bankingActivationPage.getNextBtn().click({ force: true })
  bankingActivationPage.getNextBtn1().click({ force: true })
  cy.OTP1(Cypress.env('Adminurl'), Cypress.env('port'))
  
  bankingActivationPage.getMobileBankingButton().click({ force: true })
  bankingActivationPage.getConfirmButton().contains('Confirm').click({ force: true })

})

//--------TC_159-----------------------------------------------------------------------------------------

And('Click on next and activate internet Banking', function () {
  
  bankingActivationPage.getInternetBankingButton().click({ force: true })
  // bankingActivationPage.getConfirmButton().contains('Confirm').click({force:true})

})
//--------TC_160-----------------------------------------------------------------------------------------
And('Enter the mobile or CIF number which is not registered and search for the user', function () {
  //
  cy.waitUntil(() => {

    return cy.iframe().find('div.panel-heading').eq(0).should('be.visible', { force: true })

  })
  bankingActivationPage.getEnterCIFNumber().type(this.data06.NotRegisteredMSISDN, { force: true })
  //
  bankingActivationPage.getSearchButton().click()
})

Then('verify admin is able to see the Message mobile or CIF number does not exist in the system', function () {
  bankingActivationPage.getInvalidNumber().should('contain.text', ' is valid. ')
})
