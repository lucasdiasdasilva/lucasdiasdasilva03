describe('Teste de Login - SauceDemo', () => {
  it('Realizar login com sucesso', () => {
    cy.visit('https://www.saucedemo.com/');

    cy.get('[data-test="username"]').type('standard_user');
    cy.get('[data-test="password"]').type('secret_sauce');

    cy.get('[data-test="login-button"]').click();

    cy.url().should('include', '/inventory.html');
    cy.contains('Products').should('be.visible');
  });
});
