class walletManagement {
    getMultipleWalletManagement() {
        return cy.get('[data-testid="menu.mltplwallt"] > div > a')
    }
    getviewWallet() {
        return cy.iframe().find('.actionMessage')
    }

    getAddWallet() {
        return cy.get('[data-testid="menu.mltplwallt"] > ul > li:nth-child(1) > a')
    }
    getErrorMessage() {
        return cy.iframe().find('.errorMessage')
    }
    getDeleteWallet() {
        return cy.get('[data-testid="menu.mltplwallt"] > ul > li:nth-child(4) > a')
    }
    getViewWallet() {
        return cy.get('[data-testid="menu.mltplwallt"] > ul > li:nth-child(2) > a')
    }
    getModifyWallet() {
        return cy.get('[data-testid="menu.mltplwallt"] > ul > li:nth-child(3) > a')
    }
    getWalletName() {
        return cy.iframe().find('input[name="walletName"]')
    }
    getSaveButton() {
        return cy.iframe().find('input[name="button.save"]')
    }
    getDeleteButton() {
        return cy.iframe().find('action:multipleWalletMgmtDelete_detailsOfSelectedWallet')
    }
    getConfirmDelete() {
        return cy.iframe().find('input[name="action:multipleWalletMgmtDelete_deleteWallet"]')
    }
    getUpdateButton() {
        return cy.iframe().find('input[name="action:multipleWalletMgmtModify_detailsOfSelectedWallet"]')
    }
    getSaveWallet() {
        return cy.iframe().find('input[name="action:multipleWalletMgmtModify_modifyWallet"]')
    }
    getModify() {
        return cy.iframe().find('input[type="radio"]').eq(3)
    }
    getDeleteRecord() {
        return cy.iframe().find('#deleteGrades_delete .wwFormTableC>tbody>tr', '{force:true}').each(($row => {
            cy.wrap($row).within(function () {
                cy.get('td').each(($el => {
                    if ($el.text() == this.data01.AddGrades.gradeCode) {
                        cy.get('[type="checkbox"]').click()
                    }

                }))


            })
        }))
    }
    /*  get()
      {
          return cy.iframe().find('')
      }
      get()
      {
          return cy.iframe().find('')
      }*/
    getviewdelete() {
        return cy.iframe().find('span.actionMessage')
    }
    getDeleteButtonwallet() {
        return cy.iframe().find('#multipleWalletMgmtDelete_input_submit')
    }
    getconfirmdeletewallet() {
        return cy.iframe().find('#multipleWalletMgmtDelete_detailsOfSelectedWallet_button_confirm')
    }
    getSuccessMessage() {
        return cy.iframe().find('[class="actionMessage"]')
    }
    getDeleteButton1() {
        return cy.iframe().find('.tabcenter #multipleWalletMgmtDelete_input_submit')
    }
    getConfirmDelete1() {
        return cy.iframe().find('.tabcenter #multipleWalletMgmtDelete_detailsOfSelectedWallet_button_confirm')
    }
    getTableData() {
        return cy.iframe().find('.wwFormTableC>tbody>tr>td')
    }
    getTableDataChild() {
        return cy.get('.wwFormTableC>tbody>tr>td')
    }

    //-------------------------modify wallet name--------------
    getModifyWalletName() {
        return cy.iframe().find('input[name="updatedWalletName"]')
    }

    getErrorMessage1() {
        return cy.iframe().find('[class="errorMessage"]')
    }

}
export default walletManagement