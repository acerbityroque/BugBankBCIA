const credenciais = {
    nome: 'Maria João',
    email: 'pablo@gmail.com',
    senha: '123456'
};

beforeEach(() => {
    // Visitar a página inicial
    cy.visit('https://bugbank.netlify.app/');
    // Clicar no botão "Registrar"
    cy.get('button.style__ContainerButton-sc-1wsixal-0.ihdmxA').click({ force: true });
});

it('Registro de novo usuário e login', () => {
    // Registro de usuário
    cy.get(':nth-child(2) > .input__default').type(credenciais.email, { force: true, delay: 100 });
    cy.get('.input__default').eq(3).type(credenciais.nome, { force: true, delay: 100 });
    cy.get('.input__default').eq(4).type(credenciais.senha, { force: true, delay: 100 });
    cy.get('.input__default').eq(5).type(credenciais.senha, { force: true, delay: 100 });
    cy.get('button.style__ContainerButton-sc-1wsixal-0.CMabB').click({ force: true });
    cy.get('#toggleAddBalance').click({ force: true });

    // Verificar se o modal de sucesso é exibido e visível
    cy.get('#btnCloseModal').should('be.visible');

    // Pausa de 3 segundos antes de clicar no botão "Fechar Modal"
    cy.wait(3000);

    // Clicar no botão "Fechar Modal"
    cy.get('#btnCloseModal').click({ force: true });

    // Pausa de 3 segundos após fechar o modal
    cy.wait(3000);

    // Fazer login com as mesmas credenciais
    cy.get('.style__ContainerFormLogin-sc-1wbjw6k-0 > :nth-child(1) > .input__default').type(credenciais.email, { force: true, delay: 100 });
    cy.get('.style__ContainerFormLogin-sc-1wbjw6k-0 > .login__password > .style__ContainerFieldInput-sc-s3e9ea-0 > .input__default').type(credenciais.senha, { force: true, delay: 100 });

    // Clicar no botão "Acessar"
    cy.get('.otUnI').click({ force: true });

});
