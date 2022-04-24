// load type definitions from Cypress module
/// <reference types="cypress" />

type ShowcaseAttributes = {
  name: string
  highlight?: boolean
}

type FieldsAttributes = {
  label: string
  name: string | number
}[]
declare namespace Cypress {
  interface Chainable<> {
    /**
     * Custom command to visit google page.
     * @example cy.google()
     */

    google(): Chainable<Window>

    /**
     * Custom command to get element by data-cy values
     * @example cy.getByDataCy('selector')
     */

    getByDataCy(selector: string): Chainable<JQuery<HTMLElement>>

    /**
     * Custom command to get fields by label.
     * @example cy.getFields()
     */

    getFields(fields: FieldsAttributes): Chainable<JQuery<Element>>[]

    /**
     * Custom command to check if value is greater than price
     * @example cy.shouldBeGreaterThan()
     */

    shouldBeGreaterThan(value: number): Chainable<number>

    /**
     * Custom command to get price is less price
     * @example cy.shouldBeLessThan()
     */

    shouldBeLessThan(value: number): Chainable<number>

    /**
     * Custom command to check banner in page.
     * @example cy.shouldRenderBanner()
     */

    shouldRenderBanner(): Chainable<Element>

    /**
     * Custom command to check showcase in page
     * @example cy.shouldRenderShowcase()
     */

    shouldRenderShowcase(attrs: ShowcaseAttributes): Chainable<Element>
  }
}
