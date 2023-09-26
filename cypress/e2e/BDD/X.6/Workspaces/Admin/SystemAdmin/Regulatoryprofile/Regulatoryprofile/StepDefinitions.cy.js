// /// <reference types="Cypress" />
// /// <reference types = "Cypress-iframe"/>

// //----------------Imports---------------------------------------------------------------------
// import { And, When } from "@badeball/cypress-cucumber-preprocessor";
// import 'cypress-iframe';
// import { recurse } from 'cypress-recurse';
// import loginPage from "../../../../../../../support/pageObjects/loginPage";
// import homePage from "../../../../../../../../support/pageObjects/homePage";
// import TransferControlProfile from "../../../../../../../support/pageObjects/TransferControlProfile";
// import RegulatoryProfile from "../../../../../../../../support/pageObjects/UserManagement/RegulatoryProfile";
// import "../../../../../support/Utils/generic";
// import "../../../../../support/Utils/TransferControlProfileCommand";




// //----------------Object Declaration----------------------------------------------------------

// const pageLogin = new loginPage()
// const welcomePage = new homePage()
// const tcpPage = new TransferControlProfile()
// const uid1 = () => Cypress._.random(1e2)
// const Id = uid1()
// const profilename = `testname${id}`
// var RegulatoryFile = 'cypress/fixtures/userData/Regulatory&MarketingProfile.json'
// const RegulatoryProfile1 = new RegulatoryProfile()
// const uid = () => Cypress._.random(0, 1e6)
// const id = uid()
// const uuid12 = () => Cypress._.random(1e8)
// var LoginId1
// LoginId1 = uuid12()

// //-------------------------------------------------------------------------------------------

// When('Navigate to UserManagement And Click on Regulatory Profile', function () {
//     cy.wait(3000)
//     welcomePage.getUserManagementOption().scrollIntoView()
//     welcomePage.getUserManagementOption().click()
//     welcomePage.getregulatoryprofile().click()
    
//   })
  
  
//   And('Click on pencil icon to modify profile name and click on save',()=>{
//     cy.wait(3000)
//     RegulatoryProfile1.getEditicon().eq(0).click()
//     RegulatoryProfile1.getmodifyregulatoryprofile().type('mtme12')
//     RegulatoryProfile1.getmodifyregulatoryprofilesavebtn().click()
//   })
  