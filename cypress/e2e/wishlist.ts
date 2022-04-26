// eslint-disable-next-line @typescript-eslint/triple-slash-reference
///<reference path="../support/index.d.ts" />

describe('Wishlist page', () => {
  it('should add and remove games from wishlist', () => {
    cy.visit('/wishlist')

    cy.signIn()

    cy.findByText(/Your wishlist is empty/i).should('exist')

    cy.getByDataCy('games-card')
      .eq(0)
      .within(() => {
        cy.findAllByLabelText(/add to wishlist/i).click()
      })

    cy.getByDataCy('wishlist').within(() => {
      cy.getByDataCy('games-card').should('have.length', 1)
    })

    cy.getByDataCy('wishlist').within(() => {
      cy.findAllByLabelText(/remove from wishlist/i).click()
    })
  })
})
