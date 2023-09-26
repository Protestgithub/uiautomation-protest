class TransferControlProfile {
  getNew() {
    return cy.iframe().find("div#add_new div.form_label [type=button]");
  }
  getinstrumentlevelTCP() {
    return cy.iframe().find(".panel-heading tbody>tr", "{force:true}");
  }
  getdelete() {
    return cy.iframe().find("#profile_list>table>tbody>tr");
  }
  getback() {
    return cy.iframe().find('button[class="enableDisabled"]');
  }
  getViewDetails() {
    return cy.iframe().find(".profile_list tbody>tr");
  }
  getView() {
    return cy.iframe().find('[class="glyphicon glyphicon-info-sign"]').eq(2);
  }
  getEditDetails() {
    return cy
      .iframe()
      .find(
        "#cust_tcp_list .profile_list tbody>tr:nth-child(2)>td:nth-child(8)"
      );
  }

 

  getdeleteicon() {
    return cy.get("span.glyphicon.glyphicon-trash");
  }
  getprovider() {
    return cy.iframe().find("#provider");
  }
  getregulatorytype() {
    return cy.iframe().find("#registrationType");
  }
  getsucessmessage() {
    return cy.iframe().find("#main_success_msg");
  }
  getErrorMessage() {
    return cy.iframe().find("#add_modal_error_msg");
  }
  getMarketingError() {
    return cy.iframe().find("#display_error_message");
  }
  geterror() {
    return cy.iframe().find(".error_message");
  }

 

  getNext2() {
    return cy.iframe().find('[id="edit_instrument_next2"]');
  }
  getFirstEdit() {
    return cy.iframe().find('[class="glyphicon glyphicon-edit"]').eq(0);
  }

 

  getSecondEdit() {
    return cy.iframe().find('[id="edit_instrument_next"]');
  }

 

  getSuccess() {
    return cy.iframe().find("div.success_image");
  }
  getReqtoAdd() {
    return cy.iframe().find(".success_image#successMessage");
  }
  getReqtoAddMaster() {
    return cy.iframe().find(".success_image");
  }
  getReqtoAddIntiationMaster() {
    return cy.iframe().find(".success_image#add_action_message");
  }
  getdomain() {
    return cy.iframe().find("#domain");
  }
  getcategory() {
    return cy.iframe().find("#category");
  }
  getgrade() {
    return cy.iframe().find("#grade");
  }
  getpaymentinstrument() {
    return cy.iframe().find("#payment_instrument");
  }
  getwallettype() {
    return cy.iframe().find("#wallet_type");
  }
  getprofilename() {
    return cy.iframe().find("#profile_name");
  }
  getdescription() {
    return cy.iframe().find("#description");
  }
  getadd() {
    return cy.iframe().find("#add_customer");
  }
  getCreate() {
    return cy.iframe().find("#add_instrument");
  }
  getcount() {
    return cy
      .iframe()
      .find('.style_even>td:nth-child(3) [thresholdtype="Per Transaction"]');
  }
  getcount1() {
    return cy
      .iframe()
      .find(
        "tr.style_even:nth-child(5) td.count_def.amount:nth-child(3) > input.allserv"
      );
  }
  getcount2() {
    return cy
      .iframe()
      .find(
        "tr.style_even:nth-child(5) td.count_def.amount:nth-child(5) > input.allserv"
      );
  }
  getcount3() {
    return cy
      .iframe()
      .find(
        "tr.style_even:nth-child(5) td.count_def.amount:nth-child(7) > input.allserv"
      );
  }

 

  getcount4() {
    return cy
      .iframe()
      .find(
        "tr.style_even:nth-child(5) td.count_def.amount:nth-child(9) > input.allserv"
      );
  }

 

  getcount5() {
    return cy
      .iframe()
      .find(
        "tr.style_even:nth-child(5) td.count_def.amount:nth-child(11) > input.allserv"
      );
  }

 

  getcount6() {
    return cy
      .iframe()
      .find(
        "tr.style_even:nth-child(5) td.count_def.amount:nth-child(13) > input.allserv"
      );
  }

 

  getcount7() {
    return cy
      .iframe()
      .find(
        "tr.style_even:nth-child(5) td.count_def.amount:nth-child(15) > input.allserv"
      );
  }

 

  getcount8() {
    return cy
      .iframe()
      .find(
        "tr.style_even:nth-child(5) td.count_def.amount:nth-child(17) > input.allserv"
      );
  }

 

  getcount9() {
    return cy
      .iframe()
      .find(
        "tr.style_even:nth-child(5) td.count_def.amount:nth-child(19) > input.allserv"
      );
  }

 

  getcount10() {
    return cy
      .iframe()
      .find(
        "tr.style_even:nth-child(5) td.count_def.amount:nth-child(21) > input.allserv"
      );
  }
  getcount11() {
    return cy
      .iframe()
      .find(
        "tr.style_even:nth-child(5) td.count_def.amount:nth-child(23) > input.allserv"
      );
  }

 

  getcount12() {
    return cy
      .iframe()
      .find(
        "tr.style_even:nth-child(5) td.count_def.amount:nth-child(25) > input.allserv"
      );
  }
  getcount13() {
    return cy
      .iframe()
      .find(
        "tr.style_even:nth-child(5) td.count_def.amount:nth-child(27) > input.allserv"
      );
  }

 

  getcountmaster() {
    return cy.iframe().find('.user_input [thresholdsubtype="count"]');
  }
  getAmount() {
    return cy.iframe().find('.user_input [thresholdsubtype="amount"]');
  }
  getLoadServiceReq() {
    return cy
      .iframe()
      .find('.style_even>td:nth-child(15) [servicename="Load request flow"]')
      .eq(3);
  }
  getLoadServiceReq2() {
    return cy
      .iframe()
      .find('.style_even>td:nth-child(17) [servicename="Load request flow"]')
      .eq(3);
  }
  getLocalPoPurchase() {
    return cy
      .iframe()
      .find('.style_even>td:nth-child(15) [servicename="Local Pos Purchase"]')
      .eq(1);
  }
  getLocalPoPurchase1() {
    return cy
      .iframe()
      .find('.style_even>td:nth-child(17) [servicename="Local Pos Purchase"]')
      .eq(1);
  }
  getlocalwithdrawal() {
    return cy
      .iframe()
      .find('.style_even>td:nth-child(15) [servicename="Local ATM withdrwal"]')
      .eq(1);
  }
  getlocalwithdrawal1() {
    return cy
      .iframe()
      .find('.style_even>td:nth-child(17) [servicename="Local ATM withdrwal"]')
      .eq(1);
  }
  getlocalwithdrawal2() {
    return cy
      .iframe()
      .find('.style_even>td:nth-child(19) [servicename="Local ATM withdrwal"]')
      .eq(1);
  }
  getlocalwithdrawal3() {
    return cy
      .iframe()
      .find('.style_even>td:nth-child(23) [servicename="Local ATM withdrwal"]')
      .eq(1);
  }
  getContactlessPayment() {
    return cy
      .iframe()
      .find('.style_even>td:nth-child(15) [servicename="Contactless Payment"]')
      .eq(1);
  }
  getCardATMPaymentCashout() {
    return cy
      .iframe()
      .find(
        '.style_even>td:nth-child(15) [servicename="Card ATM Payment Cashout"]'
      )
      .eq(1);
  }
  getContactlessPayment1() {
    return cy
      .iframe()
      .find('.style_even>td:nth-child(17) [servicename="Contactless Payment"]')
      .eq(1);
  }
  getCardATMPaymentCashout1() {
    return cy
      .iframe()
      .find(
        '.style_even>td:nth-child(17) [servicename="Card ATM Payment Cashout"]'
      )
      .eq(1);
  }

 

  getCardInternetPayment() {
    return cy
      .iframe()
      .find(
        '.style_even>td:nth-child(15) [servicename="Card Internet Payment"]'
      )
      .eq(1);
  }
  getCardInternetPayment1() {
    return cy
      .iframe()
      .find(
        '.style_even>td:nth-child(17) [servicename="Card Internet Payment"]'
      )
      .eq(1);
  }
  getLocalpospurchasecontactless() {
    return cy
      .iframe()
      .find(
        '.style_even>td:nth-child(15) [servicename="Local Pos Purchase Contactless"]'
      )
      .eq(1);
  }
  getLocalpospurchasecontactless1() {
    return cy
      .iframe()
      .find(
        '.style_even>td:nth-child(17) [servicename="Local Pos Purchase Contactless"]'
      )
      .eq(1);
  }
  getLoadReversalReqflow() {
    return cy
      .iframe()
      .find(
        '.style_even>td:nth-child(15) [servicename="Load Reversal Request Flow"]'
      )
      .eq(3);
  }
  getLoadReversalReqflow1() {
    return cy
      .iframe()
      .find(
        '.style_even>td:nth-child(17) [servicename="Load Reversal Request Flow"]'
      )
      .eq(3);
  }
  getcardpayment() {
    return cy
      .iframe()
      .find('.style_even>td:nth-child(15) [servicename="Card Payment"]')
      .eq(1);
  }
  getcardadujsment() {
    return cy
      .iframe()
      .find('.style_even>td:nth-child(15) [servicename="Card Adjustment"]')
      .eq(1);
  }
  getQRMerchantPayment() {
    return cy
      .iframe()
      .find('.style_even>td:nth-child(15) [servicename="QR Merchant Payment"]')
      .eq(1);
  }
  getcardpayment1() {
    return cy
      .iframe()
      .find('.style_even>td:nth-child(17) [servicename="Card Payment"]')
      .eq(1);
  }
  getcardadujsment1() {
    return cy
      .iframe()
      .find('.style_even>td:nth-child(17) [servicename="Card Adjustment"]')
      .eq(1);
  }
  getQRMerchantPayment1() {
    return cy
      .iframe()
      .find('.style_even>td:nth-child(17) [servicename="QR Merchant Payment"]')
      .eq(1);
  }

 

  getUserminbalance() {
    return cy.iframe().find("#user_min_balance_add");
  }
  getUsermaximumbalance() {
    return cy.iframe().find("#user_maximum_balance_add");
  }
  getusermaxbalanceMaster() {
    return cy.iframe().find("#user_maximum_balance");
  }
  getUserMinTransactionAmount() {
    return cy.iframe().find("#minimum_transaction_amount_add");
  }
  getUserMaxTransactionAmount() {
    return cy.iframe().find("#maximum_transaction_amount_add");
  }
  getMaxPercentageTransferAllowed() {
    return cy.iframe().find("#maxPctTrnsAllwd_add");
  }
  getNext() {
    return cy.iframe().find("#add_instrument_next");
  }

 

  getReset() {
    return cy.iframe().find("add_reset");
  }

 

  getApproveTCP() {
    return cy.iframe().find(".approveButton").eq(0);
  }
  getApproveTCP1() {
    return cy.iframe().find("button[id=approve_button]");
  }
  getEditbutton() {
    return cy.iframe().find("#edit_customer_next");
  }
  geteditfeild() {
    return cy.iframe().find("#description_edit");
  }
  getProfileName() {
    return cy.iframe().find("#profile_name_edit");
  }
  getNextEdit() {
    return cy.iframe().find("#add_customer_next");
  }
  getConfirmEdit() {
    return cy.iframe().find("#add_customer_confirm");
  }
  getPerTransaction() {
    return cy
      .iframe()
      .find(
        ".threshhold_table > tbody > tr > td > input.allserv[thresholdtype='Per Transaction']"
      );
  }
  getAllDropDown() {
    return cy.iframe().find("table > tbody > tr > td > select:visible");
  }
  getAllTextFields() {
    return cy.iframe().find("table > tbody > tr > td > input:visible");
  }
  //----------------copy-------
  getCopyTCP() {
    return cy.iframe().find('[class="copy enableDisabled"]');
  }
  getProviderCopyTCP() {
    return cy.iframe().find("#provider_copy");
  }
  getDomainCopyTCP() {
    return cy.iframe().find("#domain_copy.inputSelect");
  }
  getCategoryCopyTCP() {
    return cy.iframe().find("#category_copy.inputSelect");
  }
  getRegulatoryCopyTCP() {
    return cy.iframe().find("#registrationType_copy.inputSelect");
  }
  getProfileNameCopyTCP() {
    return cy.iframe().find("#profile_name_copy.inputText");
  }
  getSubmitCopyTCP() {
    return cy.iframe().find("#copy_customer.toBeDisabled");
  }

 

  //-------------------------------------TCP Cumulative

 

  getTCP() {
    return cy.get('[data-testid="test-TCP_UI"]');
  }
  getMyActivity() {
    return cy.get('[data-testid="test-UMS_MY_ACTIVITY"]');
  }
  getFilterForMyActivity() {
    return cy.iframe().find('[id="filter"]');
  }
  getSubmittedStatus() {
    return cy.iframe().find('[for="Submitted-input"]');
  }
  getApply() {
    return cy.iframe().find('[data-test-id="apply"]');
  }
  getExpand() {
    return cy
      .iframe()
      .find('[class="mat-icon notranslate material-icons mat-icon-no-color"]')
      .eq(0);
  }
  getViewDetailsForResume() {
    return cy.iframe().find('[name="view-details"]');
  }
  getProfileNameLabel() {
    return cy
      .iframe()
      .find('[class="label-text ng-star-inserted"]')
      .contains("Profile Name");
  }
  getProfileNameMyActivity() {
    return cy.iframe().find("p.decoration").eq(6);
  }
  getCreatedOnTime2() {
    return cy.iframe().find('[class="decoration auto-scroll user-select-all"]');
  }
  getAddProfile() {
    return cy
      .iframe()
      .find('[class="addProgramButton tableProgramAdd ng-star-inserted"]');
  }
  getProfileName() {
    return cy.iframe().find('[data-test-id="progCode-input"]');
  }
  getCurrency() {
    return cy.iframe().find('[role="combobox"]').eq(0);
  }
  setCurrency() {
    return cy.iframe().find('[role="option"]');
  }
  getDomain() {
    return cy.iframe().find('[id="card-expiry-input"]');
  }

 

  setDomain() {
    return cy.iframe().find('[role="option"]');
  }
  getCategory() {
    return cy.iframe().find('[id="prodType-drpdwn"]');
  }
  setCategory() {
    return cy.iframe().find('[class="mat-option-text"]');
  }
  getRegulatoryProfile() {
    return cy.iframe().find('[id="prodType-drpdwn-regulatoryProfile"]');
  }
  setRegulatoryProfile() {
    return cy.iframe().find('[class="mat-option-text"]');
  }
  getNextBtn() {
    return cy.iframe().find('[id="showColorChange"]');
  }
  getDailyCountDebit() {
    return cy.iframe().find('[formcontrolname="count"]').eq(0);
  }
  getDailyAmountDebit() {
    return cy.iframe().find('[formcontrolname="amount"]').eq(0);
  }
  getWeeklyCountDebit() {
    return cy.iframe().find('[formcontrolname="count"]').eq(1);
  }
  getWeeklyAmountDebit() {
    return cy.iframe().find('[formcontrolname="amount"]').eq(1);
  }
  getMonthlyCountDebit() {
    return cy.iframe().find('[formcontrolname="count"]').eq(2);
  }
  getMonthlyAmountDebit() {
    return cy.iframe().find('[formcontrolname="amount"]').eq(2);
  }
  getYearlyCountDebit() {
    return cy.iframe().find('[formcontrolname="count"]').eq(3);
  }
  getYearlyAmountDebit() {
    return cy.iframe().find('[formcontrolname="amount"]').eq(3);
  }
  getDailyCountCredit() {
    return cy.iframe().find('[formcontrolname="count"]').eq(4);
  }
  getDailyAmountCredit() {
    return cy.iframe().find('[formcontrolname="amount"]').eq(4);
  }
  getWeeklyCountCredit() {
    return cy.iframe().find('[formcontrolname="count"]').eq(5);
  }
  getWeeklyAmountCredit() {
    return cy.iframe().find('[formcontrolname="amount"]').eq(5);
  }
  getMonthlyCountCredit() {
    return cy.iframe().find('[formcontrolname="count"]').eq(6);
  }
  getMonthlyAmountCredit() {
    return cy.iframe().find('[formcontrolname="amount"]').eq(6);
  }
  getYearlyCountCredit() {
    return cy.iframe().find('[formcontrolname="count"]').eq(7);
  }
  getYearlyAmountCredit() {
    return cy.iframe().find('[formcontrolname="amount"]').eq(7);
  }
  getMaxBalance() {
    return cy.iframe().find('[formcontrolname="maxBalance"]');
  }
  getConfirmBtn() {
    return cy
      .iframe()
      .find(
        '[class="addProgramButton mr-4 w-180 h-50 hover:opacity-60 finalBtn ng-star-inserted"]'
      );
  }
  getCancel() {
    return cy
      .iframe()
      .find(
        '[class="cancelButton mr-4 w-180 h-50 hover:opacity-60 ng-star-inserted"]'
      );
  }
  getYesForCancel() {
    return cy
      .iframe()
      .find(
        '[class="addProgramButton yes-button mr-4 w-180 h-50 hover:opacity-60"]'
      );
  }
  //----Errors Validations
  getDailyCountCreditError() {
    return cy.iframe().find('[aria-live="polite"]').eq(16);
  }
  getDailyAmountCreditError() {
    return cy.iframe().find('[aria-live="polite"]').eq(18);
  }
  getWeeklyCountCreditError() {
    return cy.iframe().find('[aria-live="polite"]').eq(20);
  }
  getWeeklyAmountCreditError() {
    return cy.iframe().find('[aria-live="polite"]').eq(22);
  }
  getMonthlyCountCreditError() {
    return cy.iframe().find('[aria-live="polite"]').eq(24);
  }
  getMonthlyAmountCreditError() {
    return cy.iframe().find('[aria-live="polite"]').eq(26);
  }
  getYearlyCountCreditError() {
    return cy.iframe().find('[aria-live="polite"]').eq(28);
  }
  getYearlyAmountCreditError() {
    return cy.iframe().find('[aria-live="polite"]').eq(30);
  }
  getDailyCountDebitError() {
    return cy.iframe().find('[aria-live="polite"]').eq(0);
  }
  getDailyAmountDebitError() {
    return cy.iframe().find('[aria-live="polite"]').eq(2);
  }
  getWeeklyCountDebitError() {
    return cy.iframe().find('[aria-live="polite"]').eq(4);
  }
  getWeeklyAmountDebitError() {
    return cy.iframe().find('[aria-live="polite"]').eq(6);
  }
  getMonthlyCountDebitError() {
    return cy.iframe().find('[aria-live="polite"]').eq(8);
  }
  getMonthlyAmountDebitError() {
    return cy.iframe().find('[aria-live="polite"]').eq(10);
  }
  getYearlyCountDebitError() {
    return cy.iframe().find('[aria-live="polite"]').eq(12);
  }
  getYearlyAmountDebitError() {
    return cy.iframe().find('[aria-live="polite"]').eq(14);
  }
  //------------Edit
  getEditDetails() {
    return cy.iframe().find('[class="table-icon"]');
  }
  getNextForEdit() {
    return cy.iframe().find('[id="showColorChange"]');
  }
  //added by prerna on 11/09/23
  getNextForEdit1() {
    return cy.iframe().find('[class="addProgramButton w-180 h-50 hover:opacity-60 ng-star-inserted finalBtn"]');
  }

  getCurrencyDis() {
    return cy
      .iframe()
      .find(
        '[class="mat-select lst-input primary-form-value ng-tns-c116-13 ng-tns-c91-12 mat-select-disabled ng-untouched ng-pristine ng-valid ng-star-inserted"]'
      );
  }
  getDomainDis() {
    return cy.iframe().find('[id="card-expiry-input"]');
  }
  getCategoryDis() {
    return cy.iframe().find('[id="prodType-drpdwn"]');
  }
  getRegulatoryProfileDis() {
    return cy.iframe().find('[id="prodType-drpdwn-regulatoryProfile"]');
  }
  getDailyCountDebitEdit() {
    return cy.iframe().find('[id="mat-input-29"]');
  }
  getDailyAmountDebitEdit() {
    return cy.iframe().find('[id="mat-input-30"]');
  }
  getWeeklyCountDebitEdit() {
    return cy.iframe().find('[id="mat-input-27"]');
  }
  getWeeklyAmountDebitEdit() {
    return cy.iframe().find('[id="mat-input-28"]');
  }
  getMonthlyCountDebitEdit() {
    return cy.iframe().find('[id="mat-input-25"]');
  }
  getMonthlyAmountDebitEdit() {
    return cy.iframe().find('[id="mat-input-26"]');
  }
  getDailyCountCreditEdit() {
    return cy.iframe().find('[id="mat-input-35"]');
  }
  getDailyAmountCreditEdit() {
    return cy.iframe().find('[id="mat-input-36"]');
  }
  getWeeklyCountCreditEdit() {
    return cy.iframe().find('[id="mat-input-33"]');
  }
  getWeeklyAmountCreditEdit() {
    return cy.iframe().find('[id="mat-input-34"]');
  }
  getMonthlyCountCreditEdit() {
    return cy.iframe().find('[id="mat-input-31"]');
  }
  getMonthlyAmountCreditEdit() {
    return cy.iframe().find('[id="mat-input-32"]');
  }
  getMaxBalanceEdit() {
    return cy.iframe().find('[formcontrolname="maxBalance"]');
  }
  getApproveEdit() {
    return cy.iframe().find('[class="mat-button-wrapper"]');
  }
  getYesForEdit() {
    return cy
      .iframe()
      .find(
        '[class="mat-focus-indicator btn-rounded button-primary button-short mat-button mat-button-base"]'
      );
  }

 

  //--view tcp
  getViewIcon() {
    return cy.iframe().find('[class="table-icon eye-icon"]');
  }
  getDetails() {
    return cy.iframe().find('[class="label-text ng-star-inserted"]');
  }
  getTable() {
    return cy
      .iframe()
      .find('[class="mat-table cdk-table threshold-table-view"]');
  }

 

  //----view TCP records

 

  getTableHeader() {
    return cy
      .iframe()
      .find(
        '[class="lbl-table-header-text scroll-text lbl-header ng-star-inserted"]'
      );
  }
  getActionHeader() {
    return cy
      .iframe()
      .find(
        '[class="mat-header-cell cdk-header-cell scroll-container lbl-header-container cdk-column-Action mat-column-Action ng-star-inserted"]'
      );
  }
  getSearch() {
    return cy.iframe().find('[name="search"]');
  }
  getSearchIcon() {
    return cy
      .iframe()
      .find(
        '[class="mat-icon notranslate icon-search mr-2 ng-tns-c91-1 material-icons mat-icon-no-color"]'
      );
  }
  getFilter() {
    return cy
      .iframe()
      .find(
        '[class="d-flex align-items-center text-secondary font-weight-700 py-2 filter-button ng-star-inserted"]'
      );
  }
  getOption() {
    return cy.iframe().find('[class="mat-checkbox-layout"]').eq(2);
  }
  getClear() {
    return cy.iframe().find('[class="clear"]');
  }
  getClearedCheckbox() {
    return cy
      .iframe()
      .find(
        '[class="mat-checkbox mat-accent ng-valid ng-untouched ng-pristine"]'
      )
      .eq(2);
  }

 

  //-----DeleteTCp
  getYesForDelete() {
    return cy
      .iframe()
      .find(
        '[class="addProgramButton yes-button mr-4 w-180 h-50 hover:opacity-60"]'
      );
  }
  getDeleteDetails() {
    return cy.iframe().find('[alt="delete"]');
  }
  //-CloneTCP
  getCloneTCP() {
    return cy.iframe().find('[alt="copy"]');
  }
  getNextForClone() {
    return cy.iframe().find('[id="showColorChange"]');
  }
  //-UniqueProfileName
  getUniqueError() {
    return cy.iframe().find('[class="program-error-cls ng-star-inserted"]');
  }
  getDescriptionNeg() {
    return cy.iframe().find('[formcontrolname="description"]');
  }

 

  //-----Yearly Cumulative TCP
  getYearlyCountDebitEdit() {
    return cy.iframe().find('[class="mat-form-field-infix ng-tns-c91-66"]');
  }
  getYearlyAmountDebitEdit() {
    return cy.iframe().find('[class="mat-form-field-infix ng-tns-c91-67"]');
  }
  getYearlyCountCreditEdit() {
    return cy.iframe().find('[class="mat-form-field-infix ng-tns-c91-74"]');
  }
  getYearlyAmountCreditEdit() {
    return cy.iframe().find('[class="mat-form-field-infix ng-tns-c91-75"]');
  }
  getErrorfor12() {
    return cy.iframe().find('[class="mat-simple-snackbar ng-star-inserted"]');
  }

  //added by prerna on 11/09/23
  getBack()
  {
    return cy.iframe().find('[class="backButton mr-4 w-180 h-50 hover:opacity-60 ng-star-inserted"]')
  }
}
export default TransferControlProfile;
