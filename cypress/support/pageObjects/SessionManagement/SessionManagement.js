class SessionManagement
{
    getSearchUser(){
        return cy.iframe().find('input[data-test-id="user-search-details"]')
    }
    getSearchBtn(){
        return cy.iframe().find('#session-search')
    }
    getimg(){
        return cy.iframe().find('.valid-user img')
    }
        getSessionLogoutAllDevices(){
        return cy.iframe().find('#session-logout')
    }
    getdevices()
    {
        return cy.iframe().find('mat-checkbox[class="mat-checkbox mat-accent"]')
    }
    getdeletedevices()
    {
        return cy.iframe().find('button[id="delete-action"]')
    }
    getconfirmdelete()
    {
        return cy.iframe().find('button[id="delete-selected"]')
    }
    //---------------
    getAssertSessionInformation(){
        return cy.iframe().find('.label-text')
    }
    getViewDetails(){
        return cy.iframe().find('mat-row[class="mat-row cdk-row ng-star-inserted"]').eq(1)
    }
    
    // Added on 15/06/2023 - For Asserting Current device session
    getStatus(){
            return cy.iframe().find('[class="primary-badge current-badge ng-star-inserted"]')
    }
     getLogoutAllDevicesExceptCurrent() {
             return cy.iframe().find('[data-test-id="logout-action"]')
     }
     
     getYesForLogoutExceptCurrent() {
               return cy.iframe().find('[id="logout-selected"]')
     }

     getrow(){
        return cy.iframe().find('[role="row"]')
     }
}
export default SessionManagement