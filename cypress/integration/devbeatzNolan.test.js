describe("Website setup", () => {
  it("Should load the page", () => {
    cy.visit("http://localhost:3000");
  });
});

describe("Should be able to click on the login button on the homepage and login", () => {
  it("Should be able to click the login button", () => {
    cy.get("#login").click();
  });
  it("Should be able to type username", () => {
    cy.get("#loginUsername").type("nolan@email.com");
  });
  it("Should be able to type password", () => {
    cy.get("#loginPassword").type("password");
  });
  it("Should be able to click the login button", () => {
    cy.get("#loginButton").click();
  });
});

describe("Should be able to click 'beatz' on sidebar to navigate back to homepage", () => {
  it("Should be able to click 'beatz'", () => {
    cy.get("#beatzHomepage").click();
  });
});

describe("Should be able to click on the register button on the homepage and login", () => {
  it("Should be able to click the register button", () => {
    cy.get("#register").click();
  });
  it("Should be able to type username", () => {
    cy.get("#registerUsername").type("nolan");
  });
  it("Should be able to type password", () => {
    cy.get("#registerEmail").type("nolan@email.com");
  });
  it("Should be able to type password", () => {
    cy.get("#registerPassword1").type("password");
  });
  it("Should be able to type password", () => {
    cy.get("#registerPassword2").type("password");
  });
  it("Should be able to click the login button", () => {
    cy.get("#registerButton").click();
  });
  it("Should be able to click the login button", () => {
    cy.get("#switchToLogin").click();
  });
  it("Should be able to click the login button", () => {
    cy.get("#loginButton").click();
  });
});

describe("Should be able to click 'beatz' on sidebar to navigate back to homepage", () => {
  it("Should be able to click 'beatz'", () => {
    cy.get("#beatzHomepage").click();
  });
});

describe("Should be able to click on the browse beats button from homepage", () => {
  it("Should be able to click the browse beats button from homepage", () => {
    cy.get("#browse-button").click();
  });
});
