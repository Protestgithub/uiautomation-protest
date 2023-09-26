class IdenticalTransaction {

    getIdenticalTransaction() {
        return cy.get('[data-testid="test-IDTXNCRT"]')
    }

    getServiceType() {
        return cy.iframe().find('select[id="identicalTxnCriteria_input_service"]> option')
    }

    getServiceTypes() {
        return cy.iframe().find('select[id="identicalTxnCriteria_input_service"]')
    }

    getSubmitButton() {
        return cy.iframe().find('#identicalTxnCriteria_input_button_save')

    }

    getTimeIntervals() {
        return cy.iframe().find('#identicalTxnCriteria_forward_timeInterval')
    }

    getActionOnTxn() {
        return cy.iframe().find('select[id="identicalTxnCriteria_forward_actionOntxn"]> option')
    }

    getActionOnTxns() {
        return cy.iframe().find('select[id="identicalTxnCriteria_forward_actionOntxn"]')
    }

    getDeleteButton() {
        return cy.iframe().find('#identicalTxnCriteria_forward_delete')
    }

    getConfMessage() {
        return cy.iframe().find('[class="errorMessage"]')
    }
    //------------------------------
    getSaveButton() {
        return cy.iframe().find('#identicalTxnCriteria_forward_update')
    }
    getConfirmButtonAfterSave() {
        return cy.iframe().find('#identicalTxnCriteria_saveConfirm_submit')

    }
    getSpanActionMessage() {
        return cy.iframe().find('.actionMessage')

    }

    //-----------------------SIT------------------------------------

    getActionOnIT() {
        return cy.iframe().find('[name="actionOntxn"]')
    }

    geterrormessage() {
        return cy.iframe().find('.errorMessage')
    }
    getserviceType() {
        return cy.iframe().find('#identicalTxnCriteria_input_service')
    }
    getBackButton() {
        return cy.iframe().find('[value="Back"]')
    }
    getTransactionAmount() {
        return cy.iframe().find('[name="selectedCheckbox"]')
    }
    getCurrency() {
        return cy.iframe().find('[name="selectedCheckbox"]')
    }
    getpayerwalletid() {
        return cy.iframe().find('[name="selectedCheckbox"]')
    }
    getpayeewalletid() {
        return cy.iframe().find('[name="selectedCheckbox"]')
    }
    getAssertpayeeidtype() {
        return cy.iframe().find('#identicalTxnCriteria_forward_selectedCheckbox')
    }
    getAssertpayeridtype() {
        return cy.iframe().find('#identicalTxnCriteria_forward_selectedCheckbox')
    }

    getserviceType() {
        return cy.iframe().find('#identicalTxnCriteria_input_service')
    }

    geterrormessage() {
        return cy.iframe().find('.errorMessage')
    }

    getActionOnIT() {
        return cy.iframe().find('[name="actionOntxn"]')
    }

    getAssertpayeridtype() {
        return cy.iframe().find('#identicalTxnCriteria_forward_selectedCheckbox')
    }
    getAssertpayeeidtype() {
        return cy.iframe().find('#identicalTxnCriteria_forward_selectedCheckbox')
    }
    getpayeewalletid() {
        return cy.iframe().find('[name="selectedCheckbox"]')
    }

    getpayerwalletid() {
        return cy.iframe().find('[name="selectedCheckbox"]')
    }
    getCurrency() {
        return cy.iframe().find('[name="selectedCheckbox"]')
    }
    getTransactionAmount() {
        return cy.iframe().find('[name="selectedCheckbox"]')
    }
    getBackButton() {
        return cy.iframe().find('[value="Back"]')
    }
    getserviceType() {
        return cy.iframe().find('#identicalTxnCriteria_input_service')
    }
    geterrormessage() {
        return cy.iframe().find('.errorMessage')
    }
    getActionOnIT() {
        return cy.iframe().find('[name="actionOntxn"]')
    }
    geterrormsg() {
        return cy.iframe().find('[class="errorMessage"]')
    }
        

        
}
export default IdenticalTransaction