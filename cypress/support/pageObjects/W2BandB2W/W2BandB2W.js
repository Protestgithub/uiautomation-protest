class W2BandB2W {
    getTransferToBank() {
        return cy.get('[data-test-id="finansial-service-services.transferToBank"]')
    }
    getTransferToBankAmount() {
        return cy.get('[data-test-id="tansfer-to-bank-amount-input"]')
    }
    getNormal() {
        return cy.get('[data-test-id="101-12"]')
    }
    getTrasferProceed() {
        return cy.get('[data-test-id="tansfer-to-bank-proceed-button"]')
    }
    getTransferTo() {
        return cy.get('[data-test-id="TBN101"]').eq(0)
    }
    getTrasactionPin() {
        return cy.get('[class="w-9/12 bg-slate-50 outline-none"]')
    }
    getVerify() {
        return cy.get('[data-test-id="review-and-confirm-verify-button"]')
    }

    getTransactionId() {
        return cy.get('[class="transaction-id"]:nth-child(1)')
    }
    getAddMoney() {
        return cy.get('[data-testid="userinfo-wallet-balance"]')
    }
    getB2WAmount() {
        return cy.get('[data-test-id="add-money-amount-input"]')
    }
    getB2WProceed() {
        return cy.get('[data-test-id="add-money-proceed-button"]')
    }
    getSuccessMessage() {
        return cy.get('span.font-bold.font-inter.text-xs').eq(2)//changed CSS refernce on 27thjune
    }
    getTransactionTime() {
        return cy.iframe().find('[class="mat-cell cdk-cell cdk-column-created-on mat-column-created-on ng-star-inserted"]')
    }
    getSysMobile() {
        return cy.iframe().find('[class="mat-cell cdk-cell cdk-column-contact-number mat-column-contact-number ng-star-inserted"]')
    }
    getOrderId() {
        return cy.iframe().find('p[class="decoration auto-scroll user-select-all"]').eq(6)
    }
    getB2WOrderId() {
        return cy.iframe().find('[class="col-md-4 mt-2 ng-star-inserted"] p[class="decoration auto-scroll user-select-all"]')
    }
    getClose() {
        return cy.iframe().find('[id="close-modal"]')
    }
    getBulkAmbiguousApproval() {
        return cy.iframe().find('[class="col s6 pending-policy-name mrgn_top_neg30px"]').eq(0)
    }
    getBulkApproveButton() {
        return cy.iframe().find('[class="col s6 div-button-border center active-color approve_btn"]')
    }
    getBulkApprovalSuccess() {
        return cy.iframe().find('[class="col s7 alert alert-success padd_tb"]')
    }
    getViewHistory() {
        return cy.get('span.text-blue-400.text-xs').eq(1)
    }
    geB2WTransaction() {
        return cy.get('[class="w-48 ng-star-inserted"]').eq(0)
    }
    getB2WTransactionId() {
        return cy.get('[class="p-4 ng-star-inserted"]').eq(0)
    }
    getBulkInitiateSuccessMsg() {
        return cy.iframe().find('[class="alert alert-success"]')
    }
    getReInitiateErrorMessage() {
        return cy.iframe().find('[class="mat-simple-snackbar ng-star-inserted"]')
    }
    getSearchOrderID() {
        return cy.iframe().find('[id="search-order-id"]')
    }
    getExpandButton() {
        return cy.iframe().find('[class="mat-icon notranslate material-icons mat-icon-no-color"]').eq(0)
    }
    getState() {
        return cy.iframe().find('[class="decoration auto-scroll user-select-all"]')
    }
    getB2WDone() {
        return cy.get('[data-test-id="statement-detail-button-done"]')
    }
    getTax() {
        return cy.get('[class="text-dark font-inter font-medium sm:text-sm text-xs min-w-[46px] flex justify-end"]')
    }
    getAddBankAccount() {
        return cy.iframe().find('[id="add-account"]')
    }
    getBankName() {
        return cy.iframe().find('[id="bankName"]')
    }
    getConfirmAccountNumber() {
        return cy.iframe().find('[id="confirmAccountNumber"]')
    }
    getNickName() {
        return cy.iframe().find('[id="nickName"]')
    }
    getAccountType() {
        return cy.iframe().find('[id="accountType"]')
    }
    getIFSC() {
        return cy.iframe().find('[id="bankIFSC"]')
    }
    getInitiateAdd() {
        return cy.iframe().find('[id="initiate-add"]')
    }
    getBankAccountNumber() {
        return cy.iframe().find('[id="accountNumber"]')
    }
    getNewPin() {
        return cy.get('[data-testid="mpin-input-field"]')
    }
    getConfirmPin() {
        return cy.get('[data-testid="new-mpin-input-field"]')
    }
    getInitiateButton() {
        return cy.get('[data-testid="initiate-pin-btn"]')
    }
    getNewLogin() {
        return cy.get('[class="mat-dialog-close bg-application w-36 h-10 rounded text-white ng-star-inserted"]')
    }
    getPinChangeSuccessMsg() {
        return cy.get('[class="text-center text-xl"]')
    }
    getNetPayable() {
        return cy.get('[class="font-inter font-bold sm:text-base text-sm text-[#28c064] min-w-[70px] flex justify-end"]')
    }
    getBalance() {
        return cy.get('[class="font-normal inline-block text-xs self-start max-w-fit"]')
    }

    //----------- Added for consumer portal transfer to Bank  By Kalyani on 27/06/23 ----------------

    getCurrency() {
        return cy.get('[data-test-id="tansfer-to-bank-select-currency"]')
    }
    getUSDCurrency() {
        return cy.get('[data-test-id="send-money-currencyCode-101"]')
    }
    getINDCurrency() {
        return cy.get('[data-test-id="send-money-currencyCode-102"]')
    }
    getAmountError() {
        return cy.get('[class="font-inter font-medium"]')
    }
    getHoverPIN() {
        return cy.get('div img.h-6.w-5')
    }
    getPINError() {
        return cy.get('.text-red-600')
    }
    getcopytransactionId() {
        return cy.get('[data-test-id="transaction-status-copy-transaction-id"]')
    }
    getcopied() {
        return cy.get('.copy-button.ng-star-inserted')
    }
    getdownloadreceipt() {
        return cy.get('[data-test-id="transaction-status-download-receipt-2"]')
    }
    getDone() {
        return cy.get('[data-test-id="transaction-status-done-button"]')
    }
    getwalletstatment() {
        return cy.get('[data-test-id="transaction-history-statement-change-to-wallet"]')
    }
    gethistorydate() {
        return cy.get('[data-test-id="transaction-history-statement-date-sort"]')
    }
    getTransactionDate() {
        return cy.get('div.flex.justify-center.text-center')
    }
    getAnotherTransaction() {
        return cy.get('span.text-blue-400.text-xs').eq(0)
    }
    getServiceCharge() {
        return cy.get('div.flex.justify-between.mb-1').eq(1)
    }
    getCommission() {
        return cy.get('span.font-inter.text-xs.uppercase').eq(1)
    }
    getAmount() {
        return cy.get('span.text-dark').eq(1)
    }
    getAmount1() {
        return cy.get('span.text-dark').eq(3)
    }
    getBulkReject() {
        return cy.iframe().find('[class="col s6 div-button-border center reject_btn"]')
    }
    getBulkRejectMessage() {
        return cy.iframe().find('[class="col s6 div-button-border center reject_btn"]')
    }
    //-----------------------------------------------
    getInstrumentType() {
        return cy.get('[id="instrumentType"]')
    }
    getCard() {
        return cy.get('[class="flex flex-col"]').eq(0)
    }

    getDropdownIcon() {
        return cy.get('[alt="down-arrow-after-logion"]')
    }

    getPaymentMenu() {
        return cy.get('[class="font-inter text-sm mt-3"]').eq(1)
    }

    getAddbank() {
        return cy.get('[class="font-inter font-semibold text-sm"]')
    }
    getAddAccount() {
        return cy.get('[class="flex justify-center"]').eq(0)
    }
    getNumberPlaceholder() {
        return cy.get('[placeholder="Enter Account number"]')
    }
    getReEnterNumbr() {
        return cy.get('[placeholder="Re-enter account number"]')
    }
    getPopuP() {
        return cy.get('[class="p-6"]')
    }
    getAddBtn() {
        return cy.get('[data-test-id="payment-settings-bank-add-button"]')
    }
    getCloseicon() {
        return cy.get('[src="./assets/images/cross-icon.svg"]')
    }
    getCardnumber() {
        return cy.get('[placeholder="Enter card number"]')
    }
    getName() {
        return cy.get('[placeholder="Enter card holder name"]')
    }
    getExpirydate() {
        return cy.get('[placeholder="Enter expiry date (mm/yy)"]')
    }
    getCurrency() {
        return cy.get('[formcontrolname="currency"]')
    }
    getSelectCurrency() {
        return cy.get('[class="mx-2 font-inter text-application text-xs font-medium"]').eq(0)
    }


    getViewWallet() {
        return cy.get('[src="./assets/images/view-wallet.svg"]')
    }
    getView() {
        return cy.get('[class="font-extrabold font-inter cursor-auto text-sm"]')
    }
}
export default W2BandB2W