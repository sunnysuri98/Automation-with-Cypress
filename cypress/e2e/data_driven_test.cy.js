describe("Test suite", () => {
    beforeEach(() => {
        cy.visit("https://freelance-learn-automation.vercel.app/login");
    })
    it('data driven test', () => {

        cy.fixture("example").then((data) => {
            for (let d of data) {
                cy.get("input[placeholder='Enter Email']").clear().type(d.email);
                cy.get("input[placeholder='Enter Password']").clear().type(d.password);
                cy.contains("button", "Sign in").click();

                if (d.email === "admin@email.com" && d.password === "admin@123") {
                    cy.contains("button", "Cart").should("be.visible");
                } else {
                    cy.get(".errorMessage").should("have.text", "USER Email Doesn't Exist")
                }

                // cy.reload();


            }
        })

    });
})