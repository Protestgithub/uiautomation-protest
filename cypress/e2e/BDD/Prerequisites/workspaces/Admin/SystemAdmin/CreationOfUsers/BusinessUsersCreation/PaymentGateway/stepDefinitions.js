// /// <reference types="Cypress" />
// /// <reference types = "Cypress-iframe"/>

// //----------------Imports---------------------------------------------------------------------
// import 'cypress-iframe'
// import { Given, When, Then, And, Before } from "@badeball/cypress-cucumber-preprocessor";
// import loginPage from '../../../../../../../../../support/pageObjects/loginPage';
// import homePage from '../../../../../../../../../support/pageObjects/homePage';
// import { recurse } from 'cypress-recurse';
// import "../../../../../../../../../support/Utils/generic";
// import "../../../../../../../../../support/Utils/subscriberCommands";
// import "../../../../../../../../../support/Utils/AdministratorCommands"
// import "../../../../../../../../../support/Utils/BusinessUserCommands";
// import register from '../../../../../../../../../support/pageObjects/UserManagement/register';
// import approvals from '../../../../../../../../../support/pageObjects/UserManagement/approvals';
// import manageUsers from '../../../../../../../../../support/pageObjects/UserManagement/manageUsers';
// import myActivity from '../../../../../../../../../support/pageObjects/MyActivity/myActivity';
// import API from '../../../../../../../../../support/pageObjects/API';
// import securityQuestion from '../../../../../../../../../support/pageObjects/SecurityQuestion/securityQuestion';


// //----------------Object Declaration-----------------------------------------------------------------
// const pageLogin = new loginPage()
// const welcomePage = new homePage()
// const registerPage = new register()
// const approvalPage = new approvals()
// const manageUsersPage = new manageUsers()
// const APIPage = new API()
// const myActivityPage = new myActivity()
// const securityQuestionPage = new securityQuestion()
// const uuid = () => Cypress._.random(1e8)
// const uuid1 = () => Cypress._.random(1e6)
// const uuuid = () => Cypress._.random(1e3)
// amount = uuuid()
// var loginId, mobile,KycValue, amount, name, ifscnum, accnumber
// const kycid = () => Cypress._.random(1e8)
// const timestamp = (new Date).getTime()
//   KycValue = "A" + timestamp
// mobile = "77" + uuid1()
// var mobile1, Submobile, loginId, name
// mobile1 = "77" + uuid()
// var filename = 'cypress/fixtures/userData/AdministratorData.json'
// var subRegistration = 'cypress/fixtures/userData/subscriberReg.json'
// var BuisnessReg = 'cypress/fixtures/userData/BusinessUsersData.json'
// var BuisnessRegO2C = 'cypress/fixtures/userData/BusinessUsersDataO2C.json'
// var BankData = 'cypress/fixtures/userData/BusinessUsersDataO2C.json'

// //-----------------------------------variable declaration-----------------
// function getRandomName() {
//   name = "";
//   var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
//   for (var i = 0; i < 5; i++)
//     name += possible.charAt(Math.floor(Math.random() * possible.length));
//   return name;
// }

// function getRandomName1() {
//   name = "12";
//   var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
//   for (var i = 0; i < 7; i++)
//     name += possible.charAt(Math.floor(Math.random() * possible.length));
//   return name;
// }


// //--------------------------Test Scripts--------------------------------------------------------------

