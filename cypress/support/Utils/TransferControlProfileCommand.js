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
import { Before } from '@badeball/cypress-cucumber-preprocessor';
import TransferControlProfile from '../pageObjects/TransferControlProfile';


//-------------------------Object Declaration----------------------------------------------------------

const tcpPage = new TransferControlProfile()
var name
const filenameTCP = 'userData/TCPdata.json'
const filenameTCP1 = 'userData/TCPdata1.json'
const CustTCPdata = 'userData/CustTCPdata.json'
const CustTCPdata1 = 'userData/CustTCPdata1.json'
var Tcpname, Tcpname1,TcpnameSub,TcpnameSub1
const timestamp = (new Date).getMilliseconds()
var number
const uuid12 = () => Cypress._.random(1e8)
var LoginId1
LoginId1 = uuid12()
const fileRegulatoryProfile = 'userData/Regulatory&MarketingProfile.json'
var Tcpname, Tcpname1,TcpnameSub,TcpnameSub1, RName

//----------------Imports--------------------------------------------------------------------

//----------------Object Declaration----------------------------------------------------------

function getRandomName() {
    name = "";
    var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    for (var i = 0; i < 5; i++)
        name += possible.charAt(Math.floor(Math.random() * possible.length));
    return name;
}

Cypress.Commands.add('TcpName', (Text) => {

    cy.fixture(filenameTCP).then((user) => {
        Tcpname = user.TcpProfileName
        cy.log(Tcpname)
    })

})
Cypress.Commands.add('TcpNameSub', (Text) => {

  cy.fixture(filenameTCP1).then((user) => {
      TcpnameSub = user.TcpProfileNameSub
      cy.log(TcpnameSub)
  })

})
Cypress.Commands.add('TcpNameSub1', (Text) => {

  cy.fixture(CustTCPdata1).then((user) => {
      TcpnameSub1 = user.CustTCPProfileNameSub
      cy.log(TcpnameSub1)
  })

})


Cypress.Commands.add('TcpName1', (Text) => {

    cy.fixture(CustTCPdata).then((user) => {
        Tcpname1 = user.CustTCPProfileName
        cy.log(Tcpname1)
    })

})
Cypress.Commands.add('TCPRandomName', () => {
    let hi =Cypress.env("WHSInsTCPName")
    tcpPage.getprofilename().type(hi, { force: true })
    cy.readFile('cypress/fixtures/userData/TCPdata.json').then((data)=>{
      data.TcpProfileName=hi
      cy.writeFile('cypress/fixtures/userData/TCPdata.json', data)
    })
    function getRandomName() {
        name = "";
        var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
        for (var i = 0; i < 5; i++)
            name += possible.charAt(Math.floor(Math.random() * possible.length));
        return name;
    }

})
Cypress.Commands.add('TCPRandomNameSub', () => {
  let hi =Cypress.env('SubInsTCPName')
  tcpPage.getprofilename().type(hi, { force: true })
  cy.readFile('cypress/fixtures/userData/TCPdata1.json').then((data)=>{
    data.TcpProfileNameSub=hi
   cy.writeFile('cypress/fixtures/userData/TCPdata1.json', data)
  })
  function getRandomName() {
      name = "";
      var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
      for (var i = 0; i < 5; i++)
          name += possible.charAt(Math.floor(Math.random() * possible.length));
      return name;
  }

})
Cypress.Commands.add('TCPMasRandomName', () => {
    let hi = Cypress.env('TCPName')
    tcpPage.getprofilename().type(hi, { force: true })
    cy.readFile('cypress/fixtures/userData/CustTCPdata.json').then((data)=>{
      data.CustTCPProfileName=hi
    cy.writeFile('cypress/fixtures/userData/CustTCPdata.json',data)
    })
    function getRandomName() {
        name = "";
        var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
        for (var i = 0; i < 5; i++)
            name += possible.charAt(Math.floor(Math.random() * possible.length));
        return name;
    }

})
Cypress.Commands.add('TCPMasRandomNameSub', () => {
  let hi = Cypress.env('SubTCPName')
  tcpPage.getprofilename().type(hi, { force: true })
  cy.readFile('cypress/fixtures/userData/CustTCPdata1.json').then((data)=>{
    data.CustTCPProfileNameSub=hi
  cy.writeFile('cypress/fixtures/userData/CustTCPdata1.json', data)
  })
  function getRandomName() {
      name = "";
      var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
      for (var i = 0; i < 5; i++)
          name += possible.charAt(Math.floor(Math.random() * possible.length));
      return name;
  }

})
Cypress.Commands.add('ViewDetails',(Tcpname1)=>{
  let shouldStop = false
    tcpPage.getViewDetails().each(($row => {
      
      cy.then(() => {
        if(shouldStop){
            return
        }
        cy.wrap($row).within(function () {
    
          cy.get('td.name').each(($el => {
    
            if ($el.text().includes(Cypress.env('TCPName'))) {
              
              cy.get('span.glyphicon.glyphicon-info-sign').click({ force: true })
              shouldStop = true
            }
          }))
        })
      })
      }))

})
Cypress.Commands.add('EditDetails',(Tcpname1) =>{
  let shouldStop = false
    tcpPage.getViewDetails().each(($row => {

        cy.wrap($row).within(function () {
          cy.then(() => {
            if(shouldStop){
                return
            }
    
          cy.get('td.name').each(($el => {
    
            if ($el.text().includes(Cypress.env('TCPName'))) {
              cy.get('span.glyphicon.glyphicon-edit').click({ force: true })
              shouldStop = true
            }
          }))
        })
      })
      }))
})
Cypress.Commands.add('DeleteDetails',(Tcpname1)=>{
  let shouldStop = false
    tcpPage.getViewDetails().each(($row => {
      cy.then(() => {
        if(shouldStop){
            return
        }
        cy.wrap($row).within(function () {
    
          cy.get('td.name').each(($el => {
    
            if ($el.text() == Tcpname1) {
              cy.get('span.glyphicon.glyphicon-trash').click({ force: true })
              shouldStop = true
            }
          }))
        })
      })
      }))
})

Cypress.Commands.add('DeleteDetails1',(Tcpname) =>{
  let shouldStop = false
    tcpPage.getViewDetails().each(($row => {

        cy.wrap($row).within(function () {
          cy.then(() => {
            if(shouldStop){
                return
            }
    
          cy.get('td.name').each(($el => {
    
            if ($el.text() == Tcpname) {
              cy.get('span.glyphicon.glyphicon-trash').click({ force: true })
              shouldStop = true
            }
          }))
        })
      })
      }))
})

Cypress.Commands.add('getcumulativeamountpertransaction', () => {
  const uuid = () => Cypress._.random(1e3)
  var number = uuid()
  tcpPage.getcount1().each((e1, index, list) => {
      cy.wrap(e1).type(number)
    })
  tcpPage.getcount2().each((e1, index, list) => {
      cy.wrap(e1).type(number)
    })
  tcpPage.getcount3().each((e1, index, list) => {
      cy.wrap(e1).type(number)
    })
  tcpPage.getcount4().each((e1, index, list) => {
      cy.wrap(e1).type(number)
    })
  tcpPage.getcount5().each((e1, index, list) => {
      cy.wrap(e1).type(number)
    })
  tcpPage.getcount6().each((e1, index, list) => {
      cy.wrap(e1).type(number)
    })
  tcpPage.getcount7().each((e1, index, list) => {
      cy.wrap(e1).type(number)
    })
  tcpPage.getcount8().each((e1, index, list) => {
      cy.wrap(e1).type(number)
    })
  tcpPage.getcount9().each((e1, index, list) => {
      cy.wrap(e1).type(number)
    })
  tcpPage.getcount10().each((e1, index, list) => {
      cy.wrap(e1).type(number)
    })

    tcpPage.getcount11().each((e1, index, list) => {
      cy.wrap(e1).type(number)
    })
if(Cypress.env('version').includes('x.4')){
  tcpPage.getcount12().each((e1, index, list) => {
    cy.wrap(e1).type(number)
  })
}
else{
  cy.log("All amount entered")
}
    
 })
  
  Cypress.Commands.add('addTCP',()=>{
    tcpPage.getprovider().select(this.data25.TransferControlProfile.Provider, { force: true })
    tcpPage.getdomain().select(this.data25.TransferControlProfile.Domain, { force: true })
    tcpPage.getcategory().select(this.data25.TransferControlProfile.Category, { force: true })
    cy.fixture(fileRegulatoryProfile).then((user) => {
      RName = user.RegulatoryProfileName
      cy.log(RName)
      cy.waitUntil(()=>{
        return cy.iframe().find('#registrationType').select(RName, { force: true })
        })
    })
    cy.TCPMasRandomName()
    tcpPage.getdescription().type(this.data25.TransferControlProfile.Description)
    tcpPage.getadd().click({ force: true })
    cy.wait(3000)
    const uuid = () => Cypress._.random(1e3)
    number = uuid()
    tcpPage.getAmount().each((e1, index, list) => {
      cy.wrap(e1).type(number)
    })
    tcpPage.getcountmaster().each((e1, index, list) => {
      cy.wrap(e1).type(number)
    })
    tcpPage.getusermaxbalanceMaster().type(this.data25.TransferControlProfile.UserMaxBal)
    tcpPage.getNextEdit().click({ force: true })
    tcpPage.getConfirmEdit().click({ force: true })
    cy.fixture(CustTCPdata).then((user) => {
      Tcpname1 = user.CustTCPProfileName
      cy.log(Tcpname1)
      tcpPage.getReqtoAddIntiationMaster().should("contain", this.data25.confimationMessage.sucessMasterTcpIntiation + Tcpname1 + this.data5.confimationMessage.successpart2Master)
      cy.wait(3000)
    })
  })

//----------------------------------------------------------
const filenameTCPpath = 'userData/Gradedata.json'
function getRandomName() {
  name = "";
  var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
  for (var i = 0; i < 5; i++)
      name += possible.charAt(Math.floor(Math.random() * possible.length));
  return name;
}


Cypress.Commands.add('TCPname1', () => {
  let hi ="InstTCP" +"" +getRandomName() + timestamp
  tcpPage.getprofilename().type(hi, { force: true })
  // cy.readFile('cypress/fixtures/userData/Gradedata.json').then((user) => {
  // TcpProfileName1 = user.hi
  // cy.writeFile('cypress/fixtures/userData/Gradedata.json',user)
  cy.readFile('cypress/fixtures/userData/Gradedata.json').then((user) => {
    user.TcpProfileName1 = hi
   cy.log(hi)
  cy.writeFile('cypress/fixtures/userData/Gradedata.json', user)
  })
})


Cypress.Commands.add('TcpDeletion', (Text) => {

  cy.fixture(filenameTCPpath).then((user) => {
    TcpDelete = user.TcpProfileName1
      cy.log(TcpDelete)
  })
  
})

Cypress.Commands.add('TCPDeleteDetails',() =>{
  let shouldStop = false
   tcpPage.getViewDetails().each(($row => { cy.wrap($row).within(function () {
   cy.then(() => {
   if(shouldStop){
  return
   }
   cy.get('td.name').each(($el => {
   if ($el.text() == TcpDelete) {
   cy.get('span.glyphicon.glyphicon-trash').click({ force: true })
   shouldStop = true
   }
   }))
  })
   })
   }))
  })
