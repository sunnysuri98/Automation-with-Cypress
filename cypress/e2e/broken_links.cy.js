describe('Links verification', () => {

    it('find all broken_links on the page', () => {

        cy.visit("https://ecommerce-playground.lambdatest.io/")
        cy.get("a").each(($link, index) => {
            let href = $link.attr("href");
            if (href) {
                cy.request({
                    method: "GET",
                    url: href,
                    failOnStatusCode: false
                }).then((resp) => {
                    if (resp.status >= 400) {
                        cy.log(`Broken Link:${href}`)

                    }
                })
            }
        })

    });

})