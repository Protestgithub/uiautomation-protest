/// <reference types="Cypress" />
/// <reference types = "Cypress-iframe"/>

//----------------Imports---------------------------------------------------------------------
import { And, Then } from "@badeball/cypress-cucumber-preprocessor";
import 'cypress-iframe';
import homePage from '../../../../../../../../support/pageObjects/homePage';
import loginPage from '../../../../../../../../support/pageObjects/loginPage';

import SecurityProfilePage from '../../../../../../../../support/pageObjects/SecurityProfile/SecurityProfilePage';
import register from '../../../../../../../../support/pageObjects/UserManagement/register';
import "../../../../../../../../support/Utils/generic";
import "../../../../../../../../support/Utils/securityCommands";

//----------------Object Declaration----------------------------------------------------------

const pageLogin = new loginPage()
const welcomePage = new homePage()
const securityProfilePage = new SecurityProfilePage()
const registerPage = new register()

var SubProfileName = 'cypress/fixtures/profileData/securityProfile.json'
var profName

function getRandomName() {
  profName = "";
  var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
  for (var i = 0; i < 5; i++)
    profName += possible.charAt(Math.floor(Math.random() * possible.length));
  return profName;
}
//-----------------------------------------------------------------------------------------

And('Click on copy icon and click on Save',function(){
  securityProfilePage.getCopyIcon().click()
  securityProfilePage.getEnterProfileName().click().clear().type(getRandomName())
  securityProfilePage.getSave().click()
  securityProfilePage.getConfirmButton().click()
  securityProfilePage.getCopyMessage().contains("Profile cloned successfully")
})