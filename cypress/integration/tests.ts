import cypress from "cypress";
import { delay } from "cypress/types/bluebird";

describe("check if piece is on board", () => {
  it("position correct", () => {
    // given
    websiteIsOpened();

    // when

    // then
    defaultPosition();
  });
});

describe("check if piece is moving up and left", () => {
  it("position correct", () => {
    // given
    websiteIsOpened();

    // when
    arrowUpLeft();

    // then
    positionUpLeft();
  });
});

describe("check if piece is moving left and up", () => {
  it("position correct", () => {
    // given
    websiteIsOpened();

    // when
    arrowLeftUp();

    // then
    positionUpLeft();
  });
});

describe("check if piece is moving down and right", () => {
  it("position correct", () => {
    // given
    websiteIsOpened();

    // when
    arrowDownRight();

    // then
    positionDownRight();
  });
});

describe("check if piece is moving right and down", () => {
  it("position correct", () => {
    // given
    websiteIsOpened();

    // when
    arrowRightDown();

    // then
    positionDownRight();
  });
});

describe("check if escape is working", () => {
  it("position correct", () => {
    // given
    websiteIsOpened();

    // when
    arrowUp();
    escape();

    // then
    defaultPosition();
  });
});

describe("check if Reset button is working", () => {
  it("position correct", () => {
    // given
    websiteIsOpened();

    // when
    arrowUpLeft();
    arrowLeftUp();

    // then
    resetButton();
  });
});

function websiteIsOpened() {
  cy.visit("http://localhost:3000");
}

function defaultPosition() {
  cy.get("#description__position").should("have.text", "Position: e5");
}

function positionUpLeft() {
  cy.get("#description__position").should("have.text", "Position: d6");
}

function positionDownRight() {
  cy.get("#description__position").should("have.text", "Position: f4");
}

function arrowUp() {
  cy.get("body").type("{upArrow}", { delay: 10 });
}

function arrowDownRight() {
  cy.get(".checkerboard").type("{downArrow}", { delay: 10 });
  cy.get(".checkerboard").type("{rightArrow}", { delay: 10 });
}

function arrowRightDown() {
  cy.get(".checkerboard").type("{rightArrow}", { delay: 10 });
  cy.get(".checkerboard").type("{downArrow}", { delay: 10 });
}

function arrowUpLeft() {
  cy.get(".checkerboard").type("{upArrow}", { delay: 10 });
  cy.get(".checkerboard").type("{leftArrow}", { delay: 10 });
}

function arrowLeftUp() {
  cy.get(".checkerboard").type("{leftArrow}", { delay: 10 });
  cy.get(".checkerboard").type("{upArrow}", { delay: 10 });
}

function escape() {
  cy.get("body").type("{esc}", { delay: 10 });
}

function resetButton() {
  cy.get(".description__reset-button").click();
}
