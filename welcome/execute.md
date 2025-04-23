<a id="top"></a>
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

<p><a href="#bot">Ir para o final da página</a></p>

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

#### 🦆 Cenários de login usados para realização dos testes:

---

<a id="index"></a>
<pre style="text-align: justify;">
  Queridos/as professores, o sumário abaixo integra várias bases de estudos que realizamos enquanto estávamos brincando na aplicação, mas que, por conta do tempo, não sabíamos como colocá-los no documento original do Plano de Testes. Espero que entendam e aproveitem o nosso aprendizado contínuo!
</pre>


## Sumário

<details>
<summary><a href="#c01">Cenário 01: Login na plataforma</a></summary>

- Caso de Teste 01: Login com as credenciais de e-mail e senha válidas
- Caso de Teste 02: Login com senha incorreta
- Caso de Teste 03: Login com email não cadastrado
- Caso de Teste 04: Login com email em formato inválido
- Caso de Teste 05: Login sem fornecer e-mail e senha
- Caso de Teste 06: Deve realizar o Logout com sucesso
</details>

<details>
    <summary><a href="#c02">Cenário 02: Cadastro de usuário</a></summary>

- Caso de Teste 01: Cadastrar um novo usuário com sucesso (sem saldo)
- Caso de Teste 02: Cadastrar um novo usuário com sucesso (com saldo)
- Caso de Teste 03: Cadastrar sem fornecer os dados obrigatórios
- Caso de Teste 04: Cadastrar sem fornecer a informação de Nome
- Caso de Teste 05: Cadastrar sem fornecer a informação de Email
- Caso de Teste 06: Cadastrar sem fornecer a informação de Senha
- Caso de Teste 07: Cadastrar sem fornecer a informação de Confirmação de Senha
- Caso de Teste 08: Cadastrar com divergência nos campos de Senha e Confirmação de Senha
- Caso de Teste 09: Cadastrar novamente o mesmo usuário
</details>

<details>
    <summary><a href="#c03">Cenário de Teste 03: Transferência de valores</a></summary>

- Caso de Teste 01: Usar uma conta com saldo suficiente para transferir R$100 para uma conta válida
- Caso de Teste 02: Usar uma conta com saldo suficiente para transferir R$100 para uma conta inválida 
- Caso de Teste 03: Transferir dinheiro para uma conta válida, estando com saldo insuficiente
- Caso de Teste 04: Transferir dinheiro para uma conta inválida, estando com saldo insuficiente
- Caso de Teste 05: Realizar uma transferência com valor zero
- Caso de Teste 06: Realizar uma transferência com valor menor que zero
- Caso de Teste 07: Realizar uma transferência sem preencher o campo obrigatório de descrição
- Caso de Teste 08: Realizar uma transferência sem preencher a conta de destino
- Caso de Teste 09: Realizar uma transferência sem fornecer o valor
- Caso de Teste 10: Realizar transferência sem fornecer todas as informações 
</details>

<details>
    <summary><a href="#c04">Cenário de Teste 04: Extrato da conta</a></summary>

- Caso de Teste 01: Checar registro de abertura de conta no extrato de uma conta criada com saldo
- Caso de Teste 02: Checar registro de abertura de conta no extrato de uma conta criada sem saldo
- Caso de Teste 03: Verificar no extrato se uma transação de entrada está vindo com a descrição
- Caso de Teste 04: Verificar no extrato se uma transação de saída está vindo com a descrição
- Caso de Teste 05: Verificar se uma transação de saída está visível no extrato com o valor em vermelho e um sinal negativo
- Caso de Teste 06: Verificar se uma transação de entrada no valor de R$100 está visível no extrato com o valor em verde  
</details>


---

<a id="c01"></a>

## Cenário 01: Login na plataforma.

- **Descrição**: Validar a funcionalidade de login em diferente situações.


#### Caso de Teste 01: Login com as credenciais de e-mail e senha válidas.

| ID |  Descrição |
| :--------- | :---------- |
| C01-CT01 | O login será realizada com um e-mail e uma senha válida. |

| **Pré-condições** |
| :--------- |
| As credenciais fornecidas (e-mail e senha) devem ser válidas. |

| **Passos** |
| :--------- |
| **DADO** que estamos na página de login da BugBank |
| **E** preenchemos "qa@teste.com.br" no campo e-mail |
| **E** preenchemos "qwe123" no campo senha |
| **QUANDO** clicarmos no botão "Acessar" |
| **ENTÃO** seremos redirecionados para a página inicial do cliente |

| **Critérios de aceitação** |
| :--------- |
| Deve haver o redirecionamento para a página inicial do cliente. |


#### Caso de Teste 02: Login com senha incorreta.

| ID |  Descrição |
| :--------- | :---------- |
| C01-CT02 | O login será realizada com um e-mail válido e uma senha incorreta. |

| **Pré-condições** |
| :--------- |
| Fornecer senha incorreta. |

| **Passos** |
| :--------- |
| **DADO** que estamos na página de login da BugBank |
| **E** preenchemos "qa@teste.com.br" no campo e-mail |
| **E** preenchemos "123456" no campo senha |
| **QUANDO** clicarmos no botão "Acessar" |
| **ENTÃO** veremos a mensagem de erro "Usuário ou senha inválido. Tente novamente ou verifique suas informações!"|

| **Critérios de aceitação** |
| :--------- |
| A mensagem de erro "Usuário ou senha inválido. Tente novamente ou verifique suas informações!" deve ser apresentada. |


#### Caso de Teste 03: Login com email não cadastrado.

| ID |  Descrição |
| :--------- | :---------- |
| C01-CT03 | O login será realizada com um e-mail não cadastrado e uma senha válida. |

| **Pré-condições** |
| :--------- |
| Fornecer um e-mail fora da base de cadastro. |

| **Passos** |
| :--------- |
| **DADO** que estamos na página de login da BugBank |
| **E** preenchemos "xablau@master.com.br" no campo e-mail |
| **E** preenchemos "qwe123" no campo senha |
| **QUANDO** clicarmos no botão "Acessar" |
| **ENTÃO** veremos a mensagem de erro "Usuário ou senha inválido. Tente novamente ou verifique suas informações!"|

| **Critérios de aceitação** |
| :--------- |
| A mensagem de erro "Usuário ou senha inválido. Tente novamente ou verifique suas informações!" deve ser apresentada. |


#### Caso de Teste 04: Login com email em formato inválido.

| ID |  Descrição |
| :--------- | :---------- |
| C01-CT04 | O login será realizada com um e-mail inválido e uma senha válida. |

| **Pré-condições** |
| :--------- |
| Fornecer um e-mail com formato inválido. |

| **Passos** |
| :--------- |
| **DADO** que estamos na página de login da BugBank |
| **E** preenchemos "qa@" no campo e-mail |
| **E** preenchemos "qwe123" no campo senha |
| **QUANDO** clicarmos no botão "Acessar" |
| **ENTÃO** veremos a mensagem "Formato inválido" logo abaixo do campo e-mail |

| **Critérios de aceitação** |
| :--------- |
| Deverá aparecer a mensagem "Formato inválido" logo abaixo do campo e-mail. |


#### Caso de Teste 05: Login sem fornecer e-mail e senha.

| ID |  Descrição |
| :--------- | :---------- |
| C01-CT05 | O login será realizada sem digitar um e-mail e senha. |

| **Pré-condições** |
| :--------- |
| Deixar os campos de e-mail e senha vazios. |

| **Passos** |
| :--------- |
| **DADO** que estamos na página de login da BugBank |
| **QUANDO** clicarmos no botão "Acessar" |
| **ENTÃO** veremos a mensagem "É campo obrigatório" logo abaixo dos campos e-mail e senha |

| **Critérios de aceitação** |
| :--------- |
| Deverá aparecer a mensagem "É campo obrigatório" logo abaixo dos campos e-mail e senha. |


#### Caso de Teste 06: Deve realizar o Logout com sucesso.

| ID |  Descrição |
| :--------- | :---------- |
| C01-CT06 | O logout será realizado com sucesso ao clicar no botão Sair. |

| **Pré-condições** |
| :--------- |
| Ter uma conta cadastrada. |

| **Passos** |
| :--------- |
| **DADO** que estamos na página inicial da aplicação BugBank |
| **QUANDO** clicarmos no botão "Sair" |
| **ENTÃO** seremos redirecionados para a página de login |

| **Critérios de aceitação** |
| :--------- |
| Deverá exibir a página de login logo após o clique no botão Sair. |


<p><a href="#index">Ir para o sumário</a></p>

---

<a id="c02"></a>

## Cenário 02: Cadastro de usuário.

- **Descrição**: Validar a funcionalidade de cadastro de usuário nos fluxos principais e alternativos.


#### Caso de Teste 01: Cadastrar um novo usuário com sucesso (sem saldo).

| ID |  Descrição |
| :--------- | :---------- |
| C02-CT01 | Todos os campos obrigatórios do formulário para o cadastro de um novo usuário deverão ser preenchidos.  |

| **Pré-condições** |
| :--------- |
| Fornecer os dados obrigatórios tais como, E-mail, Nome, Senha e Confirmação senha. |
| Não acionar a flag "Criar conta com saldo?". |

| **Passos** |
| :--------- |
| **DADO** que estamos na página de cadastro  |
| **E** preenchemos "xablau@teste.com.br" no campo E-mail |
| **E**  preenchemos "Xablau Master" no campo Nome |
| **E** preenchemos "qwerty123" no campo Senha |
| **E** preenchemos "qwerty123" no campo Confirmação senha |
| **QUANDO**  clicarmos no botão "Cadastrar" |
| **ENTÃO** veremos uma mensagem que a conta foi criada com sucesso |

| **Critérios de aceitação** |
| :--------- |
| Com a nova conta criada, será possível efetuar o primeiro login. |
| Após o primeiro login, deve ser possível visualizar que o saldo é de R$0,00. |


#### Caso de Teste 02: Cadastrar um novo usuário com sucesso (com saldo).

| ID |  Descrição |
| :--------- | :---------- |
| C02-CT02 | Todos os campos obrigatórios do formulário para o cadastro de um novo usuário deverão ser preenchidos. |

| **Pré-condições** |
| :--------- |
| Fornecer os dados obrigatórios tais como, E-mail, Nome, Senha e Confirmação senha. |
| Acionar a flag "Criar conta com saldo?". |

| **Passos** |
| :--------- |
| **DADO** que estamos na página de cadastro  |
| **E** preenchemos "xablau@teste.com.br" no campo E-mail |
| **E**  preenchemos "Xablau Master" no campo Nome |
| **E** preenchemos "qwerty123" no campo Senha |
| **E** preenchemos "qwerty123" no campo Confirmação senha |
| **E** acionamos a flag "Criar conta com saldo?" |
| **QUANDO**  clicarmos no botão "Cadastrar" |
| **ENTÃO** veremos uma mensagem que a conta foi criada com sucesso |

| **Critérios de aceitação** |
| :--------- |
| Com a nova conta criada, será possível efetuar o primeiro login. |
| Após o primeiro login, deve ser possível visualizar o saldo de R$1000,00 disponível na conta. |


#### Caso de Teste 03: Cadastrar sem fornecer os dados obrigatórios.

| ID |  Descrição |
| :--------- | :---------- |
| C02-CT03 | Forçar o cadastro de um novo usuário sem fornecer os dados obrigatórios (Nome, Email, Senha e Confirmação de Senha). |

| **Pré-condições** |
| :--------- |
| Não deve haver o preenchimento dos campos obrigatórios. |

| **Passos** |
| :--------- |
| **DADO** que estamos na página de cadastro |
| **QUANDO** clicarmos no botão "Cadastrar" |
| **ENTÃO** veremos a mensagem "É campo obrigatório" logo abaixo de cada campo obrigatório |

| **Critérios de aceitação** |
| :--------- |
| Deverá aparecer a mensagem "É campo obrigatório" logo abaixo de cada campo obrigatório. |


#### Caso de Teste 04: Cadastrar sem fornecer a informação de Nome.

| ID |  Descrição |
| :--------- | :---------- |
| C02-CT04 | Forçar o cadastro de um novo usuário sem fornecer dados no campo "Nome". |

| **Pré-condições** |
| :--------- |
| Manter o campo Nome vazio. |

| **Passos** |
| :--------- |
| **DADO** que estamos na página de cadastro  |
| **E** preenchemos "teste@teste.com" no campo E-mail |
| **E** preenchemos "123456" no campo Senha |
| **E** preenchemos "123456" no campo Confirmação senha |
| **QUANDO**  clicarmos no botão "Cadastrar" |
| **ENTÃO** veremos uma mensagem de alerta "Nome não pode ser vazio." |

| **Critérios de aceitação** |
| :--------- |
| O cadastro não deverá acontecer e a mensagem de alerta "Nome não pode ser vazio" precisa estar visível. |


#### Caso de Teste 05: Cadastrar sem fornecer a informação de Email.

| ID |  Descrição |
| :--------- | :---------- |
| C02-CT05 | Forçar o cadastro de um novo usuário sem fornecer dados no campo "Email". |

| **Pré-condições** |
| :--------- |
| Manter o campo Email vazio. |

| **Passos** |
| :--------- |
| **DADO** que estamos na página de cadastro  |
| **E** preenchemos "Teste QA" no campo Nome |
| **E** preenchemos "123456" no campo Senha |
| **E** preenchemos "123456" no campo Confirmação senha |
| **QUANDO**  clicarmos no botão "Cadastrar" |
| **ENTÃO** veremos uma mensagem de alerta "Email não pode ser vazio." |

| **Critérios de aceitação** |
| :--------- |
| O cadastro não deverá acontecer e a mensagem de alerta "Email não pode ser vazio" precisa estar visível.  |


#### Caso de Teste 06: Cadastrar sem fornecer a informação de Senha.

| ID |  Descrição |
| :--------- | :---------- |
| C02-CT06 | Forçar o cadastro de um novo usuário sem fornecer dados no campo "Senha". |

| **Pré-condições** |
| :--------- |
| Manter o campo Senha vazio. |

| **Passos** |
| :--------- |
| **DADO** que estamos na página de cadastro  |
| **E** preenchemos "Teste QA" no campo Nome |
| **E** preenchemos "teste@teste.com" no campo Email |
| **E** preenchemos "123456" no campo Confirmação senha |
| **QUANDO**  clicarmos no botão "Cadastrar" |
| **ENTÃO** veremos uma mensagem de alerta "Senha não pode ser vazio." |

| **Critérios de aceitação** |
| :--------- |
| O cadastro não deverá acontecer e a mensagem de alerta "Senha não pode ser vazio" precisa estar visível. |


#### Caso de Teste 07: Cadastrar sem fornecer a informação de Confirmação de Senha.

| ID |  Descrição |
| :--------- | :---------- |
| C02-CT07 | Forçar o cadastro de um novo usuário sem fornecer dados no campo "Confirmação senha". |

| **Pré-condições** |
| :--------- |
| Manter o campo Confirmação Senha vazio. |

| **Passos** |
| :--------- |
| **DADO** que estamos na página de cadastro  |
| **E** preenchemos "Teste QA" no campo Nome |
| **E** preenchemos "teste@teste.com" no campo Email |
| **E** preenchemos "123456" no campo Senha |
| **QUANDO**  clicarmos no botão "Cadastrar" |
| **ENTÃO** veremos uma mensagem de alerta "Confirmar senha não pode ser vazio." |

| **Critérios de aceitação** |
| :--------- |
| O cadastro não deverá acontecer e a mensagem de alerta "Cofirmar senha não pode ser vazio" precisa estar visível. |


#### Caso de Teste 08: Cadastrar com divergência nos campos de Senha e Confirmação de Senha.

| ID |  Descrição |
| :--------- | :---------- |
| C02-CT08 | Realizar o cadastro de um novo usuário onde as informação dos campos "Senha" e "Confirmação senha" são diferentes. |

| **Pré-condições** |
| :--------- |
| Os campos Senha e Confirnmação senha devem ser diferentes. |

| **Passos** |
| :--------- |
| **DADO** que estamos na página de cadastro  |
| **E** preenchemos "Teste QA" no campo Nome |
| **E** preenchemos "teste@teste.com" no campo Email |
| **E** preenchemos "123456" no campo Senha |
| **E** preenchemos "123456789" no campo Confirmação senha |
| **QUANDO**  clicarmos no botão "Cadastrar" |
| **ENTÃO** veremos uma mensagem de alerta "As senhas não são iguais." |

| **Critérios de aceitação** |
| :--------- |
|  O cadastro não deverá acontecer e a mensagem de alerta "As senhas não são iguais" precisa estar visível. |


#### Caso de Teste 09: Cadastrar novamente o mesmo usuário.

| ID |  Descrição |
| :--------- | :---------- |
| C02-CT09 | Realizar o cadastro de um novo usuário repetindo as mesmas informações de um usuário cadastrado anteriormente. |

| **Pré-condições** |
| :--------- |
| Reutilizar os mesmos dados de um usuário que já foi cadastrado anteriormente. |

| **Passos** |
| :--------- |
| **DADO** que estamos na página de cadastro  |
| **E** preenchemos "xablau@teste.com.br" no campo E-mail |
| **E**  preenchemos "Xablau Master" no campo Nome |
| **E** preenchemos "qwerty123" no campo Senha |
| **E** preenchemos "qwerty123" no campo Confirmação senha |
| **QUANDO**  clicarmos no botão "Cadastrar" |
| **ENTÃO** veremos uma mensagem informando que o email já foi utilizado |

| **Critérios de aceitação** |
| :--------- |
|  O cadastro não deverá acontecer e deve ser mostrada uma mensagem de que o email já foi utilizado em um cadastro anterior. |


<p><a href="#index">Ir para o sumário</a></p>

---

<a id="c03"></a>

## Cenário de Teste 03: Transferência de valores.

- **Descrição**: Validar a funcionalidade de transferência de valores em fluxos principais e alternativos.


#### Caso de Teste 01: Usar uma conta com saldo suficiente para transferir R$100 para uma conta válida.

| ID |  Descrição |
| :--------- | :---------- |
| C03-CT01 | Usando uma conta do BugBank com saldo suficiente para realizar uma transferência bancária de R$100 para uma conta válida. |

| **Pré-condições** |
| :--------- |
| Ter duas contas válidas no BugBank. |
| A conta que irá fazer a transferência deve ter o saldo maior ou igual a R$100. |

| **Passos** |
| :--------- |
| **DADO** que estamos logados na conta que fará a transferência |
| **E** acessamos o recurso de transferência |
| **E** fornecemos os dados de número da conta e dígito |
| **E** preenchemos "100" no campo Valor da transferência |
| **E** preenchemos "transferência de teste" no campo Descrição |
| **QUANDO** clicarmos no botão Transferir agora |
| **ENTÃO** a mensagem de sucesso "Transferência realizada com sucesso" será apresentada na tela |
| **E** a página deve nos redirecionar para a página de extrato da conta |

| **Critérios de aceitação** |
| :--------- |
| Deve haver uma mensagem de sucesso para a transferência realizada. |
| O sistema deve redirecionar para página do extrato logo após esta transferência bem sucedida. |
| O valor do saldo da conta deverá ter reduzido em R$100. |
| O extrato da conta deve apresentar a informação de uma transferência de saída no valor de R$100 seguido da data que foi realizada e sua descrição. |


#### Caso de Teste 02: Usar uma conta com saldo suficiente para transferir R$100 para uma conta inválida.

| ID |  Descrição |
| :--------- | :---------- |
| C03-CT02 | Usando uma conta com saldo maior ou igual a 100, deverá haver uma tentativa de transferir o valor de 100 reais para uma conta inválida. |

| **Pré-condições** |
| :--------- |
| A conta que irá fazer a transferência deve ter o saldo maior ou igual a R$100. |

| **Passos** |
| :--------- |
| **DADO** que estamos logados na conta que fará a transferência |
| **E** acessamos o recurso de transferência |
| **E** fornecemos os dados inválidos de número da conta e dígito |
| **E** preenchemos "100" no campo Valor da transferência |
| **E** preenchemos "transferência de teste" no campo Descrição |
| **QUANDO** clicarmos no botão Transferir agora |
| **ENTÃO** a mensagem de alerta "Conta inválida ou inexistente" será exibida |

| **Critérios de aceitação** |
| :--------- |
| A transferência não deve acontecer. |
| Uma mensagem de alerta informando que a conta é inválida ou inexistente deve ser exibida em tela. |


#### Caso de Teste 03: Transferir dinheiro para uma conta válida, estando com saldo insuficiente.

| ID |  Descrição |
| :--------- | :---------- |
| C03-CT03 | Estando com saldo insuficiente em conta, deve haver a tentativa de transferência para uma conta válida. |

| **Pré-condições** |
| :--------- |
| Ter saldo em conta inferior ao valor a ser transferido. |

| **Passos** |
| :--------- |
| **DADO** que estamos logados na conta que fará a transferência |
| **E** checamos na página inicial que o saldo é inferior a R$1001 |
| **E** acessamos o recurso de transferência |
| **E** fornecemos os dados de número da conta e dígito |
| **E** preenchemos "1001" no campo Valor da transferência |
| **E** preenchemos "teste de transferência com saldo insuficiente" no campo Descrição |
| **QUANDO** clicarmos no botão Transferir agora |
| **ENTÃO** a mensagem de alerta "Você não tem saldo suficiente para essa transação" será exibida |

| **Critérios de aceitação** |
| :--------- |
| A transferência não deve acontecer. |
| Uma mensagem de alerta informando que não há saldo suficiente para a transação deve ser exibida em tela. |


#### Caso de Teste 04: Transferir dinheiro para uma conta inválida, estando com saldo insuficiente.

| ID |  Descrição |
| :--------- | :---------- |
| C03-CT04 | Estando com saldo insuficiente em conta, deve haver a tentativa de transferência para uma conta inválida. |

| **Pré-condições** |
| :--------- |
| Ter saldo em conta inferior ao valor a ser transferido. |

| **Passos** |
| :--------- |
| **DADO** que estamos logados na conta que fará a transferência |
| **E** checamos na página inicial que o saldo é inferior a R$1001 |
| **E** acessamos o recurso de transferência |
| **E** fornecemos os dados de número da conta e dígito |
| **E** preenchemos "1001" no campo Valor da transferência |
| **E** preenchemos "teste de transferência com saldo insuficiente" no campo Descrição |
| **QUANDO** clicarmos no botão Transferir agora |
| **ENTÃO** a mensagem de alerta "Conta inválida ou inexistente" será exibida |

| **Critérios de aceitação** |
| :--------- |
| A transferência não deve acontecer. |
| Uma mensagem de alerta informando que a conta é inválida ou inexistente deve ser exibida em tela. |


#### Caso de Teste 05: Realizar uma transferência com valor zero.

| ID |  Descrição |
| :--------- | :---------- |
| C03-CT05 | Deve haver uma tentativa de transferência de R$0,00 para uma conta qualquer do BugBank. |

| **Pré-condições** |
| :--------- |
| Usar uma conta válida para efetuar uma transferência de R$0,00. |

| **Passos** |
| :--------- |
| **DADO** que estamos logados na conta que fará a transferência |
| **E** acessamos o recurso de transferência |
| **E** fornecemos os dados de número da conta e dígito |
| **E** preenchemos "0" no campo Valor da transferência |
| **E** preenchemos "teste de transferência de R$0,00" no campo Descrição |
| **QUANDO** clicarmos no botão Transferir agora |
| **ENTÃO** a mensagem de alerta "Valor da transferência não pode ser 0 ou negativo" será exibida |

| **Critérios de aceitação** |
| :--------- |
| A transferência não deve acontecer. |
| Uma mensagem de alerta informando que o valor da transferência não pode ser 0 ou negativo será exibida. |


#### Caso de Teste 06: Realizar uma transferência com valor menor que zero.

| ID |  Descrição |
| :--------- | :---------- |
| C03-CT06 | Deve haver uma tentativa de transferência inferior a R$0,00 para uma conta qualquer do BugBank. |

| **Passos** |
| :--------- |
| **DADO** que estamos logados na conta que fará a transferência |
| **E** acessamos o recurso de transferência |
| **E** fornecemos os dados de número da conta e dígito |
| **E** preenchemos "-1" no campo Valor da transferência |
| **E** preenchemos "teste de transferência de -R$1,00" no campo Descrição |
| **QUANDO** clicarmos no botão Transferir agora |
| **ENTÃO** a mensagem de alerta "Valor da transferência não pode ser 0 ou negativo" será exibida |

| **Critérios de aceitação** |
| :--------- |
| A transferência não deve acontecer. |
| Uma mensagem de alerta informando que o valor da transferência não pode ser 0 ou negativo será exibida. |


#### Caso de Teste 07: Realizar uma transferência sem preencher o campo obrigatório de descrição.

| ID |  Descrição |
| :--------- | :---------- |
| C03-CT07 | Fazer o fluxo de transferência de valores sem fornecer dados no campo de descrição. |

| **Pré-condições** |
| :--------- |
| Manter o campo Descrição vazio. |

| **Passos** |
| :--------- |
| **DADO** que estamos logados na conta que fará a transferência |
| **E** acessamos o recurso de transferência |
| **E** fornecemos os dados de número da conta e dígito |
| **E** preenchemos "-1" no campo Valor da transferência |
| **QUANDO** clicarmos no botão Transferir agora |
| **ENTÃO** deverá ser exibida uma mensagem de alerta informando que o campo Descrição deve ser preenchido |

| **Critérios de aceitação** |
| :--------- |
| A transferência não deve acontecer. |
| Uma mensagem de alerta informando a obrigatoriedade de preenchimendo do campo Descrição deve ser exibida. |


#### Caso de Teste 08: Realizar uma transferência sem preencher a conta de destino.

| ID |  Descrição |
| :--------- | :---------- |
| C03-CT08 | Fazer o fluxo de transferência de valores sem fornecer o número da conta e dígito. |

| **Pré-condições** |
| :--------- |
| Não fornecer o número da conta e dígito no fluxo da transferência. |

| **Passos** |
| :--------- |
| **DADO** que estamos logados na conta que fará a transferência |
| **E** acessamos o recurso de transferência |
| **E** preenchemos "100" no campo Valor da transferência |
| **E** preenchemos "transferência de teste" no campo Descrição |
| **QUANDO** clicarmos no botão Transferir agora |
| **ENTÃO** deverá ser exibida uma mensagem de alerta informando que é obrigatório informar o número da conta e dígito para efetuar a transferência |

| **Critérios de aceitação** |
| :--------- |
| A transferência não deve acontecer. |
| Uma mensagem de alerta informando que é obrigatório informar o número da conta e dígito para efetuar a transferência. |


#### Caso de Teste 09: Realizar uma transferência sem fornecer o valor.

| ID |  Descrição |
| :--------- | :---------- |
| C03-CT09 | Fazer o fluxo de transferência de valores sem fornecer o valor a ser transferido. |

| **Pré-condições** |
| :--------- |
| Não fornecer o valor da transferência. |

| **Passos** |
| :--------- |
| **DADO** que estamos logados na conta que fará a transferência |
| **E** acessamos o recurso de transferência |
| **E** fornecemos os dados de número da conta e dígito |
| **E** preenchemos "transferência sem valor" no campo Descrição |
| **QUANDO** clicarmos no botão Transferir agora |
| **ENTÃO** a mensagem de alerta informando que é obrigatório fornecer o valor da transferência |

| **Critérios de aceitação** |
| :--------- |
| A transferência não deve acontecer. |
| Uma mensagem de alerta informando que é obrigatório fornecer o valor da transferência. |


#### Caso de Teste 10: Realizar transferência sem fornecer todas as informações.

| ID |  Descrição |
| :--------- | :---------- |
| C03-CT10 |  Fazer o fluxo de transferência de valores sem preencher todos os campos. |

| **Pré-condições** |
| :--------- |
| Manter vazio todos os campos da transferência. |

| **Passos** |
| :--------- |
| **DADO** que estamos logados na conta que fará a transferência |
| **E** acessamos o recurso de transferência |
| **QUANDO** clicarmos no botão Transferir agora |
| **ENTÃO** veremos a mensagem "É campo obrigatório" logo abaixo de cada campo do formulário |

| **Critérios de aceitação** |
| :--------- |
| A transferência não deve acontecer. |
| Deverá aparecer a mensagem "É campo obrigatório" logo abaixo de cada campo do formulário. |


<p><a href="#index">Ir para o sumário</a></p>

---

<a id="c04"></a>

## Cenário de Teste 04: Extrato da conta.

- **Descrição**: Validar a funcionalidade de extrato da conta mediante às transações realizadas.


#### Caso de Teste 01: Checar registro de abertura de conta no extrato de uma conta criada com saldo.

| ID |  Descrição |
| :--------- | :---------- |
| C04-CT01 | Verificar se no extrato da conta recém-criada existe o registro relacionado à abertura da conta. |

| **Pré-condições** |
| :--------- |
| Ter uma conta recém-criada com saldo (email: contanova.comsaldo@teste.com.br, senha: 123). |

| **Passos** |
| :--------- |
| **DADO** que estamos logados na conta nova com saldo |
| **QUANDO**  acessarmos a página de extrato|
| **ENTÃO** veremos no extrato o registro da abertura de conta |
|  **E** o valor de "R$1000,00" associado a este registro |
|  **E** a descrição "Saldo adicionado ao abrir conta" associado a este registro |

| **Critérios de aceitação** |
| :--------- |
| O registro da abertura de conta seguido de data, descrição e valor deve estar visível na página de extrato. |


#### Caso de Teste 02: Checar registro de abertura de conta no extrato de uma conta criada sem saldo.

| ID |  Descrição |
| :--------- | :---------- |
| C04-CT02 | Verificar se no extrato da conta recém-criada existe o registro relacionado à abertura da conta. |

| **Pré-condições** |
| :--------- |
| Ter uma conta recém-criada sem saldo (email: contanova.semsaldo@teste.com.br, senha: 123). |

| **Passos** |
| :--------- |
| **DADO** que estamos logados na conta nova sem saldo |
| **QUANDO**  acessarmos a página de extrato|
| **ENTÃO** veremos no extrato o registro da abertura de conta |
|  **E** o valor "R$0,00" associado a este registro |
|  **E** a descrição "Cliente optou por não ter saldo ao abrir conta" associado a este registro |


| **Critérios de aceitação** |
| :--------- |
| O registro da abertura de conta seguido de data, descrição e valor deve estar visível na página de extrato. |


#### Caso de Teste 03: Verificar no extrato se uma transação de entrada está vindo com a descrição.

| ID |  Descrição |
| :--------- | :---------- |
| C04-CT03 | Checar se uma transação de entrada realizada com uma descrição qualquer está aparecendo no extrato da conta. |

| **Pré-condições** |
| :--------- |
| Dever haver uma transação de entrada com uma descrição qualquer. |

| **Passos** |
| :--------- |
| **DADO** que foi realizada uma transferência para nossa conta |
| **E** a descrição foi "Transferência Teste 1" |
| **QUANDO** entrarmos em nossa conta |
| **E** acessarmos a página de extrato da conta |
| **ENTÃO** veremos uma transação com a descrição "Transferência Teste 1" |

| **Critérios de aceitação** |
| :--------- |
| A transação com a descrição "Transferência Teste 1" deve estar visível no extrato da conta. |


#### Caso de Teste 04: Verificar no extrato se uma transação de saída está vindo com a descrição.

| ID |  Descrição |
| :--------- | :---------- |
| C04-CT04 | Checar se uma transação de saída realizada com uma descrição qualquer está aparecendo no extrato da conta. |

| **Pré-condições** |
| :--------- |
| Dever haver uma transferência com uma descrição qualquer. |

| **Passos** |
| :--------- |
| **DADO** que realizamos uma transferência em nossa conta |
| **E** a descrição foi "Transferência Teste 2" |
| **QUANDO** acessarmos a página de extrato da conta |
| **ENTÃO** veremos uma transação com a descrição "Transferência Teste 2" |

| **Critérios de aceitação** |
| :--------- |
| A transação com a descrição "Transferência Teste 2" deve estar visível no extrato da conta. |


#### Caso de Teste 05: Verificar se uma transação de saída está visível no extrato com o valor em vermelho e um sinal negativo.

| ID |  Descrição |
| :--------- | :---------- |
| C04-CT05 | Checar o registro de uma transação de saída com um determinado valor e se este está aparecendo na cor vermelha e com um sinal negativo ao lado. |

| **Pré-condições** |
| :--------- |
| Realizar uma transferência com um valor qualquer. |

| **Passos** |
| :--------- |
| **DADO** que estamos realizando uma transferência |
| **E** o valor enviado foi de "R$100" |
| **QUANDO** acessarmos o extrato da conta |
| **ENTÃO** veremos o registro dessa transação |
| **E** o valor estará em vermelho |
| **E** haverá um sinal de negativo ao lado do valor transferido |

| **Critérios de aceitação** |
| :--------- |
| O registro da transação deve estar visível no extrato. |
| O valor dessa transação deve estar em vermelho e com um sinal negativo. |


#### Caso de Teste 06: Verificar se uma transação de entrada no valor de R$100 está visível no extrato com o valor em verde.

| ID |  Descrição |
| :--------- | :---------- |
| C04-CT06 | Checar o registro de uma transação de entrada com um determinado valor e se este está aparecendo na cor verde. |

| **Pré-condições** |
| :--------- |
|  Receber uma transferência com um valor qualquer. |

| **Passos** |
| :--------- |
| **DADO** que foi realizada uma transferência para nossa conta |
| **E** o valor recebido foi de "R$100" |
| **QUANDO** acessarmos o extrato da conta |
| **ENTÃO** veremos o registro dessa transação |
| **E** o valor estará em verde |

| **Critérios de aceitação** |
| :--------- |
| O registro da transação deve estar visível no extrato. |
| O valor dessa transação deve estar em verde. |




---



#### Relatórios gerados:

<div align="center">
<img width="800px" alt="Relatório gerado Bugbank" src="https://i.imgur.com/rUkjWsc.png" />
</div>

<div align="center">
<img width="800px" alt="Relatório gerado Bugbank" src="https://i.imgur.com/xMVcj4V.png" />
</div>


<br>
Site utilizado: https://bugbank.netlify.app/

<h1>

#
<a id="bot"></a>

## 🗂️ Índice do Projeto

1. [Acolhimento e apresentação](../readme.md);
2. [Pré-requisitos](requisitos.md)  
3. [Sobre a aplicação Bugbank](obugbank.md)  
4. **Execução e Relatórios** *(Você está aqui!)*  
5. **Testes divertidos que realizamos!** *(E aqui também! 😊)* 

---

## 🧭 Menu rápido

🔝 [Ir para o topo](#top)
