describe('Search', () => {
  beforeEach(() => {
    cy.visit('/')
  })

  it('displays search results for a valid query when clicking the search icon', () => {
    cy.get('input.search-bar').type('بالکل')
    cy.get('.search-icon-container').click()
    cy.contains('h1', '1 result for : بالکل')
    cy.get('.definition').should('have.length.greaterThan', 0)
    cy.contains('يکسره')
  })

  it('displays search results for a valid query when pressing enter', () => {
    cy.get('input.search-bar').type('بالکل{enter}')
    cy.contains('h1', '1 result for : بالکل')
    cy.get('.definition').should('have.length.greaterThan', 0)
    cy.contains('يکسره')
  })

  it('displays no results for an invalid query', () => {
    cy.get('input.search-bar').type('abc')
    cy.get('.search-icon-container').click()
    cy.contains('h1', '0 result for : abc')
    cy.get('.definition').should('have.length', 0)
  })

  it('clears the search but not the results when clicking the cross icon in the search', () => {
    cy.get('input.search-bar').type('بالکل')
    cy.get('.search-icon-container').click()
    cy.contains('h1', '1 result for : بالکل')
    cy.get('.definition').should('have.length.greaterThan', 0)
    cy.get('.clear-search').click()
    cy.contains('h1', '1 result for : بالکل')
    cy.get('.definition').should('have.length.greaterThan', 0)
    cy.get('input.search-bar').should('have.value', '')
  })

  it('executes another search after another search input', () => {
    cy.get('input.search-bar').type('بالکل')
    cy.get('.search-icon-container').click()
    cy.contains('h1', '1 result for : بالکل')
    cy.get('.definition').should('have.length.greaterThan', 0)
    cy.get('.clear-search').click()
    cy.get('input.search-bar').type('سراط')
    cy.get('.search-icon-container').click()
    cy.contains('h1', '1 result for : سراط')
    cy.get('.definition').should('have.length.greaterThan', 0)
  })
})