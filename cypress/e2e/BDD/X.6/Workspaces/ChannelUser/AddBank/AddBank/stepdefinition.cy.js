// // <reference types="Cypress" />
// /// <reference types = "Cypress-iframe"/>
// import { Given, And, Then, When } from "@badeball/cypress-cucumber-preprocessor";
// import 'cypress-iframe';
// import manageUsers from '../../../../../../support/pageObjects/UserManagement/manageUsers';
// //-------Object Decleration--------------------------------------------------------------------------

// const manageUsersPage = new manageUsers()

// //-----------------------------------------------------------------------------------------------


// Then('Check for the Add Bank Account', function() {
//     manageUsersPage.getAccinfo().click({ force:true })
//     manageUsersPage.getAccountInfo().click({ force:true })
//     manageUsersPage.getBankAcc().click({force:true})
//     manageUsersPage.getAddBankAccont().click({force:true})
// cy.waitUntil(()=>{
//     return cy.iframe().find('[class="modal-header"]').contains('Add Bank Account')
// })
// })


// Then('Check the Bank Account', function() {
//     manageUsersPage.getAccountInfo().click({ force: true })
//     manageUsersPage.getBankAcc().click({force:true})
//    // manageUsersPage.getFieldBankName().contains('BANK NAME')
// })

