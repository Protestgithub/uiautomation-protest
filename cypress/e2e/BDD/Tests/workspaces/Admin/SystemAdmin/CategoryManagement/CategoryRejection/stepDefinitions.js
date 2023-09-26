/// <reference types="Cypress" />
/// <reference types = "Cypress-iframe"/>

//----------------Imports---------------------------------------------------------------------
import { And, Then } from "@badeball/cypress-cucumber-preprocessor";
import 'cypress-iframe';
import homePage from '../../../../../../../../support/pageObjects/homePage';

import DomainFieldspage from '../../../../../../../../support/pageObjects/DomainManagement/DomainFieldspage';
import "../../../../../../../../support/Utils/generic";
import AddCategory from "../../../../../../../../support/pageObjects/CategoryManagement/AddCategory";

const domainPage = new DomainFieldspage()
const welcomePage = new homePage()
const AddCategoryPage = new AddCategory()
var DataFile = "cypress/fixtures/usDomain&CAT.json"
var DataFile1 = "cypress/fixtures/Domain&CategoryManagement.json"




//Test------------------------------------------------------------------------------

// And('Click Category Management.', function () {
//   welcomePage.getCategoryManagementOption().click({ force: true })
// })

And('Enter Category Code and Category Name for category', function () {
  
   cy.readFile(DataFile1).then((data) => {
     var CatNam = data.CategoryName3
     AddCategoryPage.getCategoryName().type(CatNam, { force: true })
   })
   cy.readFile(DataFile1).then((data) => {
     var Catcode = data.CategoryCode3
     AddCategoryPage.getCategoryCode().type(Catcode, { force: true })
   
   })
 })
 Then('Select Domain and Parent Category for Rejection', function () {
  cy.readFile(DataFile1).then((data) => {
    var CatNam = data.Domainname3
    AddCategoryPage.getDomainName().select(CatNam, { force: true })
    
  })
  cy.readFile(DataFile1).then((data) => {
    var CatNam = data.CategoryName3
    AddCategoryPage.getParentCategory().select(CatNam, { force: true })
  
  })
})


Then('Select the Category for rejction', function () {
 
  cy.readFile(DataFile1).then((data) => {
    var CatNam = data.Domainname3
    AddCategoryPage.getDomainName().select(CatNam, { force: true })
   
  })
  cy.readFile(DataFile1).then((data) => {
    var CatNam = data.CategoryName3
    AddCategoryPage.getParentCategory().select(CatNam, { force: true })
    
  })
  cy.readFile(DataFile1).then((data) => {
    var Catcode = data.CategoryName3
    AddCategoryPage.getCategoryCode().select(Catcode, { force: true })
   
  })
})
Then('Select the category and Reject', function () {
cy.intercept('/CoreWeb/utility/addcategoryapproval_inputLoadApprovalInput.action').as('categoryApprovalPage')
AddCategoryPage.getReject().click({ force: true })
cy.wait("@categoryApprovalPage")
AddCategoryPage.getRejectionmsg().contains('category rejected successfully')
})
