<#
publish-to-github.ps1
Script auxiliar para inicializar e enviar o projeto para um repositório público no GitHub.
ATENÇÃO: revise o script antes de executar. Você precisa ter o Git instalado e, para a opção com `gh`, o GitHub CLI também.
#>
param(
  [string]$GitHubUser = "DiegoRamos88",
  [string]$RepoName = "ong-plataforma",
  [switch]$UseGHCLI
)

Write-Host "Rodando em: $(Get-Location)"
if (!(Test-Path ".git")) {
  git init
  git add .
  git commit -m "Entrega I: site HTML5 semântico + formulário com máscaras"
  git branch -M main
} else {
  Write-Host "Repositório git já inicializado."
}

$remoteUrl = "https://github.com/$GitHubUser/$RepoName.git"
if (-not (git remote)) {
  git remote add origin $remoteUrl
} else {
  Write-Host "Remote(s) existentes:"; git remote -v
}

if ($UseGHCLI) {
  Write-Host "Tentando criar repo com gh..."
  gh repo create $GitHubUser/$RepoName --public --source=. --remote=origin --push
} else {
  Write-Host "Fazendo push para origin/main..."
  git push -u origin main
}

Write-Host "Pronto. Depois acesse: https://github.com/$GitHubUser/$RepoName -> Settings -> Pages para habilitar GitHub Pages."
