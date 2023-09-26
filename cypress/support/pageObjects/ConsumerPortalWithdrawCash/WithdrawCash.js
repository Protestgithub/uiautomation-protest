class WithdrawCash{
    
    getAgentRadioBtn(){
        return cy.get('[type="radio"]').eq(0)
    }
    getATMRadioBtn(){
        return cy.get('[type="radio"]').eq(1)
    }
    getATMInfoBtn(){
        return cy.get('[class*="mx-2 mb-1"]')  //('[class="mx-2 mb-1 cursor-pointer"]')
    }
    getMobileNoAndReceiverCode(){
        return cy.get('#userHandle')
    }
    getAmount(){
        return cy.get('[formcontrolname="amount"]')
    }
    getCurrency(){
        return cy.get('#mat-select-2')
    }
    getRemarks(){
        return cy.get('[formcontrolname="remarks"]')
    }
    getRemarksCount(){
        return cy.get('[class="ng-star-inserted"]').contains('/30')
    }
    getNormalWallet(){
        return cy.get('div [class="font-inter text-xs text-application-light font-medium"]').contains('Normal')
    }
    getWalletCurrency(){
        return cy.get('div [class="font-inter text-xs text-indigo-800 font-semibold"]').eq(0)
    }
    getSelectWallet(){
        return cy.get('div [class="font-inter text-xs text-application-light font-semibold"]').eq(0)
    }
    getProceedBtn(){
        return cy.get('[class*="box-border"]')
    }
    getATMInfoHeading(){
        return cy.get('[class="w-10/12 font-inter font-bold text-base text-[#212B35] text-opacity-90 leading-5"]')
    }
    getSelectATMInfoOk(){
        return cy.get('[class="text-center w-36 h-11 rounded bg-application text-white outline-none mt-2 cursor-pointer"]')
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
        return cy.get('[data-test-id="transaction-status-done-button"]')
    }
    getSuccessMsgField(){
        return cy.get('[class="status ng-star-inserted"]')
    }
    getCopyTransactionId(){
        return cy.get('[class="mat-tooltip-trigger"]')
    }
    getFieldError(){
        return cy.get('[class="font-inter font-medium"]')
    }
    getVerifyBtn2(){
        return cy.get('')
    }
    getOTPVerificationPage(){
        return cy.get('[class="text-[#212B35] font-inter text-lg font-bold"]')
    }
    getVerifyBtn2(){
        return cy.get('')
    }
    getVerifyBtn2(){
        return cy.get('')
    }
    getVerifyBtn2(){
        return cy.get('')
    }
    
}
export default WithdrawCash