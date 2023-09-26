/// <reference types="Cypress" />
/// <reference types = "Cypress-iframe"/>

//----------------Imports---------------------------------------------------------------------
import 'cypress-iframe'
import { Given, When, Then, And, Before } from "@badeball/cypress-cucumber-preprocessor";
import loginPage from '../../../../../../../../support/pageObjects/loginPage';
import homePage from '../../../../../../../../support/pageObjects/homePage';
import "../../../../../../../../support/Utils/generic";
import "../../../../../../../../support/Utils/IdenticalTransaction";
import IdenticalTransaction from '../../../../../../../../support/pageObjects/IdenticalTransaction/IdenticalTransaction';


//----------------Object Declaration-----------------------------------------------------------------

const pageLogin = new loginPage()
const welcomePage = new homePage()
const identicalTransactionPage = new IdenticalTransaction()

//----------------BDD Hooks-----------------------------------------------------------------


var amount
const uuuid = () => Cypress._.random(1e3)
amount = uuuid()


When('Click on identical transaction', function () {
    identicalTransactionPage.getIdenticalTransaction().scrollIntoView()
    cy.intercept('/CoreWeb/walletinstance/identicalTxnCriteria_input.action?*').as('getIdenticalTransaction')
    identicalTransactionPage.getIdenticalTransaction().click()

})

And('Click on service type drop drop', function () {
    
    cy.getServiceType()
})

And('Click on submit button', function () {
    identicalTransactionPage.getSubmitButton().click({ force: true })
})

And('Enter time interval value', function () {
    cy.wait(1000)
    identicalTransactionPage.getTimeIntervals().type(amount, { force: true })
})

And('Select action on identical transaction', function () {
    cy.getActionOnTxn()
})

Then('Click on delete button', function () {
    identicalTransactionPage.getDeleteButton().click({ force: true })
    cy.wait(1000)
    identicalTransactionPage.getConfMessage().should('have.text',this.data01.errorMessage)
})