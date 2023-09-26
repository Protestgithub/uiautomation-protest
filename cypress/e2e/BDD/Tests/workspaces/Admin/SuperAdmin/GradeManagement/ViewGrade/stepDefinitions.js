/// <reference types="Cypress" />
/// <reference types = "Cypress-iframe"/>

//----------------Imports---------------------------------------------------------------------
import { And, When } from "@badeball/cypress-cucumber-preprocessor";
import 'cypress-iframe';
import homePage from '../../../../../../../../support/pageObjects/homePage';

import DeleteGrades from '../../../../../../../../support/pageObjects/GradeManagement/DeleteGrades';
import ModifyGrades from '../../../../../../../../support/pageObjects/GradeManagement/ModifyGrades';
import "../../../../../../../../support/Utils/generic";
import AddGrades from "../../../../../../../../support/pageObjects/GradeManagement/AddGrades";

const ModifyGradePage = new ModifyGrades()
const welcomePage = new homePage()
const DeleteGradesPage = new DeleteGrades()
const AddGradePage = new AddGrades()

var GradeFile = 'cypress/fixtures/userData/Gradedata.json'

//-----------------------Test Scripts-----------------------------------------------


And('User can view the CategoryMenu and GradeMenu', function (){
  
  AddGradePage.getCategoryMenu().contains('Category Name')
  AddGradePage.getGradeMenu().contains('Grade Name')
})
