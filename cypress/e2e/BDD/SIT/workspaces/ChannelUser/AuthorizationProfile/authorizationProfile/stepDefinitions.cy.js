/// <reference types="Cypress" />
/// <reference types = "Cypress-iframe"/>

//----------------Imports---------------------------------------------------------------------
import { And, Then, When } from "@badeball/cypress-cucumber-preprocessor";
import 'cypress-iframe';
import authorizationManagement from '../../../../../../../support/pageObjects/AuthorizationProfileManagement/authorizationManagement';
import homePage from '../../../../../../../support/pageObjects/homePage';
import loginPage from '../../../../../../../support/pageObjects/loginPage';
import "../../../../../../../support/Utils/authourizationcommands";
import "../../../../../../../support/Utils/generic";


//----------------Object Declaration----------------------------------------------------------

const pageLogin = new loginPage()
const authorizationProfilePage = new authorizationManagement()
const welcomePage = new homePage()
const uid = () => Cypress._.random(1e6)
const id = uid()
var profName
var SubProfileName = 'cypress/fixtures/profileData/Profile.json'

var AuthProfileName = 'cypress/fixtures/profileData/AuthProfile.json'
var profName

function getRandomName() {
  profName = "";
  var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
  for (var i = 0; i < 5; i++)
    profName += possible.charAt(Math.floor(Math.random() * possible.length));
  return profName;
}

//----------------Test Scripts---------------------------------------------------------------




And('select BusinessAdmin user and select userrole', function () {
  authorizationProfilePage.getEmployeeeType().click({ force: true })
  authorizationProfilePage.getEmployeeeType().focused()
  authorizationProfilePage.getEmployeeeBusinessAdmin().click({ force: true })
})

Then('Fill all Details and Check BMC Employer BusinessAdmin authorization profile', function () {
  authorizationProfilePage.getProfileName().clear({ force: true }).type(getRandomName(), { force: true }),

    authorizationProfilePage.getUserServicePreferences().click({ force: true })
  cy.readFile(AuthProfileName).then((data) => {
    data.businesAadmin = profName
    cy.writeFile(AuthProfileName, data)
  })
  authorizationProfilePage.getAdd().click({ force: true })

})


Then('Fill all Details and search module name', function () {
  authorizationProfilePage.getProfileName().clear({ force: true }).type(getRandomName(), { force: true }),
    authorizationProfilePage.getUserServicePreferences().click({ force: true })

  cy.readFile(AuthProfileName).then((data) => {
    data.businesAadmin = profName
    cy.writeFile(AuthProfileName, data)
  })

  authorizationProfilePage.getSearchModule().clear({ force: true }).type(' Corporate Payments ', { force: true })

})


Then('Fill all Details and select module from module list', function () {
  authorizationProfilePage.getProfileName().clear({ force: true }).type(getRandomName(), { force: true }),
    authorizationProfilePage.getUserServicePreferences().click({ force: true })

  cy.readFile(AuthProfileName).then((data) => {
    data.businesAadmin = profName
    cy.writeFile(AuthProfileName, data)
  })

})


Then('Fill all Details and select module, service and set profile preferences', function () {
  authorizationProfilePage.getProfileName().clear({ force: true }).type(getRandomName(), { force: true }),
    authorizationProfilePage.getUserServicePreferences().click({ force: true })

  cy.readFile(AuthProfileName).then((data) => {
    data.businesAadmin = profName
    cy.writeFile(AuthProfileName, data)
  })

})

Then('Fill all Details and select all modules, services and set profile preferences', function () {
  authorizationProfilePage.getProfileName().clear({ force: true }).type(getRandomName(), { force: true }),
    authorizationProfilePage.getUserServicePreferences().click({ force: true })

  cy.readFile(AuthProfileName).then((data) => {
    data.BusinessProfileName = profName
    cy.writeFile(AuthProfileName, data)
  })
  cy.selectModule()
  authorizationProfilePage.getAdd().click({ force: true })
  authorizationProfilePage.getConfirm().click({ force: true })
  authorizationProfilePage.getProfileDoneButton().click({ force: true })
})

Then('Fill all Details and click Add button then click Cancel Button', function () {
  authorizationProfilePage.getProfileName().clear({ force: true }).type(getRandomName(), { force: true }),
    authorizationProfilePage.getUserServicePreferences().click({ force: true })

  cy.readFile(AuthProfileName).then((data) => {
    data.BusinessProfileName = profName
    cy.writeFile(AuthProfileName, data)
  })
  authorizationProfilePage.getAdd().click({ force: true })
  authorizationProfilePage.getCancelButton().click({ force: true })

})


Then('Fill all Details and click Add button then click Back Button', function () {
  authorizationProfilePage.getProfileName().clear({ force: true }).type(getRandomName(), { force: true }),
    authorizationProfilePage.getUserServicePreferences().click({ force: true })

  cy.readFile(AuthProfileName).then((data) => {
    data.BusinessProfileName = profName
    cy.writeFile(AuthProfileName, data)
  })
  authorizationProfilePage.getAdd().click({ force: true })
  authorizationProfilePage.getBackButton().click({ force: true })

})

Then('Fill all Details and click Add button then click Back Arrow Button', function () {
  authorizationProfilePage.getProfileName().clear({ force: true }).type(getRandomName(), { force: true }),
    authorizationProfilePage.getUserServicePreferences().click({ force: true })

  cy.readFile(AuthProfileName).then((data) => {
    data.BusinessProfileName = profName
    cy.writeFile(AuthProfileName, data)
  })
  authorizationProfilePage.getAdd().click({ force: true })
  authorizationProfilePage.getBackArrowButton().click({ force: true })

})


Then('Fill all Details and click Add button then click Confirm Button', function () {
  authorizationProfilePage.getProfileName().clear({ force: true }).type(getRandomName(), { force: true }),
    authorizationProfilePage.getUserServicePreferences().click({ force: true })

  cy.readFile(AuthProfileName).then((data) => {
    data.BusinessProfileName = profName
    cy.writeFile(AuthProfileName, data)
  })
  authorizationProfilePage.getAdd().click({ force: true })
  authorizationProfilePage.getConfirm().click({ force: true })
})


Then('Fill all Details and click Add button then click Done Button', function () {
  authorizationProfilePage.getProfileName().clear({ force: true }).type(getRandomName(), { force: true }),
    authorizationProfilePage.getUserServicePreferences().click({ force: true })

  cy.readFile(AuthProfileName).then((data) => {
    data.BusinessProfileName = profName
    cy.writeFile(AuthProfileName, data)
  })
  authorizationProfilePage.getAdd().click({ force: true })
  authorizationProfilePage.getConfirm().click({ force: true })
  authorizationProfilePage.getProfileDoneButton().click({ force: true })
})


Then('Click on Modify button of authorization profile to modify', function () {
  authorizationProfilePage.getViewProfile().click({ force: true })
  authorizationProfilePage.getEditProfile().click({ force: true })
  authorizationProfilePage.getModifyProfile().click({ force: true })

})

Then('Click on Modify button of authorization profile to modify and Click on Confirm', function () {
  authorizationProfilePage.getViewProfile().click({ force: true })
  authorizationProfilePage.getEditProfile().click({ force: true })
  authorizationProfilePage.getModifyProfile().click({ force: true })
  cy.wait(2000)
  authorizationProfilePage.getConfirm().click({ force: true })
})


Then('Click on Copy Icon', function () {
  authorizationProfilePage.getCopyIcon().click({ force: true })
})

And('Click on Filterss', function () {
  authorizationProfilePage.getFilter().click({ force: true })
})

And('Click on check box of status filter default, user defined', function () {
  authorizationProfilePage.getuserdefined().click({ force: true })
  authorizationProfilePage.getDefaultStatus().click({ force: true })

})

Then('Click on apply', function () {
  authorizationProfilePage.getApplyButton().click({ force: true })
})

And('Click on check box of category based filter subscriber Administrator and business', function () {
  authorizationProfilePage.getCategoryFilter().click({ force: true })

})

Then('Click on Clear', function () {
  authorizationProfilePage.getClearButton().click({ force: true })
})

Then('Click on Created ON column', function () {
  authorizationProfilePage.getCreatedON().click({ force: true })
})

Then('Click on Created By column', function () {
  authorizationProfilePage.getCreatedBY().click({ force: true })
})

Then('Click on Modify ON column', function () {
  authorizationProfilePage.getModifiedON().click({ force: true })
})


Then('User is able to search group by name', function () {
  authorizationProfilePage.getAdministratorType().click({ force: true })
  authorizationProfilePage.getAdministratorType().focused()
  authorizationProfilePage.getAdministratorBusinessAdmin().click({ force: true })
  // authorizationProfilePage.getSearchModule().type({ force: true })

})

Then('User is able to search role by name', function () {
  authorizationProfilePage.getAdministratorType().click({ force: true })
  authorizationProfilePage.getAdministratorType().focused()
  authorizationProfilePage.getAdministratorBusinessAdmin().click({ force: true })
  // authorizationProfilePage.getSearchService().type({ force: true })

})

Then('User is able to select attribute values for any selected group and roles', function () {
  authorizationProfilePage.getAdministratorType().click({ force: true })
  authorizationProfilePage.getAdministratorType().focused()
  authorizationProfilePage.getAdministratorBusinessAdmin().click({ force: true })
  authorizationProfilePage.getUserServicePreferences().click({ force: true })

})



//--------------------Super Admin Auth Profile Creation

And('select SystemAdmin user type and select user role', function () {
  authorizationProfilePage.getAdministratorType().click({ force: true })
  authorizationProfilePage.getAdministratorType().focused()
  authorizationProfilePage.getAdministratorBusinessAdmin().click({ force: true })
})

Then('Fill all Details and Create SystemAdmin authorization profile', function () {
  authorizationProfilePage.getProfileName().clear({ force: true }).type(getRandomName(), { force: true }),
    authorizationProfilePage.getUserServicePreferences().click({ force: true })
  authorizationProfilePage.getAdd().click({ force: true })
  authorizationProfilePage.getConfirm().click({ force: true })
  authorizationProfilePage.getProfileDoneButton().click({ force: true })
})
