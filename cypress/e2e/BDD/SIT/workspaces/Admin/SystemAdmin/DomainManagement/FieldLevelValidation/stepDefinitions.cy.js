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

//---------------------------------------------------------------------------------------

And('Enter Domain Name and Code', function () {
  welcomePage.getDomainManagementOption().should('be.visible').click()
  cy.wait(2000)
  cy.readFile(DataFile).then((data)=>{
 let  Name = data.Domainname
 domainPage.getDomainName().type(Name,{force:true})
 let  code = data.DomainCode
 domainPage.getDomainCode().type(code,{force:true})
 let Category = data.CategoryNum
 domainPage.getDomainCategories().type(Category, { force: true })
  })
   })



Then('Click on Reset button' , function () {
  cy.intercept('/CoreWeb/domainMgmt/confirmAddDomain_viewDetail.action').as('Reset')
domainPage.getDomainResetbtn().click({ force:true})
cy.wait('@Reset')
domainPage.getDomainName().should('be.visible')
}) 


Then('Assert the error message of Domain Name And Domain Code must be Unique' , function() {
  cy.intercept(this.data20.domainSubmit).as('getdomainsubmit')
  domainPage.getDomainSubmitbtn().click({ force: true })
  cy.wait('@getdomainsubmit',{timeout:30000})
  domainPage.getErrormsg().contains(this.data4.DomainExist)
  domainPage.getErrormsg().contains(this.data4.DomainCodeexist)
})







When('User Click on Domain Management and CLick on Submit', function(){

  welcomePage.getDomainManagementOption().should('be.visible').click()
  cy.wait(2000)
  //cy.intercept('/CoreWeb/domainMgmt/confirmAddDomain_viewDetail.action').as('Submit')
  domainPage.getDomainSubmitbtn().click({ force: true })
  //cy.wait('@Submit',{timeout:30000})
})


Then('Check the Error Message and Assert It', function() {
 
 cy.wait(2000)
domainPage.getErrormsg().contains(this.data4.DomainNameError)

})


Then('Assert the Fields having asterisk symbol', function() {
  
  
  domainPage.getDomainName().should('be.visible')
  domainPage. getAsterisk().eq(1).should('be.visible')

  domainPage.getDomainCode().should('be.visible')
  domainPage. getAsterisk().eq(2).should('be.visible')

  domainPage.getDomainCategories().should('be.visible')
  domainPage. getAsterisk().eq(3).should('be.visible')
})

When('User Click on Domain Management and Enter the Details',function(){

  welcomePage.getDomainManagementOption().should('be.visible').click()
})


And('Enter Domain Code and click on submit' , function() {
  cy.wait(2000)
  domainPage.getDomainCode().type(123)
  domainPage.getDomainCategories().type(55)
  
  cy.intercept('/CoreWeb/domainMgmt/confirmAddDomain_viewDetail.action').as('Submit')
  domainPage.getDomainSubmitbtn().click({ force: true })
  cy.wait('@Submit',{timeout:30000})
  
})

Then('Assert the Error Message of Domain Name', function() {
 
       domainPage.getErrormsg().contains(this.data4.DomainNameError)

})


And('Enter Domain Name and click on submit', function() {
 cy.wait(2000)
  domainPage.getDomainName().type('Testing')
  domainPage.getDomainCategories().type(55)
  cy.intercept(this.data20.domainSubmit).as('getdomainsubmit')
  domainPage.getDomainSubmitbtn().click({ force: true })
  cy.wait('@getdomainsubmit',{timeout:30000})
})


Then('Assert the Error Message of Domain Code', function() {

    domainPage.getErrormsg().contains(this.data4.DomainCodeError)  
})



