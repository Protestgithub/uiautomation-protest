/// <reference types="Cypress" />
/// <reference types = "Cypress-iframe"/>

//----------------Imports---------------------------------------------------------------------
import 'cypress-iframe'
import { Given, When, Then, And, Before } from "@badeball/cypress-cucumber-preprocessor";
import homePage from '../../../../../../../../support/pageObjects/homePage';
import "../../../../../../../../support/Utils/generic";
import 'cypress-file-upload'
import DomainFieldspage from '../../../../../../../../support/pageObjects/DomainManagement/DomainFieldspage';
import "../../../../../../../../support/Utils/authourizationcommands"
import AddCategory from '../../../../../../../../support/pageObjects/CategoryManagement/AddCategory';
import AddGrades from '../../../../../../../../support/pageObjects/GradeManagement/AddGrades';


//----------------Object Declaration----------------------------------------------------------
const AddCategoryPage = new AddCategory()
const AddGradePage = new AddGrades()
const welcomePage = new homePage()
const domainPage = new DomainFieldspage()
const uuid = () => Cypress._.random(1e4)
const uid = () => Cypress._.random(1e5)
const id = () => Cypress._.random(1e2)
const domain = ["AtmMachine", "Corporate", "Head Merchant", "Merchant", "Telco Operator", "Payment Gateway", "Agent", "Super Agent", "Biller", "Distributer"];
const domainName = getRandomDifferent(domain)


var DomainName = uuid()
var code = uid()
var Category = id()
var Gradedata = "cypress/fixtures/userData/Gradedata.json"
var DataFile = "cypress/fixtures/userData/Domain&CAT.json"
let GradeCode
let j = 0
var RegulatoryFile = 'cypress/fixtures/userData/Regulatory&MarketingProfile.json'
const selectedomain = "AtmMachine7565"
//---------------------------------------------------------------------------------------

function getRandomDifferent(arr, last = undefined) {
  if (arr.length === 0) {
    return null;
  } else if (arr.length === 1) {
    return arr[0];
  } else {
    let num = 0;
    do {
      num = Math.floor(Math.random() * arr.length);
    } while (arr[num] === last);
    return arr[num];
  }
}



And('click on add and select the domain and category', () => {

  AddGradePage.getAddbttn().click()
  cy.wait(3000)
  AddGradePage.getDomainName().select(1)
  AddGradePage.getCatergoryName().select(1)
  AddGradePage.getgradeCode().type(99107)
  AddGradePage.getGradeName().type('egfk')
})

Then('click on add more grades', () => {

  AddGradePage.getaddmoregrade().click()
  cy.wait(3000)
  AddGradePage.getERRORmsg().contains('Maximum grades per category(5) limit reached.')
})

And('click on add', () => {

  AddGradePage.getAddbttn().click()
  cy.wait(3000)
  AddGradePage.getaddmoregrade().click()
})

Then('assert error msg', () => {
  cy.wait(3000)
  AddGradePage.getERRORmsg().contains('Domain is required')
})


And('Select the domai and category', () => {

  AddGradePage.getAddbttn().click()
  cy.wait(3000)
  AddGradePage.getDomainName().select(1)
  AddGradePage.getCatergoryName().select(1)
  cy.wait(3000)
  AddGradePage.getgradeCode().type('@#')
  AddGradePage.getGradeName().type('bhf@')

})

Then('click on grade save button', () => {
  cy.wait(3000)
  AddGradePage.getSavebttn().click()
  cy.wait(3000)
  AddGradePage.getERRORmsg().contains('Grade code should accept only alplhanumeric values')
})
