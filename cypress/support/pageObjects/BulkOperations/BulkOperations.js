class BulkOperations {
  getBulkOperationsFromMenu() {
    return cy.get('[data-testid="test-BULK_OPERATIONS"]');
  }
  getInitiateBulkoperation() {
    return cy.iframe().find('[class="mat-label ng-star-inserted"]').eq(0);
  }
  getSelectModule() {
    return cy.iframe().find('[id="select-dropdown"]').eq(0);
  }
  getBulkUserManagement() {
    return cy
      .iframe()
      .find(
        '[class="custom-select-dropdown-button text-secondary font-weight-bold"]'
      );
  }
  getSelectServiceType() {
    return cy.iframe().find('[id="select-dropdown"]').eq(1);
  }
  getRegistration() {
    return cy
      .iframe()
      .find(
        '[class="custom-select-dropdown-button text-secondary font-weight-bold"]'
      );
  }
  getInitiateProceedBtn() {
    return cy.iframe().find("#proceed");
  }
  getBulkOperationsHistory() {
    return cy.iframe().find('[class="mat-label ng-star-inserted"]').eq(1);
  }
  getFilter() {
    return cy.iframe().find("#filters");
  }
  getModuleBulkUserManagement() {
    return cy.iframe().find('[id="mat-Bulk User Management-input"]');
  }
  getStatusCompleted() {
    return cy.iframe().find('[id="mat-Completed-input"]');
  }
  getStartDate() {
    return cy
      .iframe()
      .find(
        '[class="mat-mdc-input-element mat-datepicker-input form-control pointer-none date-sm ng-touched ng-dirty ng-valid cdk-text-field-autofill-monitored"]'
      )
      .eq(0);
  }
  getEndDate() {
    return cy
      .iframe()
      .find(
        '[class="mat-mdc-input-element mat-datepicker-input form-control pointer-none date-sm ng-touched ng-dirty ng-valid cdk-text-field-autofill-monitored"]'
      )
      .eq(1);
  }
  getApplyFilterBtn() {
    return cy.iframe().find("#apply-filter");
  }
  getSearchInput() {
    return cy
      .iframe()
      .find('[class="user-search-details px-4 ng-valid ng-dirty ng-touched"]');
  }
  getSearchBtn() {
    return cy.iframe().find('[class="btn btn-outline search-icon"]');
  }
  getBulkId() {
    return cy
      .iframe()
      .find('[class="auto-scroll user-select-all ng-star-inserted"]')
      .eq(0);
  }
  getCreatedOn() {
    return cy
      .iframe()
      .find('[class="auto-scroll user-select-all ng-star-inserted"]')
      .eq(1);
  }
  getStatus() {
    return cy
      .iframe()
      .find(
        '[class="mat-mdc-cell mdc-data-table__cell cdk-cell cdk-column-status mat-column-status ng-star-inserted"]>div>span'
      );
  }
  getViewDetails() {
    return cy.iframe().find("#view").eq(1);
  }
  getSubmit() {
    return cy.iframe().find("#submit").eq(0);
  }
  getCancel() {
    return cy.iframe().find("#cancel").eq(0);
  }
  getUserTypeCustomer() {
    return cy.iframe().find('a[role="tab"]').eq(0);
  }
  getUserRoleCustomer() {
    return cy.iframe().find("#role-Customer");
  }
  getMultUserDownloadTemplate() {
    return cy.iframe().find('[id="click-download-template"]');
  }
  getMultUserDownloadSampleFile() {
    return cy.iframe().find('[id="click-download-sample-file"]');
  }
  getStepperDownloadTemplate() {
    return cy
      .iframe()
      .find('[class="mat-step-text-label ng-star-inserted"]')
      .eq(0);
  }
  getStepperUploadFile() {
    return cy
      .iframe()
      .find('[class="mat-step-text-label ng-star-inserted"]')
      .eq(1);
  }
  getUploadLink() {
    return cy.iframe().find('input[type="file"]');
  }
  // getUploadModifyLink()
  // {
  //     //return cy.iframe().find('#fileModificationUpload').eq(1)
  //    // return cy.iframe().find('input[type="hidden"]').eq(1)
  //    //return cy.iframe().find('[class="click-here"]')
  //    return cy.iframe().find('input[type="file"]').eq(1)
  // }
  getUploadFileIcon() {
    return cy
      .iframe()
      .find(
        '[class="single-file d-flex align-items-center justify-content-between p-2 mb-2 ng-star-inserted"]'
      );
  }
  getRecordsStatus() {
    return cy.iframe().find('[class="record-container ng-star-inserted"]');
  }
  getRecordsStatusContainer() {
    return cy.iframe().find('[class="record-status-container"]');
  }
  getProceedBtn() {
    return cy.iframe().find('[class="mdc-button__label"]').contains("PROCEED");
  }
  getNewProceedBtn() {
    return cy
      .iframe()
      .find(
        '[class="btn-rounded py-2 me-4 font-weight-700 mdc-button mat-mdc-button button-primary mat-unthemed mat-mdc-button-base"]'
      );
  }
  getConfirmBtn() {
    return cy.iframe().find('[class="mdc-button__label"]').contains("CONFIRM");
  }
  getCancelUploadMsg() {
    return cy
      .iframe()
      .find('[class="mat-mdc-snack-bar-label mdc-snackbar__label"]');
  }
  getCancelUploadBtn() {
    return cy
      .iframe()
      .find('[class="mdc-button__label"]')
      .contains("CANCEL UPLOAD");
  }
  getCancelUploadConfirmBtn() {
    return cy.iframe().find('[class="mdc-button__label"]').contains("YES");
  }
  getSuccessMsg() {
    return cy.iframe().find('[class="text-center"]');
  }
  getSuccessDone() {
    return cy.iframe().find("#done");
  }
  getUserInfo() {
    return cy.get(
      '[class="fd-shellbar__button fd-button fd-identifier fd-identifier--xs fd-identifier--circle svelte-1jh0v0i"]'
    );
  }
  getUserName() {
    return cy.get("#username");
  }
  getSubmittedByUser() {
    // return cy.iframe().find('[class="user-select-all"]')
    return cy
      .iframe()
      .find(
        '[class="mat-cell cdk-cell cdk-column-initiatorName mat-column-initiatorName ng-star-inserted"]'
      );
  }
  getViewDetailsOfInitiated() {
    return cy.iframe().find('[class="mat-row cdk-row ng-star-inserted"]');
  }
  getBulkId() {
    return cy.iframe().find('[class="decoration auto-scroll user-select-all"]');
  }
  getBulkApproval() {
    return cy.iframe().find('[id="approve-expanded-record"]');
  }
  getApproveRequest() {
    return cy
      .iframe()
      .find(
        ".mat-dialog-actions > button.mat-focus-indicator.btn-rounded.button-primary"
      );
  }
  getApproveConfirmationMessage() {
    return cy.iframe().find('[class="mat-simple-snackbar ng-star-inserted"]');
  }
  getUserDetailsBulkFile() {
    return cy.iframe().find("img.cursor-pointer").eq(1);
    // return cy.iframe().find('[class="col-2"]').eq(5)
  }
  //--------------------------Added by Saswat-------------------------------------------------

  getFailed() {
    return cy.iframe().find('[class="bold-text text-styles"]').eq(2);
  }
  getReject() {
    return cy.iframe().find('[id="reject-expanded-record"]');
  }

  getStatusCompleted() {
    return cy.iframe().find('[id="mat-Completed-input"]');
  }
  getStatusRejected() {
    return cy.iframe().find('[id="mat-Rejected-input"]');
  }
  getBulkId() {
    return cy.iframe().find('[class="decoration auto-scroll user-select-all"]');
  }
  getApproveRequest1() {
    return cy
      .iframe()
      .find(
        '[class="mat-focus-indicator btn-rounded button-primary button-short mat-button mat-button-base"]'
      )
      .eq(0);
  }

  getYesforReject() {
    return cy.iframe().find('[type="button"]');
  }
  getNext() {
    return cy.iframe().find('[class="mdc-button__label"]').eq(3);
  }
 
}
export default BulkOperations;
