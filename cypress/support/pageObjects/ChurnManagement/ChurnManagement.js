class ChurnManagement {
    getCBatchApprove() {
        return cy.iframe().find('[id="approvalTypeCHURN_APPR"]')
    }

    getChurnManagement() {
        return cy.get('[data-testid="menu.churnmgmt"]')
    }
    getChurnInitiation() {
        return cy.get('[data-testid="menu.churnmgmt"] > ul > li:nth-child(1) > a')
    }
    getChurnApproval() {
        return cy.get('[data-testid="menu.churnmgmt"] > ul > li:nth-child(2) > a')
    }
    getDownloadFileTemplate() {
        return cy.iframe().find('a[href*="javaScript:openSheet()"]')
    }
    getChurnInitiationUpload() {
        return cy.iframe().find('input[id="uplFile"]')
    }
    getChurnInitiationUploadSubmit() {
        return cy.iframe().find('[id="submitButton"]')
    }
    getCBatchReject() {
        return cy.iframe().find('[id="approvalTypeCHURN_REJE"]')
    }
    getCBatchApproveRejectBySelection() {
        return cy.iframe().find('[id="approvalTypeCHURN_BOTH"]')
    }
    getChurnApprovalSubmitButton() {
        return cy.iframe().find('[id="appchurn"]')
    }
    getLastRadioButton() {
        return cy.iframe().find('[id="approvedBatchId"]').last()
    }
    getCheckAll() {
        return cy.iframe().find('input[type="checkbox"][id="checkall"]')
    }
    getApprove() {
        return cy.iframe().find('[id="approve"]')
    }
    getChurnInitiationMessage() {
        return cy.iframe().find('.actionMessage')
    }
    getRecentDatainchurn() {
        return cy.iframe().find('#approvalForm>.wwFormTableC>tbody>tr', { force: true }).within(function () {

            cy.get("td").within(function () {
                cy.get('input[id="approvedBatchId"]').last().click({ force: true })
            })
        })
    }
    getChurnInitiationMessage1() {
        return cy.iframe().find('span.actionMessage')
    }
    //----------------------------------------- Cas in -----------------------------------

    getMSISDN() {
        return cy.iframe().find('#paymentMethodNumberId')
    }

    getProvider() {
        return cy.iframe().find('#partyProviderListSel')
    }
    getMSISDN1() {
        return cy.iframe().find('#partyWalletListSel')
    }
    getAmount() {
        return cy.iframe().find('[name="amount"]')
    }
    getPaymentID() {
        return cy.iframe().find('[name="referenceNumber"]')
    }
    getSubmitButton() {
        return cy.iframe().find('#selectForm_button_submit')
    }
    getConfirmButton() {
        return cy.iframe().find('#cashButt')
    }
    getFailedCount() {
        return cy.iframe().find('#failedCount')
    }
    getChurnSttlementInitiate() {
        return cy.get('[data-testid="menu.churnmgmt"] > ul > li:nth-child(4) > a')
    }
    getChurnSttlementApproval() {
        return cy.get('[data-testid="menu.churnmgmt"] > ul > li:nth-child(5) > a')
    }
    getChurnSttelementMSISDN() {
        return cy.iframe().find('#churnMsisdn')
    }
    getChurnUserTye() {
        return cy.iframe().find('#typeId')
    }
    getChurnSttelementSubmit() {
        return cy.iframe().find('#churnSettlement_loadChurnSettlementInitiationList_button_submit')
    }
    getRecieverMSISDN() {
        return cy.iframe().find('#receiverMsisdn')
    }
    getsubmitButton() {
        return cy.iframe().find('#btnAdd')
    }
    getAcceptButton() {
        return cy.iframe().find('#myForm_accept')
    }
    getApprovalConfirm() {
        return cy.iframe().find('#confirm')
    }

    getChurnID() {


        return cy.iframe().find('#approvalForm>.wwFormTableC>tbody>tr', { force: true }).within(function () {

            cy.get("td").within(function () {
                cy.get('input[id="approvedBatchId"]').last().invoke('attr', 'value').then((text) => {
                    const churnSubRegistration = 'cypress/fixtures/userData/churnSubscriberReg.json'
                    cy.readFile(churnSubRegistration).then((data) => {
                        let ID = text.trim()
                        data.ChurnID = ID
                        cy.writeFile(churnSubRegistration, data)
                    })
                })
            })
        })
    }
    //-------------------ChurnEnquiry---------
    getChurnEnquiry() {
        return cy.get('[data-testid="menu.churnmgmt"] > ul > li:nth-child(3) > a')
    }
    getBatchID() {
        return cy.iframe().find('#viewChurnEnquiryInput_batchidForView')
    }
    getAssertEnquiryId() {
        return cy.iframe().find('.tabcol')
    }


}
export default ChurnManagement