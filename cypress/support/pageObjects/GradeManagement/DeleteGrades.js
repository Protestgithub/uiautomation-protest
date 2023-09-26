class DeleteGrades {

  getDeleteBttn() {
    return cy.iframe().find('#deleteGrades_delete_submit')
  }
  getDeleteConfirm() {

    
    return cy.iframe().find('#delconfirm_submit')

  }
  
  getDeleteRecord() {

    cy.readFile('cypress/fixtures/userData/Gradedata.json').then((user) => {
      let Grad = user.GradeName
      cy.log(Grad)


      return cy.iframe().find('#deleteGrades_delete .wwFormTableC>tbody>tr', '{force:true}').each(($row => {
        cy.wrap($row).within(function () {
          cy.get('td').each(($el => {

            if ($el.text() == Grad) {
              cy.get('[type="checkbox"]').click()
            }
          }))
        })
      }))
    })
  }

  getDeleteBttn() {
    return cy.iframe().find('#deleteGrades_delete_submit')
  }
  getSuccessmessage(){
    return cy.iframe().find('span.actionMessage')
  }
//--------------------------grade deletion-------------------
getDeleteRecord55() {
  cy.readFile('cypress/fixtures/userData/Gradedata.json').then((user) => {
    let Grad = user.GradeName55
    cy.log(Grad)
    return cy.iframe().find('#deleteGrades_delete .wwFormTableC>tbody>tr', '{force:true}').each(($row => {
      cy.wrap($row).within(function () {
        cy.get('td').each(($el => {
          if ($el.text() == Grad) {
            cy.get('[type="checkbox"]').click()
          }
        }))
      })
    }))
  })
}

getERRORmsg(){
  return cy.iframe().find('.errorMessage')
}


}
export default DeleteGrades