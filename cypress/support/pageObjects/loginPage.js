class loginPage {

    getiFrame() {
        return cy.get('[class*="iframeContainer"]').first()

    }
    getInputForm() {
        return cy.iframe().find('.form-input')
    }
    getchangepasswordmessage() {
        return cy.iframe().find('p.text-content')
    }
    getLoginBtn() {
        return cy.iframe().find('.login-btn')
    }
    getchangepassword() {
        return cy.iframe().find('button[class="change-password-btn"]')
    }
    getloginbtn1() {
        return cy.iframe().find('.login-btn-modal')
    }
    getUserLoginMessage() {
        return cy.iframe().find('div.snackbar:nth-child(1) > span:nth-child(2)')
    }
    //--------------------------------------------------------------------------------------------
    getUserLockedMsg() {
        return cy.iframe().find('.snackbar')
    }
    //--------------------------ConsumerPortal---------------
    getloginBtn() {
        return cy.get('button[class="login-btn"]')
    }
    getProfile() {
        return cy.get('[class="mat-menu-trigger flex justify-between items-center gap-2 cursor-pointer"]')
    }
    getLogoutButton() {
        return cy.get('[class="font-inter text-sm mt-3"]').eq(4)
    }
    getMobileNumber() {
        return cy.get('[data-testid="mnumber-input-field"]')
    }
    getPIN() {
        return cy.get('[data-testid="mpin-input-field"]')
    }
    getloginBtn1() {
        return cy.get('[data-testid="login-btn"]')
    }


    getForgotPass() {
        return cy.iframe().find('[class="psw"]')
    }

    getsubmitBtn() {
        return cy.iframe().find('[type="submit"]')
    }
}
export default loginPage