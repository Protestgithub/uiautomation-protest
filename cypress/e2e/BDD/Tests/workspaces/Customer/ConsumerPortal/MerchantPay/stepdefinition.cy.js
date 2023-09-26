/// <reference types= "Cypress" />
// <reference types= "Cypress-iframe" />

//import 'cypress-iframe'
import { Given, When, Then, And, Before } from "@badeball/cypress-cucumber-preprocessor";
import "../../../../../../../support/Utils/generic"
import LoginPage from "../../../../../../../support/pageObjects/ConsumerPortalUserLogin/LoginPage";
import HomePage from "../../../../../../../support/pageObjects/ConsumerPortalHomePage/HomePage";
import MerchentPay from "../../../../../../../support/pageObjects/ConsumerPortalMerchantPay/MerchantPay";

//import { random } from "cypress/types/lodash";
// before(function(){
//     cy.fixture('MerchantPaydata').then(function(data){
// this.data=data
//     })
// })
    


const UserLoginPage = new LoginPage()
const WelcomePage = new HomePage()
const PayMerchant = new MerchentPay()
var MerchantPaydata = 'cypress/fixtures/ConsumerPortal/Merchant.json'
var mobile
const amount1=1
const uuid1 = () => Cypress._.random(1e1)
amount = uuid1()
const uuid2 = () => Cypress._.random(1e1)
pin = "@"+uuid2()
const uuid3 = () => Cypress._.random(1e35)
remark = uuid3()
before(()=>{
        cy.fixture('ConsumerPortal/Merchant').then(function(data){
    this.data=data;
        })
    })
        
export function verify(){
    PayMerchant.getReviewConfirmPage().contains('Review & Confirm')
           PayMerchant.getPinField().clear().type('1357')
            PayMerchant.getViewPin().invoke('show').should('be.visible')
            cy.wait(4000)
            PayMerchant.getVerifyBtn().click({force:true})
   
  }
  //----------------BDD Hooks-----------------------------------------------------------------
Given('Login into Consumer Portal as Customer', function(){
    cy.visit(Cypress.env('Adminurl')+"/consumerportalui/#/home")
  cy.wait(2000)
  cy.get('html').then(($ele) => {
    cy.log($ele)
    if ($ele.find('[class="login-btn"]').length > 0) {
        UserLoginPage.getloginBtn().click()
    } else {
        UserLoginPage.getProfile().click()
        UserLoginPage.getLogoutButton().click()
        UserLoginPage.getloginBtn().click()
    }
})

  cy.readFile('cypress/fixtures/userData/subscriberReg.json').then((data)=>{
    let Number = data.subscriberMobile
    cy.wait(3000)
    UserLoginPage.getMobileNumber().type(Number)
  })
  cy.readFile('cypress/fixtures/userData/subscriberReg.json').then((data1)=>{
    let Pin = data1.password
  UserLoginPage.getPIN().type(Pin)})
  cy.intercept('/consumerportalui/mobiquitypay/ums/v3/user/auth/web/login').as('login')
  UserLoginPage.getloginBtn1().click({force:true})
  cy.wait('@login',{timeout:30000})
})

  
When('Click on pay Mearchent And Fill all the details', function(){
    cy.wait(4000) 
    WelcomePage.getMerchentPay().click({force:true}) 
    PayMerchant.getMobileNumber().type('@1355qwe')  
    PayMerchant.getMobileNumber().clear().type(this.data.MerchantNum)
    PayMerchant.getAmount().clear().type('qwer')
    PayMerchant.getAmountError().contains('Incorrect amount entered')
    PayMerchant.getAmount().clear().type(amount1)
    PayMerchant.getRemarks().type(remark)
    cy.wait(4000)
    //PayMerchant.getRemarksCount().should('have.attr','maxlength','30')
    PayMerchant.getCurrency().should('exist').invoke('text').then((value)=>{
        let CurrencyName = value  //.text()
        cy.log(CurrencyName)
        cy.readFile(MerchantPaydata).then((data)=>{
            data.Currency = CurrencyName
            cy.writeFile(MerchantPaydata, data)
        })
    })
    //PayMerchant.getSelectATM().click({force:true})
    //PayMerchant.getNormalWallet().should('be.visible')
    PayMerchant.getSelectWallet().click({force:true})
    PayMerchant.getProceedBtn().should('be.enabled').click({force:true})
    })
   
    And('Enter the Pin and verify',function(){
        PayMerchant.getReviewConfirmPage().contains('Review & Confirm')
        PayMerchant.getcrossIcon().click({force:true})
        PayMerchant.getNO_Button().click({force:true})   
        cy.wait(4000)
        PayMerchant.getPinField().clear().type(pin)
        PayMerchant.getPinErrorMessage().should('have.text',this.data.PinErrorMessage)
        PayMerchant.getViewPin().invoke('show').should('be.visible')
        cy.wait(4000)
        cy.get('[data-test-id="review-and-confirm-verify-button"]')
    .invoke('attr', 'disabled')
    .then(disabled =>{
        disabled ? verify() :PayMerchant.getVerifyBtn().click({force:true})
    })
        // cy.get('[data-test-id="review-and-confirm-verify-button"]').then(($btn) => {
        //     if ($btn.is(':disabled')) {
        //         cy.wait(4000)
        //         PayMerchant.getReviewConfirmPage().contains('Review & Confirm')
        //       //cy.wrap($btn).click() //Click on the next page button
        //     } else {
        //         cy.log('enabled')
        //         PayMerchant.getReviewConfirmPage().contains('Review & Confirm')
        //            PayMerchant.getPinField().clear().type('1357')
        //              PayMerchant.getViewPin().invoke('show').should('be.visible')
        //             // cy.wait(4000)
        //             //PayMerchant.getVerifyBtn().click({force:true})
        //         cy.wrap($btn).click()
        //       //Do something when the button is disabled
           // }
         // })
    //      if(PayMerchant.getVerifyBtn().should ('be.enabled'))
    //      {
    //          PayMerchant.getVerifyBtn().click({force:true})
    //          PayMerchant.getDoneBtn().click({force:true})
    //      }
    //      else{
    //         PayMerchant.getReviewConfirmPage().contains('Review & Confirm')
    //        PayMerchant.getPinField().clear().type('1357')
    //         PayMerchant.getViewPin().invoke('show').should('be.visible')
    //         cy.wait(4000)
    //         PayMerchant.getVerifyBtn().click({force:true})
            
    //     }
    //         PayMerchant.getHistory().click({force:true})
    //         PayMerchant.getOrderDetail().click({force:true})    
     })
     And('Enter the Pin and verify transactions', function() {
        PayMerchant.getReviewConfirmPage().contains('Review & Confirm')
        PayMerchant.getPinField().clear().type('1357')
        cy.intercept('/consumerportalui/mobiquitypay/v1/order/merchantpay').as('getRecharge')
        cy.intercept('/consumerportalui/mobiquitypay/serviceRequest/resume/any').as('getResume')
        if(PayMerchant.getVerifyBtn().should('be.visible')){
            PayMerchant.getVerifyBtn().click({force:true})
    }else{
        PayMerchant.getReviewConfirmPage().contains('Review & Confirm')
        PayMerchant.getPinField().clear().type('1357')
            PayMerchant.getVerifyBtn().click({force:true})
    }
        // cy.intercept('/mobiquitypay/v2/otp/generate').as('all')
        // cy.OTP(Cypress.env('apiBaseURL'))
        // cy.checkAPI('/mobiquitypay/v2/otp/generate')
        // cy.wait(2000)
        cy.getRCApproval()
    })
    Then('click on Done Button',function(){
        cy.wait(4000)
        PayMerchant.getDoneBtn().click({force:true})
    })

    And('Enter remarks',function(){
        const uuid1 = () => Cypress._.random(1e30)
        const remark = uuid1()
        PayMerchant.getRemarks().type(remark)
        PayMerchant.getRemarksCount().should('have.value','30/30')
    })
    Then('click on Payament History and order detail',function(){
        PayMerchant.getHistory().click({force:true})
        PayMerchant.getOrderDetail().click({force:true}) 
    }) 
    And('change Language French',function(){
        WelcomePage.getLanguage().click()
        WelcomePage.getSelectLanguage().click()
    })
    Then('Add and Remove favorite',function(){
        PayMerchant.getFavourites().click()
    })
    And('Asserting the paymet sheet',function(){
        PayMerchant.getReviewConfirmPage().contains('Review & Confirm')
        cy.wait(2000)
        PayMerchant.getAssertFields().eq(0).should('contain','AMOUNT')
        PayMerchant.getAssertFields1().eq(0).should('contain','SERVICE CHARGE')
        PayMerchant.getAssertFields1().eq(1).should('contain','TAX ON SERVICE CHARGE')
        PayMerchant.getAssertFields1().eq(2).should('contain','COMMISSION')
        PayMerchant.getAssertFields1().eq(3).should('contain','Tax On Commission')
        PayMerchant.getAssertFields1().eq(4).should('contain','Taxes')
    })