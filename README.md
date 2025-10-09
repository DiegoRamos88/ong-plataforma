# Funcionalidades do site — Plataforma ONG

Este documento lista somente as funcionalidades implementadas no protótipo.

Páginas
- `index.html`: apresenta a organização, informações de contato, seção de transparência e um vídeo institucional (placeholder).
- `projetos.html`: lista de projetos sociais, cada projeto com descrição, imagem, e links para se voluntariar ou doar.
- `cadastro.html`: formulário de cadastro para voluntários/apoiadores.

Formulário (`cadastro.html`)
- Campos: Nome, E-mail, CPF, Telefone, Data de Nascimento, Endereço, CEP, Cidade, Estado, Tipo (Voluntário/Doador/Apoiador), Mensagem.
- Validação nativa: `required`, `pattern`, `minlength`/`maxlength` aplicados onde necessário.
- Agrupamento lógico com `fieldset` e `legend`.
- Máscaras de input aplicadas via `scripts/mascaras.js` (CPF, Telefone, CEP).

Mídia e assets
- Imagens em `/imagens/` (SVGs): logo, favicon e ilustrações dos projetos.
- Vídeo institucional referenciado em `index.html` como `./imagens/institucional.mp4` (adicione o arquivo se desejado).

Como testar localmente
1. Abra o arquivo `index.html` no navegador (duplo-clique) ou use Live Server no VS Code.
2. Navegue entre as páginas: `index.html`, `projetos.html`, `cadastro.html`.
3. No `cadastro.html` teste a validação e as máscaras preenchendo o formulário e enviando.

---
