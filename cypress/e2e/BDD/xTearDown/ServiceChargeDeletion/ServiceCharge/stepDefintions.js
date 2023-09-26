/// <reference types="Cypress" />
/// <reference types = "Cypress-iframe"/>

//----------------Imports---------------------------------------------------------------------
import { And ,When,Then} from "@badeball/cypress-cucumber-preprocessor";
import 'cypress-iframe';
import homePage from '../../../../../support/pageObjects/homePage';
import PricingEnginePage from '../../../../../support/pageObjects/PricingEngine/PricingEnginePage';
import ServiceChargePage from '../../../../../support/pageObjects/ServiceCharge/ServiceChargePage';
import "../../../../../support/Utils/generic";

//----------------Object Declaration----------------------------------------------------------

const welcomePage = new homePage()
const pricingEnginePage = new PricingEnginePage()
const ServiceCharge = new ServiceChargePage()
var fileis = 'cypress/fixtures/userData/Aservice.json'
//----------------BDD Hooks-----------------------------------------------------------------


var name
function getRandomName() {
  name = "";
  var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
  for (var i = 0; i < 5; i++)
    name += possible.charAt(Math.floor(Math.random() * possible.length));
  return name;
}
//----------------------------------------POC - CODE-------------------------------------------------------
//---------------------------------------------System Admin Login----------------------------------------------------
// Given('Login into Mobiquity Portal as System admin Maker', function () {
//   cy.launchURL(Cypress.env('Adminurl'))
//   cy.SysAdminlogin()
//   cy.fixture('userData/SystemAdminLogin.json').then((data) => {
//     let Name = data.SysAdminMakerName
//     cy.checkWelcomeText(Name)
//   })
// })

// When('Click on Pricing Engine', function () {
//     welcomePage.getPricingEngineLink().click({ force: true })
// })

// And('Click on the Service Policy', function () {
//     
//     pricingEnginePage.getCashIN().click({ force: true })
//     
// })
And('Delete Cash in service policy', function () {
  
  pricingEnginePage.getDeleteCashin().click({ force: true })
  pricingEnginePage.getYes().click()
  pricingEnginePage.getSaveDraftBtn().trigger('mouseover').click({ force: true })
  
  pricingEnginePage.getSubmitPolicy().click({ force: true })
  
  pricingEnginePage.getSubmitBtn().click({ force: true })
  
  // pricingEnginePage.getServiceHeader().should('contain', this.data05.textmsg)
})



// And ('Select the Service Charge Profile and Click on Delete', function() {
//   cy.readFile('cypress/fixtures/userData/Servicecharge.json').then((data) => {
//     let profileselect = data.profileselection
//     cy.log(profileselect)
//     ServiceCharge.getSelect().select(profileselect)

//     ServiceCharge.getDeleteoption()
//   })
// })


Then ('click on Approve for Deletion' , function (){
  welcomePage.getServiceCharge().click({ force: true })
cy.intercept('/CoreWeb/servprofile/profileApp_inputViewApprovalDetails.action').as('getApprove')
welcomePage.getServiceChargeapproval().click({force:true})
cy.wait('@getApprove')
cy.readFile('cypress/fixtures/userData/Servicecharge.json').then((data) => {
  let profilename = data.profilename
  cy.getServicechargeapprovalDelete(profilename)
})
})

//----------------------------Modified Service Charge Deletion teardown


And ('Select the Modified Service Charge Profile and Delete', function(){

  cy.readFile('cypress/fixtures/userData/Servicecharge.json').then((data) => {
  let R = data.profilename
  cy.iframe().find('select option').contains(R).invoke('text').then((text)=>{
   cy.log(text)
  
 data.Modifiedprofile =text
 
  cy.writeFile('cypress/fixtures/userData/Servicecharge.json', data)
  ServiceCharge.getSelect().select(text)
  ServiceCharge.getDeleteoption()
  })
})
})



// When ('Navigate to Modify or Delete service charge', function(){
//   welcomePage.getServiceCharge().click({ force: true })

//   cy.intercept('/CoreWeb/servprofile/confirmModify_inputModifyDetails.action').as('getModify/Delete')
//   welcomePage.getServiceChargeModify().click({force:true})
//   cy.wait('@getModify/Delete')
// })


And ('Select the Service Charge Profile and Click on Delete', function() {
  cy.readFile('cypress/fixtures/userData/Servicecharge.json').then((data) => {
    let V = data.profilename
    cy.iframe().find('select option').contains(V).invoke('text').then((text)=>{
     cy.log(text)
    
   data.profileselection =text
   
    cy.writeFile('cypress/fixtures/userData/Servicecharge.json', data)

    })
  })
  cy.readFile('cypress/fixtures/userData/Servicecharge.json').then((data) => {
    let profileselect = data.profileselection
    cy.log(profileselect)
    ServiceCharge.getSelect().select(profileselect)
    ServiceCharge.getDeleteoption()
  })
})



//----------------------------------------------------------------------------------------------


And ('Select the O2C Service Charge  and Click on Delete', function() {
  cy.readFile('cypress/fixtures/userData/Servicecharge.json').then((data) => {
    let V = data.O2CProfilename
    cy.iframe().find('select option').contains(V).invoke('text').then((text)=>{
     cy.log(text)
    
   data.profileselection3 =text
   
    cy.writeFile('cypress/fixtures/userData/Servicecharge.json', data)

    })
  })
  cy.readFile('cypress/fixtures/userData/Servicecharge.json').then((data) => {
    let profileselect = data.profileselection3
    cy.log(profileselect)
    ServiceCharge.getSelect().select(profileselect)

    ServiceCharge.getDeleteoption()
  })
})


Then ('click on Approve for O2C Service Charge Deletion' , function (){
  welcomePage.getServiceCharge().click({ force: true })
cy.intercept('/CoreWeb/servprofile/profileApp_inputViewApprovalDetails.action').as('getApprove')
welcomePage.getServiceChargeapproval().click({force:true})
cy.wait('@getApprove')
  cy.getServicechargeapprovalDelete(profilename)
})