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

And('Click on bd-demo-reports to View Report',function() { 
    cy.wait(15000)
    Report.getReports()
    
})

Then('Select the Commoission to view Report for CASH IN', function() {
    Report.getcommissionReportCASHIN()
    
})

And('Click on close and Browse new Report', function() {
    Report.getclosebtn()
    Report.getBrowseFiles()
    Report.getReports()

})
Then('Select the Service Charge to view Report for CASH IN', function() {
    Report.getServiceChargeReportCASHIN()
    
})