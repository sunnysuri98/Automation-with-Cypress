describe('handling keyboard',()=>{

    it('handling keys', () => {

        cy.visit("https://testautomationpractice.blogspot.com/");
        cy.get("textarea[id='textarea']").type("Your good name:{enter}Sunny Suri h{enter} how are you!!{upArrow}{backspace}{selectAll}",{delay:100});
        cy.wait(5000);
        
    });

})