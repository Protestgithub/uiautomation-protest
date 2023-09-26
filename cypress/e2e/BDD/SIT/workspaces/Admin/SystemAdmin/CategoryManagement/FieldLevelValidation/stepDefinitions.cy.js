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



//-------------------//----------------------------//



And('Navigate to category Management and click on add category',()=>{
    welcomePage.getCategoryManagementOption().click()
    welcomePage.getAddCategory().click()
    })
    
  
     Then('Enter all the mandatory details',()=>{
  
    cy.wait(5000)
    cy.readFile(DataFile1).then((data) => {
     let Categoryname = data.CategoryName4
      AddCategoryPage.getCategoryName().type(Categoryname, { force: true })
    })
    cy.readFile(DataFile1).then((data) => {
      let Catcode = data.CategoryCode4
      AddCategoryPage.getCategoryCode().type(Catcode, { force: true })
    })
  })
  
    Then('Select Domain and Parent Category',()=>{
  
    AddCategoryPage.getDomainName().select(12)
    AddCategoryPage.getParentCategory().select(1)
  })
   
   And('click on Submit and confirm',()=>{
    cy.wait(3000)
    AddCategoryPage.getsubmitbttn().click()
    cy.wait(1000)
    AddCategoryPage.getConfirmbttn().click()
  })

  Then('Enter category name and category Code',()=>{
    cy.wait(2000)
    AddCategoryPage.getCategoryName().type('dfgh2')
    AddCategoryPage.getCategoryCode().type(456)
    AddCategoryPage.getDomainName().select(9)
    AddCategoryPage.getParentCategory().select(1)
     })
    
    And('Assert the Action message',()=>{
    AddCategoryPage.getActionmessg().contains('Category Add Initiated Successfully')
  })

  Then('Select Domain and Parent Category1',()=>{

    AddCategoryPage.getDomainName().select(16)
    AddCategoryPage.getParentCategory().select(1)
  })
  
  And('click on Submit',()=>{
    AddCategoryPage.getsubmitbttn().click()
    cy.wait(3000)
    AddCategoryPage.getErrormessg().contains('Category code is already existed')
  })
  