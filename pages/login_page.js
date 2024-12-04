class LoginPage {

    elements = {
        usernameinput: () => cy.get("input[placeholder='Username']"),
        passwordinput: () => cy.get("input[placeholder='Password']"),
        loginbtn: () => cy.contains("button", "Login"),
        url: ()=> cy.url() 

    }

    login(username, password) {

        this.elements.usernameinput().type(username);
        this.elements.passwordinput().type(password);
        this.elements.loginbtn().click();

    }

    verify_login_page_url(){

        this.elements.url().should("include","/login")

    }


}


module.exports= new LoginPage;