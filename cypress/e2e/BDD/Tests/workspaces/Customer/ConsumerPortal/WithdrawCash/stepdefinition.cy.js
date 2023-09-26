/// <reference types= "Cypress" />
// <reference types= "Cypress-iframe" />

//import 'cypress-iframe'
import { Given, When, Then, And, Before } from "@badeball/cypress-cucumber-preprocessor";
import "../../../../../../../support/Utils/generic"
import LoginPage from "../../../../../../../support/pageObjects/ConsumerPortalUserLogin/LoginPage";
import HomePage from "../../../../../../../support/pageObjects/ConsumerPortalHomePage/HomePage";
import WithdrawCash from "../../../../../../../support/pageObjects/ConsumerPortalWithdrawCash/WithdrawCash";
import MerchentPay from "../../../../../../../support/pageObjects/ConsumerPortalMerchantPay/MerchantPay";

const UserLoginPage = new LoginPage()
const WelcomePage = new HomePage()
const WithdrawCashPage = new WithdrawCash()
const PayMerchant = new MerchentPay()
var WithdrawCashdata = 'cypress/fixtures/ConsumerPortal/WithdrawCash.json'
var mobile
const uuid = () => Cypress._.random(1e8)
mobile = "77" + uuid()


//---------------------------------------------------------------------------------------

// Given('Login into Consumer Portal as Customer', function(){
//     cy.visit(Cypress.env('Adminurl')+"/consumerportalui/#/home")
//   cy.wait(2000)
//   cy.get('html').then(($ele) => {
//     cy.log($ele)
//     if ($ele.find('[class="login-btn"]').length > 0) {
//         UserLoginPage.getloginBtn().click()
//     } else {
//         UserLoginPage.getProfile().click()
//         UserLoginPage.getLogoutButton().click()
//         UserLoginPage.getloginBtn().click()
//     }
// })

//   cy.readFile('cypress/fixtures/userData/subscriberReg.json').then((data)=>{
//     let Number = data.subscriberMobile
//     cy.wait(3000)
//     UserLoginPage.getMobileNumber().type(Number)
//   })
//   cy.readFile('cypress/fixtures/userData/subscriberReg.json').then((data1)=>{
//     let Pin = data1.password
//   UserLoginPage.getPIN().type(Pin)})
//   cy.intercept('/consumerportalui/mobiquitypay/ums/v3/user/auth/web/login').as('login')
//   UserLoginPage.getloginBtn1().click({force:true})
//   cy.wait('@login',{timeout:30000})
// })



Then('Logout from portal', function(){
    WelcomePage.getDropDown().click({force:true})
    //wait
    WelcomePage.getLogout().click({force:true})
    //wait
})


When('Check whether Withdraw cash is visible or not', function(){

    WelcomePage.getWelcomeUserName().should('exist')
    if(WelcomePage.getWithdrawCash().should('exist')){
        cy.log('User has Authority for Withdraw Cash')
    }else{
        cy.log('User has no Authority for Withdraw Cash')
    }
})

And('Click on Withdraw cash',function(){

    WelcomePage.getWithdrawCash().click({force:true})
    cy.wait(3000)

})

And('Fill all the details for withdraw cash and proceed',function(){
    
    WithdrawCashPage.getAgentRadioBtn().should('be.checked')
    WithdrawCashPage.getMobileNoAndReceiverCode().clear().type('7772794587')
    WithdrawCashPage.getAmount().clear().type('1')
    WithdrawCashPage.getCurrency().should('exist').invoke('text').then((value)=>{
        let CurrencyName = value  //.text()
        cy.log(CurrencyName)
        cy.readFile(WithdrawCashdata).then((data)=>{
            data.Currency = CurrencyName
            cy.writeFile(WithdrawCashdata, data)
        })
    })
    
    //WithdrawCashPage.getNormalWallet().should('be.visible')
    WithdrawCashPage.getSelectWallet().click({force:true})
    WithdrawCashPage.getProceedBtn().should('be.enabled').click({force:true})
})

// And('Enter the Pin and verify transaction', function() {
//     WithdrawCashPage.getReviewConfirmPage().contains('Review & Confirm')
//     WithdrawCashPage.getPinField().clear().type('1357')
//     if(WithdrawCashPage.getVerifyBtn().should('be.visible')){
//         WithdrawCashPage.getVerifyBtn().click({force:true})
//     }else{
//         WithdrawCashPage.getReviewConfirmPage().contains('Review & Confirm')
//         WithdrawCashPage.getPinField().clear().type('1357')
//         WithdrawCashPage.getVerifyBtn().click({force:true})
//     }


    // cy.intercept('/mobiquitypay/v2/otp/generate').as('all')
    // cy.OTP(Cypress.env('apiBaseURL'))
    // cy.checkAPI('/mobiquitypay/v2/otp/generate')
    // cy.wait(2000)
//})


And('Check by default Agent is checked', function() {

    WithdrawCashPage.getAgentRadioBtn().should('be.checked')
})


And('Enter numerical Mobile number in mobile number/receiver code field', function() {

    WithdrawCashPage.getMobileNoAndReceiverCode().clear().type(mobile)
    if(WithdrawCashPage.getFieldError().eq(0).should('be.visible').and('have.value','unavailable')){
        
    }
})

And('Enter alpha numerical receiver code in mobile number/receiver code field',function() {

    WithdrawCashPage.getMobileNoAndReceiverCode().clear().type('vh2ffae')
    WithdrawCashPage.getMobileNoAndReceiverCode().clear().type('AGENT7774112781')
    WithdrawCashPage.getMobileNoAndReceiverCode().clear().type('AEAD0337847244789208095')
})

And('Enter Special character and character assert error field',function() {

    WithdrawCashPage.getMobileNoAndReceiverCode().clear().type('vh@#ffae') //wrong
    WithdrawCashPage.getMobileNoAndReceiverCode().clear().type('vhhjffae') //wrong
    if(WithdrawCashPage.getFieldError().eq(0).should('be.visible')){
        WithdrawCashPage.getFieldError().eq(0).contains('Mobile number/ Reciever Code unavailable')
    }else{
        WithdrawCashPage.getMobileNoAndReceiverCode().clear().type('vh2ffae') //correct
    }
})


And('Enter amount in amount field',function(){
    if(WithdrawCashPage.getAmount().clear().type('0')){
        WithdrawCashPage.getFieldError().eq(0).contains('Incorrect amount entered')
    }else if(WithdrawCashPage.getAmount().clear().type('2.357')){
        WithdrawCashPage.getFieldError().eq(0).contains('Incorrect amount entered')
    }else{
        WithdrawCashPage.getAmount().clear().type('2.35')
    }
})


And('Select a different currency',function(){
    WithdrawCashPage.getCurrency().select("INR")
})

And('Enter remarks',function(){
    const uuid1 = () => Cypress._.random(1e30)
    const remark = uuid1()
    WithdrawCashPage.getRemarks().type(remark)
    WithdrawCashPage.getRemarksCount().should('have.value','30/30')
})

And('Check Proceed button is not clickable',function(){
    WithdrawCashPage.getProceedBtn().should('be.disabled')
})

And('Click on ATM button',function(){
    if(WithdrawCashPage.getATMInfoBtn().should('be.disabled')){
        WithdrawCashPage.getATMRadioBtn().click({force:true})
    }else{
        WithdrawCashPage.getATMInfoBtn().should('be.enabled')
        cy.log('ATM is already clicked')
    }
})

And('Click on information icon and assert',function(){
    WithdrawCashPage.getATMInfoBtn().click({force:true})
    WithdrawCashPage.getATMInfoHeading().contains('Withdraw cash ATM')
    WithdrawCashPage.getSelectATMInfoOk().click({force:true})
})