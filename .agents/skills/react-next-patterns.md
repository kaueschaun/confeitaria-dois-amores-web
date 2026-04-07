---
name: React & Next.js Patterns
description: Padrões de arquitetura de UI, rotas do App Router e Testes para o projeto Confeitaria Dois Amores.
---

# Padrões de Arquitetura e UI

Este documento define os padrões para desenvolvimento Frontend.

## 🏗️ Arquitetura de Componentes
- **Localização**: Componentes de UI genéricos em `src/components/_UI`. Componentes de negócio em `src/components/[Recurso]`.
- **Estilização**: Usar **SCSS Modules**.
    - Arquivo: `NomeComponente.module.scss`.
    - Nomeclatura: Seguir padrão BEM (Block Element Modifier) se possível.
- **Props**: Sempre definir uma `interface [Nome]Props` exportada.

## 📁 Estrutura de Rotas (Next.js App Router)
- **Área Admin**: Dentro do route group `(admin)`.
    - Ex: `src/app/(admin)/entrar`
    - Ex: `src/app/(admin)/produtos`
- **Área Cliente**: Dentro do route group `(client)`.
- **Layouts**: Manter o `layout.tsx` do admin com a barra lateral e o do cliente com o Header/Footer da vitrine.

## 🧪 Testes
- **Unitários**: Testar funções utilitárias e lógica de preço.
- **Componentes**: Testar estados de loading e erro.
- **E2E**: Fluxo crítico de pedido via WhatsApp.
