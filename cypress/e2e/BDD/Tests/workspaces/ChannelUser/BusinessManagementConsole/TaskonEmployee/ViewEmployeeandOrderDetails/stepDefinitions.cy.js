/// <reference types="Cypress" />
/// <reference types = "Cypress-iframe"/>

//----------------Imports---------------------------------------------------------------------
import 'cypress-iframe'
import { Given, When, Then, And, Before } from "@badeball/cypress-cucumber-preprocessor";
import loginPage from '../../../../../../../../support/pageObjects/loginPage';
import { recurse } from 'cypress-recurse';
import homePage from '../../../../../../../../support/pageObjects/homePage';
import approvals from '../../../../../../../../support/pageObjects/UserManagement/approvals';
import register from '../../../../../../../../support/pageObjects/UserManagement/register';
import manageUsers from '../../../../../../../../support/pageObjects/UserManagement/manageUsers';
import myActivity from '../../../../../../../../support/pageObjects/MyActivity/myActivity';



//----------------Object Declaration-----------------------------------------------------------------
const pageLogin = new loginPage()
const registerPage = new register()
const manageUsersPage = new manageUsers()
const myActivityPage = new myActivity()
const welcomePage = new homePage()
const approvalPage = new approvals()
const uuid = () => Cypress._.random(1e8)
const uuid1 = () => Cypress._.random(1e8)
const uuuid = () => Cypress._.random(1e3)
amount = uuuid()
var mobile, mobile1, KycValue, amount, name, ifscnum, accnumber
const timestamp = (new Date).getTime()
KycValue = "A" + timestamp
mobile = "77" + uuid1()
mobile1 = "77" + uuid()
var BuisnessReg = 'cypress/fixtures/userData/BusinessUsersData.json'
//var BankData = 'cypress/fixtures/userData/BusinessUsersDataO2C.json'
var BuisnessRegO2C = 'cypress/fixtures/userData/BusinessUsersDataO2C.json'
let businesslogin = "cypress/fixtures/userData/BusinessUsersData.json"
function getRandomName() {
    name = "";
    var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    for (var i = 0; i < 5; i++)
        name += possible.charAt(Math.floor(Math.random() * possible.length));
    return name;
}




// And('Select user type Self in drop down', function () {
//     manageUsersPage.getUserType().select("Self")
// })

And('Enter Mobile number and KYC number in search menu for Employee', function () {
    cy.readFile(BuisnessReg).then((data)=>{
       let employeeMobile= data.corpregisteredEmployeeMobile
       manageUsersPage.getSearchUser().type(employeeMobile)
       manageUsersPage.getSearchUserButton().click()
    })
    manageUsersPage.getBusinessUserDetail().should('contain.text', ' Business')
})

// And('Click on search to view self information', function () {
//     manageUsersPage.getSearchUserButton().click({ force: true })
// })

// And('Click on Action icon', function () {
//     manageUsersPage.getViewAllDetailsButton().click({ force: true })
// })

Then('Click on edit button', function () {
    manageUsersPage.getEditIcon().eq(1).click({ force: true })
})

And('Enter Mobile number and KYC number in search menu for Employee1', function () {
    cy.readFile(BuisnessReg).then((data)=>{
       let employeeMobile= data.corpregisteredEmployeeMobile1
       manageUsersPage.getSearchUser().type(employeeMobile)
       manageUsersPage.getSearchUserButton().click()
    })
    manageUsersPage.getBusinessUserDetail().should('contain.text', ' Business')
})

// Then('Click on order details for Employee', function () {
//     manageUsersPage.getOrderDetailsButton().click({ force: true })
// })
