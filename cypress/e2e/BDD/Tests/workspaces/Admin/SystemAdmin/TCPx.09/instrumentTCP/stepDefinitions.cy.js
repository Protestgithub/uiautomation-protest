import { And, Then, When } from "@badeball/cypress-cucumber-preprocessor";
import 'cypress-iframe';
import homePage from "../../../../../../../../support/pageObjects/homePage";
import loginPage from "../../../../../../../../support/pageObjects/loginPage"
//import TransferControlProfile from '.././../../../../../../../../support/pageObjects/TransferControlProfile';
//import TransferControlProf from '../../../../../../../../support/pageObjects/TransferControlProfileNew'
import TransferControlProfileNew from '../../../../../../../../support/pageObjects/TransferControlProfileNew';
//import ".././../../../../../../../../support/Utils/generic";
import ".././../../../../../../../support/Utils/generic"
import myActivity from "../../../../../../../../support/pageObjects/MyActivity/myActivity";
//import ".././../../../../../../../../support/Utils/TransferControlProfileCommand";
var filename = 'cypress/fixtures/userData/TCPx.09.json'
//import approvals from '../../../../../../../../../support/pageObjects/UserManagement/approvals';
import approvals from '../../../../../../../../support/pageObjects/UserManagement/approvals'

//---------Object declaration-----
const pageLogin = new loginPage()
const welcomePage = new homePage()
const tcpPage = new TransferControlProfileNew()
const myActivityPage = new myActivity()
const approvalPage = new approvals()

//changes added on 26/07

var name

function getRandomName() {
    name = "";
    var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    for (var i = 0; i < 5; i++)
      name += possible.charAt(Math.floor(Math.random() * possible.length));
    return name;
  }
  function getRandomName2() {
    name = "";
    var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    for (var i = 0; i < 25; i++)
      name += possible.charAt(Math.floor(Math.random() * possible.length));
    return name;
  }

  //newly added
  function getRandomName3() {
    name = "";
    var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    for (var i = 0; i < 101; i++)
      name += possible.charAt(Math.floor(Math.random() * possible.length));
    return name;
  }

  

//-----------------
//createTCP-step1
When('Navigate to Transfer Control Profile x.09', function () {
    welcomePage.getUserManagementOption().scrollIntoView()
    ///mobiquitypay/v1/tcp/instrument*
    
    cy.intercept('/mobiquitypay/v1/tcp/instrument*').as('instTCP')
    welcomePage.getTCP().click({ force: true })
     cy.wait('@instTCP',{timeout:30000})
    
})

//createTCP-step2
And('Click on Add Profile Button of tcp x.09', function () {
    tcpPage.addProfile().click()
})


//createTCP-step3
Then('Enter TCP Details', function () {
    
    //profile name
    tcpPage.getProfileName().eq(0).type(getRandomName(), { force: true })

    //description
    cy.intercept('/mobiquitypay/v1/tcp/unique/profile-name*').as('profileTCP')
    tcpPage.getDescription().click()
    cy.wait('@profileTCP',{timeout:20000})
    tcpPage.getDescription().type("zyxwDescription")

    //tcpPage.getCurrency().select(" IndianRupee - ₹ ")

    tcpPage.getCurrency().click({ force: true })
    tcpPage.getINR().click({ force: true })

    
    tcpPage.getDomain().click({ force: true })
    cy.intercept('mobiquitypay/v1/categories/domains/*').as('tcpDomain')
    //05/09/23
    //tcpPage.getDropDownOptions().contains(Cypress.env('domainName')).click({ force: true });
    tcpPage.getDropDownOptions().eq(0).click({ force: true })
    tcpPage
        .getDropDownOptions()
        .contains(this.data07.CumulativeTransferControlProfile.setDomain)
        .click({ force: true });
    //tcpPage.getDropDownOptions().select('Customer')
    cy.wait('@tcpDomain',{timeout:5000})

    tcpPage.getCategory().click({ force: true })
    ///mobiquitypay/v1/grades/categories/
    cy.intercept('/mobiquitypay/v1/grades/categories/*').as('tcpCategory')
     //tcpPage.getDropDownOptions().contains(Cypress.env('categoryName')).click({ force: true });
     tcpPage.getDropDownOptions().contains(this.data07.TransferControlProfile.Category).click({ force: true });
    //tcpPage.getDropDownOptions().eq(0).click({ force: true })
    cy.wait('@tcpCategory',{timeout:5000})
    
    tcpPage.getGrade().click({ force: true })
    tcpPage.getDropDownOptions().eq(0).click({ force: true })
    // No intercept in Grade and wallet
    cy.wait(1000)
    tcpPage.getPaymentInstument().click({ force: true })
    
    //cy.intercept('/mobiquitypay/v1/tcp/instrument/bankorwallet/*').as('tcpPaymentInstrument')
    tcpPage.getDropDownOptions().eq(0).click({ force: true })
    //cy.wait('@tcpPaymentInstrument',{timeout:10000})
    cy.wait(1000)
    tcpPage.getWalletType().click({ force: true })
    tcpPage.getDropDownOptions().eq(1).click({ force: true })

    cy.intercept('mobiquitypay/v1/tcp/instrument/servicetypes*').as('serviceType')
    tcpPage.getNext().eq(0).should('be.visible').click({ force: true })
    cy.wait('@serviceType',{timeout:20000})
})

 //createTCP-step4
 And('Set Debit Limits', function () {
  //tcpPage.scrollIntoView()
  cy.wait(5000)
  tcpPage.getNext1().eq(0).click()
  cy.wait(5000)
})

//createTCP-step5
And('Set Credit Limits', function () {
  //tcpPage.scrollIntoView()
  tcpPage.getNext1().eq(1).click()
  cy.wait(5000)
})

//createTCP-step6
And('Enter User details', function () {
   
  tcpPage.getUserDetailsField().eq(2).type(this.data07.TransferControlProfile.UserMinBal, { force: true })
  cy.wait(1000)
  tcpPage.getUserDetailsField().eq(3).type(this.data07.TransferControlProfile.UserMaxBal, { force: true })
  cy.wait(1000)
  tcpPage.getUserDetailsField().eq(4).type(this.data07.TransferControlProfile.MinTranAmount, { force: true })
  cy.wait(1000)
  tcpPage.getUserDetailsField().eq(5).type(this.data07.TransferControlProfile.MaxTranAmount, { force: true })
  cy.wait(1000)
  tcpPage.getUserDetailsField().eq(6).type(this.data07.TransferControlProfile.MaxPerAllowed, { force: true })
  tcpPage.getNext().eq(3).click()
  //no scope of intercept, putting static wait
  cy.wait(5000)

})

//createTCP-step7
/*
And('Save TCP Profile name', function () {
  tcpPage.getProfileNameUserDetails().then((val) => {
    val=val.text()
    cy.log(val)
    cy.readFile(filename).then((data) => {
      data.ProfileName = val
      cy.writeFile(filename, data)
    })
  })
})
*/
And('Save TCP Profile name and tcp details', function () {
  tcpPage.getProfileNameUserDetails().eq(0).invoke('text').then((val) => {
    val= val.trim()
    cy.log(val)
    cy.readFile(filename).then((data) => {
      data.ProfileName = val

      cy.writeFile(filename, data)
    })
  })
  //description
  tcpPage.getProfileNameUserDetails().eq(1).invoke('text').then((val) => {
    val= val.trim()
    cy.log(val)
    cy.readFile(filename).then((data) => {
      data.Description = val

      cy.writeFile(filename, data)
    })
  })

  //currency
  tcpPage.getProfileNameUserDetails().eq(2).invoke('text').then((val) => {
    val= val.trim()
    cy.log(val)
    cy.readFile(filename).then((data) => {
      data.currency = val

      cy.writeFile(filename, data)
    })
  })

  //Domain
  tcpPage.getProfileNameUserDetails().eq(3).invoke('text').then((val) => {
    val= val.trim()
    cy.log(val)
    cy.readFile(filename).then((data) => {
      data.domain = val

      cy.writeFile(filename, data)
    })
  })

  //category
  tcpPage.getProfileNameUserDetails().eq(4).invoke('text').then((val) => {
    val= val.trim()
    cy.log(val)
    cy.readFile(filename).then((data) => {
      data.category = val

      cy.writeFile(filename, data)
    })
  })

  //grade
  tcpPage.getProfileNameUserDetails().eq(5).invoke('text').then((val) => {
    val= val.trim()
    cy.log(val)
    cy.readFile(filename).then((data) => {
      data.grade = val

      cy.writeFile(filename, data)
    })
  })

  //payment instrument
  tcpPage.getProfileNameUserDetails().eq(6).invoke('text').then((val) => {
    val= val.trim()
    cy.log(val)
    cy.readFile(filename).then((data) => {
      data.paymentInstrument = val

      cy.writeFile(filename, data)
    })
  })

  //wallet type
  tcpPage.getProfileNameUserDetails().eq(7).invoke('text').then((val) => {
    val= val.trim()
    cy.log(val)
    cy.readFile(filename).then((data) => {
      data.walletType = val

      cy.writeFile(filename, data)
    })
  })

})


//createTCP-step8
And('Confirm the Instrument TCP details', function () {
  tcpPage.getNext().eq(4).click()
  /*
  tcpPage.getSuccessMessage().contains("  Successfully initiated and sent for approval ")
  tcpPage.getDone().click()
  */

  //check visiblity of Tcp details,debit limits, credit limits and User details
  //added on 07/07/23
  tcpPage.getSectionInReviewConfirmPage().eq(0).should('be.visible')
  cy.log("TCP Details visible" )
  tcpPage.getSectionInReviewConfirmPage().eq(1).should('be.visible')
  cy.log("Debit Limits visile")
  tcpPage.getSectionInReviewConfirmPage().eq(2).should('be.visible')
  cy.log("Credit Limits visible")
  tcpPage.getSectionInReviewConfirmPage().eq(3).should('be.visible')
  cy.log("User details visible")
  cy.waitUntil(() => {
    return cy.iframe().find('.text-center').should('be.visible')
  })
  tcpPage.getSuccessMessage().should('contain', "Successfully")
  //added on 07/07/23
  tcpPage.getDone().should('be.visible')
  cy.log("Done is visible")
  tcpPage.getDone().click()
})

//createTCP-step9
And('Navigate to My Activity and Apply submitted', function () {
  welcomePage.getMyActivity().click()
  cy.wait(3000)
  myActivityPage.getFilter().click({ force: true })
  //myActivityPage.getAddUser().click({ force: true })
  myActivityPage.getSubmittedStatus().click()
  myActivityPage.getApply().click()
  cy.wait(3000)
})

//createTCP-step10
And('Write Created on time for Instrument TCP', function () 
{
  //go inside the record
  //tcpPage.getFirstRecord().click({ force: true })
  myActivityPage.getExpandFirstRecord().click({ force: true })
  myActivityPage.getViewDetails().click({ force: true })

  var profNameMyActivity

  myActivityPage.getProfileName().invoke('val').then((val) => {
    cy.log(val)
    cy.readFile(filename).then((data) => {
      data.ProfileNameMyActivity = val
      cy.writeFile(filename, data)
    })
    profNameMyActivity = val //storing profile name Of MyActivity in this variable
  })
   
   var profNameTcp //storing profile name during creation in this variable

   cy.readFile(filename).then((data) => {
    profNameTcp = data.ProfileName
    cy.writeFile(filename, data)
  })


 if(profNameMyActivity == profNameTcp) //if both instrument profile name are same only then store the created time in fixture
 {
  myActivityPage.getCreatedOnTime2().eq(0).invoke('text').then((time) => {
    time = time.trim()
    cy.log(time)
    cy.readFile(filename).then((data) => {
      data.CreatedOnTime = time
      cy.writeFile(filename, data)
    })
  })
}
//comment

})

//-----------added on 29/06---------------
And('Enter value 0 in minimum balance, maximum balance, minimum transaction amount and maximum transaction amount', function () {
  tcpPage.getUserDetailsField().eq(2).type("0", { force: true })
  cy.wait(1000)
  tcpPage.getUserDetailsField().eq(3).type("0", { force: true })
  cy.wait(1000)

  //tcpPage.getMinimumBalance().type("0")
  //tcpPage.getMaximumBalance().type("0")
  // BulkOperationPage.getAssertSubmit().contains('successfully')
  tcpPage.getUserDetailsField().eq(4).type("0", { force: true })
  cy.wait(1000)
  tcpPage.getUserDetailsField().eq(5).type("0", { force: true })
  cy.wait(1000)
  tcpPage.getUserDetailsField().eq(2).click()
  tcpPage.getInlineError().eq(0).contains('(1-9999999999)')
  tcpPage.getInlineError().eq(1).contains('(1-9999999999)')
  tcpPage.getInlineError().eq(2).contains('(1-9999999999)')
  tcpPage.getInlineError().eq(3).contains('(1-9999999999)')
})

And('Enter value less than 1 and value greater than 100 in Percentage transfer allowed', function () {
  tcpPage.getUserDetailsField().eq(2).type(this.data07.TransferControlProfile.UserMinBal, { force: true })
  cy.wait(1000)
  tcpPage.getUserDetailsField().eq(3).type(this.data07.TransferControlProfile.UserMaxBal, { force: true })
  cy.wait(1000)
  tcpPage.getUserDetailsField().eq(4).type(this.data07.TransferControlProfile.MinTranAmount, { force: true })
  cy.wait(1000)
  tcpPage.getUserDetailsField().eq(5).type(this.data07.TransferControlProfile.MaxTranAmount, { force: true })
  cy.wait(1000)

  
  tcpPage.getUserDetailsField().eq(6).type("0", { force: true })
  tcpPage.getUserDetailsField().eq(2).click()
  tcpPage.getInlineError().eq(0).contains('(1-100)')

  tcpPage.getUserDetailsField().eq(6).clear()
  tcpPage.getUserDetailsField().eq(6).type("200", { force: true })
  tcpPage.getUserDetailsField().eq(2).click()
  tcpPage.getInlineError().eq(0).contains('(1-100)')

  tcpPage.getUserDetailsField().eq(6).clear()
  tcpPage.getUserDetailsField().eq(6).type("100", { force: true })
  //tcpPage.getUserDetailsField().eq(2).click()
  //tcpPage.getInlineError().eq(0).contains('(1-99)')

})

And('Enter decimal values in minimum balance, maximum balance,minimum transaction and maximum transaction', function () {
  tcpPage.getUserDetailsField().eq(2).type(this.data07.TransferControlProfile.UserMinBalDecimal, { force: true })
  cy.wait(1000)
  tcpPage.getUserDetailsField().eq(3).type(this.data07.TransferControlProfile.UserMaxBalDecimal, { force: true })
  cy.wait(1000)
  tcpPage.getUserDetailsField().eq(4).type(this.data07.TransferControlProfile.MinTranAmountDecimal, { force: true })
  cy.wait(1000)
  tcpPage.getUserDetailsField().eq(5).type(this.data07.TransferControlProfile.MaxTranAmountDecimal, { force: true })
  cy.wait(1000)
  tcpPage.getUserDetailsField().eq(6).type(this.data07.TransferControlProfile.MaxPerAllowed, { force: true })
  tcpPage.getNext().eq(3).click()
})


And('set instrument daily debit limit', function () {
  //fill count of all services
  //forEach loop in cypress
  tcpPage.getCountFieldDaily().each(($el)=>{
      cy.wrap($el).type("2")
  })

  tcpPage.getAmountFieldDaily().each(($el)=>{
      cy.wrap($el).type("10")
  })
})

And('set instrument weekly debit limit', function () {
//fill count of all services
//forEach loop in cypress
tcpPage.getCountFieldWeekly().each(($el)=>{
    cy.wrap($el).type("12")
})

tcpPage.getAmountFieldWeekly().each(($el)=>{
    cy.wrap($el).type("60")
})
})

And('set instrument monthly debit limit', function () {
//fill count of all services
//forEach loop in cypress
tcpPage.getCountFieldMonthly().each(($el)=>{
    cy.wrap($el).type("61")
})

tcpPage.getAmountFieldMonthly().each(($el)=>{
    cy.wrap($el).type("300")
})
})

//added on 16/08/23 for yearly_tcp
And('set instrument yearly debit limit', function () {
  //fill count of all services
  //forEach loop in cypress
  tcpPage.getCountFieldYearly().each(($el)=>{
      cy.wrap($el).type("300")
  })
  
  tcpPage.getAmountFieldYearly().each(($el)=>{
      cy.wrap($el).type("1200")
  })
  })


And('set per transaction amount of debit limit', function () {
//fill count of all services
//forEach loop in cypress
tcpPage.getPerTransactionAmount().each(($el)=>{
    cy.wrap($el).type("5")
})
tcpPage.getNext2().eq(1).click()
cy.wait(5000)
})


//--------------------------Credit Overall Table----------------------------------------------------
//credit overall table

And('set instrument daily credit limit', function () {
  //fill count of all services
  //forEach loop in cypress
  var i=10;
  for( i=12; i<24; i++)
  {
   el = tcpPage.getCountFieldDaily().eq(i).each(($el)=>{
    cy.wrap($el).type("2")
 })
}

var j=10;
  for( j=12; j<24; j++)
  {
   el = tcpPage.getAmountFieldDaily().eq(j).each(($el)=>{
    cy.wrap($el).type("10")
 })
}

})

And('set instrument weekly credit limit', function () {
  //fill count of all services
  //forEach loop in cypress
  //getCountFieldWeekly()
  var i=10;
  for( i=12; i<24; i++)
  {
   el = tcpPage.getCountFieldWeekly().eq(i).each(($el)=>{
    cy.wrap($el).type("12")
 })
}

var j=10;
  for( j=12; j<24; j++)
  {
   el = tcpPage.getAmountFieldWeekly().eq(j).each(($el)=>{
    cy.wrap($el).type("60")
 })
}

})


And('set instrument monthly credit limit', function () {
  //fill count of all services
  //forEach loop in cypress
  
  var i=10;
  for( i=12; i<24; i++)
  {
   el = tcpPage.getCountFieldMonthly().eq(i).each(($el)=>{
    cy.wrap($el).type("61")
 })
}

var j=10;
  for( j=12; j<24; j++)
  {
   el = tcpPage.getAmountFieldMonthly().eq(j).each(($el)=>{
    cy.wrap($el).type("300")
 })
}

})

And('set instrument yearly credit limit', function () {
  //fill count of all services
  //forEach loop in cypress
  
  var i=10;
  for( i=12; i<24; i++)
  {
   el = tcpPage.getCountFieldYearly().eq(i).each(($el)=>{
    cy.wrap($el).type("350")
 })
}

var j=10;
  for( j=12; j<24; j++)
  {
   el = tcpPage.getAmountFieldYearly().eq(j).each(($el)=>{
    cy.wrap($el).type("3000")
 })
}

})

And('set per transaction amount of credit limit', function () {
  //fill count of all services
  //forEach loop in cypress
  
  var i=10;
  for( i=12; i<24; i++)
  {
   el = tcpPage.getPerTransactionAmount().eq(i).each(($el)=>{
    cy.wrap($el).type("5")
 })
}

cy.wait(3000)
tcpPage.getNext2().eq(1).click({force: true})
  cy.wait(5000)

})


//Check S.No, Profile Name, Domain Category, Currency, Instument type, Grade and Action
And('Check S.No, Profile Name, Domain Category, Currency, Instument type, Grade and Action', function () {
    
  tcpPage.getBasicInfo().eq(0).should('be.visible')
  tcpPage.getBasicInfo().eq(1).should('be.visible')
  tcpPage.getBasicInfo().eq(2).should('be.visible')
  tcpPage.getBasicInfo().eq(3).should('be.visible')
  tcpPage.getBasicInfo().eq(4).should('be.visible')
  tcpPage.getGradeAndAction().eq(0).should('be.visible')
  tcpPage.getGradeAndAction().eq(1).should('be.visible')
})

And('Click on action buttons', function () {
  //click visiblity of eyeicon, click on eye icon, go back
  tcpPage.getActionButtons().eq(0).should('be.visible')
  tcpPage.getActionButtons().eq(0).click({ force: true })
  tcpPage.getTCP().click({ force: true })
  //click visiblity of pen, click on edit icon, go back
  tcpPage.getActionButtons().eq(1).should('be.visible')
  tcpPage.getActionButtons().eq(1).click({ force: true })
  tcpPage.getTCP1().click({ force: true })
  //click visiblity of delete, click on eye icon, go back
  tcpPage.getActionButtons().eq(2).should('be.visible')
  tcpPage.getActionButtons().eq(2).click({ force: true })
  cy.wait(5000)
  tcpPage.getNo().click({ force: true })

})

//changed the name of function and added wait
And('Click on filter tcpx.09', function () {
  
  cy.wait(3000)
  tcpPage.getFilter().should('be.visible')
  tcpPage.getFilter().click({ force: true })
  cy.wait(2000)
  welcomePage.getTCP().click() 

})

Then('Check Apply button', function () {
  //added this wait because filter dialog box is not loading
  cy.wait(3000)
  tcpPage.getFilter().click({ force: true })
  cy.wait(5000)
  //select domain and currency and apply
  //domain
  tcpPage.getCheckBox().eq(3).click({ force: true })
  //currency
  tcpPage.getCheckBox().eq(17).click({ force: true })
  tcpPage.getApply().click({ force: true })
})

And('Check Clear button', function () {
  //added wait on 10/07/23
  cy.wait(2000)
  tcpPage.getFilter().click({ force: true })
  cy.wait(2000)
  //select domain and currency and apply
  //domain
  tcpPage.getCheckBox().eq(3).click({ force: true })
  //tcpPage.getCheckBox().eq(3).should('be.checked')
  tcpPage.getCheckBox().eq(4).click({ force: true })
  tcpPage.getCheckBox().eq(5).click({ force: true })
  //currency
  tcpPage.getCheckBox().eq(17).click({ force: true })
  cy.wait(2000)
  //-----------------clicking on clear
  tcpPage.getClear().click({ force: true })
  cy.wait(2000)

  //--------------checking if they are un-checked
  //domain
  tcpPage.getCheckBox().eq(3).should('not.be.checked')
  tcpPage.getCheckBox().eq(4).should('not.be.checked')
  tcpPage.getCheckBox().eq(5).should('not.be.checked')
  //currency
  tcpPage.getCheckBox().eq(17).should('not.be.checked')
  
})

And('Check Cross icon', function () {
  tcpPage.getFilter().click({ force: true })
  cy.wait(2000)
  //select domain and currency and apply
  //domain
  tcpPage.getCheckBox().eq(3).click({ force: true })
  tcpPage.getCheckBox().eq(4).click({ force: true })
  tcpPage.getCheckBox().eq(5).click({ force: true })
  //currency
  tcpPage.getCheckBox().eq(17).click({ force: true })
  cy.wait(2000)
  tcpPage.getCross().click({ force: true })
  
})

//delete tcp
And('Enter profile name of instrument TCP', function () {
  tcpPage.getSearchByProfile().click({ force: true })
  cy.wait(5000)
  cy.readFile(filename).then((data) => {
    var profileName1
    profileName1 = data.ProfileName

    tcpPage.getSearchByProfile().type(profileName1, { force: true })
  })
  tcpPage.getSearchButton().click({ force: true })
  cy.wait(1000)
})

And('Click on delete icon to delete TCP', function () {
  tcpPage.getDelete().click({ force: true })
  tcpPage.getYes().click({ force: true })
  //tcpPage.getSuccessMessage1().should('contain', "Successfully")
})

//[class="lbl-noRecords"]
And('Check no record should be present', function () {
  
  tcpPage.getNoRecordFound().should('be.visible')
  
})


//----------------------view TCP details----------------

And('verify tcp details', function () {
  
  tcpPage.getEyeIcon().click({ force: true })
  cy.wait(5000)
  //match the data from fixture file
  // "View details and verify tcp details"
  
})

And('Click on view details, and check whether TCP details are present', function () {
  
  //click visiblity of eyeicon, click on eye icon
  tcpPage.getActionButtons().eq(0).should('be.visible')
  tcpPage.getActionButtons().eq(0).click({ force: true })
  //profile name 
  tcpPage.getTCPdetailsUserDetails().eq(0).should('be.visible')
  //Description
  tcpPage.getTCPdetailsUserDetails().eq(1).should('be.visible')
  //Currency
  tcpPage.getTCPdetailsUserDetails().eq(2).should('be.visible')
  //domain
  tcpPage.getTCPdetailsUserDetails().eq(3).should('be.visible')
  //Category
  tcpPage.getTCPdetailsUserDetails().eq(4).should('be.visible')
  //grade
  tcpPage.getTCPdetailsUserDetails().eq(5).should('be.visible')
  //payment instrument
  tcpPage.getTCPdetailsUserDetails().eq(6).should('be.visible')
  //wallet type
  tcpPage.getTCPdetailsUserDetails().eq(7).should('be.visible')

  //check Daily, weekly, monthly and yearly
  tcpPage.getLabels().eq(0).contains('DAILY')
  tcpPage.getLabels().eq(1).contains('Count')
  tcpPage.getLabels().eq(2).contains('Amount')
  tcpPage.getLabels().eq(3).contains('WEEKLY')
  tcpPage.getLabels().eq(4).contains('Count')
  tcpPage.getLabels().eq(5).contains('Amount')
  tcpPage.getLabels().eq(6).contains('MONTHLY')
  tcpPage.getLabels().eq(7).contains('Count')
  tcpPage.getLabels().eq(8).contains('Amount')
  tcpPage.getLabels().eq(9).contains('YEARLY')
  tcpPage.getLabels().eq(10).contains('Count')
  tcpPage.getLabels().eq(11).contains('Amount')

})

//Click on view details, and check whether User details are present
And('Click on view details, and check whether User details are present', function () {
  //click visiblity of eyeicon, click on eye icon
  tcpPage.getActionButtons().eq(0).should('be.visible')
  tcpPage.getActionButtons().eq(0).click({ force: true })

  //user's minimum balance
  tcpPage.getTCPdetailsUserDetails().eq(8).should('be.visible')
  tcpPage.getProfileNameUserDetails().eq(8).invoke('text').then((text)=>{
    text = text.trim()
    cy.log(text)
  })
  tcpPage.getProfileNameUserDetails().eq(8).contains(this.data07.TransferControlProfile.UserMinBal)

  //user's maximum balance
  tcpPage.getTCPdetailsUserDetails().eq(9).should('be.visible')
  tcpPage.getProfileNameUserDetails().eq(9).contains(this.data07.TransferControlProfile.UserMaxBal)
  //minimum transaction amt
  tcpPage.getTCPdetailsUserDetails().eq(10).should('be.visible')
  tcpPage.getProfileNameUserDetails().eq(10).contains(this.data07.TransferControlProfile.MinTranAmount)
  //maximum transaction amt
  tcpPage.getTCPdetailsUserDetails().eq(11).should('be.visible')
  tcpPage.getProfileNameUserDetails().eq(11).contains(this.data07.TransferControlProfile.MaxTranAmount)
  //max percentage
  tcpPage.getTCPdetailsUserDetails().eq(12).should('be.visible')
  tcpPage.getProfileNameUserDetails().eq(12).contains(this.data07.TransferControlProfile.MaxPerAllowed)
})

And('set instrument daily, weekly, monthly debit limit in amount', function () {

  //daily amount
  tcpPage.getAmountFieldDaily().each(($el)=>{
    cy.wrap($el).type("10.1111")
})
  cy.wait(3000)
// open any one service
//tcpPage.getServiceCashInOtherPOS().click({force: true})
//filling up amount field, clearing count field and checking if we are getting an error
//clearing count field
//change value of Daily count of one of the services

tcpPage.getCountCol().eq(0).clear()
cy.wait(3000)
tcpPage.getInlineErrorCount().eq(1).contains('(1-9999999999)')

tcpPage.getCountCol().eq(1).clear()
cy.wait(3000)
tcpPage.getInlineErrorCount().eq(1).contains('(1-9999999999)')


})


And('set instrument daily, weekly, monthly debit limit in count', function () {
  //daily
  tcpPage.getCountFieldDaily().each(($el)=>{
    cy.wrap($el).type("2")
})
//weekly
tcpPage.getCountFieldWeekly().each(($el)=>{
  cy.wrap($el).type("14")
})
//monthly
tcpPage.getCountFieldMonthly().each(($el)=>{
  cy.wrap($el).type("60")
})
//yearly
tcpPage.getCountFieldYearly().each(($el)=>{
  cy.wrap($el).type("300")
})



cy.wait(3000)
// getCountCol().eq(1)
//filling up count field, clearing amount field and checking if we are getting an error
//clearing amount field
tcpPage.getCountCol().eq(1).clear()
cy.wait(3000)
tcpPage.getInlineErrorCount().eq(1).contains('(1-9999999999)')

tcpPage.getCountCol().eq(3).clear()
cy.wait(3000)
tcpPage.getInlineErrorCount().eq(4).contains('(1-9999999999)')

tcpPage.getCountCol().eq(4).clear()
cy.wait(3000)
tcpPage.getInlineErrorCount().eq(4).contains('(1-9999999999)')
/*
tcpPage.getCountCol().eq(7).clear()
cy.wait(3000)
tcpPage.getInlineErrorCount().eq(7).contains('(1-9999999999)')
*/
})



//------------------Modify---------------------



And('Click on edit icon of TCP', function () {
  //click visiblity of pen, click on edit icon, go back
  tcpPage.getActionButtons().eq(1).should('be.visible')
  tcpPage.getActionButtons().eq(1).click({ force: true })

})

var Tcpname;
Tcpname = getRandomName()
var descriptionName;
descriptionName = getRandomName()
And('Modify the profile name and description of TCP', function () 
{
  tcpPage.getProfileName().eq(0).click().type(Tcpname, { force: true });
  cy.wait(3000)
  //tcpPage.getDescription().click().type(descriptionName, { force: true });
  tcpPage.getDescription().click().clear()
  cy.wait(2000)
  tcpPage.getCurrencyDis().should("have.attr", "aria-disabled").and("eq", "true");
  cy.log("Currency disabled")
  tcpPage.getDomainDis().should("have.attr", "aria-disabled").and("eq", "true");
  cy.log("Domain Disabled")
  tcpPage.getCategoryDis().should("have.attr", "aria-disabled").and("eq", "true");
  cy.log("Category Disabled")
  tcpPage.getGradeDis().should("have.attr", "aria-disabled").and("eq", "true");
  cy.log("Grade Disabled")
  tcpPage.getPaymentInstumentDis().should("have.attr", "aria-disabled").and("eq", "true");
  cy.log("Payment Instrument Disabled")
  tcpPage.getWalletTypeDis().should("have.attr", "aria-disabled").and("eq", "true");
  cy.log("Wallet type disabled")
  //changed on 11/07
  tcpPage.getNext2().eq(0).click()
  cy.wait(5000)

})

And('Navigate to confirmation page', function () {
  //changed on 11/07
  /*
  tcpPage.getNext2().eq(0).click()
  cy.wait(5000)
  */
  tcpPage.getNext1().eq(0).click()
  cy.wait(5000)

  tcpPage.getNext1().eq(1).click()
  cy.wait(5000)

  //no scope of intercept, putting static wait
  tcpPage.getNext1().eq(2).click({ force: true })
  cy.wait(5000)
})



And('Navigate to Set debit limits and modify daily, weekly, monthly and per transaction for ALL channel', function () {
  tcpPage.getNext2().eq(0).click()
  cy.wait(5000)
  //EDIT 'ALL'
  tcpPage.getCountFieldDaily().eq(1).click()
  tcpPage.getCountFieldDaily().eq(1).type("2")
  tcpPage.getAmountFieldDaily().eq(1).click()
  tcpPage.getAmountFieldDaily().eq(1).type("10")

  
  tcpPage.getCountFieldWeekly().eq(1).clear()
  tcpPage.getCountFieldWeekly().eq(1).type("15")
  tcpPage.getAmountFieldWeekly().eq(1).clear()
  tcpPage.getAmountFieldWeekly().eq(1).type("60")

  tcpPage.getCountFieldMonthly().eq(1).clear()
  tcpPage.getCountFieldMonthly().eq(1).type("61")
  tcpPage.getAmountFieldMonthly().eq(1).clear()
  tcpPage.getAmountFieldMonthly().eq(1).type("300")

  tcpPage.getPerTransactionAmount().eq(1).clear()
  tcpPage.getPerTransactionAmount().eq(1).type("5")

  tcpPage.getNext2().eq(1).click()
  cy.wait(5000)

  
  //no scope of intercept, putting static wait
  tcpPage.getNext1().eq(1).click({ force: true })
  cy.wait(5000)
})

//Navigate to Set credit limits and modify daily, weekly, monthly and per transaction for ALL channel
Then('Navigate to Set credit limits and modify daily, weekly, monthly and per transaction for ALL channel', function () {
  /*
  tcpPage.getNext2().eq(0).click()
  cy.wait(5000)

  tcpPage.getNext1().eq(0).click()
  cy.wait(5000)
  */
  //EDIT 'ALL'
  tcpPage.getCountFieldDaily().eq(11).click()
  tcpPage.getCountFieldDaily().eq(11).type("2")
  tcpPage.getAmountFieldDaily().eq(11).click()
  tcpPage.getAmountFieldDaily().eq(11).type("10")

  
  tcpPage.getCountFieldWeekly().eq(11).clear()
  tcpPage.getCountFieldWeekly().eq(11).type("15")
  tcpPage.getAmountFieldWeekly().eq(11).clear()
  tcpPage.getAmountFieldWeekly().eq(11).type("60")

  tcpPage.getCountFieldMonthly().eq(11).clear()
  tcpPage.getCountFieldMonthly().eq(11).type("61")
  tcpPage.getAmountFieldMonthly().eq(11).clear()
  tcpPage.getAmountFieldMonthly().eq(11).type("300")

  tcpPage.getPerTransactionAmount().eq(11).clear()
  tcpPage.getPerTransactionAmount().eq(11).type("5")

  tcpPage.getNext2().eq(2).click()
  cy.wait(5000)

  tcpPage.getNext1().eq(0).click()

})


And('Navigate to User details page and Edit them', function () {
  tcpPage.getNext2().eq(0).click()
  cy.wait(5000)
  tcpPage.getNext1().eq(0).click()
  cy.wait(5000)

  tcpPage.getNext1().eq(1).click()
  cy.wait(5000)

  tcpPage.getUserDetailsField().eq(2).clear().type(this.data07.TransferControlProfile.UserMinBal, { force: true })
  cy.wait(1000)
  tcpPage.getUserDetailsField().eq(3).clear().type(this.data07.TransferControlProfile.UserMaxBal, { force: true })
  cy.wait(1000)
  tcpPage.getUserDetailsField().eq(4).clear().type(this.data07.TransferControlProfile.MinTranAmount, { force: true })
  cy.wait(1000)
  tcpPage.getUserDetailsField().eq(5).clear().type(this.data07.TransferControlProfile.MaxTranAmount, { force: true })
  cy.wait(1000)
  tcpPage.getUserDetailsField().eq(6).clear().type(this.data07.TransferControlProfile.MaxPerAllowed, { force: true })
  tcpPage.getNext().eq(3).click()
  //no scope of intercept, putting static wait
  cy.wait(5000)
  
})

And('Reject the Users for modification', function () {
  approvalPage.getRejectButton().click({ force: true })
  //cy.intercept('/mobiquitypay/serviceRequest/resume/any').as('getApproveRequest')
  approvalPage.getApproveRequest().click({ force: true })
  //cy.wait('@getApproveRequest')
  approvalPage.getRejectComment().type(getRandomName())
  approvalPage.getRejectRequest().click()
  cy.wait(2000)
  approvalPage.getApproveConfirmationMessage().contains("Transaction has been rejected successfully and routed back to initiator")
})


//------------------------Pending functions TO-DO---------------------

//And Enter profile name of length 21 characters
//Then Check the length of string in profile name field

And('Enter profile name of length 21 characters', function () {
  var name = getRandomName2()
  cy.log(name.length)
  //profile name
  tcpPage.getProfileName().eq(0).type(name, { force: true })
  //description
  cy.intercept('/mobiquitypay/v1/tcp/unique/profile-name*').as('profileTCP')
  tcpPage.getDescription().click()
  cy.wait('@profileTCP',{timeout:20000})
  tcpPage.getDescription().type("zyxwDescription")

  //tcpPage.getCurrency().select(" IndianRupee - ₹ ")

  tcpPage.getCurrency().click({ force: true })
  tcpPage.getINR().click({ force: true })

  tcpPage.getDomain().click({ force: true })
  cy.intercept('mobiquitypay/v1/categories/domains/*').as('tcpDomain')
  tcpPage.getDropDownOptions().eq(0).click({ force: true })
  cy.wait('@tcpDomain',{timeout:5000})

  tcpPage.getCategory().click({ force: true })
  ///mobiquitypay/v1/grades/categories/
  cy.intercept('/mobiquitypay/v1/grades/categories/*').as('tcpCategory')
  tcpPage.getDropDownOptions().eq(0).click({ force: true })
  cy.wait('@tcpCategory',{timeout:5000})
  
  tcpPage.getGrade().click({ force: true })
  tcpPage.getDropDownOptions().eq(2).click({ force: true })
  // No intercept in Grade and wallet
  cy.wait(1000)
  tcpPage.getPaymentInstument().click({ force: true })
  
  //cy.intercept('/mobiquitypay/v1/tcp/instrument/bankorwallet/*').as('tcpPaymentInstrument')
  tcpPage.getDropDownOptions().eq(0).click({ force: true })
  //cy.wait('@tcpPaymentInstrument',{timeout:10000})
  cy.wait(1000)
  tcpPage.getWalletType().click({ force: true })
  tcpPage.getDropDownOptions().eq(1).click({ force: true })

  cy.intercept('mobiquitypay/v1/tcp/instrument/servicetypes*').as('serviceType')
  tcpPage.getNext().eq(0).should('be.visible').click({ force: true })
  cy.wait('@serviceType',{timeout:10000})

})

Then('check the length of profile name', function () {
  tcpPage.getProfileNameUserDetails().eq(0).invoke('text').then((val) => {
    val= val.trim()
    cy.log("Length of profile name :"+val.length)
    cy.wait(5000)
    // need to add assertion
  })
})

//And Enter description of length 101 characters
//Then check the length of description
//getRandomName3()
And('Enter description of length 101 characters', function () {
  //profile name
  tcpPage.getProfileName().eq(0).type(getRandomName(), { force: true })

  //description
  var description = getRandomName3();
  cy.log(description.length)
  cy.intercept('/mobiquitypay/v1/tcp/unique/profile-name*').as('profileTCP')
  tcpPage.getDescription().click()
  cy.wait('@profileTCP',{timeout:20000})
  tcpPage.getDescription().type(description, { force: true })

  //tcpPage.getCurrency().select(" IndianRupee - ₹ ")

  tcpPage.getCurrency().click({ force: true })
  tcpPage.getINR().click({ force: true })

  tcpPage.getDomain().click({ force: true })
  cy.intercept('mobiquitypay/v1/categories/domains/*').as('tcpDomain')
  tcpPage.getDropDownOptions().eq(3).click({ force: true })
  cy.wait('@tcpDomain',{timeout:5000})

  tcpPage.getCategory().click({ force: true })
  ///mobiquitypay/v1/grades/categories/
  cy.intercept('/mobiquitypay/v1/grades/categories/*').as('tcpCategory')
  tcpPage.getDropDownOptions().eq(0).click({ force: true })
  cy.wait('@tcpCategory',{timeout:5000})
  
  tcpPage.getGrade().click({ force: true })
  tcpPage.getDropDownOptions().eq(0).click({ force: true })
  // No intercept in Grade and wallet
  cy.wait(1000)
  tcpPage.getPaymentInstument().click({ force: true })
  
  //cy.intercept('/mobiquitypay/v1/tcp/instrument/bankorwallet/*').as('tcpPaymentInstrument')
  tcpPage.getDropDownOptions().eq(0).click({ force: true })
  //cy.wait('@tcpPaymentInstrument',{timeout:10000})
  cy.wait(1000)
  tcpPage.getWalletType().click({ force: true })
  tcpPage.getDropDownOptions().eq(1).click({ force: true })

  cy.intercept('mobiquitypay/v1/tcp/instrument/servicetypes*').as('serviceType')
  tcpPage.getNext().eq(0).should('be.visible').click({ force: true })
  cy.wait('@serviceType',{timeout:10000})


})

Then('check the length of description', function () {  
//description
  tcpPage.getProfileNameUserDetails().eq(1).invoke('text').then((val) => {
    val= val.trim()
    cy.log(val)
    cy.log("Length of Description :"+val.length)
    cy.wait(5000)
    // need to add assertion
  })
})

//select instrument type as BANK-testing
And('select instrument type as BANK-testing', function () {  
  cy.wait(3000)
  tcpPage.getFilter().should('be.visible')
  tcpPage.getFilter().click({ force: true })
  cy.wait(2000)
  tcpPage.getBankTestingCheckbox().click({ force: true })
  tcpPage.getApply().click({ force: true })
  cy.wait(5000)

  })





  //----------------

  And('set instrument daily debit limit with amount in negative', function () {
    //fill count of all services
    //forEach loop in cypress
    tcpPage.getCountFieldDaily().each(($el)=>{
        cy.wrap($el).type("2")
    })
  
    tcpPage.getAmountFieldDaily().each(($el)=>{
        cy.wrap($el).type("-10")
    })
  })
  
  And('set instrument weekly debit limit with amount in negative', function () {
  //fill count of all services
  //forEach loop in cypress
  tcpPage.getCountFieldWeekly().each(($el)=>{
      cy.wrap($el).type("12")
  })
  
  tcpPage.getAmountFieldWeekly().each(($el)=>{
      cy.wrap($el).type("-60")
  })
  })
  
  And('set instrument monthly debit limit with amount in negative', function () {
  //fill count of all services
  //forEach loop in cypress
  tcpPage.getCountFieldMonthly().each(($el)=>{
      cy.wrap($el).type("61")
  })
  
  tcpPage.getAmountFieldMonthly().each(($el)=>{
      cy.wrap($el).type("-300")
  })
  })

And('set per transaction amount of debit limit with amount in negative', function () {
  //fill count of all services
  //forEach loop in cypress
  tcpPage.getPerTransactionAmount().each(($el)=>{
      cy.wrap($el).type("-5")
  })
  //tcpPage.getNext2().eq(1).click()
  cy.wait(5000)
  })
  
  

//Check the amount fields of daily, weekly and monthly

Then('Check the amount fields of daily, weekly and monthly', function () {
    //checking what is the value in daily amount field of the overall table
    //we are entering a value in amount field (example : -10, @10). The field doesn't accept '-' or special character.
    // after entering the value, we are fetching the entered value and asserting. If the value in amount was -2 or @2 it will fail

    tcpPage.getValue().eq(1).invoke('val').then((value)=>{
      const value1 =parseInt(value)
      cy.log("Daily amount value : "+value1)
     // cy.wrap(value1).should('be.greaterThan','0')
      expect(value1).be.greaterThan(0)
      //
      
    })

    //checking what is the value in weekly amount field of the overall table
    tcpPage.getValue().eq(3).invoke('val').then((value)=>{
      const value1 =parseInt(value)
      cy.log("Weekly amount value : "+value1)
     // cy.wrap(value1).should('be.greaterThan','0')
      expect(value1).be.greaterThan(0)

    })
     
    //checking what is the value in monthly amount field of the overall table
    tcpPage.getValue().eq(5).invoke('val').then((value)=>{
      const value1 =parseInt(value)
      cy.log("Monthly amount value : "+value1)
     // cy.wrap(value1).should('be.greaterThan','0')
      expect(value1).be.greaterThan(0)

    })

    //checking what is the value in per transaction amount field of the overall table
    tcpPage.getValue().eq(6).invoke('val').then((val) => {
      //val= val.trim()
      cy.log("The value in per transaction amount field is :")
      cy.log(val)
      //add assertion

      cy.wait(3000)

    })
    })
//-------------------------

//-------------------------

And('set instrument daily debit limit with count in negative', function () {
  //fill count of all services
  //forEach loop in cypress
  //we are entering a value in count field (example : -10, @10). The field doesn't accept '-' or special character.
  // after entering the value, we are fetching the entered value and asserting. If the value in amount was -2 or @2 it will fail
  cy.wait(2000)
  tcpPage.getCountFieldDaily().each(($el)=>{
      cy.wrap($el).type("-2")
  })

  tcpPage.getAmountFieldDaily().each(($el)=>{
      cy.wrap($el).type("10")
  })
})

And('set instrument weekly debit limit with count in negative', function () {
//fill count of all services
//forEach loop in cypress
tcpPage.getCountFieldWeekly().each(($el)=>{
    cy.wrap($el).type("-12")
})

tcpPage.getAmountFieldWeekly().each(($el)=>{
    cy.wrap($el).type("60")
})
})

And('set instrument monthly debit limit with count in negative', function () {
//fill count of all services
//forEach loop in cypress
tcpPage.getCountFieldMonthly().each(($el)=>{
    cy.wrap($el).type("-61")
})

tcpPage.getAmountFieldMonthly().each(($el)=>{
    cy.wrap($el).type("300")
})

 //setting per transaction amount also in this step
   tcpPage.getPerTransactionAmount().each(($el)=>{
     cy.wrap($el).type("5")
    })

})
//added on 18/08/23 yearly_tcp

And('set instrument yearly debit limit with count in negative', function () {
  //fill count of all services
  //forEach loop in cypress
  tcpPage.getCountFieldYearly().each(($el)=>{
    cy.wrap($el).type("-300")
})
  
  tcpPage.getAmountFieldYearly().each(($el)=>{
      cy.wrap($el).type("300")
  })
  /*
   //setting per transaction amount also in this step
     tcpPage.getPerTransactionAmount().each(($el)=>{
       cy.wrap($el).type("5")
      })
  */
  })


//Check the count fields of daily, weekly and monthly

Then('Check the count fields of daily, weekly, monthly and yearly', function () {

  tcpPage.getValue().eq(0).invoke('val').then((value)=>{
    const value1 =parseInt(value)
    cy.log(value1)
   // cy.wrap(value1).should('be.greaterThan','0')
    expect(value1).be.greaterThan(0)
  })


  //checking what is the value in weekly count field of the overall table
  tcpPage.getValue().eq(2).invoke('val').then((value)=>{
    const value1 =parseInt(value)
    cy.log(value1)
   // cy.wrap(value1).should('be.greaterThan','0')
    expect(value1).be.greaterThan(0)
  })
   
  //checking what is the value in monthly count field of the overall table
  tcpPage.getValue().eq(4).invoke('val').then((value)=>{
    const value1 =parseInt(value)
    cy.log(value1)
   // cy.wrap(value1).should('be.greaterThan','0')
    expect(value1).be.greaterThan(0)
  })
  //checking what is the value in yearly count field of the overall table
  tcpPage.getValue().eq(6).invoke('val').then((value)=>{
    const value1 =parseInt(value)
    cy.log(value1)
   // cy.wrap(value1).should('be.greaterThan','0')
    expect(value1).be.greaterThan(0)
  })
})

//----------------------------

//-------------------------

And('set instrument daily debit limit with count in decimal value', function () {
  //fill count of all services
  //forEach loop in cypress
  tcpPage.getCountFieldDaily().each(($el)=>{
      cy.wrap($el).type("2.55")
  })

  tcpPage.getAmountFieldDaily().each(($el)=>{
      cy.wrap($el).type("10")
  })
})

And('set instrument weekly debit limit with count in decimal value', function () {
//fill count of all services
//forEach loop in cypress
tcpPage.getCountFieldWeekly().each(($el)=>{
    cy.wrap($el).type("12.55")
})

tcpPage.getAmountFieldWeekly().each(($el)=>{
    cy.wrap($el).type("60")
})
})

And('set instrument monthly debit limit with count in decimal value', function () {
//fill count of all services
//forEach loop in cypress
tcpPage.getCountFieldMonthly().each(($el)=>{
    cy.wrap($el).type("61.55")
})

tcpPage.getAmountFieldMonthly().each(($el)=>{
    cy.wrap($el).type("300")
})

 //setting per transaction amount also in this step
   tcpPage.getPerTransactionAmount().each(($el)=>{
     cy.wrap($el).type("5")
    })

})

//added on 17/08/23 yearly_tcp
And('set instrument yearly debit limit with count in decimal value', function () {
  //fill count of all services
  //forEach loop in cypress
  tcpPage.getCountFieldYearly().each(($el)=>{
      cy.wrap($el).type("90.55")
  })
  
  tcpPage.getAmountFieldYearly().each(($el)=>{
      cy.wrap($el).type("3000")
  })
  
   
  
  })

//Check the count fields of daily, weekly and monthly is Not a decimal value

Then('Check the count fields of daily, weekly, monthly and yearly is not a decimal number', function () {

  //we are entering a value in count field (example : 2.00,10.00). The field doesn't accept '.' (decimal)
  // after entering the value, we are fetching the entered value and asserting. If the value in amount was 200 or 1000 it will pass which means the decimal was not there

  tcpPage.getValue().eq(0).invoke('val').then((value)=>{
    const value1 =parseInt(value)
    cy.log(value1)
   // cy.wrap(value1).should('be.greaterThan','0')
    expect(value1).be.greaterThan(100)
  })

  //checking what is the value in weekly count field of the overall table
  tcpPage.getValue().eq(2).invoke('val').then((value)=>{
    const value1 =parseInt(value)
    cy.log(value1)
   // cy.wrap(value1).should('be.greaterThan','0')
    expect(value1).be.greaterThan(100)
  })
   
  //checking what is the value in monthly count field of the overall table
  tcpPage.getValue().eq(4).invoke('val').then((value)=>{
    const value1 =parseInt(value)
    cy.log(value1)
   // cy.wrap(value1).should('be.greaterThan','0')
    expect(value1).be.greaterThan(100)
  })
//checking what is the value in monthly count field of the overall table
tcpPage.getValue().eq(6).invoke('val').then((value)=>{
  const value1 =parseInt(value)
  cy.log(value1)
 // cy.wrap(value1).should('be.greaterThan','0')
  expect(value1).be.greaterThan(1000)
})

  })

//-------------------------

//------------------------- 
And('set instrument daily debit limit with count having special character', function () {
  //fill count of all services
  //forEach loop in cypress
  cy.wait(2000)
  tcpPage.getCountFieldDaily().each(($el)=>{
      cy.wrap($el).type("@2")
  })

  tcpPage.getAmountFieldDaily().each(($el)=>{
      cy.wrap($el).type("10")
  })
})

And('set instrument weekly debit limit with count having special character', function () {
//fill count of all services
//forEach loop in cypress
tcpPage.getCountFieldWeekly().each(($el)=>{
    cy.wrap($el).type("@12")
})

tcpPage.getAmountFieldWeekly().each(($el)=>{
    cy.wrap($el).type("60")
})
})

And('set instrument monthly debit limit with count having special character', function () {
//fill count of all services
//forEach loop in cypress
tcpPage.getCountFieldMonthly().each(($el)=>{
    cy.wrap($el).type("@61")
})

tcpPage.getAmountFieldMonthly().each(($el)=>{
    cy.wrap($el).type("300")
})

 //setting per transaction amount also in this step
   tcpPage.getPerTransactionAmount().each(($el)=>{
     cy.wrap($el).type("5")
    })

})


And('set instrument daily debit limit with amount having special character', function () {
  //fill count of all services
  //forEach loop in cypress
  tcpPage.getCountFieldDaily().each(($el)=>{
      cy.wrap($el).type("2")
  })

  tcpPage.getAmountFieldDaily().each(($el)=>{
      cy.wrap($el).type("@10")
  })
})

And('set instrument weekly debit limit with amount having special character', function () {
//fill count of all services
//forEach loop in cypress
tcpPage.getCountFieldWeekly().each(($el)=>{
    cy.wrap($el).type("12")
})

tcpPage.getAmountFieldWeekly().each(($el)=>{
    cy.wrap($el).type("@60")
})
})

And('set instrument monthly debit limit with amount having special character', function () {
//fill count of all services
//forEach loop in cypress
tcpPage.getCountFieldMonthly().each(($el)=>{
    cy.wrap($el).type("61")
})

tcpPage.getAmountFieldMonthly().each(($el)=>{
    cy.wrap($el).type("@300")
})
})

And('set per transaction amount of debit limit with amount having special character', function () {
//fill count of all services
//forEach loop in cypress
tcpPage.getPerTransactionAmount().each(($el)=>{
    cy.wrap($el).type("@5")
})
//tcpPage.getNext2().eq(1).click()
cy.wait(5000)
})


//---------------------------added on 10/07/23----------

And('Clear limit values of channel row of any service', function () {

  //Cash in Other POS
  //Clearing the default values of 'ALL' channel
  tcpPage.getFieldDebit().eq(0).clear()
  //tcpPage.getFieldDebit().eq(1).clear()
  //tcpPage.getFieldDebit().eq(3).clear()
  //tcpPage.getFieldDebit().eq(3).clear()
  //tcpPage.getFieldDebit().eq(4).clear()
  //tcpPage.getFieldDebit().eq(5).clear()
  //tcpPage.getFieldDebit().eq(6).clear()
  //daily count and amount
  tcpPage.getInlineErrorCount().eq(1).contains('(1-9999999999)')
  /*
  tcpPage.getInlineErrorCount().eq(3).contains('(1-9999999999)')
  //weekly count and amount
  tcpPage.getInlineErrorCount().eq(5).contains('(1-9999999999)')
  tcpPage.getInlineErrorCount().eq(7).contains('(1-9999999999)')
  //monthly count and amount
  tcpPage.getInlineErrorCount().eq(9).contains('(1-9999999999)')
  tcpPage.getInlineErrorCount().eq(11).contains('(1-9999999999)')

  //per transaction
  tcpPage.getInlineErrorCount().eq(13).contains('(1-9999999999)')
 */
  })
  
  //Then check whether debit limit next button is disabled
  Then('Check whether debit limit next button is disabled', function () {
    cy.wait(3000)
      tcpPage.getNext3().should('be.disabled')
      cy.log("The next button is disabled")
  })


  //------Latest added
  Then('Enter an existing tcp name in the Profile Name Field', function () {
    tcpPage.getProfileName().eq(0).clear()
    cy.readFile(filename).then((data) => {
      var profileName1
      profileName1 = data.ProfileName
  
      tcpPage.getProfileName().eq(0).type(profileName1, { force: true })
    })
    tcpPage.getDescription().click()
    //check for inline error
    tcpPage.getUniqueProfileInlineError().contains('Profile name already exists')
    cy.wait(2000)

  })

  Then('Enter TCP Details2', function () {
    
    //profile name
    tcpPage.getProfileName().eq(0).type(getRandomName(), { force: true })

    //description
    cy.intercept('/mobiquitypay/v1/tcp/unique/profile-name*').as('profileTCP')
    tcpPage.getDescription().click()
    cy.wait('@profileTCP',{timeout:20000})
    tcpPage.getDescription().type("zyxwDescription")

    //tcpPage.getCurrency().select(" IndianRupee - ₹ ")

    tcpPage.getCurrency().click({ force: true })
    tcpPage.getINR().click({ force: true })

    tcpPage.getDomain().click({ force: true })
    cy.intercept('mobiquitypay/v1/categories/domains/*').as('tcpDomain')
    tcpPage.getDropDownOptions().eq(3).click({ force: true })
    cy.wait('@tcpDomain',{timeout:5000})

    tcpPage.getCategory().click({ force: true })
    ///mobiquitypay/v1/grades/categories/
    cy.intercept('/mobiquitypay/v1/grades/categories/*').as('tcpCategory')
    tcpPage.getDropDownOptions().eq(0).click({ force: true })
    cy.wait('@tcpCategory',{timeout:5000})
    
    tcpPage.getGrade().click({ force: true })
    tcpPage.getDropDownOptions().eq(0).click({ force: true })
    // No intercept in Grade and wallet
    cy.wait(1000)
    tcpPage.getPaymentInstument().click({ force: true })
    
    //cy.intercept('/mobiquitypay/v1/tcp/instrument/bankorwallet/*').as('tcpPaymentInstrument')
    tcpPage.getDropDownOptions().eq(0).click({ force: true })
    //cy.wait('@tcpPaymentInstrument',{timeout:10000})
    cy.wait(1000)
    tcpPage.getWalletType().click({ force: true })
    tcpPage.getDropDownOptions().eq(1).click({ force: true })

    cy.intercept('mobiquitypay/v1/tcp/instrument/servicetypes*').as('serviceType')
    tcpPage.getNext().eq(0).should('be.visible').click({ force: true })
    cy.wait('@serviceType',{timeout:10000})
})


And('Save TCP Profile name to use it later in modification', function () {
  tcpPage.getProfileNameUserDetails().eq(0).invoke('text').then((val) => {
    val= val.trim()
    cy.log(val)
    cy.readFile(filename).then((data) => {
      data.ProfileName2 = val

      cy.writeFile(filename, data)
    })
  })
  
})

Then('Enter an another tcp name in the Profile Name Field to be modified', function () {
  /* ProfileName2 is name of another tcp that we created to check profile name is unique scenario */
  tcpPage.getProfileName().eq(0).clear()
  cy.readFile(filename).then((data) => {
    var profileName1
    profileName1 = data.ProfileName2

    tcpPage.getProfileName().eq(0).type(profileName1, { force: true })
  })
  tcpPage.getDescription().click()
  //check for inline error
  tcpPage.getUniqueProfileInlineError().contains('Profile name already exists')
  cy.wait(2000)

})

And('set instrument daily, weekly, monthly debit limit in count exceeding upper limit', function () {
  //daily
  tcpPage.getCountFieldDaily().each(($el)=>{
    cy.wrap($el).type("9999999999999")
})

cy.wait(3000)

tcpPage.getInlineErrorCount().eq(0).contains('(1-9999999999)')
cy.wait(3000)

})

And('set instrument daily, weekly, monthly debit limit in amount exceeding upper limit', function () {

  tcpPage.getFieldDebit().eq(5).type('9999999999999')
  tcpPage.getInlineErrorCount().eq(0).contains('(1-9999999999)')
  //checked inline error for individual service
  cy.wait(3000)
 
  //fill count of all services
  //forEach loop in cypress
 
  tcpPage.getCountFieldMonthly().each(($el)=>{
    cy.wrap($el).type("61")
})

tcpPage.getAmountFieldMonthly().each(($el)=>{
    cy.wrap($el).type("999999999999")
})

//tcpPage.getInlineErrorCount().eq(1).contains('(1-9999999999)') //checking for inline error in overall table

})

And('Check the first service of Debit Limits', function () {
  //check visiblity of Debit Limits
   
  //visiblity of Daily, count, amount
  tcpPage.getLabels().eq(0).contains('DAILY')
  tcpPage.getLabels().eq(1).contains('Count')
  tcpPage.getLabels().eq(2).contains('Amount')
  //visiblity of weekly, count, amount
  tcpPage.getLabels().eq(3).contains('WEEKLY')
  tcpPage.getLabels().eq(4).contains('Count')
  tcpPage.getLabels().eq(5).contains('Amount')

  //visblity of monthly, count, amount
  tcpPage.getLabels().eq(6).contains('MONTHLY')
  tcpPage.getLabels().eq(7).contains('Count')
  tcpPage.getLabels().eq(8).contains('Amount')

  //visblity of yearly, count, amount
  tcpPage.getLabels().eq(9).contains('YEARLY')
  tcpPage.getLabels().eq(10).contains('Count')
  tcpPage.getLabels().eq(11).contains('Amount')

  //visiblity of per transaction and amount
  tcpPage.getLabels().eq(12).contains('PER TRANSACTION')
  tcpPage.getLabels().eq(13).contains('Amount')

})
