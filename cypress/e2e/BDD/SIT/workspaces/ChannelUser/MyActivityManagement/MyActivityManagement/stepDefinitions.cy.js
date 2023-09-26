/// <reference types="Cypress" />
/// <reference types = "Cypress-iframe"/>

//----------------Imports---------------------------------------------------------------------
import { Given, And, Then, When } from "@badeball/cypress-cucumber-preprocessor";
import 'cypress-iframe';

import manageUsers from "../../../../../../../support/pageObjects/UserManagement/manageUsers";
import "../../../../../../../support/Utils/generic"
import "../../../../../../../support/Utils/AdministratorCommands"
import homePage from "../../../../../../../support/pageObjects/homePage";
//----------------Object Declaration----------------------------------------------------------


const welcomePage = new homePage()
const manageUsersPage = new manageUsers()



//----------------Test Scripts---------------------------------------------------------------


And('Click on My Activity Management', function () {
    welcomePage.getMyActivity().click()

  })