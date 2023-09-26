class MobileRecharge{
    getViewMoreBtn(){
      return cy.get('[src="./assets/images/view-more.svg"]')
    }
    
    getMobileNo(){
        return cy.get('[placeholder="Enter Mobile number"]')
    }
    getOperatorDropdown(){
    return cy.get('[class*="mat-select-placeholder"]')
    }
    getOperator(){
        return cy.get('[class="mat-ripple mat-option-ripple"]')
    }
    getAmount(){
        return cy.get('[formcontrolname="amount"]')
    }
    getCurrency(){
        return cy.get('[class*="mat-select-trigger"]').eq(1)
    }
    
    getNormalWallet(){
        return cy.get('[class="font-inter text-xs text-application-light font-medium cursor-pointer"]').eq(0)
    }
    getSelectWallet(){
        return cy.get('div [class="font-inter text-xs text-application-light font-semibold"]').eq(0)
    }
    getProceedBtn(){
        return cy.get('[class*="mt-6 bg-application disabled:bg-opacity-10 font-medium disabled"]')
    }
    
    getReviewConfirmPage(){
        return cy.get('[class="text-black font-inter text-base font-bold"]')
    }
    getPinField(){
        return cy.get('[class="w-9/12 bg-slate-50 outline-none"]')
    }
    getViewPin(){
        return cy.get('[class="w-9/12 bg-slate-50 outline-none"]')
    }
    getVerifyBtn(){
        return cy.get('[data-test-id="review-and-confirm-verify-button"]')
    }
    getDoneBtn(){
        return cy.get('[class="done-button cursor-pointer bg-application"]')
    }
    getSuccessMsgField(){
        return cy.get('[class="check-mark ng-star-inserted"]')
    }

    getLogoutBtn() {
        return cy.get('[class="font-inter text-sm mt-3"]').eq(4)
    }

    getRecentsBtn() {
        return cy.get('[class="font-inter text-[10px] text-application-light font-medium w-14 tablet:w-20 truncate"]').eq(0)
    }

    getViewHistory() {
        return cy.get('[class="text-blue-400 text-xs textbrightness"]')
    }

    getDownloadReceipt() {
        return cy.get('[class="text-[#919EAB] text-xs"]')
    }

    getAddToFavourite(){
        return cy.get('[alt="favourite"]')
    }

    getCopyTransactionId(){
        return cy.get('[src="./assets/images/copy.svg"]')
    }

    getClickToCopyTransactionId(){
        return cy.get('[class="copy-button ng-star-inserted"]')
    }

    getEyeIcon(){
        return cy.get('[src="./assets/images/copy.svg"]')
    }

    getBrowsePlans(){
        return cy.get('[data-test-id="mobileRecharge-browseplans"]')
    }

    getPricePlan(){
        return cy.get('[data-test-id="browsePlan100"]')
    }

    getCurrencyUSD(){
        return cy.get('[class="w-11/12 text-[#7d82b5]"]').eq(0)
    }

    getSelectBankAccount(){
        return cy.get('[data-test-id="mobileRecharge-radio-bank"]')
    }

    getTB101Bank(){
        return cy.get('[class="cursor-pointer h-10 flex align-middle items-center mx-4 mt-2 mb-1"]').eq(3)
    }

    getSelectCard(){
        return cy.get('[data-test-id="mobileRecharge-radio-card"]')
    }

    getVisaCard(){
        return cy.get('[class="cursor-pointer h-10 flex align-middle items-center mx-4 mt-2 mb-1"]').eq(0)
    }

    getAddDebitCard(){
        return cy.get('[font-inter font-semibold text-sm"]').eq(2)
    }

    getFieldError(){
        return cy.get('[class="font-inter font-medium"]')
    }

    getErrorMsgMobileNo(){
        return cy.get('[class="span.mat-simple-snack-bar-content"]')
    }

    getCrossReviewConfirmPage(){
        return cy.get('[src="./assets/images/cross-icon.svg"]')
    }

    getYesButton(){
        return cy.get('[class="w-28 h-12 text-white bg-[#6b45bd] border border-solid border-[#6b45bd] rounded box-border"]')
    }

    getNoButton(){
        return cy.get('[class="w-28 h-12 text-[#6b45bd] border border-solid border-[#6b45bd] rounded box-border"]')
    }
    getOTPVerificationPage(){
        return cy.get('[class="text-[#212B35] font-inter text-lg font-bold"]')
    }
}
export default  MobileRecharge