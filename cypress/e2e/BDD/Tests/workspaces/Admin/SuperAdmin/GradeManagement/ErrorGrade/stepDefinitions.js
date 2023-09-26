/// <reference types="Cypress" />
/// <reference types = "Cypress-iframe"/>

//----------------Imports---------------------------------------------------------------------
import 'cypress-iframe'
import { Given, When, Then, And, Before } from "@badeball/cypress-cucumber-preprocessor";
import loginPage from '../../../../../../../../support/pageObjects/loginPage';
import homePage from '../../../../../../../../support/pageObjects/homePage';
import "../../../../../../../../support/Utils/generic";
import 'cypress-file-upload'
import "../../../../../../../../support/Utils/authourizationcommands"
import AddCategory from '../../../../../../../../support/pageObjects/CategoryManagement/AddCategory';
import AddGrades from '../../../../../../../../support/pageObjects/GradeManagement/AddGrades';
import TransferControlProfile from '../../../../../../../../support/pageObjects/TransferControlProfile';
import DeleteGrades from '../../../../../../../../support/pageObjects/GradeManagement/DeleteGrades';
import  "../../../../../../../../support/Utils/TransferControlProfileCommand";

//----------------Object Declaration----------------------------------------------------------
const pageLogin = new loginPage()
const AddCategoryPage = new AddCategory()
const AddGradePage = new AddGrades()
const welcomePage = new homePage()
const DeleteGradesPage = new DeleteGrades()
const uid = () => Cypress._.random(1e5)
const TCPpathfile = 'userData/Gradedata.json'
const tcpPage = new TransferControlProfile()
var Gradedata = "cypress/fixtures/userData/Gradedata.json"
let GradeCode
var TcpDelete
//---------------------------------------------------------------------------------------

function getRandomDifferent(arr, last = undefined) {
  if (arr.length === 0) {
    return null;
  } else if (arr.length === 1) {
    return arr[0];
  } else {
    let num = 0;
    do {
      num = Math.floor(Math.random() * arr.length);
    } while (arr[num] === last);
    return arr[num];
  }
}

//-----------------------------------------Grade Creation------------------------------------------


And('User can view the Dashboard', function (){
    if(Cypress.env('subscriberNamedAs').includes('Subscriber')){
   cy.intercept('/CoreWeb/grades/grades_addGrades.action').as('Add')
    AddGradePage.getAddbttn().click({ force: true })
   cy.wait('@Add' , {timeout: 50000})
    }
    else
{
    cy.log("new ui")
}
})



//------------------------------------------------------------------------------------------
//---@test----------------------------------------------------------------------------------
And('Select the domain & category for new Grade', function () {
    
    const uuid = () => Cypress._.random(1e6)
    GradeCode = uuid()
    
   cy.intercept('/CoreWeb/grades/grades_addGrades.action').as('Add')
    AddGradePage.getAddbttn().click({ force: true })
   cy.wait('@Add')
    cy.GradeName1()
    AddGradePage.getDomainName().select(this.data4.GradeData1.DomainName55, { force: true })
    AddGradePage.getCatergoryName().select(this.data4.GradeData1.CategoryName55, { force: true })
    AddGradePage.getgradeCode().type(GradeCode, { force: true })
    cy.readFile(Gradedata).then((data) => {
      data.GradeCode55 = GradeCode
      cy.writeFile(Gradedata, data)
    })
    cy.intercept('/CoreWeb/grades/grades_addGrades.action').as('Add')
    AddGradePage.getSavebttn().click({ force: true })
    cy.wait('@Add')
    cy.intercept('/CoreWeb/grades/grades_saveGrades.action').as('saveGr')
    AddGradePage.getConfirmbttn().click({ force: true })
    //
    cy.wait('@saveGr')
  })

Then('Verify the Sucess message of Grade creation' , function (){
  
 AddGradePage.getSuccessmsg().contains(this.data4.GradeData1.Successmsg)
})

//------------------------------------------TCP Creation---------------------------------------


And('Click on Add New Button', function () {
    
  if(Cypress.env('subscriberNamedAs').includes('Subscriber')){
  pageLogin.getiFrame()
  
  cy.intercept('/CoreWeb/tcprf/tcpInstrumentLevel_*').as('getAddNew')
  tcpPage.getNew().click({ force: true },{timeout:50000})
  cy.wait('@getAddNew', {timeout:10000})
  }
  else
{
    cy.log("new ui")
}
})
Then('Enter all required Fields for wholesaler grade', function () {
  const uuid = () => Cypress._.random(1e4)
  Tcp = uuid()
  tcpPage.getprovider().select(this.data5.TransferControlProfile.Provider, { force: true })
  tcpPage.getdomain().select(this.data5.TransferControlProfile.Domain, { force: true })
  tcpPage.getcategory().select(this.data5.TransferControlProfile.Category, { force: true })

  cy.readFile('cypress/fixtures/userData/Gradedata.json').then((data) => {
    let Gradeselect = data.GradeName55
    cy.log(Gradeselect)
    tcpPage.getgrade().select(Gradeselect)

  })
  //tcpPage.getgrade().select(this.data5.TransferControlProfile.Grade, { force: true })

  tcpPage.getpaymentinstrument().select(1, { force: true })
  tcpPage.getwallettype().select(1, { force: true })
  cy.TCPname1()
  tcpPage.getdescription().type(this.data5.TransferControlProfile.Description)

})

And('Click on Create Button', function () {
     tcpPage.getCreate().click({ force: true })
   })

   Then('Enter all required amount and count for wholesaler grade', function () {
       if(Cypress.env('subscriberNamedAs').includes('Subscriber')){
    pageLogin.getiFrame()
    
    cy.getcumulativeamountpertransaction()
    tcpPage.getUserminbalance().type(this.data5.TransferControlProfile.UserMinBal)
    tcpPage.getUsermaximumbalance().type(this.data5.TransferControlProfile.UserMaxBal)
    tcpPage.getUserMinTransactionAmount().type(this.data5.TransferControlProfile.MinTranAmount)
    tcpPage.getUserMaxTransactionAmount().type(this.data5.TransferControlProfile.MaxTranAmount)
    tcpPage.getMaxPercentageTransferAllowed().type(this.data5.TransferControlProfile.MaxPerAllowed)
    cy.intercept('/CoreWeb/tcprf/tcpInstrumentLevel_vaildateCountsNAmounts.action').as('getconfirm')
    tcpPage.getNext().click({ force: true })
    cy.wait('@getconfirm', {timeout:70000})
    cy.intercept('/CoreWeb/tcprf/tcpInstrumentLevel_createNewTCP.action').as('getcfm')
    tcpPage.getNext().click({ force: true })
    cy.wait('@getcfm', {timeout:70000})
    welcomePage.getTransferControlProfile()
      .scrollIntoView()
       }
       else
{
    cy.log("new ui")
}
  })

  And('Click on Instrument Level TCP for approval', function () {
        if(Cypress.env('subscriberNamedAs').includes('Subscriber')){
    welcomePage.getTransferControlProfile().click()
  cy.intercept('/CoreWeb/tcprf/tcpInstrumentLevelAppr_loadListForApprovalTCPInst.action*').as('getApproval')
    welcomePage.getInstrumentLevelTCPApproval().click()
    
   cy.wait('@getApproval', {timeout:10000})
    tcpPage.getinstrumentlevelTCP().within(function () {
      cy.fixture(TCPpathfile).then((user) => {
        Tcpname = user.TcpProfileName1
        cy.log(Tcpname)
        cy.get("td").eq(1)
        cy.get("a").contains(Tcpname).click({ force: true })
      })
    })
    tcpPage.getApproveTCP().click({ force: true })
        }
        else
{
    cy.log("new ui")
}
  })
  
//-------------------------------------------------------------------------------------------
//-----@test---------------------------------------------------------------------------------
When('Click on User Profile Management >> Delete Grade', function () {
  welcomePage.getUserprofileManagementOption().click({ force: true })
cy.intercept('CoreWeb/grades/deleteGrades_displayForDelete.action*').as('getdelete')
  welcomePage.getDeleteGrades().click({ force: true })
  cy.wait('@getdelete', {timeout:10000})
  DeleteGradesPage.getDeleteRecord55()
    cy.intercept('/CoreWeb/grades/deleteGrades_delete.action').as('getDeleteGrade')
  DeleteGradesPage.getDeleteBttn().click({ force: true })
  cy.wait('@getDeleteGrade')
  cy.wait(2000)
  cy.get('.fd-page.iframeContainer.svelte-1v5e28n > iframe').then(($iframe) => {
    const $body = $iframe.contents().find('body')
    const $win = $iframe[0].contentWindow
    cy.stub($win, 'confirm', () => true).as('windowConfirm')
    cy.stub($win.console, 'log').as('consoleLog')
    cy.wrap($body).find('#delconfirm_submit').click({ force: true }).should(function () {
        cy.wait(2000)
            expect(this.windowConfirm).to.be.calledWith("Are you sure, Grade will be deleted")
          })
  })
})

Then('verify the Error message of Grade deletion' , function () {
       if(Cypress.env('subscriberNamedAs').includes('Subscriber')){
  cy.wait(3000)
  DeleteGradesPage.getERRORmsg().contains(this.data4.GradeData1.Errormsg)
       }
       else
{ cy.log("new ui") }
})

