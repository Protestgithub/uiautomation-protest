/// <reference types="Cypress" />
/// <reference types = "Cypress-iframe"/>

//----------------Imports---------------------------------------------------------------------
import { And, When } from "@badeball/cypress-cucumber-preprocessor";
import 'cypress-iframe';
import homePage from '../../../../../../../../support/pageObjects/homePage';

import DeleteGrades from '../../../../../../../../support/pageObjects/GradeManagement/DeleteGrades';
import ModifyGrades from '../../../../../../../../support/pageObjects/GradeManagement/ModifyGrades';
import "../../../../../../../../support/Utils/generic";

const ModifyGradePage = new ModifyGrades()
const welcomePage = new homePage()
const DeleteGradesPage = new DeleteGrades()
var GradeFile = 'cypress/fixtures/userData/Gradedata.json'


//----------------------------Modify----------------------------------------
When('Click on User Profile Management >> Modify Grade', function () {
  welcomePage.getUserprofileManagementOption().click({ force: true })
    cy.intercept('/CoreWeb/grades/modifyGrades_displayForModify.action*').as('getModifyGrades')
  welcomePage.getModifyGrades().click({ force: true })
  cy.wait('@getModifyGrades')
})

And('Do required changes.', function () {
  
  cy.ModifyRecord()
})
And('Click on Modify.', function () {
  ModifyGradePage.getFirstRadio().click()
  ModifyGradePage.getModData().click({ force: true })
  cy.wait(2000)
  ModifyGradePage.getModifybttn().click({ force: true })
})
And('Click on confirm button for grade', function () {
  ModifyGradePage.getConfirmbttn().click({ force: true })
})

And('Select and modify Grade name',function(){
  
  ModifyGradePage.getFirstRadio().click()
  
  ModifyGradePage.getModData().type()
  // cy.readFile(DataFile).then((data) => {
  //   var CatNam = data.Domainname
  //   ModifyGradePage.getFirstData().select(CatNam, { force: true })

  //   cy.readFile(Gradedata).then((grade) => {
  //     grade.GradeName = CatNam
  //     cy.writeFile(Gradedata, grade)

  //   })
  // })
   cy.wait(2000)
  ModifyGradePage.getModifybttn().click()
})
