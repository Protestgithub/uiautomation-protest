//-----------------------------------------------------------------------BulkUpload Stepdefinition.cy.js-----------------------------------------------------------
/// <reference types="Cypress" />
/// <reference types = "Cypress-iframe"/>

//----------------Imports---------------------------------------------------------------------
import 'cypress-iframe'
import { Given, When, Then, And, Before } from "@badeball/cypress-cucumber-preprocessor";
import loginPage from '../../../../../../../support/pageObjects/loginPage';
import homePage from '../../../../../../../support/pageObjects/homePage';
import manageUsers from '../../../../../../../support/pageObjects/UserManagement/manageUsers';
import myActivity from '../../../../../../../support/pageObjects/MyActivity/myActivity';
import "../../../../../../../support/Utils/generic"
import "../../../../../../../support/Utils/securityCommands";
import register from '../../../../../../../support/pageObjects/UserManagement/register';
import approvals from '../../../../../../../support/pageObjects/UserManagement/approvals';
import SecurityProfilePage from '../../../../../../../support/pageObjects/SecurityProfile/SecurityProfilePage';
import bulkupload from '../../../../../../../support/pageObjects/BulkUpload/bulkupload';
import "../../../../../../../support/Utils/subscriberCommands";
import "../../../../../../../support/Utils/AdministratorCommands";
import "../../../../../../../support/Utils/BusinessUserCommands";


//----------------Object Declaration----------------------------------------------------------
const pageLogin = new loginPage()
const welcomePage = new homePage()
const registerPage = new register()
const approvalPage = new approvals()
const securityProfilePage = new SecurityProfilePage()
const BulkUploadPage= new bulkupload()
const manageUsersPage = new manageUsers()
const myActivityPage = new myActivity()
var mobile
let Sysfilelogin = 'cypress/fixtures/userData/SystemAdminLogin.json'
var SubProfileName = 'cypress/fixtures/profileData/Profile.json'
var name, SecurityProfile
var loginId
var subRegistration = 'cypress/fixtures/userData/subscriberReg.json'
let businesslogin="cypress/fixtures/userData/BusinessUsersData.json"
//var BankData = 'cypress/fixtures/userData/BusinessUsersDataO2C.json'
var BuisnessRegO2C = 'cypress/fixtures/userData/BusinessUsersDataO2C.json'
let answerone="vuip45$"
let answertwo="mlop$93"
const uuid1 = () => Cypress._.random(1e8)
const uuuid = () => Cypress._.random(1e3)
amount = uuuid()
var  mobile, mobile1, KycValue, amount, name, ifscnum, accnumber, value
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
function getRandomName() {
  name = "";
  var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
  for (var i = 0; i < 7; i++)
    name += possible.charAt(Math.floor(Math.random() * possible.length));
  return name;
}

Then('Verify the Success Message', function(){
    
    BulkUploadPage.getTextBox().then(($btn) => {
      const txt = $btn.text()
      cy.log(txt)
      expect(txt).to.contain("success")
      let batchid=txt.split(':')[1]
      cy.log(batchid)
      cy.readFile(businesslogin).then((data) => {
        data.EnterpriseBatchID =batchid
        cy.writeFile(businesslogin,data)
      })
    
    })
})

When ('Click enterprise', function() {
  BulkUploadPage.getEnterpriseTab().click({force:true})
  cy.wait(3000)
  

})
And ('Click On Approve',function(){
  BulkUploadPage.getSelectApproval().select("Enterprise Payment")
  cy.wait(2000)
  BulkUploadPage.getEnterpriseInitiatedBy().click({force:true})
  

  cy.readFile(businesslogin).then((data) => {
  let id=data.EnterpriseBatchID
  let batchid=id.trim()
  cy.log(batchid)

  BulkUploadPage.getEnterpriseBulkId().contains(batchid)
  cy.wait(2000)
  BulkUploadPage.getEnterpriseApproveButton().eq(0).click({force:true})
  
})
})
Then('Verify Success',function(){
cy.wait(3000)
  BulkUploadPage.getApproveSucess().contains(this.data1.EnterpriseApprovalSuccessMsg)
})
//-----------------------------------------------------------------------------
Then ('Verify Success Count',function(){
  //BulkUploadPage.getFirstSelectApproval().select("Enterprise Payment")
  
  BulkUploadPage.getSecondSelectApproval().select("Initiated")
  cy.wait(2000)        
  BulkUploadPage.getClickOnEntries().click({force:true})
  cy.wait(3000)
  BulkUploadPage.getSuccessCount().contains('2')
})

//-------------------------------------------------------------------------------------------------
function getRandomMobileNumber() {
  name = "77";
  var possible = "0123456789";
  for (var i = 0; i < 8; i++)
    name += possible.charAt(Math.floor(Math.random() * possible.length));
  return name;
}

And ('Enter data in template and upload>Submit', function() {
  cy.wait(3000)
  var array=[]
      value='SUBSCRIBER'
cy.waitUntil(() => {

return cy.iframe().find('div.row>div.pt>div.col.s8>label.select_label').contains('Service Name')

})
BulkUploadPage.getServicename().select('Enterprise Payment')
cy.wait(3000)
cy.readFile(businesslogin).then((data) => {
let k=data.corpregisteredEmployeeMobile
array.push(k)
let l=data.corpregisteredEmployeeMobile1
array.push(l)  
 BulkUploadPage.getDownloadTemplate().click({force:true})
 



for(let row=0;row<5;row++)
{

cy.writeFile('cypress/fixtures/templates/ENTERPRISE_PAYMENT-template.csv', '\n',{flag:'a+'}) 
if(row==2||row==3||row==4)
{

for (let K = 0; K < 17; K++) {
if(K==0)
{
let loopvaltwo=','
cy.writeFile('cypress/fixtures/templates/ENTERPRISE_PAYMENT-template.csv',getRandomMobileNumber()+loopvaltwo,{flag:'a+'})



}
else if(K==1)
{
let loopvaltwo=','
cy.writeFile('cypress/fixtures/templates/ENTERPRISE_PAYMENT-template.csv',getRandomNumber()+loopvaltwo,{flag:'a+'})



}
else if(K==2)
{
let loopvaltwo=','
cy.writeFile('cypress/fixtures/templates/ENTERPRISE_PAYMENT-template.csv',getRandomName()+loopvaltwo,{flag:'a+'})



}
else if(K>=3||K<18){
let loopvaltwo=','

cy.writeFile('cypress/fixtures/templates/ENTERPRISE_PAYMENT-template.csv', loopvaltwo,{flag:'a+'})



}

}
}
if(row==0||row==1){
for (let j = 0; j < 17; j++) {


if(j==0)
{
let loopvaltwo=','
cy.writeFile('cypress/fixtures/templates/ENTERPRISE_PAYMENT-template.csv',array[row]+loopvaltwo,{flag:'a+'})



}
else if(j==1)
{
let loopvaltwo=','
cy.writeFile('cypress/fixtures/templates/ENTERPRISE_PAYMENT-template.csv',getRandomNumber()+loopvaltwo,{flag:'a+'})

}
else if(j==2)
{

let loopvaltwo=','
cy.writeFile('cypress/fixtures/templates/ENTERPRISE_PAYMENT-template.csv', value+loopvaltwo,{flag:'a+'})
}
else if(j>=3||j<18){
let loopvaltwo=','
cy.writeFile('cypress/fixtures/templates/ENTERPRISE_PAYMENT-template.csv', loopvaltwo,{flag:'a+'})


}
}
}
}



BulkUploadPage.getUploadLink().attachFile('templates/ENTERPRISE_PAYMENT-template.csv')
cy.waitUntil(() => {

return cy.iframe().find('div.custom-file-upload>label>div.upload_new_file.cursor_pointer').contains('UPLOAD DIFFERENT')

})
cy.wait(3000)
BulkUploadPage.getSubmitButton().click({force:true})
cy.wait(3000)
BulkUploadPage.getFailedTextBox().then(($btn) => {
const txt = $btn.text()
cy.log(txt)
cy.wait(3000)
expect(txt).to.contain(this.data1.EnterpriseFailedMessage)
let batchid=txt.split(':')[1]

cy.log(batchid)
cy.readFile(businesslogin).then((data) => {
data.FailedInvalidDataEnterpriseBatchID =batchid
cy.writeFile(businesslogin,data)
})

})
})




})

Then ('Verify Failed Count',function(){
  //BulkUploadPage.getFirstSelectApproval().select("Enterprise Payment")
  cy.waitUntil(() => {

    return cy.iframe().find('div.col.s12.div-border.pd_zero>div#test1>a.sort-link').contains('Oldest')

  })
  BulkUploadPage.getSecondSelectApproval().select("Failed")
  cy.waitUntil(() => {
    return cy.iframe().find('div.row.pending-policy-header-info.pd_zero>div.col.s4.pd_zero>span.font-normal.right').contains('PAYMENT')

  })       
  BulkUploadPage.getClickOnEntries().click({force:true})
  cy.waitUntil(() => {
    return cy.iframe().find('div.sort-link-container>div.s12.pd_zero>span.primary-color_error.fnt_wight600').contains(this.data1.FailedMessageDashboard)

  })    
  BulkUploadPage.getBatchID().then(($batchid) => {
    const txt = $batchid.text()
    cy.log(txt)
    cy.readFile(businesslogin).then((data) => {
      let k=data.FailedInvalidDataEnterpriseBatchID
      cy.log(k)
      expect(k).contains(txt)

    })

  })
})


Then('Verify the Success Message for bulk upload', function(){
 cy.wait(3000)
 BulkUploadPage.getTextBox().then(($btn) => {
 const txt = $btn.text()
 cy.log(txt)
 expect(txt).to.contain(this.data1.EnterpriseSuccessMessage)
 let batchid=txt.split(':')[1]
 cy.log(batchid)
cy.readFile(businesslogin).then((data) => {
 data.EnterpriseBatchID =batchid
 cy.writeFile(businesslogin,data)
})
})
})