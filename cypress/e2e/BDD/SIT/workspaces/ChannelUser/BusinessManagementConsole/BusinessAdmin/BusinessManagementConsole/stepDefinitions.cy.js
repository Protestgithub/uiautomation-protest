/// <reference types="Cypress" />
/// <reference types = "Cypress-iframe"/>

//----------------Imports---------------------------------------------------------------------
import { Given, And, Then, When } from "@badeball/cypress-cucumber-preprocessor";
import 'cypress-iframe';

import "../../../../../../../../support/Utils/generic"
import "../../../../../../../../support/Utils/AdministratorCommands"

import manageUsers from "../../../../../../../../support/pageObjects/UserManagement/manageUsers";
import homePage from "../../../../../../../../support/pageObjects/homePage";
import authorizationManagement from "../../../../../../../../support/pageObjects/AuthorizationProfileManagement/authorizationManagement";
import MarketingProfile from "../../../../../../../../support/pageObjects/UserManagement/MarketingProfile";
import RegulatoryProfile from "../../../../../../../../support/pageObjects/UserManagement/RegulatoryProfile";


//----------------Object Declaration----------------------------------------------------------

const authorizationProfilePage = new authorizationManagement()
const welcomePage = new homePage()
const manageUsersPage = new manageUsers()
const MarketingProfile1 = new MarketingProfile()
const RegulatoryProfile1 = new RegulatoryProfile()

const uid = () => Cypress._.random(1e6)
var profName
var TransactionFleO2C = "cypress/fixtures/userData/TransactionFile.json"
var profName
var BuisnessReg = 'cypress/fixtures/userData/BusinessUsersData.json'

function getRandomName() {
  profName = "";
  var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
  for (var i = 0; i < 5; i++)
    profName += possible.charAt(Math.floor(Math.random() * possible.length));
  return profName;
}

//----------------Test Scripts---------------------------------------------------------------


Given('Login into Mobiquity Portal as Business ADMIN', function () {
  cy.launchURL(Cypress.env('Adminurl'))
  cy.visit(Cypress.env("Adminurl") + "/dfscontainer/#/business/")

  cy.readFile('cypress/fixtures/userData/AdministratorData.json').then((data) => {
    var loginId
    loginId = data.BALoginId

    cy.login(loginId, this.data1.businessAdmin.businessadminPwd1)
  })
})


Given('Login into Mobiquity Portal as Business admin User5', function () {
  cy.launchURL(Cypress.env('Adminurl'))
  cy.visit(Cypress.env("Adminurl") + "/dfscontainer/#/business/")

  cy.readFile('cypress/fixtures/userData/BusinessUsersData.json').then((data) => {
    var loginId
    loginId = data.CorporateLoginId

    cy.login(loginId, this.data1.businessAdmin.businessadminPwd1)
  })
})
And('Enter Mobile number and KYC number in search menu for others', function () {
  manageUsersPage.getSelectOptn().select('Others')
  manageUsersPage.getSearchUser().type('7898787898')
  manageUsersPage.getSearchUserButton().click({ force: true })
  manageUsersPage.getAssertionforOthers().should('include.text', 'No Data Found')
})

And('Enter Mobile number and KYC number in search menu for Employeer', function () {
  manageUsersPage.getSelectOptn().select('Others')
  cy.readFile(BuisnessReg).then((data) => {
    let employeeMobile = data.registeredMobileMerch
    manageUsersPage.getSearchUser().type(employeeMobile)
    manageUsersPage.getSearchUserButton().click()
  })
})

Then('Click on edit button for User and Confirm', function () {
  manageUsersPage.getEditIcon().eq(1).click({ force: true })
  manageUsersPage.getFirstNameforEdit().type('UserEdit')
  manageUsersPage.getNextbttn().eq(0).click({ force: true })
  manageUsersPage.getNextbttn().eq(1).click({ force: true })
  manageUsersPage.getNextbttn().eq(2).click({ force: true })
  manageUsersPage.getconfirm().click({ force: true })
  manageUsersPage.getDoneButton().click({ force: true })
})


Then('Click on Single User', function () {
  manageUsersPage.getSingleUser().click({ force: true })

})

Then('Click on Multiple User', function () {
  manageUsersPage.getMultipleUser().click({ force: true })

})

Then('Click on edit icon for User information', function () {
  manageUsersPage.getEditIcon().eq(1).click({ force: true })
})


And('Click on Delete icon and Don’t enter comment and reason', function () {
  manageUsersPage.getDelete().click({ force: true })
  manageUsersPage.getintiatedelete().should('be.disabled')
})

And('Click on Delete icon and Don’t enter comment and select valid reason', function () {
  manageUsersPage.getDelete().click({ force: true })
  manageUsersPage.getreasonforclosure().select(this.data2.Reason)
  manageUsersPage.getintiatedelete().should('be.disabled')

})


And('Click on Delete icon and enter comment and Don’t select valid reason', function () {
  manageUsersPage.getDelete().click({ force: true })
  manageUsersPage.getcomment().type(this.data2.comment)
  manageUsersPage.getintiatedelete().should('be.disabled')
})

And('Click on Delete icon and enter comment and select valid reason', function () {
  manageUsersPage.getDelete2().click({ force: true })
  manageUsersPage.getcomment().type(this.data2.comment)
  manageUsersPage.getreasonforclosure().select(this.data2.Reason)
  cy.wait(2000)
  // cy.intercept("/mobiquitypay/v1/ums/user/*").as('getDelete')
  manageUsersPage.getintiatedelete().click({ force: true })
  // cy.wait('@getDelete', { timeout: 50000 })
})


Then('Click on edit button to edit User basic information', function () {
  manageUsersPage.getEditIcon().eq(1).click({ force: true })
  manageUsersPage.getFirstNameforEdit().type('UserEdit')
  manageUsersPage.getNextbttn().eq(0).click({ force: true })
})

Then('Click on edit button to edit KYC information', function () {
  manageUsersPage.getEditIcon().eq(1).click({ force: true })
  manageUsersPage.getNextbttn().eq(0).click({ force: true })
  manageUsersPage.getKYCPannel().click({ force: true })
  manageUsersPage.getKYCInfo().should('be.disabled')
  manageUsersPage.getNextbttn().eq(1).click({ force: true })

})

Then('Click on edit button to edit Pofile information', function () {
  manageUsersPage.getEditIcon().eq(1).click({ force: true })
  manageUsersPage.getNextbttn().eq(0).click({ force: true })
  manageUsersPage.getNextbttn().eq(1).click({ force: true })
  manageUsersPage.getProfileInfo().should('be.disabled')
  manageUsersPage.getNextbttn().eq(2).click({ force: true })
})

Then('Click on Save button for edit user information', function () {
  manageUsersPage.getEditIcon().eq(1).click({ force: true })
  manageUsersPage.getSaveButton().click({ force: true })

})

Then('Click on Cancel button for edit user information', function () {
  manageUsersPage.getEditIcon().eq(1).click({ force: true })
  manageUsersPage.getNextbttn().eq(0).click({ force: true })
  manageUsersPage.getNextbttn().eq(1).click({ force: true })
  manageUsersPage.getNextbttn().eq(2).click({ force: true })
  manageUsersPage.getCanelButton().click({ force: true })
  manageUsersPage.getCancelAssertMessage().should('include.text', 'Are you sure you want to cancel the form submission ?')
})

Then('Click on Yes button for edit user information', function () {
  manageUsersPage.getEditIcon().eq(1).click({ force: true })
  manageUsersPage.getNextbttn().eq(0).click({ force: true })
  manageUsersPage.getNextbttn().eq(1).click({ force: true })
  manageUsersPage.getNextbttn().eq(2).click({ force: true })
  manageUsersPage.getCanelButton().click({ force: true })
  manageUsersPage.getYesButton().click({ force: true })
})

Then('Click on No button for edit user information', function () {
  manageUsersPage.getEditIcon().eq(1).click({ force: true })
  manageUsersPage.getNextbttn().eq(0).click({ force: true })
  manageUsersPage.getNextbttn().eq(1).click({ force: true })
  manageUsersPage.getNextbttn().eq(2).click({ force: true })
  manageUsersPage.getCanelButton().click({ force: true })
  manageUsersPage.getNoButton().click({ force: true })
})


Then('Click on Confirm button for User', function () {
  manageUsersPage.getEditIcon().eq(1).click({ force: true })
  manageUsersPage.getFirstNameforEdit().type('UserEdit')
  manageUsersPage.getNextbttn().eq(0).click({ force: true })
  manageUsersPage.getNextbttn().eq(1).click({ force: true })
  manageUsersPage.getNextbttn().eq(2).click({ force: true })
  manageUsersPage.getconfirm().click({ force: true })
  //  manageUsersPage.getDoneButton().click({ force: true })
})

Then('Click on Approve Button for modified Business User', function () {
  if (Cypress.env('version').includes('x.4')) {
    welcomePage.getversion4Approvaltab().click({ force: true })
  }
  else {
    // cy.intercept('/mobiquitypay/v2/workflow_management/workflow/pending_records*').as('getApproval')
    welcomePage.getApprovalButtonTab().click({ force: true })
    // cy.wait('@getApproval', { timeout: 30000 })
  }
  authorizationProfilePage.getApproveButton().click({ force: true })
  //  authorizationProfilePage.getApproveButtonSubmit().click({ force: true })
})

Then('Click on Yes Button for modified Business User', function () {
  if (Cypress.env('version').includes('x.4')) {
    welcomePage.getversion4Approvaltab().click({ force: true })
  }
  else {
    // cy.intercept('/mobiquitypay/v2/workflow_management/workflow/pending_records*').as('getApproval')
    welcomePage.getApprovalButtonTab().click({ force: true })
    // cy.wait('@getApproval', { timeout: 30000 })
  }
  authorizationProfilePage.getApproveButton().click({ force: true })
  authorizationProfilePage.getApproveButtonSubmit().click({ force: true })
})



Then('Click on edit button for Others Users', function () {
  manageUsersPage.getEditIcon().eq(1).click({ force: true })
  // manageUsersPage.getFirstNameforEdit().type('UserEdit')
  // manageUsersPage.getNextbttn().eq(0).click({ force: true })
  // manageUsersPage.getNextbttn().eq(1).click({ force: true })
  // manageUsersPage.getNextbttn().eq(2).click({ force: true })
  // manageUsersPage.getconfirm().click({ force: true })
  // manageUsersPage.getDoneButton().click({ force: true })
})


And('Click on Delete Button for user information', function () {
  manageUsersPage.getDelete().click({ force: true })
  // manageUsersPage.getcomment().type(this.data2.comment)
  // manageUsersPage.getintiatedelete().should('be.disabled')
})


Then('Click on Reset Button for users', function () {
  manageUsersPage.getResetSearch().click({ force: true })

})

Then('Click on Name sorting on table', function () {
  manageUsersPage.getSortName().click({ force: true })

})

Then('Click on Registered on on table', function () {
  cy.wait(3000)
  manageUsersPage.getRegisteredON().click({ force: true })

})

Then('Click on Wallet Payment History for the user', function () {
  manageUsersPage.getWalletPaymentHistoryButton().click({ force: true })

})

Then('Click on profile on progess bar', function () {
  //  manageUsersPage.getWalletPaymentHistoryButton().click({ force: true })

})

Then('Click on hierarchy on progess bar', function () {
  //  manageUsersPage.getWalletPaymentHistoryButton().click({ force: true })

})

Then('Cick on Credentials', function () {
  manageUsersPage.getMore().click({ force: true })
  manageUsersPage.getCredentials().click({ force: true })

})

Then('Cick on User Details', function () {
  manageUsersPage.getMore().click({ force: true })
  manageUsersPage.getUserDetails().click({ force: true })

})


Then('Cick on View Details for KYC', function () {
  manageUsersPage.getViewKYCDetails().click({ force: true })

})

And('Click on Action icon and Access Identifier', function () {
  manageUsersPage.getViewAllDetailsButton().click({ force: true })
  manageUsersPage.getViewAllInfowithName().should('include.text', 'Access Identifiers')

})

And('Click on Action icon and Profile Information', function () {
  manageUsersPage.getViewAllDetailsButton().click({ force: true })
  manageUsersPage.getProfileInformation().should('include.text', 'Profile Information')

})


Then('Cick on Credentials and click on reset password icon', function () {
  manageUsersPage.getMore().click({ force: true })
  manageUsersPage.getCredentials().click({ force: true })
  manageUsersPage.getResetbttn().click({ force: true })

})

Then('Cick on Credentials and click on reset PIN and YES button', function () {
  manageUsersPage.getMore().click({ force: true })
  manageUsersPage.getCredentials().click({ force: true })
  manageUsersPage.getResetbttnPwd().click({ force: true })
  manageUsersPage.getConfirmReset().click({ force: true })

})

Then('Cick on Credentials and click on reset PIN and NO button', function () {
  manageUsersPage.getMore().click({ force: true })
  manageUsersPage.getCredentials().click({ force: true })
  manageUsersPage.getResetbttnPwd().click({ force: true })
  manageUsersPage.getCancelReset().click({ force: true })

})


Then('Click on Confirm button for employer', function () {
  manageUsersPage.getEditIcon().eq(1).click({ force: true })
  manageUsersPage.getFirstNameforEdit().type('UserEdit')
  manageUsersPage.getNextbttn().eq(0).click({ force: true })
  manageUsersPage.getNextbttn().eq(1).click({ force: true })
  manageUsersPage.getNextbttn().eq(2).click({ force: true })
  manageUsersPage.getconfirm().click({ force: true })
})


Then('Click on Reset Button for employer', function () {
  manageUsersPage.getResetSearch().click({ force: true })

})


And('Click on cancel button on pop up of delete user', function () {
  manageUsersPage.getDelete().click({ force: true })
  manageUsersPage.getCancelDelete().click({ force: true })
})


Then('Cick on cross on KYC detail pop up', function () {
  manageUsersPage.getViewKYCDetails().click({ force: true })
  manageUsersPage.getCloseCrossIcon().click({ force: true })


})

Then('Click on hierarchy eye icon', function () {
  manageUsersPage.getViewKYCDetails().click({ force: true })
  manageUsersPage.getCloseCrossIcon().click({ force: true })


})


Then('Click on edit button to edit Pofile information merchant code', function () {
  manageUsersPage.getEditIcon().eq(1).click({ force: true })
  manageUsersPage.getNextbttn().eq(0).click({ force: true })
  manageUsersPage.getNextbttn().eq(1).click({ force: true })
  // manageUsersPage.getProfileInfo().should('be.disabled')
  manageUsersPage.getNextbttn().eq(2).click({ force: true })
})


Then('Click on edit hierarchy parent user id', function () {
  manageUsersPage.getEditIcon().eq(1).click({ force: true })
  manageUsersPage.getNextbttn().eq(0).click({ force: true })
  manageUsersPage.getNextbttn().eq(1).click({ force: true })
  manageUsersPage.getNextbttn().eq(2).click({ force: true })
  manageUsersPage.getParentID().type('UserEdit')
  manageUsersPage.getSaveButton().click({ force: true })
 // cy.wait(2000)
 // manageUsersPage.getSaveSuccessMessage().should('include.text', 'Intermediate Save Successful!!!')
})


Then('Click on edit button to edit Hierarchy Pofile information', function () {
  manageUsersPage.getEditIcon().eq(1).click({ force: true })
  manageUsersPage.getNextbttn().eq(0).click({ force: true })
  manageUsersPage.getNextbttn().eq(1).click({ force: true })
  // manageUsersPage.getProfileInfo().should('be.disabled')
  manageUsersPage.getNextbttn().eq(2).click({ force: true })
})


Then('Click on Reset Button for Hierarchy', function () {
  manageUsersPage.getEditIcon().eq(1).click({ force: true })
  manageUsersPage.getResetSearch().click({ force: true })
})


Then('Cick on Credentials and click on reset PIN and YES button and DONE button', function () {
  manageUsersPage.getMore().click({ force: true })
  manageUsersPage.getCredentials().click({ force: true })
  manageUsersPage.getResetbttnPwd().click({ force: true })
  manageUsersPage.getConfirmReset().click({ force: true })
  manageUsersPage.getsuccessresetconfirmation().click({ force: true })

})


And('Click on Search Button', function () {
  manageUsersPage.getSearchUserButton().click()

})

And('Click on Filter for Wallet Payment History', function () {

  manageUsersPage.getFilterStatementButton().click({ force: true })
  // manageUsersPage.getStatus().click()
})

And('Click on Filter for Wallet Payment History and Status Type', function () {

  manageUsersPage.getFilterStatementButton().click({ force: true })
  manageUsersPage.getStatus().click()
})

And('Click on Filter for Wallet Payment History and clear the set filters', function () {

  manageUsersPage.getFilterStatementButton().click({ force: true })
  manageUsersPage.getStatus().click()
  authorizationProfilePage.getClearButton().click({ force: true })
})


Then('Click on Order Details for Order ID', function () {
  manageUsersPage.getOrderDetailsButton().click({ force: true })
})

Then('Click on Account Info and Click on Wallet to see the bank account details', function () {
  manageUsersPage.getAccountInfo().click({ force: true })
  manageUsersPage.getWallettype().click({ force: true })
})

Then('Click on User Details to modify', function () {
  manageUsersPage.getUserDetails().click({ force: true })
})
// 11-07-2023

Then('Click on Close Button', function () {
  manageUsersPage.getCloseUserDetails().click({ force: true })
})



Then('Click on Credentials and Can not reset', function () {
  manageUsersPage.getMore().click({ force: true })
  manageUsersPage.getCredentials().click({ force: true })

})


Then('Click on Order Details and Order Date', function () {
  manageUsersPage.getOrderDetailsButton().click({ force: true })
  manageUsersPage.getSortOrderDate().click({ force: true })
})


Then('Click on Order Details for employeers', function () {
  manageUsersPage.getOrderDetailsButton().click({ force: true })
})


Then('Click on filte based on status', function () {

  manageUsersPage.getFilterOrderDetails().click({ force: true })
})


And('Click on Filter for Order Details and clear the set filters', function () {

  manageUsersPage.getFilterOrderDetails().click({ force: true })
  manageUsersPage.getStatus().click()
  authorizationProfilePage.getClearButton().click({ force: true })
})


And('Click on Filter for Order Details and  click on apply without set any filter', function () {

  manageUsersPage.getFilterOrderDetails().click({ force: true })
  manageUsersPage.getApplyFilterButton().click({ force: true })
 //  authorizationProfilePage.getApplyFilterButton().should('be.disabled')
})

Then('Click on Filter for Order Details and  Enter service click on apply', function () {
  manageUsersPage.getOrderDetailsButton().click({ force: true })
  manageUsersPage.getFilterOrderDetails().click({ force: true })
  manageUsersPage.getservice().type('Bank To Wallet')
  manageUsersPage.getBankWalletService().click({ force: true })

})



Then('Click on Multiple User to export profile', function () {
  manageUsersPage.getMultipleUser().click({ force: true })
  manageUsersPage.getMultipleUserExportData().click({ force: true })
  manageUsersPage.getCustomerData().click({ force: true })
  manageUsersPage.getRoleCustomer().click({ force: true })
  manageUsersPage.getClickDownloadTemplate().click({ force: true })

})


And('Enter Mobile number and KYC number in search menu for Employee', function () {
  manageUsersPage.getSelectOptn().select('Others')
  cy.readFile(BuisnessReg).then((data) => {
    let employeeMobile = data.corpregisteredEmployeeMobile
    manageUsersPage.getSearchUser().type(employeeMobile)
    manageUsersPage.getSearchUserButton().click()
  })
})



And('Click on Add profile in security profile', function () {
  manageUsersPage.getAddProfileSecurity().click()
})

Then('Click on system admin and check box beside Has no sequential words and numbers', function () {
  manageUsersPage.getSystemAdminSecurity().click()
  manageUsersPage.getAllowSeqCharForPwd().click()
  manageUsersPage.getTextLable().should('have.text', 'Has no sequential words and numbers')
})


Then('Click on system admin and Enter some special character in special character field.', function () {
  manageUsersPage.getSystemAdminSecurity().click()
  manageUsersPage.getSomeSplChar().type('@-')
})

Then('Click on system admin and Enter number in the Failed Password Attempts for block field.', function () {
  manageUsersPage.getSystemAdminSecurity().click()
  manageUsersPage.getFailedPwdAttemptsForBlock().type('1')
})


Then('Click on Login and Select internal from authentication system dropdown.', function () {
  manageUsersPage.getSystemAdminSecurity().click()
  manageUsersPage.getLoginSecurity().click()
  manageUsersPage.getSelectAuthSystem().select('Internal')

})

Then('Click on Login and Set number of minimum and maximum questions', function () {
  manageUsersPage.getSystemAdminSecurity().click()
  manageUsersPage.getLoginSecurity().click()
  manageUsersPage.getMinQuestions().type('1')
  manageUsersPage.getMaxQuestions().type('2')
})


And('Click on Pencil Icon to Modify', function () {
  MarketingProfile1.getEditMArketingProfile().click()
  manageUsersPage.getModifyMarketingProfileDisabled().should('be.disabled')

})



Then('Click on system admin and Enter the value less than 0 in password expiery field.', function () {
  manageUsersPage.getSystemAdminSecurity().click()
  manageUsersPage.getPwdExpiryDays().type('-1')
  manageUsersPage.getNumberOfLastPwds().click()
  manageUsersPage.getAssertPwdExpiryDays().should('have.text', ' Password Expiry (in days) is invalid ')

})


Then('Click on system admin and enter value greater than  365 for password expiry duration field.', function () {
  manageUsersPage.getSystemAdminSecurity().click()
  manageUsersPage.getPwdExpiryDays().type('366')

})


Then('Click on Customer and set pin length less than 0', function () {
  manageUsersPage.getCustomerType().click()
  manageUsersPage.getCustomerRole().click()
  manageUsersPage.getSecurityPIN().click()
  // cy.wait(2000)
  manageUsersPage.getPinLength().type('-1')
  //manageUsersPage.getNumberOfLastPwds().click()
  manageUsersPage.getAssertPwdExpiryDays().should('have.text', ' Pin length is invalid ')

})


// Then('Click on Customer and leave the pin expiry duration field blank', function () {
//   manageUsersPage.getCustomerType().click()
//   manageUsersPage.getCustomerRole().click()
//   manageUsersPage.getPwdExpiryDays().click()
//   manageUsersPage.getNumberOfLastPwds().click()
//   manageUsersPage.getAssertPwdExpiryDays().should('have.text', ' Password Expiry (in days) is required ')


// })


Then('Click on System admin and leave minimum length and maximum length password field blank.', function () {
  manageUsersPage.getSystemAdminSecurity().click()
  manageUsersPage.getMinPwdLength().click()
  manageUsersPage.getMaxPwdLength().click()
  //cy.wait(2000)
  //manageUsersPage.getAssertPwdExpiryDays().should('have.text', '  Min Length is required  ')

})


Then('Click on Customer and leave Maximum number of invalid attempts field blank for password', function () {
  manageUsersPage.getCustomerType().click()
  manageUsersPage.getCustomerRole().click()
  manageUsersPage.getFailedPwdAttemptsForBlock().click()

})

Then('Click on Customer and leave Maximum number of invalid attempts field blank for pin', function () {
  manageUsersPage.getCustomerType().click()
  manageUsersPage.getCustomerRole().click()
  manageUsersPage.getSecurityPIN().click()
  manageUsersPage.getFailedPinAttemptsForBlock().click()
})


Then('Click on System admin and leave the password expiry duration field blank.', function () {
  manageUsersPage.getSystemAdminSecurity().click()
  manageUsersPage.getPwdExpiryDays().click()
  manageUsersPage.getNumberOfLastPwds().click()
  manageUsersPage.getAssertPwdExpiryDays().should('have.text', ' Password Expiry (in days) is required ')

})


Then('Click on Customer and set the pin length', function () {
  manageUsersPage.getCustomerType().click()
  manageUsersPage.getCustomerRole().click()
  manageUsersPage.getSecurityPIN().click()
  manageUsersPage.getPinLength().type('4')

})

Then('Click on Customer and leave special characters field blank.', function () {
  manageUsersPage.getCustomerType().click()
  manageUsersPage.getCustomerRole().click()
  manageUsersPage.getSomeSplChar().click()
  manageUsersPage.getPwdExpiryDays().click()
  cy.wait(2000)
  manageUsersPage.getAssertPwdExpiryDays().should('have.text', ' Special Characters is required ')

})


Then('Click on Add Regulatory Profile and Enter existing profile code', function () {
  RegulatoryProfile1.getaddregulatoryprofile().click()
  RegulatoryProfile1.getregulatoryprofilecode().type('NO_KYC', { force: true })
  cy.RPRandomName()
  RegulatoryProfile1.getrpsuccess().contains(this.data2.Existing)

})

And('Click on Add Marketing Profile and Enter existing profile code', function () {

  MarketingProfile1.getAddMarketingProfile().click()
  MarketingProfile1.getMarketingProfileCode().type('ATMDefaultMP', { force: true })
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

  RegulatoryProfile1.getrpsuccess().contains(this.data2.MarketingExistingError)
})

Then('Click on Customer and leave authentication system field blank.', function () {
  manageUsersPage.getCustomerType().click()
  manageUsersPage.getCustomerRole().click()
  manageUsersPage.getSecurityProfileLogin().click()
  manageUsersPage.getSelectAuthSystem().select('Internal')

})

Then('Click on Customer and leave auto logout duration field blank.', function () {
  manageUsersPage.getCustomerType().click()
  manageUsersPage.getCustomerRole().click()
  manageUsersPage.getSecurityProfileLogin().click()
  manageUsersPage.getSecurityLoginAutoLogoutTime().click()

})

Then('User Deletes any Wallet through Modification', function () {
  manageUsersPage.getEditMarketingProfile().click()
  manageUsersPage.getAddWalletForMarketing().click()
  MarketingProfile1.getMarketingProfileMFSProvider().click()
  MarketingProfile1.getMarketingProfileMFSProvider1().click()
  MarketingProfile1.getMarketingProfileWalletType().click()
  MarketingProfile1.getMarketingProfileWalletType1().click()
  MarketingProfile1.getMarketingProfileGrade().click()
  MarketingProfile1.getMarketingProfileGrade1().click()
  MarketingProfile1.getMarketingProfileInstrumentTCP().click()
  MarketingProfile1.getMarketingProfileInstrumentTCP1().click()
  manageUsersPage.getSaveButtonForMarketing().click()
  manageUsersPage.getDeleteButtonForMarketing().click()
  manageUsersPage.getSaveSubmitButtonMarketing().click()


})



Then('Click on Customer and check box beside Has no sequential words and numbers', function () {
  manageUsersPage.getCustomerType().click()
  manageUsersPage.getCustomerRole().click()
  manageUsersPage.getAllowSeqCharForPwd().click()
  manageUsersPage.getTextLable().should('have.text', 'Has no sequential words and numbers')
})


Then('Click on Customer and set auto logout duration', function () {
  manageUsersPage.getCustomerType().click()
  manageUsersPage.getCustomerRole().click()
  manageUsersPage.getSecurityProfileLogin().click()
  manageUsersPage.getSecurityLoginAutoLogoutTime().type('10')

})


Then('Click on Customer and set authentication system as internal', function () {
  manageUsersPage.getCustomerType().click()
  manageUsersPage.getCustomerRole().click()
  manageUsersPage.getSecurityProfileLogin().click()
  manageUsersPage.getSelectAuthSystem().select('Internal')
})


Then('Click on Suspend user icon and click on Yes button without enter any comment', function () {
  manageUsersPage.getSuspendUser().click({ force: true })
  manageUsersPage.getSubmitYesSuspendUser().should('be.disabled')

})

Then('Click on Suspend user icon and click on No button without enter any comment', function () {
  manageUsersPage.getSuspendUser().click({ force: true })
  manageUsersPage.getSubmitNoSuspendUser().click({ force: true })

})


Then('Click on Suspend user icon and click on yes button when enter the comment', function () {
  manageUsersPage.getSuspendUser().click({ force: true })
  manageUsersPage.getCommentBox().type("Comment")
  manageUsersPage.getSubmitYesSuspendUser().click({ force: true })

})

Then('Click on Export Transaction', function () {
  manageUsersPage.getExportStatement().click({ force: true })
})


Then('Click on Order Details to select items from drop down', function () {
  manageUsersPage.getOrderDetailsButton().click({ force: true })
  manageUsersPage.getShowDropDown().click({ force: true })

})

Then('Click on Account Info and Click on Bank Account', function () {
  manageUsersPage.getAccountInfo().click({ force: true })
  manageUsersPage.getBankAccounts().click({ force: true })

})


Then('Click on Order Details to select page', function () {
  manageUsersPage.getOrderDetailsButton().click({ force: true })
  manageUsersPage.getGoToPage().click({ force: true })

})


Then('Click on Wallet Payment History for the user and search transaction by transaction ID', function () {
  manageUsersPage.getWalletPaymentHistoryButton().click({ force: true })
  cy.readFile(TransactionFleO2C).then((data) => {
    let TID = data.TransactionID
    manageUsersPage.getSearchTransactionId().type(TID, { force: true }).click({ force: true })
  })
})


Then('Click on Order Details and search by order id', function () {
  manageUsersPage.getOrderDetailsButton().click({ force: true })

})
