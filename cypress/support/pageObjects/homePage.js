class homePage {

    getUserMenu() {
        return cy.get('.fd-shellbar__button--user-menu > button')
    }
    getWelcomeText() {
        return cy.iframe().get('.fd-menu > ul > li > span')
    }
    getUserManagementOption() {
        return cy.get('[data-testid="menu.user_management"]')
    }
    getCashOut() {

        return cy.get('[data-testid="menu.mtrans"] > .fd-nested-list > :nth-child(2) > [data-testid="test-undefined"] > .fd-nested-list__title')

    }

    getPersonalInfo() {
        return cy.iframe().find('h3.font-weight-bold')
    }
    getTransactionIdField() {
        return cy.iframe().find('[class="mat-header-cell cdk-header-cell cdk-column-transaction-id mat-column-transaction-id ng-star-inserted"]')
    }

    getSessionManagementOption() {
        return cy.get('[data-testid="menu.session_management"]')
    }
    getmysessionoption() {
        return cy.get('[data-testid="menu.session_management"]').find('ul > li:nth-child(1) > a')
    }
    getAllSessionsOption() {
        return cy.get('[data-testid="menu.session_management"]').find('ul > li:nth-child(2) > a')
    }
    getApprovalTab() {
        return cy.get('[data-testid*="APPROVALS"]')
    }
    getApprovalButtonTab() {
        return cy.get('[data-testid*="APPROVALS"]')
    }

    getversion4Approvaltab() {
        return cy.get('[data-testid*="APPROVALS"]')
    }
    getApprovaltab() {
        return cy.get('[data-testid*="APPROVALS"]')
    }
    getLogoutButton() {
        return cy.get('a[data-testid="logout-link"]')
    }
    getConfirmLogout() {
        return cy.get('[data-testid="luigi-modal-confirm"]')
    }
    getManageUsersLink() {
        return cy.get('[data-testid="menu.user_management"]').find('ul > li:nth-child(2) > a')
    }
    getPricingEngineLink() {
        return cy.get('[data-testid="test-SHULKA"]')
    }
    getSecurityLink() {
        return cy.get('[data-testid="menu.ums_security"]')
    }
    getSecurityProfileLink() {
        return cy.get('[data-testid="menu.ums_security"]').find('ul > li:nth-child(1) > a')
    }
    getregulatoryprofile() {
        return cy.get('[data-testid="menu.user_management"]').find('ul > li:nth-child(3) > a')
    }
    getmarketingprofile() {
        return cy.get('[data-testid="menu.user_management"]').find('ul > li:nth-child(4) > a')
    }

    getStockManagementOption() {
        return cy.get('a[title="Stock Management"]')
    }
    getStockInitiationOption() {
        return cy.get('a[title="Stock Initiation"]')
    }
    getStockTransferEAInitiation() {
        return cy.get('a[title="Stock Transfer to EA Initiation"]')
    }

    getApproval_1Option() {
        return cy.get('a[title="Stock Approval-1"]')
    }
    getApproval_2Option() {
        return cy.get('a[title="Stock Approval-2"]')
    }
    getRegisterOption() {
        return cy.get('[data-testid="menu.user_management"]').find('ul > li:nth-child(1) > a')
    }

    getLogoutButton() {

        return cy.get('a[data-testid="logout-link"]')
    }
    getLogoutYesButton() {
        return cy.get('button[data-testid="luigi-modal-confirm"]')
    }
    getConfirmLogout() {
        return cy.get('[data-testid="luigi-modal-confirm"]')
    }

    getMyActivity() {
        return cy.get('a[data-testid="test-UMS_MY_ACTIVITY"]')
    }
    getTransferRuleOption() {
        return cy.get('[data-testid="menu.trules"]')
    }
    getTransferRule() {
        return cy.get('[data-testid="menu.trules"] > .fd-nested-list > :nth-child(1) > [data-testid="test-undefined"] > .fd-nested-list__title')

    }
    getDomainManagementOption() {
        return cy.get('[data-testid="test-DOMMANAGE"] > .fd-nested-list__title')
    }

    getTransferControlProfile() {
        return cy.get('[data-testid="menu.tcprofile"]')
    }
    getManageInstrumentLevelTCP() {
        return cy.get('[data-testid="menu.tcprofile"] > .fd-nested-list > :nth-child(1) > [data-testid="test-undefined"]')
    }
    getInstrumentLevelTCPApproval() {
        return cy.get('[data-testid="menu.tcprofile"] > .fd-nested-list > :nth-child(2) > [data-testid="test-undefined"]')
    }
    getTransferRuleApproval() {
        return cy.get('[data-testid="menu.trules"] > .fd-nested-list > :nth-child(3) > [data-testid="test-undefined"] > .fd-nested-list__title')
    }
    getO2CTransferRule() {
        return cy.get('[data-testid="menu.trules"] > .fd-nested-list > :nth-child(2) > [data-testid="test-undefined"]')
    }

    getO2CTransferInitiateOption() {
        return cy.get('a[title="Operator to Channel Transfer Initiate"]')
    }
    getOperatorToChannelOption() {
        return cy.get('#collapsible_listnode_1')

    }
    getProfileIcon() {
        return cy.get('.fd-user-menu div div div button[aria-expanded="false"]')
    }
    getLogOutbttn() {
        return cy.get('a[data-testid="logout-link"]')
    }
    getLogOutYesbttn() {
        return cy.get('button[data-testid="luigi-modal-confirm"]')
    }
    getOperatorToChannelApproval1() {
        return cy.get('[data-testid="menu.o2ctrf"] > .fd-nested-list > :nth-child(2) > [data-testid="test-undefined"]')
    }

    getOperatorToChannelApproval2() {
        return cy.get('[data-testid="menu.o2ctrf"] > .fd-nested-list > :nth-child(3) > [data-testid="test-undefined"] > .fd-nested-list__title')
    }

    getAmbiguousOrderTransacation() {
        return cy.get('[data-testid="menu.ambgormng"] > .fd-nested-list__content > .fd-button')
    }
    getDownloadAmbiguousOrder() {
        return cy.get('[data-testid="menu.ambgormng"] > .fd-nested-list > :nth-child(1) > [data-testid="test-undefined"]')
    }
    getBulkSettlement() {
        return cy.get('[data-testid="menu.ambgormng"] > .fd-nested-list > :nth-child(2) > [data-testid="test-undefined"]')

    }

    getExchangeRateManagementOption() {
        return cy.get('[data-testid="menu.exratesvc"]')
    }
    getAddExchangeRate() {
        return cy.get('[data-testid="menu.exratesvc"] > .fd-nested-list > :nth-child(1) > [data-testid="test-undefined"] > .fd-nested-list__title')
    }
    getApproveRejectER() {
        return cy.get('[data-testid="menu.exratesvc"] > .fd-nested-list > :nth-child(2) > [data-testid="test-undefined"]')
    }
    getShowModificationHistory() {
        return cy.get('[data-testid="menu.exratesvc"] > .fd-nested-list > :nth-child(6) > [data-testid="test-undefined"]')
    }
    getUpdateER() {
        return cy.get('[data-testid="menu.exratesvc"] > .fd-nested-list > :nth-child(3) > [data-testid="test-undefined"]')
    }
    getApproveupdateER() {
        return cy.get('[data-testid="menu.exratesvc"] > .fd-nested-list > :nth-child(4) > [data-testid="test-undefined"]')
    }
    getDomainManagementOption() {
        return cy.get('[data-testid="test-DOMMANAGE"] > .fd-nested-list__title')
    }
    getCategoryManagementOption() {
        return cy.get('[data-testid="menu.catadd"]')
    }
    getAddCategory() {
        return cy.get('[data-testid="menu.catadd"] > .fd-nested-list > :nth-child(1) > [data-testid="test-undefined"] > .fd-nested-list__title')
    }
    getViewCategory() {
        return cy.get('[data-testid="menu.catadd"] > .fd-nested-list > :nth-child(2) > [data-testid="test-undefined"] > .fd-nested-list__title')
    }
    getCAtegoryApprovalOption() {
        return cy.get('[data-testid="test-CAT_APPRL"] > .fd-nested-list__title')
    }
    getUserprofileManagementOption() {
        return cy.get('#collapsible_listnode_3')
    }
    getADDGrades() {
        return cy.get('[data-testid="menu.chgrades"] > .fd-nested-list > :nth-child(1) > [data-testid="test-undefined"] > .fd-nested-list__title')
    }
    getModifyGrades() {
        return cy.get('[data-testid="menu.chgrades"] > .fd-nested-list > :nth-child(2) > [data-testid="test-undefined"] > .fd-nested-list__title')
    }
    getOperatorToChannelApproval2() {
        return cy.get('[data-testid="menu.o2ctrf"] > .fd-nested-list > :nth-child(3) > [data-testid="test-undefined"] > .fd-nested-list__title')
    }
    getDeleteGrades() {
        return cy.get(':nth-child(3) > [data-testid="test-undefined"]')
    }
    getChurnManagement() {
        return cy.get('[data-testid="menu.churnmgmt"]')
    }
    getChurnInitiation() {
        return cy.get('[data-testid="menu.churnmgmt"] > .fd-nested-list > :nth-child(1) > [data-testid="test-undefined"] > .fd-nested-list__title')
    }
    getChurnApproval() {
        return cy.get('[data-testid="menu.churnmgmt"] > .fd-nested-list > :nth-child(2) > [data-testid="test-undefined"] > .fd-nested-list__title')
    }
    getTransactionCorrection() {
        return cy.get('[data-testid="menu.txn_corr"]')
    }
    getreconcilationpage() {
        return cy.get('[data-testid="test-MNREC"]')
    }
    getTransactionCorrectionApproval() {
        return cy.get('[data-testid="menu.txn_corr"] > .fd-nested-list > :nth-child(1) > [data-testid="test-undefined"] > .fd-nested-list__title')
    }
    getMarketingProfileLink() {
        return cy.get('[data-testid="menu.user_management"] > .fd-nested-list > :nth-child(4) > [data-testid="test-undefined"] > .fd-nested-list__title')
    }
    getTransferControlProfileSA() {
        return cy.get('[data-testid="test-TCPROFILE"]')
    }
    getBankingChannelActivation() {
        return cy.get('[data-testid="test-USER_ACC_ACT"]')
    }
    getCashinOrCashout() {
        return cy.get('[data-testid="menu.mtrans"] > .fd-nested-list__content > .fd-nested-list__link > .fd-nested-list__title')
    }
    getCashin() {
        return cy.get('[data-testid="menu.mtrans"] > .fd-nested-list > :nth-child(1) > [data-testid="test-undefined"] > .fd-nested-list__title')
    }
    getStockLimit() {
        return cy.get('[title="Stock Withdrawl Limit"]')
    }
    getCategoryManagement() {
        return cy.get('[data-testid="menu.catadd"] > .fd-nested-list__content > .fd-button')
    }
    getServiceCharge() {
        return cy.get('[data-testid="menu.servcharg"] > .fd-nested-list__content > .fd-button')
    }
    getNewSubscriberCommissionRule() {
        return cy.get('[data-testid="menu.servcharg"] > .fd-nested-list > :nth-child(8) > [data-testid="test-undefined"]')
    }

    getAddServiceChargeCalculator() {
        return cy.get('[data-testid="menu.servcharg"] > .fd-nested-list > :nth-child(5) > [data-testid="test-undefined"]')
    }
    getSenderMFSProvider() {
        return cy.iframe().find('tbody > tr>td.tabcol select#selectMFSSenderProviderId')
    }
    getSenderPaymentInstrument() {
        return cy.iframe().find('tbody > tr>td.tabcol select#senderPaymentInstrumentId')
    }
    getSenderWalletType() {
        return cy.iframe().find('tbody > tr>td.tabcol select#senderLinkedBanksOrWalletTypesId')
    }
    getPayerProfile() {
        return cy.iframe().find('tbody > tr>td.tabcol select#payerProfileGradeCodeId')
    }
    getReceiverMFSProvider() {
        return cy.iframe().find('tbody > tr>td.tabcol select#selectMFSReceiverProviderId')
    }
    getReceiverPaymentInstrument() {
        return cy.iframe().find('tbody > tr>td.tabcol select#receiverPaymentInstrumentId')
    }
    getReceiverWalletType() {
        return cy.iframe().find('tbody > tr>td.tabcol select#receiverLinkedBanksOrWalletTypesId')
    }
    getPayeeProfile() {
        return cy.iframe().find("tbody > tr>td.tabcol select#payeeProfileGradeCodeId")
    }
    getServiceType() {
        return cy.iframe().find('tbody > tr>td.tabcol select#serviceTypeId')
    }
    getTransactionAmount() {
        return cy.iframe().find("tbody > tr>td.tabcol input#profile_confirmCalculator1_reqValue")
    }
    getSubmit() {
        return cy.iframe().find("tbody > tr>td.tabcol input#profile_confirmCalculator1_submitCal")
    }
    //----------------------
    getSettings() {
        return cy.get('[data-testid="test-settings"]')
    }
    getviewmodify() {
        return cy.iframe().find('div>button.btn-settings').eq(1)
    }
    getDonebtn() {
        return cy.iframe().find('.login-btn-modal')
    }
    getedit() {
        return cy.iframe().find('div>.svg-inline--fa.fa-pencil-alt.fa-w-16.edit-icon')
    }
    getQuestion1() {
        return cy.iframe().find('div>select.ques-input').eq(0)
    }
    getType1() {
        return cy.iframe().find('input.ans-input').eq(0)
    }
    getQuestion2() {
        return cy.iframe().find('div>select.ques-input').eq(1)
    }
    getType2() {
        return cy.iframe().find('input.ans-input').eq(1)
    }
    getsavebttn() {
        return cy.iframe().find('button.setting-save-btn')
    }
    //--------------
    getAddServiceCharge() {
        return cy.get('[data-testid="menu.servcharg"] > .fd-nested-list > :nth-child(1) > [data-testid="test-undefined"]')
    }
    getServiceChargeApproval() {
        return cy.get('[data-testid="menu.servcharg"] > .fd-nested-list > :nth-child(6) > [data-testid="test-undefined"]')
    }
    //Rakesh
    getChangePassword() {
        return cy.iframe().find('div>button.btn-settings').eq(0)
    }


    //Monica - Associate

    getMFSProviderwalletType() {
        return cy.get('[data-testid="menu.mfswtm"]')
    }
    getMFSModifyWallet() {
        return cy.get('[title="Modify/Delete Wallet"]')
    }
    getmfs1() {
        return cy.iframe().find('tbody > tr input[id="MfsModifyType_mfsProviderList_mfsProviderType101"]')
    }
    getmfsmodify() {
        return cy.iframe().find('#MfsModifyType_mfsProviderList_button_modify')
    }
    getmodify() {
        return cy.iframe().find('#MfsModifyType_modify_button_modify')
    }
    getselectall() {
        return cy.iframe().find('tbody > tr >td input[id="MfsModifyType_displayServicesForUpdate_checkAll"]')
    }
    getsubmit() {
        return cy.iframe().find('#MfsModifyType_displayServicesForUpdate_button_submit')
    }
    getmessage() {
        return cy.iframe().find('span.actionMessage')
    }

    getApprovaltab1() {
        return cy.get('[data-testid="test-UMS_APPROVALS"]')
    }
    getChanneltoChannel() {
        return cy.get('[data-testid="test-C2C"]')
    }
    getInverseChanneltoChannel() {
        return cy.get('[data-testid="test-INVC2C"]')
    }

    getServiceChargeapproval() {
        return cy.get('a[title="Service Charge Approval"]')
    }
    getServiceChargeModify() {
        return cy.get('a[title="Modify/Delete Service Charge"]')
    }

    getAmbiguousBulkApprovals() {
        return cy.get('[data-testid="menu.ambgormng"] > .fd-nested-list > :nth-child(3) > [data-testid="test-undefined"]')

    }
    //added by prerna
    getTCP() {
        return cy.get('[data-testid="test-TCP_UI"]')
    }

    //Added for to check transaction Assertion in French Language on 17/07/23
    getTransactionadministrative() {
        return cy.get('[title="Transaction administrative"]')

    }

    getCategoryDomainCode() {
        return cy.iframe().find('select[id="domainCode"]').eq(0)

    }

    getViewCatButton() {
        return cy.iframe().find('#viewcat_button_view1')
    }
    getModifyNewSubscriberCommissionRule() {
        return cy.get('[data-testid="menu.servcharg"] > .fd-nested-list > :nth-child(7) > [data-testid="test-undefined"]')
    }



    getSuspendServicecharge() {
        return cy.get('a[title="Suspend/Resume Service Charge"]')
    }
    getNewcommsionrule() {
        return cy.get('a[title="New Customer Commission Rule"]')
    }
    getViewServiceCharge() {
        return cy.get('a[title="View Service Charge"]')
    }

    getBannerManagement() {
        return cy.get('[title="Banner Management"]')
    }
}

export default homePage