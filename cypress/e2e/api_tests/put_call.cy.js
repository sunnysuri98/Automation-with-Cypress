
describe('api testing', () => {
    it('put endpoint testing', () => {

        cy.request({
            method: "POST",
            url: "https://gorest.co.in/public/v2/users",
            headers: {
                'authorization': `Bearer ${Cypress.env('token')}`
            },
            body: {
                name: "Karan Suri",
                email: "Karan.Suri@gmail.com",
                gender: "male",
                status: "inactive"
            }
        }).then((resp) => {

            expect(resp.body).has.property('name', 'Karan Suri')
            expect(resp.body).has.property('email', 'Karan.Suri@gmail.com')
            expect(resp.body).has.property('gender', 'male')
            expect(resp.body).has.property('status', 'inactive')

        }).then((resp) => {

            const id = resp.body.id

            cy.request({

                method: "PUT",
                url: `https://gorest.co.in/public/v2/users/${id}`,
                headers: {
                    'authorization': `Bearer ${Cypress.env('token')}`
                },
                body: {
                    name: "Renu Suri",
                    email: "Renu.Suri@gmail.com",
                    gender: "female",
                    status: "active"
                }
            }).then((resp) => {

                expect(resp.body).has.property('name', 'Renu Suri')
                expect(resp.body).has.property('email', 'Renu.Suri@gmail.com')
                expect(resp.body).has.property('gender', 'female')
                expect(resp.body).has.property('status', 'active')

            })

        })





    });
})