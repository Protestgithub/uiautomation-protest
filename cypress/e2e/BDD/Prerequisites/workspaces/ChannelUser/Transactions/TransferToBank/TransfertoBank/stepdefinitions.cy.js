/// <reference types="Cypress" />
/// <reference types = "Cypress-iframe"/>

//----------------Imports---------------------------------------------------------------------
import { And, Then, When } from "@badeball/cypress-cucumber-preprocessor";
import 'cypress-iframe';
import OrderDetailsCreation from '../../../../../../../../support/pageObjects/OrderDetailsCreation/OrderDetailsCreation';
import "../../../../../../../../support/Utils/BusinessUserCommands";
import "../../../../../../../../support/Utils/generic";
//----------------Object Declaration-----------------------------------------------------------------

const orderDetailsCreationPage = new OrderDetailsCreation()
var BankData = 'cypress/fixtures/userData/BusinessUsersDataO2C.json'
var accNum
var bamount
const uid = () => Cypress._.random(1e2)
bamount = uid()



//----------------BDD Hooks-----------------------------------------------------------------

//----------------Business user login---------------------------------------------------------------------------



//----------------------------------Transfer to Bank--------------------------
When('Navigate to Transfer to Bank', function () {
  if(Cypress.env('version').includes("x.4")){
    orderDetailsCreationPage.getTransferToBank().click({ force: true })
  }
  else{
    
    orderDetailsCreationPage.getBankServices().scrollIntoView()
    orderDetailsCreationPage.getBankServices().click({ force: true })
    orderDetailsCreationPage.getTransferToBank().click({ force: true })
  }
 
 

})

And('Enter all the information for Bank to Wallet transfer', function () {
  
  orderDetailsCreationPage.getCurrency().select(this.data19.Currency.value, { force: true })
  orderDetailsCreationPage.getWalletType().select(this.data19.wallettype.value, { force: true })
  
  orderDetailsCreationPage.getAmount().type(bamount, { force: true })
  
  cy.readFile(BankData).then((data) => {
    accNum = "TBN101 - " + data.Accnum
    orderDetailsCreationPage.getBankAccountNumber().select(1, { force: true })

  })

})

Then('Click on Transfer Button', function () {
  
  orderDetailsCreationPage.getTransferButtonSubmit().click({ force: true })
  
  orderDetailsCreationPage.getConfirmSubmitButton().click({ force: true })
})
