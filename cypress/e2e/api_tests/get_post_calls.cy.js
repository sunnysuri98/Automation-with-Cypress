import { faker } from '@faker-js/faker'
describe('api testing', () => {

    it('post endpoint testing', () => {

        const name = faker.person.fullName();

        const request_body = {
            name: name,
            email: `${name.replace(/ /g, '').toLowerCase()}@gmail.com`,
            gender: faker.helpers.arrayElement(['male', 'female']),
            status: faker.helpers.arrayElement(['active', 'inactive'])

        }

        cy.request({
            method: "POST",
            url: "https://gorest.co.in/public/v2/users",
            headers: {
                'authorization': `Bearer ${Cypress.env('token')}`  // use your own token
            },
            body: request_body

        }).then((res) => {
            // cy.log(JSON.stringify(res.body))
            expect(res.status).to.eq(201)
            expect(res.body.name).to.eq(request_body.name)
            expect(res.body).has.property("email", request_body.email)
            expect(res.body.gender).to.eq(request_body.gender)
            expect(res.body.status).to.eq(request_body.status)



        }).then((res) => {
            const id = res.body.id;

            cy.request({
                method: "GET",
                url: `https://gorest.co.in/public/v2/users/${id}`,
                headers: {
                    'authorization': `Bearer ${Cypress.env('token')}`
                }

            }).then((res) => {
                expect(res.body).has.property("id", id);
                expect(res.body.name).to.eq(request_body.name)
                expect(res.body).has.property("email", request_body.email)
                expect(res.body.gender).to.eq(request_body.gender)
                expect(res.body.status).to.eq(request_body.status)

            })

        })

    });
})