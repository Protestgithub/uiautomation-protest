/// <reference types="Cypress" />
/// <reference types = "Cypress-iframe"/>

//----------------Imports---------------------------------------------------------------------
import { And, Then, When } from "@badeball/cypress-cucumber-preprocessor";
import 'cypress-iframe';

import "../../../../../../../support/Utils/BusinessUserCommands";
import "../../../../../../../support/Utils/generic";
import "../../../../../../../support/Utils/subscriberCommands";

import approvals from '../../../../../../../support/pageObjects/UserManagement/approvals';
import manageUsers from '../../../../../../../support/pageObjects/UserManagement/manageUsers';
import register from '../../../../../../../support/pageObjects/UserManagement/register';
import SecurityProfilePage from "../../../../../../../support/pageObjects/SecurityProfile/SecurityProfilePage";
//----------------Object Declaration-----------------------------------------------------------------

const registerPage = new register()
const approvalPage = new approvals()
const manageUsersPage = new manageUsers()
const securityProfilePage = new SecurityProfilePage()
var BBAFile = "cypress/fixtures/userData/BusinessUsersData.json"

//------------------------------------------------------------------------------------

Then('Verify user will be forced to change password periodically',function(){
  securityProfilePage.getPasswordExpiry().should('be.enabled')
})
//------------------------------------------------------------------------------------
And('Enter previously registeredd Mobile number', function () {
    pageLogin.getiFrame()
    manageUsersPage.getSearchUser().click({ force: true })
    cy.readFile(BBAFile).then((data) => {
      BAMobileNumber = data.registeredMobileHeadMerch
      manageUsersPage.getSearchUser().type(BAMobileNumber, { force: true })
    })
    manageUsersPage.getSearchUserButton().click({ force: true })  
})

And('Verify Lower hierarchy cannot reset password of Upper hierarchy',function(){
  manageUsersPage.getEyeIcon().should('be.disabled')
})

//------------------------------------