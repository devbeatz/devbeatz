describe("Website setup", () => {
  it("Should load the page", () => {
    cy.visit("http://localhost:3000");
  });
});

describe("Click browse beats leads to all beats", function() {
  it("shows Browse page", function() {
    cy.get("#browse-button").click();
  });
});

describe("Sidebar links should open to Alternative tracks", function() {
  it("shows Alternative tracks", function() {
    cy.get("#Alternative-track-links").click();
  });
});

describe("Sidebar links should open to Blues tracks", function() {
  it("shows Blues tracks", function() {
    cy.get("#Blues-track-links").click();
  });
});

describe("Sidebar links should open to Freestyle tracks", function() {
  it("shows Freestyle tracks", function() {
    cy.get("#Freestyle-track-links").click();
  });
});

describe("Sidebar links should open to Hip-Hop tracks", function() {
  it("shows Hip-Hop tracks", function() {
    cy.get("#HipHop-track-links").click();
  });
});

describe("Sidebar links should open to Old School tracks", function() {
  it("shows Old School tracks page", function() {
    cy.get("#OldSchool-track-links").click();
  });
});

describe("Sidebar links should open to Pop tracks", function() {
  it("shows Pop tracks page", function() {
    cy.get("#Pop-track-links").click();
  });
});
