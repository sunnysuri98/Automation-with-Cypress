describe("handling shadow dom",()=>{

    it('verify user is  able to enter value or not inside fname field', () => {

        cy.visit("https://letcode.in/shadow");

        cy.get("[id='open-shadow']").shadow().find("#fname").type("hacker");

        cy.wait(5000);
        
    });

})