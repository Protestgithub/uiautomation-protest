class AutotransferBank {
    
    getSetupbtn(){
        return cy.iframe().find('[class="mat-button-wrapper"]')
    }
    getStartDate(){
        return cy.iframe().find('[class="label-text"]')
    }
    getRepeat(){
        return cy.iframe().find('[class="label-text"]')
    }
    getTime(){
        return cy.iframe().find('[class="label-text"]')
    }
    getStart(){
        return cy.iframe().find('[name="start-date"]')
    }

    getRepeatOption(){
        return cy.iframe().find('[name="recurring-type"]')
    }
    getTimeoption(){
        return cy.iframe().find('[inputmode="numeric"]')
    }

    getNextButton(){
        return cy.iframe().find('#next')
    }
    getCurrencyOption(){
        return cy.iframe().find('[class="label"]')
    }
    getAutoSweepToOption(){
        return cy.iframe().find('[class="label"]')
    }
    getFromOption(){
        return cy.iframe().find('[class="label"]')
    }
    
}
export default AutotransferBank