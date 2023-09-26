class BankManagement{
    getBankMaster()
    {
        return cy.get('[data-testid="menu.bank"] > div > a')
    }
    getBankMasterx4()
    {
        return cy.get('[data-testid="test-BANK"]')
    }
    getViewBankList(){
        return cy.get('[data-testid="menu.bank"] > ul > li:nth-child(2) > a')
    }
    getAllBankNames(){
        return cy.iframe().find('.mat-column-bankName')
    }
    getAddBank()
    {
        return cy.get('[data-testid="menu.bank"] > ul > li:nth-child(1) > a', { timeout: 30000 }).eq(0)
    }
    getDownloadFileTemplate() {
        return cy.iframe().find('a[href*="javaScript:openSheet()"]',{ timeout: 30000 })
    }
    getProvider()
    {
        return cy.iframe().find('#fileUploadForm_providerId')
    }
    getProvider1()
    {
        return cy.iframe().find('select[id="fileUploadForm_providerId"]> option')
    }
    getBankName()
    {
        return cy.iframe().find('#fileUploadForm_bankName',{ timeout: 30000 })
    }
    getPoolAccountNo()
    {
        return cy.iframe().find('input[name="poolAccountNo"]')
    }
    getBankId()
    {
        return cy.iframe().find('#fileUploadForm_bankId')
    }
    getBankType()
    {
        return cy.iframe().find('#bankType')
    }
    getBankType1()
    {
        return cy.iframe().find('#bankType> option')
    }
    getDefaultRoutingBank()
    {
        return cy.iframe().find('#defaultRoutingBank')
    }
    getPoolAccountType()
    {
        return cy.iframe().find('#fileUploadForm_poolAccType')
    }
    getPoolAccountType1()
    {
        return cy.iframe().find('#fileUploadForm_poolAccType> option')
    }
    getCBSType()
    {
        return cy.iframe().find('#fileUploadForm_cbsType')
    }
    getCBSType1()
    {
        return cy.iframe().find('#fileUploadForm_cbsType> option')
    }
    getPriority()
    {
        return cy.iframe().find('#fileUploadForm_priority')
    }
    getsubmitButton()
    {
        return cy.iframe().find('#submitButton')
    }
    getChooseFile()
    {
        return cy.iframe().find('#uplFile')
    }
    getAssert()
    {
        return cy.iframe().find('.actionMessage')
    }
    getSubmitButton()
    {
        return cy.iframe().find('#submitButton')
    }
    getMFSproviderBankTypeMaster()
    {
        return cy.get('[data-testid="menu.mfsbtm"] > div > a')
    }
    getModifyORDelete()
    {
        return cy.get('[data-testid="menu.mfsbtm"] > ul > li:nth-child(2) > a')
    }
    getBankname()
    {
        return cy.iframe().find('.label').eq(1)
    }
    getMFS1()
    {
        return cy.iframe().find('[name="mfsProviderId"]').eq(0)
    }
    getMFS2()
    {
        return cy.iframe().find('#MfsBankMapping_mfsProviderListForBankMapping_mfsProviderId102')
    }
    getMFS3()
    {
        return cy.iframe().find('#MfsBankMapping_mfsProviderListForBankMapping_mfsProviderId103')
    }
    getModify()
    {
        return cy.iframe().find('[value="Modify"]')
    }
    getDefaultBankType()
    {
        return cy.iframe().find('#MfsBankMapping_modifyBankMapping_defaultBankType')
    }
    getCheckBox(){
        return cy.iframe().find('[type="checkbox"]')
    }
    getModify1(){
        return cy.iframe().find('#MfsBankMapping_displayServicesForEditBankMapping_button_modify')
    }
    getAsserMessage()
    {
        return cy.iframe().find('[class="actionMessage"]')
    }
    getSelectAll()
    {
        return cy.iframe().find('#MfsBankMapping_displayServicesForEditBankMapping_checkAll')
    }
    getSubmit()
    {
        return cy.iframe().find('[value="Submit"]')
    }
    getErrorMessage()
    {
        return cy.iframe().find('.errorMessage')
    }
    getSuccessMessage()
    {
        return cy.iframe().find('span.actionMessage')
    }
//-------------------------------------------------------------------------------

getModifyServiceprovider()
{
    return cy.get('[data-testid="menu.bank"] > ul > li:nth-child(2) > a')
}
getSelectBank()
{
return cy.iframe().find('select[name="bankId"]')
}
getStatus()
{
    return cy.iframe().find('[name="optBankAccounts[0].status"]')
}
getConfirmbtn()
{
    return cy.iframe().find('[value="Confirm"]')
}

}
export default BankManagement