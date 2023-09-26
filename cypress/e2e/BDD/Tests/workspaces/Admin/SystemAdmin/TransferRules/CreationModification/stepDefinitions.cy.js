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

//------------------------------------------------------------------------------
When('User Click on Transfer Rule.', function () {
  welcomePage.getTransferRuleOption().click()
  cy.intercept('/CoreWeb/trfrules/**').as('getTransferRulesPage')
  welcomePage.getTransferRule().click()
  cy.wait('@getTransferRulesPage')
  cy.wait(2000)
})
//---------------------------creation ---------------
And('Select the Service Name and from details.', function () {
  cy.wait(2000)
  transferrulepage.getServiceName().select(this.data13.TransferRuleData.servicename, { force: true })
  cy.intercept(this.data20.FromMFS).as('wallet')
  transferrulepage.getFromMFSProvider().select(this.data13.TransferRuleData.FromMFSprovider, { force: true })
  cy.wait('@wallet', { timeout: 30000 })
  cy.readFile(DataFile).then((data) => {
    let Domain = data.Domainname
    transferrulepage.getFromeDomain().select("Wholesaler", { force: true })
  })
  transferrulepage.getFromPaymentInstrument().select(this.data13.TransferRuleData.FromPaymentInstrument, { force: true })
  transferrulepage.getFromWallettype().select('SAVINGCLUB', { force: true })
})


And('Select the To details for Initiaion', function () {
  transferrulepage.getToMFSProvider().select(this.data13.TransferRuleData.ToMFSprovider, { force: true })
if(Cypress.env('subscriberNamedAs').includes('Subscriber')){
  transferrulepage.getToDomain().select("Subscriber", { force: true })
}
else{
  transferrulepage.getToDomain().select("Customer", { force: true })
}
   transferrulepage.getToPaymentInstrument().select(this.data13.TransferRuleData.ToPaymentInstrument, { force: true })
  transferrulepage.getToWallettype().select("SAVINGCLUB", { force: true })
  cy.intercept(this.data20.Submitbttn).as('transfersubmit')
  transferrulepage.getSubmitbttn().click()
  cy.wait('@transfersubmit', { timeout: 30000 })
  cy.wait(2000)
})


//-----------------------------------------------------------------------------------

And('Select the From & To category.', function () {
  cy.readFile(DataFile).then((data) => {
    let Domain = data.Domainname
    transferrulepage.getFromCategory().select("Wholesaler", { force: true })
  })
  if(Cypress.env('subscriberNamedAs').includes('Subscriber')){
    transferrulepage.getToCategory().select("Subscriber", { force: true })
    }
    else{
      transferrulepage.getToCategory().select("Customer", { force: true })
    }
})


When('Click on Add Transfer Rule button.', function () {
  cy.intercept(this.data20.AddToTransferb).as('addtransferrule')
  transferrulepage.getAddToTransferbttn().click()
  cy.wait('@addtransferrule', { timeout: 30000 })
  cy.wait(2000)
})

And('Select Status,Fixed Trf Level,Transfer type,Geographical Domain and Controlled Trf Level', function () {
  const uuid = () => Cypress._.random(1e3)
  transferrulepage.getStatus().select(this.data13.TransferRuleData.Status, { force: true })
  transferrulepage.getTransferType().select(this.data13.TransferRuleData.TransferType, { force: true })
  transferrulepage.getGeographicalDomain().select(this.data13.TransferRuleData.GeographicalDomain, { force: true })
})

Then('click on submit button.', function () {
 cy.intercept(this.data20.Submitbttn2).as('submittransferrule')
  transferrulepage.getSubmitbttn2().click()
  cy.wait('@submittransferrule',{timeout:30000})
  cy.wait(2000)
})
Then('Click on confirm button.', function () {
  cy.wait(3000)
  transferrulepage.getConfirmbttn().click()
cy.wait(2000)
})
Then('Verify initiate success Message', function () {
  cy.wait(2000)
  transferrulepage.getAssertMessage().contains(this.data13.SuccessMessage)
  transferrulepage.getAssertMessage().then((val) => {
    let q = val.text()
    cy.log(q)
    let a = q.split(':')
    let b = a[1].trim()
    cy.log(b)
    cy.readFile(DataFile).then((data) => {
      data.TransferRuleID = b
      cy.writeFile(DataFile, data)
    })
  })
})
Then('Verify Modify success Message', function () {
  cy.wait(2000)
  transferrulepage.getAssertMessage().then((val) => {
    let q = val.text()
    cy.log(q)
    let a = q.split(':')
    let b = a[1].trim()
    cy.log(b)
    cy.readFile(DataFile).then((data) => {
      data.TransferRuleID = b
      cy.writeFile(DataFile, data)
    })
  })
  transferrulepage.getAssertMessage().contains(this.data13.ModifyMessage)

})
Then('Verify Approval success Message', function () {
  cy.wait(2000)
  transferrulepage.getAssertMessage().contains('Transfer Rule is approved with ID')
})

//------------------------------------Testcase2--------------------------------------------------//
//----------------Modify--------------------------------------//
When('User clicks on edit option.', function () {
  cy.intercept(this.data20.EditOpt).as('edittransferrule')
  transferrulepage.getEditOption().click()
//   cy.wait('@edittransferrule', { timeout: 30000 })
  cy.wait(3000)
})

//----------------------------Transferrule approval----------------------------//
When('User clicks on transfer rule approval', function () {
  welcomePage.getTransferRuleOption().click()
  cy.intercept('/CoreWeb/trfrules/trfRulesApp_loadTransferRulesForApproval**').as('transferRuleApp')
  welcomePage.getTransferRuleApproval().click()
  cy.wait('@transferRuleApp')
  cy.wait(2000)
})
And('Select rule and approve', function () {
  cy.wait(2000)
  cy.get('.fd-page.iframeContainer.svelte-1v5e28n > iframe').then(($iframe) => {
    const $body = $iframe.contents().find('body')
    const $win = $iframe[0].contentWindow
    cy.stub($win, 'confirm', () => true)
      .as('windowConfirm')
    cy.stub($win.console, 'log').as('consoleLog')
    cy.wrap($body)
    cy.getTransferApproval()
  })
})
Then('click on submit', function () {
  
  cy.intercept(this.data20.SubmitbttnTRAP).as('trulesubmit')
  transferruleapprovalpage.getSubmitbttn().click()
  cy.wait('@trulesubmit', { timeout: 30000 })
  cy.wait(2000)
})

//-------------------O2C transfer rules--------------------------------------------//
When('User clicks on O2C transfer rules', function () {
  welcomePage.getTransferRuleOption().click()
  cy.intercept('/CoreWeb/trfrules/o2cTrf**').as('o2cTransferRule')
  welcomePage.getO2CTransferRule().click()
  cy.wait("@o2cTransferRule")
  cy.wait(2000)
})
And('Select Domain Name.', function () {
  
  cy.readFile(DataFile).then((data) => {
    let Domain = data.Domainname
    transferrulepageO2C.getDomainName().select("Wholesaler", { force: true })
  })
})
And('Select Category Name.', function () {
  cy.readFile(DataFile).then((data) => {
    let Category = data.CategoryName
    transferrulepageO2C.getCategoryName().select("Wholesaler", { force: true })
  })
})
And('Select MFS Provider,Payment Instrument.', function () {
  transferrulepageO2C.getMFSprovider().select(this.data13.O2CData.MFSProvider, { force: true })
  transferrulepageO2C.getPaymentInstrument().select(this.data13.O2CData.Payement, { force: true })
  transferrulepageO2C.getLinkedBank().select(this.data13.O2CData.LinkedBank, { force: true })
})

And('Click on submit O2C.', function () {
  cy.intercept(this.data20.SubmitbtnO2C).as('errortrule')
  transferrulepageO2C.getSubmitbtn().click()
  cy.wait('@errortrule', { timeout: 30000 })
  cy.wait(2000)
})

//-------------------------------------Narendra-----------------------------------------------

//------------------------------------TC_164----------------------------------------------

Then('Enter First Approval Limit amount', function () {
  transferrulepageO2C.getFirstApprovalLimit().type(this.data13.O2CData.FirstApproval, { force: true })
  transferrulepageO2C.getAmount().type(getRandomName(), { force: true })
})

And('confirm the displayed Error Message', function () {
  transferrulepage.getErrorMessage().should('contain', this.data13.O2CData.ErrorMessage)
})

And('Confirm the Error Message', function () {
  transferrulepage.getErrorMessage().should('have.text', this.data13.TransferRuleData.ErrorMessage) 
})
//------------Arpitha
And('Select the Service Name and from details for cash in.', function () {
  
  transferrulepage.getServiceName().select('Cash in', { force: true })
  cy.intercept(this.data20.FromMFS).as('wallet')
  transferrulepage.getFromMFSProvider().select(this.data13.TransferRuleData.FromMFSprovider, { force: true })
  cy.wait('@wallet', { timeout: 30000 })
  cy.readFile(DataFile).then((data) => {
    let Domain = data.Domainname
    transferrulepage.getFromeDomain().select("Merchant", { force: true })
  })
  transferrulepage.getFromPaymentInstrument().select(this.data13.TransferRuleData.FromPaymentInstrument, { force: true })
  transferrulepage.getFromWallettype().select('Normal', { force: true })
})

And('Select the To details for Initiaion for cash in', function () {
  transferrulepage.getToMFSProvider().select(this.data13.TransferRuleData.ToMFSprovider, { force: true })
  if(Cypress.env('subscriberNamedAs').includes('Subscriber')){
    transferrulepage.getToDomain().select("Subscriber", { force: true })
  }
  else{
    transferrulepage.getToDomain().select("Customer", { force: true })
  }
  transferrulepage.getToPaymentInstrument().select(this.data13.TransferRuleData.ToPaymentInstrument, { force: true })
  transferrulepage.getToWallettype().select("Normal", { force: true })
  cy.intercept(this.data20.Submitbttn).as('transfersubmit')
  transferrulepage.getSubmitbttn().click()
  cy.wait('@transfersubmit', { timeout: 30000 })
})

And('Select the From & To category for cash in.', function () {
  cy.readFile(DataFile).then((data) => {
    let Domain = data.Domainname
    transferrulepage.getFromCategory().select("Head Merchant", { force: true })
  })
  if(Cypress.env('subscriberNamedAs').includes('Subscriber')){
  transferrulepage.getToCategory().select("Subscriber", { force: true })
  }
  else{
    transferrulepage.getToCategory().select("Customer", { force: true })
  }
})

And('Select the Service Name and from details for cash out.', function () {
  
  transferrulepage.getServiceName().select('Cash Out', { force: true })
  cy.intercept(this.data20.FromMFS).as('wallet')
  transferrulepage.getFromMFSProvider().select(this.data13.TransferRuleData.FromMFSprovider, { force: true })
  cy.wait('@wallet', { timeout: 30000 })
  cy.readFile(DataFile).then((data) => {
    let Domain = data.Domainname
     if(Cypress.env('subscriberNamedAs').includes('Subscriber')){
  transferrulepage.getToCategory().select("Subscriber", { force: true })
  }
  else{
    transferrulepage.getToCategory().select("Customer", { force: true })
  }
  })
  transferrulepage.getFromPaymentInstrument().select(this.data13.TransferRuleData.FromPaymentInstrument, { force: true })
  transferrulepage.getFromWallettype().select('Normal', { force: true })
})
Then('clear the data',()=> {
  transferrulepage.getMinimumTransferAmount().clear()
  transferrulepage.getMaximumTransferAmount().clear()
  
  })
  And('enter the same data',()=>{
    transferrulepage.getMinimumTransferAmount().type(1)
    transferrulepage.getMaximumTransferAmount().type(11)
  })
  
  
And('Select the To details for Initiaion for cash out', function () {
  transferrulepage.getToMFSProvider().select(this.data13.TransferRuleData.ToMFSprovider, { force: true })
    transferrulepage.getToDomain().select("Merchant", { force: true })
  transferrulepage.getToPaymentInstrument().select(this.data13.TransferRuleData.ToPaymentInstrument, { force: true })
  transferrulepage.getToWallettype().select("Normal", { force: true })
  cy.intercept(this.data20.Submitbttn).as('transfersubmit')
  transferrulepage.getSubmitbttn().click()
  cy.wait('@transfersubmit', { timeout: 30000 })
  cy.wait(2000)
})