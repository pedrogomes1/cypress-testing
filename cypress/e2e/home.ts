// eslint-disable-next-line @typescript-eslint/triple-slash-reference
///<reference path="../support/index.d.ts" />

describe('Cypress TS', () => {
  it('should render home sections', () => {
    cy.visit('/')

    cy.get('.slick-slider').within(() => {
      cy.findByRole('heading', { name: /cyberpunk 2077/i })
      cy.findByRole('link', { name: /buy now/i })
    })
  })
})
