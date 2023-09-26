/// <reference types="Cypress" />
/// <reference types = "Cypress-iframe"/>

//----------------Imports---------------------------------------------------------------------
import { And, Then, When } from "@badeball/cypress-cucumber-preprocessor";
import 'cypress-iframe';
import homePage from '../../../../../../../../support/pageObjects/homePage';
import Approval from '../../../../../../../../support/pageObjects/TransferRules/Approval';
import O2C from '../../../../../../../../support/pageObjects/TransferRules/O2C';
import TransferRulePage from '../../../../../../../../support/pageObjects/TransferRules/TransferRulePage';
import "../../../../../../../../support/Utils/generic";


//----------------Object Declaration----------------------------------------------------------

const welcomePage = new homePage()
const transferrulepage = new TransferRulePage()
const transferruleapprovalpage = new Approval()
const transferrulepageO2C = new O2C()
var DataFile = "cypress/fixtures/userData/Domain&CAT.json"
var name

//-------------------------------------------------------------
function getRandomName() {
  name = "";
  var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
  for (var i = 0; i < 5; i++)
    name += possible.charAt(Math.floor(Math.random() * possible.length));
  return name;
}

//----------------Test Scripts---------------------------------------------------------------


//------------Creation of new Transfer Rule----------------------------

And('Select the Service Name and from details for new rule', function () {
  
  transferrulepage.getServiceName().select(this.data13.TransferRuleData.servicename, { force: true })
  transferrulepage.getFromMFSProvider().select(this.data13.TransferRuleData.FromMFSprovider, { force: true })
 
  cy.readFile(DataFile).then((data) => {
    let Domain = data.Domainname
    transferrulepage.getFromeDomain().select("Merchant", { force: true })
  })
  transferrulepage.getFromPaymentInstrument().select(this.data13.TransferRuleData.FromPaymentInstrument, { force: true })
  transferrulepage.getFromWallettype().select('SAVINGCLUB', { force: true })
})

And('Select the From & To category for Reject', function () {
  cy.readFile(DataFile).then((data) => {
    let Domain = data.Domainname
    transferrulepage.getFromCategory().select("Merchant", { force: true })
  })
  if(Cypress.env('subscriberNamedAs').includes('Subscriber')){
    transferrulepage.getToCategory().select("Subscriber", { force: true })
    }
    else{
      transferrulepage.getToCategory().select("Customer", { force: true })
    }
})



And('Select initiated rule and Reject', function () {
  
  cy.get('.fd-page.iframeContainer.svelte-1v5e28n > iframe').then(($iframe) => {
    const $body = $iframe.contents().find('body')
    const $win = $iframe[0].contentWindow
    cy.stub($win, 'confirm', () => true)
      .as('windowConfirm')
    cy.stub($win.console, 'log').as('consoleLog')
    cy.wrap($body)
    cy.getinitiateTransferReject()
  })
})

When('User clicks on transfer rule approval for Rejection', function () {
  cy.intercept('/CoreWeb/trfrules/trfRulesApp_loadTransferRulesForApproval**').as('transferRuleApp')
  welcomePage.getTransferRuleApproval().click()
  cy.wait('@transferRuleApp',{timeout:30000})
  cy.wait(2000)
})
And('Select rule and Reject', function () {
  
  cy.get('.fd-page.iframeContainer.svelte-1v5e28n > iframe').then(($iframe) => {
    const $body = $iframe.contents().find('body')
    const $win = $iframe[0].contentWindow
    cy.stub($win, 'confirm', () => true)
      .as('windowConfirm')
    cy.stub($win.console, 'log').as('consoleLog')
    cy.wrap($body)
    cy.getTransferReject()
  })
})

Then('Verify Reject success Message', function () {
  transferrulepage.getAssertMessage().contains('Transfer Rule Request is Rejected with Id')
})
