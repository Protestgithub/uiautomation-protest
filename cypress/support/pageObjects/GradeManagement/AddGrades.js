class AddGrades{

    getAddbttn(){
        return cy.iframe().find('#grades_addGrades_submit')
    }
    getDomainName(){
        return cy.iframe().find('select[id="grades_addGrades_domainCode"]')
    }
    getCatergoryName(){
        return cy.iframe().find('select[id="grades_addGrades_categoryCode"]')
    }
    
    getgradeCode(){
        return cy.iframe().find('#grades_addGrades_gradeList_0__gradeCode')
    }
    getGradeName(){
        return cy.iframe().find('#grades_addGrades_gradeList_0__gradeName')
    }
    
    getSavebttn(){
        return cy.iframe().find('input[value="Save"]')
    }
    getConfirmbttn(){
        return cy.iframe().find('#grades_saveGrades_submit')
    }

    getSuccessmsg()
    {
        return cy.iframe().find('.actionMessage')
    }
    getERRORmsg(){
        return cy.iframe().find('.errorMessage')
    }
    getCategoryMenu(){
        return cy.iframe().find('tbody>tr>td.tabhead').eq(1)
    }
    getGradeMenu(){
        return cy.iframe().find('tbody>tr>td.tabhead').eq(3)
    }
    //----------------------------------------------------------
    getGradeName2(){
        return cy.iframe().find('input[name="gradeList[1].gradeName"]')
    }
    getGradeCode1(){
        return cy.iframe().find('#grades_addMoreGrades_gradeList_1__gradeCode')
    }
    getaddmoregrade(){
        return cy.iframe().find('input[value="Add More Grades"]')
    }

    }
    export default AddGrades