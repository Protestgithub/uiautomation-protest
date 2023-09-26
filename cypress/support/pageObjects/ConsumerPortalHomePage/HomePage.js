class HomePage{

    getWelcomeUserName(){
        return cy.get('[class="font-bold tablet:text-2xl text-xl ng-star-inserted"]')
    }
    getLogout(){
        return cy.get('[class="mat-ripple mat-menu-ripple"]').contains('Logout')
    }
    getDropDown(){
        return cy.get('[class="mat-menu-trigger menu-drop-icon cursor-pointer"]')
    }
    getWithdrawCash(){
        return cy.get('[class*="text-label-custom"]').contains('Withdraw cash')
    }
    getMerchentPay(){
        return cy.get('[src="./assets/images/pay-merchant.svg"]')
    }
    getInternationalTransfer(){
        return cy.get('[src="./assets/images/international-transfer.svg"]')
    }
    getViewProfile(){
        return cy.get('[class="mat-menu-trigger flex justify-between items-center gap-2 cursor-pointer"]')
    }
    getProfile(){
        return cy.get('[data-testid="profile-menu-item"] > .font-inter')
    }
    getLanguage(){
        return cy.get('[class="language outline-gray-100"]').eq(0)
    }
    getSelectLanguage(){
        return cy.get('[class="language-dropdown"]').eq(1)
    }
    getViewMore(){
        return cy.get('[src="./assets/images/view-more.svg"]')
    }
    //----------------------------------------------------------------
    getElectricityBill(){
    return cy.get('[data-test-id="finansial-service-services.electricityBill"]')
    }
    getMobileRecharge(){
        return cy.get('[data-test-id="finansial-service-services.mobileRecharge"]')
    }

}
export default HomePage