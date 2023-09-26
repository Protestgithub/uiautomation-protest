/// <reference types="Cypress" />
/// <reference types = "Cypress-iframe"/>

//----------------Imports---------------------------------------------------------------------
import { And } from "@badeball/cypress-cucumber-preprocessor";
import 'cypress-iframe';
import homePage from '../../../../../../../../support/pageObjects/homePage';
import loginPage from '../../../../../../../../support/pageObjects/loginPage';
import Reconcilation from '../../../../../../../../support/pageObjects/Reconcilation/Reconcilation';
import "../../../../../../../../support/Utils/generic";

//----------------Object Declaration----------------------------------------------------------

const pageLogin = new loginPage()
const welcomePage = new homePage()
const ReconPage = new Reconcilation()



//---------------------------------------------System Admin Login----------------------------------------------------

And('Click on Reconcilation', function () {
 //   cy.intercept('/CoreWeb/reconciliation*').as('getReconcil')
  welcomePage.getreconcilationpage().click({ force: true })
 // cy.wait('@getReconcil')
    cy.wait(3000)
  ReconPage.getProviderSelect().select("MFS1", { force: true })
  ReconPage.getsubmit().click({ force: true })
 // cy.wait('@getsubmit', { timeout: 30000 })
 cy.wait(2000)
  pageLogin.getiFrame()
  ReconPage.getmismatch().within(function () {
    ReconPage.getmismatchvalue().should("contain", "No Mismatch found")
  })

})

