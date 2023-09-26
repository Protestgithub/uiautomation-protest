/// <reference types="Cypress" />
/// <reference types = "Cypress-iframe"/>

//----------------Imports---------------------------------------------------------------------
import { Given, And, Then, When } from "@badeball/cypress-cucumber-preprocessor";
import 'cypress-iframe';

import manageUsers from "../../../../../../../support/pageObjects/UserManagement/manageUsers";
import "../../../../../../../support/Utils/generic"
import "../../../../../../../support/Utils/AdministratorCommands"
import loginPage from "../../../../../../../support/pageObjects/loginPage";
import securityQuestion from "../../../../../../../support/pageObjects/SecurityQuestion/securityQuestion";
import homePage from "../../../../../../../support/pageObjects/homePage";
import authorizationManagement from "../../../../../../../support/pageObjects/AuthorizationProfileManagement/authorizationManagement";
import MarketingProfile from "../../../../../../../support/pageObjects/UserManagement/MarketingProfile";
import RegulatoryProfile from "../../../../../../../support/pageObjects/UserManagement/RegulatoryProfile";
//----------------Object Declaration----------------------------------------------------------

const pageLogin = new loginPage()
const manageUsersPage = new manageUsers()
const securityPage = new securityQuestion()

const uid = () => Cypress._.random(1e6)
const id = uid()

var profName
var q3
const SecurityQuetion = 'cypress/fixtures/securitys.json'

function getRandomName() {
  profName = "";
  var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
  for (var i = 0; i < 5; i++)
    profName += possible.charAt(Math.floor(Math.random() * possible.length));
  return profName;
}

//----------------Test Scripts---------------------------------------------------------------


Then('Click on Customer and Enter the value less than 0 in password expiery field.', function () {
  manageUsersPage.getCustomerType().click()
  manageUsersPage.getCustomerRole().click()  
  manageUsersPage.getPwdExpiryDays().type('-1')
  manageUsersPage.getNumberOfLastPwds().click()
  manageUsersPage.getAssertPwdExpiryDays().should('have.text', ' Password Expiry (in days) is invalid ')
})


Then('Click on Customer and enter value greater than  365 for password expiry duration field.', function () {
  manageUsersPage.getCustomerType().click()
  manageUsersPage.getCustomerRole().click()   
  manageUsersPage.getPwdExpiryDays().type('366')
})



Then('Click on Customer and leave the pin expiry duration field blank', function () {
  manageUsersPage.getCustomerType().click()
  manageUsersPage.getCustomerRole().click()
  manageUsersPage.getSecurityPIN().click()
  manageUsersPage.getPinExpiryDays().click()

})


Then('Click on Customer and leave the pin length field blank.', function () {
  manageUsersPage.getCustomerType().click()
  manageUsersPage.getCustomerRole().click()
  manageUsersPage.getSecurityPIN().click()
  manageUsersPage.getPinLength().click()

})


Then('Click on Cutomer and leave minimum length and maximum length password field blank.', function () {
  manageUsersPage.getCustomerType().click()
  manageUsersPage.getCustomerRole().click()  
  manageUsersPage.getMinPwdLength().click()
  manageUsersPage.getMaxPwdLength().click()
  cy.wait(2000)
  manageUsersPage.getAssertPwdExpiryDays().should('have.text', '  Min Length is required  ')
})


Then('Click on Customer and leave the password expiry duration field blank.', function () {
  manageUsersPage.getCustomerType().click()
  manageUsersPage.getCustomerRole().click()    
  manageUsersPage.getPwdExpiryDays().click()
  manageUsersPage.getNumberOfLastPwds().click()
  manageUsersPage.getAssertPwdExpiryDays().should('have.text', ' Password Expiry (in days) is required ')

})


Then('Click on System Admin and leave minimum length and maximum length password field blank.', function () {
  manageUsersPage.getSystemAdminSecurity().click()
  manageUsersPage.getMinPwdLength().click()
  manageUsersPage.getMaxPwdLength().click()
  cy.wait(2000)
  manageUsersPage.getAssertPwdExpiryDays().should('have.text', '  Min Length is required  ')
})



And('User Select the Arabic language and enter the questions in Arabic language', function () {
  pageLogin.getiFrame()
  securityPage.getAddLanguage().click({ force: true })
  securityPage.getLanguageDropDowns().select(this.data12.languages.language1, { force: true })
  cy.readFile(SecurityQuetion).then((data) => {
    q3 = data.SecurityQuestion3
    securityPage.getOtherLanguageQuestion().type(q3, { force: true })
  })
})