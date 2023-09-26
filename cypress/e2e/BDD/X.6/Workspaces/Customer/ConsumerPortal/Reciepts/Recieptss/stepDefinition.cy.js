/// <reference types= "Cypress" />
import { Given, When, Then, And, Before } from "@badeball/cypress-cucumber-preprocessor";
import "../../../../../../../../support/Utils/generic"
import LoginPage from "../../../../../../../../support/pageObjects/ConsumerPortalUserLogin/LoginPage";
import HomePage from "../../../../../../../../support/pageObjects/ConsumerPortalHomePage/HomePage";
import MobileRecharge from "../../../../../../../../support/pageObjects/ConsumerPortalMobileRecharge/MobileRecharge";
//----------------------------------------------------------------
const UserLoginPage = new LoginPage()
const WelcomePage = new HomePage()
const MobileRechargePage = new MobileRecharge()
const pageLogin = new LoginPage()
//----------------------------------------------------------------
var MobileRechargedata = 'cypress/fixtures/userData/MobileRecharge.json'
var mobile
const uuid = () => Cypress._.random(1e8)
mobile = "77" + uuid()








Given('Login into Consumer Portal to register', function () {
  cy.visit(Cypress.env('Adminurl') + "/consumerportalui/#/home")
  cy.wait(5000)
  pageLogin.getRegister().click({ force: true })
  cy.wait(6000)

})


And('enter the details for mobile otp verification', function () {
  pageLogin.getmobilenumber().type('7789273649')
  pageLogin.getverify().click({ force: true })
  cy.PostgresOTP()
})



Then('asert the test message of otp', function () {
  pageLogin.getasserttxt().contains('OTP entered is incorrect. Please try again')

})


And('Enter all details except Last Name field', function () {


})

And('Enter invalid email ID', function () {

})


Then('assert the error message last name', function () {
  pageLogin.getasserttxt().contains('OTP entered is incorrect. Please try again')

})


Then('assert error message for email id', function () {
  pageLogin.getasserttxt().contains('OTP entered is incorrect. Please try again')

})
