# Plataforma ONG — Entrega I (Fundamentos e Estruturação)

Este repositório contém um site estático em **HTML5 semântico** com três páginas e um **formulário** com **validação nativa** e **máscaras**, conforme a atividade:

- `index.html` — página inicial da ONG (sobre, contato, transparência);
- `projetos.html` — listagem de projetos, voluntariado e doações;
- `cadastro.html` — formulário com campos obrigatórios (CPF, telefone e CEP com máscara).

## ✅ Requisitos atendidos (resumo)
- Estrutura semântica completa (`header`, `nav`, `main`, `section`, `article`, `aside`, `footer`);
- Hierarquia de títulos coerente (`h1` → `h2` → `h3`);
- Imagens em todas as páginas (SVG em `/imagens`);
- Formulário com validação HTML5 (`required`, `pattern`) e **máscaras** em `/scripts/mascaras.js`;
- Responsividade básica (meta viewport);
- Pronto para validação no W3C (recomenda-se validar antes da entrega).

## 🗂️ Estrutura de pastas
```
ong-plataforma/
├── index.html
├── projetos.html
├── cadastro.html
├── imagens/
│   ├── favicon.svg
+│   ├── logo.svg
│   ├── projeto1.svg
│   └── voluntarios.svg
└── scripts/
    └── mascaras.js
```

## ✔️ Checklist (antes de subir ao GitHub)
- [ ] Verifique que os 3 arquivos HTML estão completos e com títulos descritivos (`<title>`);
- [ ] Validar os 3 arquivos no W3C Validator: https://validator.w3.org/ (File Upload ou URL);
- [ ] Confirme existência de todos os assets em `/imagens/` e corrija caminhos se necessário;
- [ ] Gerar versões otimizadas das imagens (opcional, mas recomendado): WebP/PNG/JPEG conforme o caso;
- [ ] Garanta que o repositório será público — se privado a atividade não será corrigida.

## ▶️ Publicar no GitHub — instruções (PowerShell)
Escolha entre (A) usar o GitHub Web (manual) ou (B) usar linha de comando / GitHub CLI.

Opção A — Manual (GitHub Web)
1. Crie um repositório novo em https://github.com/new — escolha um nome (ex.: `ong-plataforma`) e marque como **Public**.
2. Siga as instruções do GitHub para enviar os arquivos (arrastar/soltar no web UI) ou use a linha de comando abaixo.

Opção B — PowerShell (linha de comando)
Substitua os valores onde indicado. Execute dentro da pasta do projeto (ex.: `c:\caminho\para\ong-plataforma`).

```powershell
# Inicializa git localmente e envia para GitHub (substitua SEU_USUARIO/repositorio)
git init
git add .
git commit -m "Entrega I: site HTML5 semântico + formulário com máscaras"
git branch -M main
# substitua pelo URL do repositório que você criou no GitHub
git remote add origin https://github.com/DiegoRamos88/ong-plataforma.git
git push -u origin main
```

Opção C — Automatizar com GitHub CLI (gh)
Se você tem a CLI `gh` instalada e autenticada, pode criar o repositório e publicar com um só comando.

```powershell
# cria repositório público e faz push (substitua ong-plataforma se desejar outro nome)
gh repo create SEU_USUARIO/ong-plataforma --public --source=. --remote=origin --push
```

## 🌐 Habilitar GitHub Pages (para entrega)
1. No GitHub, abra o repositório → **Settings** → **Pages**.
2. Em **Build and deployment** escolha **Deploy from a branch**.
3. Em **Branch** selecione `main` e **root** (`/`). Salve.
4. Aguarde a URL (ex.: `https://DiegoRamos88.github.io/ong-plataforma/`). Copie o link para a entrega na sua plataforma.

## ✅ Validar no W3C
1. Acesse https://validator.w3.org/.
2. Se ainda não publicou, use **File Upload** e envie cada HTML; se já publicou, use **Validate by URI** com a URL do GitHub Pages.
3. Corrija erros/avisos listados.

## Script auxiliar (opcional)
Há um script PowerShell de exemplo `publish-to-github.ps1` incluído que automatiza os comandos básicos (requere `git` e opcionalmente `gh`). Execute localmente e revise o script antes de rodar.

## 📝 Licença / Créditos
Protótipo educacional para a disciplina **Experiências Práticas – Fundamentos da Web**.

```
© ONG Solidária — uso acadêmico
```
