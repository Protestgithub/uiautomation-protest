/// <reference types="Cypress" />
/// <reference types = "Cypress-iframe"/>

//----------------Imports---------------------------------------------------------------------

import 'cypress-iframe'
import { Given, When, Then, And,Before} from "@badeball/cypress-cucumber-preprocessor";
import homePage from '../../../../../../../../support/pageObjects/homePage';
import "../../../../../../../../support/Utils/PricingEngine";
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
//=======22-06-23 Test=======================================================================


When('Navigate to suspended or resume service charge' ,function() {
    welcomePage.getServiceCharge().click({ force: true })
    cy.intercept('/CoreWeb/servprofile/suspend_inputLoadServiceChargeProfileForSuspendResume.action').as('Suspend')
    welcomePage.getSuspendServicecharge().click({ force: true })
    cy.wait('@Suspend')
  })
  
  And('Click on Save Button' , function (){ 
  cy.intercept('/CoreWeb/servprofile/suspend_listView.action').as('SuspendSave')
  ServiceChargePage.getSuspendSavebtn().click({ force:true })
  cy.wait('@SuspendSave')
  cy.intercept('/CoreWeb/servprofile/suspend_inputLoadServiceChargeProfileForSuspendResume.action').as('Suspendconfirm')
  ServiceChargePage.getSuspendConfirmbtn().click({ force:true })
  cy.wait('@Suspendconfirm')
  })
  
  
  Then('Assert the Success message' , function() {
  ServiceChargePage.getSuccessMessage().contains(this.data28.SuspendSuccess)
  
  })
  
  //-----------------------------------------------------------------------------------------------
  And('Enter all the fields', function() {
  ServiceChargePage.getProfileName().type('Testing')
  ServiceChargePage.getshortCode().type('serfd') 
  
  ServiceChargePage.getDatePicker().click({ force: true }).clear();
  const currentDate = new Date();
  const yesterday = new Date(currentDate);
  yesterday.setDate(currentDate.getDate() - 1);
  const year = yesterday.getFullYear();
  const month = yesterday.getMonth();
  const day = yesterday.getDate();
  const formattedDate = `${day}/${month}/${year}`;
  ServiceChargePage.getDatePicker().type(formattedDate);
  
  ServiceChargePage.getpaymentTypeServicesId().select(this.data28.Service ,{ force: true })
     cy.intercept('/CoreWeb/servprofile/addProfile.action*').as('getNext')
      ServiceChargePage.getNext().click({force:true})
     cy.wait('@getNext',{timeout:30000})
     
    })
  
  Then('Assert the Error message date less than currect date' , function() {
    ServiceChargePage.getErrorMessage().contains(this.data28.DateError)
  })
  
  When('Navigate to New Customer Commission Rule' , function() {
    welcomePage.getServiceCharge().click({ force: true })
    cy.intercept('/CoreWeb/servprofile/addSubsComRule_inputAddSubsCommRule.action').as('Newcommsion')
    welcomePage.getNewcommsionrule().click({ force: true })
    cy.wait('@Newcommsion')
  
  })
  
  Then('Click on Check Box' , function () {
    cy.waitUntil( () => {
      return cy.iframe().find('tr>td[class="tabcenter"]>input[type="checkbox"]').eq(1).should('be.visible').click( {force:true})
         })
  
  })
  

  When('Navigate to View Service Charge' , function() {
    welcomePage.getServiceCharge().click({ force: true })
    cy.intercept('/CoreWeb/servprofile/confirmView_inputViewDetails.action').as('ViewCharge')
    welcomePage.getViewServiceCharge().click({ force: true })
    cy.wait('@ViewCharge')
  
  })
  
  //var NAmeeee='cypress/fixtures/userData/Servicecharge.json'
  
  And('Select the Service and click on Submit' , function() {
    //
    //cy.wait(3000)
    cy.readFile(profilename).then((data) => {
    let ProfName = data.profilename
    ServiceChargePage.getSelectdrop().select(ProfName)
    })
    ServiceChargePage.getLastDay().type(1)
    cy.intercept('/CoreWeb/servprofile/confirmView_loadVersionList.action').as('Submit')
    ServiceChargePage.getsubmit1().click({ force:true })
    cy.wait('@Submit')
  
    cy.intercept('/CoreWeb/servprofile/confirm_loadDetail.action').as('Update')
    ServiceChargePage.getsubmit2().click({ force:true })
    cy.wait('@Update')
  
  })
  
  Then('Assert the privilege Service Charge', function() {
    cy.waitUntil(()=>{
     return cy.iframe().find('#content').should('be.visible')
    })
  
  })
  
  
  And('Resume the Service by Unchecking OR Checking',  function() {
  cy.getservicecharge()
  })


And('Enter the Required details of Service Charge' , function() {
  ServiceChargePage.getProfileName().type('Testing')
  ServiceChargePage.getshortCode().type('serfd') 
  ServiceChargePage.getpaymentTypeServicesId().select(this.data28.Service1 ,{ force: true })
  cy.intercept('/CoreWeb/servprofile/addProfile.action*').as('getNext')
  ServiceChargePage.getNext().click({force:true})
  cy.wait('@getNext', {timeout:30000})
  cy.waitUntil(() => {
  return cy.iframe().find('[for="payerProfileGradeId"]').should('be.visible')
  })
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
  //-----Assert-------------------------------
    cy.waitUntil(() => {
    return cy.iframe().find('td.tabhead').eq(1).should('be.visible', 'Service Charge Configurations')
      })
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
  //-----Assert-------------------------------
  cy.waitUntil(() => {
    return cy.iframe().find('td.tabhead').eq(8).should('be.visible', 'Commission Setup')
    })
  cy.intercept('/CoreWeb/servprofile/confirmPopAdd_refreshServiceChargeProfile.action').as('Next')
  ServiceChargePage.getsubmit1().click({force:true})
  cy.wait('@Next',{timeout:30000})
  //-----Assert-------------------------------
  cy.waitUntil(() => {
   return cy.iframe().find('td.tabhead').eq(0).should('be.visible', 'Add Tax' )
    })
  
})



//--------Hnadling Alert MSG---------------------------------------------------------------------------
And('Click on next button without filling the Mandatory fields' , function () {
  
  ServiceChargePage.getAlertMSG()
  
  })
//----------------------------------------------------------------------------------------

Then('Check with ServiceCharge' , function (){

  cy.get('[title="Service Charge"]').should('not.have', 'Service Charge')
})
//-----------------------------------------------------------------------------------------

Then('Select the Sender and click on Paying Entity',  function () {
  ServiceChargePage.getNext().click({force:true})
  cy.wait(2000)
  ServiceChargePage.getSenderGrade().select(this.data28.SenderGrade1 ,{ force: true }) 

  ServiceChargePage.getPayingEntity().should('contain', 'Select')
  
})



//--------------------------------------------------------------------------------------
When('Navigate to ServiceCharge and click on Modify New Subscriber Commission Rule', function() {
  welcomePage.getServiceCharge().click({ force: true })
  cy.intercept('/CoreWeb/servprofile/subsComRule_inputModifySubsCommssionRule.action').as('ModifiedCommission')
  welcomePage.getModifyNewSubscriberCommissionRule().click({force:true})
  cy.wait('@ModifiedCommission')
  
  })
  
  Then('Click on Update Button and View Button and Assert it', function() {
  cy.intercept('/CoreWeb/servprofile/subsComRule_loadSubsCommDetail.action').as('Update')
   ServiceChargePage.getModifyUpdateButton().click({force:true})
  cy.wait('@Update')
  ServiceChargePage.getErrorMessage().contains('Please Select to Modify')
  cy.intercept('/CoreWeb/servprofile/subsComRule_loadSubsCommDetail.action').as('Update')
  ServiceChargePage.getModifyViewButton().click({force:true})
  cy.wait('@Update')
  ServiceChargePage.getErrorMessage().contains('Please Select to Modify')
  
  })
  