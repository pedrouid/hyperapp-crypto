/* eslint-env mocha */
/* global cy */
describe('hyperapp-crypto ', () => {
  beforeEach(() => {
    // observe XHR requests to the API
    cy.server()
    cy.route('/v1/ticker/*').as('ticker')
    // the base url is configured in cypress.json file
    cy.visit('/')
  })

  it('has title', () => {
    cy.contains('Cryptocurrency Prices')
  })

  it('has list of prices', () => {
    cy.get('.coins-list .coin').should('have.length.gt', 5)
  })

  it('has first coin in USD', () => {
    cy
      .get('.coin')
      .first()
      .find('.coin-price')
      .contains('USD')
  })

  it('can show prices in EUR', () => {
    cy.wait('@ticker') // to make sure USD loads
    cy.get('.currency-option > select').select('EUR')
    cy.wait('@ticker') // after switching to EUR
    cy
      .get('.coin')
      .first()
      .find('.coin-price')
      .contains('EUR')
  })
})
