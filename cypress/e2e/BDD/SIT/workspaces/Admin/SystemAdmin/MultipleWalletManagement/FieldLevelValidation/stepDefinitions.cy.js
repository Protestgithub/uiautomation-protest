/// <reference types="Cypress" />
/// <reference types = "Cypress-iframe"/>

//----------------Imports---------------------------------------------------------------------
import { And, Then, When } from "@badeball/cypress-cucumber-preprocessor";
import 'cypress-iframe';
import walletManagement from '../../../../../../../../support/pageObjects/WalletManagement/walletManagement';
import "../../../../../../../../support/Utils/BankCommands";
import "../../../../../../../../support/Utils/generic";
import homePage from "../../../../../../../../support/pageObjects/homePage";

//----------------Object Declaration-----------------------------------------------------------------

const WalletManagementPage = new walletManagement()
var filename = 'cypress/fixtures/userData/Bank&Walletdata.json'
const welcomePage = new homePage()

function getRandomName() {
  name = "";
  var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
  for (var i = 0; i < 5; i++)
    name += possible.charAt(Math.floor(Math.random() * possible.length));
  return name;
}





And('Select the wallet to be deleted', () => {
  cy.wait(3000)
  //Cypress.Commands.add('getTransferApproval',(filename) =>
  cy.readFile('cypress/fixtures/userData/Bank&Walletdata.json').then((user) => {
    let Name = user.WalletName
    let shouldStop = false
    cy.iframe().find('.wwFormTableC>tbody>tr').each(($row => {
      cy.then(() => {
        if (shouldStop) {
          return
        }
        cy.wrap($row).within(function () {
          cy.get('td').each(($el => {
            cy.log($el.text())

            if ($el.text().includes(Name)) {
              cy.get('[type="radio"]').click({ force: true })
              cy.wait(3000)
              shouldStop = true
            }
          }))
        })
      })
    }))
  })

  WalletManagementPage.getDeleteButton1().click()

  //)
})
Then('Click on Confirm wallet button', () => {
  cy.wait(3000)

  WalletManagementPage.getconfirmdeletewallet().click()
})



Then('Enter Wallet name and click on Save2.', function () {
  WalletManagementPage.getWalletName().type('@bha#')
  WalletManagementPage.getSaveButton().click({ force: true })
})

And('Assert error message', () => {
  cy.wait(3000)
  WalletManagementPage.getErrorMessage1().contains('Wallet Name can be alphanumeric only')
})

When('Click on Multiple Wallet Management > Delete Wallet', () => {
  WalletManagementPage.getMultipleWalletManagement().click()
  WalletManagementPage.getDeleteWallet().click()

})




Then('Enter Wallet Name and click on save button', () => {
  cy.wait(3000)
  WalletManagementPage.getWalletName().type(getRandomName(), { force: true })
  WalletManagementPage.getSaveButton().click({ force: true })

})


And('Assert the error message', () => {
  cy.wait(3000)
  WalletManagementPage.getErrorMessage1().contains('Limit of number of wallet creation in single calendar day already exceeded')
})
