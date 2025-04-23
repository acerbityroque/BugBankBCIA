describe('Fluxo completo de Registro, Transferência e Extrato', () => {
  const registrarConta = (email, nome, senha, adicionarSaldo = false) => {
    cy.get('button.style__ContainerButton-sc-1wsixal-0.ihdmxA').click({ force: true });
    cy.get(':nth-child(2) > .input__default').type(email, { force: true, delay: 100 });
    cy.get('.input__default').eq(3).type(nome, { force: true, delay: 100 });
    cy.get('.input__default').eq(4).type(senha, { force: true, delay: 100 });
    cy.get('.input__default').eq(5).type(senha, { force: true, delay: 100 });
    if (adicionarSaldo) cy.get('#toggleAddBalance').click({ force: true });
    cy.get('button.style__ContainerButton-sc-1wsixal-0.CMabB').click({ force: true });
  };

  const realizarLogin = (email, senha) => {
    cy.get('.input__default').first().clear().type(email, { force: true });
    cy.get('.style__ContainerFormLogin-sc-1wbjw6k-0 .input__default[type="password"]').clear().type(senha, { force: true });
    cy.get('.otUnI').click({ force: true });
  };

  const realizarLogout = () => {
    cy.get('#btnExit').click({ force: true });
  };

  const realizarTransferencia = (contaCompleta) => {
    const [numero, digito] = contaCompleta.split('-');
    cy.get('#btn-TRANSFERÊNCIA').click({ force: true });
    cy.get('input[name="accountNumber"]').type(numero, { force: true });
    cy.get('input[name="digit"]').type(digito, { force: true });
    cy.get('input[name="transferValue"]').type('500', { force: true });
    cy.get('input[name="description"]').type('Teste OI', { force: true });
    cy.get('button.style__ContainerButton-sc-1wsixal-0.CMabB.button__child').click({ force: true });
    cy.get('#modalText').should('contain.text', 'realizada com sucesso');
    cy.get('#btnBack').click({ force: true });
  };

  const validarExtrato = () => {
    cy.get('#btn-EXTRATO').click({ force: true });
    cy.contains('Teste OI').should('exist');
    cy.contains('500').should('exist');
    cy.get('#btnBack').click({ force: true });
  };

  it('CT004 - Registro, Transferência e Validação de Extrato', () => {
    cy.visit('https://bugbank.netlify.app/');

    // Registra Pablo
    registrarConta('pablo@gmail.com', 'Pablo', '123456', true);
    cy.get('#modalText').should('contain.text', 'criada com sucesso');
    cy.get('#btnCloseModal').click({ force: true });

    // Login e logout Pablo
    realizarLogin('pablo@gmail.com', '123456');
    realizarLogout();

    // Registra Sthefano
    registrarConta('sthefano@gmail.com', 'Sthefano', '123456');

    // Captura da conta criada diretamente e usa como parâmetro depois
    cy.get('#modalText')
      .should('be.visible')
      .invoke('text')
      .then((textoModal) => {
        const match = textoModal.match(/A conta (\d+-\d+) foi criada com sucesso/);
        expect(match).to.not.be.null;
        const contaSthefano = match[1];
        cy.wrap(contaSthefano).as('contaSthefano');
        cy.get('#btnCloseModal').click({ force: true });
      });

    // Usa a conta capturada com @alias
    cy.get('@contaSthefano').then((conta) => {
      // Login Pablo
      realizarLogin('pablo@gmail.com', '123456');

      // Transferência para Sthefano
      realizarTransferencia(conta);

      // Logout Pablo
      realizarLogout();

      // Login Sthefano
      realizarLogin('sthefano@gmail.com', '123456');

      // Validação do extrato
      validarExtrato();

      // Logout final
      realizarLogout();
    });
  });
});
