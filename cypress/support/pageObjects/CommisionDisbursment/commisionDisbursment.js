class commisionDisbursment {
    getCommisionDisbursmentProcess() {
        return cy.get('[data-testid="menu.commdis"]')
    }

    getCommisionDisbursment() {
        return cy.get('[data-testid="menu.commdis"] > ul > li:nth-child(1) > a')

    }

    getCDMFSProvider() {
        return cy.iframe().find('select[id="commissionDisbursementAction_validateDetails_providerId"]> option')
    }

    getCDMFSProviders() {
        return cy.iframe().find('select[id="commissionDisbursementAction_validateDetails_providerId"]')
    }

    getCDMSISDN() {
        return cy.iframe().find('input[name="msisdn"]')
    }

    getCDButtonSubmit() {
        return cy.iframe().find('input[id="commissionDisbursementAction_validateDetails_button_submit"]')
    }

    getCDCheckBox() {
        return cy.iframe().find('input[type="checkbox"][name="check1"]')
    }

    getCDDownloadCSVButton() {
        return cy.iframe().find('input[id="commissionDisbursementAction_input_button_exportToCSVForCommissionDisbursement"]')
    }


    //--------------------Bulk Payout Tool------------------

    getBulkPayoutTool() {
        return cy.get('[data-testid="menu.bulkpay"]')
    }

    getBulkPayoutInitiate() {
        return cy.get('[data-testid="menu.bulkpay"] > ul > li:nth-child(1) > a')

    }

    getFileUpload() {
        return cy.iframe().find('input[type="file"]')
    }

    getFileUploadSubmitButton() {
        return cy.iframe().find('.btn.waves-effect.waves-light.submitBtn')
    }
    getDomain(){
            return cy.iframe().find('select[id="domainCode"]')

                }
    getCategory(){
            return cy.iframe().find('select[id="categoryCode"]')
    
            }

    getUploadCSVAlertSuccess() {
        return cy.iframe().find('.alert.alert-success')

    }

    getComissionWithdrawInitiate() {
        return cy.get('[data-testid="menu.commdis"] > ul > li:nth-child(2) > a')
    }
    getDownloadComissionwithdraw() {
        return cy.iframe().find('[id="commissionDisbursementAction_input_button_exportToCommissionWithdraw"]')
    }


}
export default commisionDisbursment