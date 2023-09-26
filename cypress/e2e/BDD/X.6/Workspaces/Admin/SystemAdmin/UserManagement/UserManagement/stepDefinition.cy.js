// // <reference types="Cypress" />
// /// <reference types = "Cypress-iframe"/>
// import { Given, And, Then, When } from "@badeball/cypress-cucumber-preprocessor";
// import 'cypress-iframe';

// import register from '../../../../../../../../support/pageObjects/UserManagement/register';

// //-------Object Decleration--------------------------------------------------------------------------

// const registerPage = new register()

// //-----------------------------------------------------------------------------------------------
// And('Enter the valid Detail for firstName and Invalid detail for lastName', function () {

//   registerPage.getFirstName().type(this.data2.personalInfo.firstName, { force: true })
//   // ErrorM.getEmailiD().type(this.data2.personalInfo.firstName)
//   registerPage.getLastName().type(354235)
//   registerPage.getLoginID().click({ force: true })
//   cy.waitUntil(() => {
//     return cy.iframe().find('[class="text-danger ng-star-inserted"]').should('be.visible')
//   })

// })

// //-----------------------------------------------------------------------------------------------


// And('Enter all the details for Customercare Admin', function () {
//   //-------------------Random Data-----------------------------------------------------------------
//   cy.getBasicInfoTextFields()

//   registerPage.getAllBasicFormDropDown().each(($el) => {
//     cy.wrap($el).select(1)
//   })
//   registerPage.getMobileNumber().clear().type(mobile, { force: true })
//   registerPage.getCountry().select(this.data2.personalInfo.country, { force: true })
//   cy.getCCAdminEmailID()

//   cy.readFile(filename).then((data) => {
//     data.CCAMobileNumber1 = mobile
//     cy.writeFile(filename, data)
//   })
// })




// And('Enter Customer Care Admin Profile Details And Upload the file', function () {
//   registerPage.getNextButtonBasic().click({ force: true })
//   // if (Cypress.env('app').includes('Core')) {
//   registerPage.getSecurityProfile().select('CustomerCareAdminSecurityProfile', { force: true })
//   registerPage.getAuthProfile().select('CCEDefault Profile', { force: true })
//   //}
//   // else {
//   //     registerPage.getAllProfileFormDropDown().each(($el) => {
//   //       cy.wrap($el).select(1)
//   //     })
//   //   }
//   registerPage.getNextButtonProfile().click({ force: true })


//   registerPage.getUploadfile().click({ force: true })
//   registerPage.getupload().selectFile('cypress/fixtures/Upload.png', { action: 'drag-drop' })
//   cy.wait(2000)
//   registerPage.getuploadBtn().click({ force: true })
//   cy.waitUntil(() => {
//     return cy.iframe().find('[class="alert-message ml-2"]').contains('Physical verification document uploaded')
//   })


//   registerPage.getSubmitButton().click({ force: true })


// })