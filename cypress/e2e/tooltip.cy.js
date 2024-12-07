describe(' verify different tool tip texts', () => {

    beforeEach(()=>{
        cy.visit("https://practice.expandtesting.com/tooltips")
    })
    it('Test-1: tooltip-1 text ', () => {


        cy.get("#btn1").realHover();
        cy.contains("div", "Tooltip on top").should("be.visible")


    });
    it.only('Test-2: tooltip-3 text', () => {


        cy.get("#btn3").realHover();
        cy.contains("div", "Tooltip on bottom").should("be.visible")
        

    });
})