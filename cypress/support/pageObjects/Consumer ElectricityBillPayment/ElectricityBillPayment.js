class ElectricityBillPayment
{
getBoardName()
{
    return cy.get('div .mat-select-trigger')
}
getBoardNameselect()
{
    return cy.get('span.mat-option-text').eq(1)
}
getCustomerId()
{
    return cy.get('[data-test-id="electric-bill-customer-id"]')
}
getProceedButton()
{
    return cy.get('[data-test-id="electric-bill-get-bill-details"]')
}
getProceedButton1()
{
    return cy.get('[data-test-id="electric-bill-proceed-to-review"]')
}
getPin(){
    return cy.get('input[type="password"]')
}
getVerifyButton(){
    return cy.get('[data-test-id="review-and-confirm-verify-button"]')
}
getNormalWallet(){
    return cy.get('[data-test-id="101-12"]')
}
gethoverPin(){
    return cy.get('div img.h-6.w-5')
}

getVerifyButton(){
    return cy.get('[data-test-id="review-and-confirm-verify-button"]')
}

getwallet(){
    return cy.get('[data-test-id="electric-bill-radio-wallet"]')
}
getcurrency()
{
    return cy.get('.font-inter.text-xs.text-indigo-800')
}
getNormalWallet(){
    return cy.get('[data-test-id="101-12"]')
}
getElectricBillAmount(){
    return cy.get('[formcontrolname="electricBillAmount"]')
}
getSelectWallet(){
    return cy.get('div [class="font-inter text-xs text-application-light font-semibold"]').eq(0)
}
getViewHistory(){
    return cy.get('[class="text-blue-400 w-20 text-xs"]')
}
getwallethistory(){
    return cy.get('[data-test-id="transaction-history-statement-change-to-wallet"]')
}
getTransactionId(){
    return cy.get('[class="transaction-id"')
}
getSuccessMessage(){
    return cy.get('[class="font-bold font-inter text-xs w-auto text-[#28C064]"]').eq(1)
}
getAnothetTransaction(){
    return cy.get('[data-test-id=" transaction-status-make-new-payment"]')
}
getautopay()
{
    return cy.get('input#autoPayment')
}
getautopaystatement(){
    return cy.get('div.flex.gap-2.text-center.items-center ')
}
getcheckautopay()
{
    return cy.get('span.text-sm')
}
getautopaymentinfo()
{
    return cy.get('[data-test-id="electric-bill-auto-payment-info"]')
}
getautopayok()
{
    return cy.get('.text-center[type ="button"]')
}
getcopytransactionId()
{
    return cy.get('[data-test-id="transaction-status-copy-transaction-id"]')
}
getcopied()
{
    return cy.get('.copy-button.ng-star-inserted')
}
gettransactiondetails()
{
    return cy.get('.transaction-details-value.ng-star-inserted')
}
getbank(){
    return cy.get('[data-test-id="electric-bill-radio-bank"]')
       
}
getpickname()
{
    return cy.get('div [class="font-inter text-xs text-indigo-800 font-semibold ng-star-inserted"]')
}
getcard()
{
    return cy.get('[data-test-id="electric-bill-radio-card"]')   
}
getnewcard(){
    return cy.get('[data-test-id="user-wallets-add-new-card"]')
}
getCredittCard(){
    return cy.get('[data-test-id="add-new-card-shared-Credit"]')
}
getcardclose(){
    return cy.get('[data-test-id="add-new-card-shared-close"]')    
}
getcanceltransaction(){
    return cy.get('[data-test-id="review-and-confirm-initiate-closing"]')    
}
getconfirmpopup()
{
    return cy.get('.font-inter.text-lg')
}
getclickYes(){
    return cy.get('button.w-28.h-12 ').eq(1)
}
getclickNo(){
    return cy.get('button.w-28.h-12 ').eq(0)
}
getReviewConfirm()
{
    return cy.get('div.text-black.font-inter.text-base.font-bold')
}
getcardtype()
{
    return cy.get('div [class="mx-2 font-inter text-application text-xs font-medium"]').eq(1)
}
getcardnumber(){
    return cy.get('[data-test-id="add-new-card-shared-cardnumber"]')    
}
getcardHolderName(){
    return cy.get('[data-test-id="add-new-card-shared-name-input"]')    
}
getexpirydate(){
    return cy.get('[data-test-id="add-new-card-shared-expirydate"]')    
}
getcardHolderNickName(){
    return cy.get('[data-test-id="add-new-card-shared-nickname"]')    
}
getcontinuepayment(){
    return cy.get('[data-test-id="add-new-card-shared-add-button"]')
}
getsavecard(){
    return cy.get('[data-test-id="add-new-card-shared-save-card"]')
}
getwalletstatment(){
    return cy.get('[data-test-id="transaction-history-statement-change-to-wallet"]')
}
getTransactionId(){
    return cy.get('[class="transaction-id"]')
}
getSuccessMessage(){
    return cy.get('span.font-bold.font-inter.text-xs').eq(2)
}
getdownloadreceipt(){
    return cy.get('[data-test-id="transaction-status-download-receipt-2"]')
}
getdone(){
    return cy.get('[data-test-id="transaction-status-done-button"]')
}
getTransactionDate()
{
    return cy.get('div.flex.justify-center.text-center')
}
getsavecarddetails()
{
    return cy.get('div [class="font-inter text-xs text-indigo-800 font-semibold"]')
}
//Added french launguage on 14/07/23

getfrenchlanguage(){
    return cy.get('button.language')
}
getoptionlanguage()
{
    return cy.get('button.language-dropdown')
}
getdetails()
{
    return cy.get('p.transaction-details-title')
}
getautopaytext(){
    return cy.get('div.font-inter.font-medium.text-sm ')
}

}export default ElectricityBillPayment