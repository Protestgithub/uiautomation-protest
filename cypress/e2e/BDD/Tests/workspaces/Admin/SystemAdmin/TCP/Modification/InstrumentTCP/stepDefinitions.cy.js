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
const filenameTCP = 'cypress/fixtures/userData/TCPdata.json'
const filenameTCP1 = 'userData/TCPdata1.json'
const CustTCPdata = 'userData/CustTCPdata.json'
const CustTCPdata1 = 'userData/CustTCPdata1.json'
const fileRegulatoryProfile = 'userData/Regulatory&MarketingProfile.json'
var Tcpname, Tcpname1, TcpnameSub, TcpnameSub1, RName

And('Click on Edit Button', function () {
   if(Cypress.env('subscriberNamedAs').includes('Subscriber')){
  cy.readFile(filenameTCP).then((data)=>{
    Tcpname1 = data.TcpProfileName
    cy.iframe().find('td.name').contains(Tcpname1).nextUntil("td.operations:nth-child(2)").click({multiple:true})
  })
}
else
{
    cy.log("new ui")
}
})

And("Click on 2nd Edit Button",function (){
   if(Cypress.env('subscriberNamedAs').includes('Subscriber')){
  tcpPage.getSecondEdit().click({ force: true })
   }
   else{
       cy.log("new ui")
   }
  
})

And('Click on Next', function () {
   if(Cypress.env('subscriberNamedAs').includes('Subscriber')){
     tcpPage.getNext2().click({ force: true })
   }
   else{
       cy.log("new ui")
   }
  })