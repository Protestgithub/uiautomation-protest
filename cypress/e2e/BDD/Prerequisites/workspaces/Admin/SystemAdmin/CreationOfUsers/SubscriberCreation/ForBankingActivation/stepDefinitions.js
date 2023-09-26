/// <reference types="Cypress" />
/// <reference types = "Cypress-iframe"/>

//----------------Imports---------------------------------------------------------------------
import 'cypress-iframe'
import { Given, When, Then, And, Before } from "@badeball/cypress-cucumber-preprocessor";
import "../../../../../../../../../support/Utils/generic";
import "../../../../../../../../../support/Utils/subscriberCommands";
import loginPage from '../../../../../../../../../support/pageObjects/loginPage';
import homePage from '../../../../../../../../../support/pageObjects/homePage';
import register from '../../../../../../../../../support/pageObjects/UserManagement/register';
import approvals from '../../../../../../../../../support/pageObjects/UserManagement/approvals';
import manageUsers from '../../../../../../../../../support/pageObjects/UserManagement/manageUsers';
import myActivity from '../../../../../../../../../support/pageObjects/MyActivity/myActivity';
import "../../../../../../../../../support/Utils/BusinessUserCommands";
//----------------Object Declaration-----------------------------------------------------------------
const pageLogin = new loginPage()
const registerPage = new register()
const welcomePage = new homePage()
const approvalPage = new approvals()
const manageUsersPage = new manageUsers()
const myActivityPage = new myActivity()
const uuid = () => Cypress._.random(1e8)

mobile = "77" + uuid()
var name
var subRegistration = 'cypress/fixtures/userData/subscriberReg.json'



function getRandomName() {
    name = "";
    var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    for (var i = 0; i < 5; i++)
        name += possible.charAt(Math.floor(Math.random() * possible.length));
    return name;
}

//----------------Test Scripts---------------------------------------------------------------------------

And('Enter all the required subscriber details for Banking Channel Activation', function () {

    //-------------------Random Data-----------------------------------------------------------------
    let mobileut1;
    const m = parseInt(Date.now() / 100000);
    const q = m + 8
    mobileut1 = "77" + q
    cy.getBasicInfoTextFields()
    cy.iframe().find('select[data-test-id="preferredLanguage"]').select(this.data2.personalInfo.preferredLang, { force: true })
    cy.MobileNumber()

    cy.getSubEmailID()
    if (Cypress.env('otpVerification').includes("Yes")) {
        cy.OTP(Cypress.env('apiBaseURL'), Cypress.env('port'))
    }
    else {
        cy.log("No OTP verification required")
    }
    registerPage.getCountry().select(this.data2.personalInfo.country, { force: true })
    registerPage.getState().select(this.data2.subPersonalInfo.state, { force: true })
    registerPage.getCity().select(this.data2.subPersonalInfo.city, { force: true })

    registerPage.getMobileNumber().invoke('val').then((val) => {
        cy.readFile(subRegistration).then((data) => {
            data.subscriberMobileBankingActivation = val
            cy.writeFile(subRegistration, data)
        })
    })
})

And('Assert Created Subscriber Mobile Number and Write Created on time for BankingActivation', function () {
    cy.readFile(subRegistration).then((user) => {
        let SubMobile = user.subscriberMobileBankingActivation
        var SUBMobile = " " + SubMobile
        manageUsersPage.getAssertMobile().eq(1).should('contain', SUBMobile)
    })
    myActivityPage.getCreatedOnTime().eq(0).invoke('text').then((time) => {
        time = time.trim()
        cy.log(time)
        cy.readFile(subRegistration).then((data) => {
            data.CreatedOnTime = time
            cy.writeFile(subRegistration, data)
        })
    })
})



And('Select User type as Subscriber and click on subscribers for initiate of Creation', function () {
    welcomePage.getUserManagementOption().scrollIntoView()
    welcomePage.getUserManagementOption().click()
    welcomePage.getRegisterOption().click()
    pageLogin.getiFrame()
    registerPage.getregisterPageTitle().should('have.text', this.data2.registerPageTitle)
    registerPage.getSelectSubUserTypeTab().click({ force: true })
    registerPage.getSelectSubUserTypeTab().focused()
    registerPage.getUserRole().click({ force: true })
    registerPage.getRegistrationMode().eq(0).click({ force: true })
})