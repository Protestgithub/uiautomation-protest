// /// <reference types="Cypress" />
// /// <reference types = "Cypress-iframe"/>

// //----------------Imports---------------------------------------------------------------------
// import { And, Before, Given, Then, When } from "@badeball/cypress-cucumber-preprocessor";
// import 'cypress-iframe';
// import homePage from '../../../../../../../support/pageObjects/homePage';
// import loginPage from '../../../../../../../support/pageObjects/loginPage';
// import register from '../../../../../../../support/pageObjects/UserManagement/register';
// import "../../../../../../../support/Utils/generic";
// import "../../../../../../../support/Utils/registration";
// import "../../../../../../../support/Utils/fieldLevelValidations";

// const pageLogin = new loginPage()
// const welcomePage = new homePage()
// const registerPage = new register()
// var RegexParser = require("regex-parser");
// import RandExp from "randexp";
// let expectedSectionHeader, actualSectionHeader

// And('Verify the section title', function () {
//     cy.readFile("cypress/fixtures/userDefinedcategoryProfiles/adminProfile.json").then((data) => {
//       let value = data.schema
//       cy.wrap(value[0]).then((data1)=>{
//         expectedSectionHeader  = data1.label
//         cy.iframe().find('#cdk-step-label-0-0').invoke('text').then((text)=>
//         {
//            actualSectionHeader = text
//            expect(actualSectionHeader).to.contain(expectedSectionHeader)
//         })
//       })
//     })
// })

// And('Verify the section header', function () {
//     cy.readFile("cypress/fixtures/userDefinedcategoryProfiles/adminProfile.json").then((data) => {
//       let value = data.schema
//       cy.wrap(value[0]).then((data1)=>{
//        let sections = data1.sections
//        cy.wrap(sections).then((data2)=>{
//         let fields = Object.keys(data2)
//         cy.log(fields.length)
//         for (let index = 0; index < fields.length; index++) {
//             if(data2[index].label.includes("Personal Information"))
//             {
//                 cy.log(data2[index].label)
//                 let fields1 = Object.keys(data2[index].fields)
//                for (let index1 = 0; index1 < fields1.length; index1++) {
//                if(data2[index].fields[index1].label.includes("First Name")){
//                 let validationFields = data2[index].fields[index1].validations
//                 cy.wrap(validationFields).then((data3)=>{
//                     let fields2 = Object.keys(data3)
//                     cy.log(fields2.length)
//                     for (let index2 = 0; index2 < fields2.length; index2++) {
//                         if(data3[index2].validator.includes("$")){
//                             cy.log(data3[index2].validator)
//                             const randexp = new RandExp(RegexParser(data3[index2].validator));
//                             cy.log(randexp.gen())
//                         }
                       
//                         else{
//                             cy.log('No validator')
                           
//                         }
//                     }
//                 }) 
//                }
//                }
//             }
//             else{
    
//             }
//         }    
//        })
//     })
// })
// })


// And("Verify Label of the text fields", function () {
//     cy.labelVerification()
// })

// And("Verify the tagName of the elements", function () {
//     registerPage.getFirstName().invoke('attr', 'id').then((text) => {
//         let fieldName = text
//         cy.readFile('cypress/fixtures/categoryProfiles/adminProfile.json').then((data) => {
//             let fields = Object.keys(data)
//             cy.wrap(fields).each((fieldText) => {
//                 if (fieldText.includes(fieldName)) {
//                     let matchedField = fieldText
//                     cy.log(data[matchedField].label)
//                     data[matchedField].type
//                 }
//             })
//         })
//     })
// })