/// <reference types="Cypress" />
/// <reference types = "Cypress-iframe"/>

//----------------Imports---------------------------------------------------------------------
import {
  And,
  Before,
  Given,
  Then,
  When,
} from "@badeball/cypress-cucumber-preprocessor";
import "cypress-iframe";
import homePage from "../../../../../../../../support/pageObjects/homePage";
import loginPage from "../../../../../../../../support/pageObjects/loginPage";
import securityQuestion from "../../../../../../../../support/pageObjects/SecurityQuestion/securityQuestion";
import approvals from "../../../../../../../../support/pageObjects/UserManagement/approvals";
import register from "../../../../../../../../support/pageObjects/UserManagement/register";
import "../../../../../../../../support/Utils/generic";
import "../../../../../../../../support/Utils/registration";
//import "../../../../../../../support/Utils/securityCommands";
//----------------Object Declaration----------------------------------------------------------
const pageLogin = new loginPage();
const welcomePage = new homePage();
const registerPage = new register();
const approvalPage = new approvals();
const securityQuestionPage = new securityQuestion();
const digit = Cypress.env("mobileDigit") - 2;
function mobile_Numeric() {
  var text = "";
  var possible = "0123456789";
  for (var i = 0; i < 8; i++)
    text += possible.charAt(Math.floor(Math.random() * possible.length));
  return text;
}
const uuid = () => Cypress._.random(1e8);
mobile = "77" + mobile_Numeric();
let Sysfilelogin = "cypress/fixtures/userData/SystemAdminLogin.json";
var SubProfileName = "cypress/fixtures/profileData/Profile.json";
var mobile, name;
//----------------------------------------------------------------------------------------
function getRandomName() {
  name = "";
  var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
  for (var i = 0; i < 5; i++)
    name += possible.charAt(Math.floor(Math.random() * possible.length));
  return name;
}

function getRandomName1() {
  name = "12";
  var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
  for (var i = 0; i < 7; i++)
    name += possible.charAt(Math.floor(Math.random() * possible.length));
  return name;
}

//----------------BDD Hooks-----------------------------------------------------------------
Before(() => {
  cy.fixture("login").then(function (data1) {
    this.data1 = data1;
  });
  cy.fixture("UserManagement").then(function (data2) {
    this.data2 = data2;
  });
  cy.fixture("SecurityProfile").then(function (data6) {
    this.data6 = data6;
  });
  cy.fixture("userData/SystemAdminLogin").then(function (data3) {
    this.data3 = data3;
  });
  cy.fixture("TransferControlProfile").then(function (data5) {
    this.data5 = data5;
  });
  cy.fixture("authorizationProfile").then(function (data7) {
    this.data7 = data7;
  });
  cy.fixture("BankManagement").then(function (data03) {
    this.data03 = data03;
  });
  cy.fixture("Domain&CategoryManagement").then(function (data4) {
    this.data4 = data4;
  });
  cy.fixture("userData/Regulatory&MarketingProfile").then(function (data8) {
    this.data8 = data8;
  });
  cy.fixture("TransferRules").then(function (data13) {
    this.data13 = data13;
  });
  cy.fixture("OperatorToChannel").then(function (data15) {
    this.data15 = data15;
  });
  cy.fixture("AmbOrderTransaction").then(function (data16) {
    this.data16 = data16;
  });

  cy.fixture("userData/subscriberReg").then(function (data06) {
    this.data06 = data06;
  });
  cy.fixture("userData/BusinessUsersData").then(function (data006) {
    this.data006 = data006;
  });
  cy.fixture("bulkdata.json").then(function (data009) {
    this.data009 = data009;
  });

  cy.fixture("userData/O2CBulkData.json").then(function (data007) {
    this.data007 = data007;
  });

  cy.fixture("userData/churnSubscriberReg").then(function (data008) {
    this.data008 = data008;
  });
  cy.fixture("ChurnManagement").then(function (data003) {
    this.data003 = data003;
  });

  cy.fixture("CommisionDisbursment").then(function (data9) {
    this.data9 = data9;
  });

  cy.fixture("erm").then(function (data11) {
    this.data11 = data11;
  });

  cy.fixture("TransactionCorrection").then(function (data10) {
    this.data10 = data10;
  });
  cy.fixture("PricingEngine").then(function (data05) {
    this.data05 = data05;
  });
  cy.fixture("securitys").then(function (data14) {
    this.data14 = data14;
  });
  cy.fixture("SecurityAssertion").then(function (data12) {
    this.data12 = data12;
  });
  cy.fixture("StockManagement").then(function (data17) {
    this.data17 = data17;
  });
  cy.fixture("transferedToUnregistered").then(function (data18) {
    this.data18 = data18;
  });
  cy.fixture("OrderDetailsCreation").then(function (data19) {
    this.data19 = data19;
  });
  cy.fixture("API/APIEndPoints").then(function (data20) {
    this.data20 = data20;
  });
  cy.fixture("TransferControlProfile").then(function (data25) {
    this.data25 = data25;
  });
  cy.fixture("Reconcilation").then(function (data54) {
    this.data54 = data54;
  });
  cy.fixture("IdenticalTransaction").then(function (data1111) {
    this.data1111 = data1111;
  });
  cy.fixture("ServiceChargeDetails").then(function (data28) {
    this.data28 = data28;
  });
  cy.fixture("userData/Aservice").then(function (data005) {
    this.data005 = data005;
  });
  cy.fixture("TransactionCorrection").then(function (data21) {
    this.data21 = data21;
  });
  cy.fixture("userData/Bank&Walletdata").then(function (data45) {
    this.data45 = data45;
  });
  //------------------------static data Bulk---------
  cy.fixture("BulkOperationData").then(function (data90) {
    this.data90 = data90;
  });
  cy.fixture("TransferControlProfileX.09").then(function (data07) {
    this.data07 = data07;
  });
});
//--------------------------- Login -------------------------------------------------
Given("Create Folder", function () {
  cy.FolderCreation();
});
//superadminm
Given("Login into Mobiquity Portal as Super admin Maker", function () {
  cy.launchURL(Cypress.env("Adminurl"));
  cy.wait(1000);
  cy.loginService(
    this.data1.masteradminmaker.superadminm,
    this.data1.masteradminmaker.superadminmPwd
  );
});

When("Navigate to User Management and click on register", function () {
  welcomePage.getUserManagementOption().scrollIntoView();
  welcomePage.getUserManagementOption().click();
  welcomePage.getRegisterOption().click();
});

And("Click On System Admin and select Single User", function () {
  registerPage.getUserRole().contains('System Admin').click({ force: true });
  registerPage.getRegistrationMode().eq(0).click({ force: true });
});

// And('Enter all Maker required Fields for Maker', function () {

//   registerPage.getAllBasicFormTextFields().clear().each(($el) => {
//     cy.wrap($el).type(getRandomName() + "Test")
//     //check the valid values
//   })
//   registerPage.getCountry().select(this.data2.personalInfo.country, { force: true })
//   registerPage.getAllBasicFormDropDown().each(($el) => {
//     cy.wrap($el).select(1)
//   })
//   registerPage.getMobileNumber().clear().type(mobile, { force: true })
//   cy.getEmailID()

// })

And("Save LoginID", function () {
  registerPage
    .getMobileNumber()
    .invoke("val")
    .then((val) => {
      cy.log(val);
      cy.readFile(Sysfilelogin).then((data) => {
        data.MobileNumber = val;
        cy.writeFile(Sysfilelogin, data);
      });
    });
  registerPage
    .getLoginID()
    .invoke("val")
    .then((val) => {
      cy.log(val);
      cy.readFile(Sysfilelogin).then((data) => {
        data.LoginId = val;
        cy.writeFile(Sysfilelogin, data);
      });
    });
});

And("Enter all Profile Details", function () {
  registerPage.getNextButtonBasic().click({ force: true });
  //if (Cypress.env('app').includes('Core')) {
  registerPage
    .getSecurityProfile()
    .select("adminSecurityProfile", { force: true });
  registerPage
    .getAuthProfile()
    .select(this.data2.personalInfo.authProfile2, { force: true });
  //}
  //else {
  //registerPage.getAllProfileFormDropDown().each(($el) => {
  //cy.wrap($el).select(1)
  //})

  //}

  registerPage.getNextButtonProfile().click({ force: true });
  registerPage.getSubmitButton().click({ force: true });
});

Then("Confirmation message displayed", function () {
  cy.waitUntil(() => {
    return cy.iframe().find(".text-center").should("be.visible");
  });
  registerPage.getConfirmationText().should("contain", "success");
  registerPage.getDoneButton().click();
});

Then("Confirmation message displayed1", function () {
  registerPage.getConfirmButton().click({ force: true });
  registerPage.getConfirmationText().should("contain", "success");
  registerPage.getDoneButton().click();
});

//superadminc
Given("Login into Mobiquity Portal as Super admin Checker", function () {
  cy.launchURL(Cypress.env("Adminurl"));
  cy.loginService(
    this.data1.masteradminchecker.superadminc,
    this.data1.masteradminchecker.superadmincPwd
  );
});

When(
  "Navigate to Checker Approvals and filter by Submitted status",
  function () {
    cy.getApprovalsModule();
    //------------------------------------Filter the data--------------------------------------------------
    pageLogin.getiFrame();
    cy.wait(1000)
    approvalPage.getFilter().click({ force: true });
    cy.wait(1000)
    // approvalPage.getAddUserCheckBox().click({ force: true })
    approvalPage.getSubmittedCheckBox().click({ force: true });
    approvalPage.getApplyFilter().click({ force: true });
  }
);

And("Approve the Users", function () {
  cy.waitUntil(() => {
    return cy
      .iframe()
      .find('button[id="approve-expanded-record"]')
      .click({ force: true });
  });
  cy.intercept("/mobiquitypay/serviceRequest/resume/any").as(
    "getApprovalRequest"
  );
  cy.waitUntil(() => {
    return cy
      .iframe()
      .find(
        ".mat-dialog-actions > button.mat-focus-indicator.btn-rounded.button-primary"
      )
      .click({ force: true });
  });
  cy.wait("@getApprovalRequest");
});

Then("User status is approved", function () {
  cy.waitUntil(() => {
    return cy
      .iframe()
      .find(".mat-simple-snackbar.ng-star-inserted > span")
      .should("be.visible");
  });
  // approvalPage.getApproveConfirmationMessage().contains(this.data2.confirmationMessage.addUser)
});

Given(
  "Login into Mobiquity Portal as System admin Created by Master",
  function () {
    cy.launchURL(Cypress.env("Adminurl"));
    cy.readFile(Sysfilelogin).then((data) => {
      cy.login(data.LoginId, this.data1.DefaultPassword);
      cy.login1(this.data1.BAPassword);
      cy.Passwordchange(this.data1.UserCreationSuccessMessage);
      pageLogin.getloginbtn1().eq(0).click();
      cy.wait(2000);
      cy.login(data.LoginId, this.data1.BAPassword);
      if (Cypress.env("version").includes("x.7")) {
        //------------------SecurityQuestion&Answer------------------------
        securityQuestionPage.getQuestion().select(1, { force: true });
        securityQuestionPage.getQuestion1().select(3, { force: true });
        let a1 = getRandomName1();
        securityQuestionPage
          .getAnswer()
          .clear({ force: true })
          .type(a1, { force: true })
          .invoke("val")
          .then((val) => {
            cy.log(val);
            cy.readFile(Sysfilelogin).then((data) => {
              data.MakerSecurityAns1 = val;
              cy.writeFile(Sysfilelogin, data);
            });
          });
        let a2 = getRandomName1();
        securityQuestionPage
          .getAnswer1()
          .clear({ force: true })
          .type(a2, { force: true })
          .invoke("val")
          .then((val) => {
            cy.log(val);
            cy.readFile(Sysfilelogin).then((data) => {
              data.MakerSecurityAns2 = val;
              cy.writeFile(Sysfilelogin, data);
            });
          });
        securityQuestionPage.getSave().click({ force: true });
        securityQuestionPage.getDoneButton1().click({ force: true });
        data.ChangePassword = this.data1.BAPassword;
        cy.writeFile(Sysfilelogin, data);
      } else {
        data.ChangePassword = this.data1.BAPassword;
        cy.writeFile(Sysfilelogin, data);
      }
    });
  }
);

Given(
  "x.4 Login into Mobiquity Portal as System admin Created by Master",
  function () {
    cy.launchURL(Cypress.env("Adminurl"));
    cy.readFile(Sysfilelogin).then((data) => {
      cy.login(data.LoginId, this.data1.DefaultPassword);
      cy.login1(this.data1.BAPassword);
      cy.Passwordchange(this.data1.UserCreationSuccessMessage);
      pageLogin.getloginbtn1().eq(0).click();
      cy.login(data.LoginId, this.data1.BAPassword);
      data.ChangePassword = this.data1.BAPassword;
      cy.writeFile(Sysfilelogin, data);
    });
  }
);

When(
  "x.4 Navigate to Checker Approvals and filter by Submitted status",
  function () {
    cy.get("html").then(($ele) => {
      cy.log($ele);
      if ($ele.find('[data-testid*="APPROVALS"]').length > 0) {
        cy.get('[data-testid*="APPROVALS"]').click();
      } else {
        cy.waitUntil(() => {
          return cy.get('[data-testid*="APPROVALS"]').click();
        });
      }
    });

    cy.get("html").then(($ele) => {
      cy.log($ele);
      if ($ele.find('[data-testid*="APPROVALS"]').length > 0) {
        cy.get('[data-testid*="APPROVALS"]').click();
      } else {
        cy.waitUntil(() => {
          return cy.iframe().find("h4.text-secondary").should("be.visible");
        });
      }
    });
    approvalPage.getFilter().click({ force: true });
    approvalPage.getAddUserCheckBox().click({ force: true });
    approvalPage.getApplyFilter().click({ force: true });
  }
);

And("Enter all Maker required Fields for Maker", function () {
  cy.getBasicInfoTextFields();
  registerPage.getAllBasicFormDropDown().each(($el) => {
    cy.wrap($el).select(1);
  });
  cy.MobileNumber()
  cy.getEmailID();
  registerPage
    .getCountry()
    .select(this.data2.personalInfo.country, { force: true });
});

And("x.7 Enter all Maker required Fields for Maker", function () {
  cy.getBasicInfoTextFields();
  registerPage.getAllBasicFormDropDown().each(($el) => {
    cy.wrap($el).select(1);
  });
  cy.MobileNumber()
  cy.getEmailID();
  registerPage
    .getCountry()
    .select(this.data2.personalInfo.country, { force: true });
});
