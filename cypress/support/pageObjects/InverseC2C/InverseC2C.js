class InverseC2C{
    getInverseC2CTab() {
        return cy.get('[data-testid*="INVC2C"]')
    }

    getDomain()
        {
            return cy.iframe().find('select#sel')
        }

    getPayerCategory()
    {
        return cy.iframe().find('select#ops1')
    }

    getMSIsDn()
    {
        return cy.iframe().find('input#accessIdId')
    }
    getClick()
        {
            return cy.iframe().find('span.info').eq(0)
        }
    
    getPayerWalletType()
    {
        return cy.iframe().find('select#otherWalletListId')
    }

    getSubmit()
    {
        return cy.iframe().find('input#inverseC2cTrf_userDetails_button_submit')
        
    }
    getAmount()
    {
        return cy.iframe().find('input[name="amount"]')
    }
    getSubmitConfirm()
    {
        return cy.iframe().find('input#inverseC2cTrf_confirm_button_submit')
    }
    getConfirm()
    {
        return cy.iframe().find('input#inverseC2cTrf_confirm_c2c')
    }
    getSuccess()
    {
        return cy.iframe().find('span.actionMessage')
    }

}
export default  InverseC2C