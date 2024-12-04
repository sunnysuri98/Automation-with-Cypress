describe("checkbox_radio_button", () => {
  it("verify user is able to check checkbox or not", () => {
    cy.visit("https://the-internet.herokuapp.com/checkboxes");

    cy.get("form[id='checkboxes']").children("input").eq(0).click();
    cy.get("#checkboxes > :nth-child(1)").should("have.attr", "checked");
  });

  it("verify user is able to check radio_button or not", () => {
    cy.visit("https://testautomationpractice.blogspot.com/");

    cy.contains("label", "Sunday").prev().check();

  });
});
