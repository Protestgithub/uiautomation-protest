/// <reference types="Cypress" />
/// <reference types = "Cypress-iframe"/>

//----------------Imports---------------------------------------------------------------------
import { And, When } from "@badeball/cypress-cucumber-preprocessor";
import 'cypress-file-upload';
import 'cypress-iframe';
import BankManagement from '../../../../../../../../support/pageObjects/BankManagement';
import loginPage from '../../../../../../../../support/pageObjects/loginPage';
import walletManagement from '../../../../../../../../support/pageObjects/WalletManagement/walletManagement';
import "../../../../../../../../support/Utils/generic";

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
name = Cypress.env("walletName")
//-----------------------------------------------------------------------------------------


//---------------------------------------------Login----------------------------------------------------
//---------------------------------------------System Admin Login----------------------------------------------------


//----------------------------------------------------------------------------------------------------

And('Enter Wallet name and click on save', function () {
  
  cy.iframe().find('#multipleWalletMgmt_confirmSaveWallet > table > tbody > tr > td').invoke('text').then(($text) => {
    if ($text.includes(Cypress.env('walletName'))) 
    {
        cy.log("Wallet Exists")
    }
    else{
      WalletManagementPage.getWalletName().type(Cypress.env("walletName"), { force: true })
      WalletManagementPage.getSaveButton().click({ force: true })
      cy.readFile(filename).then((data) => {
        data.WalletName = name
        cy.writeFile(filename, data)
      })
    }
  })
})


