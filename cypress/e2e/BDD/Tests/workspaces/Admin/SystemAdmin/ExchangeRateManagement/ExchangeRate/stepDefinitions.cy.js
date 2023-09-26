/// <reference types="Cypress" />
/// <reference types = "Cypress-iframe"/>

//-------------------------------Imports---------------------------------------------------------------------
import 'cypress-iframe'
import { Given, When, Then, And, Before } from "@badeball/cypress-cucumber-preprocessor";
import homePage from '../../../../../../../../support/pageObjects/homePage';
import AddExchangeRateManagement from '../../../../../../../../support/pageObjects/ExchangeRateManagement/AddExchangeRateManagement';
import "../../../../../../../../support/Utils/generic";
import ApproveRejectExchangeRate from '../../../../../../../../support/pageObjects/ExchangeRateManagement/ApproveRejectExchangeRate';
import UpdateExchangeRate from '../../../../../../../../support/pageObjects/ExchangeRateManagement/UpdateExchangeRate';
import UpdatedApproveRejectExchangeRate from '../../../../../../../../support/pageObjects/ExchangeRateManagement/UpdatedApproveRejectExchangeRate';

//----------------Object Declaration----------------------------------------------------------

const welcomePage = new homePage()
const ERM = new AddExchangeRateManagement()
const ARER = new ApproveRejectExchangeRate()
const UER = new UpdateExchangeRate()
const UARER = new UpdatedApproveRejectExchangeRate()
const d = new Date()
let msg = "An exchange rate is already within the range."


//----------------Test Scripts---------------------------------------------------------------

//---------------------------------------------System Admin Login----------------------------------------------------

//----------------------------EXCHANGE RATE MANAGEMENT-------------------------------------------
When('Navigate to Exchange Rate Management and Click on Add Exchange Rate', function () {
  welcomePage.getExchangeRateManagementOption().scrollIntoView()
  welcomePage.getExchangeRateManagementOption().click()
  //cy.intercept(this.data20.AddExchange).as('adderm')
  welcomePage.getAddExchangeRate().click()
  //cy.wait('@adderm',{timeout:30000})
})

And('Enter all the required details and click on Submit', function () {
  cy.wait(2000)
  ERM.getbasecurrency().select(this.data11.erm.fromTargetCurrecny, { force: true })
  ERM.gettargetcurrency().select(this.data11.erm.frombasecurrency, { force: true })
  ERM.getvalidfrom().type(d.toLocaleDateString('en-GB'), { force: true })
  ERM.getvalidTo().click()
  ERM.getnextyear().click()
  ERM.getnextmonth().click()
  ERM.getdates().click({ force: true })
  ERM.getForexRate().type(this.data11.erm.forexRate, { force: true })
  ERM.getsubmitbtn().click({ force: true })
})

Then('System Admin can initiate Add Exchange Rate', function () {
  //ERM.getError().should('contain',this.data1.erm.Error)
})

And('Navigate to Exchange Rate Management and Click Approve or Reject ER', function () {
  welcomePage.getExchangeRateManagementOption().scrollIntoView()
  welcomePage.getExchangeRateManagementOption().click()
  welcomePage.getApproveRejectER().click()
})

And('Approve Or Reject ER', function () {
  cy.wait(2000)
  cy.iframe().find('div .wwFormTableC').each(($elm) => {
    const t = $elm.text()
    if (t.includes('ER')) {
      ARER.getapproveER().click({ force: true })
      cy.wait(2000)
      ARER.getapproveDER().contains(this.data11.erm.Approve)
    }

    else {
      cy.log(msg)
    }
  })
})

And('Navigate to Exchange Rate Management and Click Show Modification History', function () {
  welcomePage.getExchangeRateManagementOption().scrollIntoView()
  welcomePage.getExchangeRateManagementOption().click()
  welcomePage.getShowModificationHistory().click()
})

When('Navigate to Exchange Rate Management and Click Update Exchange Rate', function () {
  welcomePage.getExchangeRateManagementOption().scrollIntoView()
  welcomePage.getExchangeRateManagementOption().click()
  welcomePage.getUpdateER().click()
})

And('Enter all details and click on Submit', function () {
  cy.wait(2000)
  UER.getupdatedbasecurrency().select(this.data11.updateder.fromTargetCurrecny1, { force: true })
  UER.getupdatedtargetcurrency().select(this.data11.updateder.frombasecurrency1, { force: true })
  ERM.getvalidfrom().type(d.toLocaleDateString('en-GB'), { force: true })
  UER.getupdatedvalidto().within(function () {
    cy.get('td').eq(1)
    cy.get('span#validTo img').eq(0).click()
  })
  ERM.getnextyear().click()
  ERM.getnextmonth().click()
  ERM.getdates().click({ force: true })
  UER.getupdatedforexrate().type(this.data11.updateder.forexRate1, { force: true })
  UER.getupdatebutton().click({ force: true })
})


And('Navigate to Exchange Rate Management and Click Approve or Reject Updated Exchange Rate', function () {
  welcomePage.getExchangeRateManagementOption().scrollIntoView()
  welcomePage.getExchangeRateManagementOption().click()
  welcomePage.getApproveupdateER().click()
})

Then('Click on Approve to Approve Exchange Rate', function () {
  cy.wait(2000)
  cy.iframe().find('div .wwFormTableC').each(($elm) => {
    const t = $elm.text()
    if (t.includes('ER')) {
      UARER.getUpdatedapproveER().click({ force: true })
      ARER.getapproveDER().contains(this.data11.erm.Approve)
    }
    else {
      cy.log(msg)
    }
  })
})
