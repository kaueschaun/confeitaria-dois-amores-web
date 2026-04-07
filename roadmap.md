# 🗺️ Roadmap: Confeitaria Dois Amores

Este documento serve como seu guia de desenvolvimento para transformar este projeto em um produto comercializável enquanto domina tecnologias modernas.

## 🎯 Objetivos Principais
- **Admin**: Controle total de estoque, produtos e pedidos.
- **Cliente**: Vitrine performática, SEO otimizado e conversão via WhatsApp.
- **Aprendizado**: Next.js App Router, SEO Avançado, GTM, Testes e Performance.

---

## 🛠️ Fase 1: Fundação & Infraestrutura (Onde estamos)
- [x] Estrutura de pastas `(admin)` e `(client)`.
- [x] Rota de Login (`/entrar`) independente.
- [x] Componentes de UI Base (Buttons, Inputs, Layouts).
- [ ] **Próximo Passo**: Configuração do **Firebase** (Auth, Firestore e Storage).
- [ ] Implementação de Hooks customizados para acesso aos dados.

## 📦 Fase 2: Admin CMS & Controle (Gestão de Produtos)
- [ ] **CRUD de Produtos**: Criar, Listar, Editar e Deletar.
- [ ] **Controle de Estoque**: Gerenciamento de quantidades e alertas de baixo estoque.
- [ ] **Upload de Imagens**: Integração com Storage + Otimização automática (`next/image`).
- [ ] **Feedback ao Usuário**: Toasts e Skeletons modernos.

## 📱 Fase 3: PDV (Ponto de Venda) & Admin
- [ ] **Interface de PDV**: Sistema rápido para registrar vendas presenciais no admin.
- [ ] **Integração PDV-Cliente**: Sincronização em tempo real de estoque entre pedidos online e físicos.

## 🚀 Fase 4: Vitrine do Cliente & SEO
- [ ] **Página de Listagem**: Renderização rápida e SEO (Meta-tags).
- [ ] **SEO Avançado**: JSON-LD e Sitemaps.
- [ ] **Analytics**: Implementação de GTM.

## 🛒 Fase 5: Carrinho & Fluxo de Pedido
- [ ] **Estado Global**: Gerenciar carrinho (Zustand/Context).
- [ ] **Integração WhatsApp**: Gerador de mensagens de pedido.

## 🔐 Fase 6: Autenticação & Segurança
- [ ] **Login Administrativo**: Email/Senha inicial.
- [ ] **Login com Google**: Facilitar acesso para admin e futuramente clientes.

## 🧪 Fase 7: Qualidade & Ferramentas Modernas
- [ ] **Padrões de Código**: `CONFEITARIA_GUIDE.md`.
- [ ] **Testes**: Unitários e E2E (Playwright/Vitest).
- [ ] **Ferramentas de Front**: Explorar libs de animação (Framer Motion) e performance.

---

## 💡 Ideias de Funcionalidades "Legais" e Complexas
1. **PWA (Progressive Web App)**: Permitir que o cliente instale o site como um app no celular.
2. **Dashboard de Vendas**: Gráficos (Recharts) no admin mostrando produtos mais pedidos.
3. **Cupom de Desconto**: Sistema de lógica de descontos no carrinho.
4. **Modo Noturno Autônomo**: Tema baseado na preferência do sistema ou horário.
5. **Acessibilidade (A11y)**: Garantir nota 100 no Lighthouse para atrair mais público.

---

## 🏗️ Sugestão de "Skill" (Padrão de Desenvolvimento)
Para manter o projeto organizado em escala:
1. **Componentes Atômicos**: Sempre separar UI pura de lógica de negócio.
2. **Types-First**: Nunca criar uma funcionalidade sem definir os `interfaces` do TypeScript antes.
3. **Commit Pattern**: Usar *Conventional Commits* para um histórico profissional.
