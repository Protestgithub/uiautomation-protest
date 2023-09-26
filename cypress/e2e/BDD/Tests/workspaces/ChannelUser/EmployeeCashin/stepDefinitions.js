/// <reference types="Cypress" />
/// <reference types = "Cypress-iframe"/>

//----------------Imports---------------------------------------------------------------------
import { And, Given, Then, When } from "@badeball/cypress-cucumber-preprocessor";
import 'cypress-iframe';
import homePage from '../../../../../../support/pageObjects/homePage';
import loginPage from '../../../../../../support/pageObjects/loginPage';
import manageUsers from '../../../../../../support/pageObjects/UserManagement/manageUsers';
import register from "../../../../../../support/pageObjects/UserManagement/register";
import "../../../../../../support/Utils/BusinessUserCommands";
import "../../../../../../support/Utils/generic";
import "../../../../../../support/Utils/registration";
import "../../../../../../support/Utils/subscriberCommands";

//----------------Object Declaration-----------------------------------------------------------------
const pageLogin = new loginPage()
const welcomePage = new homePage()
const manageUsersPage = new manageUsers()
const registerPage = new register()

let mobileut1, mobileut2;
const q = parseInt(Date.now() / 100000);
let r = q + 39
mobileut1 = "77" + r

const m = parseInt(Date.now() / 100000);
let p = m + 98
mobileut2 = "77" + p

let BuisnessReg = "cypress/fixtures/userData/BusinessUsersData.json"
let businesslogin="cypress/fixtures/userData/BusinessUsersData.json"
let O2CBusinessLogin = "cypress/fixtures/userData/BusinessUsersDataO2C.json"
//-----------------------------------------------------------

Given('Login into Mobiquity Portal as Business admin User4', function () {
  cy.launchURL(Cypress.env('Adminurl'))
  
  cy.visit(Cypress.env("Adminurl") + "/dfscontainer/#/business/")
  
  cy.readFile('cypress/fixtures/userData/BusinessUsersData.json').then((data) => {
    var loginId
    loginId = data.MerchantLoginID
    
    cy.login(loginId, this.data1.businessAdmin.businessadminPwd1)
  })
})

And('User click on Employee User submitted user data1',function(){
  cy.wait(2000)
  cy.getEmployeeApproval(O2CBusinessLogin)
  cy.wait(2000)
})  

When('Navigate to Manage User and Copy the Self Wallet Amount',function(){
  welcomePage.getUserManagementOption().click()
      cy.intercept('/mobiquitypay/v1/ums/user/search*').as('getSearch')
    welcomePage.getManageUsersLink().click()
    cy.wait('@getSearch', {timeout:20000})
    cy.wait(2000)

  manageUsersPage.getdropdown().select('Self')
  manageUsersPage.getSearchUserButton().click({ force: true })
cy.wait(1000)
  manageUsersPage.getViewIcon().eq(0).click({ force: true })
  manageUsersPage.getAccountInfo().click({ force: true })
cy.wait(1000)
  manageUsersPage.getWalletBalance().eq(0).invoke('text').then((text)=> {
    const amount1 = text
    const USDAmount1 = amount1.replace('$','')     
    cy.log(USDAmount1)
    cy.readFile(O2CBusinessLogin).then((data) => {
      data.DistributerNormalWalletUSD = USDAmount1
      cy.writeFile(O2CBusinessLogin, data)
      })
  })

})



When('Navigate to Manage User and Copy the Self Wallet Amount after CashIn',function(){
  welcomePage.getUserManagementOption().click()
      cy.intercept('/mobiquitypay/v1/ums/user/search*').as('getSearch')
    welcomePage.getManageUsersLink().click()
    cy.wait('@getSearch', {timeout:20000})
    cy.wait(2000)

  manageUsersPage.getdropdown().select('Self')
  manageUsersPage.getSearchUserButton().click({ force: true })

  manageUsersPage.getViewIcon().eq(0).click({ force: true })
  manageUsersPage.getAccountInfo().click({ force: true })

  manageUsersPage.getWalletBalance().eq(0).invoke('text').then((text)=> {
    const amountA = text
    const USDAmountA = amountA.replace('$','')     
    cy.log(USDAmountA)
    cy.readFile(O2CBusinessLogin).then((data) => {
      data.DistributerNormalWalletUSDAfter = USDAmountA
      cy.writeFile(O2CBusinessLogin, data)
      })
  })

})




Then('Compare that CashIn amount is deducted or not', function() {
  cy.readFile(O2CBusinessLogin).then((data) => {
    let x = data.DistributerNormalWalletUSD
    let y = data.DistributerNormalWalletUSDAfter
    const num1 = x * 1
    const num2 = y * 1
    const total = parseInt(num1 - num2)
    expect(total).to.eq("1")
  })
})


When('Navigate to Manage User and view details of Employee', function () {
  welcomePage.getUserManagementOption().click()
      cy.intercept('/mobiquitypay/v1/ums/user/search*').as('getSearch')
    welcomePage.getManageUsersLink().click()
    cy.wait('@getSearch', {timeout:20000})
    cy.wait(2000)
  cy.readFile(businesslogin).then((data)=>{
    var Number = data.registeredEmployeeMobile
    manageUsersPage.getSearchUser().clear().type(Number)
  })
  manageUsersPage.getSearchUserButton().click({ force: true })
  manageUsersPage.getViewIcon().eq(0).click({ force: true })
  cy.wait(2000)
  manageUsersPage.getPersonalInfo().eq(0).contains('Personal Information')
})



Given('Login into Mobiquity Portal as Business admin User4 After Logout', function () {
  cy.launchURL(Cypress.env('Adminurl'))
  
  cy.visit(Cypress.env("Adminurl") + "/dfscontainer/#/business/")
  
  cy.readFile('cypress/fixtures/userData/BusinessUsersData.json').then((data) => {
    var loginId
    loginId = data.MerchantLoginID
    
    cy.login(loginId, this.data1.businessAdmin.businessadminPwd1)
  })
 

})

Given('Login into Mobiquity Portal as Employee After Logout', function () {
      
  cy.launchURL(Cypress.env('Adminurl'))
  
  cy.visit(Cypress.env("Adminurl") + "/dfscontainer/#/business/")
    
  cy.frameLoaded(pageLogin.getiFrame())
  
  cy.readFile(businesslogin).then((data) => {
  let loginID = data.EmployeeLoginId
  cy.login(loginID, this.data1.businessAdmin.DefaultPassword)
  cy.login1(this.data1.BAPassword)
  
  cy.Passwordchange(this.data1.UserCreationSuccessMessage)
  pageLogin.getloginbtn1().click({force:true})
  
  cy.login(loginID,this.data1.BAPassword)
  pageLogin.getiFrame()
  
  cy.SecurityQuestions()
  
  
 })

})



//---------------------------------------employee view self details---------

When('Navigate to Manage User and view self details of Employee',function(){
  welcomePage.getUserManagementOption().click()
      cy.intercept('/mobiquitypay/v1/ums/user/search*').as('getSearch')
    welcomePage.getManageUsersLink().click()
    cy.wait('@getSearch', {timeout:20000})
    cy.wait(2000)
  manageUsersPage.getdropdown().select('Self')
  manageUsersPage.getSearchUserButton().click({ force: true })
  cy.wait(2000)
  manageUsersPage.getViewIcon().eq(0).click({ force: true })
  cy.wait(2000)
  manageUsersPage.getPersonalInfo().eq(0).contains('Personal Information')
})

And('Click on the wallet management history to view details', function () {
  cy.wait(2000)
  manageUsersPage.getWalletPaymentHistoryButton().click({force:true})
  cy.wait(2000)
  manageUsersPage.getTransactionIdField().contains('TRANSACTION ID')
})



And('Enter all the Employee Details for Cashin', function () {
  cy.getEmployeeBasicInfoTextFields()
  registerPage.getMobileNumber().type(mobileut2)
  cy.iframe().find('select[data-test-id="title"]').select(this.data2.personalInfo.Title, { force: true })
  cy.iframe().find('select[data-test-id="preferredLanguage"]').select(this.data2.personalInfo.preferredLang, { force: true })
  cy.getDistributerEmailID()
  registerPage.getCountry().select(this.data2.personalInfo.country, { force: true })
  registerPage.getState().select(this.data2.subPersonalInfo.state, { force: true })
  registerPage.getCity().select(this.data2.subPersonalInfo.city, { force: true })
  cy.readFile(BuisnessReg).then((data) => {
    data.registeredEmployeeMobile = mobileut2
    cy.writeFile(BuisnessReg, data)
  })
  registerPage.getLoginID().invoke('val').then((val) => {
    cy.log(val)
    cy.readFile(BuisnessReg).then((data) => {
      data.EmployeeLoginId = val
      cy.writeFile(BuisnessReg, data)
    })
  })
 registerPage.getDateofEmployment().type('02/04/2023', { force: true })
 if(Cypress.env('otpVerification').includes("Yes"))
{
cy.OTP(Cypress.env('apiBaseURL'), Cypress.env('port'))
}
else
{
cy.log("No OTP verification required")
}
  registerPage.getNextButtonBasic().eq(0).click({ force: true })
  //------------------------------------------------KYC-------------------------------------------------
  let kycut
  const k = parseInt(Date.now());
  kycut = "A" + k
  registerPage.getKYCButton().eq(0).click({ force: true })
  
  registerPage.getKYCIDType().select(this.data2.KycInfo8.KycIDType, { force: true })
  registerPage.getKYCIDValue().type(kycut, { force: true })
  registerPage.getCityissued().select(this.data2.personalInfo.city, { force: true })
  
  registerPage.getCountryissued().select(this.data2.personalInfo.country, { force: true })
  cy.wait(2000)
  registerPage.getDateIssued().dblclick({ force: true }).type("22/07/2020", { force: true })
  registerPage.getDateIssued().click({ force: true })
  registerPage.getValidFrom().dblclick({ force: true }).type("22/07/2020")
  registerPage.getValidFrom().click({ force: true })
  registerPage.getValidThru().dblclick({ force: true }).type("22/07/2030")
  registerPage.getValidThru().click({ force: true })
  registerPage.getMakeThisPrimaryButton().click({ force: true })
  registerPage.getNextButtonBasic1().click({ force: true })
  registerPage.getNextButtonBasic2().click({ force: true })
  cy.wait(2000)
  registerPage.getSubmitButton().click({ force: true })
  cy.wait(2000)
})