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
import PricingEnginePage from '../../../../../../../../support/pageObjects/PricingEngine/PricingEnginePage';
import MobileRecharge from "../../../../../../../../support/pageObjects/ConsumerPortalMobileRecharge/MobileRecharge";

//----------------Object Declaration-----------------------------------------------------------------
const pageLogin = new loginPage()
const manageUsersPage = new manageUsers()
const welcomePage = new homePage()
const W2B = new W2BandB2W()
const pricingEnginePage = new PricingEnginePage()
const MobileRechargePage = new MobileRecharge()


const uuid = () => Cypress._.random(1e1)
Amount = uuid()
let Amount
var MobileRechargedata = 'cypress/fixtures/userData/MobileRecharge.json'

const BulkFulfillmentReversal ='cypress/fixtures/templates/BULK_FULFILLMENT_REVERSAL_AMBIGUOUS_SETTLEMENT-template.csv'
const BulkFulfillmentReversaljson = 'cypress/fixtures/BulkData/BULK_FULFILLMENT_REVERSAL_AMBIGUOUS_SETTLEMENT-template.json'
const W2BBulkFulfillmentReversal = 'templates/BULK_FULFILLMENT_REVERSAL_AMBIGUOUS_SETTLEMENT-template.csv'

const BulkPaymentReversal ='cypress/fixtures/templates/BULK_PAYMENT_REVERSAL_AMBIGUOUS_SETTLEMENT-template.csv'
const BulkPaymentReversaljson = 'cypress/fixtures/BulkData/BULK_PAYMENT_REVERSAL_AMBIGUOUS_SETTLEMENT-template.json'
const W2BBulkPaymentReversal = 'templates/BULK_PAYMENT_REVERSAL_AMBIGUOUS_SETTLEMENT-template.csv'


function getRandomNumber() {
  name = "";
  var possible = "56789";
  for (var i = 0; i < 1; i++)
    name += possible.charAt(Math.floor(Math.random() * possible.length));
  return name;
}

//-----------------------------------------------------
And('Fill all the details for Mobile Recharge-Self and proceed',function(){
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
  
  MobileRechargePage.getNormalWallet().should('be.visible')
  MobileRechargePage.getSelectWallet().click({force:true})
  MobileRechargePage.getProceedBtn().should('be.enabled').click({force:true})
})
And('Enter the Pin and verify transaction for Recharge-Self', function() {
  MobileRechargePage.getReviewConfirmPage().contains('Review & Confirm')
  MobileRechargePage.getPinField().clear().type('1357')
  cy.intercept('/consumerportalui/mobiquitypay/v1/order/recharge').as('getRecharge')
  cy.intercept('/consumerportalui/mobiquitypay/serviceRequest/resume/any').as('getResume')
  if(MobileRechargePage.getVerifyBtn().should('be.visible')){
      MobileRechargePage.getVerifyBtn().click({force:true})
      
  }else{
      MobileRechargePage.getReviewConfirmPage().contains('Review & Confirm')
      MobileRechargePage.getPinField().clear().type('1357')
      MobileRechargePage.getVerifyBtn().click({force:true})
  }
  cy.getRCApprovalSelf()
})
//----------------------------------------------------------------------------------
And('Click on Recharge-Self',function(){
  cy.intercept('/shulka/referenceData*').as('PricingEngine')
  pricingEnginePage.getRechargeSelf().click()
  cy.wait('@PricingEngine', {timeout:40000})
  cy.wait(2000)
})
