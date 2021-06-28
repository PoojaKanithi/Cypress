export class HomePage {

    login(username, password) {
        cy.get("#username").type(username);
        cy.get("#password").type(password);
        cy.get("[name='login']").click();
    }
    searchProduct(product) {
        cy.get(".noo-search").click();
        cy.get("[type='search']").clear().type(product).type('{Enter}');
    }
    addProductAndVerify() {
        cy.get(".hover-device", { timeout: 5000 }).first().dblclick();
        cy.get("select#pa_color").first().select("Pink");
        cy.get("select#pa_size").first().select("38");
        cy.get("button.single_add_to_cart_button.button.alt").click();
        cy.get(".cart-name-and-total").should("have.text", "Cart(1)₹15.00");
    }
    increaseProductQuantityInCart() {

        cy.get('.icon_bag_alt').click();
        cy.get(".icon_plus").first().click().then(function () {
            cy.wait(2000);
            cy.get(".input-text.qty.text").should("have.value", "2");
        })
    }
    removeProductFromCart() {
        cy.get('.icon_bag_alt').click();
        cy.get(".icon_close_alt2").first().click().then(function () {
            cy.wait(2000);
            cy.get(".cart-name-and-total").should("have.text", "Cart(0)₹0.00");
        })
    }
    logOut() {
        cy.get("a").contains("My Account").click({ force: true });
        cy.get("a").contains("Log out").click({ force: true });
        cy.log("Execution ended")
    }
}
