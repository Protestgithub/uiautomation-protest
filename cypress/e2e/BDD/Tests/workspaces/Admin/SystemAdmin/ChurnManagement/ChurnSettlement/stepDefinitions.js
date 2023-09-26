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
var mobile
var CIF
var name
var RegulatoryMarketingProfile = 'cypress/fixtures/userData/Regulatory&MarketingProfile.json'
var loginId
var KycValue
var CsvFile = 'cypress/fixtures/templates/ChurnUserInitiation.csv'
var JSONFile = 'cypress/fixtures/churnData/ChurnUserInitiation.json'
var BusinessUserData= 'cypress/fixtures/userData/BusinessUsersData.json'

//-------------------------------------------------------------------------------------------------------
And('Update the json data with Buisness User MSISDN', function () {
    
    cy.readFile(BusinessUserData).then((user) => {
    cy.readFile(JSONFile).then((data) => {
    data['MSISDN*'] = user.registeredMobileHeadMerch1
    if(Cypress.env('subscriberNamedAs').includes('Subscriber')){
    data['CHURN_SUBSCRIBER*'] = 'N'
    }
    else
    {
      data['CHURN_CUSTOMER*'] = 'N'
    }
    data['CHURN_CHANNEL_USER*'] = 'Y'
    cy.writeFile(JSONFile, data)
  })
})
})

And('Upload csv file with Channel User', function () {
  churnManagementPage.getChurnInitiationUpload().attachFile('templates/ChurnUserInitiation.csv')
  cy.intercept('CoreWeb/party/churnManagementAction_register.action').as('churnInitiateSubmit')
  churnManagementPage.getChurnInitiationUploadSubmit().click({ force: true })
  cy.wait('@churnInitiateSubmit',{timeout:10000})
   churnManagementPage.getChurnInitiationMessage().should('contain', 'Churn initiation is completed')
})

And('Click on Churn Management and Churn Settlement Initiate',function(){
  welcomePage.getChurnManagement().scrollIntoView()
  welcomePage.getChurnManagement().click()
  cy.intercept('CoreWeb/party/churnSettlement_viewChurnSettleInitial.action*').as('churnsettleInitiate')
  churnManagementPage.getChurnSttlementInitiate().click()
  cy.wait('@churnsettleInitiate')
})

//----------------------------------------------------------------------------------------------------

And('Enter Churned MSISDN and Click on Submit',function(){
  cy.wait(2000)
  cy.get('.fd-page.iframeContainer.svelte-1v5e28n > iframe').then(($iframe) => {
    cy.readFile(BusinessUserData).then((user) => {
      let MSISDN = user.registeredMobileHeadMerch1
    const $body = $iframe.contents().find('body')
    const $win = $iframe[0].contentWindow
    cy.stub($win, 'alert', () => true).as('windowConfirm')
    cy.stub($win.console, 'log').as('consoleLog')
 
    cy.wrap($body).find('#churnMsisdn').type(MSISDN).should(function () {
    })
    cy.stub($win, 'confirm', () => true).as('windowConfirm')
cy.wrap($body).find('#typeId').select('Channel User').should(function () {
    })
 
  cy.intercept('CoreWeb/party/churnSettlement_loadChurnSettlementInitiationList.action*').as('ChurnSettlementSubmit')
  churnManagementPage.getChurnSttelementSubmit().click()
  cy.wait('@ChurnSettlementSubmit')
})
  })
})

And('Enter Reciever MSISDN and click on submit',function(){
  cy.wait(2000)
  cy.get('.fd-page.iframeContainer.svelte-1v5e28n > iframe').then(($iframe) => {
  cy.readFile('cypress/fixtures/userData/subscriberReg.json').then((data)=>{
    let MSISDN = data.subscriberMobile
    churnManagementPage.getRecieverMSISDN().should('be.visible')
    const $body = $iframe.contents().find('body')
    const $win = $iframe[0].contentWindow
    cy.stub($win, 'alert', () => true).as('windowConfirm')
    cy.stub($win.console, 'log').as('consoleLog')
    cy.wrap($body).find('#receiverMsisdn').type(MSISDN).should(function () {
    })
    cy.stub($win, 'confirm', () => true).as('windowConfirm')
  })
  cy.intercept('CoreWeb/party/churnSettlement_churnSettleInitiation.action*').as('ChurnSettlementMsg')
  churnManagementPage.getsubmitButton().click()
  cy.wait('@ChurnSettlementMsg')
  churnManagementPage.getChurnInitiationMessage().contains('Churn Settlement Initiation done successfully with Transaction Id')
})

})
//----------------------------------------------------------------------------------------

And('Click on Churn Management and Churn Settlement Approval',function(){
  welcomePage.getChurnManagement().scrollIntoView()
  welcomePage.getChurnManagement().click()
  cy.intercept('CoreWeb/party/churnSettlement_viewChurnSettleApprovalInitial.action*').as('ChurnSettlementApproval')
  churnManagementPage.getChurnSttlementApproval().click()
  cy.wait('@ChurnSettlementApproval')
})

Then('Click on Initiated settlement data and approve',function(){
  cy.getChurnSettlementApproval(BusinessUserData)
  churnManagementPage.getAcceptButton().click()
  cy.wait(2000)
  churnManagementPage.getApprovalConfirm().click()
  cy.wait(2000)
})

