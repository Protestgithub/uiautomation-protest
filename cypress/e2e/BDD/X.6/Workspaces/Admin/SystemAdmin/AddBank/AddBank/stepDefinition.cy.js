// // <reference types="Cypress" />
// /// <reference types = "Cypress-iframe"/>
// import { Given, And, Then, When } from "@badeball/cypress-cucumber-preprocessor";
// import 'cypress-iframe';
// import manageUsers from '../../../../../../../../support/pageObjects/UserManagement/manageUsers';
// import loginPage from '../../../../../../../../support/pageObjects/loginPage';
// var businesslogin = "cypress/fixtures/userData/BusinessUsersData.json"
// //-------Object Decleration--------------------------------------------------------------------------
// const manageUsersPage = new manageUsers()
// const pageLogin = new loginPage()

// //-----------------------------------------------------------------------------------------------

// And('Enter Mobile number and KYC number in search menu for Merchant user', function() {

//     pageLogin.getiFrame()
//     manageUsersPage.getSearchUser().click({ force: true })
//     cy.readFile(businesslogin).then((data) => {
//       var BusinessMob = data.registeredMobile
//       manageUsersPage.getSearchUser().type(BusinessMob, { force: true })
//     })
//     manageUsersPage.getSearchUserButton().click({ force: true })
//     cy.wait(4000)
//     manageUsersPage.getViewIcon().eq(0).click({ force: true })
// })




// Then('Check for the Add Bank Account is disabled', function() {
//     manageUsersPage.getAccountInfo().click({ force: true })
//     manageUsersPage.getBankAcc().click({force:true})
//  //manageUsersPage.getAddBankAccont().should('be.disabled')
//  manageUsersPage.getAddBankAccont().should('not.be.visible')
// })
