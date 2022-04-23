// eslint-disable-next-line @typescript-eslint/triple-slash-reference
///<reference path="../support/index.d.ts" />

describe('Cypress TS', () => {
  it('should render home sections', () => {
    cy.visit('/')

    cy.shouldRenderBanner()
  })
})
