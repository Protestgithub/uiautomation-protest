/// <reference types="Cypress" />
/// <reference types = "Cypress-iframe"/>

//----------------Imports---------------------------------------------------------------------
import 'cypress-iframe'
import { Given, When, Then, And, Before } from "@badeball/cypress-cucumber-preprocessor";
import "../../../../../../../../support/Utils/generic"
import "../../../../../../../../support/Utils/subscriberCommands";
import "../../../../../../../../support/Utils/AdministratorCommands";
import "../../../../../../../../support/Utils/BusinessUserCommands";
import CashInCashOut from '../../../../../../../../support/pageObjects/CashInCashOut/CashInCashOut';


//----------------Object Declaration-----------------------------------------------------------------
const cashin=new CashInCashOut()

const uuid = () => Cypress._.random(1e8)
const uuid1 = () => Cypress._.random(1e8)
const uuuid = () => Cypress._.random(1e3)
amount = uuuid()
var  mobile, mobile1, KycValue, amount, name, ifscnum, accnumber
const timestamp = (new Date).getTime()
KycValue = "A" + timestamp
mobile = "77" + uuid1()
mobile1 = "77" + uuid()
let answerone="vuip45$"
let answertwo="mlop$93"
let businesslogin="cypress/fixtures/userData/BusinessUsersData.json"
var BuisnessReg = 'cypress/fixtures/userData/BusinessUsersData.json'
//var BankData = 'cypress/fixtures/userData/BusinessUsersDataO2C.json'
var BuisnessRegO2C = 'cypress/fixtures/userData/BusinessUsersDataO2C.json'
var subRegistration = 'cypress/fixtures/userData/subscriberReg.json'

function getRandomName() {
  name = "";
  var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
  for (var i = 0; i < 5; i++)
    name += possible.charAt(Math.floor(Math.random() * possible.length));
  return name;
}
function getRandomNumber() {
    name = "77";
    var possible = "0123456789";
    for (var i = 0; i < 3; i++)
      name += possible.charAt(Math.floor(Math.random() * possible.length));
    return name;
  }





And ('Enter the 10.01 as amount for cash out', function()
{
  cy.readFile(subRegistration).then((data) => {
      let mobilenumber =data.subscriberMobile
      
   
   cashin.getSubscriberMobileNumberTab().type(mobilenumber)
   cashin.gettabClick().click()
   
   cashin.getCashOutAmount().type('10.01')
   cashin.getCashOutSubmit().click({force:true})
   cy.wait(2000)
   cashin.getConfirm().click({force:true})
})
})


And ('Cash Out request is successful should be displayed',function()
{
     cy.wait(2000)
     cashin.getSuccessMessage().contains(this.data1.cashoutsuccessmessage)
    
}) 









  When('Click on cash Out',function()
{
  cashin.getCashInCashOut().click({force:true})
  cashin.getCashOut().click({force:true})
  
  cy.wait(2000)

})

And ('Enter required details for cash out', function()
{
  cy.readFile(subRegistration).then((data) => {
      let mobilenumber =data.subscriberMobile
      
   
   cashin.getSubscriberMobileNumberTab().type(mobilenumber)
   cashin.gettabClick().click()
   cy.wait(2000)
   cashin.getCashOutAmount().type('10')
   cashin.getCashOutSubmit().click({force:true})
   cy.wait(2000)
   cy.waitUntil(()=>{
    return cy.iframe().find('div#page.container>div#content>form#cashOutWeb_makePayment>table.wwFormTableC>tbody>tr>td.tabhead').contains('Please confirm the following transfer')
  })
   cashin.getConfirm().click({force:true})
   cy.wait(2000)
})
})

And('Cash Out request is successful should be displayed along with transaction id',function()
{
     
     cashin.getSuccessMessage().contains(this.data1.cashoutsuccessmessage)
     cashin.getSuccessMessage().then(($btn) => {
        const txt = $btn.text()
        cy.log(txt)
        let TransactionCashOutid=txt.split(':')[1]
        cy.log(TransactionCashOutid)
        cy.readFile(businesslogin).then((data) => {
          data.CASHOUTTRANSACTIONID =TransactionCashOutid
          cy.writeFile(businesslogin,data)
        })
      
      })

})



