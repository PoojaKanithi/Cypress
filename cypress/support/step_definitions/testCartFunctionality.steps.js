
import { Given, When, Then } from 'cypress-cucumber-preprocessor/steps';
import { HomePage } from '../pages/homePage';
let homePage;
before(() => {

    homePage = new HomePage();
    cy.fixture('data').then(function (data) {
        this.data = data;
    })
})

Given('I navigate to shopping Website', function () {
    cy.visit('/');
})

And('I login with my credentials', function () {
    homePage.login(this.data.username, this.data.password);
})

And ('I remove products from cart',function () {
    homePage.removeProductFromCart();
})

When('I do the search for shirt', function () {
    homePage.searchProduct(this.data.product);
})

Then('I add products and do verification on the Cart Page', function () {
    homePage.addProductAndVerify();
})

And('I do logout successfully', function () {
    homePage.logOut();
})



