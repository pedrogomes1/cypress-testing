// eslint-disable-next-line @typescript-eslint/triple-slash-reference
///<reference path="../support/index.d.ts" />

describe('Cypress TS', () => {
  it('should render home sections', () => {
    cy.visit('/')

    cy.get('.slick-slider').within(() => {
      cy.findByRole('heading', { name: /cyberpunk 2077/i })
      cy.findByRole('link', { name: /buy now/i })

      cy.get('.slick-dots > :nth-child(2) > button').click()
      cy.wait(500) //transition

      cy.findByRole('heading', { name: /horizon zero dawn/i })
      cy.findByRole('link', { name: /buy now/i })

      cy.get('.slick-dots > :nth-child(3) > button').click()
      cy.wait(500) //transition

      cy.findByRole('heading', { name: /huge promotion!/i })
      cy.findByRole('link', { name: /browse games/i })
    })
  })
})
