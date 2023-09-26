/// <reference types="Cypress" />
/// <reference types = "Cypress-iframe"/>

//----------------Imports---------------------------------------------------------------------
import { And, Before, Then, When } from "@badeball/cypress-cucumber-preprocessor";
import 'cypress-iframe';
import homePage from '../../../../../../../../../support/pageObjects/homePage';
import loginPage from '../../../../../../../../../support/pageObjects/loginPage';
import TransferControlProfile from '../../../../../../../../../support/pageObjects/TransferControlProfile';
import MarketingProfile from '../../../../../../../../../support/pageObjects/UserManagement/MarketingProfile';
import RegulatoryProfile from '../../../../../../../../../support/pageObjects/UserManagement/RegulatoryProfile';
import "../../../../../../../../../support/Utils/generic";
import  "../../../../../../../../../support/Utils/TransferControlProfileCommand";

//----------------Object Declaration----------------------------------------------------------

const pageLogin = new loginPage()
const welcomePage = new homePage()
const tcpPage = new TransferControlProfile()
const uid1 = () => Cypress._.random(1e2)
const Id = uid1()
const profilename = `testname${id}`
var RegulatoryFile = 'cypress/fixtures/userData/Regulatory&MarketingProfile.json'
var SubProfileName = 'cypress/fixtures/profileData/Profile.json'
const MarketingProfile1 = new MarketingProfile()
const RegulatoryProfile1 = new RegulatoryProfile()
var number
const uid = () => Cypress._.random(0, 1e6)
const id = uid()
const uuid12 = () => Cypress._.random(1e8)
var LoginId1
LoginId1 = uuid12()
const filenameTCP = 'userData/TCPdata.json'
const filenameTCP1 = 'userData/TCPdata1.json'
const CustTCPdata = 'userData/CustTCPdata.json'
const CustTCPdata1 = 'userData/CustTCPdata1.json'
const fileRegulatoryProfile = 'userData/Regulatory&MarketingProfile.json'
var Tcpname, Tcpname1, TcpnameSub, TcpnameSub1, RName
const ITCP = "userData/TCPdata.json"
const ITCP1 = "userData/TCPdata1.json"
let count = 0

//--------------------------------------TCP creation---------------------------------------------------

When('Navigate to Transfer Control Profile', function () {
    if(Cypress.env('subscriberNamedAs').includes('Subscriber')){
          cy.intercept('/CoreWeb/tcprf/*').as('getTCP')
  welcomePage.getTransferControlProfileSA().click()
  cy.wait('@getTCP',{timeout:10000})
    }
else{
    cy.log("New UI")
}
})

And('Click on New Button for Subscriber', function () {
    if(Cypress.env('subscriberNamedAs').includes('Subscriber')){
  cy.iframe().find("table > tbody > tr > td[class='name']").invoke('text').then(($text) => {
    if ($text.includes(Cypress.env('SubTCPName'))) {
      cy.log("Profile exists")
      count = 1
    }
    else {
      count = 2
      tcpPage.getNew().should('be.visible').click({ force: true })
      tcpPage.getprovider().select(this.data25.TransferControlProfile.Provider, { force: true })
      if(Cypress.env('subscriberNamedAs').includes('Subscriber')){
        tcpPage.getdomain().select(this.data25.TransferControlProfile.Domain1, { force: true })
        tcpPage.getcategory().select(this.data25.TransferControlProfile.Category1, { force: true })
      }
      else{
        tcpPage.getdomain().select(this.data25.TransferControlProfile.Domain2, { force: true })
        tcpPage.getcategory().select(this.data25.TransferControlProfile.Category2, { force: true })
      }
      
      
      cy.fixture(fileRegulatoryProfile).then((user) => {
        RName = user.RegulatoryProfileName
        cy.log(RName)
        cy.waitUntil(() => {
          return cy.iframe().find('#registrationType').select(RName, { force: true })
        })
      })
      cy.TCPMasRandomNameSub()
      tcpPage.getdescription().type(this.data25.TransferControlProfile.Description)
      cy.intercept('/CoreWeb/tcprf/*').as('getTCP')
      tcpPage.getadd().click({ force: true })
      cy.wait('@getTCP',{timeout:10000})
      const uuid = () => Cypress._.random(1e3)
      number = uuid()
      tcpPage.getAmount().each((e1, index, list) => {
        cy.wrap(e1).type(number)
      })
      tcpPage.getcountmaster().each((e1, index, list) => {
        cy.wrap(e1).type(number)
      })
      tcpPage.getusermaxbalanceMaster().type(this.data25.TransferControlProfile.UserMaxBal)
      tcpPage.getNextEdit().click({ force: true })
      tcpPage.getConfirmEdit().click({ force: true })
      cy.fixture(CustTCPdata1).then((user) => {
        TcpnameSub1 = user.CustTCPProfileNameSub
        cy.log(TcpnameSub1)
        tcpPage.getReqtoAddIntiationMaster().should("contain", this.data25.confimationMessage.sucessMasterTcpIntiation + TcpnameSub1 + this.data5.confimationMessage.successpart2Sub)
      })
    }
  })
    }
    else{
    cy.log("New UI")
}
    
})



Then('Approve the TCP1', function () {
     if(Cypress.env('subscriberNamedAs').includes('Subscriber')){
  if (count > 1) {
    cy.fixture(CustTCPdata1).then((user) => {
      TcpnameSub1 = user.CustTCPProfileNameSub
      cy.log(TcpnameSub1)
    })
    tcpPage.getinstrumentlevelTCP().each(($row => {
      cy.wrap($row).within(function () {
        cy.get('td').each(($el => {
          if ($el.text() == TcpnameSub1) {
            cy.get('a').click({ force: true })

          }
        }))
      })
    }))
    tcpPage.getApproveTCP1().click({ force: true })
    cy.fixture(CustTCPdata1).then((user) => {
      TcpnameSub1 = user.CustTCPProfileNameSub
      cy.log(TcpnameSub1)
      tcpPage.getReqtoAddMaster().should("contain", TcpnameSub1)
    })
  }
  else {
    cy.log("Profile Exists")
  }
     }
     else{
          cy.log("New UI")
     }

})



