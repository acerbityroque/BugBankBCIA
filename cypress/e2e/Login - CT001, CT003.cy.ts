const credencials = {
    nome: 'Maria João',
    email: 'pablo@gmail.com',
    senha: '123456'
};

it('Login - CT001, 003', () => {
        // 
        cy.visit('https://bugbank.netlify.app/');
        cy.get('button.style__ContainerButton-sc-1wsixal-0.ihdmxA').click({ force: true });
        cy.get(':nth-child(2) > .input__default').type(credencials.email, { force: true, delay: 100 });
        cy.get('.input__default').eq(3).type(credencials.nome, { force: true, delay: 100 });
        cy.get('.input__default').eq(4).type(credencials.senha, { force: true, delay: 100 });
        cy.get('.input__default').eq(5).type(credencials.senha, { force: true, delay: 100 });
        cy.get('button.style__ContainerButton-sc-1wsixal-0.CMabB').click({ force: true });
        cy.get('#toggleAddBalance').click({ force: true });
        cy.wait(3000);
        cy.get('.style__ContainerFormLogin-sc-1wbjw6k-0 > :nth-child(1) > .input__default').type(credencials.email, { force: true, delay: 100 });
        cy.get('.style__ContainerFormLogin-sc-1wbjw6k-0 > .login__password > .style__ContainerFieldInput-sc-s3e9ea-0 > .input__default').type(credencials.senha, { force: true, delay: 100 });
        cy.get('.otUnI').click({ force: true });
    });
