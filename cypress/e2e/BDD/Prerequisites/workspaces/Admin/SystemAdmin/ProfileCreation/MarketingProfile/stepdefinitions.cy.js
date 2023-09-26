/// <reference types="Cypress" />
/// <reference types = "Cypress-iframe"/>

//----------------Imports---------------------------------------------------------------------
import { And, Then, When } from "@badeball/cypress-cucumber-preprocessor";
import 'cypress-iframe';
import homePage from '../../../../../../../../support/pageObjects/homePage';
import MarketingProfile from '../../../../../../../../support/pageObjects/UserManagement/MarketingProfile';
import RegulatoryProfile from '../../../../../../../../support/pageObjects/UserManagement/RegulatoryProfile';
import "../../../../../../../../support/Utils/generic";
import "../../../../../../../../support/Utils/TransferControlProfileCommand";

//----------------Object Declaration----------------------------------------------------------

const welcomePage = new homePage()
var RegulatoryFile = 'cypress/fixtures/userData/Regulatory&MarketingProfile.json'
const MarketingProfile1 = new MarketingProfile()
const RegulatoryProfile1 = new RegulatoryProfile()
const uid = () => Cypress._.random(0, 1e6)
const id = uid()
const uuid12 = () => Cypress._.random(1e8)
var LoginId1
LoginId1 = uuid12()




//------------------------------  MARKETING PROFILE--------------------------------------------

When('Navigate to UserManagement and Click on Marketing Profile', function () {

  welcomePage.getUserManagementOption().scrollIntoView()
  welcomePage.getUserManagementOption().click()
  welcomePage.getmarketingprofile().click()

})

Then('Add Marketing Profile', function () {
  cy.iframe().find('[id="profileName"]').clear().type(Cypress.env('profileName'))
  cy.intercept('/mobiquitypay/v1/marketingProfiles?*').as('waitforSearchResults')
  cy.iframe().find('[id="search-btn"]').click()
  cy.wait('@waitforSearchResults')
  cy.iframe().find("table > tbody > tr > td").invoke('text').then(($text) => {
    if ($text.includes(Cypress.env('profileName'))) { cy.log("Profile exists") }
    else {
      cy.log("creating new profile")
      MarketingProfile1.getAddMarketingProfile().click()
      MarketingProfile1.getMarketingProfileCode().type(id, { force: true })
      cy.MPRandomName()
      MarketingProfile1.getMarketingProfileDomainName().click()
      MarketingProfile1.getMarketingProfileDomainName1().click()
      MarketingProfile1.getMarketingProfileCategoryName().click()
      MarketingProfile1.getMarketingProfileCategoryName1().click()
      MarketingProfile1.getMarketingProfileMFSProvider().click()
      MarketingProfile1.getMarketingProfileMFSProvider1().click()
      MarketingProfile1.getMarketingProfileWalletType().click()
      MarketingProfile1.getMarketingProfileWalletType1().click()
      MarketingProfile1.getMarketingProfileGrade().click()
      MarketingProfile1.getMarketingProfileGrade1().click()
      MarketingProfile1.getMarketingProfileInstrumentTCP().click()
      MarketingProfile1.getMarketingProfileInstrumentTCP1().click()
      MarketingProfile1.getMarketingProfileAddBtn().click()
      cy.readFile(RegulatoryFile).then((data) => {
        data.MarketingProfileCodeDistributer = id
        cy.writeFile(RegulatoryFile, data)
      })
      RegulatoryProfile1.getrpsuccess().contains(this.data2.Marketing)
    }
  })
})


And('Add Marketing Profile Wholesaler', function () {
  cy.iframe().find('[id="profileName"]').clear().type(Cypress.env('profileNameWHS'))
  cy.intercept('/mobiquitypay/v1/marketingProfiles?*').as('waitforSearchResults')
  cy.iframe().find('[id="search-btn"]').click()
  cy.wait(2000)
  cy.wait('@waitforSearchResults')
  cy.iframe().find("table > tbody > tr > td").invoke('text').then(($text) => {
    if ($text.includes(Cypress.env('profileNameWHS'))) { cy.log("Profile exists") }
    else {
      cy.log("creating new profile")
      MarketingProfile1.getAddMarketingProfile().click()
      MarketingProfile1.getMarketingProfileCode().type(id, { force: true })
      cy.MPRandomName1()
      MarketingProfile1.getMarketingProfileDomainName().click()
      MarketingProfile1.getMarketingProfileDomainName1().click()
      MarketingProfile1.getMarketingProfileCategoryName().click()
      MarketingProfile1.getMarketingProfileCategoryName1().click()
      MarketingProfile1.getMarketingProfileMFSProvider().click()
      MarketingProfile1.getMarketingProfileMFSProvider1().click()
      MarketingProfile1.getMarketingProfileWalletType().click()
      MarketingProfile1.getMarketingProfileWalletType1().click()
      MarketingProfile1.getMarketingProfileGrade().click()
      MarketingProfile1.getMarketingProfileGrade1().click()
      MarketingProfile1.getMarketingProfileInstrumentTCP().click()
      MarketingProfile1.getMarketingProfileInstrumentTCP1().click()
      cy.wait(2000)
      MarketingProfile1.getMarketingProfileAddBtn().click()
      cy.readFile(RegulatoryFile).then((data) => {
        data.MarketingProfileCodeDistributer = id
        cy.writeFile(RegulatoryFile, data)
      })
      RegulatoryProfile1.getrpsuccess().contains(this.data2.Marketing)
    }
  })
})