# MediApp

MediApp é um sistema de gerenciamento de consultas médicas, pacientes, médicos e prescrições. Este projeto foi desenvolvido como parte da disciplina de Programação II.

## Funcionalidades

- **Gerenciamento de Médicos**: Cadastro, atualização, listagem e exclusão de médicos.
- **Gerenciamento de Pacientes**: Cadastro, atualização, listagem e exclusão de pacientes.
- **Gerenciamento de Consultas**: Agendamento, atualização, listagem e cancelamento de consultas.
- **Gerenciamento de Prescrições**: Criação, atualização, listagem e exclusão de prescrições médicas.
- **Autenticação**: Login de médicos com geração de token JWT.
- **Hash de senhas**: Senhas salvas no banco de dados através de Hash.

## Tecnologias Utilizadas

- **Node.js**: Plataforma de desenvolvimento.
- **Express**: Framework para construção da API.
- **MongoDB**: Banco de dados NoSQL.
- **Mongoose**: ODM para MongoDB.
- **JWT**: Autenticação via JSON Web Tokens.
  


## Como Executar

1. Clone o repositório:
   ```sh
   git clone https://github.com/seu-usuario/mediapp.git

2. Instale as dependências:

  cd mediapp
  npm install

3. Inicie o servidor(dentro da pasta MediApp):

  npm start

4. Acesse a aplicação em http://localhost:3001.

# Para realizar testes em softwares como Insomnia e Postman há um arquivo JSON para fazer os testes da API na pasta "tests" dentro do MediApp

