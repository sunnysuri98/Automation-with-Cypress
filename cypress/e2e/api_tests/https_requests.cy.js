
describe('Http request', () => {

    it('GET call', () => {

        cy.request("https://jsonplaceholder.typicode.com/posts").its("status").should("equal", 200);
    });


    it('POST  call', () => {
        cy.request({
            method: 'POST',
            url: "https://jsonplaceholder.typicode.com/posts",
            body: {
                "userId": 10,
                "title": "Testing123",
                "body": "I am a tester"
            }

        }).its("status").should("equal", 201)

    });

    it('PUT call', () => {
        cy.request({
            method: "PUT",
            url: "https://jsonplaceholder.typicode.com/posts/5",
            body: {
                "userId": 1,
                "id": 5,
                "title": "hack",
                "body": "I am a hacker"
            }


        }).its("status").should("equal", 200)
    })

    it('DELETE call', () => {

        cy.request({
            method:"DELETE",
            url:"https://jsonplaceholder.typicode.com/posts/5"

        }).its("status").should("equal",200);

        
    });

})