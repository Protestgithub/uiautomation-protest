/// <reference types="Cypress" />
/// <reference types = "Cypress-iframe"/>

//----------------Imports---------------------------------------------------------------------
import 'cypress-iframe'
import { Given, When, Then, And,Before} from "@badeball/cypress-cucumber-preprocessor";
import homePage from '../../../../../../../support/pageObjects/homePage';
import securityQuestion from '../../../../../../../support/pageObjects/SecurityQuestion/securityQuestion';
import loginPage from '../../../../../../../support/pageObjects/loginPage';
import "../../../../../../../support/Utils/generic";
import 'cypress-file-upload'
import DomainFieldspage from '../../../../../../../support/pageObjects/DomainManagement/DomainFieldspage';
import "../../../../../../../support/Utils/authourizationcommands";
import AddCategory from '../../../../../../../support/pageObjects/CategoryManagement/AddCategory';
import AddGrades from '../../../../../../../support/pageObjects/GradeManagement/AddGrades';

//----------------Object Declaration----------------------------------------------------------
const AddCategoryPage = new AddCategory()
const pageLogin = new loginPage()
const securityQuestionPage = new securityQuestion()
const AddGradePage=new AddGrades()
var Gradedata = "cypress/fixtures/userData/Gradedata.json"
var DataFile = "cypress/fixtures/userData/Domain&CAT.json"
let GradeCode
const welcomePage = new homePage()
const domainPage = new DomainFieldspage()
const uuid = () => Cypress._.random(1e4)
const uid = () => Cypress._.random(1e5)
const id = () => Cypress._.random(1e2)
var DomainName = uuid()
var DomainName1 = uuid()
var code = uid()
var code1 = uid()
var Category = id()

function getRandomName1() {
  name = "12";
  var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
  for (var i = 0; i < 7; i++)
    name += possible.charAt(Math.floor(Math.random() * possible.length));
  return name;
}


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

Given('Login into Mobiquity Portal as Business admin Maker', function () {
    cy.launchURL(Cypress.env('Adminurl'))
    cy.readFile("cypress/fixtures/userData/AdministratorData.json").then((data) => {
      cy.login(data.BALoginId, this.data1.DefaultPassword)
      cy.login1(this.data1.BAPassword)
      cy.Passwordchange(this.data1.UserCreationSuccessMessage)
      pageLogin.getloginbtn1().eq(0).click()
      cy.wait(2000)
      cy.login(data.BALoginId, this.data1.BAPassword)
  
      //------------------SecurityQuestion&Answer------------------------
      securityQuestionPage.getQuestion().select(1)
      .invoke('val').then((val) => {
        cy.log(val)
      })
      let a1 = getRandomName1()
      securityQuestionPage.getAnswer().clear({ force: true }).type(a1, { force: true })
      .invoke('val').then((val) => {
        cy.log(val)
      })
      securityQuestionPage.getQuestion1().select(2)
      .invoke('val').then((val) => {
        cy.log(val)
      })
      let a2 = getRandomName1()
      securityQuestionPage.getAnswer1().clear({ force: true }).type(a2, { force: true })
      .invoke('val').then((val) => {
        cy.log(val)
      })
      securityQuestionPage.getSave().click({ force: true })
      securityQuestionPage.getDoneButton1().click({ force: true })
      data.ChangePassword = this.data1.BAPassword
      cy.writeFile("cypress/fixtures/userData/AdministratorData.json", data)
     })
  })

  And('Enter Domain Name and Domain Code for BA', function () {
    cy.wait(2000)
    let Name = domainName1 + DomainName1
    domainPage.getDomainName().type(Name, { force: true })
    cy.readFile(DataFile).then((data)=>{
      data.BADomainname = domainName1 + DomainName1
      cy.writeFile(DataFile,data)
    })
    domainPage.getDomainCode().type(code1, { force: true })
    cy.readFile(DataFile).then((data) => {
      data.BADomainCode = code1
      cy.writeFile(DataFile, data)
    })
    domainPage.getDomainCategories().type(Category, { force: true })
    cy.readFile(DataFile).then((data) => {
      data.BACategoryNum = Category
      cy.writeFile(DataFile, data)
    })
  })
  
  
  Then('Click on submit button for BA', function () {
    domainPage.getDomainSubmitbtn().click({ force: true })
     cy.wait(2000)
    domainPage.getSUbMIT2().click({ force: true })
     cy.wait(2000)
    cy.readFile(DataFile).then((data) => {
      let domain
      domain =data.BADomainname
      domainPage.getSuccessMsg().contains(domain+this.data4.Successmsg)
    })
  })
  
  
  
  
  //////////////////////////////////////////////////////////////////////////////////////////////
  
  When('Click Category Management in BA', function () {
    welcomePage.getCategoryManagement().click({ force: true })
  })
  
  
  And('Enter Category Code and Category Name for BA', function () {
     cy.wait(2000)
    cy.readFile(DataFile).then((data) => {
      var CatNam = "Test"
      AddCategoryPage.getCategoryName().type(CatNam, { force: true })
      data.BACategoryName = CatNam
      cy.writeFile(DataFile, data)
    })
    cy.readFile(DataFile).then((data) => {
      var Catcode = data.DomainCode
      AddCategoryPage.getCategoryCode().type(Catcode, { force: true })
      data.BACategoryCode = Catcode
      cy.writeFile(DataFile, data)
    })
  })
  And('Select Domain and Parent Category for BA', function () {
     cy.wait(2000)
    cy.readFile(DataFile).then((data) => {
      var CatNam = data.Domainname
      AddCategoryPage.getDomainName().select(CatNam, { force: true })
      data.BACategoryDomainName = CatNam
      cy.writeFile(DataFile, data)
    })
    cy.readFile(DataFile).then((data) => {
      var CatNam = data.Domainname
      AddCategoryPage.getParentCategory().select(CatNam, { force: true })
      data.BAParentCategoryName = CatNam
      cy.writeFile(DataFile, data)
    })
  })
  
  And('Select Category approval for BA', function () {
     cy.wait(2000)
    cy.readFile(DataFile).then((data) => {
      var CatNam = Cypress.env('domainName')
      AddCategoryPage.getDomainName().select(CatNam, { force: true })
      data.BACategoryDomainName = CatNam
      cy.writeFile(DataFile, data)
    })
    cy.readFile(DataFile).then((data) => {
      var CatNam = Cypress.env('domainName')
      AddCategoryPage.getParentCategory().select(CatNam, { force: true })
      data.BAParentCategoryName = CatNam
      cy.writeFile(DataFile, data)
    })
    cy.readFile(DataFile).then((data) => {
      var Catcode = data.BACategoryName
      AddCategoryPage.getCategoryCode().select(1, { force: true })

    })
    //  cy.iframe().find("#newCategoryCode").type(this.data4.CategoryData.categoryname,{force:true})
  
  })
  
  