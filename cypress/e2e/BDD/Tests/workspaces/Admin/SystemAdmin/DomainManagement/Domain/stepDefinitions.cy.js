/// <reference types="Cypress" />
/// <reference types = "Cypress-iframe"/>

//----------------Imports---------------------------------------------------------------------
import { And, Then, When } from "@badeball/cypress-cucumber-preprocessor";
import 'cypress-iframe';
import homePage from '../../../../../../../../support/pageObjects/homePage';

import DomainFieldspage from '../../../../../../../../support/pageObjects/DomainManagement/DomainFieldspage';
import "../../../../../../../../support/Utils/generic";

const domainPage = new DomainFieldspage()
const welcomePage = new homePage()
var DataFile = "cypress/fixtures/userData/Domain&CAT.json"


//-------------------------------------------------------------------------------------------------------

// When('User Click on Domain Management >> Add Domain', function () {
//   welcomePage.getDomainManagementOption().click()
// })
// And('Enter Domain Name and Domain code.', function () {
//   
//   cy.readFile(DataFile).then((data) => {
//     var CatNam = data.Domainname
//     domainPage.getDomainName().type(CatNam, { force: true })
//   })
//   cy.readFile(DataFile).then((data) => {
//     var Catcode = data.DomainCode
//     domainPage.getDomainCode().type(Catcode, { force: true })
//   })
//   cy.readFile(DataFile).then((data) => {
//     var Category = data.CategoryNum
//     domainPage.getDomainCategories().type(Category, { force: true })
//   })
// })
//-------------------------------------Error-------------------------------------------

Then('Click on submit buttonn', function () {
  cy.intercept(this.data20.DomainSubmitbtn).as('getdomainsubmit')
  domainPage.getDomainSubmitbtn().click({ force: true })
  cy.wait('@getdomainsubmit', { timeout: 30000 })
  domainPage.getErrormsg().should('contain', "exists")
})
