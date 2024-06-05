describe("home page", () => {
  beforeEach(() => {
    cy.visit("https://cvoxdesign.com");
  });

  context("header correct text", () => {
    it("correct text cv0xDesign", () => {
      cy.get(".header a").eq(0).contains("cv0xDesign");
    });
    it("correct text Domů", () => {
      cy.get(".header a").eq(1).contains("Domů");
    });
    it("correct text O mně", () => {
      cy.get(".header a").eq(2).contains("O mně");
    });
    it("correct text Služby", () => {
      cy.get(".header a").eq(3).contains("Služby");
    });
    it("correct text Tvorba", () => {
      cy.get(".header a").eq(4).contains("Tvorba");
    });
    it("correct text Kontakt", () => {
      cy.get(".header a").eq(5).contains("Kontakt");
    });
  });

  context("header navbar correct links", () => {
    it("correct link Domů", () => {
      cy.get(".navbar a").eq(0).click();
      cy.location("pathname").should("eq", "/");
      cy.go("back");
    });
    it("correct link o mně", () => {
      cy.get(".navbar a").eq(1).click();
      cy.location("pathname").should("eq", "/");
      cy.go("back");
    });
    it("correct link Služby", () => {
      cy.get(".navbar a").eq(2).click();
      cy.location("pathname").should("eq", "/");
      cy.go("back");
    });
    it("correct link Tvorba", () => {
      cy.get(".navbar a").eq(3).click();
      cy.location("pathname").should("eq", "/");
      cy.go("back");
    });
    it("correct link Kontakt", () => {
      cy.get(".navbar a").eq(4).click();
      cy.location("pathname").should("eq", "/");
      cy.go("back");
    });
  });

  context("contact form", () => {
    it("find and write the name, email, message and send", () => {
      cy.get(".navbar a").eq(4).click();
      cy.get("input[id='name']").type("Karel");
      cy.get("input[id='email']").type("Karel@tester.xD");
      cy.get("textarea[id='message']").type("This is cypress test.");
      cy.get("input[type='button']").click();
      cy.on("window:alert", (str) => {
        expect(str).to.equal(`Your message sent successfully`);
      });
    });

  });
});
