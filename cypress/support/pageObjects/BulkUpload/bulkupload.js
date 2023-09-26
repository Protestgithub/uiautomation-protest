class bulkupload {
    getAuthorizationProfileManagement() {
        return cy.get('[data-testid="test-AUTH_PROFILE"]')
    }
    
    getEnterpriseTab()
    {
        return cy.get('#collapsible_listnode_0')
    }
   
    getEnterpriseInitiationTab()
    {
        return cy.get('[data-testid="menu.payroll"] > .fd-nested-list > :nth-child(1) > [data-testid="test-undefined"] > .fd-nested-list__title')
    }
    getEnterpriseDahboardTab()
    {
        return cy.get(':nth-child(4) > [data-testid="test-undefined"] > .fd-nested-list__title')
    }
    getServicename()
    {
        return cy.iframe().find('.browser-default.ng-untouched.ng-pristine.ng-valid')
      
    }
    getDownloadTemplate()
    {
        return cy.iframe().find('a[target="_blank"]')   
    }
    getUploadLink()
    { 
        return cy.iframe().find('input[type="file"]')
        
    }

    getSubmitButton()
        {
            return cy.iframe().find('button.btn.waves-effect.waves-light.submitBtn')
        }

    getSecurityQuestionOne()
    {
        return cy.iframe().find('select.ques-input').eq(0)

    }
    getSecurityQuestionTwo()
    {
        return cy.iframe().find('select.ques-input').eq(1)


    }
    getAnswerTabOne()
        {
            return cy.iframe().find('input.ans-input').eq(0)

        }
    getAnswerTabTwo()
        {
            return cy.iframe().find('input.ans-input').eq(1)

        }
    getCheckbox(){
        return cy.iframe().find('[name="item.name"]')
    }

    getSaveButton()
        {
            return cy.iframe().find('button#setting-save-btn')
        }
    getDoneButton()
    {
        return cy.iframe().find('button.login-btn-modal')
    }
    getSuccessmessage()
    {
        return cy.iframe().find('p.text-content')
    }
    getTextBox()
    {
        return cy.iframe().find('div.alert.alert-success')
       
    }
    getApprovalOne()
    {
        return cy.iframe().find('[data-testid="menu.payroll"] > .fd-nested-list > :nth-child(2) > [data-testid="test-undefined"]')
        //('span.fd-nested-list__title.svelte-sigym8').eq(2)
       
    }
    getApprovalType()
    {
        return cy.iframe().find('select.ng-valid.ng-dirty.ng-touched')
    }
    getApprovalTab()
    {
        return cy.iframe().find('span.primary_color_dark.fnt_wight600')
    }
    getEnterpriseAprooval()
    {
        return cy.get('a.fd-nested-list__link.svelte-sigym8').eq(2)
    }
    getSelectApproval()
    {
        return cy.iframe().find('select.ng-untouched.ng-pristine.ng-valid')
    }
    getFirstSelectApproval()
    {
        return cy.iframe().find('select.ng-untouched.ng-pristine.ng-valid').eq(0)
    }
    getSecondSelectApproval()
    {
        return cy.iframe().find('select.ng-untouched.ng-pristine.ng-valid').eq(1)
    }
    getEnterpriseInitiatedBy()
    {
        return cy.iframe().find('span.primary_color_dark.fnt_wight600').eq(0)
    }
    getEnterpriseBulkId()
    {
         return cy.iframe().find('section.col.s6>div.row.div-row-padding>div.col.s12.div-border-data1>section.col.s6>div.div-download-data.center.bulk_id_box>div>span.primary_color_dark.bulkID')
    }
    getEnterpriseApproveButton()
    {
        return cy.iframe().find('div.col.s6.div-button-border.center.active-color.approve_btn > span')
    }
    getApproveSucess()
    {
        return cy.iframe().find('div.col.s6.alert.alert-success.padd_tb>span')
    }
//---------------------------------------------------------------------------------------
getClickOnEntries()
{
    return cy.iframe().find('span.lh,acyive-color').eq(0)
}
getSuccessCount()
{
    return cy.iframe().find('span.primary-color-light_success_count')
}
getFailedTextBox()
{
    return cy.iframe().find('div.alert.alert-danger')
   
}
getBatchID()
{
    return cy.iframe().find('section.col.s3.pd_zero>div.bulk_id_box.div-download-data.center>div>span.primary_color_dark.bulkID')

}
//-----------------------------------------------------------------------------
getBulkRejectButton()
{
    return cy.iframe().find('.col.s6.div-button-border.center.reject_btn')
}
//--------------
getInitiated() {
return cy
.iframe()
.find('[class="ng-untouched ng-pristine ng-valid"]')
.eq(1)
}
getInitiatedCount() {
return cy.iframe().find('[class="col s12 div-border pd_zero"]')
}
getFailed() {
    return cy
      .iframe()
      .find('[class="ng-untouched ng-pristine ng-valid"]')
      .eq(1)
  }
  getFailedCount() {
    return cy.iframe().find('[class="col s12 div-border pd_zero"]')
  }
  getEnterpriseRejectButton()
  {
      return cy.iframe().find('div.col.s6.div-button-border.center.reject_btn>span>a.approve_reject_btns')
  }
  getRemarks()
  {
      return cy.iframe().find('input#remarks')
  }
  getClick()
  {
      return cy.iframe().find('div.pt')
  }
getDownloadFile()
 {
 return cy.iframe().find('section.col.s3.pd_zero>div.bulk_id_box.div-download.center>span>a.sort-link-button.cta_color')
 }
 getDownloadErrorStatus()
  {
     return cy.iframe().find('div.sort-link-container>div.s12.pd_zero>span>a.text_decoration')
   }
 

   getNoRecord(){
    return cy.iframe().find('[class="approver-empty-container no_PendingRecords_Img"]')
 }
 getNoRecords(){
    return cy.iframe().find('[class="row div-row-padding pd_zero"]')
 }
}
export default bulkupload