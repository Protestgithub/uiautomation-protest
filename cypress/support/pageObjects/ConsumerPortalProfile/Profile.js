class ViewProfile{
    getPofileName(){
        return cy.get('[class="font-inter text-xs text-[#AAAAAA] font-semibold"]').eq(0)

        //return cy.get('[id="userName"]')
     }
    getAssertAllField(){
        return cy.get('[class="font-inter text-xs text-[#AAAAAA] font-semibold"]')   
    }
    getEditButton(){
        return cy.get('span.ng-star-inserted')
    }
    getEditVerify(){
        return cy.get('button[class="w-36 h-11 disabled:cursor-not-allowed disabled:bg-slate-100 rounded disabled:text-application cursor-pointer bg-application text-white"]')
    }
    getEditTextBox(){
        return cy.get('[formcontrolname="editDetails"]')
    }
   //------------------Threshold and Limits--------------------------------------

    getOverallLimits(){
        return cy.get('.spinner-section-heading')
    }
    getSelectCurrencyType(){
        return cy.get('#mat-select-2 > .mat-select-trigger')
    }
    getSelectWeeklyType(){
        return cy.get('#mat-select-0 > .mat-select-trigger')
    }
    getDetailLimitExpand(){
        return cy.get('#mat-expansion-panel-header-1 > .mat-expansion-indicator')
    }
    getDetailLimitReceiving(){
        return cy.get('#mat-tab-label-0-1')
    }
    getDetailLimitSpending(){
        return cy.get('#mat-tab-label-0-0')
    }
    getDetailLimitFilter(){
        return cy.get('.filter-headings-text')
    }
    GetServiceListMore(){
        return cy.get('[data-test-id="filter-component-show-more"]')
    }
    GetApplyFilter(){
        return cy.get('[data-test-id="filter-component-clear-button"]')
    }
    getEmailId(){
        return cy.get('[class="font-inter text-xs text-[#AAAAAA] font-semibold"]').eq(2)

    }
    getPaymentId(){
        return cy.get('[calss="font-inter text-xs text-[#AAAAAA] font-semibold"]').eq(3)

    }
    getGender(){
        return cy.get('[class="font-inter text-xs text-[#AAAAAA] font-semibold"]').eq(4)

    }
    getAdress(){
        return cy.get('[class="font-inter text-xs text-[#AAAAAA] font-semibold"]').eq(5)
    }
    
    //------------------------ KYC -----------------------------------------

    getViewKYC(){
        return cy.get('[data-test-id="profile-section-active-kyc-view"]')
    }
    getBackView(){
        return cy.get('#mat-tab-label-3-1')
    }
    getCrossIcon(){
        return cy.get('[src="./assets/images/cross-icon.svg"]')
    }
    getUpload(){
        return cy.get('[class="hover:font-extrabold hover:text-[#3c74b4] font-inter text-xs font-semibold text-[#4099FF]"]')
    }
    getDocumentType(){
        return cy.get('#kycIdType')
    }
    getselectDoc(){
        //return cy.get('[id="mat-option-8"]')
        return cy.get('#kycIdType-panel > mat-option')
    }
    getExpDate(){
        return cy.get('[placeholder="Enter Expiry date"]')
    }
    getKYCIdValue(){
        return cy.get('#kycIdValue')
    }   
    getFrontImage(){
        return cy.get('input[type="file"]')
       // return cy.get('input#kycImageUrl').eq(1)
      //return cy.get(':nth-child(4) > :nth-child(1) > .mx-2 > .ng-star-inserted > .h-\[52\.48px\] > .h-full > .flex-col > .font-inter > div')
        //return cy.get('[data-test-id="profile-section-kyc-form-upload-kyc-label kycImageUrl"]').eq(0)
    }
    getBackImage(){
        return cy.get('[class="flex justify-center font-inter text-application-dark text-[10px] font-medium text-[#1C2572]"]').eq(1)
    }
    getAsserFile(){
        return cy.get('[src="./assets/images/delete.svg"]')
    }
    getKycSubmit(){
        return cy.get('[data-test-id="profile-section-kyc-form-submit-button"]')
        
    }
    //-------------Currency----------------
    getSeclectCurrency(){
        return cy.get('[class="font-inter font-semibold text-[10px] text-[#5A6876]"]')
    }
    getChangeCurrencyPin(){
        return cy.get('[class="outline-none p-2 bg-[#FBFCFE]"]')
    }
    getPinVerify(){
        return cy.get('class="bg-application disabled"]')
    }

}export default ViewProfile