describe('Word of the Date page', () => {
  const today = new Date().toISOString().split('T')[0]

  beforeEach(() => {
    cy.visit('/word-of-the-date')
  })

  describe('Page structure', () => {
    it('displays the page with title and subtitle', () => {
      cy.get('.word-of-the-date-view').should('exist')
      cy.contains('h1', 'واژه روز')
      cy.contains('p.subtitle', 'هر روز یک واژه تازه برای یادگیری')
    })

    it('displays a back button', () => {
      cy.get('.back-button').should('exist')
    })

    it('displays the date navigation controls', () => {
      cy.get('.date-navigation').should('exist')
      cy.get('.date-navigation').within(() => {
        cy.contains('button', 'پیشین').should('exist')
        cy.contains('button', 'بعدی').should('exist')
        cy.get('input[type="date"]').should('exist')
      })
    })
  })

  describe('Word display', () => {
    it('displays an example card with farsi and foreign words', () => {
      cy.get('.word-container').within(() => {
        cy.get('.example-card').should('exist')
        cy.get('.farsi-word').should('exist').and('not.be.empty')
        cy.get('.foreign-word').should('exist').and('not.be.empty')
      })
    })
  })

  describe('Date navigation', () => {
    it('navigates to the previous day when clicking the previous button', () => {
      const yesterday = new Date()
      yesterday.setDate(yesterday.getDate() - 1)
      const yesterdayStr = yesterday.toISOString().split('T')[0]

      cy.contains('button', 'پیشین').click()
      cy.url().should('include', `/word-of-the-date/${yesterdayStr}`)
      cy.get('input[type="date"]').should('have.value', yesterdayStr)
    })

    it('disables the next button when on today', () => {
      cy.contains('button', 'بعدی').should('be.disabled')
    })

    it('enables the next button when on a past date', () => {
      cy.contains('button', 'پیشین').click()
      cy.contains('button', 'بعدی').should('not.be.disabled')
    })

    it('navigates back to the next day after going to previous', () => {
      cy.contains('button', 'پیشین').click()
      cy.contains('button', 'پیشین').click()
      cy.contains('button', 'بعدی').click()

      const yesterday = new Date()
      yesterday.setDate(yesterday.getDate() - 1)
      const yesterdayStr = yesterday.toISOString().split('T')[0]

      cy.url().should('include', `/word-of-the-date/${yesterdayStr}`)
    })
  })

  describe('Go to today button', () => {
    it('does not show "go to today" button when on today', () => {
      cy.get('.today-button').should('not.exist')
    })

    it('shows "go to today" button when on a past date', () => {
      cy.contains('button', 'پیشین').click()
      cy.get('.today-button').should('exist')
      cy.contains('button', 'برو به امروز')
    })

    it('navigates back to today when clicking the "go to today" button', () => {
      cy.contains('button', 'پیشین').click()
      cy.contains('button', 'پیشین').click()
      cy.get('.today-button').click()
      cy.url().should('include', `/word-of-the-date/${today}`)
      cy.get('.today-button').should('not.exist')
    })
  })

  describe('Direct URL navigation', () => {
    it('loads the word for a specific date from URL', () => {
      const specificDate = '2024-01-15'
      cy.visit(`/word-of-the-date/${specificDate}`)
      cy.get('input[type="date"]').should('have.value', specificDate)
      cy.get('.example-card').should('exist')
    })

    it('shows today button when visiting a past date directly', () => {
      const specificDate = '2024-01-15'
      cy.visit(`/word-of-the-date/${specificDate}`)
      cy.get('.today-button').should('exist')
    })
  })

  describe('Back button navigation', () => {
    it('navigates back to the home page when clicking the back button', () => {
      cy.visit('/')
      cy.visit('/word-of-the-date')
      cy.get('.back-button').click()
      cy.url().should('eq', Cypress.config().baseUrl + '/')
    })
  })
})

