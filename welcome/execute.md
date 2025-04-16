<h1 align="center">
Estudo de Cypress no site Bug Bank com Page Objects
</h1>

<h4 align="right">

Relatório de testes apresentado ao Bootcamp de Quality Assurance do Instituto Atlântico como requisito parcial para obtenção do certificado de conclusão

</h4>

<div align="center">
<img width="800px" alt="Site para testes automatizados Bugbank" src="https://i.imgur.com/Tmx5hQj.png" />
</div>

<h1></h1>


#### 🦆 Como executar o projeto:


```diff 
git clone https://github.com/acerbityroque/BugBankBCIA.git
cd BugBankBCIA
npm install
npm run cy:open
```
#### 🦆 Faça um commit! 
```diff 
git add .
git commit -m "Teste dos professores"
git push origin main
```

#### 🦆 Cenários de login usados para realização dos testes no cypress:
```diff  
• Validar login bem-sucedido.
Dado que o usuário tenha cadastro
E insira os dados válidos
Quando clicar em 'acessar'
Então deve redirecionar para a home.

• Validar falha ao tentar realizar login.
Dado que o usuário tenha cadastro
E insira nome ou senha inválidos
Quando clicar 'acessar'
Então deve abrir o modal
E aparecer mensagem "Usuário ou senha inválido. Tente novamente ou verifique suas informações!".

• Validar campos vazios.
Dado que o usário esteja tentando realizar o login
E não insira dados no <campo>
Quando clicar em 'acessar'
Então deve aparecer a mensagem 'É campo obrigatório'.

• Validar botão "fechar" no modal em caso de falha de login
Dado que o usuário tenha preenchido os campos com dados inválidos
E tenha sido aberto o modal de erro
Quando clicar 'fechar'
Então deve desaparecer o modal.

• Validar botão "x" no modal em caso de falha de login
Dado que o usuário tenha preenchido os campos com dados inválidos
E tenha sido aberto o modal de erro
Quando clicar no "x"
Então deve desaparecer o modal.

• Validar visualização de senha oculta.
Dado que o usário insira uma senha no login
E ela esteja oculta
Quando clicar no icone de "olhinho"
Então deve aparecer a senha.

• Validar ocultar senha.
Dado que o usário insira uma senha no login
E ela esteja visivel
Quando clicar no icone de "olhinho"
Então deve ocultar a senha.

```

#### Relatórios gerado:

<div align="center">
<img width="800px" alt="Relatório gerado Bugbank" src="https://i.imgur.com/rUkjWsc.png" />
</div>

<div align="center">
<img width="800px" alt="Relatório gerado Bugbank" src="https://i.imgur.com/xMVcj4V.png" />
</div>


<br>
Site utilizado: https://bugbank.netlify.app/#
<h1>

