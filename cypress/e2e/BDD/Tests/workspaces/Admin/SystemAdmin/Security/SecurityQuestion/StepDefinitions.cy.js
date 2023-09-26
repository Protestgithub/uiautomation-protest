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

//----------------Object Declaration----------------------------------------------------------

const pageLogin = new loginPage()
const securityPage = new securityQuestion()
var q1, q3
const SecurityQuetion = 'cypress/fixtures/securitys.json'


//----------------BDD Hooks-----------------------------------------------------------------


//----------------Test Scripts---------------------------------------------------------------

//-------TC112---To verify that master/network Admin can add security questions in the mobiquity System--------------




// When('Navigate to security and click on security questions', function () {
//   securityPage.getSecurityQuestionOption().scrollIntoView()
//   securityPage.getSecurityQuestionOption().click()
//   securityPage.getSecurityOption().click()
// })

And('User click on add questions and Enter question in the textbox', function () {
  pageLogin.getiFrame()
  // securityPage.getItemsPerPage().click({ force: true })
  // securityPage.getSelectPagination().click({ force: true })
  securityPage.getAddQuestion().click({ force: true })
  cy.RandomQuestions()
})

And('User click on Add', function () {
  pageLogin.getiFrame()
  securityPage.getAddButton().click({ force: true })
})

Then('User click on save', function () {
  pageLogin.getiFrame()
  securityPage.getConfirmButton().click({ force: true })
  securityPage.getMessage().contains(this.data12.addquestion)
  securityPage.getDoneButton().click({ force: true })

})


//--------TC113---To verify that master/network Admin is not able to add duplicate question-------------------------

//............Navigate to security and click on security questions...............

// When('Navigate to security and click on security questions', function () {
//   securityPage.getSecurityQuestionOption().scrollIntoView()
//   securityPage.getSecurityQuestionOption().click()
//   securityPage.getSecurityOption().click()
// })

And('User click on add questions and question is already existing', function () {
  pageLogin.getiFrame()
  securityPage.getAddQuestion().click({ force: true })
  cy.readFile(SecurityQuetion).then((data) => {
    q1 = data.SecurityQuestion1
    securityPage.getSearchBox().type(q1, { force: true })
  })


})

And('User click on Add Button', function () {
  pageLogin.getiFrame()
  securityPage.getAddButton().click({ force: true })
})

Then('User click on save Button', function () {
  pageLogin.getiFrame()
  securityPage.getConfirmButton().click({ force: true })
  securityPage.getMessage().contains(this.data12.questionpresent)
  securityPage.getDoneButton().click({ force: true })
})



//----------TC114---To verify that security question which are added by the user will be added in default system language----------------

When('Navigate to security and click on security questions', function () {
  securityPage.getSecurityQuestionOption().scrollIntoView()
  securityPage.getSecurityQuestionOption().click()
  securityPage.getSecurityOption().click()
})

And('User click on add questions button and Enter question in the textbox', function () {
  pageLogin.getiFrame()
  securityPage.getAddQuestion().click({ force: true })
  securityPage.getDefaultSystemLanguage().should('be.disabled')
  cy.RandomQuestion()
})

And('User click on Button Add', function () {
  pageLogin.getiFrame()
  securityPage.getAddButton().click({ force: true })
})

Then('User click on Button save', function () {
  pageLogin.getiFrame()
  securityPage.getConfirmButton().click({ force: true })
  securityPage.getMessage().contains(this.data12.addquestion)
  securityPage.getDoneButton().click({ force: true })
})

//------TC115----To verify that if other language is selected while adding the security question then it is mandatory to add question in other language also---------------

// When('Navigate to security and click on security questions', function () {
//   securityPage.getSecurityQuestionOption().scrollIntoView()
//   securityPage.getSecurityQuestionOption().click()
//   securityPage.getSecurityOption().click()
// })

And('User click on add questions Button', function () {
  pageLogin.getiFrame()
  securityPage.getAddQuestion().click({ force: true })
  cy.RandomQuestion2()
})

And('User click on other language and enter the questions other language in question textbox', function () {
  pageLogin.getiFrame()
  securityPage.getAddLanguage().click({ force: true })
  securityPage.getLanguageDropDowns().select(this.data12.languages.language1, { force: true })
  cy.readFile(SecurityQuetion).then((data) => {
    q3 = data.SecurityQuestion3
    securityPage.getOtherLanguageQuestion().type(q3, { force: true })
  })

})

And('Click on add Button', function () {
  pageLogin.getiFrame()
  securityPage.getAdd().click({ force: true })
})

Then('Click on Confirm Button', function () {
  pageLogin.getiFrame()
  securityPage.getConfirm().click({ force: true })
  securityPage.getOtherLanguageSuccess().contains(this.data12.addquestion)
  securityPage.getDoneOtherLanguage().click({ force: true })
})
And('User click on add questions Button1', function () {
pageLogin.getiFrame()
securityPage.getAddQuestion().click({ force: true })
cy.RandomQuestion2()
})
//--------------Security Question END-------------------------------------------------------------------------------
