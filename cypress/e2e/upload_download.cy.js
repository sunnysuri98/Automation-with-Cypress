describe("Handling upload_download", () => {
  //   beforeEach(() => {
  //     cy.visit("https://selectorshub.com/xpath-practice-page/");
  //   });
  //   it("handling upload", () => {
  //     cy.get("input[id='myFile']").scrollIntoView();
  //     cy.get("input[id='myFile']").selectFile("./images/test.png");
  //   });

  it("handling download", () => {
    cy.downloadFile(
      "https://selectorshub.com/wp-content/uploads/2023/12/Mega-sale-600-%C3%97-360-px-30.png",
      "downloads",
      "test.jpg"
    );
  });
});
