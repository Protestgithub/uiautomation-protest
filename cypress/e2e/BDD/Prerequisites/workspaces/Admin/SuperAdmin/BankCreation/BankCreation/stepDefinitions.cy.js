/// <reference types="Cypress" />
/// <reference types = "Cypress-iframe"/>

//----------------Imports---------------------------------------------------------------------
import { And, When } from "@badeball/cypress-cucumber-preprocessor";
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
//---------------------------------------------Login----------------------------------------------------
//---------------------------------------------System Admin Login----------------------------------------------------


//----------------------------------------------------------------------------------------------------


//-------------------------------------Bank Creation-------------------------------------------------
When('Navigate to Bank Master and Click on it', function () {

  if (Cypress.env('version').includes('x.4')) {
    BankManagementPage.getBankMasterx4().should('be.visible').click({ force: true })
  }
  else {
    BankManagementPage.getBankMaster().should('be.visible').click({ force: true })
    cy.intercept('/CoreWeb/mbanking/**').as('addBank')
    BankManagementPage.getAddBank().click()
    cy.wait('@addBank', { timeout: 10000 })

  }

})

And('Enter All the Required Details for Bank', function () {
  BankManagementPage.getMFSproviderBankTypeMaster().should('be.visible').click({ force: true })
  cy.intercept('/CoreWeb/mfs/MfsBankMapping_mfsProviderListForBankMapping.action*').as('getModifyorDelete')
  BankManagementPage.getModifyORDelete().click({ force: true })
  cy.wait('@getModifyorDelete', { timeout: 10000 })
  BankManagementPage.getMFS1().click({ force: true })
  cy.intercept('/CoreWeb/mfs/MfsBankMapping_mfsProviderListForBankMapping.action').as('getModifyBank')
  BankManagementPage.getModify().click({ force: true })
  cy.wait('@getModifyBank', { timeout: 10000 })
  cy.wait(1000)
  cy.iframe().find("#MfsBankMapping_modifyBankMapping > table > tbody > tr > td").invoke('text').then(($text) => {
    if ($text.includes(Cypress.env('bankName'))) {
      cy.log("bank exists")
    }
    else {
      if (Cypress.env('version').includes('x.4')) {
        BankManagementPage.getBankMasterx4().should('be.visible').click({ force: true })
        cy.wait(2000)
        BankManagementPage.getBankName().type(Cypress.env('bankName'), { force: true })
        cy.getCSVfile()
        BankManagementPage.getProvider().select(this.data03.bankMaster.Provider, { force: true })
        cy.readFile(filename).then((data) => {
          data.BankName = Cypress.env('bankName')
          cy.writeFile(filename, data)
        })
        BankManagementPage.getPoolAccountNo().type(PoolAccountNo)
        BankManagementPage.getBankId().type(BankID)
        BankManagementPage.getBankType().select(this.data03.bankMaster.BankType, { force: true })
        BankManagementPage.getPoolAccountType().select(this.data03.bankMaster.PoolAccountType, { force: true })
        BankManagementPage.getCBSType().select(this.data03.bankMaster.CBSType, { force: true })
        BankManagementPage.getPriority().type(Priority)
        // BankManagementPage.getChooseFile().attachFile('templates/AddBranches.csv')
        cy.intercept('/CoreWeb/mbanking/bankMasterAction_AddBankandBranches.action').as('addBank')
        BankManagementPage.getSubmitButton().click({ force: true })
        cy.wait('@addBank', { timeout: 10000 })
        cy.wait(1000)
        BankManagementPage.getAsserMessage().contains(this.data03.bankMaster.assert)
      }
      else {
        BankManagementPage.getBankMaster().should('be.visible').click({ force: true })
        cy.intercept('/CoreWeb/mbanking/**').as('addBank')
        BankManagementPage.getAddBank().click({ force: true })
        cy.wait('@addBank', { timeout: 10000 })
        pageLogin.getiFrame()
        cy.wait(2000)
        BankManagementPage.getBankName().type(Cypress.env('bankName'), { force: true })
        cy.getCSVfile()
        BankManagementPage.getProvider().select(this.data03.bankMaster.Provider, { force: true })
        cy.readFile(filename).then((data) => {
          data.BankName = Cypress.env('bankName')
          cy.writeFile(filename, data)

          BankManagementPage.getPoolAccountNo().type(PoolAccountNo)
          BankManagementPage.getBankId().type(BankID)
          BankManagementPage.getBankType().select(this.data03.bankMaster.BankType, { force: true })
          BankManagementPage.getPoolAccountType().select(this.data03.bankMaster.PoolAccountType, { force: true })
          BankManagementPage.getCBSType().select(this.data03.bankMaster.CBSType, { force: true })
          BankManagementPage.getPriority().type(Priority)
          // BankManagementPage.getChooseFile().attachFile('templates/AddBranches.csv')


          data.PoolAcctNo = PoolAccountNo
          data.PriorityValue = Priority

        })
        cy.intercept('/CoreWeb/mbanking/bankMasterAction_AddBankandBranches.action').as('addBank')
        BankManagementPage.getSubmitButton().click({ force: true })
        cy.wait('@addBank', { timeout: 10000 })
        cy.wait(1000)
        BankManagementPage.getAsserMessage().contains(this.data03.bankMaster.assert)


      }
    }
  })

})