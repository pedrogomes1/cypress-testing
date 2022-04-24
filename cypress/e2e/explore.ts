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

  it.skip('should show 15 games and show more games when show more is clicked', () => {
    cy.getByDataCy('games-card').should('have.length', 15)
    cy.findByRole('button', { name: /show more/i }).click()
    cy.getByDataCy('games-card').should('have.length', 30)
  })

  it.skip('should order by price', () => {
    cy.findByText(/lowest to highest/i).click()
    cy.location('href').should('contain', 'sort=price%3Aasc')

    cy.getByDataCy('games-card')
      .first()
      .within(() => {
        cy.findByText('$0.00').should('exist')
      })

    cy.findByText(/highest to lowest/i).click()
    cy.location('href').should('contain', 'sort=price%3Adesc')

    cy.getByDataCy('games-card')
      .first()
      .within(() => {
        cy.shouldBeGreaterThan(0)
      })
  })

  it.skip('should order by price range', () => {
    cy.findByText(/highest to lowest/i).click()
    cy.findByText(/free/i).click()
    cy.location('href').should('contain', 'price_lte=0')

    cy.getByDataCy('games-card')
      .first()
      .within(() => {
        cy.findByText('$0.00').should('exist')
      })

    cy.findByText('Under $100').click()
    cy.location('href').should('contain', 'price_lte=100')
    cy.getByDataCy('games-card')
      .first()
      .within(() => {
        cy.shouldBeLessThan(100)
      })

    cy.findByText('Under $150').click()
    cy.location('href').should('contain', 'price_lte=150')
    cy.getByDataCy('games-card')
      .first()
      .within(() => {
        cy.shouldBeLessThan(150)
      })

    cy.findByText('Under $250').click()
    cy.location('href').should('contain', 'price_lte=250')
    cy.getByDataCy('games-card')
      .first()
      .within(() => {
        cy.shouldBeLessThan(250)
      })

    cy.findByText('Under $500').click()
    cy.location('href').should('contain', 'price_lte=500')
    cy.getByDataCy('games-card')
      .first()
      .within(() => {
        cy.shouldBeLessThan(500)
      })
  })

  it.skip('should filter by platform and genre', () => {
    cy.findByText(/windows/i).click()
    cy.location('href').should('contain', 'platforms=windows')

    cy.findByText(/linux/i).click()
    cy.location('href').should('contain', 'platforms=linux')

    cy.findByText(/mac os/i).click()
    cy.location('href').should('contain', 'platforms=mac')

    cy.findByText(/action/i).click()
    cy.location('href').should('contain', 'categories=action')
  })

  it('should return empty when no games match', () => {
    cy.visit('/games') //needed to clear url params

    cy.findByText(/free/i).click()
    cy.findByText(/linux/i).click()
    cy.findByText(/sports/i).click()

    cy.getByDataCy('games-card').should('not.exist')
    cy.findByText(/We didn't find any games with this filter/).should('exist')
  })
})
