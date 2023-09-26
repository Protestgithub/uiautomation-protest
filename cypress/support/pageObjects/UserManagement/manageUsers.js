class manageUsers {

    getUsermanagement() {
        return cy.get('[data-testid="menu.user_management"]')
    }
    getUserType() {
        return cy.iframe().find('select[id="user-type"]')
    }
    getManageUsers() {
        return cy.get('[data-testid="menu.user_management"] > ul > li:nth-child(2) > a')
    }
    getViewDetailsUser() {

        return cy.iframe().find('span.font-weight-bold')

    }
    getDateRangeAssert() {
        return cy.iframe().find('.modal-label.more-details-header')
    }
    getViewIcon() {
        return cy.iframe().find('[data-test-id="view-all-details"]')
    }
    getViewDetails() {
        return cy.iframe().find('span.font-weight-bold')
    }
    getAssertMobile() {
        return cy.iframe().find('[class="mat-tooltip-trigger ng-star-inserted"]')
    }
    getversion4AssertMobile() {
        return cy.iframe().find('.mat-tooltip-trigger.ng-star-inserted > span')
    }

    getSuspendIcon() {
        return cy.iframe().find('.mat-tooltip-trigger.ng-star-inserted')
    }
    getCommentBox() {
        return cy.iframe().find('#reason')
    }
    getconfirm() {
        return cy.iframe().find('#confirm')
    }
    getWalletHistory() {
        return cy.iframe().find('.mat-tab-label-content')
    }
    getSearchTransactionID() {
        return cy.iframe().find('#search-transaction-id')
    }
    getsucessSYS() {
        return cy.iframe().find('p.text-center')
    }
    getdelete() {
        return cy.iframe().find('button[id="delete-user"] img')
    }
    getSubmitSuspendResumeButton() {
        return cy.iframe().find('#submit-suspendresume')
    }
    getdropdown() {
        return cy.iframe().find('#user-type')

    }
    getEditIcon() {
        return cy.iframe().find('[data-test-id="modify-user"]')
    }
    getEditToolTip() {
        return cy.iframe().find('[class="mat-tooltip-trigger"]')
    }
    getDailogbox() {
        return cy.iframe().find('#reason')
    }
    getYesbtn() {
        return cy.iframe().find('#submit-suspendresume')
    }
    getErrormessage() {
        return cy.iframe().find('p.text-center')
    }
    getMore() {
        return cy.iframe().find('#more-tabs')
    }
    getCredentials() {
        return cy.iframe().find('#credentials')
    }
    getResetbttn() {
        return cy.iframe().find('#reset-credentials span mat-icon').eq(0)
    }
    getConfirmReset() {
        return cy.iframe().find('#submit-reset span[class="mat-button-wrapper"]')
    }
    getConfirmButton() {
        return cy.iframe().find('[data-test-id="confirm"]')
    }
    getNextbttn() {
        return cy.iframe().find('button[id="next"]')

    }
    getSearchUser() {
        return cy.iframe().find('input[data-test-id="user-search-details"]')
    }

    getUserSearchDetails() {
        return cy.iframe().find('input[id="user-search-details"]')
    }
    getSearchUserButton() {
        return cy.iframe().find('[id="search-user"]')
    }
    getViewAllDetailsButton() {
        return cy.iframe().find('[id="view-all-details"]')
    }

    getOrderDetailsButton() {
        return cy.iframe().find('[id="mat-tab-label-0-1"]')
    }

    getAccountInfo() {
        return cy.iframe().find('#mat-tab-label-0-3')
    }
    getlockunclockWallets() {
        return cy.iframe().find('#lock-unlock')
    }

    getversion4LockOutgoingPayements() {
        return cy.iframe().find('[data-test-id="Lock outgoing payments"]')
    }
    getversion4LockIncomingPayements() {
        return cy.iframe().find('[data-test-id="Lock incoming payments"]')
    }
    getversion4LockBothPayements() {
        return cy.iframe().find('[id="Lock both-input"]')
    }

    getLockOutgoingPayements() {
        return cy.iframe().find('[data-test-id="outgoing-payments-USD"]')
    }
    getLockIncomingPayements() {
        return cy.iframe().find('[data-test-id="incoming-payments-USD"]')
    }
    getLockBothPayements() {
        return cy.iframe().find('mat-radio-button[id="Lock both"]')
    }
    getlockallbtn() {
        return cy.iframe().find('[data-test-id="submit-unlock"]')
    }
    getversion4lockallbtn() {
        return cy.iframe().find('[data-test-id="submit-lock"]')
    }
    getconfirmationlock() {
        return cy.iframe().find('#reason')
    }
    getconfirmationbtn() {
        return cy.iframe().find('button[id="submit-lock-unlock"]')
    }

    getresetcredentials() {
        return cy.iframe().find('button[id="reset-credentials"]')
    }
    getresetconfirmation() {
        return cy.iframe().find('button[id="submit-reset"]')
    }
    getResetSuccessMessage() {
        return cy.iframe().find('.reset-success-modal-header')
    }
    getResetSuccessMessageContent() {
        return cy.iframe().find('.reset-success-modal')
    }
    getsuccessresetconfirmation() {
        return cy.iframe().find('button[id="success-reset"]')
    }
    getUnlockoutgoingPayements() {
        return cy.iframe().find('mat-radio-button[id="Unlock outgoing payments"]')
    }
    getunlockbtn() {
        return cy.iframe().find('[data-test-id="submit-lock"]')
    }
    getversion4unlockbtn() {
        return cy.iframe().find('[data-test-id="submit-unlock"]')
    }
    getlockunclockWallets() {
        return cy.iframe().find('#lock-unlock')
    }
    getcredentials() {
        return cy.iframe().find('#credentials')
    }
    getlockedmessage() {
        return cy.iframe().find('div .cdk-overlay-pane >snack-bar-container>simple-snack-bar>span')
    }
    getEyeIcon() {
        return cy.iframe().find('#view-all-details')
    }
    getSuspendUser() {
        return cy.iframe().find('#suspend-resume-user')
    }
    getreason() {
        return cy.iframe().find('#reason')
    }
    getReverYes() {
        return cy.iframe().find('#yes-reverse-transaction')
    }

    getreverseservicecharge() {
        return cy.iframe().find('#reverse-charge-tax-input')
    }
    getreversecommission() {
        return cy.iframe().find('#reverse-commission-tax-input')
    }
    getcomment() {
        return cy.iframe().find('#comment')
    }
    getreasonforclosure() {
        return cy.iframe().find('#reason-for-closure')
    }
    getintiatedelete() {
        return cy.iframe().find('#initiate-delete')
    }

    getsuccessresetconfirmation() {

        return cy.iframe().find('button[id="success-reset"]')

    }
    getDoneButton() {
        return cy.iframe().find('[data-test-id="done"]')
    }
    getComment() {
        return cy.iframe().find('input[id="comment"]')
    }
    getReason() {
        return cy.iframe().find('select[id="reason-for-closure"]')
    }
    getReason1() {
        return cy.iframe().find('select[id="reason-for-closure"]')
    }
    getDelete() {
        return cy.iframe().find('button[id="delete-user"]')

    }
    getDeleteButton() {
        return cy.iframe().find('button[id="initiate-delete"]')
    }
    getRejectErrorMessage() {
        return cy.iframe().find('.mat-simple-snackbar.ng-star-inserted > span')
    }

    getWalletPaymentHistoryButton() {
        return cy.iframe().find('[id="mat-tab-label-0-2"]')
    }
    getWalletExpandButton() {
        return cy.iframe().find('[id="view-more"]').eq(0)
    }
    getViewMoreDetailsButton() {
        return cy.iframe().find('[id="view-more-details"]')
    }
    getFilter() {
        return cy.iframe().find('.mat-button-wrapper > mat-icon[data-mat-icon-name="filter"]')
    }
    getFilterStatementButton() {
        return cy.iframe().find('[id="filter-statement"]')
    }
    getStatus() {
        return cy.iframe().find('[id="Success"]').eq(0)
    }
    getApplyFilterButton() {
        return cy.iframe().find('[id="apply-filter"]')
    }
    getSearchTransactionId() {
        return cy.iframe().find('input[id="search-transaction-id"]')
    }

    getDatePickerStart() {
        return cy.iframe().find('[id="startDate"]').eq(0)
    }
    getDatePickerEnd() {
        return cy.iframe().find('[id="endDate"]').eq(1)
    }

    getEndDate() {
        return cy.iframe().find('.ngb-dp-day.ngb-dp-today.ng-star-inserted')
    }
    getStartDate() {
        return cy.iframe().find('.btn-light.ng-star-inserted')

    }
    getAssert() {
        return cy.iframe().find('.p-2:nth-child(1) div.col-md-4.mt-2.ng-star-inserted:nth-child(5) app-view-detail:nth-child(1) div:nth-child(1) p.decoration > span:nth-child(1)')
    }
    getexpandmore() {
        return cy.iframe().find('[data-test-id="more-tabs"]')
    }
    getwallet() {
        return cy.iframe().find('#wallet_payment_history')
    }

    getLatestTrasanction() {
        return cy.iframe().find('[id="mat-select-value-1"]')
    }

    getViewMoreDetailsButton() {
        return cy.iframe().find('[id="view-more-details"]')
    }

    getWalletExpandButton() {
        return cy.iframe().find('[id="view-more"]').eq(0)
    }

    getOrderDetailsButton() {
        return cy.iframe().find('[id="mat-tab-label-0-1"]')

    }

    getOrderDetailsMessage() {
        return cy.iframe().find('.container-fluid.mt-3')

    }
    getBusinessUserDetail() {
        return cy.iframe().find('.mat-tooltip-trigger.ng-star-inserted')
    }

    getViewAllDetailsButton() {
        return cy.iframe().find('[id="view-all-details"]')
    }
    gettransactionId() {
        return cy.iframe().find('.mat-tooltip-trigger.auto-scroll.user-select-all.ng-star-inserted span')
    }
    getserachicon() {
        return cy.iframe().find('.cursor-pointer')
    }
    getTransactionId() {
        return cy.iframe().find('.mat-column-transaction-id.ng-star-inserted span span')
    }
    getreversetransaction() {
        return cy.iframe().find('img.mat-tooltip-trigger.transaction-icon')
    }
    getservice() {
        return cy.iframe().find('[data-test-id=EXTRASERVICES]')
    }
    getapply() {
        return cy.iframe().find('button[id="apply-filter"]')
    }
    getTransactionCorrection() {
        return cy.iframe().find('div.mat-autocomplete-panel .mat-option-text ')
    }
    getradiostatus() {
        return cy.iframe().find('.mat-radio-label-content')
    }
    getcheckbox1() {
        return cy.iframe().find('.filter-form-values')
    }
    getoptions() {
        return cy.iframe().find('.mat-autocomplete-panel')
    }


    getWalletDetails() {
        return cy.iframe().find('.div.currency-grid-display > span')
    }

    getChurndelete() {
        return cy.iframe().find('button[id="delete-user"]')
    }
    getintiatedmessage() {
        return cy.iframe().find('simple-snack-bar.mat-simple-snackbar.ng-star-inserted > span:nth-child(1)')

    }
    //---------------------------------UserDetails------------------------------
    getBalance() {
        return cy.iframe().find('[role="button"]>div.mat-sort-header-content.ng-tns-c134-14')
    }
    getEditIconUser() {
        return cy.iframe().find('[data-test-id="modify-user"]').eq(1)
    }
    //-----------------AdministativaMangnt-------------------------------------------------

    getAccinfo() {
        return cy.iframe().find('div>.mat-tab-header-pagination-chevron').eq(1)
    }
    getBankAcc() {
        return cy.iframe().find('#mat-tab-label-1-1>div.mat-tab-label-content')
    }
    getSelectOptn() {
        return cy.iframe().find('#user-type')
    }
    getWalletDetails() {
        return cy.iframe().find('.div.currency-grid-display > span')
    }
    getChurndelete() {
        return cy.iframe().find('button[id="delete-user"]')
    }
    //added by Prerna
    getUserType() {
        return cy.iframe().find('#user-type')
    }
    //added by Pratikshya
    getResetbttnGeneral() {
        return cy.iframe().find('#reset-credentials span mat-icon')
    }
    getFilterOrderDetails() {
        return cy.iframe().find('[id="filter-order"]')
    }
    //-----------------reset pin message---------

    getResetPinMessage() {
        return cy.iframe().find('div[class="reset-success-modal-header"]')
    }


    //-----------------bank account-----------
    getBankAccounts() {
        return cy.iframe().find('#mat-tab-label-1-1')
    }
    getFieldBankName() {
        return cy.iframe().find('mat-header-cell.mat-header-cell.cdk-header-cell.cdk-column-bank-name.mat-column-bank-name.ng-star-inserted')
    }


    //---------------reset search------------
    getResetSearch() {
        return cy.iframe().find('[data-test-id="reset-search"]')
    }

    getCreditedAmount() {
        return cy.iframe().find('span.mat-tooltip-trigger.ng-star-inserted')
    }
    //----------------------------------        
    getWalletBalance() {
        return cy.iframe().find('[class="mat-tooltip-trigger balance"]')
    }
    getPersonalInfo() {
        return cy.iframe().find('h3.font-weight-bold')
    }
    getTransactionIdField() {
        return cy.iframe().find('[class="mat-header-cell cdk-header-cell cdk-column-transaction-id mat-column-transaction-id ng-star-inserted"]')
    }
    getServiceorder() {
        return cy.iframe().find('[id="Merchant Pay-input"]')
    }
    getWallettype() {
        return cy.iframe().find('#mat-tab-label-1-0')
    }

    getAuthenticationFactor() {
        return cy.iframe().find('.mat-column-authentication-factor')
    }
    getIdentifierType() {
        return cy.iframe().find('.mat-column-identifier-type')
    }
    getColumnStatus() {
        return cy.iframe().find('.mat-column-status')
    }
    //-------------------------------
    getExtraServices() {
        return cy.iframe().find('[data-test-id="EXTRASERVICES"]')
    }
    getWalletToBankFilter() {
        return cy.iframe().find('[class="mat-option-text"]')
    }
    getTransactions() {
        return cy.iframe().find('[class="mat-row cdk-row ng-star-inserted"]')
    }
    getExpandMore() {
        return cy.iframe().find('#more-tabs')
    }
    getPrePostBalance() {
        return cy.iframe().find('[class="label-text ng-star-inserted"]')
    }
    getMoreDetailsPage() {
        return cy.iframe().find('[class="modal-body no-outline"]')
    }
    getClose() {
        return cy.iframe().find('#close-modal')
    }
    getReverNo() {
        return cy.iframe().find('#cancel-reverse-transaction')
    }
    getOrderStatus() {
        return cy.iframe().find('[class="mat-cell cdk-cell cdk-column-orderStatus mat-column-orderStatus ng-star-inserted"]>[class="mat-tooltip-trigger ng-star-inserted"]').eq(0)
    }
    getCancelledStatus() {
        return cy.iframe().find('[class="mat-cell cdk-cell cdk-column-orderStatus mat-column-orderStatus ng-star-inserted"]>[class="mat-tooltip-trigger ng-star-inserted"]')
    }
    get() {
        return cy.iframe().find('')
    }
    get() {
        return cy.iframe().find('')
    }
    //-------------------------------
    getExtraServices() {
        return cy.iframe().find('[data-test-id="EXTRASERVICES"]')
    }
    getWalletToBankFilter() {
        return cy.iframe().find('[class="mat-option-text"]')
    }
    getTransactions() {
        return cy.iframe().find('[class="mat-row cdk-row ng-star-inserted"]')
    }
    getExpandMore() {
        return cy.iframe().find('#more-tabs')
    }
    getPrePostBalance() {
        return cy.iframe().find('[class="label-text ng-star-inserted"]')
    }
    getMoreDetailsPage() {
        return cy.iframe().find('[class="modal-body no-outline"]')
    }
    getClose() {
        return cy.iframe().find('#close-modal')
    }
    getReverNo() {
        return cy.iframe().find('#cancel-reverse-transaction')
    }
    getPopupmessage() {
        return cy.iframe().find('[class="reset-modal-label ng-star-inserted"]')
    }
    getNoButton1() {
        return cy.iframe().find('#cancel-reset')
    }


    getcredentls() {
        return cy.iframe().find('[class="mat-tab-label-content"]')
    }
    getPasswdReset() {
        return cy.iframe().find('[class="reset-success-modal-header"]')
    }

    getSenderSuspend() {
        return cy.iframe().find('[class="mat-simple-snackbar ng-star-inserted"]')
    }
    getCloseOne() {
        return cy.iframe().find('[class="mat-focus-indicator mat-button mat-button-base"]')
    }

    getDoneButtn() {
        return cy.iframe().find('#success-reset')
    }
    get() {
        return cy.iframe().find('')
    }
    get() {
        return cy.iframe().find('')
    }
    get() {
        return cy.iframe().find('')
    }
    //---------------------------------SIT---------------------------------------------------------------
    getAssertionforOthers() {
        return cy.iframe().find('.mat-simple-snackbar.ng-star-inserted')
    }

    getFirstNameforEdit() {
        return cy.iframe().find('#firstName')
    }

    getSingleUser() {
        return cy.iframe().find('#single-operation')
    }

    getMultipleUser() {
        return cy.iframe().find('#multiple-operation')
    }

    getKYCInfo() {
        return cy.iframe().find('#kycIdType')
    }

    getKYCPannel() {
        return cy.iframe().find('#kyc-panel-1')
    }

    getProfileInfo() {
        return cy.iframe().find('#authProfile')
    }

    getSaveButton() {
        return cy.iframe().find('#save')
    }
    getCanelButton() {
        return cy.iframe().find('#cancel')

    }
    getCancelAssertMessage() {
        return cy.iframe().find('.text-center')
    }

    getYesButton() {
        return cy.iframe().find('#yes')
    }

    getNoButton() {
        return cy.iframe().find('#no')
    }

    getSortName() {
        return cy.iframe().find('#sort-name')
    }

    getRegisteredON() {
        return cy.iframe().find('[id="sort-registered on"]')
    }

    getUserDetails() {
        return cy.iframe().find('#user_details')
    }

    getViewKYCDetails() {
        return cy.iframe().find('#view-details')
    }

    getViewAllInfowithName() {
        return cy.iframe().find('.bottom')
    }

    getProfileInformation() {
        return cy.iframe().find('.bottom.ng-star-inserted')
    }

    getResetbttnPwd() {
        return cy.iframe().find('#reset-credentials span mat-icon').eq(1)
    }

    getCancelReset() {
        return cy.iframe().find('#cancel-reset')
    }

    getCancelDelete() {
        return cy.iframe().find('#cancel-delete')
    }

    getCloseCrossIcon() {
        return cy.iframe().find('#close-modal')
    }
    getViewHierarchy() {
        return cy.iframe().find('#view-hierarch')

    }

    getViewAllDetailsButton() {
        return cy.iframe().find('[id="view-all-details"]').eq(0)
    }


    getParentID() {
        return cy.iframe().find('#parentId')
    }

    getSaveSuccessMessage() {
        return cy.iframe().find('.mat-snack-bar-container.ng-tns-c29-15.ng-trigger.ng-trigger-state.successSnackbar.mat-snack-bar-center.ng-star-inserted')
    }

    getDelete() {
        return cy.iframe().find('button[id="delete-user"]').eq(0)

    }

    getDelete2() {
        return cy.iframe().find('button[id="delete-user"]').eq(1)

    }

    //11-07-2023
    getCloseUserDetails() {
        return cy.iframe().find('#close-user-details')
    }

    getSortOrderDate() {
        return cy.iframe().find('[data-test-id = "sort-order date"]')
    }


    getBankWalletService() {
        return cy.iframe().find('[data-test-id = "Bank To Wallet"]').eq(0)

    }

    getMultipleUserExportData() {
        return cy.iframe().find('#search-service')
    }

    getCustomerData() {
        return cy.iframe().find('#ngb-nav-1')
    }

    getRoleCustomer() {
        return cy.iframe().find('#role-Customer')
    }

    getClickDownloadTemplate() {
        return cy.iframe().find('#click-download-template')
    }


    getAddProfileSecurity() {
        return cy.iframe().find('.mat-focus-indicator.comBtn.mat-raised-button.mat-button-base')
    }

    getSystemAdminSecurity() {
        return cy.iframe().find('#mat-radio-2')
    }

    getAllowSeqCharForPwd() {
        return cy.iframe().find('#allowSeqCharForPwd')
    }
    getTextLable() {
        return cy.iframe().find('.label-text.form-label').eq(7)
    }


    getSomeSplChar() {
        return cy.iframe().find('#allowedSpecialCharsForPwd')

    }

    getFailedPwdAttemptsForBlock() {
        return cy.iframe().find('#failedPwdAttemptsForBlock')

    }

    getFailedPinAttemptsForBlock() {
        return cy.iframe().find('#failedPinAttemptsForBlock')

    }



    getLoginSecurity() {
        return cy.iframe().find('#mat-tab-label-0-2')
        authSystem
    }

    getSelectAuthSystem() {
        return cy.iframe().find('#authSystem')

    }

    getMinQuestions() {
        return cy.iframe().find('#minSecurityQuestionToResetCredentials')

    }

    getMaxQuestions() {
        return cy.iframe().find('#maxSecurityQuestionToResetCredentials')

    }

    getModifyMarketingProfileDisabled() {
        return cy.iframe().find('.MuiInputBase-input.MuiOutlinedInput-input.Mui-disabled.Mui-disabled')
    }

    getPwdExpiryDays() {
        return cy.iframe().find('#pwdExpiryDays')
    }

    getAssertPwdExpiryDays() {
        return cy.iframe().find('.text-danger.ng-star-inserted')
    }

    getMinPwdLength() {
        return cy.iframe().find('#minPwdLength')
    }

    getMaxPwdLength() {
        return cy.iframe().find('#maxPwdLength')
    }

    getNumberOfLastPwds() {
        return cy.iframe().find('#numberOfLastPwds')
    }

    getCustomerType() {
        return cy.iframe().find('#ngb-nav-2')

    }

    getCustomerRole() {
        return cy.iframe().find('#mat-radio-4')

    }

    getPinLength() {
        return cy.iframe().find('#pinLength')

    }

    getSecurityPIN() {
        return cy.iframe().find('#mat-tab-label-0-1')

    }

    getFailedPwdAttemptsForBlock() {
        return cy.iframe().find('#failedPwdAttemptsForBlock')


    }

    getSecurityLoginAuthSystem() {
        // return cy.iframe().find('#authSystem')
        return cy.iframe().find('select[id="authSystem"]').eq(0)

    }

    getSecurityLoginAutoLogoutTime() {
        return cy.iframe().find('#autoLogoutTime')

    }

    getSecurityProfileLogin() {
        return cy.iframe().find('#mat-tab-label-0-3')
    }

    getEditMarketingProfile() {
        return cy.iframe().find('tbody > tr>  td > svg').eq(0)
    }

    getAddWalletForMarketing() {
        return cy.iframe().find('#button')
    }


    getSaveButtonForMarketing() {
        return cy.iframe().find('.MuiButtonBase-root.MuiButton-root.MuiButton-contained.jss38.MuiButton-contained')
    }

    getDeleteButtonForMarketing() {
        return cy.iframe().find('div.MuiGrid-root.MuiGrid-item.MuiGrid-grid-xs-1 > svg')
    }


    getSaveSubmitButtonMarketing() {
        return cy.iframe().find('div > div:nth-child(5)> div > button')
    }


    getSecurityLoginAuthSystem() {
        return cy.iframe().find('select[id="authSystem"]')

    }
    getPinExpiryDays() {
        return cy.iframe().find('#pinExpiryDays')

    }

    //2107

    getSubmitYesSuspendUser() {
        return cy.iframe().find('#submit-suspendresume')
    }
    getSubmitNoSuspendUser() {
        return cy.iframe().find('#cancel-suspendresume')
    }

    getExportStatement() {
        return cy.iframe().find('#export-statement')

    }

    getShowDropDown() {
        return cy.iframe().find('#mat-tab-content-0-1 > div > app-order-details > main > div > div > div > app-expandable-table > div > div.col-9 > mat-paginator > div > div > div.mat-paginator-page-size.ng-star-inserted > mat-form-field')
    }

    getGoToPage() {
        return cy.iframe().find('#mat-tab-content-0-1 > div > app-order-details > main > div > div > div > app-expandable-table > div > div.col-3.go-to-page-container > mat-form-field')
    }

    //----------Added Rakesh
    getSenderSuspend() {
        return cy.iframe().find('[class="mat-simple-snackbar ng-star-inserted"]')
    }
    getClose() {
        return cy.iframe().find('[class="mat-focus-indicator mat-button mat-button-base"]')

    }
    //------------------------------------------------------------
    getOrderReverseYes() {
        return cy.iframe().find('[class="mat-focus-indicator mat-raised-button mat-button-base"]>[class="mat-button-wrapper"]')
    }

    getAddBankAccont() {
        return cy.iframe().find('[id="add-account"]')
    }
}
export default manageUsers