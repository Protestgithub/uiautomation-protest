/// <reference types="Cypress" />
/// <reference types = "Cypress-iframe"/>

//----------------Imports---------------------------------------------------------------------
import { And, Then } from "@badeball/cypress-cucumber-preprocessor";
import 'cypress-iframe';
import { recurse } from 'cypress-recurse';
import ChurnManagement from '../../../../../../../../support/pageObjects/ChurnManagement/ChurnManagement';
import homePage from '../../../../../../../../support/pageObjects/homePage';
import loginPage from '../../../../../../../../support/pageObjects/loginPage';
import approvals from '../../../../../../../../support/pageObjects/UserManagement/approvals';
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


const churnSubRegistration = 'cypress/fixtures/userData/churnSubscriberReg.json'
var mobile
var CIF
var name
var RegulatoryMarketingProfile = 'cypress/fixtures/userData/Regulatory&MarketingProfile.json'
var loginId
var KycValue
var CsvFile = 'cypress/fixtures/templates/ChurnUserInitiation.csv'
var JSONFile = 'cypress/fixtures/churnData/ChurnUserInitiation.json'


function getRandomName() {
  name = "";
  var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
  for (var i = 0; i < 5; i++)
    name += possible.charAt(Math.floor(Math.random() * possible.length));
  return name;
}
And('User click on submitted user data', function () {
  approvalPage.getCurrentDateRowData().eq(0).click({ force: true })
})

And('Select the User type as Subscriber and click on Subscriber', function () {
  pageLogin.getiFrame()
  registerPage.getregisterPageTitle().should('contain', this.data2.registerPageTitle)
  registerPage.getSelectSubUserTypeTab().contains(this.data2.subPersonalInfo.subUserType).click({ force: true })
  registerPage.getSelectSubUserTypeTab().contains(this.data2.subPersonalInfo.subUserType).focused()
  registerPage.getUserRole().contains(this.data2.subPersonalInfo.subUserRole).click({ force: true })
  registerPage.getRegistrationMode().eq(0).click({ force: true })
})
//----------------------Basic Data------
And('Enter all the required subscriber details', function () {

  //-------------------Random Data-------
  const uuid = () => Cypress._.random(1e8)
  mobile = "77" + uuid()
  const lgid = () => Cypress._.random(1e5)
  loginId = this.data2.personalInfo.firstName + lgid()
  CIF = lgid()
  registerPage.getFirstName().type(getRandomName(), { force: true })
  registerPage.getLastName().type(getRandomName(), { force: true })
  cy.iframe().find('select[data-test-id="preferredLanguage"]').select(this.data2.personalInfo.preferredLang, { force: true })
  registerPage.getLoginID().type(loginId, { force: true })

  recurse(
    () => cy.MobileNumber(),
    () => registerPage.getAdressLine1().click({ force: true }),
    (uniqueness) => (uniqueness) == registerPage.getValueIsNotUnique().contains
      ('Value is not unique').should('be.visible'),
    registerPage.getAdressLine1().click({ force: true }),
  )
  cy.writeFile(churnSubRegistration, { churnSubscriberRegistration: mobile })
  cy.OTP(Cypress.env('apiBaseURL'))
  //------------------------------------------------------------------------------------------------------------    
  registerPage.getAdressLine1().type(this.data2.subPersonalInfo.addressLine1, { force: true })
  registerPage.getCountry().select(this.data2.personalInfo.country, { force: true })
  registerPage.getState().select(this.data2.subPersonalInfo.state, { force: true })
  registerPage.getCity().select(this.data2.subPersonalInfo.city, { force: true })
  registerPage.getNextButtonBasic().click({ force: true })
  //----------------------KYC-----------------------------------------------------------------------
  KycValue = "ABX" + uuid()
  registerPage.getKycDropDownButton().eq(0).click({ force: true })
  registerPage.getKycIDType().select(this.data2.KycInfo.KycIDType, { force: true })
  registerPage.getKycIDValue().type(KycValue, { force: true }),
    registerPage.getMakeThisPrimaryButton().click({ force: true }),
    registerPage.getKycGracePeriod().select(this.data2.KycInfo.KycGracePeriod, { force: true })
  registerPage.getNextButtonBasic1().click({ force: true })
  //-----------------------Profile------------------------------------------------------------------------
  registerPage.getSecurityProfile().select("subscriberSecurityProfile", { force: true })
  registerPage.getAuthProfile().select("SubsDefault Profile", { force: true })
  registerPage.getReguProfile().select("NoKycprofile", { force: true })
  registerPage.getMarketingProfile().select("SUBSDefaultMP", { force: true })
})
// Then('SubscrigReg Confirmation message is displayed', function () {
//   registerPage.getNextButtonBasic2().click({ force: true })
//   registerPage.getSubmitButton().click({ force: true })
//   registerPage.getConfirmationText()
// })

//------------------------------Approve to (Reg Subscriber to churn)--------------------------------------------------
// Then('Added User status is approved', function () {
//   approvalPage.getApproveConfirmationMessage().contains(this.data2.confirmationMessage.addUser)
// })
//-------------TC_102---------------------(Churn Management)--------------------------------------------------------
// When('Click on Churn Management and Churn Initiation', function () {
//   welcomePage.getChurnManagement().scrollIntoView()
//   welcomePage.getChurnManagement().click()
//   welcomePage.getChurnInitiation().click()
// })
And('Download a File template', function () {
  cy.wait(2000)
  churnManagementPage.getDownloadFileTemplate().click({ force: true })
})
And('Convert csv To JSON file', function () {
  cy.csvToJSON(CsvFile, JSONFile)
})
// And('update the json data', function () {
//   cy.readFile(JSONFile).then((data) => {
//     data['MSISDN*'] = this.data8.churnSubscriberRegistration
//     data['CHURN_SUBSCRIBER*'] = 'Y'
//     data['CHURN_CHANNEL_USER*'] = 'N'
//     cy.writeFile(JSONFile, data)
//   })
// })
And('update the json data batch reject', function () {
  cy.readFile(churnSubRegistration).then((user) => {
    cy.readFile(JSONFile).then((data) => {
      var a = user.churnSubRegBatchReject
      data['MSISDN*'] = a
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
})

And('convert json to csv', function () {
  cy.jsonToCSV(JSONFile, CsvFile)
})

And('Upload csv file with valid details', function () {
  churnManagementPage.getChurnInitiationUpload().attachFile('templates/ChurnUserInitiation.csv')
  cy.intercept('CoreWeb/party/churnManagementAction_register.action').as('churnInitiateSubmit')
  churnManagementPage.getChurnInitiationUploadSubmit().click({ force: true })
  cy.wait('@churnInitiateSubmit',{timeout:10000})
  cy.wait(2000)
  churnManagementPage.getChurnInitiationMessage().should('contain', 'Churn initiation is completed')
})

And('Click on Churn Management and Churn Approval', function () {
  welcomePage.getChurnManagement().scrollIntoView()
  welcomePage.getChurnManagement().click()
  cy.intercept('CoreWeb/party/churnManagementAction_approve.action*').as('churnApproval')
  welcomePage.getChurnApproval().click()
  cy.wait('@churnApproval',{timeout:10000})
  cy.wait(2000)
})
And('Select the initiated churn request and click on Batch Approve', function () {
  
  churnManagementPage.getRecentDatainchurn()
  cy.wait(2000)
  churnManagementPage.getCBatchApprove().click({ force: true })
})
Then('Confirm the initiated churn request', function () {
  cy.get('.fd-page.iframeContainer.svelte-1v5e28n > iframe').then(($iframe) => {
    const $body = $iframe.contents().find('body')
    const $win = $iframe[0].contentWindow
    cy.stub($win, 'confirm', () => true)
      .as('windowConfirm')
    cy.stub($win.console, 'log').as('consoleLog')
    cy.wrap($body)
      .find('[id="appchurn"]').click({ force: true }).should(function () {
        expect(this.windowConfirm).to.be.calledWith('Are you sure you want to Approve?')
      })
  })
})
//-------TC_104--------------Again Initiating Subscriber using Churned MSISDN -------------------------------------------

And('Enter all the required subscriber details using Churned MSISDN', function () {
  //-------------------Random Data-----------------------------------------------------------------
  const uuid = () => Cypress._.random(1e8)
  mobile = "77" + uuid()
  const lgid = () => Cypress._.random(1e5)
  loginId = this.data2.personalInfo.firstName + lgid()
  CIF = lgid()
  registerPage.getFirstName().type(getRandomName(), { force: true })
  registerPage.getLastName().type(getRandomName(), { force: true })
  cy.iframe().find('select[data-test-id="preferredLanguage"]').select(this.data2.personalInfo.preferredLang, { force: true })
  registerPage.getLoginID().type(loginId, { force: true })
  registerPage.getMobileNumber().type(this.data8.churnSubscriberRegistration, { force: true })
  registerPage.getAdressLine1().click({ force: true })
  cy.OTP(Cypress.env('apiBaseURL'))
  registerPage.getAdressLine1().type(this.data2.subPersonalInfo.addressLine1, { force: true })
  registerPage.getCountry().select(this.data2.personalInfo.country, { force: true })
  registerPage.getState().select(this.data2.subPersonalInfo.state, { force: true })
  registerPage.getCity().select(this.data2.subPersonalInfo.city, { force: true })
  registerPage.getNextButtonBasic().click({ force: true })
  //----------------------KYC-----------------------------------------------------------------------
  KycValue = "ABX" + uuid()
  registerPage.getKycDropDownButton().eq(0).click({ force: true })
  registerPage.getKycIDType().select(this.data2.KycInfo.KycIDType, { force: true })
  registerPage.getKycIDValue().type(KycValue, { force: true }),
    registerPage.getMakeThisPrimaryButton().click({ force: true }),
    registerPage.getKycGracePeriod().select(this.data2.KycInfo.KycGracePeriod, { force: true })
  registerPage.getNextButtonBasic1().click({ force: true })
  //-----------------------Profile------------------------------------------------------------------------
  registerPage.getSecurityProfile().select("subscriberSecurityProfile", { force: true })
  registerPage.getAuthProfile().select("SubsDefault Profile", { force: true })
  registerPage.getReguProfile().select("NoKycprofile", { force: true })
  registerPage.getMarketingProfile().select("SUBSDefaultMP", { force: true })
})
// Then('SubscrigReg Confirmation message is displayed', function () {
//   registerPage.getNextButtonBasic2().click({ force: true })
//   registerPage.getSubmitButton().click({ force: true })
//   registerPage.getConfirmationText()
// })

Then('Save the Registered MSISDN in to fixture', function () {
  cy.readFile(churnSubRegistration).then((data) => {
    data.afterChurnSubscriberRegistration = churnSubscriberRegistration
    cy.writeFile(churnSubRegistration, data)
  })
})

//--------TC_105---------Churn Bulk Upload---------------------------------------------------------------------

And('update the json data for bulkupload', function () {
  cy.readFile(churnSubRegistration).then((user) => {
    cy.readFile(JSONFile).then((data) => {

      var b = user.churnSubscriberRegistrationBulkUpload
      data['MSISDN*'] = b
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
})


And('Upload Bulk csv file with valid details', function () {
  churnManagementPage.getChurnInitiationUpload().attachFile('templates/ChurnUserInitiation.csv')
  cy.wait(2000)
  churnManagementPage.getChurnInitiationUploadSubmit().click({ force: true })
  churnManagementPage.getChurnInitiationMessage().should('contain', 'Churn initiation is completed')
})

//---TC_107---Churn Management---To verify that the System admin can approve the initiated churn process as Batch Reject-----------------

Then('Select the initiated churn request and click on Batch Reject', function () {
  cy.wait(2000)
  churnManagementPage.getLastRadioButton().click({ force: true })
  churnManagementPage.getCBatchReject().click({ force: true })
  cy.get('.fd-page.iframeContainer.svelte-1v5e28n > iframe').then(($iframe) => {
    const $body = $iframe.contents().find('body')
    const $win = $iframe[0].contentWindow
    cy.stub($win, 'confirm', () => true)
      .as('windowConfirm')
    cy.stub($win.console, 'log').as('consoleLog')
    cy.wrap($body)
    churnManagementPage.getChurnApprovalSubmitButton().click({ force: true }).should(function () {
      expect(this.windowConfirm).to.be.calledWith('Are you sure you want to Reject?')
    })

  })
  
  //churnManagementPage.getChurnInitiationMessage().should('contain.text', this.data3.rejectmessage)
})
//---TC_108---Churn Management---To verify that the System admin can approve the initiated churn process as Approve/Reject by Selection-----------------

And('update the json data for Approve and Reject', function () {
  cy.readFile(churnSubRegistration).then((user) => {
    cy.readFile(JSONFile).then((data) => {
      var c = user.churnSubscriberRegistrationChurnAprRej
      data['MSISDN*'] = c
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
})

Then('Select the initiated churn request and click on Approve and Reject by Selection', function () {
  cy.wait(2000)
  churnManagementPage.getLastRadioButton().click({ force: true })
  churnManagementPage.getCBatchApproveRejectBySelection().click({ force: true })
  churnManagementPage.getChurnApprovalSubmitButton().click({ force: true })
  cy.wait(2000)
  churnManagementPage.getCheckAll().click({ force: true })
  cy.get('.fd-page.iframeContainer.svelte-1v5e28n > iframe').then(($iframe) => {
    const $body = $iframe.contents().find('body')
    const $win = $iframe[0].contentWindow
    cy.stub($win, 'confirm', () => true)
      .as('windowConfirm')
    cy.stub($win.console, 'log').as('consoleLog')
    cy.wrap($body)
    churnManagementPage.getApprove().click({ force: true })
  })
})

