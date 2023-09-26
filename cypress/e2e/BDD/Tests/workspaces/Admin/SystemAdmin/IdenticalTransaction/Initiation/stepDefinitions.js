/// <reference types="Cypress" />
/// <reference types = "Cypress-iframe"/>

//----------------Imports---------------------------------------------------------------------
import 'cypress-iframe'
import { Given, When, Then, And, Before } from "@badeball/cypress-cucumber-preprocessor";
import loginPage from '../../../../../../../../support/pageObjects/loginPage';
import homePage from '../../../../../../../../support/pageObjects/homePage'
import "../../../../../../../../support/Utils/generic"
//import "../../../../../../../../support/Utils/IdenticalTransactionCommands"
import IdenticalTransaction from '../../../../../../../../support/pageObjects/IdenticalTransaction/IdenticalTransaction';
import CashInCashOut from '../../../../../../../../support/pageObjects/CashInCashOut/CashInCashOut';
import ChurnManagement from '../../../../../../../../support/pageObjects/ChurnManagement/ChurnManagement';
//----------------Object Declaration-----------------------------------------------------------------

const pageLogin = new loginPage()
const welcomePage = new homePage()
const identicalTransactionPage = new IdenticalTransaction()
const cashincashoutPage = new CashInCashOut()
const churnManagementPage=new ChurnManagement()
//var CashIO = 'cypress/fixtures/userData/cashIn&cashout.json'
//----------------BDD Hooks-----------------------------------------------------------------


const amount=3

// When('Click on identical transaction', function () {
//     identicalTransactionPage.getIdenticalTransaction().scrollIntoView()
//     identicalTransactionPage.getIdenticalTransaction().click()

// })

And('Click on service type drop down', function () {
     cy.wait(2000)
    identicalTransactionPage.getServiceTypes().select("Cash in")
})

// And('Click on submit button', function () {
//     identicalTransactionPage.getSubmitButton().click({ force: true })
// })

And('Enter time interval value for identical transaction', function () {
    cy.wait(1000)
    identicalTransactionPage.getTimeIntervals().type(amount, { force: true })
})

// And('Select action on identical transaction', function () {
    
//     cy.getActionOnTxn().select("Block Transaction")
// })

Then('Click on save button', function () {
    identicalTransactionPage.getSaveButton().click({ force: true })
    cy.wait(1000)
    identicalTransactionPage.getConfirmButtonAfterSave().click({ force: true })
    
    identicalTransactionPage.getSpanActionMessage().contains(this.data1111.actionMessage)
})

Given('Login into Mobiquity Portal as Business user for cash in', function () {
    cy.launchURL(Cypress.env('Adminurl'))
    cy.visit(Cypress.env("Adminurl") + "/dfscontainer/#/business/")
    
    cy.readFile('cypress/fixtures/userData/BusinessUsersData.json').then((data) => {
      var loginId
      loginId = data.LoginId
      
      cy.login(loginId, this.data1.BusinessUserPassword)
      
    })
  
  })

  Then('Click on Submit and Click on Confirm Button for error',function(){
    cashincashoutPage.getSubmitButton().click()
    
    cashincashoutPage.getConfirmButton().click()
    
    cashincashoutPage.getSpanErrorMessage().should('have.text','Service request has failed as you had done an identical transaction from your account earlier')
  })

