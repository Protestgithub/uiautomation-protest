class MerchentPay{

    getMobileNumber(){
        return cy.get('.transactionContainer > form > div > input')
    }

    getAmount(){
       return cy.get('.inputField.justify-between')
    }

    getAmountError(){
        return cy.get('[class="font-inter font-medium"]')
    }
getCurrency(){
    return cy.get('#mat-select-2')
}
getSelectCurrencyType(){
    return cy.get('.mat-select-arrow-wrapper')
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
getSelectATM(){
    return cy.get('[class="ng-valid ng-dirty ng-touched"]').eq(2)
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
getcrossIcon(){
    return cy.get('[alt="cross-icon"]')
}
getNO_Button(){
    return cy.get('[class="w-28 h-12 text-[#6b45bd] border border-solid border-[#6b45bd] rounded box-border"]')
}
getPinField(){
    return cy.get('[class="w-9/12 bg-slate-50 outline-none"]')
}
getPinErrorMessage(){
    return cy.get('[class="text-red-600 mx-1"]')
}
getViewPin(){
    return cy.get('[alt="icon-visible-off"]')
}
getAssertFields(){
    return cy.get('[class="font-inter text-xs font-semiboldbold text-gray-400"]')
}
getAssertFields1(){
    return cy.get('[class="flex justify-between mb-1 ng-star-inserted"]')
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
getHistory(){
    return cy.get('[class="mb-9 mx-2"]')
}
getOrderDetail(){
    return cy.get('[data-test-id="transaction-history-statement-change-to-order"]')
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
getHistory(){
    return cy.get('[class="mb-9 mx-2"]')
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
getFavourites(){
    return cy.get('[data-test-id="transaction-status-add-to-favourites-1"]')
}   

}export default MerchentPay