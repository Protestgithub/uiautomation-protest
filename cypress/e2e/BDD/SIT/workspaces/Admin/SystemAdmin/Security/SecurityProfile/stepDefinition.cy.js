/// <reference types="Cypress" />
/// <reference types = "Cypress-iframe"/>

//----------------Imports---------------------------------------------------------------------
import { And, Then, When } from "@badeball/cypress-cucumber-preprocessor";
import 'cypress-file-upload';
import 'cypress-iframe';
import { recurse } from 'cypress-recurse';
import homePage from '../../../../../../../../support/pageObjects/homePage';
import SecurityProfilePage from '../../../../../../../../support/pageObjects/SecurityProfile/SecurityProfilePage';
import "../../../../../../../../support/Utils/generic";
import "../../../../../../../../support/Utils/securityCommands";



//----------------Object Declaration----------------------------------------------------------

const welcomePage = new homePage()
const securityProfilePage = new SecurityProfilePage()
var SecurityProfilePath = 'cypress/fixtures/profileData/SecurityProfileName.json'
var name

function getRandomName() {
  name = "";
  var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
  for (var i = 0; i < 5; i++)
    name += possible.charAt(Math.floor(Math.random() * possible.length));
  return name;
}






















And('Fill the details-AuthRestrictions for radio check button', function () {
    securityProfilePage.getTwoFactorAuth().click({ force: true })
    securityProfilePage.getRadioButton().eq(0).click({force:true})
    securityProfilePage.getRadioButton().eq(1).click({force:true})
    securityProfilePage.getRadioButton().eq(2).click({force:true})
    securityProfilePage.getRadioButton().eq(3).click({force:true})
    
})

Then('assert check button is selected',function(){
    securityProfilePage.getRadioButton().eq(0).should('be.visible').and('not.be.checked');
    securityProfilePage.getRadioButton().eq(1).should('be.visible').and('not.be.checked');
    securityProfilePage.getRadioButton().eq(2).should('be.visible').and('not.be.checked');
    securityProfilePage.getRadioButton().eq(3).should('be.visible').and('not.be.checked');

})