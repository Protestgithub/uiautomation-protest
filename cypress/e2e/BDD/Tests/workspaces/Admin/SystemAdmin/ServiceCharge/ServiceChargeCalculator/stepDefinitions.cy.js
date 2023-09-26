/// <reference types="Cypress" />
/// <reference types = "Cypress-iframe"/>

//----------------Imports---------------------------------------------------------------------
import { And, Then, When } from "@badeball/cypress-cucumber-preprocessor";
import 'cypress-iframe';
import homePage from '../../../../../../../../support/pageObjects/homePage';
import PricingEnginePage from '../../../../../../../../support/pageObjects/PricingEngine/PricingEnginePage';
import "../../../../../../../../support/Utils/generic";

//----------------Object Declaration----------------------------------------------------------

const welcomePage = new homePage()
const pricingEnginePage = new PricingEnginePage()
var fileis = 'cypress/fixtures/userData/Aservice.json'
var filename = 'cypress/fixtures/userData/Bank&Walletdata.json'

//----------------BDD Hooks-----------------------------------------------------------------

var name
function getRandomNumber() {
    name = "12";
    var possible = "0123456789";
    for (var i = 0; i < 1; i++)
      name += possible.charAt(Math.floor(Math.random() * possible.length));
    return name;
  }

When('Click on Service Charge >> Service Service Charge Calculator', function () {
    welcomePage.getServiceCharge().click({ force: true })
    cy.intercept('/CoreWeb/servprofile/profile_loadCalculator.action?*').as('getServiceChargeCalculator')
    welcomePage.getAddServiceChargeCalculator().click({force:true})
    cy.wait('@getServiceChargeCalculator')
   
     
    })
  
    And('enter the required details', function () {
      //
    //   cy.waitUntil(() => {     
    //     return cy.iframe().find('#profile_confirmCalculator1_reqValue')
    //   })
      welcomePage.getSenderMFSProvider().select("MFS1")
      welcomePage.getSenderPaymentInstrument().select("Wallet")
      welcomePage.getSenderWalletType().select("Normal")
      welcomePage.getPayerProfile().select("Head Merchant")
      welcomePage.getReceiverMFSProvider().select("MFS1")
      welcomePage.getReceiverPaymentInstrument().select("Wallet")
      welcomePage.getReceiverWalletType().select("Normal")
      if(Cypress.env('subscriberNamedAs').includes('Subscriber')){
        welcomePage.getPayeeProfile().select("Gold Subscriber")
      }
      else{
        welcomePage.getPayeeProfile().select("Gold Customer")
      }
      
      welcomePage.getServiceType().select("Account Closure By Agent")
      welcomePage.getTransactionAmount().type(getRandomNumber())
      cy.intercept('/CoreWeb/servprofile/profile_confirmCalculator1.action').as('getSubmit')
      welcomePage.getSubmit().click({force:true})
      cy.wait('@getSubmit')
    })
    Then('Verify service charge calculator',function()
    {
      //
      cy.waitUntil(() => {     
        return cy.iframe().find('tbody > tr>td.tabhead').contains("totalAmount")
      })
  
    })
 
    
