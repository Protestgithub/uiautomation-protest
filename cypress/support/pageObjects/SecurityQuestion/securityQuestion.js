class securityQuestion {
    // Navigate to security questions

    getSecurityQuestionOption() {

        return cy.get('[data-testid="menu.ums_security"]')
    }

    getSecurityOption() {

        return cy.get('[data-testid="menu.ums_security"]').find('[title="Security Question"]')
    }


    getAddQuestion() {

        return cy.iframe().find('[class="mat-focus-indicator btn btn-next btn-rounded ml-4 font-weight-700 text-uppercase mat-button mat-button-base ng-star-inserted"]')
    }

    getSearchBox() {

        return cy.iframe().find('input[id="question-0-0"]')
    }

    getItemsPerPage() {
        return cy.iframe().find('#mat-select-value-7')
    }
    getSelectPagination() {
        return cy.iframe().find('#mat-option-21')
    }
    getQuestion() {

        return cy.iframe().find('select[class="ques-input"]').eq(0)
    }
    getQuestion1() {

        return cy.iframe().find('select[class="ques-input"]').eq(1)
    }
    getAnswer() {

        return cy.iframe().find('.ans-input').eq(0)
    }
    getAnswer1() {

        return cy.iframe().find('.ans-input').eq(1)
    }
    getSave()
    {
        return cy.iframe().find("#setting-save-btn")
    }
    
    getAddButton() {

        return cy.iframe().find('[class="mat-focus-indicator btn btn-next btn-rounded ml-4 font-weight-700 text-uppercase mat-button mat-button-base"]')
    }

    getConfirmButton() {
        return cy.iframe().find('[class="mat-focus-indicator btn-next btn-rounded font-weight-700 ml-3 text-uppercase mat-button mat-button-base"]')
    }

    getMessage() {
        return cy.iframe().find('[class="text-center"]')

    }

    getDoneButton() {
        return cy.iframe().find('[class="btn btn-danger done mx-auto next-button"]')
    }

    getDoneButton1() {
        return cy.iframe().find('.login-btn-modal')
    }


    getAddLanguage() {
        return cy.iframe().find('[class="mat-focus-indicator add-language-btn d-flex align-items-center mat-button mat-button-base"]')

    }

    getLanguageDropDown() {
        return cy.iframe().find('select[id="language-0-1"]> option', "{force:true}")
    }

    getLanguageDropDowns() {
        return cy.iframe().find('select[id="language-0-1"]', "{force:true}")
    }



    getLanguageSearchBox() {
        return cy.iframe().find('[class="form-control custom-select ng-touched ng-dirty ng-valid"]')

    }

    getOtherLanguageQuestion() {
        return cy.iframe().find('[id="question-0-1"]')

    }

    getAdd() {
        return cy.iframe().find('[class="mat-focus-indicator btn btn-next btn-rounded ml-4 font-weight-700 text-uppercase mat-button mat-button-base"]')

    }

    getConfirm() {
        return cy.iframe().find('[class="mat-focus-indicator btn-next btn-rounded font-weight-700 ml-3 text-uppercase mat-button mat-button-base"]')

    }

    getOtherLanguageSuccess() {
        return cy.iframe().find('[class="text-center"]')

    }

    getDoneOtherLanguage() {
        return cy.iframe().find('[class="btn btn-danger done mx-auto next-button"]')

    }

    getDefaultSystemLanguage() {
        return cy.iframe().find('[id="language-0-0"]')

    }
    //-------------------------------------------------------------------------------------
    getviewmodify() {
        return cy.iframe().find('div>button.btn-settings').eq(1)
    }
    getedit(){
        return cy.iframe().find('div>.svg-inline--fa.fa-pencil-alt.fa-w-16.edit-icon')
    }
    getType1(){
        return cy.iframe().find('input.ans-input').eq(0)
    }
    getQuestion2(){
        return cy.iframe().find('div>select.ques-input').eq(1)
     }
     getType2(){
        return cy.iframe().find('input.ans-input').eq(1)
    }
    getsavebttn(){
        return cy.iframe().find('button.setting-save-btn')
    }
    getDonebtn(){
        return cy.iframe().find('.login-btn-modal')
    }    
//-----------------------------------Modify-----------------------

getModifyButton(){
    return cy.iframe().find('#pencil')
}
getLanguage(){
    return cy.iframe().find('#language--2')
}
getModifyQuestion(){
    return cy.iframe().find('#question--2')
}
getModifySave(){
    return cy.iframe().find('[class="mat-focus-indicator btn btn-next btn-rounded ml-4 font-weight-700 text-uppercase mat-button mat-button-base"]')
}

}
export default securityQuestion