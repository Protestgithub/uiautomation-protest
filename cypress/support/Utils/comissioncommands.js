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
import loginPage from '../../support/pageObjects/loginPage';
import commisionDisbursment from '../pageObjects/CommisionDisbursment/commisionDisbursment';


//----------------Object Declaration----------------------------------------------------------

const pageLogin = new loginPage()
const commisionDisbursmentPage = new commisionDisbursment()

//---------------- Random value selection from drop down---------------
function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

Cypress.Commands.add('cdmfsProvider', () => {
  cy.frameLoaded(pageLogin.getiFrame())
  commisionDisbursmentPage.getCDMFSProvider() // we get the select/option by finding the select by id
    .then(listing => {
      const randomNumber = getRandomInt(0, listing.length - 2); //generate a rendom number between 0 and length-1. In this case 0,1,2
      commisionDisbursmentPage.getCDMFSProvider().eq(randomNumber).then(($select) => {              //choose an option randomly
        const text = $select.text()       //get the option's text. For ex. "A"
        commisionDisbursmentPage.getCDMFSProviders().select(text)       // select the option on UI
      });
    })
})


Cypress.Commands.add('getWithdrawInitiate', (filename) =>
  cy.readFile('cypress/fixtures/userData/BusinessUsersData.json').then((data) => {
    let ID = data.registeredMobileHeadMerch
    let shouldStop = false
    cy.iframe().find('tbody>tr').each(($row => {
      cy.then(() => {
        if (shouldStop) {
          return
        }
        cy.wrap($row).within(function () {
          cy.get('td').each(($el => {
            cy.log($el.text())
            if ($el.text().includes(ID)) {

              cy.get('[name="check1"]').click({ force: true })
              cy.wait(2000)
              cy.get('[type="text"]').clear().type(5)
              cy.wait(5000)
              shouldStop = true
            }
          }))
        })
      })
    }))
  })
)



Cypress.Commands.add('getBulkApprovalWithdrawal', (filename) => {
  function checkRows(rows, index, ID) {
    if (index >= rows.length) {
      cy.log('No matching BULK ID')
      return;
    }

    const $row = rows.eq(index)
    cy.wrap($row).click()
    cy.wait(2000)
    cy.iframe().find('div>span[class="primary_color_dark bulkID"]').should('be.visible').invoke('text').then((text) => {
      if (text.includes(ID)) {
        cy.wait(2000)
        cy.iframe().find('[class="col s6 div-button-border center active-color approve_btn"]').contains("APPROVE").click({ force: true })
        cy.wait(2000)
      } else {
        checkRows(rows, index + 1, ID)
      }
    });
  }

  cy.iframe().find('[class="row pending-policy-header-info"]').then((rows) => {
    cy.fixture('userData/BankData.json').then((user) => {
      const ID = user.WithdrawID
      checkRows(rows, 0, ID)
    })
  })
})


Cypress.Commands.add('getCSVNegative', (filename) => {
  return cy.fixture('templates/modified_commission_disbursement.csv').then((csvData) => {
    function editCsvData(csvData) {
      const rows = csvData.split('\n').map((row) => row.split(','))
      const headerRow = rows[0];
      const amountColumnIndex = headerRow.indexOf('Amount*')

      if (amountColumnIndex !== -1) {
        for (let i = 1; i < rows.length; i++) {
          const columns = rows[i];
          const existingAmount = parseFloat(columns[amountColumnIndex]);
          const reducedAmount = existingAmount * -1

          columns[amountColumnIndex] = reducedAmount.toString()
          rows[i] = columns.join(',')
        }
        const modifiedCsv = rows.join('\n')
        return modifiedCsv
      } //else {
      // console.error('Column "Amount*" not found in the CSV data.')
      //return csvData;
      //}
    }
    const modifiedCsvData = editCsvData(csvData);
    cy.writeFile('cypress/fixtures/templates/modified_commission_disbursement.csv', modifiedCsvData)

    cy.log('Modified CSV Data:')
    cy.log(modifiedCsvData)
    cy.wrap(modifiedCsvData)
  })

})


//-----------ADDED  BY RAkesh-------------------
Cypress.Commands.add('getTransferID', (filename) =>
  cy.readFile('cypress/fixtures/userData/BusinessUsersData.json').then((data) => {
    let ID = data.registeredMobileHeadMerch
    let shouldStop = false
    cy.iframe().find('tbody>tr').each(($row => {
      cy.then(() => {
        if (shouldStop) {
          return
        }
        cy.wrap($row).within(function () {
          cy.get('td').each(($el => {
            cy.log($el.text())
            if ($el.text().includes(ID)) {

              cy.get('[name="check1"]').click({ force: true })
              cy.wait(2000)
              shouldStop = true
            }
          }))
        })
      })
    }))
  })
)



Cypress.Commands.add('getBulkApproval', (filename) => {
  function checkRows(rows, index, ID) {
    if (index >= rows.length) {
      cy.log('No matching BULK ID')
      return;
    }

    const $row = rows.eq(index)
    cy.wrap($row).click()
    cy.wait(2000)
    cy.iframe().find('div>span[class="primary_color_dark bulkID"]').should('be.visible').invoke('text').then((text) => {
      if (text.includes(ID)) {
        cy.wait(2000)
        cy.iframe().find('[class="col s6 div-button-border center active-color approve_btn"]').contains("APPROVE").click({ force: true })
        cy.wait(2000)
      } else {
        checkRows(rows, index + 1, ID)
      }
    });
  }

  cy.iframe().find('[class="row pending-policy-header-info"]').then((rows) => {
    cy.fixture('userData/BankData.json').then((user) => {
      const ID = user.BulkID
      checkRows(rows, 0, ID)
    })
  })
})

//-------------REJECT-----------------

Cypress.Commands.add('getBulkReject', (filename) => {
  function checkRows(rows, index, ID) {
    if (index >= rows.length) {
      cy.log('No matching BULK ID')
      return;
    }

    const $row = rows.eq(index)
    cy.wrap($row).click()
    cy.wait(2000)
    cy.iframe().find('div>span[class="primary_color_dark bulkID"]').should('be.visible').invoke('text').then((text) => {
      if (text.includes(ID)) {
        cy.wait(2000)
        cy.iframe().find('[class="col s6 div-button-border center reject_btn"]').contains("REJECT").click({ force: true })
        cy.wait(2000)
      } else {
        checkRows(rows, index + 1, ID)
      }
    });
  }

  cy.iframe().find('[class="row pending-policy-header-info"]').then((rows) => {
    cy.fixture('userData/BankData.json').then((user) => {
      const ID = user.BulkID
      checkRows(rows, 0, ID)
    })
  })
})

//----------DASHBOARD-----------

Cypress.Commands.add('getDashboard', (filename) => {
  function checkRows(rows, index, ID) {
    if (index >= rows.length) {
      cy.log('No matching BULK ID')
      return;
    }

    const $row = rows.eq(index)

    cy.wrap($row).click()

    cy.iframe().find('div>span[class="primary_color_dark bulkID"]').should('be.visible').invoke('text').then((text) => {
      if (text.includes(ID)) {
        cy.wait(2000)
        cy.log('Bulk ID')
      } else {
        checkRows(rows, index + 1, ID)
      }
    });
  }

  cy.iframe().find('[class="col s4 pd_zero"]>span.lh.collapse_btnPD1').then((rows) => {
    cy.wait(6000)
    cy.fixture('userData/BankData.json').then((user) => {
      const ID = user.BulkID
      checkRows(rows, 0, ID)
    })
  })
})


//----------------EDIT -------------------------------------------------------
Cypress.Commands.add('getCSVEdit', (filename) => {
  return cy.fixture('templates/CommissionDisbursement.csv').then((csvData) => {
    function editCsvData(csvData) {
      const rows = csvData.split('\n').map((row) => row.split(','))
      const headerRow = rows[0];
      const amountColumnIndex = headerRow.indexOf('Amount*')

      if (amountColumnIndex !== -1) {
        for (let i = 1; i < rows.length; i++) {
          const columns = rows[i];
          const existingAmount = parseFloat(columns[amountColumnIndex]);
          const reducedAmount = existingAmount / 2

          columns[amountColumnIndex] = reducedAmount.toString()
          rows[i] = columns.join(',')
        }
        const modifiedCsv = rows.join('\n')
        return modifiedCsv
      } //else {
      // console.error('Column "Amount*" not found in the CSV data.')
      //return csvData;
      //}
    }
    const modifiedCsvData = editCsvData(csvData);
    cy.writeFile('cypress/fixtures/templates/modified_commission_disbursement.csv', modifiedCsvData)

    cy.log('Modified CSV Data:')
    cy.log(modifiedCsvData)
    cy.wrap(modifiedCsvData)
  })
})

//--------------DashBoard ERRor log--------------


Cypress.Commands.add('getDashboardFAILED', (filename) => {
  function checkRows(rows, index, ID) {
    if (index >= rows.length) {
      cy.log('No matching BULK ID')
      return;
    }

    const $row = rows.eq(index)

    cy.wrap($row).click()

    cy.iframe().find('div>span[class="primary_color_dark bulkID"]').should('be.visible').invoke('text').then((text) => {
      if (text.includes(ID)) {
        cy.wait(2000)
        cy.log('Bulk ID upload as Failed')
      } else {
        checkRows(rows, index + 1, ID)
      }
    });
  }

  cy.iframe().find('[class="col s4 pd_zero"]>span.lh.collapse_btnPD1').then((rows) => {
    cy.wait(6000)
    cy.fixture('userData/BankData.json').then((user) => {
      const ID = user.BulkID
      checkRows(rows, 0, ID)
    })
  })
})