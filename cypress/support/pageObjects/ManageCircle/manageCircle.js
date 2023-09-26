class ManageCircle{

    getSidebarNav()
    {
        return cy.get('nav.fd-side-nav div.fd-side-nav__main-navigation div.lui-fd-side-nav-wrapper ul:nth-child(1)')
    }

    getMobiquityCircle() {
        return cy.get("a[title='Mobiquity Circles']")
    }

    getManageCircle() {
        return cy.get("a[title='Manage Circles']")
    }

    getSearchCircleInputBox() {
        return cy.iframe().find("input[formcontrolname='cicleNo']")
    }

    getSearchButton() {
        return cy.iframe().find("button.btn-save")
    }

    getSearchedMobileNumber() {
        return cy.iframe().find("table.mat-table tbody tr:nth-child(1) td.cdk-column-mobilenumber")
    }

    getInvalidMobileNumberErrorMessage() {
        return cy.iframe().find("p.errorMsg")
    }

    getSearchResultBlock() {
        return cy.iframe().find("h4")
    }

    getResetButton() {
        return cy.iframe().find("button.save-popup-btn-cancel")
    }

    getViewButton() {
        return cy.iframe().find("table.mat-table tbody tr:nth-child(1) td.mat-column-action button")
    }

    getSearchedMobileNumberCircleName() {
        return cy.iframe().find("table.mat-table tbody tr:nth-child(1) td.mat-column-position")
    }

    getSearchedMobileNumberCircleCode() {
        return cy.iframe().find("table.mat-table tbody tr:nth-child(1) td.mat-column-name")
    }

    getSearchedMobileNumberCircleStatus() {
        return cy.iframe().find("table.mat-table tbody tr:nth-child(1) td.mat-column-symbol button")
    }

    getCircleNameInCircleDetailsHeader() {
        return cy.iframe().find("div.mainHeading p")
    }

    getCircleStatusInCircleDetailsHeader() {
        return cy.iframe().find("div.mainHeading button")
    }

    getCircleCodeInCircleDetailsTable() {
        return cy.iframe().find("div.details-container div.container-fluid:nth-child(1) div.first_row div.col-3.mb-3:nth-child(2) span")
    }

    getCircleEditIcon() {
        return cy.iframe().find("div.edit-container img:nth-child(1)")
    }

    getCircleNameInputBoxForEditCircle() {
        return cy.iframe().find("input[formcontrolname='circleName']")
    }

    getNextButtonForSaveEditCircle() {
        return cy.iframe().find("button.close-button.accept")
    }

    getEditCircleSuccessMessage() {
        return cy.iframe().find("simple-snack-bar.mat-simple-snackbar > span")
    }

    getCancelButtonForEditCircle() {
        return cy.iframe().find("button.close-button.reject")
    }

    getMembersTab() {
        return cy.iframe().find("mat-step-header[aria-posinset='2']")
    }

    getMembersPhoneNumberFromTable() {
        return cy.iframe().find("div.mat-horizontal-content-container div[role='tabpanel']:nth-child(2) td.cdk-column-name")
    }

    getMemberTypeFromTable() {
        return cy.iframe().find("div.mat-horizontal-content-container div[role='tabpanel']:nth-child(2) td.cdk-column-weight")
    }

    getMemberInvitedTab() {
        return cy.iframe().find("div.mat-horizontal-content-container div[role='tabpanel']:nth-child(2) div.mat-tab-labels div:nth-child(2)")
    }

    getMemberRejectedTab() {
        return cy.iframe().find("div.mat-horizontal-content-container div[role='tabpanel']:nth-child(2) div.mat-tab-labels div:nth-child(3)")
    }

    getMemberRemovedLeftTab() {
        return cy.iframe().find("div.mat-horizontal-content-container div[role='tabpanel']:nth-child(2) div.mat-tab-labels div:nth-child(4)")
    }

    getInvitedMembersPhoneNumberFromTable() {
        return cy.iframe().find("div.mat-horizontal-content-container div[role='tabpanel']:nth-child(2) tr.mat-row:nth-child(1) td.cdk-column-name")
    }

    getRejectedMembersPhoneNumberHeaderFromTable() {
        return cy.iframe().find("div.mat-horizontal-content-container div[role='tabpanel']:nth-child(2) th.cdk-column-mobile-number")
    }

    getMembersSearchBox() {
        return cy.iframe().find("input[formcontrolname='cicleNo']")
    }

    getNoMembersFoundErrorMessage() {
        return cy.iframe().find("div.emptyTable")
    }

    getInviteMembersButton() {
        return cy.iframe().find("img[src='assets/images/invite.png']")
    }

    getInviteMembersSearchInputbox() {
        return cy.iframe().find("input[formcontrolname='identifierValue']")
    }

    getInviteMembersClearButton() {
        return cy.iframe().find("button.btn-cancel")
    }

    getInviteMembersAddButton() {
        return cy.iframe().find("button.btn-save")
    }

    getInviteMembersAddMessage() {
        return cy.iframe().find("button.btn-save")
    }

    getInviteMembersRemoveButton() {
        return cy.iframe().find("button[mattooltip='Remove']")
    }

    getInviteMembersMobileNumberTableValue() {
        return cy.iframe().find("td.cdk-column-mobile")
    }

    getManageOfficialTab() {
        return cy.iframe().find("mat-step-header[aria-posinset='3']")
    }

    getManageOfficialChangeChairpersonHistoryButton() {
        return cy.iframe().find("div.chairperson-history p")
    }

    getChairpersonHistoryPopupHeader() {
        return cy.iframe().find("div.form_heading")
    }

    getChangeChairpersonLink() {
        return cy.iframe().find("img[src='assets/images/change.png']")
    }

    //-----------------------------
    getNoOfMember(){
        return cy.iframe().find('[class="mat-header-cell cdk-header-cell cdk-column-weight mat-column-weight"]')
    }
    getCircleMobileNo(){
        return cy.iframe().find('[class="mat-header-cell cdk-header-cell cdk-column-mobilenumber mat-column-mobilenumber"]')
    }
    getMemberType(){
        return cy.iframe().find('[class="mat-header-cell cdk-header-cell cdk-column-status mat-column-status"]')
    }
    getCreatedOn(){
        return cy.iframe().find('[class="mat-cell cdk-cell cdk-column-withdrawn mat-column-withdrawn"]')
    }
    getActionButton(){
        return cy.iframe().find('[class="icon-color"]')
    }
    getActiveStatus(){
        return cy.iframe().find('[class="btn aButton"]')
    }
    getCircleDetails(){
        return cy.iframe().find('[class="save-button-header"]')
    }
    getDeleteButton(){
        return cy.iframe().find('[src="assets/images/delete.png"]')
    }
    getDeleteYesButton(){
        return cy.iframe().find('[class="btn-save ml-2 mt-2"]')
    }
    getDeleteNoButton(){
        return cy.iframe().find('[class="btn-cancel ml-2 mt-2"]')
    }

    getCloseButton(){
        return cy.iframe().find('[class="close-button back"]').eq(0)
    }
    getManageCircleHeader(){
        return cy.iframe().find('[class="main-header-btn heading"]')
    }
    getEditDetails(){
        return cy.iframe().find('[class="form-control form-input ng-untouched ng-pristine ng-valid"]')
    }
    getConfirmDetails(){
        return cy.iframe().find('[class="save-button-value"]')
    }
    getActiveName(){
        return cy.iframe().find('[class="mat-header-cell cdk-header-cell cdk-column-position mat-column-position ng-star-inserted"]')
    }
    getActiveSearch(){
        return cy.iframe().find('[class="form-control form-input"]')
    }
    getActiveMobileNumber(){
        return cy.iframe().find('[class="mat-header-cell cdk-header-cell cdk-column-name mat-column-name ng-star-inserted"]')
    }
    getActiveMemberType(){
        return cy.iframe().find('[class="mat-header-cell cdk-header-cell cdk-column-weight mat-column-weight ng-star-inserted"]')
    }
    getActiveTotalDeposited(){
        return cy.iframe().find('[class="mat-header-cell cdk-header-cell cdk-column-symbol mat-column-symbol ng-star-inserted"]')
    }
    getActiveTotalWithdrawn(){
        return cy.iframe().find('[class="mat-header-cell cdk-header-cell cdk-column-withdrawn mat-column-withdrawn ng-star-inserted"]')
    }
    getActiveAction(){
        return cy.iframe().find('[class="mat-header-cell cdk-header-cell cdk-column-action mat-column-action ng-star-inserted"]')
    }
    getInviteMemberInviteButton(){
        return cy.iframe().find('[class="close-button accept"]')
    }
    getMemberAction(){
        return cy.iframe().find('[class="mat-focus-indicator mat-tooltip-trigger iconbutton mat-icon-button mat-button-base mat-primary"]').eq(0)
    }
    getAppointedBy(){
        return cy.iframe().find('[class="label-text"]')
    }
    getFilter(){
        return cy.iframe().find('[class="mat-menu-trigger btn-filter"]')
    }
    getInvitedBy(){
        return cy.iframe().find('[class="mat-checkbox-label"]')
    }
    getStartDate(){
        return cy.iframe().find('[class="example-margin"]')
    }
    getEndDate(){
        return cy.iframe().find('[class="ml-2 example-margin"]')
    }
    getFilterApplyButton(){
        return cy.iframe().find('[class="Apply-button"]')
    }
    getFilterClearButton(){
        return cy.iframe().find('[class="clear-button"]')
    }

    getCalender(){
        return cy.iframe().find('[src="assets/images/calendar.jpg"]')
    }

    getInvtedMemberName(){
        return cy.iframe().find('table>thead>tr>th[class="mat-header-cell cdk-header-cell cdk-column-position mat-column-position ng-star-inserted"]')
    }
    getInvitedMemberMobile(){
        return cy.iframe().find('[class="mat-header-cell cdk-header-cell cdk-column-mobile-number mat-column-mobile-number ng-star-inserted"]')
    }
    getInvitedMemberStatus(){
        return cy.iframe().find('[class="mat-header-cell cdk-header-cell cdk-column-status mat-column-status ng-star-inserted"]')
    }
    getInvvtedMemberInvitedBy(){
        return cy.iframe().find('[class="mat-header-cell cdk-header-cell cdk-column-invited-by mat-column-invited-by ng-star-inserted"]')
    }
    getInvtedMemberInvitedOn(){
        return cy.iframe().find('[class="mat-header-cell cdk-header-cell cdk-column-invited-on mat-column-invited-on ng-star-inserted"]')
    }
    getSearchImage(){
        return cy.iframe().find('[class="search_img"]')
    }
    getNoDataFoundMsg(){
        return cy.iframe().find('[class="emptyTable ng-star-inserted"]')
    }
    getRejectedRemarks(){
        return cy.iframe().find('[class="mat-header-cell cdk-header-cell cdk-column-remarks mat-column-remarks ng-star-inserted"]')
    }
    getRejectedBy(){
        return cy.iframe().find('[class="mat-header-cell cdk-header-cell cdk-column-rejected-by mat-column-rejected-by ng-star-inserted"]')
    }
    getRejectedOn(){
        return cy.iframe().find('[class="mat-header-cell cdk-header-cell cdk-column-rejected-on mat-column-rejected-on ng-star-inserted"]')
    }
    getServiceType(){
        return cy.iframe().find('[class="mat-header-cell cdk-header-cell cdk-column-service-type mat-column-service-type ng-star-inserted"]')
    }    
    getRemovedInitiatedBy(){
        return cy.iframe().find('[class="mat-header-cell cdk-header-cell cdk-column-initiated-by mat-column-initiated-by ng-star-inserted"]')
    }    
    getRemovedInitiatedOn(){
        return cy.iframe().find('[class="mat-header-cell cdk-header-cell cdk-column-initiated-on mat-column-initiated-on ng-star-inserted"]')
    }    
    getChangeChairperson(){
        return cy.iframe().find('[class="btn-save1 vButton"]')
    }
    getSecreataries(){
        return cy.iframe().find('#mat-tab-label-1-1')
    }    
    getAddSecreatariesButton(){
        return cy.iframe().find('[class="btn-save1 vButton ng-star-inserted"]')
    }    
    getSecreataryMobile(){
        return cy.iframe().find('[class="mat-header-cell cdk-header-cell cdk-column-mobile mat-column-mobile ng-star-inserted"]')
    }    
    getSecreataryAction(){
        return cy.iframe().find('[src="assets/images/secretay-icon.png"]')
    }    
    getInitiatedMemberMobileNumber(){
        return cy.iframe().find('[class="form-control form-input ml-3 ng-tns-c148-20"]')
    }    
    getChangeButton(){
        return cy.iframe().find('[class="btn-save add-item ng-tns-c148-20"]')
    }
    getRadioButton(){
        return cy.iframe().find('#html').eq(0)
    }

    getNextButton(){
        return cy.iframe().find('[class="btn-save add-item mr-3 ng-tns-c148-17 ng-star-inserted"]')
    }

    getVerifyButton(){
        return cy.iframe().find('[class="btn-save vButton py-2"]')
    }

    getCloseIcon(){
        return cy.iframe().find('[src="assets/images/close-icon.png"]')
    }

    getChangeSucessMessage(){
        return cy.iframe().find('[class="mat-simple-snackbar ng-star-inserted"]')
    }

    getSecreatariesCheckbox(){
        return cy.iframe().find('#checkbox')
    }
    getSecreataryAddButton(){
        return cy.iframe().find('[class="btn-save add-item mr-3 ng-tns-c148-16 ng-star-inserted"]')
    }
    getCircleMemberManageOfficial(){
        return cy.iframe().find('[class="mat-step-text-label ng-star-inserted"]')
    }
    getInvitedMemberTable(){
        return cy.iframe().find('#cdk-step-content-5-1')
    }
    getActiveTable(){
        return cy.iframe().find('[class="mat-table cdk-table mat-elevation-z8 ng-star-inserted"]')
    }
    getActiveAdd(){
        return cy.iframe().find('[class="btn-save"]')
    }

}
export default ManageCircle