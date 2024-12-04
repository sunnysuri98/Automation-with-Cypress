describe("my test suite", () => {
    let data;
    before(() => {
        cy.fixture("data").then((d) => {
            data = d;

        })
    })

    // it('fixtures_demo_test', () => {

    //     cy.fixture("data").then((d) => {
    //         cy.visit("https://freelance-learn-automation.vercel.app/login");

    //         cy.get("input[placeholder='Enter Email']").type(d.email);
    //         cy.get("input[placeholder='Enter Password']").type(d.password);

    //         cy.contains("button", "Sign in").click();

    //         cy.contains("button", "Cart").should("be.visible");

    //     })



    // });

    it('fixtures_demo_test', () => {

        cy.visit("https://freelance-learn-automation.vercel.app/login");

        cy.get("input[placeholder='Enter Email']").type(data.email);
        cy.get("input[placeholder='Enter Password']").type(data.password);

        cy.contains("button", "Sign in").click();

        cy.contains("button", "Cart").should("be.visible");





    });
})