class BannerManagementPage {

    getChangeBanner() {
        return cy.iframe().find('[class="mat-button-wrapper"]').eq(0)
    }
    getarrow() {
        return cy.iframe().find('[class="arrow d-flex align-items-center border-0 ng-star-inserted"]').eq(0)
    }
    getnewPage() {
        return cy.iframe().find('[class="font-weight-bold ng-star-inserted"]')
    }
    getleftPlacement() {
        return cy.iframe().find('[class="prev mobile-app-color ng-star-inserted"]')
    }
    getRightPlacement() {
        return cy.iframe().find('[class="next mobile-app-color ng-star-inserted"]')
    }
    getBankManagement() {
        return cy.iframe().find('[class="text-secondary ng-star-inserted"]')
    }
    getSave() {
        return cy.iframe().find('#save')
    }
    getUploadNew() {
        return cy.iframe().find('#upload-banner')
    }
    getCheckbox() {
        return cy.iframe().find('[type="checkbox"]').eq(1)
    }
    getBannerManagement() {
        return cy.iframe().find('[class="text-secondary ng-star-inserted"]')
    }
    getName() {
        return cy.iframe().find('[type="text"]')
    }
    getLanguage() {
        return cy.iframe().find('[class="placeholder-color me-2 ng-star-inserted"]')
    }
    getlang() {
        return cy.iframe().find('[class="custom-select-dropdown-button text-secondary font-weight-bold"]').eq(0)
    }

    getupload() {
        return cy.iframe().find('[class="m-auto d-flex justify-content-center align-items-center py-5"]')
    }

    getAlertdefault() {
        cy.get('.fd-page.iframeContainer.svelte-1v5e28n > iframe').then(($iframe) => {

            const $body = $iframe.contents().find('body')
            const $win = $iframe[0].contentWindow
            cy.stub($win, 'alert', () => true).as('windowConfirm')
            cy.stub($win.console, 'log').as('consoleLog')
            cy.wrap($body).find('#click-make-default').click()
        })
    }

    getNextBtn() {
        return cy.iframe().find('#next')
    }

    getNextbutton() {

        return cy.iframe().find('button[name="next"]>[class="mat-button-wrapper"]').eq(1)
    }
    getUpload() {
        return cy.iframe().find('#upload')
    }
    getYes() {
        return cy.iframe().find('#yes')
    }





}
export default BannerManagementPage;