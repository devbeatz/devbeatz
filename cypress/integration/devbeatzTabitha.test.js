describe("Sales Total", function() {
  it("shows total amount of beats sold", function() {
    cy.contains("decimal");
  });
});

describe("Login modal register button switches", function() {
  it("shows Register modal", function() {
    cy.visit("login modal");
  });
});
