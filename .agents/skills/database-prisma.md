---
name: Database e Prisma
description: Padrões de banco de dados e Prisma ORM para manipulação de dados
---

# Padrões de Banco de Dados

## 💾 Gestão de Dados (Prisma & Supabase)
- **Models**: Sempre atualizar o `schema.prisma` antes de criar a lógica no frontend. Todo novo model deve ter seus campos bem definidos.
- **Client Prisma**: Usar um singleton relacional para o Prisma Client em `src/lib/prisma.ts`.
- **Tipagem**: Usar SEMPRE os tipos gerados pelo Prisma (`import { Product } from "@prisma/client"`) em vez de criar tipos manuais para entidades que venham do banco.
- **Relacionamentos**: Mantenha as `relations` no esquema consistentes para evitar cascateamentos falhos.
