describe("Automatio-chalange", function () {
  before(function () {
    cy.visit("https://www.danfoss.com/en/");
    cy.contains("Accept all").click();
  });

  it("Scenario 1 - visible button with a text", function () {
    cy.contains("Explore Danfoss Product Store").should("be.visible");
  });
  it("Scenario 2 - Alsense search results are available", function () {
    cy.contains("Alsense IoT cloud monitoring").should("be.visible");
    cy.get("a").invoke("href").should(contain.text, ".pdf");
  });
  it("Scenario 3 - Quick Links not visible in mobile view", function () {
    cy.viewport("samsung-note9");
    cy.contains("Quick Links").should("not.exist");
  });
});
