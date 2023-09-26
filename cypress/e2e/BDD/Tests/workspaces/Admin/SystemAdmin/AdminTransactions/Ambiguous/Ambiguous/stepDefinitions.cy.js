/// <reference types="Cypress" />
/// <reference types = "Cypress-iframe"/>

//----------------Imports---------------------------------------------------------------------
import { And, Before, Then, When } from "@badeball/cypress-cucumber-preprocessor";
import 'cypress-file-upload';
import 'cypress-iframe';
import BulkSettlement from '../../../../../../../../../support/pageObjects/AmbiguousTransaction/BulkSettlement';
import DownloadAmb from '../../../../../../../../../support/pageObjects/AmbiguousTransaction/DownloadAmb';
import homePage from '../../../../../../../../../support/pageObjects/homePage';
import "../../../../../../../../../support/Utils/generic";


//----------------Object Declaration----------------------------------------------------------

const welcomePage = new homePage()
const DownloadAmbpage = new DownloadAmb()
const BulkSettlementpage = new BulkSettlement()




//----------------Launch Mobiquity Portal URL and Login--------------------------------------

//---------------------------------------------System Admin Login----------------------------------------------------
//----------------------Ambiguous Transaction Management-------------------------------//
When('Click on Ambiguous Order Transaction >> Download Ambiguous Order', function () {
  welcomePage.getAmbiguousOrderTransacation().scrollIntoView()
  welcomePage.getAmbiguousOrderTransacation().click()
  cy.intercept(this.data20.DownloadAmbiguous).as('getambiguous')
  welcomePage.getDownloadAmbiguousOrder().click()
  // 
  cy.wait('@getambiguous', { timeout: 30000 })
})
And('Select Ambiguous Type and party type and party name', function () {
  DownloadAmbpage.getAmbtype().select(this.data16.AmbType, { force: true })
  DownloadAmbpage.getPartyType().select(this.data16.PartyType, { force: true })
})

Then('Click on Download button.', function () {
  DownloadAmbpage.getDownloadbttn().click()
})
//---------------------------Amb transaction upload file----------------------//
When('Click on Ambiguous Order Transaction >> Bulk settlement initiation', function () {
  welcomePage.getAmbiguousOrderTransacation().scrollIntoView()
  welcomePage.getAmbiguousOrderTransacation().click()
  cy.intercept(this.data20.BulkSettlement).as('getbulkoperation')
  welcomePage.getBulkSettlement().click()
  cy.wait(4000)
  // cy.wait('@getbulkoperation', { timeout: 30000 })
})
And('Select operation name', function () {
  BulkSettlementpage.getOperatorName().select(this.data16.OperationName, { force: true })
})
And('Click on Download template and enter remark', function () {
  BulkSettlementpage.getRemarks().type("remarks")
})
Then('Upload file', function () {
  const filepath = "AMBData.csv";
  BulkSettlementpage.getUploadfile().attachFile(filepath)
  BulkSettlementpage.getSubmitbttn().click()
})