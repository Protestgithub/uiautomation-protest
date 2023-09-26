/// <reference types="Cypress" />
/// <reference types = "Cypress-iframe"/>

//----------------Imports---------------------------------------------------------------------
import { And, Before, Then, When } from "@badeball/cypress-cucumber-preprocessor";
import 'cypress-iframe';
import homePage from '../../../../../support/pageObjects/homePage';
import loginPage from '../../../../../support/pageObjects/loginPage';
import TransferControlProfile from '../../../../../support/pageObjects/TransferControlProfile';
import "../../../../../support/Utils/generic";
import "../../../../../support/Utils/TransferControlProfileCommand";

//----------------Object Declaration----------------------------------------------------------

const pageLogin = new loginPage()
const welcomePage = new homePage()
const tcpPage = new TransferControlProfile()
var TcpDelete

//---------------------TCP DELETION---------------------------


Then('Click on TCP delete icon', function () {

    if(Cypress.env('subscriberNamedAs').includes('Subscriber')){
  cy.TcpDeletion()
 cy.TCPDeleteDetails(TcpDelete)
    }
    else{
        cy.log("new ui")
    }
   
})