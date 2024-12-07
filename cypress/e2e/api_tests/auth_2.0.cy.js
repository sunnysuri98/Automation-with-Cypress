

describe('Auth2.0 testing', () => {

    let token;
    before(() => {


        cy.request({
            method: "POST",
            url: "https://accounts.spotify.com/api/token",
            form: true,
            headers: {

                "Content-Type": "application/x-www-form-urlencoded"

            },
            body: {
                "client_id": Cypress.env('id'), // use your own client_id
                "client_secret": Cypress.env('secret'), // use your own client_secret
                "grant_type": "client_credentials"
            }
        }).then(resp => {
            token = resp.body["access_token"];
            cy.log(JSON.stringify(resp.body));
            expect(resp.body).has.property("token_type", "Bearer");


        })

    });


    it('validating get artist', () => {

        let artist_id = "0TnOYISbd1XYRBk9myaseg";


        cy.request({
            method: "GET",
            url: `https://api.spotify.com/v1/artists/${artist_id}`,
            form: false,
            headers: {
                "authorization": `Bearer ${token}`,
            }


        }).then(response=>{
            cy.log(JSON.stringify(response.body))
            expect(response.status).to.equal(200);
        })

    });
})