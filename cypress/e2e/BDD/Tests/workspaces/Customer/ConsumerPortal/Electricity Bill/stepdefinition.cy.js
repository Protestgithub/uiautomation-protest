/// <reference types= "Cypress" />
// <reference types= "Cypress-iframe" />

//import 'cypress-iframe'
import { Given, When, Then, And, Before } from "@badeball/cypress-cucumber-preprocessor";
import "../../../../../../../support/Utils/generic";
import "../../../../../../../support/Utils/ConsumerPortal";
import ElectricityBillPayment from "../../../../../../../support/pageObjects/Consumer ElectricityBillPayment/ElectricityBillPayment";
import LoginPage from "../../../../../../../support/pageObjects/ConsumerPortalUserLogin/LoginPage";
import HomePage from "../../../../../../../support/pageObjects/ConsumerPortalHomePage/HomePage";
import W2BandB2W from "../../../../../../../support/pageObjects/W2BandB2W/W2BandB2W";

const UserLoginPage = new LoginPage()
const WelcomePage = new HomePage()
const ElectricityPage = new ElectricityBillPayment()
const W2B = new W2BandB2W()

//--------------------------------------------------------

function getRandomNumber() {
    name = "";
    var possible = "123456789";
    for (var i = 0; i < 5; i++)
        name += possible.charAt(Math.floor(Math.random() * possible.length));
    return name;
}
function getRandomNumber1() {
    name = "";
    var possible = "1234567890";
    for (var i = 0; i < 16; i++)
        name += possible.charAt(Math.floor(Math.random() * possible.length));
    return name;
}

let customerid = getRandomNumber()

//--------------------------------------------------------------------------------------------------
  
When('Check whether Electricity Bill is visible or not', function(){

    WelcomePage.getWelcomeUserName().should('exist')
    if(WelcomePage.getElectricityBill().should('exist')){
        cy.log('User has Authority for Electricity Bill')
    }else{
        cy.log('User has no Authority for Electricity Bill')
    }
})

And('Click on Electricity Bill',function(){

   WelcomePage.getElectricityBill().click({force:true})
    cy.wait(3000)

})
Then('Select Board Name and fill details',function(){
    
    WelcomePage.getElectricityBill().should('be.visible').click({force:true})
    ElectricityPage.getBoardName().should('exist').click({force:true})      
    ElectricityPage.getBoardNameselect().click({force:true})
    ElectricityPage.getCustomerId().should('exist').type(customerid)
    ElectricityPage.getProceedButton().should('be.enabled').click({force:true})
    ElectricityPage.getElectricBillAmount().should('exist').invoke('val').then((value)=>{
             cy.log(value)
        })
        
        ElectricityPage.getwallet().should('be.checked')
        ElectricityPage.getcurrency().eq(0).should('exist').invoke('text').then((value)=>{
            cy.log(value)
        })
     ElectricityPage.getNormalWallet().should('be.visible')
     ElectricityPage.getSelectWallet().click({force:true})
    //  ElectricityPage.getautopay().check({force:true})
    //  ElectricityPage.getautopaymentinfo().click({force:true})
    //  ElectricityPage.getautopayok().click({force:true})
     ElectricityPage.getProceedButton1().click({force:true})
    
    
})
Then('Select Board Name and fill details and select bank',function(){
    
    WelcomePage.getElectricityBill().click({force:true})
    ElectricityPage.getBoardName().should('exist').click({force:true})
    //ElectricityPage.getElectricBillAmount().should()    
    ElectricityPage.getBoardNameselect().click({force:true})
    ElectricityPage.getCustomerId().type('23456')
    ElectricityPage.getProceedButton().should('be.enabled').click({force:true})
    ElectricityPage.getElectricBillAmount().should('exist').invoke('val').then((value)=>{
             cy.log(value)
        })
     ElectricityPage.getbank().should('be.visible').click({force:true})
     ElectricityPage.getpickname().should('exist').invoke('text').then((value)=>{
        cy.log(value)
        
     })
     ElectricityPage.getpickname().eq(0).click({force:true})
     ElectricityPage.getProceedButton1().click({force:true})
    
    
})

Then('Select Board Name and fill details and select card',function(){
    
    WelcomePage.getElectricityBill().click({force:true})
    ElectricityPage.getBoardName().click({force:true})
    //ElectricityPage.getElectricBillAmount().should()
    
    ElectricityPage.getBoardNameselect().click({force:true})
    ElectricityPage.getCustomerId().type('23456')
    ElectricityPage.getProceedButton().should('be.enabled').click({force:true})
    ElectricityPage.getElectricBillAmount().should('exist').invoke('val').then((value)=>{
             cy.log(value)
        })
     ElectricityPage.getcard().should('be.visible').click({force:true})
     ElectricityPage.getsavecarddetails().should('be.visible')
     ElectricityPage.getnewcard().should('be.visible').click({force:true})
     ElectricityPage.getBoardName().click({force:true})
     ElectricityPage.getBoardNameselect().click({force:true})
     ElectricityPage.getcardnumber().type(Cypress.env('CardNumber'))
     ElectricityPage.getcardHolderName().type('XXXX')
     ElectricityPage.getexpirydate().type('05/28')
     ElectricityPage.getcardHolderNickName().type('test')
     //ElectricityPage.getsavecard().click({force:true})
     ElectricityPage.getcontinuepayment().click({force:true})

     ElectricityPage.getProceedButton1().click({force:true})
    
    
})

Then('Select Board Name and fill details and select card with save card',function(){
    
    WelcomePage.getElectricityBill().click({force:true})
    ElectricityPage.getBoardName().click({force:true})
    //ElectricityPage.getElectricBillAmount().should()
    
    ElectricityPage.getBoardNameselect().click({force:true})
    ElectricityPage.getCustomerId().type('23456')
    ElectricityPage.getProceedButton().should('be.enabled').click({force:true})
    ElectricityPage.getElectricBillAmount().should('exist').invoke('val').then((value)=>{
             cy.log(value)
        })
     ElectricityPage.getcard().should('be.visible').click({force:true})
     ElectricityPage.getnewcard().should('be.visible').click({force:true})
     ElectricityPage.getBoardName().click({force:true})
     ElectricityPage.getBoardNameselect().click({force:true})
     ElectricityPage.getcardnumber().type(Cypress.env('CardNumber1'))
     ElectricityPage.getcardHolderName().type('XXXX')
     ElectricityPage.getexpirydate().type('05/28')
     ElectricityPage.getcardHolderNickName().type('test')
     ElectricityPage.getsavecard().click({force:true})
     ElectricityPage.getcontinuepayment().click({force:true})

     ElectricityPage.getProceedButton1().click({force:true})
    
    
})



And('Enter Pin and Verify the electric bill transaction',function(){
     ElectricityPage.getPin().clear().type('1357')
     ElectricityPage.gethoverPin().trigger('mouseover')

    //  cy.intercept('/consumerportalui/mobiquitypay/v1/order/billpay').as('getEBP')
    //  cy.wait(3000)
    //  ElectricityPage.getVerifyButton().click({force:true})
     //cy.wait(3000)
     if(Cypress.env('TransactionOTP')=='Yes'){
     cy.intercept('/consumerportalui/mobiquitypay/v1/order/billpay').as('getEBP1')
     cy.wait(3000)
     ElectricityPage.getVerifyButton().click({force:true})
     cy.getElectricBillApproval1()
     }
     else{
         cy.intercept('/consumerportalui/mobiquitypay/v1/order/billpay').as('getEBP')
        // APIPage.getVerifyOtp().click()
     cy.wait(3000)
     ElectricityPage.getVerifyButton().click({force:true})
     cy.wait(2000)
         cy.getElectricBillApproval()     

     }
     ElectricityPage.getTransactionId().then((data)=>{
        cy.readFile('cypress/fixtures/userData/ElectricBill.json').then((user)=>{
        let Id = data.text()
        user.EBPID = Id 
        cy.writeFile('cypress/fixtures/userData/ElectricBill.json',user)
        })
      })
      cy.wait(2000)
      ElectricityPage.getSuccessMessage().contains('Payment successful')
    //   ElectricityPage.getautopaystatement().contains('Auto-Pay')
    //   ElectricityPage.getcopytransactionId().click({force:true})
    //   ElectricityPage.getcopied().click({force:true})
    //   ElectricityPage.getcopied().contains('Copied')
    //   ElectricityPage.gettransactiondetails().should('exist')
    //   ElectricityPage.gettransactiondetails().invoke('val').then((value)=>{
    //     if(value = customerid)
    //     {
    //         cy.log(value)
    //     }
    //   })

    //   ElectricityPage.getcheckautopay().contains('Payment Enabled')
    //   //.contains('AMOUNT').contains('BOARD').contains('CUSTOMER ID')
    // //   ElectricityPage.getdownloadreceipt().click({force:true})
    // //     ElectricityPage.getViewHistory().eq(1).click({force:true})
    // //    ElectricityPage.getwallethistory().contains('Wallet Statement')
    //   ElectricityPage.getdone().click({force:true})
})


And('Enter Pin and Verify the electric bill transaction with bank',function(){
    ElectricityPage.getPin().type('1357')
 
    if(Cypress.env('TransactionOTP')=='Yes'){
    cy.intercept('/consumerportalui/mobiquitypay/v1/order/billpay').as('getEBP1')
    cy.wait(3000)
    ElectricityPage.getVerifyButton().click({force:true})
    cy.getElectricBillApproval1()
    }
    else{
        cy.intercept('/consumerportalui/mobiquitypay/v1/order/billpay').as('getEBPBank')
         cy.wait(3000)
    ElectricityPage.getVerifyButton().click({force:true})
    cy.wait(2000)
        cy.getElectricBillBankApproval()     

    }
     cy.wait(2000)
     ElectricityPage.getSuccessMessage().contains('Payment successful')
     W2B.getViewHistory().click()
     W2B.geB2WTransaction().click()
     W2B.getB2WTransactionId().then((data)=>{
        cy.readFile('cypress/fixtures/userData/ElectricBill.json').then((user)=>{
            let Id = data.text().split(' ')
            let ID = Id[3]
            user.EBPID = ID 
        cy.writeFile('cypress/fixtures/userData/ElectricBill.json',user)
        })    
     })
})
And('Enter Pin and Verify the electric bill transaction for download receipt',function(){
    ElectricityPage.getPin().clear().type('1357')
    //ElectricityPage.gethoverPin().trigger('mouseover')    
    if(Cypress.env('TransactionOTP')=='Yes'){
    cy.intercept('/consumerportalui/mobiquitypay/v1/order/billpay').as('getEBP1')
    cy.wait(3000)
    ElectricityPage.getVerifyButton().click({force:true})
    cy.getElectricBillApproval1()
    }
    else{
        cy.intercept('/consumerportalui/mobiquitypay/v1/order/billpay').as('getEBP')
       // APIPage.getVerifyOtp().click()
    cy.wait(3000)
    ElectricityPage.getVerifyButton().click({force:true})
    cy.wait(2000)
        cy.getElectricBillApproval()     

    }
    ElectricityPage.getTransactionId().then((data)=>{
       cy.readFile('cypress/fixtures/userData/ElectricBill.json').then((user)=>{
       let Id = data.text()
       user.EBPID = Id 
       cy.writeFile('cypress/fixtures/userData/ElectricBill.json',user)
       })
     })
     cy.wait(2000)
     ElectricityPage.getTransactionDate().should('exist')
     ElectricityPage.getSuccessMessage().contains('Payment successful')
     ElectricityPage.getdownloadreceipt().click({force:true})
    //  ElectricityPage.getViewHistory().eq(1).click({force:true})
    // ElectricityPage.getwalletstatment().contains('Wallet Statement')
   })



   And('Enter Pin and Verify the electric bill transaction and click on Make Another Transaction',function(){
    ElectricityPage.getPin().clear().type('1357')
    //ElectricityPage.gethoverPin().trigger('mouseover')    
    if(Cypress.env('TransactionOTP')=='Yes'){
    cy.intercept('/consumerportalui/mobiquitypay/v1/order/billpay').as('getEBP1')
    cy.wait(3000)
    ElectricityPage.getVerifyButton().click({force:true})
    cy.getElectricBillApproval1()
    }
    else{
        cy.intercept('/consumerportalui/mobiquitypay/v1/order/billpay').as('getEBP')
       // APIPage.getVerifyOtp().click()
    cy.wait(3000)
    ElectricityPage.getVerifyButton().click({force:true})
    cy.wait(2000)
        cy.getElectricBillApproval()     

    }
    ElectricityPage.getTransactionId().then((data)=>{
       cy.readFile('cypress/fixtures/userData/ElectricBill.json').then((user)=>{
       let Id = data.text()
       user.EBPID = Id 
       cy.writeFile('cypress/fixtures/userData/ElectricBill.json',user)
       })
     })
     cy.wait(2000)
     ElectricityPage.getTransactionDate().should('exist')
     ElectricityPage.getSuccessMessage().contains('Payment successful')
    ElectricityPage.getViewHistory().eq(0).contains('Payment')  //Another Payment
    ElectricityPage.getViewHistory().eq(0).click({force:true})
    WelcomePage.getElectricityBill().should('be.visible')
   })


And('Click on Cancel transaction',function(){

    ElectricityPage.getcanceltransaction().click({force:true})
     ElectricityPage.getconfirmpopup().should('exist').contains('cancel')
    //  ElectricityPage.getclickYes().click({force:true})
    //  WelcomePage.getElectricityBill().should('exist')
 
 })

 And('Click on Cross Icon',function(){

    ElectricityPage.getcardclose().click({force:true})
     WelcomePage.getElectricityBill().should('exist')
 
 })

 //Added on 14/07/23 for french language 

 When('Click on French language',function(){
    ElectricityPage.getfrenchlanguage().eq(0).click()
    ElectricityPage.getoptionlanguage().eq(1).click()
 })

 Then('Click on Yes',function(){
    ElectricityPage.getclickYes().click({force:true})
    WelcomePage.getElectricityBill().should('exist')
 })
 Then('Click on No',function(){
    ElectricityPage.getclickNo().click({force:true})
    ElectricityPage.getReviewConfirm().contains('Review')
 })

 Then('Check AutoPay information',function(){

    
    ElectricityPage.getautopaymentinfo().click({force:true})
    ElectricityPage.getautopaytext().contains('auto')
    ElectricityPage.getautopayok().click({force:true})
    ElectricityPage.getProceedButton1().click({force:true})
 
 })
 When('Check the AutoPay checkbox',function(){

    ElectricityPage.getautopay().check({force:true})
    
 
 })

 Then('Select Board Name and fill details1',function(){
    
    WelcomePage.getElectricityBill().should('be.visible').click({force:true})
     ElectricityPage.getBoardName().should('exist').click({force:true})      
     ElectricityPage.getBoardNameselect().click({force:true})
    ElectricityPage.getCustomerId().should('exist').type(customerid)
    ElectricityPage.getProceedButton().should('be.enabled').click({force:true})
    ElectricityPage.getElectricBillAmount().should('exist').invoke('val').then((value)=>{
             cy.log(value)
        })
        
        ElectricityPage.getwallet().should('be.checked')
        ElectricityPage.getcurrency().eq(0).should('exist').invoke('text').then((value)=>{
            cy.log(value)
        })
     ElectricityPage.getNormalWallet().should('be.visible')
     ElectricityPage.getSelectWallet().click({force:true})
    //ElectricityPage.getProceedButton1().click({force:true})
    
    
})

Then('Check details on successpage',function(){
    
    ElectricityPage.getdetails().eq(1).contains('Amount')
    ElectricityPage.getdetails().eq(2).contains('BOARD')
    ElectricityPage.getdone().click({force:true})
 })
 When('Copy Transaction Id',function(){
      ElectricityPage.getcopytransactionId().click({force:true})
      ElectricityPage.getcopied().click({force:true})
      ElectricityPage.getcopied().contains('Copied')
 })

 And('Enter Pin and click on Verify',function(){
    ElectricityPage.getPin().clear().type('1357')
    ElectricityPage.gethoverPin().trigger('mouseover')
     if(Cypress.env('TransactionOTP')=='Yes'){
     cy.intercept('/consumerportalui/mobiquitypay/v1/order/billpay').as('getEBP1')
     cy.wait(3000)
     ElectricityPage.getVerifyButton().click({force:true})
     cy.getElectricBillApproval1()
     }
     else{
         cy.intercept('/consumerportalui/mobiquitypay/v1/order/billpay').as('getEBP')
        // APIPage.getVerifyOtp().click()
     cy.wait(3000)
     ElectricityPage.getVerifyButton().click({force:true})
     cy.wait(2000)
         cy.getElectricBillApproval()     

     }
     ElectricityPage.getTransactionId().then((data)=>{
        cy.readFile('cypress/fixtures/userData/ElectricBill.json').then((user)=>{
        let Id = data.text()
        user.EBPID = Id 
        cy.writeFile('cypress/fixtures/userData/ElectricBill.json',user)
        })
      })
      cy.wait(2000)
      ElectricityPage.getSuccessMessage().contains('Payment successful')
      ElectricityPage.getautopaystatement().contains('Auto-Pay')
      ElectricityPage.gettransactiondetails().should('exist')
      ElectricityPage.gettransactiondetails().invoke('val').then((value)=>{
        if(value = customerid)
        {
            cy.log(value)
        }
      })

      ElectricityPage.getcheckautopay().contains('Payment Enabled')
      
})
Then('Check View History',function(){
    ElectricityPage.getViewHistory().eq(1).click({force:true})
    ElectricityPage.getwalletstatment().contains('Wallet Statement')
 })

 Then('Select Board Name and submit withougiving all details',function(){
    
    WelcomePage.getElectricityBill().click({force:true})
    ElectricityPage.getBoardName().click({force:true})
    //ElectricityPage.getElectricBillAmount().should()
    
    ElectricityPage.getBoardNameselect().click({force:true})
    ElectricityPage.getCustomerId().type('23456')
    ElectricityPage.getProceedButton().should('be.enabled').click({force:true})
    ElectricityPage.getElectricBillAmount().should('exist').invoke('val').then((value)=>{
             cy.log(value)
        })
     ElectricityPage.getcard().should('be.visible').click({force:true})
     ElectricityPage.getsavecarddetails().should('be.visible')
     ElectricityPage.getnewcard().should('be.visible').click({force:true})
     ElectricityPage.getBoardName().click({force:true})
     ElectricityPage.getBoardNameselect().click({force:true})
     ElectricityPage.getcardnumber().type(Cypress.env('CardNumber'))
    //  ElectricityPage.getcardHolderName().type('XXXX')
    //  ElectricityPage.getexpirydate().type('05/28')
    //  ElectricityPage.getcardHolderNickName().type('test')
     //ElectricityPage.getsavecard().click({force:true})
     ElectricityPage.getcontinuepayment().should('be.disabled')

    //  ElectricityPage.getProceedButton1().click({force:true})
    
    
})

And('Enter Pin and Verify the electric bill transaction for french language',function(){
    ElectricityPage.getPin().clear().type('1357')
    ElectricityPage.gethoverPin().trigger('mouseover')

   //  cy.intercept('/consumerportalui/mobiquitypay/v1/order/billpay').as('getEBP')
   //  cy.wait(3000)
   //  ElectricityPage.getVerifyButton().click({force:true})
    //cy.wait(3000)
    if(Cypress.env('TransactionOTP')=='Yes'){
    cy.intercept('/consumerportalui/mobiquitypay/v1/order/billpay').as('getEBP1')
    cy.wait(3000)
    ElectricityPage.getVerifyButton().click({force:true})
    cy.getElectricBillApproval1()
    }
    else{
        cy.intercept('/consumerportalui/mobiquitypay/v1/order/billpay').as('getEBP')
       // APIPage.getVerifyOtp().click()
    cy.wait(3000)
    ElectricityPage.getVerifyButton().click({force:true})
    cy.wait(2000)
        cy.getElectricBillApproval()     

    }
    ElectricityPage.getTransactionId().then((data)=>{
       cy.readFile('cypress/fixtures/userData/ElectricBill.json').then((user)=>{
       let Id = data.text()
       user.EBPID = Id 
       cy.writeFile('cypress/fixtures/userData/ElectricBill.json',user)
       })
     })
     cy.wait(2000)
     ElectricityPage.getSuccessMessage().contains('Paiement réussi')    
     ElectricityPage.getdone().click({force:true})
})