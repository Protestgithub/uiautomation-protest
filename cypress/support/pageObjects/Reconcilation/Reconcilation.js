class Reconcilation {
    getcolumn() {

        return cy.iframe().find('.wwFormTableC  tbody>tr>td')
    }
    getProviderSelect() {
        return cy.iframe().find('[name="providerName"]')
    }
    getprovider1() {
        return cy.get('select[id="reconciliation_loadReconciliationMultiCurr_providerName"]> option')
    }
    getmismatch() {
        return cy.iframe().find('#reconciliation_loadReconciliation .wwFormTableC>tbody>tr', '{force:true}')
    }
    getmismatchvalue() {
        return cy.get('td[class="tableft"]')
    }
    getsubmit() {
        return cy.iframe().find('.btn1')
    }
    getExpenseAccount() {
        return cy.iframe().find('[class="tabcol"]')
    }
    getSystemMainWallet() {
        return cy.iframe().find('[class="tabcol"]')
    }
    getInterestWallet() {
        return cy.iframe().find('[class="tabcol"]')
    }
    getIncomeAccount() {
        return cy.iframe().find('[class="tabcol"]')
    }
    getOnTheFlyAccount() {
        return cy.iframe().find('[class="tabcol"]')
    }
    getCustomerBalance() {
        return cy.iframe().find('[class="tabcol"]')
    }
    getDeletedChurnAccount() {
        return cy.iframe().find('[class="tabcol"]')
    }

} export default Reconcilation