// <reference types="Cypress" />
/// <reference types = "Cypress-iframe"/>

//----------------Imports---------------------------------------------------------------------
import { And, Then, When } from "@badeball/cypress-cucumber-preprocessor";
import 'cypress-iframe';
import homePage from '../../../../../../../../support/pageObjects/homePage';
import Approval from '../../../../../../../../support/pageObjects/TransferRules/Approval';
import O2C from '../../../../../../../../support/pageObjects/TransferRules/O2C';
import TransferRulePage from '../../../../../../../../support/pageObjects/TransferRules/TransferRulePage';
import "../../../../../../../../support/Utils/generic";


//----------------Object Declaration----------------------------------------------------------

const welcomePage = new homePage()
const transferrulepage = new TransferRulePage()
const transferruleapprovalpage = new Approval()
const transferrulepageO2C = new O2C()
var DataFile = "cypress/fixtures/userData/Domain&CAT.json"
var name

//-------------------------------------------------------------
function getRandomName() {
  name = "";
  var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
  for (var i = 0; i < 5; i++)
    name += possible.charAt(Math.floor(Math.random() * possible.length));
  return name;
}



Then('Enter alphabetic amount in First Approval Limit input field.',()=>{

    transferrulepageO2C.getFirstApprovalLimit().type('aa')
  })
  
  And('assert the error message',()=>{
  
    transferrulepageO2C.geterrormsg().contains('Approval Limit is not in Number Format')
  })


  Then('enter the valid data',()=>{

    transferrulepageO2C.getFirstApprovalLimit().type(1)
  })
  
  Then('Enter alphabetic amount in Minimum Transfer Amount input field.',()=>{
  
    transferrulepageO2C.getMinimumTransferAmount1().type('qb')
  })
  
  And('assert the error message1',()=>{
  cy.wait(3000)
    transferrulepageO2C.geterrormsg1().contains('Please enter correct value in Minimum Transfer Amount')
  })
  

  And('enter the valid data Minimum transfer amount',()=>{
    transferrulepageO2C.getMinimumTransferAmount1().type(10)
  })
  
  
  And('Enter alphabetic amount in Maximum Transfer Amount input field',()=>{
    transferrulepageO2C.getMaximumTransferAmount1().type('fg')
  })
  
  And('assert the error message2',()=>{
    cy.wait(3000)
      transferrulepageO2C.geterrormsg2().contains('Please enter correct value in Maximum Transfer Amount')
    })

    And('enter the valid data in Maximum Transfer Amount input field',()=>{
        transferrulepageO2C.getMaximumTransferAmount1().type(35)
      })
    
    
     Then('Enter alphabetic amount in Transfer Amount Multiple Of  input field',()=>{
        transferrulepageO2C.getTransferAmountMultipleof().type('ghf')
      })
      
    And('assert the error message3',()=>{
        cy.wait(3000)
          transferrulepageO2C.geterrormsg2().contains('Please enter correct value in Transfer Amount Multiple Of')
        })
    
    
