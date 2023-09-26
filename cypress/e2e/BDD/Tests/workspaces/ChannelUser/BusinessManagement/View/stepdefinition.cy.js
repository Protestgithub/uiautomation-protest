/// <reference types="Cypress" />
/// <reference types = "Cypress-iframe"/>

//----------------Imports---------------------------------------------------------------------
import 'cypress-iframe'
import { Given, When, Then, And, Before } from "@badeball/cypress-cucumber-preprocessor";
import loginPage from '../../../../../../../support/pageObjects/loginPage';
import "../../../../../../../support/Utils/generic";
import"../../../../../../../support/Utils/BusinessUserCommands";
import myActivity from '../../../../../../../support/pageObjects/MyActivity/myActivity';
import manageUsers from '../../../../../../../support/pageObjects/UserManagement/manageUsers';
import securityQuestion from '../../../../../../../support/pageObjects/SecurityQuestion/securityQuestion';


//----------------Object Declaration-----------------------------------------------------------------
const pageLogin = new loginPage()
const myActivityPage = new myActivity()
const manageUsersPage = new manageUsers()
const securityQuestionPage = new securityQuestion()
const uuid = () => Cypress._.random(1e8)
const uuid1 = () => Cypress._.random(1e8)
const uuuid = () => Cypress._.random(1e3)
amount = uuuid()
var mobile, mobile1, KycValue, amount, name, ifscnum, accnumber
const timestamp = (new Date).getTime()
KycValue = "A" + timestamp
mobile = "77" + uuid1()
mobile1 = "77" + uuid()
var BuisnessReg = 'cypress/fixtures/userData/BusinessUsersData.json'
//var BankData = 'cypress/fixtures/userData/BusinessUsersDataO2C.json'
var BuisnessRegO2C = 'cypress/fixtures/userData/BusinessUsersDataO2C.json'
let businesslogin = "cypress/fixtures/userData/BusinessUsersData.json"

function getRandomName1() {
    name = "12";
    var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    for (var i = 0; i < 7; i++)
      name += possible.charAt(Math.floor(Math.random() * possible.length));
    return name;
  }

  const date2 = new Date().toLocaleString('en-GB').split(',')
  const dateToday = date2[0].split('/')
  

And('Select employee type  in drop down', function () {
    manageUsersPage.getUserType().select("Employees")

})
And('Click on Action icon', function () {
    manageUsersPage.getViewAllDetailsButton().click({ force: true })
})
Then('Click on order details for Employee', function () {
    manageUsersPage.getOrderDetailsButton().click({ force: true })
})
And('Select user type Self in drop down', function () {
    manageUsersPage.getUserType().select("Self")
})
And('Click on search to view self information', function () {
    manageUsersPage.getSearchUserButton().click({ force: true })
})

//Prerna Case
Then('Select the user type from drop down and type the mobile Number and click on search', function () {
      
manageUsersPage.getUserType().select("Hierarchy")
cy.readFile('cypress/fixtures/userData/BusinessUsersData.json').then((data) => {
let Mobile = data.registeredMobileMerch 
manageUsersPage.getSearchUser().type(Mobile, { force: true })
})
manageUsersPage.getSearchUser().click({ force: true })
manageUsersPage.getSearchUserButton().click({ force: true })
})
  
  Given ('Login into Mobiquity Portal as head merchant', function () {
    cy.launchURL(Cypress.env('Adminurl'))
    cy.launchbusinessURL(Cypress.env('Adminurl'))
    //
    cy.frameLoaded(pageLogin.getiFrame())
    cy.readFile(BuisnessReg).then((data) => {
    let loginID = data.HeadMerchantLoginID
    cy.login(loginID, this.data1.BAPassword)    
    })
    })
    Given('Login with valid credentials as Head merchant', function () {
    cy.launchURL(Cypress.env('Adminurl'))
    cy.visit(Cypress.env("Adminurl") + "/dfscontainer/#/business/")
    
    cy.readFile('cypress/fixtures/userData/BusinessUsersData.json').then((data) => {
    var loginId
    loginId = data.HeadMerchantLoginID
    //cy.login(loginId, this.data1.businessAdmin.DefaultPassword)
   // cy.login1(this.data1.businessAdmin.businessadminPwd1)
    // 
    // cy.Passwordchange(this.data1.UserCreationSuccessMessage)
    // pageLogin.getloginbtn1().click({ force: true })
    // 
     cy.login(loginId, this.data1.businessAdmin.businessadminPwd1)

    // //------------------SecurityQuestion&Answer------------------------
    // securityQuestionPage.getQuestion().select(1)
    // let a1 = getRandomName1()
    // securityQuestionPage.getAnswer().clear({ force: true }).type(a1, { force: true })
    // securityQuestionPage.getQuestion1().select(2)
    // let a2 = getRandomName1()
    // securityQuestionPage.getAnswer1().clear({ force: true }).type(a2, { force: true })
    // securityQuestionPage.getSave().click({ force: true })
    // securityQuestionPage.getDoneButton1().click({ force: true })
  
  })
    
    
    })
    
And('Select user type as Hierarchy and Search' , function() {
    manageUsersPage.getSelectOptn().select(1)
    manageUsersPage.getSearchUserButton().click( { force:true })
})

Then('Click on Wallet Payment History and check for Transaction details', function (){
    manageUsersPage.getAccinfo().click({ force:true })
    manageUsersPage.getWalletPaymentHistoryButton().click({ force:true })
    cy.waitUntil(()=>{
      return cy.iframe().find('div.filter-container').should('be.visible', { force: true })
    })
    manageUsersPage.getWalletExpandButton().click({ force:true })
    manageUsersPage.getViewMoreDetailsButton().click( { force:true } )
    cy.waitUntil(() => {
        return cy.iframe().find('[class="modal-label more-details-header"]').contains('More Details')
      })
  })

Then('Click on Order Details', function (){
    manageUsersPage.getAccinfo().click({ force:true })
    manageUsersPage.getOrderDetailsButton().click({ force:true })
    cy.waitUntil(() => {
        return cy.iframe().find('[class="mat-row cdk-row ng-star-inserted"]')
      })
  })

//------------------------------------------------------------------------------------------
Then('Click on Order Details and filter by status' , function(){
  manageUsersPage.getAccinfo().click({ force:true })
  manageUsersPage.getOrderDetailsButton().click({force:true })
  manageUsersPage.getFilter().click()
  manageUsersPage.getradiostatus().eq(0).click( {force:true } )
  myActivityPage.getServices().type('Wallet to Bank').click()
  cy.wait(3000)
  cy.wait(2000)
  manageUsersPage.getDatePickerStart().click({ force: true })
  cy.wait(2000)
  cy.log(dateToday[0])
  manageUsersPage.getStartDate().contains(dateToday[0]).click({ force: true })
  cy.wait(2000)
  manageUsersPage.getDatePickerEnd().click({ force: true })
  cy.wait(2000)
  manageUsersPage.getEndDate().contains(dateToday[0]).click({ force: true })
  cy.wait(2000)
  manageUsersPage.getApplyFilterButton().click({ force: true })
 

})
Then('Check for the wallets' , function() {
  manageUsersPage.getAccinfo().click({ force:true })
  manageUsersPage.getAccountInfo().click({ force:true })
  manageUsersPage.getWallettype().should('contain','Wallets')
})

And('Select the user type as self' , function() {
  manageUsersPage.getSelectOptn().select(3)
  manageUsersPage.getSearchUserButton().click( { force:true })
})

Then('Check for the Credential information and Assert the Pin & Password' , function() {
  manageUsersPage.getAccinfo().click({ force:true })
  manageUsersPage.getMore().click()
  cy.wait(2000)
  manageUsersPage.getcredentials().click({ force : true })
  cy.wait(2000)
  manageUsersPage.getAuthenticationFactor().contains('PIN')
  manageUsersPage.getIdentifierType().contains('EMAILID')
  manageUsersPage.getIdentifierType().contains('LOGINID')
  manageUsersPage.getColumnStatus().eq(1).contains('Active')
  manageUsersPage.getColumnStatus().eq(2).contains('Active')
  manageUsersPage.getColumnStatus().eq(3).contains('Active')
 
})

