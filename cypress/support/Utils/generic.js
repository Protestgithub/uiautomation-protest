

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
import homePage from '../pageObjects/homePage'
import register from '../pageObjects/UserManagement/register';
import PricingEnginePage from '../pageObjects/PricingEngine/PricingEnginePage';
import DateUtils from '../Utility/DateUtils';
import 'cypress-file-upload';
import 'cypress-wait-until';
import API from '../pageObjects/API';
import RegulatoryProfile from '../pageObjects/UserManagement/RegulatoryProfile';
import MarketingProfile from '../pageObjects/UserManagement/MarketingProfile';
import TransferControlProfile from '../pageObjects/TransferControlProfile';
import AddGrades from '../pageObjects/GradeManagement/AddGrades';
import ModifyGrade from '../pageObjects/GradeManagement/ModifyGrades';
import approvals from '../pageObjects/UserManagement/approvals';
import Reconcilation from '../pageObjects/Reconcilation/Reconcilation';
import manageUsers from '../pageObjects/UserManagement/manageUsers';
import O2CTransferInitiate from '../pageObjects/OperatorToChannel/O2CTransferInitiate'
import securityQuestion from '../pageObjects/SecurityQuestion/securityQuestion'
import ChanneltoChannel from '../pageObjects/ChanneltoChannel/ChanneltoChannel.js';
import LoginPage from "../pageObjects/ConsumerPortalUserLogin/LoginPage";

//-------------------------Object Declaration----------------------------------------------------------
const O2CTransferInitiatePage = new O2CTransferInitiate()
const C2C = new ChanneltoChannel()
const manageUsersPage = new manageUsers()
const ModifyGradePage = new ModifyGrade()
const pageLogin = new LoginPage()
const welcomePage = new homePage()
const registerPage = new register()
const tcpPage = new TransferControlProfile()
const AddGradePage = new AddGrades()
const APIPage = new API()
const approvalPage = new approvals
const ReconPage = new Reconcilation()
var pricingEnginePage = new PricingEnginePage()
var dateUtils = new DateUtils()
const securityQuestionPage = new securityQuestion()

var SubMobile

var RegulatoryFile = 'cypress/fixtures/userData/Regulatory&MarketingProfile.json'
const RegulatoryProfile1 = new RegulatoryProfile()
const MarketingProfile1 = new MarketingProfile()
const filenameTCP = 'userData/TCPdata.json'
const CustTCPdata = 'userData/CustTCPdata.json'
var Tcpname, Tcpname1
const Password1 = 'Com@135'
var name
let Sysfilelogin = 'cypress/fixtures/userData/SystemAdminLogin.json'
let BAlogin = 'cypress/fixtures/userData/AdministratorData.json'
let ApiService = 'cypress/fixtures/API/APIEndPoints.json'
var O2Cfile = "cypress/fixtures/userData/O2Cdata.json"
var TransactionFile = "cypress/fixtures/userData/TransactionFile.json"
let loginId, mobile, Password

//------------------------------------------------------------------------------
function getRandomName() {
    name = "";
    var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    for (var i = 0; i < 5; i++)
        name += possible.charAt(Math.floor(Math.random() * possible.length));
    return name;
}
function getRandomName1() {
    name = "12";
    var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    for (var i = 0; i < 7; i++)
        name += possible.charAt(Math.floor(Math.random() * possible.length));
    return name;
}

function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
//-----------------------------------------------------------------------------

Cypress.Commands.add('launchURL', (URL) => {
    cy.visit(URL + Cypress.env("container"))
    cy.request(URL + Cypress.env("container"))
})

Cypress.Commands.add('checkWelcomeText', (Text) => {
    cy.frameLoaded(pageLogin.getiFrame())
    welcomePage.getUserMenu().should('be.visible').click()
    welcomePage.getWelcomeText().should('contain.text', Text)
    welcomePage.getUserMenu().click()
})
Cypress.Commands.add('login', (Username, Password) => {
    cy.frameLoaded(pageLogin.getiFrame())
    cy.readFile(ApiService).then((data) => {
        let dataapi = data.loginurl
        cy.intercept(dataapi).as('all')
        cy.waitUntil(() => {
            return cy.iframe().find('.form-input').eq(0).type(Username)
        })
        pageLogin.getInputForm().eq(1).type(Password)
        pageLogin.getLoginBtn().eq(0).click()
        cy.checkAPI(dataapi)
    })
})

Cypress.Commands.add('loginService', (Username, Password) => {

    cy.frameLoaded(pageLogin.getiFrame())
    cy.readFile(ApiService).then((data) => {
        let dataapi = data.loginurl
        cy.intercept(dataapi).as('all')
        cy.waitUntil(() => {
            return cy.iframe().find('.form-input').eq(0).type(Username)
        })
        pageLogin.getInputForm().eq(1).type(Password)
        cy.intercept('/mobiquitypay/v1/container/menus').as('loadMenu')
        pageLogin.getLoginBtn().eq(0).click()
        cy.checkAPI(dataapi)
        cy.wait('@loadMenu').then((interception) => {
            let response = interception.response.body
            const resValues = Object.values(response)
            cy.log(resValues[3])
        })
    })
})

Cypress.Commands.add('login1', (Password) => {
    cy.frameLoaded(pageLogin.getiFrame())
    cy.readFile(ApiService).then((data) => {
        let dataapi = data.loginurl
        cy.intercept(dataapi).as('all')
        cy.waitUntil(() => {
            return cy.iframe().find('.form-input').eq(0).type(Password)
        })
        pageLogin.getInputForm().eq(1).type(Password)
        //cy.intercept('/mobiquitypay/ums/v2/user/auth/change-credential').as('getChangePassword')
        pageLogin.getchangepassword().click({ force: true })
        //cy.wait('@getChangePassword', {timeout:10000})
    })
})

Cypress.Commands.add('Passwordchange', (Text) => {
    cy.frameLoaded(pageLogin.getiFrame())
    cy.waitUntil(() => {
        return cy.iframe().find('p.text-content').should('contain', Text)
    })
})

Cypress.Commands.add('SysAdminlogin', () => {
    cy.frameLoaded(pageLogin.getiFrame())
    cy.readFile(ApiService).then((data) => {
        let dataapi = data.loginurl
        cy.intercept(dataapi).as('all', { timeout: 10000 })
        cy.readFile(Sysfilelogin).then((data) => {
            let loginID = data.LoginId
            let word = data.ChangePassword
            cy.waitUntil(() => {
                return cy.iframe().find('.form-input').eq(0).should('be.visible').type(loginID)
            })
            pageLogin.getInputForm().eq(1).type(word)
            cy.intercept('/mobiquitypay/ums/v3/user/auth/web/login').as('login')
            cy.intercept('/mobiquitypay/v1/container/menus').as('loadMenu')
            pageLogin.getLoginBtn().eq(0).click()
            cy.wait('@login')
            welcomePage.getUserMenu().should('be.visible')


        })
        cy.checkAPI(dataapi)
        cy.wait('@loadMenu').then((interception) => {
            let response = interception.response.body
            const resValues = Object.values(response)
            cy.log(resValues[3])
        })
    })
})


Cypress.Commands.add('SysAdminlogin2', () => {
    cy.frameLoaded(pageLogin.getiFrame())
    cy.readFile(ApiService).then((data) => {
        let dataapi = data.loginurl
        cy.intercept(dataapi).as('all')
        cy.readFile(Sysfilelogin).then((data) => {
            let loginID = data.LoginId1
            let word = data.ChangePassword1

            cy.waitUntil(() => {
                return cy.iframe().find('.form-input').eq(0).should('be.visible').type(loginID)
            })
            pageLogin.getInputForm().eq(1).type(word)
            cy.intercept('/mobiquitypay/ums/v3/user/auth/web/login').as('login')
            cy.intercept('/mobiquitypay/v1/container/menus').as('loadMenu')
            pageLogin.getLoginBtn().eq(0).click()
            cy.wait('@login')
            welcomePage.getUserMenu().should('be.visible')
        })
        cy.checkAPI(dataapi)
        cy.wait('@loadMenu').then((interception) => {
            let response = interception.response.body
            const resValues = Object.values(response)
            cy.log(resValues[3])
        })
    })
})

Cypress.Commands.add('SysAdminlogin3', () => {
    cy.frameLoaded(pageLogin.getiFrame())
    cy.readFile(ApiService).then((data) => {
        let dataapi = data.loginurl
        cy.intercept(dataapi).as('all')
        cy.readFile(Sysfilelogin).then((data) => {
            let loginID = data.LoginId2
            let word = data.ChangePassword2

            cy.waitUntil(() => {
                return cy.iframe().find('.form-input').eq(0).should('be.visible').type(loginID)
            })
            pageLogin.getInputForm().eq(1).type(word)
            cy.intercept('/mobiquitypay/ums/v3/user/auth/web/login').as('login')
            cy.intercept('/mobiquitypay/v1/container/menus').as('loadMenu')
            pageLogin.getLoginBtn().eq(0).click()
            welcomePage.getUserMenu().should('be.visible')
        })
        cy.checkAPI(dataapi)
        cy.wait('@loadMenu').then((interception) => {
            let response = interception.response.body
            const resValues = Object.values(response)
            cy.log(resValues[3])
        })
    })
})

Cypress.Commands.add('SysAdminlogin4', () => {
    cy.frameLoaded(pageLogin.getiFrame())
    cy.readFile(ApiService).then((data) => {
        let dataapi = data.loginurl
        cy.intercept(dataapi).as('all')
        cy.readFile(Sysfilelogin).then((data) => {
            let loginID = data.LoginId3
            let word = data.ChangePassword3

            cy.waitUntil(() => {
                return cy.iframe().find('.form-input').eq(0).should('be.visible').type(loginID)
            })
            pageLogin.getInputForm().eq(1).type(word)
            cy.intercept('/mobiquitypay/ums/v3/user/auth/web/login').as('login')
            cy.intercept('/mobiquitypay/v1/container/menus').as('loadMenu')
            pageLogin.getLoginBtn().eq(0).click()
            welcomePage.getUserMenu().should('be.visible')
        })
        cy.checkAPI(dataapi)
        cy.wait('@loadMenu').then((interception) => {
            let response = interception.response.body
            const resValues = Object.values(response)
            cy.log(resValues[3])
        })
    })
})

Cypress.Commands.add('SysAdminlogin5', () => {
    cy.frameLoaded(pageLogin.getiFrame())
    cy.readFile(ApiService).then((data) => {
        let dataapi = data.loginurl
        cy.intercept(dataapi).as('all')
        cy.readFile(Sysfilelogin).then((data) => {
            let loginID = data.LoginId5
            let word = data.ChangePassword5

            cy.waitUntil(() => {
                return cy.iframe().find('.form-input').eq(0).should('be.visible').type(loginID)
            })
            pageLogin.getInputForm().eq(1).type(word)
            cy.intercept('/mobiquitypay/ums/v3/user/auth/web/login').as('login')
            cy.intercept('/mobiquitypay/v1/container/menus').as('loadMenu')
            pageLogin.getLoginBtn().eq(0).click()
            welcomePage.getUserMenu().should('be.visible')
        })
        cy.checkAPI(dataapi)
        cy.wait('@loadMenu').then((interception) => {
            let response = interception.response.body
            const resValues = Object.values(response)
            cy.log(resValues[3])
        })
    })
})

Cypress.Commands.add('BAlogin', () => {
    cy.frameLoaded(pageLogin.getiFrame())
    cy.readFile("cypress/fixtures/userData/AdministratorData.json").then((data) => {
        let loginID = data.LoginId
        let word = "000000"
        pageLogin.getInputForm().eq(0).type(loginID)
        pageLogin.getInputForm().eq(1).type(word)
        cy.intercept('/mobiquitypay/ums/v3/user/auth/web/login').as('login')
        cy.intercept('/mobiquitypay/v1/container/menus').as('loadMenu')
        pageLogin.getLoginBtn().eq(0).click()
        cy.wait('@login')
        welcomePage.getUserMenu().should('be.visible')
    })
    //cy.checkAPI(dataapi)
    cy.wait('@loadMenu').then((interception) => {
        let response = interception.response.body
        const resValues = Object.values(response)
        cy.log(resValues[3])
    })
})

//-------------------------------------------------------------------------------

Cypress.Commands.add('csvToJSON', (CsvFile, JsonFile) => {
    let result = [];
    cy.readFile('cypress/fixtures/templates/BULK_O2C-template.csv')
        .then((data) => {
            var lines = data.split("\n")
            var headers = lines[0].split(",")
            for (var i = 0; i < lines.length; i++) {
                var obj = {};
                var currentline = lines[i].split(",");
                for (var j = 0; j < headers.length; j++) {
                    obj[headers[j]] = '';
                }
                cy.log(obj)
            }
            cy.writeFile('cypress/fixtures/BulkData/BULK_O2C-template.json', obj)
        })
    // console.log(result



})
Cypress.Commands.add('jsonToCSV', (JsonFile, CsvFile) => {
    cy.readFile('cypress/fixtures/BulkData/BULK_O2C-template.json').then((data) => {
        var fields = Object.keys(data)
        var values = Object.values(data)
        var csv1 = fields.map(function () { })
        csv1.unshift(fields.join(','))   // add header column
        let str1 = csv1;
        let sl2 = str1.slice(0, 1)
        var csv = values.map(function () { })
        csv.unshift(values.join(',')) // add header column
        let str2 = csv;
        let sl3 = str2.slice(0, 1)
        cy.writeFile('cypress/fixtures/templates/BULK_O2C-template.csv', sl2 + '\n' + sl3)
    })
})



//----------------------------------------------------------------------------------------------

Cypress.Commands.add('getrandomUserEmailID', () => {
    let num = Math.floor((Math.random() * 100))
    let userID = getRandomName().concat(getRandomName() + num)
    let emailId = userID.concat('@comviva.com')
    registerPage.getLoginID().type(userID, { force: true })
    registerPage.getEmailID().type(emailId, { force: true })
})

Cypress.Commands.add('getrandomUserEmailID1', () => {
    let num = Math.floor((Math.random() * 100))
    let userID = getRandomName().concat(getRandomName() + num)
    let emailId = userID.concat('@comviva.com')
    registerPage.getLoginID().type(userID, { force: true })
    registerPage.getEmailID().type(emailId, { force: true })
    cy.readFile(Sysfilelogin).then((data) => {
        data.SYSEmailId = emailId
        cy.writeFile(Sysfilelogin, data)
    })
})

Cypress.Commands.add('FirstName', () => {
    let hi = getRandomName()
    registerPage.getFirstName().type(hi, { force: true })
    cy.readFile('cypress/fixtures/userData/UserManagement.json').then((data) => {
        data.firstName = hi
        cy.writeFile('cypress/fixtures/userData/UserManagement.json', data)
    })
    function getRandomName() {
        name = "";
        var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
        for (var i = 0; i < 5; i++)
            name += possible.charAt(Math.floor(Math.random() * possible.length));
        return name;
    }

})


Cypress.Commands.add('selectYear', (yearName) => {
    const currentYear = new Date().getFullYear()
    pricingEnginePage.getYearNameStart().then(($year) => {
        if ($year.text == yearName) {
            cy.log(yearName + 'Year is Selected')
            return
        }
        else {
            if (yearName < currentYear) {
                pricingEnginePage.getNavigateBackStart().click()
            }
            else if (yearName > currentYear) {
                pricingEnginePage.getNavigateForwardStart().click()
            }
        }
        cy.selectYear(yearName)
    })
})

Cypress.Commands.add('selectMonth', (monthName) => {
    let currentMonth = new Date().getMonth() + 1
    let givenMonth = dateUtils.getMonthIndexFromName(monthName)
    pricingEnginePage.getMonthNamerStart().then(($month) => {
        if ($month.text().includes(monthName)) {
            cy.log(monthName + 'month is selected')
            return
        }
        else {
            if (givenMonth > currentMonth) {
                pricingEnginePage.getNavigateForwardStart().click()
            }
            else if (givenMonth < currentMonth) {
                pricingEnginePage.getNavigateBackStart().click()
            }
        }
        cy.selectMonth(monthName)
    })
})

Cypress.Commands.add('MPRandomName1', () => {
    let hi = Cypress.env("profileNameWHS")
    MarketingProfile1.getMarketingProfileName().type(hi, { force: true })
    cy.readFile(RegulatoryFile).then((data) => {
        data.MarketingProfileNameDistributer = hi
        cy.writeFile(RegulatoryFile, data)
    })
    function getRandomName() {
        name = "MP";
        var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
        for (var i = 0; i < 5; i++)
            name += possible.charAt(Math.floor(Math.random() * possible.length));
        return name;
    }
})

Cypress.Commands.add('selectDay', (dayName) => {
    pricingEnginePage.getCalanderDaysStart().eq(dayName - 1).click()
    cy.log(dayName + 'day is selected')
})



// Cypress.Commands.add('OTP',() => {

//   cy.intercept(Cypress.api('getOtpMob')).as('getOTP')
//   APIPage.getOTPicon().eq(0).click()
//   cy.wait('@getOTP').then((interception)=>{
//       let response =  interception.response.body
//       const resValues = Object.values(response)
//       const serviceRequestID = resValues[0]
//       cy.log(serviceRequestID)
//       let url1 = (Cypress.api('getOtpMobUrl'))
//       let getURL = url1.concat(serviceRequestID)
//      cy.request({
//          url: getURL,
//          headers:{
//           'Authorization': 'Basic YWRtaW46c2VjcmV0',
//           'Content-Type': 'application/json'
//          }
//      }).then((res) => {
//           let res1 = res.body
//           const res3 = Object.values(res1)
//           let OTP = res3[4]
//           var OTPArr = Array.from({length:6}, (v, k) => k+1)
//           cy.wrap(OTPArr).each((index) => {
//              APIPage.getOTPDailogbox().eq(index-1).type(OTP[index-1])
//           })
//           APIPage.getVerifybttn().click()
//      })
//   })

// })
Cypress.Commands.add('OTP', (Adminurl, port) => {
    if (Cypress.env('DB').includes("Yes")) {

        let url1
        cy.intercept('/mobiquitypay/v2/otp/generate').as('getOTP')
        APIPage.getOTPicon().eq(0).click({ force: true })
        cy.wait('@getOTP', { timeout: 30000 }).then((interception) => {
            let response = interception.response.body
            const resValues = Object.values(response)
            let serviceRequestID = resValues[1]
            cy.log(serviceRequestID)
            cy.readFile('cypress/fixtures/userData/SystemAdminLogin.json').then((data) => {
                let systemAdminNumber = data.MobileNumber


                const query = 'select * from (select OTP from OTP_RECORD order by created_on desc) where ROWNUM = 1;';

                cy.task("sqlQuery", query).then((result) => {
                    // cy.log(result.rows)

                    const OTP = Object.values(result.rows)
                    cy.log(OTP)
                    const arrOfDigits = Array.from(String(OTP), Number);

                    var OTPArr = Array.from({ length: 6 }, (v, k) => k + 1)
                    cy.wrap(OTPArr).each((index) => {
                        APIPage.getOTPDailogbox().eq(index - 1).type(arrOfDigits[index - 1])
                    })
                    APIPage.getVerifybttn().click()

                })
            })
        })
    }

    else {

        let url1
        cy.intercept('/mobiquitypay/v2/otp/generate').as('getOTP')
        APIPage.getOTPicon().eq(0).click({ force: true })
        cy.wait('@getOTP', { timeout: 30000 }).then((interception) => {
            let response = interception.response.body
            const resValues = Object.values(response)
            const serviceRequestID = resValues[1]
            cy.log(serviceRequestID)
            if (port == "No") {
                url1 = Adminurl + '/otpservice/internal/genotp/'
            } else {
                url1 = Adminurl + ':3133' + '/otpservice/internal/genotp/'
            }

            let getURL = url1.concat(serviceRequestID)
            cy.request({
                url: getURL,
                headers: {
                    'Authorization': 'Basic YWRtaW46c2VjcmV0',
                    'Content-Type': 'application/json'
                }
            }).then((res) => {
                let res1 = res.body
                const res3 = Object.values(res1)
                let OTP = res3[4]
                var OTPArr = Array.from({ length: 6 }, (v, k) => k + 1)
                cy.wrap(OTPArr).each((index) => {
                    APIPage.getOTPDailogbox().eq(index - 1).type(OTP[index - 1])
                })
                APIPage.getVerifybttn().click()
            })
        })

    }

})

Cypress.Commands.add('getSubMessage', (Adminurl, port) => {
    let url1
    cy.intercept('/mobiquitypay/serviceRequest/resume/any').as('getSubMessage')
    approvalPage.getApproveButton().click({ force: true })
    approvalPage.getApproveRequest().click({ force: true })
    //approvalPage.getApproveConfirmationMessage().contains(this.data2.confirmationMessage.editUser)
    //  cy.iframe().find('[id="generate-otp-icon"]').eq(0).click()
    cy.wait('@getSubMessage', { timeout: 30000 }).then((interception) => {
        let response = interception.response.body
        const resValues = Object.values(response)
        let serviceRequestID = resValues[0]
        cy.log(serviceRequestID)

        if (port == "No") {
            url1 = Adminurl + '/notify/internal/getByMessageIdOrExternalIdAndByToWhom?messageId='
        } else {
            url1 = Adminurl + ':9012' + '/notify/internal/getByMessageIdOrExternalIdAndByToWhom?messageId='
        }

        let url2 = url1.concat(serviceRequestID)
        let url3 = url2.concat('&toWhom=')

        cy.fixture('userData/subscriberReg.json').then((usermobile) => {
            SubMobile = usermobile.subscriberMobile
            cy.log(SubMobile)
        })
        let getURL = url3.concat(SubMobile)

        cy.request({
            url: getURL,
            headers: {
                'Authorization': 'Basic YWRtaW46c2VjcmV0',
                'Content-Type': 'application/json'
            }
        }).then((res) => {
            let res1 = res.body
            cy.readFile('cypress/fixtures/userData/subscriberMsg.json').then((data) => {
                data.subscriberMessage = res1
                cy.writeFile('cypress/fixtures/userData/subscriberMsg.json', data)
            })
        })
    })
})


Cypress.Commands.add('RPRandomName', () => {
    let hi = Cypress.env("profileName")
    RegulatoryProfile1.getregulatoryprofilename().type(hi, { force: true })
    cy.readFile(RegulatoryFile).then((data) => {
        data.RegulatoryProfileName = hi
        cy.writeFile(RegulatoryFile, data)
    })
    function getRandomName() {
        name = "RP";
        var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
        for (var i = 0; i < 5; i++)
            name += possible.charAt(Math.floor(Math.random() * possible.length));
        return name;
    }
})

Cypress.Commands.add('RPRandomName1', () => {
    let hi = Cypress.env("profileName") /*getRandomName()*/
    RegulatoryProfile1.getregulatoryprofilename().type(hi, { force: true })
    cy.readFile(RegulatoryFile).then((data) => {
        data.RegulatoryProfileName = hi
        cy.writeFile(RegulatoryFile, data)
    })
    function getRandomName() {
        name = "RP";
        var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
        for (var i = 0; i < 5; i++)
            name += possible.charAt(Math.floor(Math.random() * possible.length));
        return name;
    }
})


Cypress.Commands.add('MPRandomName', () => {
    let hi = Cypress.env("profileName") /*getRandomName()*/
    MarketingProfile1.getMarketingProfileName().type(hi, { force: true })
    cy.readFile(RegulatoryFile).then((data) => {
        data.MarketingProfileName = hi
        cy.writeFile(RegulatoryFile, data)
    })
    function getRandomName() {
        name = "MP";
        var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
        for (var i = 0; i < 5; i++)
            name += possible.charAt(Math.floor(Math.random() * possible.length));
        return name;
    }
})

Cypress.Commands.add('Password', (Adminurl, port) => {
    let url1
    cy.intercept('/mobiquitypay/serviceRequest/resume/any').as('getOTP')
    //  cy.iframe().find('[id="generate-otp-icon"]').eq(0).click()
    cy.wait('@getOTP', { timeout: 30000 }).then((interception) => {
        let response = interception.response.body
        const resValues = Object.values(response)
        serviceRequestID = resValues[0]
        cy.log(serviceRequestID)

        if (port == "No") {
            url1 = Adminurl + '/notify/internal/getByMessageIdOrExternalIdAndByToWhom?messageId='
        } else {
            url1 = Adminurl + ':9012' + '/notify/internal/getByMessageIdOrExternalIdAndByToWhom?messageId='
        }
        let url2 = url1.concat(serviceRequestID)
        let url3 = url2.concat('&toWhom=')
        let getURL = url3.concat(mobile)
        cy.request({
            url: getURL,
            headers: {
                'Authorization': 'Basic YWRtaW46c2VjcmV0',
                'Content-Type': 'application/json'
            }
        }).then((res) => {
            let res1 = res.body
            const res3 = Object.values(res1)
            let str1 = res3[0].split(/[\s,}=]+/)
            const authenticationValue = str1[20]
            cy.log(authenticationValue)
        })
    })
})

//----------------------------------------------------------------
var name
Cypress.Commands.add('GradeName', () => {
    let hi = Cypress.env('gradeName')
    var GradeFile = 'cypress/fixtures/userData/Gradedata.json'
    AddGradePage.getGradeName().type(hi, { force: true })
    cy.readFile(GradeFile).then((data) => {
        data.GradeName = hi
        cy.writeFile(GradeFile, data)
    })
    function getRandomName() {
        name = "";
        var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
        for (var i = 0; i < 5; i++)
            name += possible.charAt(Math.floor(Math.random() * possible.length));
        return name;
    }
})
var GradeFile = 'cypress/fixtures/userData/Gradedata.json'
Cypress.Commands.add('ModifyRecord', () => {
    cy.readFile('cypress/fixtures/userData/Gradedata.json').then((user) => {
        let Grad = user.GradeName
        cy.log(Grad)
        ModifyGradePage.getModifyTable().each(($row => {
            cy.wrap($row).within(function () {
                cy.get('td').each(($el => {
                    if ($el.text() == Grad) {
                        ModifyGradePage.getCheckBox().click()
                        ModifyGradePage.getModData().type(this.data01.ModifyGrade.Firstdata, { force: true })
                    }
                }))
            })
        }))
    })
})
//--------------------------------------------------------------------------------------
Cypress.Commands.add('O2CTransactionWriteData', () => {
    O2CTransferInitiatePage.getSuccessMsg().then((al => {
        let q = al.text()
        cy.log(q)
        let a = q.split(':')
        let b = a[1].trim()
        cy.log(b)
        cy.readFile(O2Cfile).then((data) => {
            data.TransactionID = b
            cy.writeFile(TransactionFile, data)
        })
    }))
})

Cypress.Commands.add('O2CTransactionWriteData1', () => {
    O2CTransferInitiatePage.getSuccessMsg().then((al => {
        let q = al.text()
        cy.log(q)
        let a = q.split(':')
        let b = a[1].trim()
        cy.log(b)
        cy.readFile(TransactionFile).then((data) => {
            data.TransactionID1 = b

            cy.writeFile(TransactionFile, data)
        })
    }))
})
Cypress.Commands.add('O2CTransactionWriteData2', () => {
    O2CTransferInitiatePage.getSuccessMsg().then((al => {
        let q = al.text()
        cy.log(q)
        let a = q.split(':')
        let b = a[1].trim()
        cy.log(b)
        cy.readFile(TransactionFile).then((data) => {
            data.TransactionID2 = b
            cy.writeFile(TransactionFile, data)
        })
    }))
})

Cypress.Commands.add('O2CTransactionReadData', () => {
    cy.readFile(TransactionFile).then((id => {
        let data = id.TransactionID
        manageUsersPage.getSearchTransactionID().type(data, "{force:true}", "{enter}")
    }))
})
//-------------------------------------------------------------------------------------------
Cypress.Commands.add('getprovider', () => {
    cy.frameLoaded(pageLogin.getiFrame())
    ReconPage.getprovider1().then(listing => {
        const randomNumber = getRandomInt(1, listing.length - 1);
        ReconPage.getprovider1().eq(randomNumber).then(($select) => {
            const text = $select.index()
            cy.log(text)
            ReconPage.getProviderSelect().select(text, { force: true })
        });
    })
})


//----------------------------------------Approval----------------------

Cypress.Commands.add('getApproval', (filename) => {
    if (Cypress.env('myActivity').includes('Available')) {
        cy.readFile(filename).then((user) => {
            let Time = user.CreatedOnTime
            let shouldStop = false
            cy.iframe().find('.mat-table.cdk-table.mat-sort>mat-row').each(($row => {
                cy.then(() => {
                    if (shouldStop) {
                        return
                    }
                    cy.wrap($row).within(function () {
                        cy.get('mat-cell').each(($el => {
                            cy.log($el.text())
                            if ($el.text().includes(Time) /*&& $el.text().includes()*/) {
                                cy.get('[role="gridcell"]').eq(0).click({ force: true })
                                shouldStop = true
                            }
                        }))
                    })
                })
            }))
        })


    } else {
        approvalPage.getCurrentDateRowData().eq(0).click({ force: true })
    }
}
)

Cypress.Commands.add('getTransferApproval', (filename) =>
    cy.readFile('cypress/fixtures/userData/Domain&CAT.json').then((user) => {
        let Time = user.TransferRuleID
        let shouldStop = false
        cy.iframe().find('.wwFormTableC>tbody>tr').each(($row => {
            cy.then(() => {
                if (shouldStop) {
                    return
                }
                cy.wrap($row).within(function () {
                    cy.get('td').each(($el => {
                        cy.log($el.text())
                        if ($el.text().includes(Time)) {
                            cy.get('[class="tabcol"]').contains("Approve").click({ force: true })

                            shouldStop = true
                        }
                    }))
                })
            })
        }))
    })
)
//----------------------------------------O2C Transaction Approval ----------------------------
Cypress.Commands.add('getO2CData', (filename) =>
    cy.readFile('cypress/fixtures/userData/TransactionFile.json').then((data) => {
        let ID = data.referenceNumber
        let shouldStop = false
        cy.iframe().find('#o2cApproval1_displayTransactionDetails .wwFormTableC>tbody>tr', '{force:true}').each(($row => {
            cy.then(() => {
                if (shouldStop) {
                    return
                }
                cy.wrap($row).within(function () {
                    cy.get('td').eq(3).each(($el => {
                        cy.log($el.text())
                        if ($el.text().includes(ID)) {
                            cy.get('.tabcol').eq(4).then((al) => {
                                let q = al.text()
                                cy.log(q)
                                let a = q.trim()
                                cy.log(a)
                                cy.readFile(TransactionFile).then((data) => {
                                    data.TransactionID = a
                                    cy.writeFile(TransactionFile, data)
                                })
                            })
                            cy.get('input[type="radio"]').click()
                            shouldStop = true
                        }
                    })
                    )
                })
            })
        }))
    }))
Cypress.Commands.add('getO2CData1', (filename) =>
    cy.readFile('cypress/fixtures/userData/TransactionFile.json').then((data) => {
        let ID = data.referenceNumber
        let shouldStop = false
        cy.iframe().find('#o2cApproval1_displayTransactionDetails .wwFormTableC>tbody>tr', '{force:true}').each(($row => {
            cy.then(() => {
                if (shouldStop) {
                    return
                }
                cy.wrap($row).within(function () {
                    cy.get('td').eq(3).each(($el => {
                        cy.log($el.text())
                        if ($el.text().includes(ID)) {
                            cy.get('.tabcol').eq(4).then((al) => {
                                let q = al.text()
                                cy.log(q)
                                let a = q.trim()
                                cy.log(a)
                                cy.readFile(TransactionFile).then((data) => {
                                    data.TransactionID1 = a
                                    cy.writeFile(TransactionFile, data)
                                })
                            })
                            cy.get('input[type="radio"]').click()
                            shouldStop = true
                        }
                    })
                    )
                })
            })
        }))
    }))
Cypress.Commands.add('getO2CData2', (filename) =>
    cy.readFile('cypress/fixtures/userData/TransactionFile.json').then((data) => {
        let ID = data.referenceNumber
        let shouldStop = false
        cy.iframe().find('#o2cApproval1_displayTransactionDetails .wwFormTableC>tbody>tr', '{force:true}').each(($row => {
            cy.then(() => {
                if (shouldStop) {
                    return
                }
                cy.wrap($row).within(function () {
                    cy.get('td').eq(3).each(($el => {
                        cy.log($el.text())
                        if ($el.text().includes(ID)) {
                            cy.get('.tabcol').eq(4).then((al) => {
                                let q = al.text()
                                cy.log(q)
                                let a = q.trim()
                                cy.log(a)
                                cy.readFile(TransactionFile).then((data) => {
                                    data.TransactionID2 = a
                                    cy.writeFile(TransactionFile, data)
                                })
                            })
                            cy.get('input[type="radio"]').click()
                            shouldStop = true
                        }
                    })
                    )
                })
            })
        }))
    }))
Cypress.Commands.add('getO2CData3', (filename) =>
    cy.readFile('cypress/fixtures/userData/TransactionFile.json').then((data) => {
        let ID = data.referenceNumber
        let shouldStop = false
        cy.iframe().find('#o2cApproval1_displayTransactionDetails .wwFormTableC>tbody>tr', '{force:true}').each(($row => {
            cy.then(() => {
                if (shouldStop) {
                    return
                }
                cy.wrap($row).within(function () {
                    cy.get('td').eq(3).each(($el => {
                        cy.log($el.text())
                        if ($el.text().includes(ID)) {
                            cy.get('.tabcol').eq(4).then((al) => {
                                let q = al.text()
                                cy.log(q)
                                let a = q.trim()
                                cy.log(a)
                                cy.readFile(TransactionFile).then((data) => {
                                    data.TransactionID3 = a
                                    cy.writeFile(TransactionFile, data)
                                })
                            })
                            cy.get('input[type="radio"]').click()
                            shouldStop = true
                        }
                    })
                    )
                })
            })
        }))
    }))

//-------------------Arpitha---------------------------
Cypress.Commands.add('checkAPI', (API) => {
    //cy.visit(URL + '/dfscontainer/#/')
    cy.intercept(API).as('all')
    cy.wait('@all', { timeout: 30000 }).then(inter => {
        if (inter.response.statusCode == 200) {
            cy.log('statusCode loop entered now')
            cy.log(JSON.stringify(inter.response.statusCode))
            console.log(JSON.stringify(inter.response.statusCode))
            cy.log('statusCode loop exit now')
        }

        else {
            cy.log('ERROR')
            cy.log(JSON.stringify(inter.response.statusCode))
            console.log(JSON.stringify(inter.response.statusCode))

        }

    })

})


//---------------------Folder Creation----------------------------------------------------------//

Cypress.Commands.add('FolderCreation', () => {
    cy.writeFile('cypress/fixtures/userData/SystemAdminLogin.json', { SysAdminMakerName: ' ' })
    cy.writeFile('cypress/fixtures/userData/TCPdata.json', { TcpProfileName: ' ' })
    cy.writeFile('cypress/fixtures/userData/TCPdata1.json', { TcpProfileNameSub: ' ' })
    cy.writeFile('cypress/fixtures/userData/CustTCPdata.json', { CustTCPProfileName: ' ' })
    cy.writeFile('cypress/fixtures/userData/CustTCPdata1.json', { CustTCPProfileNameSub: ' ' })
    cy.writeFile('cypress/fixtures/userData/subscriberMsg.json', { subscriberMessage: ' ' })
    cy.writeFile('cypress/fixtures/userData/UserManagement.json', { firstName: ' ' })
    cy.writeFile('cypress/fixtures/userData/Regulatory&MarketingProfile.json', { RegulatoryProfileName: ' ' })
    cy.writeFile('cypress/fixtures/userData/Gradedata.json', { GradeName: ' ' })
    cy.writeFile('cypress/fixtures/userData/AdministratorMsg.json', { ModifyMessage: ' ' })
    cy.writeFile('cypress/fixtures/userData/BusinessUsersData.json', { registeredMobile: ' ' })
    cy.writeFile("cypress/fixtures/userData/BusinessUsersDataO2C.json", { registeredMobileO2C: ' ' })
    cy.writeFile('cypress/fixtures/userData/BusinessUserSuspensionData.json', { registeredMobile: ' ' })
    cy.writeFile('cypress/fixtures/userData/churnSubscriberReg.json', { churnSubscriberRegistration: ' ' })
    cy.writeFile('cypress/fixtures/userData/cashIn&cashout.json', { cashinTransactionID: ' ' })
    cy.writeFile('cypress/fixtures/userData/Aservice.json', { ServiceRuleName: ' ' })
    cy.writeFile('cypress/fixtures/userData/AdministratorData.json', { BAMobileNumber: ' ' })
    cy.writeFile('cypress/fixtures/userData/BankData.json', { BAMobileNumber: ' ' })
    cy.writeFile('cypress/fixtures/userData/BusinessAdminLogin.json', { BAMobileNumber: ' ' })
    cy.writeFile('cypress/fixtures/userData/Domain&CAT.json', { BAMobileNumber: ' ' })
    cy.writeFile('cypress/fixtures/userData/O2CBulkData.json', { BAMobileNumber: ' ' })
    cy.writeFile('cypress/fixtures/userData/O2Cdata.json', { BAMobileNumber: ' ' })
    cy.writeFile('cypress/fixtures/userData/subscriberReg.json', { BAMobileNumber: ' ' })
    cy.writeFile('cypress/fixtures/userData/TransactionFile.json', { BAMobileNumber: ' ' })
    cy.writeFile('cypress/fixtures/churnData/ChurnUserInitiation.json', { IMSI: ' ' })
    cy.writeFile('cypress/fixtures/profileData/AuthProfile.json', { SubscriberProfileName: ' ' })
    cy.writeFile('cypress/fixtures/profileData/Profile.json', { SystemAdminSecuirtyProfile: ' ' })
    cy.writeFile('cypress/fixtures/profileData/SecurityProfileName.json', { subscriber: ' ' })
    cy.writeFile('cypress/fixtures/userData/Bank&Walletdata.json', { BankName: ' ' })
    cy.writeFile('cypress/fixtures/userData/AdminTransaction.json', { BankName: ' ' })
    cy.writeFile('cypress/fixtures/userData/W2BandB2W.json', { W2BId: ' ' })
    cy.writeFile('cypress/fixtures/userData/MobileRecharge.json', { RechargeTd: ' ' })

    cy.writeFile('cypress/fixtures/userData/C2CTransactionData1.json', {})
    cy.writeFile("cypress/fixtures/userData/BulkOperationData.json", { UserName1: ' ', })
    cy.writeFile("cypress/fixtures/userData/CumulativeTCPData.json", { CumulativeTcpName: ' ', })
    //tcp x.09 prerna
    cy.writeFile('cypress/fixtures/userData/TCPx.09.json', {})
    //Added for ElectricBill by Kalyani 
    cy.writeFile('cypress/fixtures/userData/ElectricBill.json', {})
    cy.writeFile('cypress/fixtures/userData/InternationalTransfer.json', {})
    cy.writeFile('cypress/fixtures/userData/CardToWallet.json', {})
})



//-------------Teardown----------------------------------
//------------------DeleteCCAAuthProfile------------------------------------------
Cypress.Commands.add('getDeleteCCA', (filename) =>
    cy.readFile(filename).then((user) => {
        let AuthProfileNamepath = user.CustomercareAdmin
        let shouldStop = false
        cy.iframe().find('.mat-table.cdk-table.mat-sort>mat-row').each(($row => {
            cy.then(() => {
                if (shouldStop) {
                    return
                }
                cy.wrap($row).within(function () {
                    cy.get('mat-cell').each(($el => {
                        cy.log($el.text())
                        if ($el.text().includes(AuthProfileNamepath) /*&& $el.text().includes()*/) {
                            cy.get('[role="gridcell"]').eq(0).click({ force: true })
                            shouldStop = true
                        }
                    }))
                })
            })
        }))
    })
)
//--------------------DeleteBusinessAuthProfile-----------------------------------
Cypress.Commands.add('getDeleteDistributor', (filename) =>
    cy.readFile(filename).then((user) => {
        let AuthProfileNamepath = user.BusinesseDistributor
        let shouldStop = false
        cy.iframe().find('.mat-table.cdk-table.mat-sort>mat-row').each(($row => {
            cy.then(() => {
                if (shouldStop) {
                    return
                }
                cy.wrap($row).within(function () {
                    cy.get('mat-cell').each(($el => {
                        cy.log($el.text())
                        if ($el.text().includes(AuthProfileNamepath) /*&& $el.text().includes()*/) {
                            cy.get('[role="gridcell"]').eq(0).click({ force: true })
                            shouldStop = true
                        }
                    }))
                })
            })
        }))
    })
)

//-----------------------DeleteBAAuthProfile-------------------------------------
Cypress.Commands.add('getDeleteBAAuthProfile', (filename) =>
    cy.readFile(filename).then((user) => {
        let AuthProfileNamepath = user.businesAadmin
        let shouldStop = false
        cy.iframe().find('.mat-table.cdk-table.mat-sort>mat-row').each(($row => {
            cy.then(() => {
                if (shouldStop) {
                    return
                }
                cy.wrap($row).within(function () {
                    cy.get('mat-cell').each(($el => {
                        cy.log($el.text())
                        if ($el.text().includes(AuthProfileNamepath) /*&& $el.text().includes()*/) {
                            cy.get('[role="gridcell"]').eq(0).click({ force: true })
                            shouldStop = true
                        }
                    }))
                })
            })
        }))
    })
)

//-----------------------DeleteAuthorizationProfileCreation------------------------
Cypress.Commands.add('getDeleteAuthProfile', (filename) =>
    cy.readFile(filename).then((user) => {
        let AuthProfileNamepath = user.SubscriberProfileName
        let shouldStop = false
        cy.iframe().find('.mat-table.cdk-table.mat-sort>mat-row').each(($row => {
            cy.then(() => {
                if (shouldStop) {
                    return
                }
                cy.wrap($row).within(function () {
                    cy.get('mat-cell').each(($el => {
                        cy.log($el.text())
                        if ($el.text().includes(AuthProfileNamepath) /*&& $el.text().includes()*/) {
                            cy.get('[role="gridcell"]').eq(0).click({ force: true })
                            shouldStop = true
                        }
                    }))
                })
            })
        }))
    })
)
//-----------------------------------DeleteWallet---------------------------------
Cypress.Commands.add('getDeleteWallet', (filename) =>
    cy.readFile(filename).then((user) => {
        let wallet = user.WalletName
        let shouldStop = false
        cy.iframe().find('table.wwFormTableC>tbody>tr').each(($row => {
            cy.then(() => {
                if (shouldStop) {
                    return
                }
                cy.wrap($row).within(function () {
                    cy.get('td').each(($el => {
                        cy.log($el.text())
                        if ($el.text().includes(wallet) /*&& $el.text().includes()*/) {
                            cy.get('input[type="radio"]').check()
                            shouldStop = true
                        }
                    }))
                })
            })
        }))
    })
)

//----------------------Delete Security subscriber--------------------------------------------
Cypress.Commands.add('getDelete', (filename) =>
    cy.readFile(filename).then((user) => {
        let SecurityProfileName = user.subscriber
        let shouldStop = false
        cy.iframe().find('tr.mat-row.cdk-row.ng-star-inserted').each(($row => {
            cy.then(() => {
                if (shouldStop) {
                    return
                }
                cy.wrap($row).within(function () {
                    cy.get('.mat-cell.cdk-cell.cdk-column-profileName.mat-column-profileName.cursor-pointer.ng-star-inserted>span').each(($el => {
                        cy.log($el.text())
                        if ($el.text().includes(SecurityProfileName) /*&& $el.text().includes()*/) {
                            //cy.get('tr>td[role="cell"]>span').eq(0)    
                            cy.get('span.material-icons').eq(2).click({ force: true })
                            shouldStop = true
                        }
                    }))
                })
            })
        }))
    })
)

//----------------------Delete Security businesAadmin--------------------------------------------
Cypress.Commands.add('getDeletebusinesAadmin', (filename) =>
    cy.readFile(filename).then((user) => {
        let SecurityProfileName = user.businesAadmin
        let shouldStop = false
        cy.iframe().find('tr.mat-row.cdk-row.ng-star-inserted').each(($row => {
            cy.then(() => {
                if (shouldStop) {
                    return
                }
                cy.wrap($row).within(function () {

                    cy.get('.mat-cell.cdk-cell.cdk-column-profileName.mat-column-profileName.cursor-pointer.ng-star-inserted>span').each(($el => {
                        cy.log($el.text())
                        if ($el.text().includes(SecurityProfileName) /*&& $el.text().includes()*/) {
                            //cy.get('tr>td[role="cell"]>span').eq(0)    
                            cy.get('span.material-icons').eq(2).click({ force: true })
                            shouldStop = true
                        }
                    }))
                })
            })
        }))
    })
)
//----------------------Delete Security CustomercareAdmin--------------------------------------------
Cypress.Commands.add('getDeleteCustomercareAdmin', (filename) =>
    cy.readFile(filename).then((user) => {
        let SecurityProfileName = user.CustomercareAdmin
        let shouldStop = false
        cy.iframe().find('tr.mat-row.cdk-row.ng-star-inserted').each(($row => {
            cy.then(() => {
                if (shouldStop) {
                    return
                }
                cy.wrap($row).within(function () {
                    cy.get('.mat-cell.cdk-cell.cdk-column-profileName.mat-column-profileName.cursor-pointer.ng-star-inserted>span').each(($el => {
                        cy.log($el.text())
                        if ($el.text().includes(SecurityProfileName) /*&& $el.text().includes()*/) {
                            //cy.get('tr>td[role="cell"]>span').eq(0)    
                            cy.get('span.material-icons').eq(2).click({ force: true })
                            shouldStop = true
                        }
                    }))
                })
            })
        }))
    })
)
//----------------------Delete Security Distributer--------------------------------------------
Cypress.Commands.add('getDeleteDistributer', (filename) =>
    cy.readFile(filename).then((user) => {
        let SecurityProfileName = user.Distributer
        let shouldStop = false
        cy.iframe().find('tr.mat-row.cdk-row.ng-star-inserted').each(($row => {
            cy.then(() => {
                if (shouldStop) {
                    return
                }
                cy.wrap($row).within(function () {
                    cy.get('.mat-cell.cdk-cell.cdk-column-profileName.mat-column-profileName.cursor-pointer.ng-star-inserted>span').each(($el => {
                        cy.log($el.text())
                        if ($el.text().includes(SecurityProfileName) /*&& $el.text().includes()*/) {
                            //cy.get('tr>td[role="cell"]>span').eq(0)    
                            cy.get('span.material-icons').eq(2).click({ force: true })
                            shouldStop = true
                        }
                    }))
                })
            })
        }))
    })
)

Cypress.Commands.add('getTransferReject', (filename) =>
    cy.readFile('cypress/fixtures/userData/Domain&CAT.json').then((user) => {
        let Time = user.TransferRuleID
        let shouldStop = false
        cy.iframe().find('.wwFormTableC>tbody>tr').each(($row => {
            cy.then(() => {
                if (shouldStop) {
                    return
                }
                cy.wrap($row).within(function () {
                    cy.get('td').each(($el => {
                        cy.log($el.text())
                        if ($el.text().includes(Time)) {
                            cy.get('[class="tabcol"]').contains("Reject").click({ force: true })

                            shouldStop = true
                        }
                    }))
                })
            })
        }))
    })
)

//----------------------------ServiceCharge-----------------------------------------------
Cypress.Commands.add('getServicechargeapproval', (filename) =>
    cy.readFile('cypress/fixtures/userData/Servicecharge.json').then((user) => {
        let name = user.profilename
        let shouldStop = false
        cy.iframe().find('tbody').each(($row => {
            cy.then(() => {
                if (shouldStop) {
                    return
                }
                cy.wrap($row).within(function () {

                    cy.get('.tableData').each(($el => {
                        cy.log($el.text())

                        if ($el.text().includes(name) /*&& $el.text().includes()*/) {
                            cy.get('td').contains("Approve").click({ force: true })
                            // cy.iframe().find('a').click({ force: true })

                            shouldStop = true

                        }


                    }))

                })
            })
        }))
    })
)


Cypress.Commands.add('getO2CServicechargeapproval', (filename) =>
    cy.readFile('cypress/fixtures/userData/Servicecharge.json').then((user) => {
        let name = user.O2CProfilename
        let shouldStop = false
        cy.iframe().find('tbody').each(($row => {
            cy.then(() => {
                if (shouldStop) {
                    return
                }
                cy.wrap($row).within(function () {

                    cy.get('.tableData').each(($el => {
                        cy.log($el.text())
                        if ($el.text().includes(name)) {
                            cy.get('.tableData>td').contains("Approve").click({ force: true })

                            shouldStop = true
                        }
                    }))
                })
            })
        }))
    })
)

//--------------------------------------Grade--------------------------------------
Cypress.Commands.add('GradeName2', () => {

    let hi = getRandomName()

    var GradeFile = 'cypress/fixtures/userData/Gradedata.json'

    cy.readFile(GradeFile).then((user) => {
        user.GradeName44 = hi
        cy.log(hi)
        cy.writeFile(GradeFile, { GradeName44: hi })

        AddGradePage.getGradeName().type(hi, { force: true })
    })


})

Cypress.Commands.add('GradeName3', () => {
    let hi = getRandomName()
    var GradeFile = 'cypress/fixtures/userData/Gradedata.json'
    cy.readFile(GradeFile).then((user) => {
        user.GradeName56 = hi
        cy.log(hi)
        cy.writeFile(GradeFile, { GradeName56: hi })
        AddGradePage.getGradeName2().type(hi, { force: true })
    })
})

Cypress.Commands.add('GradeName1', () => {
    let hi = getRandomName()
    var GradeFile = 'cypress/fixtures/userData/Gradedata.json'
    cy.readFile(GradeFile).then((user) => {
        user.GradeName55 = hi
        cy.log(hi)
        cy.writeFile(GradeFile, { GradeName55: hi })
        AddGradePage.getGradeName().type(hi, { force: true })
    })
})

//-------------------------BusinessURlLaunch-------------------------------------------
let businesslogin = "cypress/fixtures/userData/BusinessUsersData.json"
let word = "Com@13579"
Cypress.Commands.add('launchbusinessURL', (URL) => {
    cy.visit(URL + '/dfscontainer/#/')
    cy.visit(URL + '/dfscontainer/#/business')

    // Cypress.Commands.add('BusinessUserLogin', () => {
    // cy.frameLoaded(pageLogin.getiFrame())
    // cy.readFile(businesslogin).then((data) => {
    // let loginID = data.corploginid
    // //let word = data.ChangePassword
    // pageLogin.getInputForm().eq(0).type(loginID)
    // pageLogin.getInputForm().eq(1).type(word)
    // pageLogin.getLoginBtn().eq(0).click()
    // 
    //})
})

//-------------------Bulk register-------------------
Cypress.Commands.add('csvToJSONReg', (CsvFile, JsonFile) => {
    let result = [];
    cy.readFile('cypress/fixtures/templates/BULK_REGISTRATION-template.csv')
        .then((data) => {
            var lines = data.split("\n")
            var headers = lines[0].split(",")

            for (var i = 0; i < lines.length; i++) {
                var obj = {};
                var currentline = lines[i].split(",");

                for (var j = 0; j < headers.length; j++) {
                    obj[headers[j]] = '';

                }
                cy.log(obj)

            }
            cy.writeFile('cypress/fixtures/BulkData/BULK_REGISTRATION-template.json', obj)

        })


})
Cypress.Commands.add('jsonToCSVReg', (JsonFile, CsvFile) => {
    cy.readFile('cypress/fixtures/BulkData/BULK_REGISTRATION-template.json').then((data) => {
        var fields = Object.keys(data)
        var values = Object.values(data)
        var csv1 = fields.map(function () { })
        csv1.unshift(fields.join(','))   // add header column
        let str1 = csv1;
        let sl2 = str1.slice(0, 1)
        var csv = values.map(function () { })
        csv.unshift(values.join(',')) // add header column
        let str2 = csv;
        let sl3 = str2.slice(0, 1)
        cy.writeFile('cypress/fixtures/templates/BULK_REGISTRATION-template.csv', sl2 + '\n' + sl3)
    })
})

//-----------------------------------click radio button----------------------

Cypress.Commands.add('getModifyWallet', () =>
    cy.readFile('cypress/fixtures/WalletManagementdata.json').then((user) => {
        let Name = user.WalletName
        let shouldStop = false
        cy.iframe().find('.wwFormTableC>tbody>tr').each(($row => {
            cy.then(() => {
                if (shouldStop) {
                    return
                }
                cy.wrap($row).within(function () {
                    cy.get('td').each(($el => {
                        cy.log($el.text())
                        if ($el.text().includes(Name)) {
                            cy.get('[type="radio"]').click({ force: true })

                            shouldStop = true
                        }

                    }))

                })
            })
        }))
    })
)

//----------------SecurityQuestion------------------------------
Cypress.Commands.add('SecurityQuestions', () => {
    //------------------SecurityQuestion&Answer------------------------
    if (Cypress.env('version').includes('x.7')) {
        securityQuestionPage.getQuestion().select(1)
        let a1 = getRandomName1()
        securityQuestionPage.getAnswer().clear({ force: true }).type(a1, { force: true })
        securityQuestionPage.getQuestion1().select(2)
        let a2 = getRandomName1()
        securityQuestionPage.getAnswer1().clear({ force: true }).type(a2, { force: true })
        securityQuestionPage.getSave().click({ force: true })
        securityQuestionPage.getDoneButton1().click({ force: true })
    }

})


Cypress.Commands.add('getServicechargeapprovalDelete', (filename) =>
    cy.readFile('cypress/fixtures/userData/Servicecharge.json').then((user) => {
        let name = user.profilename
        let shouldStop = false


        cy.get('.fd-page.iframeContainer.svelte-1v5e28n > iframe').then(($iframe) => {
            const $body = $iframe.contents().find('body')
            const $win = $iframe[0].contentWindow
            cy.stub($win, 'confirm', () => true).as('windowConfirm')
            cy.stub($win.console, 'log').as('consoleLog')
            cy.wrap($body).find('tbody>tr.tableData').each(($el => {
                cy.log($el.text())
                if ($el.text().includes(name) /*&& $el.text().includes()*/) {
                    cy.log('success')
                }
                cy.wrap($body).find('td').contains("Approve").click().should(function () {
                    expect(this.windowConfirm).to.be.calledWith('Do you really want to delete the selected profile?')
                })
            }))
            shouldStop = true
        }

        )
    }))

Cypress.Commands.add('getTransferApprovalC2C', (filename) =>
    cy.readFile('cypress/fixtures/Domain&CategoryManagement.json').then((user) => {
        let Time = user.DomainnameC2C
        let shouldStop = false
        cy.iframe().find('.wwFormTableC>tbody>tr').each(($row => {
            cy.then(() => {
                if (shouldStop) {
                    return
                }
                cy.wrap($row).within(function () {
                    cy.get('td').each(($el => {
                        cy.log($el.text())
                        if ($el.text().includes(Time)) {
                            cy.get('[class="tabcol"]').contains("Approve").click({ force: true })

                            // cy.get('.tabcenter').contains("Submit").click({force:true})
                            shouldStop = true
                        }
                    }))

                })
            })

        }))
    })
)


Cypress.Commands.add('C2CTransactionWriteData', () => {
    C2C.getsucessmessage().then((al => {
        let q = al.text()
        cy.log(q)
        let a = q.split(':')
        let b = a[1].trim()
        cy.log(b)
        var C2CTransactionFile1 = 'cypress/fixtures/userData/C2CTransactionData1.json'

        cy.writeFile(C2CTransactionFile1, { C2cTransactionID: b })

    }))
})
var C2CTransactionFile = 'cypress/fixtures/userData/C2CTransactionData.json'
Cypress.Commands.add('InverseC2CTransactionWriteData', () => {
    C2C.getsucessmessage().then((al => {
        let q = al.text()
        cy.log(q)
        let a = q.split(':')
        let b = a[1].trim()
        cy.log(b)


        cy.writeFile(C2CTransactionFile, { InverseC2CTransactionID: b })

    }))
})

//-----------------------------------------------------------------------------------------------------------
var fileis = 'cypress/fixtures/userData/Aservice.json'



//----------------------------------------------------------------------------------------------------------------------------------------------------------------------------
Cypress.Commands.add('ServiceChargeAmount', (CashInAmount, ServiceChargePercentage, ServiceChargeFixed, DiscountAmount) => {

    var a = parseInt(CashInAmount) * parseInt(ServiceChargePercentage) + parseInt(ServiceChargeFixed)
    var ServiceChargeAmount = parseInt(a) + parseInt(DiscountAmount)
    cy.readFile(fileis).then((data) => {
        data.ServiceChargeAmountFC = parseInt(ServiceChargeAmount)
        cy.writeFile(fileis, data)

    })

})


//-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

Cypress.Commands.add('ServiceChargeTax', (ServiceChargeTaxationPercentage, ServiceChargeTaxationFixed) => {

    cy.readFile(fileis).then((data) => {
        var b = parseInt(data.ServiceChargeAmountFC)

        var c = b * parseInt(ServiceChargeTaxationPercentage) + parseInt(ServiceChargeTaxationFixed)

        cy.readFile(fileis).then((data) => {
            data.ServiceChargeTaxFC = parseInt(c)
            cy.writeFile(fileis, data)

        })

    })
})


//----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
Cypress.Commands.add('CommissionAmount', (CashInAmount, CommissionRulePercentage, CommissionRuleFixed) => {

    var d = parseInt(CashInAmount) * parseInt(CommissionRulePercentage) + parseInt(CommissionRuleFixed)

    cy.readFile(fileis).then((data) => {
        data.CommissionAmountFC = parseInt(d)
        cy.writeFile(fileis, data)

    })

})

//---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
Cypress.Commands.add('CommissionTax', (CommissionAmount, CommissionTaxationPercentage, CommissionTaxationFixed) => {

    cy.readFile(fileis).then((data) => {
        var CA = parseInt(data.CommissionAmountFC)
        var e = CA * parseInt(CommissionTaxationPercentage) + parseInt(CommissionTaxationFixed)
        cy.readFile(fileis).then((data) => {
            data.CommissionTaxFC = parseInt(e)
            cy.writeFile(fileis, data)

        })

    })

})

Cypress.Commands.add('getTransferApprovalIC2C', (filename) =>
    cy.readFile('cypress/fixtures/userData/Domain&CAT.json').then((user) => {
        let Time = user.TransferRuleIDC2C
        let shouldStop = false
        cy.iframe().find('.wwFormTableC>tbody>tr').each(($row => {
            cy.then(() => {
                if (shouldStop) {
                    return
                }
                cy.wrap($row).within(function () {
                    cy.get('td').each(($el => {
                        cy.log($el.text())
                        if ($el.text().includes(Time)) {

                            cy.get('[class="tabcol"]').contains("Approve").click({ force: true })

                            shouldStop = true
                        }
                    }))
                })
            })
        }))
    })
)

//------------------------------------------
Cypress.Commands.add('getServicechargeapprovalDelete', (filename) =>
    cy.readFile('cypress/fixtures/userData/Servicecharge.json').then((user) => {
        let name = user.profilename
        let shouldStop = false
        cy.wait(5000)
        cy.get('.fd-page.iframeContainer.svelte-1v5e28n > iframe').then(($iframe) => {
            const $body = $iframe.contents().find('body')
            const $win = $iframe[0].contentWindow
            cy.stub($win, 'confirm', () => true).as('windowConfirm')
            cy.stub($win.console, 'log').as('consoleLog')
            cy.wrap($body).find('tbody>tr.tableData').each(($el => {
                cy.log($el.text())
                if ($el.text().includes(name) /*&& $el.text().includes()*/) {
                    cy.log('success')
                }
                cy.wrap($body).find('td').contains("Approve").click().should(function () {
                    expect(this.windowConfirm).to.be.calledWith('Do you really want to delete the selected profile?')
                })
            }))
            shouldStop = true
        }
        )
    }))



Cypress.Commands.add('getwalletid', () => {
    cy.readFile('cypress/fixtures/userData/Bank&Walletdata.json').then((data) => {
        let Time = data.WalletName
        let shouldStop = false
        cy.iframe().find('.wwFormTableC>tbody>tr').each(($row => {
            cy.then(() => {
                if (shouldStop) {
                    return
                }
                cy.wrap($row).within(function () {
                    //cy.log($row.text())
                    cy.get('td').each(($el => {
                        // cy.log($el.text())
                        if ($el.text().includes(Time) /*&& $el.text().includes()*/) {
                            cy.get('td').eq(1).each(($row => {
                                const walletid = $row.text()
                                cy.log($row.text())
                                const value = Cypress.env('Adminurl') + "/CoreWeb/mfs/multipleWalletMgmtView_showAssociationDetails.action?id=popup_viewService1&strWalletId=" + walletid
                                cy.visit(value)

                                shouldStop = true
                            }))
                        }
                    }))

                })
            })
        }))
    })
})

//-------------------------------------W2BandB2W------------------
function getRandomNumber() {
    name = "";
    var possible = "123456789";
    for (var i = 0; i < 5; i++)
        name += possible.charAt(Math.floor(Math.random() * possible.length));
    return name;
}
Cypress.Commands.add('getW2BApproval', (Adminurl, port) => {
    if (Cypress.env('TransactionOTP').includes('Yes')) {
        cy.readFile('cypress/fixtures/userData/W2BandB2W.json').then((user) => {
            cy.wait('@getW2B', { timeout: 30000 }).then((interception) => {
                let response = interception.response.body
                const resValues = Object.values(response)
                let serviceRequestID = resValues[4]
                let OrderId = resValues[2]
                cy.log(OrderId)
                cy.log(serviceRequestID)
                user.W2BServiceRequesiId = serviceRequestID
                user.W2BOrderId = OrderId
                if (port == "No") {
                    url1 = Cypress.env('apiBaseURL') + '/otpservice/internal/genotp/'
                } else {
                    url1 = Cypress.env('apiBaseURL') + ':3133' + '/otpservice/internal/genotp/'
                }

                let getURL = url1.concat(serviceRequestID)
                cy.request({
                    url: getURL,
                    headers: {
                        'Authorization': 'Basic YWRtaW46c2VjcmV0',
                        'Content-Type': 'application/json'
                    }
                }).then((res) => {
                    let res1 = res.body
                    const res3 = Object.values(res1)
                    let OTP = res3[4]
                    var OTPArr = Array.from({ length: 6 }, (v, k) => k + 1)
                    cy.wrap(OTPArr).each((index) => {
                        APIPage.getOTPConsumerPortal().eq(index - 1).type(OTP[index - 1])
                    })
                    APIPage.getVerifyOtpBtnCP().click()
                })
                cy.writeFile('cypress/fixtures/userData/W2BandB2W.json', user)
            })
        })
        cy.readFile('cypress/fixtures/userData/W2BandB2W.json').then((user) => {
            cy.wait('@getResume', { timeout: 30000 }).then((interception) => {
                let response = interception.response.body
                const resValues = Object.values(response)
                let serviceRequestID = resValues[1]
                let OrderId = resValues[2]
                cy.log(OrderId)
                cy.log(serviceRequestID)
                user.W2BServiceRequesiId = serviceRequestID
                user.W2BOrderId = OrderId
                cy.writeFile('cypress/fixtures/userData/W2BandB2W.json', user)
            })
        })
        cy.readFile('cypress/fixtures/userData/W2BandB2W.json').then((user) => {
            let ServiceId = user.W2BServiceRequesiId
            let Amount = user.TransferAmount
            let reqBody = {
                "fulfillmentDetails": { "fulfillmentId": getRandomNumber() },
                "resumeServiceRequestId": ServiceId,
                "fulfillmentStatus": "true"
            }
            var CryptoJS = require("crypto-js");
            let nonce = CryptoJS.lib.WordArray.random(8).toString();
            let bytes = CryptoJS.HmacSHA256(JSON.stringify(reqBody), nonce);
            let hash = bytes.toString(CryptoJS.enc.Hex).toUpperCase();
            cy.request({
                method: 'POST',
                url: Cypress.env('apiBaseURL') + ':9999/jigsaw/serviceRequest/WBOAP_RESUME',
                body: reqBody,
                headers: {
                    'Nonce': nonce,
                    'Signature': hash
                }
            })
        })
    }
    else {
        cy.readFile('cypress/fixtures/userData/W2BandB2W.json').then((user) => {
            cy.wait('@getW2B', { timeout: 30000 }).then((interception) => {
                let response = interception.response.body
                const resValues = Object.values(response)
                let serviceRequestID = resValues[4]
                let OrderId = resValues[2]
                cy.log(OrderId)
                cy.log(serviceRequestID)
                user.W2BServiceRequesiId = serviceRequestID
                user.W2BOrderId = OrderId
                cy.writeFile('cypress/fixtures/userData/W2BandB2W.json', user)
            })
        })
        cy.readFile('cypress/fixtures/userData/W2BandB2W.json').then((user) => {
            let ServiceId = user.W2BServiceRequesiId
            let Amount = user.TransferAmount
            let reqBody = {
                "fulfillmentDetails": { "fulfillmentId": getRandomNumber() },
                "resumeServiceRequestId": ServiceId,
                "fulfillmentStatus": "true"
            }
            var CryptoJS = require("crypto-js");
            let nonce = CryptoJS.lib.WordArray.random(8).toString();
            let bytes = CryptoJS.HmacSHA256(JSON.stringify(reqBody), nonce);
            let hash = bytes.toString(CryptoJS.enc.Hex).toUpperCase();
            cy.request({
                method: 'POST',
                url: Cypress.env('apiBaseURL') + ':9999/jigsaw/serviceRequest/WBOAP_RESUME',
                body: reqBody,
                headers: {
                    'Nonce': nonce,
                    'Signature': hash
                }
            })
        })
    }

})

Cypress.Commands.add('getB2WApproval', (Adminurl, port) => {
    if (Cypress.env('TransactionOTP').includes('Yes')) {
        cy.readFile('cypress/fixtures/userData/W2BandB2W.json').then((user) => {
            cy.wait('@getB2W', { timeout: 30000 }).then((interception) => {
                let response = interception.response.body
                const resValues = Object.values(response)
                let serviceRequestID = resValues[4]
                let OrderId = resValues[2]
                cy.log(OrderId)
                cy.log(serviceRequestID)
                user.B2WServiceRequesiId = serviceRequestID
                user.B2WOrderId = OrderId
                if (port == "No") {
                    url1 = Cypress.env('apiBaseURL') + '/otpservice/internal/genotp/'
                } else {
                    url1 = Cypress.env('apiBaseURL') + ':3133' + '/otpservice/internal/genotp/'
                }

                let getURL = url1.concat(serviceRequestID)
                cy.request({
                    url: getURL,
                    headers: {
                        'Authorization': 'Basic YWRtaW46c2VjcmV0',
                        'Content-Type': 'application/json'
                    }
                }).then((res) => {
                    let res1 = res.body
                    const res3 = Object.values(res1)
                    let OTP = res3[4]
                    var OTPArr = Array.from({ length: 6 }, (v, k) => k + 1)
                    cy.wrap(OTPArr).each((index) => {
                        APIPage.getOTPConsumerPortal().eq(index - 1).type(OTP[index - 1])
                    })
                    APIPage.getVerifyOtpBtnCP().click()
                })
                cy.writeFile('cypress/fixtures/userData/W2BandB2W.json', user)
            })
        })
        cy.readFile('cypress/fixtures/userData/W2BandB2W.json').then((user) => {
            cy.wait('@getResume', { timeout: 30000 }).then((interception) => {
                let response = interception.response.body
                const resValues = Object.values(response)
                let serviceRequestID = resValues[1]
                let OrderId = resValues[2]
                cy.log(OrderId)
                cy.log(serviceRequestID)
                user.B2WServiceRequesiId = serviceRequestID
                user.B2WOrderId = OrderId
                cy.writeFile('cypress/fixtures/userData/W2BandB2W.json', user)
            })
        })
        cy.readFile('cypress/fixtures/userData/W2BandB2W.json').then((user) => {
            let ServiceId = user.B2WServiceRequesiId
            let Amount = user.TransferAmount
            let reqBody = {
                "resumeServiceRequestId": ServiceId,
                "paymentStatus": "true",
                "paymentDetails": {
                    "bankTransactionId": getRandomNumber(),
                    "referenceNumber": getRandomNumber(),
                    "paymentStatus": "true",
                    "amount": Amount,
                    "maskedCard": "",
                    "cardToken": ""
                }
            }
            var CryptoJS = require("crypto-js");
            let nonce = CryptoJS.lib.WordArray.random(8).toString();
            let bytes = CryptoJS.HmacSHA256(JSON.stringify(reqBody), nonce);
            let hash = bytes.toString(CryptoJS.enc.Hex).toUpperCase();
            cy.request({
                method: 'POST',
                url: Cypress.env('apiBaseURL') + ':9999/jigsaw/serviceRequest/BWOAP_RESUME',
                body: reqBody,
                headers: {
                    'Nonce': nonce,
                    'Signature': hash
                }
            })
        })
    }
    else {
        cy.readFile('cypress/fixtures/userData/W2BandB2W.json').then((user) => {
            cy.wait('@getB2W', { timeout: 30000 }).then((interception) => {
                let response = interception.response.body
                const resValues = Object.values(response)
                let serviceRequestID = resValues[4]
                let OrderId = resValues[2]
                cy.log(OrderId)
                cy.log(serviceRequestID)
                user.B2WServiceRequesiId = serviceRequestID
                user.B2WOrderId = OrderId
                cy.writeFile('cypress/fixtures/userData/W2BandB2W.json', user)
            })
        })
        cy.readFile('cypress/fixtures/userData/W2BandB2W.json').then((user) => {
            let ServiceId = user.B2WServiceRequesiId
            let Amount = user.TransferAmount
            let reqBody = {
                "resumeServiceRequestId": ServiceId,
                "paymentStatus": "true",
                "paymentDetails": {
                    "bankTransactionId": getRandomNumber(),
                    "referenceNumber": getRandomNumber(),
                    "paymentStatus": "true",
                    "amount": Amount,
                    "maskedCard": "",
                    "cardToken": ""
                }
            }
            var CryptoJS = require("crypto-js");
            let nonce = CryptoJS.lib.WordArray.random(8).toString();
            let bytes = CryptoJS.HmacSHA256(JSON.stringify(reqBody), nonce);
            let hash = bytes.toString(CryptoJS.enc.Hex).toUpperCase();
            cy.request({
                method: 'POST',
                url: Cypress.env('apiBaseURL') + ':9999/jigsaw/serviceRequest/BWOAP_RESUME',
                body: reqBody,
                headers: {
                    'Nonce': nonce,
                    'Signature': hash
                }
            })
        })
    }
})

Cypress.Commands.add('getReversalApproval', (filename) => {
    if (Cypress.env('myActivity').includes('Available')) {
        cy.readFile(filename).then((user) => {
            let Time = user.RevertedOnTime
            let shouldStop = false
            cy.iframe().find('.mat-table.cdk-table.mat-sort>mat-row').each(($row => {
                cy.then(() => {
                    if (shouldStop) {
                        return
                    }
                    cy.wrap($row).within(function () {
                        cy.get('mat-cell').each(($el => {
                            cy.log($el.text())
                            if ($el.text().includes(Time) /*&& $el.text().includes()*/) {
                                cy.get('[role="gridcell"]').eq(0).click({ force: true })
                                shouldStop = true
                            }
                        }))
                    })
                })
            }))
        })
    } else {
        approvalPage.getCurrentDateRowData().eq(0).click({ force: true })
    }
}
)


//-----------------------------------------------


Cypress.Commands.add('CSVToJSON', (CsvFile, JsonFile) => {
    let result = [];
    cy.readFile(CsvFile).then((data) => {
        var lines = data.split("\n")
        var headers = lines[0].split(",")
        for (var i = 0; i < lines.length; i++) {
            var obj = {};
            var currentline = lines[i].split(",");
            for (var j = 0; j < headers.length; j++) {
                obj[headers[j]] = '';
            }
            cy.log(obj)
        }
        cy.writeFile(JsonFile, obj)
    })
    // console.log(result
})

Cypress.Commands.add('JSONToCSV', (JsonFile, CsvFile) => {
    cy.readFile(JsonFile).then((data) => {
        var fields = Object.keys(data)
        var values = Object.values(data)
        var csv1 = fields.map(function () { })
        csv1.unshift(fields.join(','))   // add header column
        let str1 = csv1;
        let sl2 = str1.slice(0, 1)
        var csv = values.map(function () { })
        csv.unshift(values.join(',')) // add header column
        let str2 = csv;
        let sl3 = str2.slice(0, 1)
        cy.writeFile(CsvFile, sl2 + '\n' + sl3)
    })
})

Cypress.Commands.add('getAddBank', () => {
    cy.readFile('cypress/fixtures/userData/W2BandB2W.json').then((user) => {
        cy.wait('@AssociateBank', { timeout: 30000 }).then((interception) => {
            let response = interception.response.body
            const resValues = Object.values(response)
            let serviceRequestID = resValues[4]
            cy.log(serviceRequestID)
            user.AddBankServiceRequesiId = serviceRequestID
        })
        cy.writeFile('cypress/fixtures/userData/W2BandB2W.json', user)
    })
    cy.readFile('cypress/fixtures/userData/W2BandB2W.json').then((user) => {
        let ServiceId = user.AddBankServiceRequesiId
        let reqBody = {
            "fulfillmentDetails": { "fulfillmentId": getRandomNumber() },
            "resumeServiceRequestId": ServiceId,
            "fulfillmentStatus": "true"
        }
        var CryptoJS = require("crypto-js");
        let nonce = CryptoJS.lib.WordArray.random(8).toString();
        let bytes = CryptoJS.HmacSHA256(JSON.stringify(reqBody), nonce);
        let hash = bytes.toString(CryptoJS.enc.Hex).toUpperCase();
        cy.request({
            method: 'POST',
            url: Cypress.env('apiBaseURL') + ':9999/jigsaw/serviceRequest/ADDBANKOAP_RESUME',
            body: reqBody,
            headers: {
                'Nonce': nonce,
                'Signature': hash
            }
        })
    })
})


//for bulk user registration
Cypress.Commands.add('convertJsonToCsv', (jsonFilePath, csvFilePath) => {
    cy.readFile(jsonFilePath).then((data) => {
        // Extract headers from the first object in the JSON array
        const headers = Object.keys(data[0]);
        // Create the CSV content with headers
        let csv = headers.join(',') + '\n';
        // Iterate over each object in the JSON array
        data.forEach((obj) => {
            // Extract values for each object and join them with commas
            const values = headers.map((header) => obj[header]);
            csv += values.join(',') + '\n';
        });
        cy.writeFile(csvFilePath, csv).then(() => {
            cy.log(`Converted JSON to CSV. Saved at ${csvFilePath}`);
        });
    });
});


//for bulk user registration
Cypress.Commands.add('modifyJsonField', (jsonFilePath, fieldToModify, newValue) => {
    cy.readFile(jsonFilePath).then((jsonData) => {
        // Modify the specific field with the new value for each item in the array
        jsonData.forEach((item) => {
            item[fieldToModify] = newValue;
        });
        // Write the modified JSON data back to the file
        cy.writeFile(jsonFilePath, jsonData);
    });
});

//for bulk user registration
Cypress.Commands.add('convertCSVtoJSON', (csvFilePath) => {
    return cy.readFile(csvFilePath, 'utf8').then((csvData) => {
        const lines = csvData.trim().split('\n');
        const headers = lines[0].split(',');
        const jsonData = lines.slice(1).map((line) => {
            const values = line.split(',');
            return headers.reduce((obj, header, index) => {
                obj[header] = values[index];
                return obj;
            }, {});
        });
        return jsonData;
    });
});







//----------------------------consumer portal-------------------
Cypress.Commands.add('launchConsumerURL', (URL) => {
    cy.visit(URL + '/consumerportalui/#/home')
})

Cypress.Commands.add('OTPs', (apiURL) => {
    cy.intercept('/mobiquitypay/v2/otp/generate').as('getOTP')
    // APIPage.getOTPicon().eq(0).click({ force: true })
    APIPage.getVerifyBtn().click({ force: true })
    cy.wait('@getOTP').then((interception) => {
        let response = interception.response.body
        const resValues = Object.values(response)
        const serviceRequestID = resValues[1]
        cy.log(serviceRequestID)
        let url1 = apiURL + '/otpservice/internal/genotp/'
        let getURL = url1.concat(serviceRequestID)
        cy.request({
            url: getURL,
            headers: {
                'Authorization': 'Basic YWRtaW46c2VjcmV0',
                'Content-Type': 'application/json'
            }
        }).then((res) => {
            let res1 = res.body
            const res3 = Object.values(res1)
            let OTP = res3[4]
            var OTPArr = Array.from({ length: 6 }, (v, k) => k + 1)
            cy.wrap(OTPArr).each((index) => {
                APIPage.getOTPDailogbox().eq(index - 1).type(OTP[index - 1])
            })
            APIPage.getVerifyBtn().click()
        })
    })
})

function getRandomNumber() {
    name = "";
    var possible = "123456789";
    for (var i = 0; i < 5; i++)
        name += possible.charAt(Math.floor(Math.random() * possible.length));
    return name;
}

//---------------------------------Recharge-----------------------------
Cypress.Commands.add('getRCApprovalSelf',()=>{
    if(Cypress.env('TransactionOTP').includes('Yes')){
        cy.readFile('cypress/fixtures/userData/MobileRecharge.json').then((user)=>{
        cy.wait('@getRecharge',{timeout:30000}).then((interception) => {
            let response = interception.response.body
            const resValues = Object.values(response)
            let serviceRequestID = resValues[4]
            let OrderId = resValues[2]
            cy.log(serviceRequestID)
            user.W2BServiceRequesiId = serviceRequestID
            user.RechargeOrderId = OrderId
            if (port == "No") {
                url1 = Cypress.env('apiBaseURL') + '/otpservice/internal/genotp/'
            } else {
                url1 = Cypress.env('apiBaseURL') + ':3133' + '/otpservice/internal/genotp/'
            }
    
            let getURL = url1.concat(serviceRequestID)
            cy.request({
                url: getURL,
                headers: {
                    'Authorization': 'Basic YWRtaW46c2VjcmV0',
                    'Content-Type': 'application/json'
                }
            }).then((res) => {
                let res1 = res.body
                const res3 = Object.values(res1)
                let OTP = res3[4]
                var OTPArr = Array.from({ length: 6 }, (v, k) => k + 1)
                cy.wrap(OTPArr).each((index) => {
                    APIPage.getOTPConsumerPortal().eq(index - 1).type(OTP[index - 1])
                })
                APIPage.getVerifyOtp().click()
            })
            cy.writeFile('cypress/fixtures/userData/MobileRecharge.json',user)
        })
    })
    cy.readFile('cypress/fixtures/userData/MobileRecharge.json').then((user)=>{
    cy.wait('@getResume',{timeout:30000}).then((interception) => {
        let response = interception.response.body
        const resValues = Object.values(response)
        let serviceRequestID = resValues[1]
        let OrderId = resValues[2]

        cy.log(serviceRequestID)
        user.W2BServiceRequesiId = serviceRequestID
        user.RechargeOrderId = OrderId

        cy.writeFile('cypress/fixtures/userData/MobileRecharge.json',user)
    })
})
cy.readFile('cypress/fixtures/userData/MobileRecharge.json').then((user)=>{
        let ServiceId = user.W2BServiceRequesiId
        let Amount = user.TransferAmount
        let reqBody = {
            "fulfillmentDetails":{"fulfillmentId":getRandomNumber()},
            "resumeServiceRequestId":ServiceId,
            "transactionTimeStamp": "2023-06-19T14:39:45",
            "fulfillmentStatus":"true"
        }
        var CryptoJS = require("crypto-js");
        let nonce = CryptoJS.lib.WordArray.random(8).toString();
        let bytes = CryptoJS.HmacSHA256(JSON.stringify(reqBody), nonce);
        let hash = bytes.toString(CryptoJS.enc.Hex).toUpperCase();
        cy.request({
            method: 'POST',
            url:Cypress.env('apiBaseURL')+':9999/jigsaw/serviceRequest/RCOAP_RESUME',
            body: reqBody,
            headers:{
                'Nonce': nonce,
                'Signature' : hash    
            }
        })
})
    }
    else{
        cy.readFile('cypress/fixtures/userData/MobileRecharge.json').then((user)=>{
            cy.wait('@getRecharge',{timeout:30000}).then((interception) => {
                let response = interception.response.body
                const resValues = Object.values(response)
                let serviceRequestID = resValues[4]
                let OrderId = resValues[2]

                cy.log(serviceRequestID)
                user.W2BServiceRequesiId = serviceRequestID
                user.RechargeOrderId = OrderId

                cy.writeFile('cypress/fixtures/userData/MobileRecharge.json',user)
            })
        })
    cy.readFile('cypress/fixtures/userData/MobileRecharge.json').then((user)=>{
            let ServiceId = user.W2BServiceRequesiId
            let Amount = user.TransferAmount
            let reqBody = {
                "fulfillmentDetails":{"fulfillmentId":getRandomNumber()},
                "resumeServiceRequestId":ServiceId,
                "transactionTimeStamp": "2023-06-19T14:39:45",
                "fulfillmentStatus":"true"
            }
            var CryptoJS = require("crypto-js");
            let nonce = CryptoJS.lib.WordArray.random(8).toString();
            let bytes = CryptoJS.HmacSHA256(JSON.stringify(reqBody), nonce);
            let hash = bytes.toString(CryptoJS.enc.Hex).toUpperCase();
            cy.request({
                method: 'POST',
                url:Cypress.env('apiBaseURL')+':9999/jigsaw/serviceRequest/RCOAP_RESUME',
                body: reqBody,
                headers:{
                    'Nonce': nonce,
                    'Signature' : hash    
                }
            })
        })
    }
})

Cypress.Commands.add('getRCApproval', () => {
    if (Cypress.env('TransactionOTP').includes('Yes')) {
        cy.readFile('cypress/fixtures/userData/MobileRecharge.json').then((user) => {
            cy.wait('@getRecharge', { timeout: 30000 }).then((interception) => {
                let response = interception.response.body
                const resValues = Object.values(response)
                let serviceRequestID = resValues[4]
                let OrderId = resValues[2]
                cy.log(serviceRequestID)
                user.W2BServiceRequesiId = serviceRequestID
                user.RechargeOrderId = OrderId
                if (port == "No") {
                    url1 = Cypress.env('apiBaseURL') + '/otpservice/internal/genotp/'
                } else {
                    url1 = Cypress.env('apiBaseURL') + ':3133' + '/otpservice/internal/genotp/'
                }

                let getURL = url1.concat(serviceRequestID)
                cy.request({
                    url: getURL,
                    headers: {
                        'Authorization': 'Basic YWRtaW46c2VjcmV0',
                        'Content-Type': 'application/json'
                    }
                }).then((res) => {
                    let res1 = res.body
                    const res3 = Object.values(res1)
                    let OTP = res3[4]
                    var OTPArr = Array.from({ length: 6 }, (v, k) => k + 1)
                    cy.wrap(OTPArr).each((index) => {
                        APIPage.getOTPConsumerPortal().eq(index - 1).type(OTP[index - 1])
                    })
                    APIPage.getVerifyOtp().click()
                })
                cy.writeFile('cypress/fixtures/userData/MobileRecharge.json', user)
            })
        })
        cy.readFile('cypress/fixtures/userData/MobileRecharge.json').then((user) => {
            cy.wait('@getResume', { timeout: 30000 }).then((interception) => {
                let response = interception.response.body
                const resValues = Object.values(response)
                let serviceRequestID = resValues[1]
                let OrderId = resValues[2]

                cy.log(serviceRequestID)
                user.W2BServiceRequesiId = serviceRequestID
                user.RechargeOrderId = OrderId

                cy.writeFile('cypress/fixtures/userData/MobileRecharge.json', user)
            })
        })
        cy.readFile('cypress/fixtures/userData/MobileRecharge.json').then((user) => {
            let ServiceId = user.W2BServiceRequesiId
            let Amount = user.TransferAmount
            let reqBody = {
                "fulfillmentDetails": { "fulfillmentId": getRandomNumber() },
                "resumeServiceRequestId": ServiceId,
                "transactionTimeStamp": "2023-06-19T14:39:45",
                "fulfillmentStatus": "true"
            }
            var CryptoJS = require("crypto-js");
            let nonce = CryptoJS.lib.WordArray.random(8).toString();
            let bytes = CryptoJS.HmacSHA256(JSON.stringify(reqBody), nonce);
            let hash = bytes.toString(CryptoJS.enc.Hex).toUpperCase();
            cy.request({
                method: 'POST',
                url: Cypress.env('apiBaseURL') + ':9999/jigsaw/serviceRequest/RCOTHOAP_RESUME',
                body: reqBody,
                headers: {
                    'Nonce': nonce,
                    'Signature': hash
                }
            })
        })
    }
    else {
        cy.readFile('cypress/fixtures/userData/MobileRecharge.json').then((user) => {
            cy.wait('@getRecharge', { timeout: 30000 }).then((interception) => {
                let response = interception.response.body
                const resValues = Object.values(response)
                let serviceRequestID = resValues[4]
                let OrderId = resValues[2]

                cy.log(serviceRequestID)
                user.W2BServiceRequesiId = serviceRequestID
                user.RechargeOrderId = OrderId

                cy.writeFile('cypress/fixtures/userData/MobileRecharge.json', user)
            })
        })
        cy.readFile('cypress/fixtures/userData/MobileRecharge.json').then((user) => {
            let ServiceId = user.W2BServiceRequesiId
            let Amount = user.TransferAmount
            let reqBody = {
                "fulfillmentDetails": { "fulfillmentId": getRandomNumber() },
                "resumeServiceRequestId": ServiceId,
                "transactionTimeStamp": "2023-06-19T14:39:45",
                "fulfillmentStatus": "true"
            }
            var CryptoJS = require("crypto-js");
            let nonce = CryptoJS.lib.WordArray.random(8).toString();
            let bytes = CryptoJS.HmacSHA256(JSON.stringify(reqBody), nonce);
            let hash = bytes.toString(CryptoJS.enc.Hex).toUpperCase();
            cy.request({
                method: 'POST',
                url: Cypress.env('apiBaseURL') + ':9999/jigsaw/serviceRequest/RCOTHOAP_RESUME',
                body: reqBody,
                headers: {
                    'Nonce': nonce,
                    'Signature': hash
                }
            })
        })
    }
})
Cypress.Commands.add('getRCApprovalForBank', () => {
    if (Cypress.env('TransactionOTP').includes('Yes')) {
        cy.readFile('cypress/fixtures/userData/MobileRecharge.json').then((user) => {
            cy.wait('@getRecharge', { timeout: 30000 }).then((interception) => {
                let response = interception.response.body
                const resValues = Object.values(response)
                let serviceRequestID = resValues[4]
                let OrderId = resValues[2]
                cy.log(serviceRequestID)
                user.W2BServiceRequesiId = serviceRequestID
                user.RechargeOrderId = OrderId
                if (port == "No") {
                    url1 = Cypress.env('apiBaseURL') + '/otpservice/internal/genotp/'
                } else {
                    url1 = Cypress.env('apiBaseURL') + ':3133' + '/otpservice/internal/genotp/'
                }

                let getURL = url1.concat(serviceRequestID)
                cy.request({
                    url: getURL,
                    headers: {
                        'Authorization': 'Basic YWRtaW46c2VjcmV0',
                        'Content-Type': 'application/json'
                    }
                }).then((res) => {
                    let res1 = res.body
                    const res3 = Object.values(res1)
                    let OTP = res3[4]
                    var OTPArr = Array.from({ length: 6 }, (v, k) => k + 1)
                    cy.wrap(OTPArr).each((index) => {
                        APIPage.getOTPConsumerPortal().eq(index - 1).type(OTP[index - 1])
                    })
                    APIPage.getVerifyOtpBtnCP().click()
                })
                cy.writeFile('cypress/fixtures/userData/MobileRecharge.json', user)
            })
        })
        cy.readFile('cypress/fixtures/userData/MobileRecharge.json').then((user) => {
            cy.wait('@getResume', { timeout: 30000 }).then((interception) => {
                let response = interception.response.body
                const resValues = Object.values(response)
                let serviceRequestID = resValues[1]
                let OrderId = resValues[2]

                cy.log(serviceRequestID)
                user.W2BServiceRequesiId = serviceRequestID
                user.RechargeOrderId = OrderId

                cy.writeFile('cypress/fixtures/userData/MobileRecharge.json', user)
            })
        })
        cy.readFile('cypress/fixtures/userData/MobileRecharge.json').then((user) => {
            let ServiceId = user.W2BServiceRequesiId
            let Amount = user.TransferAmount
            let reqBody = {
                "resumeServiceRequestId": ServiceId,
                "paymentStatus": "true",
                "paymentDetails":
                {
                    "bankTransactionId": "31331808080",
                    "referenceNumber": "422442424242"
                }
            }
            let ReqBody = {
                "resumeServiceRequestId": ServiceId,
                "fulfillmentStatus": "true",
                "fulfillmentDetails":
                {
                    "fulfillmentId": "313441133121"
                }
            }
            var CryptoJS = require("crypto-js");
            let nonce = CryptoJS.lib.WordArray.random(8).toString();
            let bytes = CryptoJS.HmacSHA256(JSON.stringify(reqBody), nonce);
            let hash = bytes.toString(CryptoJS.enc.Hex).toUpperCase();
            cy.request({
                method: 'POST',
                url: Cypress.env('apiBaseURL') + ':9999/jigsaw/serviceRequest/resume/RCOTHOAP',
                body: reqBody,
                headers: {
                    'Nonce': nonce,
                    'Signature': hash
                }
            })
            cy.request({
                method: 'POST',
                url: Cypress.env('apiBaseURL') + ':9999/jigsaw/serviceRequest/RCOTHOAP_RESUME',
                body: ReqBody,
                headers: {
                    'Nonce': nonce,
                    'Signature': hash
                }
            })

        })
    }
    else {
        cy.readFile('cypress/fixtures/userData/MobileRecharge.json').then((user) => {
            cy.wait('@getRecharge', { timeout: 30000 }).then((interception) => {
                let response = interception.response.body
                const resValues = Object.values(response)
                let serviceRequestID = resValues[4]
                let OrderId = resValues[2]

                cy.log(serviceRequestID)
                user.W2BServiceRequesiId = serviceRequestID
                user.RechargeOrderId = OrderId

                cy.writeFile('cypress/fixtures/userData/MobileRecharge.json', user)
            })
        })
        cy.readFile('cypress/fixtures/userData/MobileRecharge.json').then((user) => {
            let ServiceId = user.W2BServiceRequesiId
            let Amount = user.TransferAmount
            let reqBody = {
                "resumeServiceRequestId": ServiceId,
                "paymentStatus": "true",
                "paymentDetails":
                {
                    "bankTransactionId": "31331808080",
                    "referenceNumber": "422442424242"
                }
            }


            var CryptoJS = require("crypto-js");
            let nonce = CryptoJS.lib.WordArray.random(8).toString();
            let bytes = CryptoJS.HmacSHA256(JSON.stringify(reqBody), nonce);
            let hash = bytes.toString(CryptoJS.enc.Hex).toUpperCase();
            cy.request({
                method: 'POST',
                url: Cypress.env('apiBaseURL') + ':9999/jigsaw/serviceRequest/resume/RCOTHOAP',
                body: reqBody,
                headers: {
                    'Nonce': nonce,
                    'Signature': hash
                }
            }).then((res) => {
                cy.readFile('cypress/fixtures/userData/MobileRecharge.json').then((user) => {

                    let res1 = res.body
                    const res3 = Object.values(res1)
                    let serviceID = res3[1]
                    user.ServiceRequesiId = serviceID
                    cy.log(serviceID)
                    cy.writeFile('cypress/fixtures/userData/MobileRecharge.json', user)
                })
            })
            cy.readFile('cypress/fixtures/userData/MobileRecharge.json').then((user) => {
                let serviceID = user.ServiceRequesiId
                let ReqBody = {
                    "resumeServiceRequestId": serviceID,
                    "fulfillmentStatus": "true",
                    "fulfillmentDetails":
                    {
                        "fulfillmentId": "313441133121"
                    }
                }
                cy.request({
                    method: 'POST',
                    url: Cypress.env('apiBaseURL') + ':9999/jigsaw/serviceRequest/RCOTHOAP_RESUME',
                    body: ReqBody,
                    headers: {
                        'Nonce': nonce,
                        'Signature': hash
                    }
                })
            })
        })
    }
})

//----------------------------IMT-----------------------------

Cypress.Commands.add('getIMTApproval', () => {
    if (Cypress.env('TransactionOTP').includes('Yes')) {
        cy.readFile('cypress/fixtures/userData/InternationalTransfer.json').then((user) => {
            cy.wait('@getIMT', { timeout: 30000 }).then((interception) => {
                let response = interception.response.body
                const resValues = Object.values(response)
                let serviceRequestID = resValues[4]
                let OrderId = resValues[2]
                cy.log(serviceRequestID)
                user.ServiceRequesiId = serviceRequestID
                user.IMTOrderId = OrderId
                if (Cypress.env("port").includes("No")) {
                    url1 = Cypress.env('apiBaseURL') + '/otpservice/internal/genotp/'
                } else {
                    url1 = Cypress.env('apiBaseURL') + ':3133' + '/otpservice/internal/genotp/'
                }

                let getURL = url1.concat(serviceRequestID)
                cy.request({
                    url: getURL,
                    headers: {
                        'Authorization': 'Basic YWRtaW46c2VjcmV0',
                        'Content-Type': 'application/json'
                    }
                }).then((res) => {
                    let res1 = res.body
                    const res3 = Object.values(res1)
                    let OTP = res3[4]
                    var OTPArr = Array.from({ length: 6 }, (v, k) => k + 1)
                    cy.wrap(OTPArr).each((index) => {
                        APIPage.getOTPConsumerPortal().eq(index - 1).type(OTP[index - 1])
                    })
                    APIPage.getVerifyOtpBtnCP().click()
                })
                cy.writeFile('cypress/fixtures/userData/InternationalTransfer.json', user)
            })
        })
        cy.readFile('cypress/fixtures/userData/InternationalTransfer.json').then((user) => {
            cy.wait('@getResume', { timeout: 30000 }).then((interception) => {
                let response = interception.response.body
                const resValues = Object.values(response)
                let serviceRequestID = resValues[1]
                let OrderId = resValues[2]

                cy.log(serviceRequestID)
                user.ServiceRequesiId = serviceRequestID
                user.IMTOrderId = OrderId

                cy.writeFile('cypress/fixtures/userData/InternationalTransfer.json', user)
            })
        })
        cy.readFile('cypress/fixtures/userData/InternationalTransfer.json').then((user) => {
            let ServiceId = user.ServiceRequesiId
            let Amount = user.TransferAmount
            let reqBody = {
                "fulfillmentDetails": { "fulfillmentId": "1232" },
                "resumeServiceRequestId": ServiceId,
                "fulfillmentStatus": "true"
            }
            var CryptoJS = require("crypto-js");
            let nonce = CryptoJS.lib.WordArray.random(8).toString();
            let bytes = CryptoJS.HmacSHA256(JSON.stringify(reqBody), nonce);
            let hash = bytes.toString(CryptoJS.enc.Hex).toUpperCase();
            cy.request({
                method: 'POST',
                url: Cypress.env('apiBaseURL') + ':9999/jigsaw/serviceRequest/IMTOAP_RESUME',
                body: reqBody,
                headers: {
                    'Nonce': nonce,
                    'Signature': hash
                }
            })
        })
    }
    else {
        cy.readFile('cypress/fixtures/userData/InternationalTransfer.json').then((user) => {
            cy.wait('@getIMT', { timeout: 30000 }).then((interception) => {
                let response = interception.response.body
                const resValues = Object.values(response)
                let serviceRequestID = resValues[4]
                let OrderId = resValues[2]

                cy.log(serviceRequestID)
                user.ServiceRequesiId = serviceRequestID
                user.IMTOrderId = OrderId

                cy.writeFile('cypress/fixtures/userData/InternationalTransfer.json', user)
            })
        })
        cy.readFile('cypress/fixtures/userData/InternationalTransfer.json').then((user) => {
            let ServiceId = user.ServiceRequesiId
            let Amount = user.TransferAmount
            let reqBody = {
                "fulfillmentDetails": { "fulfillmentId": "1232" },
                "resumeServiceRequestId": ServiceId,
                "fulfillmentStatus": "true"
            }
            var CryptoJS = require("crypto-js");
            let nonce = CryptoJS.lib.WordArray.random(8).toString();
            let bytes = CryptoJS.HmacSHA256(JSON.stringify(reqBody), nonce);
            let hash = bytes.toString(CryptoJS.enc.Hex).toUpperCase();
            cy.request({
                method: 'POST',
                url: Cypress.env('apiBaseURL') + ':9999/jigsaw/serviceRequest/IMTOAP_RESUME',
                body: reqBody,
                headers: {
                    'Nonce': nonce,
                    'Signature': hash
                }
            })
        })
    }
})
//----------------------------- Card to wallet ----------------------------

Cypress.Commands.add('getC2WApproval', (Adminurl, port) => {
    if (Cypress.env('TransactionOTP').includes('Yes')) {
        cy.readFile('cypress/fixtures/userData/CardToWallet.json').then((user) => {
            cy.wait('@getC2W', { timeout: 30000 }).then((interception) => {
                let response = interception.response.body
                const resValues = Object.values(response)
                let serviceRequestID = resValues[4]
                let OrderId = resValues[2]
                cy.log(OrderId)
                cy.log(serviceRequestID)
                user.C2WServiceRequesiId = serviceRequestID
                user.C2WOrderId = OrderId
                if (port == "No") {
                    url1 = Cypress.env('apiBaseURL') + '/otpservice/internal/genotp/'
                } else {
                    url1 = Cypress.env('apiBaseURL') + ':3133' + '/otpservice/internal/genotp/'
                }

                let getURL = url1.concat(serviceRequestID)
                cy.request({
                    url: getURL,
                    headers: {
                        'Authorization': 'Basic YWRtaW46c2VjcmV0',
                        'Content-Type': 'application/json'
                    }
                }).then((res) => {
                    let res1 = res.body
                    const res3 = Object.values(res1)
                    let OTP = res3[4]
                    var OTPArr = Array.from({ length: 6 }, (v, k) => k + 1)
                    cy.wrap(OTPArr).each((index) => {
                        APIPage.getOTPConsumerPortal().eq(index - 1).type(OTP[index - 1])
                    })
                    APIPage.getVerifyOtpBtnCP().click()
                })
                cy.writeFile('cypress/fixtures/userData/CardToWallet.json', user)
            })
        })
        cy.readFile('cypress/fixtures/userData/CardToWallet.json').then((user) => {
            cy.wait('@getResume', { timeout: 30000 }).then((interception) => {
                let response = interception.response.body
                const resValues = Object.values(response)
                let serviceRequestID = resValues[1]
                let OrderId = resValues[2]
                cy.log(OrderId)
                cy.log(serviceRequestID)
                user.C2WServiceRequesiId = serviceRequestID
                user.C2WOrderId = OrderId
                cy.writeFile('cypress/fixtures/userData/CardToWallet.json', user)
            })
        })
        cy.readFile('cypress/fixtures/userData/CardToWallet.json').then((user) => {
            let ServiceId = user.C2WServiceRequesiId
            let Amount = user.TransferAmount
            let reqBody = {
                "resumeServiceRequestId": ServiceId,
                "paymentStatus": "true",
                "paymentDetails": {
                    "bankTransactionId": getRandomNumber(),
                    "referenceNumber": getRandomNumber(),
                    "paymentStatus": "true",
                    "amount": Amount,
                    "maskedCard": "",
                    "cardToken": ""
                }
            }
            var CryptoJS = require("crypto-js");
            let nonce = CryptoJS.lib.WordArray.random(8).toString();
            let bytes = CryptoJS.HmacSHA256(JSON.stringify(reqBody), nonce);
            let hash = bytes.toString(CryptoJS.enc.Hex).toUpperCase();
            cy.request({
                method: 'POST',
                url: Cypress.env('apiBaseURL') + ':9999/jigsaw/serviceRequest/resume/CWOAP',
                body: reqBody,
                headers: {
                    'Nonce': nonce,
                    'Signature': hash
                }
            })
        })
    }
    else {
        cy.readFile('cypress/fixtures/userData/CardToWallet.json').then((user) => {
            cy.wait('@getC2W', { timeout: 30000 }).then((interception) => {
                let response = interception.response.body
                const resValues = Object.values(response)
                let serviceRequestID = resValues[4]
                let OrderId = resValues[2]
                cy.log(OrderId)
                cy.log(serviceRequestID)
                user.C2WServiceRequesiId = serviceRequestID
                user.C2WOrderId = OrderId
                cy.writeFile('cypress/fixtures/userData/CardToWallet.json', user)
            })
        })
        cy.readFile('cypress/fixtures/userData/CardToWallet.json').then((user) => {
            let ServiceId = user.C2WServiceRequesiId
            let Amount = user.TransferAmount
            let reqBody = {
                "resumeServiceRequestId": ServiceId,
                "paymentStatus": "true",
                "paymentDetails": {
                    "bankTransactionId": getRandomNumber(),
                    "referenceNumber": getRandomNumber(),
                    "paymentStatus": "true",
                    "amount": Amount,
                    "maskedCard": "",
                    "cardToken": ""
                }
            }
            var CryptoJS = require("crypto-js");
            let nonce = CryptoJS.lib.WordArray.random(8).toString();
            let bytes = CryptoJS.HmacSHA256(JSON.stringify(reqBody), nonce);
            let hash = bytes.toString(CryptoJS.enc.Hex).toUpperCase();
            cy.request({
                method: 'POST',
                url: Cypress.env('apiBaseURL') + ':9999/jigsaw/serviceRequest/resume/CWOAP',
                body: reqBody,
                headers: {
                    'Nonce': nonce,
                    'Signature': hash
                }
            })
        })
    }
})


Cypress.Commands.add('getDeletebtn', (filename) => {
    cy.iframe().find('[class="mat-row cdk-row active-row ng-star-inserted"]').each(($row) => {
        cy.wrap($row).within(function () {
            let foundDefault = false
            cy.get('[role="cell"]').each(($el) => {
                if ($el.text().includes('Default')) {
                    foundDefault = true
                    cy.log($el.text())
                    cy.get('#delete').eq(0).should('be.disabled')
                    return false
                }
            })
            if (foundDefault) {
                return false
            }
        })
    })
})



Cypress.Commands.add('getDeleteBanner', (filename) => {
    cy.iframe().find('[class="mat-row cdk-row active-row ng-star-inserted"]').each(($row) => {
        cy.wrap($row).within(function () {
            let foundDefault = false
            cy.get('[role="cell"]').each(($el) => {
                if ($el.text().includes(' Republic')) {
                    foundDefault = true
                    cy.log($el.text())
                    cy.get('#delete').eq(0).click({ force: true })

                    return false
                }
            })
            if (foundDefault) {
                return false
            }
        })
    })
})

Cypress.Commands.add('PostgresOTP', (Adminurl, port) => {
    if (Cypress.env('DB').includes("Yes")) {

        const querys = 'select otp from qa_otp.otp_record or2 order by created_on desc limit 1';
        //   const query = 'select otp from qa_otp.otp_record or2 order by created_on desc limit 1';
        // console.log(querys.rows)
        cy.task("SqlQueryPS", querys).then((result) => {
            cy.log(result.rows)

            const OTP = Object.values(result.rows)
        
            var input = result.rows
            var otps = input[0].otp

            const arrOfDigits = Array.from(String(otps), Number);
            cy.log(arrOfDigits)
            console.log("Digit" +arrOfDigits)

            var OTPArr = Array.from({ length: 6 }, (v, k) => k + 1)
            cy.log(OTPArr)
            cy.wrap(OTPArr).each((index) => {
                pageLogin.gettypeotp().eq(index - 1).type(arrOfDigits[index - 1])
            })
            pageLogin.getclickOnverifyButton().click()

        })
        // })
    }

    else {

        let url1
        cy.intercept('/mobiquitypay/v2/otp/generate').as('getOTP')
        APIPage.getOTPicon().eq(0).click({ force: true })
        cy.wait('@getOTP', { timeout: 30000 }).then((interception) => {
            let response = interception.response.body
            const resValues = Object.values(response)
            const serviceRequestID = resValues[1]
            cy.log(serviceRequestID)
            if (port == "No") {
                url1 = Adminurl + '/otpservice/internal/genotp/'
            } else {
                url1 = Adminurl + ':3133' + '/otpservice/internal/genotp/'
            }

            let getURL = url1.concat(serviceRequestID)
            cy.request({
                url: getURL,
                headers: {
                    'Authorization': 'Basic YWRtaW46c2VjcmV0',
                    'Content-Type': 'application/json'
                }
            }).then((res) => {
                let res1 = res.body
                const res3 = Object.values(res1)
                let OTP = res3[4]
                var OTPArr = Array.from({ length: 6 }, (v, k) => k + 1)
                cy.wrap(OTPArr).each((index) => {
                    APIPage.getOTPDailogbox().eq(index - 1).type(OTP[index - 1])
                })
                APIPage.getVerifybttn().click()
            })
        })

    }

})

