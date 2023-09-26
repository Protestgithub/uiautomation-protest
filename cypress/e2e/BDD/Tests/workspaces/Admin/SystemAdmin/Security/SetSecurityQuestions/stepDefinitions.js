/// <reference types="Cypress" />
/// <reference types = "Cypress-iframe"/>

//----------------Imports---------------------------------------------------------------------
import { And, Then, When } from "@badeball/cypress-cucumber-preprocessor";
import 'cypress-iframe';
import loginPage from '../../../../../../../../support/pageObjects/loginPage';


import { recurse } from 'cypress-recurse';
import securityQuestion from '../../../../../../../../support/pageObjects/SecurityQuestion/securityQuestion';
import "../../../../../../../../support/Utils/generic";
import "../../../../../../../../support/Utils/SecurityQuestionCommands";
import homePage from "../../../../../../../../support/pageObjects/homePage";

//----------------Object Declaration----------------------------------------------------------

const pageLogin = new loginPage()
const securityPage = new securityQuestion()
const welcomePage = new homePage()
var q1, q3
const SecurityQuetion = 'cypress/fixtures/securitys.json'




//-----------------------------------------------------------------------------------------

And('User Select the French language and enter the questions in French language', function () {
  pageLogin.getiFrame()
  securityPage.getAddLanguage().click({ force: true })
  securityPage.getLanguageDropDowns().select(this.data12.languages.language2, { force: true })
  cy.RandomQuestion3()
})

//-----------------------------Set Security Question----------------------------------
// When ('Navigate to Profile icon and Click on Profile icon', function (){
//   welcomePage.getProfileIcon().click()
// })
And ('Click on Setting and click on ViewModify', function () {
  cy.intercept('/mobiquitypay/ums/v2/user-security-question/fetch').as('getsettings')
  welcomePage.getSettings().click({ force: true })
  cy.wait('@getsettings')
  welcomePage.getviewmodify().click({ force: true })
})

Then ('Click on Edit and Select the questions and enter the answer', function(){
  if(Cypress.env('version').includes('x.7'))    
{
  welcomePage.getedit().click({ force :true })
}
  welcomePage.getQuestion1().select(3)
  welcomePage.getType1().clear().type(this.data6.answer1,{ force :true })
  welcomePage.getQuestion2().select(4)
  welcomePage.getType2().clear().type(this.data6.answer2,{ force :true })
})

And ('Click on save Security button', function(){
  welcomePage.getsavebttn().click( { forvce : true })
})

Then ('verify the Success Message', function(){
  cy.waitUntil(() => {
    return cy.iframe().find('div>p.text-content').should('be.visible')
  })
welcomePage.getDonebtn().click({ force : true })
})

//-----------------------------Modify--------------------------------

And('Click on Modify and Save',function(){
  securityPage.getModifyButton().click({ force: true })
  securityPage.getAddLanguage().click()
  
  securityPage.getLanguage().select("Arabic",{ force: true })
  // cy.ModifyQuestions()
  securityPage.getModifySave().click({force: true})
})