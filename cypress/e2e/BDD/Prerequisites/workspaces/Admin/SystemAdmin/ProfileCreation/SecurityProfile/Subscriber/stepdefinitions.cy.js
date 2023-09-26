/// <reference types="Cypress" />
/// <reference types = "Cypress-iframe"/>

//----------------Imports---------------------------------------------------------------------
import { And, Then, When } from "@badeball/cypress-cucumber-preprocessor";
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


//---------------------------------------------Login----------------------------------------------------
//---------------------------------------------System Admin Login----------------------------------------------------

//------------TC_109-----------------Security Profile Creation-----------------------------------------------
//----------------------------------------Subscriber---------------------------------------------------------

When('Navigate to Security and click to select security profile', function () {
  welcomePage.getSecurityLink().scrollIntoView()
  welcomePage.getSecurityLink().click({ force: true })
  welcomePage.getSecurityProfileLink().click({ force: true })
  //  securityProfilePage.getSecurityProfilePageTitle().should('contain', this.data6.securityProfilePageTitle)
})
And('Click on add profile select user type as subscriber and fill the details', function () {
  securityProfilePage.getAddProfile().click()
  securityProfilePage.getSelectSubUserTypeTab().click({ force: true })
  securityProfilePage.getSelectSubUserTypeTab().focused()
  if(Cypress.env('subscriberNamedAs').includes('Subscriber')){
      securityProfilePage.getUserRole().contains('Subscriber').click({ force: true })
}
else{
    securityProfilePage.getUserRole().contains('Customer').click({ force: true })
}
  
})
And('Click on add profile select user type as subscriber and fill the details as superadmin', function () {
  securityProfilePage.getAddProfile().click()
  securityProfilePage.getSelectSubUserTypeTab().click({ force: true })
  securityProfilePage.getSelectSubUserTypeTab().focused()
  securityProfilePage.getUserRole().contains(' System Admin ').click({ force: true })
})

And('Fill the details-Subscriber Profile Name', function () {
  recurse(
    () => securityProfilePage.getEnterProfileName().clear().type(getRandomName(), { force: true }),
    () => securityProfilePage.getCheckBox().eq(1).click({ force: true }),
    (uniqueness) => (uniqueness) == securityProfilePage.getProfileNameExist().contains
      ('Profile with same name already exists. Try another!').should('be.visible'),
    securityProfilePage.getCheckBox().eq(1).click({ force: true })
  )
  cy.readFile(SecurityProfilePath).then((data) => {
    data.subscriber = name
    cy.writeFile(SecurityProfilePath, data)
  })
})
And('Fill the details-PasswordRestrictios', function () {
  securityProfilePage.getMinPasswordLength().type(this.data6.minPasswordLength)
  securityProfilePage.getMaxPasswordLength().type(this.data6.maxPasswordLength)
  securityProfilePage.getCheckBox().eq(0).click({ force: true })
  securityProfilePage.getCheckBox().eq(2).click({ force: true })
  securityProfilePage.getCheckBox().eq(1).click({ force: true })
  securityProfilePage.getCheckBox().contains(this.data6.checkBox4).click({ force: true })
  securityProfilePage.getFailedPwdLoginCAPTCHA().type(this.data6.failedLoginCAPTCHA)
  securityProfilePage.getFailedPasswordAttempts().click({ force: true }).type(this.data6.failedPwdAttempts)
  securityProfilePage.getAllowedSplChar().type(this.data6.specialCharacters)
  securityProfilePage.getPasswordExpiry().type(this.data6.passwordExpiryDays)
  securityProfilePage.getLastNonRepeatingPWD().type(this.data6.lastNonRepeatingPassword)
})
And('Fill the details-PinRestrictions', function () {
  securityProfilePage.getPIN().click({ force: true })
  securityProfilePage.getPinLength().type(this.data6.pinLength)
  securityProfilePage.getSequentialNumberCheckBox().click({ force: true })
  securityProfilePage.getPinBlock().type(this.data6.failedAttemptsToBlock)
  securityProfilePage.getFailedPinLoginCAPTCHA().type(this.data6.failedPin)  
  securityProfilePage.getPinExpiry().type(this.data6.pinExpiry) 
  securityProfilePage.getNonRepeatingLastPins().type(this.data6.lastNonRepeatingPin)
  if(Cypress.env("version").includes("x.7"))
  {
    securityProfilePage.getRepeatingNumberCheckBox().click({ force: true })
  }
  else{
    cy.log("allowRepeatingDigForPin is not there")
  }

})
And('Fill the details-AuthRestrictions', function () {
  securityProfilePage.getTwoFactorAuth().click({ force: true })
  securityProfilePage.getGeoLocation().click({ force: true })
})
And('Fill the details-loginRestrictions', function () {
  securityProfilePage.getLoginRestrictions().click({ force: true })
  
  securityProfilePage.getMultipleLoginsAllowedCount().type(this.data6.multipleLoginsAllowedCount)
  securityProfilePage.getSelectAllorClearLink().click({ force: true })
  securityProfilePage.getCoolOffPeriod().type(this.data6.getCoolOffPeriod)
  securityProfilePage.getAutoLogoutTime().type(this.data6.autoLogoutTime)
  securityProfilePage.getAuthSystem().select(this.data6.authSystem)
  securityProfilePage.getNotifyOnDeviceChangeCheckBox().click({ force: true })
})
And('Fill the details-loginRestrictions for superadmin', function () {
  securityProfilePage.getLoginRestrictions().click({ force: true })
  
  // securityProfilePage.getMultipleLoginsAllowedCount().type(this.data6.multipleLoginsAllowedCount)
  // securityProfilePage.getSelectAllorClearLink().click({ force: true })
  // securityProfilePage.getCoolOffPeriod().type(this.data6.getCoolOffPeriod)
  // securityProfilePage.getAutoLogoutTime().type(this.data6.autoLogoutTime)
  // securityProfilePage.getAuthSystem().select(this.data6.authSystem)
  // securityProfilePage.getNotifyOnDeviceChangeCheckBox().click({ force: true })
})

Then('Click on add and confirm', function () {
  securityProfilePage.getAddButton().click({ force: true })
  securityProfilePage.getConfirmButton().click({ force: true })
  securityProfilePage.getSuccessMessage().contains(this.data6.successMessage)
  securityProfilePage.getDoneButton().click({ force: true })
})

And('Fill the details-AuthRestrictions1', function () {
  securityProfilePage.getPIN().click({ force: true })
  securityProfilePage.getGeoLocation().click({ force: true })
})
And('Fill the details-loginRestrictions1', function () {
  securityProfilePage.getTwoFactorAuth().click({ force: true })
  
  securityProfilePage.getMultipleLoginsAllowedCount().type(this.data6.multipleLoginsAllowedCount)
  securityProfilePage.getSelectAllorClearLink().click({ force: true })
  securityProfilePage.getCoolOffPeriod().type(this.data6.getCoolOffPeriod)
  securityProfilePage.getAutoLogoutTime().type(this.data6.autoLogoutTime)
  securityProfilePage.getAuthSystem().select(this.data6.authSystem)
  securityProfilePage.getNotifyOnDeviceChangeCheckBox().click({ force: true })
})
