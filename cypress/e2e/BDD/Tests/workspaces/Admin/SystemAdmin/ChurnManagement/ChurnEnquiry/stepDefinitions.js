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


//----------------Object Declaration-----------------------------------------------------------

const pageLogin = new loginPage()
const churnManagementPage = new ChurnManagement()
const welcomePage = new homePage()
const registerPage = new register()
const approvalPage = new approvals()
const manageUsersPage = new manageUsers()


const churnSubRegistration = 'cypress/fixtures/userData/churnSubscriberReg.json'

//-------------------------------------------------------------------------------------------------------
And('Navigate to Churn Management and Click on Churn Enquiry',function(){
  welcomePage.getChurnManagement().scrollIntoView()
  welcomePage.getChurnManagement().click()
  churnManagementPage.getChurnEnquiry().click()
  cy.wait(3000)
})

And('Enter BatchId and click on Submit',function(){
  cy.readFile(churnSubRegistration).then((data)=>{
  let Id = data.ChurnID
  churnManagementPage.getBatchID().type(Id)
})
  cy.intercept('/CoreWeb/party/churnManagementAction_batchDataForView.action').as('churnEnquirySubmit')
  churnManagementPage.getChurnInitiationUploadSubmit().click()
  cy.wait('@churnEnquirySubmit')
})

Then('Assert Churn BatchId',function(){
  cy.readFile(churnSubRegistration).then((data)=>{
    let Id = data.ChurnID  
  churnManagementPage.getAssertEnquiryId().contains(Id)
  })
})
Then('Verify the Approved status',function(){
  churnManagementPage.getAssertEnquiryId().eq(5).contains("1") 
})