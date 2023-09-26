/// <reference types="Cypress" />
/// <reference types = "Cypress-iframe"/>

//----------------Imports---------------------------------------------------------------------
import { And, Given, Then, When } from "@badeball/cypress-cucumber-preprocessor";
import 'cypress-iframe';
import "../../../../../support/Utils/generic";
import ChurnManagement from '../../../../../support/pageObjects/ChurnManagement/ChurnManagement';
import homePage from '../../../../../support/pageObjects/homePage';
import loginPage from '../../../../../support/pageObjects/loginPage';
import myActivity from '../../../../../support/pageObjects/MyActivity/myActivity';
import securityQuestion from '../../../../../support/pageObjects/SecurityQuestion/securityQuestion';
import approvals from '../../../../../support/pageObjects/UserManagement/approvals';
import manageUsers from '../../../../../support/pageObjects/UserManagement/manageUsers';
import register from '../../../../../support/pageObjects/UserManagement/register';
import "../../../../../support/Utils/ChurnCommands";
import "../../../../../support/Utils/comissioncommands";
import "../../../../../support/Utils/generic";
import "../../../../../support/Utils/subscriberCommands";
//----------------Object Declaration-----------------------------------------------------------

const pageLogin = new loginPage()
const churnManagementPage = new ChurnManagement()
const welcomePage = new homePage()
const registerPage = new register()
const approvalPage = new approvals()
const myActivityPage = new myActivity()
const manageUsersPage = new manageUsers()
const securityQuestionPage = new securityQuestion()
const uuid = () => Cypress._.random(1e2)
Amount = uuid()

var CashFile = 'cypress/fixtures/userData/cashIn&cashout.json'
const SubRegistration = 'cypress/fixtures/userData/subscriberReg.json'
const churnSubRegistration = 'cypress/fixtures/userData/churnSubscriberReg.json'
var loginId, KycValue, name, Amount

const timestamp = (new Date).getTime()
KycValue = "A" + timestamp

//----------------------------------------------------------------------------------------
function getRandomName() {
  name = "";
  var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
  for (var i = 0; i < 5; i++)
    name += possible.charAt(Math.floor(Math.random() * possible.length));
  return name;
}


//--------------------------------------------------------------------------------------------------------
And('Enter Mobile number or KYC number of Churn Subscriber and click on Search', function(){
    pageLogin.getiFrame()
    manageUsersPage.getSearchUser().click({ force: true })
  
    cy.readFile(churnSubRegistration).then((data) => {
      // var mobileSys
      var mobile
      mobile = data.churnSubscriberRegistration
      manageUsersPage.getSearchUser().type(mobile, { force: true })
    })
    manageUsersPage.getSearchUserButton().click({ force: true })

})


And('Assert the Deleted Churn Subscriber on time', function () {
    cy.readFile(churnSubRegistration).then((user) => {
      let BUMobile = user.churnSubscriberRegistration
      var BUDMobile = " " + BUMobile
      manageUsersPage.getAssertMobile().eq(1).should('contain', BUDMobile)
    })
    myActivityPage.getCreatedOnTime1().eq(0).invoke('text').then((time) => {
      time = time.trim()
      cy.log(time)
      cy.readFile(churnSubRegistration).then((data) => {
        data.CreatedOnTime = time
        cy.writeFile(churnSubRegistration, data)
      })
    })
  })


  //------------Approval Chrun Subscriber------------------------------
  And('User click on submitted user data of Chrun Subscriber', function () {
    cy.getApproval(churnSubRegistration)
  
  })


  //-----------------------------------------------------------------------------------

//----------churnSubscriberRegistrationBulkUpload Teardown
  //--------------------------------------------------------------------------------------------------------
And('Enter Mobile number or KYC number of Churn Subscriber BulkUpload and click on Search', function(){
    pageLogin.getiFrame()
    manageUsersPage.getSearchUser().click({ force: true })
  
    cy.readFile(churnSubRegistration).then((data) => {
      // var mobileSys
      var mobile
      mobile = data.churnSubscriberRegistrationBulkUpload
      manageUsersPage.getSearchUser().type(mobile, { force: true })
    })
    manageUsersPage.getSearchUserButton().click({ force: true })

})


And('Assert the Deleted Churn Subscriber reg BulkUpload  on time', function () {
    cy.readFile(churnSubRegistration).then((user) => {
      let BUMobile = user.churnSubscriberRegistrationBulkUpload
      var BUDMobile = " " + BUMobile
      manageUsersPage.getAssertMobile().eq(1).should('contain', BUDMobile)
    })
    myActivityPage.getCreatedOnTime1().eq(0).invoke('text').then((time) => {
      time = time.trim()
      cy.log(time)
      cy.readFile(churnSubRegistration).then((data) => {
        data.CreatedOnTime = time
        cy.writeFile(churnSubRegistration, data)
      })
    })
  })


  //------------Approval-----------------------------
  And('User click on submitted user data of Churn Subscriber BulkUpload', function () {
    cy.getApproval(churnSubRegistration)
  
  })


  //---------------------churnSubscriberRegistrationChurnAprRej--------------------------------
    //--------------------------------------------------------------------------------------------------------
And('Enter Mobile number or KYC number of ChurnSubscriberRegistrationChurnAprRej and click on Search', function(){
    pageLogin.getiFrame()
    manageUsersPage.getSearchUser().click({ force: true })
  
    cy.readFile(churnSubRegistration).then((data) => {
      // var mobileSys
      var mobile
      mobile = data.churnSubscriberRegistrationChurnAprRej
      manageUsersPage.getSearchUser().type(mobile, { force: true })
    })
    manageUsersPage.getSearchUserButton().click({ force: true })

})


And('Assert the Deleted ChurnSubscriberRegistrationChurnAprRej on time', function () {
    cy.readFile(churnSubRegistration).then((user) => {
      let BUMobile = user.churnSubscriberRegistrationChurnAprRej
      var BUDMobile = " " + BUMobile
      manageUsersPage.getAssertMobile().eq(1).should('contain', BUDMobile)
    })
    myActivityPage.getCreatedOnTime1().eq(0).invoke('text').then((time) => {
      time = time.trim()
      cy.log(time)
      cy.readFile(churnSubRegistration).then((data) => {
        data.CreatedOnTime = time
        cy.writeFile(churnSubRegistration, data)
      })
    })
  })


  //------------Approval 
  And('User click on submitted user data of ChurnSubscriberRegistrationChurnAprRej', function () {
    cy.getApproval(churnSubRegistration)
  
  })

//----------------churnSubRegBatchReject------------------------------------------------------
//--------------------------------------------------------------------------------------------------------
And('Enter Mobile number or KYC number of ChurnSubRegBatchReject and click on Search', function(){
    pageLogin.getiFrame()
    manageUsersPage.getSearchUser().click({ force: true })
  
    cy.readFile(churnSubRegistration).then((data) => {
      // var mobileSys
      var mobile
      mobile = data.churnSubRegBatchReject
      manageUsersPage.getSearchUser().type(mobile, { force: true })
    })
    manageUsersPage.getSearchUserButton().click({ force: true })

})


And('Assert the Deleted churnSubRegBatchReject on time', function () {
    cy.readFile(churnSubRegistration).then((user) => {
      let BUMobile = user.churnSubRegBatchReject
      var BUDMobile = " " + BUMobile
      manageUsersPage.getAssertMobile().eq(1).should('contain', BUDMobile)
    })
    myActivityPage.getCreatedOnTime1().eq(0).invoke('text').then((time) => {
      time = time.trim()
      cy.log(time)
      cy.readFile(churnSubRegistration).then((data) => {
        data.CreatedOnTime = time
        cy.writeFile(churnSubRegistration, data)
      })
    })
  })


  //------------Approval------------------------------
  And('User click on submitted user data of ChurnSubRegBatchReject', function () {
    cy.getApproval(churnSubRegistration)
  
  })