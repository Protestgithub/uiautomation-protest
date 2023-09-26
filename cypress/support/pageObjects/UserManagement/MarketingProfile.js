class MarketingProfile {
    getAddMarketingProfile() {
        return cy.iframe().find('button[class="MuiButtonBase-root MuiButton-root MuiButton-contained MuiButton-containedSizeSmall MuiButton-sizeSmall"]')
    }
    getEditMArketingProfile() {
        return cy.iframe().find('.MuiTableCell-root.MuiTableCell-body.tableCell.MuiTableCell-alignLeft:nth-child(5) svg.MuiSvgIcon-root').eq(0)
    }
    getsave() {
        return cy.iframe().find('button.MuiButtonBase-root.MuiButton-root.MuiButton-contained.jss38.MuiButton-contained > span.MuiButton-label')
    }
    getMarketingProfileCode() {
        return cy.iframe().find('input[name="marketingProfileCode"]')
    }
    getMarketingProfileName() {
        return cy.iframe().find('input[name="marketingProfileName"]')
    }
    getMarketingProfileDomainName() {
        return cy.iframe().find('#mui-component-select-domain')
    }
    getMarketingProfileDomainName1() {
        return cy.iframe().find('div .MuiList-root.MuiMenu-list.MuiList-padding [data-value="SUBS"]')
    }
    getMarketingProfileCategoryName() {
        return cy.iframe().find('#mui-component-select-category')
    }
    getMarketingProfileCategoryName1() {
        return cy.iframe().find('div .MuiList-root.MuiMenu-list.MuiList-padding [data-value="SUBS"]')
    }
    getMarketingProfileMFSProvider() {
        return cy.iframe().find('[id="mui-component-select-marketingProfileDetails[0].mfsProvider"]')
    }
    getMarketingProfileMFSProvider1() {
        return cy.iframe().find('div .MuiList-root.MuiMenu-list.MuiList-padding [data-value="101"]')
    }
    getMarketingProfileWalletType() {
        return cy.iframe().find('[id="mui-component-select-marketingProfileDetails[0].walletType"]')
    }
    getMarketingProfileWalletType1() {
        return cy.iframe().find('div .MuiList-root.MuiMenu-list.MuiList-padding [data-value="12"]')
    }
    getMarketingProfileGrade() {
        return cy.iframe().find('[id="mui-component-select-marketingProfileDetails[0].gradeCode"]')
    }
    getMarketingProfileGrade1() {
        return cy.iframe().find('div .MuiList-root.MuiMenu-list.MuiList-padding [data-value="SUBS"]')
    }
    getMarketingProfileInstrumentTCP() {
        return cy.iframe().find('[id="mui-component-select-marketingProfileDetails[0].instrumentLevelTCP"]')
    }
    getMarketingProfileInstrumentTCP1() {
        return cy.iframe().find('div>ul[class="MuiList-root MuiMenu-list MuiList-padding"]>li').eq(1)
    }
    
    getMarketingProfileAddBtn() {
        return cy.iframe().find('div[class="jss36 jss41"] button[class="MuiButtonBase-root MuiButton-root MuiButton-contained jss38 MuiButton-contained"]')
    }
    getSearchProfilecode() {
        return cy.iframe().find('input[id="profileCode"]')
    }
    getsearchbtn() {
        return cy.iframe().find('button[id="search-btn"]')
    }
    getMarketingProfileWalletType2() {
        return cy.iframe().find('div .MuiList-root.MuiMenu-list.MuiList-padding [data-value="12"]')
    }
    getMarketingProfileAddBtn1(){
                return cy.iframe().find('div[class="jss77 jss82"] button[class="MuiButtonBase-root MuiButton-root MuiButton-contained jss79 MuiButton-contained"]')
    }
    getMarketingProfileGrade2() {
        return cy.iframe().find('div .MuiList-root.MuiMenu-list.MuiList-padding [data-value="GRT"]')
    }
    getMarketingProfileInstrumentTCP2() {
        return cy.iframe().find('div .MuiList-root.MuiMenu-list.MuiList-padding')
    }
    getMarketingProfileInstrumentTCPWholesaler() {
        return cy.iframe().find('div .MuiList-root.MuiMenu-list.MuiList-padding [data-value="TCP2206232209.012989"]')
    }

    getMarketingProfileGradeWholesaler() {
        return cy.iframe().find('div .MuiList-root.MuiMenu-list.MuiList-padding [data-value="GWS"]')
    }
    getMarketingProfileCategoryWholesaler() {
        return cy.iframe().find('div .MuiList-root.MuiMenu-list.MuiList-padding [data-value="WHS"]')
    }
    getMarketingProfileDomainWholesaler() {
        return cy.iframe().find('div .MuiList-root.MuiMenu-list.MuiList-padding [data-value="DISTWS"]')
    }
    getAllTextFields(){
        return cy.iframe().find('input.MuiInputBase-input.MuiOutlinedInput-input')
    }
    getAllDropDown(){
        return cy.iframe().find('div.MuiSelect-selectMenu')
    }
//Bhagya

getprofilecode() {
     return cy.iframe().find('#profileCode')
    }
    getprofilename() {
     return cy.iframe().find('#profileName')
    }
    getsearchoption() {
      return cy.iframe().find('#search-btn')
    }
    getediticon() {
    return cy.iframe().find('[aria-label="edit"]')
    }
    getaddwallet() {
     return cy.iframe().find('span[class="MuiButton-label"]').eq(0)
    }
    getMarketingprofileMFSProvider() {
     return cy.iframe().find('[id="mui-component-select-marketingProfileDetails[1].mfsProvider"]')
    }
    getMarketingprofileMFSProvider2(){
    return cy.iframe().find('div .MuiList-root.MuiMenu-list.MuiList-padding [data-value="102"]')
    } //div[id="mui-component-select-marketingProfileDetails[1].mfsProvider"]
    getMarketingprofileWalletType() {
    return cy.iframe().find('[id="mui-component-select-marketingProfileDetails[1].walletType"]')
    }
    getMrketingprofileWalletType2() {
    return cy.iframe().find('div .MuiList-root.MuiMenu-list.MuiList-padding [data-value="12"]')
    }
    getMarketingprofileGrade() {
     return cy.iframe().find('[id="mui-component-select-marketingProfileDetails[1].gradeCode"]')
    }
    getMarketingprofileGrade2() {
     return cy.iframe().find('div .MuiList-root.MuiMenu-list.MuiList-padding [data-value="SUBS"]')
    }
    getMarketingprofileInstrumentTCP() {
     return cy.iframe().find('[id="mui-component-select-marketingProfileDetails[1].instrumentLevelTCP"]')
    }
    getMarketingprofileInstrumentTCP2() {
     return cy.iframe().find('div>ul[class="MuiList-root MuiMenu-list MuiList-padding"]>li').eq(1)
    }
    getdeleteteicon(){
     return cy.iframe().find('[class="MuiSvgIcon-root"]')
    }
    getMarketingprofileSavebBtn1(){
     return cy.iframe().find('button[type="submit"]')
    }
    getsearchoption1(){
     return cy.iframe().find('span[class="MuiTouchRipple-root"]')
    }
    getediticon1(){
     return cy.iframe().find('[aria-label="edit"]')
    }
    getdeleteteicon1(){
     return cy.iframe().find('path[d="M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM19 4h-3.5l-1-1h-5l-1 1H5v2h14V4z"]')
    }
    getMarketingprofileSavebtn2(){
    return cy.iframe().find('button[type="submit"]')
    }
    getSuccessmsg(){
     return cy.iframe().find('#client-snackbar')
    }
    getMarketingprofileWalletType2() {
     return cy.iframe().find('div .MuiList-root.MuiMenu-list.MuiList-padding [data-value="11"]')
    }

}
export default MarketingProfile