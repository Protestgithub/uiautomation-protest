// <reference types="Cypress" />
/// <reference types = "Cypress-iframe"/>
import { And, Then, When } from "@badeball/cypress-cucumber-preprocessor";
import 'cypress-iframe';
import BulkPayout from '../../../../../../../../support/pageObjects/BulkPayout';
import homePage from '../../../../../../../../support/pageObjects/homePage';
import O2CTransferInitiate from '../../../../../../../../support/pageObjects/OperatorToChannel/O2CTransferInitiate';
import Approval from '../../../../../../../../support/pageObjects/TransferRules/Approval';
import "../../../../../../../../support/Utils/generic";


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
  for (var i = 0; i <230; i++)
    name += possible.charAt(Math.floor(Math.random() * possible.length));
  return name;
}


function getRandomName1() {
  name = "";
  var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
  for (var i = 0; i <200; i++)
    name += possible.charAt(Math.floor(Math.random() * possible.length));
  return name;
}
const date2 = new Date().toLocaleString('en-GB').split(',')


//-----------------------------------------------------------------------------------------------


Then('click on submit and Assert the error message' , function () {
    BptPage.getRemark().click({ force: true }).type('UI Automation')

    BptPage.getSubmit().click({ force: true })
   BptPage.getalertdngr().should('be.visible')

})

Then('Assert the success message when CSV file is uploaded', function () {
   
  BptPage.getTextBox().contains(this.data15.FileUploadSuccessmsg)
})


Then('update the json data for the Bulk Payout', function () {
    cy.readFile("cypress/fixtures/BulkData/BULK_O2C-template.json").then((data) => {
      data['Serial Number*'] = "30",
        data['MFS Provider*'] = this.data009.MFSProvider,
        data['Receiver SVA Type ID*'] = this.data009.ReceiverSVATypeID,
        cy.readFile(BBAFile).then((user) => {
          var O2CMsisdn = user.registeredMobileO2C
          data['Receiver Mobile Number*'] = O2CMsisdn
        })
      data['Amount*'] = "RTSrrfT",
        data['Transfer Date*'] = date2[3],
        data['Payment Type*'] = this.data009.PaymentType,
        data['Reference number*'] = "WRW546D",
        data['Remarks*'] = this.data009.Remarks,
        data['Payment Number'] = this.data009.PaymentNumber,
        data['Payment Date'] = date2[3],
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
      //cy.writeFile("cypress/fixtures/BulkData/BULK_O2C-template.json", data)
    })
  })

  Then('check the error message when the upload file content is invalid', function () {
  cy.jsonToCSV(JsonFile, CsvFile)
  BptPage.getUploadLink().attachFile('templates/BULK_O2C-template.csv')
   cy.wait(3000)
  cy.intercept(this.data20.Submit).as('getsubmit')
  BptPage.getSubmit().dblclick({ force: true })
  cy.wait('@getsubmit', { timeout: 30000 })
    BptPage.getErrorTextBox().contains(this.data15.FileUploadError)
  })



  Then('check the error message when invalid CSV is uploaded', function () {
    cy.jsonToCSV(JsonFile, CsvFile)
    BptPage.getUploadLink().attachFile('templates/BULK_O2C-template')
     //cy.wait(3000)
      BptPage.getalertdngr().contains(this.data15.CSVfileUploaderror)

  })


  //---------------------------------------------------------------------------------------------

  Then('Enter the Common Remark and Check for the Error Message', function() {
    name = getRandomName()
    BptPage.getRemark().click({ force: true }).type(name)
    cy.csvToJSON(CsvFile, JsonFile)
    //cy.wait(5000)
   

  })

  Then('check for the error message of Remark', function () {
    cy.jsonToCSV(JsonFile, CsvFile)
    BptPage.getUploadLink().attachFile('templates/BULK_O2C-template.csv')
      cy.wait(3000)
    cy.intercept(this.data20.Submit).as('getsubmit')
    BptPage.getSubmit().dblclick({ force: true })
    cy.wait('@getsubmit', { timeout: 30000 })
     // cy.wait(5000)
     
      BptPage.getErrorTextBox().contains(this.data15.FileUploadError)
  })


  And('Upload the a. CSV file and assert the error message', function() {
    cy.jsonToCSV(JsonFile, CsvFile)
    BptPage.getUploadLink().attachFile('templates/BULK_O2C-template.csv')
      cy.wait(3000)
    cy.intercept(this.data20.Submit).as('getsubmit')
    BptPage.getSubmit().dblclick({ force: true })
    cy.wait('@getsubmit', { timeout: 30000 })
      cy.wait(5000)
    BptPage.getErrorTextBox().then(($btn) => {
      const txt = $btn.text()
      cy.log(txt)
    })
      cy.wait(3000)
    
  })
  
  

  When('Click on download to download the error log file', function () {
    cy.waitUntil( () => {
      return cy.iframe().find('[class="text_decoration"]').contains('Download error status').click({ force:true })
         })

  })


  Then('Enter the Common Remark less than 200 characters', function() {
    name = getRandomName1()
    BptPage.getRemark().click({ force: true }).type(name)
    cy.csvToJSON(CsvFile, JsonFile)
  

  })

Then('Assert the success message of Bulk upload', function() {
  
  BptPage.getTextBox().contains(this.data15.FileUploadSuccessmsg)
})




Then('update the json data for Bulk Payout by without entering the Mobile Number', function () {
  cy.readFile("cypress/fixtures/BulkData/BULK_O2C-template.json").then((data) => {
    data['Serial Number*'] = "30",
      data['MFS Provider*'] = this.data009.MFSProvider,
      data['Receiver SVA Type ID*'] = this.data009.ReceiverSVATypeID,
     
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
    //cy.writeFile("cypress/fixtures/BulkData/BULK_O2C-template.json", data)
  })
  cy.jsonToCSV(JsonFile, CsvFile)
  BptPage.getUploadLink().attachFile('templates/BULK_O2C-template.csv')
    cy.wait(3000)
  cy.intercept(this.data20.Submit).as('getsubmit')
  BptPage.getSubmit().dblclick({ force: true })
  cy.wait('@getsubmit', { timeout: 30000 })
    //cy.wait(5000)

})


Then('update the json data for Bulk Payout by without entering the To MFS Provider', function () {
  cy.readFile("cypress/fixtures/BulkData/BULK_O2C-template.json").then((data) => {
    data['Serial Number*'] = "30",
      // data['MFS Provider*'] = this.data009.MFSProvider,
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
   // cy.writeFile("cypress/fixtures/BulkData/BULK_O2C-template.json", data)
  })
  cy.jsonToCSV(JsonFile, CsvFile)
  BptPage.getUploadLink().attachFile('templates/BULK_O2C-template.csv')
    cy.wait(3000)
  cy.intercept(this.data20.Submit).as('getsubmit')
  BptPage.getSubmit().dblclick({ force: true })
  cy.wait('@getsubmit', { timeout: 30000 })
    //cy.wait(5000)

})



Then('update the json data for Bulk Payout by without entering the Amount', function () {
  cy.readFile("cypress/fixtures/BulkData/BULK_O2C-template.json").then((data) => {
    data['Serial Number*'] = "30",
      data['MFS Provider*'] = this.data009.MFSProvider,
      data['Receiver SVA Type ID*'] = this.data009.ReceiverSVATypeID,
      cy.readFile(BBAFile).then((user) => {
        var O2CMsisdn = user.registeredMobileO2C
        data['Receiver Mobile Number*'] = O2CMsisdn
      })
   // data['Amount*'] = "100",
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
    //cy.writeFile("cypress/fixtures/BulkData/BULK_O2C-template.json", data)
  })

  cy.jsonToCSV(JsonFile, CsvFile)
  BptPage.getUploadLink().attachFile('templates/BULK_O2C-template.csv')
    cy.wait(3000)
  cy.intercept(this.data20.Submit).as('getsubmit')
  BptPage.getSubmit().dblclick({ force: true })
  cy.wait('@getsubmit', { timeout: 30000 })
    //cy.wait(5000)
})

Then('update the json data for Bulk Payout by without entering the Individual Remarks', function () {
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

  cy.jsonToCSV(JsonFile, CsvFile)
  BptPage.getUploadLink().attachFile('templates/BULK_O2C-template.csv')
    cy.wait(3000)
  cy.intercept(this.data20.Submit).as('getsubmit')
  BptPage.getSubmit().dblclick({ force: true })
  cy.wait('@getsubmit', { timeout: 30000 })
    //cy.wait(5000)
})


Then('Assert the Error Message that Bulk Upload Failed' ,function () {

       BptPage.getErrorTextBox().contains(this.data15.FileUploadError)
})

//======04-07-23======================================================================
And('Select the different service from dropdown list', function () {
  //selecting the different service
  cy.wait(8000)
 BptPage.getServicename().select(this.data2.personalInfo.ServiceName1, { force: true })

})

And('Upload the CSV file with the different service',function() {
 
  cy.jsonToCSV(JsonFile, CsvFile)
  BptPage.getUploadLink().attachFile('templates/BULK_O2C-template.csv')
    cy.wait(3000)
  cy.intercept(this.data20.Submit).as('getsubmit')
  BptPage.getSubmit().dblclick({ force: true })
  cy.wait('@getsubmit', { timeout: 30000 })
    //cy.wait(5000)
  
         BptPage.getErrorTextBox().contains(this.data15.FileUploadError)
})



Then('Assert the Drop down options in Bulk Payout tool' , function() {
  cy.waitUntil( () => {
    return cy.iframe().find('[class="select_label"]').should('be.visible')
       })
       //cy.wait(2000)
  cy.iframe().find('.browser-default.ng-untouched.ng-pristine.ng-valid')
  .should('contain', 'Commission Disbursement')
  .should('contain', 'Withdraw Accrued Commission')
  .should('contain', 'O2C Transfer')
  .should('contain', 'Operator Withdraw')
  
 })



 Then('update the json data for Bulk Payout by without entering the To Wallet NO', function () {
  cy.readFile("cypress/fixtures/BulkData/BULK_O2C-template.json").then((data) => {
    data['Serial Number*'] = "30",
      data['MFS Provider*'] = this.data009.MFSProvider,

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
    //cy.writeFile("cypress/fixtures/BulkData/BULK_O2C-template.json", data)
  })

  cy.jsonToCSV(JsonFile, CsvFile)
  BptPage.getUploadLink().attachFile('templates/BULK_O2C-template.csv')
    cy.wait(3000)
  cy.intercept(this.data20.Submit).as('getsubmit')
  BptPage.getSubmit().dblclick({ force: true })
  cy.wait('@getsubmit', { timeout: 30000 })
   // cy.wait(5000)
})



And('Click on Bulk Payout Approval link and view All the Batches', function () {
  cy.intercept('/CoreWeb/bulkprocessing/bulk.action*').as('getApprovePage')
 BptPage.getBulkApprove().click({ force: true })
 cy.wait('@getApprovePage')
 
 cy.waitUntil( () => {
      return cy.iframe().find('[class="ng-untouched ng-pristine ng-valid"]').contains(this.data15.ViewStatus)
         })
})


And('Click on Bulk Payout Dashboard and view All the Batches', function () {
  cy.intercept('/CoreWeb/bulkprocessing/bulk.action*').as('getApprovePage')
 BptPage.getBulkDashboard().click({ force: true })
 cy.wait('@getApprovePage')

 cy.waitUntil( () => {
  return cy.iframe().find('[class="ng-untouched ng-pristine ng-valid"]').eq(0).contains(this.data15.ViewStatus)
     })
})
