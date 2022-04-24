// eslint-disable-next-line @typescript-eslint/triple-slash-reference
///<reference path="../support/index.d.ts" />

import {
  sortFields,
  priceFields,
  genresFields,
  platformFields
} from '../../src/utils/filter/fields'

describe('Explore page', () => {
  before(() => {
    cy.visit('/games')
  })
  it.skip('should render filters columns', () => {
    cy.findByRole('heading', { name: /sort by price/i }).should('exist')
    cy.findByRole('heading', { name: /^price/i }).should('exist')
    cy.findByRole('heading', { name: /platforms/i }).should('exist')
    cy.findByRole('heading', { name: /genres/i }).should('exist')

    cy.getFields(priceFields)
    cy.getFields(sortFields)
    cy.getFields(platformFields)
    cy.getFields(genresFields)
  })

  it('should show 15 games and show more games when show more is clicked', () => {
    cy.getByDataCy('games-card').should('have.length', 15)
    cy.findByRole('button', { name: /show more/i }).click()
    cy.getByDataCy('games-card').should('have.length', 30)
  })
})
