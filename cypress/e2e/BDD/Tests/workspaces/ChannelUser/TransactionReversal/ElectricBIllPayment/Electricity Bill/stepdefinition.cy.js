/// <reference types= "Cypress" />
// <reference types= "Cypress-iframe" />

//import 'cypress-iframe'
import { Given, When, Then, And, Before } from "@badeball/cypress-cucumber-preprocessor";
import "../../../../../../../../support/Utils/generic"
import LoginPage from "../../../../../../../../support/pageObjects/ConsumerPortalUserLogin/LoginPage";
import HomePage from "../../../../../../../../support/pageObjects/ConsumerPortalHomePage/HomePage";
import ElectricityBillPayment from "../../../../../../../../support/pageObjects/Consumer ElectricityBillPayment/ElectricityBillPayment";
//import ElectricityBillPayment from "../../../../../support/pageObjects/Consumer ElectricityBillPayment/ElectricityBillPayment";
import API from "../../../../../../../../support/pageObjects/API";
import PricingEnginePage from '../../../../../../../../support/pageObjects/PricingEngine/PricingEnginePage';

const UserLoginPage = new LoginPage()
const WelcomePage = new HomePage()
const ElectricityPage = new ElectricityBillPayment()
const APIPage = new API()
const pricingEnginePage = new PricingEnginePage()

//------------------------------------------------------------------------------------

And('Get BillPayment TransactionId1',function(){
    ElectricityPage.getTransactionId().then((data)=>{
        cy.readFile('cypress/fixtures/userData/ElectricBill.json').then((user)=>{
        let Id = data.text()
        user.EBPID = Id 
        cy.writeFile('cypress/fixtures/userData/ElectricBill.json',user)
        })
      })
      cy.wait(2000)
      ElectricityPage.getSuccessMessage().contains('Payment successful')
})
And('Get BillPayment TransactionId2',function(){
    ElectricityPage.getTransactionId().then((data)=>{
        cy.readFile('cypress/fixtures/userData/ElectricBill.json').then((user)=>{
        let Id = data.text()
        user.EBPID = Id 
        cy.writeFile('cypress/fixtures/userData/ElectricBill.json',user)
        })
      })
      cy.wait(2000)
      ElectricityPage.getSuccessMessage().contains('Payment successful')
})
And('Get BillPayment TransactionId3',function(){
    ElectricityPage.getTransactionId().then((data)=>{
        cy.readFile('cypress/fixtures/userData/ElectricBill.json').then((user)=>{
        let Id = data.text()
        user.EBPID = Id 
        cy.writeFile('cypress/fixtures/userData/ElectricBill.json',user)
        })
      })
      cy.wait(2000)
      ElectricityPage.getSuccessMessage().contains('Payment successful')
})
And('Get BillPayment TransactionId4',function(){
    ElectricityPage.getTransactionId().then((data)=>{
        cy.readFile('cypress/fixtures/userData/ElectricBill.json').then((user)=>{
        let Id = data.text()
        user.EBPID = Id 
        cy.writeFile('cypress/fixtures/userData/ElectricBill.json',user)
        })
      })
      cy.wait(2000)
      ElectricityPage.getSuccessMessage().contains('Payment successful')
})

//---------------------------------------------------------------------------------
And('Click on Bill Payment',function(){
  cy.intercept('/shulka/referenceData*').as('PricingEngine')
  pricingEnginePage.getBillPayment().click()
  cy.wait('@PricingEngine', {timeout:40000})
  cy.wait(2000)
})
