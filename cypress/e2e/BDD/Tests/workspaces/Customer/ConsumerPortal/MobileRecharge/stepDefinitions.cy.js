/// <reference types= "Cypress" />
import { Given, When, Then, And, Before } from "@badeball/cypress-cucumber-preprocessor";
import "../../../../../../../support/Utils/generic"
import LoginPage from "../../../../../../../support/pageObjects/ConsumerPortalUserLogin/LoginPage";
import HomePage from "../../../../../../../support/pageObjects/ConsumerPortalHomePage/HomePage";
import MobileRecharge from "../../../../../../../support/pageObjects/ConsumerPortalMobileRecharge/MobileRecharge";
//----------------------------------------------------------------
const UserLoginPage = new LoginPage()
const WelcomePage = new HomePage()
const MobileRechargePage = new MobileRecharge()

//----------------------------------------------------------------
var MobileRechargedata = 'cypress/fixtures/userData/MobileRecharge.json'
var mobile
const uuid = () => Cypress._.random(1e8)
mobile = "77" + uuid()
//---------------------------------------------------------------------------------------
When('Check whether Mobile Recharge is visible or not', function(){
    MobileRechargePage.getViewMoreBtn().click({force:true})
    cy.wait(2000)
    WelcomePage.getWelcomeUserName().should('exist')
    if(WelcomePage.getMobileRecharge().should('be.visible')){
        cy.log('User has Authority for Mobile Recharge')
    }else{
        cy.log('User has no Authority for Mobile Recharge')
    }
})
And('Click on Mobile Recharge',function(){
    cy.wait(2000)
    MobileRechargePage.getViewMoreBtn().click({force:true})
    cy.wait(2000)
    WelcomePage.getMobileRecharge().click({force:true})
    cy.wait(3000)
})
And('Fill all the details for Mobile Recharge and proceed',function(){
    cy.readFile('cypress/fixtures/userData/subscriberReg.json').then((data)=>{
        let Number = data.subscriberMobile
    MobileRechargePage.getMobileNo().clear().type(mobile)
    })
    MobileRechargePage.getOperatorDropdown().click({force:true})
    MobileRechargePage.getOperator().eq(0).click({force:true})
    MobileRechargePage.getAmount().clear().type('5')
    MobileRechargePage.getCurrency().should('exist').invoke('text').then((value)=>{
        let CurrencyName = value  //.text()
        cy.log(CurrencyName)
        cy.readFile(MobileRechargedata).then((data)=>{
            data.Currency = CurrencyName
            cy.writeFile(MobileRechargedata, data)
        })
    })
    
    MobileRechargePage.getNormalWallet().should('be.visible')
    MobileRechargePage.getSelectWallet().click({force:true})
    MobileRechargePage.getProceedBtn().should('be.enabled').click({force:true})
})
And('Enter the Pin and verify transaction', function() {
    MobileRechargePage.getReviewConfirmPage().contains('Review & Confirm')
    MobileRechargePage.getPinField().clear().type('1357')
    cy.intercept('/consumerportalui/mobiquitypay/v1/order/recharge_others').as('getRecharge')
    cy.intercept('/consumerportalui/mobiquitypay/serviceRequest/resume/any').as('getResume')
    if(MobileRechargePage.getVerifyBtn().should('be.visible')){
        MobileRechargePage.getVerifyBtn().click({force:true})
        
    }else{
        MobileRechargePage.getReviewConfirmPage().contains('Review & Confirm')
        MobileRechargePage.getPinField().clear().type('1357')
        MobileRechargePage.getVerifyBtn().click({force:true})
    }
    cy.getRCApproval()
})
And('Assert the transaction successfully page', function() {
MobileRechargePage.getSuccessMsgField().click()
cy.wait(3000)
})
Then('Click on Done Button', function() {
    MobileRechargePage.getDoneBtn().click()
    cy.wait(1000)
})
And('Fill all the details for Mobile Recharge',function(){
    
    cy.readFile('cypress/fixtures/userData/subscriberReg.json').then((data)=>{
        let Number = data.subscriberMobile
    MobileRechargePage.getMobileNo().clear().type(Number)
    })
    MobileRechargePage.getOperatorDropdown().click({force:true})
    MobileRechargePage.getOperator().eq(0).click({force:true})
})
    And('Choose any Browse Plans to update the amount',function(){  
    MobileRechargePage.getBrowsePlans().click({force:true})
    MobileRechargePage.getPricePlan().click({force:true})
    MobileRechargePage.getCurrencyUSD().should('exist').invoke('text').then((value)=>{
        let CurrencyName = value  //.text()
        cy.log(CurrencyName)
        cy.readFile(MobileRechargedata).then((data)=>{
            data.Currency = CurrencyName
            cy.writeFile(MobileRechargedata, data)
        })
    })
    
    MobileRechargePage.getNormalWallet().should('be.visible')
    MobileRechargePage.getSelectWallet().click({force:true})
    MobileRechargePage.getProceedBtn().should('be.enabled').click({force:true})
})
And('Fill all the details till amount for Mobile Recharge',function(){
    
    cy.readFile('cypress/fixtures/userData/subscriberReg.json').then((data)=>{
        let Number = data.subscriberMobile
        MobileRechargePage.getMobileNo().clear().type(Number)
    })
    MobileRechargePage.getOperatorDropdown().click({force:true})
    MobileRechargePage.getOperator().eq(0).click({force:true})
    MobileRechargePage.getAmount().clear().type('5')
    MobileRechargePage.getCurrency().should('exist').invoke('text').then((value)=>{
        let CurrencyName = value  //.text()
        cy.log(CurrencyName)
        cy.readFile(MobileRechargedata).then((data)=>{
            data.Currency = CurrencyName
            cy.writeFile(MobileRechargedata, data)
        })
    })
})
    
And('Select Bank Account as payment mode and proceed',function(){
    MobileRechargePage.getSelectBankAccount().click({force:true})
    MobileRechargePage.getTB101Bank().click({force:true})
    MobileRechargePage.getProceedBtn().should('be.enabled').click({force:true})
})
And('Select Debit/credit card as payment mode and proceed',function(){
    MobileRechargePage.getSelectCard().click({force:true})
    MobileRechargePage.getVisaCard().click({force:true})
    MobileRechargePage.getProceedBtn().should('be.enabled').click({force:true})
})
And('Click on View history', function(){
    MobileRechargePage.getViewHistory().click()({force:true})
    cy.wait(2000)
})
And('Click on Download Receipt', function(){
    MobileRechargePage.getDownloadReceipt().click({force:true})
    cy.wait(2000)
})
And('Copy the TransactionID', function(){
    MobileRechargePage.getCopyTransactionId.click({force:true})
    cy.wait(1000)
    MobileRechargePage.getClickToCopyTransactionId.click({force:true})
})
And('And Click on Recents and proceed', function(){
    MobileRechargePage.getRecentsBtn().click()({force:true})
    cy.wait(3000)
    MobileRechargePage.getNormalWallet().should('be.visible')
    MobileRechargePage.getSelectWallet().click({force:true})
    MobileRechargePage.getProceedBtn().should('be.enabled').click({force:true})
})
And('Enter mobile number less than 10 digits & fill other details and proceed' , function(){
    MobileRechargePage.getMobileNo().clear().type('77879595')
    MobileRechargePage.getOperatorDropdown().click({force:true})
    MobileRechargePage.getOperator().eq(0).click({force:true})
    MobileRechargePage.getAmount().clear().type('5')
    MobileRechargePage.getCurrency().should('exist').invoke('text').then((value)=>{
        let CurrencyName = value  //.text()
        cy.log(CurrencyName)
        cy.readFile(MobileRechargedata).then((data)=>{
            data.Currency = CurrencyName
            cy.writeFile(MobileRechargedata, data)
        })
    })
    
    MobileRechargePage.getNormalWallet().should('be.visible')
    MobileRechargePage.getSelectWallet().click({force:true})
    MobileRechargePage.getProceedBtn().should('be.enabled').click({force:true})
})
And('Assert the error message', function(){
    MobileRechargePage.getErrorMsgMobileNo().click({force:true})
}) 
And('Click on cross on Review & Confirm page', function(){
    MobileRechargePage.getCrossReviewConfirmPage().click({force:true})
})
And('Click on Yes', function(){
    MobileRechargePage.getYesButton().click({force:true})
})
And('Click on No', function(){
    MobileRechargePage.getNoButton().click({force:true})
})

//-----------------------------------------------
And('Enter the Pin and verify transaction for Bank instrument', function() {
    MobileRechargePage.getReviewConfirmPage().contains('Review & Confirm')
    MobileRechargePage.getPinField().clear().type('1357')
    cy.intercept('/consumerportalui/mobiquitypay/v1/order/recharge_others').as('getRecharge')
    cy.intercept('/consumerportalui/mobiquitypay/serviceRequest/resume/any').as('getResume')
    if(MobileRechargePage.getVerifyBtn().should('be.visible')){
        MobileRechargePage.getVerifyBtn().click({force:true})
        
    }else{
        MobileRechargePage.getReviewConfirmPage().contains('Review & Confirm')
        MobileRechargePage.getPinField().clear().type('1357')
        MobileRechargePage.getVerifyBtn().click({force:true})
    }
    cy.getRCApprovalForBank()
})
