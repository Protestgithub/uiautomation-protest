/// <reference types="Cypress" />
/// <reference types = "Cypress-iframe"/>
import 'cypress-iframe'
import { Given, When, Then, And, Before } from "@badeball/cypress-cucumber-preprocessor";
import "../../../../../../../../support/Utils/generic";
import "../../../../../../../../support/Utils/TransferControlProfileCommand";
import TransferControlProfile from '../../../../../../../../support/pageObjects/TransferControlProfile';
import homePage from '../../../../../../../../support/pageObjects/homePage';

const tcpPage = new TransferControlProfile()
const CustTCPdata = 'userData/CustTCPdata.json'
const welcomePage = new homePage()
var Tcpname1
var LoginId1, name

//----------------------------------------------------------------------------


When('Navigate to Transfer Control Profile to View Details', function () {
  if(Cypress.env('subscriberNamedAs').includes('Subscriber')){
    cy.intercept('/CoreWeb/tcprf/tcpUserLevel*').as('getTCPPage')  
    welcomePage.getTransferControlProfileSA().click()
    cy.wait('@getTCPPage')
    cy.TcpName1()
    cy.fixture(CustTCPdata).then((user) => {
      Tcpname1 = user.CustTCPProfileName
      cy.log(Tcpname1)
  
    cy.ViewDetails(Tcpname1)
    cy.log(Tcpname1)
    tcpPage.getback().contains("Back").click({ force: true })
  })
  }
  else{cy.log("New UI TCP") }
 
})

When('Navigate to Transfer Control Profile to Edit Details', function () {
  if(Cypress.env('subscriberNamedAs').includes('Subscriber')){
    cy.intercept('/CoreWeb/tcprf/tcpUserLevel*').as('getTCPPage') 
    welcomePage.getTransferControlProfileSA().click()
    cy.wait('@getTCPPage')
    cy.TcpName1()
    cy.fixture(CustTCPdata).then((user) => {
        Tcpname1 = user.CustTCPProfileName
        cy.log(Tcpname1)
    
    cy.EditDetails(Tcpname1)
    //
    tcpPage.getEditbutton().click({ force: true })
    
    tcpPage.getNextEdit().click({ force: true })
    tcpPage.getConfirmEdit().click({ force: true })
    })
  }
  else{cy.log("New UI TCP") }
  })
  
  Then('Verify Success Message for Edit', function () {
    if(Cypress.env('subscriberNamedAs').includes('Subscriber')){
    cy.fixture(CustTCPdata).then((user) => {
      Tcpname1 = user.CustTCPProfileName
      
      cy.log(Tcpname1)
      tcpPage.getSuccess().should("contain", this.data5.confimationMessage.editSucesspart1)
    })
  }
  else{cy.log("New UI TCP") }
  })
  
  Then('Verify the Modification Request message', function () {
    if(Cypress.env('subscriberNamedAs').includes('Subscriber')){
    cy.TcpName1()
    cy.fixture(CustTCPdata).then((user) => {
        Tcpname1 = user.CustTCPProfileName
        
        cy.log(Tcpname1)
    tcpPage.getinstrumentlevelTCP().each(($row => {
        cy.wrap($row).within(function () {
          cy.get('td').each(($el => {
            if ($el.text() == Tcpname1) {
              cy.get('a').click({ force: true })
  
            }
          }))
        })
      }))
    })
      tcpPage.getApproveTCP1().click({ force: true })
    tcpPage.getSuccess().should("contain", this.data5.confimationMessage.editapproval1)
  }
  else{cy.log("New UI TCP") }
  })
  

  When('Navigate to Transfer Control Profile to Delete Details', function () {
    if(Cypress.env('subscriberNamedAs').includes('Subscriber')){
    cy.intercept('/CoreWeb/tcprf/tcpUserLevel*').as('getTCPPage')
    welcomePage.getTransferControlProfileSA().click()
    cy.wait('@getTCPPage')
    cy.TcpName1()
    cy.fixture(CustTCPdata).then((user) => {
        Tcpname1 = user.CustTCPProfileName
        
        cy.log(Tcpname1)
    cy.DeleteDetails(Tcpname1)
})
    }
    else{cy.log("New UI TCP") }
  })


  Then('Verify Success Message for TCP deletion', function () {
    if(Cypress.env('subscriberNamedAs').includes('Subscriber')){
    tcpPage.getMarketingError().should("contain", this.data5.confimationMessage.DeletionError)
    }
    else{cy.log("New UI TCP") } 
  })
  

//------------get random for copy scenario--------
function getRandomName() {
  name = "";
  var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
  for (var i = 0; i < 5; i++)
    name += possible.charAt(Math.floor(Math.random() * possible.length));
  return name;
}



//----------------------TCP copy-----------------
Then('Click on copy and enter all details', function () {
  if(Cypress.env('subscriberNamedAs').includes('Subscriber')){
  tcpPage.getCopyTCP().eq(0).click({ force: true })
  
  tcpPage.getProviderCopyTCP().select(1)
  tcpPage.getDomainCopyTCP().select(1)
  tcpPage.getCategoryCopyTCP().select(1)         
  tcpPage.getRegulatoryCopyTCP().select(1)
  let a1 = getRandomName()
  tcpPage.getProfileNameCopyTCP().clear({force:true}).type(a1, { force: true })
  
  tcpPage.getSubmitCopyTCP().click({ force: true })
  
  tcpPage.getReqtoAddIntiationMaster().contains('Addition of Customer Level TCP')
  }
  else{cy.log("New UI TCP") } 
})

  