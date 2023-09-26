
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
import loginPage from '../pageObjects/loginPage';
import homePage from '../pageObjects/homePage';
import 'cypress-file-upload';
import 'cypress-wait-until';
import API from '../pageObjects/API';
import WithdrawCash from '../../support/pageObjects/W2BandB2W/W2BandB2W'


//-------------------------Object Declaration----------------------------------------------------------

const APIPage = new API()

function getRandomName() {
    name = "";
    var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    for (var i = 0; i < 5; i++)
        name += possible.charAt(Math.floor(Math.random() * possible.length));
    return name;
}

function getRandomInt(min, max) {

    return Math.floor(Math.random() * (max - min + 1)) + min;
}


function getRandomNumber() {
    name = "";
    var possible = "123456789";
    for (var i = 0; i < 5; i++)
        name += possible.charAt(Math.floor(Math.random() * possible.length));
    return name;
}
Cypress.Commands.add('getElectricBillApproval', (Adminurl, port) => {
    cy.wait('@getEBP', { timeout: 30000 }).then((interception) => {
        cy.readFile('cypress/fixtures/userData/ElectricBill.json').then((user)=>{

        let response = interception.response.body
        const resValues = Object.values(response)
        let serviceRequestID = resValues[4]
        let OrderId = resValues[2]
        cy.log(serviceRequestID)
        cy.log(OrderId)
        user.EBillOrderId= OrderId
        user.ElectricServiceReqID = serviceRequestID
        cy.writeFile('cypress/fixtures/userData/ElectricBill.json',user)
    })
})
    cy.readFile('cypress/fixtures/userData/ElectricBill.json').then((user) => {
        let ServiceId1 = user.ElectricServiceReqID
        cy.log(ServiceId1)
        let reqBody = {
            "fulfillmentDetails":{"fulfillmentId":getRandomNumber()},
            "resumeServiceRequestId":ServiceId1,
            "fulfillmentStatus":"true"
        }
        var CryptoJS = require("crypto-js");
        let nonce = CryptoJS.lib.WordArray.random(8).toString();
        let bytes = CryptoJS.HmacSHA256(JSON.stringify(reqBody), nonce);
        let hash = bytes.toString(CryptoJS.enc.Hex).toUpperCase();
        cy.request({
            method: 'POST',
            url:Cypress.env('apiBaseURL')+':9999/jigsaw/serviceRequest/BILLPAYOAP_RESUME',
            body: reqBody,
            headers:{
                'Nonce': nonce,
                'Signature' : hash
            }
            })
        })

})
Cypress.Commands.add('getElectricBillApproval1', (Adminurl, port) => {
    cy.readFile('cypress/fixtures/userData/ElectricBill.json').then((user)=>{
    cy.wait('@getEBP1', { timeout: 30000 }).then((interception) => {
        let response = interception.response.body
        const resValues = Object.values(response)
        let serviceRequestID = resValues[4]
        let OrderId = resValues[2]
        cy.log(serviceRequestID)
        cy.log(OrderId)

        user.ElectricServiceReqID1 = serviceRequestID
        user.EBillOrderId= OrderId

        cy.writeFile('cypress/fixtures/userData/ElectricBill.json',user)
    })

        if (port == "No") {
            url1 = Cypress.env('apiBaseURL') + '/otpservice/internal/genotp/'
        } 
        else {
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
            cy.intercept('/consumerportalui/mobiquitypay/serviceRequest/resume/any').as('getEBP2')
            APIPage.getVerifyOtpBtnCP().click()
            cy.wait('@getEBP2', { timeout: 30000 }).then((interception) => {
                cy.readFile('cypress/fixtures/userData/ElectricBill.json').then((user)=>{
                let response = interception.response.body
                const resValues = Object.values(response)
                let serviceRequestID1 = resValues[1]
                let OrderId = resValues[2]
                cy.log(OrderId)
                 cy.log(serviceRequestID1)
                user.EBillOrderId= OrderId
                user.ElectricServiceReqID1 = serviceRequestID1
                cy.writeFile('cypress/fixtures/userData/ElectricBill.json', user )
                })
            })

            cy.wait(10000)
              
        })
    })
    
    cy.readFile('cypress/fixtures/userData/ElectricBill.json').then((user) => {
        let ServiceId1 = user.ElectricServiceReqID1
        cy.log(ServiceId1)
        let reqBody = {
            "fulfillmentDetails":{"fulfillmentId":getRandomNumber()},
            "resumeServiceRequestId":ServiceId1,
            "fulfillmentStatus":"true"
        }
        var CryptoJS = require("crypto-js");
        let nonce = CryptoJS.lib.WordArray.random(8).toString();
        let bytes = CryptoJS.HmacSHA256(JSON.stringify(reqBody), nonce);
        let hash = bytes.toString(CryptoJS.enc.Hex).toUpperCase();
        cy.request({
            method: 'POST',
            url:Cypress.env('apiBaseURL')+':9999/jigsaw/serviceRequest/BILLPAYOAP_RESUME',
            body: reqBody,
            headers:{
                'Nonce': nonce,
                'Signature' : hash
            }
            })
        })
})


Cypress.Commands.add('getElectricBillBankApproval', (Adminurl, port) => {
    cy.readFile('cypress/fixtures/userData/ElectricBill.json').then((user)=>{
    cy.wait('@getEBPBank', { timeout: 30000 }).then((interception) => {
        let response = interception.response.body
        const resValues = Object.values(response)
        let serviceRequestID = resValues[4]
        let OrderId = resValues[2]

        cy.log(serviceRequestID)
        user.EBillOrderId= OrderId

        var json=
        {
            "resumeServiceRequestId": serviceRequestID,
                "paymentStatus": "true",
                "paymentDetails": {
                    "bankTransactionId": getRandomNumber(),
                    "referenceNumber": getRandomNumber(),
                    "paymentStatus": "true",
                    "amount": "100",
                    "maskedCard": "",
                    "cardToken": ""
                }
       }
       
        var CryptoJS = require("crypto-js");
        let nonce = CryptoJS.lib.WordArray.random(8).toString();
        cy.log(nonce)
        let bytes = CryptoJS.HmacSHA256(JSON.stringify(json), nonce);
        cy.log(bytes)
        let hash = bytes.toString(CryptoJS.enc.Hex).toUpperCase();
        
            cy.request({
            method: 'POST',
            url: Cypress.env('apiBaseURL') + ':9999/jigsaw/serviceRequest/resume/BILLPAYOAP',
            body:json,
            headers:{
                'Nonce': nonce,
                'Signature' : hash
            }

        }).then((res) => {
            let res1 = res.body
            const res3 = Object.values(res1)
            let SvId = res3[1]
            cy.log(SvId)
            user.ElectricServiceBankSvqId = SvId
            cy.writeFile('cypress/fixtures/userData/ElectricBill.json',user)

            })

            cy.wait(10000)
              
        })
    })

    
    cy.readFile('cypress/fixtures/userData/ElectricBill.json').then((user) => {
        let ServiceId1 = user.ElectricServiceBankSvqId
        cy.log(ServiceId1)
        var json=
        {
           "fulfillmentDetails":{"fulfillmentId":getRandomNumber()},
           "resumeServiceRequestId":ServiceId1,
           "fulfillmentStatus":"true"
       }
        var CryptoJS = require("crypto-js");
        let nonce = CryptoJS.lib.WordArray.random(8).toString();
        cy.log(nonce)
        let bytes = CryptoJS.HmacSHA256(JSON.stringify(json), nonce);
        cy.log(bytes)
        let hash = bytes.toString(CryptoJS.enc.Hex).toUpperCase();

        cy.request({
            method: 'POST',
            url: Cypress.env('apiBaseURL') + ':9999/jigsaw/serviceRequest/BILLPAYOAP_RESUME',
            body:json,
            headers:{
                'Nonce': nonce,
                'Signature' : hash
            }
        })
    })
})




Cypress.Commands.add('getTransfertoBankApproval', (Adminurl, port) => {
    if(Cypress.env('TransactionOTP').includes('Yes')){
        cy.readFile('cypress/fixtures/userData/W2BandB2W.json').then((user)=>{
        cy.wait('@getW2B',{timeout:30000}).then((interception) => {
            let response = interception.response.body
            const resValues = Object.values(response)
            let serviceRequestID = resValues[4]
            cy.log(serviceRequestID)
            user.W2BServiceRequesiId = serviceRequestID
            //if (port == "No") {
                url1 = Cypress.env('apiBaseURL') +':3133' + '/otpservice/internal/genotp/'
            //} else {
              //  url1 = Cypress.env('apiBaseURL') + ':3133' + '/otpservice/internal/genotp/'
            //}
    
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
            cy.writeFile('cypress/fixtures/userData/W2BandB2W.json',user)
        })
    })
    cy.readFile('cypress/fixtures/userData/W2BandB2W.json').then((user)=>{
    cy.wait('@getResume',{timeout:30000}).then((interception) => {
        let response = interception.response.body
        const resValues = Object.values(response)
        let serviceRequestID = resValues[1]
        cy.log(serviceRequestID)
        user.W2BServiceRequesiId = serviceRequestID
        cy.writeFile('cypress/fixtures/userData/W2BandB2W.json',user)
    })
})
cy.readFile('cypress/fixtures/userData/W2BandB2W.json').then((user)=>{
        let ServiceId = user.W2BServiceRequesiId
        let Amount = user.TransferAmount
        var json=
        {
           "fulfillmentDetails":{"fulfillmentId":getRandomNumber()},
           "resumeServiceRequestId":ServiceId,
           "fulfillmentStatus":"true"
       }
        var CryptoJS = require("crypto-js");
        let nonce = CryptoJS.lib.WordArray.random(8).toString();
        cy.log(nonce)
        let bytes = CryptoJS.HmacSHA256(JSON.stringify(json), nonce);
        cy.log(bytes)
        let hash = bytes.toString(CryptoJS.enc.Hex).toUpperCase();


        cy.request({
            method: 'POST',
            url:Cypress.env('apiBaseURL')+':9999/jigsaw/serviceRequest/WBOAP_RESUME',
            body: json,
            headers:{
            'Nonce': nonce,
            'Signature' : hash
            }

    })
    })
    
    }
    else{
        cy.readFile('cypress/fixtures/userData/W2BandB2W.json').then((user)=>{
            cy.wait('@getW2B',{timeout:30000}).then((interception) => {
                let response = interception.response.body
                const resValues = Object.values(response)
                let serviceRequestID = resValues[4]
                cy.log(serviceRequestID)
                user.W2BServiceRequesiId = serviceRequestID
                // if (port == "No") {
                //     url1 = Cypress.env('apiBaseURL') + '/otpservice/internal/genotp/'
                // } else {
                //     url1 = Cypress.env('apiBaseURL') + ':3133' + '/otpservice/internal/genotp/'
                // }
        
                // let getURL = url1.concat(serviceRequestID)
                // cy.request({
                //     url: getURL,
                //     headers: {
                //         'Authorization': 'Basic YWRtaW46c2VjcmV0',
                //         'Content-Type': 'application/json'
                //     }
                // }).then((res) => {
                //     let res1 = res.body
                //     const res3 = Object.values(res1)
                //     let OTP = res3[4]
                //     var OTPArr = Array.from({ length: 6 }, (v, k) => k + 1)
                //     cy.wrap(OTPArr).each((index) => {
                //         APIPage.getOTPbox().eq(index - 1).type(OTP[index - 1])
                //     })
                //     APIPage.getVerifyOtp().click()
                // })
                cy.writeFile('cypress/fixtures/userData/W2BandB2W.json',user)
            })
        })
    cy.readFile('cypress/fixtures/userData/W2BandB2W.json').then((user)=>{
            let ServiceId = user.W2BServiceRequesiId
            let Amount = user.TransferAmount
            var json=
            {
               "fulfillmentDetails":{"fulfillmentId":getRandomNumber()},
               "resumeServiceRequestId":ServiceId,
               "fulfillmentStatus":"true"
           }
            var CryptoJS = require("crypto-js");
            let nonce = CryptoJS.lib.WordArray.random(8).toString();
            cy.log(nonce)
            let bytes = CryptoJS.HmacSHA256(JSON.stringify(json), nonce);
            cy.log(bytes)
            let hash = bytes.toString(CryptoJS.enc.Hex).toUpperCase();

            cy.request({
                method: 'POST',
                url:Cypress.env('apiBaseURL')+':9999/jigsaw/serviceRequest/WBOAP_RESUME',
                body: json,
                headers:{
                'Nonce': nonce,
                'Signature' : hash
            }
                })
        })
    }

})
