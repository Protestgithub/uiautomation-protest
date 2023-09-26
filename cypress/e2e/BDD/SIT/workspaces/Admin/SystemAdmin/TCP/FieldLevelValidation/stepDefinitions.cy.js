/// <reference types="Cypress" />
/// <reference types = "Cypress-iframe"/>
import 'cypress-iframe'
import { Given, When, Then, And, Before } from "@badeball/cypress-cucumber-preprocessor";
import "../../../../../../../../support/Utils/generic";
import "../../../../../../../../support/Utils/TransferControlProfileCommand";
import TransferControlProfile from '../../../../../../../../support/pageObjects/TransferControlProfile';

const filenameTCP = 'userData/TCPdata.json'
const tcpPage = new TransferControlProfile()



When('Navigate to TCP and Click on Manage Transfer Level TCP',()=>{
    cy.wait(5000)

    welcomePage.getTransferControlProfile().scrollIntoView()
    welcomePage.getTransferControlProfile().click()
    //welcomePage.getManageInstrumentLevelTCP().click()

  })

   
And('click on delete',()=>{
cy.wait(3000)
  tcpPage.getdelet().eq(1).click()

  tcpPage.getyesbutton().click()
})