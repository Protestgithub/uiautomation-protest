/// <reference types="Cypress" />
/// <reference types = "Cypress-iframe"/>

//----------------Imports---------------------------------------------------------------------
import { Given, When, Then, And, Before } from "@badeball/cypress-cucumber-preprocessor";
import 'cypress-file-upload';
import 'cypress-iframe';
import BankManagement from '../../../../../../../../support/pageObjects/BankManagement';
import loginPage from '../../../../../../../../support/pageObjects/loginPage';
import walletManagement from '../../../../../../../../support/pageObjects/WalletManagement/walletManagement';
import "../../../../../.././../../support/Utils/generic";

//----------------Object Declaration----------------------------------------------------------

const pageLogin = new loginPage()
const BankManagementPage = new BankManagement()
const WalletManagementPage = new walletManagement()
const uuid = () => Cypress._.random(1e10)
const uud = () => Cypress._.random(1e10)
PoolAccountNo = uuid()
BankID = uuid()
Priority = uud()
var name, PoolAccountNo, BankID, Priority
var filename = 'cypress/fixtures/userData/Bank&Walletdata.json'

//-----------------------------------------------------------------------------------------
//Added
function getbankName() {
  name = "";
  var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  for (var i = 0; i < 5; i++)
    name += possible.charAt(Math.floor(Math.random() * possible.length));
  return name;
}
function getRandomName() {
  name = "";
  var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
  for (var i = 0; i < 5; i++)
    name += possible.charAt(Math.floor(Math.random() * possible.length));
  return name;
}



And('Enter the Required Details', function () {
    BankManagementPage.getBankMaster().should('be.visible').click({ force: true })
    cy.intercept('/CoreWeb/mbanking/**').as('addBank')
    BankManagementPage.getAddBank().click({ force: true })
    cy.wait('@addBank', { timeout: 10000 })
    pageLogin.getiFrame()
    cy.wait(2000)
    cy.readFile(filename).then((data) => {
        let bankName = data.BankName
        BankManagementPage.getBankName().type(bankName)
        cy.getCSVfile()
        BankManagementPage.getProvider().select(this.data03.bankMaster.Provider, { force: true })

        let PoolAccountNo = data.PoolAcctNo
        BankManagementPage.getPoolAccountNo().type(PoolAccountNo)

        BankManagementPage.getBankId().type(BankID)
        BankManagementPage.getBankType().select(this.data03.bankMaster.BankType, { force: true })
        BankManagementPage.getPoolAccountType().select(this.data03.bankMaster.PoolAccountType, { force: true })
        BankManagementPage.getCBSType().select(this.data03.bankMaster.CBSType, { force: true })
        let Priority = data.PriorityValue
        BankManagementPage.getPriority().type(Priority)

    })
    // BankManagementPage.getChooseFile().attachFile('templates/AddBranches.csv')
    cy.intercept('/CoreWeb/mbanking/bankMasterAction_AddBankandBranches.action').as('addBank')
    BankManagementPage.getSubmitButton().click({ force: true })
    cy.wait('@addBank', { timeout: 10000 })
    cy.wait(1000)
})


Then('Assert the Error message if the Pool account number is already exist And  priority value', function () {
  BankManagementPage.getErrorMessage().contains(this.data03.PoolAccNo)
  BankManagementPage.getErrorMessage().contains(this.data03.Priority)
  })



//----------------------------------------------------------------------------------------------
And('Enter the Required Details for Bank', function () {
    BankManagementPage.getBankMaster().should('be.visible').click({ force: true })
    cy.intercept('/CoreWeb/mbanking/**').as('addBank')
    BankManagementPage.getAddBank().click({ force: true })
    cy.wait('@addBank', { timeout: 10000 })
    pageLogin.getiFrame()
    cy.wait(2000)
    cy.readFile(filename).then((data) => {
        let bankName = data.BankName
        BankManagementPage.getBankName().type(bankName)
        cy.getCSVfile()
        BankManagementPage.getProvider().select(this.data03.bankMaster.Provider, { force: true })
        BankManagementPage.getPoolAccountNo().type(3453425)
        BankManagementPage.getBankId().type(BankID)
        BankManagementPage.getBankType().select(this.data03.bankMaster.BankType, { force: true })
        BankManagementPage.getPoolAccountType().select(this.data03.bankMaster.PoolAccountType, { force: true })
        BankManagementPage.getCBSType().select(this.data03.bankMaster.CBSType, { force: true })
        BankManagementPage.getPriority().type(325)

    })
    // BankManagementPage.getChooseFile().attachFile('templates/AddBranches.csv')
    cy.intercept('/CoreWeb/mbanking/bankMasterAction_AddBankandBranches.action').as('addBank')
    BankManagementPage.getSubmitButton().click({ force: true })
    cy.wait('@addBank', { timeout: 10000 })
    cy.wait(1000)
})

Then('Assert the Error message if the Bank Name is already exist', function () {
  BankManagementPage.getErrorMessage().contains(this.data03.Bankname1)
})



And('Enter the Details without PoolAccountNo and check CBS type', function() {
  BankManagementPage.getBankMaster().should('be.visible').click({ force: true })
  cy.intercept('/CoreWeb/mbanking/**').as('addBank')
  BankManagementPage.getAddBank().click({ force: true })
  cy.wait('@addBank', { timeout: 10000 })
  pageLogin.getiFrame()
  cy.wait(2000)
  cy.readFile(filename).then((data) => {
      let bankName = data.BankName
      BankManagementPage.getBankName().type(bankName)
    
      BankManagementPage.getProvider().select(this.data03.bankMaster.Provider, { force: true })
      BankManagementPage.getBankId().type(BankID)
      BankManagementPage.getBankType().select(this.data03.bankMaster.BankType, { force: true })
      //BankManagementPage.getPoolAccountType().select(this.data03.bankMaster.PoolAccountType, { force: true })
      let Priority = data.PriorityValue
      BankManagementPage.getPriority().type(Priority)
  
  })
})

Then('Check that Pool Acc type and CBS type is not Mandatory field', function() {
  cy.intercept('/CoreWeb/mbanking/bankMasterAction_AddBankandBranches.action').as('addBank')
BankManagementPage.getSubmitButton().click({ force: true })
cy.wait('@addBank', { timeout: 10000 })
cy.wait(2000)
  BankManagementPage.getErrorMessage().contains(this.data03.Mandatoryfield)
  cy.waitUntil( () => {
    return cy.iframe().find('[for="fileUploadForm_poolAccType"]').should('be.visible')
       })
  cy.waitUntil( () => {
    return cy.iframe().find('[for="fileUploadForm_cbsType"]').should('be.visible')
       })
})


And('Enter the Details without Pool acc Type and CBS Type', function() {
BankManagementPage.getBankMaster().should('be.visible').click({ force: true })
cy.intercept('/CoreWeb/mbanking/**').as('addBank')
BankManagementPage.getAddBank().click({ force: true })
cy.wait('@addBank', { timeout: 10000 })
pageLogin.getiFrame()
cy.wait(2000)
cy.readFile(filename).then((data) => {
    let bankName = data.BankName
    BankManagementPage.getBankName().type(bankName)

    BankManagementPage.getProvider().select(this.data03.bankMaster.Provider, { force: true })

    let PoolAccountNo = data.PoolAcctNo
    BankManagementPage.getPoolAccountNo().type(PoolAccountNo)

    BankManagementPage.getBankId().type(BankID)
    BankManagementPage.getBankType().select(this.data03.bankMaster.BankType, { force: true })
    let Priority = data.PriorityValue
    BankManagementPage.getPriority().type(Priority)

})
// BankManagementPage.getChooseFile().attachFile('templates/AddBranches.csv')
cy.intercept('/CoreWeb/mbanking/bankMasterAction_AddBankandBranches.action').as('addBank')
BankManagementPage.getSubmitButton().click({ force: true })
cy.wait('@addBank', { timeout: 10000 })
cy.wait(1000)
// cy.waitUntil( () => {
//   return cy.iframe().find('.errorMessage').should('be.visible')
//      })
})


Then('Assert the Error message that Pool type and CBS type is Mandatory' , function() {
  BankManagementPage.getErrorMessage().contains(this.data03.PoolAccType)
  BankManagementPage.getErrorMessage().contains(this.data03.CBStype)
})


And('Enter the Details without PriorityValue', function() {
  BankManagementPage.getBankMaster().should('be.visible').click({ force: true })
  cy.intercept('/CoreWeb/mbanking/**').as('addBank')
  BankManagementPage.getAddBank().click({ force: true })
  cy.wait('@addBank', { timeout: 10000 })
  pageLogin.getiFrame()
  cy.wait(2000)
  cy.readFile(filename).then((data) => {
      let bankName = data.BankName
      BankManagementPage.getBankName().type(bankName)
     
      BankManagementPage.getProvider().select(this.data03.bankMaster.Provider, { force: true })
  
      let PoolAccountNo = data.PoolAcctNo
      BankManagementPage.getPoolAccountNo().type(PoolAccountNo)
  
      BankManagementPage.getBankId().type(BankID)
      BankManagementPage.getBankType().select(this.data03.bankMaster.BankType, { force: true })
      BankManagementPage.getPoolAccountType().select(this.data03.bankMaster.PoolAccountType, { force: true })
      BankManagementPage.getCBSType().select(this.data03.bankMaster.CBSType, { force: true })
     
  
  })
  // BankManagementPage.getChooseFile().attachFile('templates/AddBranches.csv')
  cy.intercept('/CoreWeb/mbanking/bankMasterAction_AddBankandBranches.action').as('addBank')
  BankManagementPage.getSubmitButton().click({ force: true })
  cy.wait('@addBank', { timeout: 10000 })
  cy.wait(1000)
  // cy.waitUntil( () => {
  //   return cy.iframe().find('.errorMessage').should('be.visible')
  //      })

})

Then('Assert the Error Message that PriorityValue is Mandatory', function() {
  BankManagementPage.getErrorMessage().contains(this.data03.Prirityvalue)

})


And('Enter the Details without PoolAccountNo', function() {
  BankManagementPage.getBankMaster().should('be.visible').click({ force: true })
  cy.intercept('/CoreWeb/mbanking/**').as('addBank')
  BankManagementPage.getAddBank().click({ force: true })
  cy.wait('@addBank', { timeout: 10000 })
  pageLogin.getiFrame()
  cy.wait(2000)
  cy.readFile(filename).then((data) => {
      let bankName = data.BankName
      BankManagementPage.getBankName().type(bankName)
   
      BankManagementPage.getProvider().select(this.data03.bankMaster.Provider, { force: true })
  
      BankManagementPage.getBankId().type(BankID)
      BankManagementPage.getBankType().select(this.data03.bankMaster.BankType, { force: true })
      BankManagementPage.getPoolAccountType().select(this.data03.bankMaster.PoolAccountType, { force: true })
      BankManagementPage.getCBSType().select(this.data03.bankMaster.CBSType, { force: true })
      let Priority = data.PriorityValue
      BankManagementPage.getPriority().type(Priority)
  
  })
  // BankManagementPage.getChooseFile().attachFile('templates/AddBranches.csv')
  cy.intercept('/CoreWeb/mbanking/bankMasterAction_AddBankandBranches.action').as('addBank')
  BankManagementPage.getSubmitButton().click({ force: true })
  cy.wait('@addBank', { timeout: 10000 })
  cy.wait(1000)
  // cy.waitUntil( () => {
  //   return cy.iframe().find('.errorMessage').should('be.visible')
  //      })

})


Then('Assert the error message that PoolAccountNo is mandatory', function(){
  BankManagementPage.getErrorMessage().contains(this.data03.Mandatoryfield)

})

And('Enter All the Required Details for creation of Bank', function() {

  BankManagementPage.getBankMaster().should('be.visible').click({ force: true })
  cy.intercept('/CoreWeb/mbanking/**').as('addBank')
  BankManagementPage.getAddBank().click({ force: true })
  cy.wait('@addBank', { timeout: 10000 })
  pageLogin.getiFrame()
  cy.wait(2000)
 // BankManagementPage.getBankName().type(Cypress.env('bankName'), { force: true })
  cy.getCSVfile()
  BankManagementPage.getProvider().select(this.data03.bankMaster.Provider, { force: true })
  cy.readFile(filename).then((data) => {
    let bankName = data.BankName
    BankManagementPage.getBankName().type(bankName)
  
  BankManagementPage.getPoolAccountNo().type(PoolAccountNo)
  BankManagementPage.getBankId().type(BankID)
  BankManagementPage.getBankType().select(this.data03.bankMaster.BankType, { force: true })
  BankManagementPage.getPoolAccountType().select(this.data03.bankMaster.PoolAccountType, { force: true })
  BankManagementPage.getCBSType().select(this.data03.bankMaster.CBSType, { force: true })
  BankManagementPage.getPriority().type(Priority)

  data.PoolAcctNo = PoolAccountNo
  data.PriorityValue = Priority

})
  // BankManagementPage.getChooseFile().attachFile('templates/AddBranches.csv')
  cy.intercept('/CoreWeb/mbanking/bankMasterAction_AddBankandBranches.action').as('addBank')
  BankManagementPage.getSubmitButton().click({ force: true })
  cy.wait('@addBank', { timeout: 10000 })
  cy.wait(1000)
  BankManagementPage.getAsserMessage().contains(this.data03.bankMaster.assert)
  })