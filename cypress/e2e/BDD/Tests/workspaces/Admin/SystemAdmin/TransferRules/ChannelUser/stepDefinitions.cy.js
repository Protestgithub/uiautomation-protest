/// <reference types="cypress" />
/// <reference types = "Cypress-iframe"/>
//----------------Imports---------------------------------------------------------------------

import 'cypress-iframe'
import { Given, When, Then, And, Before } from "@badeball/cypress-cucumber-preprocessor";
import loginPage from '../../../../../../../../support/pageObjects/loginPage';
import homePage from '../../../../../../../../support/pageObjects/homePage';
import "../../../../../../../../support/Utils/generic";
import TransferRulePage from '../../../../../../../../support/pageObjects/TransferRules/TransferRulePage.js';
import Approval from '../../../../../../../../support/pageObjects/TransferRules/Approval.js';
import ChanneltoChannel from '../../../../../../../../support/pageObjects/ChanneltoChannel/ChanneltoChannel.js';

//----------------Object Declaration-----------------------------------------------------------------

const welcomePage = new homePage()
const C2C = new ChanneltoChannel()
const transferrulepage = new TransferRulePage()
const transferruleapprovalpage = new Approval()
const pageLogin = new loginPage()
var BusinessReg = 'cypress/fixtures/userData/BusinessUsersData.json'
var BusinessO2CReg = 'cypress/fixtures/userData/BusinessUsersDataO2C.json'
var DataFile = "cypress/fixtures/userData/Domain&CAT.json"
var count = 0
var count1 = 0
//---------------------------creation ---------------
And('Select the Service Name and from details for C2C', function () {
    
    transferrulepage.getServiceName().select(this.data13.TransferRuleForC2C.Servicename, { force: true })
    
    //cy.mfsprovider()
    transferrulepage.getFromMFSProvider().select(this.data13.TransferRuleForC2C.FromMFSprovider, { force: true })
    

    transferrulepage.getFromeDomain().select(this.data13.TransferRuleForC2C.FromDomain, { force: true })

    transferrulepage.getFromPaymentInstrument().select(this.data13.TransferRuleForC2C.FromPaymentInstrument, { force: true })
    transferrulepage.getFromWallettype().select(this.data13.TransferRuleForC2C.FromWallet, { force: true })
})
And('Select the Service Name and from details for Inverse C2C', function () {
    
    transferrulepage.getServiceName().select(this.data13.TransferRuleForC2C.Servicename1, { force: true })
    
    //cy.mfsprovider()
    transferrulepage.getFromMFSProvider().select(this.data13.TransferRuleForC2C.FromMFSprovider, { force: true })
    transferrulepage.getFromeDomain().select(this.data13.TransferRuleForC2C.FromDomain, { force: true })

    transferrulepage.getFromPaymentInstrument().select(this.data13.TransferRuleForC2C.FromPaymentInstrument, { force: true })
    cy.wait(2000)
    transferrulepage.getFromWallettype().select(this.data13.TransferRuleForC2C.Towallet2, { force: true })
})
And('Select the Service Name and from details for Inverse C2C1', function () {
    
    transferrulepage.getServiceName().select(this.data13.TransferRuleForC2C.Servicename1, { force: true })
    
    //cy.mfsprovider()
    transferrulepage.getFromMFSProvider().select(this.data13.TransferRuleForC2C.FromMFSprovider, { force: true })
    transferrulepage.getFromeDomain().select(this.data13.TransferRuleForC2C.FromDomain, { force: true })
    transferrulepage.getFromPaymentInstrument().select(this.data13.TransferRuleForC2C.FromPaymentInstrument, { force: true })
    cy.wait(2000)
    transferrulepage.getFromWallettype().select(this.data13.TransferRuleForC2C.Towallet1, { force: true })
   })


And('Select the To details for Initiaion for C2C', function () {
    
    transferrulepage.getToMFSProvider().select(this.data13.TransferRuleForC2C.ToMFSprovider, { force: true })
    transferrulepage.getToDomain().select(this.data13.TransferRuleForC2C.ToDomain, { force: true })
    transferrulepage.getToPaymentInstrument().select(this.data13.TransferRuleForC2C.ToPaymentInstrument, { force: true })
    transferrulepage.getToWallettype().select(this.data13.TransferRuleForC2C.ToWallet, { force: true })
    transferrulepage.getSubmitbttn().click()
    
})

And('Select the To details for Initiaion for C2C1', function () {
    
    transferrulepage.getToMFSProvider().select(this.data13.TransferRuleForC2C.ToMFSprovider, { force: true })
    transferrulepage.getToDomain().select(this.data13.TransferRuleForC2C.ToDomain, { force: true })
    transferrulepage.getToPaymentInstrument().select(this.data13.TransferRuleForC2C.ToPaymentInstrument, { force: true })
    transferrulepage.getToWallettype().select(this.data13.TransferRuleForC2C.Towallet1, { force: true })
    transferrulepage.getSubmitbttn().click()
    
})

And('Select the To details for Initiaion for Inverse C2C', function () {
    
    transferrulepage.getToMFSProvider().select(this.data13.TransferRuleForC2C.ToMFSprovider, { force: true })
    transferrulepage.getToDomain().select(this.data13.TransferRuleForC2C.ToDomain, { force: true })
    transferrulepage.getToPaymentInstrument().select(this.data13.TransferRuleForC2C.ToPaymentInstrument, { force: true })
    transferrulepage.getToWallettype().select(this.data13.TransferRuleForC2C.FromWallet, { force: true })
    transferrulepage.getSubmitbttn().click()
    
})

And('Click on Add Transfer Rule button for C2C', function () {
    
    transferrulepage.getAddToTransferbttn().click()
    
    cy.iframe().find("div#page.container").then(($body) => {
        //   // synchronously query for element
        let a = $body.text()
        //let b = $body.find(".errorMessage").length
        cy.log(a)
        // cy.log(b)
        if (a.includes('Please provide the details:')) {
            transferrulepage.getStatus().select(this.data13.TransferRuleForC2C.Status, { force: true })
            transferrulepage.getTransferType().select(this.data13.TransferRuleForC2C.TransferType, { force: true })
            transferrulepage.getGeographicalDomain().select(this.data13.TransferRuleForC2C.GeographicalDomain, { force: true })
            transferrulepage.getDirectTransferAllowed().check()
            transferrulepage.getBypassAllowed().check()
            
            transferrulepage.getSubmitbttn2().click()
            cy.wait(2000)
            transferrulepage.getConfirmbttn().click()
            cy.wait(2000)
            transferrulepage.getAssertMessage().should('be.visible')
            cy.wait(2000)
            transferrulepage.getAssertMessage().then((val) => {
              let q = val.text()
              cy.log(q)
              let a = q.split(':')
              let b = a[1].trim()
              cy.log(b)
              cy.readFile(DataFile).then((data) => {
                data.TransferRuleIDC2C = b
                cy.writeFile(DataFile, data)
              })
            })
        }
        else {
            count=1
            cy.wait(2000)
            transferrulepage.getErrorMessage().contains("already")
        }
    })

})


And('Click on Add Transfer Rule button for C2C1' ,function(){
    
    transferrulepage.getAddToTransferbttn().click()
    
    cy.iframe().find("div#page.container").then(($body) => {
        //   // synchronously query for element
        let a = $body.text()
        //let b = $body.find(".errorMessage").length
        cy.log(a)
        // cy.log(b)
        if (a.includes('Please provide the details:')) {
            transferrulepage.getStatus().select(this.data13.TransferRuleForC2C.Status, { force: true })
            transferrulepage.getTransferType().select(this.data13.TransferRuleForC2C.TransferType, { force: true })
            transferrulepage.getGeographicalDomain().select(this.data13.TransferRuleForC2C.GeographicalDomain, { force: true })
            transferrulepage.getDirectTransferAllowed().check()
            transferrulepage.getBypassAllowed().check()
            
            transferrulepage.getSubmitbttn2().click()
            
            transferrulepage.getConfirmbttn().click()
            
            transferrulepage.getAssertMessage().contains(this.data13.SuccessMessage)
            
            transferrulepage.getAssertMessage().then((val) => {
              let q = val.text()
              cy.log(q)
              let a = q.split(':')
              let b = a[1].trim()
              cy.log(b)
              cy.readFile(DataFile).then((data) => {
                data.TransferRuleIDC2C1 = b
                cy.writeFile(DataFile, data)
              })
            })
        }
        else {
            count1 = 1
            cy.wait(2000)
            transferrulepage.getErrorMessage().contains("already")
        }
    })

})


//-----------------------------------------------------------------------------------




let msg = "Transfer Rule already exists"
And('Select rule and approval for C2C', function () {
    if(count=1){
        cy.log("TR exists")
    }
    else{
        cy.iframe().find('div .wwFormTableC').each(($elm) => {

            const a = $elm.text()
    
            if (a.includes('C2C')) {
    
                cy.getTransferApprovalC2C()
                cy.wait(2000)
                transferruleapprovalpage.getSubmitbttn().click({ force: true })
            }
            //transferruleapprovalpage.getSubmitbttn().click({force:true})
            // .should(function () {
            //  expect(this.windowConfirm).to.be.calledWith('Are you sure you want to Reject?')
            //     //expect(this.consoleLog).to.be.calledWith('CONFIRMED')  // passes
            //   })
            else {
                cy.log(msg)
            }
        })
    }
})



And('Select rule and approval for C2C1', function(){
    if(count=1){
        cy.log("TR exists")
    }
    else{
    cy.iframe().find('div .wwFormTableC').each(($elm) => {

        const a = $elm.text()

        if (a.includes('C2C')) {

            cy.getTransferApprovalC2C()
            cy.wait(2000)
            transferruleapprovalpage.getSubmitbttn().click({ force: true })
        }
        //transferruleapprovalpage.getSubmitbttn().click({force:true})
        // .should(function () {
        //  expect(this.windowConfirm).to.be.calledWith('Are you sure you want to Reject?')
        //     //expect(this.consoleLog).to.be.calledWith('CONFIRMED')  // passes
        //   })
        else {
            cy.log(msg)
        }
    })
    }
})

//-----------------------------------------------------------------------------------------

Given('Login into Mobiquity Portal as Channel User', function () {
    cy.launchURL(Cypress.env('Adminurl'))
    cy.visit(Cypress.env("Adminurl") + "/dfscontainer/#/business/")
    
    cy.readFile('cypress/fixtures/userData/BusinessUsersData.json').then((data) => {
        var loginID
        loginID = data.DistributerLoginId
        
        
        cy.login(loginID, this.data1.businessAdmin.businessadminPwd1)
    })
})
Given('Login into Mobiquity Portal as Channel User1', function () {
    cy.launchURL(Cypress.env('Adminurl'))
    cy.visit(Cypress.env("Adminurl") + "/dfscontainer/#/business/")
    
    cy.readFile('cypress/fixtures/userData/BusinessUsersDataO2C.json').then((data) => {
        var loginID
        loginID = data.LoginId
        
        cy.login(loginID, this.data1.businessAdmin.businessadminPwd1)
    })
})

And('Click on Channel to Channel Link and Enter Details', function () {

    welcomePage.getChanneltoChannel().click({ force: true })
    cy.wait(2000)
    C2C.getDomain().select(this.data13.TransferRuleForC2C.FromDomain)
    C2C.getToDomain().select(this.data13.TransferRuleForC2C.ToDomain)

    //  cy.intercept("/CoreWeb/stock/c2cTrf_ajaxLoadProviders.action?accessId=")
    cy.readFile(BusinessO2CReg).then((data) => {
        let MSISDN = data.registeredMobileO2C
        C2C.getmsisdn().type(MSISDN)
    })

    cy.get('.fd-page.iframeContainer.svelte-1v5e28n > iframe').then(($iframe) => {
        const $body = $iframe.contents().find('body')
        const $win = $iframe[0].contentWindow
        const stub = cy.stub()
        if (cy.stub($win, 'alert', () => false)
            .as('windowConfirm')) {
        }
        else {
            cy.stub($win.console, 'log').as('consoleLog')
        }
    })


    // cy.checkAPI("/CoreWeb/stock/c2cTrf_ajaxLoadProviders.action?accessId=")
    //cy.intercept("/CoreWeb/stock/c2cTrf_userDetails.action")
    
    C2C.getSubmit().click({ force: true })
    cy.wait(1000)
    C2C.getSubmit().click({ force: true })
    // cy.checkAPI("/CoreWeb/stock/c2cTrf_userDetails.action")
    cy.wait(1000)
    C2C.getamount().type('1')
    cy.wait(1000)
     C2C.getpaymentid().type('345')
     cy.wait(1000)  
    C2C.getsubmit().click({ force: true })
    cy.wait(1000)
    C2C.getconfirm().click({ force: true })
    cy.wait(3000)
    C2C.getsucessmessage().should('be.visible')
    
    cy.C2CTransactionWriteData()
})
And('Click on Channel to Channel Link and Enter Details for B2B', function () {

    welcomePage.getChanneltoChannel().click({force:true})
    cy.wait(3000)
    C2C.getDomain().select(this.data13.TransferRuleForC2C.FromDomain)
    C2C.getToDomain().select(this.data13.TransferRuleForC2C.ToDomain)
 
  //  cy.intercept("/CoreWeb/stock/c2cTrf_ajaxLoadProviders.action?accessId=")
    cy.readFile(BusinessReg).then((data) => {
      let MSISDN = data.registeredMobile
    C2C.getmsisdn().type(MSISDN)
    })
   
    cy.get('.fd-page.iframeContainer.svelte-1v5e28n > iframe').then(($iframe) => {
      const $body = $iframe.contents().find('body')
      const $win = $iframe[0].contentWindow
      const stub = cy.stub()
      if (cy.stub($win, 'alert', () => false)
        .as('windowConfirm')) {
      }
      else {
        cy.stub($win.console, 'log').as('consoleLog')
          }
        })
 
 
   // cy.checkAPI("/CoreWeb/stock/c2cTrf_ajaxLoadProviders.action?accessId=")
    //cy.intercept("/CoreWeb/stock/c2cTrf_userDetails.action")
    cy.wait(1000)
    C2C.getSubmit().click({force:true})
    cy.wait(1000)
    C2C.getSubmit().click({force:true})
   // cy.checkAPI("/CoreWeb/stock/c2cTrf_userDetails.action")
   cy.wait(1000)
    C2C.getamount().type('10.01')
    cy.wait(1000)
    C2C.getpaymentid().type('345')
    //cy.wait(6000)    
    C2C.getsubmit().click({force:true})    
    cy.wait(1000)
    C2C.getconfirm().click({force:true})
    cy.wait(3000)
    C2C.getsucessmessage().should('be.visible')
    cy.wait(1000)
    cy.C2CTransactionWriteData()
})

And('Click on Inverse Channel to Channel Link and Enter Details', function () {

    welcomePage.getInverseChanneltoChannel().click({ force: true })
    cy.wait(3000)
    C2C.getDomain().select(this.data13.TransferRuleForC2C.FromDomain)
    C2C.getToDomain().select(this.data13.TransferRuleForC2C.ToDomain)
    cy.readFile(BusinessReg).then((data) => {
        let MSISDN = data.registeredMobile
        C2C.getmsisdn().type(MSISDN)
        

    })
    cy.wait(3000)
    cy.get('.fd-page.iframeContainer.svelte-1v5e28n > iframe').then(($iframe) => {
        const $body = $iframe.contents().find('body')
        const $win = $iframe[0].contentWindow
        const stub = cy.stub()
        if (cy.stub($win, 'alert', () => false)
            .as('windowConfirm')) {
        }
        else {
            cy.stub($win.console, 'log').as('consoleLog')
        }
    })

    C2C.getInverseSubmit().click({ force: true })
    cy.wait(2000)
    C2C.getInverseSubmit().click({ force: true })
    cy.wait(1000)
    C2C.getInverseamount().type('1')
    cy.wait(1000)
    C2C.getInversepaymentid().type('345')
    cy.wait(1000)
    C2C.getInversesubmit().click({ force: true })
    cy.wait(2000)
    C2C.getInverseConfrim().click({ force: true })
    
   // C2C.getsucessmessage().contains(this.data13.InverseIntiatedMessage)
    
    cy.InverseC2CTransactionWriteData()
})
And('Select the From & To category as Wholesaler', function () {
    
cy.wait(2000)
    transferrulepage.getFromCategory().select(this.data13.TransferRuleForC2C.FromDomain, { force: true })

    transferrulepage.getToCategory().select(this.data13.TransferRuleForC2C.ToDomain, { force: true })
})




//--------------------------------------------------------------------------------------------


And('Click on Add Transfer Rule button for Inverse C2C', function () {
    
    transferrulepage.getAddToTransferbttn().click()
    
    cy.iframe().find("div#page.container").then(($body) => {
        //   // synchronously query for element
        let a = $body.text()
        //let b = $body.find(".errorMessage").length
        cy.log(a)
        // cy.log(b)
        if (a.includes('Please provide the details:')) {
            transferrulepage.getStatus().select(this.data13.TransferRuleForC2C.Status, { force: true })
            transferrulepage.getTransferType().select(this.data13.TransferRuleForC2C.TransferType, { force: true })
            transferrulepage.getGeographicalDomain().select(this.data13.TransferRuleForC2C.GeographicalDomain, { force: true })
            transferrulepage.getDirectTransferAllowed().check()
            transferrulepage.getBypassAllowed().check()
            
            transferrulepage.getSubmitbttn2().click()
            cy.wait(2000)
            transferrulepage.getConfirmbttn().click()
            cy.wait(2000)
            transferrulepage.getAssertMessage().should('be.visible')
            
            transferrulepage.getAssertMessage().then((val) => {
              let q = val.text()
              cy.log(q)
              let a = q.split(':')
              let b = a[1].trim()
              cy.log(b)
              cy.readFile(DataFile).then((data) => {
                data.TransferRuleIDIC2C = b
                cy.writeFile(DataFile, data)
              })
            })
        }
        else {
            count1=2
            cy.wait(2000)
            transferrulepage.getErrorMessage().contains("already")
        }
    })

})


//-----------------------------------------------------------------------------------





And('Select rule and approval for Inverse C2C', function () {
    if(count=2){
        cy.log("TR exists")
    }
    else{
    cy.iframe().find('div .wwFormTableC').each(($elm) => {

        const a = $elm.text()

        if (a.includes('C2C')) {

            cy.getTransferApprovalIC2C()
            cy.wait(2000)
            transferruleapprovalpage.getSubmitbttn().click({ force: true })
        }
        //transferruleapprovalpage.getSubmitbttn().click({force:true})
        // .should(function () {
        //  expect(this.windowConfirm).to.be.calledWith('Are you sure you want to Reject?')
        //     //expect(this.consoleLog).to.be.calledWith('CONFIRMED')  // passes
        //   })
        else {
            cy.log(msg)
        }
    })
}
})



//--------------------------------------------------------------------------------------------


And('Click on Add Transfer Rule button for Inverse C2C1', function () {
    cy.wait(2000)
    transferrulepage.getAddToTransferbttn().click()
    cy.wait(2000)
    cy.iframe().find("div#page.container").then(($body) => {
        //   // synchronously query for element
        let a = $body.text()
        //let b = $body.find(".errorMessage").length
        cy.log(a)
        // cy.log(b)
        if (a.includes('Please provide the details:')) {
            transferrulepage.getStatus().select(this.data13.TransferRuleForC2C.Status, { force: true })
            transferrulepage.getTransferType().select(this.data13.TransferRuleForC2C.TransferType, { force: true })
            transferrulepage.getGeographicalDomain().select(this.data13.TransferRuleForC2C.GeographicalDomain, { force: true })
            transferrulepage.getDirectTransferAllowed().check()
            transferrulepage.getBypassAllowed().check()
            
            transferrulepage.getSubmitbttn2().click()
            cy.wait(2000)
            transferrulepage.getConfirmbttn().click()
            cy.wait(2000)
            transferrulepage.getAssertMessage().contains(this.data13.SuccessMessage)
            
            transferrulepage.getAssertMessage().then((val) => {
              let q = val.text()
              cy.log(q)
              let a = q.split(':')
              let b = a[1].trim()
              cy.log(b)
              cy.readFile(DataFile).then((data) => {
                data.TransferRuleIDIC2C1 = b
                cy.writeFile(DataFile, data)
              })
            })
        }
        else {
            count=2
            cy.wait(2000)
            transferrulepage.getErrorMessage().contains("already")
        }
    })

})


//-----------------------------------------------------------------------------------





And('Select rule and approval for Inverse C2C1', function () {
    if(count=1){
        cy.log("TR exists")
    }
    else{
    cy.iframe().find('div .wwFormTableC').each(($elm) => {

        const a = $elm.text()

        if (a.includes('C2C')) {

            cy.getTransferApprovalIC2C()
            cy.wait(2000)
            transferruleapprovalpage.getSubmitbttn().click({ force: true })
        }
        //transferruleapprovalpage.getSubmitbttn().click({force:true})
        // .should(function () {
        //  expect(this.windowConfirm).to.be.calledWith('Are you sure you want to Reject?')
        //     //expect(this.consoleLog).to.be.calledWith('CONFIRMED')  // passes
        //   })
        else {
            cy.log(msg)
        }
    })
}
})
