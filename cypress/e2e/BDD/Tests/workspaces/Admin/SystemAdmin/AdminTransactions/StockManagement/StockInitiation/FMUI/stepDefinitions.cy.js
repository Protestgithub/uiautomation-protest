/// <reference types="Cypress" />
/// <reference types = "Cypress-iframe"/>

//----------------Imports---------------------------------------------------------------------
import { And, Then, When } from "@badeball/cypress-cucumber-preprocessor";
import 'cypress-iframe';
import homePage from '../../../../../../../../../../support/pageObjects/homePage';
import myActivity from '../../../../../../../../../../support/pageObjects/MyActivity/myActivity';
import stockInitiation from '../../../../../../../../../../support/pageObjects/StockManagement/stockInitiation';
import stockManagement from '../../../../../../../../../../support/pageObjects/StockManagement/stockManagement';
import approvals from '../../../../../../../../../../support/pageObjects/UserManagement/approvals';
import manageUsers from '../../../../../../../../../../support/pageObjects/UserManagement/manageUsers';
import "../../../../../../../../../../support/Utils/generic";
import "../../../../../../../../../../support/Utils/StockCommands";


//----------------Object Declaration-----------------------------------------------------------------

const welcomePage = new homePage()
const stockInitiationPage = new stockInitiation()
const stockManagementPage = new stockManagement()
const myActivityPage = new myActivity()
const manageUsersPage = new manageUsers()
const approvalPage = new approvals()
var filenamestock = 'cypress/fixtures/StockManagement.json'
var filename = 'cypress/fixtures/userData/AdminTransaction.json'
var SYSfilename = 'cypress/fixtures/userData/SystemAdminLogin.json'
const o2cBusinessNo = 'cypress/fixtures/userData/BusinessUsersDataO2C.json'

var mobile
const uuid = () => Cypress._.random(1e8)
mobile = "77" + uuid()

var refno
refno = "12" + uuid()

var amount
const uuuid = () => Cypress._.random(1e3)
amount = uuuid()

var amount1
const uuuuid = () => Cypress._.random(1e11)
amount1 = uuuuid()

const uid = () => Cypress._.random(1e2)
const id = uid()
const testname = `testname${id}`
var name
function getRandomName() {
  name = "";
  var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
  for (var i = 0; i < 5; i++)
    name += possible.charAt(Math.floor(Math.random() * possible.length));
  return name;
}


///////////////////////////////////////////////////////////////////////////

When('Navigate to Admin Transaction and Click on Stock Creation', function () {
  cy.intercept('/mobiquitypay/v1/service-config*').as('getAdminTxn')
stockInitiationPage.getAdminTransaction().click()
 cy.wait('@getAdminTxn', {timeout:20000})
  stockInitiationPage.getStockCreation().click()
  cy.wait(2000)
})
And('Enter all the Stock Information', function () {
  stockInitiationPage.getCurrency().select("US Dollar")
  stockInitiationPage.getTrustBank().select("TBN101")
  stockInitiationPage.getToStockAccount().select("Operator Main Wallet")
  stockInitiationPage.getTransactionAmount().type(amount)
  stockInitiationPage.getReferencenumber().type(refno + getRandomName())
  stockInitiationPage.getRemarks().type(getRandomName())
})
Then('Click on Create and Confirm Success Message', function () {
  stockInitiationPage.getCreateButton().click()
  stockInitiationPage.getSaveButton().click()
  stockInitiationPage.getSuccessMessage().contains(" Your transaction request has been initiated, and is now pending confirmation ")
  stockInitiationPage.getDone().click()
})


And('Click on MyActivity, filter Stock Creation and get Creation on time', function () {
  welcomePage.getMyActivity().click()
  myActivityPage.getFilter().click({ force: true })
  myActivityPage.getEnterworkflows().type('Stock Creation').click()
  
  myActivityPage.getSubmittedStatus().click()
  myActivityPage.getApply().click()
  cy.readFile(SYSfilename).then((user) => {
    let BAMobile = user.MobileNumber
    var BBAMobile = " " + BAMobile
    manageUsersPage.getAssertMobile().eq(1).should('contain', BBAMobile)
  })
  myActivityPage.getCreatedOnTime().eq(1).invoke('text').then((time) => {
    time = time.trim()
    cy.log(time)
    cy.readFile(filename).then((data) => {
      data.CreatedOnTime = time
      cy.writeFile(filename, data)
    })
  })
})

And('User click on Stock submitted user data', function () {
  cy.getApproval(filename)
})

When('Navigate to approvals', function () {
  welcomePage.getApprovalTab().click()
  cy.wait(10000)
})

And('Apply Stock Creation filter', function () {
  approvalPage.getFilter().click({ force: true })
  myActivityPage.getEnterworkflows().type('Stock Creation').click()
  approvalPage.getSubmittedCheckBox().click()
  approvalPage.getApplyFilter().click()
})
And('Apply Stock Transfer filter', function () {
  approvalPage.getFilter().click({ force: true })
  myActivityPage.getEnterworkflows().type('Stock Transfer')
  approvalPage.getSubmittedCheckBox().click()
  approvalPage.getApplyFilter().click()
})
/////////////////////////////////////////////////////////////////////////////////////////////////////////

When('Navigate to Admin Transaction and Click on Transfer', function () {
  cy.intercept('/mobiquitypay/v1/service-config*').as('getAdminTxn')
stockInitiationPage.getAdminTransaction().click()
 cy.wait('@getAdminTxn', {timeout:20000})
cy.intercept('/mobiquitypay/v1/service-config*').as('getAllocation')
  stockInitiationPage.getStockTransfer().click()
cy.wait('@getAllocation',{timeout:20000})
})
And('Enter all the Stock Transfer Information', function () {
  stockInitiationPage.getCurrency().select("US Dollar")
  stockInitiationPage.getAccountType().select("Operator Main Wallet")
  stockInitiationPage.getToWalletType().select("Rewards Redemption Account")
  stockInitiationPage.getTransactionAmount().type(amount)
  stockInitiationPage.getReferencenumber().type(refno + getRandomName())
  stockInitiationPage.getRemarks().type(getRandomName())
})
And('Click on MyActivity, filter Stock Transfer and get Creation on time', function () {
  welcomePage.getMyActivity().click()
  myActivityPage.getFilter().click({ force: true })
  myActivityPage.getEnterworkflows().type('Stock Transfer').click()
  myActivityPage.getSubmittedStatus().click()
  myActivityPage.getApply().click()
  cy.readFile(SYSfilename).then((user) => {
    let BAMobile = user.MobileNumber
    var BBAMobile = " " + BAMobile
    manageUsersPage.getAssertMobile().eq(1).should('contain', BBAMobile)
  })
  myActivityPage.getCreatedOnTime().eq(1).invoke('text').then((time) => {
    time = time.trim()
    cy.log(time)
    cy.readFile(filename).then((data) => {
      data.CreatedOnTime = time
      cy.writeFile(filename, data)
    })
  })
})
Then('Confirm the Success Message for Stock Initiation', function () {
  approvalPage.getApproveConfirmationMessage().then((para) => {
    let a = para.text()
    let b = a.split(':')
    let c = b[3]
    cy.readFile(filename).then((d) => {
      d.TransactionID = c
      cy.writeFile(filename, d)
    })
  })
})


//////////////////////////////////////////////////////////////////////////

And('Search by Transaction ID and Enquire the Stock', function () {
  cy.readFile(filename).then((data) => {
    let ID = data.TransactionID
    stockInitiationPage.getSearchType().type(ID)
  })
  stockInitiationPage.getSearchButton().click()
  stockInitiationPage.getSuccess().contains('Success')
})

And('Search by Transaction ID for EA and Enquire the Stock', function () {
  cy.readFile(filename).then((data) => {
    let ID = data.EARATransactionID
    stockInitiationPage.getSearchType().type(ID)
  })
  stockInitiationPage.getSearchButton().click()
  stockInitiationPage.getSuccess().contains('Success')
})

///////////////////////////////////////////////////////////////////////////////////////////

// When('Navigate to Admin Transaction and Click on reimbursement', function () {
//   stockInitiationPage.getAdminTransaction().click()
//   stockInitiationPage.getMoreView().eq(1).click()
//   stockInitiationPage.getReimbursement().click()
// })

// And('Enter all the Reimbursement Information', function () {
//   stockInitiationPage.getCurrency().select("US Dollar")
//   stockInitiationPage.getUserType().select("Business")
//   cy.readFile(o2cBusinessNo).then((userMob) => {
//     var userMobileNum = userMob.registeredMobileO2C
//     stockInitiationPage.getMobileNumber().type(userMobileNum)
//   })
//   stockInitiationPage.getBusinessId().click()
//   stockInitiationPage.getWalletType().select("Normal")
//   stockInitiationPage.getBusinessId().type(refno)
//   stockInitiationPage.getTransactionAmount().type(amount)
//   stockInitiationPage.getReferencenumber().type(refno + getRandomName())
//   stockInitiationPage.getRemarks().type(getRandomName())
//   stockInitiationPage.getReferenceDate().type('2023-01-24')
// })

And('Click on MyActivity, filter Stock Reimbursement and get Creation on time', function () {
  welcomePage.getMyActivity().click()
  myActivityPage.getFilter().click({ force: true })
  myActivityPage.getEnterworkflows().type('Stock Reimbursement').click()
  myActivityPage.getSubmittedStatus().click()
  myActivityPage.getApply().click()
  cy.readFile(SYSfilename).then((user) => {
    let BAMobile = user.MobileNumber
    var BBAMobile = " " + BAMobile
    manageUsersPage.getAssertMobile().eq(1).should('contain', BBAMobile)
  })
  myActivityPage.getCreatedOnTime().eq(1).invoke('text').then((time) => {
    time = time.trim()
    cy.log(time)
    cy.readFile(filename).then((data) => {
      data.CreatedOnTime = time
      cy.writeFile(filename, data)
    })
  })
})

And('Apply Stock Reimbursement filter', function () {
  approvalPage.getFilter().click({ force: true })
  myActivityPage.getEnterworkflows().type('Stock Reimbursement')
  approvalPage.getSubmittedCheckBox().click()
  approvalPage.getApplyFilter().click()
})

And('Reject the Users for Admin Creation', function () {
  approvalPage.getRejectButton().click({ force: true })
  approvalPage.getRejectComment().type(getRandomName())
  approvalPage.getApproveRequest().click({ force: true })
  cy.intercept('/mobiquitypay/serviceRequest/cancel/any').as('getApproveRequest')
  
  cy.wait('@getApproveRequest').then((interception)=>{
    let response = interception.response.body
    const resValues = Object.values(response)
    cy.log(resValues[0][1])
    resValues[0][1].includes(this.data2.confirmationMessage.rejectUser)
  })
})



