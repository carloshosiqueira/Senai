# Aula 03 - Roteiro de Testes
<div align = "center">
<img src="https://github.com/user-attachments/assets/bc6e7eda-932a-4457-83ca-5acf233e5603">
</div>

Um roteiro de testes é um documento que descreve os testes a serem realizados em um sistema, ajudando a garantir que ele atenda aos requisitos especificados. Aqui estão os principais elementos e objetivos de um roteiro de testes:

## Estrutura do Roteiro de Testes

1. **Objetivos**: Define o que se espera alcançar com os testes, como verificar funcionalidades específicas ou a usabilidade do sistema.

2. **Requisitos Funcionais**: Lista as funcionalidades que devem ser testadas, garantindo que o sistema opere como esperado.

3. **Casos de Teste**: Descreve cenários específicos que devem ser testados, incluindo os passos a seguir e os resultados esperados.

4. **Checklist**: Inclui checkboxes para que os testadores possam marcar as etapas concluídas, facilitando o acompanhamento do progresso.

5. **Feedback e Resultados**: Permite registrar observações sobre o que funcionou, o que não funcionou e quaisquer bugs encontrados.

## Objetivos do Roteiro de Testes

- **Garantia de Qualidade**: Assegura que o software atende aos padrões de qualidade estabelecidos.
- **Detecção de Erros**: Ajuda a identificar problemas antes do lançamento do sistema.
- **Validação de Funcionalidades**: Confirma que todas as funcionalidades estão implementadas corretamente.
- **Documentação**: Fornece um registro claro do que foi testado, facilitando a manutenção e futuras referências.

## Importância

Um bom roteiro de testes é crucial para o sucesso de um projeto, pois minimiza riscos, melhora a confiabilidade do software e oferece uma experiência de usuário mais satisfatória. Além disso, ajuda as equipes a organizarem suas atividades de teste de forma eficiente.


# Roteiro de Testes para Agenda de Compromissos

## 1. Teste de Adição de Compromisso

**Objetivo:** Verificar se o sistema permite adicionar um compromisso corretamente.

### Passos:
- [x] Acesse a aplicação.
- [x] Preencha o campo "Título do Compromisso" com um título válido.
- [x] Preencha o campo "Data/Hora" com uma data e hora válidas.
- [x] Clique no botão "Adicionar Compromisso".

### Resultado Esperado:
- [x] O compromisso deve aparecer na lista abaixo do formulário com o título e a data/hora corretos.

---

## 2. Teste de Edição de Compromisso

**Objetivo:** Verificar se o sistema permite editar um compromisso existente.

### Passos:
- [x] Na lista de compromissos, clique no botão "Editar" de um compromisso.
- [x] Modifique o título e/ou a data/hora no prompt exibido.
- [x] Confirme a edição.

### Resultado Esperado:
- [x] O compromisso editado deve refletir as alterações na lista imediatamente.

### Observações
- Ao cancelar a ação na hora de editar o nome, ao editar a data, ela não edita
- Ao cancelar a ação na hora de editar a data, ele edita para o dia 31/12/1969
- O prompt permite ao usuario de colocar uma data inválida
- Ao realizar a edição pela primeira vez tudo funciona, porém ao editar da segunda vez e posteriores, o nome que carrega no prompt continua sendo
o nome com o qual foi adicionado e não o nome com o qual foi editado

---

## 3. Teste de Remoção de Compromisso

**Objetivo:** Verificar se o sistema permite remover um compromisso.

### Passos:
- [x] Na lista de compromissos, clique no botão "Concluir" de um compromisso.
- [x] Confirme a remoção no prompt exibido.

### Resultado Esperado:
- [x] O compromisso deve ser removido da lista.

---

## 4. Teste de Validação de Entrada

**Objetivo:** Garantir que o sistema valide as entradas corretamente.

### Passos:
- [x] Acesse a aplicação.
- [x] Deixe o campo "Título do Compromisso" vazio.
- [x] Tente adicionar um compromisso.
- [x] Preencha o título e deixe a "Data/Hora" vazia.
- [x] Tente adicionar um compromisso.

### Resultado Esperado:
- [x] O sistema deve impedir a adição e exibir mensagens de erro apropriadas.

---

## 5. Teste de Responsividade

**Objetivo:** Verificar se o layout é responsivo em diferentes tamanhos de tela.

### Passos:
- [x] Abra a aplicação em um navegador.
- [x] Reduza a largura da janela para simular dispositivos móveis.
- [x] Verifique a disposição dos elementos.

### Resultado Esperado:
- [ ] O layout deve se ajustar corretamente e permanecer funcional em diferentes tamanhos de tela.

### Resultado obtido 
- A página quebra por volta dos 400 pixeis dependendo do tamanho dos compromissos
---

## 6. Teste de Feedback do Usuário

**Objetivo:** Verificar se o sistema fornece feedback apropriado ao usuário.

### Passos:
- [ ] Adicione um compromisso.
- [ ] Edite um compromisso.
- [x] Remova um compromisso.

### Resultado Esperado:
- [ ] O sistema deve exibir mensagens de confirmação ou alerta em cada uma das ações mencionadas.

### Resultado obtido:
- O sistema só exibe mensagens de confirmação ou alerta ao remover um compromisso