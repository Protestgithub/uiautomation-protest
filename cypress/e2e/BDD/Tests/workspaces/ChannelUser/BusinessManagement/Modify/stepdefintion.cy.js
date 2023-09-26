/// <reference types="Cypress" />
/// <reference types = "Cypress-iframe"/>

//----------------Imports---------------------------------------------------------------------
import 'cypress-iframe'
import { Given, When, Then, And, Before } from "@badeball/cypress-cucumber-preprocessor";
import loginPage from '../../../../../../../support/pageObjects/loginPage';
import "../../../../../../../support/Utils/generic";
import"../../../../../../../support/Utils/BusinessUserCommands";
import manageUsers from '../../../../../../../support/pageObjects/UserManagement/manageUsers';
import approvals from '../../../../../../../support/pageObjects/UserManagement/approvals'
import register from '../../../../../../../support/pageObjects/UserManagement/register';



//----------------Object Declaration-----------------------------------------------------------------
const pageLogin = new loginPage()

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


Then('Click on edit button for employee record', function () {
  cy.wait(2000)
    manageUsersPage.getEditIcon().click({ multiple: true }, { force: true })
    cy.wait(2000)
    registerPage.getNextButtonBasic().eq(0).click({ force: true })
    registerPage.getNextButtonBasic1().click({ force: true })
    registerPage.getNextButtonBasic2().click({ force: true })
    registerPage.getConfirmButton().click({ force: true })
    cy.wait(2000)
    registerPage.getConfirmationText1().contains(this.data2.confirmationMessage.successMessage)   
    manageUsersPage.getDoneButton().click({ force: true })
})
//Prerna
Then('Click on Edit User button', function () {
  manageUsersPage.getEditToolTip().eq(0).click({ force: true })
})

And('Click Next button four times', function () {
    manageUsersPage.getNextbttn().eq(0).click({ force: true })
    cy.wait(2000)
    cy.intercept('/mobiquitypay/v1/regulatoryProfile').as('getregulatoryprof')
    manageUsersPage.getNextbttn().eq(1).click({ force: true })
    cy.wait('@getregulatoryprof')
    manageUsersPage.getNextbttn().eq(2).click({ force: true })
    manageUsersPage.getNextbttn().eq(3).click({ force: true })
  })

  Then('Click on Confirm', function () {
    manageUsersPage.getConfirmButton().click({ force: true })
  })

  And('Confirm the edit details Of the User', function () {
    manageUsersPage.getConfirmButton().click({ force: true })
        cy.wait(2000)
    registerPage.getConfirmationText1().contains(this.data2.confirmationMessage.successMessage)
    manageUsersPage.getDoneButton().click({ force: true })
  })

  And('Assert Created Business merchant Mobile Number and Write Created on time', function () {
    cy.readFile(BuisnessReg).then((user) => {
    let BMerchMobile = user.registeredMobileMerch
    var BMMobile = " " + BMerchMobile
    manageUsersPage.getAssertMobile().eq(1).should('have.text', BMMobile)
  })
    myActivityPage.getCreatedOnTime().eq(0).invoke('text').then((time) => {
    time = time.trim()
    cy.log(time)
    cy.readFile(BuisnessReg).then((data) => {
      data.CreatedOnTime = time
      cy.writeFile(BuisnessReg, data)
    })
  })
  })

  And('Approve the Users after modification', function () {
  
    //expand the first record
    approvalPage.getViewFirstRecord().eq(0).click({ force: true })
     
      approvalPage.getMobileNumber().eq(7).then((al => {
        cy.readFile(BuisnessReg).then((user) => {
          let BMerchMobile = user.registeredMobileMerch
          //var BMMobile = " " + BMerchMobile
        let q = al.text()
        q=q.trim()
        cy.log(q)
        cy.log("--")
        cy.log(BMerchMobile)
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