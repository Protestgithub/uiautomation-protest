/// <reference types="Cypress" />
/// <reference types = "Cypress-iframe"/>

//----------------Imports---------------------------------------------------------------------
import {Given,Then, And } from "@badeball/cypress-cucumber-preprocessor";
import 'cypress-iframe';
import loginPage from '../../../../../../../support/pageObjects/loginPage';
import manageUsers from '../../../../../../../support/pageObjects/UserManagement/manageUsers';
import "../../../../../../../support/Utils/generic";

//----------------Object Declaration----------------------------------------------------------

const pageLogin = new loginPage()
const manageUsersPage = new manageUsers()


let Sysfilelogin = 'cypress/fixtures/userData/SystemAdminLogin.json'

//////////////////////////////////////////////////////////////////////////////////////////////

Given('Login into Mobiquity portal with invalid credentials',function(){
  cy.launchURL(Cypress.env('Adminurl'))
  cy.frameLoaded(pageLogin.getiFrame())
  cy.readFile(Sysfilelogin).then((data) => {
      let loginID = data.LoginId2
      let word = data.ChangePassword3
       
      pageLogin.getInputForm().eq(0).type(loginID)
      pageLogin.getInputForm().eq(1).type('Com@135')
      pageLogin.getLoginBtn().eq(0).click()
      pageLogin.getLoginBtn().eq(0).click()
      pageLogin.getLoginBtn().eq(0).click()
      pageLogin.getLoginBtn().eq(0).click()
      pageLogin.getLoginBtn().eq(0).click()
      pageLogin.getLoginBtn().eq(0).click()
      pageLogin.getLoginBtn().eq(0).click()
      pageLogin.getLoginBtn().eq(0).click()
      pageLogin.getLoginBtn().eq(0).click()
      pageLogin.getLoginBtn().eq(0).click()
      pageLogin.getLoginBtn().eq(0).click()
      
  })
})

And('Assert the User Blocked message',function(){
pageLogin.getUserLockedMsg().contains('Too many incorrect login attempts. Please try again later or contact customer support.')
})
Then('Unbar the locked account from the web',function(){
  cy.launchURL(Cypress.env('Adminurl'))
  cy.frameLoaded(pageLogin.getiFrame())
  cy.readFile(Sysfilelogin).then((data) => {
      let loginID = data.LoginId2
      let word = 'Com@1357'
      data.ChangePassword3= word
       
       cy.login(loginID, this.data1.DefaultPassword)
       
      cy.login1(word)
      pageLogin.getchangepassword().click()
      cy.writeFile(Sysfilelogin,data)    
  })
  cy.Passwordchange(this.data1.UserCreationSuccessMessage)
})
And('Search by blocked Loginid and Click on Credentials and reset pin',function(){
  pageLogin.getiFrame()
  manageUsersPage.getSearchUser().click({ force: true })
  cy.readFile(Sysfilelogin).then((data) => {
    let loginID = data.LoginId2
    manageUsersPage.getSearchUser().type(loginID, { force: true })
  })
  manageUsersPage.getSearchUserButton().click({ force: true })
  manageUsersPage.getViewIcon().click()
  manageUsersPage.getMore().click()
  manageUsersPage.getcredentials().click()
  manageUsersPage.getresetcredentials().eq(0).click()
  cy.intercept('/mobiquitypay/v1/ums/user/auth/admin_reset_auth').as('getResetConfirmation')
  manageUsersPage.getresetconfirmation().click()
  cy.wait('@getResetConfirmation')
  cy.iframe().find('#success-reset').click()
})
