/// <reference types="Cypress" />
/// <reference types = "Cypress-iframe"/>

//----------------Imports---------------------------------------------------------------------
import { And, When,Then } from "@badeball/cypress-cucumber-preprocessor";
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
var Gradedata = 'cypress/fixtures/userData/Gradedata.json'



And('Select the domain & category for new Grade1', function () {
    const uuid = () => Cypress._.random(1e4)
    GradeCode = uuid()
    
    cy.intercept('/CoreWeb/grades/grades_addGrades.action').as('Add')
    AddGradePage.getAddbttn().click({ force: true })
    
    cy.GradeName2()
    
    AddGradePage.getDomainName().select(this.data4.GradeData2.DomainName56, { force: true })
    

    AddGradePage.getCatergoryName().select(this.data4.GradeData2.CategoryName56, { force: true })

    AddGradePage.getgradeCode().type(GradeCode, { force: true })
    cy.readFile(Gradedata).then((data) => {
        data.GradeCode44 = GradeCode
        cy.writeFile(Gradedata, data)

    })

    AddGradePage.getaddmoregrade().click({ force: true })
    const uuid1 = () => Cypress._.random(1e4)
    GradeCode1 = uuid1()
    
    cy.GradeName3()
    //AddGradePage.getGradeName1().type(GradeName1,{ force : true})
    AddGradePage.getGradeCode1().type(GradeCode1, { force: true })
    cy.readFile(Gradedata).then((data) => {
        data.GradeCode56 = GradeCode1
        cy.writeFile(Gradedata, data)

    })

})

Then('Click on save and confirm', function () {
    
    cy.intercept('/CoreWeb/grades/grades_addGrades.action').as('Add')
    AddGradePage.getSavebttn().click({ force: true })
    cy.wait('@Add')
    cy.wait(2000)
    cy.intercept('/CoreWeb/grades/grades_saveGrades.action').as('saveGr')
    AddGradePage.getConfirmbttn().click({ force: true })
    cy.wait('@saveGr')
})
