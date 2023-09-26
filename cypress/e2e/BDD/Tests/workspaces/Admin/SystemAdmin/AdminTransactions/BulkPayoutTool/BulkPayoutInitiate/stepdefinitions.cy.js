/// <reference types="Cypress" />
/// <reference types = "Cypress-iframe"/>
import { And, Then, When } from "@badeball/cypress-cucumber-preprocessor";
import 'cypress-iframe';
import BulkPayout from '../../../../../../../../../support/pageObjects/BulkPayout';
import homePage from '../../../../../../../../../support/pageObjects/homePage';
import O2CTransferInitiate from '../../../../../../../../../support/pageObjects/OperatorToChannel/O2CTransferInitiate';
import Approval from '../../../../../../../../../support/pageObjects/TransferRules/Approval';
import "../../../../../../../../../support/Utils/generic";


//----------------Object Declaration-----------------------------------------------------------------

const welcomePage = new homePage()
const O2CTransferInitiatePage = new O2CTransferInitiate()
const BptPage = new BulkPayout()
const TransferRuleApproval = new Approval()
const transferruleapprovalpage = new Approval()

var CsvFile = 'cypress/fixtures/templates/BULK_O2C-template.csv';
var JsonFile = 'cypress/fixtures/BulkData/BULK_O2C-template.json';
const uuid = () => Cypress._.random(1e3)
var TransferAmount = uuid()
var ReferenceNumber = uuid()
var number = uuid()
var name
var BusinessMoBileData = "userData/BusinessUsersData.json"
var BBAFile = "cypress/fixtures/userData/BusinessUsersDataO2C.json"
var O2CFile = "cypress/fixtures/userData/O2Cdata.json"
function getRandomName() {
  name = "";
  var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
  for (var i = 0; i < 5; i++)
    name += possible.charAt(Math.floor(Math.random() * possible.length));
  return name;
}
const date2 = new Date().toLocaleString('en-GB').split(',')

//----------------Test Scripts---------------------------------------------------------------------------

//--------------------------User Management--------------------------------------------------------------




//------------------------SC_53------------------------------------------------------------------------



//----------------Test Scripts---------------------------------------------------------------


When('Navigate to Operator to channel and click on O2C transfer initiate', function () {
  welcomePage.getOperatorToChannelOption().scrollIntoView()
  welcomePage.getOperatorToChannelOption().click()
  cy.intercept(this.data20.O2CTransferInitiate).as('getO2CTransferInitiate')
  welcomePage.getO2CTransferInitiateOption().click()
  cy.wait('@getO2CTransferInitiate', { timeout: 30000 })
})

And('Enter All the Mandatory Details for o2c transaction', function () {

  cy.readFile(BBAFile).then((data) => {
    var O2CMsisdn = data.registeredMobileO2C
    O2CTransferInitiatePage.getMSISDN().type(O2CMsisdn, { force: true })
    data.O2CMsisdn1 = O2CMsisdn
    cy.writeFile(O2CFile, data)
  })
  cy.get('.fd-page.iframeContainer.svelte-1v5e28n > iframe').then(($iframe) => {
    const $body = $iframe.contents().find('body')
    const $win = $iframe[0].contentWindow
    const stub = cy.stub()
    if (cy.stub($win, 'alert', () => false)
      .as('windowConfirm')) {

    }
    else {
      cy.stub($win.console, 'log').as('consoleLog')
      cy.wrap($body)
        .find('input[name="amount"]').click({ force: true })
        .should(function () {

          expect(this.windowConfirm).to.be.calledWith("Channel User Does Not Exist")

        })
    }
  })
  O2CTransferInitiatePage.getTransferAmount().type(TransferAmount, { force: true })
  cy.readFile('cypress/fixtures/userData/O2CBulkData.json').then((data) => {
    data.TransferAmt = TransferAmount
    cy.writeFile('cypress/fixtures/userData/O2CBulkData.json', data)
  })
  O2CTransferInitiatePage.getReferenceNumber().type(ReferenceNumber, { force: true })
  cy.readFile('cypress/fixtures/userData/O2CBulkData.json').then((data) => {
    data.RefNum = ReferenceNumber
    cy.writeFile('cypress/fixtures/userData/O2CBulkData.json', data)
  })
  O2CTransferInitiatePage.getType().select(this.data15.O2CTransferInitiate.type, { force: true })
  O2CTransferInitiatePage.getNumber().type(number, { force: true })
  O2CTransferInitiatePage.getRemarks().type(getRandomName(), { force: true })
})


 And('logout the user for Bulk', function () {
   welcomePage.getProfileIcon().click()
   welcomePage.getLogOutbttn().click()
   welcomePage.getLogOutYesbttn().click()
 })

When('Navigate to Operator to channel and click on O2C transfer Approval1 for o2c transaction', function () {
  welcomePage.getOperatorToChannelOption().scrollIntoView()
  welcomePage.getOperatorToChannelOption().click()
  cy.intercept(this.data20.OperatorToChannel).as('getApproval1')
  welcomePage.getOperatorToChannelApproval1().click()
  cy.wait('@getApproval1', { timeout: 30000 })
  O2CTransferInitiatePage.getRecentDatainO2C()
  cy.intercept(this.data20.submitbttn).as('getsubmittransfer')
  TransferRuleApproval.getsubmitbttnTransferrule().click({ force: true })
  cy.wait('@getsubmittransfer', { timeout: 30000 })
  transferruleapprovalpage.getApprovalTransferrule().click({ force: true })
})

Then('Click on submit and Confirm2', function () {
  cy.intercept(this.data20.SubmitButton).as('getsubmit')
  O2CTransferInitiatePage.getSubmitButton().click({ force: true })
  cy.wait('@getsubmit', { timeout: 30000 })
  cy.intercept(this.data20.ConfirmButton).as('getConfirmButton')
  O2CTransferInitiatePage.getConfirmButton().click({ force: true })
  cy.wait('@getConfirmButton', { timeout: 30000 })
})

When('Click on BulkPayout tool', function () {
  BptPage.getBulkPayoutLink().click({ force: true })
})

And('Click on Bulk Payout Initiate', function () {
  BptPage.getBulkPayoutInitiateLink().click({ force: true })
  cy.wait(5000)
})
And('Select service from dropdown list', function () {
    cy.wait(3000)
  BptPage.getServicename().select(this.data2.personalInfo.ServiceName, { force: true })
})
And('Download a blank .csv file from Download a File template link', function () {
  BptPage.getDownloadTemplate().click({ force: true })
  cy.waitUntil(() => {
    return cy.iframe().find('button.btn.waves-effect.waves-light.submitBtn').should('be.visible', { force: true })
  })
})
And('Enter Common Remarks', function () {
  BptPage.getRemark().click({ force: true }).type('UI Automation')
  cy.csvToJSON(CsvFile, JsonFile)
})

Then('update the json data for Bulk Payout', function () {
  cy.readFile("cypress/fixtures/BulkData/BULK_O2C-template.json").then((data) => {
    data['Serial Number*'] = "30",
      data['MFS Provider*'] = this.data009.MFSProvider,
      data['Receiver SVA Type ID*'] = this.data009.ReceiverSVATypeID,
      cy.readFile(BBAFile).then((user) => {
        var O2CMsisdn = user.registeredMobileO2C
        data['Receiver Mobile Number*'] = O2CMsisdn
      })
    data['Amount*'] = "100",
      data['Transfer Date*'] = date2[0],
      data['Payment Type*'] = this.data009.PaymentType,
      data['Reference number*'] = "1234",
      data['Remarks*'] = this.data009.Remarks,
      data['Payment Number'] = this.data009.PaymentNumber,
      data['Payment Date'] = date2[0],
      data['Individual Remarks'] = this.data009.IndividualRemarks,
      data['Additional Parameter 1'] = ""
    data['Additional Parameter 2'] = ""
    data['Additional Parameter 3'] = ""
    data['Additional Parameter 4'] = ""
    data['Additional Parameter 5'] = ""
    data['Additional Parameter 6'] = ""
    data['Additional Parameter 7'] = ""
    data['Additional Parameter 8'] = ""
    data['Additional Parameter 9'] = ""
    data['Additional Parameter 10'] = ""
    cy.writeFile("cypress/fixtures/BulkData/BULK_O2C-template.json", data)
  })
})
And('Upload a .csv file with valid details', function () {
  cy.jsonToCSV(JsonFile, CsvFile)
  BptPage.getUploadLink().attachFile('templates/BULK_O2C-template.csv')
    cy.wait(3000)
  cy.intercept(this.data20.Submit).as('getsubmit')
  BptPage.getSubmit().dblclick({ force: true })
  cy.wait('@getsubmit', { timeout: 30000 })
    cy.wait(5000)
  BptPage.getTextBox().then(($btn) => {
    const txt = $btn.text()
    cy.log(txt)
  })
    cy.wait(3000)
})

And('Click on Bulk Payout Approval link.', function () {
   cy.intercept('/CoreWeb/bulkprocessing/bulk.action*').as('getApprovePage')
  BptPage.getBulkApprove().click({ force: true })
  cy.wait('@getApprovePage')
  
})

And('Select initiated service.', function () {
  BptPage.getBulkInitiatedBy().click({ force: true })
})

And('Click on Approve button.', function () {
  cy.intercept('/CoreWeb/nayapaisa/bulk-api/jigsaw/serviceRequest/resume/INITIATE_BULK_UPLOAD').as('getApprove')
  BptPage.getBulkApproveButton().click({ force: true })
  cy.wait('@getApprove')
})

And('Click on Bulk Payout Dashboard', function () {
   cy.intercept('/CoreWeb/bulkprocessing/bulk.action*').as('getApprovePage')
  BptPage.getBulkDashboard().click({ force: true })
  cy.wait('@getApprovePage')
})

And('Click on number of entries', function () {
  cy.wait(2000)
  BptPage.getNumberOfEntries().dblclick({ force: true })
  cy.waitUntil(() => {
    return cy.iframe().find('span.primary-color').eq(0).should('be.visible', { force: true })
  })
})

Then('Verify Batch Id', function () {
  BptPage.getBatchIDFromBox().invoke('text').then((elementText1) => {
    expect(elementText1).to.contain('BA')
  })
})

Then('Verify success', function () {
  BptPage.getSuccessAsOne().invoke('text').then((elementText) => {
    expect(elementText).to.contain('1')
  })
})


And('Enter All the Mandatory Details for bulkpayout of business user', function () {
  
  var BBAFile = "cypress/fixtures/userData/BusinessUsersData.json"
  var O2CFile = "cypress/fixtures/userData/O2Cdata.json"
  cy.readFile(BBAFile).then((data) => {
    var O2CMsisdn = data.registeredMobile
    //O2CTransferInitiatePage.getMSISDN().type("7735575036", {force: true})

    O2CTransferInitiatePage.getMSISDN().type(O2CMsisdn, { force: true })
  })
  



  cy.get('.fd-page.iframeContainer.svelte-1v5e28n > iframe').then(($iframe) => {
    const $body = $iframe.contents().find('body')
    const $win = $iframe[0].contentWindow

    const stub = cy.stub()
    if (cy.stub($win, 'alert', () => false)
      .as('windowConfirm')) {

    }

    else {
      cy.stub($win.console, 'log').as('consoleLog')
      cy.wrap($body)
        .find('input[name="amount"]').click({ force: true })
        .should(function () {

          expect(this.windowConfirm).to.be.calledWith("Channel User Does Not Exist")

        })
    }
  })
  O2CTransferInitiatePage.getTransferAmount().type(TransferAmount, { force: true })
  O2CTransferInitiatePage.getReferenceNumber().type(ReferenceNumber, { force: true })
  O2CTransferInitiatePage.getType().select(this.data15.O2CTransferInitiate.type, { force: true })
  O2CTransferInitiatePage.getNumber().type(number, { force: true })
  O2CTransferInitiatePage.getRemarks().type(getRandomName(), { force: true })

})

Then('Click on submit and Confirm2 for bulk', function () {

  
  O2CTransferInitiatePage.getSubmitButton().click({ force: true })
  cy.wait(2000)
  O2CTransferInitiatePage.getConfirmButton().click({ force: true })
  
  O2CTransferInitiatePage.getSuccessMsg().contains(this.data15.O2CInitiateMsg)
  //cy.O2CTransactionWriteData2()
})

