import register from '../pageObjects/UserManagement/register';
function getRandomName() {
    name = "";
    var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    for (var i = 0; i < 5; i++)
        name += possible.charAt(Math.floor(Math.random() * possible.length));
    return name;
}

const uuid = () => Cypress._.random(1e8)
mobile = "77" + uuid()
let Sysfilelogin = 'cypress/fixtures/userData/SystemAdminLogin.json'
var subRegistration = 'cypress/fixtures/userData/subscriberReg.json'
var filename = 'cypress/fixtures/userData/AdministratorData.json'
var BuisnessReg = 'cypress/fixtures/userData/BusinessUsersData.json'
var BankData = 'cypress/fixtures/userData/BusinessUsersDataO2C.json'
var BankDetails = "cypress/fixtures/UserManagement.json"

var loginId, mobile,KycValue, amount, name
const timestamp = (new Date).getTime()
KycValue = "A" + timestamp

const registerPage = new register()

Cypress.Commands.add('getEmailID', () => {
    
    registerPage.getMobileNumber().invoke('val').then((val)=>{
        cy.log(val)
        let userID = "Test" + val
        let emailId = userID.concat('@comviva.com')
        registerPage.getEmailID().clear().type(emailId, { force: true })
        cy.readFile(Sysfilelogin).then((data) => {
        data.SYSEmailId = emailId
        cy.writeFile(Sysfilelogin, data)
        })
    })
})

Cypress.Commands.add('getSubEmailID', () => {
    
    registerPage.getMobileNumber().invoke('val').then((val)=>{
        cy.log(val)
        let userID = "Test" + val
        let emailId = userID.concat('@comviva.com')
        registerPage.getEmailID().clear().type(emailId, { force: true })
        cy.readFile(subRegistration).then((data) => {
        data.SubEmailId = emailId
        cy.writeFile(subRegistration, data)
        })
    })  
})

Cypress.Commands.add('getCCAdminEmailID', () => {
    
    registerPage.getMobileNumber().invoke('val').then((val)=>{
        cy.log(val)
        let userID = "Test" + val
        let emailId = userID.concat('@comviva.com')
        registerPage.getEmailID().clear().type(emailId, { force: true })
        cy.readFile(filename).then((data) => {
        data.CCAEmailId = emailId
        cy.writeFile(filename, data)
        })
    })  
})

Cypress.Commands.add('getDistributerEmailID', () => {
    
    registerPage.getMobileNumber().invoke('val').then((val)=>{
        cy.log(val)
        let userID = "Test" + val
        let emailId = userID.concat('@comviva.com')
        registerPage.getEmailID().clear().type(emailId, { force: true })
        cy.readFile(BuisnessReg).then((data) => {
        data.DistributerEmailId = emailId
        cy.writeFile(BuisnessReg, data)
        })
    })  
})
Cypress.Commands.add('getDistributerEmailID1', () => {
    
    registerPage.getMobileNumber().invoke('val').then((val)=>{
        cy.log(val)
        let userID = "Test" + val
        let emailId = userID.concat('@comviva.com')
        registerPage.getEmailID().clear().type(emailId, { force: true })
        cy.readFile(BuisnessReg).then((data) => {
        data.DistributerEmailId1 = emailId
        cy.writeFile(BuisnessReg, data)
        })
    })  
})


Cypress.Commands.add('getMerchantEmailID', () => {
    
    registerPage.getMobileNumber().invoke('val').then((val)=>{
        cy.log(val)
        let userID = "Test" + val
        let emailId = userID.concat('@comviva.com')
        registerPage.getEmailID().clear().type(emailId, { force: true })
        cy.readFile(BuisnessReg).then((data) => {
        data.MerchantEmailID = emailId
        cy.writeFile(BuisnessReg, data)
        })
    })  
})

Cypress.Commands.add('getAtmMachineEmailID', () => {
    
    registerPage.getMobileNumber().invoke('val').then((val)=>{
        cy.log(val)
        let userID = "Test" + val
        let emailId = userID.concat('@comviva.com')
        registerPage.getEmailID().clear().type(emailId, { force: true })
        cy.readFile(BuisnessReg).then((data) => {
        data.AtmMachineEmailID = emailId
        cy.writeFile(BuisnessReg, data)
        })
    })  
})

Cypress.Commands.add('getBasicInfoTextFields', ( )=>{

    if(Cypress.env('version').includes('x.7')){
        registerPage.getversion7AllBasicFormTextFields().should('be.enabled').each(($el)=>{
            cy.wrap($el).type(getRandomName() + "Test", {force: true})
          })
    }
    else{
        registerPage.getAllBasicFormTextFields().each(($el)=>{
            cy.wrap($el).type(getRandomName() + "Test")
          })
    }
})


Cypress.Commands.add('getEmployeeBasicInfoTextFields', ( )=>{

    if(Cypress.env('version').includes('x.7')){
        registerPage.getversion7EmployeeAllBasicFormTextFields().each(($el)=>{
            cy.wrap($el).type(getRandomName() + "Test")
          })
    }
    else{
        registerPage.getEmployeeAllBasicFormTextFields().each(($el)=>{
            cy.wrap($el).type(getRandomName() + "Test")
          })
    }
})

Cypress.Commands.add('getKYCTextFields', ( )=>{

    
    if(Cypress.env('version').includes('x.7')){
    registerPage.getversion7AllTextFields().each(($el)=>{
    cy.wrap($el).type(KycValue, { force: true })
    }) 
    }
    else{
    registerPage.getAllKYCTextFields().each(($el)=>{
      cy.wrap($el).type(KycValue, { force: true })
          })
    }


//     var element =  document.getElementsByTagName('#kyc-1 > div > app-render-fields > div > app-input > div > input');
//     if (typeof(element) != 'undefined' && element != null)
//     {
//     registerPage.getversion7AllTextFields().each(($el)=>{
//     cy.wrap($el).type(KycValue, { force: true })
//     }) 
//     }else {
//     registerPage.getAllKYCTextFields().each(($el)=>{
//       cy.wrap($el).type(KycValue, { force: true })
//     }) 
//   }
})

   
Cypress.Commands.add('getBankDetails', ( )=>{

    if(Cypress.env('version').includes('x.7'))    
// var element =  document.getElementsByName('[name="currency"]');
// if (typeof(element) != 'undefined' && element != null)

{
    var  ifscnum, accnumber
    const t = parseInt(Date.now()/1000);
    ifscnum="S"+t
    const uuidbkd = () => Cypress._.random(1e9)
    accnumber="4239346"+uuidbkd()
    cy.readFile(BankDetails).then((data1)=>{
        registerPage.getCurrency().select(data1.Bank.Currency, { force: true })
   
    
    cy.readFile(BankData).then((data) => {
    data.CurrencyDetail= data1.Bank.Currency
    cy.writeFile(BankData, data)
  })
   
   registerPage.getBankName().select(data1.Bank.BankName, {force:true})
   
   cy.readFile(BankData).then((data) => {
   data.BankNameDetail= data1.Bank.BankName
   cy.writeFile(BankData, data)
  })

 
   registerPage.getAccountNum().type(accnumber, { force: true })
   
   cy.readFile(BankData).then((data) => {
   data.Accnum= accnumber
   cy.writeFile(BankData, data)
  })
   registerPage.getConfirmAccNum().type(accnumber, { force: true })
   registerPage.getNickName().type(getRandomName(), { force: true })
   registerPage.getBankAccountType().select(data1.Bank.BankAccountType,{force:true})
   cy.readFile(BankData).then((data) => {
   data.BankAccountTYpeDetail= data1.Bank.BankAccountType
   cy.writeFile(BankData, data)
   })
   
   registerPage.getBankIFSC().type(ifscnum, { force: true })
   registerPage.getNextButtonBasic3().click({force:true})
   registerPage.getSubmitButton().click({ force: true })
 })
}else {
    registerPage.getSubmitButton().click({ force: true })
}
})    

Cypress.Commands.add('getBankDetails1', ( )=>{

    if(Cypress.env('version').includes('x.7'))    
{
   registerPage.getNextButtonBasic3().click({force:true})
   registerPage.getSubmitButton().click({ force: true })
}else {
    registerPage.getSubmitButton().click({ force: true })
}
})    


Cypress.Commands.add('getApprovalsModule', ( )=>{

cy.get('html').then(($ele) => {
    cy.log($ele)
    if ($ele.find('[data-testid*="APPROVALS"]').length > 0) {
        cy.intercept('/mobiquitypay/v1/ums/*').as('getApprovals')
        cy.get('[data-testid*="APPROVALS"]').click()
        cy.wait('@getApprovals', { timeout: 30000})
    } else {
  cy.waitUntil(() => {
    return cy.get('[data-testid*="APPROVALS"]').click()
  })  
 }
})

cy.get('html').then(($ele) => {
    cy.log($ele)
    if ($ele.find('[data-testid*="APPROVALS"]').length > 0) {
        cy.intercept('/mobiquitypay/v1/ums/*').as('getApprovals')
        cy.get('[data-testid*="APPROVALS"]').click()
        cy.wait('@getApprovals', { timeout: 30000})
    } else {
  cy.waitUntil(() => {
    return cy.iframe().find('h4.text-secondary').should('be.visible')
  })  
 }
})
})

Cypress.Commands.add('getEmployeeApproval',(filename) =>
cy.readFile(filename).then((user)  => {
    let Time = user.EmployeeCreatedOnTime
    let shouldStop = false
    cy.iframe().find('.mat-table.cdk-table.mat-sort>mat-row').each(($row=>{
        cy.then(() => {
            if(shouldStop){
                return
            }
        cy.wrap($row).within(function(){
            cy.get('mat-cell').each(($el=>{
                cy.log($el.text())
                if($el.text().includes(Time) /*&& $el.text().includes()*/)
                {
                cy.get('[role="gridcell"]').eq(0).click({force: true})    
                shouldStop = true
                }
            }))
        })
    })
}))
})
)

Cypress.Commands.add('getCorporateApproval',(BuisnessReg) =>
cy.readFile(BuisnessReg).then((user)  => {
    let Time = user.CorporateCreatedOnTime
    let shouldStop = false
    cy.iframe().find('.mat-table.cdk-table.mat-sort>mat-row').each(($row=>{
        cy.then(() => {
            if(shouldStop){
                return
            }
        cy.wrap($row).within(function(){
            cy.get('mat-cell').each(($el=>{
                cy.log($el.text())
                if($el.text().includes(Time) /*&& $el.text().includes()*/)
                {
                cy.get('[role="gridcell"]').eq(0).click({force: true})    
                shouldStop = true
                }
            }))
        })
    })
}))
})
)

Cypress.Commands.add('getHeadMerchantEmail', () => {
    
    registerPage.getMobileNumber().invoke('val').then((val)=>{
        cy.log(val)
        let userID = "Test" + val
        let emailId = userID.concat('@comviva.com')
        registerPage.getEmailID().clear().type(emailId, { force: true })
        cy.readFile(BuisnessReg).then((data) => {
        data.HeadMerchantEmailID = emailId
        cy.writeFile(BuisnessReg, data)
        })
    })  
})

Cypress.Commands.add('getEmployeeEmail', () => {
    
    registerPage.getMobileNumber().invoke('val').then((val)=>{
        cy.log(val)
        let userID = "Test" + val
        let emailId = userID.concat('@comviva.com')
        registerPage.getEmailID().clear().type(emailId, { force: true })
        cy.readFile(BuisnessReg).then((data) => {
        data.EmployeeEmailID = emailId
        cy.writeFile(BuisnessReg, data)
        })
    })  
})



Cypress.Commands.add('MobileNumber', ()=> {
    //const rn = parseInt(Cypress.env('mobileDigits')) - 2

    function getRandomDigits(num) {
        const rn=Number(num)-2
        const a = Number(String(Date.now()).slice(0,rn))
        let p=a+Number(String(Date.now()).slice(-4))
        cy.log(p)
       return cy.wrap(p)
    }

    getRandomDigits(Cypress.env('mobileDigits')).then(data => {
        cy.log(data);
        let mobile= Cypress.env('prefix')+data
        registerPage.getMobileNumber().clear().type(mobile, { force: true });
    })
})
