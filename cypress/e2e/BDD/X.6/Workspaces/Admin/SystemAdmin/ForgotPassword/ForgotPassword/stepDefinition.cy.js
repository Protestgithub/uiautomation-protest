
// // <reference types="Cypress" />
// /// <reference types = "Cypress-iframe"/>
// import { Given, And, Then, When } from "@badeball/cypress-cucumber-preprocessor";
// import 'cypress-iframe';
// import loginPage from '../../../../../../../../support/pageObjects/loginPage';
// let Sysfilelogin = 'cypress/fixtures/userData/SystemAdminLogin.json'
// //-------Object Decleration--------------------------------------------------------------------------
// const pageLogin = new loginPage()
// //-----------------------------------------------------------------------------------------------

// And('Enter the EmailID and click on verify', function() {

//     cy.readFile(Sysfilelogin).then((data) => {
//       let EmailID = data.SYSEmailId
   
//        cy.waitUntil(()=>{
//            return cy.iframe().find('.form-input').should('be.visible').type(EmailID)
//        })
//       })
  
//       pageLogin.getsubmitBtn().click({force:true})
     
//     cy.waitUntil(()=>{
//       return cy.iframe().find('[role="img"]').should('be.visible')
//   })
//   cy.waitUntil(()=>{
//     return cy.iframe().find('[class="login-btn w-400-forgot-pwd"]').click({force:true})
//   })
//   })

  

// Then('assert the security question page', function() {
//     cy.waitUntil(()=>{
//       return cy.iframe().find('[class="login-btn"]').should('be.visible')
//     })
  
//   })