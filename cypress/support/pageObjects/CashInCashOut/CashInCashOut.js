class CashInCashOut {

   getMSISDN() {

      return cy.iframe().find('#paymentMethodNumberId')

   }



   getProvider() {

      return cy.iframe().find('#partyProviderListSel')

   }

   getMSISDN() {

      return cy.iframe().find('#partyWalletListSel')

   }

   getAmount() {

      return cy.iframe().find('[name="amount"]')

   }

   getPaymentID() {

      return cy.iframe().find('[name="referenceNumber"]')

   }

   getSubmitButton() {

      return cy.iframe().find('#selectForm_button_submit')

   }

   getSubmitButton1() {

      return cy.iframe().find('#cashOutWeb_confirm_button_submit')

   }

   getConfirmButton() {

      return cy.iframe().find('#cashButt')

   }
   //--------------------------
   getSubscriberMobileNumberTab() {
      return cy.iframe().find('input#paymentMethodNumberId')
   }

   getAmountTab() {
      return cy.iframe().find('input#selectForm_amount')
   }
   getPaymentID() {
      return cy.iframe().find('input#selectForm_referenceNumber')
   }
   getSubmit() {
      return cy.iframe().find('input#selectForm_button_submit')
   }
   getConfirm() {
      return cy.iframe().find('input#cashButt')
   }
   getSuccessMessage() {
      return cy.iframe().find('span.actionMessage')
   }
   getCashOut() {
      return cy.get('[data-testid="menu.mtrans"] > .fd-nested-list > :nth-child(2) > [data-testid="test-undefined"] > .fd-nested-list__title')
   }

   getCashOutAmount() {
      return cy.iframe().find('input#cashOutWeb_confirm_amount')
   }
   getCashOutSubmit() {
      return cy.iframe().find('input#cashOutWeb_confirm_button_submit')
   }
   gettabClick() {
      return cy.iframe().find('div#page.container>div#content>form#cashOutWeb_confirm>table.wwFormTableC>tbody>tr>td.tabhead')
   }
   getSubscriberWalletType() {
      return cy.iframe().find('select#partyWalletListSel')
   }
   getCashInCashOut() {
      return cy.get('#collapsible_listnode_0')
   }
   getCashIn() {
      return cy.get('[data-testid="menu.mtrans"] > .fd-nested-list > :nth-child(1) > [data-testid="test-undefined"] > .fd-nested-list__title')
   }

   getSelectArrowButton() {
      return cy.iframe().find('button#view-more>span.mat-button-wrapper>mat-icon.notranslate.material-icons.mat-icon-no-color').eq(0)
   }
   getClickOnViewDetailButton() {
      return cy.iframe().find('button#view-more-details>span.mat-button-wrapper')
   }

   getAssertValues() {
      return cy.iframe().find('div.col-md-4.mt-3.p-3.ng-star-inserted>app-view-detail>div>p.decoration>span')
   }

   getErrorMessage(){
      return cy.iframe().find('.errorMessage')
    }
}

export default CashInCashOut
