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

describe("Sidebar opens RnB tracks", function() {
    it("shows RnB tracks", function() {
      cy.get("#RnB-track-links").click();
    });
  });

describe("Sidebar opens Soul tracks", function() {
    it("shows Soul tracks", function() {
      cy.get("#Soul-track-links").click();
    });
  });

describe("Sidebar opens Trap tracks", function() {
    it("shows Trap tracks", function() {
      cy.get("#Trap-track-links").click();
    });
  });

describe("Sidebar opens Underground tracks", function() {
    it("shows Underground tracks", function() {
      cy.get("#Underground-track-links").click();
    });
  });
