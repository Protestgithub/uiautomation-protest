
/// <reference types="Cypress" />
/// <reference types = "Cypress-iframe"/>

//----------------Imports---------------------------------------------------------------------
import 'cypress-iframe'
import { Given, When, Then, And, Before } from "@badeball/cypress-cucumber-preprocessor";
import "../../../../../../../support/Utils/generic";
import "../../../../../../../support/Utils/ConsumerPortal";
import W2BandB2W from '../../../../../../../support/pageObjects/W2BandB2W/W2BandB2W';

//Adde comment in protest for showing merge 
//----------------Object Declaration-----------------------------------------------------------------

const W2B = new W2BandB2W()
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


//--------------------------------  Added by Kalyani 27/06/2023  ------------------------------------------
Then('click on Verify for Transfer to Bank',function(){
  
  cy.intercept('/consumerportalui/mobiquitypay/v1/order/wallet_to_bank').as('getW2B')
  cy.intercept('/consumerportalui/mobiquitypay/serviceRequest/resume/any').as('getResume')
  W2B.getVerify().click()
  cy.getTransfertoBankApproval()
    })
  Then('Enter PIN and click on Verify and check for Service Charge',function(){
      W2B.getTrasactionPin().type('1357')
      cy.intercept('/consumerportalui/mobiquitypay/v1/order/wallet_to_bank').as('getW2B')
      cy.intercept('/consumerportalui/mobiquitypay/serviceRequest/resume/any').as('getResume')
      if( W2B.getServiceCharge().contains('SERVICE')){
        W2B.getAmount().should('not.be.empty').invoke('text').then((value)=>{
        let amount = value
        cy.log(amount)
        })
        }
        else{
          cy.log('service charge not defined value is not there')
          }
        })
  Then('Check for Commission values if defined',function(){
    cy.wait(3000)
    
  if( W2B.getCommission().should('exist')){
  cy.wait(2000)
    W2B.getAmount1().should('not.be.empty').invoke('text').then((value)=>{
    let amount1 = value
    cy.log(amount1)
    })
  }
else{
cy.log('commission is not defined')
}
  W2B.getVerify().click()
  cy.getTransfertoBankApproval()
})
And('Enter Amount and check validation messages',function(){
    cy.wait(3000)
    if(W2B.getTransferToBankAmount().clear().type('0')){
      W2B.getAmountError().contains('Amount should be greater than 0')
    }
  else if(W2B.getTransferToBankAmount().clear().type('1.897')){
    W2B.getAmountError().contains('Incorrect Amount Format')
    }
  else{
    W2B.getTransferToBankAmount().clear().type(getRandomNumber())
    }
       
  })
  
  
  And('Enter Amount to do Transfer to Bank',function(){
    cy.wait(3000)
    W2B.getTransferToBankAmount().type(getRandomNumber())
    })
  
  Then('Hovering on PIN Icon to see PIN',function(){
    W2B.getHoverPIN().trigger('mouseover')
  })
  And('Assert success message',function(){
    // W2B.getTransactionId().then((data)=>{
    //   cy.readFile('cypress/fixtures/userData/W2BandB2W.json').then((user)=>{
    //   let Id = data.text()
    //   user.W2BId3 = Id
    //   cy.writeFile('cypress/fixtures/userData/W2BandB2W.json',user)
    //   })
    // })
    W2B.getSuccessMessage().contains('Payment successful')   
    //W2B.getDone().click()
    
  })
  And('Assert success message1',function(){
    W2B.getSuccessMessage().contains('Payment successful')
       // W2B.getDone().click()
    
  })
  
  Then('Download the receipt',function(){
    W2B.getdownloadreceipt().click({force:true})
    W2B.getDone().click()
    
  })
  Then('View History1',function(){
    W2B.getViewHistory().contains('View history').click()
    W2B.getwalletstatment().contains('Wallet Statement')
    W2B.gethistorydate().should('exist').contains('Date')
    
  })
  
  Then('Click on Another Transaction Icon',function(){
    W2B.getAnotherTransaction().contains('transfer')
    W2B.getAnotherTransaction().click({force:true})
    W2B.getTransferToBank().should('be.visible').click({force:true})
    
    
  })
  
  Then('Enter PIN and validate PIN Number and hover on eye icon',function(){
     
  if(W2B.getTrasactionPin().clear().type('1d@')){
      W2B.getPINError().contains('Invalid PIN entered')
    }
  
      else{
    
      cy.get('input[type="password"]').clear().type('1357').invoke('val')
      .should(value => {
        expect(Number.isInteger(+value), 'input should be an integer').to.eq(true) 
      
          W2B.getHoverPIN().trigger('mouseover')
          if(value.length() == 4)
          {
               cy.log('Entered pin is valid length')
           }
          })
      }
  
      })

      Then('Check available currencies',function(){
        W2B.getCurrency().click({force:true})
       // W2B.getINDCurrency().should('exist').click({force:true})
        //W2B.getUSDCurrency().should('exist').click({force:true})
        
      })


      Then('Check Wallets to be selected',function(){
        W2B.getNormal().should('exist').contains('USD').click()
        // W2B.getTransferTo().should('exist').click()
        // W2B.getTrasferProceed().click()
     
      })

      Then('Enter Correct Pin',function(){
        W2B.getTrasactionPin().type('1357')

      })


      And('Copy TransactionId',function(){
        W2B.getcopytransactionId().click()
        W2B.getcopied().click().contains('Copied')
      })

      Then('Check for date field',function(){

      })

      When('Select Bank associated to user',function(){
        W2B.getTransferTo().should('exist').click()
        W2B.getTrasferProceed().click()


      })
      Then('Enter PIN and click on Verify for Transfer to Bank',function(){
        W2B.getTrasactionPin().type('1357')
        cy.intercept('/consumerportalui/mobiquitypay/v1/order/wallet_to_bank').as('getW2B')
        cy.intercept('/consumerportalui/mobiquitypay/serviceRequest/resume/any').as('getResume')
        W2B.getVerify().click()
        cy.getTransfertoBankApproval()
          })
      
      