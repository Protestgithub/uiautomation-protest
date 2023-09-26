/// <reference types="Cypress" />
/// <reference types = "Cypress-iframe"/>

//----------------Imports---------------------------------------------------------------------
import { And, Then, When } from "@badeball/cypress-cucumber-preprocessor";
import 'cypress-iframe';
import homePage from '../../../../../../../../support/pageObjects/homePage';
import PricingEnginePage from '../../../../../../../../support/pageObjects/PricingEngine/PricingEnginePage';
import "../../../../../../../../support/Utils/generic";

//----------------Object Declaration----------------------------------------------------------

const welcomePage = new homePage()
const pricingEnginePage = new PricingEnginePage()
var fileis = 'cypress/fixtures/userData/Aservice.json'
var filename = 'cypress/fixtures/userData/Bank&Walletdata.json'


var name
function getRandomName() {
  name = "";
  var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
  for (var i = 0; i < 5; i++)
    name += possible.charAt(Math.floor(Math.random() * possible.length));
  return name;
}



And('Fill all details except mandatory fields', function () {
  cy.wait(5000)
    var number = "0.5"
    var numberone = "0.8"
    pricingEnginePage.getAddNewRuleBtn().click()
    pricingEnginePage.getSaveDraftBtn().trigger('mouseover').click({ force: true })
    //cy.intercept(this.data20.SubmitPolicy).as('getSubmitPolicy')
    pricingEnginePage.getSubmitPolicy().click({ force: true })
    //cy.wait('@getSubmitPolicy', { timeout: 30000 })
    //cy.intercept(this.data20.SubmitBtn).as('getSubmit')
    pricingEnginePage.getSubmitBtn().click({ force: true })
    //cy.wait('@getSubmit', { timeout: 30000 })
    // pricingEnginePage.getServiceHeader().contains(this.data05.textmsg)
  })

  // Then('Assert the error message', function () {
  //   cy.wait(2000)
  //  // pricingEnginePage.getErrorMsgTxt().contains(this.data05.failedmsg)
  // })

  
  Then('assert date error message', function () {
    cy.wait(2000)
    //pricingEnginePage.getDateMsg().contains(this.data05.datemsg)
  })
  Then('verify the confirmation message for discard draft', function () {
    cy.wait(2000)
    //pr/icingEnginePage.getDiscardmsg().contains(this.data05.discardmsg)
  })

And('Select end date before that you have selected in start date', function () {
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
    pricingEnginePage.getCalanderStart().should('be.visible', { force: true })
    Cypress._.times(2, () => {
      pricingEnginePage.getPrevmonth().click()
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
  
  
  And('Click on any service to add service charge to discard draft', function () {
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
    //cy.intercept(this.data20.SubmitPolicy).as('getSubmitPolicy')
    pricingEnginePage.getDiscardDraft().click({ force: true })
    //cy.wait('@getSubmitPolicy', { timeout: 30000 })
    //cy.intercept(this.data20.SubmitBtn).as('getSubmit')
    //cy.wait('@getSubmit', { timeout: 30000 })
    // pricingEnginePage.getServiceHeader().contains(this.data05.textmsg)
  })