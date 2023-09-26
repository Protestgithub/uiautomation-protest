/// <reference types="Cypress" />
/// <reference types = "Cypress-iframe"/>

//----------------Imports---------------------------------------------------------------------
import { And, Before, Then, When } from "@badeball/cypress-cucumber-preprocessor";
import 'cypress-iframe';
import "../../../../../../../../../../support/Utils/generic";
import homePage from '../../../../../../../../../../support/pageObjects/homePage';
import loginPage from '../../../../../../../../../../support/pageObjects/loginPage';
import stockInitiation from '../../../../../../../../../../support/pageObjects/StockManagement/stockInitiation';
import stockManagement from '../../../../../../../../../../support/pageObjects/StockManagement/stockManagement';
import "../../../../../../../../../../support/Utils/StockCommands";


//----------------Object Declaration-----------------------------------------------------------------

const pageLogin = new loginPage()
const welcomePage = new homePage()
const stockInitiationPage = new stockInitiation()
const stockManagementPage = new stockManagement()
var filenamestock = 'cypress/fixtures/StockManagement.json'

var mobile
const uuid = () => Cypress._.random(1e8)
mobile = "77" + uuid()

var refno
refno = "12" + uuid()

var amount
const uuuid = () => Cypress._.random(1e3)
amount = uuuid()

var amount1
const uuuuid = () => Cypress._.random(1e11)
amount1 = uuuuid()

const uid = () => Cypress._.random(1e2)
const id = uid()
const testname = `testname${id}`



//---------------------------------------TC_75--------------------------------------------------

When('Navigate to Stock Management and Click on Stock initiation', function () {
  welcomePage.getStockManagementOption().scrollIntoView()
  welcomePage.getStockManagementOption().click()
  cy.intercept(this.data20.StockIni).as('StckInitiation', { timeout: 10000 })
  welcomePage.getStockInitiationOption().click()
  cy.wait('@StckInitiation', { timeout: 30000 })
})

And('Select MFS provider and Enter Reference number and Amount', function () {
  stockInitiationPage.getProvider().select(this.data17.stockInitiation.provider, { force: true })
  stockInitiationPage.getStockFrom().select(this.data17.stockInitiation.stockFrom, { force: true })
  stockInitiationPage.getReferenceNumber().type(mobile, { force: true })
  cy.readFile(filenamestock).then((data) => {
    data.ReferenceNumber = mobile
    cy.writeFile(filenamestock, data)
  })
  stockInitiationPage.getRequestedAmount().type(amount, { force: true })
})

Then('click on Submit and Confirm button', function () {
  cy.intercept(this.data20.SubmitButtonSI).as('submittBtn')
  stockInitiationPage.getSubmitButton().click({ force: true })
  cy.wait('@submittBtn')
  stockInitiationPage.getBalance().eq(3).invoke('text').then((text) => {
    text = text.trim()
    cy.readFile(filenamestock).then((data) => {
      data.Balance = text
      data.Amount = amount
      cy.writeFile(filenamestock, data)
    })
    cy.readFile(filenamestock).then((data) => {
      let x = data.Balance
      let y = data.Amount
      const num1 = x * 1
      const num2 = y * 1
      const sum = num1 + num2
      data.CreditedStock = sum
      cy.log(parseFloat(sum))
      cy.writeFile(filenamestock, data)
    })
  })
  stockInitiationPage.getConfirmButton().click({ force: true })
  //cy.intercept('CoreWeb/stock/stockInit_confirmInitiate.action').as('confirm')
  cy.wait(2000)
  stockInitiationPage.getSuccessMsg().contains(this.data17.stockInitiationAssertion)
  //cy.wait('@confirm',{timeout:3000})
})


//----------------------------------------TC_76----------------------------------------------------
When('Navigate to Stock Management and Click on Stock Approval 1', function () {
  welcomePage.getStockManagementOption().scrollIntoView()
  welcomePage.getStockManagementOption().click()
  cy.intercept(this.data20.Approval_1Opt).as('stockAproval1')
  welcomePage.getApproval_1Option().click()
  cy.wait('@stockAproval1', { timeout: 30000 })
})
Then('Assert Credit Stock', function () {
  stockInitiationPage.getSubmitButton().click({ force: true })
  cy.wait(2000)
  cy.readFile(filenamestock).then((data) => {
    let A = data.CreditedStock
    stockInitiationPage.getBalance().eq(3).contains(A)
  })
})
And('Click on Submit Button', function () {
  cy.StockTransactionWriteData()
  
  stockInitiationPage.getSubmitButton_1().click({ force: true })
})

Then('Click on Approve button', function () {
  cy.wait(2000)
  stockInitiationPage.getApproveButton_1().click({ force: true })
  cy.wait(2000)
  cy.readFile(filenamestock).then((data) => {
    let Msg = data.trasanctionid
    stockInitiationPage.getSuccessMsg().should('contain', this.data17.stockApproval1Msg + Msg)
  })
})


//--------------------------------------------------TC_77---------------------------------------------
And('Select MFS provider and Enter reference number and amount', function () {
  
  stockInitiationPage.getProvider().select(this.data17.stockInitiation.provider)
  stockInitiationPage.getStockFrom().select(this.data17.stockInitiation.stockFrom, { force: true })
  stockInitiationPage.getReferenceNumber().type(mobile, { force: true })
  stockInitiationPage.getRequestedAmount().type(amount1, { force: true })
})

When('Navigate to Stock Management and Click on Stock Approval 2', function () {
  welcomePage.getStockManagementOption().scrollIntoView()
  welcomePage.getStockManagementOption().click()
  cy.intercept(this.data20.Approval_2Opt).as('ApprBtn2')
  welcomePage.getApproval_2Option().click()
  cy.wait('@ApprBtn2', { timeout: 30000 })
})

Then('Click on Submit and Approve the Stock at level 2', function () {
  cy.intercept(this.data20.SubmitButton2).as('submitBtn2')
  stockInitiationPage.getSubmitButton_2().click({ force: true })
  cy.wait('@submitBtn2', { timeout: 30000 })
//cy.wait(2000)
  cy.intercept(this.data20.ApproveButton).as('ApprvBtn2')
  stockInitiationPage.getApproveButton_2().click({ force: true })
  cy.wait('@ApprvBtn2', { timeout: 30000 })
  // 
  cy.readFile(filenamestock).then((data) => {
    let Msg = data.trasanctionid
    stockInitiationPage.getSuccessMsg().should('contain', this.data17.stockApproval2Msg + Msg)
  })
  welcomePage.getStockManagementOption().click()
})


Then('Click on Back Button', function () {
  stockInitiationPage.getSubmitButton().click({ force: true })
  cy.wait(2000)
  stockInitiationPage.getBackButton().click({ force: true })

})