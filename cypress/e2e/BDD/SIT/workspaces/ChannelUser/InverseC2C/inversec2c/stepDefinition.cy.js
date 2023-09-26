/// <reference types="Cypress" />
/// <reference types = "Cypress-iframe"/>

//----------------Imports---------------------------------------------------------------------
import {
  And,
  Before,
  Given,
  Then,
  When,
} from "@badeball/cypress-cucumber-preprocessor";
import "cypress-iframe";
//import homePage from '../../../../../../../../support/pageObjects/homePage';
// import myActivity from '../../../../../../../../../../support/pageObjects/MyActivity/myActivity';
// import stockManagement from '../../../../../../../../../../support/pageObjects/StockManagement/stockManagement';
// import approvals from '../../../../../../../../../../support/pageObjects/UserManagement/approvals';
// import manageUsers from '../../../../../../../../../../support/pageObjects/UserManagement/manageUsers';
// import "../../../../../../../../../../support/Utils/generic";
// import "../../../../../../../../../../support/Utils/StockCommands";

import loginPage from '../../../../../../../support/pageObjects/loginPage';
import homePage from '../../../../../../../support/pageObjects/homePage';
import "../../../../../../../support/Utils/generic";
import "../../../../../../../support/Utils/subscriberCommands";
import "../../../../../../../support/Utils/AdministratorCommands"
import "../../../../../../../support/Utils/BusinessUserCommands";
import register from '../../../../../../../support/pageObjects/UserManagement/register';
import approvals from '../../../../../../../support/pageObjects/UserManagement/approvals';
import manageUsers from '../../../../../../../support/pageObjects/UserManagement/manageUsers';
import myActivity from '../../../../../../../support/pageObjects/MyActivity/myActivity';
import API from '../../../../../../../support/pageObjects/API';
import InverseC2C from '../../../../../../../support/pageObjects/InverseC2C/InverseC2C.js'
import securityQuestion from '../../../../../../../support/pageObjects/SecurityQuestion/securityQuestion';


//----------------Object Declaration-----------------------------------------------------------------
const pageLogin = new loginPage()
const InC2C= new InverseC2C()
const welcomePage = new homePage()
const registerPage = new register()
const approvalPage = new approvals()
const manageUsersPage = new manageUsers()
const APIPage = new API()
const myActivityPage = new myActivity()
const securityQuestionPage = new securityQuestion()
var loginId, mobile,KycValue, amount, name, ifscnum, accnumber
const kycid = () => Cypress._.random(1e8)
const timestamp = (new Date).getTime()
  KycValue = "A" + timestamp
var mobile1, Submobile, loginId, name
//mobile1 = "77" + uuid()
var filename = 'cypress/fixtures/userData/AdministratorData.json'
var subRegistration = 'cypress/fixtures/userData/subscriberReg.json'
var BuisnessReg = 'cypress/fixtures/userData/BusinessUsersData.json'
var BuisnessRegO2C = 'cypress/fixtures/userData/BusinessUsersDataO2C.json'
var BankData = 'cypress/fixtures/userData/BusinessUsersDataO2C.json'


// //----------------Object Declaration-----------------------------------------------------------------

// const welcomePage = new homePage()
 //const stockManagementPage = new stockManagement()
// const myActivityPage = new myActivity()
// const manageUsersPage = new manageUsers()
// const approvalPage = new approvals()
// var filenamestock = 'cypress/fixtures/StockManagement.json'
// var filename = 'cypress/fixtures/userData/AdminTransaction.json'
// var SYSfilename = 'cypress/fixtures/userData/SystemAdminLogin.json'
// const o2cBusinessNo = 'cypress/fixtures/userData/BusinessUsersDataO2C.json'

var mobile
const uuid = () => Cypress._.random(1e8)
mobile = "77" + uuid()

var refno
refno = "12" + uuid()

var amount
const uuuid = () => Cypress._.random(1e3)
amount = uuuid()

var amount1
const uuuuid = () => Cypress._.random(1e11)
amount1 = uuuuid()

const uid = () => Cypress._.random(1e2)
const id = uid()
const testname = `testname${id}`
var name
function getRandomName() {
  name = "";
  var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
  for (var i = 0; i < 5; i++)
    name += possible.charAt(Math.floor(Math.random() * possible.length));
  return name;
}


And('Select User type as Business and Select user role as Merchant for inverse c2c',function(){
  pageLogin.getiFrame()
  registerPage.getSelectUserTypeTab().eq(2).click({ force: true })
  registerPage.getSelectUserTypeTab().eq(1).focused()
  registerPage.getUserRole().eq(12).click({ force: true })
  registerPage.getRegistrationMode().eq(0).click({ force: true })
})

















And('Enter all the required business user details Creation for inverse c2c', function () {
    let mobileut;
    const m = parseInt(Date.now()/100000);
    let p = m + 82
    mobileut = "77" + p
    
    cy.iframe().find('select[data-test-id="title"]').select(this.data2.personalInfo.Title, { force: true })
      cy.getBasicInfoTextFields()
    registerPage.getMobileNumber().clear().type(mobileut, {force:true})
    cy.iframe().find('select[data-test-id="preferredLanguage"]').select(this.data2.personalInfo.preferredLang, { force: true })
    if(Cypress.env('otpVerification').includes("Yes"))
  {
  cy.OTP(Cypress.env('apiBaseURL'), Cypress.env('port'))
  }
  else
  {
  cy.log("No OTP verification required")
  }
    registerPage.getDOB().dblclick().type(this.data2.dob)
    registerPage.getLatitude().clear().type(this.data2.personalInfo.Latitude, { force: true })
    registerPage.getSupportOnline().select(this.data2.personalInfo.online, { force: true })
    cy.getMerchantEmailID()
    registerPage.getlongitude().clear().type(this.data2.personalInfo.Longitude, { force: true })
    registerPage.getCountry().select(this.data2.personalInfo.country, { force: true })
    registerPage.getState().select(this.data2.subPersonalInfo.state, { force: true })
    registerPage.getCity().select(this.data2.subPersonalInfo.city, { force: true })
    if(Cypress.env('otpVerification').includes("Yes"))
  {
  cy.OTP(Cypress.env('apiBaseURL'), Cypress.env('port'))
  }
  else
  {
  cy.log("No OTP verification required")
  }
    cy.readFile(BuisnessReg).then((data) => {
    data.registeredMobileMerchinversec2c =mobileut
    cy.writeFile(BuisnessReg,data)
    })
  
    registerPage.getLoginID().invoke('val').then((val) => {
      cy.log(val)
      cy.readFile(BuisnessReg).then((data) => {
        data.MerchantLoginIDinversec2c = val
        cy.writeFile(BuisnessReg, data)
      })
    })
  })

  Given('Login into Mobiquity Portal as Merchant for inverse C2C', function () {
    cy.launchURL(Cypress.env('Adminurl'))
    cy.visit(Cypress.env("Adminurl") + "/dfscontainer/#/business/")
    
    cy.readFile(BuisnessReg).then((data) => {
      var loginId
      loginId = data.MerchantLoginIDinversec2c
      cy.login(loginId, this.data1.businessAdmin.DefaultPassword)
      cy.login1(this.data1.businessAdmin.businessadminPwd1)
      
      cy.Passwordchange(this.data1.UserCreationSuccessMessage)
      pageLogin.getloginbtn1().click({ force: true })
      cy.wait(2000)
      cy.login(loginId, this.data1.businessAdmin.businessadminPwd1)
      cy.SecurityQuestions()
    })
  })


  And ('Enter all details for Inverse C2C transactions',function () {

    InC2C.getDomain().select("Merchant")
    InC2C.getPayerCategory().select("Head Merchant")
    cy.readFile(BuisnessReg).then((data) => {
    let number = data.registeredMobileMerch
    InC2C.getMSIsDn().type(7716915856)

    })
    
    InC2C.getClick().click({force:true})
    InC2C.getPayerWalletType().select("Normal")
    InC2C.getSubmit().click({force:true})
    cy.wait(2000)
    InC2C.getAmount().type("5")
    InC2C.getSubmitConfirm().click({force:true})
       cy.wait(2000)
   // InC2C.getBackBtn().contains("Back")
    InC2C.getConfirm().click({force:true})
    cy.wait(2000)
  })


  And ('Enter amount for Inverse C2C transaction',function () {

    InC2C.getDomain().select("Merchant")
    InC2C.getPayerCategory().select("Head Merchant")
    cy.readFile(BuisnessReg).then((data) => {
    let number = data.registeredMobileMerch
    InC2C.getMSIsDn().type(7716915856)

    })
    
    InC2C.getClick().click({force:true})
    InC2C.getPayerWalletType().select("Normal")
    InC2C.getSubmit().click({force:true})
    cy.wait(2000)
    InC2C.getAmount().type("111")
    InC2C.getSubmitConfirm().click({force:true})
       cy.wait(2000)
   // InC2C.getBackBtn().contains("Back")
    InC2C.getConfirm().click({force:true})
    cy.wait(2000)
  })





  And ('Enter merchant MSISDN for Inverse C2C transaction',function () {

    InC2C.getDomain().select("Merchant")
    InC2C.getPayerCategory().select("Head Merchant")
    cy.readFile(BuisnessReg).then((data) => {
    let number = data.registeredMobileMerchinversec2c
    InC2C.getMSIsDn().type(number)

    })
    
    InC2C.getClick().click({force:true})
    InC2C.getPayerWalletType().select("Normal")
    InC2C.getSubmit().click({force:true})
    cy.wait(2000)
    InC2C.getAmount().type("111")
    InC2C.getSubmitConfirm().click({force:true})
       cy.wait(2000)
   // InC2C.getBackBtn().contains("Back")
    InC2C.getConfirm().click({force:true})
    cy.wait(2000)
  })




  And ('Enter Salary wallet for Inverse C2C transaction',function () {

    InC2C.getDomain().select("Merchant")
    InC2C.getPayerCategory().select("Head Merchant")
    cy.readFile(BuisnessReg).then((data) => {
    let number = data.registeredMobileMerchinversec2c
    InC2C.getMSIsDn().type(number)

    })
    
    InC2C.getClick().click({force:true})
    InC2C.getPayerWalletType().select("Salary")
    InC2C.getSubmit().click({force:true})
    cy.wait(2000)
    InC2C.getAmount().type("5")
    InC2C.getSubmitConfirm().click({force:true})
       cy.wait(2000)
   // InC2C.getBackBtn().contains("Back")
    InC2C.getConfirm().click({force:true})
    cy.wait(2000)
  })


  Given('Log in with Merchant user credential for inverse C2C', function () {
    cy.launchbusinessURL(Cypress.env('Adminurl'))
    cy.frameLoaded(pageLogin.getiFrame())
    cy.readFile(BuisnessReg).then((data) => {
    let loginID = data.MerchantLoginIDinversec2c
    
    cy.login(loginID, this.data1.businessAdmin.businessadminPwd1)
    })
  })