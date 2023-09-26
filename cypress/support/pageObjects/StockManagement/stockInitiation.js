class stockInitiation {
    getProvider() {
        return cy.iframe().find('select[id="mfsProvidersList"]')
    }
    getProvider1() {
        return cy.iframe().find('select[id="mfsProvidersList"]> option')
    }
    getStockFrom() {
        return cy.iframe().find('#bankId')
    }
    getReferenceNumber() {
        return cy.iframe().find('input[name="_refNo"]')
    }
    getRequestedAmount() {
        return cy.iframe().find('input[name="_requestedQuantity"]')
    }
    getSubmitButton() {
        return cy.iframe().find('input[id="stockInit_confirmInitiate_button_submit"]')
    }
    getConfirmButton() {
        return cy.iframe().find('input[id="stockButt"]')
    }
    getSubmitButton_1() {
        return cy.iframe().find('input[id="stockApprove1_approve_button_submit"]')
    }
    getSubmitButton_2() {
        return cy.iframe().find('#stockApprove2_approve_button_submit')
    }
    getApproveButton_1() {
        return cy.iframe().find('input[id="stockApprove1_confirmApproval_button_approve"]')
    }
    getApproveButton_2() {
        return cy.iframe().find('#stockApprove2_confirmApproval_button_approve')
    }
    getSuccessMsg() {
        return cy.iframe().find('.actionMessage')
    }

    getBalance() {
        return cy.iframe().find('.wwFormTableC>tbody>tr:nth-child(4)>.tabcol')
    }

    //--------------------------------------------------------------------------------------------


    getApprovalLimit1() {
        return cy.iframe().find('#StockApprovalTransferLimitAction_insertApprovalLimit_approvalLimit1')
    }

    getsubmitbutton() {
        return cy.iframe().find('[name="button.submit"]')
    }
    ///////////////////////////////////////////////////////////////////////////////////////////////////////

    getAdminTransaction() {
        return cy.get('[title="Admin Transaction"]')
    }
    getStockCreation() {
        return cy.iframe().find('#mat-tab-label-0-0')
    }
    getCurrency() {
        return cy.iframe().find('#currency')
    }
    getTrustBank() {
        return cy.iframe().find('#trustbank')
    }
    getToStockAccount() {
        return cy.iframe().find('#tostockaccount')
    }
    getTransactionAmount() {
        return cy.iframe().find('#transactionAmount')
    }
    getReferencenumber() {
        return cy.iframe().find('#referenceNumber')
    }
    getRemarks() {
        return cy.iframe().find('#remarks')
    }
    getCreateButton() {
        return cy.iframe().find('[type="submit"]')
    }
    getSaveButton() {
        return cy.iframe().find('.btn-save')
    }
    getSuccessMessage() {
        return cy.iframe().find('.popup-img_des_sub').eq(0)
    }
    getDone() {
        return cy.iframe().find('.btn-save.py-2')
    }
    getStockTransfer() {
        return cy.iframe().find('[class="mat-tab-label-custom ng-star-inserted"]').eq(2)
    }
    getAccountType() {
        return cy.iframe().find('#accounttype')
    }
    getToWalletType() {
        return cy.iframe().find('#towallettype')
    }
    getReimbursement() {
        return cy.iframe().find('[class="mat-tab-label-custom ng-star-inserted"]').eq(4)
    }
    getSearchType() {
        return cy.iframe().find('#transferId')
    }
    getSearchButton() {
        return cy.iframe().find('[class="input-group-append"]')
    }
    getSuccess() {
        return cy.iframe().find('[class="mat-cell cdk-cell cdk-column-status mat-column-status ng-star-inserted"]')
    }
    getUserType() {
        return cy.iframe().find('#category')
    }
    getReferenceDate() {
        return cy.iframe().find('#externalReferenceDate')
    }
    getMobileNumber() {
        return cy.iframe().find('#mobilenumber')
    }
    getWalletType() {
        return cy.iframe().find('#walletType')
    }
    getBusinessId() {
        return cy.iframe().find('#businessid')
    }
    getMoreView() {
        return cy.iframe().find('[class="mat-tab-header-pagination-chevron"]')
    }
    //-------------------------------------New-------------------------------
    getPaymentMethod() {
        return cy.iframe().find('#paymentMethod')
    }
    ////////////////////////////////////////////////

    getStatusAmount() {
        return cy.iframe().find('[class="column-bold ng-star-inserted"]').eq(4)
    }
    getEAInitiationStatus() {
        return cy.iframe().find('[class="mat-cell cdk-cell cdk-column-status mat-column-status ng-star-inserted"]').eq(0)
    }
    //////////////////////////////////////////////
    getStockWithdrawl() {
        return cy.iframe().find('[class="mat-tab-label-custom ng-star-inserted"]').eq(1)
    }
    getFromStockAccount() {
        return cy.iframe().find('#fromstockaccount')
    }
    getBankAccountNumber() {
        return cy.iframe().find('#bankAccountNumber')
    }
    getStockAccountBalance() {
        return cy.iframe().find('[class="form-input-label"]')
    }
    //----------------------------------------Limit Error--------------------------
    getLimitErrorMessage() {
        return cy.iframe().find('.errorMessage')
    }
    //-----------------------------------x.4Withdrawal-------------------------
    getWithdrawal() {
        return cy.get('[title="Stock Withdrawal"]')
    }
    getWithdrawalWalletType() {
        return cy.iframe().find('#stockWithdraw_walletId')
    }

    getWithdrawalBalance() {
        return cy.iframe().find('.tabcol')
    }
    getBankAccountNo() {
        return cy.iframe().find('[name="optBankAccountNo"]')
    }
    getWithdrawalAmount() {
        return cy.iframe().find('#stockWithdraw_amount')
    }
    getWithdrawalSubmit() {
        return cy.iframe().find('#stockWithdraw_button_submit')
    }
    getWithdrawalConfirm() {
        return cy.iframe().find('#stockWithdraw_submit')
    }
    getWithdrawalApproval1() {
        return cy.iframe().find('[title="Stock Withdrawal Approval"]')
    }
    getWithdrawalApprovalSubmit() {
        return cy.iframe('#StockWithdrawApprove_displayTransactionDetails_button_submit')
    }
    getWithdrawalRemarks() {
        return cy.iframe().find('#StockWithdrawApprove_displayTransactionDetails_remark')
    }
    getWithdrawalApprovalConfirm() {
        return cy.iframe().find('#StockWithdrawApprove_displayTransactionDetails_button_approve')
    }
    //----------------------------------------------------------------------
    getEnquiry() {
        return cy.get('[title="Stock Enquiry"]')
    }
    getTransactionId() {
        return cy.iframe().find('.tabcol>[type="text"]')
    }
    getStockType() {
        return cy.iframe().find('[name="serviceTypeA"]')
    }
    getReimbursementEyeButton() {
        return cy.iframe().find('.mat-focus-indicator.mat-tooltip-trigger.iconbutton.mat-icon-button.mat-button-base.mat-primary').eq(0)
    }

    getAssertReimbuesementRejected() {
        return cy.iframe().find('.col-md-12.modal-comment').eq(1)
    }

    //-----------------------------------------------------------------
    getStockBalanceEnquiry() {
        return cy.iframe().find('[class="mat-tab-label-custom ng-star-inserted"]').eq(5)
    }

    getStockAccount() {
        return cy.iframe().find('select[id="stock-account"]')
    }

    getStockWalletBalance() {
        return cy.iframe().find('.mat-sort-header-container.mat-focus-indicator.ng-tns-c90-24')
    }

    getStockWithdraw() {
        return cy.iframe().find('#mat-tab-label-0-1')
    }
    getAccountNumber() {
        return cy.iframe().find('select[id="bankAccountNumber"]')
    }
    getAccountNumbers() {
        return cy.iframe().find('select[id="bankAccountNumber"]> option')
    }
    getDeleteButton() {
        return cy.iframe().find('.submit-button.submit-button-valid')
    }

    getResetAccountNumber() {
        return cy.iframe().find('select[id="transactionAmountNumber"]')
    }
    getBackButton() {
        return cy.iframe().find('#stockInit_confirmInitiate_back')
    }
    getSearchUsingMobileno() {
        return cy.iframe().find('[type="number"]')
    }
    getAmount() {
        return cy.iframe().find('#transactionAmount')
    }
    getInstrumenttype() {
        return cy.iframe().find('#instrumanttype')
    }
    getinstrumentNumber() {
        return cy.iframe().find('#instrumentnumber')
    }
    getAllocationButton() {
        return cy.iframe().find('[type="submit"]')
    }
    getSubmitbtn() {
        return cy.iframe().find('[class="btn-save"]')
    }

    getAllocation() {
        return cy.iframe().find('#mat-tab-label-0-3')
    }
    getErrormessage() {
        return cy.iframe().find('div.invalid-feedback.ng-star-inserted>')
    }
}

export default stockInitiation

