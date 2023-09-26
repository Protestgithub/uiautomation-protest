class ServiceChargePage{

getProfileName()
{
    return cy.iframe().find('#profileName')
}
getshortCode(){
    return cy.iframe().find('#shortCode')
}
getpaymentTypeServicesId(){
    return cy.iframe().find('select[id="paymentTypeServicesId"]')
}

getpayerProfileGradeId(){
    return cy.iframe().find('#payerProfileGradeId')
}
getNext()
{
    return cy.iframe().find('#submitButton')
}
getSenderGrade(){
    return cy.iframe().find('.wwFormTableC select[name="payerProfileGradeCode"]')
}
getReceiverGrade(){
    return cy.iframe().find('.wwFormTableC select[name="payeeProfileGradeCode"]')
}
getMultiples(){
    return cy.iframe().find('input[name="displayMultipleOf"]')
}
getminservicechargeamount(){
    return cy.iframe().find('input[name="servChrgMap.minTransferValue"]')
}
getmaxservicechargeamount(){
    return cy.iframe().find('input[name="servChrgMap.maxTransferValue"]')
}
getPayingEntity(){
    return cy.iframe().find('.wwFormTableC select[name="servChrgDetails.payingEntityCode"]')
}
getCreditEntity(){
    return cy.iframe().find('.wwFormTableC select[name="creditEntity"]')
}
getminFixedservicecharge(){
    return cy.iframe().find('input[name="servChrgDetails.minFixedServiceCharge"]')
}
getmaxFixedservicecharge(){
    return cy.iframe().find('input[name="servChrgDetails.maxFixedServiceCharge"]')
}
getserviceperlist(){
    return cy.iframe().find('input[name="servChargePerList"]')
}
getservicefixlist(){
    return cy.iframe().find('input[name="servChargeFixList"]')
}
getToRange(){
    return cy.iframe().find('input[name="endRangeAsString"]').eq(0)
}
getToRange1(){
    return cy.iframe().find('input[name="endRangeAsString"]').eq(1)
}
getsubmit1()
{
    return cy.iframe().find('input[type="submit"]')
}
getsubmit2()
{
    return cy.iframe().find('input[type="submit"]').eq(0)
}
getcheckbox1(){
    return cy.iframe().find('.wwFormTableC input[type="checkbox"]').eq(0)

}
getcheckbox2(){
    return cy.iframe().find('.wwFormTableC input[type="checkbox"]').eq(1)
    
}
getServiceTaxSender(){
    return cy.iframe().find('.wwFormTableC input[name="servChTaxPerList"]').eq(0)
}
getServiceTaxReceiver(){
    return cy.iframe().find('.wwFormTableC input[name="servChTaxPerList"]').eq(1)
}
getAdd(){
    return cy.iframe().find('input[name="addDetails"]')
}
getapprove(){
    return cy.iframe().find('a').eq(0)
}
getSuccessMessage(){
return cy.iframe().find('span.actionMessage')
}


//-----------------------------------------------
getSenderwallet(){
    return cy.iframe().find('#senderLinkedBanksOrWalletTypesId')
}
getReceiverwallet(){
    return cy.iframe().find('#receiverLinkedBanksOrWalletTypesId')
}
getServiceTaxSender1(){
    return cy.iframe().find('.wwFormTableC input[name="txnAmtTaxPerList"]').eq(0)
}
getServiceTaxReceiver1(){
    return cy.iframe().find('.wwFormTableC input[name="txnAmtTaxPerList"]').eq(1)
}
getcheckbox3(){
    return cy.iframe().find('.wwFormTableC input[type="checkbox"]').eq(2)

}
getcheckbox4(){
    return cy.iframe().find('.wwFormTableC input[type="checkbox"]').eq(3)

}
getSuccessMessage(){
    return cy.iframe().find('span.actionMessage')
}
getServiceChargeModify(){
    return cy.get('a[title="Modify/Delete Service Charge"]')
}

getSelect(){
return cy.iframe().find('#selectServSetID')
//return cy.iframe().find('select[id="selectServSetID"]')
}


getUpdate(){
    return cy.iframe().find('input#confirm_loadDetail_update')
}
getSavebtn(){
    return cy.iframe().find('#confirmModify_confirmModify_button_save')
}
getConfirmbtn(){
    return cy.iframe().find('#confirmModify_modify_button_confirm')
}
getmodifycode(){
    return cy.iframe().find('[name="servChrgMap.shortCode"]')
}
getDeletebtn(){
    return cy.iframe().find('#confirm_loadDetail_delete')
}
getProfilevsn(){
    return cy.iframe().find('#confirmadd_confirmAdd_servChrgMap_lastVersion')
}
getDate(){
    return cy.iframe().find('#confirmadd_confirmAdd_servicechargeprofile_label_servertime')
}


getServiceChargeapproval(){
   return cy.get('[data-testid="menu.servcharg"] > .fd-nested-list > :nth-child(6) > [data-testid="test-undefined"]')
}

getDeleteoption() { 
    return cy.get('.fd-page.iframeContainer.svelte-1v5e28n > iframe').then(($iframe) =>{const $body = $iframe.contents().find('body')  
const $win = $iframe[0].contentWindow 
cy.stub($win, 'confirm', () => true).as('windowConfirm')
cy.stub($win.console, 'log').as('consoleLog')
cy.wrap($body).find('#confirm_loadDetail_delete').click().should(function (){
expect(this.windowConfirm).to.be.calledWith('Are you sure you wish to delete?')
// expect(this.consoleLog).to.be.calledWith('CONFIRMED') 
// passes})})
})
})
}




getSuspendSavebtn(){
    return cy.iframe().find('#suspend_listView_button_save')
}
getSuspendConfirmbtn(){
    return cy.iframe().find('#suspend_saveSuspend_button_confirm')
}
getDatePicker(){
    return cy.iframe().find('span>input[type="text"]')
}
getErrorMessage(){
    return cy.iframe().find('span.errorMessage')
}
getSelectdrop(){
    return cy.iframe().find('select#confirmView_loadVersionList_profileName')
}
getLastDay(){
    return cy.iframe().find('[name="numberOfDays"]')
}

getAlertMSG() {
    return cy.get('.fd-page.iframeContainer.svelte-1v5e28n > iframe').then(($iframe) => {
           const $body = $iframe.contents().find('body')
           const $win = $iframe[0].contentWindow
           cy.stub($win, 'alert', () => true).as('windowConfirm')
           cy.stub($win.console, 'log').as('consoleLog')
           
           cy.wrap($body).find('#submitButton').click({force:true}).should(function () {
              //  expect(this.windowConfirm).to.be.calledWith("You must enter a value in MSISDN")
                 })
          cy.stub($win, 'confirm', () => true).as('windowConfirm')
           //cy.wrap($body).find('[name="amount"]').type("1").should(function () {
                     // expect(this.windowConfirm).to.be.calledWith("Subscriber Does Not Exist")
                 })
 
 }
 getModifyUpdateButton(){
    return cy.iframe().find('#subsComRule_loadSubsCommDetail_update')
}

getModifyViewButton(){
    return cy.iframe().find('#subsComRule_loadSubsCommDetail_view')
}




}export default ServiceChargePage