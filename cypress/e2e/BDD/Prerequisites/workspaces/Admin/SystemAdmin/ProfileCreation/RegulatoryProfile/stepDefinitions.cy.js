/// <reference types="Cypress" />
/// <reference types = "Cypress-iframe"/>

//----------------Imports---------------------------------------------------------------------
import { And, When } from "@badeball/cypress-cucumber-preprocessor";
import 'cypress-iframe';
import { recurse } from 'cypress-recurse';
import homePage from '../../../../../../../../support/pageObjects/homePage';
import loginPage from '../../../../../../../../support/pageObjects/loginPage';
import TransferControlProfile from '../../../../../../../../support/pageObjects/TransferControlProfile';
import RegulatoryProfile from '../../../../../../../../support/pageObjects/UserManagement/RegulatoryProfile';
import "../../../../../../../../support/Utils/generic";
import "../../../../../../../../support/Utils/TransferControlProfileCommand";

//----------------Object Declaration----------------------------------------------------------

const pageLogin = new loginPage()
const welcomePage = new homePage()
const tcpPage = new TransferControlProfile()
const uid1 = () => Cypress._.random(1e2)
const Id = uid1()
const profilename = `testname${id}`
var RegulatoryFile = 'cypress/fixtures/userData/Regulatory&MarketingProfile.json'
const RegulatoryProfile1 = new RegulatoryProfile()
const uid = () => Cypress._.random(0, 1e6)
const id = uid()
const uuid12 = () => Cypress._.random(1e8)
var LoginId1
LoginId1 = uuid12()


//------------------------------  REGULATORY PROFILE--------------------------------------------

When('Navigate to UserManagement And Click on Regulatory Profile', function () {
  welcomePage.getUserManagementOption().scrollIntoView()
  welcomePage.getUserManagementOption().click()
  welcomePage.getregulatoryprofile().click()
  
})

And('Create Regulatory Profile', function () {
  cy.iframe().find('[id="profileName"]').clear().type(Cypress.env('profileName'))
  cy.intercept('/mobiquitypay/v1/regulatoryProfile?*').as('waitforSearchResults')
  cy.iframe().find('[id="search-btn"]').click()
  cy.wait('@waitforSearchResults')
  cy.iframe().find("table > tbody > tr > td").invoke('text').then(($text) => {
    if ($text.includes(Cypress.env('profileName'))) { cy.log("Profile exists") }
    else {
      cy.log("creating new profile")
      cy.iframe().find('[id="profileCode"]').type(id)
      recurse(
        () => cy.iframe().find('[id="profileCode"]').clear().type(id),
        () => cy.iframe().find('.MuiButton-label').eq(1).click({ force: true }),
        (uniqueness) => (uniqueness) == cy.iframe().find('table > tbody').should('have.length', "1")
      )
      cy.log(id)
      RegulatoryProfile1.getaddregulatoryprofile().click(),
        RegulatoryProfile1.getregulatoryprofilecode().type(id, { force: true }),
        cy.RPRandomName()
      RegulatoryProfile1.getregulatorysavebtn().click()
      cy.readFile(RegulatoryFile).then((data) => {
        data.RegulatoryProfileCode = id
        cy.writeFile(RegulatoryFile, data)

      })
      RegulatoryProfile1.getrpsuccess().contains(this.data2.Sucess)
    }
  })
})

