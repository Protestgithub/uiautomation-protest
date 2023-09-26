/// <reference types="Cypress" />
/// <reference types = "Cypress-iframe"/>

//----------------Imports---------------------------------------------------------------------
import 'cypress-iframe'
import { Given, When, Then, And, Before } from "@badeball/cypress-cucumber-preprocessor";
import homePage from '../../../../../../../../support/pageObjects/homePage';
import { recurse } from 'cypress-recurse';
import "../../../../../../../../support/Utils/generic";
import "../../../../../../../../support/Utils/securityCommands";
import "../../../../../../../../support/Utils/authourizationcommands"
import authorizationManagement from '../../../../../../../../support/pageObjects/AuthorizationProfileManagement/authorizationManagement';

//----------------Object Declaration----------------------------------------------------------

const welcomePage = new homePage()
const authorizationProfilePage = new authorizationManagement()
var AuthProfileName = 'cypress/fixtures/profileData/AuthProfile.json'
var profName


function getRandomName() {
  profName = "";
  var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
  for (var i = 0; i < 5; i++)
  profName += possible.charAt(Math.floor(Math.random() * possible.length));
  return profName;
}

  When('Select Authorization profile and apply filter',function(){
    authorizationProfilePage.getAuthorizationProfileManagement().scrollIntoView()
    cy.intercept('/mobiquitypay/v1/authorization-profiles').as('all')
    authorizationProfilePage.getAuthorizationProfileManagement().click({ force: true })
       
    authorizationProfilePage.getFilter().click({ force: true })
    authorizationProfilePage.getUserdefinedCheckbox().click({ force: true })
    authorizationProfilePage.getSystemadminCheckbox().click({ force: true })
    authorizationProfilePage.getApplyButton().click()
    
  })
  Then('click on delete icon of created authorization profile AND click on yes',function(){
    authorizationProfilePage.getDeleteProfile().click({ force: true })
    
    authorizationProfilePage.getYesDeleteProfile().click()
    

} )

And("Select Any User Role", function () {
    
    authorizationProfilePage.getAuthorizationUserRole().contains('System Admin').click({ force: true })
  })
