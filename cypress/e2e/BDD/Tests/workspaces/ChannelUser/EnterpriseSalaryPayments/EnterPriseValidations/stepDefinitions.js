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

Then('Verify Error File and Original File', function () {
   //BulkUploadPage.getFirstSelectApproval().select("Enterprise Payment")
    // cy.waitUntil(() => {
    //     return cy.iframe().find('div.col.s12.div-border.pd_zero>div#test1>a.sort-link').contains('Oldest')
    // })
    BulkUploadPage.getSecondSelectApproval().select("Failed")
    cy.waitUntil(() => {
        return cy.iframe().find('div.row.pending-policy-header-info.pd_zero>div.col.s4.pd_zero>span.font-normal.right').contains('PAYMENT')
    })
    BulkUploadPage.getClickOnEntries().click({ force: true })
    cy.waitUntil(() => {
        return cy.iframe().find('div.sort-link-container>div.s12.pd_zero>span.primary-color_error.fnt_wight600').contains(this.data1.FailedMessageDashboard)

    })
    // BulkUploadPage.getBatchID().then(($batchid) => {
    //     const txt = $batchid.text()
    //     cy.log(txt)
    //     cy.readFile(businesslogin).then((data) => {
    //         let k = data.FailedInvalidDataEnterpriseBatchID
    //         cy.log(k)
    //         expect(k).contains(txt)

    //     })

    // })
    cy.wait(1000)
    BulkUploadPage.getDownloadErrorStatus().click({ force: true })
    // cy.task('downloads', 'cypress/fixtures/templates').then((afterOne) => {
    //     cy.log(afterOne)
    //     var l = "cypress/fixtures/templates/" + afterOne
    //     cy.log(l)
    //     cy.readFile(l).should('contains', "Error")
    // })
    cy.wait(1000)
    BulkUploadPage.getDownloadFile().click({ force: true })
    // cy.task('downloads', 'cypress/fixtures/templates').then((after) => {
    //     cy.log(after)
    //     var k = "cypress/fixtures/templates/" + after
    //     cy.log(k)
    //     cy.readFile(k)
    //     var csvUploaded = "cypress/fixtures/templates/ENTERPRISE_PAYMENT-template.csv"
    //     cy.log(csvUploaded)
    //     cy.wait(3000)
        // // cy.readFile(csvUploaded, 'utf-8').then((uploadTxt) => {
        // //     cy.wait(3000)
        // //     // cy.readFile(k, 'utf-8', { timeout: 10000 }).then((downloadTxt) => {
        // //     //     expect(downloadTxt).to.equal(uploadTxt);
        // //     // });
        // })
    //})
})

Then('Verify Downloaded file', function () {

   
    BulkUploadPage.getSecondSelectApproval().select("Initiated")
 cy.wait(2000)
    BulkUploadPage.getClickOnEntries().click({ force: true })
    BulkUploadPage.getBatchID().then(($batchid) => {
        const txt = $batchid.text()
        cy.log(txt)
        cy.readFile(businesslogin).then((data) => {
            let k = data.EnterpriseBatchID
            cy.log(k)
            expect(k).contains(txt)
            BulkUploadPage.getDownloadFile().click({ force: true })
            cy.wait(2000)
            // cy.task('downloads', 'cypress/fixtures/templates').then((after) => {
            //     cy.log(after)
            //     var k = "cypress/fixtures/templates/" + after
            //     cy.log(k)
            //     cy.readFile(k)
            // })

        })

    })

})  
Then('Verify Downloaded and uploaded file has same records', function () {

     BulkUploadPage.getSecondSelectApproval().select("Initiated")
    cy.wait(2000)
    BulkUploadPage.getClickOnEntries().click({ force: true })
cy.wait(1000)
    BulkUploadPage.getDownloadFile().click({ force: true })
cy.wait(2000)
    // cy.task('downloads', 'cypress/fixtures/templates').then((after) => {

    //     cy.log(after)
    //     var k = "cypress/fixtures/templates/" + after
    //     cy.log(k)
    //     const myArray = k.split(",");
    //     let t = myArray.length - 1
    //     let word = myArray[t];
    //     cy.log(word)       //thats the right file name
    //     var completefile = "cypress/fixtures/templates/" + word
    //     var csvDownloaded = completefile
    //     var csvUploaded = "cypress/fixtures/templates/ENTERPRISE_PAYMENT-template.csv"
    //     cy.log(csvDownloaded)
    //     cy.log(csvUploaded)
    //     cy.readFile(csvUploaded, 'utf-8').then((uploadTxt) => {
    //         cy.readFile(csvDownloaded, 'utf-8', { timeout: 10000 }).then((downloadTxt) => {
    //             expect(downloadTxt).to.equal(uploadTxt);
    //         });
    //     });

    // })
})

And('Downlaod template> Fill invalid data>Upload file', function () {
    var array = []

      value='SUBSCRIBER'

    cy.waitUntil(() => {

        return cy.iframe().find('div.row>div.pt>div.col.s8>label.select_label').contains('Service Name')

    })
    BulkUploadPage.getServicename().select('Enterprise Payment')
cy.wait(2000)
    cy.readFile(businesslogin).then((data) => {
        let k = data.employeemobilenumber
        array.push(k)
        let l = data.employeemobilenumbertwo
        array.push(l)
        BulkUploadPage.getDownloadTemplate().click({ force: true })
        



        for (let row = 0; row < 5; row++) {

            cy.writeFile('cypress/fixtures/templates/ENTERPRISE_PAYMENT-template.csv', '\n', { flag: 'a+' })
            if (row == 2 || row == 3 || row == 4) {

                for (let K = 0; K < 17; K++) {
                    if (K == 0) {
                        let loopvaltwo = ','
                        cy.writeFile('cypress/fixtures/templates/ENTERPRISE_PAYMENT-template.csv', getRandomMobileNumber() + loopvaltwo, { flag: 'a+' })



                    }
                    else if (K == 1) {
                        let loopvaltwo = ','
                        cy.writeFile('cypress/fixtures/templates/ENTERPRISE_PAYMENT-template.csv', getRandomNumber() + loopvaltwo, { flag: 'a+' })



                    }
                    else if (K == 2) {
                        let loopvaltwo = ','
                        cy.writeFile('cypress/fixtures/templates/ENTERPRISE_PAYMENT-template.csv', value + loopvaltwo, { flag: 'a+' })



                    }
                    else if (K >= 3 || K < 18) {
                        let loopvaltwo = ','

                        cy.writeFile('cypress/fixtures/templates/ENTERPRISE_PAYMENT-template.csv', loopvaltwo, { flag: 'a+' })



                    }

                }
            }
            if (row == 0 || row == 1) {
                for (let j = 0; j < 17; j++) {


                    if (j == 0) {
                        let loopvaltwo = ','
                        cy.writeFile('cypress/fixtures/templates/ENTERPRISE_PAYMENT-template.csv', array[row] + loopvaltwo, { flag: 'a+' })



                    }
                    else if (j == 1) {
                        let loopvaltwo = ','
                        cy.writeFile('cypress/fixtures/templates/ENTERPRISE_PAYMENT-template.csv', getRandomNumber() + loopvaltwo, { flag: 'a+' })

                    }
                    else if (j == 2) {

                        let loopvaltwo = ','
                        cy.writeFile('cypress/fixtures/templates/ENTERPRISE_PAYMENT-template.csv', value + loopvaltwo, { flag: 'a+' })
                    }
                    else if (j >= 3 || j < 18) {
                        let loopvaltwo = ','
                        cy.writeFile('cypress/fixtures/templates/ENTERPRISE_PAYMENT-template.csv', loopvaltwo, { flag: 'a+' })


                    }
                }
            }
        }



        BulkUploadPage.getUploadLink().attachFile('templates/ENTERPRISE_PAYMENT-template.csv')
        cy.waitUntil(() => {

            return cy.iframe().find('div.custom-file-upload>label>div.upload_new_file.cursor_pointer').contains('UPLOAD DIFFERENT')

        })
        BulkUploadPage.getSubmitButton().click({ force: true })
cy.wait(2000)        
        BulkUploadPage.getFailedTextBox().then(($btn) => {
            const txt = $btn.text()
            cy.log(txt)
            expect(txt).to.contain(this.data1.EnterpriseFailedMessage)
            let batchid = txt.split(':')[1]

            cy.log(batchid)
            cy.readFile(businesslogin).then((data) => {
                data.FailedInvalidDataEnterpriseBatchID = batchid
                cy.writeFile(businesslogin, data)
            })

        })
    })
})

Then ('Verify Unique id is generated',function(){
 cy.waitUntil(() => {
 return cy.iframe().find('div.col.s12.div-border.pd_zero>div#test1>a.sort-link').contains('Oldest')
 })
 BulkUploadPage.getSecondSelectApproval().select("Initiated")
 cy.waitUntil(() => {
 return cy.iframe().find('div.row.pending-policy-header-info.pd_zero>div.col.s4.pd_zero>span.font-normal.right').contains('PAYMENT')})
 BulkUploadPage.getClickOnEntries().click({force:true})
 BulkUploadPage.getBatchID().then(($batchid) => {
 const txt = $batchid.text()
 cy.log(txt)
 cy.readFile(businesslogin).then((data) => {
 let k=data.EnterpriseBatchID
cy.log(k)
 expect(txt).to.not.include(k)

 })
})
})

And ('Click on enterprise Initiation', function(){
 BulkUploadPage.getEnterpriseInitiationTab().click({force:true})   
 cy.wait(2000)
 
})