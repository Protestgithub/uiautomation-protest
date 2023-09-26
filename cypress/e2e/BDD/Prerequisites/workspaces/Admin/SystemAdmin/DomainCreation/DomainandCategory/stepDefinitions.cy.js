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
const selectedomain=Cypress.env('domainName')

var DomainName = uuid()
var code = uid()
var Category = id()
var Gradedata = "cypress/fixtures/userData/Gradedata.json"
var DataFile = "cypress/fixtures/userData/Domain&CAT.json"
let GradeCode
let j=0
var RegulatoryFile = 'cypress/fixtures/userData/Regulatory&MarketingProfile.json'
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

When('User Click on Domain Management >> Add Domain', function () {

    welcomePage.getCategoryManagementOption().click({ force: true })
   cy.intercept('/CoreWeb/utility/addnewcategory_input.action*').as('addCategory')
      welcomePage.getAddCategory().click({ force: true })
      cy.wait('@addCategory')
      cy.wait(2000)
     AddCategoryPage.getDomainName().invoke('text').then($text => {
      if ($text.includes(Cypress.env('domainName')))
    {
      cy.log("SUCCESS")
            j=1
           cy.log(j)
           cy.readFile(RegulatoryFile).then((data) => {
         data.constval = j
        cy.writeFile(RegulatoryFile, data)
    
       })
    }
    else 
    {
      cy.log("FAILED")
       j=2
       cy.log(j)
       cy.readFile(RegulatoryFile).then((data) => {
         data.constval = j
         cy.writeFile(RegulatoryFile, data)
       })
  
    }
     
  })
  
})  

And('Enter Domain Name and Domain Code.', function () {
    // cy.log(this.data555.constval)
     cy.readFile(RegulatoryFile).then((data) => {
       let k=data.constval
     
     
     if(k==2){
       
       //cy.log(this.data555.constval)
       welcomePage.getDomainManagementOption().should('be.visible').click()
       cy.wait(2000)
     let Name = Cypress.env('domainName')
     
     domainPage.getDomainName().type(Name,{force:true})
     cy.readFile(DataFile).then((data)=>{
       data.Domainname = Name
       cy.writeFile(DataFile,data)
     })
     domainPage.getDomainCode().type(code, { force: true })
     cy.readFile(DataFile).then((data) => {
       data.DomainCode = code
       cy.writeFile(DataFile, data)
     })
     domainPage.getDomainCategories().type(Category, { force: true })
     cy.readFile(DataFile).then((data) => {
       data.CategoryNum = Category
       cy.writeFile(DataFile, data)
     })
   }
     })
   })
   Then('Click on submit button for add domain', function () {
    cy.readFile(RegulatoryFile).then((data) => {
      let k=data.constval
    
    
    if(k==2){
    cy.intercept(this.data20.domainSubmit).as('getdomainsubmit')
    domainPage.getDomainSubmitbtn().click({ force: true })
    cy.wait('@getdomainsubmit',{timeout:30000})
    cy.intercept(this.data20.domainConfirm).as('getconfirm')
    cy.waitUntil(()=>{
  
      return cy.iframe().find('#confirmAddDomain_getNonFinancialSerForCat_button_submit').click({ force: true })
    })
    cy.wait('@getconfirm',{timeout:30000})
    cy.readFile(DataFile).then((data) => {
      let domain
      domain = data.Domainname
      cy.waitUntil(()=>{
        return cy.iframe().find('.actionMessage').should('be.visible').contains(domain + this.data4.Successmsg)
      })
    })
    }
  })
   })  

   And('Click Category Management.', function () {
    welcomePage.getCategoryManagementOption().click({ force: true })
  })
  Then('Select Add Category.', function () {
  
    cy.intercept('/CoreWeb/utility/viewcategory_view.action*').as('viewcategory')
    welcomePage.getViewCategory().click({force:true})
    cy.wait('@viewcategory')
    cy.readFile(RegulatoryFile).then((data) => {
      let k=data.constval
    
    
    if(k==1){
    
    AddCategoryPage.getCatDomainName().select(selectedomain)
    
    
    AddCategoryPage.getViewButton().click({force:true})
    
   AddCategoryPage.getTableValue().find('td').its('length').then((len) =>{
      let rows = len
   if(rows>3)
   {
    cy.log('CONDITION SATISFIED')
    j=1
    cy.log(j)
    cy.readFile(RegulatoryFile).then((data) => {
      data.constval = j
      cy.writeFile(RegulatoryFile, data)
    })
   }
   else{
    cy.log("Creating New")
   }
  })
    }
  })
  })
  And('Enter Category Code and Category Name.', function () {
    // 
    cy.readFile(RegulatoryFile).then((data) => {
     let k=data.constval
   
   
   if(k==2){
     welcomePage.getAddCategory().click({ force: true })
     cy.wait(2000)
     cy.readFile(DataFile).then((data) => {
       var CatNam = data.Domainname
       AddCategoryPage.getCategoryName().type(CatNam, { force: true })
       data.CategoryName = CatNam
       cy.writeFile(DataFile, data)
     })
     cy.readFile(DataFile).then((data) => {
       var Catcode = data.DomainCode
       AddCategoryPage.getCategoryCode().type(Catcode, { force: true })
       data.CategoryCode = Catcode
       cy.writeFile(DataFile, data)
     })
   }
    })
   })
   Then('Select Domain and Parent Category.', function () {
     cy.readFile(RegulatoryFile).then((data) => {
       let k=data.constval
     
     
     if(k==2){
     cy.readFile(DataFile).then((data) => {
       var CatNam = data.Domainname
       AddCategoryPage.getDomainName().select(CatNam, { force: true })
       data.CategoryDomainName = CatNam
       cy.writeFile(DataFile, data)
     })
     cy.readFile(DataFile).then((data) => {
       var CatNam = data.Domainname
       AddCategoryPage.getParentCategory().select(CatNam, { force: true })
       data.ParentCategoryName = CatNam
       cy.writeFile(DataFile, data)
     })
   }
     })
   })
   And('Click on Submit & confirm button.', function () {
     cy.readFile(RegulatoryFile).then((data) => {
       let k=data.constval
     
     
     if(k==2){
     AddCategoryPage.getCategorySubmit().click({ force: true })
     cy.wait(2000)
     cy.intercept(this.data20.categorySubmit).as('getConfirm')
     AddCategoryPage.getConfirmbttn().click({ force: true })
     cy.wait('@getConfirm',{timeout:30000})
     
     domainPage.getSuccessMsg().contains(this.data4.Successmsg1)
     }
   })
   })
   //--------------------------------------Approval-----------------------------------------
   
   And('Click Add category approval.', function () {
     cy.intercept('/CoreWeb/utility/addcategoryapproval**').as('getCategoryApproval')
     cy.readFile(RegulatoryFile).then((data) => {
       let k=data.constval
     
     
     if(k==2){
     welcomePage.getCAtegoryApprovalOption().click({ force: true })
     welcomePage.getCAtegoryApprovalOption().should('be.visible').click({ force: true })
    cy.wait('@getCategoryApproval', {timeout:10000})
     }
   })
   })
   Then('Select Category approval.', function () {
     cy.wait(2000)
     cy.readFile(RegulatoryFile).then((data) => {
       let k=data.constval
     
     
     if(k==2){
     cy.readFile(DataFile).then((data) => {
       var CatNam = data.Domainname
       AddCategoryPage.getDomainName().select(Cypress.env('domainName'), { force: true })
       data.CategoryDomainName = CatNam
       cy.writeFile(DataFile, data)
     })
     cy.readFile(DataFile).then((data) => {
       var CatNam = data.Domainname
       AddCategoryPage.getParentCategory().select(Cypress.env('domainName'), { force: true })
       data.ParentCategoryName = CatNam
       cy.writeFile(DataFile, data)
     })
     cy.readFile(DataFile).then((data) => {
       var Catcode = data.CategoryName
       AddCategoryPage.getCategoryCode().select(Cypress.env('domainName'), { force: true })
       data.CategoryCode = Catcode
       cy.writeFile(DataFile, data)
     })
   }
     })
   })
   Then('Select the category that needs to be approved', function () {
      cy.readFile(RegulatoryFile).then((data) => {
       let k=data.constval
     
     
     if(k==2){
     cy.intercept('/CoreWeb/utility/addcategoryapproval_inputLoadApprovalInput.action').as('categoryApprovalPage')
     AddCategoryPage.getApprovalCategory().click({ force: true })
     cy.wait("@categoryApprovalPage")
     
     AddCategoryPage.getAllCheckBox1()
     cy.wait(2000)
     AddCategoryPage.getAllCheckBox2()
     cy.wait(2000)
     AddCategoryPage.getAllCheckBox3()
     cy.wait(2000)
     AddCategoryPage.getFinalSubmit()
     }
   })
   })
   
   Then('Select Add Category1.', function () {
      cy.intercept('/CoreWeb/utility/addnewcategory*').as('getAddCat')
    welcomePage.getAddCategory().click({ force: true })
    cy.wait('@getAddCat', {timeout:10000})
    
    
  })

  And('Click Add category approval1.', function () {
    cy.intercept('/CoreWeb/utility/addcategoryapproval**').as('getCategoryApproval')
   
    welcomePage.getCAtegoryApprovalOption().click({ force: true })
    welcomePage.getCAtegoryApprovalOption().should('be.visible').click({ force: true })
    cy.wait('@getCategoryApproval')
    
  })