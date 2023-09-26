class PricingEnginePage {

    getCommissionTab() {

        return cy.iframe().find('#main-menu-commission-service-selector')

    }
    getReOrderBotton() {
        return cy.iframe().find('.btn.reorder-btn')
    }

    getReOrderDONEButton() {
        return cy.iframe().find('.btn.reorder-btn.reorder-btn-fill')
    }
    getCommissionHeader() {
        return cy.iframe().find('div.alert.alert-success span[data-bind="text: successMessage"]')
    }

    getServiceChargeHeader() {
        return cy.iframe().find('h5.page-heading')
    }

    getSubmitPolicy() {
        return cy.iframe().find('a.btn-floating.modal-trigger.cta-background-color.submit-rules')
    }

    getSubmitBtn() {
        return cy.iframe().find('a.modal-action.modal-close.center-align.submit-for-approval-btn')
    }
    getDeleteCashin() {
        return cy.iframe().find('#remove-charge-rule-0')
    }
    getYes() {
        return cy.iframe().find('[class="col s6 no-margin no-padding footer-button"]').eq(4)
    }
    getSubmitClickBtn() {
        return cy.iframe().find('div[data-tooltip="Submit for Approval"]')
    }
    getServiceHeader() {
        return cy.iframe().find('div.alert.alert-success span[data-bind="text: successMessage"]')
    }
    getC2C() {
        return cy.iframe().find('[title="C2C Transfer"]')
    }
    getServiceChargeTab() {
        return cy.iframe().find('#main-menu-service-charge-service-selector')
    }
    getPricingCalculator() {
        return cy.iframe().find('#policy-calculator-serviceSelector')
    }
    getFundTransfer() {
        return cy.iframe().find('[title="Fund Transfer"]')
    }
    getSenderBankName() {
        return cy.iframe().find('[class="col s5 input-select"] [class="browser-default control"]').eq(0)
    }
    getSenderSVAType() {
        return cy.iframe().find('[class="col s5 input-select"] [class="browser-default control"]').eq(1)
    }
    getSenderRole() {
        return cy.iframe().find('[class="col s5 input-select required"] [class="browser-default control"]').eq(0)
    }
    getSenderHierarchy() {
        return cy.iframe().find('[class="col s5 input-select required"] [class="browser-default control"]').eq(1)
    }
    getSenderGrade() {
        return cy.iframe().find('[class="col s5 input-select required"] [class="browser-default control"]').eq(2)
    }
    getReceiverBankName() {
        return cy.iframe().find('[data-bind="with: receiverSelector"] > div > div > [class="col s5 input-select"] > [class="browser-default control"]').eq(0)
    }
    getReceiverSVAType() {
        return cy.iframe().find('[data-bind="with: receiverSelector"] > div > div > [class="col s5 input-select"] > [class="browser-default control"]').eq(1)
    }
    getReceiverRole() {
        return cy.iframe().find('[data-bind="with: receiverSelector"] > div > div > [class="col s5 input-select required"] > [class="browser-default control"]').eq(0)
    }
    getReceiverHierarchy() {
        return cy.iframe().find('[data-bind="with: receiverSelector"] > div > div > [class="col s5 input-select required"] > [class="browser-default control"]').eq(1)
    }
    getReceiverGrade() {
        return cy.iframe().find('[data-bind="with: receiverSelector"] > div > div > [class="col s5 input-select required"] > [class="browser-default control"]').eq(2)
    }
    getCurrencyType() {
        return cy.iframe().find('[id="currencyType"]')
    }
    getTransactionAmt() {
        return cy.iframe().find('[id="calculator-transactionAmount"]')
    }
    getTransactionDateTime() {
        return cy.iframe().find('[id="calculator-transactionDateTime"]')
    }
    getBearerCode() {
        return cy.iframe().find('[id="bearerCode"]')
    }
    getCalculate() {
        return cy.iframe().find('[class="btn calculator-btn"]')
    }
    getassertpc() {
        return cy.iframe().find('div[class="col s12 results-header valign-wrapper"]')
    }
    getCashIN() {
        return cy.iframe().find('[title="Cash In"]')
    }
    getActiveOrInactive() {
        return cy.iframe().find('[class="switch-label"]').eq(1)
    }
    getActiveOrInactive1() {
        return cy.iframe().find('[class="switch-label"]').eq(2)
    }
    getSearchTab() {
        return cy.iframe().find('[class="search-placeholder"]')
    }
    getSearchButton() {
        return cy.iframe().find('[type="submit"]')
    }
    getRule() {
        return cy.iframe().find('[class="truncate rule-policy-name"]')
    }
    getPolicy() {
        return cy.iframe().find('[class="truncate rule-policy-type"]')
    }
    getStatus() {
        return cy.iframe().find('[class="rule-status"]')
    }
    getValidity() {
        return cy.iframe().find('[class="validity-details"]')
    }
    getPolicyVersionLink() {
        return cy.iframe().find('[class="version-button"]')
    }
    getPolicyVersionInPut() {
        return cy.iframe().find('#policy-version')
    }
    getProceedButton() {
        return cy.iframe().find('#open-policy-version')
    }

    getRuleName() {
        return cy.iframe().find('.rule-name')
    }
    getMinCharge() {
        return cy.iframe().find('[for="ruleBased-min-charge"]')
    }
    getMaxCharge() {
        return cy.iframe().find('[for="ruleBased-max-charge"]')
    }
    //----------------------------------Calander Objects--------------------------------------
    getDatePickerStart() {
        return cy.iframe().find('#charge-rule-0-start-date')
    }
    getDatePickerEnd() {
        return cy.iframe().find('#charge-rule-0-end-date')
    }

    getCurrentDateSelect() {
        return cy.iframe().find('.xdsoft_date.xdsoft_current').filter(':visible')
    }
    getCalanderStart() {
        return cy.iframe().find('.xdsoft_datepicker.active:nth-child(1)')
    }
    getNavigateForwardStart() {
        return cy.iframe().find('.xdsoft_next').eq(2)
    }
    getNavigateBackStart() {
        return cy.iframe().find('.xdsoft_prev').eq(2)
    }
    getMonthNamerStart() {
        return cy.iframe().find('.xdsoft_label.xdsoft_month').eq(1).click().find('.xdsoft_option')
    }
    getYearNameStart() {
        return cy.iframe().find('.xdsoft_label.xdsoft_year').eq(1).click().find('.xdsoft_option')
    }
    getCalanderDaysStart() {
        return cy.iframe().find('.xdsoft_date')
    }

    getCurrency() {
        return cy.iframe().find('[id="currency-for-policy"]')
    }

    getCurrencyChangeButton() {
        return cy.iframe().find('[data-bind="click : confirmCurrencyChange"]')
    }
    //------------------------------------------------------------------------------------------
    getSaveDraftBtn() {
        return cy.iframe().find('[class="fixed-action-btn horizontal"]')
    }
    getWhoPays() {
        return cy.iframe().find('[id="charge-rule-0-charge-statement-0-charge-payer"]')
    }
    getSVAType() {
        return cy.iframe().find('[id="charge-rule-0-charge-statement-0-charge-payer-product"]')
    }
    getWhomeToPay() {
        return cy.iframe().find('[id="charge-rule-0-charge-statement-0-charge-receiver"]')
    }
    getChargeStatmentPricing() {
        return cy.iframe().find('[id="charge-statement-0-flat"]')
    }
    getPricingPercntage() {
        return cy.iframe().find('div.col.s6.input-field.no-margin.no-padding')
    }
    getPricingFixedAmt() {
        return cy.iframe().find('div.col.input-field.no-margin.s6').eq(1)
    }
    getPolicyName() {
        return cy.iframe().find('span.truncate')
    }

    //Added 
    getSenderRoleCom() {
        return cy.iframe().find('[data-bind="ifnot: operatorAllowsMultipleValues"] select[class="browser-default control"]').eq(0)
    }
    getSenderHierarchyCom() {
        return cy.iframe().find('[data-bind="ifnot: operatorAllowsMultipleValues"] select[class="browser-default control"]').eq(1)
    }
    getSenderGradeCom() {
        return cy.iframe().find('[data-bind="if: hasReferenceData"] select[class="browser-default control selectized"]')
    }
    getSenderGradeCom1() {
        return cy.iframe().find('[data-bind="if: operatorAllowsMultipleValues"] [class="selectize-input items not-full has-options"]')
    }

    getSenderGradeCom2() {
        return cy.iframe().find('[class="selectize-dropdown-content"]>div').eq(0)
    }
    getGradebtnclick() {
        return cy.iframe().find('div.col.s4 > label')
    }
    getSenderComNew() {

        return cy.iframe().find('div.selectize-input items not-full has-options focus input-active dropdown-active')
    }
    getnextmonth() {
        return cy.iframe().find('.xdsoft_mounthpicker>.xdsoft_next').eq(1)
    }
    getRuleName1() {
        return cy.iframe().find('.truncate.rule-name')
    }
    getCurrentPolicyVersion() {
        return cy.iframe().find('[data-bind="text: activePolicyVersion"]')
    }
    getAddNewRuleBtn() {
        return cy.iframe().find('[data-bind="click: addNewChargeRule"]')
    }
    getSavedDraftPageTitle() {
        return cy.iframe().find('.alert.alert-info.float-reverse')
    }
    getRuleName2() {
        return cy.iframe().find('.row.rule-name-truncate')
    }
    getCloneButton() {
        return cy.iframe().find('.btn.waves-effect.waves-cta.clone-rule-button.modal-trigger')
    }
    getServiceChargeRule() {
        return cy.iframe().find('div.service-charge-rule')
    }
    getCloneService() {
        return cy.iframe().find('.col.s3')
    }
    getCloneButton1() {
        return cy.iframe().find('[class="modal-action modal-close center-align submit-for-approval-btn"]')
    }

    //-------------------------------------------------------------------------------------------------------


    getApproval() {
        return cy.iframe().find('[id="main-menu-approval"]')
    }
    getApprovalRuleName() {
        return cy.iframe().find('.col.s3.truncate')
    }
    getApprovalBtn() {
        return cy.iframe().find('[title="Approve"]')
    }
    getApprovalSubmitBtn() {
        return cy.iframe().find('.btn.col.s12.policy-approve-btn.policy-approve-btn-enabled')
    }
    getApprovalConfirmBtn() {
        return cy.iframe().find('.modal-action.modal-close.waves-effect.center.submit-for-approval-btn')
    }
    getApprovalsuccessText() {
        return cy.iframe().find('.alert.alert-success')
    }
    getApprovalpolicy() {
        return cy.iframe().find('.collapsible-header.pending-policy-header')
    }
    //----------------------Phase2 created Objects------------------------------------------


    getclonedbutton2() {
        return cy.iframe().find('.clone-searched-rule-btn')
    }
    getSaveDraft() {
        return cy.iframe().find('[data-tooltip="Save Draft"]')
    }
    getDiscardDraft() {
        return cy.iframe().find('[class="btn-floating modal-trigger error-background-color discard-draft"]')
    }
    getRevertSaved() {
        return cy.iframe().find('[data-tooltip="Revert To Last Saved"]')
    }
    getSearchConditions() {
        return cy.iframe().find('[class="selectize-input items not-full has-options"]')
    }
    getAutoBillPaymentSettings() {
        return cy.iframe().find('[title="Auto Bill Payment Settings"]')
    }
    getAutoBillPayment() {
        return cy.iframe().find('[title="Auto Bill Payment"]')
    }
    getMinChargeSettings() {
        return cy.iframe().find('#min-charge')
    }
    getMaxChargeSettings() {
        return cy.iframe().find('#max-charge')
    }
    getSwitch() {
        return cy.iframe().find('.switch')
    }
    getOK() {
        return cy.iframe().find('[class="col s6 no-margin no-padding footer-button"]')
    }
    getSelectRule() {
        return cy.iframe().find('[class="col l5 rule-name-details"]')
    }
    getSearchRule() {
        return cy.iframe().find('#rule-search-container')
    }

    getSearchTextField() {
        return cy.iframe().find('#search')
    }

    getSearchButton2() {
        return cy.iframe().find('.search-btn.waves-effect.waves-cta')
    }
    getCloneButton2() {
        return cy.iframe().find('.clone-charge-rule')
    }
    getPolicyNameList() {
        return cy.iframe().find('a.clone-policy-buttons.truncate').eq(2)
    }
    getClonedPolicy() {
        // return cy.iframe().find('div[class="col l5 rule-name-details"]').eq(1)
        return cy.iframe().find('.col.l5.rule-name-details').eq(0)

    }
    getCloneButton3() {
        return cy.iframe().find('[class="modal-action modal-close center-align submit-for-approval-btn"]')
    }
    //----------------------------------Arpitha/Phase2-----------------------------------

    getEnterprisePayment() {
        return cy.iframe().find('[title="Enterprise Payment"]')
    }

    //----------
    getTransactionTax() {
        return cy.iframe().find('[id="main-menu-tax-service-selector"]').eq(0)
    }
    getValidityCheck() {
        return cy.iframe().find('[class="row rule-validity no-margin"]').eq(0)
    }
    getCashOut() {
        return cy.iframe().find('[title="Cash Out"]')
    }
    getVersion() {
        return cy.iframe().find('[class="version-button"]')
    }

    //------------------------------------------
    getSearchButton2() {
        return cy.iframe().find('.search-btn.waves-effect.waves-cta')
    }
    getCloneButton2() {
        return cy.iframe().find('.clone-searched-rule-btn')
    }
    getPolicyNameList() {
        return cy.iframe().find('a.clone-policy-buttons.truncate').eq(0)
    }
    getClonedPolicy() {
        // return cy.iframe().find('div[class="col l5 rule-name-details"]').eq(1)
        return cy.iframe().find('.col.l5.rule-name-details').eq(0)

    }

    //----------------------------------------
    getDiscountRule() {
        return cy.iframe().find('li#submenu-service-charge-policy-waive-rule>a#submenu-service-charge-waive-rule')
    }
    getDiscountAddNewRuleBtn() {

        return cy.iframe().find('[data-bind="click: addNewDiscountRule"]')
    }
    getDiscountGivenTo() {
        return cy.iframe().find('select#discount-rule-0-discount-statement-0-waivedOff-partyType')

    }
    getDiscountFixedAmount() {
        return cy.iframe().find('input#discount-statement-0-fixed-discount-amount')
    }

    getTaxationRule() {
        return cy.iframe().find('li#submenu-service-charge-policy-tax-rule>a#submenu-service-charge-taxRule')
    }

    getTaxAddNewRuleBtn() {
        return cy.iframe().find('[data-bind="click: addNewTaxRule"]')
    }

    getCommissionTaxationRule() {
        return cy.iframe().find('li#submenu-commission-policy-tax-rule>a#submenu-commission-tax-rule')
    }
    getAddCommissionNewRuleBtn() {
        return cy.iframe().find('[data-bind="click: addNewTaxRule"]')
    }

    getTransactionTax() {
        return cy.iframe().find('#main-menu-tax-service-selector')
    }
    //--------
    getSearchedRule() {
        return cy.iframe().find('div>div>[class="rule-name-details"]')
    }
    getRejectedPolicy() {
        return cy.iframe().find('.top-menu-item-link.pending-message') //Added missing dot before pending word on 17/07/23
    }
    //--------------------------------
    getRuleName() {
        return cy.iframe().find('.rule-name').eq(0)
    }

    getDiscountFixedAmount() {
        return cy.iframe().find('input#discount-statement-0-fixed-discount-amount').eq(0)
    }

    getTransactionTax() {
        return cy.iframe().find('#main-menu-tax-service-selector')
    }
    getPricingPercntage() {
        return cy.iframe().find('div.col.s6.input-field.no-margin.no-padding').eq(0)
    }

    getselectcurrency() {
        return cy.iframe().find('select#currency-for-policy')

    }

    getselectproceed() {
        return cy.iframe().find('a[data-bind="click : confirmCurrencyChange"]')
    }

    //--------
    getPolicyview() {
        return cy.iframe().find('.policy-view-btn.settings-btn')
    }
    getViewRule() {
        return cy.iframe().find('.rule-name-details')
    }

    getClickOnRuleName() {
        return cy.iframe().find('[data-bind="text: chargeRuleSettings.selectedRuleName"]')
    }
    getApprovalSubmit() {
        return cy.iframe().find('[class="col s6 review-action"]').eq(0)
    }

    getDeleteoption() {
        return cy.get('.fd-page.iframeContainer.svelte-1v5e28n > iframe').then(($iframe) => {
            const $body = $iframe.contents().find('body')
            const $win = $iframe[0].contentWindow
            cy.stub($win, 'confirm', () => true).as('windowConfirm')
            cy.stub($win.console, 'log').as('consoleLog')
            cy.wrap($body).find('[class="col s6 no-margin no-padding footer-button"]').eq(4).click()
        })
    }
    getApprovalCashIn() {
        return cy.iframe().find('.col.s4.pending-policy-name')
    }
    getCommissionRule() {
        return cy.iframe().find('[class="policy-type-padding"]')
    }
    getServiceRule() {
        return cy.iframe().find('[class="collapsible policy-list-container"]')
    }
    getdiscountRule() {
        return cy.iframe().find('[data-bind="if: isForServiceChargePolicy && policyChanges().discountRulesChanges.hasReviewableChanges, click: showDiscountRules, css: {selected: selectedRuleTypeIsDiscountRules}"]')
    }
    gettaxationRule() {
        return cy.iframe().find('[data-bind="if: !isForInterestPolicy && !isForTaxPolicy && policyChanges().taxRulesChanges.hasReviewableChanges, click: showTaxRules, css: {selected: selectedRuleTypeIsTaxRules}"]')
    }


    getReceiverSVA() {
        return cy.iframe().find('[id="charge-rule-0-charge-statement-0-charge-receiver-product"]')
    }

    getPercentage() {
        return cy.iframe().find('[type="text"]').eq(1)
    }

    getErrorMsgTxt() {
        return cy.iframe().find('div.alert.alert-danger.float-reverse')
    }

    getPrevmonth() {
        return cy.iframe().find('.xdsoft_mounthpicker>.xdsoft_prev').eq(1)
    }

    getDateMsg() {
        return cy.iframe().find('div.error').eq(0)
    }
    getDiscardmsg() {
        return cy.iframe().find('div>span[class="feedback-heading center-block"]')
    }


    getSlab() {
        return cy.iframe().find('#charge-statement-0-slabbed')
    }
    getSerchBycondition() {
        return cy.iframe().find('[class="selectize-input items not-full has-options"]')
    }
    getOption() {
        return cy.iframe().find('[class="selectize-dropdown-content"]')
    }

    getFromSlab() {
        return cy.iframe().find('#slab-input-range').eq(0)
    }
    getToslab() {
        return cy.iframe().find('div>input#slab-input-range').eq(1)
    }

    getDeleteSlab() {
        return cy.iframe().find('[class="col s1 remove-slab align-left"]').eq(1)
    }
    getRemoveSlab() {
        return cy.iframe().find('.remove-slab-btn').eq(1)
    }



    getOwnertochannel() {
        cy.iframe().find('[title="Owner To Channel"]')
    }

    getCommission() {
        cy.iframe().find('[href="/shulka/commissionPolicy"]')
    }
    getComissionApproval() {
        cy.iframe().find('[class="col s4 pending-policy-name"]')
    }
    getTransactionTaxaprvl() {
        cy.iframe().find('[class="policy-type-padding"]').eq(1)
    }
    getWhomepaySVA() {
        return cy.iframe().find('#charge-rule-0-charge-statement-0-charge-receiver-product')
    }



    getmenutab() {
        return cy.iframe().find('ul.submenu-items>li>a')
    }
    getDeleteIcon() {
        return cy.iframe().find('i#remove-charge-rule-0')
    }
    getDeleteCloseBtn() {
        return cy.iframe().find('div#delete-confirmation>div>i.material-icons')
    }
    getCancelBtn() {
        return cy.iframe().find('div#delete-confirmation>div.row.modal-footer>div>a').eq(1)
    }

    getDeleteMsg() {
        return cy.iframe().find('p.modal-content-body')
    }

    getOkayBtn() {
        return cy.iframe().find('div#delete-confirmation>div.row.modal-footer>div>a').eq(0)
    }


    getPricingEnginePage(){
        return cy.iframe().find('[class="col l10 m9 float"]')
    }
    getSlab(){
        return cy.iframe().find('#charge-statement-0-slabbed')
    }
    getBasedOnTransactionAmount(){
        return cy.iframe().find('#charge-rule-0-charge-statement-0-pricing-method-slab-basis')
    }
    getNewChargeStatement(){
        return cy.iframe().find('[class="btn-flat add-new-charge-statement-btn center"]')
    }
    getWhoPays1(){
        return cy.iframe().find('[id="charge-rule-0-charge-statement-1-charge-payer"]')
    }
    getWhomeToPay1() {
        return cy.iframe().find('[id="charge-rule-0-charge-statement-1-charge-receiver"]')
    }


//--------------------------------------------------------
getCardToWallet() {
    return cy.iframe().find('[title="Card To Wallet Service"]')
}
getIMT(){
    return cy.iframe().find('[title="International Money Transfer"]')
}
getRechargeOthers(){
    return cy.iframe().find('[title="Recharge - Others"]')
}
getRechargeSelf(){
    return cy.iframe().find('[title="Recharge - Self"]')
}

getBillPayment(){
    return cy.iframe().find('[title="Bill Payment"]')
}
getB2W(){
    return cy.iframe().find('[title="Bank to SVA Transfer"]')
}
getW2B(){
    return cy.iframe().find('[title="SVA To Bank Transfer"]')
}

}
export default PricingEnginePage