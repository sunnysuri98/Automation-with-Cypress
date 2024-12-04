class DashboardPage {

    elements = {
        heading : () => cy.contains("h6", "Dashboard"),
        menu: ()=> cy.get("img[alt='profile picture']"),
        logoutbtn: ()=> cy.contains("a","Logout") 
    }

    verify_dashboard() {

        this.elements.heading().should("have.text", "Dashboard");

    }

    logout() {
        this.elements.menu().click();
        this.elements.logoutbtn().click();

    }

}

module.exports = new DashboardPage;