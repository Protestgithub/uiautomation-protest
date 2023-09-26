/// <reference types="Cypress" />
/// <reference types = "Cypress-iframe"/>

//----------------Imports---------------------------------------------------------------------
import { And, When,Then } from "@badeball/cypress-cucumber-preprocessor";
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

///////////////////////////////////////////////////////////////////////////////////////////

When('Navigate to Admin Transaction and Click on reimbursement', function () {
  stockInitiationPage.getAdminTransaction().click()
  stockInitiationPage.getMoreView().eq(1).click()
  stockInitiationPage.getReimbursement().click()
})

And('Enter all the Reimbursement Information', function () {
  stockInitiationPage.getCurrency().select("US Dollar")
  stockInitiationPage.getUserType().select("Business")
  cy.readFile(o2cBusinessNo).then((userMob) => {
    var userMobileNum = userMob.registeredMobileO2C
    stockInitiationPage.getMobileNumber().type(userMobileNum)
  })
  stockInitiationPage.getBusinessId().click()
  stockInitiationPage.getWalletType().select("Normal")
  stockInitiationPage.getBusinessId().type(refno)
  stockInitiationPage.getTransactionAmount().type(amount)
  stockInitiationPage.getReferencenumber().type(refno + getRandomName())
  stockInitiationPage.getRemarks().type(getRandomName())
  stockInitiationPage.getReferenceDate().type('2023-01-24')
})

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

// And('Apply Stock Reimbursement filter', function () {
//   approvalPage.getFilter().click({ force: true })
//   myActivityPage.getEnterworkflows().type('Stock Reimbursement')
//   approvalPage.getSubmittedCheckBox().click()
//   approvalPage.getApplyFilter().click()
// })

Then('Check the rejection status  on the stock Reimbursment status', function () {
 
  stockInitiationPage.getReimbursementEyeButton().click({ force: true })
  stockInitiationPage.getAssertReimbuesementRejected().contains(' Comments: Reject ')


})
