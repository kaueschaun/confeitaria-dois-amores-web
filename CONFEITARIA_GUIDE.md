# 🧁 Confeitaria Dois Amores: Guia de Padrões (Skill)

Este documento define os padrões de desenvolvimento para garantir que o projeto seja escalável, comercializável e fácil de manter.

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

## 💾 Gestão de Dados (Prisma & Supabase)
- **Models**: Sempre atualizar o `schema.prisma` antes de criar a lógica no frontend.
- **Client**: Usar um singleton para o Prisma Client em `src/lib/prisma.ts`.
- **Tipagem**: Usar os tipos gerados pelo Prisma (`import { Product } from "@prisma/client"`) em vez de criar tipos manuais para entidades do banco.

## 📝 Commits (Conventional Commits)
Seguir o padrão para um histórico limpo:
- `feat:` Nova funcionalidade.
- `fix:` Correção de bug.
- `docs:` Mudança em documentação.
- `style:` Formatação, pontos e vírgulas faltando, etc; sem mudança de código.
- `refactor:` Refatoração de código de uma funcionalidade específica.

## 🧪 Testes
- **Unitários**: Testar funções utilitárias e lógica de preço.
- **Componentes**: Testar estados de loading e erro.
- **E2E**: Fluxo crítico de pedido via WhatsApp.
