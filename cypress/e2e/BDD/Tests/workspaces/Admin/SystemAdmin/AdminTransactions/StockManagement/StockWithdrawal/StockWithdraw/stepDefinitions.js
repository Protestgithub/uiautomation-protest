/// <reference types="Cypress" />
/// <reference types = "Cypress-iframe"/>

//----------------Imports---------------------------------------------------------------------
import {When, And, Then } from "@badeball/cypress-cucumber-preprocessor";
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

When('Navigate to Admin Transaction and Click on Stock Withdrawl',function(){
  stockInitiationPage.getAdminTransaction().click()
  stockInitiationPage.getStockWithdrawl().click()
})
////////////////////////////////////////////////////////////////////////////////

When('Navigate to Admin Transaction and Click on Stock Withdrawal',function(){
  cy.intercept('/mobiquitypay/v1/service-config*').as('getAdminTxn')
stockInitiationPage.getAdminTransaction().click()
 cy.wait('@getAdminTxn', {timeout:20000})
 cy.intercept('/mobiquitypay/v1/service-config*').as('getAllocation')
  stockInitiationPage.getStockWithdrawl().click()
  cy.wait('@getAllocation',{timeout:20000})
})

And('Enter all the Stock Withdrawl Information',function(){
  stockInitiationPage.getCurrency().select("US Dollar")
  stockInitiationPage.getFromStockAccount().select("Operator Main Wallet")
  stockInitiationPage.getTrustBank().select("TBN101")
  stockInitiationPage.getBankAccountNumber().select(1)
  stockInitiationPage.getTransactionAmount().type(amount)
  stockInitiationPage.getReferencenumber().type(refno+getRandomName())
  stockInitiationPage.getRemarks().type(getRandomName())
})

And('Click on MyActivity, filter Stock Withdrawal and get Creation on time', function(){
  welcomePage.getMyActivity().click()
  myActivityPage.getFilter().click({ force: true })
  myActivityPage.getEnterworkflows().type('Stock Withdrawal').click()
  myActivityPage.getSubmittedStatus().click()
  myActivityPage.getApply().click()
  cy.readFile(SYSfilename).then((user) => {
  let BAMobile = user.MobileNumber
  var BBAMobile = " "+BAMobile
  manageUsersPage.getAssertMobile().eq(1).should('have.text',BBAMobile)
})
myActivityPage.getCreatedOnTime().eq(1).invoke('text').then((time)=>{
  time= time.trim()
  cy.log(time)
  cy.readFile(filename).then((data) => {
  data.CreatedOnTime = time
  cy.writeFile(filename,data)
  })
})
})

And('Apply Stock Withdrawal filter', function(){
  approvalPage.getFilter().click({ force: true })
  myActivityPage.getEnterworkflows().type('Stock Withdrawal')
  approvalPage.getSubmittedCheckBox().click()
  approvalPage.getApplyFilter().click()
})

And('Verify Available wallet Balance and Transaction Initiated Balance',function(){
  stockInitiationPage.getCurrency().select("US Dollar")
  stockInitiationPage.getFromStockAccount().select("Operator Main Wallet", { force: true })
  stockInitiationPage.getStockAccountBalance().eq(0).should('be.visible')
  stockInitiationPage.getTrustBank().select("TBN101", { force: true })
  stockInitiationPage.getBankAccountNumber().select("********1101", { force: true })
  stockInitiationPage.getStockAccountBalance().eq(0).should('be.visible')
})

And('Enter All Stock Transfer details and enter amount greater than existing amount',function(){
  stockInitiationPage.getCurrency().select("US Dollar", { force: true })
  stockInitiationPage.getAccountType().select("Operator Main Wallet", { force: true })
  stockInitiationPage.getToWalletType().select("Rewards Redemption Account", { force: true })
  stockInitiationPage.getTransactionAmount().type(amount1)
  stockInitiationPage.getReferencenumber().type("123abc")
  stockInitiationPage.getRemarks().type(getRandomName())
})
Then('Verify Error Message for EA',function(){
  stockInitiationPage.getCreateButton().click()
  stockInitiationPage.getSaveButton().click() 
  stockInitiationPage.getSuccessMessage().contains(" Requested amount more than allowed in the network ")
  stockInitiationPage.getDone().click()
})

/////////////////////////////////////////////////////////////////////////

Then('Reject the Initiated stock at level1',function(){
  approvalPage.getRejectButton().click()
  approvalPage.getRejectComment().type(getRandomName())
  approvalPage.getRejectRequest().click()
  cy.wait(2000)
  approvalPage.getApproveConfirmationMessage().contains("Transaction has been rejected successfully and routed back to initiator")
})

//////////////////////////////////////////////////////////////////

Then('Check the initiated transaction staus of stock transfer to EA',function(){
  stockInitiationPage.getEAInitiationStatus().should('have.text'," Pending ")
})


////////////////////////////////////////////////////////////////////

Then('Check the Failed transaction staus of stock transfer to EA',function(){
  stockInitiationPage.getEAInitiationStatus().should('have.text'," Failed ")
})

//------------------------------------------------------------------------------
And('Enter all the Stock Information and enter amount greater than existing amount',function(){
  stockInitiationPage.getCurrency().select("Indian Rupee",{ force: true })
  stockInitiationPage.getTrustBank().select("TBN102", { force: true })
  stockInitiationPage.getToStockAccount().select("Operator Main Wallet", { force: true })
  stockInitiationPage.getTransactionAmount().type(amount1)
  stockInitiationPage.getReferencenumber().type(refno+getRandomName())
  stockInitiationPage.getRemarks().type(getRandomName())
})
//-------------------------------------------------------------------------------
And('Apply Stock Withdrawal Expired filter', function(){
  approvalPage.getFilter().click({ force: true })
  myActivityPage.getEnterworkflows().type('Stock Withdrawal')
  approvalPage.getExpiredButton().click()
  approvalPage.getApplyFilter().click()
})

And('Verify the user not able to approve', function () {
  approvalPage.getApproveButton().should('be.disabled')
})