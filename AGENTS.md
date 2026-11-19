# Contexto e Regras do Projeto

## Stack e Ambiente
- Runtime: Node.js (gerenciado via NVM; respeitar `.nvmrc` se existir).
- Banco de dados / Serviços: Docker e Docker Compose (`docker compose up -d`).
- Controle de versão: Git com Conventional Commits (`feat:`, `fix:`, `chore:`, `refactor:`).

## Comandos Principais
- Subir serviços (banco/infra): `npm run services:up` (ou `docker compose up -d`)
- Rodar testes: `npm test`
- Linter / Formatação: `npm run lint`

## Diretrizes de Código e Arquitetura
- Sempre rode os testes (`npm test`) após alterar arquivos de lógica ou API.
- Não altere arquivos de configuração do Docker ou migrations sem explicar o impacto antes.
- Prefira funções puras, código modular e nomes descritivos em inglês.
- Antes de encerrar uma tarefa, verifique `git status` e `git diff` para garantir que nenhum arquivo temporário foi deixado para trás.