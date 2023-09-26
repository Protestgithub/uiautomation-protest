
//   // <reference types="Cypress" />
// /// <reference types = "Cypress-iframe"/>
// import { Given, And, Then, When } from "@badeball/cypress-cucumber-preprocessor";
// import 'cypress-iframe';

// import W2BandB2W from '../../../../../../../support/pageObjects/W2BandB2W/W2BandB2W';

// //-------Object Decleration--------------------------------------------------------------------------

// const W2B = new W2BandB2W()


// //------PAYMENT settings---------------------------------------------------------------------

// When('Click on slide menu and check it', function () {
//     cy.wait(2000)
//     W2B.getDropdownIcon().click({force:true})
//     cy.wait(2000)
//     W2B.getPaymentMenu().should('be.visible')
//     W2B.getPaymentMenu().click({force:true})
  
//   })
  
//   And('Click on Add Bank Account', function() {
//     cy.wait(2000)
//     W2B.getAddbank().eq(0).click({force:true})
  
   
//   })
  
//   And('Click on Bank Account and ADD it', function(){
//   W2B.getAddAccount().click()
//    W2B.getNumberPlaceholder().type(123456789)
//    W2B.getReEnterNumbr().type(123456789)
//   })
  
//   Then('Assert the Pop-up and click on close', function(){
//   W2B.getAddBtn().click({force:true})
//     W2B.getPopuP().should('be.visible')
//     W2B.getCloseicon().click({force:true})

//     W2B.getAddbank().eq(0).should('be.visible')
//   })
  
//   //------------------------------------------------------------
  
//   When('Navigate to Add Debit Card', function(){
//     W2B.getAddbank().eq(2).click({force:true})
   
//   })
  
//   And('Enter the required Debit Card details and check Add Button is Enabled', function() {
  
//     W2B.getCardnumber().type(4532842541686907)
//     W2B.getName().type('john')
//     W2B.getExpirydate().type(1234)
//     W2B.getCurrency().click()
//   W2B.getSelectCurrency().click()
  
//   })
  
//   Then('Check for the ADD Btn is Enabled', function() {
  
//   cy.waitUntil(()=>{
//     return cy.get('[class="flex justify-center mb-5 mt-8"]').contains(' Add ')
//   })
//   })
  

//   And('Check the Option and Assert it', function() {
//     W2B.getAddbank().eq(0).contains('Add Bank Account')
//     W2B.getAddbank().eq(1).contains('Add Credit Card')
//     W2B.getAddbank().eq(2).contains('Add Debit Card')
//   })