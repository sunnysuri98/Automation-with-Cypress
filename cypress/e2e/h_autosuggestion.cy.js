describe("Handling autosuggestion", () => {
  it("verify auto search", () => {
    cy.visit("https://flipkart.com");
    cy.get("input[placeholder='Search for Products, Brands and More']").type("iphone 16").then((ele)=>{
      cy.get("form[class='_2rslOn header-form-search OpXDaO']").find("ul").children().each((ele)=>{
        cy.wrap(ele).invoke("text").then((txt)=>{
          cy.log(txt)
          if(txt.includes("16 pro")){
            cy.wrap(ele).click();
          }
        })

      })
    });
    // cy.get("._1sFryS._2x2Mmc._3ofZy1 li").contains("iphone 16 pro").click();
    cy.wait(30000);
  });
});
