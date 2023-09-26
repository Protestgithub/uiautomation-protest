class AddCategory {

    getCategoryName() {
        return cy.iframe().find('#newCategory')
    }

    getCategoryCode() {
        return cy.iframe().find('#newCategoryCode')
    }
    getDomainName() {
        return cy.iframe().find('select[id="domainCode"]')
    }
    getCatDomainName() {
        return cy.iframe().find('[id="domainCode"]')
    }
    getViewButton() {
        return cy.iframe().find('[id="viewcat_button_view1"]')
    }
    getTableValue() {
        return cy.iframe().find('table > tbody > tr')
    }
    getParentCategory() {
        return cy.iframe().find('select[id="categoryCode"]')
    }
    getCategorySubmit() {
        return cy.iframe().find("#addcat_button_submit")
    }
    getConfirmbttn() {
        return cy.iframe().find('#addcat_conf')
    }
    getApprovalCategory() {
        return cy.iframe().find('#catapp_label_button_approve')
    }
    getAllCheckBox1() {
        return cy.iframe().find('.wwFormTableC tbody>tr').within(function () {
            cy.get('td').within(function () {
                cy.get('[onclick="javascript:selectAll()"]').click({ force: true })
            })

            cy.intercept('/CoreWeb/utility/addnewcategory_loadBankServices.action').as('loadBankServices')
            cy.get('input[id="wallet_button_next"]').click({ force: true })

            //   cy.wait('@loadBankServices',{timeout:70000})

        })
    }

    getAllCheckBox2() {
        return cy.iframe().find('.wwFormTableC tbody>tr').within(function () {
            cy.get('td').within(function () {
                cy.get('[onclick="javascript:selectAll()"]').click({ force: true })
            })

            cy.intercept('/CoreWeb/utility/addcategoryapproval_getBankServicesForCat.action').as('getBankServices')
            cy.get('input[id="wallet_button_next"]').should('be.visible').click({ force: true })

            //  cy.wait('@getBankServices',{timeout:50000})

        })
    }
    getAllCheckBox3() {
        return cy.iframe().find('.wwFormTableC tbody>tr').within(function () {
            cy.get('td').within(function () {
                cy.get('[onclick="javascript:selectAll()"]').click({ force: true })
            })

            cy.intercept('/CoreWeb/utility/addcategoryapproval_getNonFinancialSerForCat.action').as('getNonFinancialSerForCat')
            cy.get('input[id="wallet_button_next"]').should('be.visible').click({ force: true })

            //   cy.wait('@getNonFinancialSerForCat',{timeout:50000})

        })
    }



    getFinalSubmit() {
        cy.iframe().find('.wwFormTableC tbody>tr').within(function () {
            cy.get('td').within(function () {
                cy.get('[onclick="javascript:selectAll()"]').click({ force: true })
            })
            cy.get('td').within(function () {
                cy.get("input[type='submit']").eq(0).click()
            })
        })
    }
    //------------------
    getRejectionmsg() {
        return cy.iframe().find('.actionMessage')
    }
    getReject() {
        return cy.iframe().find('#catapp_label_button_reject')
    }
    getsubmitbttn() {
        return cy.iframe().find('#addcat_button_submit')
    }
    getActionmessg() {
        return cy.iframe().find('.actionMessage')
    }
    getErrormessg(){
        return cy.iframe().find('[class="errorMessage"]')
    }
}
export default AddCategory