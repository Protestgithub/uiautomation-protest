/// <reference types="Cypress" />
/// <reference types = "Cypress-iframe"/>

//----------------Imports---------------------------------------------------------------------
import { And, Then, When } from "@badeball/cypress-cucumber-preprocessor";
import 'cypress-iframe';
import { recurse } from 'cypress-recurse';
import homePage from '../../../../../../../../support/pageObjects/homePage';
import loginPage from '../../../../../../../../support/pageObjects/loginPage';
import myActivity from '../../../../../../../../support/pageObjects/MyActivity/myActivity';
import register from '../../../../../../../../support/pageObjects/UserManagement/register';
import "../../../../../../../../support/Utils/AdministratorCommands";
import "../../../../../../../../support/Utils/generic";


//----------------Object Declaration-----------------------------------------------------------------

const pageLogin = new loginPage()
const welcomePage = new homePage()
const registerPage = new register()
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




//----------------Test Scripts---------------------------------------------------------------------------

//--------------------------User Management--------------------------------------------------------------


//-------------------------Confirmation Message displayed---------------------------------------------
Then('Confirmation message is displayed', function () {
  registerPage.getConfirmationText().should('contain', "success")
  registerPage.getDoneButton().click()
})

//-------------------------------------------------TC_123------------------------------------------------

And('Enter all the User details', function () {
  //-------------------Random Data-----------------------------------------------------------------
  cy.waitUntil(() => {
    return cy.iframe().find('h4.font-weight-bold.ng-star-inserted').eq(0).should('be.visible', { force: true })
  })
  registerPage.getLastName().type(getRandomName(), { force: true })
  cy.getBArandomUserEmailID()
  recurse(
    () => cy.MobileNumber(),
    () => registerPage.getFirstName().clear().type(getRandomName(), { force: true }),
    (uniqueness) => (uniqueness) == registerPage.getuniqueness()
  )
  cy.iframe().find('select[data-test-id="preferredLanguage"]').select(this.data2.personalInfo.preferredLang, { force: true })
  registerPage.getCountry().select(this.data2.personalInfo.country)
  registerPage.getNextButtonBasic().click({ force: true })
  registerPage.getSecurityProfile().select("CustomerCareAdminSecurityProfile", { force: true })
  registerPage.getAuthProfile().select("CCEDefault Profile", { force: true })
  cy.intercept(this.data20.SaveButton).as('getregistersave')
  registerPage.getSaveButton().click({ force: true })
  cy.wait('@getregistersave', { timeout: 30000 })
})

//----------------------------------------------TC_124---------------------------------------------------


// And('Select User type as Adminstrator and click on Customer care Admin', function () {
//   pageLogin.getiFrame()
//   registerPage.getregisterPageTitle().should('contain', this.data2.registerPageTitle)
//   registerPage.getSelectUserTypeTab().contains(this.data2.userType).click({ force: true })
//   registerPage.getSelectUserTypeTab().contains(this.data2.userType).focused()
//   registerPage.getUserRole().contains(this.data2.userRole1).click({ force: true })
//   cy.intercept(this.data20.RegistrationMode).as('getuser')
//   registerPage.getRegistrationMode().eq(0).click({ force: true })
//  cy.wait('@getuser',{timeout:30000})
// })
When('Navigate to My Activity and Add the required filter', function () {
  welcomePage.getMyActivity().click()
  myActivityPage.getFilter().click({ force: true })
  myActivityPage.getAddUser().click({ force: true })
  myActivityPage.getSavedStatus().click()
  myActivityPage.getApply().click()
  cy.waitUntil(() => {
    return cy.iframe().find('#expansion').eq(0).should('be.visible', { force: true })
  })
  cy.wait(2000)
})


Then('Click on Expand and View Details button', function () {
  
  myActivityPage.getExpandButton().click()
  cy.intercept(this.data20.ViewDetails).as('getview')
  myActivityPage.getViewDetails().click({ force: true })
  cy.wait('@getview', { timeout: 30000 })
})
//------------------------------------------TC_125--------------------------------------------------------------

Then('Click on Expand and Resume button', function () {
  
  myActivityPage.getExpandButton().click({ force: true })
  myActivityPage.getViewDetails().click({ force: true })
  cy.intercept(this.data20.ResumeUser).as('getresume')
  myActivityPage.getResumeUser().click({ force: true })
  cy.wait('@getresume', { timeout: 30000 })
  
})

And('Enter all the required details of the user', function () {
   cy.waitUntil(()=>{
   return cy.iframe().find('span.text-secondary').eq(0).should('be.visible', { force: true })
    }) 
  
  registerPage.getLastName().clear().type(getRandomName(), { force: true })
  recurse(
    () => cy.MobileNumber(),
    () => registerPage.getFirstName().clear().type(getRandomName(), { force: true }),
    (uniqueness) => (uniqueness) == registerPage.getuniqueness()
  )
  cy.iframe().find('select[data-test-id="preferredLanguage"]')
    .select(this.data2.personalInfo.preferredLang, { force: true })
  registerPage.getCountry().select(this.data2.personalInfo.country)
  registerPage.getNextButtonBasic().click({ force: true })
  registerPage.getSecurityProfile().select("CustomerCareAdminSecurityProfile", { force: true })
  registerPage.getAuthProfile().select("CCEDefault Profile", { force: true })
  registerPage.getNextButtonProfile().click({ force: true })

})

//--------------------------------------------TC_126---------------------------------------------------

And('Click the >> Submit Button', function () {
  registerPage.getSubmitButton().click({ force: true })
})
