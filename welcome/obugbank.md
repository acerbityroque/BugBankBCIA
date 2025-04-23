# 🚀 Conhecendo a aplicação em teste: **Bugbank!**

A aplicação se chama [**Bug Bank - O banco com bugs e falhas do seu jeito**](https://github.com/jhonatasmatos/bugbank-ui) e foi desenvolvida com **HTML**, **CSS** e **JavaScript**.

---

## ✨ Funcionalidades principais

A BugBank simula um banco online onde é possível realizar login, cadastrar contas, transferir valores e verificar extratos. A seguir, apresentamos os comportamentos esperados para cada funcionalidade.

---

## 🔐 1. Login

```diff
• Email e Senha são campos obrigatórios.
• Se não preencher os campos obrigatórios, deve exibir a mensagem:
  "Usuário e senha precisam ser preenchidos".
• Não deve permitir login de usuários inválidos ou não cadastrados.
• Usuários válidos são redirecionados para a página inicial (home).
```

---

## 📝 2. Cadastro

```diff
• Nome, Email, Senha e Confirmação de senha são obrigatórios.
• Mensagens esperadas em caso de ausência:
    - Nome: "Nome não pode ser vazio"
    - Email: "Email não pode ser vazio"
    - Senha: "Senha não pode ser vazio"
    - Confirmação: "Confirmar senha não pode ser vazio"
• "Criar conta com saldo" ativo → saldo inicial de R$ 1.000,00
• "Criar conta com saldo" inativo → saldo inicial de R$ 0,00
• Senha e confirmação devem ser iguais.
• Cadastro bem-sucedido deve exibir número da conta criada.
```

---

## 💸 3. Transferência

```diff
• Apenas contas válidas podem receber transferências.
• Saldo deve ser ≥ ao valor da transferência.
• Conta inválida → "Conta inválida ou inexistente".
• Número da conta e dígito aceitam apenas números.
• Campo "descrição" é obrigatório.
• Valor deve ser maior que zero.
• Transferência com sucesso:
    - Valor é debitado da conta
    - Mensagem: "Transferência realizada com sucesso"
    - Redireciona para o extrato
```

---

## 💳 4. Pagamento

```diff
• Funcionalidade em desenvolvimento.
```

---

## 📄 5. Extrato

```diff
• Exibe o saldo disponível atual.
• Cada transação exibe:
    - Data
    - Tipo (Abertura de conta / Transferência enviada / recebida)
• Valor de saída:
    - Vermelho e com sinal de menos (–)
• Valor de entrada:
    - Verde
• Transações sem descrição exibem (–)
```

---

## 🏧 6. Saque

```diff
• Funcionalidade em desenvolvimento.
```

---

## ⏭️ Próximo passo

➡️ Vá para a [**Execução e Relatórios**](execute.md) para configurar e executar seus testes na aplicação.

---

## 🗂️ Sumário do projeto

1. [Acolhimento e apresentação](../readme.md)  
2. [Pré-requisitos](requisitos.md)  
3. **Sobre a aplicação que utilizamos, o Bugbank** (Você está aqui!)  
4. [Execução e demais relatórios](execute.md)  
5. [Clique aqui para verificar demais testes que nos divertimos bastante realizando!](execute.md#index)
