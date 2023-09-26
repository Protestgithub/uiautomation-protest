/// <reference types="Cypress" />
/// <reference types = "Cypress-iframe"/>

//----------------Imports---------------------------------------------------------------------
import { And } from "@badeball/cypress-cucumber-preprocessor";
import 'cypress-iframe';
import homePage from '../../../../../../../../support/pageObjects/homePage'
import loginPage from "../../../../../../../../support/pageObjects/loginPage";
import Reconcilation from "../../../../../../../../support/pageObjects/Reconcilation/Reconcilation";
import "../../../../../../../../support/Utils/generic";


//----------------Object Declaration----------------------------------------------------------

const pageLogin = new loginPage()
const welcomePage = new homePage()
const ReconPage = new Reconcilation()



//---------------------------------------------System Admin Login----------------------------------------------------

And('Click on Reconcilation', function () {
 //   cy.intercept('/CoreWeb/reconciliation*').as('getReconcil')
  welcomePage.getreconcilationpage().click({ force: true })
 // cy.wait('@getReconcil')
    cy.wait(3000)
  ReconPage.getProviderSelect().select("MFS1", { force: true })
  ReconPage.getsubmit().click({ force: true })
 // cy.wait('@getsubmit', { timeout: 30000 })
 cy.wait(2000)
  pageLogin.getiFrame()
  ReconPage.getmismatch().within(function () {
    ReconPage.getmismatchvalue().should("contain", "Mismatch found")
  })

})

And('Select MFS provider, Click on submit button',()=>{

  welcomePage.getreconcilationpage().click({ force: true })
  cy.wait(3000)
  ReconPage.getProviderSelect().select("MFS2", { force: true })
  ReconPage.getsubmit().click({ force: true })
})

And('Check the total amount in the EA account',()=>{

  cy.wait(2000)
    ReconPage.getExpenseAccount().eq(12).contains('Expense Account:')
    ReconPage.getExpenseAccount().eq(13).contains(-185.49)
    cy.wait(2000)
  pageLogin.getiFrame()
  ReconPage.getmismatch().within(function () {
    ReconPage.getmismatchvalue().should("contain", "Mismatch found")
  })
  })




And('Show the balance of all the accounts',()=>{
  cy.wait(3000)
  ReconPage.getIncomeAccount().eq(10).contains('Income Account')
  ReconPage.getIncomeAccount().eq(11).contains(6051.92)
 ReconPage.getOnTheFlyAccount().eq(14).contains('On The Fly Account')
 ReconPage.getOnTheFlyAccount().eq(15).contains(0)
 cy.wait(2000)
 pageLogin.getiFrame()
 ReconPage.getmismatch().within(function () {
   ReconPage.getmismatchvalue().should("contain", "Mismatch found")
 })
  
})



And('admin should not able to view Recounciliation module on web.User other than system admin',()=>{
  welcomePage.getreconcilationpage().should('not.exist');
})



And('Assert the wallet Balances',()=>{
cy.wait(3000)
  ReconPage.getSystemMainWallet().eq(8).contains('System Main Wallet:')
  ReconPage.getSystemMainWallet().eq(9).contains(68481983)
  ReconPage.getInterestWallet().eq(28).contains('Interest Wallet')
  ReconPage.getInterestWallet().eq(29).contains(6000)
  cy.wait(2000)
  pageLogin.getiFrame()
  ReconPage.getmismatch().within(function () {
    ReconPage.getmismatchvalue().should("contain", "Mismatch found")
  })
})

And('Check Subscriber Balance',()=>{
  cy.wait(3000)
  ReconPage.getCustomerBalance().eq(44).contains('Customer Balance')
  ReconPage.getCustomerBalance().eq(45).contains(74868.67)
  cy.wait(2000)
  pageLogin.getiFrame()
  ReconPage.getmismatch().within(function () {
    ReconPage.getmismatchvalue().should("contain", "Mismatch found")
  })
})

And('Check Business User Balance',()=>{
  cy.wait(3000)
  //Cypress.Commands.add('getTransferApproval',(filename) =>
  cy.readFile('cypress/fixtures/userData/Bank&Walletdata.json').then((user)  => {
    let Name = user.BillerandTopUpBalance
    let shouldStop = false
    cy.iframe().find('.wwFormTableC>tbody>tr').each(($row=>{
        cy.then(() => {
            if(shouldStop){
                return
            }
        cy.wrap($row).within(function(){
            cy.get('td').each(($el=>{
                cy.log($el.text())
            
                if($el.text().includes(Name))
                {
                cy.get('[class="tabcol"]').click({multiple: true})    
                 cy.wait(3000)
                shouldStop = true
                }
            }))
        })
    })
  }))
  })

})

And('check the tax on commissions',()=>{
  cy.wait(3000)
  //Cypress.Commands.add('getTransferApproval',(filename) =>
  cy.readFile('cypress/fixtures/userData/Bank&Walletdata.json').then((user)  => {
    let Name1 = user.Taxoncommissions
    let shouldStop = false
    cy.iframe().find('.wwFormTableC>tbody>tr').each(($row=>{
        cy.then(() => {
            if(shouldStop){
                return
            }
        cy.wrap($row).within(function(){
            cy.get('td').each(($el=>{
                cy.log($el.text())
            
                if($el.text().includes(Name1))
                {
                cy.get('[class="tabcol"]').click({multiple: true})    
                 cy.wait(3000)
                shouldStop = true
                }
            }))
        })
    })
  }))
  })

})

And('check the tax on service charges',()=>{
  cy.wait(3000)
  //Cypress.Commands.add('getTransferApproval',(filename) =>
  cy.readFile('cypress/fixtures/userData/Bank&Walletdata.json').then((user)  => {
    let Name2 = user.Taxonservicecharges
    let shouldStop = false
    cy.iframe().find('.wwFormTableC>tbody>tr').each(($row=>{
        cy.then(() => {
            if(shouldStop){
                return
            }
        cy.wrap($row).within(function(){
            cy.get('td').each(($el=>{
                cy.log($el.text())
            
                if($el.text().includes(Name2))
                {
                cy.get('[class="tabcol"]').click({multiple: true})    
                 cy.wait(3000)
                shouldStop = true
                }
            }))
        })
    })
  }))
  })

})

And('Check the tax on Transaction Amount',()=>{
  cy.wait(3000)
  cy.readFile('cypress/fixtures/userData/Bank&Walletdata.json').then((user)  => {
    let Name3 = user.Taxontransactionamount
    let shouldStop = false
    cy.iframe().find('.wwFormTableC>tbody>tr').each(($row=>{
        cy.then(() => {
            if(shouldStop){
                return
            }
        cy.wrap($row).within(function(){
            cy.get('td').each(($el=>{
                cy.log($el.text())
            
                if($el.text().includes(Name3))
                {
                cy.get('[class="tabcol"]').click({multiple: true})    
                 cy.wait(3000)
                shouldStop = true
                }
            }))
        })
    })
  }))
  })

})

And('Check the balance in deleted churn account',()=>{
  cy.wait(3000)
 ReconPage.getDeletedChurnAccount().eq(30).contains('Deleted Churn Account')
 ReconPage.getDeletedChurnAccount().eq(31).contains(0)
 cy.wait(2000)
 pageLogin.getiFrame()
 ReconPage.getmismatch().within(function () {
   ReconPage.getmismatchvalue().should("contain", "Mismatch found")
 })
})

And('Select MFS provider1, Click on submit button',()=>{
  cy.wait(3000)

  welcomePage.getreconcilationpage().click({ force: true })
  cy.wait(3000)
  ReconPage.getProviderSelect().select("MFS1", { force: true })
  ReconPage.getsubmit().click({ force: true })
})

And('Check the total amount in Churn account',()=>{
  cy.wait(3000)
  cy.readFile('cypress/fixtures/userData/Bank&Walletdata.json').then((user)  => {
    let Name4 = user.ChurnAccount
    let shouldStop = false
    cy.iframe().find('.wwFormTableC>tbody>tr').each(($row=>{
        cy.then(() => {
            if(shouldStop){
                return
            }
        cy.wrap($row).within(function(){
            cy.get('td').each(($el=>{
                cy.log($el.text())
            
                if($el.text().includes(Name4))
                {
                cy.get('[class="tabcol"]').click({multiple: true})    
                 cy.wait(3000)
                shouldStop = true
                }
            }))
        })
    })
  }))
  })


})

And('Check the total amount in the Internation remittance account',()=>{
  cy.wait(3000)
  ReconPage.getInternationalRemittance().eq(24).contains(' International Remittance Balance:')
  ReconPage.getInternationalRemittance().eq(25).contains(0)
  cy.wait(2000)
  pageLogin.getiFrame()
  ReconPage.getmismatch().within(function () {
    ReconPage.getmismatchvalue().should("contain", "Mismatch found")
  })
})


And('Check Business User Balance include balance of merchant',()=>{
  cy.wait(3000)
  cy.wait(3000)
  cy.readFile('cypress/fixtures/userData/Bank&Walletdata.json').then((user)  => {
    let Name4 = user.Businessuserbalance
    let shouldStop = false
    cy.iframe().find('.wwFormTableC>tbody>tr').each(($row=>{
        cy.then(() => {
            if(shouldStop){
                return
            }
        cy.wrap($row).within(function(){
            cy.get('td').each(($el=>{
                cy.log($el.text())
            
                if($el.text().includes(Name4))
                {
                cy.get('[class="tabcol"]').click({multiple: true})    
                 cy.wait(3000)
                shouldStop = true
                }
            }))
        })
    })
  }))
  })


})