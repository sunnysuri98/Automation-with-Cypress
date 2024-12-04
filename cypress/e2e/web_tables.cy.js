describe("My test suite", () => {
    it('handling web table', () => {

        cy.visit("https://testautomationpractice.blogspot.com/");

        cy.contains("h2","Pagination Web Table").scrollIntoView();

        cy.get("table[id='productTable'] >tbody >tr:nth-child(2) >td:last-of-type>input").click();

        cy.wait(5000);

    });
})