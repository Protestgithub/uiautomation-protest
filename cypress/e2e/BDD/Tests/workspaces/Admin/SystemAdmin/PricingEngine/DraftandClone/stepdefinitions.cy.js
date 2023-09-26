/// <reference types="Cypress" />
/// <reference types = "Cypress-iframe"/>

//----------------Imports---------------------------------------------------------------------
import { And, Then } from "@badeball/cypress-cucumber-preprocessor";
import 'cypress-iframe';
import homePage from '../../../../../../../../support/pageObjects/homePage';
import PricingEnginePage from '../../../../../../../../support/pageObjects/PricingEngine/PricingEnginePage';
import "../../../../../../../../support/Utils/generic";

//----------------Object Declaration----------------------------------------------------------

const welcomePage = new homePage()
const pricingEnginePage = new PricingEnginePage()
var fileis = 'cypress/fixtures/userData/Aservice.json'
var CloneButton1 = "/shulka/serviceChargePolicy/GUESTMERCHPAYOAP_RESUME/EUR/chargeRule"

var name
function getRandomName() {
  name = "";
  var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
  for (var i = 0; i < 5; i++)
    name += possible.charAt(Math.floor(Math.random() * possible.length));
  return name;
}
//----------------------------------------POC - CODE-------------------------------------------------------


//------------------------------------Pricing Engine--------------------------------------------------
//-----------TC_33------------------Service Charge Calcultor-----------------------------------------
// When('Click on Pricing Engine', function () {
//   welcomePage.getPricingEngineLink().click({ force: true })
// })



//------TC_34---------------------Set Status of service Policy----------------------------------------------

// And('Click on the Service Policy', function () {
//   cy.intercept(this.data20.CashIN).as('StatusSerPolcyPricingEng')
//   pricingEnginePage.getCashIN().click({ force: true })
//   cy.wait('@StatusSerPolcyPricingEng', { timeout: 30000 })
// })
Then('Set Status Active or Inactive', function () {
  pricingEnginePage.getActiveOrInactive().click({ force: true })
  pricingEnginePage.getActiveOrInactive().click({ force: true })
})

//-----TC_35---------------------------Search For service policy Rules------------------------------------------
And('Click on the Search Tab & Search by Rule Name', function () {

  cy.readFile(fileis).then((data) => {
    let RuleName = data.ServiceRuleName
    pricingEnginePage.getSearchTab().type(RuleName)
  })

  pricingEnginePage.getSearchButton().click({ force: true })
})
Then('Verify Search results should give the list of rule name with Condition,status,Validity,rule & Policytype', function () {
  cy.readFile(fileis).then((data) => {
    let RuleName = data.ServiceRuleName
    pricingEnginePage.getRuleName1().should('contain.text', RuleName)
  })
  pricingEnginePage.getRule().then(data => {
    let rule = data.text()
    cy.log(rule)
  })
  pricingEnginePage.getPolicy().then(data => {
    let policy = data.text()
    cy.log(policy)
  })
  pricingEnginePage.getStatus().then(data => {
    let status = data.text()
    cy.log(status)
  })
  pricingEnginePage.getValidity().then(data => {
    let validity = data.text()
    cy.log(validity)
  })

})

//-------TC_36----------------------------------------------------------------------------------------------


Then('Click on View Previous Version Link, Enter available Ver no and Proceed to View the details', function () {

  pricingEnginePage.getPolicyVersionLink().eq(1).click({ force: true })
  pricingEnginePage.getCurrentPolicyVersion().then(data => {
    let policyVersion = data.text()
    cy.log(policyVersion)
    let previousPolicyVersion = policyVersion - 1
    cy.log(previousPolicyVersion)
    pricingEnginePage.getPolicyVersionInPut().type(previousPolicyVersion, { force: true })
    pricingEnginePage.getProceedButton().click()
    cy.waitUntil(() => {

      return cy.iframe().find('button.btn.reorder-btn').should('be.visible', { force: true })
    })

    pricingEnginePage.getPolicyVersionLink().should('contain.text', previousPolicyVersion)
  })
})

And('Click on any service to add service charge.', function () {
  cy.wait(5000)
  var number = "0.5"
  var numberone = "0.8"
  pricingEnginePage.getAddNewRuleBtn().click()
  var nameone = getRandomName()
  pricingEnginePage.getRuleName().type(nameone, { force: true })
  cy.readFile(fileis).then((data) => {
    data.ServiceRuleName = nameone
    cy.writeFile(fileis, data)

  })
  //   pricingEnginePage.getMinCharge().type(number)
  //   pricingEnginePage.getMaxCharge().type(numberone)
  pricingEnginePage.getDatePickerStart().dblclick({ force: true })
  cy.waitUntil(() => {
    return cy.iframe().find('div.xdsoft_datepicker.active').eq(0).should('be.visible', { force: true })
  })
  pricingEnginePage.getCalanderStart().should('be.visible', { force: true })
  pricingEnginePage.getCurrentDateSelect().click({ force: true })
  pricingEnginePage.getDatePickerEnd().dblclick({ force: true })
  cy.waitUntil(() => {
    return cy.iframe().find('div.xdsoft_datepicker.active').eq(1).should('be.visible', { force: true })
  })
  Cypress._.times(4, () => {
    pricingEnginePage.getnextmonth().click()
  })
  pricingEnginePage.getCurrentDateSelect().click({ force: true })
  pricingEnginePage.getWhoPays().select(this.data05.WhoPays, { force: true })
  pricingEnginePage.getSVAType().select(this.data05.SenderSVAtype, { force: true })
  pricingEnginePage.getWhomeToPay().select(this.data05.WhomeToPay, { force: true })
  pricingEnginePage.getChargeStatmentPricing().click({ force: true })
  pricingEnginePage.getPricingPercntage().type(number)
  cy.readFile(fileis).then((data) => {
    data.ServiceChargePercentage = number
    cy.writeFile(fileis, data)

  })
  pricingEnginePage.getPricingFixedAmt().type(numberone)
  cy.readFile(fileis).then((data) => {
    data.ServiceChargeFixed = numberone
    cy.writeFile(fileis, data)

  })
  pricingEnginePage.getSaveDraftBtn().trigger('mouseover').click({ force: true })
  cy.wait(1000)
  //cy.intercept(this.data20.SubmitPolicy).as('getSubmitPolicy')
  pricingEnginePage.getSubmitPolicy().click({ force: true })
  cy.wait(1000)
  //cy.wait('@getSubmitPolicy', { timeout: 30000 })
  //cy.intercept(this.data20.SubmitBtn).as('getSubmit')
  cy.intercept('/shulka/serviceChargePolicy').as('getSubmit')
  pricingEnginePage.getSubmitBtn().click({ force: true })
  cy.wait('@getSubmit', { timeout: 30000 })

  //cy.wait('@getSubmit', { timeout: 30000 })
  // pricingEnginePage.getServiceHeader().contains(this.data05.textmsg)
})


//--------TC_37-----------------------------------------------------------------------------------------


And('Click on add new rule buttton,add New service charge and save the policy as draft', function () {
  pricingEnginePage.getAddNewRuleBtn().click()
  pricingEnginePage.getRuleName().type(getRandomName(), { force: true })
  cy.readFile(fileis).then((data) => {
    data.ServiceRuleName1 = name
    cy.writeFile(fileis, data)
  })
  //   pricingEnginePage.getMinCharge().type(this.data05.MinCharge)
  //   pricingEnginePage.getMaxCharge().type(this.data05.MaxCharge)
  pricingEnginePage.getDatePickerStart().dblclick({ force: true })
  cy.waitUntil(() => {
    return cy.iframe().find('div.xdsoft_datepicker.active').eq(0).should('be.visible', { force: true })
  })
  pricingEnginePage.getCalanderStart().should('be.visible', { force: true })
  pricingEnginePage.getCurrentDateSelect().click({ force: true })
  pricingEnginePage.getDatePickerEnd().dblclick({ force: true })
  cy.waitUntil(() => {
    return cy.iframe().find('div.xdsoft_datepicker.active').eq(1).should('be.visible', { force: true })
  })
  Cypress._.times(4, () => {
    pricingEnginePage.getnextmonth().click()
  })
  pricingEnginePage.getCurrentDateSelect().click({ force: true })
  pricingEnginePage.getWhoPays().select(this.data05.WhoPays, { force: true })
  pricingEnginePage.getSVAType().select(this.data05.SenderSVAtype, { force: true })
  pricingEnginePage.getWhomeToPay().select(this.data05.WhomeToPay, { force: true })
  pricingEnginePage.getChargeStatmentPricing().click({ force: true })
  pricingEnginePage.getPricingPercntage().type(this.data05.Percentage)
  pricingEnginePage.getPricingFixedAmt().type(this.data05.FixedAmt)
  pricingEnginePage.getSaveDraftBtn().trigger('mouseover').click()
  pricingEnginePage.getSavedDraftPageTitle().scrollIntoView().should('contain.text', this.data05.pageTitle)
})
And('Check if user is able to view the saved draft', function () {
  cy.readFile(fileis).then((data) => {
    let RuleName = data.ServiceRuleName1
    pricingEnginePage.getRuleName2().should('contain.text', RuleName)
    pricingEnginePage.getRuleName2().contains(RuleName)
  })
})

Then('Delete the saved Draft', function () {
  pricingEnginePage.getSaveDraftBtn().trigger('mouseover')
  pricingEnginePage.getdeletedraft().click()
  pricingEnginePage.getdeletedraft1().click()
})

//-------TC_39---------------------------------CLONE----------------------------------------------------------

And('Click on Existing Service Policy Rule edit and save', function () {

  cy.wait(4000)        //Added wait since it is taking time to find out SVAType

  pricingEnginePage.getPolicyName().eq(0).click({ force: true })

  pricingEnginePage.getPricingPercntage().type(this.data05.editPercentage)

  pricingEnginePage.getPricingFixedAmt().type(this.data05.editFixedAmt)

  pricingEnginePage.getSaveDraftBtn().trigger('mouseover').click()

})

Then('clone the edited Service Policy Rule with other service Policy', function () {
  cy.intercept('/shulka/referenceData*').as('PricingEngine')
  pricingEnginePage.getCloneButton().eq(1).click({ force: true }) //Changed the Index reference 
  cy.wait('@PricingEngine')
  pricingEnginePage.getCloneService().contains('Cash Out').click({ force: true })
  cy.intercept('/shulka/referenceData*').as('PricingEngine')
  pricingEnginePage.getCloneButton1().eq(1).click({ force: true })  // Added eq(1) on 17/07/23
  cy.wait('@PricingEngine')
  cy.wait(3000)
  pricingEnginePage.getPolicyName().contains('Cloned')
})
//--------------------------------------------------------------------------------------

Then('Reject the created service charge', function () {

  pricingEnginePage.getApproval().click()

  pricingEnginePage.getApprovalpolicy().click()

  cy.readFile(fileis).then((data) => {
    var ruleName = data.ServiceRuleName
    pricingEnginePage.getApprovalRuleName().contains(ruleName).click()
  })

  pricingEnginePage.getRejectBtn().click()
  pricingEnginePage.getRejectMsg().type('Reject')

  pricingEnginePage.getSaveMsg().click()
  pricingEnginePage.getRejectBtn().eq(0).click()
  pricingEnginePage.getRejectMsg().type('Reject')

  pricingEnginePage.getSaveMsg().click()
  pricingEnginePage.getApprovalSubmitBtn().click()

  pricingEnginePage.getApprovalConfirmBtn().click()

  pricingEnginePage.getApprovalsuccessText().should('contain.text', 'Rejected changes successfully')
})




//------------------------------------------------
And('Click on the Search field', function () {

  pricingEnginePage.getSearchTab().click({ force: true })
  cy.readFile(fileis).then((data) => {
    var policyRuleName = data.ServiceRuleName
    pricingEnginePage.getSearchTextField().type(policyRuleName)
    pricingEnginePage.getSearchButton2().click()
  })

})

And('Click on Clone', function () {

  pricingEnginePage.getCloneButton2().click()
  pricingEnginePage.getPolicyNameList().click()
  pricingEnginePage.getCloneButton1().click()
  cy.wait(3000)
  pricingEnginePage.getClonedPolicy().click()
  pricingEnginePage.getSaveDraftBtn().trigger('mouseover').click({ force: true })
  pricingEnginePage.getSubmitPolicy().click({ force: true })
  pricingEnginePage.getSubmitBtn().click({ force: true })
  // pricingEnginePage.getServiceHeader().contains('successfully')
})

//----------------------------------------------------------------------
//---------------------------------------TC_93---------------------------------------------------------------
And('Enter all Mandatory Details for Pricing Engine', function () {

  pricingEnginePage.getAddNewRuleBtn().click()

  var nameone = getRandomName()
  pricingEnginePage.getRuleName().type(nameone, { force: true })
  pricingEnginePage.getMinCharge().type(0.1)
  pricingEnginePage.getMaxCharge().type(0.5)
  pricingEnginePage.getDatePickerStart().dblclick({ force: true })
  pricingEnginePage.getCalanderStart().should('be.visible', { force: true })
  pricingEnginePage.getCurrentDateSelect().click({ force: true })
  pricingEnginePage.getDatePickerEnd().dblclick({ force: true })
  Cypress._.times(4, () => {
    pricingEnginePage.getnextmonth().click()
  })
  pricingEnginePage.getCurrentDateSelect().click({ force: true })
  pricingEnginePage.getWhoPays().select(this.data05.WhoPays, { force: true })
  pricingEnginePage.getSVAType().select(this.data05.SenderSVAtype, { force: true })
  pricingEnginePage.getWhomeToPay().select(this.data05.WhomeToPay, { force: true })
  pricingEnginePage.getChargeStatmentPricing().click({ force: true })
  pricingEnginePage.getPricingPercntage().type(10)
  pricingEnginePage.getPricingFixedAmt().type(1)
  pricingEnginePage.getSaveDraftBtn().trigger('mouseover').click({ force: true })
  pricingEnginePage.getSaveDraft().click({ force: true })

  pricingEnginePage.getSaveDraftBtn().trigger('mouseover').click({ force: true })
  pricingEnginePage.getDiscardDraft().click()

  pricingEnginePage.getOK().eq(0).click()
})
//--------------------------------TC_113------------------------------------------
And('Click on Any Service Policy', function () {
  cy.intercept('/shulka/referenceData*').as('PricingEngine')
  pricingEnginePage.getAutoBillPayment().click()
  cy.wait('@PricingEngine')
})
And('Click on Service level Settings', function () {
  pricingEnginePage.getAutoBillPaymentSettings().click()

})
Then('Change Service level Settings', function () {
  pricingEnginePage.getSwitch().eq(0).click()
  pricingEnginePage.getSaveDraftBtn().trigger('mouseover').click({ force: true })
  pricingEnginePage.getSubmitPolicy().click({ force: true })

  pricingEnginePage.getSubmitBtn().click({ force: true })
})

//-------------------------------------TC_122----------------------------------------------------------
And('Select the rule and modify it and Revert to last saved', function () {
  pricingEnginePage.getSelectRule().eq(0).click()
  pricingEnginePage.getPricingPercntage().type(20)
  pricingEnginePage.getPricingFixedAmt().type(2)
  pricingEnginePage.getSaveDraftBtn().trigger('mouseover').click({ force: true })
  pricingEnginePage.getRevertSaved().click({ force: true })

  pricingEnginePage.getOK().eq(2).click()
})

//--------------------------------------TC_123----------------------------------------------------------

And('Search Rule created by System admin', function () {

  cy.readFile(fileis).then((data) => {
    let RuleName = data.ServiceRuleName
    pricingEnginePage.getSearchTab().type(RuleName)
  })
  pricingEnginePage.getSearchButton().click()
  pricingEnginePage.getRule().eq(0).click()
})

And('Modify the Selected Rule', function () {
  cy.wait(2000)        //Added wait since it is taking time to find out SVAType
  pricingEnginePage.getSVAType().select("SAVINGCLUB", { force: true })
  pricingEnginePage.getSaveDraftBtn().trigger('mouseover').click({ force: true })
  pricingEnginePage.getSubmitPolicy().click({ force: true })

  pricingEnginePage.getSubmitBtn().click({ force: true })
})

//------------------------------------TC_124---------------------------------------------------

And('Search Rule with created Rule name', function () {

  cy.readFile(fileis).then((data) => {
    let RuleName = data.ServiceRuleName
    pricingEnginePage.getSearchTab().type(RuleName)

    pricingEnginePage.getSearchButton().click()
    pricingEnginePage.getRuleName1().contains(RuleName)
  })
})

//-----------------------------------TC_125---------------------------------------------------------

And('Search Rule with created Rule name with Matched condition', function () {

  cy.readFile(fileis).then((data) => {
    let RuleName = data.ServiceRuleName
    pricingEnginePage.getSearchTab().type(RuleName)
    pricingEnginePage.getSearchConditions().type('Cash In').click()
    pricingEnginePage.getSearchButton().click()
    pricingEnginePage.getRuleName1().contains(RuleName)
  })
})

// And('Click on any service to add service charge for transaction tax', function () {
//   var number = "0.5"
//   var numberone = "0.8"
//   pricingEnginePage.getAddNewRuleBtn().click()
//   var nameone = getRandomName()
//   pricingEnginePage.getRuleName().type(nameone, { force: true })
//   cy.readFile(fileis).then((data) => {
//     data.ServiceRuleName = nameone
//     cy.writeFile(fileis, data)

//   })
//   //   pricingEnginePage.getMinCharge().type(number)
//   //   pricingEnginePage.getMaxCharge().type(numberone)
//   pricingEnginePage.getDatePickerStart().dblclick({ force: true })
//   cy.waitUntil(() => {
//     return cy.iframe().find('div.xdsoft_datepicker.active').eq(0).should('be.visible', { force: true })
//   })
//   pricingEnginePage.getCalanderStart().should('be.visible', { force: true })
//   pricingEnginePage.getCurrentDateSelect().click({ force: true })
//   pricingEnginePage.getDatePickerEnd().dblclick({ force: true })
//   cy.waitUntil(() => {
//     return cy.iframe().find('div.xdsoft_datepicker.active').eq(1).should('be.visible', { force: true })
//   })
//   Cypress._.times(4, () => {
//     pricingEnginePage.getnextmonth().click()
//   })
//   pricingEnginePage.getCurrentDateSelect().click({ force: true })
//   pricingEnginePage.getWhoPays().select(this.data05.WhoPays, { force: true })
//   pricingEnginePage.getSVAType().select(this.data05.SenderSVAtype, { force: true })
//   pricingEnginePage.getWhomeToPay().select(this.data05.WhomeToPay, { force: true })
//   pricingEnginePage.getChargeStatmentPricing().click({ force: true })
//   pricingEnginePage.getPricingPercntage().type(number)
//   pricingEnginePage.getPricingFixedAmt().type(numberone)
//   pricingEnginePage.getSaveDraftBtn().trigger('mouseover').click({ force: true })
//   //cy.intercept(this.data20.SubmitPolicy).as('getSubmitPolicy')
//   pricingEnginePage.getSubmitPolicy().click({ force: true })
//   //cy.wait('@getSubmitPolicy', { timeout: 30000 })
//   //cy.intercept(this.data20.SubmitBtn).as('getSubmit')
//   pricingEnginePage.getSubmitBtn().click({ force: true })
//   //cy.wait('@getSubmit', { timeout: 30000 })
//   pricingEnginePage.getServiceHeader().should('contain', this.data05.taxmsg)
// })


And('Select USD Currency', function () {
  pricingEnginePage.getselectcurrency().select('USD')
  pricingEnginePage.getselectproceed().click({ force: true })


})



And('Click on the Service Policy', function () {
  cy.wait(5000)
  //cy.intercept(this.data20.CashIN).as('StatusSerPolcyPricingEng')
  pricingEnginePage.getCashIN().click({ force: true })
  //cy.wait('@StatusSerPolcyPricingEng', { timeout: 30000 })
})