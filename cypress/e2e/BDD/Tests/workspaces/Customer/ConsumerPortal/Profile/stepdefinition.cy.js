/// <reference types= "Cypress" />
// <reference types= "Cypress-iframe" />

//import 'cypress-iframe'
import { Given, When, Then, And, Before } from "@badeball/cypress-cucumber-preprocessor";
import "../../../../../../../support/Utils/generic"
import LoginPage from "../../../../../../../support/pageObjects/ConsumerPortalUserLogin/LoginPage";
import HomePage from "../../../../../../../support/pageObjects/ConsumerPortalHomePage/HomePage";
import Profile from "../../../../../../../support/pageObjects/ConsumerPortalProfile/Profile";
import 'cypress-file-upload';
//import { get } from "lodash";
//import { random } from "cypress/types/lodash";
// before(function(){
//     cy.fixture('MerchantPaydata').then(function(data){
// this.data=data
//     }
// })
    


const UserLoginPage = new LoginPage()
const WelcomePage = new HomePage()
const ProfilePage = new Profile()
var ViewProfile='cypress/fixtures/ConsumerPortal/ViewProfile'
const Back="Backlap.jpg"
const Front="Frontlap.jpg"



When('Click on Profile',function(){
    cy.wait(4000)
    WelcomePage.getViewProfile().click({force:true})
    WelcomePage.getProfile().click()
})
And('Assert all the required fields are present',function(){
    cy.wait(3000)
    ProfilePage.getEditButton().eq(0).click()
    ProfilePage.getEditTextBox().eq(0).clear().type("7771234123")//MOBILE
    ProfilePage.getEditVerify().click({force:true})
    ProfilePage.getEditButton().eq(1).click()
    ProfilePage.getEditTextBox().eq(1).clear().type("KMKCMDKLM@GMAIL") //EMAIL
    ProfilePage.getAssertAllField().should('contain','Mobile Number')
                                   .should('contain','Email ID') 
                                   .should('contain','Payment ID')
                                   //.should('contain','Gender')
                                   .should('contain','Date of birth')
                                   .should('contain','Address')
                                   .should('contain','Name')
    ProfilePage.getOverallLimits().should('contain','Spending')    
                            .should('contain','Receiving')                               
})

And('Update KYC details',function(){
   // ProfilePage.getViewKYC().click()// some time View button is not showing 
  //  ProfilePage.getBackView().click()
    //ProfilePage.getCrossIcon().click()
     ProfilePage.getUpload().click({force:true})
    ProfilePage.getKYCIdValue().type('BB123456789',{force:true})
    cy.wait(4000)
    ProfilePage.getDocumentType().click()
    cy.wait(4000)
    ProfilePage.getselectDoc().contains('PAN').click()
    //ProfilePage.getDocumentType().click().contains('Driver card').click()
    ProfilePage.getExpDate().type('8/30/2029')
    cy.wait(3000)
    ProfilePage.getFrontImage().eq(0).attachFile("Frontlap.jpg")/// re work 
    cy.wait(3000)
    //ProfilePage.getFrontImage().click({force:true})
    cy.wait(3000)
    ProfilePage.getBackImage().attachFile(Back,{force:true})
    ProfilePage.getAsserFile().should('contain','Backlap.jpg')
    ProfilePage.getKycSubmit().click({force:true})
})

// -------------------------Threshold and Limits ----------------------------------------
And('checking on Threshold and Limits',function(){
    ProfilePage.getOverallLimits().should('contain','Spending')    
                            .should('contain','Receiving')
                            cy.wait(3000)
    // ProfilePage.getSelectCurrencyType().wait(2000).select('INR- ₹')
    // ProfilePage.getSelectWeeklyType().select('Weekly')                        
    ProfilePage.getDetailLimitExpand().click({force:true})
    //ProfilePage.getDetailLimitReceiving().click()
    ProfilePage.getDetailLimitFilter().click()
    ProfilePage.GetServiceListMore().click()
    ProfilePage.GetApplyFilter().click()
    ProfilePage.getDetailLimitReceiving().click()
    //ProfilePage.getDetailLimitSpending().click()
    ProfilePage.getDetailLimitFilter().click()
    ProfilePage.GetServiceListMore().click()
    ProfilePage.GetApplyFilter().click()
})
And('Currency',function(){
    ProfilePage.getSeclectCurrency().click()
    ProfilePage.getChangeCurrencyPin().type("1357")
    ProfilePage.getPinVerify().click()
    
})