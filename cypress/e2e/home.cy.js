// https://on.cypress.io/api

describe('Visiting the root url', () => {
  beforeEach(() => {
    cy.visit('/')
  })

  it('displays the home page', () => {
    cy.contains('h1', 'Parsigooyan')
  })

  it('displays the navbar search', () => {
    cy.get('input[placeholder="Search a word"]').should('exist')
  })

  it('should contain 33 letter links within the menu element', () => {
    cy.get('.menu-container').within(() => {
      cy.get('a.letter-link').should('have.length', 33)
    })
  })

  it('should contain a home link within the menu element', () => {
    cy.get('.menu-container').within(() => {
      cy.contains('a.brand[href="/"]', 'Parsigooyan')
    })
  })

  it('should contain 33 letters in the main page', () => {
    cy.get('.home.content').within(() => {
      cy.get('a.letter').should('have.length', 33)
    })
  })

  it('should display the footer', () => {
    cy.get('.footer').should('exist')
  })
})
