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
var name, profileName

var profilename='cypress/fixtures/userData/Servicecharge.json'

function getRandomName() {
  name = "";
  var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
  for (var i = 0; i < 5; i++)
    name += possible.charAt(Math.floor(Math.random() * possible.length));
  return name;
}

//--------------------------------------------------------------------------------------------------------

When('Click on Service Charge', function () {
    welcomePage.getServiceCharge().click({ force: true })
    cy.intercept('/CoreWeb/servprofile/confirmAdd_inputAddDetails.action').as('Addservice')
    welcomePage.getAddServiceCharge().click({force:true})
    cy.wait(5000)
    
    //cy.wait('@Addservice')
  })

And('Enter required fields for Adding ServiceCharge', function() {
//
cy.waitUntil(() => {     
  return cy.iframe().find('#profileName')
})
profileName = getRandomName()

  ServiceChargePage.getProfileName().type(profileName)
  cy.writeFile('cypress/fixtures/userData/Servicecharge.json',{profilename:profileName} )
  const uuidone = () => Cypress._.random(1e3)
  var st= getRandomName()+uuidone()
  ServiceChargePage.getshortCode().type(st)
 // 
  ServiceChargePage.getpaymentTypeServicesId().select(this.data28.Service ,{ force: true })
})
Then('Click on Next for ServiceCharge',function(){
  cy.intercept('/CoreWeb/servprofile/addProfile.action*').as('getNext')
  ServiceChargePage.getNext().click({force:true})
 cy.wait('@getNext',{timeout:30000})
 cy.wait(2000)
 if(Cypress.env('subscriberNamedAs').includes('Subscriber')){
  ServiceChargePage.getSenderGrade().select(this.data28.SenderGrade ,{ force: true })
 }
 else{
  ServiceChargePage.getSenderGrade().select(this.data28.SenderGrade1 ,{ force: true })
 }
  ServiceChargePage.getReceiverGrade().select(this.data28.ReceiverGrade ,{ force: true })
  ServiceChargePage.getMultiples().clear().type('0.5')
  ServiceChargePage.getminservicechargeamount().type('0')
  ServiceChargePage.getmaxservicechargeamount().type('0.5')
  if(Cypress.env('subscriberNamedAs').includes('Subscriber')){
  ServiceChargePage.getPayingEntity().select(this.data28.PayingEntity ,{ force: true })
  }
  else{
    ServiceChargePage.getPayingEntity().select(this.data28.PayingEntity1 ,{ force: true })
  }
  ServiceChargePage.getCreditEntity().select(this.data28.CreditEntity ,{ force: true })
  ServiceChargePage.getminFixedservicecharge().type('0')
  ServiceChargePage.getmaxFixedservicecharge().type('0.5')
  ServiceChargePage.getToRange().type('0.5')
  cy.intercept('/CoreWeb/servprofile/confirmPopAdd_refreshServiceChargeProfile.action').as('Clicksubmit')
  ServiceChargePage.getsubmit1().click({force:true})
  cy.wait('@Clicksubmit')
  ServiceChargePage.getcheckbox1().click()
  ServiceChargePage.getcheckbox2().click()
  ServiceChargePage.getServiceTaxSender().type('1')
  ServiceChargePage.getServiceTaxReceiver().type('1')
  cy.intercept('/CoreWeb/servprofile/confirmPopAdd_addTaxDetails.action').as('getAdd')
  ServiceChargePage.getAdd().click({force:true})
  cy.wait('@getAdd')
  cy.intercept('/CoreWeb/servprofile/confirmadd_confirmAdd.action').as('getSubmit')
  ServiceChargePage.getsubmit1().click({force:true})
  cy.wait('@getSubmit')
  cy.intercept('/CoreWeb/servprofile/confirmadd_save.action').as('getConfirm')
  ServiceChargePage.getsubmit2().click({force:true})
  cy.wait('@getConfirm')
  ServiceChargePage.getSuccessMessage().contains('successfully ')
})

When('Click on Service Charge approval', function () {
cy.intercept('/CoreWeb/servprofile/*').as('getServiceapproval')
  welcomePage.getServiceChargeApproval().click({ force: true })
  cy.wait('@getServiceapproval')
  cy.wait(2000)
 // cy.intercept('/CoreWeb/servprofile/confirm_loadDetail.action').as('getApprove')
//  ServiceChargePage.getapprove().click({force:true})
 // cy.wait('@getApprove')
 cy.get('.fd-page.iframeContainer.svelte-1v5e28n > iframe').then(($iframe) => {
  const $body = $iframe.contents().find('body')
  const $win = $iframe[0].contentWindow
   cy.stub($win, 'alert', () => true).as('windowConfirm')
   cy.stub($win.console, 'log').as('consoleLog')
   cy.wrap($body).find('a[href*="javascript:deleteConfirm"]').eq(0).click().should(function () {
           //  expect(this.windowConfirm).to.be.calledWith("You must enter a value in MSISDN")
         })
       })
       cy.wait(2000)
  cy.intercept('/CoreWeb/servprofile/profileApp_saveApproval.action').as('getSubmit')
  ServiceChargePage.getsubmit2().click({force:true})
  cy.wait('@getSubmit')
   cy.wait(2000)
  ServiceChargePage.getSuccessMessage().contains('successfully')
  //
})

//------------------------------new servicecharge-----------------------------------
And('Enter all the required fields for Adding ServiceCharge', function() {
  // 
  // cy.waitUntil(() => {
  //   return cy.iframe().find('[for="profileName"]').should('be.visible')
  // })
 var name= getRandomName()
  ServiceChargePage.getProfileName().type(name)
  // cy.readFile('cypress/fixtures/userData/Servicecharge.json').then((data) => {
  // data.Profilename =name
  cy.writeFile('cypress/fixtures/userData/Servicecharge.json',{profilename:name})
  // })
 let shortcode=uuuid()
  ServiceChargePage.getshortCode().type(shortcode)
  ServiceChargePage.getSenderwallet().select(this.data28.SenderWalletType ,{ force: true })

  cy.get('.fd-page.iframeContainer.svelte-1v5e28n > iframe').then(($iframe) => {
    const $body = $iframe.contents().find('body')
    const $win = $iframe[0].contentWindow
     cy.stub($win, 'confirm', () => true).as('windowConfirm')
     cy.stub($win.console, 'log').as('consoleLog')
     cy.wrap($body).find('#receiverLinkedBanksOrWalletTypesId').select(this.data28.SenderWalletType1 ,{ force: true }).should(function () {
             //  expect(this.windowConfirm).to.be.calledWith("You must enter a value in MSISDN")
           })
         })
  
//ServiceChargePage.getReceiverwallet().select(this.data28.SenderWalletType1 ,{ force: true })
  ServiceChargePage.getpaymentTypeServicesId().select(this.data28.Service1 ,{ force: true })
  })

  Then('Click on Next and enter the details',function(){
    cy.intercept('/CoreWeb/servprofile/addProfile.action*').as('getNext')
    ServiceChargePage.getNext().click({force:true})
    cy.wait('@getNext')
    // cy.waitUntil(() => {
    //    return cy.iframe().find('[for="payerProfileGradeId"]').should('be.visible')
    //   })
    cy.wait(2000)
    if(Cypress.env('subscriberNamedAs').includes('Subscriber')){
    ServiceChargePage.getSenderGrade().select(this.data28.SenderGrade ,{ force: true })
    }
    else{
      ServiceChargePage.getSenderGrade().select(this.data28.SenderGrade1 ,{ force: true }) 
    }
    ServiceChargePage.getReceiverGrade().select(this.data28.ReceiverGrade ,{ force: true })
    ServiceChargePage.getMultiples().clear().type('0.5')
    ServiceChargePage.getminservicechargeamount().type('0')
    ServiceChargePage.getmaxservicechargeamount().type('0.5')
    if(Cypress.env('subscriberNamedAs').includes('Subscriber')){
    ServiceChargePage.getPayingEntity().select(this.data28.PayingEntity ,{ force: true })
    }
    else{
      ServiceChargePage.getPayingEntity().select(this.data28.PayingEntity1 ,{ force: true }) 
    }
    ServiceChargePage.getCreditEntity().select(this.data28.CreditEntity ,{ force: true })
    ServiceChargePage.getminFixedservicecharge().type('0')
    ServiceChargePage.getmaxFixedservicecharge().type('0.5')
    ServiceChargePage.getToRange().type('0.5')
    // ServiceChargePage.getserviceperlist().clear().type()
    // ServiceChargePage.getservicefixlist().clear().type()
    // ServiceChargePage.getToRange1().clear().type()
    cy.intercept('/CoreWeb/servprofile/confirmPopAdd_refreshServiceChargeProfile.action').as('Next')
    ServiceChargePage.getsubmit1().click({force:true})
    cy.wait('@Next',{timeout:30000})
    cy.wait(2000)
    ServiceChargePage.getcheckbox3().click()
    ServiceChargePage.getcheckbox4().click()
    ServiceChargePage.getServiceTaxSender1().type('1')
    ServiceChargePage.getServiceTaxReceiver1().type('1')

    ServiceChargePage.getcheckbox1().click()
    ServiceChargePage.getcheckbox2().click()
    ServiceChargePage.getServiceTaxSender().type('1')
    ServiceChargePage.getServiceTaxReceiver().type('1')
    //
    cy.intercept('/CoreWeb/servprofile/confirmPopAdd_addTaxDetails.action').as('getADD')
    ServiceChargePage.getAdd().click({force:true})
    cy.wait('@getADD')
    cy.intercept('/CoreWeb/servprofile/confirmadd_confirmAdd.action').as('getSave')
    ServiceChargePage.getsubmit1().click({force:true})
    cy.wait('@getSave')
    cy.intercept('/CoreWeb/servprofile/confirmadd_save.action').as('getConfirm')
     cy.wait(2000)
    ServiceChargePage.getsubmit2().click({force:true})
    cy.wait('@getConfirm')
    // 

    // cy.waitUntil(() => {
    //     return cy.iframe().find('.actionMessage').should('be.visible')
    //      })
  })

  And ('Verify the Sucess message' ,function(){
    
    ServiceChargePage.getSuccessMessage().contains('successfully')
  })

//---------Approval


When ('Navigate to service charge Approval', function(){
welcomePage.getServiceCharge().click({ force: true })
cy.intercept('/CoreWeb/servprofile/profileApp_inputViewApprovalDetails.action').as('getApprove')
welcomePage.getServiceChargeApproval().click({force:true})
cy.wait('@getApprove')
 cy.wait(2000)
})

Then ('click on Approve' , function (){
cy.getServicechargeapproval(profilename)
cy.wait(2000)
cy.intercept('/CoreWeb/servprofile/profileApp_saveApproval.action').as('getSubmit')
ServiceChargePage.getsubmit2().click({force:true})
cy.wait('@getSubmit')
ServiceChargePage.getSuccessMessage().contains('successfully')
})

When ('Navigate to Modify or Delete service charge', function(){
  welcomePage.getServiceCharge().click({ force: true })

  cy.intercept('/CoreWeb/servprofile/confirmModify_inputModifyDetails.action').as('getModify/Delete')
  welcomePage.getServiceChargeModify().click({force:true})
  cy.wait('@getModify/Delete')
   cy.wait(2000)
})


// And ('Select the Service Charge Profile and Click on Delete', function() {
//   cy.readFile('cypress/fixtures/userData/Servicecharge.json').then((data) => {
//     let profileselect = data.profileselection
//     cy.log(profileselect)
// ServiceChargePage.getSelect().select(1)

// ServiceChargePage.getDeleteoption()
//   })
// })


Then ('click on Approve to Modify' , function (){
  welcomePage.getServiceCharge().click({ force: true })
  cy.intercept('/CoreWeb/servprofile/profileApp_inputViewApprovalDetails.action').as('getApprove')
  welcomePage.getServiceChargeapproval().click({force:true})
  cy.wait('@getApprove')
  cy.getServicechargeapproval(profilename)
  cy.wait(2000)
  ServiceChargePage.getsubmit2().click({force:true})
  //ServiceChargePage.getSuccessMessage().contains(this.data28.Successmsg)
  })


//--------------------------------------------------------------------------------
And ('Select the Service Charge Profile', function(){

  cy.readFile('cypress/fixtures/userData/Servicecharge.json').then((data) => {
  let V = data.profilename
  cy.iframe().find('select option').contains(V).invoke('text').then((text)=>{
   cy.log(text)
  
 data.profileselection =text
 
  cy.writeFile('cypress/fixtures/userData/Servicecharge.json', data)
  ServiceChargePage.getSelect().select(text)
  })
 })
 cy.intercept('/CoreWeb/servprofile/confirm_loadDetail.action').as('Update')
 ServiceChargePage.getUpdate().click()
 cy.wait('@Update')
 let shortcode=uuuid()
 ServiceChargePage.getmodifycode().type(shortcode)
 cy.intercept('/CoreWeb/servprofile/confirmModify_confirmModify.action').as('save')
 ServiceChargePage.getSavebtn().click({ force:true })
 cy.wait('@save')
  cy.wait(2000)
 ServiceChargePage.getConfirmbtn().click({ force:true })
})