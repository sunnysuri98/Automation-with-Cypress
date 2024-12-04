describe("login functionality", () => {
  it("login functionality with valid  email and password", () => {
    cy.visit("https://freelance-learn-automation.vercel.app/login");
    

    cy.get("input[placeholder='Enter Email']").type("admin@email.com");
    cy.get("input[placeholder='Enter Password']").type("admin@123");

    cy.contains("button", "Sign in").click();

    cy.contains("button", "Cart").should("be.visible");
  });

  it("login functionality with invalid  email and password", () => {
    cy.visit("https://freelance-learn-automation.vercel.app/login");

    cy.url().should("include", "/login");

    cy.get("input[placeholder='Enter Email']").type("admin@email.com");
    cy.get("input[placeholder='Enter Password']").type("password123");

    cy.contains("button", "Sign in").click();

    cy.get("h2[class='errorMessage']")
      .should("be.visible")
      .and("contain", "Email and Password Doesn't match");

  });
});
