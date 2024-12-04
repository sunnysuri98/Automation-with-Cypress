describe("vercel app functionality", () => {
  before(() => {
    cy.visit("https://freelance-learn-automation.vercel.app/login");

    cy.get("input[placeholder='Enter Email']").type("admin@email.com");
    cy.get("input[placeholder='Enter Password']").type("admin@123");

    cy.contains("button", "Sign in").click();
  });
  it("verify user is able to add cypress course in cart or not", () => {
    cy.contains("h2", "Cypress")
      .parents("div[class='bottom-div col-lg-24']")
      .find("button")
      .contains("Add to Cart")
      .click();

    cy.get("span[class='count']").should("have.text", "1");

    cy.get("button[class='cartBtn']").click();

    cy.get("h2").contains("Cypress").should("have.text", "Cypress").and("be.visible");
  

  });
});
