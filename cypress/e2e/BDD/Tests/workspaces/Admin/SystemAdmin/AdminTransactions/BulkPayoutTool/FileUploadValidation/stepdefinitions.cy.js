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

And('Enter Common Remarks for non CSV', function () {
  BptPage.getRemark().click({ force: true }).type('testing user1234')
})


Then('Upload a non .csv file', function () {
  BptPage.getUploadLink().attachFile('blank.pdf')
  
  BptPage.getErrorTextBox().then(($btn) => {
    const txt = $btn.text()
    cy.log(txt)
  })
})


Then('update the json data with Sr No as blank', function () {
  cy.readFile("cypress/fixtures/BulkData/BULK_O2C-template.json").then((data) => {
    data['Serial Number*'] = " ",
      data['MFS Provider*'] = this.data009.MFSProvider,
      data['Receiver SVA Type ID*'] = this.data009.ReceiverSVATypeID,
      cy.readFile(BBAFile).then((data) => {
        var O2CMsisdn = data.registeredMobileO2C
        data['Receiver Mobile Number*'] = O2CMsisdn
      })
    data['Amount*'] = this.data007.TransferAmt,
      data['Transfer Date*'] = this.data009.TransferDate,
      data['Payment Type*'] = this.data009.PaymentType,
      data['Reference number*'] = this.data007.RefNum,
      data['Remarks*'] = this.data009.Remarks,
      data['Payment Number'] = this.data009.PaymentNumber,
      data['Payment Date'] = this.data009.PaymentDate,
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

And('Upload a .csv file with Invalid details', function () {
  cy.jsonToCSV(JsonFile, CsvFile)
  BptPage.getUploadLink().attachFile('templates/BULK_O2C-template.csv')
  
  cy.intercept(this.data20.Submit).as('getsubmit')
  BptPage.getSubmit().dblclick({ force: true })
  cy.wait('@getsubmit', { timeout: 30000 })
  BptPage.getErrorTextBox().then(($btn) => {
    const txt = $btn.text()
    cy.log(txt)
  })
})

Then('update the json data with From MFS Provider as blank', function () {
  cy.readFile("cypress/fixtures/BulkData/BULK_O2C-template.json").then((data) => {
    data['Serial Number*'] = "30",
      data['MFS Provider*'] = " ",
      data['Receiver SVA Type ID*'] = this.data009.ReceiverSVATypeID,
      cy.readFile(BBAFile).then((data) => {
        var O2CMsisdn = data.registeredMobileO2C
        data['Receiver Mobile Number*'] = O2CMsisdn
      })
    data['Amount*'] = this.data007.TransferAmt,
      data['Transfer Date*'] = this.data009.TransferDate,
      data['Payment Type*'] = this.data009.PaymentType,
      data['Reference number*'] = this.data007.RefNum,
      data['Remarks*'] = this.data009.Remarks,
      data['Payment Number'] = this.data009.PaymentNumber,
      data['Payment Date'] = this.data009.PaymentDate,
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


Then('update the json data with From Payment Instrument as blank', function () {
  cy.readFile("cypress/fixtures/BulkData/BULK_O2C-template.json").then((data) => {
    data['Serial Number*'] = "30",
      data['MFS Provider*'] = this.data009.MFSProvider,
      data['Receiver SVA Type ID*'] = this.data009.ReceiverSVATypeID,
      cy.readFile(BBAFile).then((data) => {
        var O2CMsisdn = data.registeredMobileO2C
        data['Receiver Mobile Number*'] = O2CMsisdn
      })
    data['Amount*'] = this.data007.TransferAmt,
      data['Transfer Date*'] = this.data009.TransferDate,
      data['Payment Type*'] = this.data009.PaymentType,
      data['Reference number*'] = this.data007.RefNum,
      data['Remarks*'] = this.data009.Remarks,
      data['Payment Number'] = " ",
      data['Payment Date'] = this.data009.PaymentDate,
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