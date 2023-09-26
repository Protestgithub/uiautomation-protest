/// <reference types = "Cypress-iframe"/>
import { Given, And, Then, When } from "@badeball/cypress-cucumber-preprocessor";
import 'cypress-iframe';
import BulkPayout from '../../../../../../../../support/pageObjects/BulkPayout';
import homePage from '../../../../../../../../support/pageObjects/homePage';
import O2CTransferInitiate from '../../../../../../../../support/pageObjects/OperatorToChannel/O2CTransferInitiate';
import Approval from '../../../../../../../../support/pageObjects/TransferRules/Approval';
import "../../../../../../../../support/Utils/comissioncommands";
import TransferRulePage from "../../../../../../../../support/pageObjects/TransferRules/TransferRulePage";

var BAnkfile = 'cypress/fixtures/userData/BankData.json'

import approvals from '../../../../../../../../support/pageObjects/UserManagement/approvals';
import manageUsers from '../../../../../../../../support/pageObjects/UserManagement/manageUsers';
import commisionDisbursment from '../../../../../../../../support/pageObjects/CommisionDisbursment/commisionDisbursment';
import ChanneltoChannel from '../../../../../../../../support/pageObjects/ChanneltoChannel/ChanneltoChannel.js';
//----------------Object Declaration-----------------------------------------------------------------
const C2C = new ChanneltoChannel()
const welcomePage = new homePage()
const O2CTransferInitiatePage = new O2CTransferInitiate()
const BptPage = new BulkPayout()
const approvalPage = new approvals()
const manageUsersPage = new manageUsers()
var filename = 'cypress/fixtures/userData/SystemAdminLogin.json'
const commisionDisbursmentPage = new commisionDisbursment()
const transferrulepage = new TransferRulePage()
var businesslogin = "cypress/fixtures/userData/BusinessUsersData.json"


const cdCSVFile = 'templates/CommissionDisbursement.csv'
//----------------------------------------------------------------------------------------------

Then('Select CommisionDisbursment Option', function () {

  BptPage.getServicename().select(this.data2.personalInfo.ServiceName1, { force: true })
})

//-------------------------------------------------------------------------------------------


And('enter the System admin Number and search the SuspendResume user', function () {
  manageUsersPage.getUserSearchDetails().click({ force: true })
  //cy.getSubscriberMobileNumberSuspension()
  cy.readFile(filename).then((data) => {
    let SysNumbr = data.MobileNumber
    manageUsersPage.getUserSearchDetails().type(SysNumbr, { force: true })
  })
  manageUsersPage.getSearchUserButton().click({ force: true })
})

Given('Login into Mobiquity Portal with the suspended System admin Maker', function () {
  cy.launchURL(Cypress.env('Adminurl'))

  cy.readFile(filename).then((data) => {
    cy.login(data.LoginId, this.data1.BAPassword)

  })

})


//----------NEW----------------------------------------------------------------------------------

Then('Assert the Error that User is suspended', function () {
  cy.waitUntil(() => {
    return cy.iframe().find('[class="snackbar"]').contains(this.data9.Suspended)
  })

})

//----------CommissionDisbursment-------------------------------------------------------------

And('Select the CommisionDisbursment service from dropdown list', function () {
  cy.wait(2000)
  BptPage.getServicename().select(this.data2.personalInfo.ServiceName1, { force: true })

})


//------C2C-------------------------------------------------------------------------------


And('Click on Inverse Channel to Channel Link and Enter Details to add commission amount', function () {

  welcomePage.getChanneltoChannel().click({ force: true })
  cy.wait(2000)
  C2C.getDomain().select(this.data13.TransferRuleForComm.FromDomain)
  cy.wait(2000)
  C2C.getToDomain().select(this.data13.TransferRuleForComm.ToDomain)

  //  cy.intercept("/CoreWeb/stock/c2cTrf_ajaxLoadProviders.action?accessId=")
  cy.readFile(businesslogin).then((data) => {
    let MSISDN = data.registeredMobileHeadMerch
    C2C.getmsisdn().type(MSISDN)
  })

  cy.wait(2000)
  C2C.getSubmit().click({ force: true })
  cy.wait(2000)
  C2C.getPayeeType().select(this.data13.TransferRuleForComm.Payeetype)
  C2C.getSubmit().click({ force: true })

  cy.wait(1000)
  C2C.getamount().type('100')
  cy.wait(1000)
  C2C.getsubmit().click({ force: true })
  cy.wait(2000)
  C2C.getconfirm().click({ force: true })
  cy.wait(3000)
  C2C.getsucessmessage().contains(this.data13.TransferRuleForComm.C2CSuccess)
})

And('Click on the Transaction User ID and Download the CSV', function () {

  cy.getTransferID(businesslogin)
  cy.wait(3000)
  cy.intercept('/CoreWeb/commission/commissionDisbursementAction_input.action').as('getCSV')
  commisionDisbursmentPage.getCDDownloadCSVButton().click({ force: true })
  cy.wait('@getCSV')
})


Then('Upload the Csv for Comission disbursment', function () {
  commisionDisbursmentPage.getBulkPayoutTool().scrollIntoView()
  commisionDisbursmentPage.getBulkPayoutTool().click()
  // cy.intercept(this.data20.BulkPayoutInitiate).as('getbulkinitiate')
  commisionDisbursmentPage.getBulkPayoutInitiate().click()
  // cy.wait('@getbulkinitiate',{timeout:30000})
  cy.wait(3000)
  cy.getCSVEdit(cdCSVFile)
  commisionDisbursmentPage.getFileUpload().attachFile('templates/modified_commission_disbursement.csv')
  cy.wait(5000)
  //  cy.intercept(this.data20.FileUpload).as('getambiguous')
  commisionDisbursmentPage.getFileUploadSubmitButton().click({ force: true })
  // cy.wait('@getambiguous',{timeout:30000})
  cy.wait(3000)
  commisionDisbursmentPage.getUploadCSVAlertSuccess().should('contain.text', this.data9.alertmessage)

  cy.iframe().find('[class="alert alert-success"]').invoke('text').then((text) => {
    const batchIdPattern = /batch ID: ([A-Za-z0-9.]+)/
    cy.readFile(BAnkfile).then((data) => {
      const BulkID = text.match(batchIdPattern)

      data.BulkID = BulkID ? BulkID[1] : ""
      console.log("Batch ID:", BulkID)
      return cy.writeFile(BAnkfile, data)

    })
  })
})

//---------Approval--------------------------------------------------

Then('Select the Service and Click on Approve with the Invalid User', function () {
  cy.getBulkApproval(BAnkfile)
})
//-----------REJECT----------------
Then('Select the Initiated Service and Click on Reject', function () {
  cy.getBulkReject(BAnkfile)
  cy.waitUntil(() => {
    return cy.iframe().find('[class="col s6 alert alert-success padd_tb"]').contains(this.data9.ComDisBulkReject)
  })
})

//----------APPROVAL--------------------------------------

And('Select the Service and Click on Approve for Initiation', function () {
  cy.getBulkApproval(BAnkfile)

  cy.waitUntil(() => {
    return cy.iframe().find('[role="alert"]').eq(1).contains(this.data9.ComDisBulKSuccess)

  })
})


And('Click on Bulk Payout Dashboard and Click on view BUlk ID', function () {
  cy.wait(2000)
  cy.getDashboard(BAnkfile)
})


//---------------------------------------------------------------------

And('Click on Bulk Payout Dashboard and Click on view for failed Status', function () {
  cy.wait(2000)
  cy.getDashboardFAILED(BAnkfile)

  cy.waitUntil(() => {
    return cy.iframe().find('[class="col s2 ml10 success_failed"]').contains('Failed')
  })


})


//---------ASsertion------------------------

Then('Assert the Transaction details', function () {

  commisionDisbursmentPage.getCDDownloadCSVButton().should('be.be.visible')
  cy.iframe().find('#WalletTypeId2')
    .should('contain', 'Normal')
    .should('contain', 'Salary')
})

//--------------------------------------------------------------------------------------

Then('Upload the Csv for Comission disbursment with Invalid amount', function () {
  commisionDisbursmentPage.getBulkPayoutTool().scrollIntoView()
  commisionDisbursmentPage.getBulkPayoutTool().click()
  // cy.intercept(this.data20.BulkPayoutInitiate).as('getbulkinitiate')
  commisionDisbursmentPage.getBulkPayoutInitiate().click()
  // cy.wait('@getbulkinitiate',{timeout:30000})
  cy.wait(3000)

  commisionDisbursmentPage.getFileUpload().attachFile('templates/CommissionDisbursement.csv')
  cy.wait(5000)
  //  cy.intercept(this.data20.FileUpload).as('getambiguous')
  commisionDisbursmentPage.getFileUploadSubmitButton().click({ force: true })
  // cy.wait('@getambiguous',{timeout:30000})
  cy.wait(3000)
  commisionDisbursmentPage.getUploadCSVAlertSuccess().should('contain.text', this.data9.alertmessage)

  cy.iframe().find('[class="alert alert-success"]').invoke('text').then((text) => {
    const batchIdPattern = /batch ID: ([A-Za-z0-9.]+)/
    cy.readFile(BAnkfile).then((data) => {
      const BulkID = text.match(batchIdPattern)

      data.BulkID = BulkID ? BulkID[1] : ""
      console.log("Batch ID:", BulkID)
      return cy.writeFile(BAnkfile, data)

    })
  })
})




//----27-7-23-------------------------

When('Commission Disbursement Process and Commission Withdraw Initiate', function () {
  commisionDisbursmentPage.getCommisionDisbursmentProcess().scrollIntoView()
  commisionDisbursmentPage.getCommisionDisbursmentProcess().click()
  cy.intercept(this.data20.CommisionDisbursment).as('getcommissionmang')
  commisionDisbursmentPage.getComissionWithdrawInitiate().click()
  cy.wait('@getcommissionmang', { timeout: 30000 })
  cy.wait(2000)
})

And('Click on the Transaction User ID for Comission withdraw Initiate and Download the CSV', function () {

  cy.getWithdrawInitiate(businesslogin)
  cy.wait(3000)
  cy.intercept('/CoreWeb/commission/commissionDisbursementAction_input.action').as('getCSV')
  commisionDisbursmentPage.getDownloadComissionwithdraw().click({ force: true })
  cy.wait('@getCSV')
})


Then('Upload the Csv for Comission Withdrawal Initiate', function () {
  commisionDisbursmentPage.getBulkPayoutTool().scrollIntoView()
  commisionDisbursmentPage.getBulkPayoutTool().click()
  // cy.intercept(this.data20.BulkPayoutInitiate).as('getbulkinitiate')
  commisionDisbursmentPage.getBulkPayoutInitiate().click()
  // cy.wait('@getbulkinitiate',{timeout:30000})

  cy.wait(20000)
  BptPage.getServicename().select(this.data2.personalInfo.ServiceName2, { force: true })
  cy.wait(2000)
  BptPage.getDownloadTemplate().click({ force: true })
  cy.waitUntil(() => {
    return cy.iframe().find('button.btn.waves-effect.waves-light.submitBtn').should('be.visible', { force: true })
  })
  const inputFilePath = 'cypress/fixtures/templates/CommissionWithdrawal.csv'
  const outputFilePath = 'cypress/fixtures/templates/BULK_COMWITHDRW-template.csv'
  cy.wait(5000)
  cy.readFile(inputFilePath, 'utf8').then((fileData) => {
    const inputRows = fileData.split('\n').map((line) => line.split(','))
    const updatedRows = inputRows.map((row, index) => {
      if (index === 0) {
        return [
          ...row,
          'Additional Parameter 1',
          'Additional Parameter 2',
          'Additional Parameter 3',
          'Additional Parameter 4',
          'Additional Parameter 5',
          'Additional Parameter 6',
          'Additional Parameter 7',
          'Additional Parameter 8',
          'Additional Parameter 9',
          'Additional Parameter 10'
        ];
      } else {

        const additionalParameterValues = ['', '', '', '', '', '', '', '', '', '']
        return [...row, ...additionalParameterValues]
      }
    })
    const outputData = updatedRows.map((row) => row.join(',')).join('\n')
    cy.writeFile(outputFilePath, outputData, 'utf8').then(() => {
      cy.log('CSV file copied and updated successfully!')
    })
  })
  commisionDisbursmentPage.getFileUpload().attachFile('templates/BULK_COMWITHDRW-template.csv')
  cy.wait(5000)
  //  cy.intercept(this.data20.FileUpload).as('getambiguous')
  commisionDisbursmentPage.getFileUploadSubmitButton().click({ force: true })
  // cy.wait('@getambiguous',{timeout:30000})
  cy.wait(3000)
  commisionDisbursmentPage.getUploadCSVAlertSuccess().should('contain.text', this.data9.alertmessage)

  cy.iframe().find('[class="alert alert-success"]').invoke('text').then((text) => {
    const batchIdPattern = /batch ID: ([A-Za-z0-9.]+)/
    cy.readFile(BAnkfile).then((data) => {
      const WithdrawID = text.match(batchIdPattern)

      data.WithdrawID = WithdrawID ? WithdrawID[1] : ""
      console.log("Batch ID:", WithdrawID)
      return cy.writeFile(BAnkfile, data)

    })
  })
})

//--------Commission Disbursment Negative CSv------------------------


When('Navigate to BulkPayout tool and Click on BulkPayout Initiation', function () {
  commisionDisbursmentPage.getBulkPayoutTool().scrollIntoView()
  commisionDisbursmentPage.getBulkPayoutTool().click()
  // cy.intercept(this.data20.BulkPayoutInitiate).as('getbulkinitiate')
  commisionDisbursmentPage.getBulkPayoutInitiate().click()
  // cy.wait('@getbulkinitiate',{timeout:30000})
  cy.wait(3000)
})


Then('Upload the Csv for Comission disbursment with the Negative value', function () {
  cy.getCSVNegative()
  commisionDisbursmentPage.getFileUpload().attachFile('templates/modified_commission_disbursement.csv')
  cy.wait(5000)
  //  cy.intercept(this.data20.FileUpload).as('getambiguous')
  commisionDisbursmentPage.getFileUploadSubmitButton().click({ force: true })
  // cy.wait('@getambiguous',{timeout:30000})
  cy.wait(3000)

  cy.waitUntil(() => {
    return cy.iframe().find('[class="col s2 ml10 success_failed"]').contains(this.data9.FAiledstatus)
  })
})

When('Click on Add Transfer Rule Button fo C2CService.', function () {
  cy.intercept(this.data20.AddToTransferb).as('addtransferrule')
  transferrulepage.getAddToTransferbttn().click()
  cy.wait('@addtransferrule', { timeout: 30000 })
  cy.wait(2000)
  cy.iframe().find("div#page.container").then(($body) => {
    //   // synchronously query for element
    let a = $body.text()
    //let b = $body.find(".errorMessage").length
    cy.log(a)
    // cy.log(b)
    if (a.includes('Please provide the details:')) {
      transferrulepage.getStatus().select(this.data13.TransferRuleForC2C.Status, { force: true })
      transferrulepage.getTransferType().select(this.data13.TransferRuleForC2C.TransferType, { force: true })
      transferrulepage.getGeographicalDomain().select(this.data13.TransferRuleForC2C.GeographicalDomain, { force: true })
      transferrulepage.getDirectTransferAllowed().check()
      transferrulepage.getBypassAllowed().check()

      transferrulepage.getSubmitbttn2().click()
      cy.wait(2000)
      transferrulepage.getConfirmbttn().click()
      cy.wait(2000)
      transferrulepage.getAssertMessage().should('be.visible')
      cy.wait(2000)
      transferrulepage.getAssertMessage().then((val) => {
        let q = val.text()
        cy.log(q)
        let a = q.split(':')
        let b = a[1].trim()
        cy.log(b)
        cy.readFile(DataFile).then((data) => {
          data.TransferRuleIDC2C2 = b
          cy.writeFile(DataFile, data)
        })
      })
    }
    else {
      count = 1
      cy.wait(2000)
      transferrulepage.getErrorMessage().contains("already")

    }
  })

})



And('Select the Service and Click on Approve for Withdrawal Initiation', function () {
  cy.getBulkApprovalWithdrawal(BAnkfile)

  cy.waitUntil(() => {
    return cy.iframe().find('[role="alert"]').eq(1).contains(this.data9.ComDisBulKSuccess)

  })
})