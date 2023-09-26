/// <reference types="Cypress" />
/// <reference types = "Cypress-iframe"/>

//----------------Imports---------------------------------------------------------------------
import { And, Given } from "@badeball/cypress-cucumber-preprocessor";
import 'cypress-iframe';
import API from '../../../../../../../../../support/pageObjects/API';
import homePage from '../../../../../../../../../support/pageObjects/homePage';
import loginPage from '../../../../../../../../../support/pageObjects/loginPage';
import myActivity from '../../../../../../../../../support/pageObjects/MyActivity/myActivity';
import securityQuestion from '../../../../../../../../../support/pageObjects/SecurityQuestion/securityQuestion';
import approvals from '../../../../../../../../../support/pageObjects/UserManagement/approvals';
import manageUsers from '../../../../../../../../../support/pageObjects/UserManagement/manageUsers';
import register from '../../../../../../../../../support/pageObjects/UserManagement/register';
import "../../../../../../../../../support/Utils/AdministratorCommands";
import "../../../../../../../../../support/Utils/BusinessUserCommands";
import "../../../../../../../../../support/Utils/generic";
import "../../../../../../../../../support/Utils/subscriberCommands";
import "../../../../../../../../../support/Utils/registration";
import { includes } from "lodash";


//----------------Object Declaration-----------------------------------------------------------------
const pageLogin = new loginPage()
const welcomePage = new homePage()
const registerPage = new register()
const approvalPage = new approvals()
const manageUsersPage = new manageUsers()
const APIPage = new API()
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

And('Select User type as Business and Select user role', function () {
  pageLogin.getiFrame()
  // registerPage.getregisterPageTitle().should('be.visible')
  registerPage.getSelectUserTypeTab().contains('Business').click({ force: true })
  registerPage.getSelectUserTypeTab().contains('Business').focused()
  registerPage.getUserRole().contains('Distributer').click({ force: true })
  registerPage.getRegistrationMode().eq(0).click({ force: true })
})


And('Enter all the required business user details for O2C', function () {
  let mobileut;
  const m = parseInt(Date.now() / 100000);
  let p = m + 61
  mobileut = "77" + p

  cy.iframe().find('select[data-test-id="title"]').select(this.data2.personalInfo.Title, { force: true })
  cy.iframe().find('select[data-test-id="preferredLanguage"]').select(this.data2.personalInfo.preferredLang, { force: true })
  cy.getBasicInfoTextFields()
  cy.MobileNumber()
  registerPage.getLatitude().clear().type(this.data2.personalInfo.Latitude, { force: true })
  registerPage.getSupportOnline().select(this.data2.personalInfo.online, { force: true })
  registerPage.getlongitude().clear().type(this.data2.personalInfo.Longitude, { force: true })
  if (Cypress.env('otpVerification').includes("Yes")) {
    cy.OTP(Cypress.env('apiBaseURL'), Cypress.env('port'))
  }
  else {
    cy.log("No OTP verification required")
  }
  cy.getDistributerEmailID()
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
    cy.readFile(BuisnessRegO2C).then((data) => {
      data.registeredMobileO2C = val
      cy.writeFile(BuisnessRegO2C, data)
    })
  })
})

And('Save ChannelUser LoginID', function () {
  registerPage.getLoginID().invoke('val').then((val) => {
    cy.log(val)
    cy.readFile(BuisnessRegO2C).then((data) => {
      data.LoginId = val
      cy.writeFile(BuisnessRegO2C, data)
    })
  })
})


And('Enter ChannelUser Profile Details', function () {
  registerPage.getNextButtonBasic1().click({ force: true })
  if (Cypress.env('app').includes('Core')) {
    registerPage.getSecurityProfile().select('WholesalerDefaultSecurityProfile', { force: true })
    registerPage.getAuthProfile().select('WholesalerDefault Profile', { force: true })
    registerPage.getReguProfile().select('FullKycprofile', { force: true })
    registerPage.getMarketingProfile().select('WHSDefaultMP', { force: true })
  }
  else {
    registerPage.getAllProfileFormDropDown().each(($el) => {
      cy.wrap($el).select(1)
    })
  }
  registerPage.getNextButtonBasic2().click({ force: true })
  cy.getBankDetails()
})

And('Assert Created Buissness User Mobile Number and Write Created on time for O2C', function () {
  cy.readFile(BuisnessRegO2C).then((user) => {
    let BusinessMobile = user.registeredMobileO2C
    var BusinessUserMobile = " " + BusinessMobile
    manageUsersPage.getAssertMobile().eq(1).should('contain', BusinessUserMobile)
  })
  myActivityPage.getCreatedOnTime1().eq(0).invoke('text').then((time) => {
    time = time.trim()
    cy.log(time)
    cy.readFile(BuisnessRegO2C).then((data) => {
      data.CreatedOnTime = time
      cy.writeFile(BuisnessRegO2C, data)
    })
  })
})

And('User click on Buissness User submitted user data for O2C', function () {
  cy.getApproval(BuisnessRegO2C)
})



And('Enter Channel User KYC Details', function () {
  registerPage.getNextButtonBasic().click({ force: true })
  registerPage.getKycDropDownButton().eq(0).click({ force: true })

  //----------------------KYC-----------------------------------------------------------------------
  if (Cypress.env('app').includes('Core')) {
    registerPage.getKycIDType().select(this.data2.KycInfo.KycIDType, { force: true })
    registerPage.getKycIDValue().type(KycValue, { force: true })
    var myEle = document.getElementById("#kycGracePeriod")
    if (myEle != null) {
      registerPage.getKycGracePeriod().select(this.data2.KycInfo.KycGracePeriod, { force: true })
    }
    else {
      cy.log("Next")
    }
  }
  else {
    registerPage.getAllKYCDropDown().each(($el) => {
      if ($el.is(":disabled")) {
        return
      } else {
        cy.wrap($el).select(1)
      }
    })
    cy.getKYCTextFields()
  }
  registerPage.getMakeThisPrimaryButton().eq(2).click({ force: true })
})

//////////////////////////////////////////////////////////////////////////////////////////////////////


And('Enter all the required business user2 details', function () {
  let mobileut;
  const m = parseInt(Date.now() / 100000);
  let p = m + 4
  mobileut = "77" + p
  cy.iframe().find('select[data-test-id="preferredLanguage"]').select(this.data2.personalInfo.preferredLang, { force: true })
  cy.iframe().find('select[data-test-id="title"]').select(this.data2.personalInfo.Title, { force: true })
  cy.getBasicInfoTextFields()
  cy.MobileNumber()
  registerPage.getLatitude().clear().type(this.data2.personalInfo.Latitude, { force: true })
  registerPage.getSupportOnline().select(this.data2.personalInfo.online, { force: true })
  if (Cypress.env('otpVerification').includes("Yes")) {
    cy.OTP(Cypress.env('apiBaseURL'), Cypress.env('port'))
  }
  else {
    cy.log("No OTP verification required")
  }
  cy.getDistributerEmailID1()
  registerPage.getlongitude().clear().type(this.data2.personalInfo.Longitude, { force: true })
  if (Cypress.env('otpVerification').includes("Yes")) {
    cy.OTP(Cypress.env('apiBaseURL'), Cypress.env('port'))
  }
  else {
    cy.log("No OTP verification required")
  }
  registerPage.getCountry().select(this.data2.personalInfo.country, { force: true })
  registerPage.getState().select(this.data2.personalInfo.state, { force: true })
  registerPage.getCity().select(this.data2.personalInfo.city, { force: true })

  registerPage.getMobileNumber().invoke('val').then((val) => {
    cy.readFile(BuisnessReg).then((data) => {
      data.registeredMobile = val
      cy.writeFile(BuisnessReg, data)
    })
  })
})

And('Save ChannelUser2 LoginID', function () {
  registerPage.getLoginID().invoke('val').then((val) => {
    cy.log(val)
    cy.readFile(BuisnessReg).then((data) => {
      data.DistributerLoginId = val
      cy.writeFile(BuisnessReg, data)
    })
  })
})

And('Assert Created Buissness User2 Mobile Number and Write Created on time', function () {
  cy.readFile(BuisnessReg).then((user) => {
    let BusinessMobile = user.registeredMobile
    var BusinessUserMobile = " " + BusinessMobile

    if (Cypress.env('version').includes('x.4')) {
      manageUsersPage.getAssertMobile().eq(0).should('contain', BusinessUserMobile)
    }
    else {
      manageUsersPage.getAssertMobile().eq(1).should('contain', BusinessUserMobile)
    }
  })
  myActivityPage.getCreatedOnTime().eq(0).invoke('text').then((time) => {
    time = time.trim()
    cy.log(time)
    cy.readFile(BuisnessReg).then((data) => {
      data.CreatedOnTime = time
      cy.writeFile(BuisnessReg, data)
    })
  })
})

And('User click on Buissness User submitted user data', function () {
  cy.getApproval(BuisnessReg)
})




And('Assert Created Buissness User Mobile Number and Write Created on time', function () {
  cy.readFile(BuisnessReg).then((user) => {
    let BusinessMobile = user.registeredMobile
    var BusinessUserMobile = " " + BusinessMobile
    manageUsersPage.getAssertMobile().eq(1).should('contain', BusinessUserMobile)
  })
  myActivityPage.getCreatedOnTime().eq(0).invoke('text').then((time) => {
    time = time.trim()
    cy.log(time)
    cy.readFile(BuisnessReg).then((data) => {
      data.CreatedOnTime = time
      cy.writeFile(BuisnessReg, data)
    })
  })
})

//--------------------------

Given('Login into Mobiquity Portal as Distributer for O2C', function () {
  cy.launchURL(Cypress.env('Adminurl'))
  cy.visit(Cypress.env("Adminurl") + "/dfscontainer/#/business/")

  cy.readFile(BuisnessRegO2C).then((data) => {
    var loginId
    loginId = data.LoginId
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

Given('Login into Mobiquity Portal as Distributer', function () {
  cy.launchURL(Cypress.env('Adminurl'))
  cy.visit(Cypress.env("Adminurl") + "/dfscontainer/#/business/")

  cy.readFile(BuisnessReg).then((data) => {
    var loginId
    loginId = data.DistributerLoginId
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

