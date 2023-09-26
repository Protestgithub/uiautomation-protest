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

//------------------------------------Add Wallet------------------------------------------------------

When('Navigate Multiple Wallet Management and Click on Add Wallet', function () {
  WalletManagementPage.getMultipleWalletManagement().click()
 cy.intercept('/CoreWeb/mfs/multipleWalletMgmt_input.action*').as('getWallet')
  WalletManagementPage.getAddWallet().click()
 cy.wait('@getWallet')
})
And('Enter Wallet name and click on Save', function () {
  
  cy.readFile(filename).then((data) => {
    let walletName = data.WalletName
    WalletManagementPage.getWalletName().type(walletName, { force: true })
  })
  WalletManagementPage.getSaveButton().click({ force: true })
})

And('Verify the success message text', function () {
  WalletManagementPage.getviewWallet().should('contain', this.data2.personalInfo.walletmsg)
})


//------------------------------------- Modify Wallet ----------------------------------------------------------------

When('Navigate Multiple Wallet Management and Click on Modify Wallet', function () {
  WalletManagementPage.getMultipleWalletManagement().click()
  WalletManagementPage.getModifyWallet().click()
})

And('Click on Added Wallet and Click on Update', function () {
  cy.wait(2000)
  WalletManagementPage.getModify().click({ force: true })
  cy.intercept(this.data20.UpdateBtn).as('mwallet')
  WalletManagementPage.getUpdateButton().click({ force: true })
  cy.wait('@mwallet', { timeout: 30000 })
  cy.intercept(this.data20.SaveWal).as('updatewallet')
  WalletManagementPage.getSaveWallet().click({ force: true })
  cy.wait('@updatewallet', { timeout: 30000 })
})
//----------------------
var filename1 = 'cypress/fixtures/WalletManagementdata.json'


//--------------------------------------add wallet on deleted wallet name-----------------

And('Enter Wallet name and click on save1', function () {

  WalletManagementPage.getWalletName().type(getRandomName(), { force: true })
  WalletManagementPage.getSaveButton().click({ force: true })
  
  cy.writeFile(filename1, { WalletName: name })
//--------------------------number generated with new wallet msg copy part-----------
  WalletManagementPage.getSuccessMessage().then((temp) => {
    const SMessage = temp.text()
    cy.readFile(filename1).then((data) => {
      data.AddWalletSuccessMsg = SMessage                      
      cy.writeFile(filename1, data)
    })
  })
//---------------------------------------end-------------------------------
  

})



And('Click on Delete Wallet', function () {
  WalletManagementPage.getDeleteWallet().click({force:true})
  
  cy.getDeleteWallet(filename)
  
  WalletManagementPage.getDeleteButton1().click({force:true})
  
  WalletManagementPage.getConfirmDelete1().click({force:true})
  
  WalletManagementPage.getSuccessMessage().contains('deleted from system')
})


And('Navigate Multiple Wallet Management and Click on Add Wallet on deleted wallet name', function () {
  WalletManagementPage.getMultipleWalletManagement().click()
 cy.intercept('/CoreWeb/mfs/multipleWalletMgmt_input.action*').as('getWallet')
  WalletManagementPage.getAddWallet().click()
 cy.wait('@getWallet')
  
  cy.iframe().find('#multipleWalletMgmt_confirmSaveWallet > table > tbody > tr > td').invoke('text').then(($text) => {
    if ($text.includes(Cypress.env('walletName'))) 
    {
        cy.log("Wallet Exists")
    }
    else{
      WalletManagementPage.getWalletName().type(Cypress.env("walletName"), { force: true })
      WalletManagementPage.getSaveButton().click({ force: true })
      cy.readFile(filename).then((data) => {
        data.WalletName = name
        cy.writeFile(filename, data)
      })
    }
  })
  
  WalletManagementPage.getSuccessMessage().contains('successful')
})


//---------------------------------number generated with new wallet (TC_31)---------------------
Then('Check that Success message has number or not', function(){
  cy.readFile(filename1).then((data) => {
    let m = data.AddWalletSuccessMsg                    
    const n = m.replace(/\D/g,'')
    cy.log(n)
	cy.readFile(filename1).then((data) => {
      data.WalletId = n
      cy.writeFile(filename1, data)
    })
    const len = n.length
    cy.log(len)
	expect(len).to.eq(2)
  })
})

//--------------------------------------------------------------------

//--------------------------------------view associated servises with wallet--------------

Then('Check that user is able to view associate service with wallet', function() {
cy.wait(2000)

 cy.getwalletid()
cy.get('.wwFormTableC>tbody>tr>td.tabhead').contains('Provider Name')

})


//------------------------------------modify wallet name---------------------------




Then('Check that user is able to Modify the Wallet name', function () {
  cy.getModifyWallet()
  cy.wait(2000)

  WalletManagementPage.getUpdateButton().click({force:true})
  cy.wait(2000)
  let a1 = getRandomName()
  WalletManagementPage.getModifyWalletName().clear().type(a1, { force: true })
  cy.readFile(filename1).then((data) => {
    data.WalletName = a1                      
    cy.writeFile(filename1, data)
  })
  WalletManagementPage.getSaveWallet().click({force:true})
  cy.wait(2000)
  WalletManagementPage.getSuccessMessage().contains('successful')
  
})
When('Navigate Multiple Wallet Management and Click on View Wallet', function () {
  WalletManagementPage.getMultipleWalletManagement().click()
  WalletManagementPage.getViewWallet().click()
  
})


//-------------------------------------Associate ----------------------------------------------//
When('Navigate to MFS provider Wallet Type Master and click modify delete Wallet',function(){
  welcomePage.getMFSProviderwalletType().click()
  welcomePage.getMFSModifyWallet().click()
})
And('Select the MFS that needs to be Associated Or Deassociated',function(){
  cy.wait(2000)
  welcomePage.getmfs1().click({force:true})
  welcomePage.getmfsmodify().click()
})
Then('Associate MFS',function(){
  cy.wait(2000)
  welcomePage.getmodify().click()
  cy.wait(2000)
  welcomePage.getselectall().click()
  welcomePage.getsubmit().click()
  cy.wait(5000)
  welcomePage.getmessage().should('have.text','Wallet Mapping Updated Successfully')
})

