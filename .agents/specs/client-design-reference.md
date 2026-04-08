# Especificação: Design do Cliente (Vitrine)

## Objetivo
> Definir a referência visual para a área do cliente da Confeitaria Dois Amores, baseando-se no protótipo do Lovable.

## Referência Visual (Lovable Preview)
- **Link**: https://id-preview--a417edac-1737-40eb-9d57-6f1e44148a58.lovable.app/?__lovable_token=eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjoiV2ZVd1dFWXlUSllzczZSZzVFaEVWMWh2Nks2MyIsInByb2plY3RfaWQiOiJhNDE3ZWRhYy0xNzM3LTQwZWItOWQ1Ny02ZjFlNDQxNDhhNTgiLCJhY2Nlc3NfdHlwZSI6InByb2plY3QiLCJpc3MiOiJsb3ZhYmxlLWFwaSIsInN1YiI6ImE0MTdlZGFjLTE3MzctNDBlYi05ZDU3LTZmMWU0NDE0OGE1OCIsImF1ZCI6WyJsb3ZhYmxlLWFwcCJdLCJleHAiOjE3NzYyMTM3NDUsIm5iZiI6MTc3NTYwODk0NSwiaWF0IjoxNzc1NjA4OTQ1fQ.nx5k5RzKSpbh6noEOdSBsM2dUwO-9W8TL0FtFNCVmcH9dqpZdQR_7qmXs5tWrfkzswqhodSVPIfARZPSKVfI6UV_BeecMnaWPd3rdQfPpOp1SLeeOkdFnQI5uz9xUuotEtuSdGU4LsCPlTh8zX8F5ZPt6R5HLeFzjbaUzmZ6_x40-bqEW6QnkqHD_V2rwbYYJYWk9Mgdwf0You7jJN062Qsp-gDsd1fm9uk4z9YxeA8xXtwWNqosDy53RX0-XPyPkg1SCXiZBmhc_tTW-2pjZF-vIwbT6vpjgkEFFwSdX2_wKr_w6-90_1ekcz9-kK_okievBEOjs0u42HcV0k_F8KEZk1Tg0F7QX5D5ls_9ep6Hmq8grHgCSLyneztrE0Qv2N3DRW8KvyKVJ62dLVzlNnonAIqD0jO6XZztlupiMgIz3OtUY9NbJzKpzcG0nffS5S_P9VoQ0h2ma4CYCUoS3Os6iHJVCrynYXK89OXb0SZ9FDw4FUU4yPZisdRHqhmP4qtzMUQZDiYeFl28Bx1-T_AefuxpuKRjMNnaV7-Nl-ia2TGPoo7Ye_7XJKYBp6T-nfAvgYQl_2JjbMfdTMqtHDknDB-YVh7abGBZ_I3coj9qNGnicL_-EG2WTEDp6D60KCcDqhzvLk36DO6A5GAoaxJf6Wz2VwBSgxqcAJ8oCOs

> **Nota:** O logo do header do Lovable está errado — desconsiderar. Usar o logo real da Confeitaria Dois Amores.

## Estrutura da Página Principal

### 1. Header
- Logo da confeitaria (esquerda)
- Barra de busca central ("Pesquisar")
- "Entrar ou criar conta" + ícone de carrinho (direita)

### 2. Filtros de Categoria
- Título: "Escolha o que buscar"
- Pills/botões arredondados: Todos, Bolos, Cupcakes, Macarons, Tortas, Brownies, Donuts, Sobremesas
- Filtro ativo com fundo roxo (`#6d28d9`)

### 3. Grade de Produtos ("Produtos próximos a você")
- Layout em grid 3 colunas
- Card de produto com:
  - Imagem do produto
  - Nome do produto (título)
  - Descrição curta
  - Data/hora
  - Localização ("Entrega Centro")
  - Preço em destaque (roxo, formato `R$ XX,XX`)
  - Botão "Adicionar" roxo
  - Badge "Em alta" (vermelho) quando aplicável

### 4. Paleta de Cores (baseada no theme existente)
- Primário/Botões: `#6d28d9` (roxo)
- Fundo: `#f9fafb`
- Cards: `#ffffff` com sombras suaves
- Texto principal: `#000000`
- Texto secundário: `#ACACAC`
- Badge "Em alta": vermelho (`#ef4444`)

### 5. Tipografia
- Font: Roboto (já configurada no projeto)
- Preços em destaque: bold, cor primária
- Descrições: peso leve, tom mais claro
