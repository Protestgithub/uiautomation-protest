// // <reference types="Cypress" />
// /// <reference types = "Cypress-iframe"/>
// import { Given, And, Then, When } from "@badeball/cypress-cucumber-preprocessor";
// import 'cypress-iframe';
// import manageUsers from '../../../../../../../../support/pageObjects/UserManagement/manageUsers';

// import homePage from '../../../../../../../../support/pageObjects/homePage';
// import SessionManagement from '../../../../../../../../support/pageObjects/SessionManagement/SessionManagement';

// //-------Object Decleration--------------------------------------------------------------------------

// const welcomePage = new homePage()
// const session = new SessionManagement()

// //-----------------------------------------------------------------------------------------------

// And('Click On My Sessions and Click on any Session' ,function () {
//     welcomePage.getmysessionoption().click()
    

// })

// Then('Click on any Session and Assert the Session Information', function() {
//     session.getrow().eq(1).click( {force:true})

//     cy.waitUntil(()=>{
//         return cy.iframe().find('[class="col-12 mb-3"]').should('be.visible')
//     })

// })
