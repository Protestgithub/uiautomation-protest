/// <reference types="Cypress" />
/// <reference types = "Cypress-iframe"/>

//----------------Imports---------------------------------------------------------------------
import { And, Then } from "@badeball/cypress-cucumber-preprocessor";
import 'cypress-iframe';
import ChurnManagement from '../../../../../../../../support/pageObjects/ChurnManagement/ChurnManagement';
import register from '../../../../../../../../support/pageObjects/UserManagement/register';
import "../../../../../../../../support/Utils/ChurnCommands";
import "../../../../../../../../support/Utils/comissioncommands";
import "../../../../../../../../support/Utils/generic";
import "../../../../../../../../support/Utils/subscriberCommands";


//----------------Object Declaration-----------------------------------------------------------

const churnManagementPage = new ChurnManagement()
const registerPage = new register()


const churnSubRegistration = 'cypress/fixtures/userData/churnSubscriberReg.json'
var CsvFile = 'cypress/fixtures/templates/ChurnUserInitiation.csv'
var JSONFile = 'cypress/fixtures/churnData/ChurnUserInitiation.json'

//--------------------------Test Scripts---------------------------------------------

And('update the json data with unregistered number', function () {
  cy.readFile(JSONFile).then((data) => {
    data['MSISDN*'] = 1234123456
     if(Cypress.env('subscriberNamedAs').includes('Subscriber')){
    data['CHURN_SUBSCRIBER*'] = 'Y'
     }
     else{
       data['CHURN_CUSTOMER*'] = 'Y'  
     }
    data['CHURN_CHANNEL_USER*'] = 'N'
    cy.writeFile(JSONFile, data)
  })
})

And('Upload csv file with Unregisterd MSISDN', function () {
  churnManagementPage.getChurnInitiationUpload().attachFile('templates/ChurnUserInitiation.csv')
  churnManagementPage.getChurnInitiationUploadSubmit().click({ force: true })
   
  churnManagementPage.getFailedCount().should('have.value','1')
})

//--------------------------------------------------------------------------------------

And('Enter all the required subscriber details of churned user', function () {
    //-------------------Random Data-----------------------------------------------------------------

  cy.getBasicInfoTextFields()
  cy.iframe().find('select[data-test-id="preferredLanguage"]').select(this.data2.personalInfo.preferredLang, { force: true })
  cy.readFile(churnSubRegistration).then((data)=>{
    let ChurnNumber = data.churnSubscriberRegistration
   
    cy.MobileNumber()
  
  cy.getSubEmailID()
  if(Cypress.env('otpVerification').includes("Yes"))
{
cy.OTP(Cypress.env('apiBaseURL'), Cypress.env('port'))
}
else
{
cy.log("No OTP verification required")
}
  registerPage.getCountry().select(this.data2.personalInfo.country, { force: true })
  registerPage.getState().select(this.data2.subPersonalInfo.state, { force: true })
  registerPage.getCity().select(this.data2.subPersonalInfo.city, { force: true })
  cy.writeFile(churnSubRegistration, { churnSubscriberRegistration: ChurnNumber })
}) 
})

//-----------------------------------------------------------------------------------------------------

And('update the json data with Headmerchant number', function () {
  var BusinessUserData= 'cypress/fixtures/userData/BusinessUsersData.json'
  cy.readFile(BusinessUserData).then((user) => {
    cy.readFile(JSONFile).then((data) => {
    data['MSISDN*'] = user.registeredMobileHeadMerch
    data['CHURN_SUBSCRIBER*'] = 'N'
    data['CHURN_CHANNEL_USER*'] = 'Y'
    cy.writeFile(JSONFile, data)
  })
})
})

And('Upload csv file with HeadMerchant MSISDN', function () {
  churnManagementPage.getChurnInitiationUpload().attachFile('templates/ChurnUserInitiation.csv')
  churnManagementPage.getChurnInitiationUploadSubmit().click({ force: true })
  cy.wait(2000)
  churnManagementPage.getFailedCount().should('have.value','1')
})

//----------------------------------------------------------------------------------------------------------
And('Update the json data with Pending Transaction Buisness User', function () {
  var BusinessUserO2C= 'cypress/fixtures/userData/BusinessUsersDataO2C.json'
  cy.readFile(BusinessUserO2C).then((user) => {
    cy.readFile(JSONFile).then((data) => {
    data['MSISDN*'] = user.registeredMobileO2C
    
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
And('Upload csv file with Pending Transaction Buisness user MSISDN', function () {
  churnManagementPage.getChurnInitiationUpload().attachFile('templates/ChurnUserInitiation.csv')
  churnManagementPage.getChurnInitiationUploadSubmit().click({ force: true })
   cy.wait(2000)
  churnManagementPage.getFailedCount().should('have.value','1')
})

//-----------------------------------------------------------------------------------------------
And('Update the json data with Suspended Buisness User', function () {
  var SuspendedBusinessUser = 'cypress/fixtures/userData/BusinessUserSuspensionData.json'
  cy.readFile(SuspendedBusinessUser).then((user) => {
    cy.readFile(JSONFile).then((data) => {
    data['MSISDN*'] = user.registeredMobile
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