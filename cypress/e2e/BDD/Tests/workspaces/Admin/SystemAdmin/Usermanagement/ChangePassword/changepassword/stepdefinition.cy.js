

/// <reference types="Cypress" />
/// <reference types = "Cypress-iframe"/>

//----------------Imports---------------------------------------------------------------------
import { Given,And, Then, When} from "@badeball/cypress-cucumber-preprocessor";
import 'cypress-iframe';

import register from '../../../../../../../../../support/pageObjects/UserManagement/register';
import homePage from "../../../../../../../../../support/pageObjects/homePage";
import loginPage from "../../../../../../../../../support/pageObjects/loginPage";


const registerPage = new register()
const welcomePage= new homePage()
const pageLogin = new loginPage()

let Sysfilelogin = 'cypress/fixtures/userData/SystemAdminLogin.json'

When ('Navigate to Profile icon and Click on Profile icon', function (){
    welcomePage.getProfileIcon().click()
  })
  
  And ('Click On Setting and click on Change Password', function () {
  welcomePage.getSettings().click({ force: true })
  
  welcomePage.getChangePassword().click({ force: true })
  })
  
  And ('Enter Old password and Enter New Password and Confirm New Password', function () {
    
    pageLogin.getInputForm().eq(0).type(this.data3.ChangePassword3)
    let NewPassword = 'Com@135'
    pageLogin.getInputForm().eq(1).type(NewPassword)
    pageLogin.getInputForm().eq(2).type(NewPassword)
    cy.readFile(Sysfilelogin).then((data) => {
      data.NewPassword = NewPassword
      cy.writeFile(Sysfilelogin, data)
    })
    
  })
  
  Then ('Click on the change Password Button', function () {
    pageLogin.getchangepassword().click({ force: true }) 
    pageLogin.getloginbtn1().click({ force: true })
  
  })
  Given('Login into Mobiquity Portal as System admin with newly created Password', function () {
    cy.launchURL(Cypress.env('Adminurl'))
  cy.SysAdminlogin5()
  //cy.wait(2000)
 // cy.checkWelcomeText(this.data2.networkAdminWelcomeText)
  
  })