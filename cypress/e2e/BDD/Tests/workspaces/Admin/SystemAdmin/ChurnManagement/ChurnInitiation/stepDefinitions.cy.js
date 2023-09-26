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


function getRandomName() {
  name = "";
  var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
  for (var i = 0; i < 5; i++)
    name += possible.charAt(Math.floor(Math.random() * possible.length));
  return name;
}


When('Navigate to Approvals and filter by Submitted status', function () {
  // welcomePage.getUserManagementOption().scrollIntoView()
  cy.intercept('/mobiquitypay/v2/workflow_management/workflow/pending_records*').as('getApproval')
  welcomePage.getApprovalTab().click()
  cy.wait('@getApproval',{timeout:40000})
  //------------------------------------Filter the data--------------------------------------------------
  pageLogin.getiFrame()
  approvalPage.getFilter().click({ force: true })
  approvalPage.getAddUserCheckBox().click({ force: true })
  approvalPage.getApplyFilter().click({ force: true })
})
Then('SubscrigReg Confirmation message is displayed', function () {
  registerPage.getNextButtonBasic2().click({ force: true })
  registerPage.getSubmitButton().click({ force: true })
  registerPage.getConfirmationText()
})


When('Click on Churn Management and Churn Initiation', function () {
  welcomePage.getChurnManagement().scrollIntoView()
  welcomePage.getChurnManagement().click()
cy.intercept('/CoreWeb/party/churnManagementAction_inputInitiation.action*').as('getChurnPage')
welcomePage.getChurnInitiation().click()
  cy.wait('@getChurnPage')
})

And('update the json data', function () {
  cy.readFile(churnSubRegistration).then((user) => {
    cy.readFile(JSONFile).then((data) => {
      var d = user.churnSubscriberRegistration
      data['MSISDN*'] = d
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

And('Enter Mobile number or KYC number in Search', function () {
  pageLogin.getiFrame()
  manageUsersPage.getSearchUser().click({ force: true })
  cy.readFile('cypress/fixtures/userData/churnSubscriberReg.json').then((data) => {
    let Submobile = data.churnSubscriberRegistration
    cy.log(Submobile)
    manageUsersPage.getSearchUser().type(Submobile, { force: true })
  })
  manageUsersPage.getSearchUserButton().click({ force: true })
})

Then('User Click on Delete button and Verify wallet details are not available', function () {
  manageUsersPage.getChurndelete().click({ force: true })
  if (manageUsersPage.getWalletDetails().should('not.exist')) {
    cy.log("**Wallet details are not available**")
  }
})
