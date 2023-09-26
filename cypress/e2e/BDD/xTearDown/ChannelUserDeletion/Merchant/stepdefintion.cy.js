
/// <reference types="Cypress" />
/// <reference types = "Cypress-iframe"/>

//----------------Imports---------------------------------------------------------------------
import 'cypress-iframe'
import { Given, When, Then, And, Before } from "@badeball/cypress-cucumber-preprocessor";
import loginPage from '../../../../../support/pageObjects/loginPage';
import homePage from '../../../../../support/pageObjects/homePage';
import "../../../../../support/Utils/generic";
import"../../../../../support/Utils/BusinessUserCommands";
import"../../../../../support/Utils/AdministratorCommands";
import manageUsers from '../../../../../support/pageObjects/UserManagement/manageUsers';
import approvals from '../../../../../support/pageObjects/UserManagement/approvals'
import register from '../../../../../support/pageObjects/UserManagement/register';



//----------------Object Declaration-----------------------------------------------------------------
const pageLogin = new loginPage()
const welcomePage = new homePage()

const manageUsersPage = new manageUsers()
const approvalPage = new approvals()
const registerPage = new register()

const uuid = () => Cypress._.random(1e8)
const uuid1 = () => Cypress._.random(1e8)
const uuuid = () => Cypress._.random(1e3)
amount = uuuid()
var mobile, mobile1, KycValue, amount, name, ifscnum, accnumber
const timestamp = (new Date).getTime()
KycValue = "A" + timestamp
mobile = "77" + uuid1()
mobile1 = "77" + uuid()
var BuisnessReg = 'cypress/fixtures/userData/BusinessUsersData.json'
//var BankData = 'cypress/fixtures/userData/BusinessUsersDataO2C.json'
var BuisnessRegO2C = 'cypress/fixtures/userData/BusinessUsersDataO2C.json'
let businesslogin = "cypress/fixtures/userData/BusinessUsersData.json"
function getRandomName() {
    name = "";
    var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    for (var i = 0; i < 5; i++)
        name += possible.charAt(Math.floor(Math.random() * possible.length));
    return name;
}


Then('Business User is able to Delete the User', function () {
  //manageUsersPage.getViewIcon().click({ force: true })
  manageUsersPage.getDelete().eq(0).click({ force: true })
  manageUsersPage.getComment().type(getRandomName(), { force: true })
  cy.getreason()
  manageUsersPage.getDeleteButton().click({ force: true })
})

Then('Navigate to Approvals, click on filter, type Delete User in workflow and apply', function () {
      
    cy.intercept('/mobiquitypay/v2/workflow_management/workflow/pending_records*').as('getApproval')
  welcomePage.getApprovalTab().click()
  cy.wait('@getApproval',{timeout:40000})

   //-----------------------------------added waituntil-------------------------------------
   cy.waitUntil(() => {
     return cy.iframe().find('h4.text-secondary')
   })
   //----------Filter the data
   pageLogin.getiFrame()
   approvalPage.getFilter().click({ force: true })
   cy.waitUntil(() => {
     return cy.iframe().find('p.text-secondary.text-capitalize.font-weight-700').should('be.visible', { force: true })
   })
   approvalPage.getEnterWorkflow().type(workFlow,{ force: true })
   //
   approvalPage.getDeleteUser().eq(0).click({ force: true })
   approvalPage.getApplyFilter().click({ force: true })
})

let workFlow
workFlow= "Delete User"

Then('Click on first Record, check mobile number and approve', function () {
  
  //expand the first record
  approvalPage.getViewFirstRecord().eq(0).click({ force: true })
    
    approvalPage.getMobNum().eq(5).then((al => {
      cy.readFile(BuisnessReg).then((user) => {
        let BMerchMobile = user.registeredMobileMerch
        //var BMMobile = " " + BMerchMobile
      let q = al.text()
      q=q.trim()
      cy.log(q)
      cy.log("--")
      cy.log(BMerchMobile)
      const numVaribale=1
    if(BMerchMobile == q)
    {
      approvalPage.getApproveButton().click({ force: true })
    }
    else{
      cy.log("Could not approve because of different mobile numbers")
      
    }
  })
  }))
  
  cy.intercept('/mobiquitypay/serviceRequest/resume/any').as('getApproveRequest')
  approvalPage.getApproveRequest().click({ force: true })
  cy.wait('@getApproveRequest').then((interception)=>{
    let response = interception.response.body
    const resValues = Object.values(response)
    cy.log(resValues[0][1])
    resValues[0][1].includes(this.data2.confirmationMessage.editUser)
  })
})