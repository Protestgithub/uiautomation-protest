/// <reference types="Cypress" />
/// <reference types = "Cypress-iframe"/>
import { And, Then, When } from "@badeball/cypress-cucumber-preprocessor";
import 'cypress-iframe';
import BulkPayout from '../../../../../../../../../support/pageObjects/BulkPayout';
import homePage from '../../../../../../../../../support/pageObjects/homePage';
import O2CTransferInitiate from '../../../../../../../../../support/pageObjects/OperatorToChannel/O2CTransferInitiate';
import Approval from '../../../../../../../../../support/pageObjects/TransferRules/Approval';
import "../../../../../../../../../support/Utils/generic";


//----------------Object Declaration-----------------------------------------------------------------

const welcomePage = new homePage()
const O2CTransferInitiatePage = new O2CTransferInitiate()
const BptPage = new BulkPayout()
const TransferRuleApproval = new Approval()
const transferruleapprovalpage = new Approval()

var CsvFile = 'cypress/fixtures/templates/BULK_O2C-template.csv';
var JsonFile = 'cypress/fixtures/BulkData/BULK_O2C-template.json';
const uuid = () => Cypress._.random(1e3)
var TransferAmount = uuid()
var ReferenceNumber = uuid()
var number = uuid()
var name
var BusinessMoBileData = "userData/BusinessUsersData.json"
var BBAFile = "cypress/fixtures/userData/BusinessUsersDataO2C.json"
var O2CFile = "cypress/fixtures/userData/O2Cdata.json"
function getRandomName() {
  name = "";
  var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
  for (var i = 0; i < 5; i++)
    name += possible.charAt(Math.floor(Math.random() * possible.length));
  return name;
}


