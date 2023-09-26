/// <reference types="Cypress" />
/// <reference types = "Cypress-iframe"/>

//----------------Imports---------------------------------------------------------------------
import { And, Then } from "@badeball/cypress-cucumber-preprocessor";
import 'cypress-file-upload';
import 'cypress-iframe';
import BankManagement from '../../../../../../../../support/pageObjects/BankManagement';
import "../../../../../../../../support/Utils/BankCommands";



//----------------Object Declaration-----------------------------------------------------------------

const BankManagementPage = new BankManagement()
const uuid = () => Cypress._.random(1e10)
const uud = () => Cypress._.random(1e3)
PoolAccountNo = uuid()
BankID = uuid()
Priority = uud()
var PoolAccountNo
var BankID
var Priority
var filename = 'cypress/fixtures/userData/Bank&Walletdata.json'



//----------------BDD Hooks-----------------------------------------------------------------

//-------------------------------------------------TC_04----------------------------------------------------


// When ('Navigate to Bank Master and Click on it', function(){
//   BankManagementPage.getBankMaster().click({force: true})
//   BankManagementPage.getAddBank().click()
//   
// })

And('Navigate to MFS provider Bank type master and Click on Modify or Delete Bank', function () {
  
  BankManagementPage.getMFSproviderBankTypeMaster().click()
   cy.intercept('/CoreWeb/mfs/MfsBankMapping_mfsProviderList*').as('getModifyBank')
  BankManagementPage.getModifyORDelete().click()
  cy.wait('@getModifyBank')
})

Then('Verify the Success Message', function () {
  BankManagementPage.getSuccessMessage().should('contain', this.data03.bankMaster.Assert)
})

Then('Verify the Text', function () {
  BankManagementPage.getBankname().should('contain', this.data03.bankMaster.assertone)
})

Then('Select the bank and associate new services', function () {
  
  BankManagementPage.getMFS1().click()
  BankManagementPage.getModify().click()
  cy.wait(2000)
  cy.getbankType()
  cy.getBox()
  BankManagementPage.getModify().click({ force: true })
  cy.wait(2000)
  BankManagementPage.getSelectAll().click()
  BankManagementPage.getSubmit().click()
  
})

//--------------------------------------------TC_06-----------------------------------------------------

And('Enter all the details Except Bank Name', function () {
  //cy.getCSVfile()
  BankManagementPage.getProvider().select(this.data03.bankMaster.Provider, { force: true })
  PoolAccountNo = uuid()
  BankID = uuid()
  BankManagementPage.getProvider().select(this.data03.bankMaster.Provider)
  BankManagementPage.getPoolAccountNo().type(PoolAccountNo)
  BankManagementPage.getBankId().type(BankID)
  BankManagementPage.getBankType().select(this.data03.bankMaster.BankType, { force: true })
  BankManagementPage.getPoolAccountType().select(this.data03.bankMaster.PoolAccountType, { force: true })
  BankManagementPage.getCBSType().select(this.data03.bankMaster.CBSType, { force: true })
  BankManagementPage.getPriority().type(Priority)
 // BankManagementPage.getChooseFile().attachFile('templates/AddBranches.csv')
   cy.intercept('/CoreWeb/mbanking/bankMasterAction_AddBankandBranches.action').as('getAddBankConfirm')
  BankManagementPage.getSubmitButton().click({ force: true })
  cy.wait('@getAddBankConfirm')
})

Then('Confirm the Bank Error message', function () {
  
  BankManagementPage.getErrorMessage().contains(this.data03.bankMaster.ErrorMessage)
})