/// <reference types="Cypress" />
/// <reference types = "Cypress-iframe"/>

//----------------Imports---------------------------------------------------------------------
import { And } from "@badeball/cypress-cucumber-preprocessor";
import 'cypress-file-upload';
import 'cypress-iframe';
import { recurse } from 'cypress-recurse';
import homePage from '../../../../../../../../../support/pageObjects/homePage';
import SecurityProfilePage from '../../../../../../../../../support/pageObjects/SecurityProfile/SecurityProfilePage';
import "../../../../../../../../../support/Utils/generic";
import "../../../../../../../../../support/Utils/securityCommands";



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



//--------------------------Administrator -- CustomercareAdmin----------------------------------------------
And('Fill the details-CustomercareAdmin Profile Name', function () {

  recurse(
    () => securityProfilePage.getEnterProfileName().clear().type(getRandomName(), { force: true }),
    () => securityProfilePage.getCheckBox().contains(this.data6.checkBox3).click({ force: true }),
    (uniqueness) => (uniqueness) == securityProfilePage.getProfileNameExist().contains
      ('Profile with same name already exists. Try another!').should('be.visible'),
    securityProfilePage.getCheckBox().eq(0).click({ force: true })
  )
  cy.readFile(SecurityProfilePath).then((data) => {
    data.CustomercareAdmin = name
    cy.writeFile(SecurityProfilePath, data)
  })

})
And('Click on add profile select user type as CustomercareAdmin and fill the details', function () {
  securityProfilePage.getAddProfile().click()
  securityProfilePage.getSelectAdminUserTypeTab().click({ force: true })
  securityProfilePage.getSelectSubUserTypeTab().focused()
  securityProfilePage.getUserRole().eq(1).click({ force: true })
})