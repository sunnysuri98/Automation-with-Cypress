describe('website login', () => {

    beforeEach(() => {

        cy.login("Admin", "admin123");

    })

    it('login into website and verify dashboard heading', () => {

        cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index")

        cy.contains("h6", "Dashboard").should("be.visible");


    });
    it('login into website and verify upgrade button is visible', () => {

        cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index");


        cy.contains("button", "Upgrade").should("be.visible");


    });

    
})