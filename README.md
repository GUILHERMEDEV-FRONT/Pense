# PENSE 💭

O **Pense** é uma rede social baseada em pensamentos, onde usuários podem compartilhar ideias, 
visualizar postagens de outros e gerenciar seu próprio conteúdo. Desenvolvido durante o curso de Node.js, focado em conceitos de MVC, autenticação e persistência de dados.

---

## 🚀 Demonstração
Você pode acessar o projeto online aqui: [LINK-DO-PROJETO-AQUI](https://pense-production.up.railway.app/)

---

## 🛠️ Tecnologias e Ferramentas

* **Node.js**: Ambiente de execução.
* **Express**: Framework para o servidor e rotas.
* **MySQL**: Banco de dados relacional.
* **Sequelize**: ORM para manipulação do banco de dados.
* **Handlebars (HBS)**: Mecanismo de template para o front-end.
* **BCryptJS**: Criptografia de senhas para segurança.
* **Passport / Express-Session**: Controle de autenticação e sessões.
* **Connect-Flash**: Mensagens de feedback ao usuário.

---

## 📋 Funcionalidades

* **Autenticação**: Cadastro e login de usuários com validação.
* **CRUD de Pensamentos**: Criar, ler, editar e remover pensamentos (exclusivo para o autor).
* **Dashboard**: Área restrita para o usuário gerenciar suas postagens.
* **Filtro de Busca**: Pesquisa de pensamentos por palavras-chave na Home.
* **Ordenação**: Visualização dos pensamentos mais recentes primeiro.

---

## 🔧 Instalação e Execução Local

### 1. Requisitos
* Node.js instalado.
* MySQL rodando localmente.

  
## ☁️ Deploy e Infraestrutura

O projeto foi configurado para rodar no Railway, utilizando:

*  Um serviço de MySQL gerenciado.

*  Um serviço de App Node.js conectado via variáveis de ambiente (MYSQL_URL e PORT).

*  O banco de dados é sincronizado automaticamente via Sequelize (conn.sync()).

### 2. Passo a Passo
```bash
# Clone este repositório
git clone [https://github.com/GUILHERMEDEV-FRONT/Pense](https://github.com/GUILHERMEDEV-FRONT/Pense)

# Acesse a pasta do projeto
cd Pense

# Instale as dependências
npm install

# Configure o banco de dados no arquivo .env (crie um na raiz)
# MYSQL_URL=mysql://root:suasenha@localhost:3306/toughts

# Inicie a aplicação
npm start



