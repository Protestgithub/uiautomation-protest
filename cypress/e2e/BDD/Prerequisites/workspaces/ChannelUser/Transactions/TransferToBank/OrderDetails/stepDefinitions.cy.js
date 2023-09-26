/// <reference types="Cypress" />
/// <reference types = "Cypress-iframe"/>

//----------------Imports---------------------------------------------------------------------
import { And,Then } from "@badeball/cypress-cucumber-preprocessor";
import 'cypress-iframe';
import manageUsers from '../../../../../../../../support/pageObjects/UserManagement/manageUsers';
import "../../../../../../../../support/Utils/BusinessUserCommands";
import "../../../../../../../../support/Utils/generic";
import "../../../../../../../../support/Utils/subscriberCommands";

//----------------Object Declaration-----------------------------------------------------------------

const manageUsersPage = new manageUsers()

And('Enter Mobile numberin search Menu for Order details', function () {

  cy.getBankMobNum()
})


And('Click on order details to view the transaction details', function () {

  manageUsersPage.getOrderDetailsButton().click({ force: true })

})


Then('click on filter for Order details', function () {

 manageUsersPage.getFilterOrderDetails().click({ force: true })
 manageUsersPage.getStatus().click()
})