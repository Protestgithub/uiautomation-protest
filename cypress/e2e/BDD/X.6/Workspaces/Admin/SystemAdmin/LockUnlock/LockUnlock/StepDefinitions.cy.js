// /// <reference types="Cypress" />
// /// <reference types = "Cypress-iframe"/>

// //----------------Imports---------------------------------------------------------------------
// import 'cypress-iframe'
// import { Given, When, Then, And,Before} from "@badeball/cypress-cucumber-preprocessor";
// import loginPage from '../../../../../support/pageObjects/loginPage';
// import homePage from '../../../../../support/pageObjects/homePage';
// import { recurse } from 'cypress-recurse';
// import "../../../../../support/Utils/generic";
// import "../../../../../support/Utils/subscriberCommands";
// import "../../../../../support/Utils/AdministratorCommands";
// import "../../../../../support/Utils/BusinessUserCommands";
// import register from '../../../../../support/pageObjects/UserManagement/register';
// import approvals from '../../../../../support/pageObjects/UserManagement/approvals';
// import manageUsers from '../../../../../../../../support/pageObjects/UserManagement/manageUsers';
// import myActivity from '../../../../../support/pageObjects/MyActivity/myActivity';

// //----------------Object Declaration-----------------------------------------------------------------
// const pageLogin = new loginPage()
// const welcomePage = new homePage()
// const registerPage = new register()
// const approvalPage = new approvals()
// const manageUsersPage = new manageUsers()
// let Bulogin = 'cypress/fixtures/userData/BusinessUsersData.json'
// let SubMob = 'userData/subscriberReg.json'
// const myActivityPage = new myActivity()
// const uuid = () => Cypress._.random(1e8)
// const uuid1 = () => Cypress._.random(1e8)
// const uuuid = () => Cypress._.random(1e3)
// amount = uuuid()
// var loginId, mobile, mobile1, KycValue, amount, name
// const timestamp = (new Date).getTime()
//   KycValue = "A" + timestamp
// mobile = "77" + uuid1()
// mobile1 = "77" + uuid()
// var filename = 'cypress/fixtures/userData/ManageUser.json'
// function getRandomName() {
//   name = "";
//   var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
//   for (var i = 0; i < 5; i++)
//     name += possible.charAt(Math.floor(Math.random() * possible.length));
//   return name;
// }

// //---------------------------------------------------------------------


// And('Enter the Mobile Number in search menu',()=>{
//     cy.wait(3000)
//     manageUsersPage.getSearchUser().type(7786105505)
//     manageUsersPage.getSearchUserButton().click()
//   })
  
//   And('click on LockUnlock wallets',()=>{
//     cy.wait(3000)
//     manageUsersPage.getlockunclockWallets().click()
//     manageUsersPage.getUsd().eq(0).click()
//     manageUsersPage.getLock().click()
//     manageUsersPage.getReason().type('gxcfsdhfhsdhsj')
//   })
  
//   And('click on YES button for LockUnlock',()=>{
//     cy.wait(3000)
//     manageUsersPage.getYESBTN().click()
//   })
  

  
// And('click on LockUnlock wallets1',()=>{
//     cy.wait(3000)
//     manageUsersPage.getlockunclockWallets().click()
//     manageUsersPage.getIbutton().eq(0).click()
//   })

  
// And('Assert the Locked status',()=>{
//     cy.wait(3000)
//     manageUsersPage.getlockedstatus().contains('Outgoing Payments')
//   })
  

  
// And('Assert the Locked status for incoming Payments',()=>{
//     cy.wait(3000)
//     manageUsersPage.getlockedstatus().contains('Incoming Payments')
//   })