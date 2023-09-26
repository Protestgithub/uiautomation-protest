//----------------Imports---------------------------------------------------------------------
import 'cypress-iframe'
import BankingActivation from '../../support/pageObjects/BankingActivation';
import API from '../pageObjects/API';

//----------------Object Declaration----------------------------------------------------------
const bankingActivationPage = new BankingActivation()
var SubscriberMsg = 'cypress/fixtures/userData/subscriberMsg.json'
const APIPage = new API()
let SubMobile, SubsMobile
//------------------------------------------------------------------------------------------------------
Cypress.Commands.add('getMobBankingActivationMessage', (Adminurl, port) => {
    let url1
    cy.intercept('/admin/activate-channel-cif').as('getmessage')
    bankingActivationPage.getConfirmButton().contains('Confirm').click({force:true})
    
    bankingActivationPage.getConfirmButton().contains('Done').click({force:true})
    
    //approvalPage.getApproveConfirmationMessage().contains(this.data2.confirmationMessage.editUser)

    //  cy.iframe().find('[id="generate-otp-icon"]').eq(0).click()
    cy.wait('@getmessage',{timeout:30000}).then((interception) => {
        let response = interception.response.body
        const resValues = Object.values(response)
        let serviceRequestID = resValues[3]
        cy.log(serviceRequestID)
        if (port == "No"){
            url1 = Adminurl + '/notify/internal/getByMessageIdOrExternalIdAndByToWhom?messageId='
        } else {
            url1 = Adminurl + ':9012' + '/notify/internal/getByMessageIdOrExternalIdAndByToWhom?messageId='
        }
        
        let url2 = url1.concat(serviceRequestID)
        let url3 = url2.concat('&toWhom=')

        cy.fixture('userData/subscriberReg.json').then((data) => {
           SubMobile = data.subscriberMobile
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
            cy.readFile(SubscriberMsg).then((data)=>{
                data.MobBankingActivationMessage=res1
                cy.writeFile(SubscriberMsg, data)

            })
        })
    })
})


Cypress.Commands.add('getInternetBankingActivationMessage', (Adminurl, port) => {
    let url1
    cy.intercept('/admin/activate-channel-cif').as('getmessage')
    bankingActivationPage.getConfirmButton().contains('Confirm').click({force:true})
    
      bankingActivationPage.getConfirmButton().contains('Done').click({force:true})
    
    //approvalPage.getApproveConfirmationMessage().contains(this.data2.confirmationMessage.editUser)

    //  cy.iframe().find('[id="generate-otp-icon"]').eq(0).click()
    cy.wait('@getmessage',{timeout:30000}).then((interception) => {
        let response = interception.response.body
        const resValues = Object.values(response)
        let serviceRequestID = resValues[3]
        cy.log(serviceRequestID)
        if (port == "No"){
            url1 = Adminurl + '/notify/internal/getByMessageIdOrExternalIdAndByToWhom?messageId='
        } else {
            url1 = Adminurl + ':9012' + '/notify/internal/getByMessageIdOrExternalIdAndByToWhom?messageId='
        }
        let url2 = url1.concat(serviceRequestID)
        let url3 = url2.concat('&toWhom=')

        cy.fixture('userData/subscriberReg.json').then((data) => {
            SubsMobile = data.subscriberMobile
            cy.log(SubsMobile)
        })
        let getURL = url3.concat(SubsMobile)

        cy.request({
            url: getURL,
            headers: {
                'Authorization': 'Basic YWRtaW46c2VjcmV0',
                'Content-Type': 'application/json'
            }
        }).then((res) => {
            let res1 = res.body
            cy.readFile(SubscriberMsg).then((data)=>{
                data.InternetBankingActivationMessage=res1
                cy.writeFile(SubscriberMsg, data)

            })
        })
    })
})


Cypress.Commands.add('OTP1',(Adminurl,port) => {
    let url1
    cy.intercept('/admin/activate-banking-cif/new-user/initiate').as('getOTP')
    bankingActivationPage.getNextBtn2().click({ force: true })
    cy.wait('@getOTP',{timeout:30000}).then((interception) => {
        let response = interception.response.body
        const resValues = Object.values(response)
        const serviceRequestID = resValues[3]
        cy.log(serviceRequestID)
        
          if (port == "No"){
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
            bankingActivationPage.getConfirmButton().contains('Done').click({force:true})
        })
    })
})