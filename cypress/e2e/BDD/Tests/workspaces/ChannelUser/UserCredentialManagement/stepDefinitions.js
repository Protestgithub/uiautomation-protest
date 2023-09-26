/// <reference types="Cypress" />
/// <reference types = "Cypress-iframe"/>

//----------------Imports---------------------------------------------------------------------
import 'cypress-iframe'
import { Given, When, Then, And, Before } from "@badeball/cypress-cucumber-preprocessor";
import "../../../../../../support/Utils/generic";
import loginPage from '../../../../../../support/pageObjects/loginPage';
import manageUsers from '../../../../../../support/pageObjects/UserManagement/manageUsers';
import homePage from '../../../../../../support/pageObjects/homePage';
import "../../../../../../support/Utils/subscriberCommands";
import "../../../../../../support/Utils/AdministratorCommands";
import "../../../../../../support/Utils/BusinessUserCommands";

//----------------Object Declaration-----------------------------------------------------------------
const pageLogin = new loginPage()
const manageUsersPage = new manageUsers()
const welcomePage = new homePage()
const uuid = () => Cypress._.random(1e8)
const uuid1 = () => Cypress._.random(1e8)
const uuuid = () => Cypress._.random(1e3)
amount = uuuid()
var  mobile, mobile1, KycValue, amount, name
const timestamp = (new Date).getTime()
KycValue = "A" + timestamp
mobile = "77" + uuid1()
mobile1 = "77" + uuid()
let businesslogin="cypress/fixtures/userData/BusinessUsersData.json"
const BusMob = 'userData/BusinessUsersData.json'
const SubMob = 'userData/subscriberReg.json'
var BuisnessReg = 'cypress/fixtures/userData/BusinessUsersData.json'
//--------------------------------------------------------------------------  
When('Navigate to User Management and Click on manage user for business user', function () {
    welcomePage.getUserManagementOption().scrollIntoView()
    welcomePage.getUserManagementOption().click()
      cy.intercept('/mobiquitypay/v1/ums/user/search*').as('getSearch')
    welcomePage.getManageUsersLink().click()
    cy.wait('@getSearch', {timeout:20000})
    cy.wait(2000)
  
  })
  
  
And('Enter Mobile number or KYC number of child business user in search menu2', function () {
    manageUsersPage.getUserType().select("hierarchy")
    cy.readFile(businesslogin).then((user) => {    
      var merchantMobile = user.registeredMobileMerch
      cy.log(merchantMobile)
      manageUsersPage.getSearchUser().type(merchantMobile)
    })
    cy.intercept('/mobiquitypay/v1/ums/user/child-user*').as('getSearchUser')
    manageUsersPage.getSearchUserButton().click({ force: true })
    cy.wait('@getSearchUser')
  })


And('goto credencials submenu', function () {
  cy.intercept('/mobiquitypay/v1/ums/modification*').as('getViewDetails')
  manageUsersPage.getViewIcon().eq(0).click({ force: true })
  cy.wait('@getViewDetails')
    manageUsersPage.getMore().click({ force: true })
    manageUsersPage.getcredentials().click({ force: true })
    cy.wait(2000)
  })

And('Reset password via email', function () {
    manageUsersPage.getResetbttnGeneral().eq(2).click({ force: true })
    manageUsersPage.getConfirmReset().click({ force: true })
    cy.wait(2000)
  })

  Given('Login again into Mobiquity Portal as Merchant after password reset', function () {
    cy.launchURL(Cypress.env('Adminurl'))
    cy.visit(Cypress.env("Adminurl") + "/dfscontainer/#/business/")
    cy.readFile(BuisnessReg).then((data) => {
      var loginId
      loginId = data.MerchantLoginID
      cy.login(loginId, this.data1.businessAdmin.DefaultPassword)
      cy.login1(this.data1.BAPassword)
      cy.Passwordchange(this.data1.UserCreationSuccessMessage)
    })
  })
//----------------

//---------------------------------pin reset message---------------------

And('Click on view Details and Click on credentials', function () {
cy.intercept('/mobiquitypay/v1/ums/modification*').as('getViewDetails')
  manageUsersPage.getViewIcon().eq(0).click({ force: true })
  cy.wait('@getViewDetails')
  manageUsersPage.getMore().click({ force: true })
  manageUsersPage.getcredentials().click({ force: true })
  cy.wait(2000)

})


Then('PIN Reset message will be display on screen', function () {
  manageUsersPage.getresetcredentials().eq(0).click({ force: true })
  manageUsersPage.getresetconfirmation().click({ force: true })
  manageUsersPage.getResetPinMessage().contains(this.data2.Sucess)
  manageUsersPage.getsuccessresetconfirmation().click({ force: true })
  
})


//----------------------------------bank account--------------
And('Enter Mobile number of business user and KYC number in search menu1', function () {
  cy.fixture(BusMob).then((user) => {
    var BusinessMob = user.registeredMobile
    cy.log(BusinessMob)
    manageUsersPage.getSearchUser().type(BusinessMob)
  })
  manageUsersPage.getSearchUserButton().click({ force: true })
})

Then('Click on bank account', function (){
  cy.wait(2000)
  manageUsersPage.getBankAccounts().click({force:true})
  manageUsersPage.getFieldBankName().contains('BANK NAME')
})


//----------------------------------search reset ----------
Then('Enter LoginId and click on reset', function () {

  cy.fixture(SubMob).then((user) => {
    var SubLoginId = user.subscriberLoginId
    cy.log(SubLoginId)
    manageUsersPage.getSearchUser().type(SubLoginId)
  })
  manageUsersPage.getResetSearch().click({ force: true })
})


Given('Login into Mobiquity Portal with HeadMerchant credentials', function () {
  cy.launchURL(Cypress.env('Adminurl'))
  cy.visit(Cypress.env("Adminurl") + "/dfscontainer/#/business/")
  
  cy.readFile(BuisnessReg).then((data) => {
    var loginId
    loginId = data.HeadMerchantLoginID
    cy.login(loginId, this.data1.businessAdmin.businessadminPwd1)
  })
})