class BulkPayout {

    getBulkPayoutLink() {
        return cy.get('[data-testid="menu.bulkpay"] > div > a')
    }

    getBulkPayoutInitiateLink() {
        return cy.get('[data-testid="menu.bulkpay"] > ul > li:nth-child(1) > a')


    }
    getServicename() {
        return cy.iframe().find('.browser-default.ng-untouched.ng-pristine.ng-valid')

    }

    getUploadLink() {
        return cy.iframe().find('input[type="file"]')

    }

    getErrorTextBox() {
        return cy.iframe().find('div.alert.alert-danger')

    }
    getDownloadTemplate() {
        return cy.iframe().find('a[target="_blank"]')
    }

    getRemark() {
        return cy.iframe().find('#remarks')
    }


    getSubmit() {

        return cy.iframe().find('button[type="submit"]')

    }
    getBulkApprove() {
        return cy.get('[data-testid="menu.bulkpay"] > ul > li:nth-child(2) > a')

    }


    getBulkRejectButton() {
        return cy.get('[data-testid="menu.bulkpay"]').find('[title="Bulk Payout Reject"]')

    }
    getBulkInitiatedBy() {
        return cy.iframe().find('span.primary_color_dark.fnt_wight600').eq(0)
    }

    getBulkApproveButton() {
        return cy.iframe().find('div.col.s6.div-button-border.center.active-color.approve_btn')
    }

    getTextBox() {
        return cy.iframe().find('div.alert.alert-success')

    }

    getBulkDashboard() {
        return cy.get('[data-testid="menu.bulkpay"] > ul > li:nth-child(3) > a')
    }

    getNumberOfEntries() {
        return cy.iframe().find('div.col.s4.pd_zero >span.lh.collapse_btnPD1').eq(0)
    }


    getBatchIDFromBox() {
        return cy.iframe().find('section.col.s3.pd_zero > div.bulk_id_box.div-download-data.center > div span.primary_color_dark.bulkID')
    }

    getSuccessAsOne() {
        return cy.iframe().find('span.primary-color-light_success_count')
    }

    getalertdngr() {
        return cy.iframe().find('[class="alert alert-danger"]')
    }
    getFailedStatus() {
        return cy.iframe().find('[class="ng-valid ng-dirty ng-touched"]')
    }
}
export default BulkPayout