/// <reference types="Cypress" />
/// <reference types = "Cypress-iframe"/>
//--------Imports------------------
import "cypress-iframe";
import {
  Given,
  When,
  Then,
  And,
  Before,
} from "@badeball/cypress-cucumber-preprocessor";
import loginPage from "../../../../../../../support/pageObjects/loginPage";
import "../../../../../../../support/Utils/generic";
import "../../../../../../../support/Utils/TransferControlProfileCommand";
import TransferControlProfile from "../../../../../../../support/pageObjects/TransferControlProfile";
import myActivity from "../../../../../../../support/pageObjects/MyActivity/myActivity";
import homePage from "../../../../../../../support/pageObjects/homePage";
const tcpPage = new TransferControlProfile();
const pageLogin = new loginPage();
const timestamp = new Date().getMilliseconds();
const welcomePage = new homePage();
const myActivityPage = new myActivity();
const filenameTCP = "cypress/fixtures/userData/CumulativeTCPData.json";
// 05/09/23
//var DataFile = "cypress/fixtures/userData/Domain&CAT.json"


function getRandomName1() {
  var name = "";
  var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
  for (var i = 0; i < 5; i++)
    name += possible.charAt(Math.floor(Math.random() * possible.length));
  return name;
}
function getRandomName2() {
  var name = "";
  var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
  for (var i = 0; i < 60; i++)
    name += possible.charAt(Math.floor(Math.random() * possible.length));
  return name;
}

var Tcpname = getRandomName1() + timestamp;
var NegTcp = getRandomName2() + timestamp;
var setDomain;

And("Write Created on time for Cumulative TCP", function () {
  //go inside the record
  //tcpPage.getFirstRecord().click({ force: true })
  tcpPage.getMyActivity().should("be.visible");
  tcpPage.getMyActivity().click({ multiple: true });
  tcpPage.getExpand().click({ force: true });
  tcpPage.getViewDetailsForResume().click({ force: true });
  var profNameMyActivity;
  cy.wait(2000);
  // if (tcpPage.getProfileNameLabel()) {
  //   cy.log("Profile name Label aseerted to be true");
  tcpPage.getProfileNameMyActivity().should("be.visible");
  tcpPage
    .getProfileNameMyActivity()
    .invoke("text")
    .then((val) => {
      cy.log(val);
      const result = val.trim();
      cy.readFile(filenameTCP).then((data) => {
        data.ProfileNameMyActivity = result;
        cy.writeFile(filenameTCP, data);
      });
      profNameMyActivity = val; //storing profile name Of MyActivity in this variable
    });
  var profNameTcp; //storing profile name during creation in this variable
  cy.readFile(filenameTCP).then((data) => {
    profNameTcp = data.CumulativeTcpName;
    var profNameMyActivity = data.ProfileNameMyActivity;
    if (profNameMyActivity == profNameTcp) {
      cy.wait(2000);
      //if both instrument profile name are same only then store the created time in fixture
      tcpPage
        .getCreatedOnTime2()
        .eq(2)
        .invoke("text")
        .then((time) => {
          time = time.trim();
          cy.log(time);
          cy.readFile(filenameTCP).then((data) => {
            // if (tcpPage.getProfileNameLabel()) {
            //   cy.log("Profile name Label aseerted to be true");
            tcpPage.getProfileNameMyActivity().should("be.visible");
            tcpPage
              .getProfileNameMyActivity()
              .invoke("text")
              .then((val) => {
                cy.log(val);
                const result = val.trim();
                cy.readFile(filenameTCP).then((data) => {
                  data.ProfileNameMyActivity = result;
                  cy.writeFile(filenameTCP, data);
                });
                profNameMyActivity = val; //storing profile name Of MyActivity in this variable
              });
            var profNameTcp; //storing profile name during creation in this variable
            cy.readFile(filenameTCP).then((data) => {
              profNameTcp = data.CumulativeTcpName;
              var profNameMyActivity = data.ProfileNameMyActivity;
              if (profNameMyActivity == profNameTcp) {
                cy.wait(2000);
                //if both instrument profile name are same only then store the created time in fixture
                tcpPage
                  .getCreatedOnTime2()
                  .eq(2)
                  .invoke("text")
                  .then((time) => {
                    time = time.trim();
                    cy.log(time);
                    cy.readFile(filenameTCP).then((data) => {
                      data.CreatedOnTime = time;
                      cy.writeFile(filenameTCP, data);
                    });
                  });
              } else {
                cy.log("Profile name Lable not found");
              }
            });
          });
        });
    } else {
      cy.log("Profile name Lable not found");
    }
  });
});

And("User click on Superadmin submitted user data", function () {
  cy.getApproval(filenameTCP);
});
And("Navigate to My Activity Superadmin and Apply submitted", function () {
  welcomePage.getMyActivity().click();
  cy.wait(3000);
  myActivityPage.getFilter().click({ force: true });
  myActivityPage.getSubmittedStatus().click();
  myActivityPage.getApply().click();
  cy.wait(3000);
});

When("Navigate to TCP", function () {
  tcpPage.getTCP().should("be.visible");
  cy.intercept("/tcp-ui/").as("getTCP");
  tcpPage.getTCP().click({ force: true });
  cy.wait("@getTCP", { timeout: 15000 });
  cy.wait(3000);
});
Then("Click on Add Profile", function () {
  tcpPage.getAddProfile().should("be.visible");
  tcpPage.getAddProfile().click();
  count = 1;
});
Then("Fill out the details", function () {
  tcpPage.getProfileName().should("be.visible");
  tcpPage.getProfileName().click().clear().type(Tcpname, { force: true });

  cy.readFile(filenameTCP).then((data) => {
    data.CumulativeTcpName = Tcpname;
    cy.writeFile(filenameTCP, data);
  });

  tcpPage.getCurrency().should("be.visible");
  cy.wait(2000);

  tcpPage.getCurrency().click({ force: true });
  tcpPage.setCurrency().contains(this.data07.TransferControlProfile.Currency).click({force: true})
  cy.wait(1000);
  /*
  tcpPage.setCurrency().then((options) => {
    const randomIndex = Math.floor(Math.random() * options.length);
    cy.wrap(options[randomIndex]).click({ force: true });
  });
  */
  cy.wait(1000);
  tcpPage.getDomain().should("be.visible");

  tcpPage.getDomain().click({ force: true });
  tcpPage.getDomain().click({ force: true });
/*------------------------------------------------  Uncomment in future----------*/
//05/09/23 Take the newly created domain
  tcpPage
    .setDomain()
    .contains(Cypress.env('domainName'))
    .click({ force: true });

  //05/09/23 Take the newly created category
  tcpPage.getCategory().should("be.visible");
  tcpPage.getCategory().click({ force: true });
  tcpPage.setCategory().contains(Cypress.env('categoryName')).click({ force: true }); 

/*
  tcpPage
    .setDomain()
    .contains(this.data07.CumulativeTransferControlProfile.setDomain)
    .click({ force: true });

  tcpPage.getCategory().should("be.visible");
  tcpPage.getCategory().click({ force: true });
  tcpPage.setCategory().then((options) => {
    const randomIndex = Math.floor(Math.random() * options.length);
    cy.wrap(options[randomIndex])
      .click({ force: true })
      .invoke("text")
      .then((val) => {
        cy.log(val);
        const result = val.trim();
        cy.readFile(filenameTCP).then((data) => {
          data.CumulativeCategory = result;
          cy.writeFile(filenameTCP, data);
        });
      });
  });
  */
  /*---------------------uncomment in future
   //05/09/23 Creating a NoKyc profile
  tcpPage
    .setRegulatoryProfile()
    .contains(this.data07.CumulativeTransferControlProfile.setRegulatoryProfile)
    .click({ force: true });

  */
  tcpPage.getRegulatoryProfile().should("be.visible");
  tcpPage.getRegulatoryProfile().click();
  tcpPage
    .setRegulatoryProfile()
    .contains(this.data07.CumulativeTransferControlProfile.setRegulatoryProfile)
    .click({ force: true });
  tcpPage.getNextBtn().first().click();
});

Then("Validate that Next button is disabled", function () {
  tcpPage.getProfileName().should("be.visible");
  tcpPage.getProfileName().click().clear().type(Tcpname, { force: true });

  tcpPage.getNextBtn().should("have.attr", "disabled");
});

Then(
  "Fill in the daily,weekly and monthly credit and debit limits",
  function () {
    tcpPage.getDailyCountDebit().should("be.visible");
    tcpPage.getDailyCountDebit().click();
    tcpPage.getDailyCountDebit().clear().type("30");

    tcpPage.getDailyAmountDebit().should("be.visible");
    tcpPage.getDailyAmountDebit().click();
    tcpPage
      .getDailyAmountDebit()
      .clear()
      .wait(100)
      .type("3000", { force: true });
    tcpPage.getWeeklyCountDebit().should("be.visible");
    tcpPage.getWeeklyCountDebit().click();
    tcpPage.getWeeklyCountDebit().clear().type("60");
    tcpPage.getWeeklyAmountDebit().should("be.visible");
    tcpPage.getWeeklyAmountDebit().click();
    tcpPage.getWeeklyAmountDebit().clear().type("6000", { force: true });
    tcpPage.getMonthlyCountDebit().should("be.visible");
    tcpPage.getMonthlyCountDebit().click();
    tcpPage.getMonthlyCountDebit().clear().type("120");
    tcpPage.getMonthlyAmountDebit().should("be.visible");
    tcpPage.getMonthlyAmountDebit().click();
    tcpPage.getMonthlyAmountDebit().clear().type("12000", { force: true });
    cy.wait(1000);
    tcpPage.getDailyCountCredit().should("be.visible");
    tcpPage.getDailyCountCredit().click();
    tcpPage.getDailyCountCredit().clear().type("30");
    tcpPage.getDailyAmountCredit().should("be.visible");
    tcpPage.getDailyAmountCredit().click();
    tcpPage.getDailyAmountCredit().clear().type("3000", { force: true });
    tcpPage.getWeeklyCountCredit().should("be.visible");
    tcpPage.getWeeklyCountCredit().click();
    tcpPage.getWeeklyCountCredit().clear().type("60");
    tcpPage.getWeeklyAmountCredit().should("be.visible");
    tcpPage.getWeeklyAmountCredit().click();
    tcpPage.getWeeklyAmountCredit().clear().type("6000", { force: true });
    tcpPage.getMonthlyCountCredit().should("be.visible");
    tcpPage.getMonthlyCountCredit().click();
    tcpPage.getMonthlyCountCredit().clear().type("120");
    tcpPage.getMonthlyAmountCredit().should("be.visible");
    tcpPage.getMonthlyAmountCredit().click();
    tcpPage.getMonthlyAmountCredit().clear().type("12000", { force: true });
    cy.wait(1000);
    tcpPage.getMaxBalance().should("be.visible");
    tcpPage.getMaxBalance().eq(0).click();
    tcpPage.getMaxBalance().eq(0).type("1000000", { force: true });
    tcpPage.getNextBtn().eq(1).click();
    cy.wait(2000);
    tcpPage.getConfirmBtn().click({ force: true });
    cy.wait(5000);
  }
);
And("Check in My activity", function () {
  tcpPage.getExpand().eq(0).click({ force: true });
  tcpPage.getViewDetailsForResume().click();
});
And("Click on Cancel", function () {
  tcpPage.getCancel().eq(0).click({ force: true });
  cy.wait(1000);
  tcpPage.getYesForCancel().eq(0).click({ force: true });
  cy.wait(1000);
});

//-------View TCP details
And("Click on View Icon", function () {
  tcpPage.getViewIcon().eq(0).click();
  tcpPage.getDetails().eq(0).contains("Profile Name");
  tcpPage.getDetails().eq(1).contains("Description");
  tcpPage.getDetails().eq(2).contains("Currency");
  tcpPage.getDetails().eq(3).contains("Domain");
  tcpPage.getDetails().eq(4).contains("Category");
  tcpPage.getDetails().eq(5).contains("Regulatory Profile");
  tcpPage.getTable().eq(0).should("be.visible");
  tcpPage.getTable().eq(1).should("be.visible");
  cy.wait(1000);
});

And("Assert the Records available", function () {
  tcpPage.getTableHeader().should("be.visible");
  tcpPage.getTableHeader().eq(0).contains(" S.No ");
  tcpPage.getTableHeader().eq(1).contains(" Profile Name ");
  tcpPage.getTableHeader().eq(2).contains(" Domain-Category ");
  tcpPage.getTableHeader().eq(3).contains(" REGULATORY ");
  tcpPage.getTableHeader().eq(5).contains(" CURRENCY ");
  tcpPage.getActionHeader().contains(" ACTION ");
});
And("Search a user and assert the fields", function () {
  tcpPage.getSearch().click();
  cy.readFile(filenameTCP).then((data) => {
    const name = data.CumulativeTcpName;
    tcpPage.getSearch().type(name);
  });
  tcpPage.getSearchIcon().click();
  cy.wait(3000);
});
And("Filter and clear", function () {
  cy.wait(2000);
  tcpPage.getFilter().should("be.visible");
  tcpPage.getFilter().click();
  tcpPage.getOption().click();
  tcpPage.getClear().click();
  tcpPage.getOption().should("not.be.checked");
});
//---------------------------------Edit Tcp
And("Click on Edit", function () {
  tcpPage.getEditDetails().eq(0).click();
  cy.wait(1000);
  tcpPage.getProfileName().click().type(Tcpname, { force: true });
  tcpPage
    .getProfileName()
    .invoke("val")
    .then((text) => {
      const content = text.trim();
      cy.readFile(filenameTCP).then((data) => {
        data.CumulativeTcpName = content;
        cy.writeFile(filenameTCP, data);
      });
    });

  tcpPage
    .getCurrencyDis()
    .should("have.attr", "aria-disabled")
    .and("eq", "true");
  tcpPage.getDomainDis().should("have.attr", "aria-disabled").and("eq", "true");
  tcpPage
    .getCategoryDis()
    .should("have.attr", "aria-disabled")
    .and("eq", "true");
  tcpPage
    .getRegulatoryProfileDis()
    .should("have.attr", "aria-disabled")
    .and("eq", "true");

  tcpPage.getNextForEdit().first().click();
});

And("Modify the Credit and Debit Limits", function () {
  cy.wait(5000);
  //----Yearly Debit Limits
  tcpPage.getYearlyCountDebit().should("be.visible");
  tcpPage.getYearlyCountDebit().click();
  tcpPage
    .getYearlyCountDebit()
    .clear()
    .type(this.data07.CumulativeTransferControlProfile.setYearlyCount)
    .invoke("val")
    .then((val) => {
      cy.readFile(filenameTCP).then((data) => {
        data.YearlyCumulativeCountCredit = val;
        cy.writeFile(filenameTCP, data);
      });
    });
  tcpPage.getYearlyAmountDebit().should("be.visible");
  tcpPage.getYearlyAmountDebit().click();
  tcpPage
    .getYearlyAmountDebit()
    .clear()
    .type(this.data07.CumulativeTransferControlProfile.setYearlyAmount, { force: true })
    .invoke("val")
    .then((val) => {
      cy.readFile(filenameTCP).then((data) => {
        data.YearlyCumulativeAmountCredit = val;
        cy.writeFile(filenameTCP, data);
      });
    });

  tcpPage.getMonthlyCountDebit().should("be.visible");
  tcpPage.getMonthlyCountDebit().click();
  tcpPage
    .getMonthlyCountDebit()
    .clear()
    .type(this.data07.CumulativeTransferControlProfile.setMonthlyCount)
    .invoke("val")
    .then((val) => {
      cy.readFile(filenameTCP).then((data) => {
        data.MonthlyCumulativeCountCredit = val;
        cy.writeFile(filenameTCP, data);
      });
    });

  tcpPage.getMonthlyAmountDebit().should("be.visible");
  tcpPage.getMonthlyAmountDebit().click();
  tcpPage
    .getMonthlyAmountDebit()
    .clear()
    .type(this.data07.CumulativeTransferControlProfile.setMonthlyAmount, { force: true })
    .invoke("val")
    .then((val) => {
      cy.readFile(filenameTCP).then((data) => {
        data.MonthlyCumulativeAmountCredit = val;
        cy.writeFile(filenameTCP, data);
      });
    });

  tcpPage.getWeeklyCountDebit().should("be.visible");
  tcpPage.getWeeklyCountDebit().click();
  tcpPage
    .getWeeklyCountDebit()
    .clear()
    .type(this.data07.CumulativeTransferControlProfile.setWeeklyCount)
    .invoke("val")
    .then((val) => {
      cy.readFile(filenameTCP).then((data) => {
        data.WeeklyCumulativeCountCredit = val;
        cy.writeFile(filenameTCP, data);
      });
    });

  tcpPage.getWeeklyAmountDebit().should("be.visible");
  tcpPage.getWeeklyAmountDebit().click();
  tcpPage
    .getWeeklyAmountDebit()
    .clear()
    .type(this.data07.CumulativeTransferControlProfile.setWeeklyAmount, { force: true })
    .invoke("val")
    .then((val) => {
      cy.readFile(filenameTCP).then((data) => {
        data.WeeklyCumulativeAmountCredit = val;
        cy.writeFile(filenameTCP, data);
      });
    });

  tcpPage.getDailyCountDebit().should("be.visible");
  tcpPage.getDailyCountDebit().click();
  tcpPage
    .getDailyCountDebit()
    .clear()
    .type(this.data07.CumulativeTransferControlProfile.setDailyCount)
    .invoke("val")
    .then((val) => {
      cy.readFile(filenameTCP).then((data) => {
        data.DailyCumulativeCountCredit = val;
        cy.writeFile(filenameTCP, data);
      });
    });

  tcpPage.getDailyAmountDebit().should("be.visible");
  tcpPage.getDailyAmountDebit().click();
  tcpPage
    .getDailyAmountDebit()
    .clear()
    .type(this.data07.CumulativeTransferControlProfile.setDailyAmount, { force: true })
    .invoke("val")
    .then((val) => {
      cy.readFile(filenameTCP).then((data) => {
        data.DailyCumulativeAmountCredit = val;
        cy.writeFile(filenameTCP, data);
      });
    });

  cy.wait(1000);

  //----Yearly Credit Limits
  tcpPage.getYearlyCountCredit().should("be.visible");
  tcpPage.getYearlyCountCredit().click();
  tcpPage
    .getYearlyCountCredit()
    .clear()
    .type("80")
    .invoke("val")
    .then((val) => {
      cy.readFile(filenameTCP).then((data) => {
        data.YearlyCumulativeCountCredit = val;
        cy.writeFile(filenameTCP, data);
      });
    });
  tcpPage.getYearlyAmountCredit().should("be.visible");
  tcpPage.getYearlyAmountCredit().click();
  tcpPage
    .getYearlyAmountCredit()
    .clear()
    .type("8000", { force: true })
    .invoke("val")
    .then((val) => {
      cy.readFile(filenameTCP).then((data) => {
        data.YearlyCumulativeAmountCredit = val;
        cy.writeFile(filenameTCP, data);
      });
    });

  tcpPage.getMonthlyCountCredit().should("be.visible");
  tcpPage.getMonthlyCountCredit().click();
  tcpPage
    .getMonthlyCountCredit()
    .clear()
    .type("70")
    .invoke("val")
    .then((val) => {
      cy.readFile(filenameTCP).then((data) => {
        data.MonthlyCumulativeCountCredit = val;
        cy.writeFile(filenameTCP, data);
      });
    });

  tcpPage.getMonthlyAmountCredit().should("be.visible");
  tcpPage.getMonthlyAmountCredit().click();
  tcpPage
    .getMonthlyAmountCredit()
    .clear()
    .type("7000", { force: true })
    .invoke("val")
    .then((val) => {
      cy.readFile(filenameTCP).then((data) => {
        data.MonthlyCumulativeAmountCredit = val;
        cy.writeFile(filenameTCP, data);
      });
    });

  tcpPage.getWeeklyCountCredit().should("be.visible");
  tcpPage.getWeeklyCountCredit().click();
  tcpPage
    .getWeeklyCountCredit()
    .clear()
    .type("50")
    .invoke("val")
    .then((val) => {
      cy.readFile(filenameTCP).then((data) => {
        data.WeeklyCumulativeCountCredit = val;
        cy.writeFile(filenameTCP, data);
      });
    });

  tcpPage.getWeeklyAmountCredit().should("be.visible");
  tcpPage.getWeeklyAmountCredit().click();
  tcpPage
    .getWeeklyAmountCredit()
    .clear()
    .type("5000", { force: true })
    .invoke("val")
    .then((val) => {
      cy.readFile(filenameTCP).then((data) => {
        data.WeeklyCumulativeAmountCredit = val;
        cy.writeFile(filenameTCP, data);
      });
    });

  tcpPage.getDailyCountCredit().should("be.visible");
  tcpPage.getDailyCountCredit().click();
  tcpPage
    .getDailyCountCredit()
    .clear()
    .type("20")
    .invoke("val")
    .then((val) => {
      cy.readFile(filenameTCP).then((data) => {
        data.DailyCumulativeCountCredit = val;
        cy.writeFile(filenameTCP, data);
      });
    });

  tcpPage.getDailyAmountCredit().should("be.visible");
  tcpPage.getDailyAmountCredit().click();
  tcpPage
    .getDailyAmountCredit()
    .clear()
    .type("2000", { force: true })
    .invoke("val")
    .then((val) => {
      cy.readFile(filenameTCP).then((data) => {
        data.DailyCumulativeAmountCredit = val;
        cy.writeFile(filenameTCP, data);
      });
    });


  cy.wait(1000);
  tcpPage.getMaxBalance().should("be.visible");
  tcpPage.getMaxBalance().eq(0).click().clear();
  tcpPage
    .getMaxBalance()
    .eq(0)
    .type("999999", { force: true })
    .invoke("val")
    .then((val) => {
      cy.readFile(filenameTCP).then((data) => {
        data.MaxAmountCumulative = val;
        cy.writeFile(filenameTCP, data);
      });
    });
  cy.wait(3000)
  //added these steps because of defect
  tcpPage.getBack().eq(0).click();
  tcpPage.getNextForEdit1().eq(0).click();
  cy.wait(2000);
  //
  tcpPage.getNextForEdit1().should("be.visible");
  tcpPage.getNextForEdit1().eq(1).click();
  cy.wait(2000);
  tcpPage.getConfirmBtn().click({ force: true });
  cy.wait(5000);
});
And("Click on Approve", function () {
  tcpPage.getApproveEdit().eq(1).click({ force: true });
  tcpPage.getYesForEdit().click();
});
//---Delete TCp
And("Click on Delete", function () {
  tcpPage.getDeleteDetails().should("be.visible");
  tcpPage.getDeleteDetails().click();
  tcpPage.getYesForDelete().click();
});

//--Clone TCP
And("Click on CloneTCP", function () {
  cy.wait(1000);
  tcpPage.getCloneTCP().should("be.visible");
  tcpPage.getCloneTCP().click();
});

And("Click on Next", function () {
  cy.wait(1000);
  tcpPage.getNextForClone().click();
});

//-----Negative field Validations
Then(
  "Fill in the daily,weekly and monthly credit and debit limits with higher amounts to get error msg",
  function () {
    tcpPage.getDailyCountDebit().should("be.visible");
    tcpPage.getDailyCountDebit().click();
    tcpPage.getDailyCountDebit().clear().type("300000000000000000000000000000");

    tcpPage.getDailyAmountDebit().should("be.visible");
    tcpPage.getDailyAmountDebit().click();
    tcpPage
      .getDailyAmountDebit()
      .clear()
      .wait(100)
      .type("300000000000000000000", { force: true });
    tcpPage.getWeeklyCountDebit().should("be.visible");
    tcpPage.getWeeklyCountDebit().click();
    tcpPage.getWeeklyCountDebit().clear().type("60000000000000000");
    tcpPage.getWeeklyAmountDebit().should("be.visible");
    tcpPage.getWeeklyAmountDebit().click();
    tcpPage
      .getWeeklyAmountDebit()
      .clear()
      .type("6000000000000000000", { force: true });
    tcpPage.getMonthlyCountDebit().should("be.visible");
    tcpPage.getMonthlyCountDebit().click();
    tcpPage.getMonthlyCountDebit().clear().type("120000000000000000");
    tcpPage.getMonthlyAmountDebit().should("be.visible");
    tcpPage.getMonthlyAmountDebit().click();
    tcpPage
      .getMonthlyAmountDebit()
      .clear()
      .type("1200000000000000000", { force: true });
    cy.wait(1000);
    tcpPage.getDailyCountCredit().click();
    tcpPage.getWeeklyCountDebit().should("be.visible");
    tcpPage.getWeeklyCountDebit().click();
    tcpPage.getWeeklyCountDebit().clear().type("60000000000000000");
    tcpPage.getWeeklyAmountDebit().should("be.visible");
    tcpPage.getWeeklyAmountDebit().click();
    tcpPage
      .getWeeklyAmountDebit()
      .clear()
      .type("6000000000000000000", { force: true });
    tcpPage.getMonthlyCountDebit().should("be.visible");
    tcpPage.getMonthlyCountDebit().click();
    tcpPage.getMonthlyCountDebit().clear().type("120000000000000000");
    tcpPage.getMonthlyAmountDebit().should("be.visible");
    tcpPage.getMonthlyAmountDebit().click();
    tcpPage
      .getMonthlyAmountDebit()
      .clear()
      .type("1200000000000000000", { force: true });
    cy.wait(1000);
    tcpPage.getDailyCountCredit().click();

    tcpPage.getDailyCountCredit().should("be.visible");
    tcpPage.getDailyCountCredit().click();

    tcpPage.getDailyCountCredit().clear().type("30000000000000000000000");
    tcpPage.getDailyCountCredit().clear().type("30000000000000000000000");
    tcpPage.getDailyAmountCredit().should("be.visible");
    tcpPage.getDailyAmountCredit().click();
    tcpPage
      .getDailyAmountCredit()
      .clear()
      .type("3000000000000000000", { force: true });
    tcpPage.getWeeklyCountCredit().should("be.visible");
    tcpPage.getWeeklyCountCredit().click();
    tcpPage.getWeeklyCountCredit().clear().type("600000000000000000");
    tcpPage.getWeeklyAmountCredit().should("be.visible");
    tcpPage.getWeeklyAmountCredit().click();
    tcpPage
      .getWeeklyAmountCredit()
      .clear()
      .type("60000000000000000000", { force: true });
    tcpPage.getMonthlyCountCredit().should("be.visible");
    tcpPage.getMonthlyCountCredit().click();
    tcpPage.getMonthlyCountCredit().clear().type("120000000000000000000");
    tcpPage.getMonthlyAmountCredit().should("be.visible");
    tcpPage.getMonthlyAmountCredit().click();
    tcpPage
      .getMonthlyAmountCredit()
      .clear()
      .type("12000000000000000000000000", { force: true });
    cy.wait(1000);
    tcpPage.getMaxBalance().should("be.visible");
    tcpPage.getMaxBalance().eq(0).click();
    tcpPage
      .getDailyCountDebitError()
      .contains(" Count should be in range (1-9999999999) ");
    tcpPage
      .getDailyAmountDebitError()
      .contains(" Amount should be in range (1-9999999999) ");
    tcpPage
      .getWeeklyCountDebitError()
      .contains(" Count should be in range (1-9999999999) ");
    tcpPage
      .getWeeklyAmountDebitError()
      .contains(" Amount should be in range (1-9999999999) ");
    tcpPage
      .getMonthlyCountDebitError()
      .contains(" Count should be in range (1-9999999999) ");
    tcpPage
      .getMonthlyAmountDebitError()
      .contains(" Amount should be in range (1-9999999999) ");

    tcpPage
      .getDailyCountCreditError()
      .contains(" Count should be in range (1-9999999999) ");
    tcpPage
      .getDailyAmountCreditError()
      .contains(" Amount should be in range (1-9999999999) ");
    tcpPage
      .getWeeklyCountCreditError()
      .contains(" Count should be in range (1-9999999999) ");
    tcpPage
      .getWeeklyAmountCreditError()
      .contains(" Amount should be in range (1-9999999999) ");
    tcpPage
      .getMonthlyCountCreditError()
      .contains(" Count should be in range (1-9999999999) ");
    tcpPage
      .getMonthlyAmountCreditError()
      .contains(" Amount should be in range (1-9999999999) ");
    //.type("3000000000000000000", { force: true });
    tcpPage.getWeeklyCountCredit().should("be.visible");
    tcpPage.getWeeklyCountCredit().click();
    tcpPage.getWeeklyCountCredit().clear().type("600000000000000000");
    tcpPage.getWeeklyAmountCredit().should("be.visible");
    tcpPage.getWeeklyAmountCredit().click();
    tcpPage
      .getWeeklyAmountCredit()
      .clear()
      .type("60000000000000000000", { force: true });
    tcpPage.getMonthlyCountCredit().should("be.visible");
    tcpPage.getMonthlyCountCredit().click();
    tcpPage.getMonthlyCountCredit().clear().type("120000000000000000000");
    tcpPage.getMonthlyAmountCredit().should("be.visible");
    tcpPage.getMonthlyAmountCredit().click();
    tcpPage
      .getMonthlyAmountCredit()
      .clear()
      .type("12000000000000000000000000", { force: true });
    cy.wait(1000);
    tcpPage.getMaxBalance().should("be.visible");
    tcpPage.getMaxBalance().eq(0).click();
    tcpPage
      .getDailyCountDebitError()
      .contains(" Count should be in range (1-9999999999) ");
    tcpPage
      .getDailyAmountDebitError()
      .contains(" Amount should be in range (1-9999999999) ");
    tcpPage
      .getWeeklyCountDebitError()
      .contains(" Count should be in range (1-9999999999) ");
    tcpPage
      .getWeeklyAmountDebitError()
      .contains(" Amount should be in range (1-9999999999) ");
    tcpPage
      .getMonthlyCountDebitError()
      .contains(" Count should be in range (1-9999999999) ");
    tcpPage
      .getMonthlyAmountDebitError()
      .contains(" Amount should be in range (1-9999999999) ");

    tcpPage
      .getDailyCountCreditError()
      .contains(" Count should be in range (1-9999999999) ");
    tcpPage
      .getDailyAmountCreditError()
      .contains(" Amount should be in range (1-9999999999) ");
    tcpPage
      .getWeeklyCountCreditError()
      .contains(" Count should be in range (1-9999999999) ");
    tcpPage
      .getWeeklyAmountCreditError()
      .contains(" Amount should be in range (1-9999999999) ");
    tcpPage
      .getMonthlyCountCreditError()
      .contains(" Count should be in range (1-9999999999) ");
    tcpPage
      .getMonthlyAmountCreditError()
      .contains(" Amount should be in range (1-9999999999) ");
  }
);
Then("Fill out the details and assert the message", function () {
  tcpPage.getProfileName().click();
  cy.readFile(filenameTCP).then((data) => {
    const name = data.CumulativeTcpName;
    tcpPage.getProfileName().type(name);
  });
  tcpPage.getCurrency().click({ force: true });
  tcpPage.getUniqueError().contains(" Profile name already exists ");
});
Then("Fill details for error msg", function () {
  tcpPage.getProfileName().should("be.visible");
  tcpPage.getProfileName().click().clear().type("Weather1234", { force: true });

  tcpPage.getCurrency().should("be.visible");
  cy.wait(2000);

  tcpPage.getCurrency().click({ force: true });
  cy.wait(1000);
  tcpPage.setCurrency().then((options) => {
    const randomIndex = Math.floor(Math.random() * options.length);
    cy.wrap(options[randomIndex]).click({ force: true });
  });
  cy.wait(1000);
  tcpPage.getDomain().should("be.visible");

  tcpPage.getDomain().click({ force: true });

  tcpPage
    .setDomain()
    .contains(this.data07.CumulativeTransferControlProfile.setDomain)
    .click({ force: true });

  tcpPage.getCategory().should("be.visible");
  tcpPage.getCategory().click({ force: true });
  tcpPage.setCategory().then((options) => {
    const randomIndex = Math.floor(Math.random() * options.length);
    cy.wrap(options[randomIndex]).click({ force: true });
  });
  tcpPage.getRegulatoryProfile().should("be.visible");
  tcpPage.getRegulatoryProfile().click();
  tcpPage.setRegulatoryProfile().then((options) => {
    const randomIndex = Math.floor(Math.random() * options.length);
    cy.wrap(options[randomIndex]).click({ force: true });
  });
  tcpPage.getNextBtn().first().click();
});
Then("Fill in details for all field validations", function () {
  tcpPage.getProfileName().should("be.visible");
  tcpPage
    .getProfileName()
    .click()
    .clear()
    .type(getRandomName1(), { force: true });

  tcpPage.getCurrency().should("be.visible");
  cy.wait(2000);

  tcpPage.getCurrency().click({ force: true });
  cy.wait(1000);
  tcpPage.setCurrency().then((options) => {
    const randomIndex = Math.floor(Math.random() * options.length);
    cy.wrap(options[randomIndex]).click({ force: true });
  });
  cy.wait(1000);
  tcpPage.getDomain().should("be.visible");

  tcpPage.getDomain().click({ force: true });

  tcpPage
    .setDomain()
    .contains(this.data07.CumulativeTransferControlProfile.setDomain)
    .click({ force: true });

  tcpPage.getCategory().should("be.visible");
  tcpPage.getCategory().click({ force: true });
  tcpPage.setCategory().then((options) => {
    const randomIndex = Math.floor(Math.random() * options.length);
    cy.wrap(options[randomIndex]).click({ force: true });
  });
  tcpPage.getRegulatoryProfile().should("be.visible");
  tcpPage.getRegulatoryProfile().click();
  tcpPage.setRegulatoryProfile().then((options) => {
    const randomIndex = Math.floor(Math.random() * options.length);
    cy.wrap(options[randomIndex]).click({ force: true });
  });
  tcpPage.getNextBtn().first().click();
});
Then(
  "Fill in Description and Profile Name for negative field validation",
  function () {
    tcpPage.getProfileName().click().clear().type(NegTcp, { force: true });
    tcpPage
      .getProfileName()
      .invoke("val")
      .then((text) => {
        const characterCount = text.length;
        cy.log("Character count : ", characterCount);
        expect(characterCount).to.eq(20);
      });
    tcpPage.getDescriptionNeg().click().clear().type(NegTcp, { force: true });
    tcpPage
      .getDescriptionNeg()
      .invoke("val")
      .then((text) => {
        const characterCount = text.length;
        cy.log("Character count : ", characterCount);
        expect(characterCount).to.eq(50);
      });
  }
);
Then("Decimal Point values are allowed in amount fields", function () {
  tcpPage.getDailyCountDebit().should("be.visible");
  tcpPage.getDailyCountDebit().click();
  tcpPage.getDailyCountDebit().clear().type("30");

  tcpPage.getDailyAmountDebit().should("be.visible");
  tcpPage.getDailyAmountDebit().click();
  tcpPage
    .getDailyAmountDebit()
    .clear()
    .type(this.data07.CumulativeTransferControlProfile.DailyAmountDebit);
  tcpPage.getWeeklyCountDebit().should("be.visible");
  tcpPage.getWeeklyCountDebit().click();
  tcpPage.getWeeklyCountDebit().clear().type("60");
  tcpPage.getWeeklyAmountDebit().should("be.visible");
  tcpPage.getWeeklyAmountDebit().click();
  tcpPage
    .getWeeklyAmountDebit()
    .clear()
    .type(this.data07.CumulativeTransferControlProfile.WeeklyAmountDebit);
  tcpPage.getMonthlyCountDebit().should("be.visible");
  tcpPage.getMonthlyCountDebit().click();
  tcpPage.getMonthlyCountDebit().clear().type("120");
  tcpPage.getMonthlyAmountDebit().should("be.visible");
  tcpPage.getMonthlyAmountDebit().click();
  tcpPage
    .getMonthlyAmountDebit()
    .clear()
    .type(this.data07.CumulativeTransferControlProfile.MonthlyAmountDebit);
  cy.wait(1000);
  tcpPage.getDailyCountCredit().should("be.visible");
  tcpPage.getDailyCountCredit().click();
  tcpPage.getDailyCountCredit().clear().type("30");
  tcpPage.getDailyAmountCredit().should("be.visible");
  tcpPage.getDailyAmountCredit().click();
  tcpPage
    .getDailyAmountCredit()
    .clear()
    .type(this.data07.CumulativeTransferControlProfile.DailyAmountCredit);
  tcpPage.getWeeklyCountCredit().should("be.visible");
  tcpPage.getWeeklyCountCredit().click();
  tcpPage.getWeeklyCountCredit().clear().type("60");
  tcpPage.getWeeklyAmountCredit().should("be.visible");
  tcpPage.getWeeklyAmountCredit().click();
  tcpPage
    .getWeeklyAmountCredit()
    .clear()
    .type(this.data07.CumulativeTransferControlProfile.WeeklyAmountCredit);
  tcpPage.getMonthlyCountCredit().should("be.visible");
  tcpPage.getMonthlyCountCredit().click();
  tcpPage.getMonthlyCountCredit().clear().type("120");
  tcpPage.getMonthlyAmountCredit().should("be.visible");
  tcpPage.getMonthlyAmountCredit().click();
  tcpPage
    .getMonthlyAmountCredit()
    .clear()
    .type(this.data07.CumulativeTransferControlProfile.MonthlyAmountCredit);
});

Then(
  "Put negative values for count fields in credit and debit limits",
  function () {
    tcpPage.getDailyCountDebit().should("be.visible");
    tcpPage.getDailyCountDebit().click();
    tcpPage.getDailyCountDebit().clear().type("-30");

    tcpPage.getDailyAmountDebit().should("be.visible");
    tcpPage.getDailyAmountDebit().click();
    tcpPage
      .getDailyAmountDebit()
      .clear()
      .type(this.data07.CumulativeTransferControlProfile.DailyAmountDebit);
    tcpPage.getWeeklyCountDebit().should("be.visible");
    tcpPage.getWeeklyCountDebit().click();
    tcpPage.getWeeklyCountDebit().clear().type("-60");
    tcpPage.getWeeklyAmountDebit().should("be.visible");
    tcpPage.getWeeklyAmountDebit().click();
    tcpPage
      .getWeeklyAmountDebit()
      .clear()
      .type(this.data07.CumulativeTransferControlProfile.WeeklyAmountDebit);
    tcpPage.getMonthlyCountDebit().should("be.visible");
    tcpPage.getMonthlyCountDebit().click();
    tcpPage.getMonthlyCountDebit().clear().type("-120");
    tcpPage.getMonthlyAmountDebit().should("be.visible");
    tcpPage.getMonthlyAmountDebit().click();
    tcpPage
      .getMonthlyAmountDebit()
      .clear()
      .type(this.data07.CumulativeTransferControlProfile.MonthlyAmountDebit);
    cy.wait(1000);
    tcpPage.getDailyCountCredit().should("be.visible");
    tcpPage.getDailyCountCredit().click();
    tcpPage.getDailyCountCredit().clear().type("-30");
    tcpPage.getDailyAmountCredit().should("be.visible");
    tcpPage.getDailyAmountCredit().click();
    tcpPage
      .getDailyAmountCredit()
      .clear()
      .type(this.data07.CumulativeTransferControlProfile.DailyAmountCredit);
    tcpPage.getWeeklyCountCredit().should("be.visible");
    tcpPage.getWeeklyCountCredit().click();
    tcpPage.getWeeklyCountCredit().clear().type("-60");
    tcpPage.getWeeklyAmountCredit().should("be.visible");
    tcpPage.getWeeklyAmountCredit().click();
    tcpPage
      .getWeeklyAmountCredit()
      .clear()
      .type(this.data07.CumulativeTransferControlProfile.WeeklyAmountCredit);
    tcpPage.getMonthlyCountCredit().should("be.visible");
    tcpPage.getMonthlyCountCredit().click();
    tcpPage.getMonthlyCountCredit().clear().type("-120");
    tcpPage.getMonthlyAmountCredit().should("be.visible");
    tcpPage.getMonthlyAmountCredit().click();
    tcpPage
      .getMonthlyAmountCredit()
      .clear()
      .type(this.data07.CumulativeTransferControlProfile.MonthlyAmountCredit);
  }
);
Then(
  "Put negative value for amount fields in debit and credit limits",
  function () {
    tcpPage.getDailyCountDebit().should("be.visible");
    tcpPage.getDailyCountDebit().click();
    tcpPage.getDailyCountDebit().clear().type("30");

    tcpPage.getDailyAmountDebit().should("be.visible");
    tcpPage.getDailyAmountDebit().click();
    tcpPage
      .getDailyAmountDebit()
      .clear()
      .type(this.data07.CumulativeTransferControlProfile.DailyAmountDebit1);
    tcpPage.getWeeklyCountDebit().should("be.visible");
    tcpPage.getWeeklyCountDebit().click();
    tcpPage.getWeeklyCountDebit().clear().type("60");
    tcpPage.getWeeklyAmountDebit().should("be.visible");
    tcpPage.getWeeklyAmountDebit().click();
    tcpPage
      .getWeeklyAmountDebit()
      .clear()
      .type(this.data07.CumulativeTransferControlProfile.WeeklyAmountDebit1);
    tcpPage.getMonthlyCountDebit().should("be.visible");
    tcpPage.getMonthlyCountDebit().click();
    tcpPage.getMonthlyCountDebit().clear().type("120");
    tcpPage.getMonthlyAmountDebit().should("be.visible");
    tcpPage.getMonthlyAmountDebit().click();
    tcpPage
      .getMonthlyAmountDebit()
      .clear()
      .type(this.data07.CumulativeTransferControlProfile.MonthlyAmountDebit1);
    cy.wait(1000);
    tcpPage.getDailyCountCredit().should("be.visible");
    tcpPage.getDailyCountCredit().click();
    tcpPage.getDailyCountCredit().clear().type("30");
    tcpPage.getDailyAmountCredit().should("be.visible");
    tcpPage.getDailyAmountCredit().click();
    tcpPage
      .getDailyAmountCredit()
      .clear()
      .type(this.data07.CumulativeTransferControlProfile.DailyAmountCredit1);
    tcpPage.getWeeklyCountCredit().should("be.visible");
    tcpPage.getWeeklyCountCredit().click();
    tcpPage.getWeeklyCountCredit().clear().type("60");
    tcpPage.getWeeklyAmountCredit().should("be.visible");
    tcpPage.getWeeklyAmountCredit().click();
    tcpPage
      .getWeeklyAmountCredit()
      .clear()
      .type(this.data07.CumulativeTransferControlProfile.WeeklyAmountCredit1);
    tcpPage.getMonthlyCountCredit().should("be.visible");
    tcpPage.getMonthlyCountCredit().click();
    tcpPage.getMonthlyCountCredit().clear().type("120");
    tcpPage.getMonthlyAmountCredit().should("be.visible");
    tcpPage.getMonthlyAmountCredit().click();
    tcpPage
      .getMonthlyAmountCredit()
      .clear()
      .type(this.data07.CumulativeTransferControlProfile.MonthlyAmountCredit1);
  }
);
Then("Check for the negative value in count fields assertion", function () {
  tcpPage
    .getDailyCountDebit()
    .invoke("val")
    .then((value) => {
      const value1 = parseInt(value);
      cy.log(value1);
      expect(value1).be.greaterThan(0);
    });
  tcpPage
    .getMonthlyCountDebit()
    .invoke("val")
    .then((value) => {
      const value1 = parseInt(value);
      cy.log(value1);
      expect(value1).be.greaterThan(0);
    });
  tcpPage
    .getWeeklyCountDebit()
    .invoke("val")
    .then((value) => {
      const value1 = parseInt(value);
      cy.log(value1);
      expect(value1).be.greaterThan(0);
    });
  tcpPage
    .getDailyCountCredit()
    .invoke("val")
    .then((value) => {
      const value1 = parseInt(value);
      cy.log(value1);
      expect(value1).be.greaterThan(0);
    });
  tcpPage
    .getWeeklyCountCredit()
    .invoke("val")
    .then((value) => {
      const value1 = parseInt(value);
      cy.log(value1);
      expect(value1).be.greaterThan(0);
    });
  tcpPage
    .getMonthlyCountCredit()
    .invoke("val")
    .then((value) => {
      const value1 = parseInt(value);
      cy.log(value1);
      expect(value1).be.greaterThan(0);
    });
});

Then("Check for negative values in amount fields", function () {
  tcpPage
    .getDailyAmountDebit()
    .invoke("val")
    .then((value) => {
      const value1 = parseInt(value);
      cy.log(value1);
      expect(value1).be.greaterThan(0);
    });
  tcpPage
    .getMonthlyAmountDebit()
    .invoke("val")
    .then((value) => {
      const value1 = parseInt(value);
      cy.log(value1);
      expect(value1).be.greaterThan(0);
    });
  tcpPage
    .getWeeklyAmountDebit()
    .invoke("val")
    .then((value) => {
      const value1 = parseInt(value);
      cy.log(value1);
      expect(value1).be.greaterThan(0);
    });
  tcpPage
    .getDailyAmountCredit()
    .invoke("val")
    .then((value) => {
      const value1 = parseInt(value);
      cy.log(value1);
      expect(value1).be.greaterThan(0);
    });
  tcpPage
    .getWeeklyAmountCredit()
    .invoke("val")
    .then((value) => {
      const value1 = parseInt(value);
      cy.log(value1);
      expect(value1).be.greaterThan(0);
    });
  tcpPage
    .getMonthlyAmountCredit()
    .invoke("val")
    .then((value) => {
      const value1 = parseInt(value);
      cy.log(value1);
      expect(value1).be.greaterThan(0);
    });
});

Then(
  "Check if count and amount fields dont contain special characters",
  function () {
    tcpPage.getDailyCountDebit().should("be.visible");
    tcpPage.getDailyCountDebit().click();
    tcpPage.getDailyCountDebit().clear().type("@30");

    tcpPage.getDailyAmountDebit().should("be.visible");
    tcpPage.getDailyAmountDebit().click();
    tcpPage
      .getDailyAmountDebit()
      .clear()
      .type(this.data07.CumulativeTransferControlProfile.DailyAmountDebit2);
    tcpPage.getWeeklyCountDebit().should("be.visible");
    tcpPage.getWeeklyCountDebit().click();
    tcpPage.getWeeklyCountDebit().clear().type("@60");
    tcpPage.getWeeklyAmountDebit().should("be.visible");
    tcpPage.getWeeklyAmountDebit().click();
    tcpPage
      .getWeeklyAmountDebit()
      .clear()
      .type(this.data07.CumulativeTransferControlProfile.WeeklyAmountDebit2);
    tcpPage.getMonthlyCountDebit().should("be.visible");
    tcpPage.getMonthlyCountDebit().click();
    tcpPage.getMonthlyCountDebit().clear().type("@120");
    tcpPage.getMonthlyAmountDebit().should("be.visible");
    tcpPage.getMonthlyAmountDebit().click();
    tcpPage
      .getMonthlyAmountDebit()
      .clear()
      .type(this.data07.CumulativeTransferControlProfile.MonthlyAmountDebit2);
    cy.wait(1000);
    tcpPage.getDailyCountCredit().should("be.visible");
    tcpPage.getDailyCountCredit().click();
    tcpPage.getDailyCountCredit().clear().type("@30");
    tcpPage.getDailyAmountCredit().should("be.visible");
    tcpPage.getDailyAmountCredit().click();
    tcpPage
      .getDailyAmountCredit()
      .clear()
      .type(this.data07.CumulativeTransferControlProfile.DailyAmountCredit2);
    tcpPage.getWeeklyCountCredit().should("be.visible");
    tcpPage.getWeeklyCountCredit().click();
    tcpPage.getWeeklyCountCredit().clear().type("@60");
    tcpPage.getWeeklyAmountCredit().should("be.visible");
    tcpPage.getWeeklyAmountCredit().click();
    tcpPage
      .getWeeklyAmountCredit()
      .clear()
      .type(this.data07.CumulativeTransferControlProfile.WeeklyAmountCredit2);
    tcpPage.getMonthlyCountCredit().should("be.visible");
    tcpPage.getMonthlyCountCredit().click();
    tcpPage.getMonthlyCountCredit().clear().type("@120");
    tcpPage.getMonthlyAmountCredit().should("be.visible");
    tcpPage.getMonthlyAmountCredit().click();
    tcpPage
      .getMonthlyAmountCredit()
      .clear()
      .type(this.data07.CumulativeTransferControlProfile.MonthlyAmountCredit2);

    cy.wait(1000);

    tcpPage
      .getDailyCountDebit()
      .invoke("val")
      .then((value) => {
        const value1 = parseInt(value);
        cy.log(value1);
        expect(value1).be.greaterThan(0);
      });
    tcpPage
      .getMonthlyCountDebit()
      .invoke("val")
      .then((value) => {
        const value1 = parseInt(value);
        cy.log(value1);
        expect(value1).be.greaterThan(0);
      });
    tcpPage
      .getWeeklyCountDebit()
      .invoke("val")
      .then((value) => {
        const value1 = parseInt(value);
        cy.log(value1);
        expect(value1).be.greaterThan(0);
      });
    tcpPage
      .getDailyCountCredit()
      .invoke("val")
      .then((value) => {
        const value1 = parseInt(value);
        cy.log(value1);
        expect(value1).be.greaterThan(0);
      });
    tcpPage
      .getWeeklyCountCredit()
      .invoke("val")
      .then((value) => {
        const value1 = parseInt(value);
        cy.log(value1);
        expect(value1).be.greaterThan(0);
      });
    tcpPage
      .getMonthlyCountCredit()
      .invoke("val")
      .then((value) => {
        const value1 = parseInt(value);
        cy.log(value1);
        expect(value1).be.greaterThan(0);
      });

    tcpPage
      .getDailyAmountDebit()
      .invoke("val")
      .then((value) => {
        const value1 = parseInt(value);
        cy.log(value1);
        expect(value1).be.greaterThan(0);
      });
    tcpPage
      .getMonthlyAmountDebit()
      .invoke("val")
      .then((value) => {
        const value1 = parseInt(value);
        cy.log(value1);
        expect(value1).be.greaterThan(0);
      });
    tcpPage
      .getWeeklyAmountDebit()
      .invoke("val")
      .then((value) => {
        const value1 = parseInt(value);
        cy.log(value1);
        expect(value1).be.greaterThan(0);
      });
    tcpPage
      .getDailyAmountCredit()
      .invoke("val")
      .then((value) => {
        const value1 = parseInt(value);
        cy.log(value1);
        expect(value1).be.greaterThan(0);
      });
    tcpPage
      .getWeeklyAmountCredit()
      .invoke("val")
      .then((value) => {
        const value1 = parseInt(value);
        cy.log(value1);
        expect(value1).be.greaterThan(0);
      });
    tcpPage
      .getMonthlyAmountCredit()
      .invoke("val")
      .then((value) => {
        const value1 = parseInt(value);
        cy.log(value1);
        expect(value1).be.greaterThan(0);
      });
  }
);
