//import { defineConfig } from "cypress";

const { defineConfig } = require("cypress")

const pg = require('pg-promise');
//const pg = require("pg")
const { Client } = require('pg')

const createEsbuildPlugin =
  require("@badeball/cypress-cucumber-preprocessor/esbuild").createEsbuildPlugin;
const createBundler = require("@bahmutov/cypress-esbuild-preprocessor");
const nodePolyfills =
  require("@esbuild-plugins/node-modules-polyfill").NodeModulesPolyfillPlugin;
const addCucumberPreprocessorPlugin =
  require("@badeball/cypress-cucumber-preprocessor").addCucumberPreprocessorPlugin;
const allureWriter = require("@shelex/cypress-allure-plugin/writer");
const oracledb = require("oracledb");
const date = new Date().getTime();
const date2 = new Date().toLocaleString().split(" ");
const day1 = date2[0].split("/"),
  day2 = day1[0].concat(day1[1]),
  day4 = day1[2].split(","),
  day3 = day2.concat(day4[0]);
const time1 = date2[1].split(":"),
  time2 = time1[0].concat(time1[1]),
  time3 = time2.concat(time1[2]);
const finalTime = day3.concat(time3);

// oracledb.initOracleClient({ libDir: "cypress/instantclient_21_9" });

const db_config = {
  user: "MYTEL_PROD_OTP",
  password: "mytel_prod",
  connectString: "10.201.223.2:1521/MTPAYDB",
};

const connectDB = async (querys) => {
  const client = new Client({
    user: "qa_maindb",
    host: "172.25.48.73",
    database: "qa_main_mobiquity",
    password: "vmmigration",
    port: "5432"
  })
  await client.connect()
  console.log("NOTE===>DB connection established");
  return await client.query(querys);

};



//const nodemailer = require('nodemailer')

//var transport = nodemailer.createTransport({
// host: "CASARRAY-GGN.COMVIVA.COM", // hostname
// secureConnection: false, // TLS requires secureConnection to be false
// port: 587, // port for secure SMTP
// auth: {
//     user: "shri.vidhya@comviva.com",
//     pass: "Home@726a",
// },
// tls: {
//     ciphers:'SSLv3'
// }
// });


const queryData = async (query, db_config) => {
  let conn;
  try {
    // It's failing on this getConnection line
    conn = await oracledb.getConnection(db_config);
    console.log("NOTE===>DB connection established");
    return await conn.execute(query);
  } catch (err) {
    console.log("Error===>" + err);
    return err;
  } finally {
    if (conn) {
      try {
        conn.close();
      } catch (err) {
        console.log("Error===>" + err);
      }
    }
  }
};

module.exports = defineConfig({
  defaultCommandTimeout: 25000,
  pageLoadTimeout: 25000,
  viewportWidth: 1200,
  viewportHeight: 900,
  trashAssetsBeforeRuns: true,
  videoCompression: false,
  videoUploadOnPasses: false,
  video: false,
  downloadsFolder: 'cypress/fixtures/templates',

  env: {

    Adminurl: "http://dfs-bd-demo-alb-2060992426.us-west-2.elb.amazonaws.com",
    apiBaseURL: "http://dfs-bd-demo-alb-2060992426.us-west-2.elb.amazonaws.com",
    profileName: "Automationprofile",
    profileNameWHS: "AutomationprofileWHS",
    profileNameCUST: "MKTProfileTCPE2E",
    port: "Yes",
    profileCreation: "Yes",
    app: "Core",
    TCPName: "AutomationTestTCP",
    SubTCPName: "SubscriberAutomationTCP",
    downloadsFolder: 'cypress/fixtures/templates',
    mobileDigits: "10",
    bankName: "UIAUTOMATIONBANK",
    version: "x.7",
    container: "/dfscontainer/#/",
    SubInsTCPName: "SubInstTCPUIAutomation",
    WHSInsTCPName: "WHSInstTCPUIAutomation",
    domainName: "Customer",
    categoryName: "MBA Customer",
    gradeName: "UIAutoGrade",
    walletName: "UIAutomation",
    DB: "Yes",
    allureResultsPath: "allure-results",
    allure: true,
    myActivity: "Yes",
    otpVerification: "Yes",
    subscriberNamedAs: "Customer",
    PricingEngineApproval: "No",
    TransactionOTP: "No",
    CardNumber: "4532607864858221",
    CardNumber1: "4532842541686907",
    prefix: "77"
  },
  projectId: "yizpik",
  chromeWebSecurity: true,
  retries: {
    runMode: 0,
    openMode: 0,
  },

  e2e: {
    // We've imported your old cypress plugins here.
    // You may want to clean this up later by importing these.
    setupNodeEvents(on, config) {
      on(
        "file:preprocessor",
        createBundler({
          plugins: [nodePolyfills(), createEsbuildPlugin(config)],
        })
      );
      const fs = require("fs");
      allureWriter(on, config);
      //   require('cypress-email-results')(on, config, {
      //     email: ['shri.vidhya@comviva.com'],
      //   transport
      //   })
      on("task", {
        downloads: (downloadspath) => {
          return fs.readdirSync(downloadspath);
        },
      });

      on("task", {
        sqlQuery: (query) => {
          return queryData(query, db_config);
        },
      });

      on('task', {
        SqlQueryPS: (query) => {
          return connectDB(query);
        },
      })
    },

    specPattern: [
      "cypress/e2e/BDD/Prerequisites/workspaces/Admin/SuperAdmin/CreationofSystemAdmin/*.feature",
      "cypress/e2e/BDD/Prerequisites/workspaces/Admin/SystemAdmin/ProfileCreation/**/*.feature",
      "cypress/e2e/BDD/Prerequisites/workspaces/Admin/SuperAdmin/TCPCreation/**/*.feature",
      "cypress/e2e/BDD/Prerequisites/workspaces/Admin/SuperAdmin/BankCreation/*.feature",
      "cypress/e2e/BDD/Prerequisites/workspaces/Admin/SystemAdmin/DomainCreation/*.feature",
      "cypress/e2e/BDD/Prerequisites/workspaces/Admin/SystemAdmin/WalletCreation/*.feature",
      "cypress/e2e/BDD/Prerequisites/workspaces/Admin/SuperAdmin/GradeCreation/*.feature",
      "cypress/e2e/BDD/Prerequisites/workspaces/Admin/SuperAdmin/ProfileCreation/Systemadmin.feature",
      "cypress/e2e/BDD/Prerequisites/workspaces/Admin/SystemAdmin/CreationOfUsers/**/*.feature",
      "cypress/e2e/BDD/Prerequisites/workspaces/Admin/SystemAdmin/zTransaction/*.feature",
      "cypress/e2e/BDD/Prerequisites/workspaces/ChannelUser/Transactions/O2C.feature",
      "cypress/e2e/BDD/Prerequisites/workspaces/ChannelUser/Transactions/EmployeeCreation.feature",
      "cypress/e2e/BDD/Prerequisites/workspaces/ChannelUser/UserCreation/**/*.feature",
      "cypress/e2e/BDD/Prerequisites/workspaces/ChannelUser/Transactions/Cashin.feature",
      "cypress/e2e/BDD/Prerequisites/workspaces/ChannelUser/Transactions/CashOut.feature",
      "cypress/e2e/BDD/Prerequisites/workspaces/ChannelUser/Transactions/TransferToBank/bTransfertoBank.feature",
      "cypress/e2e/BDD/Prerequisites/workspaces/ChannelUser/Transactions/TransferToBank/OrderDetails.feature",
      "cypress/e2e/BDD/Prerequisites/workspaces/Admin/xBusinessAdmin/*.feature",
      "cypress/e2e/BDD/Tests/workspaces/Admin/SuperAdmin/TCPCumulative/TCP-1Create.feature",
      "cypress/e2e/BDD/Tests/workspaces/Admin/SuperAdmin/TCPCumulative/TCP-2View.feature",
      "cypress/e2e/BDD/Tests/workspaces/Admin/SuperAdmin/TCPCumulative/TCP-3View-Records.feature",
      "cypress/e2e/BDD/Tests/workspaces/Admin/SuperAdmin/TCPCumulative/TCP-4Modify.feature",
      "cypress/e2e/BDD/Tests/workspaces/Admin/SuperAdmin/TCPCumulative/TCP-5Clone.feature",
      "cypress/e2e/BDD/Tests/workspaces/Admin/SuperAdmin/TCPCumulative/TCP-Delete.feature",
      "cypress/e2e/BDD/X.6/Workspaces/Customer/ConsumerPortal/Reciepts/Recieptss.feature",
      "cypress/e2e/BDD/Tests/workspaces/Admin/SystemAdmin/TCPx.09/instrumentTCP.feature",
      "cypress/e2e/BDD/Tests/workspaces/Admin/SystemAdmin/TCPx.09/instrumentViewTCP.feature",
      "cypress/e2e/BDD/Tests/workspaces/Admin/SystemAdmin/TCPx.09/instrumentViewTCPDetails.feature",
      "cypress/e2e/BDD/Tests/workspaces/Admin/SystemAdmin/TCPx.09/instrumentTCPmodify.feature",
      "cypress/e2e/BDD/Tests/workspaces/Admin/SystemAdmin/TCPx.09/instrumentTCPDelete.feature",
      "cypress/e2e/BDD/Tests/workspaces/ChannelUser/**/*.feature",
      "cypress/e2e/BDD/Tests/workspaces/**/**/**/**/*.feature",
      "cypress/e2e/BDD/Tests/workspaces/Admin/SystemAdmin/Usermanagement/SuspensionOfUsers/*.feature",
      "cypress/e2e/BDD/Tests/workspaces/Admin/SystemAdmin/Usermanagement/TResumptionofUsers/*.feature",
      "cypress/e2e/BDD/SIT/workspaces/**/**/**/**/*.feature",
      "cypress/e2e/BDD/xTearDown/AdminUserDeletion/*.feature",
      "cypress/e2e/BDD/xTearDown/BankDeletion/BankDeletion.feature",
      "cypress/e2e/BDD/xTearDown/ChannelUserDeletion/*.feature",
      "cypress/e2e/BDD/xTearDown/ProfilesDeletion/**/*.feature",
      "cypress/e2e/BDD/xTearDown/ServiceChargeDeletion/*.feature",
      "cypress/e2e/BDD/xTearDown/SubscriberDeletion/*.feature",
      "cypress/e2e/BDD/xTearDown/TCP/TCPforGrade.feature",
      "cypress/e2e/BDD/xTearDown/TransferRuleDeletion/TransferRuleDeletion.feature",
      "cypress/e2e/BDD/xTearDown/xSystemAdminDeletion/*.feature"

    ],
  },
});
