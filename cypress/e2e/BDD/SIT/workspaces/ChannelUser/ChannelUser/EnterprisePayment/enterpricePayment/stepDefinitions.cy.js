//-----------------------------------------------------------------------BulkUpload Stepdefinition.cy.js-----------------------------------------------------------
/// <reference types="Cypress" />
/// <reference types = "Cypress-iframe"/>

//----------------Imports---------------------------------------------------------------------
import 'cypress-iframe'
import { Given, When, Then, And, Before } from "@badeball/cypress-cucumber-preprocessor";
import loginPage from '../../../../../../../../support/pageObjects/loginPage';
import homePage from '../../../../../../../../support/pageObjects/homePage';
import manageUsers from '../../../../../../../../support/pageObjects/UserManagement/manageUsers';
import myActivity from '../../../../../../../../support/pageObjects/MyActivity/myActivity';
import "../../../../../../../../support/Utils/generic"
//import "../../../../../../../support/Utils/securityCommands";
import register from '../../../../../../../../support/pageObjects/UserManagement/register';
import approvals from '../../../../../../../../support/pageObjects/UserManagement/approvals';
import SecurityProfilePage from '../../../../../../../../support/pageObjects/SecurityProfile/SecurityProfilePage';
import bulkupload from '../../../../../../../../support/pageObjects/BulkUpload/bulkupload';
import "../../../../../../../../support/Utils/subscriberCommands";
import "../../../../../../../../support/Utils/AdministratorCommands";
import "../../../../../../../../support/Utils/BusinessUserCommands";


//----------------Object Declaration----------------------------------------------------------
const pageLogin = new loginPage()
const welcomePage = new homePage()
const registerPage = new register()
const approvalPage = new approvals()
const securityProfilePage = new SecurityProfilePage()
const BulkUploadPage = new bulkupload()
const manageUsersPage = new manageUsers()
const myActivityPage = new myActivity()
var mobile
let Sysfilelogin = 'cypress/fixtures/userData/SystemAdminLogin.json'
var SubProfileName = 'cypress/fixtures/profileData/Profile.json'
var name, SecurityProfile
var loginId
var subRegistration = 'cypress/fixtures/userData/subscriberReg.json'
let businesslogin = "cypress/fixtures/userData/BusinessUsersData.json"
//var BankData = 'cypress/fixtures/userData/BusinessUsersDataO2C.json'
var BuisnessRegO2C = 'cypress/fixtures/userData/BusinessUsersDataO2C.json'
let answerone = "vuip45$"
let answertwo = "mlop$93"
const uuid1 = () => Cypress._.random(1e8)
const uuuid = () => Cypress._.random(1e3)
amount = uuuid()
var mobile, mobile1, KycValue, amount, name, ifscnum, accnumber, value
const timestamp = (new Date).getTime()
KycValue = "A" + timestamp
mobile = "77" + uuid1()
mobile1 = "77" + uuid1()
function getRandomNumber() {
    name = "12";
    var possible = "0123456789";
    for (var i = 0; i < 1; i++)
        name += possible.charAt(Math.floor(Math.random() * possible.length));
    return name;
}
function getRandomMobileNumber() {
    name = "12";
    var possible = "0123456789";
    for (var i = 0; i < 1; i++)
      name += possible.charAt(Math.floor(Math.random() * possible.length));
    return name;
  }
  
//-----------------------------------------------------------------------------------------------
And('Verify Initiator cannot approve the transaction',function(){
    BulkUploadPage.getSelectApproval().select("Enterprise Payment")
    cy.wait(2000)
    BulkUploadPage.getEnterpriseInitiatedBy().click({force:true})
    BulkUploadPage.getNoRecord().should('contain','No Pending Records')
})
//------------------------------------------
Then('Verify the downloded file is in csv format',function(){
  cy.readFile('ENTERPRISE_PAYMENT-template.csv').then(()=>{
    cy.log("PASS")
  })
})
//--------------------------------------------
And('Verify users are not able to view the batches which have neither initiated nor approved',function(){
  BulkUploadPage.getNoRecords().eq(1).should('be.visible')
})
//---------------------------
And('',function(){
  var array=[]
  value='SUBSCRIBER'
   cy.wait(2000)
   BulkUploadPage.getServicename().eq(0).select('Enterprise Payment')
   
   cy.readFile(businesslogin).then((data) => {
     let k=data.corpregisteredEmployeeMobile
     array.push(k)
     let l=data.corpregisteredEmployeeMobile1
     array.push(l)
           
        BulkUploadPage.getDownloadTemplate().click({force:true})
             
      for(let row=0;row<2;row++)
  {
  cy.writeFile('cypress/fixtures/templates/ENTERPRISE_PAYMENT-template.csv', '\n',{flag:'a+'}) 
  for (let j = 0; j < 18; j++) {
   if(j==0)
   {
     let loopvaltwo=','
     cy.writeFile('cypress/fixtures/templates/ENTERPRISE_PAYMENT-template.csv',array[row]+loopvaltwo,{flag:'a+'})
   }
 else if(j==1)
 {
 let loopvaltwo=','
 cy.writeFile('cypress/fixtures/templates/ENTERPRISE_PAYMENT-template.csv',getRandomMobileNumber()+loopvaltwo,{flag:'a+'}) 
 }
 else if(j==2)
 {
     let loopvaltwo=','
     cy.writeFile('cypress/fixtures/templates/ENTERPRISE_PAYMENT-template.csv', value,{flag:'a+'})
   }
   else{
     let loopvaltwo=','
     cy.writeFile('cypress/fixtures/templates/ENTERPRISE_PAYMENT-template.csv', loopvaltwo,{flag:'a+'})
   }
 }
 }
 BulkUploadPage.getUploadLink().attachFile('templates/ENTERPRISE_PAYMENT-template.csv')
   })
 
})