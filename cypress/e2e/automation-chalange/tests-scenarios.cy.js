describe("Automatio-chalange", function () {
  beforeEach(function () {
    cy.visit("https://www.danfoss.com/en/");
    cy.contains("Accept all").click();
  });

  it("Scenario 1 - visible button with a text", function () {
    cy.contains("Explore Danfoss Product Store").should("be.visible");
  });

  it("Scenario 2 - Alsense search results are available", function () {
    cy.get('input[type="text"]').type("Alsense");
    cy.get("body").type("{enter}");
    cy.contains("Alsense IoT cloud and monitoring").should("be.visible");
    cy.get("a[href$='.pdf'].tile__link").should("exist");
  });

  it("Scenario 3 - Quick Links not visible in mobile view", function () {
    cy.viewport("samsung-note9");
    cy.contains("Quick Links").should("not.exist");
  });
});
