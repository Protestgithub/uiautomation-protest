class TransactionCorrection{

    
    getapprove(){
        return cy.get('input[id="txnCorrectionApp_viewTxnDetails_button_approve"]')
    }
    getcolumn(){
        return cy.iframe().find('table.wwFormTableC tbody>tr')
    }
    getTransactionId()
    {
    return cy.iframe().find('#txnCorrectionApp_viewTxnDetails td.tabcol:nth-child(1)')
    }
    getradiobutton(){
        return cy.get('input[type=radio]')
    }
    getremarks(){
        return cy.get('input#txnCorrectionApp_viewTxnDetails_remarks')
    }
    getsubmit()
    {
        return cy.get('.btn1')
    }
    getTransactionIdApproval()
    {
    return cy.iframe().find('#txnCorrectionApp_viewTxnDetails td.tabcol:nth-child(2)')
    }
     getsuccessmessage()
    {
        return cy.iframe().find('.actionMessage')
    }
    getReject()
    {
        return cy.get('input[id="txnCorrectionApp_viewTxnDetails_button_reject"]')
    }
    getTCID()
    {
        return cy.get('[class="tabcol"]').eq(0)
    }
    getSuccessReject()
    {
        return cy.iframe().find('[class="actionMessage"]').eq(1)
    }



}
export default TransactionCorrection