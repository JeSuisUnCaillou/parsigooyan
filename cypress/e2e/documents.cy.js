// https://on.cypress.io/api

describe('Documents page', () => {
  beforeEach(() => {
    cy.visit('/articles')
  })

  it('displays the main title', () => {
    cy.contains('h1', 'نوشتار های زیر به زبان پارسی و بدون واژه های بیگانه')
  })

  it('displays the documents container', () => {
    cy.get('.documents-container').should('exist')
    cy.get('.documents').should('exist')
  })

  it('displays the correct number of documents', () => {
    cy.get('.documents').within(() => {
      cy.get('a.document').should('have.length', 10)
    })
  })

  describe('Document structure', () => {
    beforeEach(() => {
      cy.get('a.document').first().as('firstDocument')
    })

    it('each document should have a title', () => {
      cy.get('@firstDocument').within(() => {
        cy.get('.document-title').should('exist')
      })
    })

    it('each document should have an image', () => {
      cy.get('@firstDocument').within(() => {
        cy.get('.document-picture').should('exist')
        cy.get('.document-picture').should('have.attr', 'src')
        cy.get('.document-picture').should('have.attr', 'alt')
      })
    })

    it('each document should have a description', () => {
      cy.get('@firstDocument').within(() => {
        cy.get('.document-description').should('exist')
      })
    })

    it('each document should have a "read more" link', () => {
      cy.get('@firstDocument').within(() => {
        cy.contains('.read-more', 'بیشتر بخوانید')
      })
    })
  })

  describe('Document links', () => {
    it('documents should be clickable links to PDF files', () => {
      cy.get('a.document').first().as('firstDocument')
      
      // Get the href attribute to test the PDF link directly
      cy.get('@firstDocument').should('have.attr', 'href').then((href) => {
        // Visit the PDF URL directly to ensure it serves the actual PDF, not the Vue app
        cy.request(href).then((response) => {
          expect(response.headers['content-type']).to.include('application/pdf')
          expect(response.body.substring(0, 4)).to.equal('%PDF')
        })
        // Clicking the link should navigate to the PDF URL
        cy.get('@firstDocument').click()
        cy.url().should('include', '.pdf')
        // The page should NOT contain Vue app content when displaying a PDF
        cy.get('body').should('not.contain', 'Parsigooyan')
      })
    })

    it('should contain specific known documents', () => {
      cy.contains('a.document', 'نادرشاه افشار').should('exist')
      cy.contains('a.document', 'محمد علی فروغی').should('exist')
      cy.contains('a.document', 'عطار نیشابوری').should('exist')
      cy.contains('a.document', 'سعدی بزرگ').should('exist')
      cy.contains('a.document', 'مولوی').should('exist')
    })
  })

})
