/// <reference types="Cypress" />
/// <reference types = "Cypress-iframe"/>

//-------------------------------Imports---------------------------------------------------------------------
import { And, Given, Then, When } from "@badeball/cypress-cucumber-preprocessor";
import 'cypress-iframe';
import homePage from '../../../../../../../../support/pageObjects/homePage';
import loginPage from '../../../../../../../../support/pageObjects/loginPage';
import securityQuestion from '../../../../../../../../support/pageObjects/SecurityQuestion/securityQuestion';
import SessionManagement from '../../../../../../../../support/pageObjects/SessionManagement/SessionManagement';
import "../../../../../../../../support/Utils/generic";

//----------------Object Declaration----------------------------------------------------------

const welcomePage = new homePage()
const session = new SessionManagement()
const login = new loginPage()
const securityQuestionPage = new securityQuestion()
const SubMob = 'userData/subscriberReg.json'
var name;

//--------------------------------variable declaration-------------------
function getRandomName1() {
  name = "12";
  var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
  for (var i = 0; i < 7; i++)
    name += possible.charAt(Math.floor(Math.random() * possible.length));
  return name;
}

//----------------BDD Hooks-----------------------------------------------------------------

//----------------Test Scripts---------------------------------------------------------------


Given('Login into Mobiquity Portal as Subscriber', function () {
  cy.visit(Cypress.env("Adminurl") + "/dfscontainer/#/")
  cy.visit(Cypress.env("Adminurl") + "/dfscontainer/#/subscriber/")
  cy.readFile('cypress/fixtures/userData/subscriberReg.json').then((data1) => {
    var SubLogin
    SubLogin = data1.subscriberLoginId
    cy.login(SubLogin, this.data1.subscriber.subpwd)
  })
})

And('Click On My Sessions and logout', function(){
  //session.getSessionLogoutAllDevices().should('be.disabled')
    welcomePage.getmysessionoption().click();
    session.getdevices().click({ multiple: true })
   // session.getdevices().eq(0).click();
    session.getLogoutAllDevicesExceptCurrent().click();
    session.getYesForLogoutExceptCurrent().click();
})

And('Change Password', function () {
  cy.wait(2000)
  login.getInputForm().eq(0).type(this.data1.subscriber.subpwd1)
  login.getInputForm().eq(1).type(this.data1.subscriber.subpwd1)
  login.getchangepassword().click()
  login.getloginbtn1().click()
cy.wait(2000)
})
And('Login into Mobiquity Portal as Subscriber1', function () {
  cy.launchURL(Cypress.env('Adminurl'))
  cy.visit(Cypress.env("Adminurl") + "/dfscontainer/#/subscriber/")
  //  cy.intercept("/mobiquitypay/ums/v3/user/auth/web/login").as('getPwd')
  cy.readFile('cypress/fixtures/userData/subscriberReg.json').then((data) => {
    var SubLogin
    SubLogin = data.subscriberLoginId
    cy.login(SubLogin, this.data1.subscriber.subpwd1)

    //------------------SecurityQuestion&Answer------------------------
    securityQuestionPage.getQuestion().select(1)
    let a1 = getRandomName1()
    securityQuestionPage.getAnswer().clear({ force: true }).type(a1, { force: true })
    securityQuestionPage.getQuestion1().select(2)
    let a2 = getRandomName1()
    securityQuestionPage.getAnswer1().clear({ force: true }).type(a2, { force: true })
    securityQuestionPage.getSave().click({ force: true })
    securityQuestionPage.getDoneButton1().click({ force: true })
cy.wait(2000)
    cy.window().then(win => {
      cy.stub(win, 'open').as('open')
    })
  })
  
})
When('Navigate to SessionManagement', function () {
  welcomePage.getSessionManagementOption().scrollIntoView()
  welcomePage.getSessionManagementOption().click()
})
Then('Click On My Sessions', function () {
  welcomePage.getmysessionoption().click()
})
And('Click On All Session and Enter Number to search', function () {
  welcomePage.getAllSessionsOption().click()
  cy.fixture(SubMob).then((user) => {
    var SubMob1 = user.subscriberMobile
    cy.log(SubMob1)
    session.getSearchUser().type(SubMob1)
  })
  if(Cypress.env('version').includes("x.4"))
  {
    session.getimg().click()
    session.getSearchBtn().click()
  }
  else{
    session.getSearchBtn().click()
  }
})
Then('Delete Devices', function () {
  session.getdevices().click({ multiple: true })
  session.getdeletedevices().click()
  session.getconfirmdelete().click()
})

And('x.4 Login into Mobiquity Portal as Subscriber1', function () {
  cy.launchURL(Cypress.env('Adminurl'))
  cy.visit(Cypress.env("Adminurl") + "/dfscontainer/#/subscriber/")
  //  cy.intercept("/mobiquitypay/ums/v3/user/auth/web/login").as('getPwd')
  cy.readFile('cypress/fixtures/userData/subscriberReg.json').then((data) => {
    var SubLogin
    SubLogin = data.subscriberLoginId
    cy.login(SubLogin, this.data1.subscriber.subpwd1)
cy.wait(2000)
    cy.window().then(win => {
      cy.stub(win, 'open').as('open')
    })
  })
  
})

//------------Niroop

And('Click On My Sessions and Delete',function(){
 welcomePage.getmysessionoption().click();
  cy.wait(2000);
  
  session.getdevices().eq(0).click();
  cy.wait(2000);
  session.getdeletedevices().click();
  cy.wait(2000);
  session.getconfirmdelete().click();
  session.getStatus().should("contain", "CURRENT");
  
})
// And('Click On All Session and Enter Number to search', function () {
//   welcomePage.getAllSessionsOption().click()
//   cy.fixture(SubMob).then((user) => {
//     var SubMob1 = user.subscriberMobile
//     cy.log(SubMob1)
//     session.getSearchUser().type(SubMob1)
//   })
//   session.getSearchBtn().click()
//   
// })
And('Click On My Session and View any record details',function(){
  welcomePage.getmysessionoption().click()
  cy.wait(2000)
  session.getViewDetails().click({ multiple: true })
  cy.wait(2000)
  //session.getAssertView().should('contain','Session Details')
})
Then('Assert all the fields',function(){
  session.getAssertSessionInformation().should('contain','Device')
                                       .should('contain','Login Identifier')
                                       .should('contain','Login Time')
                                       .should('contain','Status')
                                       .should('contain','Device Id')
                                       .should('contain','Location')
                                       .should('contain','IP Address')
                                       .should('contain','Browser')
                                      // .should('contain','Logout Time') removed from UI
                                       //.should('contain','Duration') removed from UI
})                                  
