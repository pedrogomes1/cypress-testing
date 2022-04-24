// eslint-disable-next-line @typescript-eslint/triple-slash-reference
///<reference path="../support/index.d.ts" />

import { createUser } from '../support/generate'

describe('User', () => {
  it.skip('should sign up', () => {
    cy.visit('/sign-up')
    const user = createUser()

    cy.signUp(user)

    cy.url().should('eq', `${Cypress.config().baseUrl}/`)
    cy.findByText(user.username).should('exist')
  })

  it.skip('should sign in and sign out', () => {
    cy.visit('/sign-in')

    cy.signIn()
    cy.url().should('eq', `${Cypress.config().baseUrl}/`)
    cy.findByText(/john doe/i)
      .should('exist')
      .click()
    cy.findByText(/sign out/i).click()

    cy.findByRole('link', { name: /sign in/i }).should('exist')
    cy.findByText(/john doe/i).should('not.exist')
  })
})
