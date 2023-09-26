/// <reference types="Cypress" />
/// <reference types = "Cypress-iframe"/>

//----------------Imports---------------------------------------------------------------------
import { And, Then, When } from "@badeball/cypress-cucumber-preprocessor";
import 'cypress-iframe';
import homePage from '.././../../../../../../../../support/pageObjects/homePage';
import loginPage from '.././../../../../../../../../support/pageObjects/loginPage';
import TransferControlProfile from '.././../../../../../../../../support/pageObjects/TransferControlProfile';
import MarketingProfile from '.././../../../../../../../../support/pageObjects/UserManagement/MarketingProfile';
import RegulatoryProfile from '.././../../../../../../../../support/pageObjects/UserManagement/RegulatoryProfile';
import ".././../../../../../../../../support/Utils/generic";
import ".././../../../../../../../../support/Utils/TransferControlProfileCommand";

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

var count =0


Then('Enter required Fields', function () {
     if(Cypress.env('subscriberNamedAs').includes('Subscriber')){
    cy.iframe().find("table > tbody > tr > td").invoke('text').then(($text) => {
        if ($text.includes(Cypress.env('WHSInsTCPName'))) 
        { 
            count=1
          cy.log("TCP exists")
         }
        else {
            count=2
    pageLogin.getiFrame()
   // cy.intercept('/CoreWeb/tcprf/tcpInstrumentLevel_loadProvidersNew.action').as('getNew')
    //tcpPage.getNew().click({ force: true })
    //cy.wait('@getNew')
    tcpPage.getprovider().select(this.data5.TransferControlProfile.Provider, { force: true })
    tcpPage.getdomain().select(this.data5.TransferControlProfile.Domain, { force: true })
    tcpPage.getcategory().select(this.data5.TransferControlProfile.Category, { force: true })
    //tcpPage.getgrade().select(this.data5.TransferControlProfile.Grade, { force: true })
    tcpPage.getpaymentinstrument().select(this.data5.TransferControlProfile.PaymentInstrument, { force: true })
    tcpPage.getwallettype().select(this.data5.TransferControlProfile.Wallet, { force: true })
    tcpPage.getgrade().select(this.data5.TransferControlProfile.Grade, { force: true })
    cy.TCPRandomName()
    tcpPage.getdescription().type(this.data5.TransferControlProfile.Description, { force: true })
  
        }
        tcpPage.getCreate().click({ force: true })
    })
     }
     else{
         cy.log("new ui")
     }
  })

  
  Then('Enter all required amount and count', function () {
       if(Cypress.env('subscriberNamedAs').includes('Subscriber')){
    if(count==2){
      pageLogin.getiFrame()
      cy.getcumulativeamountpertransaction()
      tcpPage.getUserminbalance().type(this.data5.TransferControlProfile.UserMinBal)
      tcpPage.getUsermaximumbalance().type(this.data5.TransferControlProfile.UserMaxBal)
      tcpPage.getUserMinTransactionAmount().type(this.data5.TransferControlProfile.MinTranAmount)
      tcpPage.getUserMaxTransactionAmount().type(this.data5.TransferControlProfile.MaxTranAmount)
      tcpPage.getMaxPercentageTransferAllowed().type(this.data5.TransferControlProfile.MaxPerAllowed)
      tcpPage.getNext().click({ force: true })
      cy.wait(3000)
      tcpPage.getNext().click({ force: true })
      welcomePage.getTransferControlProfile()
        .scrollIntoView()
    
    }
    else{
        cy.log("TCP exists")
    }
       }
       else{
           cy.log("new ui")
       }
    
  })
  Then('Verify Success Message', function () {
       if(Cypress.env('subscriberNamedAs').includes('Subscriber')){
    if(count==2){
      cy.fixture(filenameTCP).then((user) => {
        Tcpname = user.TcpProfileName
        cy.log(Tcpname)
        tcpPage.getsucessmessage().should("contain", this.data5.confimationMessage.successfulTcpIntiation + Tcpname + this.data5.confimationMessage.successpart2)
      })
    
    }
    else{
        cy.log("TCP exists")
    }
       }
       else{
           cy.log("new ui")
       }
  })
  
  And('Click on Instrument Level TCP', function () {
       if(Cypress.env('subscriberNamedAs').includes('Subscriber')){
    if(count==2){
      welcomePage.getTransferControlProfile().click()
           cy.intercept('/CoreWeb/tcprf/tcpInstrumentLevelAppr*').as('getTCP')
        welcomePage.getInstrumentLevelTCPApproval().click()
        cy.wait('@getTCP')
      
      tcpPage.getinstrumentlevelTCP().within(function () {
        cy.fixture(filenameTCP).then((user) => {
          Tcpname = user.TcpProfileName
          cy.log(Tcpname)
          cy.get("td").eq(1)
          cy.get("a").contains(Tcpname).click({ force: true })
        })
      })
      tcpPage.getApproveTCP().click({ force: true })    
    }
    else{
        cy.log("TCP exists")
    }
       }
       else{
           cy.log("new ui")
       }
  })
  Then('Verify Add Intiation Message', function () {
       if(Cypress.env('subscriberNamedAs').includes('Subscriber')){
    if(count==2){
      cy.TcpName()
      tcpPage.getReqtoAdd().should("contain", this.data5.confimationMessage.addIntiationPart1 + Tcpname + this.data5.confimationMessage.addIntiationPart2)
    }
    else{
        cy.log("TCP exists")
    }
       }
       cy.log("new ui")
  })
          
