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
let j=0
var RegulatoryFile = 'cypress/fixtures/userData/Regulatory&MarketingProfile.json'
const selectedomain="AtmMachine7565"
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



When('Click on User Profile Management >> Add Grade', function () {
    welcomePage.getUserprofileManagementOption().click({ force: true })
    cy.intercept('/CoreWeb/grades/grades_displayGrades.action?*').as('addGradePage')
    welcomePage.getADDGrades().click({ force: true }, {timeout : 50000})
    cy.wait('@addGradePage', {timeout: 20000})
  })
  And('Select the domain & category for which grade needs to be added.', function () {
    cy.wait(1000)
    cy.iframe().find('#grades_addGrades > table > tbody > tr > td').invoke('text').then(($text) => {
        if ($text.includes(Cypress.env('gradeName'))) 
        {
            cy.log("Grade Exists")
        }
        else{
            const uuid = () => Cypress._.random(1e4)
            GradeCode = uuid()
            cy.intercept('/CoreWeb/grades/grades_addGrades.action').as('getAddButtn')
            AddGradePage.getAddbttn().click({ force: true })
            cy.wait('@getAddButtn',{timeout:10000})
            cy.wait(2000)
            cy.GradeName()
            cy.readFile(DataFile).then((data) => {
              var CatNam = data.Domainname
              AddGradePage.getDomainName().select(CatNam, { force: true })
              cy.readFile(Gradedata).then((grade) => {
                grade.DomainName = CatNam
                cy.writeFile(Gradedata, grade)
              })
            })
            cy.readFile(DataFile).then((data) => {
              var CatNam = data.Domainname
              AddGradePage.getCatergoryName().select(CatNam, { force: true })
              cy.readFile(Gradedata).then((grade) => {
                grade.CategoryName = CatNam
                cy.writeFile(Gradedata, grade)
              })
            })
            AddGradePage.getgradeCode().type(GradeCode, { force: true })
            cy.readFile(Gradedata).then((data) => {
              data.GradeCode = GradeCode
              cy.writeFile(Gradedata, data)
            })
            cy.wait(2000)
            cy.intercept('/CoreWeb/grades/grades_addGrades.action').as('getAddButtn')
            AddGradePage.getSavebttn().click({ force: true })
            cy.wait('@getAddButtn',{timeout:10000})
             cy.wait(2000)
            AddGradePage.getConfirmbttn().click({ force: true })
            cy.wait(2000)
        }
 
  
  })
})
  