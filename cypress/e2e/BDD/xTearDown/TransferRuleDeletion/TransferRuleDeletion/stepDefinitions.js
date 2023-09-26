/// <reference types="Cypress" />
/// <reference types = "Cypress-iframe"/>

//----------------Imports---------------------------------------------------------------------
import { And, Then } from "@badeball/cypress-cucumber-preprocessor";
import 'cypress-iframe';
import homePage from '../../../../../support/pageObjects/homePage';

import Approval from '../../../../../support/pageObjects/TransferRules/Approval';
import O2C from '../../../../../support/pageObjects/TransferRules/O2C';
import TransferRulePage from '../../../../../support/pageObjects/TransferRules/TransferRulePage';
import "../../../../../support/Utils/generic";


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

//----------------BDD Hooks-----------------------------------------------------------------



//----------------Test Scripts---------------------------------------------------------------

//---------------------------------------------System Admin Login----------------------------
// Given('Login into Mobiquity Portal as System admin Maker', function () {
//     cy.launchURL(Cypress.env('Adminurl'))
//     cy.SysAdminlogin()
//     cy.fixture('userData/SystemAdminLogin.json').then((data)=>{
//       let Name = data.SysAdminMakerName
//       //cy.checkWelcomeText(Name)
//     })
// })
// Given('Login into Mobiquity Portal as System admin Checker1', function () {
//   cy.launchURL(Cypress.env('Adminurl'))
//   cy.SysAdminlogin2()
//   cy.fixture('userData/SystemAdminLogin.json').then((data)=>{
//     let Name = data.SysAdminChecker1Name
//    // cy.checkWelcomeText(Name)
//   })
// })
// When('User Click on Transfer Rule.', function () {
//     welcomePage.getTransferRuleOption().click()
//     //cy.intercept('/CoreWeb/trfrules/trSelect_loadTransferRules.action').as('transRule')
//     welcomePage.getTransferRule().click()
//     //cy.wait('@transRule')
//   })


//---------------------------creation ---------------
And('Select the Service Name and from Details for Transfer to Bank', function () {
  
  transferrulepage.getServiceName().select(this.data13.TransferRuleDataCreation.servicename1, { force: true })
  cy.intercept(this.data20.FromMFSPro).as('wallet')
  transferrulepage.getFromMFSProvider().select(this.data13.TransferRuleDataCreation.FromMFSprovider, { force: true })
  cy.wait('@wallet', { timeout: 30000 })
  transferrulepage.getFromeDomain().select(this.data13.TransferRuleDataCreation.FromDomain, { force: true })
  transferrulepage.getFromPaymentInstrument().select(this.data13.TransferRuleDataCreation.FromPaymentInstrument, { force: true })
  transferrulepage.getFromWallettype().select(this.data13.TransferRuleDataCreation.FromWallet, { force: true })
})


And('Select the To details for Transfer to Bank', function () {
  transferrulepage.getToMFSProvider().select(this.data13.TransferRuleDataCreation.ToMFSprovider, { force: true })
  cy.readFile(DataFile).then((data) => {
    let Domain = data.Domainname
    transferrulepage.getToDomain().select(Domain, { force: true })
  })
  transferrulepage.getToPaymentInstrument().select(this.data13.TransferRuleDataCreation.ToPaymentInstrument, { force: true })
  transferrulepage.getToWallettype().select(this.data13.TransferRuleDataCreation.ToWallet1, { force: true })
  cy.intercept(this.data20.SubmitbttnTransf).as('transfersubmit')
  transferrulepage.getSubmitbttn().click()
  cy.wait('@transfersubmit', { timeout: 30000 })
})

//-----------------------------------------------------------------------------------

// And('Select the From & To category.', function () { 
//   cy.readFile(DataFile).then((data) => {
//     let Domain = data.Domainname
//     transferrulepage.getFromCategory().select(Domain, { force: true })
//   })
//   transferrulepage.getToCategory().select(this.data13.TransferRuleData.ToCategory, { force: true })
// })

And('Select the From & To category for Transfer to Bank', function () {
  transferrulepage.getFromCategory().select(this.data13.TransferRuleData.FromCategory, { force: true })
  cy.readFile(DataFile).then((data) => {
    let Domain = data.Domainname
    transferrulepage.getToCategory().select(Domain, { force: true })
  })
})

//-----------------------------------------delete------------------------------//
// When('User clicks on Delete option.', function () {
//   transferrulepage.getDeleteoption().click()
//   cy.on('window:confirm', function () {
//     return true
//   })
// })
Then('Verify Delete initiate Message1', function () {
  
  transferrulepage.getAssertMessage().contains(this.data13.DeleteMessage)
})
// Then('Logout', function () {
//   welcomePage.getUserMenu().click()
//   welcomePage.getLogoutButton().click()
//   welcomePage.getLogoutYesButton().click()
// })

// Given('Login into Mobiquity Portal as System admin Checker1', function () {
//   cy.launchURL(Cypress.env('Adminurl'))
//   cy.SysAdminlogin2()
//   cy.fixture('userData/SystemAdminLogin.json').then((data)=>{
//     let Name = data.SysAdminChecker1Name
//     cy.checkWelcomeText(Name)
//   })
// })
//----------------------------Transferrule approval----------------------------//
// When('User clicks on transfer rule approval', function () {
//   welcomePage.getTransferRuleOption().click()
//   welcomePage.getTransferRuleApproval().click()
// })
// And('Select rule and approve', function () {
//   
//   cy.get('.fd-page.iframeContainer.svelte-1v5e28n > iframe').then(($iframe) => {
//     const $body = $iframe.contents().find('body')
//     const $win = $iframe[0].contentWindow
//     cy.stub($win, 'confirm', () => true)
//       .as('windowConfirm')
//     cy.stub($win.console, 'log').as('consoleLog')
//     cy.wrap($body)
//     cy.getTransferApproval()
//   })
// })
Then('Verify Delete Approval Message', function () {
  
  transferrulepage.getAssertMessage().contains('Transfer Rule successfully deleted with ID')
})
Then('Click on submit button.', function () {
  
  //intercept(this.data20.Submitbttn2).as('submittransferrule')
  transferrulepage.getSubmitbttn2().click()
  //cy.wait('@submittransferrule')
})

And('Click on submit.', function () {
  cy.intercept(this.data20.SubmitBTN).as('errortrule')
  transferrulepageO2C.getSubmitbtn().click()
  cy.wait('@errortrule', { timeout: 60000 })
})