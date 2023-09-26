/// <reference types="Cypress" />
/// <reference types = "Cypress-iframe"/>

//----------------Imports---------------------------------------------------------------------
import { Before, Then } from "@badeball/cypress-cucumber-preprocessor";
import 'cypress-iframe';
import homePage from '../../../../../../../../../support/pageObjects/homePage';
import loginPage from '../../../../../../../../../support/pageObjects/loginPage';
import TransferControlProfile from '../../../../../../../../../support/pageObjects/TransferControlProfile';
import MarketingProfile from '../../../../../../../../../support/pageObjects/UserManagement/MarketingProfile';
import RegulatoryProfile from '../../../../../../../../../support/pageObjects/UserManagement/RegulatoryProfile';
import "../../../../../../../../../support/Utils/generic";
import "../../../../../../../../../support/Utils/TransferControlProfileCommand";

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



Then('Add Customer level TCP', function () {
     if(Cypress.env('subscriberNamedAs').includes('Subscriber')){
    cy.wait(2000)
  cy.iframe().find("table > tbody > tr > td").invoke('text').then(($text) => {
    if ($text.includes(Cypress.env('TCPName'))) {
      cy.log("Profile exists")
      count = 1
    }
    else {
      count = 2
      tcpPage.getNew().should('be.visible').click({ force: true })
      tcpPage.getprovider().select(this.data25.TransferControlProfile.Provider, { force: true })
      tcpPage.getdomain().select(this.data25.TransferControlProfile.Domain, { force: true })
      tcpPage.getcategory().select(this.data25.TransferControlProfile.Category, { force: true })
      cy.fixture(fileRegulatoryProfile).then((user) => {
        RName = user.RegulatoryProfileName
        cy.log(RName)
        cy.waitUntil(()=>{
          return cy.iframe().find('#registrationType').select(RName, { force: true })
          })
      })
      cy.TCPMasRandomName()
      tcpPage.getdescription().type(this.data25.TransferControlProfile.Description)
      tcpPage.getadd().click({ force: true })
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
      cy.fixture(CustTCPdata).then((user) => {
        Tcpname1 = user.CustTCPProfileName
        cy.log(Tcpname1)
        tcpPage.getReqtoAddIntiationMaster().should("contain", this.data25.confimationMessage.sucessMasterTcpIntiation + Tcpname1 + this.data5.confimationMessage.successpart2Master)
      })
    }
  })
     }
     else{
         cy.log("new UI")
     }

})

Then('Approve the TCP', function () {
     if(Cypress.env('subscriberNamedAs').includes('Subscriber')){
  if (count > 1) {
    cy.fixture(CustTCPdata).then((user) => {
      Tcpname1 = user.CustTCPProfileName
      cy.log(Tcpname1)
    })
    let shouldStop = false

    tcpPage.getinstrumentlevelTCP().each(($row => {
      cy.then(() => {
        if (shouldStop) {
          return
        }
        cy.wrap($row).within(function () {
          cy.get('td').each(($el => {
            if ($el.text() == Tcpname1) {
              cy.get('a').click({ force: true })

            }
            else {
              cy.log("TCP already exists")
            }
          }))
        })
      })
    }))
    tcpPage.getApproveTCP1().click({ force: true })
    cy.fixture(CustTCPdata).then((user) => {
      Tcpname1 = user.CustTCPProfileName
      cy.log(Tcpname1)
      tcpPage.getReqtoAddMaster().should("contain", this.data25.confimationMessage.addIntiationPart1Master + Tcpname1 + this.data25.confimationMessage.addIntiationPart2Master)
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




Then('Approve the TCP2', function () {
     if(Cypress.env('subscriberNamedAs').includes('Subscriber')){
  
    cy.fixture(CustTCPdata).then((user) => {
      Tcpname1 = user.CustTCPProfileName
      cy.log(Tcpname1)
    })
    let shouldStop = false

    tcpPage.getinstrumentlevelTCP().each(($row => {
      cy.then(() => {
        if (shouldStop) {
          return
        }
        cy.wrap($row).within(function () {
          cy.get('td').each(($el => {
            if ($el.text().includes(Cypress.env('TcpName')) ){
              cy.get('a').click({ force: true })

            }
            
          }))
        })
      })
    }))
    tcpPage.getApproveTCP1().click({ force: true })
    // cy.fixture(CustTCPdata).then((user) => {
    //   Tcpname1 = user.CustTCPProfileName
    //   cy.log(Tcpname1)
    //   tcpPage.getReqtoAddMaster().should("contain", this.data25.confimationMessage.addIntiationPart1Master + Tcpname1 + this.data25.confimationMessage.addIntiationPart2Master)
    // })
     }
     else{
         cy.log("New UI")
     }
})





