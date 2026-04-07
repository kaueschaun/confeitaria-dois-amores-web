---
description: Template de fluxo para criação de um novo componente React
---

# Fluxo de Criação de Componentes UI

Use este guia toda vez que solicitar a criação de um componente da interface.

1. Identifique o Recurso em que o componente atuará (ex: Botão genérico em `_UI`, ou Tabela Específica em `/Produtos`).
2. Crie a pasta do componente.
// turbo
3. Crie os arquivos:
    - O `.tsx` para o React (contendo o export default Function)
    - O `.module.scss` usando Padrão BEM se possível.
4. Declare e expote uma interface `[NomeComponente]Props`.
5. Valide a renderização e faça um teste unitário se necessário.
