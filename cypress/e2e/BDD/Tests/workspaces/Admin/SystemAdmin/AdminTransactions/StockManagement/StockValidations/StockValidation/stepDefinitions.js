/// <reference types="Cypress" />
/// <reference types = "Cypress-iframe"/>

//----------------Imports---------------------------------------------------------------------
import {When, And, Then } from "@badeball/cypress-cucumber-preprocessor";
import 'cypress-iframe';
import homePage from '../../../../../../../../../../support/pageObjects/homePage';
import stockInitiation from '../../../../../../../../../../support/pageObjects/StockManagement/stockInitiation';
import stockManagement from '../../../../../../../../../../support/pageObjects/StockManagement/stockManagement';
import "../../../../../../../../../../support/Utils/generic";
import "../../../../../../../../../../support/Utils/StockCommands";


//----------------Object Declaration-----------------------------------------------------------------

const welcomePage = new homePage()
const stockInitiationPage = new stockInitiation()
const stockManagementPage = new stockManagement()
var filename = 'cypress/fixtures/userData/AdminTransaction.json'
var mobile
const uuid = () => Cypress._.random(1e8)
mobile = "77" + uuid()
var amount
const uuuid = () => Cypress._.random(1e3)
amount = uuuid()


const uid = () => Cypress._.random(1e1)
const id = uid()

function getTransactionID() {
  name = "";
  var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz123456789@#$^&*()!";
  for (var i = 0; i < 10; i++)
      name += possible.charAt(Math.floor(Math.random() * possible.length));
  return name;
}


///////////////////////////////////////////////////////////////////////////

And('Set Approval limit without any value',function(){
  
  stockInitiationPage.getApprovalLimit1().clear()
  stockInitiationPage.getsubmitbutton().click()
})

Then('Confirm valid limit error message',function(){
  
  stockInitiationPage.getLimitErrorMessage().should('contain',"Please enter a valid number in limit")
})

//--------------------------------------------------------------------------------------

And('Enter amount containing more than 10 digits before decimal',function(){
  stockManagementPage.getTransferAmount().type("11111111111.8", { force: true })
})
Then('Assert decimal Error message',function(){
  
  stockInitiationPage.getLimitErrorMessage().should('contain',"Requested Amount should be in correct decimal format or max 10 digit before decimal are allowed")
})

//-----------------------------------------------------------------------------------------

And('Navigate to Stock Management and Click on Stock Withdrawal',function(){
  stockManagementPage.getStockManagement().scrollIntoView()
  stockManagementPage.getStockManagement().click()
  cy.intercept('/CoreWeb/stock/StockWithdraw_inputStockWithd.action').as('stockWithdrawal')
  stockInitiationPage.getWithdrawal().click()
  cy.wait('@stockWithdrawal',{timeout:30000})
})

Then('Verify DFS must have separate tax wallet',function(){
  stockInitiationPage.getWithdrawalWalletType().select('IND01').should('contain',"IND01")
  stockInitiationPage.getWithdrawalWalletType().select('IND02').should('contain',"IND02")
  stockInitiationPage.getWithdrawalWalletType().select('IND03').should('contain',"IND03")
})

//--------------------------------------------------------------------------------------

And('Enter all withdrawal details with Amount greater than Available balance',function(){
  stockInitiationPage.getWithdrawalWalletType().select('IND02')
  stockInitiationPage.getWithdrawalBalance().eq(2).click()
  
  stockInitiationPage.getWithdrawalBalance().eq(3).invoke('text').then((text)=>{
    text = text.trim()
    let Balance = text
    cy.log(Balance)
    let balance = Balance*1 + 1
  stockInitiationPage.getBankAccountNo().select(1)
  stockInitiationPage.getWithdrawalAmount().type(balance)
  })
  cy.intercept('/CoreWeb/stock/StockWithdraw_confirm.action').as('withdrawalSubmit')
  stockInitiationPage.getWithdrawalSubmit().click()
  cy.wait('@withdrawalSubmit',{timeout:30000})
})

Then('Assert Insufficient Balance',function(){
  stockInitiationPage.getLimitErrorMessage().should('contain',"Transfer Amount should be less than the Available balance")
})

//---------------------------------------------------------------------------------------------
And('Navigate to Stock Management and Click on Stock Withdrawal',function(){
  stockManagementPage.getStockManagement().scrollIntoView()
  stockManagementPage.getStockManagement().click()
  cy.intercept('/CoreWeb/stock/StockWithdrawApprove_inputStockWithApp.action').as('stockWithdrawalApproval')
  stockInitiationPage.getWithdrawalApproval1().click()
  cy.wait('@stockWithdrawalApproval',{timeout:30000})
})

And('Enter all required details for INDTAX02 wallet',function(){
  stockInitiationPage.getWithdrawalWalletType().select('INDTAX02')
  stockInitiationPage.getWithdrawalBalance().eq(2).click()
  stockInitiationPage.getBankAccountNo().select(1)
  stockInitiationPage.getWithdrawalAmount().type(id)
})
Then('Click on submit and confirm for withdrawal',function(){
  cy.intercept('/CoreWeb/stock/StockWithdraw_confirm.action').as('withdrawalSubmit')
  stockInitiationPage.getWithdrawalSubmit().click()
  cy.wait('@withdrawalSubmit',{timeout:30000})
  stockInitiationPage.getWithdrawalConfirm().click()
  cy.readFile(filename).then((data1)=>{
  stockInitiationPage.getSuccessMsg().then((data)=>{
    data = data.trim()
    let ID = data.split(':')
    let Id = ID[1]
    data.WithdrawalID = Id
    cy.writeFile(filename,data)
  })
})

  stockInitiationPage.getSuccessMsg().contains("Your transaction request has been initiated, and is now pending confirmation Transaction id")
})

And('Select Initiated withdrawal and approve',function(){
  cy.StockWithdrawalApproval()
  stockInitiationPage.getWithdrawalApprovalSubmit().click()
  stockInitiationPage.getWithdrawalRemarks().type(getRandomName())
  stockInitiationPage.getWithdrawalApprovalConfirm().click()
})

//-----------------------------------x.7 Stocktansfer weblink---------------------

When('Navigate to Admin Transaction and Verify stock Transfer present in the link', function () {
  stockInitiationPage.getAdminTransaction().click()
  stockInitiationPage.getStockTransfer().should('be.visible')
})

//-----------------------------------------------------------------------------------

Then('User must have an amount equal to the stock creation in the bank',function(){
  let a = amount
  stockInitiationPage.getProvider().select(this.data17.stockInitiation.provider, { force: true })
  stockInitiationPage.getStockFrom().select(this.data17.stockInitiation.stockFrom, { force: true })
  stockInitiationPage.getReferenceNumber().type(mobile, { force: true })
  stockInitiationPage.getRequestedAmount().type(a, { force: true })
  cy.intercept(this.data20.SubmitButtonSI).as('submittBtn')
  stockInitiationPage.getSubmitButton().click({ force: true })
  cy.wait('@submittBtn')
  stockInitiationPage.getBalance().eq(3).invoke('text').then((text) => {
    text = text.trim()
    const num1 = text * 1
    const num2 = a * 1
    if(num1 >= num2){
       cy.log('User have an amount equal to the stock creation in the bank')
    }
  })
})

//---------------------------------------------------------------
And('Enter non numeric Incorrect Transaction Id',function(){
  stockInitiationPage.getTransactionId().type(getTransactionID(),{force:true})
  stockInitiationPage.getStockType().select('Stock Creation')
})
Then('Verify Non numeric Incorrect transactionID error message',function(){
  cy.intercept(this.data20.StockEnquirySub).as('stockEnquirySubmit')
  stockManagementPage.getStockEnquirySubmit().click({ force: true })
  cy.wait('@stockEnquirySubmit', { timeout: 30000 })
  stockInitiationPage.getLimitErrorMessage().should('have.text','Transaction ID does not exists')
})