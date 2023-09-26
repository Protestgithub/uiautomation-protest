/// <reference types="Cypress" />
/// <reference types = "Cypress-iframe"/>

//----------------Imports---------------------------------------------------------------------
import { And, Then, When } from "@badeball/cypress-cucumber-preprocessor";
import 'cypress-iframe';
import "../../../../../../../../support/Utils/comissioncommands";
import "../../../../../../../../support/Utils/generic";

import commisionDisbursment from '../../../../../../../../support/pageObjects/CommisionDisbursment/commisionDisbursment';

//----------------Object Declaration----------------------------------------------------------

const commisionDisbursmentPage = new commisionDisbursment()
const cdCSVFile = 'templates/CommissionDisbursement.csv'



//----------------Test Scripts---------------------------------------------------------------

//----------TC_154------------Commision disbursment-----To verify that system admin should able to disburse commisson to channel users-----------------

When('Commission Disbursement Process and Commission Disbursement', function () {
  commisionDisbursmentPage.getCommisionDisbursmentProcess().scrollIntoView()
  commisionDisbursmentPage.getCommisionDisbursmentProcess().click()
  cy.intercept(this.data20.CommisionDisbursment).as('getcommissionmang')
  commisionDisbursmentPage.getCommisionDisbursment().click()
  cy.wait('@getcommissionmang', { timeout: 30000 })
  cy.wait(2000)
})

And('Commision disbursment Select MFS provider and enter Mobile number', function () {
  commisionDisbursmentPage.getCDMFSProviders().select(this.data9.Provider, { force: true })
  commisionDisbursmentPage.getDomain().select(this.data9.domain, { force: true })
  commisionDisbursmentPage.getCategory().select(this.data9.category, { force: true })
  cy.intercept(this.data20.CDButtonSubmit).as('getcommiciondisb')
  commisionDisbursmentPage.getCDButtonSubmit().click({ force: true })
  cy.wait('@getcommiciondisb', { timeout: 30000 })
  cy.wait(2000)
})
And('Commision disbursment Download the .csv file', function () {
  commisionDisbursmentPage.getCDCheckBox().check()
  cy.intercept('/CoreWeb/commission/commissionDisbursementAction_input.action').as('getCSV')
  commisionDisbursmentPage.getCDDownloadCSVButton().click({ force: true })
  cy.wait('@getCSV')

})

Then('Commision disbursment upload the downloaded file on bulk payout tool to initiate commision disbursement', function () {
  cy.wait(3000)
  commisionDisbursmentPage.getBulkPayoutTool().scrollIntoView()
  commisionDisbursmentPage.getBulkPayoutTool().click()
  // cy.intercept(this.data20.BulkPayoutInitiate).as('getbulkinitiate')
  commisionDisbursmentPage.getBulkPayoutInitiate().click()
  // cy.wait('@getbulkinitiate',{timeout:30000})
  cy.wait(3000)
  commisionDisbursmentPage.getFileUpload().attachFile(cdCSVFile)
  //  cy.intercept(this.data20.FileUpload).as('getambiguous')
  commisionDisbursmentPage.getFileUploadSubmitButton().click({ force: true })
  // cy.wait('@getambiguous',{timeout:30000})
  cy.wait(3000)
  commisionDisbursmentPage.getUploadCSVAlertSuccess().should('contain.text', this.data9.alertmessage)
})
