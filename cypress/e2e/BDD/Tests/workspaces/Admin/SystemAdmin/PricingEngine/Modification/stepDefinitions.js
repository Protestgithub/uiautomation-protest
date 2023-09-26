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
//---------------------------------TestScripts------------------------------------------------------





//----------------------------------Modify Commission----------------------------

Then('Search for the Service and modify' , function (){
    cy.wait(2000)
  var number = "0.2"
  var numberone="0.4"
 pricingEnginePage.getSearchTab().click({ force: true })
  cy.readFile(fileis).then((data)=>{
    var CommName = data.CommissionRuleName // changed the reference variable to correct one 
    pricingEnginePage.getSearchTextField().type(CommName)
    pricingEnginePage.getSearchButton2().click()
    pricingEnginePage.getSearchedRule().click({ force: true })
    cy.wait(2000)               //Added static wait since it is taking time to search 
    pricingEnginePage.getPricingPercntage().type('{selectall}{backspace}')
    pricingEnginePage.getPricingPercntage().type(number)
    cy.wait(2000)               //Added static wait 
     pricingEnginePage.getPricingFixedAmt().type('{selectall}{backspace}')
     pricingEnginePage.getPricingFixedAmt().type(numberone)
})
})

And('Click on commission and Select the rule', function () {
  //cy.wait(3000)
  cy.intercept('/shulka/commissionPolicy').as('commision')
  pricingEnginePage.getCommissionTab().dblclick({ force: true })
  cy.wait('@commision' ,{timeout:40000})
  cy.intercept('/shulka/referenceData*').as('PricingEngine')
  pricingEnginePage.getCashIN().click()
  cy.wait('@PricingEngine',{timeout:40000})
})


//---------------Niroop

And('Click on same service to create another rule in same data.', function () {
  //var numberone="8" + uuidone()
  pricingEnginePage.getAddNewRuleBtn().click()
  cy.readFile(fileis).then((data)=>{
    let RuleName = data.ServiceRuleName
    data.ServiceRuleSameName = RuleName
  pricingEnginePage.getRuleName().type(RuleName, { force: true })
  cy.writeFile(fileis,data)
  })
  
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
  cy.wait(3000)
  pricingEnginePage.getSubmitPolicy().click({force:true})
  
  pricingEnginePage.getSubmitBtn().click({force:true})
  cy.wait(3000)
  // pricingEnginePage.getServiceHeader().should('have.text', this.data05.textmsg)
})
And('Click on reject policy',function(){
  cy.wait(3000)
  pricingEnginePage.getRejectedPolicy().click()
})

//--------------------------------------------------------------

var pricingRule = 'cypress/fixtures/PricingEngine.json'

//--------------------------transaction tax ----------------------

And('Click on the Transaction Tax', function () {
  pricingEnginePage.getTransactionTax().click({force:true})
  cy.intercept('/shulka/referenceData*').as('PricingEngine')
  pricingEnginePage.getCashOut().click({ force: true }) //getCashIN  //getCashOut
  cy.wait('@PricingEngine')
})

And('Click on any service to add service charge1', function () {
  const uuid = () => Cypress._.random(1e2)
  var number = "3" + uuid()
  const uuidone = () => Cypress._.random(1e3)
  var numberone="8" + uuidone()
  cy.wait(4000) //Added wait here on 17/07/23
  pricingEnginePage.getAddNewRuleBtn().click()
  var nameone=getRandomName()
  pricingEnginePage.getRuleName().type(nameone, { force: true })
  cy.readFile(fileis).then((data)=>{
    data.ServiceRuleName2 = nameone
    cy.writeFile(fileis,data)
  })
  pricingEnginePage.getMinCharge().type(number)
  pricingEnginePage.getMaxCharge().type(numberone)
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
  pricingEnginePage.getPricingPercntage().type(number)
  pricingEnginePage.getPricingFixedAmt().type(numberone)
  
  pricingEnginePage.getSaveDraftBtn().trigger('mouseover').click({ force: true })
  cy.wait(3000)
  pricingEnginePage.getSubmitPolicy().click({force:true})
  
  pricingEnginePage.getSubmitBtn().click({force:true})
  cy.wait(3000)
  pricingEnginePage.getServiceHeader().contains(this.data05.taxmsg) // changed the assertion variable name and replace should with contains
})


And('Check is any rule there if not create one',function(){
  cy.wait(3000)
pricingEnginePage.getVersion().should('be.visible')
pricingEnginePage.getVersion().invoke('text').then((ver)=>{
    let Version = ver.split(':')[1]
    //let count = Version.split
    cy.readFile(pricingRule).then((data)=>{
      data.versionCount = Version
      cy.writeFile(pricingRule,data)
    })
    
})
})

And('Make the rule Active or Inactive', function(){

  cy.readFile(pricingRule).then((data)=>{
    let Version = data.versionCount
    cy.log(Version)
    if(Version <= 1){
      pricingEnginePage.getActiveOrInactive().click({force:true})
    }else{
      pricingEnginePage.getActiveOrInactive1().click({force:true})
    }

  })
})

//---------------------
Then('Aprove the created service charge with Same name', function () {
  if(Cypress.env('PricingEngineApproval').includes("Yes")){
  cy.intercept('/shulka/referenceData*').as('PricingEngine')
  pricingEnginePage.getApproval().click()
  cy.wait('@PricingEngine')
  cy.wait(3000)
  pricingEnginePage.getServiceRule().contains('Service Charge Policy').click()
  pricingEnginePage.getApprovalCashIn().contains('Cash In').click()
  
  cy.readFile(fileis).then((data) => {
    var ruleName = data.ServiceRuleSameName
    pricingEnginePage.getApprovalRuleName().contains(ruleName).click()
  })
  pricingEnginePage.getApprovalBtn().click()
  pricingEnginePage.getApprovalBtn().eq(0).click()
  cy.wait(3000)
  pricingEnginePage.getApprovalSubmitBtn().click()
  pricingEnginePage.getApprovalConfirmBtn().click()
  cy.wait(3000)
  pricingEnginePage.getApprovalsuccessText().should('contain.text', 'Approved changes successfully')
  }
  else{
    cy.log("Approved")
  }
})
