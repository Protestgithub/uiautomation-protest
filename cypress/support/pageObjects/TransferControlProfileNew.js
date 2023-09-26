class TransferControlProfileNew {
  getNew() {
    return cy.iframe().find("div#add_new div.form_label [type=button]");
  }
  addProfile() {
    return cy
      .iframe()
      .find('[class="addProgramButton tableProgramAdd ng-star-inserted"]');
  }
  getFilter() {
    return cy.iframe().find(".filter-button");
  }

  getSearchField() {
    return cy.iframe().find('[id="mat-input-2"]');
  }

  getSearch() {
    return cy
      .iframe()
      .find(
        '[class="mat-icon notranslate icon-search mr-2 ng-tns-c91-253 material-icons mat-icon-no-color"]'
      );
  }

  getProfileName() {
    return cy.iframe().find('[id="progCode-input"]');
  }

  getDescription() {
    return cy.iframe().find('[id="program-name-input"]').eq(0);
  }

  getCurrency() {
    return cy.iframe().find('[class="mat-select-arrow ng-tns-c116-8"]');
  }

  setCurrency() {
    return cy.iframe().find('[class="mat-option-text"]');
  }

  getINR() {
    return cy.iframe().find('[class="mat-option-text"]').eq(1);
  }

  getEuro() {
    return cy.iframe().find('[class="mat-option-text"]').eq(2);
  }

  getDomain() {
    return cy.iframe().find('[class="mat-select-arrow ng-tns-c116-10"]');
  }

  //needs modification
  getMerchant() {
    return cy.iframe().find('[class="mat-option-text"]').eq(74);
  }

  getCategory() {
    return cy.iframe().find('[class="mat-select-arrow ng-tns-c116-12"]');
  }

  getDropDownOptions() {
    return cy.iframe().find('[class="mat-option-text"]');
  }

  getGrade() {
    return cy
      .iframe()
      .find('[class="mat-select-arrow-wrapper ng-tns-c116-14"]');
  }

  getPaymentInstument() {
    return cy
      .iframe()
      .find('[class="mat-select-arrow-wrapper ng-tns-c116-16"]');
  }

  getWalletType() {
    return cy
      .iframe()
      .find("#drpdwn-wallet > div > .mat-select-arrow-wrapper > div");
  }

  //tcp details
  getNext() {
    return cy.iframe().find(".addProgramButton.finalBtn");
  }
  //debit limits
  getNext1() {
    return cy.iframe().find(".finalBtn");
  }

  //debit limits
  getNext2() {
    return cy.iframe().find(".finalBtn");
  }

  //for individual service (0-21 in Cash in other POS)
  //used for debit limits in VIEW TCP Details
  getFieldDebit() {
    return cy
      .iframe()
      .find(
        '[class="txt-limits-value cust-input lbl-light ng-untouched ng-pristine ng-valid"]'
      );
  }

  //for individual service 50-63

  getFieldCredit() {
    return cy
      .iframe()
      .find(
        '[class="txt-limits-value cust-input ng-untouched ng-pristine ng-valid"]'
      );
  }
  //user details
  /*
    getMinimumBalance()
    {
        return cy.iframe().find('[class="txt-input primary-form-value ng-touched ng-dirty txt-input-invalid ng-invalid"]')
    }
    */

  getMinimumBalance() {
    return cy.iframe().find("#progCode-input");
  }
  getMaximumBalance() {
    return cy
      .iframe()
      .find(
        '[class="txt-input primary-form-value ng-untouched ng-pristine ng-invalid"]'
      )
      .eq(0);
  }
  /*
    getMinimumTransactionAmt()
    {
        return cy.iframe().find('[class="txt-input primary-form-value ng-untouched ng-pristine ng-invalid"]').eq(1) 
    }
    */
  //[class="txt-input primary-form-value ng-pristine ng-invalid txt-input-invalid ng-touched"]
  getUserDetailsField() {
    return cy.iframe().find(".txt-input.primary-form-value");
  }

  getMaximumPercentage() {
    return cy
      .iframe()
      .find(
        '[class="txt-input primary-form-value last-form ng-untouched ng-pristine ng-invalid"]'
      );
  }

  getConfirm() {
    return cy
      .iframe()
      .find(
        '[class="addProgramButton mr-4 w-180 h-50 hover:opacity-60 finalBtn ng-star-inserted"]'
      );
  }

  //credit and debit limit

  getCountFieldDaily() {
    return cy
      .iframe()
      .find(
        '[class="mat-cell cdk-cell tbl-over-all-mat-cell cdk-column-dailyCount mat-column-dailyCount ng-star-inserted"]'
      );
  }

  getAmountFieldDaily() {
    return cy
      .iframe()
      .find(
        '[class="mat-cell cdk-cell tbl-over-all-mat-cell cdk-column-dailyAmount mat-column-dailyAmount ng-star-inserted"]'
      );
  }

  getCountFieldWeekly() {
    return cy
      .iframe()
      .find(
        '[class="mat-cell cdk-cell tbl-over-all-mat-cell cdk-column-weeklyCount mat-column-weeklyCount ng-star-inserted"]'
      );
  }

  getAmountFieldWeekly() {
    return cy
      .iframe()
      .find(
        '[class="mat-cell cdk-cell tbl-over-all-mat-cell cdk-column-weeklyAmount mat-column-weeklyAmount ng-star-inserted"]'
      );
  }

  getCountFieldMonthly() {
    return cy
      .iframe()
      .find(
        '[class="mat-cell cdk-cell tbl-over-all-mat-cell cdk-column-monthlyCount mat-column-monthlyCount ng-star-inserted"]'
      );
  }

  getAmountFieldMonthly() {
    return cy
      .iframe()
      .find(
        '[class="mat-cell cdk-cell tbl-over-all-mat-cell cdk-column-monthlyAmount mat-column-monthlyAmount ng-star-inserted"]'
      );
  }

  getPerTransactionAmount() {
    return cy
      .iframe()
      .find(
        '[class="mat-cell cdk-cell tbl-over-all-mat-cell cdk-column-perTransactionAmount mat-column-perTransactionAmount ng-star-inserted"]'
      );
  }
  getInlineError() {
    return cy.iframe().find('[class="user-limits-error ng-star-inserted"]');
  }

  //[class="confirm-content"]
  getSuccessMessage() {
    return cy.iframe().find('[class="confirm-content"]');
  }

  getSuccessMessage1() {
    return cy.iframe().find("#display_error_message");
  }

  getDone() {
    return cy
      .iframe()
      .find(
        '[class="popup-cards-button w-180 hover:opacity-60 adjust-btn orange-bg"]'
      );
  }

  //view tcp
  getBasicInfo() {
    return cy
      .iframe()
      .find(
        '[class="lbl-table-header-text scroll-text lbl-header ng-star-inserted"]'
      );
  }

  getGradeAndAction() {
    return cy
      .iframe()
      .find(
        '[class="lbl-table-header-text scroll-text lbl-header lbl-text ng-star-inserted"]'
      );
  }

  getActionButtons() {
    return cy
      .iframe()
      .find(
        '[class="mat-focus-indicator mat-icon-button mat-button-base ng-star-inserted"]'
      );
  }
  getTCP() {
    return cy.iframe().find('[class="link-tcp"]');
  }
  getTCP1() {
    return cy.iframe().find('[class="link-tcp-list"]');
  }
  getNo() {
    return cy
      .iframe()
      .find(
        '[class="addProgramButton no-button mr-4 w-180 h-50 hover:opacity-60"]'
      );
  }

  clickOutside() {
    return cy
      .iframe()
      .find(
        '[class="cdk-overlay-backdrop cdk-overlay-dark-backdrop cdk-overlay-backdrop-showing"]'
      );
  }

  //filter related
  getCheckBox() {
    return cy.iframe().find('[class="mat-checkbox-inner-container"]');
  }

  getApply() {
    return cy.iframe().find('[class="apply"]');
  }
  getClear() {
    return cy.iframe().find('[class="clear"]');
  }
  /*
    getCross()
    {
        return cy.iframe().find('[class="mat-icon notranslate material-icons mat-icon-no-color"]')
    }
    */
  getCross() {
    return cy.iframe().find(".close-btn-container").eq(1);
  }

  getProfileNameUserDetails() {
    return cy.iframe().find('[class="text-value"]');
  }

  getSearchByProfile() {
    return cy.iframe().find('[id="mat-input-0"]');
  }

  getSearchButton() {
    return cy
      .iframe()
      .find(
        '[class="mat-icon notranslate icon-search mr-2 ng-tns-c91-1 material-icons mat-icon-no-color"]'
      );
  }

  getDelete() {
    return cy.iframe().find('[class="table-icon icon-delete"]');
  }

  getYes() {
    return cy
      .iframe()
      .find(
        '[class="addProgramButton yes-button mr-4 w-180 h-50 hover:opacity-60"]'
      );
  }

  getNoRecordFound() {
    return cy.iframe().find('[class="lbl-noRecords"]');
  }

  //view tcp details
  //added on 28/06
  getTCPdetailsUserDetails() {
    return cy.iframe().find('[class="label-text ng-star-inserted"]');
  }

  getEyeIcon() {
    return cy.iframe().find('[class="table-icon eye-icon"]');
  }
  //modify
  //added on 30/06
  getCurrencyDis() {
    return cy.iframe().find('[id="mat-select-8"]');
  }

  getDomainDis() {
    return cy.iframe().find('[id="card-expiry-input"]');
  }

  getCategoryDis() {
    return cy.iframe().find('[id="prodType-drpdwn"]');
  }

  getGradeDis() {
    return cy.iframe().find('[id="grades-drpdwn"]');
  }

  getPaymentInstumentDis() {
    return cy
      .iframe()
      .find(
        '[class="mat-select lst-input ng-tns-c116-20 ng-tns-c91-19 mat-select-disabled ng-untouched ng-pristine ng-valid ng-star-inserted"]'
      );
  }

  getWalletTypeDis() {
    return cy.iframe().find('[id="drpdwn-wallet"]');
  }
  // added on 02/07/23
  getServiceCashInOtherPOS() {
    return cy
      .iframe()
      .find(
        '[class="mat-expansion-panel-header mat-focus-indicator ng-tns-c112-20 ng-tns-c111-19 ng-star-inserted"]'
      );
  }

  getCountCol() {
    return cy
      .iframe()
      .find(
        '[class="txt-limits-value cust-input lbl-light ng-untouched ng-pristine ng-valid"]'
      );
  }

  getInlineErrorCount() {
    return cy.iframe().find('[class="debit-limits-error ng-star-inserted"]');
  }

  //this page obj is created to check visiblity of diff sections in review&confirm page
  getSectionInReviewConfirmPage() {
    return cy.iframe().find('[class="cumulative-title cumulative-view-title"]');
  }

  //get select number of records
  getNumberOfRecords() {
    return cy.iframe().find('[class="mat-select-arrow-wrapper ng-tns-c116-5"]');
  }

  getFifteen() {
    return cy.iframe().find('[id="mat-option-2"]');
  }
  getThirdPage() {
    return cy
      .iframe()
      .find(
        '[class="custom-paginator-page custom-paginator-page-enabled mat-custom-page ng-star-inserted"]'
      )
      .eq(2);
  }

  //created this pageobj to get value that has been typed in count & amount field in overall table
  getValue() {
    return cy.iframe().find('[class="txt-limits-value cust-input lbl-light"]');
  }

  //added on 19/07
  //inline error to check unique profile name
  getUniqueProfileInlineError() {
    return cy.iframe().find('[class="program-error-cls ng-star-inserted"]');
  }

  //for set debit limits
  getExpandPanel() {
    return cy
      .iframe()
      .find(
        '[class="mat-icon notranslate material-icons panel-normal mat-icon-no-color"]'
      );
  }

  getErrorMessage3() {
    return cy
      .iframe()
      .find(
        '[class="mat-snack-bar-container ng-tns-c31-32 ng-trigger ng-trigger-state errorSnackbar mat-snack-bar-center ng-star-inserted"]'
      );
  }

  getChannelName() {
    returncy
      .iframe()
      .find(
        '[class="showAsLabel lbl-header-vertical lbl-bearerName ng-untouched ng-pristine ng-valid"]'
      );
  }

  getNext3() {
    return cy.iframe().find('[id="showColorChange"]');
  }
  //added on 06/07/2023
  getBankTestingCheckbox() {
    return cy.iframe().find('[id="mat-checkbox-48"]');
  }
  //changes added on 16/08/23 for yearly_tcp
  getCountFieldYearly() {
    return cy
      .iframe()
      .find(
        '[class="mat-cell cdk-cell tbl-over-all-mat-cell cdk-column-yearlyCount mat-column-yearlyCount ng-star-inserted"]'
      );
  }

  getAmountFieldYearly() {
    return cy
      .iframe()
      .find(
        '[class="mat-cell cdk-cell tbl-over-all-mat-cell cdk-column-yearlyAmount mat-column-yearlyAmount ng-star-inserted"]'
      );
  }

  getLabels() {
    return cy.iframe().find('[class="lbl-common-header"]');
  }

  getWeeklyAmount2() {
    return cy
      .iframe()
      .find(
        '[class="txt-limits-value cust-input lbl-light ng-untouched ng-pristine ng-invalid"]'
      );
  }

  // Error validations
  getErrorDebit() {
    return cy.iframe().find('[class="debit-limits-error ng-star-inserted"]');
  }
  getErrorCredit() {
    return cy.iframe().find('[class="debit-limits-error ng-star-inserted"]');
  }
}
export default TransferControlProfileNew;
