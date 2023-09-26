class BulkRegistration{

    //------------------------------------------bulk registration---------------------

    getMultUserDownloadTemplate()
    {
        return cy.iframe().find('[id="click-download-template"]')   
    }

    getReferenceDataField()
    {
        return cy.iframe().find('[class="ml-2 mb-3"]')   
    }
    getStepperDownloadTemplate()
    {
        return cy.iframe().find('[class="mat-step-text-label ng-star-inserted"]').eq(0)
    }
    getStepperUploadFile()
    {
        return cy.iframe().find('[class="mat-step-text-label ng-star-inserted"]').eq(1)
    }
    getUploadFileIcon()
    {
        return cy.iframe().find('[class="single-file d-flex align-items-center justify-content-between p-2 mb-2 ng-star-inserted"]')
    }
    // getProceed()
    // {        
    //     return cy.iframe().find('[id="click-proceed"]')      
    // }
    getProceed()
    {
        return cy.iframe().find('[class="mat-focus-indicator button-primary py-2 btn-rounded font-weight-700 text-uppercase mat-button mat-button-base ng-star-inserted"]')
    }
    getCancel()
    {        
        return cy.iframe().find('#click-cancel')      
    }
    getRecordsStatus()
    {        
        return cy.iframe().find('[class="record-container ng-star-inserted"]')      
    }
    getRecordsStatusContainer()
    {        
        return cy.iframe().find('[class="record-status-container"]')      
    }
    getDownloadRecordFile()
    {
        return cy.iframe().find('[data-test-id="download"]')
    }
    getCancelUpload()
    {        
        return cy.iframe().find('[data-test-id="cancel"]')      
    }
    getConfirmCancelUpload()
    {        
        return cy.iframe().find('[data-test-id="yes"]')      
    }
    getCancelUploadSuccessMsg()
    {        
        return cy.iframe().find('[class="mat-simple-snackbar ng-star-inserted"]')   
    }

    
    //added on 15/06/2023

    getAssertSubmit()

    {

    return cy.iframe().find('[class="mat-simple-snackbar ng-star-inserted"]')

    }

    //added on 15/06/2023

    getConfirm()

    {

    return cy.iframe().find('[id="confirm"]')

    }


}
export default BulkRegistration