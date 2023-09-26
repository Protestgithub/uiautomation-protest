class adminTransaction
{
    /*************************************Related to Stock creation*****************************/
    getStockCreation()
    {
        return cy.iframe().find('div[class="mat-ripple mat-tab-label mat-focus-indicator mat-tab-label-active ng-star-inserted"]')
    }

    getCurrency()
    {
        return cy.iframe().find('#currency')
    }
    getBank()
    {
        return cy.iframe().find('#trustbank')
    }
    getStockAccount()
    {
        return cy.iframe().find('#tostockaccount')
    }
    getAmount()
    {
        return cy.iframe().find('#transactionAmount')
    }
    getReferenceNumber()
    {
        return cy.iframe().find('#referenceNumber')
    }
    getRemarks()
    {
        return cy.iframe().find('#remarks')
    }
    
    getStockAccountBalance()
    {
        return cy.iframe().find('[class="form-input-label"]').eq(1)
    }
    

    /************************Related to allocation***************************************/
    //getCurrency()
    getAllocation()
    {
        return cy.iframe().find('#mat-tab-label-0-3')
    }

    getSearchMobileNumber()
    {
        return cy.iframe().find('#searchUserByMobile')
    }
    
    getWalletType()
    {
        return cy.iframe().find('#wallettype')
    }

    getTransferAmount()
    {
        return cy.iframe().find()
    }
   
    //getAmount()

    //getReferenceNumber()

    getInstumentType()
    {
        return cy.iframe().find('#instrumanttype')
    }
   
    getInstumentNumber()
    {
        return cy.iframe().find('#instrumentnumber')
    }

    //getRemarks()

    getSelectAllocation()
    {
        return cy.iframe().find('.submit-button-valid')
    }

    getSelectSubmit()
    {
        return cy.iframe().find('[class="btn-save"]')
    }

    getSuccessMessage()
  {
    return cy.iframe().find('.popup-img_des_sub').eq(0)
  }

  getFilter()
  {
    return cy.iframe().find('[class="mat-focus-indicator d-flex align-items-center text-secondary font-weight-700 py-2 mat-button mat-button-base"]')
  }
  getEnterWorkflow()
  {
    return cy.iframe().find('#enter-workflow')
  }

  getClickApply()
  {
    return cy.iframe().find('#apply-filter')
  }

  getApprove()
  {
    return cy.iframe().find('#approve-expanded-record')
  }

  getClickYes()
  {
    return cy.iframe().find('[class="mat-focus-indicator btn-rounded button-primary button-short mat-button mat-button-base"]')
  }
  
  getOwnerToChannel()
  {
    return cy.iframe().find('[class="mat-option-text"]')
  }
  getSuspendMessage()
  {
    return cy.iframe().find('[class="popup-img_des_sub"]')
  }
  
}
export default adminTransaction