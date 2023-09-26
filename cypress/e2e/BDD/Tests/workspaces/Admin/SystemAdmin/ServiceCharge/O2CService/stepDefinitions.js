/// <reference types="Cypress" />
/// <reference types = "Cypress-iframe"/>

//----------------Imports---------------------------------------------------------------------

import 'cypress-iframe'
import { Given, When, Then, And,Before} from "@badeball/cypress-cucumber-preprocessor";
import homePage from '../../../../../../../../support/pageObjects/homePage';
import "../../../../../../../../support/Utils/generic";
import { readConfigFile } from 'typescript';

import ServiceCharge from '../../../../../../../../support/pageObjects/ServiceCharge/ServiceChargePage'
//----------------Object Declaration----------------------------------------------------------

const welcomePage = new homePage()
//const pricingEnginePage = new PricingEnginePage()
const ServiceChargePage = new ServiceCharge()
var fileis = 'cypress/fixtures/userData/Aservice.json'
const uuuid = () => Cypress._.random(1e3)
var name

var profilename='cypress/fixtures/userData/Servicecharge.json'

function getRandomName() {
  name = "";
  var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
  for (var i = 0; i < 5; i++)
    name += possible.charAt(Math.floor(Math.random() * possible.length));
  return name;
}

//--------------------------------------------------------------------------------------------------------


And('Enter required fields for Adding O2C ServiceCharge', function() {
  var name= getRandomName()
  ServiceChargePage.getProfileName().type(name)
  cy.readFile('cypress/fixtures/userData/Servicecharge.json').then((data) => {
  data.O2CProfilename =name
  cy.writeFile('cypress/fixtures/userData/Servicecharge.json',data)
   })
 let shortcode=uuuid()
  ServiceChargePage.getshortCode().type(shortcode)
  ServiceChargePage.getSenderwallet().select(this.data28.SenderWalletType ,{ force: true })
  ServiceChargePage.getReceiverwallet().select(this.data28.SenderWalletType1 ,{ force: true })
  ServiceChargePage.getpaymentTypeServicesId().select(this.data28.O2CService ,{ force: true })
})
Then('Click on Next and enter the details for O2C ServiceCharge',function(){
     cy.intercept('/CoreWeb/servprofile/addProfile.action*').as('getNext')
   ServiceChargePage.getNext().click({force:true})
   cy.wait('@getNext',{timeout:30000}) 
    ServiceChargePage.getSenderGrade().select(this.data28.O2CSenderGrade ,{ force: true })
    ServiceChargePage.getReceiverGrade().select(this.data28.O2CReceiverGrade ,{ force: true })
    ServiceChargePage.getMultiples().clear().type('0.5')
    ServiceChargePage.getminservicechargeamount().type('0')
    ServiceChargePage.getmaxservicechargeamount().type('0.5')
    ServiceChargePage.getPayingEntity().select(this.data28.O2CPayingEntity ,{ force: true })
    ServiceChargePage.getCreditEntity().select(this.data28.CreditEntity ,{ force: true })
    ServiceChargePage.getminFixedservicecharge().type('0')
    ServiceChargePage.getmaxFixedservicecharge().type('0.5')
    ServiceChargePage.getToRange().type('0.5')
    cy.intercept('/CoreWeb/servprofile/confirmPopAdd_refreshServiceChargeProfile.action').as('Next')
    ServiceChargePage.getsubmit1().click({force:true})
    cy.wait('@Next')
    ServiceChargePage.getcheckbox3().click()
    ServiceChargePage.getcheckbox4().click()
    ServiceChargePage.getServiceTaxSender1().type('1')
    ServiceChargePage.getServiceTaxReceiver1().type('1')

    ServiceChargePage.getcheckbox1().click()
    ServiceChargePage.getcheckbox2().click()
    ServiceChargePage.getServiceTaxSender().type('1')
    ServiceChargePage.getServiceTaxReceiver().type('1')
    cy.intercept('/CoreWeb/servprofile/confirmPopAdd_addTaxDetails.action').as('getADD')
    ServiceChargePage.getAdd().click({force:true})
    cy.wait('@getADD')
    cy.intercept('/CoreWeb/servprofile/confirmadd_confirmAdd.action').as('getSave')
    ServiceChargePage.getsubmit1().click({force:true})
    cy.wait('@getSave')
     cy.intercept('/CoreWeb/servprofile/confirmadd_save.action').as('getConfirm')
    ServiceChargePage.getsubmit2().click({force:true})
    cy.wait('@getConfirm')

})

Then('Click on O2CServiceCharge Approve' , function (){
cy.getO2CServicechargeapproval(profilename)
cy.wait(2000)
cy.intercept('/CoreWeb/servprofile/profileApp_saveApproval.action').as('getSubmit')
ServiceChargePage.getsubmit2().click({force:true})
cy.wait('@getSubmit')
// ServiceChargePage.getSuccessMessage().eq(1).contains(this.data28.Successmsg)        
ServiceChargePage.getSuccessMessage().contains('successfully') 
})
