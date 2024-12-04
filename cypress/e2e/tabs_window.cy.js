describe("Handling tabs and windows", () => {
  it("handling new tabs", () => {
    cy.visit("https://selectorshub.com/xpath-practice-page/");
    // cy.contains("a","Click here to practice iframe and nested iframe scenarios.").invoke("removeAttr","target").click();

    cy.contains(
      "a",
      "Click here to practice iframe and nested iframe scenarios."
    )
      .invoke("attr", "target", "_self")
      .click();
  });

  it("handling new window", () => {
    cy.visit("https://alapanme.github.io/testing-cypress.html");
    cy.window().then((w) => {
      cy.stub(w, "open", (url) => {
        w.location.href = "https://the-internet.herokuapp.com/";
      }).as("popup");

      cy.contains("button", "Try it").click();

      cy.get("@popup").should("be.called");
      cy.wait(5000);
    });
  });
});


// The .invoke() command in Cypress is used to call a method or function on a jQuery-wrapped element. Think of it as a way to directly interact with an element's properties or functions that you would use in plain JavaScript or jQuery.