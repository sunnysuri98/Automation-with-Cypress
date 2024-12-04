describe("Handling drop-down ", () => {
  //   beforeEach(() => {
  //     cy.visit("https://testautomationpractice.blogspot.com/");
  //   });

  //   it("verify user is able to select values from single select drop-down", () => {
  //     cy.get("#country").select("Australia");
  //     cy.get("#country").should("have.value", "australia");
  //   });

  // it("verify user is able to select mutiple values from drop-down", () => {

  //   cy.visit("https://freelance-learn-automation.vercel.app/signup")
  //   cy.get("#hobbies").select(["Reading", "Swimming"]).invoke('val')
  //   .should('deep.equal', ["Reading", "Swimming"]);

  // });

  it("Testing blur", () => {
    cy.visit("https://testautomationpractice.blogspot.com/");

    cy.get("input[placeholder='Enter EMail']").type("hacker@email.com").blur();

    cy.wait(5000);
  });
});
