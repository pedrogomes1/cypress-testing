// eslint-disable-next-line @typescript-eslint/triple-slash-reference
///<reference path="../support/index.d.ts" />

describe('Cart', () => {
  it('should add and remove items from cart', () => {
    cy.visit('/')

    cy.getByDataCy('games-card')
      .eq(0)
      .within(() => {
        cy.findByRole('button', { name: /add to cart/i }).click()
      })

    cy.getByDataCy('games-card')
      .eq(1)
      .within(() => {
        cy.findByRole('button', { name: /add to cart/i }).click()
      })

    cy.getByDataCy('games-card')
      .eq(2)
      .within(() => {
        cy.findByRole('button', { name: /add to cart/i }).click()
      })

    cy.findAllByLabelText(/cart items/i)
      .first()
      .should('have.text', 3)
      .click()

    cy.getByDataCy('cart-list').within(() => {
      cy.findAllByRole('heading').should('have.length', 3)
    })

    cy.findAllByLabelText(/cart items/i)
      .first()
      .click()

    cy.getByDataCy('games-card')
      .eq(0)
      .within(() => {
        cy.findByRole('button', { name: /remove from cart/i }).click()
      })

    cy.getByDataCy('games-card')
      .eq(1)
      .within(() => {
        cy.findByRole('button', { name: /remove from cart/i }).click()
      })

    cy.getByDataCy('games-card')
      .eq(2)
      .within(() => {
        cy.findByRole('button', { name: /remove from cart/i }).click()
      })

    cy.findAllByLabelText(/cart items/i).should('not.exist')

    cy.findAllByLabelText(/shopping cart/i)
      .first()
      .click()

    cy.getByDataCy('cart-list').within(() => {
      // other solution: cy.findAllByRole('heading', { name: 'You cart is empty', hidden: true }).should('exist')
      cy.findAllByRole('heading', { name: 'Your cart is empty' }).should(
        'exist'
      )
    })
  })
})
