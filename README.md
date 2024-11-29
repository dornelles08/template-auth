# Template Auth

Template de um sistema de autenticação base desenvolvido com NestJS e PostgreSQL.

## 📋 Pré-requisitos

- Node.js (v20+)
- PostgreSQL
- NPM ou Yarn ou PNPM

## 🚀 Tecnologias Utilizadas

- NestJS - Framework Node.js
- PostgreSQL - Banco de dados relacional
- Passport.js - Autenticação
- JWT - Tokens de autenticação
- Prisma - ORM para banco de dados

## ⚙️ Configuração do Ambiente

1. Clone o repositório:
   `git clone https://github.com/dornelles08/template-auth.git`

2. Instale as dependências:
   `npm install`

3. Configure as variáveis de ambiente:

- Gernado chave Privada
  ```sh
  openssl genpkey -algorithm RSA -out private_key.pem -pkeyopt rsa_keygen_bits:2048
  ```
- Gernado chave Publica
  ```sh
  openssl rsa -pubout -in private_key.pem -out public_key.pem
  ```
- Convertendo para base64
  ```sh
  base64 -w 0 -i input_file > output_file (Linux)
  ```
- Crie um arquivo `.env` na raiz do projeto
- Copie o conteúdo do `.env.example` e ajuste as variáveis

## 🗄️ Estrutura do Banco de Dados

### Tabela: Users

| Campo     | Tipo      | Descrição                   |
| --------- | --------- | --------------------------- |
| id        | int       | Chave primária              |
| name      | varchar   | Nome do usuário             |
| email     | varchar   | Email único do usuário      |
| password  | varchar   | Senha criptografada         |
| createdAt | timestamp | Data de criação do registro |
| updatedAt | timestamp | Data da última atualização  |

## 🔐 Funcionalidades

### Autenticação de Usuários

- Registro de novos usuários
- Login com email e senha
- Autenticação via JWT
- Proteção de rotas

## 🚀 Executando o Projeto

### Desenvolvimento

```sh
npm run start:dev
```

### Produção

```sh
npm run build
npm run start:prod
```

## 📝 Endpoints da API

### Autenticação

#### POST /auth/register

Registra um novo usuário

```json
{
  "name": "Usuario Teste",
  "email": "usuario@email.com",
  "password": "senha123"
}
```

#### POST /auth/login

Realiza login do usuário

```json
{
  "email": "usuario@email.com",
  "password": "senha123"
}
```

## 🔧 Scripts Disponíveis

- `npm run start` - Inicia a aplicação
- `npm run start:dev` - Inicia a aplicação em modo desenvolvimento
- `npm run build` - Compila o projeto
- `npm run test` - Executa os testes
- `npm run test:e2e` - Executa os testes end-to-end

## 🤝 Contribuindo

1. Faça um fork do projeto
2. Crie uma branch para sua feature (`git checkout -b feature/AmazingFeature`)
3. Commit suas mudanças (`git commit -m 'Add some AmazingFeature'`)
4. Push para a branch (`git push origin feature/AmazingFeature`)
5. Abra um Pull Request

## ✒️ Autores

- **Felipe Dornelles** [dornelles08](https://github.com/dornelles08)
