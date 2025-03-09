// https://on.cypress.io/api

describe('Home page', () => {
  beforeEach(() => {
    cy.visit('/')
  })

  it('displays the home page', () => {
    cy.contains('h1', 'Parsigooyan')
  })

  it('displays the navbar search', () => {
    cy.get('input[placeholder="جستجو کنید"]').should('exist')
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

  it('should contain an article in the home', () => {
    cy.get('.home').within(() => {
      cy.get('a.document').should('exist')
    })
  })

  it('should contain a link to /articles in the home', () => {
    cy.get('.home').within(() => {
      cy.get('a[href="/articles"]').should('exist')
      cy.contains('a[href="/articles"]', 'نوشتارهای بیشتری را ببینید')
    })
  })

  describe('Burger menu', () => {
    beforeEach(() => {
      cy.get('.burger').click()
    })

    it('opens the side menu', () => {
      cy.get('.side-menu').should('be.visible')
    })

    it('closes the side menu by clicking on the cross', () => {
      cy.get('.burger').click()
      cy.get('.side-menu').should('not.be.visible')
    })

    it('closes the side menu by clicking on the outside of the menu', () => {
      cy.get('.cover').click()
      cy.get('.side-menu').should('not.be.visible')
    })
  })
})
