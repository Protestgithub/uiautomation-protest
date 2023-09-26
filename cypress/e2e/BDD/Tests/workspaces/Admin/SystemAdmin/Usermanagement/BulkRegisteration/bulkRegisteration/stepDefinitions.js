/// <reference types="Cypress" />
/// <reference types = "Cypress-iframe"/>

//----------------Imports---------------------------------------------------------------------
import { And, Then, When } from "@badeball/cypress-cucumber-preprocessor";
import 'cypress-iframe';

import register from '../../../../../../../../../support/pageObjects/UserManagement/register';
import BulkRegistration from '../../../../../../../../../support/pageObjects/BulkRegistration/BulkRegistration';
import BulkPayout from "../../../../../../../../../support/pageObjects/BulkPayout";
import '../../../../../../../../../support/Utils/generic'
import '../../../../../../../../../support/Utils/subscriberCommands'

import homePage from "../../../../../../../../../support/pageObjects/homePage";
import myActivity from "../../../../../../../../../support/pageObjects/MyActivity/myActivity";


function getRandomName() {
  name = "";
  var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
  for (var i = 0; i < 5; i++)
    name += possible.charAt(Math.floor(Math.random() * possible.length));
  return name;
}

function getRandomNumber() {
  name = "77";
  var possible = "0123456789";
  for (var i = 0; i < 8; i++)
    name += possible.charAt(Math.floor(Math.random() * possible.length));
  return name;
}
function getRandomLoginId() {
  name = "LG";
  var possible = "0123456789";
  for (var i = 0; i < 4; i++)
    name += possible.charAt(Math.floor(Math.random() * possible.length));
  return name;
}
function getRandomKycId() {
  name = "KYCID";
  var possible = "0123456789";
  for (var i = 0; i < 8; i++)
    name += possible.charAt(Math.floor(Math.random() * possible.length));
  return name;
}



const registerPage = new register()
const BulkRegistrationPage = new BulkRegistration()
const uuid1 = () => Cypress._.random(1e8)
const welcomePage= new homePage()
const BptPage = new BulkPayout()
const myActivityPage = new myActivity()







//------------------------------------BULK REGISTRATION--------------------------------

And('Select User type as Subscriber and click on Multiple Subscribers', function () {
  welcomePage.getUserManagementOption().scrollIntoView()
  welcomePage.getUserManagementOption().click()
  welcomePage.getRegisterOption().click()
  
  registerPage.getregisterPageTitle().should('have.text', this.data2.registerPageTitle)
 // registerPage.getSelectSubUserTypeTab().contains(this.data2.subPersonalInfo.subUserType).click({ force: true })
  //registerPage.getSelectSubUserTypeTab().contains(this.data2.subPersonalInfo.subUserType).focused()
  registerPage.getSelectSubUserTypeTab().click({ force: true })
  registerPage.getSelectSubUserTypeTab().focused()
  registerPage.getUserRole().click({ force: true })
  registerPage.getRegistrationMode().eq(1).click({ force: true })

  // registerPage.getregisterPageTitle().should('have.text', this.data2.registerPageTitle)
  // registerPage.getSelectSubUserTypeTab().click({ force: true })
  // registerPage.getSelectSubUserTypeTab().focused()
  // registerPage.getUserRole().click({ force: true })
  // registerPage.getRegistrationMode().eq(1).click({ force: true })
})

And('Download a blank .csv file for Multiple Users template', function () {

  BulkRegistrationPage.getStepperDownloadTemplate().contains('Download Template')
 
   
 
  cy.task('downloads', 'cypress/fixtures/templates').then(before => {
 
 
 
   // do the download
 
    BulkRegistrationPage.getMultUserDownloadTemplate().click({ force: true })
 
    cy.wait(2000)
 
   
 
    cy.task('downloads', 'cypress/fixtures/templates').then((after) => {
 
     expect(after.length).to.be.eq(before.length +1)  
 
     newFile = after.filter(file => !before.includes(file))[0]
 
     cy.log(newFile)
 
 
 
    const downloadedFile = "cypress/fixtures/templates/"+newFile
 
 
 
    cy.readFile("cypress/fixtures/BulkTemplateName.json").then((data) => {
 
    data.DownloadedFileName = newFile
 
    const JsonFileDownload = newFile.split('.')[0]
 
    data.FileNameOnly = JsonFileDownload
 
    cy.writeFile("cypress/fixtures/BulkTemplateName.json", data)
 
   })
 
    
 
    cy.log(downloadedFile)
 
     cy.readFile(downloadedFile)
 
     .then((data) => {
 
       var lines = data.split("\n")
 
       var headers = lines[0].split(",")
 
 
 
       for (var i = 0; i < lines.length; i++) {
 
         var obj = {};
 
         var currentline = lines[i].split(",");
 
 
 
         for (var j = 0; j < headers.length; j++) {
 
           obj[headers[j]] = '';
 
 
 
         }
 
         cy.log(obj)
 
 
 
       }
 
       const JsonFile1 = downloadedFile.split('.')[0]
 
       cy.log(JsonFile1)
 
        
 
       const jsonFile2 = JsonFile1+'.json'
 
       cy.log(jsonFile2)
 
       cy.writeFile(jsonFile2, obj)
 
 
 
     })
 
   
 
 var mobileNo = "77"+ uuid1()
 
   var mobileNo1 = "77"+ uuid1()
 
   var kycNo = getRandomName()+uuid1()
 
 
 
 cy.convertCSVtoJSON(downloadedFile).then((jsonData) => {
 
  // Use the converted JSON data in your test
 
  cy.log(JSON.stringify(jsonData));   
 
  cy.writeFile("cypress/fixtures/BulkData/BULK_REGISTRATION-template.json", JSON.stringify(jsonData)).then(() => {
 
   cy.log('JSON data written to file successfully!');
 
 });
 
 });
 
 
 
  cy.wait(2000)
 
  cy.modifyJsonField('cypress/fixtures/BulkData/BULK_REGISTRATION-template.json', 'Customer Information File', mobileNo);
 
  cy.modifyJsonField('cypress/fixtures/BulkData/BULK_REGISTRATION-template.json', 'Login ID*', "SUB"+mobileNo);
 
  cy.modifyJsonField('cypress/fixtures/BulkData/BULK_REGISTRATION-template.json', 'Email Address', "SUB"+mobileNo+"@gmail.com");
 
  cy.modifyJsonField('cypress/fixtures/BulkData/BULK_REGISTRATION-template.json', 'Mobile Number*', mobileNo1);
 
  cy.modifyJsonField('cypress/fixtures/BulkData/BULK_REGISTRATION-template.json', 'KYC Id Number*', kycNo);
 
 
 
 cy.convertJsonToCsv('cypress/fixtures/BulkData/BULK_REGISTRATION-template.json', downloadedFile);
 
 
 
  })
 
 })
 
 })
 

And('Assert that template got Download', function() {
  BulkRegistrationPage.getReferenceDataField().contains('Reference Data')
})

//-----------------------2049, 2052------------------
And('Upload the downloaded file for bulk user creation', function() {

  BulkRegistrationPage.getStepperUploadFile().contains('Upload File')

  cy.readFile("cypress/fixtures/BulkTemplateName.json").then((data) => {
    var DownloadedCSVFile = data.DownloadedFileName
    cy.log(DownloadedCSVFile)
    BptPage.getUploadLink().attachFile("templates/"+DownloadedCSVFile)
    
  })
  
 
})


And('Check the uploaded file icon is there or not', function() {

  //BulkRegistrationPage.getUploadFileIcon().should('exist')
  BulkRegistrationPage.getUploadFileIcon().contains('Size')
})

//-------------------------2054---------------------
And('Click on Cancel to stop the process', function() {

  BulkRegistrationPage.getCancel().click({force:true})
  if(Cypress.env('subscriberNamedAs').includes("Subscriber")){
registerPage.getUserRole().contains(this.data2.subPersonalInfo.subUserRole)
}
else{
  registerPage.getUserRole().contains("Customer")
}
})


//-----------------------2055--------------------
And('Proceed the Uploaded file and Assert the response', function() {

  BulkRegistrationPage.getProceed().click({ force: true })
  cy.wait(3000)
  BulkRegistrationPage.getRecordsStatusContainer().should('be.visible')
  BulkRegistrationPage.getRecordsStatus().eq(0).should('exist')//contain('Total number of records')
  BulkRegistrationPage.getRecordsStatus().eq(1).should('be.visible')//contain('Uploaded Successfully')
  //added on 15/06/2023
  cy.wait(20000)  
  BulkRegistrationPage.getConfirm().click({force:true})
  BulkRegistrationPage.getAssertSubmit().contains('successfully')
})

//-------------------TC_2056----------------------
And('Download a blank .csv file for Multiple Users template for Failed Scenario', function () {
BulkRegistrationPage.getStepperDownloadTemplate().contains('Download Template')
BulkRegistrationPage.getMultUserDownloadTemplate().click({ force: true })
cy.wait(5000)
cy.task('downloads', 'cypress/fixtures/templates').then((after) => {
expect(after.length).to.be.eq(before.length +1)  
 newFile = after.filter(file => !before.includes(file))[0]
 cy.log(newFile)  
  BptPage.getUploadLink().attachFile('templates/'+newFile)
  cy.intercept('/mobiquitypay/v1/ums/bulk/fileValidation').as('all')
  BulkRegistrationPage.getProceed().click({ force: true })
    cy.checkAPI('/mobiquitypay/v1/ums/bulk/fileValidation')
  })
})

And('Upload the downloaded file for Failed bulk user creation', function() {

  BulkRegistrationPage.getStepperUploadFile().contains('Upload File')

  // cy.readFile("cypress/fixtures/BulkTemplateName.json").then((data) => {
  //   var DownloadedFileNameOnly = data.FileNameOnly
  //   cy.log(DownloadedFileNameOnly)

  //   BptPage.getUploadLink().attachFile("templates/"+DownloadedFileNameOnly+".csv")
  // })
  
  
 
})


And('Download the failed recorded file', function() {

  BulkRegistrationPage.getRecordsStatusContainer().should('be.visible').within(()=>{
   // cy.get('[class="col-4"]').eq(0).should('have.text','Total number of records')
    cy.get('[data-mat-icon-name="Icon_success"]').should('exist')
    cy.get('[data-mat-icon-name="Icon_cancel"]').should('exist')
  })
BulkRegistrationPage.getDownloadRecordFile().eq(1).click({force:true})

})

//----------------------TC_2057----------------------

And('Click on Cancel Upload button and Assert', function() {
BulkRegistrationPage.getCancelUpload().click({force:true})
cy.intercept('/mobiquitypay/serviceRequest/cancel/any').as('all')
BulkRegistrationPage.getConfirmCancelUpload().click({force:true})
cy.checkAPI('/mobiquitypay/serviceRequest/cancel/any')
BulkRegistrationPage.getCancelUploadSuccessMsg().contains('rejected successfully')
if(Cypress.env('subscriberNamedAs').includes("Subscriber")){
registerPage.getUserRole().contains(this.data2.subPersonalInfo.subUserRole)
}
else{
  registerPage.getUserRole().contains("Customer")
}

})


And('Download the template for Cancel', function () {

  cy.task('downloads', 'cypress/fixtures/templates').then(before => {
 
    // do the download
     
     registerPage.getDownloadFileTemplate().click({ force: true })
     
   cy.wait(2000)
     cy.task('downloads', 'cypress/fixtures/templates').then((after) => {
       expect(after.length).to.be.eq(before.length +1)  
       newFile = after.filter(file => !before.includes(file))[0]
       cy.log(newFile)
     })
     
   })
 })
 And('Upload csv file with invalid details for bulk user creation to assert record', function () {
  
  registerPage.getupload().selectFile('cypress/fixtures/templates/'+newFile, { action: 'drag-drop' })
  cy.wait(2000)
  registerPage.getProceed().click({ force: true })

  cy.wait(20000)
  //registerPage.getConfirm().click()
  BulkRegistrationPage.getRecordsStatusContainer().should('be.visible').within(()=>{
    // cy.get('[class="col-4"]').eq(0).should('have.text','Total number of records')
     cy.get('[data-mat-icon-name="Icon_success"]').should('exist')
     cy.get('[data-mat-icon-name="Icon_cancel"]').should('exist')
   })
 BulkRegistrationPage.getDownloadRecordFile().eq(1).click({force:true})
  
})

// Then('Confirmation message is displayed.', function () {
//   // cy.intercept('/mobiquitypay/audit').as('all')
//   cy.wait(20000)
//   registerPage.getConfirmationText().contains('Bulk Request is successfully initiated. Kindly contact admin for approval')
//   registerPage.getDoneButton().click()
  
//   // cy.checkAPI('/mobiquitypay/audit')
//  })


When('Navigate to My Activity and Click on Multiple Record1', function () {
cy.intercept('/activitymanagementui*').as('getMyActivity')
  welcomePage.getMyActivity().click()
  cy.wait("@getMyActivity")
  myActivityPage.getMultiple().click( {force:true})
  cy.wait(2000)
  myActivityPage.getCreatedOnTime().eq(0).invoke('text').then((time)=>{
  time= time.trim()
  cy.log(time)
  cy.readFile('cypress/fixtures/userData/O2CBulkData.json').then((data) => {
  data.BulkId1 = time
  cy.writeFile('cypress/fixtures/userData/O2CBulkData.json',data)
  })
})
})

And('User Click on Eye Button and Download the Logs', function () {
//approvalPage.getCurrentDateRowData().eq(0).click({ force: true })
// myActivityPage.getCurrentDateRowData().eq(0).click()
myActivityPage.getEyedetails().click({ force: true })
myActivityPage.getDropdown().click({ force:true })
 cy.waitUntil(()  => {
  return cy.iframe().find('#dropdown').contains('Record Status')
 })
 myActivityPage.getDownloadOriginalfile().click( { force:true })
 cy.waitUntil(()  => {
  return cy.iframe().find('[class="ml-2 record-labels ng-star-inserted"]').eq(0).should('be.visible')
 })
 myActivityPage.getSucceedLog().click( { force:true })

 cy.waitUntil(()  => {
  return cy.iframe().find('[class="ml-2 record-labels ng-star-inserted"]').eq(1).should('be.visible')
 })
 //myActivityPage.getFailedLog().click( { force:true })
})
When('Navigate to My Activity and Click on Multiple Record2', function () {
  cy.intercept('activitymanagementui*').as('getMyActivity')
  welcomePage.getMyActivity().click()
  cy.wait("@getMyActivity")
  myActivityPage.getMultiple().click( {force:true})
cy.wait(2000)
 myActivityPage.getCreatedOnTime().eq(0).invoke('text').then((time)=>{
  time= time.trim()
  cy.log(time)
  cy.readFile('cypress/fixtures/userData/O2CBulkData.json').then((data) => {
  data.BulkId2 = time
  cy.writeFile('cypress/fixtures/userData/O2CBulkData.json',data)
  })
})
})

Then('Check for the Uniqe BulkID',function () { 
cy.readFile('cypress/fixtures/userData/O2CBulkData.json').then((data) =>{
  let BulkID1= data.ID1
  let BulkID2= data.ID2
  if(BulkID1!=BulkID2)
  {
  cy.log("BulkID is not Unique")
  }
  else{
  cy.log("BulkID is Unique")
}
})
})

When('Navigate to MyActivity and Click on Multiple' , function () {
   cy.intercept('activitymanagementui*').as('getMyActivity')
  welcomePage.getMyActivity().click()
  cy.wait("@getMyActivity")
    myActivityPage.getMultiple().click( {force : true})
    cy.wait(2000)
})
Then('Assert the bulk upload ID' , function (){

 myActivityPage.getBulkID().eq(0).should('have.text',' BULK ID ')
})