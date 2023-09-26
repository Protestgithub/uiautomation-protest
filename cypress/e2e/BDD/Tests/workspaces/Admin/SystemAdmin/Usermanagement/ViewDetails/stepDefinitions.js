/// <reference types="Cypress" />
/// <reference types = "Cypress-iframe"/>

//----------------Imports---------------------------------------------------------------------
import 'cypress-iframe'
import { Given, When, Then, And,Before} from "@badeball/cypress-cucumber-preprocessor";
import loginPage from '../../../../../../../../support/pageObjects/loginPage';
import homePage from '../../../../../../../../support/pageObjects/homePage';
import { recurse } from 'cypress-recurse';
import "../../../../../../../../support/Utils/generic";
import "../../../../../../../../support/Utils/subscriberCommands";
import "../../../../../../../../support/Utils/AdministratorCommands";
import "../../../../../../../../support/Utils/BusinessUserCommands";
import register from '../../../../../../../../support/pageObjects/UserManagement/register';
import approvals from '../../../../../../../../support/pageObjects/UserManagement/approvals';
import manageUsers from '../../../../../../../../support/pageObjects/UserManagement/manageUsers';
import myActivity from '../../../../../../../../support/pageObjects/MyActivity/myActivity';


//----------------Object Declaration-----------------------------------------------------------------
const pageLogin = new loginPage()
const welcomePage = new homePage()
const registerPage = new register()
const approvalPage = new approvals()
const manageUsersPage = new manageUsers()
let Bulogin = 'cypress/fixtures/userData/BusinessUsersData.json'
let SubMob = 'userData/subscriberReg.json'
const myActivityPage = new myActivity()
const uuid = () => Cypress._.random(1e8)
const uuid1 = () => Cypress._.random(1e8)
const uuuid = () => Cypress._.random(1e3)
amount = uuuid()
var loginId, mobile, mobile1, KycValue, amount, name
const timestamp = (new Date).getTime()
  KycValue = "A" + timestamp
mobile = "77" + uuid1()
mobile1 = "77" + uuid()
var filename = 'cypress/fixtures/userData/ManageUser.json'
function getRandomName() {
  name = "";
  var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
  for (var i = 0; i < 5; i++)
    name += possible.charAt(Math.floor(Math.random() * possible.length));
  return name;
}

//----------------Test Scripts---------------------------------------------------------------------------

//--------------------------User Management--------------------------------------------------------------

When('Navigate to User Management and Click on register', function () {

  welcomePage.getUserManagementOption().scrollIntoView()
 // cy.intercept('/mobiquitypay/v1/ums/workspace-categories?workspaceId=').as('all')
  welcomePage.getUserManagementOption().click()
  welcomePage.getRegisterOption().click()
  cy.waitUntil(() => {
    return cy.iframe().find('div > h4[class="font-weight-bold mt-4 mb-2"]').contains(' Select User Role ')
  })
  //cy.checkAPI('/mobiquitypay/v1/ums/workspace-categories?workspaceId=')

})


When('Navigate to Manage User, and search Business Admin', function () {
  welcomePage.getUserManagementOption().scrollIntoView()
  welcomePage.getUserManagementOption().click()
      cy.intercept('/mobiquitypay/v1/ums/user/search*').as('getSearch')
    welcomePage.getManageUsersLink().click()
    cy.wait('@getSearch', {timeout:20000})
    cy.wait(2000)
  

})
And('Assert Created Business Admin Mobile Number', function(){
  
  manageUsersPage.getdropdown().select('Others')
  cy.getBAMobileNumber()
  manageUsersPage.getSearchUserButton().click({ force: true })
  cy.readFile(filename).then((user) => {
  let BAMobile = user.BAMobileNumber
  var BBAMobile = " "+BAMobile
  manageUsersPage.getAssertMobile().eq(1).should('have.text',BBAMobile)
  })
})



And('Assert Created Customer Admin Mobile Number', function () {
  
  cy.getCCAMobileNumber()
  cy.readFile(filename).then((user) => {
    
  })
})

Given('Login into Mobiquity Portal as Channel User 22', function () {
  cy.launchURL(Cypress.env('Adminurl'))
  cy.visit(Cypress.env("Adminurl") + "/dfscontainer/#/business/")
  
  cy.readFile('cypress/fixtures/userData/BusinessUsersData.json').then((data)=>{
    var loginID
    loginID = data.LoginId
    
    cy.login(loginID, this.data1.businessAdmin.businessadminPwd1)
  })
})
And('Select Hierarchy in user type drop down And view user',function(){
  //manageUsersPage.getdropdown().select('Employees')
 // 
  //manageUsersPage. getSearchUserButton().click()
  //
  manageUsersPage.getdropdown().select('Hierarchy')
  manageUsersPage. getSearchUserButton().click()
   
  //  manageUsersPage.getViewIcon().eq(0).click({ force: true })
  //  
   
})

And('Assert view page', function () {
  manageUsersPage.getAssert().should('contain','View Details')
  
  cy.readFile(filename).then((user) => {
    let CCAMobile = user.CCAMobileNumber
    var CAMobile = " " + CCAMobile
    manageUsersPage.getAssertMobile().eq(1).should('have.text', CAMobile)
    
  })
})
And('Click on Edit Information info', function () {
  
  manageUsersPage.getEditIcon().eq(0).click()
  
})

And('Enter Mobile number and KYC number in search menu4', function () {
  manageUsersPage.getdropdown().select('Self')
  
  manageUsersPage.getSearchUserButton().click({ force: true })
  })
  //manageUsersPage.getSearchUserButton().click({ force: true })
//})

And('Enter Mobile number and KYC number in search menu2', function () {
  //manageUsersPage.getdropdown().select('Others')
  
  cy.fixture(SubMob).then((user) => {
    var SubMob1 = user.subscriberMobile
    cy.log(SubMob1)
    manageUsersPage.getSearchUser().type(SubMob1)
  })
  manageUsersPage.getSearchUserButton().click({ force: true })
})

And('Enter Mobile number and KYC number in search menu1', function () {
//   manageUsersPage.getdropdown().select('Others')
  
  cy.fixture(SubMob).then((user) => {
    var SubMob1 = user.subscriberMobile
    cy.log(SubMob1)
    manageUsersPage.getSearchUser().type(SubMob1)
  })
  manageUsersPage.getSearchUserButton().click({ force: true })
})
And('Click on view Details and Click on Account info', function () {

  manageUsersPage.getViewIcon().eq(0).click({ force: true })
  manageUsersPage.getAccountInfo().click({ force: true })
})

//-------------------------------credentials-------------------
Then('Click on Credentials and assert', function () {
    manageUsersPage.getMore().click()
  manageUsersPage.getcredentials().click({force:true})
  manageUsersPage.getAuthenticationFactor().contains('AUTHENTICATION')
})


And('Enter all the details to change profile details', function () {

  //-------------------Random Data-----------------------------------------------------------------
  // const uuid = () => Cypress._.random(1e8)
  // mobile = "77" + uuid()

  // 
  // registerPage.getLastName().type(getRandomName(), { force: true })
  // //cy.getCCArandomUserEmailID()
  // recurse(
  //   () => registerPage.getMobileNumber().clear().type(mobile, { force: true }),
  //   () => registerPage.getFirstName().clear().type(getRandomName(), { force: true }),
  //   (uniqueness) => (uniqueness) == registerPage.getuniqueness()
  // )
  // cy.readFile(filename).then((data) => {
  //   data.CCAMobileNumber = mobile
  //   cy.writeFile(filename, data)
  // })
  //cy.iframe().find('select[data-test-id="preferredLanguage"]').select(this.data2.personalInfo.preferredLang, { force: true })
  //registerPage.getCountry().select(this.data2.personalInfo.country, { force: true })
  //cy.intercept('/mobiquitypay/v1/authorization-profiles?user-types=CCE').as('all')
  registerPage.getNextButtonBasic().click({ force: true })
  cy.wait(1000)
  //cy.checkAPI('/mobiquitypay/v1/authorization-profiles?user-types=CCE')


  //----------------------Profile Data-----------------------------------------------------------------
  /* cy.readFile(SubProfileName).then((data) => {
    let Profile = data.CustomercareAdmin*/
  //registerPage.getSecurityProfile().select('CustomerCareAdminSecurityProfile', { force: true })

  // })
  // cy.readFile(SubProfileName).then((data) => {
  //  let Profile = data.CustomercareAdmin1
  //registerPage.getAuthProfile().select('CCEDefault Profile', { force: true })

  //})
  registerPage.getNextButtonProfile().click({ force: true })
  registerPage.getMarketingProfile().select(1)
  registerPage.getNextButtonBasic2().click({ force: true })
  cy.wait(2000)
  registerPage.getNextButtonBasic3().click({ force: true })
  cy.wait(2000)
  registerPage.getSubmitButton().click({force:true})
  //cy.intercept('/mobiquitypay/v1/ums/user').as('all')
  //registerPage.getSubmitButton().click({ force: true })
  //cy.checkAPI('/mobiquitypay/v1/ums/user')

})
