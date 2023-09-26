/// <reference types="Cypress" />
/// <reference types = "Cypress-iframe"/>

//-------------------------------Imports---------------------------------------------------------------------
import { And, Given, Then } from "@badeball/cypress-cucumber-preprocessor";
import 'cypress-iframe';
import ReportingSuite from '../../../../../../../../support/pageObjects/ReportingSuite/ReportingSuite';
import "../../../../../../../../support/Utils/generic";

//----------------Object Declaration----------------------------------------------------------

const Report = new ReportingSuite()

//--------------------------------------Test Scripts-------------------------------------------------

//----------------------------------REPORTING SUITE--------------------------------------------------
Given('Login into Mobiquity Portal as System admin User and Launch Pentaho Portal', function () {
  cy.launchURL(Cypress.env('Adminurl'))
  cy.SysAdminlogin()
  
  //cy.checkWelcomeText(this.data.networkAdminWelcomeText)
  Report.getPentaho()
})
Given('Login into Mobiquity Portal as System admin User and Launch Pentaho Portal1', function () {
  cy.launchURL(Cypress.env('Adminurl'))
  cy.SysAdminlogin2()
  
  //cy.checkWelcomeText(this.data.networkAdminWelcomeText)
  Report.getPentaho()
})
Given('Login into Mobiquity Portal as System admin User and Launch Pentaho Portal2', function () {
  cy.launchURL(Cypress.env('Adminurl'))
  cy.SysAdminlogin3()
  
  // cy.checkWelcomeText(this.data.networkAdminWelcomeText)
  Report.getPentaho()
})
//-------------------------------Click on Browser Files-----------------------------------------------
And('click on Browse Files', function () {
  cy.wait(20000)
  cy.visit(Cypress.env('Adminurl') + '/pentaho/Home?locale=en')
  cy.wait(20000)
  Report.getBrowseFiles()
})

//----------------Click on bd-demo-reports-----------------------------------------------
And('Click on bd-demo-reports', function () {
  cy.wait(15000)
  Report.getbddemoreports()
})

//----------------open Customer Registration Report-----------------------------------------------
And('open Customer Registration Report', function () {
  Report.getCustomerRegistrationReport()
})
//----------------Select the format and click on View Report----------------------
And('Select the format and click on View Report and User should be able to Dowload that Files', function () {
  
  Report.getdownloadCRR()
  Report.getclosebtn()
  Report.getBrowseFiles()
  Report.getbddemoreports()
})

And('Download Customer Banking Activation Report', function () {
  Report.getCustomerBankingActivation()
  Report.getclosebtn()
  Report.getBrowseFiles()
  Report.getbddemoreports()
})

And('Download Customer Blocked Access Report', function () {
  Report.getCustomerBlockedAccess()
  Report.getclosebtn()
  Report.getBrowseFiles()
  Report.getbddemoreports()
})

And('Download Deleted Users Report', function () {
  Report.getDeletedUserReport()
  Report.getclosebtn()
  Report.getBrowseFiles()
  Report.getbddemoreports()
})

And('Download Suspend Customers Report', function () {
  Report.getSuspendUserReport()
  Report.getclosebtn()
  Report.getBrowseFiles()
  Report.getbddemoreports()
})

And('Download Commoission Report', function () {
  Report.getcommissionReport()
  Report.getclosebtn()
  Report.getBrowseFiles()
  Report.getbddemoreports()
})

And('Download Reimbursment Report', function () {
  Report.getReimbursmentReport()
  Report.getclosebtn()
  Report.getBrowseFiles()
  Report.getbddemoreports()
})

And('Download Service Charge Report', function () {
  Report.getServiceChargeReport()
  Report.getclosebtn()
  Report.getBrowseFiles()
  Report.getbddemoreports()
})

And('Download Stock Management Report', function () {
  Report.getStockManagementReport()
  Report.getclosebtn()
  Report.getBrowseFiles()
  Report.getbddemoreports()
})

And('Download User Transaction Report', function () {
  Report.getUserTransactionReport()
})

Then('Logout Pentaho', function () {
  
})