class O2C {

    getDomainName() {
        return cy.iframe().find('Select[id="domainCode"]')
    }
    getCategoryName() {
        return cy.iframe().find('Select[id="categoryCode"]')
    }
    getMFSprovider() {
        return cy.iframe().find('Select[id="providerId"]')
    }
    getLinkedBank() {
        return cy.iframe().find("Select[id='linkedWalletBankId']")
    }
    getPaymentInstrument() {
        return cy.iframe().find('Select[id="paymentInstrumentId"]')
    }
    getFirstApprovalLimit() {
        return cy.iframe().find('#firstLimit')
    }
    getSubmitbtn() {
        return cy.iframe().find('#o2cTrf_confirm_button_submit')
    }
    getconfirmbtn() {
        return cy.iframe().find('#o2cTrf_save_button_confirm')
    }
    getAmount() {
        return cy.iframe().find('input[name="trfAmtMin"]')
    }
    getMinimumTransferAmount1() {
        return cy.iframe().find('input[name="trfAmtMin"]')
    }

    geterrormsg1() {
        return cy.iframe().find('[class="errorMessage"]')
    }
    getMaximumTransferAmount1(){
        return cy.iframe().find('input[name="trfAmtMax"]')
      }
    
    geterrormsg2(){
        return cy.iframe().find('[class="errorMessage"]')
      }
      getTransferAmountMultipleof(){
        return cy.iframe().find('#trfAmtMultiple')
      }
}
export default O2C