/// <reference types="Cypress" />
/// <reference types = "Cypress-iframe"/>

//----------------Imports---------------------------------------------------------------------
import 'cypress-iframe'
import { Given, When, Then, And, Before } from "@badeball/cypress-cucumber-preprocessor";
import loginPage from '../../../../../../../support/pageObjects/loginPage';
import homePage from '../../../../../../../support/pageObjects/homePage';
import { recurse } from 'cypress-recurse';
import "../../../../../../../support/Utils/generic"
import "../../../../../../../support/Utils/securityCommands";
import register from '../../../../../../../support/pageObjects/UserManagement/register';
import approvals from '../../../../../../../support/pageObjects/UserManagement/approvals';
import manageUsers from '../../../../../../../support/pageObjects/UserManagement/manageUsers';
import SecurityProfilePage from '../../../../../../../support/pageObjects/SecurityProfile/SecurityProfilePage';
import InverseC2C from '../../../../../../../support/pageObjects/InverseC2C/InverseC2C.js'

//----------------Object Declaration----------------------------------------------------------
const pageLogin = new loginPage()
const welcomePage = new homePage()
const registerPage = new register()
const approvalPage = new approvals()
const securityProfilePage = new SecurityProfilePage()
const InC2C= new InverseC2C()
const manageUsersPage = new manageUsers()

var mobile
let Sysfilelogin = 'cypress/fixtures/userData/SystemAdminLogin.json'
var SubProfileName = 'cypress/fixtures/profileData/Profile.json'
var name, SecurityProfile
var loginId
var subRegistration = 'cypress/fixtures/userData/subscriberReg.json'
let businesslogin="cypress/fixtures/userData/BusinessUsersData.json"
let answerone="vuip45$"
let answertwo="mlop$93"
//--------------------------------------------------------------------------------
function getRandomNumber() {
  name = "12";
  var possible = "0123456789";
  for (var i = 0; i < 1; i++)
    name += possible.charAt(Math.floor(Math.random() * possible.length));
  return name;
}
function getRandomName() {
  name = "";
  var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
  for (var i = 0; i < 7; i++)
    name += possible.charAt(Math.floor(Math.random() * possible.length));
  return name;
}
const uuid = () => Cypress._.random(1e8)
mobile = "77" + uuid()

//-------------------------------------------------------------------------------------------

And('Enter all the required business user details Creation for Merchant user role for Inverse C2C Transaction', function () {

    //const uuid = () => Cypress._.random(1e8)
    let mobileut;
    const m = parseInt(Date.now()/100000);
    mobileut = "77" + m
  
    
    const lgid = () => Cypress._.random(1e5)
    loginId = this.data2.personalInfo.name + lgid()
    
  
    cy.iframe().find('select[data-test-id="title"]')
      .select(this.data2.personalInfo.Title, { force: true })
    // cy.get('input[id="dateOfBirth"]').click()
    
    registerPage.getDOB().dblclick().type(this.data2.dob) 
    
    //-----------------------Mobile Number OTP-------------------------------------------------------------------
    recurse(
      () =>cy.MobileNumber(),
      () => registerPage.getFirstName().clear().type(getRandomName(), { force: true }),
      (uniqueness) => (uniqueness) == registerPage.getuniqueness()
    )
    cy.readFile('cypress/fixtures/userData/BusinessUsersData.json').then((data) => {
      data.registeredMobileMerchforInverseC2C =mobileut
      cy.writeFile('cypress/fixtures/userData/BusinessUsersData.json',data)
  })
    //cy.writeFile('cypress/fixtures/userData/BusinessUsersData.json',{registeredMobileMerch:mobileut})
    registerPage.getLastName().type(getRandomName(), { force: true })
    cy.OTP(Cypress.env('apiBaseURL'))
    
    //----------------email id otp---------------------------------------------------//
    cy.getBusinessrandomUserEmailIDMerchantforInverseC2C()
    cy.iframe().find('select[data-test-id="preferredLanguage"]').select(this.data2.personalInfo.preferredLang, { force: true })
   cy.OTP(Cypress.env('apiBaseURL'))
    
  
    registerPage.getSupportOnline().select(this.data2.personalInfo.online, { force: true })
    registerPage.getAdressLine1().type(this.data2.personalInfo.addressLine1, { force: true })
    registerPage.getCountry().select(this.data2.personalInfo.country, { force: true })
    registerPage.getState().select(this.data2.personalInfo.state, { force: true })
    registerPage.getCity().select(this.data2.personalInfo.city, { force: true })
    registerPage.getLatitude().type(this.data2.personalInfo.Latitude, { force: true })
    registerPage.getlongitude().type(this.data2.personalInfo.Longitude, { force: true })
    registerPage.getNextButtonBasic().eq(0).click({ force: true })
  //------------------------------------------------KYC-------------------------------------------------
    let kycut
    const k = parseInt(Date.now());
  
    kycut = "A" + k
    registerPage.getKYCButton().eq(0).click({ force: true })
    
    //cy.intercept('/mobiquitypay/v1/user/enums?parent-value=').as('all')
    registerPage.getKYCIDType().select(this.data2.KycInfo8.KycIDType, { force: true })
    //cy.checkAPI('/mobiquitypay/v1/user/enums?parent-value=')
    registerPage.getKYCIDValue().type(kycut, { force: true })
  
  
    
    registerPage.getMakeThisPrimaryButton().eq(2).click({ force: true })
    
    //cy.intercept('/mobiquitypay/v1/marketingProfiles?categoryCode=').as('all')
    registerPage.getNextButtonBasic1().click({ force: true })
    //cy.checkAPI('/mobiquitypay/v1/marketingProfiles?categoryCode=')
  
  
  //------------------------------------Hierarchy--------------------------------------------------------------
  
    registerPage.getParent().type(this.data33.registeredMobileHeadMerch,{force:true})
    
    registerPage.getGo().click({force:true})
    
    registerPage.getRadioButton().click({force:true})
    registerPage.getNextButtonBasic2().click({force: true})
  
  
   //-----------------------------Profile---------------------------------------------------------------
  
    
    //cy.readFile(SubProfileName).then((data) => {
    //  let Profile = data.Distributer
      registerPage.getSecurityProfile().select(this.data2.MSecurityProfile, { force: true })
   // })
   // cy.readFile(SubAuthProfileName).then((data) => {
    //  let Profile1 = data.BusinessDistributor
      registerPage.getAuthProfile().select(this.data2.MAuthProfile, { force: true })
    //})
   // registerPage.getReguProfile().select(this.data2.personalInfo.ReguProfile, { force: true })
   // cy.readFile(RegulatoryMarketingProfile).then((data) => {
     //    let RegProfile = data.RegulatoryProfileName
       registerPage.getReguProfile().select(this.data2.MReguProfile, { force: true })
      // })
    //registerPage.getMarketingProfile().select(this.data2.personalInfo.MarketProfile, { force: true })
   // cy.readFile(RegulatoryMarketingProfile).then((data) => {
     //   let MarProfile = data.MarketingProfileNameDistributer
         registerPage.getMarketingProfile().select(this.data2.MMarketingProfile, { force: true })
     //  })
     registerPage.getNextButtonBasic2().click({force:true})
  
  registerPage.getNextButtonBasic3().click({force:true})
  
    //Newly Added code
    cy.intercept('mobiquitypay/v1/ums/user').as('all')
    registerPage.getSubmitButton().click({ force: true })
    cy.wait('@all', {timeout: 70000}).then(inter => {
      if(inter.response.statusCode>500)
      {
     registerPage.getErrorMessage().should('include.text', 'It is taking too long to respond. You will receive a notification with the result soon')
     registerPage.getErrorDone().click({force:true})
      }
      else{
        return
      }
      cy.log(JSON.stringify(inter.response.statusCode))
      console.log(JSON.stringify(inter.response.statusCode))
    })
  
  
   //registerPage.getSubmitButton().click({ force: true })
  
  
  })
  
  
  And('Assert Created Buissness User Mobile Number and Write Created on time for Merchant for Inverse C2C', function () {
    
    cy.readFile(BuisnessReg).then((user) => {
      let BusinessMobile = user.registeredMobileMerchforInverseC2C
      var BusinessUserMobile = " " + BusinessMobile
      manageUsersPage.getAssertMobile().eq(1).should('have.text', BusinessUserMobile)
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
  
 Given('Log in with Merchant user credential', function () {
    cy.launchbusinessURL(Cypress.env('Adminurl'))
    cy.frameLoaded(pageLogin.getiFrame())
    cy.readFile(businesslogin).then((data) => {
    let loginID = data.MerchantLoginID
    
    cy.login(loginID, this.data1.businessAdmin.businessadminPwd1)
    })
  })


  When ('Click On Inverse C2C Transfer',function () {

    InC2C.getInverseC2CTab().click({force:true})
    cy.wait(2000)
    cy.waitUntil(() => {     
       return InC2C.getClick().contains("All fields marked ")
    })
  })
  And ('Enter all details for Inverse C2C transaction',function () {

    InC2C.getDomain().select("Merchant")
    InC2C.getPayerCategory().select("Head Merchant")
    cy.readFile(businesslogin).then((data) => {
    let number = data.registeredMobileHeadMerch
    InC2C.getMSIsDn().type(number)

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

Then('Verify Success message for Inverse C2C transaction',function(){
cy.wait(3000)
 InC2C.getSuccess().contains("transaction")
   // InC2C.getSuccess().contains(this.data1.InverseC2Success)
    InC2C.getSuccess().then(($btn) => {
        const txt = $btn.text()
        cy.log(txt)
        // expect(txt).to.contain(this.data1.InverseC2Success)
        let id=txt.split(':')[1]
        cy.log(id)
        cy.readFile(businesslogin).then((data) => {
          data.InverseC2CTransactionID =id
          cy.writeFile(businesslogin,data)
        })
      
      })
  })
  



  And('Enter Mobile number and KYC number in Search menu', function () {
    cy.fixture("userData/BusinessUsersData.json").then((user) => {
      var Mob1 = user.registeredMobileHeadMerch
      cy.log(Mob1)
      cy.wait(2000)
      manageUsersPage.getSearchUser().type(Mob1)
      cy.wait(2000)
    })
    manageUsersPage.getSearchUserButton().click({ force: true })
  })

  And('Click on view Details and Click on Wallet Payment History', function () {
cy.wait(2000)
    manageUsersPage.getViewIcon().eq(0).click({ force: true })
    cy.wait(1000)
   manageUsersPage.getWalletPaymentHistoryButton().click({force:true})
  })
