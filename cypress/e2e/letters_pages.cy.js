// https://on.cypress.io/api

describe('Letters pages', () => {
  describe('Clicking on a letter in the home', () => {
    beforeEach(() => {
      cy.visit('/')
      cy.get('.home.content').within(() => {
        cy.contains('a', 'ظ').click()
      })
    })

    it('goes to the letter page', () => {
      cy.url().should('include', '/letter/%D8%B8')
    })

    it('displays the letter in title', () => {
      cy.contains('h1', 'ظ')
    })

    it("displays the letter's definitions", () => {
      cy.get('.definition').should('have.length', 21)
    })
  })

  describe('Clicking on a letter in the menu', () => {
    beforeEach(() => {
      cy.visit('/')
      cy.get('.burger').click()
      cy.get('.menu-container').within(() => {
        cy.contains('a', 'ظ').click()
      })
    })

    it('goes to the letter page', () => {
      cy.url().should('include', '/letter/%D8%B8')
    })

    it('displays the letter in title', () => {
      cy.contains('h1', 'ظ')
    })

    it("displays the letter's definitions", () => {
      cy.get('.definition').should('have.length', 21)
    })
  })
})