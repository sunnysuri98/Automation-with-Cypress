describe("handling hover element", () => {
  //   it("user is able to select values under hover element", () => {
  //     cy.visit("https://selectorshub.com/xpath-practice-page/");

  //     cy.get(".dropdown-content").invoke("show");

  //     cy.wait(5000);
  //   });

  it("user is able to select values under hover element", () => {
    cy.visit("https://www.flipkart.com/");
    cy.get("a[title='Login']:nth(0)").realHover();
    // cy.get("a[title='My Profile']").click({ force: true });
    cy.wait(5000);
  });
});
