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

//----------------Test Scripts---------------------------------------------------------------


//----------------------------------------------------------------------------------------------------

// When('User Click on Transfer Rule.', function () {
//   welcomePage.getTransferRuleOption().click()
//   cy.intercept('/CoreWeb/trfrules/**').as('getTransferRulesPage')
//   welcomePage.getTransferRule().click() 
//   cy.wait('@getTransferRulesPage',{timeout:60000}) 
// })
//---------------------------creation ---------------
// And('Select the Service Name and from details.', function () {
//   
//   transferrulepage.getServiceName().select(this.data13.TransferRuleData.servicename, { force: true })
//   cy.intercept(this.data20.MFSProvid).as('wallet')
//   transferrulepage.getFromMFSProvider().select(this.data13.TransferRuleData.FromMFSprovider, { force: true })
//   cy.wait('@wallet',{timeout:60000})
//   cy.readFile(DataFile).then((data) => {
//     let Domain = data.Domainname
//     transferrulepage.getFromeDomain().select("Wholesaler", { force: true })
//   })
//   transferrulepage.getFromPaymentInstrument().select(this.data13.TransferRuleData.FromPaymentInstrument, { force: true })
//   transferrulepage.getFromWallettype().select('SAVINGCLUB', { force: true })
// })


// And('Select the To details for Initiaion', function () {
//   transferrulepage.getToMFSProvider().select(this.data13.TransferRuleData.ToMFSprovider, { force: true })
//   transferrulepage.getToDomain().select("Subscriber", { force: true })
//   transferrulepage.getToPaymentInstrument().select(this.data13.TransferRuleData.ToPaymentInstrument, { force: true })
//   transferrulepage.getToWallettype().select("SAVINGCLUB", { force: true })
//   cy.intercept(this.data20.TransfSubmitbtn).as('transfersubmit')
//   transferrulepage.getSubmitbttn().click()
//   cy.wait('@transfersubmit',{timeout:60000})
// })

// And('Select the Service Name and from Details for Transfer to Bank', function () {
//   
//   transferrulepage.getServiceName().select(this.data13.TransferRuleDataCreation.servicename1, { force: true })
//   cy.intercept(this.data20.FromMFSPro).as('wallet')
//   transferrulepage.getFromMFSProvider().select(this.data13.TransferRuleDataCreation.FromMFSprovider, { force: true })
//   cy.wait('@wallet',{timeout:60000})
//   transferrulepage.getFromeDomain().select(this.data13.TransferRuleDataCreation.FromDomain, { force: true })
//   transferrulepage.getFromPaymentInstrument().select(this.data13.TransferRuleDataCreation.FromPaymentInstrument, { force: true })
//   transferrulepage.getFromWallettype().select(this.data13.TransferRuleDataCreation.FromWallet, { force: true })
// })


// And('Select the To details for Transfer to Bank', function () {
//   transferrulepage.getToMFSProvider().select(this.data13.TransferRuleDataCreation.ToMFSprovider, { force: true })
//   cy.readFile(DataFile).then((data) => {
//     let Domain = data.Domainname
//     transferrulepage.getToDomain().select(Domain, { force: true })
//   })
//   transferrulepage.getToPaymentInstrument().select(this.data13.TransferRuleDataCreation.ToPaymentInstrument, { force: true })
//   transferrulepage.getToWallettype().select(this.data13.TransferRuleDataCreation.ToWallet1, { force: true })
//   cy.intercept(this.data20.SubmitbttnTransf).as('transfersubmit')
//   transferrulepage.getSubmitbttn().click()
//   cy.wait('@transfersubmit',{timeout:60000})
// })

//-----------------------------------------------------------------------------------

// And('Select the From & To category.', function () { 
//   cy.readFile(DataFile).then((data) => {
//     let Domain = data.Domainname
//     transferrulepage.getFromCategory().select("Wholesaler", { force: true })
//   })
//   transferrulepage.getToCategory().select("Subscriber", { force: true })
// })

And('Select the From & To category for Transfer to Bank', function () {
  transferrulepage.getFromCategory().select(this.data13.TransferRuleData.FromCategory, { force: true })
  cy.readFile(DataFile).then((data) => {
    let Domain = data.Domainname
    transferrulepage.getToCategory().select(Domain, { force: true })
  })
})

// When('Click on Add Transfer Rule button.', function () {
//   cy.intercept(this.data20.AddToTransf).as('addtransferrule')
//   transferrulepage.getAddToTransferbttn().click()
//   cy.wait('@addtransferrule',{timeout:60000})
// })

And('Select Status,Fixed Trf Level,Transfer type,Geographical Domain and Controlled Trf Level 1', function () {
  const uuid = () => Cypress._.random(1e3)
  const uuid1 = () => Cypress._.random(1e4)
  MinimumTransferAmount = uuid()
  MaximumTransferAmount = uuid1()
  let MinimumTransferAmount, MaximumTransferAmount
  transferrulepage.getStatus().select(this.data13.TransferRuleData.Status, { force: true })
  transferrulepage.getTransferType().select(this.data13.TransferRuleData.TransferType, { force: true })
  transferrulepage.getGeographicalDomain().select(this.data13.TransferRuleData.GeographicalDomain, { force: true })
  // transferrulepage.getMinimumTransferAmount().type(MinimumTransferAmount, { force: true })
  // transferrulepage.getMaximumTransferAmount().type(MaximumTransferAmount, { force: true })
})

// Then('Click on submit button.', function () {
//   cy.intercept(this.data20.SubmitbttnTransf2).as('submittransferrule')
//    transferrulepage.getSubmitbttn2().click()
//    cy.wait('@submittransferrule',{timeout:60000})
//  })
Then('Click on confirm button Suspend Transfer Rule.', function () {
  cy.wait(2000)
  transferrulepage.getConfirmbttn().click()
  cy.wait(2000)
  transferrulepage.getAssertMessage()
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

//---------------------------------------------------------------------------------------


Then('Verify Delete initiate Message', function () {
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
  // transferrulepage.getAssertMessage().contains('Transfer Rule successfully delete initiated with ID')
})
Then('Verify Delete Approval Message', function () {
  cy.wait(2000)
  transferrulepage.getAssertMessage().contains('Transfer Rule successfully deleted with ID')
})

// Then('Verify Approval success Message', function () {
//   
//   transferrulepage.getAssertMessage().contains('Transfer Rule is approved with ID')

// })
Then('Verify O2C Transfer rule success Message', function () {
  // transferrulepage.getAssertMessage().should('contain', 'Transfer rule successfully defined')
})
Then('Verify initiate success Message for Transfer to Bank', function () {
  cy.wait(2000)
  transferrulepage.getAssertMessage().contains(this.data13.SuccessMessage)
})

//------------------------------------Testcase2--------------------------------------------------//
//----------------Modify--------------------------------------//
// When('User clicks on edit option.', function () {
//   cy.intercept(this.data20.EditOption).as('edittransferrule')
//   transferrulepage.getEditOption().click()
//   cy.wait('@edittransferrule',{timeout:60000})
// })

// --------------------------------------view-------------------------------//
When('User clicks on view option.', function () {
  cy.intercept(this.data20.ViewOption).as('viewtransferrule')
  transferrulepage.getViewOption().click()
  cy.wait('@viewtransferrule', { timeout: 60000 })
  transferrulepage.getBackbttn().click({ force: true })
  cy.wait(2000)
})
//-----------------------------------------delete------------------------------//
When('User clicks on Delete option.', function () {
  transferrulepage.getDeleteoption().click()
  cy.on('window:confirm', function () {
    return true
  })
  cy.wait(2000)
})
//----------------------------suspend-----------------------------//


And('Suspend the status in transfer rule', function () {
  transferrulepage.getStatus().select(this.data13.TransferRuleData.Status1, { force: true })
  transferrulepage.getTransferType().select(this.data13.TransferRuleData.TransferType, { force: true })
  transferrulepage.getGeographicalDomain().select(this.data13.TransferRuleData.GeographicalDomain, { force: true })
})

//----------------------------Transferrule approval----------------------------//
// When('User clicks on transfer rule approval', function () {
//   welcomePage.getTransferRuleOption().click()
//   cy.intercept('/CoreWeb/trfrules/trfRulesApp_loadTransferRulesForApproval**').as('transferRuleApp')
//   welcomePage.getTransferRuleApproval().click()
//   cy.wait('@transferRuleApp',{timeout:60000})
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
// Then('click on submit', function () {
//   
//   transferruleapprovalpage.getSubmitbttn().click()
// })

//-------------------O2C transfer rules--------------------------------------------//
// When('User clicks on O2C transfer rules', function () {
//   welcomePage.getTransferRuleOption().click()
//   cy.intercept('/CoreWeb/trfrules/o2cTrf**').as('o2cTransferRule')
//   welcomePage.getO2CTransferRule().click()
//   cy.wait("@o2cTransferRule")
// })
And('Select Wholesaler Domain Name.', function () {
  
  cy.readFile(DataFile).then((data) => {
    let Domain = data.Domainname
    transferrulepageO2C.getDomainName().select("Wholesaler", { force: true })
  })
})
And('Select Wholesaler Category Name.', function () {
  cy.readFile(DataFile).then((data) => {
    let Category = data.CategoryName
    transferrulepageO2C.getCategoryName().select("Wholesaler", { force: true })
  })
    transferrulepageO2C.getLinkedBank().select(this.data13.O2CData.LinkedBank, { force: true })

})
// And('Select MFS Provider,Payment Instrument.', function () {
//   transferrulepageO2C.getMFSprovider().select(this.data13.O2CData.MFSProvider, { force: true })
//   transferrulepageO2C.getPaymentInstrument().select(this.data13.O2CData.Payement, { force: true })
//   transferrulepageO2C.getLinkedBank().select(this.data13.O2CData.LinkedBank, { force: true })
// })
Then('Enter First Approval Limit.', function () {
  transferrulepageO2C.getFirstApprovalLimit().type(this.data13.O2CData.FirstApproval, { force: true })
})
// And('Click on submit O2C.', function () {
//   cy.intercept(this.data20.SubmitBTN).as('errortrule')
//   transferrulepageO2C.getSubmitbtn().click()
//   cy.wait('@errortrule',{timeout:60000})
// })
And('Click on confirm.', function () {
  // cy.intercept(this.data20.confirmbtn).as('confirmo2c')
  transferrulepageO2C.getconfirmbtn().click()
  cy.wait(2000)
  // cy.wait('@confirmo2c',{timeout:60000})
})

//------------------------------------TC_164----------------------------------------------

Then('Enter First Approval Limit', function () {
  transferrulepageO2C.getFirstApprovalLimit().type(this.data13.O2CData.FirstApproval, { force: true })
  transferrulepageO2C.getAmount().type(getRandomName(), { force: true })
})


