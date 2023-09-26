// // <reference types="Cypress" />
// /// <reference types = "Cypress-iframe"/>
// import { Given, And, Then, When } from "@badeball/cypress-cucumber-preprocessor";
// import 'cypress-iframe';
// import homePage from '../../../../../../../../support/pageObjects/homePage';
// import BannerManagement from'../../../../../../../../support/pageObjects/BannerManagement/BannerManagement';
// import approvals from '../../../../../../../../support/pageObjects/UserManagement/approvals';

// //-------Object Decleration--------------------------------------------------------------------------

// const approvalPage =new approvals
// const welcomePage = new homePage()
// const BannerPage =new BannerManagement()

// //--------------------------------------------------------------------------------------------------

// When('Navigate to Banner Management', function(){
//     welcomePage.getBannerManagement().click({force:true})
  
//   })
  
//   And('Click on Change Banner Order and assert it', function () {
//   BannerPage.getChangeBanner().click({force:true})
//   //BannerPage.getarrow().click({force:true})
//     cy.iframe().find('[class="mat-cell cdk-cell cdk-column-name name ng-star-inserted"]').eq(0)
//       .invoke('text')
//       .as('initialInfo')
//     cy.iframe().find('[class="arrow d-flex align-items-center border-0 ng-star-inserted"]').eq(0)
//       .click()
//     cy.iframe().find('[class="mat-cell cdk-cell cdk-column-name name ng-star-inserted"]').eq(1)
//       .invoke('text')
//       .as('changedInfo')
//     cy.get('@initialInfo').then((initialText) => {
//       cy.get('@changedInfo').should((changedText) => {
//         expect(initialText).to.equal(changedText);
//       })
//     })
//   })
  
//   And('Click on Change Banner Order', function(){
//     BannerPage.getChangeBanner().click({force:true})
//     BannerPage.getarrow().click({force:true})
  
//   })
  
//   Then('Check the left and right arrow',function() {
//     //BannerPage.getBankManagement().click({force:true})
//    // BannerPage.getChangeBanner().click({force:true})

  
//     BannerPage.getleftPlacement().should('be.visible')
//     BannerPage.getRightPlacement().should('be.visible')
//     BannerPage.getnewPage().contains('Change Banner Order')
//   })
  
//   Then('click on save and assert banner order successfull', function() {
//     BannerPage.getSave().click({force:true})
//     cy.waitUntil(()=> {
//       return cy.iframe().find('[class="text-center text-success"]').contains(' SUCCESS ')
//     })
//   })
  
  
//   And('Check the row and click on delete', function() {
//     cy.getDeletebtn()
  
//   })
  
//   //------------------------------------------------------------------------------------------------
  
//   And('Click on Delete Banner', function() {
//   cy.getDeleteBanner()
  
//   BannerPage.getYes().click({force:true})
//   cy.waitUntil(()=> {
//     return cy.iframe().find('[class="mat-simple-snack-bar-content"]').contains('Banner delete request sent for approval')
//   })
//   })
//   //-----------------------------------------------------------------------------------------
//   And('Click on Upload New and Enter the details', function() {
//   BannerPage.getUploadNew().click({force:true})
  
//   BannerPage.getName().eq(0).type('republic')
//   cy.wait(2000)
//   BannerPage.getBannerManagement().click({force:true})
//   cy.wait(2000)
//   BannerPage.getUploadNew().click({force:true})
  
//   BannerPage.getName().eq(0).type('Republic')
//   BannerPage.getName().eq(1).type('http.Republic.com')
//   BannerPage.getCheckbox().click({force:true})
//   BannerPage.getLanguage().click({force:true})
//   BannerPage.getlang().click({force:true})
  
//   BannerPage.getupload().selectFile('cypress/fixtures/Upload.png', { action: 'drag-drop' })
//   cy.wait(2000)
  
//   cy.waitUntil(()=> {
//     return cy.iframe().find('[class="row px-4 py-2"]').contains('Mobiquity Customer App')
//   })
//   BannerPage.getNextBtn().click({force:true})
  
//   cy.waitUntil(()=> {
//     return cy.iframe().find('[class="font-weight-bold text-dark"]').contains('Review & Confir' )
//   })
//   BannerPage.getNextbutton().click({force:true})
  
//   })
  
  
  
  
//   Then('click on next and assert the sucess message', function() {
   
//     BannerPage.getUpload().click({force:true})
//     cy.waitUntil(()=> {
//       return cy.iframe().find('[class="text-center text-success"]').contains(' SUCCESS ')
//     })
//   })
  
  
//   //--------------------------------------------------------------------------------------------
//   And('Click on approve the Banner', function () {
  
//     approvalPage.getCurrentDateRowData().eq(0).click({ force: true })  
//     approvalPage.getApproveButton().click({ force: true })
//     approvalPage.getApproveRequest().click({ force: true })
   
//   })
  
//   Then('Assert the success message of Banner approved', function() {
//     cy.waitUntil(()=> {
//       return cy.iframe().find('[class="mat-simple-snackbar ng-star-inserted"]').contains('Record approved successfully')
//     })
  
//   })
  
//   Then('Assert the success message of Banner Deleted successfully', function(){
  
//     cy.waitUntil(()=> {
//         return cy.iframe().find('[class="mat-simple-snackbar ng-star-inserted"]').contains('Banner has been deleted Successfully')
//       })
//   })