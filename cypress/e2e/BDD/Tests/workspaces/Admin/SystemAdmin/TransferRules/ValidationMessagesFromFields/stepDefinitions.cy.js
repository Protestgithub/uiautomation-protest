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
//
function getRandomName() {
  name = "";
  var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
  for (var i = 0; i < 5; i++)
    name += possible.charAt(Math.floor(Math.random() * possible.length));
  return name;
}

  And("Select fields", function () {
    ;
    transferrulepage.getiframeTransferpage().should("be.visible");
  })

  And("Select Service Name", function () {
    
    transferrulepage.getServiceName().select(this.data13.TransferRuleData.servicename, { force: true })
  })

  And("Select Service Name and MFS Provider", function () {
    
    transferrulepage.getServiceName().select(this.data13.TransferRuleData.servicename, { force: true })
  cy.intercept(this.data20.FromMFS).as('wallet')
  transferrulepage.getFromMFSProvider().select(this.data13.TransferRuleData.FromMFSprovider, { force: true })
  cy.wait('@wallet', { timeout: 30000 })
  })

  And("Select Service Name, MFS Provider and Domain", function () {
    
    transferrulepage.getServiceName().select(this.data13.TransferRuleData.servicename, { force: true })
    cy.intercept(this.data20.FromMFS).as('wallet')
    transferrulepage.getFromMFSProvider().select(this.data13.TransferRuleData.FromMFSprovider, { force: true })
    cy.wait('@wallet', { timeout: 30000 })
    cy.readFile(DataFile).then((data) => {
      let Domain = data.Domainname
      transferrulepage.getFromeDomain().select("Wholesaler", { force: true })
    })
  })

  And("Select Service Name, MFS Provider, Domain and Instrument", function () {
    
    transferrulepage.getServiceName().select(this.data13.TransferRuleData.servicename, { force: true })
    cy.intercept(this.data20.FromMFS).as('wallet')
    transferrulepage.getFromMFSProvider().select(this.data13.TransferRuleData.FromMFSprovider, { force: true })
    cy.wait('@wallet', { timeout: 30000 })
    cy.readFile(DataFile).then((data) => {
      let Domain = data.Domainname
      transferrulepage.getFromeDomain().select("Wholesaler", { force: true })
    })
    transferrulepage.getFromPaymentInstrument().select(this.data13.TransferRuleData.FromPaymentInstrument, { force: true })
  })

  Then("Click on submit button for validation", function () {
    transferrulepage.getSubmitbttn().click();
  });
  And("Verify the mandatory error message", function () {
    cy.wait(2000)
    transferrulepage.getErrorMessage().contains("mandatory")
  })
//----------------------------------------------------------------------
And( "Verify the error message for Payment Instrument and Wallet Type",
  function () {
  cy.wait(2000)
  transferrulepage.getErrorMessage().contains("mandatory");
  }
);