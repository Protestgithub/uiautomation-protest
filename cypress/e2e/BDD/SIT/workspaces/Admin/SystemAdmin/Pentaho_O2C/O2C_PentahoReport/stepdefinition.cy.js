/// <reference types="Cypress" />
/// <reference types = "Cypress-iframe"/>

//-------------------------------Imports---------------------------------------------------------------------
import { And, Given, Then } from "@badeball/cypress-cucumber-preprocessor";
import 'cypress-iframe';
import ReportingSuite from '../../../../../../../../support/pageObjects/ReportingSuite/ReportingSuite';

import "../../../../../../../../support/Utils/generic";

//----------------Object Declaration----------------------------------------------------------

const Report = new ReportingSuite()

