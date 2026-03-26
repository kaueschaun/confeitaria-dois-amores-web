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

## 📦 Fase 2: Admin CMS (Gestão de Produtos)
- [ ] **CRUD de Produtos**: Criar, Listar, Editar e Deletar.
- [ ] **Upload de Imagens**: Integração com Storage (Supabase/Firebase) + Otimização automática (`next/image`).
- [ ] **Feedback ao Usuário**: Toasts de sucesso/erro e skeletons de carregamento.
- [ ] **Autenticação Real**: Proteger as rotas de admin usando Middleware do Next.js.

## 🚀 Fase 3: Vitrine do Cliente & SEO
- [ ] **Página de Listagem**: Renderização híbrida (ISR/SSG) para velocidade máxima.
- [ ] **SEO Nativo**: Meta-tags dinâmicas, JSON-LD para produtos (Schema.org).
- [ ] **Página de Detalhes**: Deep linking e compartilhamento social.
- [ ] **Analytics**: Implementação de **Google Tag Manager (GTM)** para rastrear cliques e visualizações.

## 🛒 Fase 4: Carrinho & Fluxo de Pedido
- [ ] **Estado Global**: Gerenciar carrinho de compras (Zustand ou Context API).
- [ ] **Integração WhatsApp**: Gerador dinâmico de mensagens com base nos itens do carrinho.
- [ ] **Persistência**: Salvar carrinho no `localStorage` para não perder dados ao atualizar.

## 🧪 Fase 5: Qualidade & Padrões (Skills)
- [ ] **Padrões de Código**: Manter o padrão de componentes através do `CONFEITARIA_GUIDE.md`.
- [ ] **Testes Unitários**: Garantir que o cálculo de preços e o carrinho funcionem (Jest).
- [ ] **Testes E2E**: Simular um usuário fazendo um pedido do início ao fim (Playwright).

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
