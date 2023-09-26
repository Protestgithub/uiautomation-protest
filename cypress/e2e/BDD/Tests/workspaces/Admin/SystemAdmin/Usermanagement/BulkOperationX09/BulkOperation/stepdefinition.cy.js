/// <reference types="Cypress" />
/// <reference types = "Cypress-iframe"/>

import "cypress-iframe";
import {
  Given,
  When,
  Then,
  And,
  Before,
} from "@badeball/cypress-cucumber-preprocessor";
import homePage from "../../../../../../../../../support/pageObjects/homePage";
import "../../../../../../../../../support/Utils/generic";
import approvals from "../../../../../../../../../support/pageObjects/UserManagement/approvals";
import BulkOperations from "../../../../../../../../../support/pageObjects/BulkOperations/BulkOperations";

const welcomePage = new homePage();
const approvalPage = new approvals();
const BulkOperationPage = new BulkOperations();
var LoginId;
//var LogId1

let BulkOperationData = "cypress/fixtures/userData/BulkOperationData.json";
let BulkStaticData = "cypress/fixtures/BulkOperationData.json";
//let BulkModifyData = 'cypress/fixtures/BulkModifyData.json'
const uuid1 = () => Cypress._.random(1e8);
var name;
function getRandomName() {
  name = "";
  var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
  for (var i = 0; i < 5; i++)
    name += possible.charAt(Math.floor(Math.random() * possible.length));
  return name;
}

When("Navigate to Bulk Operations", function () {
  BulkOperationPage.getUserInfo().click({ force: true });
  BulkOperationPage.getUserName()
    .invoke("text")
    .then((Uname) => {
      const UserName = Uname;
      cy.log(UserName);
      cy.readFile(BulkOperationData).then((data) => {
        data.UserName1 = UserName;
        cy.writeFile(BulkOperationData, data);
      });
    }); //Copy Initiated SystemAdmin name

  BulkOperationPage.getBulkOperationsFromMenu().scrollIntoView();
  BulkOperationPage.getBulkOperationsFromMenu().click({ force: true });
  //cy.wait(2000)
  BulkOperationPage.getInitiateBulkoperation().contains(
    this.data90.InitiateBulkPage
  );
});

And("Select Module and Service type to Proceed", function () {
  BulkOperationPage.getSelectModule().click({ force: true });
  BulkOperationPage.getBulkUserManagement().click({ force: true }); //("Bulk User Management")
  //cy.wait(2000)
  BulkOperationPage.getSelectServiceType().click({ force: true });
  BulkOperationPage.getBulkUserManagement().eq(1).click({ force: true }); //.click({force:true})//("Register")
  BulkOperationPage.getInitiateProceedBtn().click({ force: true });
});

And("Select User type as Customer", function () {
  BulkOperationPage.getUserTypeCustomer().click({ force: true });
  BulkOperationPage.getUserRoleCustomer().click({ force: true });
  BulkOperationPage.getStepperDownloadTemplate().contains("Download Template");
});

And("Download a blank .csv file for Multiple Users template1", function () {
  cy.task("downloads", "cypress/fixtures/templates").then((before) => {
    // do the download
    //cy.wait(3000)

    BulkOperationPage.getMultUserDownloadTemplate().click({ force: true });
    cy.wait(5000);

    cy.task("downloads", "cypress/fixtures/templates").then((after) => {
      expect(after.length).to.be.eq(before.length + 1);
      newFile = after.filter((file) => !before.includes(file))[0];
      cy.log(newFile);

      const downloadedFile = "cypress/fixtures/templates/" + newFile;

      cy.readFile(BulkOperationData).then((data) => {
        data.DownloadedFileName = newFile;
        const JsonFileDownload = newFile.split(".")[0];
        data.FileNameOnly = JsonFileDownload;
        cy.writeFile(BulkOperationData, data);
      });

      cy.csvToJSONBulkOperation(
        downloadedFile,
        "cypress/fixtures/BulkData/BULK_REGISTRATION-template.json"
      );

      cy.readFile(
        "cypress/fixtures/BulkData/BULK_REGISTRATION-template.json"
      ).then((data) => {
        var mobileNo = "77" + uuid1();
        var mobileNo1 = "77" + uuid1();
        var kycNo = getRandomName() + uuid1();
        LoginId = "SUB" + mobileNo;

        cy.readFile(BulkOperationData).then((data) => {
          data.SaveLoginId = LoginId;
          cy.writeFile(BulkOperationData, data);
        });

        (data["Title"] = "PR_MR"),
          (data["First Name*"] = getRandomName()),
          (data["Last Name*"] = getRandomName()),
          (data["Preferred Language*"] = "en"),
          (data["Customer Information File"] = mobileNo),
          (data["Login ID*"] = LoginId),
          (data["Date of Birth"] = "1998-11-10"),
          (data["Email Address"] = LoginId + "@gmail.com"),
          (data["Mobile Number*"] = mobileNo1),
          (data["Address Line 1*"] = "abc street"),
          (data["Address Line 2"] = "abc street"),
          (data["Country Name*"] = "IN"),
          (data["State Name*"] = "Odisha"),
          (data["City Name*"] = "Rourkela"),
          (data["KYC Id Type*"] = "PASSPORT"),
          (data["KYC Id Number*"] = kycNo),
          (data["KYC Grace Period (Days)*"] = "10"),
          (data["Country Where KYC ID Issued"] = "IN"),
          (data["KYC ID Issued On"] = "2016-02-03"),
          (data["KYC ID Valid From"] = "2016-02-03"),
          (data["KYC ID Valid Till"] = "2030-11-14"),
          (data["Make this as Primary KYC*"] = "Yes"),
          (data["Security Profile*"] = "SP.103"),
          (data["Authorisation Profile*"] = "SubsDefault"),
          (data["Regulatory Profile*"] = "FULL_KYC"),
          (data["Marketing Profile*"] = "SUBSDefaultMP");

        cy.writeFile(
          "cypress/fixtures/BulkData/BULK_REGISTRATION-template.json",
          data
        );
      });

      cy.jsonToCSVBulkOperation(
        "cypress/fixtures/BulkData/BULK_REGISTRATION-template.json",
        downloadedFile
      );
    });
  });
});

And("Upload the downloaded file for bulk user creation1", function () {
  BulkOperationPage.getStepperUploadFile().contains("Upload File");

  cy.readFile(BulkOperationData).then((data) => {
    var DownloadedCSVFile = data.DownloadedFileName;
    cy.log(DownloadedCSVFile);
    BulkOperationPage.getUploadLink()
      .eq(0)
      .attachFile("templates/" + DownloadedCSVFile);
  });
  cy.wait(3000);
  BulkOperationPage.getUploadFileIcon().contains("Size");
});

And("Proceed the Uploaded file and Assert the response1", function () {
  BulkOperationPage.getProceedBtn().click({ force: true });
  // cy.wait(15000)
  //BulkOperationPage.getConfirmBtn().should('be.visible',{timeout:30000})
  BulkOperationPage.getRecordsStatusContainer().should("be.visible");
  BulkOperationPage.getRecordsStatus().eq(0).should("exist"); //contain('Total number of records')
  BulkOperationPage.getRecordsStatus().eq(1).should("be.visible"); //contain('Uploaded Successfully')
});

And("Confirm the Register and Assert the success message", function () {
  //cy.intercept('GET','/mobiquitypay/v1/ums/bulk/summary*').as('wait')
  BulkOperationPage.getConfirmBtn().should("be.visible", { timeout: 30000 }); //.click({ force: true })
  cy.wait(17000);
  //cy.wait('@wait',{timeout:30000})
  BulkOperationPage.getConfirmBtn().click({ force: true }, { timeout: 30000 });
  //BulkOperationPage.getConfirmBtn().click({ force: true },{timeout:30000})
  BulkOperationPage.getSuccessMsg().contains("successfully");
  BulkOperationPage.getSuccessDone().click({ force: true });
  //assert success msg
});

//---------------Approval----------

When(
  "Navigate to Approvals and filter by Submitted status for SystemAdmin BulkOperation",
  function () {
    // cy.intercept('/mobiquitypay/v1/ums/workspace-categories?workspaceId=').as('all')
    welcomePage.getApprovaltab().click();
    cy.wait(2000);
    //  welcomePage.getApprovalButtonTab().click()
    cy.waitUntil(() => {
      return cy.iframe().find("h4.text-secondary").contains("Approvals");
    });
    //cy.checkAPI('/mobiquitypay/v1/ums/workspace-categories?workspaceId=')
    //-----------------------Added waituntil--------------------------------------------------------------
    cy.waitUntil(() => {
      return cy.iframe().find(".mat-button-wrapper > span").contains("Filters");
    });
    //------------------------------------Filter the data--------------------------------------------------
    //pageLogin.getiFrame()
    approvalPage.getFilter().click({ force: true });
    cy.wait(2000);
    //approvalPage.getAddUserCheckBox().click({ force: true })
    approvalPage.getSubmittedCheckBox().click({ force: true });
    // cy.intercept('/mobiquitypay/v2/workflow_management/workflow/pending_records/MasterAdminChecker/').as('all')
    approvalPage.getApplyFilter().click({ force: true });
    // cy.checkAPI('/mobiquitypay/v2/workflow_management/workflow/pending_records/MasterAdminChecker/')
  }
);
And("User click on System admin submitted Bulk user data", function () {
  //approvalPage.getCurrentDateRowData().eq(0).click({ force: true })
  //  cy.getSysAdminApproval()
  BulkOperationPage.getSubmittedByUser()
    .eq(0)
    .invoke("text")
    .then((Uname) => {
      const UserNameApproval = Uname.trim();
      cy.log(UserNameApproval);
      cy.readFile(BulkOperationData).then((data) => {
        data.UserName2 = UserNameApproval;
        const UName2 = UserNameApproval;
        const UName1 = data.UserName1;
        // cy.writeFile(BulkOperationData,data)
        // })
        // if(this.data90.UserName2==this.data90.UserName1){
        if (UName2 == UName1) {
          cy.log("correct");
          BulkOperationPage.getViewDetailsOfInitiated()
            .eq(0)
            .click({ force: true });
          BulkOperationPage.getBulkId()
            .eq(0)
            .invoke("text")
            .then((id1) => {
              const id = id1.trim();
              cy.log(id);
              cy.readFile(BulkOperationData).then((data) => {
                data.BulkIdApproval = id;
                cy.writeFile(BulkOperationData, data);
              });
              BulkOperationPage.getBulkApproval().click(
                { force: true },
                { timeout: 30000 }
              );
            });
        } else {
          cy.log("not correct");
          BulkOperationPage.getViewDetailsOfInitiated()
            .eq(1)
            .click({ force: true });
          BulkOperationPage.getBulkId()
            .eq(0)
            .invoke("text")
            .then((id1) => {
              const id = id1.trim();
              cy.log(id);
              cy.readFile(BulkOperationData).then((data) => {
                data.BulkIdApproval = id;
                cy.writeFile(BulkOperationData, data);
              });
              BulkOperationPage.getBulkApproval().click(
                { force: true },
                { timeout: 30000 }
              );
            });
        }
        cy.writeFile(BulkOperationData, data);
      });
    });
});

Then("Bulk User status is approved", function () {
  BulkOperationPage.getApproveRequest().click({ force: true });
  BulkOperationPage.getApproveConfirmationMessage().contains("successfully");
});

//------------Approval Ends-------------

And("Download a blank .csv Sample File for Multiple Users", function () {
  BulkOperationPage.getMultUserDownloadSampleFile().should("exist");
  BulkOperationPage.getMultUserDownloadSampleFile().click({ force: true });
});

//---------Modification------------

And("Select Module and Service type Modify to Proceed", function () {
  BulkOperationPage.getSelectModule().click({ force: true });
  BulkOperationPage.getBulkUserManagement().click({ force: true }); //("Bulk User Management")
  //cy.wait(2000)
  BulkOperationPage.getSelectServiceType().click({ force: true });
  BulkOperationPage.getBulkUserManagement().eq(0).click({ force: true }); //.click({force:true})//("Modification")
  BulkOperationPage.getInitiateProceedBtn().click({ force: true });
});

And(
  "Download a blank .csv file for Multiple Users View Details template",
  function () {
    cy.task("downloads", "cypress/fixtures/templates").then((before) => {
      // do the download
      //cy.wait(3000)

      BulkOperationPage.getMultUserDownloadTemplate().click({ force: true });
      cy.wait(5000);

      cy.task("downloads", "cypress/fixtures/templates").then((after) => {
        expect(after.length).to.be.eq(before.length + 1);
        newFile = after.filter((file) => !before.includes(file))[0];
        cy.log(newFile);

        const downloadedFile = "cypress/fixtures/templates/" + newFile;

        cy.readFile(BulkOperationData).then((data) => {
          data.DownloadedUserDetailsFileName = newFile;
          const JsonFileDownload = newFile.split(".")[0];
          data.UserDetailsFileNameOnly = JsonFileDownload;
          cy.writeFile(BulkOperationData, data);
        });

        cy.csvToJSONBulkOperation(
          downloadedFile,
          "cypress/fixtures/BulkData/BULK_ViewDetails-template.json"
        );

        cy.readFile(
          "cypress/fixtures/BulkData/BULK_ViewDetails-template.json"
        ).then((data) => {
          cy.readFile(BulkOperationData).then((user) => {
            var LogId1 = user.SaveLoginId;
            data["Search Value*"] = LogId1;
            cy.log(LogId1);
          });
          // data['Search Value*'] = this.data90.SaveLoginId
          cy.writeFile(
            "cypress/fixtures/BulkData/BULK_ViewDetails-template.json",
            data
          );
        });

        cy.jsonToCSVBulkOperation(
          "cypress/fixtures/BulkData/BULK_ViewDetails-template.json",
          downloadedFile
        );
      });
    });
  }
);

And("Upload the downloaded file to View Details of bulk user", function () {
  BulkOperationPage.getStepperUploadFile().contains("Upload File");

  cy.readFile(BulkOperationData).then((data) => {
    var UserDetailsDownloadedCSVFile = data.DownloadedUserDetailsFileName;
    cy.log(UserDetailsDownloadedCSVFile);
    BulkOperationPage.getUploadLink()
      .eq(0)
      .attachFile("templates/" + UserDetailsDownloadedCSVFile);
  });
  cy.wait(3000);
  BulkOperationPage.getUploadFileIcon().contains("Size");
});

And(
  "Proceed the Uploaded file for Modification and Assert the response",
  function () {
    BulkOperationPage.getProceedBtn().click({ force: true });
    //cy.wait(15000)
    //BulkOperationPage.getConfirmBtn().should('be.visible',{timeout:30000})
    BulkOperationPage.getRecordsStatusContainer().should("be.visible");
    BulkOperationPage.getRecordsStatus().eq(0).should("exist"); //contain('Total number of records')
    BulkOperationPage.getRecordsStatus().eq(1).should("be.visible"); //contain('Uploaded Successfully')
  }
);

And("Download the Uploaded successfully file for Modification", function () {
  cy.task("downloads", "cypress/fixtures/templates").then((before) => {
    // do the download
    cy.wait(17000); //25000

    BulkOperationPage.getUserDetailsBulkFile().click({ force: true });
    cy.wait(5000); //5000

    cy.task("downloads", "cypress/fixtures/templates").then((after) => {
      expect(after.length).to.be.eq(before.length + 1);
      newFile1 = after.filter((file) => !before.includes(file))[0];
      cy.log(newFile1);

      const downloadedFile1 = "cypress/fixtures/templates/" + newFile1;

      cy.log(downloadedFile1);
      cy.readFile(BulkOperationData).then((data) => {
        data.NewModifiedFileName = newFile1;
        const JsonFileDownload = newFile1.split(".")[0];
        data.ModifiedFileNameOnly = JsonFileDownload;
        cy.writeFile(BulkOperationData, data);
      });

      // cy.csvToJSONBulkModification(downloadedFile,"cypress/fixtures/BulkData/BULK_Modified-template.json" )
      cy.convertCSVtoJSON(downloadedFile1).then((jsonData) => {
        // Use the converted JSON data in your test
        cy.log(JSON.stringify(jsonData));
        cy.writeFile(
          "cypress/fixtures/BulkData/BULK_Modified-template.json",
          JSON.stringify(jsonData)
        ).then(() => {
          cy.log("JSON data written to file successfully!");
        });
      });

      cy.wait(2000);

      cy.modifyJsonField(
        "cypress/fixtures/BulkData/BULK_Modified-template.json",
        "Date Of Birth",
        "1998-01-14"
      );
      cy.modifyJsonField(
        "cypress/fixtures/BulkData/BULK_Modified-template.json",
        "City Name",
        "Bhubaneswar"
      );

      cy.convertJsonToCsv(
        "cypress/fixtures/BulkData/BULK_Modified-template.json",
        downloadedFile1
      );
    });
  });
});

And(
  "Proceed the Uploaded file for Modification and Assert the response1",
  function () {
    BulkOperationPage.getNewProceedBtn().eq(2).click({ force: true });
    cy.wait(5000);
  }
);

And("Upload the downloaded file for bulk user Modification", function () {
  cy.readFile(BulkOperationData).then((data) => {
    const ModifiedDownloadedCSVFile1 = data.NewModifiedFileName;
    cy.log(ModifiedDownloadedCSVFile1);
    BulkOperationPage.getUploadLink()
      .eq(1)
      .attachFile("templates/" + ModifiedDownloadedCSVFile1);
  });

  cy.wait(3000);
  BulkOperationPage.getUploadFileIcon().contains("Size");
});

And(
  "Proceed the Uploaded file for Modification and Assert the response2",
  function () {
    BulkOperationPage.getNewProceedBtn().eq(3).click({ force: true });
    //cy.wait(15000)
  }
);

//---------------Modify Approval----------

When(
  "Navigate to Approvals and filter by Submitted status for SystemAdmin Modified BulkOperation",
  function () {
    // cy.intercept('/mobiquitypay/v1/ums/workspace-categories?workspaceId=').as('all')
    welcomePage.getApprovaltab().click();
    cy.wait(2000);
    //  welcomePage.getApprovalButtonTab().click()
    cy.waitUntil(() => {
      return cy.iframe().find("h4.text-secondary").contains("Approvals");
    });
    //cy.checkAPI('/mobiquitypay/v1/ums/workspace-categories?workspaceId=')
    //-----------------------Added waituntil--------------------------------------------------------------
    cy.waitUntil(() => {
      return cy.iframe().find(".mat-button-wrapper > span").contains("Filters");
    });
    //------------------------------------Filter the data--------------------------------------------------
    //pageLogin.getiFrame()
    approvalPage.getFilter().click({ force: true });
    cy.wait(2000);
    //approvalPage.getAddUserCheckBox().click({ force: true })
    approvalPage.getSubmittedCheckBox().click({ force: true });
    // cy.intercept('/mobiquitypay/v2/workflow_management/workflow/pending_records/MasterAdminChecker/').as('all')
    approvalPage.getApplyFilter().click({ force: true });
    // cy.checkAPI('/mobiquitypay/v2/workflow_management/workflow/pending_records/MasterAdminChecker/')
  }
);
And(
  "User click on System admin submitted Modified Bulk user data",
  function () {
    //approvalPage.getCurrentDateRowData().eq(0).click({ force: true })
    //  cy.getSysAdminApproval()
    BulkOperationPage.getSubmittedByUser()
      .eq(0)
      .invoke("text")
      .then((Uname) => {
        const UserNameApproval = Uname.trim();
        cy.log(UserNameApproval);
        cy.readFile(BulkOperationData).then((data) => {
          data.UserName2 = UserNameApproval;
          const UName2 = UserNameApproval;
          const UName1 = data.UserName1;
          // cy.writeFile(BulkOperationData,data)
          // })
          //if(this.data90.UserName2==this.data90.UserName1){
          if (UName2 == UName1) {
            cy.log("correct");
            BulkOperationPage.getViewDetailsOfInitiated()
              .eq(0)
              .click({ force: true });
            BulkOperationPage.getBulkId()
              .eq(0)
              .invoke("text")
              .then((id1) => {
                const IdVal = id1.trim();
                cy.log(IdVal);
                cy.readFile(BulkOperationData).then((data) => {
                  data.ModifiedBulkId = IdVal;
                  cy.writeFile(BulkOperationData, data);
                });
                BulkOperationPage.getBulkApproval().click(
                  { force: true },
                  { timeout: 30000 }
                );
              });
          } else {
            cy.log("not correct");
            BulkOperationPage.getViewDetailsOfInitiated()
              .eq(1)
              .click({ force: true });
            BulkOperationPage.getBulkId()
              .eq(0)
              .invoke("text")
              .then((id1) => {
                const IdVal = id1.trim();
                cy.log(IdVal);
                cy.readFile(BulkOperationData).then((data) => {
                  data.ModifiedBulkId = IdVal;
                  cy.writeFile(BulkOperationData, data);
                });
                BulkOperationPage.getBulkApproval().click(
                  { force: true },
                  { timeout: 30000 }
                );
              });
          }
          cy.writeFile(BulkOperationData, data);
        });
      });
  }
);

//--------------------Modify Approval End----------------------

//--------------------Failure Modify-------------------
And(
  "Download a blank .csv file for Multiple Users View Details template >> Failed case",
  function () {
    cy.task("downloads", "cypress/fixtures/templates").then((before) => {
      // do the download
      //cy.wait(3000)

      BulkOperationPage.getMultUserDownloadTemplate().click({ force: true });
      cy.wait(5000);

      cy.task("downloads", "cypress/fixtures/templates").then((after) => {
        expect(after.length).to.be.eq(before.length + 1);
        newFile = after.filter((file) => !before.includes(file))[0];
        cy.log(newFile);

        const downloadedFile = "cypress/fixtures/templates/" + newFile;

        cy.readFile(BulkOperationData).then((data) => {
          data.DownloadedUserDetailsFileName = newFile;
          const JsonFileDownload = newFile.split(".")[0];
          data.UserDetailsFileNameOnly = JsonFileDownload;
          cy.writeFile(BulkOperationData, data);
        });

        cy.csvToJSONBulkOperation(
          downloadedFile,
          "cypress/fixtures/BulkData/BULK_ViewDetails-template.json"
        );

        cy.readFile(
          "cypress/fixtures/BulkData/BULK_ViewDetails-template.json"
        ).then((data) => {
          cy.readFile(BulkStaticData).then((user) => {
            var LogId2 = user.FailedLoginId;
            data["Search Value*"] = LogId2;
            cy.log(LogId2);
          });
          // data['Search Value*'] = this.data90.SaveLoginId
          cy.writeFile(
            "cypress/fixtures/BulkData/BULK_ViewDetails-template.json",
            data
          );
        });

        cy.jsonToCSVBulkOperation(
          "cypress/fixtures/BulkData/BULK_ViewDetails-template.json",
          downloadedFile
        );
      });
    });
  }
);

And(
  "Download the Failed status file for check the reason and try to click Proceed",
  function () {
    cy.task("downloads", "cypress/fixtures/templates").then((before) => {
      // do the download
      cy.wait(17000); //25000

      BulkOperationPage.getUserDetailsBulkFile().click({ force: true });
      cy.wait(5000); //5000

      cy.task("downloads", "cypress/fixtures/templates").then((after) => {
        expect(after.length).to.be.eq(before.length + 1);
        newFile1 = after.filter((file) => !before.includes(file))[0];
        cy.log(newFile1);

        const downloadedFile1 = "cypress/fixtures/templates/" + newFile1;

        cy.log(downloadedFile1);
        cy.readFile(BulkOperationData).then((data) => {
          data.FailedFileName = newFile1;
          const JsonFileDownload = newFile1.split(".")[0];
          data.OnlyFailedFileName = JsonFileDownload;
          cy.writeFile(BulkOperationData, data);
        });
      });
    });

    if (BulkOperationPage.getNewProceedBtn().should("be.disabled")) {
      cy.log("It is Disabled");
    } else {
      cy.log("It is Enabled");
    }
  }
);

//------------------------------Added by Prerna------------------------------------------------------

And("Filter by Uploaded status", function () {
  BulkOperationPage.getFilter().click({ force: true });
  cy.wait(100);
  BulkOperationPage.getModuleBulkUserManagement().click({ force: true });
  BulkOperationPage.getUploadedOption().click({ force: true });
  BulkOperationPage.getApplyFilterBtn().click({ force: true });
});

And("Click on view details of first record", function () {
  BulkOperationPage.getEyeIcon().eq(1).should("exist");
  BulkOperationPage.getEyeIcon().eq(1).click({ force: true });
});

And("Submit for approval from inside view details", function () {
  BulkOperationPage.getSubmitForApproval().click({ force: true });
  BulkOperationPage.getYes().click({ force: true });
  // assert "Bulk Request is successfully initiated. Kindly contact admin for approval"
  //data90
  //cy.readFile(BulkOperationData).then((data) => {
  //  let approvalMsg = data.approvalSubmitMessage
  //BulkOperationPage.getAssertSubmit().should('have.text', approvalMsg)
  BulkOperationPage.getAssertSubmit().contains("successfully");
  //})
});

And("cancel from inside view details", function () {
  BulkOperationPage.getCancelUpload().click({ force: true });
  BulkOperationPage.getYes().click({ force: true });
  // assert
});

And("Submit from dashboard", function () {
  BulkOperationPage.getSubmit().click({ force: true });
  BulkOperationPage.getYes().click({ force: true });
  //add assertion
  BulkOperationPage.getAssertSubmit().contains("successfully");
});

And("Cancel from dashboard", function () {
  BulkOperationPage.getCancel().click({ force: true });
  BulkOperationPage.getYes().click({ force: true });
  BulkOperationPage.getAssertSubmit().contains("rejected");
});

And("store the bulk id of first record", function () {
  //getBulkId()
  BulkOperationPage.getBulkId()
    .eq(0)
    .invoke("text")
    .then((id) => {
      id = id.trim();
      cy.log(id);
      cy.readFile(BulkOperationData).then((data) => {
        data.BulkID = id;
        cy.writeFile(BulkOperationData, data);
      });
    });
});

//3rd case
And("store the bulk id of first record from records", function () {
  //getBulkId()
  cy.wait(2000);
  BulkOperationPage.getBulkIdFromRecords()
    .invoke("text")
    .then((id) => {
      id = id.trim();
      cy.log(id);
      cy.readFile(BulkOperationData).then((data) => {
        data.BulkIDFirstRecord = id;
        cy.writeFile(BulkOperationData, data);
      });
    });
});

And("search with stored bulkid, check the status", function () {
  cy.readFile(BulkOperationData).then((data) => {
    var a = data.BulkID;
    cy.log(a);
    BulkOperationPage.getSearchBar().type(a);
    BulkOperationPage.getSearchBtn().click({ force: true });
  });
});

And(
  "Download a blank .csv file for Multiple Users template1 for approval",
  function () {
    cy.task("downloads", "cypress/fixtures/templates").then((before) => {
      BulkOperationPage.getMultUserDownloadTemplate().click({ force: true });
      cy.wait(5000);

      cy.task("downloads", "cypress/fixtures/templates").then((after) => {
        expect(after.length).to.be.eq(before.length + 1);
        newFile = after.filter((file) => !before.includes(file))[0];
        cy.log(newFile);

        const downloadedFile = "cypress/fixtures/templates/" + newFile;

        cy.readFile(BulkOperationData).then((data) => {
          data.DownloadedFileName = newFile;
          const JsonFileDownload = newFile.split(".")[0];
          data.FileNameOnly = JsonFileDownload;
          cy.writeFile(BulkOperationData, data);
        });

        cy.csvToJSONBulkOperation(
          downloadedFile,
          "cypress/fixtures/BulkData/BULK_REGISTRATION-template.json"
        );

        cy.readFile(
          "cypress/fixtures/BulkData/BULK_REGISTRATION-template.json"
        ).then((data) => {
          var mobileNo = "77" + uuid1();
          var mobileNo1 = "77" + uuid1();
          var kycNo = getRandomName() + uuid1();
          LoginId = "SUB" + mobileNo;

          cy.readFile(BulkOperationData).then((data) => {
            data.SaveLoginId = LoginId;
            cy.writeFile(BulkOperationData, data);
          });

          (data["Title"] = "PR_MR"),
            (data["First Name*"] = getRandomName()),
            (data["Last Name*"] = getRandomName()),
            (data["Preferred Language*"] = "en"),
            (data["Customer Information File"] = mobileNo),
            (data["Login ID*"] = LoginId),
            (data["Date of Birth"] = "1998-11-10"),
            (data["Email Address"] = LoginId + "@gmail.com"),
            (data["Mobile Number*"] = mobileNo1),
            (data["Address Line 1*"] = "abc street"),
            (data["Address Line 2"] = "abc street"),
            (data["Country Name*"] = "IN"),
            (data["State Name*"] = "Odisha"),
            (data["City Name*"] = "Rourkela"),
            (data["KYC Id Type*"] = "PASSPORT"),
            (data["KYC Id Number*"] = kycNo),
            (data["KYC Grace Period (Days)*"] = "10"),
            (data["Country Where KYC ID Issued"] = "IN"),
            (data["KYC ID Issued On"] = "2016-02-03"),
            (data["KYC ID Valid From"] = "2016-02-03"),
            (data["KYC ID Valid Till"] = "2030-11-14"),
            (data["Make this as Primary KYC*"] = "Yes"),
            (data["Security Profile*"] = "SP.103"),
            (data["Authorisation Profile*"] = "SubsDefault"),
            (data["Regulatory Profile*"] = "FULL_KYC"),
            (data["Marketing Profile*"] = "SUBSDefaultMP");

          cy.writeFile(
            "cypress/fixtures/BulkData/BULK_REGISTRATION-template.json",
            data
          );
        });

        cy.jsonToCSVBulkOperation(
          "cypress/fixtures/BulkData/BULK_REGISTRATION-template.json",
          downloadedFile
        );
      });
    });
    BulkOperationPage.getNext().click();
  }
);
