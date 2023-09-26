/// <reference types="Cypress" />
/// <reference types = "Cypress-iframe"/>

//----------------Imports---------------------------------------------------------------------
import { And, Then, When } from "@badeball/cypress-cucumber-preprocessor";
import 'cypress-iframe';
import homePage from "../../../../../../../support/pageObjects/homePage";
import "../../../../../../../support/Utils/BusinessUserCommands";
import "../../../../../../../support/Utils/generic";
import "../../../../../../../support/Utils/subscriberCommands";
import myActivity from '../../../../../../../support/pageObjects/MyActivity/myActivity';
import stockInitiation from '../../../../../../../support/pageObjects/StockManagement/stockInitiation';

import approvals from '../../../../../../../support/pageObjects/UserManagement/approvals';
import manageUsers from '../../../../../../../support/pageObjects/UserManagement/manageUsers';
import ChurnManagement from '../../../../../../../support/pageObjects/ChurnManagement/ChurnManagement';
import CashInCashOut from "../../../../../../../support/pageObjects/CashInCashOut/CashInCashOut";
import loginPage from '../../../../../../../support/pageObjects/loginPage';
import TransactionCorrection from '../../../../../../../support/pageObjects/TransactionCorrection';
//----------------Object Declaration-----------------------------------------------------------------
const myActivityPage = new myActivity()
const tranCorrPage = new TransactionCorrection()
const stockInitiationPage = new stockInitiation()
const manageUsersPage = new manageUsers()
const pageLogin = new loginPage()
const churnManagementPage = new ChurnManagement()
const welcomePage = new homePage()
const approvalPage = new approvals()
const cashincashoutPage = new CashInCashOut()

var TransactionFleO2C = "cypress/fixtures/userData/cashIn&cashout.json"
var CashFile = 'cypress/fixtures/userData/cashIn&cashout.json'
var businesslogin = "cypress/fixtures/userData/BusinessUsersData.json"
var CashIO = 'cypress/fixtures/userData/cashIn&cashout.json'
const SubRegistration = 'cypress/fixtures/userData/subscriberReg.json'
//---------------------------------------------------------------------------------------------


And('Search with User Mobile or KYC Mercahnt ID', function() {
    pageLogin.getiFrame()
    manageUsersPage.getSearchUser().click({ force: true })
   
    cy.readFile(businesslogin).then((data) => {
        let loginID = data.MerchantLoginID
        cy.wait(2000)
      manageUsersPage.getSearchUser().type(loginID)
    })
    manageUsersPage.getSearchUserButton().click({ force: true })
   
    })



      And('User Click Wallet Payment History and Click on reverse transaction for Cash-IN service', function () {
        manageUsersPage.getEyeIcon().click({ force: true })
        manageUsersPage.getexpandmore().click({ force: true })
        manageUsersPage.getwallet().click({ force: true })
          cy.readFile(CashIO).then((data) => {
         const b = data.cashinTransactionID3
          cy.log(b)
          manageUsersPage.getSearchTransactionId().type(b)
          manageUsersPage.getserachicon().click({ force: true })
        })
        cy.wait(2000)
        manageUsersPage.getreversetransaction().eq(0).click({force:true})
        manageUsersPage.getreason().type('NIL')
        manageUsersPage.getreverseservicecharge().click({ force: true })
        manageUsersPage.getreversecommission().click({ force: true })
        manageUsersPage.getReverYes().click({ force: true })
       manageUsersPage.getintiatedmessage().should('have.text',this.data10.initiatedMessage)
      
      })
  
      When('Navigate to Transaction Correction and click on Transaction Approval for CASH_IN', function () {
        welcomePage.getTransactionCorrection().click()
        welcomePage.getTransactionCorrectionApproval().click()
        cy.wait(3000)
        tranCorrPage.getcolumn().within(function () {
          cy.wait(5000)
          cy.readFile(CashIO).then((data) => {
            const ID = data.cashinTransactionID3
             cy.log(ID)
            cy.get('td').contains(ID)
      
            tranCorrPage.getradiobutton().check()
            tranCorrPage.getsubmit().click({ force: true })
          })
          cy.wait(3000)
      
        })
        tranCorrPage.getcolumn().within(function () {
          cy.get('td').within(function () {
            tranCorrPage.getapprove().click({ force: true })
          })
        })
        cy.wait(10000)
        tranCorrPage.getsuccessmessage().contains(this.data21.successmessage)
      
      })

      When('Navigate to Transaction Correction Approval and Assert the Check Box', function() {
        welcomePage.getTransactionCorrection().click()
        welcomePage.getTransactionCorrectionApproval().click()
        cy.wait(3000)
        tranCorrPage.getcolumn().within(function () {
          cy.wait(5000)
          cy.readFile(CashIO).then((data) => {
            const ID = data.cashinTransactionID3
             cy.log(ID)
            cy.get('td').contains(ID)
      
            tranCorrPage.getradiobutton().check()
            tranCorrPage.getradiobutton().should('be.visible')
          })
      })
    })
//--------------CASH IN -----------------------------------------------------
    Then('Click on Submit and Click on Confirm Button for Cash-IN1', function () {
      cy.intercept('/CoreWeb/stock/cashInWeb_confirm.action').as('cashInsubmit')
      churnManagementPage.getSubmitButton().click()
      cy.wait('@cashInsubmit')
      cy.intercept('/CoreWeb/stock/cashInWeb_makePayment.action').as('cashInConfirm')
      churnManagementPage.getConfirmButton().click()
      cy.wait('@cashInConfirm')
      cy.wait(2000)
      churnManagementPage.getChurnInitiationMessage().contains('CASHIN done successfully toTransaction')
      cy.iframe().find('.actionMessage').invoke('text').then((text) => {
        const ID = /(CI[\w.-]+)/
        cy.readFile(CashFile).then((data) => {
          const TransID = text.match(ID)
          data.cashinTransactionID3 = TransID ? TransID[0] : null
          const transactionID = TransID ? TransID[0] : null
          console.log("Transaction ID:", transactionID)
          return cy.writeFile(CashFile, data)
        })
      })
      })
  


Then('Click on Submit and Click on Confirm Button for Cash-IN to check Multiple Reversal', function () {
  cy.intercept('/CoreWeb/stock/cashInWeb_confirm.action').as('cashInsubmit')
  churnManagementPage.getSubmitButton().click()
  cy.wait('@cashInsubmit')
  cy.intercept('/CoreWeb/stock/cashInWeb_makePayment.action').as('cashInConfirm')
  churnManagementPage.getConfirmButton().click()
  cy.wait('@cashInConfirm')
  cy.wait(2000)
  churnManagementPage.getChurnInitiationMessage().contains(this.data003.CashInSuccess)
  cy.iframe().find('.actionMessage').invoke('text').then((text) => {
    const ID = /(CI[\w.-]+)/
    cy.readFile(CashFile).then((data) => {
      const TransID = text.match(ID)
      data.cashinTransactionID4 = TransID ? TransID[0] : null
      const transactionID = TransID ? TransID[0] : null
      console.log("Transaction ID:", transactionID)
      return cy.writeFile(CashFile, data)
    })
  })
})
//-------------Assert the suspedned user--------------------------------------------------------
    Then('Assert the Error Message that sender is suspended', function () {
      manageUsersPage.getEyeIcon().click({ force: true })
      manageUsersPage.getexpandmore().click({ force: true })
      manageUsersPage.getwallet().click({ force: true })
        cy.readFile(CashIO).then((data) => {
       const b = data.cashinTransactionID3
        cy.log(b)
        manageUsersPage.getSearchTransactionId().type(b)
        manageUsersPage.getserachicon().click({ force: true })
      })
      cy.wait(2000)
      manageUsersPage.getreversetransaction().eq(0).click({force:true})
      manageUsersPage.getreason().type('NIL')
      manageUsersPage.getreverseservicecharge().click({ force: true })
      manageUsersPage.getreversecommission().click({ force: true })
      manageUsersPage.getReverYes().click({ force: true })
      
      manageUsersPage.getSenderSuspend().contains(this.data2.Subscribersuspend)

    })

    Then('Assert Suspension of Subscriber Mobile Number to Suspend', function () {
       cy.readFile(businesslogin).then((data) => {
        let loginID = data.registeredMobileMerch
        var LOGID = "" +loginID
        
          manageUsersPage.getAssertMobile().eq(1).should('contain',LOGID)
        
      })
      myActivityPage.getCreatedOnTime().eq(1).invoke('text').then((time) => {
        time = time.trim()
        cy.log(time)
        cy.readFile(businesslogin).then((data) => {
          data.CreatedOnTime = time
          cy.writeFile(businesslogin, data)
        })
      })
    })
    

//------------User Resumed-------------------------------------------------------

Then('User status is Resumed', function () {
  cy.waitUntil(() => {
    return cy.iframe().find('.mat-simple-snackbar.ng-star-inserted > span').should('be.visible')
  })
  approvalPage.getApproveConfirmationMessage().should(this.data003.UserStatus)
})


//--------------Reject the Transaction Correction ------------------------------------------------------------
    When('Navigate to Transaction Correction and Reject the Transaction for CASH_IN', function () {
      welcomePage.getTransactionCorrection().click()
      welcomePage.getTransactionCorrectionApproval().click()
      cy.wait(3000)
      tranCorrPage.getcolumn().within(function () {
        cy.wait(5000)
        cy.readFile(CashIO).then((data) => {
          const ID = data.cashinTransactionID3
           cy.log(ID)
          cy.get('td').contains(ID)
          tranCorrPage.getradiobutton().check()
    
          tranCorrPage.getradiobutton().should('be.visible')
          tranCorrPage.getsubmit().click({ force: true })
        })
        cy.wait(6000)
      })
      tranCorrPage.getcolumn().within(function () {
        cy.get('td').within(function () {
          tranCorrPage.getReject().click({ force: true })

        })
     })
     cy.wait(10000)
      tranCorrPage.getsuccessmessage().contains(this.data21.TransactionReject)
      cy.iframe().find('.actionMessage').invoke('text').then((text) => {
        const idReject = /(TC[\w.-]+)/
        cy.readFile(CashFile).then((data) => {
        const TransRejct = text.match(idReject)
          data.TransRejctID = TransRejct ? TransRejct[0] : null
          return cy.writeFile(CashFile, data)
        })
      })
  
    })
    

//--------Select Failed Transaction-----------------------------------

Then('Select the Failed Transaction and Click on Reversal', function () {
  manageUsersPage.getEyeIcon().click({ force: true })
  manageUsersPage.getexpandmore().click({ force: true })
  manageUsersPage.getwallet().click({ force: true })
    cy.readFile(CashIO).then((data) => {
   const b = data.TransRejctID
    cy.log(b)
    manageUsersPage.getSearchTransactionId().type(b)
    manageUsersPage.getserachicon().click({ force: true })
  })
  cy.wait(2000)
  //manageUsersPage.getreversetransaction().eq(0).should('be.disabled')
  cy.waitUntil(() => {
    return cy.iframe().find('[id="reverse-transaction"]').should('be.disabled')
  })

})



And('User Click Wallet Payment History and Click on reverse transaction And enter the Remarks with AlphaNumeric', function () {
  manageUsersPage.getEyeIcon().click({ force: true })
  manageUsersPage.getexpandmore().click({ force: true })
  manageUsersPage.getwallet().click({ force: true })
    cy.readFile(CashIO).then((data) => {
   const b = data.cashinTransactionID4
    cy.log(b)
    manageUsersPage.getSearchTransactionId().type(b)
    manageUsersPage.getserachicon().click({ force: true })
  })
  cy.wait(2000)
  manageUsersPage.getreversetransaction().eq(0).click({force:true})
  manageUsersPage.getreason().type('NIL008')
  manageUsersPage.getreverseservicecharge().click({ force: true })
 // manageUsersPage.getreversecommission().click({ force: true })
  manageUsersPage.getReverYes().click({ force: true })
 manageUsersPage.getintiatedmessage().should('have.text',this.data10.initiatedMessage)

})

And('User Click Wallet Payment History and Click on reverse transaction And enter the Invalid Remarks' , function() {

  manageUsersPage.getEyeIcon().click({ force: true })
  manageUsersPage.getexpandmore().click({ force: true })
  manageUsersPage.getwallet().click({ force: true })
    cy.readFile(CashIO).then((data) => {
   const b = data.cashinTransactionID4
    cy.log(b)
    manageUsersPage.getSearchTransactionId().type(b)
    manageUsersPage.getserachicon().click({ force: true })
  })
  cy.wait(2000)
  manageUsersPage.getreversetransaction().eq(0).click({force:true})
  manageUsersPage.getreason().type('NIL@&*%')
  manageUsersPage.getReverYes().click({ force: true })
 

})

Then('Assert the Error Message that Invalid Remarks', function() {
  
  cy.waitUntil(() => {
    return cy.iframe().find('[role="alert"]').contains(this.data10.ErrorTransactionMsg)
  })
})


And('Search with User Mobile or KYC of Subscriber User', function() {
  pageLogin.getiFrame()
  manageUsersPage.getSearchUser().click({ force: true })
 
  cy.readFile(SubRegistration).then((data) => {
      let loginID = data.subscriberMobile
      cy.wait(2000)
    manageUsersPage.getSearchUser().type(loginID)
  })
  manageUsersPage.getSearchUserButton().click({ force: true })
 
  })
//------------------APROVAL-------------------------------------------------------------

When('Navigate to Transaction Correction and click on Approve the transaction ID4', function () {
  welcomePage.getTransactionCorrection().click()
  welcomePage.getTransactionCorrectionApproval().click()
  cy.wait(3000)
  tranCorrPage.getcolumn().within(function () {
    cy.wait(5000)
    cy.readFile(TransactionFleO2C).then((data) => {
      var transID1 = data.cashinTransactionID4
      cy.log(transID1)
      cy.get('td').contains(transID1)

      tranCorrPage.getradiobutton().check()
      tranCorrPage.getsubmit().click({ force: true })
    })
    cy.wait(3000)

  })
  tranCorrPage.getcolumn().within(function () {
    cy.get('td').within(function () {
      tranCorrPage.getapprove().click({ force: true })
    })
  })
  cy.wait(5000)
  tranCorrPage.getsuccessmessage().contains(this.data21.successmessage)
})


//----------------------------------------------------------------------------------

Then ('Search with the Transaction ID and Assert it' , function() {
  manageUsersPage.getEyeIcon().click({ force: true })
  manageUsersPage.getexpandmore().click({ force: true })
  manageUsersPage.getwallet().click({ force: true })
  cy.readFile(CashIO).then((data) => {
  const b = data.cashinTransactionID4
  cy.log(b)
  const clearedValue = b.slice(0, -3)
  manageUsersPage.getSearchTransactionId().type(clearedValue)
  manageUsersPage.getserachicon().click({ force: true })
  cy.waitUntil(() => {
      return cy.iframe().find('[class="mat-simple-snackbar ng-star-inserted"]').contains('No Records Available')
    })
  manageUsersPage.getSearchTransactionId().clear()
  manageUsersPage.getSearchTransactionId().type(b)
  manageUsersPage.getSearchTransactionId().type('000')
  manageUsersPage.getserachicon().click({ force: true })
  cy.waitUntil(() => {
      return cy.iframe().find('[class="mat-simple-snackbar ng-star-inserted"]').contains('No Records Available')
    })
  })

})


//-------------------------------------------------------------------------------

And('Enter Merchant mobile number and click on search', function() {

  pageLogin.getiFrame()
  manageUsersPage.getSearchUser().click({ force: true })
  cy.readFile(SubRegistration).then((data) => {
    // var mobileSys
    var mobile
    mobile = data.subscriberMobile
    manageUsersPage.getSearchUser().type(mobile, { force: true })
  })
  manageUsersPage.getSearchUserButton().click({ force: true })
  cy.wait(4000)
  manageUsersPage.getViewIcon().eq(0).click({ force: true })
  manageUsersPage.getAccountInfo().click({ force: true })
cy.getWalletBalance(SubRegistration)

})





And('Enter all Mandatory details for CashIn ID4', function () {
  cy.wait(2000)
   cy.get('.fd-page.iframeContainer.svelte-1v5e28n > iframe').then(($iframe) => {
   cy.readFile(SubRegistration).then((data) => {
     let Mobile = data.subscriberMobile
     const $body = $iframe.contents().find('body')
     const $win = $iframe[0].contentWindow
     cy.stub($win, 'alert', () => true).as('windowConfirm')
     cy.stub($win.console, 'log').as('consoleLog')
     cy.wrap($body).find('#paymentMethodNumberId').type(Mobile).should(function () {
             //  expect(this.windowConfirm).to.be.calledWith("You must enter a value in MSISDN")
           })
           cy.stub($win, 'confirm', () => true).as('windowConfirm')
     cy.wrap($body).find('[name="amount"]').type("5").should(function () {
               // expect(this.windowConfirm).to.be.calledWith("Subscriber Does Not Exist")
           })
   
   })
 })
   churnManagementPage.getAmount().clear().type("5")
   cy.wait(2000)
   cy.iframe().find('#partyWalletListSel').select('Normal')
   churnManagementPage.getPaymentID().type(Amount)
 })
 
 And('Enter all Mandatory details CashOut for Reversal', function () {
  cy.wait(4000)
 
  cy.get('.fd-page.iframeContainer.svelte-1v5e28n > iframe').then(($iframe) => {
    cy.fixture('userData/subscriberReg.json').then((user) => {
      var SubMob1 = user.subscriberMobile
  
    const $body = $iframe.contents().find('body')
    const $win = $iframe[0].contentWindow
    cy.stub($win, 'alert', () => true).as('windowConfirm')
    cy.stub($win.console, 'log').as('consoleLog')
    cy.wrap($body).find('#paymentMethodNumberId').type(SubMob1).should(function () {
            //  expect(this.windowConfirm).to.be.calledWith("You must enter a value in MSISDN")
          })
          cy.stub($win, 'confirm', () => true).as('windowConfirm')
    cy.wrap($body).find('[name="amount"]').type("1").should(function () {
              // expect(this.windowConfirm).to.be.calledWith("Subscriber Does Not Exist")
          })

        })
      })

      cy.readFile(SubRegistration).then((data) => {
        let BankBalance = data.balance
        let updatedBalance = BankBalance - 2
  cashincashoutPage.getAmount().clear().type(updatedBalance.toString())
  //cy.iframe().find('#partyWalletListSel').select('Normal')
 
      })
})

Then('Click on Confirm for CASHOUT SUB', function () {
  cashincashoutPage.getSubmitButton1().click()
  cy.wait(2000)
  cashincashoutPage.getConfirmButton().click()
  cy.wait(2000)
  churnManagementPage.getChurnInitiationMessage().then((al => {
    let q = al.text()
    cy.log(q)
    let a = q.split(':')
    let b = a[1].trim()
    cy.log(b)

    cy.readFile(CashIO).then((data) => {
      data.cashoutTransactionID = b
      cy.writeFile(CashIO, data)
      let Msg = data.cashoutTransactionID4
      churnManagementPage.getChurnInitiationMessage().should('have.text', this.data003.cashOutMsg + Msg)
      
    })
  }))
})



And('User Click Wallet Payment History and Click on reverse transaction for CASHIN ID4', function () {
  manageUsersPage.getEyeIcon().click({ force: true })
  manageUsersPage.getexpandmore().click({ force: true })
  manageUsersPage.getwallet().click({ force: true })
    cy.readFile(CashIO).then((data) => {
   const b = data.cashinTransactionID4
    cy.log(b)
    manageUsersPage.getSearchTransactionId().type(b)
    manageUsersPage.getserachicon().click({ force: true })
  })
  cy.wait(2000)
  manageUsersPage.getreversetransaction().eq(0).click({force:true})
  manageUsersPage.getreason().type('NIL')
  manageUsersPage.getreverseservicecharge().click({ force: true })
  manageUsersPage.getreversecommission().click({ force: true })
  manageUsersPage.getReverYes().click({ force: true })
 cy.waitUntil(() => {
  return cy.iframe().find('[role="alert"]').should('be.visible')
})
})

And('Enter all the Reimbursement Information for special charaters into refrence number', function () {
    stockInitiationPage.getCurrency().select("US Dollar")
    stockInitiationPage.getUserType().select("Operator")
    stockInitiationPage.getResetAccountNumber().select("Income Account")

    stockInitiationPage.getTransactionAmount().type(amount)
    stockInitiationPage.getReferencenumber().type('@#')

})