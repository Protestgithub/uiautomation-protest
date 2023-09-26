/// <reference types="Cypress" />
/// <reference types = "Cypress-iframe"/>

//----------------Imports---------------------------------------------------------------------
import 'cypress-iframe'
import { Given, When, Then, And, Before } from "@badeball/cypress-cucumber-preprocessor";
import loginPage from '../../../../../../../../../support/pageObjects/loginPage';
import homePage from '../../../../../../../../../support/pageObjects/homePage';
import { recurse } from 'cypress-recurse';
import "../../../../../../../../../support/Utils/generic";
import "../../../../../../../../../support/Utils/subscriberCommands";
import "../../../../../../../../../support/Utils/AdministratorCommands"
import "../../../../../../../../../support/Utils/BusinessUserCommands";
import "../../../../../../../../../support/Utils/registration";
import register from '../../../../../../../../../support/pageObjects/UserManagement/register';
import approvals from '../../../../../../../../../support/pageObjects/UserManagement/approvals';
import manageUsers from '../../../../../../../../../support/pageObjects/UserManagement/manageUsers';
import myActivity from '../../../../../../../../../support/pageObjects/MyActivity/myActivity';
import API from '../../../../../../../../../support/pageObjects/API';
import bulkupload from '../../../../../../../../../support/pageObjects/BulkUpload/bulkupload';
import securityQuestion from '../../../../../../../../../support/pageObjects/SecurityQuestion/securityQuestion';


//----------------Object Declaration-----------------------------------------------------------------
const pageLogin = new loginPage()
const welcomePage = new homePage()
const registerPage = new register()
const approvalPage = new approvals()
const manageUsersPage = new manageUsers()
const APIPage = new API()
const BulkUploadPage = new bulkupload()
const myActivityPage = new myActivity()
const securityQuestionPage = new securityQuestion()
const uuid = () => Cypress._.random(1e8)
const uuid1 = () => Cypress._.random(1e6)
const uuuid = () => Cypress._.random(1e3)
amount = uuuid()
var loginId, mobile, KycValue, amount, name, ifscnum, accnumber
const kycid = () => Cypress._.random(1e8)
const timestamp = (new Date).getTime()
KycValue = "A" + timestamp
mobile = "77" + uuid1()
var mobile1, Submobile, loginId, name
mobile1 = "77" + uuid()
var filename = 'cypress/fixtures/userData/AdministratorData.json'
var subRegistration = 'cypress/fixtures/userData/subscriberReg.json'
var BuisnessReg = 'cypress/fixtures/userData/BusinessUsersData.json'
var BuisnessRegO2C = 'cypress/fixtures/userData/BusinessUsersDataO2C.json'
var BankData = 'cypress/fixtures/userData/BusinessUsersDataO2C.json'
let answerone = "vuip45$"
let answertwo = "mlop$93"

//-----------------------------------variable declaration-----------------
function getRandomName() {
  name = "";
  var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
  for (var i = 0; i < 5; i++)
    name += possible.charAt(Math.floor(Math.random() * possible.length));
  return name;
}

function getRandomName1() {
  name = "12";
  var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
  for (var i = 0; i < 7; i++)
    name += possible.charAt(Math.floor(Math.random() * possible.length));
  return name;
}


//--------------------------User Management--------------------------------------------------------------

And('Select User type as Business and Select user role as Corporate', function () {
  pageLogin.getiFrame()
  registerPage.getregisterPageTitle().should('contain', this.data2.registerPageTitle)
  registerPage.getSelectUserTypeTab().contains('Business').click({ force: true })
  registerPage.getSelectUserTypeTab().contains('Business').focused()
  registerPage.getUserRole().contains('Corporate').click({ force: true })
  registerPage.getRegistrationMode().eq(0).click({ force: true })
})

And('Enter all the required business user details Creation for Corporate user role', function () {


  let mobileut1;
  const m = parseInt(Date.now() / 100000);
  let p = m + 61
  mobileut1 = "77" + p
  // registerPage.getFirstName().type(getRandomName(), { force: true })
  // registerPage.getLoginID().type(getRandomName() + "Test", { force: true })
  cy.iframe().find('select[data-test-id="title"]').select(this.data2.personalInfo.Title, { force: true })
  //registerPage.getLastName().type(getRandomName(), { force: true })


  cy.getBasicInfoTextFields()
  cy.MobileNumber()
  cy.iframe().find('select[data-test-id="preferredLanguage"]').select(this.data2.personalInfo.preferredLang, { force: true })
  if (Cypress.env('otpVerification').includes("Yes")) {
    cy.OTP(Cypress.env('apiBaseURL'), Cypress.env('port'))
  }
  else {
    cy.log("No OTP verification required")
  }
  cy.getAtmMachineEmailID()
  registerPage.getCountry().select(this.data2.personalInfo.country, { force: true })
  registerPage.getState().select(this.data2.subPersonalInfo.state, { force: true })
  registerPage.getCity().select(this.data2.subPersonalInfo.city, { force: true })
  if (Cypress.env('otpVerification').includes("Yes")) {
    cy.OTP(Cypress.env('apiBaseURL'), Cypress.env('port'))
  }
  else {
    cy.log("No OTP verification required")
  }
  registerPage.getMobileNumber().invoke('val').then((val) => {
    cy.readFile(BuisnessReg).then((data) => {
      data.registeredMobileCorp = val
      cy.writeFile(BuisnessReg, data)
    })
  })

  registerPage.getLoginID().invoke('val').then((val) => {
    cy.log(val)
    cy.readFile(BuisnessReg).then((data) => {
      data.CorporateLoginId = val
      cy.writeFile(BuisnessReg, data)
    })
  })

  registerPage.getNextButtonBasic().eq(0).click({ force: true })
  //------------------------------------------------KYC-------------------------------------------------
  let kycut
  const k = parseInt(Date.now());
  kycut = "A" + k
  registerPage.getKYCButton().eq(0).click({ force: true })

  registerPage.getKYCIDType().select(this.data2.KycInfo8.KycIDType, { force: true })
  registerPage.getKYCIDValue().type(kycut, { force: true })

  registerPage.getMakeThisPrimaryButton().eq(1).click({ force: true })



})

And('Enter Corporate Profile Details', function () {
  registerPage.getNextButtonBasic1().click({ force: true })
  if (Cypress.env('app').includes('Core')) {
    registerPage.getSecurityProfile().select(1, { force: true })
    registerPage.getAuthProfile().select("EnterpriseDefault Profile", { force: true })
    registerPage.getReguProfile().select(1, { force: true })
    registerPage.getMarketingProfile().select(1, { force: true })
  } else {
    registerPage.getAllProfileFormDropDown().each(($el) => {
      cy.wrap($el).select(1)
    })
  }
  registerPage.getNextButtonBasic2().click({ force: true })
  cy.getBankDetails1()
})

And('Assert Created Buissness User Mobile Number and Write Created on time for Corporate', function () {

  cy.readFile(BuisnessReg).then((user) => {
    let BusinessMobile = user.registeredMobileCorp
    var BusinessUserMobile = " " + BusinessMobile
    manageUsersPage.getAssertMobile().eq(1).should('contain', BusinessUserMobile)
  })

  myActivityPage.getCreatedOnTime().eq(0).invoke('text').then((time) => {
    time = time.trim()
    cy.log(time)
    cy.readFile(BuisnessReg).then((data) => {
      data.CorporateCreatedOnTime = time
      cy.writeFile(BuisnessReg, data)
    })
  })
})


And('Enter all the required business user details Creation for Corporate user role1', function () {


  let mobileut;
  const m = parseInt(Date.now() / 100000);
  let p = m + 88
  mobileut = "77" + p
  // registerPage.getFirstName().type(getRandomName(), { force: true })
  // registerPage.getLoginID().type(getRandomName() + "Test", { force: true })

  cy.iframe().find('select[data-test-id="preferredLanguage"]').select(this.data2.personalInfo.preferredLang, { force: true })
  cy.getBasicInfoTextFields()
  cy.MobileNumber()
  cy.iframe().find('select[data-test-id="title"]').select(this.data2.personalInfo.Title, { force: true })
  if (Cypress.env('otpVerification').includes("Yes")) {
    cy.OTP(Cypress.env('apiBaseURL'), Cypress.env('port'))
  }
  else {
    cy.log("No OTP verification required")
  }
  cy.getAtmMachineEmailID()
  registerPage.getCountry().select(this.data2.personalInfo.country, { force: true })
  registerPage.getState().select(this.data2.subPersonalInfo.state, { force: true })
  registerPage.getCity().select(this.data2.subPersonalInfo.city, { force: true })
  if (Cypress.env('otpVerification').includes("Yes")) {
    cy.OTP(Cypress.env('apiBaseURL'), Cypress.env('port'))
  }
  else {
    cy.log("No OTP verification required")
  }

  registerPage.getMobileNumber().invoke('val').then((val) => {
    cy.readFile(BuisnessReg).then((data) => {
      data.registeredMobileCorp1 = val
      cy.writeFile(BuisnessReg, data)
    })
  })

  registerPage.getLoginID().invoke('val').then((val) => {
    cy.log(val)
    cy.readFile(BuisnessReg).then((data) => {
      data.CorporateLoginId1 = val
      cy.writeFile(BuisnessReg, data)
    })
  })

  registerPage.getNextButtonBasic().eq(0).click({ force: true })
  //------------------------------------------------KYC-------------------------------------------------
  let kycut
  const k = parseInt(Date.now());
  kycut = "A" + k
  registerPage.getKYCButton().eq(0).click({ force: true })

  registerPage.getKYCIDType().select(this.data2.KycInfo8.KycIDType, { force: true })
  registerPage.getKYCIDValue().type(kycut, { force: true })

  registerPage.getMakeThisPrimaryButton().eq(1).click({ force: true })



})


And('Assert Created Buissness User Mobile Number and Write Created on time for Corporate1', function () {

  cy.readFile(BuisnessReg).then((user) => {
    let BusinessMobile = user.registeredMobileCorp1
    var BusinessUserMobile = " " + BusinessMobile
    manageUsersPage.getAssertMobile().eq(1).should('contain', BusinessUserMobile)
  })

  myActivityPage.getCreatedOnTime().eq(0).invoke('text').then((time) => {
    time = time.trim()
    cy.log(time)
    cy.readFile(BuisnessReg).then((data) => {
      data.CorporateCreatedOnTime = time
      cy.writeFile(BuisnessReg, data)
    })
  })
})

And('User click on Corporate User submitted user data', function () {
  cy.getCorporateApproval(BuisnessReg)
})




Given('Login into Mobiquity Portal as Corporate User', function () {
  cy.launchURL(Cypress.env('Adminurl'))
  cy.visit(Cypress.env("Adminurl") + "/dfscontainer/#/business/")

  cy.readFile(BuisnessReg).then((data) => {
    var loginId
    loginId = data.CorporateLoginId
    cy.login(loginId, this.data1.businessAdmin.DefaultPassword)
    cy.login1(this.data1.businessAdmin.businessadminPwd1)

    cy.Passwordchange(this.data1.UserCreationSuccessMessage)
    pageLogin.getloginbtn1().click({ force: true })
    cy.wait(2000)
    cy.login(loginId, this.data1.businessAdmin.businessadminPwd1)
    cy.SecurityQuestions()
  })
})

Given('Login into Mobiquity Portal as Corporate User2', function () {
  cy.launchURL(Cypress.env('Adminurl'))
  cy.visit(Cypress.env("Adminurl") + "/dfscontainer/#/business/")

  cy.readFile(BuisnessReg).then((data) => {
    var loginId
    loginId = data.CorporateLoginId1
    cy.login(loginId, this.data1.businessAdmin.DefaultPassword)
    cy.login1(this.data1.businessAdmin.businessadminPwd1)

    cy.Passwordchange(this.data1.UserCreationSuccessMessage)
    pageLogin.getloginbtn1().click({ force: true })
    cy.wait(2000)
    cy.login(loginId, this.data1.businessAdmin.businessadminPwd1)
    if (Cypress.env("version").includes("x.7")) {
      cy.SecurityQuestions()

    } else {
      cy.log("login successfully")
    }


  })
})