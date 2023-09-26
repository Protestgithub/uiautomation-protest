/// <reference types="Cypress" />
/// <reference types = "Cypress-iframe"/>

//----------------Imports---------------------------------------------------------------------
import { Given,And, Then, When } from "@badeball/cypress-cucumber-preprocessor";
import 'cypress-iframe';
import homePage from '../../../../../../../../support/pageObjects/homePage';

import Approval from '../../../../../../../../support/pageObjects/TransferRules/Approval';
import O2C from '../../../../../../../../support/pageObjects/TransferRules/O2C';
import loginPage from '../../../../../../../../support/pageObjects/loginPage'; 
import TransferRulePage from '../../../../../../../../support/pageObjects/TransferRules/TransferRulePage';
import "../../../../../../../../support/Utils/generic";


//----------------Object Declaration----------------------------------------------------------
const pageLogin = new loginPage()
const welcomePage = new homePage()
const transferrulepage = new TransferRulePage()
const transferruleapprovalpage = new Approval()
const transferrulepageO2C = new O2C()
var DataFile = "cypress/fixtures/userData/Domain&CAT.json"
let businesslogin="cypress/fixtures/userData/BusinessUsersData.json"

var name
//
function getRandomName() {
  name = "";
  var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
  for (var i = 0; i < 5; i++)
    name += possible.charAt(Math.floor(Math.random() * possible.length));
  return name;
}
And('Select To Domain', function () {
  transferrulepage.getToMFSProvider().select(this.data13.TransferRuleData.ToMFSprovider, { force: true })
  if(Cypress.env('subscriberNamedAs').includes('Subscriber')){
    transferrulepage.getToDomain().select("Subscriber", { force: true })
  }
  else{
    transferrulepage.getToDomain().select("Customer", { force: true })
  }
})

And('Select To Domain and To PaymentInstrument', function () {
  transferrulepage.getToMFSProvider().select(this.data13.TransferRuleData.ToMFSprovider, { force: true })
  if(Cypress.env('subscriberNamedAs').includes('Subscriber')){
    transferrulepage.getToDomain().select("Subscriber", { force: true })
  }
  else{
    transferrulepage.getToDomain().select("Customer", { force: true })
  }
  transferrulepage.getToPaymentInstrument().select(this.data13.TransferRuleData.ToPaymentInstrument, { force: true })
})

//----------------------------------------
Given("Log in with corporate User Credential", function () {
  cy.launchURL(Cypress.env("Adminurl"));
  cy.launchbusinessURL(Cypress.env("Adminurl"));
  ;
  cy.frameLoaded(pageLogin.getiFrame());
  cy.readFile(businesslogin).then((data) => {
    let loginID = data.CorporateLoginId;
    cy.login(loginID, this.data1.businessAdmin.businessadminPwd1);
  });
});
And("Check for Transfer Rules Initiation", function () {
  
//   BulkUploadPage.getTransferRulesTab().should("not.exist");
});