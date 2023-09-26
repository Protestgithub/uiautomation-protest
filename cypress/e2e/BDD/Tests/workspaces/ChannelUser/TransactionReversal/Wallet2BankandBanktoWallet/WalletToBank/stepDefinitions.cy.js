/// <reference types="Cypress" />
/// <reference types = "Cypress-iframe"/>

//----------------Imports---------------------------------------------------------------------
import 'cypress-iframe'
import { Given, When, Then, And, Before } from "@badeball/cypress-cucumber-preprocessor";
import "../../../../../../../../support/Utils/generic";
import loginPage from '../../../../../../../../support/pageObjects/loginPage';
import manageUsers from '../../../../../../../../support/pageObjects/UserManagement/manageUsers';
import homePage from '../../../../../../../../support/pageObjects/homePage';
import "../../../../../../../../support/Utils/subscriberCommands";
import "../../../../../../../../support/Utils/AdministratorCommands";
import "../../../../../../../../support/Utils/BusinessUserCommands";
import W2BandB2W from '../../../../../../../../support/pageObjects/W2BandB2W/W2BandB2W';
import PricingEnginePage from '../../../../../../../../support/pageObjects/PricingEngine/PricingEnginePage';

//----------------Object Declaration-----------------------------------------------------------------
const pageLogin = new loginPage()
const manageUsersPage = new manageUsers()
const welcomePage = new homePage()
const W2B = new W2BandB2W()
const pricingEnginePage = new PricingEnginePage()

const uuid = () => Cypress._.random(1e1)
Amount = uuid()
let Amount
function getRandomNumber() {
  name = "";
  var possible = "56789";
  for (var i = 0; i < 1; i++)
    name += possible.charAt(Math.floor(Math.random() * possible.length));
  return name;
}
//-----------------------------------
When('Click on Transfer to Bank',function(){
    cy.wait(5000)
  W2B.getTransferToBank().should('be.visible').click({force:true})
})
And('Enter Amount and click on Proceed',function(){
  cy.wait(3000)
  W2B.getTransferToBankAmount().type(getRandomNumber())
  W2B.getNormal().click()
  W2B.getTransferTo().click()
  W2B.getTrasferProceed().click()
})
Then('Enter PIN and click on Verify',function(){
  W2B.getTrasactionPin().type('1357')
  cy.intercept('/consumerportalui/mobiquitypay/v1/order/wallet_to_bank').as('getW2B')
  cy.intercept('/consumerportalui/mobiquitypay/serviceRequest/resume/any').as('getResume')
  W2B.getVerify().click()
  cy.getW2BApproval()
})
And('Get W2B TransactionId1',function(){
  W2B.getTransactionId().then((data)=>{
    cy.readFile('cypress/fixtures/userData/W2BandB2W.json').then((user)=>{
    let Id = data.text()
    user.W2BId1 = Id
    cy.writeFile('cypress/fixtures/userData/W2BandB2W.json',user)
    })
  })
  W2B.getSuccessMessage().contains('Payment successful')
})
And('Get W2B TransactionId2',function(){
  W2B.getTransactionId().then((data)=>{
    cy.readFile('cypress/fixtures/userData/W2BandB2W.json').then((user)=>{
    let Id = data.text()
    user.W2BId2 = Id
    cy.writeFile('cypress/fixtures/userData/W2BandB2W.json',user)
    })
  })
  W2B.getSuccessMessage().contains('Payment successful')
})
And('Get W2B TransactionId3',function(){
  W2B.getTransactionId().then((data)=>{
    cy.readFile('cypress/fixtures/userData/W2BandB2W.json').then((user)=>{
    let Id = data.text()
    user.W2BId3 = Id
    cy.writeFile('cypress/fixtures/userData/W2BandB2W.json',user)
    })
  })
  W2B.getSuccessMessage().contains('Payment successful')
})
And('Get W2B TransactionId4',function(){
  W2B.getTransactionId().then((data)=>{
    cy.readFile('cypress/fixtures/userData/W2BandB2W.json').then((user)=>{
    let Id = data.text()
    user.W2BId4 = Id
    cy.writeFile('cypress/fixtures/userData/W2BandB2W.json',user)
    })
  })
  W2B.getSuccessMessage().contains('Payment successful')
})

//----------------------------------------------------------------------------------
And('Click on SVA to Bank Transfer',function(){
  cy.intercept('/shulka/referenceData*').as('PricingEngine')
  pricingEnginePage.getW2B().click()
  cy.wait('@PricingEngine', {timeout:40000})
  cy.wait(2000)
})
