# Roteiro de Testes para o projeto EPONA

## 1. Teste de login

**Objetivo:** Verificar se o sistema permite ao usuário realizar login

### Passos:
- [ ] Acesse a aplicação.
- [ ] Preencha o campo "Email" com um email válido.
- [ ] Preencha o campo "Senha" com um senha válido.
- [ ] Clique no botão "Entrar".

### Resultado Esperado:
- [ ] O usuário deverá ser redirecionado para a página inicial do projeto

---

## 2. Teste de Cadastro

**Objetivo:** Verificar se o sistema permite cadastrar um novo usuario

### Passos:
- [ ] Acesse a aplicação.
- [ ] Clique na opção "Cadastre-se"
- [ ] Preencha o campo "Email" com um email válido.
- [ ] Preencha o campo "Usuário" com o usuário desejado.
- [ ] Preencha o campo "nascimento" com uma data válida.
- [ ] Preencha o campo "Senha" com uma senha válida.
- [ ] Preencha o campo "Confirme sua senha" com a mesma senha inserida no campo "Senha".
- [ ] Clique no botão cadastre-se

### Resultado Esperado:
- [ ] O sistema deverá exibir um prompt avisando ao usuário que a conta foi cadastrada e redireciona-lo à página de login.

---

## 3. Teste de validação de Login

**Objetivo:** Verificar se o sistema está validando as entradas corretamente
### Passos:
- [ ] Acesse a aplicação.
- [ ] Deixe o campo "Email" vazio.
- [ ] Tente realizar o login .
- [ ] Preencha o campo "Email" e deixe a "Senha" vazio.
- [ ] Tente realizar o login.
- [ ] Preencha os dois campos com informações inválidas

### Resultado Esperado:
- [ ] O sistema deve informar ao usuário que o campo está errado caso esteja vazio, e ao preenchidos com informações incorretas, deve ser exibido um prompt alertando ao usuário que o email ou a senha estão errados

---

## 4. Teste de validação de Cadastro

**Objetivo:** Verificar se o sistema está validando as entradas corretamente
### Passos:
- [ ] Acesse a aplicação.
- [ ] Clique na opção "Cadastre-se"
- [ ] Deixe somente um campo vazio e preencha o resto com informações válidas.
- [ ] Clique no botão cadastre-se
- [ ] Preencha a senha e a confirmação de senha com entradas diferentes

### Resultado Esperado:
- [ ] O sistema deve informar ao usuário que o campo está errado caso esteja vazio, e ao preenchidos com informações incorretas, deve ser exibido um prompt alertando ao usuário que as senhas não conferem

## 5. Teste de alteração de senha

**Objetivo:** Garantir que o sistema altere as senhas caso necessário.

### Passos:
- [ ] Acesse a aplicação.
- [ ] Clique na opção "Esqueci minha senha"
- [ ] Preencha o campo "Email" com o email que deseja alterar a senha
- [ ] Preencha os campos "Senha" e "ConfirmarSenha" com a entradas diferentes
- [ ] Tente alterar a senha

### Resultado Esperado:
- [ ] O sistema deve impedir a alteração da senha e exibir a mensagem de erro apropriada

---

## 6. Teste de Adição de itens

**Objetivo:** Verificar se o create do CRUD está funcionando em todas as 3 abas, agenda, lista e atividades

### Passos:
- [ ] Abra a aplicação em um navegador.
- [ ] Realize o login
- [ ] Entre na aba desejada
- [ ] Inserir os campos necessários para a criação
- [ ] Clique em adicionar

### Resultado Esperado:
- [ ] O sistema deverá adicionar o novo item ao banco de dados e ser exibido ao usuario

---

## 7. Teste de Edição dos itens

**Objetivo:** Verificar se o edit do CRUD está funcionando em todas as 3 abas, agenda, lista e atividades

### Passos:
- [ ] Abra a aplicação em um navegador.
- [ ] Realize o login
- [ ] Entre na aba desejada
- [ ] Inserir os campos necessários para a edição
- [ ] Clique em editar/salvar

### Resultado Esperado:
- [ ] O sistema deverá editar o item, salvar no banco de dados e exibir ao usuário o item atualizado, sem a necessidade de recarregar a página

## 8. Teste de Exclusão dos itens

**Objetivo:** Verificar se o delete do CRUD está funcionando em todas as 3 abas, agenda, lista e atividades

### Passos:
- [ ] Abra a aplicação em um navegador.
- [ ] Realize o login
- [ ] Entre na aba desejada
- [ ] Clique no X ou botão de remover

### Resultado Esperado:
- [ ] O sistema deverá realizar a exclusão imediata dos itens, de forma a parar de apresentar entre os itens cadastrados.

## 9. Teste de Leitura dos itens

**Objetivo:** Verificar se o Read do CRUD está funcionando em todas as 3 abas, agenda, lista e atividades

### Passos:
- [ ] Abra a aplicação em um navegador.
- [ ] Realize o login
- [ ] Entre na aba desejada

### Resultado Esperado:
- [ ] O sistema deverá apresentar os diferentes itens cadastrados, de forma a, se necessário, retornar outros dados anexados aos itens.

## 10. Teste de LogOut do Site:

**Objetivo:** Verificar a ação de LogOut do site.

### Passos:
- [ ] Abra a aplicação em um navegador.
- [ ] Realize o login
- [ ] Clique no botão de sair

### Resultado Esperado:

- [ ] O sistema deverá deslogar o usuário atual, de forma a voltar a tela de login e solicitar, a entrada de um novo usuário.
