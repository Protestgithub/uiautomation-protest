/// <reference types="Cypress" />
/// <reference types = "Cypress-iframe"/>

//----------------Imports---------------------------------------------------------------------
import { And, Then, When } from "@badeball/cypress-cucumber-preprocessor";
import 'cypress-iframe';
import ChurnManagement from '../../../../../../../../support/pageObjects/ChurnManagement/ChurnManagement';
import homePage from '../../../../../../../../support/pageObjects/homePage';
import loginPage from '../../../../../../../../support/pageObjects/loginPage';
import approvals from '../../../../../../../../support/pageObjects/UserManagement/approvals';
import manageUsers from '../../../../../../../../support/pageObjects/UserManagement/manageUsers';
import register from '../../../../../../../../support/pageObjects/UserManagement/register';
import "../../../../../../../../support/Utils/ChurnCommands";
import "../../../../../../../../support/Utils/comissioncommands";
import "../../../../../../../../support/Utils/generic";
import "../../../../../../../../support/Utils/subscriberCommands";
import Reconcilation from '../../../../../../../../support/pageObjects/Reconcilation/Reconcilation';

//----------------Object Declaration-----------------------------------------------------------

const pageLogin = new loginPage()
const churnManagementPage = new ChurnManagement()
const welcomePage = new homePage()
const registerPage = new register()
const approvalPage = new approvals()
const manageUsersPage = new manageUsers()
const reconciliationPage = new Reconcilation()
const ChurnSubMob = 'userData/churnSubscriberReg.json'
const churnSubMobile = 'cypress/fixtures/userData/churnSubscriberReg.json'

   //-----------------------churn account-----------------------------

When('Click on reconciliation', function () {
  cy.intercept('/CoreWeb/reconciliation/reconciliation_loadReconciliationBalance*').as('getRecon')
  welcomePage.getreconcilationpage().click()
  cy.wait('@getRecon')
})

And('Copy churn account amount', function () {
  
  reconciliationPage.getProviderSelect().select(1)
  reconciliationPage.getsubmit().click()
  
  reconciliationPage.getcolumn().contains(this.data54.ChurnAccount).next().then((amount) => {
    const value = parseFloat(amount.text())
    cy.log(value)
    cy.readFile(churnSubMobile).then((data) => {
      data.ChurnUsersAccountValue = value                      
      cy.writeFile(churnSubMobile, data)
    })
   
  })


})

And('Enter Mobile number of churn subscriber and KYC number in search menu1', function () {

  cy.fixture(ChurnSubMob).then((user) => {
    var ChurnMob = user.churnSubscriberRegistration
    cy.log(ChurnMob)
    manageUsersPage.getSearchUser().type(ChurnMob)
  })
  manageUsersPage.getSearchUserButton().click({ force: true })

})


And('Copy the INR and USD wallet balances', function () {
  manageUsersPage.getWalletBalance().eq(0).invoke('text').then((text)=> {
    const amount1 = text
    const USDAmount1 = amount1.replace('$','')     
    cy.log(USDAmount1)
    cy.readFile(churnSubMobile).then((data) => {
      data.NormalWalletBalanceUSD = USDAmount1
      cy.writeFile(churnSubMobile, data)
    })
   
  })

  manageUsersPage.getWalletBalance().eq(1).invoke('text').then((text)=> {
    const amount2 = text
    const USDAmount2 = amount2.replace('$','')  
    cy.log(USDAmount2)
    cy.readFile(churnSubMobile).then((data) => {
      data.SalaryWalletBalanceUSD = USDAmount2
      cy.writeFile(churnSubMobile, data)
    })
    
  })

})


And('Delete the user with proper reasons', function(){

  manageUsersPage.getdelete().click({force:true})
  let a1 = getRandomName()
  manageUsersPage.getComment().clear({force:true}).type(a1, { force: true })
  manageUsersPage.getreasonforclosure().select(3)
  manageUsersPage.getintiatedelete().click({force:true})
})




Then('Navigate to reconciliation and check the suspended user amount transferred there or not', function(){

  welcomePage.getreconcilationpage().click()
  

   reconciliationPage.getProviderSelect().select(1)
   reconciliationPage.getsubmit().click()
   
   reconciliationPage.getcolumn().contains(this.data54.ChurnAccount).next().then((amount) => {
     const value1 = parseInt(amount.text())
     cy.log(value1)
     cy.readFile(churnSubMobile).then((data) => {
      data.UpdatedChurnUsersAccountValue = value1
      cy.writeFile(churnSubMobile, data)
    })
     
    cy.readFile(churnSubMobile).then((data) => {
      let x = data.ChurnUsersAccountValue
      let y = data.NormalWalletBalanceUSD
      let z = data.SalaryWalletBalanceUSD
      let a = data.UpdatedChurnUsersAccountValue 
      const num1 = x * 1
      const num2 = y * 1
      const num3 = z * 1
      const num4 = a * 1
      const total = num2 + num3  //normal + salary
      const sum = parseInt(num1 + total)

      expect(num4).to.eq(sum)

    })
   })

})


// And('Navigate to My Activity and Apply Modified User filters', function () {
//   welcomePage.getMyActivity().click()
//   myActivityPage.getFilter().click({ force: true })
//   myActivityPage.getModificationOfUser().click({ force: true })
//   myActivityPage.getSubmittedStatus().click()
//   myActivityPage.getApply().click()
// })

//--------------------------------------------------------------------------------------------------------

And('Assert Created churned subscriber Mobile Number and Write Created on time', function () {
    cy.readFile(churnSubMobile).then((user) => {
    let CSubMobile = user.churnSubscriberRegistration
    var CCSubMobile = " " + CSubMobile
    manageUsersPage.getAssertMobile().eq(1).should('have.text', CCSubMobile)
  })
    myActivityPage.getCreatedOnTime().eq(0).invoke('text').then((time) => {
    time = time.trim()
    cy.log(time)
    cy.readFile(churnSubMobile).then((data) => {
      data.CreatedOnTime = time
      cy.writeFile(churnSubMobile, data)
    })
  })
})


And('User click on submitted user data for churned subscriber data', function () {
  cy.getApproval(churnSubMobile)
})
