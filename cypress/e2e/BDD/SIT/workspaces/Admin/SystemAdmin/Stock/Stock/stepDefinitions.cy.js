// /// <reference types="Cypress" />
// /// <reference types = "Cypress-iframe"/>

// //----------------Imports---------------------------------------------------------------------
// import { And, Then, When } from "@badeball/cypress-cucumber-preprocessor";
// import 'cypress-iframe';
// import homePage from '../../../../../../../../../../support/pageObjects/homePage';
// import myActivity from '../../../../../../../../../../support/pageObjects/MyActivity/myActivity';
// import stockInitiation from '../../../../../../../../../../support/pageObjects/StockManagement/stockInitiation';
// import stockManagement from '../../../../../../../../../../support/pageObjects/StockManagement/stockManagement';
// import approvals from '../../../../../../../../../../support/pageObjects/UserManagement/approvals';
// import manageUsers from '../../../../../../../../../../support/pageObjects/UserManagement/manageUsers';
// import "../../../../../../../../../../support/Utils/generic";
// import "../../../../../../../../../../support/Utils/StockCommands";


// //----------------Object Declaration-----------------------------------------------------------------

// const welcomePage = new homePage()
// const stockInitiationPage = new stockInitiation()
// const stockManagementPage = new stockManagement()
// const myActivityPage = new myActivity()
// const manageUsersPage = new manageUsers()
// const approvalPage = new approvals()
// var filenamestock = 'cypress/fixtures/StockManagement.json'
// var filename = 'cypress/fixtures/userData/AdminTransaction.json'
// var SYSfilename = 'cypress/fixtures/userData/SystemAdminLogin.json'
// const o2cBusinessNo = 'cypress/fixtures/userData/BusinessUsersDataO2C.json'

// var mobile
// const uuid = () => Cypress._.random(1e8)
// mobile = "77" + uuid()

// var refno
// refno = "12" + uuid()

// var amount
// const uuuid = () => Cypress._.random(1e3)
// amount = uuuid()

// var amount1
// const uuuuid = () => Cypress._.random(1e11)
// amount1 = uuuuid()

// const uid = () => Cypress._.random(1e2)
// const id = uid()
// const testname = `testname${id}`
// var name
// function getRandomName() {
//   name = "";
//   var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
//   for (var i = 0; i < 5; i++)
//     name += possible.charAt(Math.floor(Math.random() * possible.length));
//   return name;
// }


// ///////////////////////////////////////////////////////////////////////////



// When('Navigate to admin transaction',()=>{

//     cy.wait(3000)
//     stockInitiationPage.getAdminTransaction().click()
//     stockInitiationPage.getAllocation().eq(3).click()
//   })


// And('enter all the details',()=>{

//     stockInitiationPage.getCurrency().select(1)
//     stockInitiationPage.getSearchUsingMobileno().type(7716884247)
//     stockInitiationPage.getAmount().type('$444444444444444444')
//     cy.wait(3000)
//     stockInitiationPage.getWalletType().select(1)
    
//     stockInitiationPage.getReferenceNumber().type('dffg12')
//     stockInitiationPage.getInstrumenttype().select(3)
//     stockInitiationPage.getinstrumentNumber().type(23452)
//     stockInitiationPage.getRemarks().type('fgdfgg')
    
//     })
    
//     And('enter all the details1',()=>{

//         stockInitiationPage.getCurrency().select(1)
//         stockInitiationPage.getSearchUsingMobileno().type(7716884247)
//         cy.wait(3000)
//         cy.readFile(filename).then((data) => {
//          let Amount  = data.Amount12
//           stockInitiationPage.getAmount().type(Amount, { force: true })
//         })
        
//         //stockInitiationPage.getAmount().type('$4.1234')
//         cy.wait(3000)
//         stockInitiationPage.getWalletType().select(1)
        
//         stockInitiationPage.getReferenceNumber().type('dffg12')
//         stockInitiationPage.getInstrumenttype().select(3)
//         stockInitiationPage.getinstrumentNumber().type(23452)
//         stockInitiationPage.getRemarks().type('fgdfgg')
//         })

        
//   And('enter all the details2',()=>{
//     stockInitiationPage.getCurrency().select(2)
//   stockInitiationPage.getSearchUsingMobileno().type(7716884247)
//   cy.wait(3000)
//   cy.readFile(filename).then((data) => {
//    let Amounts  = data.Amount13
//     stockInitiationPage.getAmount().type(Amounts, { force: true })
//   })
  
//   cy.wait(3000)
//   stockInitiationPage.getWalletType().select(1)
  
//   stockInitiationPage.getReferenceNumber().type('dffg12')
//   stockInitiationPage.getInstrumenttype().select(3)
//   stockInitiationPage.getinstrumentNumber().type(23452)
//   stockInitiationPage.getRemarks().type('fgdfgg')
  
//   })

//   And('enter all the details3',()=>{
//     stockInitiationPage.getCurrency().select(2)
//     stockInitiationPage.getSearchUsingMobileno().type(7716884247)
//     cy.wait(3000)
//     cy.readFile(filename).then((data) => {
//      let Amounts1  = data.Amount14
//       stockInitiationPage.getAmount().type(Amounts1, { force: true })
//     })
    
//     cy.wait(3000)
//     stockInitiationPage.getWalletType().select(1)
    
//     stockInitiationPage.getReferenceNumber().type('dffg12')
//     stockInitiationPage.getInstrumenttype().select(3)
//     stockInitiationPage.getinstrumentNumber().type(23452)
//     stockInitiationPage.getRemarks().type('fgdfgg')
  
//     stockInitiationPage.getAllocationButton().click()
//     stockInitiationPage.getSubmitbtn().click()
    
//   })

  
//   And('enter all the details4',()=>{
//     stockInitiationPage.getCurrency().select(2)
//     stockInitiationPage.getSearchUsingMobileno().type(7716884247)
//     cy.wait(3000)
//     cy.readFile(filename).then((data) => {
//      let Amt  = data.Amount15
//       stockInitiationPage.getAmount().type(Amt, { force: true })
//     })
    
//     cy.wait(3000)
//     stockInitiationPage.getWalletType().select(1)
    
//     stockInitiationPage.getReferenceNumber().type('dffg12')
//     stockInitiationPage.getInstrumenttype().select(3)
//     stockInitiationPage.getinstrumentNumber().type(23452)
//     stockInitiationPage.getRemarks().type('fgdfgg')
  
//     stockInitiationPage.getAllocationButton().click()
//     stockInitiationPage.getSubmitbtn().click()
//   })
  
  
//   And('enter all the details5',()=>{
//     stockInitiationPage.getCurrency().select(2)
//     stockInitiationPage.getSearchUsingMobileno().type(7716884247)
//     cy.wait(3000)
//     cy.readFile(filename).then((data) => {
//      let Amt1  = data.Amount16
//       stockInitiationPage.getAmount().type(Amt1, { force: true })
//     })
    
//     cy.wait(3000)
//     stockInitiationPage.getWalletType().select(1)
    
//     stockInitiationPage.getReferenceNumber().type('dffg12')
//     stockInitiationPage.getInstrumenttype().select(3)
//     stockInitiationPage.getinstrumentNumber().type(23452)
//     stockInitiationPage.getRemarks().type('fgdfgg')
  
//     stockInitiationPage.getAllocationButton().click()
//     stockInitiationPage.getSubmitbtn().click()
  
  
//   })
  