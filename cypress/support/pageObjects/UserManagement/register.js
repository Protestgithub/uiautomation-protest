class register {

    getregisterPageTitle(){

        return cy.iframe().find('h4[class="text-secondary"]')
    }

    checkSelectedTabHighlighted()
    {
        return cy.iframe().find('.nav-link.py-3.registration-header.active-link.hover-text-white')
    }

    getDownloadFileTemplate()
{
    return cy.iframe().find('[id="click-download-template"]')
}
      getupload() {
        return cy.iframe().find('.m-auto.d-flex.justify-content-center.align-items-center.py-5')

    }

    getSelectUserTypeTab()
    {
        return cy.iframe().find('.registration-header')
    }

    getUserRole(){
        return  cy.iframe().find('div.mat-radio-label-content')
    }
    getMerchantUserRole(){
        return cy.iframe().find('mat-radio-button[data-test-id="role-Merchant"]')
    }
    getRegistrationMode()
    {
        return cy.iframe().find('.mat-button-focus-overlay')
    }
    getFirstName()
    {
        return cy.iframe().find('input[id="firstName"]')
    }
    getLastName(){
        return cy.iframe().find('input[id="lastName"]')
    }
    getPreferredLanguage()
    {
        cy.iframe().find('#preferredLanguage')
    }
    getLoginID(){
        return cy.iframe().find('input[id="loginId"]')
    }
    getEmailID(){
        return cy.iframe().find('input[id="emailId"]')
    }
    getMobileNumber(){
        return cy.iframe().find('input[id="mobileNumber"]')
    }
    getAdressLine1(){
        return cy.iframe().find('#address1')
    }

    getAdressLine1(){
        return cy.iframe().find('#address1')
    }

    getState(){
        return cy.iframe().find('select[id="state"]')
    }
    getCityissued(){
        return cy.iframe().find('#kycIdIssuePlace')
    }
    getCountryissued(){
        return cy.iframe().find('#kycIdIssueCountry')
    }
    getDateIssued(){
        return cy.iframe().find('#kycIdIssueDate')
    }
    getValidFrom(){
        return cy.iframe().find('#kycIdValidFrom')
    }
    getCity(){
        return cy.iframe().find('select[id="city"]')
    }

    getCountry(){
        return cy.iframe().find('select[id="country"]',"{force:true}")
    }
    getCountry1(){
        return cy.iframe().find('select[id="country"]> option',"{force:true}")
    }
     getCurrency()
    {
        return cy.iframe().find('select[name="currency"]')
    }
    getState(){
        return cy.iframe().find('select[id="state"]')
    }
    getCity(){
        return cy.iframe().find('select[id="city"]')
    }
    getNextButtonBasic(){
        return cy.iframe().find('[id="next"]').eq(0)
    }
    getKycDropDownButton(){
        return cy.iframe().find('[class="ng-fa-icon"]')
    }
       getAllowedValues() {
        return cy.iframe().find('#allowed-values')

    }

    getKycIDType(){
        return cy.iframe().find('#kycIdType')
    }
        getUploadTab(){
        return cy.iframe().find('.mat-step-text-label.ng-star-inserted')
    }
    getKycIDValue(){
        return cy.iframe().find('#kycIdValue')
    }
    getKycGracePeriod(){
        return cy.iframe().find('#kycGracePeriod').eq(0)
    }
    getKycTab(){
        return cy.iframe().find('div.mat-step-text-label.ng-star-inserted').eq(1)
    }

    getNextButtonKYC(){
        return cy.iframe().find('[id="next"]')
    }
    getNextButtonProfile(){
        return cy.iframe().find('[id="next"]').eq(1)
    }
    getKYCButton(){
        return cy.iframe().find('[class="ng-fa-icon"]')
    }


    getKYCGracePeriod(){
        return cy.iframe().find('#kycGracePeriod')
    }

 
      getSecurityProfile()
    {
        return cy.iframe().find('#securityProfile',{force:true})
    }
    getSecurityProfile1()
    {
        return cy.iframe().find('#securityProfile> option',{force:true})
    }

    getAuthProfile(){
        return cy.iframe().find('select[id="authProfile"]')
    }
    getReguProfile(){
        return cy.iframe().find('#regulatoryProfile')
    }

    getMarketingProfile(){
        return cy.iframe().find('#marketingProfile')
    }

    getMarkProfile()
    {
        return cy.iframe().find('#marketingProfile')
    }
    getSaveButton()
    {
        return cy.iframe().find('#save')
    }
    getNextButtonBasic2(){
        return cy.iframe().find('button[data-test-id="next"]').eq(2)
    }
    getNextButtonBasic3(){
        return cy.iframe().find('button[data-test-id="next"]').eq(3)

    }

    getSubmitButton()
    {
        return cy.iframe().find('#submit')
    }

    getConfirmationText()
    {
        return cy.iframe().find('.text-center')
    }
    getModifiedConfirmationText()
    {
        return cy.iframe().find('[class="text-center text-success"]')
    }

    getConfirmationText1()
    {
        return cy.iframe().find('.text-center')
    }
    getDoneButton(){
        return cy.iframe().find('button[id="done"]')
    }
   
    getAddMoreButton(){
        return cy.iframe().find('#kyc-add-more')
    }

    getConfirmButton(){
        return cy.iframe().find('#confirm')
    }
    getSupportOnline()
    {
        return cy.iframe().find('#isTransferReversalRequired')
    }
    getLatitude()
    {
        return cy.iframe().find('#latitude')
    }
getDateofBirth(){
    return cy.iframe().find('#dateOfBirth')
}
getDateofEmployment(){
    return cy.iframe().find('#dateOfEmployment')
}
    getlongitude()
  {
    return cy.iframe().find('#longitude')
  }
  getParent()
    {
        return cy.iframe().find('#parentId')
    }
    getGo()
    {
        return cy.iframe().find('#go')
    }

   getRadioButton()
   {
       return cy.iframe().find('input.form-check-input.mx-0')
   }

    getErrorMessage()
    {
        return cy.iframe().find('.ng-star-inserted [class="text-danger ng-star-inserted"]').eq(0)
    }
    getMakeThisPrimary()
    {
        return cy.iframe().find('.switch #isPrimaryKYCId')
    }

    getTitle(){
        return cy.iframe().find('#title')
    }
   getRegulatory(){
       return cy.iframe().find('#regulatoryProfile')
   }
   getMarketing(){
       return cy.iframe().find('#marketingProfile')
   }
   getSMSC(){
       return cy.iframe().find('#smscId')
   }
   getTopUpId(){
       return cy.iframe().find('#topupId')
   }
   getRechargingOpt(){
       return cy.iframe().find('#rechargingOptions')
   }
   getVouchers(){
       return cy.iframe().find('#vouchers')
   }
   getNextButtonOperatorProfile(){
    return cy.iframe().find('button[data-test-id="next"]').eq(2)
}
getDenominationOptional(){
    return cy.iframe().find('#denominationSeries')
}
getCIF(){

        return cy.iframe().find('[id="cif"]')

    }
  getProceed() {
        return cy.iframe().find('.mat-button-wrapper').contains(' proceed ')

    }
    getConfirm() {
        return cy.iframe().find('#confirm')

    }
    getProfile() {
        return cy.iframe().find('#mat-tab-label-0-2')

    }

   getKYC() {
        return cy.iframe().find('#mat-tab-label-0-1')

    }



    getSelectSubUserTypeTab()
    {
        if(Cypress.env('subscriberNamedAs').includes('Subscriber')){
            return cy.iframe().find('.registration-header').contains('Subscriber')
        }
        else{
            return cy.iframe().find('.registration-header').contains('Customer')
        }
            
    }
getKYCIDType(){
    return cy.iframe().find('#kycIdType')
}
getKYCIDValue(){
    return cy.iframe().find('#kycIdValue')
}
getNextButtonBasic1(){
    return cy.iframe().find('button[data-test-id="next"]').eq(1)
}
getMakeThisPrimaryButton(){
    return cy.iframe().find('[class="slider round"]')
}

getAuthProfile(){
    return cy.iframe().find('select[id="authProfile"]')
}
getReguProfile(){
    return cy.iframe().find('#regulatoryProfile')
}
getPrimary(){
    return cy.iframe().find('.switch #isPrimaryKYCId')
}
getKYCIcon(){
    return cy.iframe().find('[class="mat-ripple mat-step-header-ripple"]')
}
getErrorIcon(){
    return cy.iframe().find('#generate-otp-icon')
}
getLoginError()
{
    return cy.iframe().find('div.ng-star-inserted')
}
getErrorIcon(){
    return cy.iframe().find('#generate-otp-icon')
}
getInvalidInputMessage(){
    return cy.iframe().find('.text-danger.ng-star-inserted')
}
//getValueIsNotUnique(){
  //  return cy.iframe().find('.text-danger').contains(' Value is not unique ')
//}
getErrorIcon(){
    return cy.iframe().find('#generate-otp-icon')
}

getLoginError()
{
    return cy.iframe().find('div.ng-star-inserted')
}

getuniqueness(){
    return cy.iframe().
    find('app-input-with-otp > .ng-star-inserted > div > .text-danger').contains
    ('Value is not unique').should('be.visible')
}
getInvalidInputMessage(){
    return cy.iframe().find('.text-danger.ng-star-inserted')
}
getValueIsNotUnique(){
    return cy.iframe().
    find('app-input-with-otp > .ng-star-inserted > div > .text-danger')
}
getErrorMaxKycReached(){
    return cy.iframe().find('.text-center').eq(1).contains('Maximum accounts for the primary kyc reached')
}
getNextButtonBasic4(){
        return cy.iframe().find('button[data-test-id="next"]').eq(4)
    }
getBankName()
    {
      return cy.iframe().find('select[name="bankName"]')
    }
getAccountNum()
    {
     return cy.iframe().find('input[name="accNumber"]')
    }
getConfirmAccNum()
    {
    return cy.iframe().find('input[name="confirmAccNumber"]')
    }
getNickName()
    {
    return cy.iframe().find('input[name="nickname"]')
    }
getBankAccountType()
    {
      return cy.iframe().find('select[name="bankAccountType"]')
    }
getBankIFSC()
    {
    return cy.iframe().find('input[name="bankIfsc"]')
    }

    getAllBasicFormTextFields(){
        return  cy.iframe().find("app-basic-form > .container-fluid > .row > .col-12 > form > .mt-4 > .ng-star-inserted > app-render-fields > .row > app-input")
    }

    getEmployeeAllBasicFormTextFields(){
        return  cy.iframe().find("app-basic-form > .container-fluid > .row > .col-12 > form > div > .ng-star-inserted > app-render-fields > .row > app-input > input")
    }

    getversion7AllBasicFormTextFields(){
        return  cy.iframe().find("app-basic-form > .container-fluid > .row > .col-12 > form > .mt-4 > .ng-star-inserted > app-render-fields > .row > app-input > div > input:enabled")
    }
    getversion7EmployeeAllBasicFormTextFields(){
        return  cy.iframe().find("app-basic-form > .container-fluid > .row > .col-12 > form > div > .ng-star-inserted > app-render-fields > .row > app-input > div > input")
    }
    getAllBasicFormDropDown(){
        return cy.iframe().find("app-basic-form > .container-fluid > .row > .col-12 > form > .mt-4 > .ng-star-inserted > app-render-fields > .row > app-select > select")
    }
    getAllProfileFormDropDown(){
        return cy.iframe().find("app-profile-form > .container-fluid > .row > .col-12 > form > .ng-star-inserted > app-render-fields > .row > app-select > select")
    }
    getAllKYCDropDown(){
        return cy.iframe().find("#kyc-1 > div > app-render-fields > div > app-select > select")
        
    }
    getAllKYCTextFields(){
        return cy.iframe().find("#kyc-1 > div > app-render-fields > div > app-input > input:visible")
        
    }
    getversion7AllTextFields(){
        return cy.iframe().find("#kyc-1 > div > app-render-fields > div > app-input > div > input:visible")
    }
    getValidThru()
    {
        return cy.iframe().find("#kycIdValidTo")
    }
        //------------------------------------------
    getDOB()
    {
        return cy.iframe().find('input[id="dateOfBirth"]')
    }
    getSavedMsg()
    {
        return cy.iframe().find('.mat-simple-snackbar.ng-star-inserted')
    }
    getUploadfile()
    {
        return cy.iframe().find('[id="upload"]')
    }
    getuploadBtn()
    {
        return cy.iframe().find('[id="upload-document"]')
    }

}
export default register