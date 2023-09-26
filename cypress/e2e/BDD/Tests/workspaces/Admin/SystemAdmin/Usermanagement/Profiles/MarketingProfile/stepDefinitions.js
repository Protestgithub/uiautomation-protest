/// <reference types="Cypress" />
/// <reference types = "Cypress-iframe"/>

//imports-----------------------------------------------------------------------------
import 'cypress-iframe'
import { Given, When, Then, And, Before } from "@badeball/cypress-cucumber-preprocessor";
import MarketingProfile from '../../../../../../../../../support/pageObjects/UserManagement/MarketingProfile';
import homePage from '../../../../../../../../../support/pageObjects/homePage';
import RegulatoryProfile from '../../../../../../../../../support/pageObjects/UserManagement/RegulatoryProfile';

//--------------Object Declaration------------------------------------------------------
const welcomePage = new homePage()
const MarketingProfile1 = new MarketingProfile()
const RegulatoryProfile1 = new RegulatoryProfile()
var RegulatoryFile = 'userData/Regulatory&MarketingProfile.json'
var name
function getRandomName() {
    name = "MP";
    var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    for (var i = 0; i < 2; i++)
        name += possible.charAt(Math.floor(Math.random() * possible.length));
    return name;
}
//--------------------------------------------------------------------------------------
// Test---------------------------------------------------------------------------------

And('Click on Modify and Save Modify changes',function(){
  cy.fixture(RegulatoryFile).then((user) => {
    var MPCode = user.RegulatoryProfileName
    cy.log(MPCode)
    RegulatoryProfile1.getRPSearchProfileName().type(MPCode)
  })
  MarketingProfile1.getsearchbtn().click()
  MarketingProfile1.getEditMArketingProfile().click()
  //cy.MPRandomName()
  var changename = getRandomName()
 // MarketingProfile1.getMarketingProfileName().clear().last().type('AutomationprofileWHSTest'+changename)
  MarketingProfile1.getsave().click()
})

And('Search marketing profile', () => {

    // cy.readFile('cypress/fixtures/userData/Regulatory&MarketingProfile.json').then((data) => {
    //     let M = data.MarketingProfileName
    //     cy.log(M)

    //     MarketingProfile1.getprofilename().type(M)

    // })
    cy.readFile('cypress/fixtures/userData/Regulatory&MarketingProfile.json').then((data) => {
        let Q = data.MarketingProfileName
        cy.log(Q)
        MarketingProfile1.getprofilename().type(Q)
    })
cy.wait(2000)
    MarketingProfile1.getsearchoption().click()
})
Then('Click on delete icon under wallet option', () => {

    MarketingProfile1.getediticon().click()
    cy.wait(2000)
    // cy.waitUntil(() => {
    //   return cy.iframe().find('.MuiGrid-root.MuiGrid-item.MuiGrid-grid-xs-4').contains('Wallet ')
    // })
    MarketingProfile1.getaddwallet().click()
    MarketingProfile1.getMarketingprofileMFSProvider().click()
    MarketingProfile1.getMarketingprofileMFSProvider2().click()
    MarketingProfile1.getMarketingprofileWalletType().click()
    MarketingProfile1.getMarketingprofileWalletType2().click()
    MarketingProfile1.getMarketingprofileGrade().click()
    MarketingProfile1.getMarketingprofileGrade2().click()
    MarketingProfile1.getMarketingprofileInstrumentTCP().click()
    MarketingProfile1.getMarketingprofileInstrumentTCP2().click()
    MarketingProfile1.getMarketingprofileSavebBtn1().click()
    cy.wait(2000)
    MarketingProfile1.getSuccessmsg().contains('Marketing profile updated successfully')
})

//-------------------
And('Click on search button and Delete wallet', () => {

    // cy.readFile('cypress/fixtures/userData/Regulatory&MarketingProfile.json').then((data) => {
    //     let M = data.MarketingProfileName
    //     cy.log(M)
    //     MarketingProfile1.getprofilename().type(M)
    // })
    cy.readFile('cypress/fixtures/userData/Regulatory&MarketingProfile.json').then((data) => {
        let Q = data.MarketingProfileName
        cy.log(Q)
        MarketingProfile1.getprofilename().type(Q)
    })
    MarketingProfile1.getsearchoption().click()
    MarketingProfile1.getediticon1().click()
    MarketingProfile1.getdeleteteicon1().click()
    //MarketingProfile1.getdeleteteicon1().click()
    MarketingProfile1.getMarketingprofileSavebtn2().click()
    cy.wait(2000)
    MarketingProfile1.getSuccessmsg().contains('Marketing profile updated successfully')

})
