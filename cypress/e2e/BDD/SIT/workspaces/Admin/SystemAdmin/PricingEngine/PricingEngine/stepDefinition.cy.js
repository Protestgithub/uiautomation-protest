/// <reference types="Cypress" />
/// <reference types = "Cypress-iframe"/>

//----------------Imports---------------------------------------------------------------------
import { And, Then, When } from "@badeball/cypress-cucumber-preprocessor";
import 'cypress-iframe';
import homePage from '../../../../../../../../support/pageObjects/homePage';
import PricingEnginePage from '../../../../../../../../support/pageObjects/PricingEngine/PricingEnginePage';
import "../../../../../../../../support/Utils/generic";
import ChurnManagement from "../../../../../../../../support/pageObjects/ChurnManagement/ChurnManagement";

//----------------Object Declaration----------------------------------------------------------

const welcomePage = new homePage()
const pricingEnginePage = new PricingEnginePage()
var fileis = 'cypress/fixtures/userData/Aservice.json'
const churnManagementPage = new ChurnManagement()
const SubRegistration = 'cypress/fixtures/userData/subscriberReg.json'
//----------------BDD Hooks-----------------------------------------------------------------

var name
function getRandomName() {
  name = "";
  var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
  for (var i = 0; i < 5; i++)
    name += possible.charAt(Math.floor(Math.random() * possible.length));
  return name;
}

//------------------------------------Pricing Engine--------------------------------------------------

And('Enter the Details for New Comission Rule', function () {

  var nameone = getRandomName()
  cy.intercept('/shulka/referenceData*').as('PricingEngine')
  pricingEnginePage.getCashIN().click()
  cy.wait('@PricingEngine', { timeout: 40000 })
  cy.wait(2000)
  pricingEnginePage.getAddNewRuleBtn().click()
  pricingEnginePage.getRuleName().type(nameone, { force: true })
  cy.readFile(fileis).then((data) => {
    data.CommissionRuleName1 = nameone
    cy.writeFile(fileis, data)
  })

})


And('Enter the Details with same payer and payee for the new Comission rule', function () {

  var number = "0.5"
  var numberone = "0.8"

  pricingEnginePage.getDatePickerStart().dblclick({ force: true })

  pricingEnginePage.getCalanderStart().should('be.visible', { force: true })
  pricingEnginePage.getCurrentDateSelect().click({ force: true })
  pricingEnginePage.getDatePickerEnd().dblclick({ force: true })
  pricingEnginePage.getMonthNamerStart().contains(this.data05.month).click({ force: true })//(this.data05.month,{force: true}).click() 
  pricingEnginePage.getYearNameStart().contains(this.data05.year).click({ force: true })

  pricingEnginePage.getCalanderDaysStart().filter(':visible').contains(this.data05.day).click({ force: true })
  pricingEnginePage.getSenderRoleCom().select(this.data05.SenderRole, { force: true })
  pricingEnginePage.getSenderHierarchyCom().select(this.data05.SenderHierarchy, { force: true })

  pricingEnginePage.getSenderGradeCom1().click({ force: true })

  pricingEnginePage.getSenderGradeCom2().click({ force: true })

  pricingEnginePage.getGradebtnclick().click({ force: true })

  pricingEnginePage.getWhoPays().select(this.data05.WhoPaysCom, { force: true })
  pricingEnginePage.getSVAType().select(this.data05.SenderSVAtypeCom, { force: true })

  pricingEnginePage.getWhomeToPay().select(this.data05.WhoPaysCom, { force: true })
  pricingEnginePage.getReceiverSVA().select(this.data05.SenderSVAtypeCom, { force: true })

  pricingEnginePage.getChargeStatmentPricing().click({ force: true })
  pricingEnginePage.getPricingPercntage().type(number)
  cy.readFile(fileis).then((data) => {
    data.CommissionRulePercentage = number
    cy.writeFile(fileis, data)

  })
  pricingEnginePage.getPricingFixedAmt().type(numberone)
  cy.readFile(fileis).then((data) => {
    data.CommissionRuleFixed = numberone
    cy.writeFile(fileis, data)

  })
  pricingEnginePage.getSaveDraftBtn().trigger('mouseover').click({ force: true })

  pricingEnginePage.getSubmitPolicy().dblclick({ force: true })
  cy.wait(2000)
  pricingEnginePage.getSubmitBtn().dblclick({ force: true })
  cy.wait(2000)
  // pricingEnginePage.getCommissionHeader().should('contain', this.data05.comsuccess)
})

And('Enter the Details for new Comission Rule1', function () {

  var nameone = getRandomName()
  cy.intercept('/shulka/referenceData*').as('PricingEngine')
  pricingEnginePage.getCashIN().click()
  cy.wait('@PricingEngine', { timeout: 40000 })
  cy.wait(2000)
  pricingEnginePage.getAddNewRuleBtn().click()
  pricingEnginePage.getRuleName().type(nameone, { force: true })
  cy.readFile(fileis).then((data) => {
    data.CommissionRuleName2 = nameone
    cy.writeFile(fileis, data)
  })

})

And('Select the Service and Modify it', function () {
  var number = "0.4"
  cy.wait(5000)
  pricingEnginePage.getSearchTab().click({ force: true })

  cy.readFile(fileis).then((data) => {
    var nameone = data.ServiceRuleName
    pricingEnginePage.getSearchTextField().type(nameone, { force: true })
    pricingEnginePage.getSearchButton2().click()
    pricingEnginePage.getSearchedRule().click({ force: true })
    cy.wait(2000)
    pricingEnginePage.getSVAType().select(this.data05.SenderSVAtype, { force: true })
    pricingEnginePage.getSaveDraftBtn().trigger('mouseover').click({ force: true })

    pricingEnginePage.getSubmitPolicy().dblclick({ force: true })
    cy.wait(2000)
    pricingEnginePage.getSubmitBtn().dblclick({ force: true })
    cy.wait(2000)
  })

})

Then('Assert the Succes Message', function () {

  cy.waitUntil(() => {
    return cy.iframe().find('[class="alert alert-success"]').should('be.visible', 'Service Charge Policy has been applied successfully')
  })

})

//-------------------------------------------------------------------------------



And('Click on CASH IN service to add service charge.', function () {
  var number = "0.5"
  var numberone = "0.8"
  pricingEnginePage.getAddNewRuleBtn().click()
  var nameone = getRandomName()
  pricingEnginePage.getRuleName().type(nameone, { force: true })
  cy.readFile(fileis).then((data) => {
    data.ServiceRuleName2 = nameone
    cy.writeFile(fileis, data)

  })

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
  //cy.intercept(this.data20.SubmitPolicy).as('getSubmitPolicy')
  pricingEnginePage.getSubmitPolicy().click({ force: true })
  //cy.wait('@getSubmitPolicy', { timeout: 30000 })
  //cy.intercept(this.data20.SubmitBtn).as('getSubmit')
  pricingEnginePage.getSubmitBtn().click({ force: true })
  //cy.wait('@getSubmit', { timeout: 30000 })
  // pricingEnginePage.getServiceHeader().contains(this.data05.textmsg)
})



And('Click on Search and Seacrh for the Rule Name Service2', function () {
  cy.wait(5000)
  pricingEnginePage.getSearchTab().click({ force: true })
  cy.readFile(fileis).then((data) => {
    var RuleName = data.ServiceRuleName2
    pricingEnginePage.getSearchTextField().type(RuleName)
    pricingEnginePage.getSearchButton2().click()
    pricingEnginePage.getSearchedRule().click({ force: true })
    cy.wait(2000)
    pricingEnginePage.getPolicyview().click({ force: true })
    cy.wait(2000)
    cy.getServiceName2(fileis)
  })
})


Then('Click on Submit and Click on Confirm Button2 and check the error message', function () {
  cy.intercept('/CoreWeb/stock/cashInWeb_confirm.action').as('cashInsubmit')
  churnManagementPage.getSubmitButton().click()
  cy.wait('@cashInsubmit')
  cy.intercept('/CoreWeb/stock/cashInWeb_makePayment.action').as('cashInConfirm')
  cy.wait(2000)
  churnManagementPage.getConfirmButton().click()
  cy.wait('@cashInConfirm')
  cy.wait(2000)

  cy.waitUntil(() => {
    return cy.iframe().find('.actionMessage').should('be.visible', { force: true })
  })
})


And('Set Status Active or Inactive and Assert the success message', function () {
  cy.getServiceInActive(fileis)
  pricingEnginePage.getActiveOrInactive().click({ force: true })
  pricingEnginePage.getSubmitBtn().click({ force: true })
  cy.wait(10000)
  cy.waitUntil(() => {
    return cy.iframe().find('[class="alert alert-success"]').contains(this.data05.textmsg)
  })

})


And('Enter Suspended user details for CashIn', function () {
  cy.wait(2000)
  cy.get('.fd-page.iframeContainer.svelte-1v5e28n > iframe').then(($iframe) => {
    cy.readFile(SubRegistration).then((data) => {
      let Mobile = data.subscriberMobileSuspend
      const $body = $iframe.contents().find('body')
      const $win = $iframe[0].contentWindow
      cy.stub($win, 'alert', () => true).as('windowConfirm')
      cy.stub($win.console, 'log').as('consoleLog')
      cy.wrap($body).find('#paymentMethodNumberId').type(Mobile).should(function () {
        //  expect(this.windowConfirm).to.be.calledWith("You must enter a value in MSISDN")
      })
      cy.stub($win, 'confirm', () => true).as('windowConfirm')
      cy.wrap($body).find('[name="amount"]').type("1").should(function () {
        // expect(this.windowConfirm).to.be.calledWith("Subscriber Does Not Exist")
      })

    })
  })
  churnManagementPage.getAmount().clear().type("1")
  cy.wait(2000)
  cy.iframe().find('#partyWalletListSel').select('Normal')
  churnManagementPage.getPaymentID().type(Amount)
})





And('Click on Search and Search with the Rule Name', function () {
  cy.wait(5000)
  pricingEnginePage.getSearchTab().click({ force: true })
  cy.readFile(fileis).then((data) => {
    var RuleName = data.ServiceRuleName2
    pricingEnginePage.getSearchTextField().type(RuleName)
    pricingEnginePage.getSearchButton2().click()
    pricingEnginePage.getSearchedRule().click({ force: true })
  })

})

Then('without Slab click on save Draft  and Assert the Error Message', function () {
  cy.wait(2000)
  pricingEnginePage.getSlab().click({ force: true })
  pricingEnginePage.getFromSlab().type(100)
  pricingEnginePage.getToslab().type(200)
  cy.wait(2000)

  pricingEnginePage.getDeleteSlab().trigger('mouseover').click({ force: true })
  pricingEnginePage.getRemoveSlab().click({ force: true })
  cy.wait(2000)
  pricingEnginePage.getSaveDraftBtn().trigger('mouseover').click({ force: true })
  cy.iframe().find('[data-tooltip="Save Draft"]').click({ force: true })
  cy.waitUntil(() => {
    return cy.iframe().find('.error').eq(1).should('be.visible', { force: true })
  })
})

Then('Click on Save Draft and Assert Success message', function () {
  var number = "0.5"
  cy.wait(2000)
  pricingEnginePage.getPricingPercntage().type(number)
  cy.readFile(fileis).then((data) => {
    data.ServiceChargePercentage = number
    cy.writeFile(fileis, data)
    var number = "0.5"
  })
  pricingEnginePage.getSaveDraftBtn().trigger('mouseover').click({ force: true })
  cy.iframe().find('[data-tooltip="Save Draft"]').click({ force: true })

  cy.waitUntil(() => {
    return cy.iframe().find('[class="alert alert-success"]').contains(this.data05.SavedDraft)
  })
})

Then('Assert the Service Rule', function () {
  cy.waitUntil(() => {
    return cy.iframe().find('.row.policy-view-head').should('be.visible')
  })
})

And('Click on CASH IN service to add service charge and Save Draft', function () {
  var number = "0.5"
  var numberone = "0.8"
  pricingEnginePage.getAddNewRuleBtn().click()
  var nameone = getRandomName()
  pricingEnginePage.getRuleName().type(nameone, { force: true })
  cy.readFile(fileis).then((data) => {
    data.ServiceRuleName2 = nameone
    cy.writeFile(fileis, data)

  })
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
  cy.iframe().find('[data-tooltip="Save Draft"]').click({ force: true })
})



Then('Assert the Message on a Saved Draft', function () {

  cy.getDraftService(fileis)
  cy.wait(2000)
  cy.waitUntil(() => {
    return cy.iframe().find('[class="alert alert-info float-reverse"]').contains(this.data05.pageTitle)
  })


})

Then('Select the Drafted Service and Click on Delete', function () {
  cy.getDraftService(fileis)

  cy.wait(2000)
  pricingEnginePage.getSaveDraftBtn().trigger('mouseover').click({ force: true })
  pricingEnginePage.getDiscardDraft().click()
  pricingEnginePage.getOK().eq(0).click()
})

And('Select the Drafted Service and Edit it', function () {
  cy.getDraftService(fileis)

})

Then('Assert the Success Message of deleted Draft', function () {

  cy.waitUntil(() => {
    return cy.iframe().find('[class="alert alert-success"]').contains(this.data05.DiscardDraft)
  })
})

//---------------Search By Condition-----------------------------------------------------

And('Search by applying search condition', function () {
  cy.wait(5000)
  pricingEnginePage.getSearchTab().click({ force: true })
  pricingEnginePage.getSerchBycondition().type('Gold Customer')
  pricingEnginePage.getOption().contains('Gold Customer').click({ force: true })

  pricingEnginePage.getSearchButton().click({ force: true })
})




Then('Assert the search by condition list', function () {
  cy.waitUntil(() => {
    return cy.iframe().find('[class="col s12 search-keywords"]').contains(this.data05.SearchCondition)
  })

})


Then('Delete the ServicePolicy and Assert Success Message', function () {

  cy.wait(2000)
  pricingEnginePage.getYes().click({ force: true })
  pricingEnginePage.getDeleteoption()
  pricingEnginePage.getSubmitBtn().click({ force: true })
  cy.wait(10000)
  cy.waitUntil(() => {
    return cy.iframe().find('[class="alert alert-success"]').contains(this.data05.textmsg)
  })
})

//----------------------------------------------------------------------------------------
Then('Click on any service to add service charge and enter the Slab Amount', function () {

  pricingEnginePage.getAddNewRuleBtn().click()
  var nameone = getRandomName()
  pricingEnginePage.getRuleName().type(nameone, { force: true })
  cy.readFile(fileis).then((data) => {
    data.ServiceRuleName2 = nameone
    // cy.writeFile(fileis, data)

  })
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

  pricingEnginePage.getSlab().click({ force: true })

  pricingEnginePage.getFromSlab().type(500)

  pricingEnginePage.getSaveDraftBtn().trigger('mouseover').click({ force: true })
  cy.iframe().find('[data-tooltip="Save Draft"]').click({ force: true })
  //pricingEnginePage.getSaveDraftBtn().click({ force:true })
  cy.waitUntil(() => {
    return cy.iframe().find('.error').eq(0).should('be.visible', { force: true })
  })

  //-----For slab amount Enter Negative value------------------------------
  cy.wait(2000)
  pricingEnginePage.getChargeStatmentPricing().click({ force: true })
  pricingEnginePage.getSlab().click({ force: true })
  pricingEnginePage.getFromSlab().type(500)
  pricingEnginePage.getToslab().type(-200)

  pricingEnginePage.getSaveDraftBtn().trigger('mouseover').click({ force: true })
  cy.iframe().find('[data-tooltip="Save Draft"]').click({ force: true })
  //pricingEnginePage.getSaveDraftBtn().click({ force:true })
  cy.waitUntil(() => {
    return cy.iframe().find('.error').eq(1).should('be.visible', { force: true })
  })
})

Then('Click on any service to add service charge and check for the Service Provider', function () {

  pricingEnginePage.getAddNewRuleBtn().click()
  var nameone = getRandomName()
  pricingEnginePage.getRuleName().type(nameone, { force: true })
  cy.readFile(fileis).then((data) => {
    data.ServiceRuleName2 = nameone


  })
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

  pricingEnginePage.getWhomeToPay().should('contain', 'Service Provider')
})

//----------------Comission O2C service-------------------------------------------------------------------------


And('Click on Comission and Click on O2C service', function () {
  cy.intercept('/shulka/commissionPolicy').as('getComission')
  pricingEnginePage.getCommissionTab().click({ force: true })
  cy.wait('@getComission')

  cy.intercept('/shulka/serviceChargePolicy/O2C/INR/chargeRule').as('o2cService')
  pricingEnginePage.getOwnertochannel().click({ force: true })
  cy.wait('@o2cService', { timeout: 30000 })

})


And('Click on any service to add service charge for Commission wallet', function () {

  var number = "0.5"
  var numberone = "0.8"
  var nameone = getRandomName()
  cy.intercept('/shulka/referenceData*').as('PricingEngine')
  pricingEnginePage.getCashIN().click()
  cy.wait('@PricingEngine', { timeout: 40000 })
  cy.wait(2000)
  pricingEnginePage.getAddNewRuleBtn().click()
  pricingEnginePage.getRuleName().type(nameone, { force: true })
  cy.readFile(fileis).then((data) => {
    data.CommissionRuleName4 = nameone
    cy.writeFile(fileis, data)
  })
  //   pricingEnginePage.getMinCharge().type(number)
  //   pricingEnginePage.getMaxCharge().type(numberone)
  pricingEnginePage.getDatePickerStart().dblclick({ force: true })

  pricingEnginePage.getCalanderStart().should('be.visible', { force: true })
  pricingEnginePage.getCurrentDateSelect().click({ force: true })
  pricingEnginePage.getDatePickerEnd().dblclick({ force: true })
  pricingEnginePage.getMonthNamerStart().contains(this.data05.month).click({ force: true })//(this.data05.month,{force: true}).click() 
  pricingEnginePage.getYearNameStart().contains(this.data05.year).click({ force: true })

  pricingEnginePage.getCalanderDaysStart().filter(':visible').contains(this.data05.day).click({ force: true })
  pricingEnginePage.getSenderRoleCom().select(this.data05.SenderRole, { force: true })
  pricingEnginePage.getSenderHierarchyCom().select(this.data05.SenderHierarchy, { force: true })

  pricingEnginePage.getSenderGradeCom1().click({ force: true })

  pricingEnginePage.getSenderGradeCom2().click({ force: true })

  pricingEnginePage.getGradebtnclick().click({ force: true })

  pricingEnginePage.getWhoPays().select(this.data05.WhopaysCommission, { force: true })
  pricingEnginePage.getSVAType().select(this.data05.SVAtypeCommission, { force: true })
  pricingEnginePage.getWhomeToPay().select(this.data05.WhomepaysCommission, { force: true })
  pricingEnginePage.getWhomepaySVA().select(this.data05.SVAtypeCom, { force: true })
  pricingEnginePage.getChargeStatmentPricing().click({ force: true })
  pricingEnginePage.getPricingPercntage().type(number)
  cy.readFile(fileis).then((data) => {
    data.CommissionRulePercentage = number
    cy.writeFile(fileis, data)

  })
  pricingEnginePage.getPricingFixedAmt().type(numberone)
  cy.readFile(fileis).then((data) => {
    data.CommissionRuleFixed = numberone
    cy.writeFile(fileis, data)

  })
  pricingEnginePage.getSaveDraftBtn().trigger('mouseover').click({ force: true })

  pricingEnginePage.getSubmitPolicy().dblclick({ force: true })
  cy.wait(2000)
  pricingEnginePage.getSubmitBtn().dblclick({ force: true })
  cy.wait(2000)
  // pricingEnginePage.getCommissionHeader().should('contain', this.data05.comsuccess)
})



Then('Approve the created service charge commission O2C', function () {
  cy.wait(2000)
  if (Cypress.env('PricingEngineApproval').includes("Yes")) {
    cy.intercept('/shulka/referenceData*').as('PricingEngine')
    pricingEnginePage.getApproval().click()
    cy.wait('@PricingEngine', { timeout: 40000 })
    pricingEnginePage.getCommissionRule().contains('Commission Policy').click()
    pricingEnginePage.getApprovalCashIn().contains('Cash In').click()

    cy.readFile(fileis).then((data) => {
      var ruleName = data.CommissionRuleName4
      pricingEnginePage.getApprovalRuleName().contains(ruleName).click()
    })
    pricingEnginePage.getApprovalBtn().click()
    pricingEnginePage.getApprovalBtn().eq(0).click()
    pricingEnginePage.getApprovalSubmitBtn().click()
    pricingEnginePage.getApprovalConfirmBtn().click()
    cy.wait(2000)
    pricingEnginePage.getApprovalsuccessText().should('contain.text', 'Approved changes successfully')
  }
  else {
    cy.log("Approved")
  }
})




Then('Assert the Succes Message of pricing engine Draft', function () {
  cy.waitUntil(() => {
    return cy.iframe().find('[class="alert alert-success"]').contains(this.data05.SavedDraft)
  })
})