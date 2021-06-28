/// <reference types="cypress" />
import {HomePage}from "../../support/pages/homePage"
let homePage;

describe('When user login with valid credentials', () => {
  
  
    homePage = new HomePage();
    
    before(() => {
        
        cy.fixture('data').then(function(data)
    {
        this.data=data ;
    })
        cy.loginCustomCommand(Cypress.env('username'), Cypress.env('password'));
    })
    after(() => {
        homePage.logOut();
    })

   it('Add and Remove product from cart', function() {
        
        homePage.removeProductFromCart();
        homePage.searchProduct(this.data.product);
        homePage.addProductAndVerify();
        homePage.increaseProductQuantityInCart();
 
       
    })



})
