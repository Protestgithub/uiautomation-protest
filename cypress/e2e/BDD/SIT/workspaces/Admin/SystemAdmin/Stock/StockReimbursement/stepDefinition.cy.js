/// <reference types="Cypress" />
/// <reference types = "Cypress-iframe"/>

//----------------Imports---------------------------------------------------------------------
import {
  And,
  Before,
  Given,
  Then,
  When,
} from "@badeball/cypress-cucumber-preprocessor";
import "cypress-iframe";
//import homePage from '../../../../../../../../support/pageObjects/homePage';
// import myActivity from '../../../../../../../../../../support/pageObjects/MyActivity/myActivity';
import stockInitiation from '../../../../../../../..//support/pageObjects/StockManagement/stockInitiation'

// import stockManagement from '../../../../../../../../../../support/pageObjects/StockManagement/stockManagement';
// import approvals from '../../../../../../../../../../support/pageObjects/UserManagement/approvals';
// import manageUsers from '../../../../../../../../../../support/pageObjects/UserManagement/manageUsers';
// import "../../../../../../../../../../support/Utils/generic";
// import "../../../../../../../../../../support/Utils/StockCommands";



// //----------------Object Declaration-----------------------------------------------------------------

// const welcomePage = new homePage()
 const stockInitiationPage = new stockInitiation()
 //const stockManagementPage = new stockManagement()
// const myActivityPage = new myActivity()
// const manageUsersPage = new manageUsers()
// const approvalPage = new approvals()
// var filenamestock = 'cypress/fixtures/StockManagement.json'
// var filename = 'cypress/fixtures/userData/AdminTransaction.json'
// var SYSfilename = 'cypress/fixtures/userData/SystemAdminLogin.json'
// const o2cBusinessNo = 'cypress/fixtures/userData/BusinessUsersDataO2C.json'

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


And('Enter Invalid MSISDN', function () {
  cy.wait(5000)
  stockInitiationPage.getCurrency().select("US Dollar")
  stockInitiationPage.getUserType().select("Business")
  stockInitiationPage.getMobileNumber().type("3scdf")
  stockInitiationPage.getBusinessId().click()
})

Then('Assert Error Message', function () {
  stockInitiationPage.getErrormessage().contains("This field should only contain numbers")
})




And('Enter Invalid User Type', function () {
  
  stockInitiationPage.getCurrency().select("US Dollar")
  stockInitiationPage.getUserType().trigger('click')
  stockInitiationPage.getUserType().select("Business")
  stockInitiationPage.getUserType().select([])
  stockInitiationPage.getReferencenumber().type(refno + getRandomName())
  stockInitiationPage.getRemarks().type(getRandomName())
  
})

Then('Assert Error Message of invalid user type', function () {
stockInitiationPage.getErrormessage().contains("User Type is required")
  stockInitiationPage.getCreateButton().should('be.disabled')
})



Then('Check the Success status  on the stock Reimbursment status', function () {
 
  stockInitiationPage.getReimbursementEyeButton().click({ force: true })
  stockInitiationPage.getAssertReimbuesementRejected().contains(' Comments: Success ')


})


Then('Check the Success status  on the stock Reimbursment status', function () {
 
  stockInitiationPage.getReimbursementEyeButton().click({ force: true })
  stockInitiationPage.getAssertReimbuesementRejected().contains(' Comments: Pending ')


})


And('Enter Invalid MSISDN for reimbursement', function () {
  cy.wait(5000)
  stockInitiationPage.getCurrency().select("US Dollar")
  stockInitiationPage.getUserType().select("Business")
  stockInitiationPage.getMobileNumber().type("nmjscdf")
  stockInitiationPage.getBusinessId().click()
})

Then('Assert Error Message of msisdn', function () {
  stockInitiationPage.getErrormessage().contains("Mobile Number is required")
})






















//--------------------------------------------------
When('Navigate to admin transaction',()=>{

    cy.wait(3000)
    stockInitiationPage.getAdminTransaction().click()
    cy.wait(5000)
    stockInitiationPage.getAllocation().click()
  })






  
And('enter all the details',()=>{
  cy.wait(5000)
    stockInitiationPage.getCurrency().select(1)
    stockInitiationPage.getSearchUsingMobileno().type(7716915076)
    stockInitiationPage.getAmount().type('$444444444444444444')
    // cy.wait(3000)
    // stockInitiationPage.getWalletType().select(1)
    
    // stockInitiationPage.getReferenceNumber().type('dffg12')
    // stockInitiationPage.getInstrumenttype().select(3)
    // stockInitiationPage.getinstrumentNumber().type(23452)
    // stockInitiationPage.getRemarks().type('fgdfgg')
    
    })
    
    And('enter all the details1',()=>{
      cy.wait(5000)
        stockInitiationPage.getCurrency().select(1)
        stockInitiationPage.getSearchUsingMobileno().type(7716915076)
        cy.wait(3000)
        // cy.readFile(filename).then((data) => {
        //  let Amount  = data.Amount12
          stockInitiationPage.getAmount().type('1', { force: true })
        //})
        
        //stockInitiationPage.getAmount().type('$4.1234')
        // cy.wait(3000)
        // stockInitiationPage.getWalletType().select(1)
        
        // stockInitiationPage.getReferenceNumber().type('dffg12')
        // stockInitiationPage.getInstrumenttype().select(3)
        // stockInitiationPage.getinstrumentNumber().type(23452)
        // stockInitiationPage.getRemarks().type('fgdfgg')
        })

        
  And('enter all the details2',()=>{
    cy.wait(5000)
    stockInitiationPage.getCurrency().select(2)
  stockInitiationPage.getSearchUsingMobileno().type(7716915076)
  cy.wait(3000)
  // cy.readFile(filename).then((data) => {
  //  let Amounts  = data.Amount13
    stockInitiationPage.getAmount().type('1', { force: true })
  //})
  
  // cy.wait(3000)
  // stockInitiationPage.getWalletType().select(1)
  
  // stockInitiationPage.getReferenceNumber().type('dffg12')
  // stockInitiationPage.getInstrumenttype().select(3)
  // stockInitiationPage.getinstrumentNumber().type(23452)
  // stockInitiationPage.getRemarks().type('fgdfgg')
  
  })

  And('enter all the details3',()=>{
    cy.wait(5000)
    stockInitiationPage.getCurrency().select(2)
    stockInitiationPage.getSearchUsingMobileno().type(7716915076)
    cy.wait(3000)
    // cy.readFile(filename).then((data) => {
    //  let Amounts1  = data.Amount14
      stockInitiationPage.getAmount().type('1', { force: true })
    //})
    
    // cy.wait(3000)
    // stockInitiationPage.getWalletType().select(1)
    
    // stockInitiationPage.getReferenceNumber().type('dffg12')
    // stockInitiationPage.getInstrumenttype().select(3)
    // stockInitiationPage.getinstrumentNumber().type(23452)
    // stockInitiationPage.getRemarks().type('fgdfgg')
  
    // stockInitiationPage.getAllocationButton().click()
    // stockInitiationPage.getSubmitbtn().click()
    
  })

  
  And('enter all the details4',()=>{
    cy.wait(5000)
    stockInitiationPage.getCurrency().select(2)
    stockInitiationPage.getSearchUsingMobileno().type(7716915076)
    cy.wait(3000)
    // cy.readFile(filename).then((data) => {
    //  let Amt  = data.Amount15
      stockInitiationPage.getAmount().type('1', { force: true })
    //})
    
    // cy.wait(3000)
    // stockInitiationPage.getWalletType().select(1)
    
    // stockInitiationPage.getReferenceNumber().type('dffg12')
    // stockInitiationPage.getInstrumenttype().select(3)
    // stockInitiationPage.getinstrumentNumber().type(23452)
    // stockInitiationPage.getRemarks().type('fgdfgg')
  
    // stockInitiationPage.getAllocationButton().click()
    // stockInitiationPage.getSubmitbtn().click()
  })
  
  
  And('enter all the details5',()=>{
    cy.wait(5000)
    stockInitiationPage.getCurrency().select(2)
    stockInitiationPage.getSearchUsingMobileno().type(7716915076)
    cy.wait(3000)
    // cy.readFile(filename).then((data) => {
    //  let Amt1  = data.Amount16
      stockInitiationPage.getAmount().type('1', { force: true })
    //})
    
    // cy.wait(3000)
    // stockInitiationPage.getWalletType().select(1)
    
    // stockInitiationPage.getReferenceNumber().type('dffg12')
    // stockInitiationPage.getInstrumenttype().select(3)
    // stockInitiationPage.getinstrumentNumber().type(23452)
    // stockInitiationPage.getRemarks().type('fgdfgg')
  
    // stockInitiationPage.getAllocationButton().click()
    // stockInitiationPage.getSubmitbtn().click()
  
  
  })
  