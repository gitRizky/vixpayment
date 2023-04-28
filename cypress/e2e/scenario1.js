const { Given, When, Then } = require("@badeball/cypress-cucumber-preprocessor");

Given("User navigates to the VIX detail page", () => {
    cy.visit("https://web-staging.rakamin.com/login");
    cy.get("form").should("be.visible").within(() => {
        cy.get("[name='email']").clear().type("tstsample1@yopmail.com"); // Change email with new registered before start test because quota limit will be blocker of this test
        cy.get("[name='password']").clear().type("password");
    }).submit().wait(2000);
    cy.visit("https://web-staging.rakamin.com/virtual-internship-experience/digital-marketing-muamalat");
});

When("User click “Daftar Sekarang”", () => {
    cy.get("[data-cy='register-vix-button']").click({ force: true }).wait(2000);
});

When("User fill form application", () => {
    cy.get("[data-cy='phone-number-text-field']").clear().type("6288888888");
    cy.get("[data-cy='vix-info-source-option-4']").click();
    cy.get("[data-cy='agreement-checkbox']").scrollIntoView().click();
    cy.get("[data-cy='vix-form-submit-button']").click();
});

Then("The system showing modal confirmation", () => {
    cy.get("[class='ant-modal-content']").should("be.visible");
});

When("User confirmed to continue", () => {
    cy.get("[class='ant-modal-content']").within(() => {
        cy.get("[data-cy='button-confirm']").click();
    });
});

Then("The system redirect the user to checkout page", () => {
    cy.url().should('include', "checkout").and("not.include", "virtual-internship-experience/digital-marketing-muamalat");
});

Then("User choose  VIP Access", () => {
    cy.get("[data-cy='vip-access-checkbox']").should("be.visible").dblclick();
});

Then("The system redirect to payment page", () => {
    cy.get("[data-cy='continue-to-payment-button']").click();
    cy.url().should("not.include", "checkout");
});