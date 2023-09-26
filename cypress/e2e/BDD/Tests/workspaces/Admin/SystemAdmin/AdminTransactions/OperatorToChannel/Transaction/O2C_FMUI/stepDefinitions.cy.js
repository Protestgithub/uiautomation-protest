/// <reference types="Cypress" />
/// <reference types = "Cypress-iframe"/>

//----------------Imports---------------------------------------------------------------------
import { And, Then, When } from "@badeball/cypress-cucumber-preprocessor";
import 'cypress-iframe';
import adminTransaction from '../../../../../../../../../../support/pageObjects/AdminTransaction/adminTransaction';
import homePage from '../../../../../../../../../../support/pageObjects/homePage';
import myActivity from '../../../../../../../../../../support/pageObjects/MyActivity/myActivity';
import stockInitiation from '../../../../../../../../../../support/pageObjects/StockManagement/stockInitiation';
import approvals from '../../../../../../../../../../support/pageObjects/UserManagement/approvals';
import manageUsers from '../../../../../../../../../../support/pageObjects/UserManagement/manageUsers';
import "../../../../../../../../../../support/Utils/generic";

//----------------Object Declaration-----------------------------------------------------------------

const welcomePage = new homePage()
const manageUsersPage = new manageUsers()
const approvalPage = new approvals()
const stockInitiationPage = new stockInitiation()
const adminTransactionPage = new adminTransaction()
const myActivityPage = new myActivity()

var allocationAmount = 'cypress/fixtures/userData/allocation.json'
var filename = 'cypress/fixtures/userData/AdminTransaction.json'
var SYSfilename = 'cypress/fixtures/userData/SystemAdminLogin.json'
var TransactionFleO2C = "cypress/fixtures/userData/TransactionFile.json"

const uuid = () => Cypress._.random(1e5)
var refno
refno = uuid()
var instumentNo
instumentNo = uuid()

var amount
const uuuid = () => Cypress._.random(1e4)
amount = uuuid()

var amount1
const uuuuid = () => Cypress._.random(1e11)
amount1 = uuuuid()
const uid = () => Cypress._.random(1e2)
const id = uid()
const testname = `testname${id}`

const o2cBusinessNo = 'cypress/fixtures/userData/BusinessUsersData.json'
const o2cBusinessNo1 = 'cypress/fixtures/userData/BusinessUsersDataO2C.json'

function getRandomName() {
  name = "";
  var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
  for (var i = 0; i < 5; i++)
    name += possible.charAt(Math.floor(Math.random() * possible.length));
  return name;
}

//----------------BDD Hooks-----------------------------------------------------------------




// When('Navigate to Admin transaction and Click on Stock creation', function () {
//   welcomePage.getAdminTransaction().scrollIntoView()
//   welcomePage.getAdminTransaction().click()
// })

//When Navigate to Allocation 
When('Navigate to Allocation', function () {
  cy.intercept('/mobiquitypay/v1/service-config*').as('getAdminTxn')
  stockInitiationPage.getAdminTransaction().click()
  cy.wait('@getAdminTxn', {timeout:20000})
  cy.intercept('/mobiquitypay/v1/service-config*').as('getAllocation')
  adminTransactionPage.getAllocation().click()
cy.wait('@getAllocation',{timeout:20000})
cy.wait(3000)
})

And('Enter All the Mandatory Details for Allocation for Corporate User', function () {
  //currency
  cy.wait(2000)
  adminTransactionPage.getCurrency().select(this.data15.currency)
  //mobile number
  cy.readFile(o2cBusinessNo).then((userMob) => {
    var userMobileNum = userMob.registeredMobileCorp
    adminTransactionPage.getSearchMobileNumber().type(userMobileNum).click()
  })
  cy.wait(2000)
  adminTransactionPage.getAmount().click()
  adminTransactionPage.getWalletType().select(1, { force: true })
  adminTransactionPage.getAmount().type(amount)
  adminTransactionPage.getReferenceNumber().type(refno + getRandomName())
  adminTransactionPage.getInstumentType().select(this.data15.instument, { force: true })
  adminTransactionPage.getInstumentNumber().type(instumentNo)
  adminTransactionPage.getRemarks().type(getRandomName())
  cy.wait(2000)
})
//And Enter All the Mandatory Details for Allocation
And('Enter All the Mandatory Details for Allocation', function () {
  //currency
  cy.wait(2000)
  adminTransactionPage.getCurrency().select(this.data15.currency)
  //mobile number
  cy.readFile(o2cBusinessNo).then((userMob) => {
    var userMobileNum = userMob.registeredMobileMerch
    adminTransactionPage.getSearchMobileNumber().type(userMobileNum).click()
  })
  cy.wait(2000)
  adminTransactionPage.getAmount().click()
  adminTransactionPage.getWalletType().select(1, { force: true })
  adminTransactionPage.getAmount().type(amount)
  adminTransactionPage.getReferenceNumber().type(refno + getRandomName())
  adminTransactionPage.getInstumentType().select(this.data15.instument, { force: true })
  adminTransactionPage.getInstumentNumber().type(instumentNo)
  adminTransactionPage.getRemarks().type(getRandomName())
  cy.wait(2000)
})

And('Enter All the Mandatory Details for Allocation for Distributer', function () {
  //currency
  cy.wait(2000)
  adminTransactionPage.getCurrency().select(this.data15.currency)
  //mobile number
  cy.readFile(o2cBusinessNo1).then((userMob) => {
    var userMobileNum = userMob.registeredMobileO2C
    adminTransactionPage.getSearchMobileNumber().type(userMobileNum).click()
  })
  cy.wait(2000)
  adminTransactionPage.getAmount().click()
  adminTransactionPage.getWalletType().select(1, { force: true })
  adminTransactionPage.getAmount().type(amount)
  adminTransactionPage.getReferenceNumber().type(refno + getRandomName())
  adminTransactionPage.getInstumentType().select(this.data15.instument, { force: true })
  adminTransactionPage.getInstumentNumber().type(instumentNo)
  adminTransactionPage.getRemarks().type(getRandomName())
  cy.wait(2000)
})

And('Enter All the Mandatory Details for Allocation for another Distributer', function () {
  //currency
  cy.wait(2000)
  adminTransactionPage.getCurrency().select(this.data15.currency)
  //mobile number
  cy.readFile(o2cBusinessNo).then((userMob) => {
    var userMobileNum = userMob.registeredMobile
    adminTransactionPage.getSearchMobileNumber().type(userMobileNum).click()
  })
  cy.wait(2000)
  adminTransactionPage.getAmount().click()
  adminTransactionPage.getWalletType().select(1, { force: true })
  adminTransactionPage.getAmount().type(amount)
  adminTransactionPage.getReferenceNumber().type(refno + getRandomName())
  adminTransactionPage.getInstumentType().select(this.data15.instument, { force: true })
  adminTransactionPage.getInstumentNumber().type(instumentNo)
  adminTransactionPage.getRemarks().type(getRandomName())
  cy.wait(2000)
})

And('Enter All the Mandatory Details for Allocation for Approval2', function () {
  //currency
  
  adminTransactionPage.getCurrency().select(this.data15.currency)
  //mobile number
  cy.readFile(o2cBusinessNo).then((userMob) => {
    var userMobileNum = userMob.registeredMobileMerch
    adminTransactionPage.getSearchMobileNumber().type(userMobileNum).click()
  })
  cy.wait(2000)
  adminTransactionPage.getAmount().click()
  adminTransactionPage.getWalletType().select(1, { force: true })
  adminTransactionPage.getAmount().type("100001")
  adminTransactionPage.getReferenceNumber().type(refno + getRandomName())
  adminTransactionPage.getInstumentType().select(this.data15.instument, { force: true })
  adminTransactionPage.getInstumentNumber().type(instumentNo)
  adminTransactionPage.getRemarks().type(getRandomName())
  cy.wait(2000)
})
//Click on allocation and Submit
Then('Click on allocation and Submit', function () {
  adminTransactionPage.getSelectAllocation().click({force:true})
  adminTransactionPage.getSelectSubmit().click()
  adminTransactionPage.getSuccessMessage().contains(" Your transaction request has been initiated, and is now pending confirmation ")
  stockInitiationPage.getDone().click()
})

And('Click on MyActivity, filter Owner To Channel and get Creation on time', function () {
  welcomePage.getMyActivity().click()
  myActivityPage.getFilter().click()
  myActivityPage.getEnterworkflows().type('Owner To Channel').click()
  cy.wait(3000)
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


Then('Click on Approval Management', function () {
  welcomePage.getAdminTransaction().click()
})

When('Click on filter, type Owner to channel in workflow and apply', function () {
  approvalPage.getFilter().click()
  myActivityPage.getEnterworkflows().type('Owner To Channel').click()
  approvalPage.getSubmittedCheckBox().click()
  approvalPage.getApplyFilter().click()
})


And('User clicks O2C data', function () {
  cy.getApproval(filename)
})

Then('Approve and Yes', function () {
  adminTransactionPage.getApprove().click()
  adminTransactionPage.getClickYes().click()
})
Then('Confirm the Success Message for O2C Approval1', function () {
  approvalPage.getApproveConfirmationMessage().then((para) => {
    let a = para.text()
    let b = a.split(':')
    let c = b[3]
    cy.readFile(TransactionFleO2C).then((d) => {
      d.TransactionID = c
      cy.writeFile(TransactionFleO2C, d)
    })
  })
})

And('Search by Transaction ID for O2C Allocation and Enquire', function () {
  cy.readFile(TransactionFleO2C).then((data) => {
    let ID = data.TransactionID
    stockInitiationPage.getSearchType().type(ID)
  })
  stockInitiationPage.getSearchButton().click()
  stockInitiationPage.getSuccess().contains('Success')
})

/////////////////////////////////////////////////////////////////////////////////////////////////////////
And('Enter All the Mandatory Details with Suspended Mobile number', function () {
  //currency
  adminTransactionPage.getCurrency().select(this.data15.currency)
  //mobile number
  cy.readFile("cypress/fixtures/userData/BusinessUserSuspensionData.json").then((userMob) => {
    var userMobileNum = userMob.registeredMobile
    adminTransactionPage.getSearchMobileNumber().type(userMobileNum).click()
  })
  cy.wait(2000)
  adminTransactionPage.getAmount().click()
  adminTransactionPage.getWalletType().select(1)
  adminTransactionPage.getAmount().type("100001")
  adminTransactionPage.getReferenceNumber().type(refno + getRandomName())
  adminTransactionPage.getInstumentType().select(this.data15.instument)
  adminTransactionPage.getInstumentNumber().type(instumentNo)
  adminTransactionPage.getRemarks().type(getRandomName())
  cy.wait(2000)
})
//Click on allocation and Submit
Then('Confirm Suspended Error Message', function () {
  adminTransactionPage.getSelectAllocation().click()
  adminTransactionPage.getSelectSubmit().click()
  adminTransactionPage.getSuspendMessage().contains(" Receiver has been suspended ")
  stockInitiationPage.getDone().click()
})

//----------------------
// When('Navigate to Admin transaction and Click on Stock creation', function () {
//   welcomePage.getTransactionadministrative().scrollIntoView()
//   welcomePage.getTransactionadministrative().click( {Force: true} )
//   cy.wait(2000)
//   adminTransactionPage.getAllocation().click()
// })



Then('Click on allocation and Submit Button', function () {
   adminTransactionPage.getSelectAllocation().click()
 adminTransactionPage.getSelectSubmit().click()
  // stockInitiationPage.getDone().click()
})


Then ('Verify the Notification text with changed language' , function(){
  adminTransactionPage.getSuccessMessage().contains(" Votre demande de transaction a été initiée et est maintenant en attente de confirmation ")
})

//Added for to check transaction Assertion in French Language
When('Navigate to Admin Transaction and Click on Stock Creation for french language', function () {
  welcomePage.getTransactionadministrative().scrollIntoView()
  welcomePage.getTransactionadministrative().click( {Force: true} )
  cy.wait(2000)
  adminTransactionPage.getAllocation().click()
  })