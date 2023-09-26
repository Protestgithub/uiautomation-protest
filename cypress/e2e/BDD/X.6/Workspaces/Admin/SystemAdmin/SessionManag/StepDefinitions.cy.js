// /// <reference types="Cypress" />
// /// <reference types = "Cypress-iframe"/>

// //-------------------------------Imports---------------------------------------------------------------------
// import { And, Given, Then, When } from "@badeball/cypress-cucumber-preprocessor";
// import 'cypress-iframe';
// import homePage from '../../../../../../../support/pageObjects/homePage';
// import loginPage from '../../../../../../../support/pageObjects/loginPage';
// import securityQuestion from '../../../../../../../support/pageObjects/SecurityQuestion/securityQuestion';
// import SessionManagement from "../../../../../../../support/pageObjects/SessionManagement/SessionManagement";
// import "../../../../support/Utils/generic";

// //----------------Object Declaration----------------------------------------------------------

// const welcomePage = new homePage()
// const session = new SessionManagement()
// const login = new loginPage()
// const securityQuestionPage = new securityQuestion()
// const SubMob = 'userData/subscriberReg.json'
// var name;

// //--------------------------------variable declaration-------------------
// function getRandomName1() {
//   name = "12";
//   var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
//   for (var i = 0; i < 7; i++)
//     name += possible.charAt(Math.floor(Math.random() * possible.length));
//   return name;
// }

// //-------------------------------------------------------------------------



// And('Click on delete icon for any previous device',()=>{
//     cy.wait(3000)
//     session.getcheckbox().eq(1).click()
//     session.getdeletedevices().click()
//     cy.wait(3000)
//     session.getYesbtn().click({ multiple: true })
//   })
  
//   And('click on logout',()=>{
//   cy.wait(3000)
//   session.getcheckbox().eq(1).click()
//   session.getLogoutofsessions().click() 
//   cy.wait(3000)
//   session.getLogoutyesbtn().click()
//   })
  