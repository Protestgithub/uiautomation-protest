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


var name
function getRandomName() {
  name = "";
  var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
  for (var i = 0; i < 5; i++)
    name += possible.charAt(Math.floor(Math.random() * possible.length));
  return name;
}




Then('clone the edited Service Policy Rule', function () {
    //cy.intercept('/shulka/referenceData*').as('PricingEngine')
    pricingEnginePage.getCloneButton().eq(1).click({ force: true }) //Changed the Index reference 
    //cy.wait('@PricingEngine')
    cy.wait(3000)
    pricingEnginePage.getCloneService().contains('Cash In').click({ force: true })
    cy.wait(3000)
   // cy.intercept('/shulka/referenceData*').as('PricingEngine')
    pricingEnginePage.getCloneButton1().eq(1).click({ force: true })
    pricingEnginePage.getCloneButton1().eq(1).click({ force: true })
    //cy.wait('@PricingEngine')
    cy.wait(3000)
   // pricingEnginePage.getPolicyName().contains('Cloned')
  })

  And('Click On Delete icon', function () {
    cy.wait(4000)
    pricingEnginePage.getDeleteIcon().click({force:true})
    

  })
  Then ('Assert the delete Message', function () {
    //pricingEnginePage.getDeleteMsg().contains(this.data05.deleteassetmsg)

  })
  And('Click on Close button', function () {
  pricingEnginePage.getDeleteCloseBtn().click({force:true})  
  
  })

  Then ('Assert delete message is not visible', function () {
    //pricingEnginePage.getDeleteMsg().contains(this.data05.deleteassetmsg).should('not.exist')
  })

  And('Click on Cancel Button', function () {
    pricingEnginePage.getCancelBtn().click({force:true})  
    
    })
  And('Click on Okay Button', function () {
      pricingEnginePage.getOkayBtn().click({force:true})  
      
      })

  Then ('Verify Clone Rule is not deleted', function () {
        //pricingEnginePage.getPolicyName().contains('Cloned')
      })
  Then ('Verify Clone Rule is deleted', function () {
    pricingEnginePage.getPolicyName().contains('Cloned').should('not.exist')
      })
  
      

      Then ('Verify different functionalities charge rule,discount rule,taxation rule exits', function () {
        cy.wait(5000)
        pricingEnginePage.getmenutab().eq(0).contains('Charge Rule')
        pricingEnginePage.getmenutab().eq(1).contains('Discount Rule')
        pricingEnginePage.getmenutab().eq(2).contains('Taxation Rule')


          })

          Then ('Verify different functionalities Commission rule,taxation rule exits', function () {
            cy.wait(5000)
            cy.intercept('/shulka/referenceData*').as('PricingEngine')
            pricingEnginePage.getCashIN().click()
            cy.wait('@PricingEngine', {timeout:40000})
            cy.wait(2000)
            pricingEnginePage.getmenutab().eq(3).contains('Commission Rule')
            pricingEnginePage.getmenutab().eq(4).contains('Taxation Rule')
            pricingEnginePage.getSearchTab().should('be.visible')
    
    
              })

         