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

//----------------BDD Hooks-----------------------------------------------------------------

//------------TC_109--------------------------Security Profile------------------------------------------------
//----------------------------------------Subscriber----------------------------------------------------

// When('Navigate to Security and click to select security profile', function () {
//   welcomePage.getSecurityLink().scrollIntoView()
//   welcomePage.getSecurityLink().click({ force: true })
//   welcomePage.getSecurityProfileLink().click({ force: true })
//   securityProfilePage.getSecurityProfilePageTitle().should('contain', this.data6.securityProfilePageTitle)
// })



//------------TC_110--------------------default security profile------------------------------------------------

And('Filter by slecting Default security profile', function () {
  pageLogin.getiFrame()
  securityProfilePage.getFilter().click({ force: true })
  securityProfilePage.getDefaultCheckBox().click()
  securityProfilePage.getApplyFilter().scrollIntoView()
  securityProfilePage.getApplyFilter().click()
  securityProfilePage.getShowDropDown().click({ force: true })
  securityProfilePage.getSelectFromDropDown().click({ force: true })

})

Then('Assert each workspace have one default Profile', function () {
  if (securityProfilePage.getCategory().contains(' System Admin ')) {
    securityProfilePage.getCreatedBy().eq(0).should('contain', ' system ')
  }
  if (securityProfilePage.getCategory().contains(' Business Admin ')) {
    securityProfilePage.getCreatedBy().eq(1).should('contain', ' system ')
  }
  if (securityProfilePage.getCategory().contains(' Customer care Admin ')) {
    securityProfilePage.getCreatedBy().eq(2).should('contain', ' system ')
  }
  if (securityProfilePage.getCategory().contains(' AtmMachine ')) {
    securityProfilePage.getCreatedBy().eq(3).should('contain', ' system ')
  }
  if (securityProfilePage.getCategory().contains(' Merchant ')) {
    securityProfilePage.getCreatedBy().eq(4).should('contain', ' system ')
  }
  if (securityProfilePage.getCategory().contains(' Agent ')) {
    securityProfilePage.getCreatedBy().eq(5).should('contain', ' system ')
  }
  if (securityProfilePage.getCategory().contains(' Distributer ')) {
    securityProfilePage.getCreatedBy().eq(6).should('contain', ' system ')
  }
  if (securityProfilePage.getCategory().contains(' Head Merchant ')) {
    securityProfilePage.getCreatedBy().eq(7).should('contain', ' system ')
  }
  if (securityProfilePage.getCategory().contains(' Super Agent ')) {
    securityProfilePage.getCreatedBy().eq(8).should('contain', ' system ')
  }
  if (securityProfilePage.getCategory().contains(' Biller ')) {
    securityProfilePage.getCreatedBy().eq(9).should('contain', ' system ')
  }
  if (securityProfilePage.getCategory().contains(' Telco Operator ')) {
    securityProfilePage.getCreatedBy().eq(10).should('contain', ' system ')
  }
  if (securityProfilePage.getCategory().contains(' Payment Gateway ')) {
    securityProfilePage.getCreatedBy().eq(11).should('contain', ' system ')
  }
  if (securityProfilePage.getCategory().contains(' Corporate ')) {
    securityProfilePage.getCreatedBy().eq(12).should('contain', ' system ')
  }

if (Cypress.env("subscriberNamedAs").includes("Subscriber")) {
    securityProfilePage.getSelectedFilter().click({ force: true });
    securityProfilePage
      .getCheckBox()
      .eq(21)
      .contains("Subscriber")
      .click();
    securityProfilePage.getApplyFilter().scrollIntoView();
    securityProfilePage.getApplyFilter().click();
    securityProfilePage.getCreatedBy().eq(0).should("contain", " system ");
  } 
  else {
    securityProfilePage.getSelectedFilter().click({ force: true });
    securityProfilePage
      .getCheckBox()
      .eq(21)
      .contains("Customer")
      .click();
    securityProfilePage.getApplyFilter().scrollIntoView();
    securityProfilePage.getApplyFilter().click();
    securityProfilePage.getCreatedBy().eq(0).should("contain", " system ");
    //cy.wait(1000);
  }
  
  
})


And('Select User type as Subscriber and click on Subscriber', function () {
  pageLogin.getiFrame()
  registerPage.getregisterPageTitle().should('contain', this.data2.registerPageTitle)
  registerPage.getSelectSubUserTypeTab().click({ force: true })
  registerPage.getSelectSubUserTypeTab().focused()
  registerPage.getUserRole().click({ force: true })
  registerPage.getRegistrationMode().eq(0).click({ force: true })
  registerPage.getNextButtonBasic().click({ force: true })
  registerPage.getNextButtonBasic1().click({ force: true })
})

Then('Verify User registration have security profile', function () {
    if(Cypress.env('subscriberNamedAs').includes('Subscriber')){
  registerPage.getSecurityProfile().select("subscriberSecurityProfile", { force: true }).should("contain.text", "subscriberSecurityProfile")
    }
    else{
        registerPage.getSecurityProfile().select("customerSecurityProfile", { force: true })
    }
})

