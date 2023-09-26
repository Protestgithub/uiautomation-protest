// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

import register from '../pageObjects/UserManagement/register';


const registerPage = new register()
var RegexParser = require("regex-parser");
import RandExp from "randexp";

Cypress.Commands.add('labelVerification',()=>{
                registerPage.getFirstName().clear().then(($el) => {
                cy.wrap($el).invoke('attr','name').then((text)=>{
                 let fieldName = text
                 cy.readFile('cypress/fixtures/categoryProfiles/adminProfile.json').then((data)=>{
                     let fields = Object.keys(data)
                     cy.wrap(fields).each((fieldText)=>{
                         if(fieldText.includes(fieldName)){
                             let matchedField = fieldText
                             cy.log(data[matchedField].pattern)
                             var pattern = data[matchedField].pattern
                              const randexp = new RandExp(RegexParser(pattern));
                              const randexp1 = new RandExp(RegexParser(pattern));
                             cy.log(randexp.gen())
                        
                         }
                     })
                 })
               })
             })
        })