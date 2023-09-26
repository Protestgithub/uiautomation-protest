/// <reference types="Cypress" />
/// <reference types = "Cypress-iframe"/>

//----------------Imports---------------------------------------------------------------------
import { And, Before, Then, When } from "@badeball/cypress-cucumber-preprocessor";
import 'cypress-iframe';
import homePage from '../../../../../../../../../../support/pageObjects/homePage';
import loginPage from '../../../../../../../../../../support/pageObjects/loginPage';
import stockInitiation from '../../../../../../../../../../support/pageObjects/StockManagement/stockInitiation';
import stockManagement from '../../../../../../../../../../support/pageObjects/StockManagement/stockManagement';
import "../../../../../../../../../../support/Utils/generic";
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



//----------------------------------------Sudheer----------------------------------------------------------
//............Navigate to Stock Management and Stock Transfer to EA...............


When('Navigate to Stock Management and Stock Transfer to EA', function () {
  stockManagementPage.getStockManagement().scrollIntoView()
  stockManagementPage.getStockManagement().click()
  cy.intercept(this.data20.StockTransferToEA).as('stockTransferEA')
  stockManagementPage.getStockTransferToEA().click()
  cy.wait('@stockTransferEA', { timeout: 30000 })
})

And('User Select MFS Provider', function () {
  cy.mfsprovider()
})

And('User Should Enter Reference number', function () {
  
  stockManagementPage.getReferenceNumber().type(refno, { force: true })
})

And('User Should Enter Amount', function () {
  stockManagementPage.getTransferAmount().type(amount, { force: true })
})

And('User Click on Submit button', function () {
  cy.intercept(this.data20.EASubmit).as('EASubmitBtn')
  stockManagementPage.getEASubmitButton().type("{enter}").focused().click({ force: true })
  cy.wait('@EASubmitBtn', { timeout: 30000 })
})

Then('User Click on Confirm button', function () {
  cy.intercept(this.data20.EAConfirm).as('EAConfirmBtn')
  stockManagementPage.getEAConfirmButton().click({ force: true })
  cy.wait('@EAConfirmBtn', { timeout: 30000 })
  stockManagementPage.getStockInitiated().should('contain.text', this.data17.stockEAInitiated)
})



// //............Navigate to Stock Management and Stock Transfer to RA...............

When('Navigate to Stock Management and Stock Transfer to RA', function () {
  stockManagementPage.getStockManagement().scrollIntoView()
  stockManagementPage.getStockManagement().click()
  cy.intercept(this.data20.StockTrans).as('stockTransferRA')
  stockManagementPage.getStockTransferToRA().click()
  cy.wait('@stockTransferRA', { timeout: 30000 })
})

And('Enter Reference number', function () {
  stockManagementPage.getRAReferenceNumber().type(refno, { force: true })
})

And('Select MFS Provider', function () {
  
  cy.mfsproviders()
})


And('Enter Amount', function () {
  stockManagementPage.getRARequestedAmount().type(amount, { force: true })
})

And('Click on Submit button', function () {

  cy.intercept(this.data20.RASubmit).as('RAsubmitBtn')
  stockManagementPage.getRASubmitButton().click({ force: true })
  cy.wait('@RAsubmitBtn', { timeout: 30000 })
})

Then('Click on Confirm button', function () {
  cy.intercept(this.data20.RAConfirm).as('RAConfirmBtn')
  stockManagementPage.getRAConfirmButton().click({ force: true })
  cy.wait('@RAConfirmBtn', { timeout: 30000 })
  stockManagementPage.getStockInitiated().should('contain.text', this.data17.stockEAInitiated)
})



//---------------- Stock Enquiry---------------------------------------------------------------------

When('Navigate to Stock Management and Stock Enquiry', function () {

  stockManagementPage.getStockManagement().scrollIntoView()
  stockManagementPage.getStockManagement().click()
  cy.intercept(this.data20.StockEn).as('stockEnquiry')
  stockManagementPage.getStockEnquiry().click()
  cy.wait('@stockEnquiry', { timeout: 30000 })
})

And('Select any Transaction ID from the displayed list', function () {

  cy.readFile(filenamestock).then((data) => {
    var transID = data.trasanctionid
    stockManagementPage.getTrasanctionID().type(transID, { force: true })
  })
  
  stockManagementPage.getStockTypes().select(this.data17.stocktypeA.value, { force: true })
})

Then('Click on Enquiry Submit button', function () {
  cy.intercept(this.data20.StockEnquirySub).as('stockEnquirySubmit')
  stockManagementPage.getStockEnquirySubmit().click({ force: true })
  cy.wait('@stockEnquirySubmit', { timeout: 30000 })
  //cy.intercept(this.data20.StockEnquiryView).as('stockEnquiryViewSubmit')
  stockManagementPage.getStockEnquiryViewSubmit().click({ force: true })
  
})

//---------------- Stock Transfer EA Enquiry---------------------------------------------------------------------

Then('click on approve button', function () {
  stockManagementPage.getConfirmApprove().click({ force: true })
  stockManagementPage.getReimbursementApproveMessage().should('contain.text', this.data17.stockReimbursementApproval)
})


//--------------------------------------------------------------------------------------
When('Navigate to Stock Management and Click on Stock Limit', function () {

  welcomePage.getStockManagementOption().scrollIntoView()
  welcomePage.getStockManagementOption().click()
  //cy.intercept('/CoreWeb/stock/StockApprovalTransferLimitActionWithdraw_input.action').as('getStockLIMIT')
  welcomePage.getStockLimit().click()
  //cy.wait('@getStockLIMIT', { timeout: 5000 })
})

And('Enter the value for Approval Limit 1', function () {
  cy.wait(2000)
  stockInitiationPage.getApprovalLimit1().clear().type('1000')
  
})

Then('Click on Submit button for Stock Limit', function () {
  stockInitiationPage.getsubmitbutton().click()
})


///////--------------Added EA Approval 24April2023-------------------------/////////////////


When('Click on Stock Management', function () {

  stockManagementPage.getStockManagement().scrollIntoView()
  stockManagementPage.getStockManagement().click()
})

And('Click on Stock Transfer to EA Approval 1', function () {
  
  stockManagementPage.getStockEAApproval1().click()

})
And('Click on Submit for EA', function () {
  cy.wait(2000)
  stockManagementPage.getEAApprovalSubmitButton().click({ force: true })
})


Then('Click on Approve for EA', function () {
  cy.wait(1000)
  stockManagementPage.getEAApprovalConfirmButton().click({ force: true })
  cy.wait(2000)
  stockManagementPage.getStockInitiated().should('contain.text', this.data17.stockEAapproval1message)
})

//-------------------------Stock Transfer to EA Approval 2--------------------------------

And('Click on Stock Transfer to EA Approval 2', function () {
  
  stockManagementPage.getStockEAApproval2().click()

})

And('Click on Submit Approval2 for EA', function () {
  cy.wait(2000)
  stockManagementPage.getEAApproval2SubmitButton().click({ force: true })
})


Then('Click on Approve of Approval2 for EA', function () {
  cy.wait(1000)
  stockManagementPage.getEAApproval2ConfirmButton().click({ force: true })
  cy.wait(2000)
  stockManagementPage.getStockInitiated().should('contain.text', this.data17.stockEAapprovedmessage)
})


