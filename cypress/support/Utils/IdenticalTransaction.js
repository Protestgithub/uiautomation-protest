import IdenticalTransaction from '../pageObjects/IdenticalTransaction/IdenticalTransaction';
import 'cypress-file-upload';
import loginPage from '../../support/pageObjects/loginPage';

//-------------------------Object Declaration----------------------------------------------------------

const identicalTransactionPage = new IdenticalTransaction()
const pageLogin = new loginPage()

function getRandomInt(min, max) {
	return Math.floor(Math.random() * (max - min + 1)) + min;
}

Cypress.Commands.add('getServiceType', () => {
    	cy.wait(3000)
	cy.frameLoaded(pageLogin.getiFrame())
	identicalTransactionPage.getServiceType() // we get the select/option by finding the select by id
		.then(listing => {
			const randomNumber = getRandomInt(0, listing.length - 1); //generate a rendom number between 0 and length-1. In this case 0,1,2
			identicalTransactionPage.getServiceType().eq(randomNumber).then(($select) => {              //choose an option randomly
				const text = $select.text()       //get the option's text. For ex. "A"
				identicalTransactionPage.getServiceTypes().select(text) 
				// select the option on UI
					cy.wait(2000)

			});
		})
})


Cypress.Commands.add('getActionOnTxn', () => {
	cy.frameLoaded(pageLogin.getiFrame())
	identicalTransactionPage.getActionOnTxn() // we get the select/option by finding the select by id
		.then(listing => {
			const randomNumber = getRandomInt(0, listing.length - 1); //generate a rendom number between 0 and length-1. In this case 0,1,2
			identicalTransactionPage.getActionOnTxn().eq(randomNumber).then(($select) => {              //choose an option randomly
				const text = $select.text()       //get the option's text. For ex. "A"
				identicalTransactionPage.getActionOnTxns().select(text)       // select the option on UI
			});
		})
})
