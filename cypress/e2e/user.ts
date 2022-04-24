// eslint-disable-next-line @typescript-eslint/triple-slash-reference
///<reference path="../support/index.d.ts" />

import { createUser } from '../support/generate'

describe('User', () => {
  it('should sign up', () => {
    cy.visit('/sign-up')
    const user = createUser()

    cy.signUp(user)
  })
})
