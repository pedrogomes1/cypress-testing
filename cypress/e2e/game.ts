// eslint-disable-next-line @typescript-eslint/triple-slash-reference
///<reference path="../support/index.d.ts" />

describe('Game Page', () => {
  it('should render game page sections', () => {
    cy.visit('/game/system-shock')

    cy.wait(10000) //see why
    cy.getByDataCy('game-info').within(() => {
      cy.findByRole('heading', { name: 'System Shock' }).should('exist')
      cy.findByText(
        /^Customers who pre-order this version of System Shock/i
      ).should('exist')
      cy.findByText('$84.99').should('exist')
      cy.findByRole('button', { name: /add to cart/i }).should('exist')
    })

    cy.findAllByRole('button', { name: /thumb \-/i }).should(
      'have.length.gt',
      0
    )

    cy.getByDataCy('content').within(() => {
      cy.findByRole('heading', { name: /description/i }).should('exist')
    })

    cy.getByDataCy('content').children().should('have.length.at.least', 2)

    cy.getByDataCy('game-details').within(() => {
      cy.findByRole('heading', { name: /game details/i }).should('exist')
      cy.findByRole('heading', { name: /developer/i }).should('exist')
      cy.findByRole('heading', { name: /release date/i }).should('exist')
      cy.findByRole('heading', { name: /platforms/i }).should('exist')
      cy.findByRole('heading', { name: /publisher/i }).should('exist')
      cy.findByRole('heading', { name: /rating/i }).should('exist')
      cy.findByRole('heading', { name: /genres/i }).should('exist')

      cy.findAllByText(/Night Dive Studios/i).should('have.length', 2)
      cy.findByText(/aug 29, 2021/i).should('exist')
      cy.findByRole('img', { name: /windows/i }).should('exist')
      cy.findByText(/free/i).should('exist')
      cy.findByText('Sci-fi / Shooter / FPP').should('exist')
    })

    cy.shouldRenderShowcase({ name: 'Upcoming Games', highlight: true })
    cy.shouldRenderShowcase({ name: 'You may like these games' })
  })
})
