// /// <reference types="Cypress" />
// /// <reference types = "Cypress-iframe"/>

// //----------------Imports---------------------------------------------------------------------
// import { And, Then } from "@badeball/cypress-cucumber-preprocessor";
// import 'cypress-file-upload';
// import 'cypress-iframe';
// import BankManagement from '../../../../../../../../support/pageObjects/BankManagement';
// import "../../../../../support/Utils/BankCommands";


// //----------------Object Declaration-----------------------------------------------------------------

// const BankManagementPage = new BankManagement()
// const uuid = () => Cypress._.random(1e10)
// const uud = () => Cypress._.random(1e3)
// PoolAccountNo = uuid()
// BankID = uuid()
// Priority = uud()
// var PoolAccountNo
// var BankID
// var Priority
// var filename = 'cypress/fixtures/userData/Bank&Walletdata.';






// When('Navigate MFS provder bank type master and click on add bank',()=>{
//     cy.wait(3000)
    
//      BankManagementPage.getMFSproviderBankTypeMaster().should('be.visible').click({ multiple: true })
//      BankManagementPage.getAddBank1().eq(1).click()
   
//   })
  
//   And('Assert the default bank type',()=>{
//     cy.wait(3000)
//     BankManagementPage.getDefaultBankType1().contains('BANKFORWALLET0206')
//   })