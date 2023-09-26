class API{
getOTPicon(){
    return cy.iframe().find('[id="generate-otp-icon"]')
}
getOTPDailogbox(){
    return cy.iframe().find('input[id*=otp_]')
}
getVerifybttn(){
    return cy.iframe().find('.mat-verify-button')
}
getOTPDailogbox1(){
    return cy.iframe().find('.otpInput')
}
getVerifybttn1(){
    return cy.iframe().find('.verify-btn')
}
//Added for consumer portal on 27/06/2023
getOTPConsumerPortal(){
    return cy.get('input[id*=otp_]')
}

getVerifyOtpBtnCP(){
    return cy.get('[data-testid="verify-otp-btn"]')
}

}
export default API

