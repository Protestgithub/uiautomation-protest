
// /// <reference types="Cypress" />
// /// <reference types = "Cypress-iframe"/>

// //----------------Imports---------------------------------------------------------------------
// import { And, Given, Then, When } from "@badeball/cypress-cucumber-preprocessor";
// import 'cypress-iframe';
// import AutoTransfer from "../../../../../support/pageObjects/AutoTransfer/AutoTransfer";
// import AutoTransfer from '../../../../../support/pageObjects/AutoTransfer/AutoTransfer';
// import homePage from "../../../../../support/pageObjects/homePage";

// //----------------Object Declaration-----------------------------------------------------------

// const AutotransferBankPage = new AutotransferBank()
// const welcomePage = new homePage()



// When('Navigate to Banking Services And click on Auto Transfer to Bank',()=>{
//     cy.wait(3000)
//     welcomePage.getBankingServicesLink().click()
//     welcomePage.getAutotransfer().click()
//     cy.wait(3000)
// })

// And('click on Setup Button',()=>{
//     cy.wait(5000)
//     AutotransferBankPage.getSetupbtn().click({ multiple: true })
// })

// And('Assert the Start Date,Repeat,Time,Cancel Button and Next Button',()=>{
//     cy.wait(3000)
//     AutotransferBankPage.getStartDate().eq(0).contains('Start Date')
//     AutotransferBankPage.getRepeat().eq(1).contains('Repeat')
//     AutotransferBankPage.getTime().eq(2).contains('Time')
    
// })

// And('Enter the information in Frequency page',()=>{
//     cy.wait(3000)
//    AutotransferBankPage.getStart().click({ multiple: true })

//   //click the date picker
//   cy.get('#calender').click();
//   //choose previous month
//   cy.contains('Prev').click();
//   //choose next month 
//   cy.contains('Next').click();
//   //choose date 30
//   cy.contains('30').click();


    
//     AutotransferBankPage.getRepeatOption().select('Daily')
//     AutotransferBankPage.getTimeoption().eq(0).type(1)
//     AutotransferBankPage.getTimeoption().eq(1).type(30)

// })

// And('click on Next Button',()=>{
//     cy.wait(3000)
//     AutotransferBankPage.getNextButton().click()
// })

// And('Assert Currency,Auto Sweep To And From',()=>{
//     cy.wait(3000)
//     AutotransferBankPage.getCurrencyOption().eq(0).contains('Currency')
//     AutotransferBankPage.getAutoSweepToOption().eq(1).contains('Auto Sweep To')
//     AutotransferBankPage.getFromOption().eq(2).contains('From')
// })