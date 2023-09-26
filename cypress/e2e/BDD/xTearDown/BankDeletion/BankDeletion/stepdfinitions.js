
/// <reference types="Cypress" />
/// <reference types = "Cypress-iframe"/>

//----------------Imports---------------------------------------------------------------------
import 'cypress-iframe'
import { Given, When, Then, And, Before } from "@badeball/cypress-cucumber-preprocessor";
import loginPage from '../../../../../support/pageObjects/loginPage';
import homePage from '../../../../../support/pageObjects/homePage';

import BankManagement from '../../../../../support/pageObjects/BankManagement';
//----------------Object Declaration----------------------------------------------------------
const pageLogin = new loginPage()
const welcomePage = new homePage()
const BankManagementPage = new BankManagement

var filename = 'cypress/fixtures/userData/Bank&Walletdata.json'


//-----------@Test--------------------------------------
When('Navigate to Bank Master and Click on Modify service', function () {
    BankManagementPage.getBankMaster().should('be.visible').click({ force: true })
    cy.intercept('/CoreWeb/mbanking/**').as('addBank')
    BankManagementPage.getModifyServiceprovider().click({ force: true })
    cy.wait('@addBank',{timeout:10000})
  })
  
  And('Select the Bank' ,function () {
    cy.readFile(filename).then((data) => {
      let bankName = data.BankName
      let formattedBankName = bankName.toUpperCase()
      cy.wait(2000)
      cy.iframe().find('select[name="bankId"]>option').contains(formattedBankName).invoke('text').then((text) => {
        cy.log(text);
        data.Bankselection = text
        cy.writeFile('cypress/fixtures/userData/Bank&Walletdata.json', data)
      })
  
    
    cy.readFile('cypress/fixtures/userData/Bank&Walletdata.json').then((data) => {
      let bankIDName = data.Bankselection
      cy.log(bankIDName)
      BankManagementPage.getSelectBank().select(bankIDName)
    })
    
    })
      cy.intercept('/CoreWeb/mbanking/optBankAccModify_initModifyOptBankAcc.action').as('Submit')
      BankManagementPage.getSubmit().click( { force:true } )
      cy.wait('@Submit',{timeout:10000})
      
      BankManagementPage.getStatus().select(2)
      cy.intercept('/CoreWeb/mbanking/optBankAccModify_getAllAssociatedOptBankAccounts.action').as('modify')
      BankManagementPage.getModify().click( { force:true } )
      cy.wait('@modify')
      BankManagementPage.getConfirmbtn().click({ force:true })
  
  })
Then('Verify the sucess message of deleted bank' , function(){
  BankManagementPage.getAssert().contains(this.data03.bankMaster.successmsg)
})