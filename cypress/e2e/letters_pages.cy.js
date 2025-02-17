// https://on.cypress.io/api

describe('Letters pages', () => {
  describe('When visiting directly a letter page', () => {
    it('Clicking the back button goes back to the home page', () => {
      cy.visit('letter/%D8%B0')
      cy.contains('a', 'Back').click()
      cy.url().should('eq', Cypress.config().baseUrl + '/')
    })
  })

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

    describe('Clicking on another letter in the menu', () => {
      beforeEach(() => {
        cy.get('.burger').click()
        cy.get('.menu-container').within(() => {
          cy.contains('a', 'ذ').click()
        })
      })

      it('goes to the letter page', () => {
        cy.url().should('include', '/letter/%D8%B0')
      })
  
      it('displays the letter in title', () => {
        cy.contains('h1', 'ذ')
      })
  
      it("displays the letter's definitions", () => {
        cy.get('.definition').should('have.length', 38)
      })
    })
  })
})