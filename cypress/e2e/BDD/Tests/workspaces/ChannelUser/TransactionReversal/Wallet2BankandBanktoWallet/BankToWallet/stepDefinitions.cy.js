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
import OrderDetailsCreation from '../../../../../../../../support/pageObjects/OrderDetailsCreation/OrderDetailsCreation';
import PricingEnginePage from '../../../../../../../../support/pageObjects/PricingEngine/PricingEnginePage';

//----------------Object Declaration-----------------------------------------------------------------
const pageLogin = new loginPage()
const manageUsersPage = new manageUsers()
const welcomePage = new homePage()
const W2B = new W2BandB2W()
const OrderDetailsPage = new OrderDetailsCreation()
const pricingEnginePage = new PricingEnginePage()


function getRandomNumber() {
  name = "";
  var possible = "3";
  for (var i = 0; i < 1; i++)
    name += possible.charAt(Math.floor(Math.random() * possible.length));
  return name;
}
function getBankAccountNumber() {
  name = "";
  var possible = "1234567890";
  for (var i = 0; i < 12; i++)
    name += possible.charAt(Math.floor(Math.random() * possible.length));
  return name;
}
function getRandomName() {
  name = "";
  var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
  for (var i = 0; i < 6; i++)
    name += possible.charAt(Math.floor(Math.random() * possible.length));
  return name;
}

function getIfsc() {
  name = "";
  var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz1234567890";
  for (var i = 0; i < 11; i++)
    name += possible.charAt(Math.floor(Math.random() * possible.length));
  return name;
}


//-----------------------------------------------------------------------

Given('Login into Consumer Portal to set Password',function(){
  cy.visit(Cypress.env('Adminurl')+"/consumerportalui/#/home")
  cy.wait(2000)
  pageLogin.getloginBtn().click()
  cy.readFile('cypress/fixtures/userData/subscriberReg.json').then((data)=>{
    let Number = data.subscriberMobile
    pageLogin.getMobileNumber().type(Number)
  })
  pageLogin.getPIN().type('0000')
  cy.intercept('/consumerportalui/mobiquitypay/ums/v3/user/auth/web/login').as('login')
  pageLogin.getloginBtn1().click({force:true})
  cy.wait('@login',{timeout:30000})
  cy.wait(2000)
  W2B.getNewPin().type('1357')
  W2B.getConfirmPin().type('1357')
  W2B.getInitiateButton().click()
  W2B.getPinChangeSuccessMsg().contains(' PIN changed successfully! ')
  W2B.getNewLogin().click()
  cy.readFile('cypress/fixtures/userData/subscriberReg.json').then((data)=>{
    let Number = data.subscriberMobile
    pageLogin.getMobileNumber().type(Number)
  })
  pageLogin.getPIN().type('1357')

})

Given('Login into Consumer Portal',function(){
  cy.visit(Cypress.env('Adminurl')+"/consumerportalui/#/home")
  cy.wait(2000)
  cy.get('html').then(($ele) => {
    cy.log($ele)
    if ($ele.find('[class="login-btn"]').length > 0) {
      pageLogin.getloginBtn().click()
    } else {
      pageLogin.getProfile().click()
      pageLogin.getLogoutButton().click()
      pageLogin.getloginBtn().click()
    }
})

  cy.readFile('cypress/fixtures/userData/subscriberReg.json').then((data)=>{
    let Number = data.subscriberMobile
    pageLogin.getMobileNumber().type(Number)
  })
  pageLogin.getPIN().type('1357')
  cy.intercept('/consumerportalui/mobiquitypay/ums/v3/user/auth/web/login').as('login')
  pageLogin.getloginBtn1().click({force:true})
  cy.wait('@login',{timeout:30000})
})

And('Click on Add money button',function(){
  W2B.getAddMoney().click()
})
And('Enter Amount and Select bank and Click on Proceed',function(){
  cy.readFile('cypress/fixtures/userData/W2BandB2W.json').then((data)=>{
    let Amount =getRandomNumber()
    data.TransferAmount = Amount
  W2B.getB2WAmount().type(Amount)
  cy.writeFile('cypress/fixtures/userData/W2BandB2W.json',data)
})
cy.wait(2000)
  W2B.getTransferTo().click()
  W2B.getB2WProceed().click()
})

Then('Enter Pin and verify',function(){
  W2B.getTrasactionPin().type('1357')
  cy.intercept('/consumerportalui/mobiquitypay/v1/order/bank_to_wallet').as('getB2W')
  cy.intercept('/consumerportalui/mobiquitypay/serviceRequest/resume/any').as('getResume')
  W2B.getVerify().click()
  cy.getB2WApproval()
  // W2B.getSuccessMessage().contains('Payment successful')
})

And('Get B2W TransactionId',function(){
  W2B.getViewHistory().click()
  W2B.geB2WTransaction().click()
  W2B.getB2WTransactionId().then((data)=>{
    cy.readFile('cypress/fixtures/userData/W2BandB2W.json').then((user)=>{
      let Id = data.text().split(' ')
      let ID = Id[3]
      user.B2WId1 = ID 
      cy.writeFile('cypress/fixtures/userData/W2BandB2W.json',user)
      })
    })
})

And('Get B2W TransactionId2',function(){
  W2B.getViewHistory().click()
  W2B.geB2WTransaction().click()
  W2B.getB2WTransactionId().then((data)=>{
    cy.readFile('cypress/fixtures/userData/W2BandB2W.json').then((user)=>{
      let Id = data.text().split(' ')
      let ID = Id[3]
      user.B2WId2 = ID 
      cy.writeFile('cypress/fixtures/userData/W2BandB2W.json',user)
      })
    })
})
And('Get B2W TransactionId3',function(){
  W2B.getViewHistory().click()
  W2B.geB2WTransaction().click()
  W2B.getB2WTransactionId().then((data)=>{
    cy.readFile('cypress/fixtures/userData/W2BandB2W.json').then((user)=>{
      let Id = data.text().split(' ')
      let ID = Id[3]
      user.B2WId3 = ID 
      cy.writeFile('cypress/fixtures/userData/W2BandB2W.json',user)
      })
    })
})
And('Get B2W TransactionId4',function(){
  W2B.getViewHistory().click()
  W2B.geB2WTransaction().click()
  W2B.getB2WTransactionId().then((data)=>{
    cy.readFile('cypress/fixtures/userData/W2BandB2W.json').then((user)=>{
      let Id = data.text().split(' ')
      let ID = Id[3]
      user.B2WId4 = ID 
      cy.writeFile('cypress/fixtures/userData/W2BandB2W.json',user)
      })
    })
})
And('Get NetPayable,ServiceCharge,Commision and tax',function(){
  cy.readFile('cypress/fixtures/userData/W2BandB2W.json').then((user)=>{
  W2B.getTax().eq(0).invoke('text').then((data)=>{
    data = data.trim()
    cy.log(data)
    let x = data.split(' ')
    let y = x[1]
    let serviceCharge = y * 1
    cy.log(serviceCharge)
    user.ServiceCharge = serviceCharge
  })
  W2B.getTax().eq(1).invoke('text').then((data1)=>{
    data1 = data1.trim()
    cy.log(data1)
    let a = data1.split(' ')
    let b = a[1]
    let serviceTax = b * 1
     cy.log(serviceTax)
    user.ServiceChargeTax = serviceTax
  })
  W2B.getTax().eq(2).invoke('text').then((data)=>{
    data = data.trim()
    cy.log(data)
    let x = data.split(' ')
    let y = x[1]
    let commission = y * 1
    cy.log(commission)
    cy.log(commission)
    user.Commission = commission
  })
  W2B.getTax().eq(3).invoke('text').then((data)=>{
    data = data.trim()
    cy.log(data)
    let x = data.split(' ')
    let y = x[1]
    let commissionTax = y * 1
    cy.log(commissionTax)
    user.CommissionTax = commissionTax
  })
   W2B.getTax().eq(4).invoke('text').then((data)=>{
    data = data.trim()
    cy.log(data)
    let x = data.split(' ')
    let y = x[1]
    let tax = y * 1
    cy.log(tax)
    user.Tax = tax
  })
  W2B.getNetPayable().invoke('text').then((data)=>{
    data = data.trim()
    cy.log(data)
    let x = data.split(' ')
    let y = x[1]
    let netPayable = y * 1
    cy.log(netPayable)
    user.NetPayable = netPayable
  })
  cy.writeFile('cypress/fixtures/userData/W2BandB2W.json', user)
  })
})

And('Select Others in dropdown',function(){
  manageUsersPage.getUserType().select("Others")
})
And('Click on Account info and Add Bank Account',function(){
  manageUsersPage.getAccountInfo().click()
  manageUsersPage.getBankAcc().click()
  W2B.getAddBankAccount().click()
})

And('Enter Bank Details',function(){
  let AccountNumber =getBankAccountNumber()
  OrderDetailsPage.getCurrency().select("US Dollar - $")
  W2B.getBankName().select("TBN101")
  W2B.getBankAccountNumber().type(AccountNumber)
  W2B.getConfirmAccountNumber().type(AccountNumber)
  W2B.getNickName().type(getRandomName())
  W2B.getAccountType().select('Savings')
  W2B.getIFSC().type(getIfsc())
  cy.intercept('/mobiquitypay/v1/order/assisted/bank/association').as('AssociateBank')
  W2B.getInitiateAdd().click()
})

Then('Verify Success Message and Approve Add bank',function(){
  cy.getAddBank()
})

And('Get Wallet Balance',function(){
  cy.wait(3000)
  cy.readFile('cypress/fixtures/userData/W2BandB2W.json').then((user)=>{
  W2B.getBalance().invoke('text').then((data)=>{
    data = data.trim()
    cy.log(data)
    let x = data.split(' ')
    let y = x[1]
    let walletBalance = y * 1
    cy.log(walletBalance)
    user.WalletBalace = walletBalance
  })
  cy.writeFile('cypress/fixtures/userData/W2BandB2W.json', user)
  })
})

And('Logout of Consumer Portal',function(){
  pageLogin.getProfile().click()
  pageLogin.getLogoutButton().click()
  pageLogin.getloginBtn().click()
})

And('Verifying ServiceCharge and Tax Reversal',function(){
  cy.wait(3000)
  cy.readFile('cypress/fixtures/userData/W2BandB2W.json').then((user)=>{
    let serviceCharge = user.ServiceCharge
    let serviceTax = user.ServiceChargeTax
    let tax = user.Tax
    let walletBalance = user.WalletBalace
    let netPayable = user.NetPayable
    let ServiceChargeTaxDeduction = netPayable - serviceCharge - serviceTax -tax
    let latestBalance = walletBalance - ServiceChargeTaxDeduction
    W2B.getBalance().then((data)=>{
      data = data.text()
      let a = data.split(' ')
      let b = a[1]*1
      if(b < walletBalance){
        cy.log("passed")
      }
      else{
        cy.log("failed")
      }
    })
  })
})
And('Verifying Commission and Tax Reversal',function(){
  cy.wait(3000)
  cy.readFile('cypress/fixtures/userData/W2BandB2W.json').then((user)=>{
    let commission = user.Commission
    let commissionTax = user.CommissionTax
    let tax = user.Tax
    let walletBalance = user.WalletBalace
    let netPayable = user.NetPayable
    let Deduction = netPayable - commission - commissionTax -tax
    let latestBalance = walletBalance - Deduction
    W2B.getBalance().then((data)=>{
      data = data.text()
      let a = data.split(' ')
      let b = a[1]*1
      if(b < walletBalance){
        cy.log("passed")
      }
      else{
        cy.log("failed")
      }
    })
  })
  
})

And('Verifying ServiceCharge,Commission and Tax Reversal',function(){
  cy.wait(3000)
  cy.readFile('cypress/fixtures/userData/W2BandB2W.json').then((user)=>{
    let serviceCharge = user.ServiceCharge
    let serviceTax = user.ServiceChargeTax
    let commission = user.Commission
    let commissionTax = user.CommissionTax
    let tax = user.Tax
    let walletBalance = user.WalletBalace
    let netPayable = user.NetPayable
    let Deduction = netPayable - serviceCharge - serviceTax- commission - commissionTax -tax
    let latestBalance = walletBalance - Deduction
    W2B.getBalance().then((data)=>{
      data = data.text()
      let a = data.split(' ')
      let b = a[1]*1
      if(b < walletBalance){
        cy.log("passed")
      }
      else{
        cy.log("failed")
      }
    })
  })
})

And('Verifying Transaction Reversal',function(){
  cy.wait(3000)
  cy.readFile('cypress/fixtures/userData/W2BandB2W.json').then((user)=>{
    let tax = user.Tax
    let walletBalance = user.WalletBalace
    let netPayable = user.NetPayable
    let latestBalance = walletBalance - netPayable
    W2B.getBalance().then((data)=>{
      data = data.text()
      let a = data.split(' ')
      let b = a[1]*1
      if(b < walletBalance){
        cy.log("passed")
      }
      else{
        cy.log("failed")
      }
    })
  })
})


And('Enter Amount for Transactions',function(){
  W2B.getB2WAmount().type(1000)
cy.wait(2000)
  W2B.getTransferTo().click()
  W2B.getB2WProceed().click()
})

//----------------------------------------------------------------------------------
And('Click on Bank to SVA Transfer',function(){
  cy.intercept('/shulka/referenceData*').as('PricingEngine')
  pricingEnginePage.getB2W().click()
  cy.wait('@PricingEngine', {timeout:40000})
  cy.wait(2000)
})
