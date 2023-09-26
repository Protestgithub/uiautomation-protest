/// <reference types="Cypress" />
/// <reference types = "Cypress-iframe"/>
//--------Imports------------------
import "cypress-iframe";
import { And, Then, When } from "@badeball/cypress-cucumber-preprocessor";

import loginPage from "../../../../../../../support/pageObjects/loginPage";
import "../../../../../../../support/Utils/generic";
import "../../../../../../../support/Utils/TransferControlProfileCommand";
import TransferControlProfile from "../../../../../../../support/pageObjects/TransferControlProfile";
//import TransferControlProfileNew from '../../../../../../../../support/pageObjects/TransferControlProfileNew';
import TransferControlProfileNew from "../../../../../../../support/pageObjects/TransferControlProfileNew";
import myActivity from "../../../../../../../support/pageObjects/MyActivity/myActivity";
import homePage from "../../../../../../../support/pageObjects/homePage";
import MarketingProfile from "../../../../../../../support/pageObjects/UserManagement/MarketingProfile";
//added by Saswat
const filenameTCP = "cypress/fixtures/userData/CumulativeTCPData.json";
const filenameTCP1 = "cypress/fixtures/userData/TCPx.09.json";
function getRandomName() {
  name = "";
  var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
  for (var i = 0; i < 5; i++)
    name += possible.charAt(Math.floor(Math.random() * possible.length));
  return name;
}

const tcpPage = new TransferControlProfile();
const tcpPage1 = new TransferControlProfileNew();
const pageLogin = new loginPage();
const timestamp = new Date().getMilliseconds();
const welcomePage = new homePage();
const myActivityPage = new myActivity();
const MarketingProfile1 = new MarketingProfile();

And("set instrument daily debit limit greater than threshold", function () {
  //fill count of all services
  //forEach loop in cypress
  tcpPage1.getCountFieldDaily().each(($el) => {
    const x = this.data07.CumulativeTransferControlProfile.setDailyCount;
    cy.wrap($el).type(x + 1);
  });

  tcpPage1.getAmountFieldDaily().each(($el) => {
    const x = this.data07.CumulativeTransferControlProfile.setDailyAmount;
    cy.wrap($el).type(x + 1);
  });
});

And("set instrument weekly debit limit greater than threshold", function () {
  //fill count of all services
  //forEach loop in cypress
  tcpPage1.getCountFieldWeekly().each(($el) => {
    const x = this.data07.CumulativeTransferControlProfile.setWeeklyCount;

    cy.wrap($el).type(x + 1);
  });

  tcpPage1.getAmountFieldWeekly().each(($el) => {
    const x = this.data07.CumulativeTransferControlProfile.setWeeklyAmount;

    cy.wrap($el).type(x + 1);
  });
});

And("set instrument monthly debit limit greater than threshold", function () {
  //fill count of all services
  //forEach loop in cypress
  tcpPage1.getCountFieldMonthly().each(($el) => {
    const x = this.data07.CumulativeTransferControlProfile.setMonthlyCount;

    cy.wrap($el).type(x + 1);
  });

  tcpPage1.getAmountFieldMonthly().each(($el) => {
    const x = this.data07.CumulativeTransferControlProfile.setMonthlyAmount;

    cy.wrap($el).type(x + 1);
  });
});

//added on 16/08/23 for yearly_tcp
And("set instrument yearly debit limit greater than threshold", function () {
  //fill count of all services
  //forEach loop in cypress
  tcpPage1.getCountFieldYearly().each(($el) => {
    const x = this.data07.CumulativeTransferControlProfile.setYearlyCount;

    cy.wrap($el).type(x + 1);
  });

  tcpPage1.getAmountFieldYearly().each(($el) => {
    const x = this.data07.CumulativeTransferControlProfile.setYearlyAmount;

    cy.wrap($el).type(x + 1);
  });
});

//-------credit limit----
And("set instrument daily credit limit greater than threshold", function () {
  //fill count of all services
  //forEach loop in cypress

  /*
a=26
a/2 = 13
loop from a/2 To a

*/
  var i = 10;
  for (i = 12; i < 24; i++) {
    el = tcpPage1
      .getCountFieldDaily()
      .eq(i)
      .each(($el) => {
        const x = this.data07.CumulativeTransferControlProfile.setDailyCount;
        cy.wrap($el).type(x + 1);
      });
  }

  var j = 10;
  for (j = 12; j < 24; j++) {
    el = tcpPage1
      .getAmountFieldDaily()
      .eq(j)
      .each(($el) => {
        const x = this.data07.CumulativeTransferControlProfile.setDailyAmount;
        cy.wrap($el).type(x + 1);
      });
  }
});

And("set instrument weekly credit limit greater than threshold", function () {
  //fill count of all services
  //forEach loop in cypress
  //getCountFieldWeekly()
  var i = 10;
  for (i = 12; i < 24; i++) {
    el = tcpPage1
      .getCountFieldWeekly()
      .eq(i)
      .each(($el) => {
        const x = this.data07.CumulativeTransferControlProfile.setWeeklyCount;
        cy.wrap($el).type(x + 1);
      });
  }

  var j = 10;
  for (j = 12; j < 24; j++) {
    el = tcpPage1
      .getAmountFieldWeekly()
      .eq(j)
      .each(($el) => {
        const x = this.data07.CumulativeTransferControlProfile.setWeeklyAmount;
        cy.wrap($el).type(x + 1);
      });
  }
});

And("set instrument monthly credit limit greater than threshold", function () {
  //fill count of all services
  //forEach loop in cypress

  var i = 10;
  for (i = 12; i < 24; i++) {
    el = tcpPage1
      .getCountFieldMonthly()
      .eq(i)
      .each(($el) => {
        const x = this.data07.CumulativeTransferControlProfile.setMonthlyCount;
        cy.wrap($el).type(x + 1);
      });
  }

  var j = 10;
  for (j = 12; j < 24; j++) {
    el = tcpPage1
      .getAmountFieldMonthly()
      .eq(j)
      .each(($el) => {
        const x = this.data07.CumulativeTransferControlProfile.setMonthlyAmount;
        cy.wrap($el).type(x + 1);
      });
  }
});

And("set instrument yearly credit limit greater than threshold", function () {
  //fill count of all services
  //forEach loop in cypress

  var i = 10;
  for (i = 12; i < 24; i++) {
    el = tcpPage1
      .getCountFieldYearly()
      .eq(i)
      .each(($el) => {
        const x = this.data07.CumulativeTransferControlProfile.setYearlyCount;
        cy.wrap($el).type(x + 1);
      });
  }

  var j = 10;
  for (j = 12; j < 24; j++) {
    el = tcpPage1
      .getAmountFieldYearly()
      .eq(j)
      .each(($el) => {
        const x = this.data07.CumulativeTransferControlProfile.setYearlyAmount;
        cy.wrap($el).type(x + 1);
      });
  }
});

And(
  "set per transaction amount of credit limit greater than threshold",
  function () {
    //fill count of all services
    //forEach loop in cypress

    var i = 10;
    for (i = 12; i < 24; i++) {
      el = tcpPage1
        .getPerTransactionAmount()
        .eq(i)
        .each(($el) => {
          const x = this.data07.CumulativeTransferControlProfile.setDailyCount;
          cy.wrap($el).type(x + 1);
        });
    }

    cy.wait(3000);
    tcpPage1.getNext2().eq(1).click({ force: true });
    cy.wait(5000);
  }
);

//to check the values set in first service AND match with CUMULATIVE threshold values
And(
  "Check daily,weekly,monthly and yearly Count and Amount values for the first service in Debit Limit page",
  function () {
    //need to replace values from fixture file
    //log daily count
    tcpPage1
      .getFieldDebit()
      .eq(0)
      .invoke("val")
      .then((value) => {
        cy.log("Daily count : ", value);
        expect(value).to.eq(
          this.data07.CumulativeTransferControlProfile.setDailyCount
        );
      });

    //log daily amount
    tcpPage1
      .getFieldDebit()
      .eq(1)
      .invoke("val")
      .then((value) => {
        cy.log("Daily amount : ", value);
        expect(value).to.eq(
          this.data07.CumulativeTransferControlProfile.setDailyAmount
        );
      });

    //log weekly count
    tcpPage1
      .getFieldDebit()
      .eq(2)
      .invoke("val")
      .then((value) => {
        cy.log("Weekly count : ", value);
        expect(value).to.eq(
          this.data07.CumulativeTransferControlProfile.setWeeklyCount
        );
      });

    //log weekly amount
    tcpPage1
      .getFieldDebit()
      .eq(3)
      .invoke("val")
      .then((value) => {
        cy.log("Weekly amount : ", value);
        expect(value).to.eq(
          this.data07.CumulativeTransferControlProfile.setWeeklyAmount
        );
      });

    //log monthly count
    tcpPage1
      .getFieldDebit()
      .eq(4)
      .invoke("val")
      .then((value) => {
        cy.log("monthly count : ", value);
        expect(value).to.eq(
          this.data07.CumulativeTransferControlProfile.setMonthlyCount
        );
      });

    //log monthly amount
    tcpPage1
      .getFieldDebit()
      .eq(5)
      .invoke("val")
      .then((value) => {
        cy.log("monthly amount : ", value);
        expect(value).to.eq(
          this.data07.CumulativeTransferControlProfile.setMonthlyAmount
        );
      });

    //log yearly count
    tcpPage1
      .getFieldDebit()
      .eq(6)
      .invoke("val")
      .then((value) => {
        cy.log("yearly count : ", value);
        expect(value).to.eq(
          this.data07.CumulativeTransferControlProfile.setYearlyCount
        );
      });

    //yearly amount
    tcpPage1
      .getFieldDebit()
      .eq(7)
      .invoke("val")
      .then((value) => {
        cy.log("yearly amount : ", value);
        expect(value).to.eq(
          this.data07.CumulativeTransferControlProfile.setYearlyAmount
        );
      });
  }
);

And(
  "Check daily,weekly,monthly and yearly Count and Amount values for the first service in Credit Limit page",
  function () {
    //need to replace values from fixture file
    //log daily count
    tcpPage1
      .getFieldCredit()
      .eq(0)
      .invoke("val")
      .then((value) => {
        cy.log("Daily count : ", value);
        expect(value).to.eq(
          this.data07.CumulativeTransferControlProfile.setDailyCount
        );
      });

    //log daily amount
    tcpPage1
      .getFieldCredit()
      .eq(1)
      .invoke("val")
      .then((value) => {
        cy.log("Daily amount : ", value);
        expect(value).to.eq(
          this.data07.CumulativeTransferControlProfile.setDailyAmount
        );
      });

    //log weekly count
    tcpPage1
      .getFieldCredit()
      .eq(2)
      .invoke("val")
      .then((value) => {
        cy.log("Weekly count : ", value);
        expect(value).to.eq(
          this.data07.CumulativeTransferControlProfile.setWeeklyCount
        );
      });

    //log weekly amount
    tcpPage1
      .getFieldCredit()
      .eq(3)
      .invoke("val")
      .then((value) => {
        cy.log("Weekly amount : ", value);
        expect(value).to.eq(
          this.data07.CumulativeTransferControlProfile.setWeeklyAmount
        );
      });

    //log monthly count
    tcpPage1
      .getFieldCredit()
      .eq(4)
      .invoke("val")
      .then((value) => {
        cy.log("monthly count : ", value);
        expect(value).to.eq(
          this.data07.CumulativeTransferControlProfile.setMonthlyCount
        );
      });

    //log monthly amount
    tcpPage1
      .getFieldCredit()
      .eq(5)
      .invoke("val")
      .then((value) => {
        cy.log("monthly amount : ", value);
        expect(value).to.eq(
          this.data07.CumulativeTransferControlProfile.setMonthlyAmount
        );
      });

    //log yearly count
    tcpPage1
      .getFieldCredit()
      .eq(6)
      .invoke("val")
      .then((value) => {
        cy.log("yearly count : ", value);
        expect(value).to.eq(
          this.data07.CumulativeTransferControlProfile.setYearlyCount
        );
      });

    //yearly amount
    tcpPage1
      .getFieldCredit()
      .eq(7)
      .invoke("val")
      .then((value) => {
        cy.log("yearly amount : ", value);
        expect(value).to.eq(
          this.data07.CumulativeTransferControlProfile.setYearlyAmount
        );
      });
  }
);

//to check the values set in first service after we have set values in overall table

And(
  "Check daily,weekly,monthly and yearly Count and Amount values same as set at Overall table for debit limit",
  function () {
    //need to replace values from fixture file
    //log daily count
    tcpPage1
      .getFieldDebit()
      .eq(0)
      .invoke("val")
      .then((value) => {
        cy.log("Daily count : ", value);
        expect(value).to.eq(
          this.data07.CumulativeTransferControlProfile.setDailyCount
        );
      });

    //log daily amount
    tcpPage1
      .getFieldDebit()
      .eq(1)
      .invoke("val")
      .then((value) => {
        cy.log("Daily amount : ", value);
        expect(value).to.eq(
          this.data07.CumulativeTransferControlProfile.setDailyAmount
        );
      });

    //log weekly count
    tcpPage1
      .getFieldDebit()
      .eq(2)
      .invoke("val")
      .then((value) => {
        cy.log("Weekly count : ", value);
        expect(value).to.eq(
          this.data07.CumulativeTransferControlProfile.setWeeklyCount
        );
      });

    //log weekly amount
    tcpPage1
      .getFieldDebit()
      .eq(3)
      .invoke("val")
      .then((value) => {
        cy.log("Weekly amount : ", value);
        expect(value).to.eq(
          this.data07.CumulativeTransferControlProfile.setWeeklyAmount
        );
      });

    //log monthly count
    tcpPage1
      .getFieldDebit()
      .eq(4)
      .invoke("val")
      .then((value) => {
        cy.log("monthly count : ", value);
        expect(value).to.eq(
          this.data07.CumulativeTransferControlProfile.setMonthlyCount
        );
      });

    //log monthly amount
    tcpPage1
      .getFieldDebit()
      .eq(5)
      .invoke("val")
      .then((value) => {
        cy.log("monthly amount : ", value);
        expect(value).to.eq(
          this.data07.CumulativeTransferControlProfile.setMonthlyAmount
        );
      });

    //log yearly count
    tcpPage1
      .getFieldDebit()
      .eq(6)
      .invoke("val")
      .then((value) => {
        cy.log("yearly count : ", value);
        expect(value).to.eq(
          this.data07.CumulativeTransferControlProfile.setYearlyCount
        );
      });

    //yearly amount
    tcpPage1
      .getFieldDebit()
      .eq(7)
      .invoke("val")
      .then((value) => {
        cy.log("yearly amount : ", value);
        expect(value).to.eq(
          this.data07.CumulativeTransferControlProfile.setYearlyAmount
        );
      });
  }
);

//getFieldCredit()

And(
  "verify credit and debit limit values are same as in the created instrument TCP",
  function () {
    tcpPage1
      .getFieldDebit()
      .eq(0)
      .invoke("val")
      .then((value) => {
        cy.log("Daily count : ", value);
        expect(value).to.eq(
          this.data07.CumulativeTransferControlProfile.setDailyCount
        );
      });

    //log daily amount
    tcpPage1
      .getFieldDebit()
      .eq(1)
      .invoke("val")
      .then((value) => {
        cy.log("Daily amount : ", value);
        expect(value).to.eq(
          this.data07.CumulativeTransferControlProfile.setDailyAmount
        );
      });

    //log weekly count
    tcpPage1
      .getFieldDebit()
      .eq(2)
      .invoke("val")
      .then((value) => {
        cy.log("Weekly count : ", value);
        expect(value).to.eq(
          this.data07.CumulativeTransferControlProfile.setWeeklyCount
        );
      });

    //log weekly amount
    tcpPage1
      .getFieldDebit()
      .eq(3)
      .invoke("val")
      .then((value) => {
        cy.log("Weekly amount : ", value);
        expect(value).to.eq(
          this.data07.CumulativeTransferControlProfile.setWeeklyAmount
        );
      });

    //log monthly count
    tcpPage1
      .getFieldDebit()
      .eq(4)
      .invoke("val")
      .then((value) => {
        cy.log("monthly count : ", value);
        expect(value).to.eq(
          this.data07.CumulativeTransferControlProfile.setMonthlyCount
        );
      });

    //log monthly amount
    tcpPage1
      .getFieldDebit()
      .eq(5)
      .invoke("val")
      .then((value) => {
        cy.log("monthly amount : ", value);
        expect(value).to.eq(
          this.data07.CumulativeTransferControlProfile.setMonthlyAmount
        );
      });

    //log yearly count
    tcpPage1
      .getFieldDebit()
      .eq(6)
      .invoke("val")
      .then((value) => {
        cy.log("yearly count : ", value);
        expect(value).to.eq(
          this.data07.CumulativeTransferControlProfile.setYearlyCount
        );
      });

    //yearly amount
    tcpPage1
      .getFieldDebit()
      .eq(7)
      .invoke("val")
      .then((value) => {
        cy.log("yearly amount : ", value);
        expect(value).to.eq(
          this.data07.CumulativeTransferControlProfile.setYearlyAmount
        );
      });

    //need to replace values from fixture file
    //log daily count
    tcpPage1
      .getFieldCredit()
      .eq(0)
      .invoke("val")
      .then((value) => {
        cy.log("Daily count : ", value);
        expect(value).to.eq(
          this.data07.CumulativeTransferControlProfile.setDailyCount
        );
      });

    //log daily amount
    tcpPage1
      .getFieldCredit()
      .eq(1)
      .invoke("val")
      .then((value) => {
        cy.log("Daily amount : ", value);
        expect(value).to.eq(
          this.data07.CumulativeTransferControlProfile.setDailyAmount
        );
      });

    //log weekly count
    tcpPage1
      .getFieldCredit()
      .eq(2)
      .invoke("val")
      .then((value) => {
        cy.log("Weekly count : ", value);
        expect(value).to.eq(
          this.data07.CumulativeTransferControlProfile.setWeeklyCount
        );
      });

    //log weekly amount
    tcpPage1
      .getFieldCredit()
      .eq(3)
      .invoke("val")
      .then((value) => {
        cy.log("Weekly amount : ", value);
        expect(value).to.eq(
          this.data07.CumulativeTransferControlProfile.setWeeklyAmount
        );
      });

    //log monthly count
    tcpPage1
      .getFieldCredit()
      .eq(4)
      .invoke("val")
      .then((value) => {
        cy.log("monthly count : ", value);
        expect(value).to.eq(
          this.data07.CumulativeTransferControlProfile.setMonthlyCount
        );
      });

    //log monthly amount
    tcpPage1
      .getFieldCredit()
      .eq(5)
      .invoke("val")
      .then((value) => {
        cy.log("monthly amount : ", value);
        expect(value).to.eq(
          this.data07.CumulativeTransferControlProfile.setMonthlyAmount
        );
      });

    //log yearly count
    tcpPage1
      .getFieldCredit()
      .eq(6)
      .invoke("val")
      .then((value) => {
        cy.log("yearly count : ", value);
        expect(value).to.eq(
          this.data07.CumulativeTransferControlProfile.setYearlyCount
        );
      });

    //yearly amount
    tcpPage1
      .getFieldCredit()
      .eq(7)
      .invoke("val")
      .then((value) => {
        cy.log("yearly amount : ", value);
        expect(value).to.eq(
          this.data07.CumulativeTransferControlProfile.setYearlyAmount
        );
      });
  }
);

//Set debit weekly count value greater than 7 times daily count
And(
  "Set debit weekly count value greater than 7 times daily count",
  function () {
    const x = this.data07.CumulativeTransferControlProfile.setDailyCount;
    const y = x * 7;
    tcpPage1
      .getCountFieldWeekly()
      .eq(0)
      .type(y + 1);
    tcpPage1
      .getInlineErrorCount()
      .eq(2)
      .contains("Weekly count must not exceed 7 times of Daily count");
  }
);

//Set debit monthly count value greater than 31 times daily count
And(
  "Set debit monthly count value greater than 31 times daily count",
  function () {
    const x = this.data07.CumulativeTransferControlProfile.setDailyCount;
    const y = x * 31;
    tcpPage1
      .getCountFieldMonthly()
      .eq(0)
      .type(y + 1);
    tcpPage1
      .getInlineErrorCount()
      .eq(2)
      .contains("Monthly count must not exceed 31 times of Daily count");
  }
);

//Set debit monthly count value greater than 31 times daily count
And(
  "Set debit yearly count value greater than 12 times monthly count",
  function () {
    const x = this.data07.CumulativeTransferControlProfile.setMonthlyCount;
    const y = x * 12;
    tcpPage1
      .getCountFieldYearly()
      .eq(0)
      .type(y + 1);
    tcpPage1
      .getInlineErrorCount()
      .eq(2)
      .contains("Yearly count must not exceed 12 times of Monthly count");
  }
);

//Set debit weekly amount value greater than 7 times daily amount
And(
  "Set debit weekly Amount value greater than 7 times daily Amount",
  function () {
    const x = this.data07.CumulativeTransferControlProfile.setDailyAmount;
    const y = x * 7;
    tcpPage1
      .getAmountFieldWeekly()
      .eq(0)
      .type(y + 1);
    tcpPage1
      .getInlineErrorCount()
      .eq(2)
      .contains("Weekly amount must not exceed 7 times of Daily amount");
  }
);
//Set debit monthly amount value greater than 31 times daily amount
And(
  "Set debit monthly Amount value greater than 31 times daily Amount",
  function () {
    const x = this.data07.CumulativeTransferControlProfile.setDailyAmount;
    const y = x * 31;
    tcpPage1
      .getAmountFieldMonthly()
      .eq(0)
      .type(y + 1);
    tcpPage1
      .getInlineErrorCount()
      .eq(2)
      .contains("Monthly amount must not exceed 31 times of Daily amount");
  }
);

//Set debit yearly amount value greater than 12 times monthly amount
And(
  "Set debit yearly Amount value greater than 31 times daily Amount",
  function () {
    const x = this.data07.CumulativeTransferControlProfile.setMonthlyAmount;
    const y = x * 12;
    tcpPage1
      .getAmountFieldYearly()
      .eq(0)
      .type(y + 1);
    tcpPage1
      .getInlineErrorCount()
      .eq(2)
      .contains("Yearly amount must not exceed 12 times of Monthly amount");
  }
);

//----------------------------------------Saswat's functions-----------------------------

And(
  "Create an instrument TCP using the  Domain and Category from Cumulative",
  function () {
    //profile name
    tcpPage1.getProfileName().eq(0).type(getRandomName(), { force: true });

    //description
    cy.intercept("/mobiquitypay/v1/tcp/unique/profile-name*").as("profileTCP");
    tcpPage1.getDescription().click();
    cy.wait("@profileTCP", { timeout: 20000 });
    tcpPage1.getDescription().type("zyxwDescription");

    //tcpPage.getCurrency().select(" IndianRupee - ₹ ")

    tcpPage1.getCurrency().click({ force: true });
    //tcpPage1.getINR().click({ force: true });

    tcpPage1
      .setCurrency()
      .contains(this.data07.TransferControlProfile.Currency)
      .click({ force: true });

    tcpPage1.getDomain().click({ force: true });
    cy.intercept("mobiquitypay/v1/categories/domains/*").as("tcpDomain");

    tcpPage1
      .getDropDownOptions()
      .contains(this.data07.CumulativeTransferControlProfile.setDomain)
      .click({ force: true });

    cy.wait("@tcpDomain", { timeout: 5000 });
    tcpPage1.getCategory().click({ force: true });
    cy.intercept("/mobiquitypay/v1/grades/categories/*").as("tcpCategory");
    /* commented by Prerna on 11/09/23
      cy.fixture("userData/CumulativeTCPData.json").then((value) => {
        cy.wait(1000);
        tcpPage1.getDropDownOptions().contains(value.CumulativeCategory).click();
      });
      */
    ///mobiquitypay/v1/grades/categories/

    tcpPage1
      .getDropDownOptions()
      .contains(this.data07.TransferControlProfile.Category)
      .click({ force: true });

    cy.wait("@tcpCategory", { timeout: 5000 });

    tcpPage1.getGrade().click({ force: true });
    tcpPage1.getDropDownOptions().eq(0).click({ force: true });
    // No intercept in Grade and wallet
    cy.wait(1000);
    tcpPage1.getPaymentInstument().click({ force: true });

    //cy.intercept('/mobiquitypay/v1/tcp/instrument/bankorwallet/*').as('tcpPaymentInstrument')
    tcpPage1.getDropDownOptions().eq(0).click({ force: true });
    //cy.wait('@tcpPaymentInstrument',{timeout:10000})
    cy.wait(1000);
    tcpPage1.getWalletType().click({ force: true });
    tcpPage1.getDropDownOptions().eq(1).click({ force: true });

    cy.intercept("mobiquitypay/v1/tcp/instrument/servicetypes*").as(
      "serviceType"
    );
    tcpPage1.getNext().eq(0).should("be.visible").click({ force: true });
    cy.wait("@serviceType", { timeout: 10000 });
  }
);

And("Search the instrument profile created and assert the fields", function () {
  cy.readFile(filenameTCP1).then((data) => {
    const name = data.ProfileName;
    tcpPage1.getInstSearch().click().type(name);
  });

  cy.wait(3000);
  tcpPage1.getActionButtons().eq(1).should("be.visible");
  tcpPage1.getActionButtons().eq(1).click({ force: true });
});

And(
  "Navigate to Set credit limits and modify daily, weekly, monthly and per transaction for overall table",
  function () {
    cy.wait(5000);

    //daily count
    tcpPage1.getCountFieldDaily().should("be.visible");

    var i1 = 10;
    for (i1 = 12; i1 < 24; i1++) {
      el = tcpPage1
        .getCountFieldDaily()
        .eq(i1)
        .each(($el) => {
          cy.readFile(filenameTCP).then((value) => {
            const x = value.DailyCumulativeCountCredit;
            cy.wrap($el).type(x - 1);
          });
        });
    }

    //daily amount
    tcpPage1.getAmountFieldDaily().should("be.visible");

    var j1 = 10;
    for (j1 = 12; j1 < 24; j1++) {
      el = tcpPage1
        .getAmountFieldDaily()
        .eq(j1)
        .each(($el) => {
          cy.readFile(filenameTCP).then((value) => {
            const x = value.DailyCumulativeAmountCredit;
            cy.wrap($el).type(x - 1);
          });
        });
    }

    //weekly count
    tcpPage1.getCountFieldWeekly().should("be.visible");

    var i2 = 10;
    for (i2 = 12; i2 < 24; i2++) {
      el = tcpPage1
        .getCountFieldWeekly()
        .eq(i2)
        .each(($el) => {
          cy.readFile(filenameTCP).then((value) => {
            const x = value.WeeklyCumulativeCountCredit;
            cy.wrap($el).type(x - 1);
          });
        });
    }

    //weekly amount

    tcpPage1.getAmountFieldWeekly().should("be.visible");

    var j2 = 10;
    for (j2 = 12; j2 < 24; j2++) {
      el = tcpPage1
        .getAmountFieldWeekly()
        .eq(j2)
        .each(($el) => {
          cy.readFile(filenameTCP).then((value) => {
            const x = value.WeeklyCumulativeAmountCredit;
            cy.wrap($el).type(x - 1);
          });
        });
    }

    //monthly count
    /*
    tcpPage1.getCountFieldMonthly().should("be.visible");

    var i3=10;
    for(i3=12;i3<24;i3++)
  {
  el = tcpPage1.getCountFieldMonthly().eq(i3).each(($el) => {
      cy.wrap($el).type(
        this.data07.CumulativeTransferControlProfile
          .MonthlyCumulativeCountCreditNrml
      );
    });
  }


    //monthly amount
    tcpPage1.getAmountFieldMonthly().should("be.visible");

    var j3=10;
    for(j3=12;j3<24;j3++)
  {
  el = tcpPage1.getAmountFieldMonthly().eq(j3).each(($el) => {
      cy.wrap($el).type(
        this.data07.CumulativeTransferControlProfile
          .MonthlyCumulativeAmountCreditNrml
      );
    });
  }



    //yearly count

    tcpPage1.getCountFieldYearly().should("be.visible");

    var i4=10;
    for(i4=12;i4<24;i4++)
  {
  el = tcpPage1.getCountFieldYearly().eq(i4).each(($el) => {
      cy.wrap($el).type(
        this.data07.CumulativeTransferControlProfile
          .YearlyCumulativeCountCreditNrml
      );
    });
  }

    //yearly amount
    tcpPage1.getAmountFieldYearly().should("be.visible");

    var j4=10;
    for(j4=12;j4<24;j4++)
  {
  el = tcpPage1.getAmountFieldYearly().eq(j4).each(($el) => {
      cy.wrap($el).type(
        this.data07.CumulativeTransferControlProfile
          .YearlyCumulativeAmountCreditNrml
      );
    });
  }
*/
    var k = 10;
    for (k = 12; k < 24; k++) {
      el = tcpPage1
        .getPerTransactionAmount()
        .eq(k)
        .each(($el) => {
          cy.wrap($el).type(
            this.data07.CumulativeTransferControlProfile.PerTransactionAmount
          );
        });
    }

    cy.wait(5000);

    tcpPage1.getNext2().eq(1).click();
    tcpPage1.getNext1().eq(1).click();
  }
);
And(
  "Navigate to Set credit limits and modify daily, weekly, monthly and per transaction for overall table for error",
  function () {
    cy.wait(5000);

    //daily count
    tcpPage1.getCountFieldDaily().should("be.visible");

    var i1 = 10;
    for (i1 = 12; i1 < 24; i1++) {
      el = tcpPage1
        .getCountFieldDaily()
        .eq(i1)
        .each(($el) => {
          cy.readFile(filenameTCP).then((value) => {
            const x = value.DailyCumulativeCountCredit;
            cy.wrap($el).type(x + 1);
          });
        });
    }

    //daily amount
    tcpPage1.getAmountFieldDaily().should("be.visible");

    var j1 = 10;
    for (j1 = 12; j1 < 24; j1++) {
      el = tcpPage1
        .getAmountFieldDaily()
        .eq(j1)
        .each(($el) => {
          cy.readFile(filenameTCP).then((value) => {
            const x = value.DailyCumulativeAmountCredit;
            cy.wrap($el).type(x + 1);
          });
        });
    }

    //weekly count
    tcpPage1.getCountFieldWeekly().should("be.visible");

    var i2 = 10;
    for (i2 = 12; i2 < 24; i2++) {
      el = tcpPage1
        .getCountFieldWeekly()
        .eq(i2)
        .each(($el) => {
          cy.readFile(filenameTCP).then((value) => {
            const x = value.WeeklyCumulativeCountCredit;
            cy.wrap($el).type(x + 1);
          });
        });
    }

    //weekly amount

    tcpPage1.getAmountFieldWeekly().should("be.visible");

    var j2 = 10;
    for (j2 = 12; j2 < 24; j2++) {
      el = tcpPage1
        .getAmountFieldWeekly()
        .eq(j2)
        .each(($el) => {
          cy.readFile(filenameTCP).then((value) => {
            const x = value.WeeklyCumulativeAmountCredit;
            cy.wrap($el).type(x + 1);
          });
        });
    }

    //monthly count
    /*
    tcpPage1.getCountFieldMonthly().should("be.visible");

    var i3=10;
    for(i3=12;i3<24;i3++)
  {
  el = tcpPage1.getCountFieldMonthly().eq(i3).each(($el) => {
      cy.wrap($el).type(
        this.data07.CumulativeTransferControlProfile
          .MonthlyCumulativeCountCreditNrml
      );
    });
  }


    //monthly amount
    tcpPage1.getAmountFieldMonthly().should("be.visible");

    var j3=10;
    for(j3=12;j3<24;j3++)
  {
  el = tcpPage1.getAmountFieldMonthly().eq(j3).each(($el) => {
      cy.wrap($el).type(
        this.data07.CumulativeTransferControlProfile
          .MonthlyCumulativeAmountCreditNrml
      );
    });
  }



    //yearly count

    tcpPage1.getCountFieldYearly().should("be.visible");

    var i4=10;
    for(i4=12;i4<24;i4++)
  {
  el = tcpPage1.getCountFieldYearly().eq(i4).each(($el) => {
      cy.wrap($el).type(
        this.data07.CumulativeTransferControlProfile
          .YearlyCumulativeCountCreditNrml
      );
    });
  }

    //yearly amount
    tcpPage1.getAmountFieldYearly().should("be.visible");

    var j4=10;
    for(j4=12;j4<24;j4++)
  {
  el = tcpPage1.getAmountFieldYearly().eq(j4).each(($el) => {
      cy.wrap($el).type(
        this.data07.CumulativeTransferControlProfile
          .YearlyCumulativeAmountCreditNrml
      );
    });
  }
*/
    var k = 10;
    for (k = 12; k < 24; k++) {
      el = tcpPage1
        .getPerTransactionAmount()
        .eq(k)
        .each(($el) => {
          cy.wrap($el).type(
            this.data07.CumulativeTransferControlProfile.PerTransactionAmount
          );
        });
    }

    cy.wait(5000);
  }
);

And(
  "Navigate to Set debit limits and modify daily, weekly, monthly and per transaction for overall table",
  function () {
    tcpPage1.getNext2().eq(0).click();
    cy.wait(5000);
    //EDIT 'ALL'

    //daily
    tcpPage1.getCountFieldDaily().each(($el) => {
      cy.readFile(filenameTCP).then((value) => {
        const x = this.data07.CumulativeTransferControlProfile.setDailyCount;
        cy.wrap($el).type(x - 1);
      });
    });
    tcpPage1.getAmountFieldDaily().each(($el) => {
      cy.readFile(filenameTCP).then((value) => {
        const x = this.data07.CumulativeTransferControlProfile.setDailyAmount;
        cy.wrap($el).type(x - 1);
      });
    });
    //weekly
    tcpPage1.getCountFieldWeekly().each(($el) => {
      cy.readFile(filenameTCP).then((value) => {
        const x = this.data07.CumulativeTransferControlProfile.setWeeklyCount;
        cy.wrap($el).type(x - 1);
      });
    });
    tcpPage1.getAmountFieldWeekly().each(($el) => {
      cy.readFile(filenameTCP).then((value) => {
        const x = this.data07.CumulativeTransferControlProfile.setWeeklyAmount;
        cy.wrap($el).type(x - 1);
      });
    });
    //monthly
    tcpPage1.getCountFieldMonthly().each(($el) => {
      cy.readFile(filenameTCP).then((value) => {
        const x = this.data07.CumulativeTransferControlProfile.setMonthlyCount;
        cy.wrap($el).type(x - 1);
      });
    });
    tcpPage1.getAmountFieldMonthly().each(($el) => {
      cy.readFile(filenameTCP).then((value) => {
        const x = this.data07.CumulativeTransferControlProfile.setMonthlyAmount;
        cy.wrap($el).type(x - 1);
      });
    });
    //yearly
    tcpPage1.getCountFieldYearly().each(($el) => {
      cy.readFile(filenameTCP).then((value) => {
        const x = this.data07.CumulativeTransferControlProfile.setYearlyCount;
        cy.wrap($el).type(x - 1);
      });
    });
    tcpPage1.getAmountFieldYearly().each(($el) => {
      cy.readFile(filenameTCP).then((value) => {
        const x = this.data07.CumulativeTransferControlProfile.setYearlyAmount;
        cy.wrap($el).type(x - 1);
      });
    });

    tcpPage1.getPerTransactionAmount().each(($el) => {
      cy.wrap($el).type(
        this.data07.CumulativeTransferControlProfile.PerTransactionAmount
      );
    });

    tcpPage1.getNext2().eq(1).click();
    cy.wait(5000);

    //no scope of intercept, putting static wait
    tcpPage1.getNext1().eq(1).click({ force: true });
    cy.wait(5000);
  }
);

And(
  "Navigate to Set credit limits and modify daily, weekly, monthly and per transaction for ALL channel modify for error",
  function () {
    cy.wait(5000);
    //EDIT 'ALL'

    //daily
    tcpPage1.getCountFieldDaily().each(($el) => {
      cy.readFile(filenameTCP).then((value) => {
        const x = value.DailyCumulativeCountCredit;
        cy.wrap($el).type(x + 1);
      });
    });
    tcpPage1.getAmountFieldDaily().each(($el) => {
      cy.readFile(filenameTCP).then((value) => {
        const x = value.DailyCumulativeAmountCredit;
        cy.wrap($el).type(x + 1);
      });
    });
    //weekly
    tcpPage1.getCountFieldWeekly().each(($el) => {
      cy.readFile(filenameTCP).then((value) => {
        const x = value.WeeklyCumulativeCountCredit;
        cy.wrap($el).type(x + 1);
      });
    });
    tcpPage1.getAmountFieldWeekly().each(($el) => {
      cy.readFile(filenameTCP).then((value) => {
        const x = value.WeeklyCumulativeAmountCredit;
        cy.wrap($el).type(x + 1);
      });
    });
    //monthly
    tcpPage1.getCountFieldMonthly().each(($el) => {
      cy.readFile(filenameTCP).then((value) => {
        const x = value.MonthlyCumulativeCountCredit;
        cy.wrap($el).type(x + 1);
      });
    });
    tcpPage1.getAmountFieldMonthly().each(($el) => {
      cy.readFile(filenameTCP).then((value) => {
        const x = value.MonthlyCumulativeAmountCredit;
        cy.wrap($el).type(x + 1);
      });
    });
    //yearly
    tcpPage1.getCountFieldYearly().each(($el) => {
      cy.readFile(filenameTCP).then((value) => {
        const x = value.YearlyCumulativeCountCredit;
        cy.wrap($el).type(x + 1);
      });
    });
    tcpPage1.getAmountFieldYearly().each(($el) => {
      cy.readFile(filenameTCP).then((value) => {
        const x = value.YearlyCumulativeAmountCredit;
        cy.wrap($el).type(x + 1);
      });
    });

    tcpPage1.getPerTransactionAmount().eq(1).clear();
    tcpPage1.getPerTransactionAmount().eq(1).type("5");

    tcpPage1.getNext2().eq(2).click();
    cy.wait(5000);

    tcpPage1.getNext1().eq(0).click();
  }
);

And(
  "Navigate to Set debit limits and modify daily, weekly, monthly and per transaction for ALL channel modify for error",
  function () {
    tcpPage1.getNext2().eq(0).click();
    cy.wait(5000);
    //EDIT 'ALL'

    //daily
    tcpPage1.getCountFieldDaily().each(($el) => {
      cy.readFile(filenameTCP).then((value) => {
        const x = value.DailyCumulativeCountDebit;
        cy.wrap($el).type(x + 1);
      });
    });
    tcpPage1.getAmountFieldDaily().each(($el) => {
      cy.readFile(filenameTCP).then((value) => {
        const x = value.DailyCumulativeAmountDebit;
        cy.wrap($el).type(x + 1);
      });
    });
    //weekly
    tcpPage1.getCountFieldWeekly().each(($el) => {
      cy.readFile(filenameTCP).then((value) => {
        const x = value.WeeklyCumulativeCountDebit;
        cy.wrap($el).type(x + 1);
      });
    });
    tcpPage1.getAmountFieldWeekly().each(($el) => {
      cy.readFile(filenameTCP).then((value) => {
        const x = value.WeeklyCumulativeAmountDebit;
        cy.wrap($el).type(x + 1);
      });
    });
    //monthly
    tcpPage1.getCountFieldMonthly().each(($el) => {
      cy.readFile(filenameTCP).then((value) => {
        const x = value.MonthlyCumulativeCountDebit;
        cy.wrap($el).type(x + 1);
      });
    });
    tcpPage1.getAmountFieldMonthly().each(($el) => {
      cy.readFile(filenameTCP).then((value) => {
        const x = value.MonthlyCumulativeAmountDebit;
        cy.wrap($el).type(x + 1);
      });
    });
    //yearly
    tcpPage1.getCountFieldYearly().each(($el) => {
      cy.readFile(filenameTCP).then((value) => {
        const x = value.YearlyCumulativeCountDebit;
        cy.wrap($el).type(x + 1);
      });
    });
    tcpPage1.getAmountFieldYearly().each(($el) => {
      cy.readFile(filenameTCP).then((value) => {
        const x = value.YearlyCumulativeAmountDebit;
        cy.wrap($el).type(x + 1);
      });
    });

    tcpPage1.getPerTransactionAmount().each(($el) => {
      cy.wrap($el).type(
        this.data07.CumulativeTransferControlProfile.PerTransactionAmount
      );
    });
  }
);

// And(
//   "Navigate to Set credit limits and modify daily, weekly, monthly and per transaction for ALL channel modify for error",
//   function () {
//     tcpPage1.getNext2().eq(0).click();
//     cy.wait(5000);
//     //EDIT 'ALL'

//     //daily
//     tcpPage1.getCountFieldDaily().each(($el) => {
//       cy.readFile(filenameTCP).then((value) => {
//         const x = value.DailyCumulativeCountCredit;
//         cy.wrap($el).type(x + 1);
//       });
//     });
//     tcpPage1.getAmountFieldDaily().each(($el) => {
//       cy.readFile(filenameTCP).then((value) => {
//         const x = value.DailyCumulativeAmountCredit;
//         cy.wrap($el).type(x + 1);
//       });
//     });
//     //weekly
//     tcpPage1.getCountFieldWeekly().each(($el) => {
//       cy.readFile(filenameTCP).then((value) => {
//         const x = value.WeeklyCumulativeCountCredit;
//         cy.wrap($el).type(x + 1);
//       });
//     });
//     tcpPage1.getAmountFieldWeekly().each(($el) => {
//       cy.readFile(filenameTCP).then((value) => {
//         const x = value.WeeklyCumulativeAmountCredit;
//         cy.wrap($el).type(x + 1);
//       });
//     });
//     //monthly
//     tcpPage1.getCountFieldMonthly().each(($el) => {
//       cy.readFile(filenameTCP).then((value) => {
//         const x = value.MonthlyCumulativeCountCredit;
//         cy.wrap($el).type(x + 1);
//       });
//     });
//     tcpPage1.getAmountFieldMonthly().each(($el) => {
//       cy.readFile(filenameTCP).then((value) => {
//         const x = value.MonthlyCumulativeAmountCredit;
//         cy.wrap($el).type(x + 1);
//       });
//     });
//     //yearly
//     tcpPage1.getCountFieldYearly().each(($el) => {
//       cy.readFile(filenameTCP).then((value) => {
//         const x = value.YearlyCumulativeCountCredit;
//         cy.wrap($el).type(x + 1);
//       });
//     });
//     tcpPage1.getAmountFieldYearly().each(($el) => {
//       cy.readFile(filenameTCP).then((value) => {
//         const x = value.YearlyCumulativeAmountCredit;
//         cy.wrap($el).type(x + 1);
//       });
//     });

//     tcpPage1.getPerTransactionAmount().eq(1).clear();
//     tcpPage1.getPerTransactionAmount().each(($el) => {
//       cy.wrap($el).type(
//         this.data07.CumulativeTransferControlProfile.PerTransactionAmount
//       );
//     });
//   }
// );

//getConfirm()
//added by Prerna
And(
  "Confirm the Instrument TCP details after the modification of overall table",
  function () {
    tcpPage1.getConfirm().eq(0).click();
  }
);

And("Set Debit Limits for E2E", function () {
  //tcpPage.scrollIntoView()
  tcpPage1.getNext2().eq(0).click();
  cy.wait(5000);
  tcpPage1.getNext1().eq(0).click();
  cy.wait(5000);
});

And(
  "Set credit weekly Amount value greater than 7 times daily Amount",
  function () {
    var j = 10;
    for (j = 12; j < 24; j++) {
      el = tcpPage1
        .getAmountFieldWeekly()
        .eq(j)
        .each(($el) => {
          const x = this.data07.CumulativeTransferControlProfile.setDailyAmount;
          cy.wrap($el).type(x * 7 + 1);
        });
    }
    tcpPage1
      .getErrorCredit()
      .eq(2)
      .contains(" Weekly amount must not exceed 7 times of Daily amount ");
  }
);
And(
  "Set credit monthly Amount value greater than 31 times daily Amount",
  function () {
    var j = 10;
    for (j = 12; j < 24; j++) {
      el = tcpPage1
        .getAmountFieldMonthly()
        .eq(j)
        .each(($el) => {
          const x = this.data07.CumulativeTransferControlProfile.setDailyAmount;
          cy.wrap($el).type(x * 31 + 1);
        });

      tcpPage1
        .getErrorCredit()
        .eq(2)
        .contains(" Monthly amount must not exceed 31 times of Daily amount ");
    }
  }
);
And(
  "Set credit yearly Amount value greater than 12 times monthly Amount",
  function () {
    var j = 10;
    for (j = 12; j < 24; j++) {
      el = tcpPage1
        .getAmountFieldYearly()
        .eq(j)
        .each(($el) => {
          const x =
            this.data07.CumulativeTransferControlProfile.setMonthlyAmount;
          cy.wrap($el).type(x * 12 + 1);
        });
    }
    tcpPage1
      .getErrorCredit()
      .eq(2)
      .contains(" Yearly amount must not exceed 12 times of Monthly amount ");
  }
);

And("Click on edit icon of TCPE2E", function () {
  //click visiblity of pen, click on edit icon, go back
  tcpPage1.getActionButtons().eq(0).should("be.visible");
  tcpPage1.getActionButtons().eq(0).click({ force: true });
  tcpPage1.getNext2().eq(0).click({ force: true });
});

And("Add Marketing Profile Customer for TCP", function () {
  cy.iframe()
    .find('[id="profileName"]')
    .clear()
    .type(Cypress.env("profileNameCUST"));
  cy.intercept("/mobiquitypay/v1/marketingProfiles?*").as(
    "waitforSearchResults"
  );
  cy.iframe().find('[id="search-btn"]').click();
  cy.wait(2000);
  cy.wait("@waitforSearchResults");
  cy.iframe()
    .find("table > tbody > tr > td")
    .invoke("text")
    .then(($text) => {
      if ($text.includes(Cypress.env("profileNameCUST"))) {
        cy.log("Profile exists");
      } else {
        cy.log("creating new profile");
        MarketingProfile1.getAddMarketingProfile().click();
        MarketingProfile1.getMarketingProfileCode().type(id, { force: true });
        cy.MPRandomName1();
        MarketingProfile1.getMarketingProfileDomainName().click();
        MarketingProfile1.getMarketingProfileDomainName1().click();
        MarketingProfile1.getMarketingProfileCategoryName().click();
        MarketingProfile1.getMarketingProfileCategoryName1()
          .contains(Cypress.env("categoryName"))
          .click({ force: true });
        MarketingProfile1.getMarketingProfileMFSProvider().click();
        MarketingProfile1.getMarketingProfileMFSProvider1().click();
        MarketingProfile1.getMarketingProfileWalletType().click();
        MarketingProfile1.getMarketingProfileWalletType1().click();
        MarketingProfile1.getMarketingProfileGrade().click();
        MarketingProfile1.getMarketingProfileGrade1().click();
        MarketingProfile1.getMarketingProfileInstrumentTCP().click();
        MarketingProfile1.getMarketingProfileInstrumentTCP1().click();
        cy.wait(2000);
        MarketingProfile1.getMarketingProfileAddBtn().click();
        cy.readFile(RegulatoryFile).then((data) => {
          data.MarketingProfileCodeDistributer = id;
          cy.writeFile(RegulatoryFile, data);
        });
        RegulatoryProfile1.getrpsuccess().contains(this.data2.Marketing);
      }
    });
});
