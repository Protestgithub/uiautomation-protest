class authorizationManagement {
    getAuthorizationProfileManagement() {
        return cy.get('[data-testid="test-AUTH_PROFILE"]')
    }
    getApprovals() {
        return cy.get('#collapsible_listnode_18 > .fd-nested-list__title')
    }
    getApprovalButtonTab() {
        return cy.get('[data-testid="menu.approvals"] > .fd-nested-list > :nth-child(1) > [data-testid="test-undefined"]')
    }


    getAddProfile() {
        return cy.iframe().find('[id="add-profile"]')
    }

    getApproveButton() {
        return cy.iframe().find('.mat-focus-indicator.btn.btn-rounded.button-approve.mat-button.mat-button-base.ng-star-inserted').eq(0)
    }

    getApproveButtonSubmit() {
        return cy.iframe().find('.mat-focus-indicator.btn-rounded.button-primary.button-short.mat-button.mat-button-base')
    }

    getAuthorizationUserType() {
        if (Cypress.env('subscriberNamedAs').includes('Subscriber')) {
            return cy.iframe().find('.registration-header').contains('Subscriber')
        }
        else {
            return cy.iframe().find('.registration-header').contains('Customer')
        }

    }
    getAuthorizationUserRole() {
        return cy.iframe().find('.mat-radio-label-content')
    }
    getProfileName() {
        return cy.iframe().find('input[id="profile-name"]')
    }
    getLogoutButton() {
        return cy.iframe().find('.fd-menu__title').eq(2)
    }
    getApproveConfirmationMessage() {

        return cy.iframe().find('.mat-simple-snackbar.ng-star-inserted > span')

    }
    getLogoutYesButton() {
        return cy.iframe().find('.fd-dialog__decisive-button.fd-button.fd-button--emphasized.fd-button--compact.confirm-button')
    }

    getUserMenu() {
        return cy.iframe().find('.fd-shellbar__button.fd-button.fd-identifier.fd-identifier--xs.fd-identifier--circle.svelte-1jh0v0i')

    }
    getChannelsAllowed1() {
        return cy.iframe().find('div.col-12 app-default.ng-star-inserted > div.container-fluid.ng-star-inserted')
    }

    getUserServicePreferences() {

        return cy.iframe().find('.mat-checkbox-label').eq(6)

    }
    getChannelsAllowed2() {
        return cy.iframe().find('input[id="channels-allowed-9-input"]')
    }

    getUsersAllowedSubscriber1() {
        return cy.iframe().find('[id="users-allowed-subscriber-1-input"]')
    }
    getAdd() {
        return cy.iframe().find('[id="add"]')
    }
    getConfirm() {
        return cy.iframe().find('[id="confirm"]')
    }

    getProfileSuccessMessage() {
        return cy.iframe().find('[class=".text-center.text-secondary"]')
    }

    getProfileDoneButton() {
        return cy.iframe().find('[id="done"]')

    }

    getViewProfile() {
        return cy.iframe().find('[id="view-profile-detail-1"]')
    }

    getEditProfile() {
        return cy.iframe().find('.mat-icon.notranslate.viewProfileEditIcon.mat-icon-no-color')
    }

    getModifyProfile() {
        return cy.iframe().find('[id="modify"]')
    }
    getDeleteProfile() {
        return cy.iframe().find('[id="delete-profile-1"]')
    }

    getYesDeleteProfile() {
        return cy.iframe().find('[id="yes"]')
    }

    getModulesCheck() {
        return cy.iframe().find('[id="module-1"]')

    }
    getServicesCheck() {
        return cy.iframe().find('[id="privilege-1"]')

    }

    getViewProfileSuccess() {
        return cy.iframe().find('app-view-detail.ng-star-inserted:nth-child(3) app-page-link:nth-child(2) div.container-fluid.mt-3 div.row > div.col-12')
    }

    getViewProfileNameSuccess() {
        return cy.iframe().find('font-weight-700 ng-star-inserted')
    }
    getViewProfileModifySuccess() {
        return cy.iframe().find('.text-center.text-secondary.font-weight-700.mt-4.pt-1')
    }
    getViewProfileModifyDone() {
        return cy.iframe().find('[id="done"]')
    }

    getViewProfileDeleteSuccess() {
        return cy.iframe().find('.mat-simple-snackbar.ng-star-inserted')
    }

    getAllModules() {
        return cy.iframe().find('.row.mt-2.profile-list-container div')

    }


    // ------------------Administrator---------------

    getAdministratorType() {
        return cy.iframe().find('.registration-header').contains('Administrator')
    }

    getAdministratorBusinessAdmin() {
        return cy.iframe().find('.mat-radio-label-content').contains('Business Admin')
    }

    getAdministratorCC() {
        return cy.iframe().find('.mat-radio-label-content').contains('Customer care Admin')
    }

    getBusinessType() {
        return cy.iframe().find('.registration-header').contains('Business')
    }

    getBusinessATMRole() {
        return cy.iframe().find('.mat-radio-label-content').contains('Distributer')
    }

    getProfileNameExist() {
        return cy.iframe().find('.text-center.text-secondary').contains
            ('Authorization profile name already exists,please try with different name')
    }

    //---------------------Teardown----------------------------------------

    getFilter() {
        return cy.iframe().find('.mat-button-wrapper>.noFilter')
    }
    getuserdefined() {
        return cy.iframe().find('#status-1')
    }
    getApplyFilter() {
        return cy.iframe().find('button[name="apply-filter"]')
    }

    getCustomercareadmin() {
        return cy.iframe().find('.mat-checkbox-label').contains('Customer care Admin')
    }
    getdistributer() {
        return cy.iframe().find('.mat-checkbox-label').contains('Distributer')
    }
    getbusinessadmin() {
        return cy.iframe().find('.mat-checkbox-label').contains('Business Admin')
    }
    getsubscriber() {
        return cy.iframe().find('.mat-checkbox-label').contains('Subscriber')
    }
    getcustomer() {
        return cy.iframe().find('.mat-checkbox-label').contains('Customer')
    }
    getDeleteCCA() {
        return cy.iframe().find('mat-icon.mat-icon.notranslate.viewProfileDeleteIcon.mat-icon-no-color')
    }
    getUserdefinedCheckbox() {
        return cy.iframe().find('#status-1-input')
    }
    getSystemadminCheckbox() {
        return cy.iframe().find('.mat-checkbox-label').contains('System Admin')
    }
    getApplyButton() {
        return cy.iframe().find('#apply-filter')
    }
    getSelectUser() {
        return cy.iframe().find('[class="mat-radio-container"]')
    }

    getFilter() {
        return cy.iframe().find('#open-filter')
    }
    getUserdefinedCheckbox() {
        return cy.iframe().find('#status-1-input')
    }

    getApplyButton() {
        return cy.iframe().find('#apply-filter')
    }
    getProfileDelete() {
        return cy.iframe().find('#delete-profile-1')

    }
    getDeleteConfirm() {
        return cy.iframe().find('#yes')
    }
    getEditProfile() {
        return cy.iframe().find('#Path_583')
    }
    getFilter() {
        return cy.iframe().find('#open-filter')
    }
    getUserdefinedCheckbox() {
        return cy.iframe().find('.mat-checkbox-label').contains('User-Defined')
    }

    getApplyButton() {
        return cy.iframe().find('#apply-filter')
    }
    getProfileModify() {
        return cy.iframe().find('#edit-profile-1')
    }
    getHeadmerchant() {
        return cy.iframe().find('.mat-radio-label-content').contains('Head Merchant')
    }

    getBusinessModule() {
        return cy.iframe().find('[class="d-flex justify-content-between align-items-center"]')
    }

    //-------------------------SIT-----------------------------------
    getSearchModule() {
        return cy.iframe().find('#search-module')
    }

    getSearchedModule() {
        return cy.iframe().find('#module-1')
    }

    getCancelButton() {
        return cy.iframe().find('#cancel')
    }

    getBackButton() {
        return cy.iframe().find('#back')
    }

    getBackArrowButton() {
        return cy.iframe().find('#left-arrow')
    }

    getCopyIcon() {
        return cy.iframe().find('#clone-profile-1')
    }

    getDefaultStatus() {
        return cy.iframe().find('#status-2')
    }

    getCategoryFilter() {
        return cy.iframe().find('#category-customer-1')
    }

    getClearButton() {
        return cy.iframe().find('#clear-filter')
    }


    getCreatedON() {
        return cy.iframe().find('#sort-createdOn')
    }

    getCreatedBY() {
        return cy.iframe().find('#sort-createdBy')
    }

    getModifiedON() {
        return cy.iframe().find('#sort-modifiedOn')
    }

    //--------------------------SIT Auth

    getEmployeeeType() {
        return cy.iframe().find('.registration-header').eq(0)
    }

    getEmployeeeBusinessAdmin() {
        return cy.iframe().find('.mat-radio-label-content').eq(0)
    }


}
export default authorizationManagement