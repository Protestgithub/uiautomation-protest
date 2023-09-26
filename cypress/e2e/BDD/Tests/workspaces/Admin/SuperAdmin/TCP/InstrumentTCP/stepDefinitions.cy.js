/// <reference types="Cypress" />
/// <reference types = "Cypress-iframe"/>
import 'cypress-iframe'
import { Given, When, Then, And, Before } from "@badeball/cypress-cucumber-preprocessor";
import "../../../../../../../../support/Utils/generic";
import "../../../../../../../../support/Utils/TransferControlProfileCommand";
import TransferControlProfile from '../../../../../../../../support/pageObjects/TransferControlProfile';

const filenameTCP = 'userData/TCPdata.json'
const tcpPage = new TransferControlProfile()
var Tcpname
//----------------------------------------------------------------------------
//----------------------Added on 30/06/23----------------------------------------


// When('Navigate to Transfer Control Profile to View Details', function () {
//   welcomePage.getTransferControlProfileSA().click()
//   
//   cy.TcpName1()
//   cy.ViewDetails(Tcpname1)
//   cy.log(Tcpname1)
//   tcpPage.getback().contains("Back").click({ force: true })
// })



// to check merge conflicts--30/06/2023
Then('Verify Error Message for Provider', function () {
  if(Cypress.env('subscriberNamedAs').includes('Subscriber')){
    //check on merge fixes
  tcpPage.geterror().should("contain", "required")
  }
  else{cy.log("New UI TCP") } 
})

Then('Verify Error Message for Domain', function () {
  if(Cypress.env('subscriberNamedAs').includes('Subscriber')){
  tcpPage.geterror().should("contain", "required")
}
else{cy.log("New UI TCP") } 
})

Then('Enter required Fields for error message', function () {
  if(Cypress.env('subscriberNamedAs').includes('Subscriber')){
  tcpPage.getprovider().select(this.data5.TransferControlProfile.Provider, { force: true })
  tcpPage.getdomain().select(this.data5.TransferControlProfile.Domain, { force: true })
  tcpPage.getcategory().select(this.data5.TransferControlProfile.Category, { force: true })
  tcpPage.getgrade().select(this.data5.TransferControlProfile.Grade, { force: true })
  tcpPage.getpaymentinstrument().select(this.data5.TransferControlProfile.PaymentInstrument, { force: true })
  tcpPage.getwallettype().select(this.data5.TransferControlProfile.Wallet, { force: true })
  cy.fixture(filenameTCP).then((user) => {
    Tcpname = user.TcpProfileName
    cy.log(Tcpname)
    tcpPage.getprofilename().type(Tcpname)
  })
  tcpPage.getdescription().type(this.data5.TransferControlProfile.Description)
}
else{cy.log("New UI TCP") } 
})



Then('Verify Error Message', function () {
  if(Cypress.env('subscriberNamedAs').includes('Subscriber')){
  tcpPage.getErrorMessage().should("contain", this.data5.confimationMessage.ErrorMessageApproval)
}
else{cy.log("New UI TCP") } 
})


Then('Click on delete icon', function () {

  if(Cypress.env('subscriberNamedAs').includes('Subscriber')){
  cy.TcpName()
  cy.fixture(filenameTCP).then((user) => {
    Tcpname = user.TcpProfileName
  cy.DeleteDetails1(Tcpname)

})
}
else{cy.log("New UI TCP") } 
})


Then('Verify Error Message for deletion', function () {
  if(Cypress.env('subscriberNamedAs').includes('Subscriber')){
  cy.fixture(filenameTCP).then((user) => {
    Tcpname = user.TcpProfileName
    cy.log(Tcpname)

  tcpPage.getsucessmessage().should("contain", this.data5.confimationMessage.Deletesuccess)
})
}
else{cy.log("New UI TCP") } 
})

Then('Verify the deletion Request message', function () {
  if(Cypress.env('subscriberNamedAs').includes('Subscriber')){
  cy.TcpName()
  tcpPage.getSuccess().should("contain", this.data5.confimationMessage.deleteapproval1)
}
else{cy.log("New UI TCP") } 
})
//---------------------------------------Added to check merge conflicts-----------------------------------------

