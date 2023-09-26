/// <reference types="Cypress" />
/// <reference types = "Cypress-iframe"/>

//----------------Imports---------------------------------------------------------------------
import { And, Given, Then, When } from "@badeball/cypress-cucumber-preprocessor";
import 'cypress-iframe';
import manageUsers from '../../../../../../../../support/pageObjects/UserManagement/manageUsers';
import "../../../../../../../../support/Utils/ChurnCommands";
import "../../../../../../../../support/Utils/comissioncommands";
import "../../../../../../../../support/Utils/generic";
import "../../../../../../../../support/Utils/subscriberCommands";
import PricingEnginePage from "../../../../../../../../support/pageObjects/PricingEngine/PricingEnginePage"
import CashInCashOut from "../../../../../../../../support/pageObjects/CashInCashOut/CashInCashOut";"../../../../../../../../support/pageObjects/CashInCashOut/CashInCashOut"
//----------------Object Declaration-----------------------------------------------------------

const manageUsersPage = new manageUsers()
const pricingEnginePage = new PricingEnginePage()
const cashin=new CashInCashOut()
const uuid = () => Cypress._.random(1e2)
Amount = uuid()
let businesslogin="cypress/fixtures/userData/BusinessUsersData.json"
let businessloginO2C = "cypress/fixtures/userData/BusinessUsersDataO2C.json"
var CashFile = 'cypress/fixtures/userData/cashIn&cashout.json'
var subRegistration = 'cypress/fixtures/userData/subscriberReg.json'
var fileis = 'cypress/fixtures/userData/Aservice.json'
var name, da, numberone, number, v, Tpercentage, TFixed, Cpercentage, CFixed
function getRandomName() {
  name = "";
  var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
  for (var i = 0; i < 7; i++)
    name += possible.charAt(Math.floor(Math.random() * possible.length));
  return name;
}
function getRandomNumberforDiscountRule() {
 
  name = parseInt("0");
  var possible = "12345";
  for (var i = 0; i < 1; i++)
    name += possible.charAt(Math.floor(Math.random() * possible.length));
  return name  
}
function getRandomNumber() {
  name = "77";
  var possible = "0123456789";
  for (var i = 0; i < 3; i++)
    name += possible.charAt(Math.floor(Math.random() * possible.length));
  return name;
}

function getRandomNumberforTaxationRuleFixed() {
  name = "1";
  var possible = "123";
  for (var i = 0; i < 1; i++)
    name += possible.charAt(Math.floor(Math.random() * possible.length));
  return name;
}

//-----------------------------------------Arpitha
And('Click On Discount Rule', function () {

  cy.intercept('/shulka/referenceData*').as('PricingEngine')
  pricingEnginePage.getDiscountRule().click()
  cy.wait('@PricingEngine', {timeout:30000})
 
})


And('Click on any service to add discount rule', function () {
  
  number = "0.5"
  numberone = "0.8"
  da=parseInt(getRandomNumberforDiscountRule())
  cy.wait(2000)
  pricingEnginePage.getDiscountAddNewRuleBtn().click()
  var nameone = getRandomName()
  pricingEnginePage.getRuleName().type(nameone, { force: true })
  cy.readFile(fileis).then((data) => {
    data.ServiceChargeDiscountRuleName = nameone
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
  pricingEnginePage.getDiscountGivenTo().select("Sender")
  pricingEnginePage.getDiscountFixedAmount().type(da)
  cy.readFile(fileis).then((data) => {
    data.DiscountAmount = da
    cy.writeFile(fileis, data)

  })
  pricingEnginePage.getSaveDraftBtn().trigger('mouseover').click({ force: true })
  //cy.intercept(this.data20.SubmitPolicy).as('getSubmitPolicy')
  pricingEnginePage.getSubmitPolicy().click({ force: true })
  cy.wait(2000)
 cy.intercept('/shulka/serviceChargePolicy').as('getSubmit')
  pricingEnginePage.getSubmitBtn().click({ force: true })
  cy.wait('@getSubmit', {timeout:60000})
 // pricingEnginePage.getServiceHeader().should('contain', this.data05.textmsg)
})


And('Click On Taxation rule', function () {
  cy.intercept('/shulka/referenceData*').as('PricingEngine')
  pricingEnginePage.getTaxationRule().click()
  cy.wait('@PricingEngine', {timeout:30000})
})


And('Click on any service to add Taxation rule', function () {
  var number = "0.5"
  var numberone = "0.8"
  Tpercentage=parseInt(getRandomNumberforDiscountRule())
  TFixed=parseInt(getRandomNumberforTaxationRuleFixed())
  cy.wait(2000)
  pricingEnginePage.getTaxAddNewRuleBtn().click()
  var nameone = getRandomName()
  pricingEnginePage.getRuleName().type(nameone, { force: true })
  cy.readFile(fileis).then((data) => {
    data.ServicechargeTaxationule = nameone
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
  pricingEnginePage.getPricingPercntage().type(Tpercentage)
  cy.readFile(fileis).then((data) => {
    data.ServiceChargeTaxationPercentage = Tpercentage
    cy.writeFile(fileis, data)

  })
  pricingEnginePage.getPricingFixedAmt().type(TFixed)
  cy.readFile(fileis).then((data) => {
    data.ServiceChargeTaxationFixed = TFixed
    cy.writeFile(fileis, data)

  })
   cy.wait(2000)
  pricingEnginePage.getSaveDraftBtn().trigger('mouseover').click({ force: true })
   cy.wait(1000)
  //cy.intercept(this.data20.SubmitPolicy).as('getSubmitPolicy')
  pricingEnginePage.getSubmitPolicy().click({ force: true })
  cy.wait(2000)
 cy.intercept('/shulka/serviceChargePolicy').as('getSubmit')
  pricingEnginePage.getSubmitBtn().click({ force: true })

  cy.wait('@getSubmit', {timeout:60000})
  //pricingEnginePage.getServiceHeader().should('contain', this.data05.textmsg)
})


And('Click on commission and select the service you want to add commission profile for for taxation rule', function () {
  var number = "0.5"
  var numberone = "0.8"
  
  var nameone = getRandomName()
  Cpercentage=parseInt(getRandomNumberforDiscountRule())
  CFixed=parseInt(getRandomNumberforTaxationRuleFixed())
  pricingEnginePage.getCashIN().click()
  cy.wait(2000)
  pricingEnginePage.getCommissionTaxationRule().click()
  pricingEnginePage.getselectcurrency().select('USD')
  pricingEnginePage.getselectproceed().click({force:true})
  cy.wait(2000)
  pricingEnginePage.getAddCommissionNewRuleBtn().click()
  

  pricingEnginePage.getRuleName().type(nameone, { force: true })
  cy.readFile(fileis).then((data) => {
    data.CommissionTaxationRule = nameone
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
  pricingEnginePage.getPricingPercntage().type(Cpercentage)
  cy.readFile(fileis).then((data) => {
    data.CommissionTaxationPercentage = Cpercentage
    cy.writeFile(fileis, data)

  })
  pricingEnginePage.getPricingFixedAmt().type(CFixed)
  cy.readFile(fileis).then((data) => {
    data.CommissionTaxationFixed = CFixed
    cy.writeFile(fileis, data)

  })
  pricingEnginePage.getSaveDraftBtn().trigger('mouseover').click({ force: true })
   cy.wait(1000)
  pricingEnginePage.getSubmitPolicy().click({ force: true })
  cy.wait(2000)
 cy.intercept('/shulka/commissionPolicy').as('getSubmit')
  pricingEnginePage.getSubmitBtn().click({ force: true })
  cy.wait('@getSubmit', {timeout:60000})
  //pricingEnginePage.getCommissionHeader().should('contain', this.data05.comsuccess)
})

And ('Enter required details and amount of 10.01', function()
{
  cy.readFile(subRegistration).then((data) => {
      let mobilenumber =data.subscriberMobile
      
   
   cashin.getSubscriberMobileNumberTab().type(mobilenumber)
   
   cashin.getAmountTab().type('10.01')
   
   cashin.getPaymentID().type(getRandomNumber())
   
   cashin.getSubmit().click({force:true})
    cy.wait(2000)
   cashin.getConfirm().click({force:true})
})
})

And ('Cash In request is successful should be displayed along with the transaction id',function()
{
    cy.wait(2000)
     cashin.getSuccessMessage().contains(this.data1.cashinsuccessmessage)
     
     
     cashin.getSuccessMessage().then(($btn) => {
      const txt = $btn.text()
      cy.log(txt)
      let TransactionCashInid=txt.split(':')[1]
      cy.log(TransactionCashInid)
      cy.readFile(businesslogin).then((data) => {
        data.CASHINTRANSACTIONID =TransactionCashInid
        cy.writeFile(businesslogin,data)
      })
    
    })

})


Then ('Verify amount Credited to the user',function()
{
  cy.wait(2000)
  cy.readFile(businesslogin).then((data) => {
   TID= data.CASHINTRANSACTIONID 
  manageUsersPage.getCreditedAmount().eq(1).contains(TID)
  //manageUsersPage. getCreditedAmount().eq(3).contains(this.data05.CashInAmount)
  manageUsersPage. getCreditedAmount().eq(5).contains('Success')
  // "ServiceChargePercentage": "0.5",
  // "ServiceChargeFixed": "0.8",
  // "DiscountAmount": "01",

  cy.ServiceChargeAmount(this.data05.CashInAmount,this.data05.ServiceChargePercentage,this.data05.ServiceChargeFixed,this.data05.DiscountAmount)
  cy.ServiceChargeTax(this.data05.ServiceChargeTaxationPercentage,this.data05.ServiceChargeTaxationFixed)
  cy.CommissionAmount(this.data05.CashInAmount,this.data05.CommissionRulePercentage,this.data05.CommissionRuleFixed)
  cy.CommissionTax(this.data05.CommissionAmount,this.data05.CommissionTaxationPercentage,this.data05.CommissionTaxationFixed)

  cashin.getSelectArrowButton().click()
  cashin.getClickOnViewDetailButton().click()
  cashin.getClickOnViewDetailButton().eq(1).contains(this.data05. CommissionTaxFC)
  cashin.getClickOnViewDetailButton().eq(2).contains(this.data05.CommissionAmountFC)

 


  })
})

And('Enter Mobile number of merchant and KYC number in search menu', function () {
 
    cy.readFile(businesslogin).then((data) => {
      let loginID = data.MerchantLoginID
      cy.wait(2000)
    manageUsersPage.getSearchUser().type(loginID)
  })
  cy.wait(2000)
  manageUsersPage.getSearchUserButton().click({ force: true })
})

And('Enter Mobile number of Distributer and KYC number in search menu', function () {
 
  cy.readFile(businessloginO2C).then((data) => {
    let loginID = data.registeredMobileO2C
    cy.wait(2000)
  manageUsersPage.getSearchUser().type(loginID)
})
cy.wait(2000)
manageUsersPage.getSearchUserButton().click({ force: true })
})

//----------------------------------------------------------------------------------

And ('Try to perform cash in when service charge is Inactive', function()
  {
    cy.readFile(subRegistration).then((data) => {
        let mobilenumber =data.subscriberMobile
        
     cy.wait(2000)
     cashin.getSubscriberMobileNumberTab().type(mobilenumber)
     
     cashin.getAmountTab().type('12')
     
     cashin.getPaymentID().type(getRandomNumber())
     
     cashin.getSubmit().click({force:true})
     cy.wait(2000)
     cashin.getConfirm().click({force:true})
  })
})


Then ('Verify amount Credited to the user for cashout transaction',function()
{
  cy.wait(3000)
  cy.readFile(businesslogin).then((data) => {
   TID= data.CASHOUTTRANSACTIONID
  manageUsersPage.getCreditedAmount().eq(1).contains(TID)
  //manageUsersPage. getCreditedAmount().eq(3).contains('10')
//   manageUsersPage. getCreditedAmount().eq(3).contains('Success')
  })
})


  And ('Enter required details for cashin transaction', function()
{
  var CInAmount=getRandomNumberforTaxationRuleFixed()
  cy.readFile(subRegistration).then((data) => {
      let mobilenumber =data.subscriberMobile
      
   
   cashin.getSubscriberMobileNumberTab().type(mobilenumber)
   
   cashin.getAmountTab().type(parseInt(CInAmount))
      cy.readFile(fileis).then((data) => {
    data.CashInAmount = CInAmount
    cy.writeFile(fileis, data)

  })

   
   cashin.getPaymentID().type(parseInt(getRandomNumber()))
   
   
   cashin.getSubmit().click({force:true})
   cy.wait(2000)
   cashin.getConfirm().click({force:true})
})
})

And('Click on the TransactionTax', function(){

  pricingEnginePage.getTransactionTax().click()
cy.wait(2000)
 pricingEnginePage.getCashIN().click()
  cy.wait(2000)
})



And('Click on any service to add service charge for transaction tax', function () {
  var number = "0.5"
  var numberone = "0.8"
  
 var Trtaxpercentage=parseInt(getRandomNumberforDiscountRule())
 var TrtaxFixed=parseInt(getRandomNumberforTaxationRuleFixed())
 cy.wait(2000)
  pricingEnginePage.getAddNewRuleBtn().click()
 
  var nameone = getRandomName()
  pricingEnginePage.getRuleName().type(nameone, { force: true })
  cy.readFile(fileis).then((data) => {
    data.TransactionTaxRule = nameone
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
  pricingEnginePage.getPricingPercntage().type(Trtaxpercentage)
  cy.readFile(fileis).then((data) => {
    data.TransactionTaxPercentage = Trtaxpercentage
    cy.writeFile(fileis, data)

  })
  pricingEnginePage.getPricingFixedAmt().type(TrtaxFixed)
  cy.readFile(fileis).then((data) => {
    data.TransactionTaxFixed = TrtaxFixed
    cy.writeFile(fileis, data)

  })
  pricingEnginePage.getSaveDraftBtn().trigger('mouseover').click({ force: true })
  //cy.intercept(this.data20.SubmitPolicy).as('getSubmitPolicy')
  pricingEnginePage.getSubmitPolicy().click({ force: true })
  cy.wait(2000)
 cy.intercept('/shulka/taxPolicy').as('getSubmit')
  pricingEnginePage.getSubmitBtn().click({ force: true })
  cy.wait('@getSubmit', {timeout:60000})
  //cy.wait('@getSubmit', { timeout: 30000 })
  //pricingEnginePage.getServiceHeader().should('contain', this.data05.taxmsg)
})


Then ('Verify amount Credited to the user for cashin transaction',function()
{
  cy.wait(3000)
  cy.readFile(businesslogin).then((data) => {
   TID= data.CASHINTRANSACTIONID 
  manageUsersPage.getCreditedAmount().eq(1).contains(TID)
  manageUsersPage. getCreditedAmount().eq(5).contains('Success')
  })
})