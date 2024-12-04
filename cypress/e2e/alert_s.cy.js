describe("handling alerts", () => {
  beforeEach(() => {
    cy.visit("https://testautomationpractice.blogspot.com/");
  });
  it("alerts handling", () => {
    cy.get("#alertBtn").click();
    cy.on("window:alert", (alert) => {
      expect(alert).to.equal("I am an alert box!");
    });

    cy.wait(5000);
  });
  it("confirm handling", () => {
    cy.get("#confirmBtn").click();
    cy.on("window:confirm", (text) => {
      expect(text).to.equal("Press a button!");
      return true;
    });

    cy.get("p[id='demo']").should("have.text", "You pressed OK!");

    cy.wait(5000);
  });

  it("prompt handling", () => {
    cy.window().then((w) => {
      cy.stub(w, "prompt").returns("Sunny Suri");

    });
    cy.get("#promptBtn").click();

    cy.wait(5000);

    cy.get("#demo").should("have.text","Hello Sunny Suri! How are you today?")


  });
});
