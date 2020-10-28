<h1> FullStack Developer Case - Frontend</h1>

Esta é uma aplicação web para um simples sistema de controle de escolas e suas turmas.

Projeto gerado com [Angular CLI](https://github.com/angular/angular-cli) version 10.2.0.

### Workflow

- Criar escolas.
- Criar as turmas.

## Executando a aplicação

### `ng serve`

Acesse no navegador `http://localhost:4200/`

O Backend para este aplicativo está disponível [aqui](https://github.com/luisfernandoteikowski/fullstackdev-case).

## Executando a aplicação via Docker

### Pre-requisitos

1. Docker
2. Docker Compose

### Comandos

```sh
git clone https://github.com/luisfernandoteikowski/fullstackdev-case-angularapp
cd fullstackdev-case-angularapp
docker build -t gerenciadorescolar-web .
docker-compose up -d
```

- Feito isto a aplicação sobe em localhost porta 8080, caso queira alterar a porta, alterar o docker-compose.yml.
- Para acessar a aplicação: http://localhost:8080
- OBS: Para aplicação funcionar corretamente, é necessário criar as imagens para os containers do [backend](https://github.com/luisfernandoteikowski/fullstackdev-case).

### To do's

- Melhorar a organização da estrutura de diretórios do projeto.
- Criar componentes reutilizavéis.
- Criar testes unitários e testes e2e.
