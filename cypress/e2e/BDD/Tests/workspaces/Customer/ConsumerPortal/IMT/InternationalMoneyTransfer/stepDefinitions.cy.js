/// <reference types= "Cypress" />
// <reference types= "Cypress-iframe" />

//import 'cypress-iframe'
import { Given, When, Then, And, Before } from "@badeball/cypress-cucumber-preprocessor";
import "../../../../../../../../support/Utils/generic"
//import LoginPage from "../../../../../support/pageObjects/ConsumerPortalUserLogin/LoginPage";
import LoginPage from "../../../../../../../../support/pageObjects/ConsumerPortalUserLogin/LoginPage";
//import HomePage from "../../../../../support/pageObjects/ConsumerPortalHomePage/HomePage";
import HomePage from "../../../../../../../../support/pageObjects/ConsumerPortalHomePage/HomePage";
import IMT from "../../../../../../../../support/pageObjects/InternationalTransfer/InternationalTransfer";
//import WithdrawCash from "../../../../../support/pageObjects/ConsumerPortalWithdrawCash/WithdrawCash";
//import MobileRecharge from "../../../../../support/pageObjects/MobileRechargeConsumerPortal/MobileRecharge";


const UserLoginPage = new LoginPage()
const WelcomePage = new HomePage()
const InternationalTransferPage = new IMT()
var InternationalTransferdata = 'cypress/fixtures/userData/InternationalTransfer.json'

var mobile
const uuid = () => Cypress._.random(1e8)
mobile = "77" + uuid()
const uuid1 = () => Cypress._.random(1e10)
AccountNumber = uuid1()

//---------------------------------------------------------------------------------------

// Given('Login in Consumer Portal as Customer', function(){
//     cy.visit(Cypress.env('Adminurl')+"/consumerportalui/#/home")

//   cy.wait(2000)

//   cy.get('html').then(($ele) => {

//     cy.log($ele)

//     if ($ele.find('[class="login-btn"]').length > 0) {

//         UserLoginPage.getLoginBtn().click()

//     }
//     else {

//         UserLoginPage.getProfile().click()

//         UserLoginPage.getLogoutButton().click()
//         UserLoginPage.getLoginBtn().click()
//     }

// })

// //  cy.readFile('cypress/fixtures/userData/subscriberReg.json').then((data)=>{

// //     let Number = data.subscriberMobile
//     cy.wait(3000)

//     UserLoginPage.getMobileNumber().type('7775109238')


//   //})

// //   cy.readFile('cypress/fixtures/userData/subscriberReg.json').then((data1)=>{

// //     let Pin = data1.password

//   UserLoginPage.getPin().type('1357')
//   cy.intercept('/consumerportalui/mobiquitypay/v1/currencies').as('getHomepage')
  
// //})

//  // cy.intercept('/consumerportalui/mobiquitypay/ums/v3/user/auth/web/login').as('login')

//   UserLoginPage.getLoginBtn1().click({force:true})

//   cy.get('html').then(($ele) => {
//   cy.log($ele)
//   if ($ele.find('#mat-dialog-1').length > 0) {
//     cy.get('[data-testid="confirm-btn"]').click()

// }
// else {
//     cy.wait('@getHomepage',{timeout:10000})
//      //UserLoginPage.getLoginBtn().click()

//  }
// })


  
//   //cy.wait('@login',{timeout:30000})
// })


// cy.launchConsumerURL(Cypress.env('Adminurl'))
// cy.wait(2000)

// UserLoginPage.getLoginBtn().click({force:true})
// UserLoginPage.getLoginPageText().contains('Login')
// UserLoginPage.getMobileNumber().clear().type('7783773839')
// UserLoginPage.getPin().clear().type('1357')
// //cy.intercept('/CoreWeb/nayapaisa/bulk-api/jigsaw/bulk/status/').as('all')
// UserLoginPage.getLoginBtn1().click({force:true})
// cy.wait(4000)
//cy.wait('@all')
//cy.checkAPI('/CoreWeb/nayapaisa/bulk-api/jigsaw/bulk/status/')


// When('Check whether Mobile Recharge is visible or not', function(){
//     MobileRechargePage.getViewMoreBtn().click({force:true})
//     cy.wait(2000)
//     WelcomePage.getWelcomeUserName().should('exist')
//     if(WelcomePage.getMobileRecharge().should('be.visible')){
//         cy.log('User has Authority for Mobile Recharge')
//     }else{
//         cy.log('User has no Authority for Mobile Recharge')
//     }
// })

And('Click on International Transfer',function(){
    InternationalTransferPage.getViewMore().click({force:true})
    cy.wait(5000)
    WelcomePage.getInternationalTransfer().click({force:true})

    cy.wait(2000)

})

And('Fill amount & select wallet',function(){
    InternationalTransferPage.getSendAmount().clear().type('1')
    //InternationalTransferPage.getReciveAmount().click({force:true})
    // InternationalTransferPage.getCurrency().should('exist').invoke('text').then((value)=>{
    //     let CurrencyName = value  //.text()
    //     cy.log(CurrencyName)
    //     cy.readFile(InternationalTransferdata).then((data)=>{
    //         data.Currency = CurrencyName
    //         cy.writeFile(InternationalTransferdata, data)
    //     })
    // })
    
    InternationalTransferPage.getSelectWallet().click({force:true})
    cy.wait(2000)

})

And('Click on proceed button', function(){
    InternationalTransferPage.getProceedBtn().should('be.enabled').click({force:true})
})

And('Fill all the details for International Transfer and proceed', function(){
    InternationalTransferPage.getFullName().clear().type('ComvivaTest')
    InternationalTransferPage.getAccountNum().clear().type('123456789')
    InternationalTransferPage.getConfirmNum().clear().type('123456789')
    InternationalTransferPage.getSwiftCode().clear().type('ABCDEFGHIJK')
    InternationalTransferPage.getSelectCountry().click({force:true})
    InternationalTransferPage.getSelectIndia().click({force:true})
    cy.wait(2000)
    InternationalTransferPage.getMobileNumber().click().type('7775109238')
    // InternationalTransferPage.getAddressLine1().clear().type('Sec1')
    // InternationalTransferPage.getAddressLine2().clear().type('A1')
    // InternationalTransferPage.getSelectState().click({force:true})
    // InternationalTransferPage.getSelectKA().click({force:true})
    //InternationalTransferPage.getSelectCity().click({force:true})
    // InternationalTransferPage.getEmailId().clear().type('abcd@mail.com')
    InternationalTransferPage.getProcced2().should('be.enabled').click({force:true})

})

And('Enter the Pin to verify txn', function() {
    InternationalTransferPage.getReviewConfirmPage().contains('Review & Confirm')
    InternationalTransferPage.getPIN().clear().type('1357')
    cy.wait(2000)
    InternationalTransferPage.getViewPIN().click({force:true})
    cy.wait(2000)
    cy.intercept('/consumerportalui/mobiquitypay/v1/order/imt').as('getIMT')
    cy.intercept('/consumerportalui/mobiquitypay/serviceRequest/resume/any').as('getResume')
    if(InternationalTransferPage.getVerify().should('be.visible')){
        InternationalTransferPage.getVerify().click({force:true})
        
    }else{
        InternationalTransferPage.getReviewConfirmPage().contains('Review & Confirm')
        InternationalTransferPage.getPIN().clear().type('1357')
        InternationalTransferPage.getVerify().click({force:true})
    }


    // cy.intercept('/mobiquitypay/v2/otp/generate').as('all')
    // cy.OTP(Cypress.env('apiBaseURL'))
    // cy.checkAPI('/mobiquitypay/v2/otp/generate')
    // cy.wait(2000)
    cy.getIMTApproval()
})

    
Then('Click on Done Button1', function() {
        InternationalTransferPage.getDone().click({force:true})
        cy.wait(1000)
    })

And('Click on Add to favourites', function(){
        InternationalTransferPage.getAddFav().click({force:true})
    })


And('Click on View History', function(){
    InternationalTransferPage.getViewHistory().click({force:true})
})

And('Click on Make another transfer', function(){
    InternationalTransferPage.getAnotherTransfer().click({force:true})
})

And('Click on download receipt', function(){
    InternationalTransferPage.getDownloadReceipt().click({force:true})
})

And('Click on Copy TransactionID', function(){
    InternationalTransferPage.getCopy().click({force:true})
    cy.wait(1000)
    InternationalTransferPage.getClickToCopy().click({force:true})
})

And('Click on cross on Review & Confirm page', function(){
    InternationalTransferPage.getCrossIcon().click({force:true})
})

And('Click on Yes button',function(){
    InternationalTransferPage.getYesButton().click({force:true})
})

And('Click on No button',function(){
    InternationalTransferPage.getNoButton().click({force:true})
})