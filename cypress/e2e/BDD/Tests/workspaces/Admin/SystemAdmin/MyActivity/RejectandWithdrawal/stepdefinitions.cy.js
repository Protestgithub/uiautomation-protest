/// <reference types="Cypress" />
/// <reference types = "Cypress-iframe"/>

//----------------Imports---------------------------------------------------------------------
import { And, Then, When } from "@badeball/cypress-cucumber-preprocessor";
import 'cypress-iframe';
import { recurse } from 'cypress-recurse';
import homePage from '../../../../../../../../support/pageObjects/homePage';
import loginPage from '../../../../../../../../support/pageObjects/loginPage';
import myActivity from '../../../../../../../../support/pageObjects/MyActivity/myActivity';
import approvals from '../../../../../../../../support/pageObjects/UserManagement/approvals';
import register from '../../../../../../../../support/pageObjects/UserManagement/register';
import "../../../../../../../../support/Utils/AdministratorCommands";
import "../../../../../../../../support/Utils/generic";


//----------------Object Declaration-----------------------------------------------------------------

const pageLogin = new loginPage()
const welcomePage = new homePage()
const registerPage = new register()
const approvalPage = new approvals()
const myActivityPage = new myActivity()
const uuid = () => Cypress._.random(1e8)
mobile = "77" + uuid()
var mobile
var name


function getRandomName() {
  name = "";
  var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
  for (var i = 0; i < 5; i++)
    name += possible.charAt(Math.floor(Math.random() * possible.length));
  return name;
}


//-------------------------------------------------TC_123------------------------------------------------
And('Navigate to My Activity and Add the not Approved filters', function () {
  welcomePage.getMyActivity().click()
  myActivityPage.getFilter().click({ force: true })
  cy.waitUntil(() => {
    return cy.iframe().find('p.text-secondary.text-capitalize.font-weight-700').should('be.visible', { force: true })
  })
  myActivityPage.getAddUser().click({ force: true })
  myActivityPage.getSubmittedStatus().click()
  myActivityPage.getApply().click()
  cy.waitUntil(() => {
    return cy.iframe().find('#expansion').eq(0).should('be.visible', { force: true })
  })
})


//----------------------------------------------TC_124---------------------------------------------------


// And('Select User type as Adminstrator and click on Customer care Admin', function () {
//   pageLogin.getiFrame()
//   registerPage.getregisterPageTitle().should('contain', this.data2.registerPageTitle)
//   registerPage.getSelectUserTypeTab().contains(this.data2.userType).click({ force: true })
//   registerPage.getSelectUserTypeTab().contains(this.data2.userType).focused()
//   registerPage.getUserRole().contains(this.data2.userRole1).click({ force: true })
//   cy.intercept(this.data20.RegistrationM).as('getregmode')
//   registerPage.getRegistrationMode().eq(0).click({ force: true })
//   cy.wait('@getregmode',{timeout:30000})
// })

//------------------------------------------TC_125--------------------------------------------------------------

// Then('Click on Expand and Resume button', function () {
//   
//   myActivityPage.getExpandButton().click({ force: true })
//   myActivityPage.getViewDetails().click({ force: true })
//   myActivityPage.getResumeUser().click({ force: true })
// })

// And('Enter all the required details of the user', function () {
//   
//   registerPage.getLastName().clear().type(getRandomName(), { force: true })
//   recurse(
//     () => registerPage.getMobileNumber().clear().type(mobile, { force: true }),
//     () => registerPage.getFirstName().clear().type(getRandomName(), { force: true }),
//     (uniqueness) => (uniqueness) == registerPage.getuniqueness()
//   )
//   cy.iframe().find('select[data-test-id="preferredLanguage"]')
//     .select(this.data2.personalInfo.preferredLang, { force: true })
//   registerPage.getCountry().select(this.data2.personalInfo.country)
//   registerPage.getNextButtonBasic().click({ force: true })
//   registerPage.getSecurityProfile().select("CustomerCareAdminSecurityProfile", { force: true })
//   registerPage.getAuthProfile().select("CCEDefault Profile", { force: true })
//   registerPage.getNextButtonProfile().click({ force: true })
// })

//--------------------------------------------TC_126---------------------------------------------------

// And('Click the >> Submit Button', function () {
//   registerPage.getSubmitButton().click({ force: true })
// })


//--------------------------------------------TC_127---------------------------------------------------

Then('Click on Expand and Withdraw button', function () {
  cy.wait(2000)
  myActivityPage.getExpandButton().click({ force: true })
  myActivityPage.getWithDraw().click({ force: true })
  myActivityPage.getYesButton().click({ force: true })
})

//--------------------------------------------TC_128------------------------------------------------------


When('Navigate to My Activity and Add the Reject filter', function () {
  welcomePage.getMyActivity().click()
  myActivityPage.getFilter().click({ force: true })
  cy.waitUntil(() => {
    return cy.iframe().find('label.text-secondary-light.font-weight-700').eq(0).should('be.visible', { force: true })
  })
  myActivityPage.getModificationOfUser().click({ force: true })
  myActivityPage.getRejectStatus().click({ force: true })
  myActivityPage.getApply().click({ force: true })
})
And('Enter all the details', function () {
  registerPage.getLastName().type(getRandomName(), { force: true })
  cy.getrandomUserEmailID()
  recurse(
    () => cy.MobileNumber(),
    () => registerPage.getFirstName().type(getRandomName(), { force: true }),
    (uniqueness) => (uniqueness) == registerPage.getuniqueness()
  )
  cy.iframe().find('select[data-test-id="preferredLanguage"]')
    .select(this.data2.personalInfo.preferredLang, { force: true })
  registerPage.getCountry().select(this.data2.personalInfo.country)
  registerPage.getNextButtonBasic().click({ force: true })
  registerPage.getSecurityProfile().select("CustomerCareAdminSecurityProfile", { force: true })
  registerPage.getAuthProfile().select("CCEDefault Profile", { force: true })
  registerPage.getNextButtonProfile().click({ force: true })
  registerPage.getSubmitButton().click({ force: true })
})

Then('Reject the Users', function () {
  approvalPage.getRejectButton().click({ force: true })
  approvalPage.getRejectComment().type(getRandomName(), { force: true })
  approvalPage.getRejectRequest().click({ force: true })
})

