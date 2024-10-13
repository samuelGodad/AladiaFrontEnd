describe('template spec', () => {
  it('passes', () => {
    cy.visit("http://localhost:3000/");
  })

  /* ==== Test Created with Cypress Studio ==== */
  it('testFinal', function() {
    /* ==== Generated with Cypress Studio ==== */
    cy.visit('http://localhost:3000/');
    cy.get('.h-0').click();
    cy.get('.px-4 > .group > .h-full').clear('s');
    cy.get('.px-4 > .group > .h-full').type('samuel@gmail.com');
    cy.get('.px-4 > .overflow-hidden > .absolute').click();
    cy.get(':nth-child(4) > .group > .h-full').clear('s');
    cy.get(':nth-child(4) > .group > .h-full').type('samuel');
    cy.get(':nth-child(5) > .group > .h-full').clear('g');
    cy.get(':nth-child(5) > .group > .h-full').type('goadda');
    cy.get('.border.border-gray-300 > .h-full').click();
    cy.get('.border.border-red-500 > .h-full').clear();
    cy.get('.border.border-red-500 > .h-full').type('Awq2!wde');
    cy.get('.border.border-gray-300 > .h-full').clear();
    cy.get('.border.border-gray-300 > .h-full').type('Awq2!wdes');
    cy.get('.border.border-gray-300 > .fa-eye-slash').click();
    cy.get('.border.border-gray-300').click();
    cy.get('.border.border-gray-300 > .h-full').clear();
    cy.get('.border.border-gray-300 > .h-full').type('Awq2!wdes');
    cy.get('.border-gray-300.mb-6 > .h-full').clear('Awq2!wdes');
    cy.get('.border-gray-300.mb-6 > .h-full').type('Awq2!wdes');
    cy.get('.items-center.mb-4 > .gap-2 > .relative').click();
    cy.get('.flex-col > .overflow-hidden > .relative').click();
    /* ==== End Cypress Studio ==== */
  });
})