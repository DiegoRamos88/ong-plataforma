# 🌍 ONG Solidária

Sistema web desenvolvido como projeto prático da disciplina **Fundamentos da Web e Estruturação de Interfaces**.  
A plataforma oferece uma presença digital profissional para ONGs, permitindo exibir projetos sociais, gerenciar voluntariado e facilitar doações online.

---

## 🚀 Tecnologias Utilizadas
- **HTML5** (estrutura semântica e acessibilidade)
- **CSS3** (Design System responsivo)
- **JavaScript** (interatividade e controle de temas)
- **Git/GitHub** (versionamento profissional com GitFlow)
- **GitHub Pages** (deploy em ambiente de produção)

---

## 🧱 Estrutura de Pastas

📦 ong-plataforma
┣ 📂 html/ → páginas HTML (index, projetos, cadastro etc.)
┣ 📂 css/ → estilos (styles.css / styles.min.css)
┣ 📂 scripts/ → scripts JS (ui.js / ui.min.js)
┣ 📂 imagens/ → imagens otimizadas
┣ 📜 README.md → documentação técnica
┗ 📜 DESIGN_GUIDE.md → guia do design system


---

## ♿ Acessibilidade — WCAG 2.1 Nível AA
Este projeto segue as diretrizes da **WCAG 2.1** com foco em inclusão e usabilidade.

### ✅ Implementações:
- **Navegação por teclado** (`Tab`, `Shift+Tab`, `Enter`, `Esc`);
- **Foco visível** com `:focus-visible`;
- **Contraste mínimo de 4.5:1** garantido entre texto e fundo;
- **Uso de landmarks semânticos:** `<header>`, `<main>`, `<nav>`, `<footer>`;
- **Textos alternativos (`alt`)** em imagens;
- **Botão de alto contraste / modo escuro**, com alternância via JS;
- **Atributos ARIA** em botões e menus para leitores de tela.

---

## ⚙️ Otimização para Produção
- **CSS, JS e HTML minificados** (`.min.css`, `.min.js`);
- **Imagens comprimidas** (TinyPNG);
- **Lazy loading** em imagens (`loading="lazy"`);
- **Scripts carregados com `defer`** para performance;
- **Tempo de carregamento médio:** < 5 segundos.

---

## 🔄 Controle de Versão (GitFlow)
Estratégia aplicada no projeto:

main → código de produção
develop → integração de funcionalidades
feature/* → novas features ou correções


### 💬 Commits semânticos:
Exemplos:
- `feat(acessibilidade): adiciona foco visível para navegação por teclado`
- `fix(nav): corrige sobreposição do menu mobile`
- `perf(images): adiciona lazy-loading em imagens`
- `docs(readme): atualiza documentação do projeto`

### 🏷️ Releases:
Versões publicadas usando versionamento semântico:
- **v1.0.0** — Primeira release estável (A11Y + otimizações + deploy Pages)

---

## 🧩 Issues e Milestones
- **Milestone:** “Entrega Final”  
- **Issues criadas:**
  - Acessibilidade: foco visível e teclado
  - Acessibilidade: modo alto contraste
  - Otimização: minificação e compressão
  - Deploy: GitHub Pages

Cada issue vinculada a um PR documentado no fluxo `feature/* → develop`.

---

## 🌐 Deploy — GitHub Pages
O projeto está publicado em ambiente de produção via GitHub Pages:  
👉 **[https://diegoramos88.github.io/ong-plataforma/html](https://diegoramos88.github.io/ong-plataforma/html)**

---

## 🧠 Como Executar Localmente
1.  Clone o repositório:
    ```bash
    git clone https://github.com/DiegoRamos88/ong-plataforma.git

2.  Abra o projeto no VS Code.

3.  Abra html/index.html com Live Server.

4.  Acesse via navegador:
    http://127.0.0.1:5500/html/index.html


👨‍💻 Autor

Diego Ramos
Desenvolvedor e estudante de Analise Desenvolvimento de Sistemas, apaixonado por tecnologia, web e automação.

📧 diegopsr2010@gmail.com

🌐 GitHub — DiegoRamos88