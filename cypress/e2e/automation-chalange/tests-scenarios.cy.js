describe("Automatio-chalange", function () {
  before(function () {
    cy.visit("https://www.danfoss.com/en/");
    cy.contains("Accept all").click();
  });

  it("Scenario 1 - visible button with a text", function () {
    cy.contains("Explore Danfoss Product Store").should("be.visible");
  });
});
