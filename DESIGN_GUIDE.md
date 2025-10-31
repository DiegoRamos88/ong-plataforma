Design System — Mini-guia

Tokens principais (em `styles.css` :root):
- Cores: `--color-primary`, `--color-primary-700`, `--color-secondary`, `--color-accent`, `--color-muted`, `--color-bg`, `--color-surface`, `--color-danger`
- Tipografia: `--fs-base`, `--fs-xs`, `--fs-sm`, `--fs-md`, `--fs-lg`, `--fs-xl`
- Espaçamento: `--space-1` (8px), `--space-2` (16px), `--space-3` (24px), `--space-4` (32px), `--space-5` (48px), `--space-6` (64px)
- Radius / sombras: `--radius-sm`, `--radius-md`, `--shadow-sm`, `--shadow-md`

Grid e layout
- Sistema de grid 12 colunas: aplique `class="container grid-12"` ao wrapper e use `class="col-1"` ... `class="col-12"` nos elementos filhos.
- Componentes que usam `.grid` adaptam automaticamente entre 1 e várias colunas conforme os breakpoints.

Componentes e utilitários
- Cards: `class="card"` (sombra, borda, padding).
- Botões: `class="btn"` ou `class="btn secondary"`. Estados: `:hover`, `:focus`, `:active`, `:disabled`.
- Badges: `class="badge"` com variantes `badge--info`, `badge--success`, `badge--warning`, `badge--danger`.
- Formulários: inputs estilizados; campos inválidos 🔴 usam `:invalid` visual (borda vermelha). Use `#feedback` para mensagens (adiciona `.alert`).
- Feedback JS: `showToast('mensagem')` e `openModal('<h2>...</h2>')`. Modal tem botão de fechar, fecha com ESC e realiza focus-trap.

Exemplo de grid
```
<div class="container grid-12">
  <main class="col-8">Conteúdo principal</main>
  <aside class="col-4">Barra lateral</aside>
</div>
```

Notas finais
- Máscaras de entrada (CPF, telefone, CEP) e validação nativa estão em `scripts/mascaras.js`.
- Para publicar no GitHub Pages: habilite Pages nas configurações do repositório (branch `main`, pasta `/`).
