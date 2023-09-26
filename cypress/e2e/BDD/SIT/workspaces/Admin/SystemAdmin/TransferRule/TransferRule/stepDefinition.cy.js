/// <reference types="Cypress" />
/// <reference types = "Cypress-iframe"/>

//----------------Imports---------------------------------------------------------------------
import { And, Then, When } from "@badeball/cypress-cucumber-preprocessor";
import 'cypress-iframe';
import homePage from '../../../../../../../../support/pageObjects/homePage';
import Approval from '../../../../../../../../support/pageObjects/TransferRules/Approval';
import O2C from '../../../../../../../../support/pageObjects/TransferRules/O2C';
import TransferRulePage from '../../../../../../../../support/pageObjects/TransferRules/TransferRulePage';
import "../../../../../../../../support/Utils/generic";


//----------------Object Declaration----------------------------------------------------------

const welcomePage = new homePage()
const transferrulepage = new TransferRulePage()
var DataFile = "cypress/fixtures/userData/Domain&CAT.json"

//---------------------------------------------------------------------------------------------
And('Check for the Drop down values' , function() {
    cy.iframe().find('#payerGradeCode').should('contain', 'ALL')
   
    cy.iframe().find('#payeeGradeCode').should('contain', 'ALL')

})
//-----------------------------------------------------------------------------------------------
Then('Check for the Transfer Type options' , function() {
 cy.iframe().find('#trRule_confirmCoU_transferType')
 .should('contain', 'Transfer')
 .should('contain', 'Sale')

})
//---------------------------------------------------------------------------------------------
Then('check for the  direct transfer Radio buttons' , function() {

cy.waitUntil(()=> {
    return cy.iframe().find('[name="directTransferAllowed"]').eq(0).should('be.visible')
      })

cy.waitUntil(()=> {
    return cy.iframe().find('[name="directTransferAllowed"]').eq(1).should('be.visible')
      })
})

//----------------------------------------------------------------------------------------------
Then('check for the Controlled Transfer Level', function () {
    cy.waitUntil(()=> {
    return cy.iframe().find('[name="controlledTransferLevel"]').should('be.visible')
    })
})
//----------------------------------------------------------------------------------------------
Then('Check for the Min Transfer MAx Transfer and Transfer Amount' , function(){
  cy.waitUntil(() => {
    return cy.iframe().find('[for="trfAmtMin"]').should('be.visible')
    })
  cy.waitUntil(() => {
    return cy.iframe().find('[for="trfAmtMax"]').should('be.visible')
    })
  cy.waitUntil(() => {
    return cy.iframe().find('[for="trfAmtMultiple"]').should('be.visible')
    })

})

//------------Min---------------------------------------------------------------

const uuid = () => Cypress._.random(0, 1e6)
const id = uuid()
const testname = `testname${id}`

And('Enter the Values for Minimum Transfer Amount' ,  function () {
 
  transferrulepage.getMinimumTransferAmount().type(testname)
  cy.intercept(this.data20.Submitbttn2).as('submittransferrule')
  transferrulepage.getSubmitbttn2().click()
  cy.wait('@submittransferrule',{timeout:30000})
})
Then('Assert the error Message for Min Transfer' , function() {
 
 transferrulepage.getErrorMessage().contains(this.data13.MinTransferError)
transferrulepage.getMinimumTransferAmount().clear()

})
//-------Max-------------------------------------------------------------------------------
And('Enter the Values for Maximum Transfer Amount' , function () {
 transferrulepage.getMaximumTransferAmount().type(testname)
 cy.intercept(this.data20.Submitbttn2).as('submittransferrule')
 transferrulepage.getSubmitbttn2().click()
  cy.wait('@submittransferrule',{timeout:30000})
})

Then('Assert the error Message for Max Transfer' , function() {
 
    transferrulepage.getErrorMessage().contains(this.data13.MaxTranferError)
transferrulepage.getMaximumTransferAmount().clear()

})
//-------Transfer--------------------------------------------------------------------------------
And('Enter the Values for Transfer Amount Multiple Of' , function () {
  transferrulepage.getTransferamount().type(testname)
  cy.intercept(this.data20.Submitbttn2).as('submittransferrule')
  transferrulepage.getSubmitbttn2().click()
   cy.wait('@submittransferrule',{timeout:30000})
 })
 
 Then('Assert the error Message for Transfer Amount Multiple Of' , function() {
 
      transferrulepage.getErrorMessage().contains(this.data13.TransferamountError)
 transferrulepage.getTransferamount().clear()
 
 })

//--------------------------------------------------------------------------------------------

Then('Click on Reset button and view details' , function() {
  transferrulepage.getMinimumTransferAmount().type(testname)
  transferrulepage.getTransferamount().type(testname)
  transferrulepage.getReset().click({ force:true })

})
//----------------------------------------------------------------------------------------------

Then('Click on Back button to see previuos page' , function () {
cy.wait(5000)
  cy.intercept('/CoreWeb/trfrules/trList_transferRuleAddChecks.action').as('Backbtn')
  transferrulepage.getBackBtn().click()
  cy.wait('@Backbtn')
  transferrulepage.getSubmitbttn().should('be.visible')
})



//----------------------------------------------------------------------------------------------


Then('Check for the Approval list' , function (){
    cy.waitUntil(()=> {
      return cy.iframe().find('tr>td[class="tabcenter"]').eq(0).should('be.visible')
      })
          
})

//---------------------------------------------------------------------------------------------

Then('Check for the Transfer rule list', function() {
  cy.waitUntil(()=> {
    return cy.iframe().find('td[class="tabhead"]').eq(0).should('be.visible')
    })

})

//---------------------------------------------------------------------------------------------
Then('Check the existing rule Status', function () {
  cy.waitUntil(()=> {
    return cy.iframe().find('td[class="tabcol"]').eq(24).should('be.visible' , 'Active')
    })

})

//-----------------------------------------------------------------------------------------------
Then('Click on View Btn' , function() {
  cy.intercept(this.data20.ViewOption).as('viewtransferrule')
  transferrulepage.getViewOption().click()
  cy.wait('@viewtransferrule', { timeout: 60000 })
  cy.waitUntil(()=> {
  return cy.iframe().find('[for="trView_serviceName"]').should('be.visible')
  })
})

//---------------------------------------------------------------------------------------------

Then('Click on Edit link is clikable' , function() {
  cy.intercept(this.data20.EditOpt).as('edittransferrule')
  transferrulepage.getEditOption().click()
  cy.wait('@edittransferrule', { timeout: 60000 })
  cy.waitUntil(()=> {
  return cy.iframe().find('[for="trRule_confirmCoU_statusId"]').should('be.visible')
  })
})




Then('Assert the table', function() {

  transferrulepage.getTable().should('be.visible')

})


//----------4-08-2023----------------------------------------------------------------------


And('Select the Service Name and Select from details for C2C.', function () {
    
  transferrulepage.getServiceName().select(this.data13.TransferRuleForC2C.Servicename, { force: true })
  //cy.mfsprovider()
  transferrulepage.getFromMFSProvider().select(this.data13.TransferRuleForC2C.FromMFSprovider, { force: true })
  transferrulepage.getFromeDomain().select(this.data13.TransferRuleForComm.FromDomain, { force: true })
  transferrulepage.getFromPaymentInstrument().select(this.data13.TransferRuleForC2C.FromPaymentInstrument, { force: true })
  transferrulepage.getFromWallettype().select(this.data13.TransferRuleForC2C.FromWallet, { force: true })
})

And('Select the To details for Initiaion of C2C', function () {
    
  transferrulepage.getToMFSProvider().select(this.data13.TransferRuleForC2C.ToMFSprovider, { force: true })
  transferrulepage.getToDomain().select(this.data13.TransferRuleForComm.FromDomain, { force: true })
  transferrulepage.getToPaymentInstrument().select(this.data13.TransferRuleForC2C.ToPaymentInstrument, { force: true })
  transferrulepage.getToWallettype().select(this.data13.TransferRuleForC2C.Towallet2, { force: true })
  transferrulepage.getSubmitbttn().click({ force:true })
  
})


And('Select the From & To category details for C2C', function () {
cy.wait(3000)
transferrulepage.getFromCategory().select("Merchant", { force: true })
cy.wait(3000)
transferrulepage.getToCategory().select("Head Merchant", { force: true })
  
})



When('Click on Add Transfer Rule button for C2C Service', function () {
  cy.intercept(this.data20.AddToTransferb).as('addtransferrule')
  transferrulepage.getAddToTransferbttn().click()
  cy.wait('@addtransferrule', { timeout: 30000 })
  cy.wait(2000)

  cy.iframe().find("div#page.container").then(($body) => {
        //   // synchronously query for element
        let a = $body.text()
        //let b = $body.find(".errorMessage").length
        cy.log(a)
        // cy.log(b)
        if (a.includes('Please provide the details:')) {
            transferrulepage.getStatus().select(this.data13.TransferRuleForC2C.Status, { force: true })
            transferrulepage.getTransferType().select(this.data13.TransferRuleForC2C.TransferType, { force: true })
            transferrulepage.getGeographicalDomain().select(this.data13.TransferRuleForC2C.GeographicalDomain, { force: true })
            transferrulepage.getDirectTransferAllowed().check()
            transferrulepage.getBypassAllowed().check()
            
            transferrulepage.getSubmitbttn2().click()
            cy.wait(2000)
            transferrulepage.getConfirmbttn().click()
            cy.wait(2000)
            transferrulepage.getAssertMessage().should('be.visible')
            cy.wait(2000)
            transferrulepage.getAssertMessage().then((val) => {
              let q = val.text()
              cy.log(q)
              let a = q.split(':')
              let b = a[1].trim()
              cy.log(b)
              cy.readFile(DataFile).then((data) => {
                data.TransferRuleIDC2C2 = b
                cy.writeFile(DataFile, data)
              })
            })
        }
        else {
            count=1
            cy.wait(2000)
            transferrulepage.getErrorMessage().contains("already")
            cy.getTransferDelete(DataFile)
           
            transferrulepage.getDeleteoption()
          
        }
    })

})



And('Select rule and approval for Inverse C2C2', function () {
    if(count=1){
        cy.log("TR exists")
    }
    else{
    cy.iframe().find('div .wwFormTableC').each(($elm) => {

        const a = $elm.text()

        if (a.includes('C2C')) {

            cy.getTransferApprovalC2C()
            cy.wait(2000)
            transferruleapprovalpage.getSubmitbttn().click({ force: true })
        }
      
        else {
            cy.log(msg)
        }
    })
}
})


Then('Then Assert the Error Message that the Rule is not defined', function() {
cy.waitUntil(()=> {
  return cy.iframe().find('.errorMessage').eq(1).contains(this.data13.TransferRuleDefinerror)

})
})
