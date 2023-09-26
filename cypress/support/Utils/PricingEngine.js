import 'cypress-file-upload';
import PricingEnginePage from '../../support/pageObjects/PricingEngine/PricingEnginePage';

const pricingEnginePage = new PricingEnginePage()



//---------------------------------------------------------------------------------------

Cypress.Commands.add('getServiceName', (filename) =>
    cy.readFile(filename).then((user) => {
        let fileis = user.ServiceRuleName
        let shouldStop = false
        cy.wait(2000)
        cy.iframe().find('.service-charge-rule').each(($row => {
            cy.then(() => {
                if (shouldStop) {
                    return
                }
                cy.wrap($row).within(function () {
                    cy.get('div>[class="col l5 rule-name-details"]').each(($el => {
                        cy.log($el.text())
                        cy.wait(2000)
                        if ($el.text().includes(fileis)/*&& $el.text().includes()*/) {
                            cy.log($el.text().includes(fileis))
                            cy.wait(4000)
                            cy.get('[class="material-icons small remove-charge-rule modal-trigger float"]').click({ force: true })
                            shouldStop = true
                        }
                    }))
                })

            })
        }))
    })
)

Cypress.Commands.add('getCashIn', (filename) =>
    cy.readFile(filename).then((user) => {
        let fileis = "Cash In"
        let shouldStop = false
        cy.wait(5000)
        cy.iframe().find('[class="policy-type-padding active"]').each(($row => {
            cy.then(() => {
                if (shouldStop) {
                    return
                }
                cy.wrap($row).within(function () {
                    cy.wait(5000)
                    cy.get('[class="col s4 pending-policy-name"]').contains("Cash In").click({ force: true })

                }
                )
            })
        }))
    })
)

Cypress.Commands.add('getApprvalservice', (filename) =>
    cy.readFile(filename).then((user) => {
        let fileis = user.ServiceRuleName
        let shouldStop = false
        cy.iframe().find('[class="rules-templates"]').each(($row => {
            cy.then(() => {
                if (shouldStop) {
                    return
                }
                cy.wrap($row).within(function () {
                    cy.get('[class="row valign valign-wrapper"]').each(($el => {
                        cy.log($el.text())
                        if ($el.text().includes(fileis)/*&& $el.text().includes()*/) {

                            cy.wait(4000)
                            cy.get('[class="col s3 truncate"]').contains(fileis).click({ force: true })
                            shouldStop = true
                        }
                    }))
                })

            })
        }))
    })
)


//--------------------------------------------------------------------------------------


//------------------Commission-------------------------------------------------

Cypress.Commands.add('getServiceName1', (filename) =>
    cy.readFile(filename).then((user) => {
        let fileis = user.ServiceRuleName1
        let shouldStop = false
        cy.wait(2000)
        cy.iframe().find('.service-charge-rule').each(($row => {
            cy.then(() => {
                if (shouldStop) {
                    return
                }
                cy.wrap($row).within(function () {
                    cy.get('div>[class="col l5 rule-name-details"]').each(($el => {
                        cy.log($el.text())
                        cy.wait(2000)
                        if ($el.text().includes(fileis)/*&& $el.text().includes()*/) {
                            cy.log($el.text().includes(fileis))
                            cy.wait(4000)
                            cy.get('[class="material-icons small remove-charge-rule modal-trigger float"]').click({ force: true })
                            shouldStop = true
                        }
                    }))
                })

            })
        }))
    })
)



//------------------Modified Commission-------------------------------------------------

Cypress.Commands.add('getModifiedServiceName', (filename) =>
    cy.readFile(filename).then((user) => {
        let fileis = user.CommServiceRuleName
        let shouldStop = false
        cy.iframe().find('.service-charge-rule').each(($row => {
            cy.then(() => {
                if (shouldStop) {
                    return
                }
                cy.wrap($row).within(function () {
                    cy.get('div>[class="col l5 rule-name-details"]').each(($el => {
                        cy.log($el.text())

                        if ($el.text().includes(fileis)/*&& $el.text().includes()*/) {
                            cy.log($el.text().includes(fileis))
                            cy.wait(4000)
                            cy.get('[class="material-icons small remove-charge-rule modal-trigger float"]').click({ force: true })
                            shouldStop = true
                        }
                    }))
                })

            })
        }))
    })
)


Cypress.Commands.add('getRuleName', (Ruleis) => {
    cy.wait(2000)
    pricingEnginePage.getSearchTab().click({ force: true })
    cy.wait(1000)
    pricingEnginePage.getSearchTextField().type(Ruleis)
    cy.wait(1000)
    pricingEnginePage.getSearchButton2().click()
})





Cypress.Commands.add('getServiceInActive', (filename) =>
    cy.readFile(filename).then((user) => {
        let fileis = user.ServiceRuleName2
        let shouldStop = false
        cy.wait(2000)
        cy.iframe().find('.service-charge-rule').each(($row => {
            cy.then(() => {
                if (shouldStop) {
                    return
                }
                cy.wrap($row).within(function () {
                    cy.get('div>[class="col l5 rule-name-details"]').each(($el => {
                        cy.log($el.text())
                        cy.wait(2000)
                        if ($el.text().includes(fileis)/*&& $el.text().includes()*/) {
                            cy.log($el.text().includes(fileis))
                            // cy.wait(4000)
                            // cy.get('.switch-handle').eq(1).click({ force:true})
                            shouldStop = true
                        }
                    }))
                })

            })
        }))
    })
)



Cypress.Commands.add('getServiceName2', (filename) =>
    cy.readFile(filename).then((user) => {
        let fileis = user.ServiceRuleName2
        let shouldStop = false
        cy.wait(2000)
        cy.iframe().find('.service-charge-rule').each(($row => {
            cy.then(() => {
                if (shouldStop) {
                    return
                }
                cy.wrap($row).within(function () {
                    cy.get('div>[class="col l5 rule-name-details"]').each(($el => {
                        cy.log($el.text())
                        cy.wait(2000)
                        if ($el.text().includes(fileis)/*&& $el.text().includes()*/) {
                            cy.log($el.text().includes(fileis))
                            cy.wait(4000)
                            cy.get('[class="material-icons small remove-charge-rule modal-trigger float"]').click({ force: true })
                            shouldStop = true
                        }
                    }))
                })

            })
        }))
    })
)



Cypress.Commands.add('getDraftService', (filename) =>
    cy.readFile(filename).then((user) => {
        let fileis = user.ServiceRuleName2
        let shouldStop = false
        cy.wait(2000)
        cy.iframe().find('.service-charge-rule').each(($row => {
            cy.then(() => {
                if (shouldStop) {
                    return
                }
                cy.wrap($row).within(function () {
                    cy.get('div>[class="col l5 rule-name-details"]').each(($el => {
                        cy.log($el.text())
                        cy.wait(2000)
                        if ($el.text().includes(fileis)/*&& $el.text().includes()*/) {
                            cy.log($el.text().includes(fileis))
                            cy.wait(4000)
                            cy.get('[class="truncate"]').click({ force: true })
                            shouldStop = true
                        }
                    }))
                })

            })
        }))
    })
)



Cypress.Commands.add('getservicecharge', (filename) =>
    cy.readFile('cypress/fixtures/userData/Servicecharge.json').then((user) => {
        let ServiceName = user.profilename
        let shouldStop = false
        cy.iframe().find('.wwFormTableC>tbody>tr').each(($row => {
            cy.then(() => {
                if (shouldStop) {
                    return
                }
                cy.wrap($row).within(function () {
                    cy.get('td').each(($el => {
                        cy.log($el.text())
                        if ($el.text().includes(ServiceName)) {
                            cy.get('[type="checkbox"]').click({ force: true })
                            cy.wait(2000)
                            shouldStop = true
                        }
                    }))

                })
            })

        }))
    })
)

//-----------------------------------------------------------------------

Cypress.Commands.add('getDeleteRuleName', (filename) =>
    cy.readFile(filename).then((user) => {
        let fileis = "Default Charge"
        let shouldStop = false
        cy.wait(2000)
        cy.iframe().find('.service-charge-rule').each(($row => {
            cy.then(() => {
                if (shouldStop) {
                    return
                }
                cy.wrap($row).within(function () {
                    cy.get('div>[class="col l5 rule-name-details"]').each(($el => {
                        cy.log($el.text())
                        cy.wait(2000)
                        if ($el.text().includes(fileis)/*&& $el.text().includes()*/) {
                            cy.log($el.text().includes(fileis))
                            cy.wait(4000)
                            cy.get('[class="material-icons small remove-charge-rule modal-trigger float"]').click({ force: true })
                            shouldStop = true
                        }
                    }))
                })

            })
        }))
    })
)
