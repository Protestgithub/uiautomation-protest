/// <reference types="Cypress" />
/// <reference types = "Cypress-iframe"/>

//----------------Imports---------------------------------------------------------------------
import { And, Then, When } from "@badeball/cypress-cucumber-preprocessor";
import 'cypress-iframe';
import transferToUnregistred from '../../../../../../../../support/pageObjects/TransferToUnregistered/transferToUnregistred';
import "../../../../../../../../support/Utils/generic";



//----------------Object Declaration----------------------------------------------------------

const transferToUnregistredPage = new transferToUnregistred()



//----------TC_153------------Transfer to Unregistered------To verify that system admin should able to do enquiry of transaction 
//for un registred subscibers Subscribers who doesn't exists in system-----------------

When('Click on Transfer to Unregistered Users', function () {
  transferToUnregistredPage.getTransferToUnregistred().scrollIntoView()
  transferToUnregistredPage.getTransferToUnregistred().click()
})

And('Transfer to Unregistered Select the service type', function () {
  cy.wait(3000)
  transferToUnregistredPage.getTransferToUnregistredServiceType().click()
  cy.intercept(this.data20.TransferToUnreg).as('ttusubmit')
  transferToUnregistredPage.getTransferToUnregistredSubmit().click({ force: true })
  cy.wait('@ttusubmit', { timeout: 30000 })
})
And('Transfer to Unregistered Enter subscriber Mobile number or transaction ID', function () {

  transferToUnregistredPage.getTransferToUnregisteredMSISDN().type(this.data18.msisdn.transfertoungegmsisdn, { force: true })
})

Then('Transfer to Unregistered Click on submit', function () {
  cy.intercept(this.data20.TransferToUnSubUp).as('ttusubmit1')
  transferToUnregistredPage.getTransferToUnregistredSubmitUpdate().click({ force: true })
  cy.wait('@ttusubmit1', { timeout: 30000 })
  transferToUnregistredPage.getAssertMessage().should('contains.text', this.data18.errorMessage + ' "P2P Unregistered"')
})
