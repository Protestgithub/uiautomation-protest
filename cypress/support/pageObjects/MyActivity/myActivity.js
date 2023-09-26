class myActivity{
    getFilter()
    {
        return cy.iframe().find('#filter')
    }
    getAddUser()
    {
        return cy.iframe().find('input[name="Add User"]')
    }
    getModificationOfUser()
    {
        return cy.iframe().find('[data-test-id="Modification Of User"]')
    }
    getSavedStatus()
    { 
        return cy.iframe().find('#Saved')
    }
    getRejectStatus()
    {
        return cy.iframe().find('#Rejected')
    }
    getSubmittedStatus()
    {
        return cy.iframe().find('#Submitted')
    }
    getIntermediateStatus()
    {
        return cy.iframe().find('#Intermediate-input')
    }
    getApply()
    {
        return cy.iframe().find('#apply')
    }
    getExpandButton()
    {
        return cy.iframe().find('#expansion').eq(0)
    }
    getViewDetails()
    {
        return cy.iframe().find('#view-details')
    }
    getWithDraw()
    {
        return cy.iframe().find('#withdraw')
    }
    getResumeDetials()
    {
        return cy.iframe().find('#resume')
    }
    getResumeUser()
    {
        return cy.iframe().find('#resume-user')
    }
    getNextButton()
    {
        return cy.iframe().find('#next')
    }
    getSubmitButton()
    {
        return cy.iframe().find('#submit')
    }
    getYesButton()
    {
        return cy.iframe().find('#yes')
    }
    getCreatedOnTime(){
        return cy.iframe().find('[class="mat-tooltip-trigger auto-scroll user-select-all ng-star-inserted"]')
    }
    
    getCreatedOnTime1(){
        return cy.iframe().find('.mat-cell.cdk-cell.cdk-column-created-on.mat-column-created-on.ng-star-inserted')
    }
    getEnterworkflows(){
        return cy.iframe().find('input[name="workflow-input"]')
    }
    getEnterFlow()
    {
        return cy.iframe().find('.mat-option-text')
    }
        getServices(){
        return cy.iframe().find('#EXTRASERVICES')
    }
    getMultiple(){
        return cy.iframe().find('#mat-tab-label-0-1')
    }
    getBulkID(){
        return cy.iframe().find('[role="columnheader"]').eq(0)
    }
    getEyedetails(){
        return cy.iframe().find('span[class="mat-ripple mat-button-ripple mat-button-ripple-round"]').eq(0)
    }
    getDropdown(){
        return cy.iframe().find('[id="mat-expansion-panel-header-0"]')
    }
    getDownloadOriginalfile(){
        return cy.iframe().find('[id="download"]').eq(0)
    }
    getSucceedLog(){
        return cy.iframe().find('[id="download"]').eq(1)
    }
    getFailedLog(){
        return cy.iframe().find('[id="download"]').eq(2)
    }
     //prerna tcp x.09
     getProfileName()
     {
         return cy.iframe().find('.decoration').eq(8)
     }
     //prerna
     getExpandFirstRecord()
     {
         return cy.iframe().find('[class="mat-focus-indicator view-more mr-2 mr-lg-0 mat-mini-fab mat-button-base mat-basic ng-star-inserted"]').eq(0)
     }
     //prerna
     getCreatedOnTime2()
     {
         return cy.iframe().find('.decoration').eq(2)
     }
}
export default myActivity