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
//import "../../../../../../../support/Utils/securityCommands";
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
function getRandomMobileNumber() {
  name = "77";
  var possible = "0123456789";
  for (var i = 0; i < 8; i++)
    name += possible.charAt(Math.floor(Math.random() * possible.length));
  return name;
}
const date2 = new Date().toLocaleString('en-GB').split(',')
//---------------------------------------------Login----------------------------------------------------
//---------------------------------------------System Admin Login----------------------------------------------------
Given('Log in with valid credentials as corporate user', function () {
    cy.launchURL(Cypress.env('Adminurl'))
    cy.visit(Cypress.env("Adminurl") + "/dfscontainer/#/business/")
     cy.readFile(businesslogin).then((data) => {
     let loginID = data.CorporateLoginId
     cy.login(loginID, this.data1.businessAdmin.businessadminPwd1)
    })
})


  Given('Log in with valid credentials of another corporate user', function () {
    cy.launchURL(Cypress.env('Adminurl'))
    cy.visit(Cypress.env("Adminurl") + "/dfscontainer/#/business/")
    cy.wait(2000)
    cy.frameLoaded(pageLogin.getiFrame())
     cy.readFile(businesslogin).then((data) => {
     let loginID = data.CorporateLoginId1
     cy.login(loginID, this.data1.businessAdmin.businessadminPwd1)
    })
  })
  

  When ('Click on enterprise payment', function() {
    BulkUploadPage.getEnterpriseTab().click({force:true})
    cy.intercept('/CoreWeb/nayapaisa/bulk-api/jigsaw/bulk/systemCurrencies/').as('getEnterprisePayment')
    BulkUploadPage.getEnterpriseInitiationTab().click({force:true})
    cy.wait("@getEnterprisePayment",{timeout:20000})
    
  })

  And('Download the template', function(){
    
    BulkUploadPage.getServicename().eq(0).select('Enterprise Payment')
    cy.wait(2000)
    // BulkUploadPage.getCheckbox().eq(1).click()
    BulkUploadPage.getDownloadTemplate().click({force:true})
    cy.wait(2000)
  })

  And('Download the template without selecting checkbox', function(){
    
    BulkUploadPage.getServicename().eq(0).select('Enterprise Payment')
    cy.wait(2000)
   // BulkUploadPage.getCheckbox().eq(1).click()
    BulkUploadPage.getDownloadTemplate().click({force:true})
    cy.wait(2000)
  })
  
  
    And('Download the template with selecting checkbox', function(){
    
    BulkUploadPage.getServicename().eq(0).select('Enterprise Payment')
    cy.wait(2000)
    BulkUploadPage.getCheckbox().eq(1).click()
    BulkUploadPage.getDownloadTemplate().click({force:true})
    cy.wait(2000)
  })

  And('Upload the template',function(){
    var array=[]
 value='SUBSCRIBER'
    cy.wait(2000)
    cy.readFile(businesslogin).then((data) => {
      let k=data.corpregisteredEmployeeMobile
      array.push(k)
      let l=data.corpregisteredEmployeeMobile1
      array.push(l)      
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
  cy.writeFile('cypress/fixtures/templates/ENTERPRISE_PAYMENT-template.csv',getRandomNumber()+loopvaltwo,{flag:'a+'})
    
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

  And ('Click on Enterprise Payment Submit', function() {
    
    cy.intercept('/CoreWeb/nayapaisa/bulk-api/jigsaw/bulk/upload').as('getUpload')
     BulkUploadPage.getSubmitButton().click({force:true})
     cy.wait('@getUpload', {timeout:20000})
 
   })
  And('Check availability of the user combination of KYC ID and Name', function(){
    cy.iframe().find('.alert.alert-danger').contains('failed')
  })

  And('Check if static template level validations are successful',function(){
   BulkUploadPage.getTextBox().contains('success')
  })

  And('Click On Enterprise Dashboard',function(){

     cy.intercept('/CoreWeb/nayapaisa/bulk-api/jigsaw/bulk/systemCurrencies/').as('getDashboard')
  BulkUploadPage.getEnterpriseDahboardTab().click({force:true})
  cy.wait('@getDashboard',{timeout:20000})
  cy.wait(1000)
    

  })

  Given('Log in with valid credentials of corporate user2', function () {
    cy.launchURL(Cypress.env('Adminurl'))
    cy.visit(Cypress.env("Adminurl") + "/dfscontainer/#/business/")
    cy.wait(2000)
    cy.frameLoaded(pageLogin.getiFrame())
     cy.readFile(businesslogin).then((data) => {
     let loginID = data.CorporateLoginId1
     cy.login(loginID, this.data1.businessAdmin.businessadminPwd1)

    })

  })

  And ('Click on enterprise payment appproval1',function () {
    cy.intercept('/CoreWeb/nayapaisa/bulk-api/jigsaw/bulk/systemCurrencies/').as('getEnterprisePayments')
    BulkUploadPage.getEnterpriseAprooval().click({force:true})
    cy.wait('@getEnterprisePayments',{timeout:20000})
    
  })

  Given('Login into Mobiquity Portal as Employee', function(){
    cy.launchURL(Cypress.env('Adminurl'))
    cy.visit(Cypress.env("Adminurl") + "/dfscontainer/#/business/")
    
    cy.frameLoaded(pageLogin.getiFrame())
     cy.readFile(businesslogin).then((data) => {
     let loginID = data.EmployeeLoginId
     cy.login(loginID, this.data1.BAPassword)

    })
  })

  Given('Login into Mobiquity Portal as Employee for corp', function(){
    cy.launchURL(Cypress.env('Adminurl'))
    cy.visit(Cypress.env("Adminurl") + "/dfscontainer/#/business/")
    cy.wait(2000)
    cy.frameLoaded(pageLogin.getiFrame())
     cy.readFile(businesslogin).then((data) => {
     let loginID = data.corpEmployeeLoginId
     cy.login(loginID, this.data1.BAPassword)

    })
  })

  Given('Login into Mobiquity Portal as Employee2', function(){
    cy.launchURL(Cypress.env('Adminurl'))
    cy.visit(Cypress.env("Adminurl") + "/dfscontainer/#/business/")
    
    cy.frameLoaded(pageLogin.getiFrame())
     cy.readFile(businesslogin).then((data) => {
     let loginID = data.corpEmployeeLoginId1
     cy.login(loginID, this.data1.BAPassword)

    })
  })

//----------------Test Scripts---------------------------------------------------------------


And('Click on Reject button.', function () {
  BulkUploadPage.getBulkRejectButton().click({ force: true })
})


Then('Edit the commission amount information', function () {
  cy.readFile("cypress/fixtures/BulkData/BULK_O2C-template.json").then((data) => {
    data['Serial Number*'] = "30",
      data['MFS Provider*'] = this.data009.MFSProvider,
      data['Receiver SVA Type ID*'] = this.data009.ReceiverSVATypeID,
      cy.readFile(BuisnessRegO2C).then((data1) => {
        var O2CMsisdn = data1.registeredMobileO2C
        data['Receiver Mobile Number*'] = O2CMsisdn
      })
    data['Amount*'] = "5000",
      data['Transfer Date*'] = date2[0],
      data['Payment Type*'] = this.data009.PaymentType,
      data['Reference number*'] = "123456",
      data['Remarks*'] = this.data009.Remarks,
      data['Payment Number'] = this.data009.PaymentNumber,
      data['Payment Date'] = date2[0],
      data['Individual Remarks'] = this.data009.IndividualRemarks,
      data['Additional Parameter 1'] = ""
    data['Additional Parameter 2'] = ""
    data['Additional Parameter 3'] = ""
    data['Additional Parameter 4'] = ""
    data['Additional Parameter 5'] = ""
    data['Additional Parameter 6'] = ""
    data['Additional Parameter 7'] = ""
    data['Additional Parameter 8'] = ""
    data['Additional Parameter 9'] = ""
    data['Additional Parameter 10'] = ""
    cy.writeFile("cypress/fixtures/BulkData/BULK_O2C-template.json", data)
  })
})

//--------------------------------Saswat-----------------------
And("Click on Initiated Entry", function () {
  BulkUploadPage.getInitiated().select("Initiated", { force: true })
  
})
Then("Verify Initiated Count", function () {
  BulkUploadPage.getInitiatedCount().should("be.visible")
})
And("Click On Failed Entry", function () {
  
  BulkUploadPage.getFailed().select("Failed", { force: true })
  
})
Then("Verify Failed count", function () {
  BulkUploadPage.getFailedCount().should("be.visible")
})

//------------------------------------------------------------------------
And ('Click on Upload', function() {
  
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



And ('Click on Submit Button for bulk upload', function() {
  
   BulkUploadPage.getSubmitButton().click({force:true})
   cy.wait(2000)
   BulkUploadPage.getTextBox().then(($btn) => {
     const txt = $btn.text()
     cy.log(txt)
     expect(txt).to.contain(this.data1.EnterpriseSuccessMessage)
     let batchid=txt.split(':')[1]
     cy.log(batchid)
     cy.readFile(businesslogin).then((data) => {
       data.EnterpriseBatchIDNotApproved =batchid
       cy.writeFile(businesslogin,data)
     })
    })

 })

 Then ('Verify Batch ID Exist',function(){
       
  cy.waitUntil(() => {

    return cy.iframe().find('div.col.s12.div-border.pd_zero>div#test1>a.sort-link').contains('Oldest')

  })
  BulkUploadPage.getSecondSelectApproval().select("Initiated")
  cy.waitUntil(() => {
    return cy.iframe().find('div.row.pending-policy-header-info.pd_zero>div.col.s4.pd_zero>span.font-normal.right').contains('PAYMENT')

  })
  BulkUploadPage.getClickOnEntries().click({force:true})
  BulkUploadPage.getBatchID().then(($batchid) => {
    const txt = $batchid.text()
    cy.log(txt)
    cy.readFile(businesslogin).then((data) => {
      let k=data.EnterpriseBatchIDNotApproved
      cy.log(k)
     // expect(txt).to.include(k)
      expect(k).contains(txt)

    })

  })

})
Then ('Verify for initiated,approved and failed records',function(){
       
  BulkUploadPage.getSecondSelectApproval().select("Initiated")
  cy.wait(2000)
   BulkUploadPage.getClickOnEntries().click({force:true})
  // BulkUploadPage.getBatchID().then(($batchid) => {
  //   const txt = $batchid.text()
  //   cy.log(txt)
  //   cy.readFile(businesslogin).then((data) => {
  //     let k=data.EnterpriseBatchIDNotApproved
  //     cy.log(k)
  //    // expect(txt).to.include(k)
  //     expect(k).contains(txt)

  //   })

  // })
 
  cy.intercept('/CoreWeb/nayapaisa/bulk-api/jigsaw/bulk/systemCurrencies/').as('getDashboard')
  BulkUploadPage.getEnterpriseDahboardTab().click({force:true})
  cy.wait('@getDashboard',{timeout:20000})
  cy.wait(1000)
   BulkUploadPage.getSecondSelectApproval().select("Failed")
   cy.wait(2000)
  // cy.waitUntil(() => {
  //   return cy.iframe().find('div.row.pending-policy-header-info.pd_zero>div.col.s4.pd_zero>span.font-normal.right').contains('PAYMENT')

  // })
   BulkUploadPage.getClickOnEntries().click({force:true})
  // BulkUploadPage.getBatchID().then(($batchid) => {
  //   const txt = $batchid.text()
  //   cy.log(txt)
  //   cy.readFile(businesslogin).then((data) => {
  //     let k=data.FailedInvalidDataEnterpriseBatchID
  //     cy.log(k)
  //    // expect(txt).to.include(k)
  //     expect(k).contains(txt)

  //   })

  // })
  
  cy.intercept('/CoreWeb/nayapaisa/bulk-api/jigsaw/bulk/systemCurrencies/').as('getDashboard')
  BulkUploadPage.getEnterpriseDahboardTab().click({force:true})
  cy.wait('@getDashboard',{timeout:20000})
  cy.wait(1000)
    BulkUploadPage.getSecondSelectApproval().select("Approved")
  //  cy.waitUntil(() => {
  //    return cy.iframe().find('div.row.pending-policy-header-info.pd_zero>div.col.s4.pd_zero>span.font-normal.right').contains('PAYMENT')

  //  })
  cy.wait(2000)
   BulkUploadPage.getClickOnEntries().click({force:true})
  //  BulkUploadPage.getBatchID().then(($batchid) => {
  //    const txt = $batchid.text()
  //    cy.log(txt)
  //    cy.readFile(businesslogin).then((data) => {
  //      let k=data.EnterpriseBatchID
  //      cy.log(k)
  //     // expect(txt).to.include(k)
  //      expect(k).contains(txt)

  //    })

  //  })
})
Given ('Login into Mobiquity Portal as Employee user', function(){
  cy.launchURL(Cypress.env('Adminurl'))
  cy.launchbusinessURL(Cypress.env('Adminurl'))
  
  cy.frameLoaded(pageLogin.getiFrame())
  cy.readFile(businesslogin).then((data) => {
  let loginID = data.EmployeeLoginId
  cy.login(loginID, this.data1.BAPassword)

  })
  })


  Given ('Login into Mobiquity Portal as Employee user2', function(){
    cy.launchURL(Cypress.env('Adminurl'))
    cy.launchbusinessURL(Cypress.env('Adminurl'))
    
    cy.frameLoaded(pageLogin.getiFrame())
    cy.readFile(businesslogin).then((data) => {
    let loginID = data.corpEmployeeLoginId1
    cy.login(loginID, this.data1.BAPassword)
  
    })
    })

  And ('Click On Reject',function(){
    cy.wait(2000)
    BulkUploadPage.getSelectApproval().select("Enterprise Payment")
    BulkUploadPage.getEnterpriseInitiatedBy().click({force:true})
  cy.readFile(businesslogin).then((data) => {
    let id=data.EnterpriseBatchID
    let batchid=id.trim()
    cy.log(batchid)
    BulkUploadPage.getEnterpriseBulkId().contains("BA")
    // cy.intercept('/CoreWeb/nayapaisa/bulk-api/jigsaw/serviceRequest/cancel/INITIATE_ENTERPRISE_PAYMENT').as('bulkreject')
    BulkUploadPage.getEnterpriseRejectButton().click({force:true})
    // cy.wait('@bulkreject',{timeout:30000})  
  })
})
Then('Verify Reject Message',function(){
    cy.wait(2000)
    BulkUploadPage.getApproveSucess().contains(this.data1.EnterpriseRejectSuccessMsg)
})

Then('Verify the text message', function() {
    cy.waitUntil(() => {
      return cy.iframe().find('div.custom-file-upload>label >div.upload_new_file.cursor_pointer').contains('UPLOAD DIFFERENT')
    })
    var a=getRandomName()
    BulkUploadPage.getRemarks().type(a)
    BulkUploadPage.getClick().click({force:true})
    BulkUploadPage.getRemarks().invoke('val').should('not.be.empty')
})


  Given('Login into Mobiquity Portal as Employee2', function(){
    cy.launchURL(Cypress.env('Adminurl'))
    cy.visit(Cypress.env("Adminurl") + "/dfscontainer/#/business/")
    
    cy.frameLoaded(pageLogin.getiFrame())
     cy.readFile(businesslogin).then((data) => {
     let loginID = data.corpEmployeeLoginId1
     cy.login(loginID, this.data1.BAPassword)

    })
  })
