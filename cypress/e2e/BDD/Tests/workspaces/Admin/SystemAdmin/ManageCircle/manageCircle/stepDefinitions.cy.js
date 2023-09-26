/// <reference types="Cypress" />
/// <reference types = "Cypress-iframe"/>

//----------------Imports---------------------------------------------------------------------
import { And, Then, Before, Given } from "@badeball/cypress-cucumber-preprocessor";
import 'cypress-file-upload';
import 'cypress-iframe';
import ManageCircle from '../../../../../../../../support/pageObjects/ManageCircle/manageCircle';
import "../../../../../../../../support/Utils/BankCommands";
import CreateCircle from "../../../../../../../../support/pageObjects/ManageCircle/createCircle";

function getRandomName() {
  name = "";
  var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
  for (var i = 0; i < 1; i++)
    name += possible.charAt(Math.floor(Math.random() * possible.length));
  return name;
}
function getRandomNumber() {
  name = "";
  var possible = "1234567890";
  for (var i = 0; i < 10; i++)
    name += possible.charAt(Math.floor(Math.random() * possible.length));
  return name;
}


//----------------Object Declaration-----------------------------------------------------------------
const CreateCirclePage = new CreateCircle()
const ManageCirclePage = new ManageCircle()
const uuid = () => Cypress._.random(1e10)
const uud = () => Cypress._.random(1e3)
var subRegistration = 'cypress/fixtures/userData/subscriberReg.json'

//-------------------------------------------------TC_01----------------------------------------------------
And('Click Create Circle and search the mobile Number', function () {
  CreateCirclePage.getMobiquityCircle().scrollIntoView()
  CreateCirclePage.getMobiquityCircle().click()
  CreateCirclePage.getCreateCircle().scrollIntoView()
  CreateCirclePage.getCreateCircle().click()
  cy.wait(5000)
  cy.readFile(subRegistration).then((data) => {
    var subscriberMobileNumber = data.subscriberMobile
  CreateCirclePage.getSearchMobileNumberInputBox().type(subscriberMobileNumber)
  })
  cy.SavingCircleOTP(Cypress.env('apiBaseURL'), Cypress.env('port'))
})

//-------------------------------------------------TC_01----------------------------------------------------
Then('Verify circle details, members, appoint officials',function(){
  ManageCirclePage.getViewButton().click()
  ManageCirclePage.getCircleMemberManageOfficial().eq(0).should('exist')
  ManageCirclePage.getCircleMemberManageOfficial().eq(1).should('exist')
  ManageCirclePage.getCircleMemberManageOfficial().eq(2).should('exist')

})
Then('View the Circle details', function () {
  ManageCirclePage.getSearchedMobileNumberCircleName().then(($circleName) => {
    const circleName = $circleName.text()

    ManageCirclePage.getSearchedMobileNumberCircleCode().then(($circleCode) => {
      const circleCode = $circleCode.text()

      ManageCirclePage.getNoOfMember().then(($CircleNo) => {
        const CircleNo = $CircleNo.text()

      ManageCirclePage.getCircleMobileNo().then(($CircleMobile) => {
        const CircleMobile = $CircleMobile.text()

      ManageCirclePage.getSearchedMobileNumberCircleStatus().then(($circleStatus) => {
        const circleStatus = $circleStatus.text()
      ManageCirclePage.getMemberType().then(($CircleMembertype) => {
        const CircleMembertype = $CircleMembertype.text()
      ManageCirclePage.getCreatedOn().then(($CircleCreatedOnTime)=>{
        const CircleCreatedOnTime = $CircleCreatedOnTime.text()
      
        ManageCirclePage.getSearchedMobileNumberCircleName().should('contain', circleName)
        ManageCirclePage.getSearchedMobileNumberCircleCode().should('contain', circleCode)
        ManageCirclePage.getNoOfMember().should('contain', CircleNo)
        ManageCirclePage.getCircleMobileNo().should('contain', CircleMobile)
        ManageCirclePage.getSearchedMobileNumberCircleStatus().should('contain', circleStatus)
        ManageCirclePage.getMemberType().should('contain', CircleMembertype)
        ManageCirclePage.getCreatedOn().should('contain', CircleCreatedOnTime)
        ManageCirclePage.getActionButton().should('be.visible').click()
          })
         })
        })
       })
      })
    })
  })
})

Then('View the Circle details and verify', function () {
  ManageCirclePage.getSearchedMobileNumberCircleName().then(($circleName) => {
    const circleName = $circleName.text()

    ManageCirclePage.getSearchedMobileNumberCircleCode().then(($circleCode) => {
      const circleCode = $circleCode.text()

      ManageCirclePage.getSearchedMobileNumberCircleStatus().then(($circleStatus) => {
        const circleStatus = $circleStatus.text()

        ManageCirclePage.getViewButton().click()
        cy.waitUntil(() => {
          return ManageCirclePage.getCircleNameInCircleDetailsHeader().should('be.visible')
        })
        ManageCirclePage.getCircleNameInCircleDetailsHeader().should('contain', circleName)
        ManageCirclePage.getCircleCodeInCircleDetailsTable().should('contain', circleCode)
        ManageCirclePage.getCircleStatusInCircleDetailsHeader().should('contain', circleStatus)
      })
    })
  })
})


//-------------------------------------------------TC_02----------------------------------------------------

Then('Edit and View the Circle details', function () {
  ManageCirclePage.getSearchedMobileNumberCircleName().then(($circleName) => {
    const circleName = $circleName.text()
    ManageCirclePage.getViewButton().click()
    cy.waitUntil(() => {
      return ManageCirclePage.getCircleNameInCircleDetailsHeader().should('be.visible')
    })
    const randomName = getRandomName()
    ManageCirclePage.getCircleEditIcon().click()
    ManageCirclePage.getCircleNameInputBoxForEditCircle().clear().type(circleName + randomName)

    ManageCirclePage.getEditDetails().eq(1).then(($Discription)=>{
      const Discription = $Discription.text()

    ManageCirclePage.getEditDetails().eq(2).then(($TargetAmount)=>{
      const TargetAmount = $TargetAmount.text()

    ManageCirclePage.getNextButtonForSaveEditCircle().click()
    ManageCirclePage.getNextButtonForSaveEditCircle().click()
    ManageCirclePage.getCircleNameInCircleDetailsHeader().should('contain', circleName + randomName)
    ManageCirclePage.getEditCircleSuccessMessage().should('contain', 'Circle details updated successfully')
      })
    })
  })
})

And('Verify the edit details page validations',function(){
  ManageCirclePage.getViewButton().click()
  ManageCirclePage.getCircleEditIcon().click()
  ManageCirclePage.getCircleNameInputBoxForEditCircle().clear()
  ManageCirclePage.getEditDetails().eq(0).clear()
  ManageCirclePage.getEditDetails().eq(1).clear()
  ManageCirclePage.getCircleNameInputBoxForEditCircle().type(getRandomName())
  ManageCirclePage.getNextButtonForSaveEditCircle().should('be.disabled')
  ManageCirclePage.getCircleNameInputBoxForEditCircle().clear()
  ManageCirclePage.getEditDetails().eq(0).type(getRandomName())
  ManageCirclePage.getNextButtonForSaveEditCircle().should('be.disabled')
  ManageCirclePage.getEditDetails().eq(0).clear()
  ManageCirclePage.getNextButtonForSaveEditCircle().should('be.disabled')

})

//-------------------------------------------------TC_03----------------------------------------------------

Then('Cancel the Edit and View the Circle details', function () {
  ManageCirclePage.getCircleEditIcon().click()
  ManageCirclePage.getCancelButtonForEditCircle().click()
  ManageCirclePage.getCircleNameInCircleDetailsHeader().should('be.visible')
})

And('Click Invite member and search the mobile number', function () {
  ManageCirclePage.getInviteMembersButton().should('be.visible').click()
  cy.readFile(subRegistration).then((data) => {
    var subscriberMobileNumber = data.subscriberMobile
    ManageCirclePage.getInviteMembersSearchInputbox().type(subscriberMobileNumber)
  })
})

Then('Verify the clear functionality', function () {
  ManageCirclePage.getInviteMembersClearButton().click()
  ManageCirclePage.getInviteMembersSearchInputbox().should('contain','')
})

And('Verify Invited Members page',function(){
  ManageCirclePage.getMemberInvitedTab().click()
  ManageCirclePage.getFilter().should('exist')
  ManageCirclePage.getActiveSearch().should('exist')
})
And('Verify Invited Members details',function(){
  // ManageCirclePage.getInvtedMemberName().eq(0).should('exist')
  ManageCirclePage.getInvitedMemberMobile().should('exist')
  ManageCirclePage.getInvitedMemberStatus().should('exist')
  ManageCirclePage.getInvvtedMemberInvitedBy().should('exist')
  ManageCirclePage.getInvtedMemberInvitedOn().should('exist')
})
//-------------------------------------------------TC_02----------------------------------------------------
Then('Verify the add functionality', function () {
  ManageCirclePage.getInviteMembersAddButton().click()
  ManageCirclePage.getInviteMembersAddButton().should('exist')
  ManageCirclePage.getInviteMembersClearButton().should('exist')
  ManageCirclePage.getInviteMemberInviteButton().should('exist')
})



//-------------------------------------------------TC_03----------------------------------------------------
Then('Verify the remove functionality', function () {
  ManageCirclePage.getInviteMembersAddButton().click()
  ManageCirclePage.getInviteMembersRemoveButton().click()
  ManageCirclePage.getInviteMembersMobileNumberTableValue().should('not.exist')
})



//-------------------------------------------------TC_04----------------------------------------------------
Then('Verify the cancel functionality', function () {
  ManageCirclePage.getMembersTab().click()
  ManageCirclePage.getInviteMembersButton().click()
  ManageCirclePage.getCancelButtonForEditCircle().click()
  ManageCirclePage.getInviteMembersMobileNumberTableValue().should('not.exist')
})

And('View the Circle details and click on manage officials tab', function () {
  ManageCirclePage.getViewButton().click()
  cy.waitUntil(() => {
    return ManageCirclePage.getCircleNameInCircleDetailsHeader().should('be.visible')
  })
  ManageCirclePage.getManageOfficialTab().click()
})

Then('Verify the chairperson change history', function () {
  ManageCirclePage.getManageOfficialChangeChairpersonHistoryButton().click()
  ManageCirclePage.getChairpersonHistoryPopupHeader().should('contain', 'Chairperson Change History')
})


//-------------------------------------------------TC_02----------------------------------------------------
Then('Verify the chairperson details', function () {
  ManageCirclePage.getCloseIcon().click()
  ManageCirclePage.getInviteMembersMobileNumberTableValue().should('be.visible')
  ManageCirclePage.getChangeChairperson().should('exist')
  ManageCirclePage.getManageOfficialChangeChairpersonHistoryButton().should('exist')
  ManageCirclePage.getCloseButton().should('exist')
})



//-------------------------------------------------TC_03----------------------------------------------------
Then('Verify the change chairperson popup', function () {
  ManageCirclePage.getChangeChairpersonLink().click()
  ManageCirclePage.getChairpersonHistoryPopupHeader().should('contain', 'Change Chairperson')
})

And('View the Circle details and click on member tab', function () {
  ManageCirclePage.getViewButton().click()
  cy.waitUntil(() => {
    return ManageCirclePage.getCircleNameInCircleDetailsHeader().should('be.visible')
  })
  ManageCirclePage.getMembersTab().click()
})

Then('Verify the member details', function () {
  ManageCirclePage.getMembersPhoneNumberFromTable().should('be.visible')
  ManageCirclePage.getMemberTypeFromTable().should('be.visible')
})


//-------------------------------------------------TC_02----------------------------------------------------
Then('Verify the active member details', function () {
  ManageCirclePage.getMembersPhoneNumberFromTable().should('be.visible')
  ManageCirclePage.getMemberTypeFromTable().should('be.visible')
})

Then('Verify the invited member details', function () {
  ManageCirclePage.getMemberInvitedTab().should('be.visible').click()
})

Then('Verify the rejected member details', function () {
  ManageCirclePage.getMemberRejectedTab().click()
  ManageCirclePage.getRejectedMembersPhoneNumberHeaderFromTable().should('be.visible')
})

Then('Verify the remove or left member details', function () {
  ManageCirclePage.getMemberRemovedLeftTab().click()
  ManageCirclePage.getRejectedMembersPhoneNumberHeaderFromTable().should('be.visible')
})


//-------------------------------------------------TC_03----------------------------------------------------
And('Verify ManageCirclePage with all details',function(){
  ManageCirclePage.getMembersSearchBox().should('exist')
  ManageCirclePage.getSearchButton().should('exist')
  ManageCirclePage.getResetButton()
})

And('Search the member with valid details', function () {
  cy.readFile(subRegistration).then((data) => {
    var subscriberMobileNumber = data.subscriberMobile
    ManageCirclePage.getMembersSearchBox().type(subscriberMobileNumber)
  })
})

Then('Verify the searched member details', function () {
  ManageCirclePage.getMembersPhoneNumberFromTable().should('be.visible')
  ManageCirclePage.getMemberTypeFromTable().should('be.visible')
})



//-------------------------------------------------TC_04----------------------------------------------------

And('Search the member with invalid details', function () {
  cy.readFile(subRegistration).then((data) => {
    var subscriberMobileNumber = data.subscriberMobile
    ManageCirclePage.getMembersSearchBox().type(subscriberMobileNumber + '56')
  })
})

Then('Verify the error message', function () {
  ManageCirclePage.getNoMembersFoundErrorMessage().should('contain', 'No Data Found')
})

And('Click Manage Circle and search the valid circle Number', function () {
  cy.readFile(subRegistration).then((data) => {
    var subscriberMobileNumber = data.subscriberMobile
    ManageCirclePage.getSearchCircleInputBox().type(subscriberMobileNumber)
  })
  ManageCirclePage.getSearchButton().click()
})

Then('Verify the Circle should be search successfully', function () {
  cy.readFile(subRegistration).then((data) => {
    var subscriberMobileNumber = data.subscriberMobile
    ManageCirclePage.getSearchedMobileNumber().should('contain', subscriberMobileNumber)
  })
})

//-------------------------------------------------TC_02----------------------------------------------------

And('Click Manage Circle and search the invalid circle Number', function () {
  cy.readFile(subRegistration).then((data) => {
    var subscriberMobileNumber = data.subscriberMobile
    ManageCirclePage.getSearchCircleInputBox().type("1234")
  })
    ManageCirclePage.getSearchButton().click()
})

Then('Verify the error exists for no circle found', function () {
  ManageCirclePage.getInvalidMobileNumberErrorMessage().should('contain', 'Enter a valid Mobile Number')
  ManageCirclePage.getSearchResultBlock().should('contain', 'Your search results will appear here')
})

//-------------------------------------------------TC_03----------------------------------------------------

And('Enter the circle Number and click reset', function () {
  cy.readFile(subRegistration).then((data) => {
    var subscriberMobileNumber = data.subscriberMobile
    ManageCirclePage.getSearchCircleInputBox().type(subscriberMobileNumber)
  })
  ManageCirclePage.getResetButton().click()
})

Then('Verify the mobile number inputbox is empty', function () {
  ManageCirclePage.getSearchCircleInputBox().should('contain', '')
})

And('Enter valid details for circle creation', function () {
  const randomName = getRandomName()
  CreateCirclePage.getCircleNameInputbox().type('automationCircle' + randomName)
  CreateCirclePage.getDescriptionInputbox().type('description' + randomName)
  CreateCirclePage.getCurrencyDropdown().click()
  CreateCirclePage.getCurrencyUsDollarDropdownValue().click()
  CreateCirclePage.getSaveNextButton().click()
  cy.waitUntil(() => {
    return CreateCirclePage.getSaveNextButton().should('be.visible')
  })
  CreateCirclePage.getSaveNextButton().click()
})

Then('Verify Circle Created Successfully', function () {
  CreateCirclePage.getAlertValue().should('contain', 'Success')
})


//---------------------------------------------------------

And('Navigate to manage circle page',function(){
  ManageCirclePage.getMobiquityCircle().scrollIntoView()
  ManageCirclePage.getMobiquityCircle().click()
  ManageCirclePage.getManageCircle().scrollIntoView()
  ManageCirclePage.getManageCircle().click()
})

And('Verify Manage circle details',function(){
  ManageCirclePage.getSearchCircleInputBox().should('exist')
  ManageCirclePage.getSearchButton().should('exist')
  ManageCirclePage.getResetButton().should('exist')
})

Then('Verify Active Text in edit page', function () {
  ManageCirclePage.getActiveStatus().should('contain',' Active ')
})

Then('Verify Circle details',function(){
  ManageCirclePage.getViewButton().click()
  ManageCirclePage.getCircleDetails().eq(0).should('contain','Circle Name ')
  ManageCirclePage.getCircleDetails().eq(1).should('contain','Circle Code')
  ManageCirclePage.getCircleDetails().eq(2).should('contain','Description')
  ManageCirclePage.getCircleDetails().eq(3).should('contain','Currency')
  ManageCirclePage.getCircleDetails().eq(4).should('contain','Target Amount')
  ManageCirclePage.getCircleDetails().eq(5).should('contain','Target Date')
  ManageCirclePage.getCircleDetails().eq(6).should('contain','Circle Contribution')
  ManageCirclePage.getCircleDetails().eq(7).should('contain','Created On')
  ManageCirclePage.getCircleDetails().eq(9).should('contain','Wallet Balance')
  ManageCirclePage.getDeleteButton().should('exist')
  ManageCirclePage.getCloseButton().should('exist')
})

Then('Click on Close Button and verify it will navigate to previous page',function(){
  ManageCirclePage.getCloseButton().click()
  ManageCirclePage.getManageCircleHeader().should('be.visible')
})

//------------------Active

And('Verify the active user details',function(){
  ManageCirclePage.getActiveSearch().should('exist')
  ManageCirclePage.getActiveName().should('exist')
  ManageCirclePage.getActiveMobileNumber().should('exist')
  ManageCirclePage.getActiveMemberType().should('exist')
  ManageCirclePage.getActiveTotalDeposited().should('exist')
  ManageCirclePage.getActiveTotalWithdrawn().should('exist')
  ManageCirclePage.getActiveAction().should('exist')
})
Then('Verify the active member list',function(){
  ManageCirclePage.getActiveTable().should('be.visible')
})
And('Add multiple members',function(){
  cy.readFile(subRegistration).then((data)=>{
  let mobile = data.subscriberMobile
  let mobile1 = data.subscriberMobileBankingActivation
  ManageCirclePage.getInviteMembersSearchInputbox().type(mobile)
  ManageCirclePage.getActiveAdd().click()
  ManageCirclePage.getInviteMembersSearchInputbox().clear().type(mobile1)
  ManageCirclePage.getActiveAdd().click()
  })
  ManageCirclePage.getInviteMemberInviteButton().click()
})
Then('Verify invitation cannot be sent to inactive number',function(){
  ManageCirclePage.getInviteMembersSearchInputbox().type(getRandomNumber())
  ManageCirclePage.getActiveAdd().click()
  ManageCirclePage.getNoDataFoundMsg().should('contain','No Data Found')
})
And('Click Invite member and search with Inactive mobile number', function () {
  ManageCirclePage.getCloseIcon().click()
  ManageCirclePage.getInviteMembersButton().should('be.visible').click()
  ManageCirclePage.getInviteMembersSearchInputbox().type(getRandomNumber())
  ManageCirclePage.getActiveAdd().click()
  ManageCirclePage.getNoMembersFoundErrorMessage().should('contain','No Data Found')
})

Then('Verify on action section to view more details',function(){
  ManageCirclePage.getMemberAction().click()
  ManageCirclePage.getAppointedBy().eq(0).should('contain','Appointed By')
  ManageCirclePage.getAppointedBy().eq(1).should('contain','Appointed On')
})

And('Verify filter options',function(){
  ManageCirclePage.getFilter().click()
  ManageCirclePage.getInvitedBy().eq(0).should('contain','Admin')
  ManageCirclePage.getInvitedBy().eq(1).should('contain','Others')
  ManageCirclePage.getStartDate().should('exist')
  ManageCirclePage.getEndDate().should('exist')
  ManageCirclePage.getFilterApplyButton().should('exist')
  ManageCirclePage.getFilterClearButton().should('exist')
})

And('Apply the filters to view invited members',function(){
  ManageCirclePage.getInvitedBy().eq(0).click()
  ManageCirclePage.getCalender().eq(0).type('2023-05-01')
  ManageCirclePage.getCalender().eq(1).type('2023-07-07')
  ManageCirclePage.getFilterApplyButton().click()
})

And('Verify Rejected filter details',function(){
  ManageCirclePage.getFilter().should('exist').click()
  ManageCirclePage.getCalender().eq(0).should('exist').type('2023-05-01')
  ManageCirclePage.getCalender().eq(1).should('exist').type('2023-07-07')
  ManageCirclePage.getFilterApplyButton().should('exist').click()
})

Then('Enter invalid mobile details and verify no results message',function(){
  ManageCirclePage.getActiveSearch().type(getRandomNumber())
  ManageCirclePage.getSearchImage().click()
  ManageCirclePage.getNoDataFoundMsg().should('contain','No Data Found')
})

Then('Verify Rejected table headers',function(){
  ManageCirclePage.getInvtedMemberName().should('contain','Name')
  ManageCirclePage.getRejectedMembersPhoneNumberHeaderFromTable().should('contain',' MOBILE NUMBER ')
  ManageCirclePage.getRejectedRemarks().should('contain',' REMARKS ')
  ManageCirclePage.getRejectedBy().should('contain',' REJECTED BY ')
  ManageCirclePage.getRejectedOn().should('contain',' REJECTED ON ')
})

And('Click on Members Removed or left tab',function(){
  ManageCirclePage.getMemberRemovedLeftTab().click()
})

And('Verify Members Removed or left page',function(){
  ManageCirclePage.getFilter().should('exist')
  ManageCirclePage.getActiveSearch().should('exist')
})

And('Click on filter and click on apply button',function(){
  ManageCirclePage.getFilter().should('exist').click()
  ManageCirclePage.getInvitedBy().eq(0).should('exist').click()
  ManageCirclePage.getInvitedBy().eq(1).should('exist').click()
  ManageCirclePage.getInvitedBy().eq(2).should('exist').click()
  ManageCirclePage.getInvitedBy().eq(3).should('exist').click()
  ManageCirclePage.getCalender().eq(0).should('exist').type('2023-05-01')
  ManageCirclePage.getCalender().eq(1).should('exist').type('2023-07-07')
  ManageCirclePage.getFilterApplyButton().should('exist').click()
})
And('Click on filter and click on clear button',function(){
  ManageCirclePage.getFilter().should('exist').click()
  ManageCirclePage.getInvitedBy().eq(0).should('exist').click()
  ManageCirclePage.getInvitedBy().eq(1).should('exist').click()
  ManageCirclePage.getInvitedBy().eq(2).should('exist').click()
  ManageCirclePage.getInvitedBy().eq(3).should('exist').click()
  ManageCirclePage.getCalender().eq(0).should('exist').type('2023-05-01')
  ManageCirclePage.getCalender().eq(1).should('exist').type('2023-07-07')
  ManageCirclePage.getFilterApplyButton().should('exist').click()

})
And('Verify Removed or left members table headers',function(){
  ManageCirclePage.getInvtedMemberName().should('contain','Name')
  ManageCirclePage.getInvitedMemberMobile().should('contain',' MOBILE NUMBER ')
  ManageCirclePage.getServiceType().should('contain',' SERVICE TYPE ')
  ManageCirclePage.getInvitedMemberStatus().should('contain',' STATUS ')
  ManageCirclePage.getRemovedInitiatedBy().should('contain',' INITIATED BY ')
  ManageCirclePage.getRemovedInitiatedOn().should('contain',' INITIATED ON ')
  ManageCirclePage.getActiveAction().should('contain',' ACTION ')
})
And('Verify the Secreataries details',function(){
  ManageCirclePage.getSecreataries().should('be.visible').click()
  ManageCirclePage.getAddSecreatariesButton().should('exist')
  // ManageCirclePage.getInvtedMemberName().should('contain',"Name")
  ManageCirclePage.getSecreataryMobile().should('contain',' MOBILE NUMBER ')
  ManageCirclePage.getSecreataryAction().should('exist')
})
And('Verify existing chairperson mobile number',function(){
  ManageCirclePage.getRadioButton().click()
  ManageCirclePage.getNextButton().click()
  cy.readFile(subRegistration).then((data)=>{
  let mobile = data.subscriberMobileBankingActivation
  ManageCirclePage.getInitiatedMemberMobileNumber().type(mobile)
  })
  cy.intercept('/mobiquitypay/v2/otp/generate').as('getOTP')
  ManageCirclePage.getChangeButton().click()
  if(Cypress.env('otpVerification').includes("Yes"))
  {
  cy.ChairpersonOTP(Cypress.env('apiBaseURL'), Cypress.env('port'))
  }
  else
  {
  cy.log("No OTP verification required")
  }  
})
And('Verify new chairperson mobile number',function(){
  cy.intercept('/mobiquitypay/v2/otp/generate').as('getOTP')
  if(Cypress.env('otpVerification').includes("Yes"))
  {
  cy.ChairpersonOTP(Cypress.env('apiBaseURL'), Cypress.env('port'))
  }
  else
  {
  cy.log("No OTP verification required")
  } 
  ManageCirclePage.getChangeSucessMessage().should('contain','Chairperson Changed Successfully')
})
And('Add secreataries and verify success message',function(){
  ManageCirclePage.getSecreataries().should('be.visible').click()
  ManageCirclePage.getAddSecreatariesButton().click()
  ManageCirclePage.getSecreatariesCheckbox().click()
  ManageCirclePage.getSecreataryAddButton().click()
  ManageCirclePage.getChangeSucessMessage().should('contain','secratary added successfully')
})
And('Verify Manage officials section',function(){
  ManageCirclePage
})
And('',function(){
  
})
And('',function(){
  
})

//------------------------------------

And('Click on delete circle button',function(){
  ManageCirclePage.getViewButton().click()
  ManageCirclePage.getDeleteButton().click()
})

Then('click on No button and verify previous page',function(){
  ManageCirclePage.getDeleteNoButton().click()
  ManageCirclePage.getCircleNameInCircleDetailsHeader().should('be.visible')
})