class IMT{ 
    getViewMore(){
        return cy.get('[src="./assets/images/view-more.svg"]')
    }

    getSendAmount(){
        return cy.get('[formcontrolname="youSend"]')
    }
    getReciveAmount(){
        return cy.get('[formcontrolname="theyReceive"]')
    }
    getSelectWallet(){
        return cy.get('div [class="font-inter text-xs text-application-light font-semibold"]').eq(0)
    }
    getProceedBtn(){
        return cy.get('[data-test-id="electric-bill-proceed-to-review"]')
    }
    getFullName(){
        return cy.get('[data-test-id="full-name"]')
    }
    getAccountNum(){
        return cy.get('[data-test-id="account-number"]')    
    }
    getConfirmNum(){
        return cy.get('[data-test-id="confirm-account-number"]')
    }
    getSwiftCode(){
        return cy.get('[data-test-id="swift-code"]')
    }

    getCountryDropdown(){
        return cy.get('#country')
    }

    getSelectCountry(){
        return cy.get('#country > .mat-select-trigger > .mat-select-arrow-wrapper')
    }

    getSelectIndia(){       
         return cy.get('#mat-option-7 > .mat-option-text')   
         }

    getMobileNumber(){
        return cy.get('[data-test-id="mobile-number"]')
    }
    getAddressLine1(){
        return cy.get('[data-test-id="addressline1"]')
    }
    getAddressLine2(){
        return cy.get('[data-test-id="addressline2"]')
    }
    getSelectState(){
    return cy.get('#state > .mat-select-trigger > .mat-select-arrow-wrapper')    
    }
    
    getSelectKA(){        
        return cy.get('#mat-option-17 > .mat-option-text')   
     }

    // getSelectCity(){
    //     return cy.get('[id="city"]').eq(1)
    // }

    getEmailId(){
        return cy.get('[data-test-id="emailid"]')
    }
    getProcced2(){
        return cy.get('[data-test-id="proceed"]')
    }

    getReviewConfirmPage(){
        return cy.get('[class="text-black font-inter text-base font-bold"]')
    }
    
    getPIN(){
        return cy.get('[class="w-9/12 bg-slate-50 outline-none"]')
    }

    getViewPIN(){
        return cy.get('[class="h-6 w-5 my-[5px] cursor-pointer opacity-70 ng-star-inserted"]')
    }
    getVerify(){
        return cy.get('[data-test-id="review-and-confirm-verify-button"]')
    }

    getDone(){
        return cy.get('[data-test-id="transaction-status-done-button"]')
    }

    getSuccessMsg(){
        return cy.get('[src="./assets/images/check-mark.gif"]')
    }

    getAddFav(){
        return cy.get('[src="./assets/images/favourite.svg"]')
    }

    getDownloadReceipt(){
        return cy.get('[src="./assets/images/download-icon.svg"]')
    }

    getViewHistory(){
        return cy.get('[class="text-blue-400 text-xs textbrightness"]')
    }

    getAnotherTransfer(){
        return cy.get('[class="ttext-blue-400 w-20 text-xs"]')
    }

    getCopy(){
        return cy.get('[src="./assets/images/copy.svg"]')
    }

    getClickToCopy(){
        return cy.get('[class="copy-button ng-star-inserted"]')
    }

    getCrossIcon(){
        return cy.get('[alt="cross-icon"]')
    }

    getNoButton(){
        return cy.get('[class="w-28 h-12 text-[#6b45bd]"]')
    }

    getYesButton(){
        return cy.get('[class="w-28 h-12 text-white bg-[#6b45bd]"]')
    }

    getRecents(){
        return cy.get('[data-test-id="recent-data-id-+917775109238"]')
    }
}
export default IMT