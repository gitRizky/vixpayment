const { Given, When, Then } = require("@badeball/cypress-cucumber-preprocessor");

Given("User navigates to the VIX detail page", () => {
    cy.visit("https://web-staging.rakamin.com/virtual-internship-experience/digital-marketing-muamalat");
});

When("User click “Daftar Sekarang”", () => {
    cy.get("[data-cy='register-vix-button']").click({ force: true }).wait(2000);
});

Then("User redirected to login page", () => {
    cy.get('[data-cy="login-first-button"]').should("be.visible").click();
    cy.url().should("include", "login");
});

When("User fill login credential and submit", () => {
    cy.get("form").should("be.visible").within(() => {
        cy.get("[name='email']").clear().type("tstsample2@yopmail.com"); // Change email with new registered before start test because quota limit will be blocker of this test
        cy.get("[name='password']").clear().type("password");
    }).submit().wait(2000);
});

Then("The system redirects user to VIX detail page", () => {
    cy.url().should("include", "virtual-internship-experience/digital-marketing-muamalat").and("not.include", "login");
});

Then("User continue to checkout following Scenario#1", () => {
    cy.get("[data-cy='register-vix-button']").click({ force: true }).wait(2000);
    cy.get('[data-cy="full-name-text-field"]').clear().type("Mahadir");
    cy.get("[data-cy='phone-number-text-field']").clear().type("6288888888");
    cy.get("[data-cy='vix-info-source-option-4']").click();
    cy.get("[data-cy='agreement-checkbox']").scrollIntoView().click();
    cy.get("[data-cy='vix-form-submit-button']").click().wait(2000);
    cy.get("[class='ant-modal-content']").last().should("be.visible").within(() => {
        cy.get("[data-cy='button-confirm']").click();
    });
    cy.url().should('include', "checkout").and("not.include", "virtual-internship-experience/digital-marketing-muamalat");
    cy.get("[data-cy='vip-access-checkbox']").should("be.visible").dblclick();
    cy.get("[data-cy='continue-to-payment-button']").click();
    cy.url().should("not.include", "checkout");
});