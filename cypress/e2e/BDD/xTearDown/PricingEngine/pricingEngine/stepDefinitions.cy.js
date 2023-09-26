/// <reference types="Cypress" />
/// <reference types = "Cypress-iframe"/>

//----------------Imports---------------------------------------------------------------------
import { And, Then, When } from "@badeball/cypress-cucumber-preprocessor";
import 'cypress-iframe';
import homePage from '../../../../../support/pageObjects/homePage';
import PricingEnginePage from '../../../../../support/pageObjects/PricingEngine/PricingEnginePage';
import "../../../../../support/Utils/generic";
import "../../../../../support/Utils/PricingEngine";
//----------------Object Declaration----------------------------------------------------------

const welcomePage = new homePage()
const pricingEnginePage = new PricingEnginePage()
var fileis = 'cypress/fixtures/userData/Aservice.json'
var filename = 'cypress/fixtures/userData/Bank&Walletdata.json'

//----------------BDD Hooks-----------------------------------------------------------------

var name
function getRandomName() {
  name = "";
  var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
  for (var i = 0; i < 5; i++)
    name += possible.charAt(Math.floor(Math.random() * possible.length));
  return name;
}


//--------------------------------------------------------------------------------------
And('Click on Search and Seacrh for CASH IN Rule Name',function() {
    cy.wait(5000)
pricingEnginePage.getSearchTab().click({ force: true })
  cy.readFile(fileis).then((data)=>{
    var RuleName = data.ServiceRuleName
    pricingEnginePage.getSearchTextField().type(RuleName)
    pricingEnginePage.getSearchButton2().click()
    pricingEnginePage.getSearchedRule().click({ force : true})
    cy.wait(2000)
    pricingEnginePage.getPolicyview().click({force:true})
    cy.wait(2000)
    cy.getServiceName(fileis)
})
})

// Then('Delete the Service Policy',function() {
//   cy.wait(2000)
//  //pricingEnginePage.getDeleteCashin().click({force:true})
//   pricingEnginePage.getYes().click({force:true})
//   pricingEnginePage.getDeleteoption()
//   pricingEnginePage.getSubmitBtn().click({force:true}) 
//   cy.wait(2000)
//   cy.waitUntil(() => {
//     return cy.iframe().find('[class="alert alert-success"]').contains('Service Charge Policy has been successfully submitted for approval')
//   })
// })

//-----------------------------------------------------------------------------------------
//---------Approval--------------------

And('Navigate to PricingApproval', function() {
  cy.wait(4000)
if(Cypress.env('PricingApproval').includes("Yes"))
{
  pricingEnginePage.getApproval().click({force: true})
  cy.getCashIn(fileis)
  cy.getApprvalservice(fileis)
  pricingEnginePage.getApprovalBtn().click({ force: true })
  pricingEnginePage.getApprovalSubmit().click({ force: true })
  pricingEnginePage.getApprovalSubmitBtn().click({ force: true })
  pricingEnginePage.getApprovalConfirmBtn().click({ force: true })
  cy.waitUntil(() => {
    return cy.iframe().find('.alert.alert-success').contains('Approved changes successfully')
  })
 
}
else
{
  cy.log("Ok")
}
})




//--------------------------------------------------------------------------------------
And('Click on Search and Seacrh for Commission Rule Name',function() {
  cy.wait(5000)
pricingEnginePage.getSearchTab().click({ force: true })
cy.readFile(fileis).then((data)=>{
  var RuleName = data.ServiceRuleName1
  pricingEnginePage.getSearchTextField().type(RuleName)
  pricingEnginePage.getSearchButton2().click()
  pricingEnginePage.getSearchedRule().click({ force : true})
  cy.wait(5000)
  pricingEnginePage.getPolicyview().click({force:true})
  cy.getServiceName1(fileis)
})
})


//---------------------------------------------------------------------------------------------
And('Click on Search and Seacrh for Modified Commission Rule Name',function() {
  cy.wait(5000)
pricingEnginePage.getSearchTab().click({ force: true })
cy.readFile(fileis).then((data)=>{
  var RuleName = data.CommServiceRuleName
  pricingEnginePage.getSearchTextField().type(RuleName)
  pricingEnginePage.getSearchButton2().click()
  pricingEnginePage.getSearchedRule().click({ force : true})
  cy.wait(5000)
  pricingEnginePage.getPolicyview().click({force:true})
  cy.getModifiedServiceName(fileis)
})
})
