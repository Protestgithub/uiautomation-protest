class loginPage{

    getiFrame(){
        return cy.get('[class*="iframeContainer"]').first()
          
    }
    getInputForm(){
        return cy.iframe().find('.form-input')
    }
    getchangepasswordmessage()
    {
        return cy.iframe().find('p.text-content')
    }
    getLoginBtn(){
        return cy.iframe().find('.login-btn')
    }
    getchangepassword(){
        return cy.iframe().find('button[class="change-password-btn"]')
    }
    getloginbtn1()
    {
        return cy.iframe().find('.login-btn-modal')
    }
    getUserLoginMessage()
    {
        return cy.iframe().find('div.snackbar:nth-child(1) > span:nth-child(2)')
    }
    //--------------------------------------------------------------------------------------------
    getUserLockedMsg()
    {
        return cy.iframe().find('.snackbar')
    }
    //--------------------------ConsumerPortal---------------
    getloginBtn(){
        return cy.get('button[class="login-btn"]')
    }
    getProfile(){
        return cy.get('[class="mat-menu-trigger flex justify-between items-center gap-2 cursor-pointer"]')
    }
    getLogoutButton(){
        return cy.get('[class="font-inter text-sm mt-3"]').eq(4)
    }
    getMobileNumber(){
        return cy.get('[data-testid="mnumber-input-field"]')
    }
    getPIN(){
        return cy.get('[data-testid="mpin-input-field"]')
    }
    getloginBtn1(){
        return cy.get('[data-testid="login-btn"]')
    }



     //-------------------------------------------------------------------------------------------------
     getRegister()
     {
         return cy.get('div[class="ng-star-inserted"]>button').eq(0)
     }
 
     getemailid()
     {
         return cy.get('input[id="emailId"]')
 
     }
 
     getlastnamefld()
     {
         return cy.get('input[placeholder="Last Name"]')
     }
 
     getmobilenumber()
     {
         return cy.get('input[id="mobileNumber"]')
     }
 
     getverify()
     {
         return cy.get('button.font-inter.font-medium.rounded-lg')
     }
     gettypeotp()
     {
         return cy.get('input[type="tel"]')
     }
     getclickOnverifyButton()
     {
         return cy.get('button[data-testid="verify-otp-btn"]')
     }
     getasserttxt()
     {
         return cy.get('span[class="font-inter font-medium"]')
         
 
     }
}
export default loginPage