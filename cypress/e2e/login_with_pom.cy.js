import LoginPage from "../../pages/login_page";
import DashboardPage from "../../pages/dashboard";


describe('My test suite', () => {

    it('Verify that the user can log in using the Page Object Model (POM).', () => {

        cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");

     

        LoginPage.login("Admin","admin123");

       
        
        DashboardPage.verify_dashboard();
        DashboardPage.logout();

        LoginPage.verify_login_page_url();

    });

})