describe("iframe", () => {
  it("handling iframes", () => {
    cy.visit("https://selectorshub.com/iframe-scenario/");

    cy.get("#pact1").then(($iframe1) => {
      let iframe_1 = $iframe1
        .contents()
        .find("body");

      cy.wrap(iframe_1).find("input[placeholder='First Crush']").type("hacker");

      cy.get(iframe_1).find("#pact2").then(($iframe2) => {
        let iframe_2 = $iframe2
          .contents()
          .find("body");

        cy.wrap(iframe_2).find("input[placeholder='Current Crush Name']").type("Javascript");

        cy.get(iframe_2).find("#pact3").then(($iframe3) => {
          const iframe_3 = $iframe3.contents().find("body");

          cy.wrap(iframe_3).find("input[placeholder='Destiny']").type("Billionare");
        });

        cy.wait(5000);
      });
    });
  });
});
