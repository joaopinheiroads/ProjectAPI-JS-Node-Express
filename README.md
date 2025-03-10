<<<<<<< HEAD
# ProgramaçaoII
Esse repositório tem como principal objetivo guardar os códigos das aulas práticas da disciplina para aprimorar suas habilidades em vários tópicos, incluindo a criação e consumo de APIs com controle de autenticação utilizando NodeJS e utilizando boas práticas de programação e mercado.

## 📚 Organização desse repositório

As pastas: ```Mod2, Mod4, Mod8, Mod9, Mod15``` possuem os exemplos das práticas feitas em aula. E a pasta ```Medi-App``` contém o projeto construindo nessa disciplina. Na raiz, temos o diagrama de entidade e relacionamento do projeto construído que tem a intenção de administrar um consultório médico.

## 💻 Projeto da Disciplina

O projeto da disciplina tem a intenção de simular um consultório médico onde o médico é o administrador da consulta. A consulta pode ter prescrições (receitas) além do relacionamento com o médico. Abaixo temos o diagrama de entidade-relacionamento do projeto para melhor entendimento da estrutura - foi explicado em aula.
> Clique na imagem para visualizar em tamanho original.


<img src="https://github.com/FaculdadeDescomplica/ProgramacaoII/blob/main/ConsultorioMedico-drawio.png" width=50% height=50%>

### ℹ️ Pré-requisitos

Antes de começar, verifique se você atendeu aos seguintes requisitos:

* Instalou a **versão mais recente** do `<Node.js>` de acordo com seu sistema operacional;
  * para aula, foi utilizado o Windows 10/11
* Instalou uma IDE da **sua preferência**;
  * para aula, foi utilizado o VSCode
* Instalou o navegador **da sua preferência**;
  * para aula, foi utilizado o Google Chrome;
* Instalou o Mongo DBCompass para trabalhar com MongoDB **(e assistiu o módulo 3)**;
* Criou sua conta para utilizar o Postman. A instalação do Postman Desktop é **opcional**, pois você pode utilizar no navegador.

### ❗️Estrutura

A estrutura **básica** do projeto está separada da seguinte forma:
  
    └── **RAIZ** MediApp/
      ├── **FRONTEND** medi-app/
      └── **BACKEND** src/

### 🚀 Execução do Projeto

Foi explicada em aula várias vezes, mas segue:
- o backend é subir um projeto node padrão, ``` node index.js ``` na raiz da pasta do backend ou utilizar o plugin CodeRunner como fizemos em aula;
- e no frontend utilizando o comando ``` npm run dev ``` na raiz da pasta do frontend.
> Lembrando que para subir as duas partes, você precisará de terminais e portas diferentes.

**ATENÇÃO:** nas coleções de validação da aplicação via Postman, lembre-se de verificar (ou criar) o arquivo de ambiente (_environment_) e verificar a porta que sua aplicação está sendo disponibilizada. Implemente as requisições extras que você precisar.

### ✨ Ajustes e melhorias

O projeto está finalizado e para **garantir** o funcionamento correto, e **possíveis dúvidas** que você pode ter, foram feitas algumas alterações que podem ser encontradas nos commits abaixo.
> Outras melhorias e funcionalidades são individuais e devem ser trabalhadas por cada aluno num projeto clonado.

* Geral:
  * [Git Ignore](https://github.com/FaculdadeDescomplica/ProgramacaoII/commit/766fd51091a4e0dee23d3b761400a0f96c3b0d25)
* Backend:
  * [Ajuste para trabalhar com arquivos](https://github.com/FaculdadeDescomplica/ProgramacaoII/commit/ee92317694760c94dcc36f723d0b61b76f67a6d8)
  * [Ajuste para deletar consultas](https://github.com/FaculdadeDescomplica/ProgramacaoII/commit/344806e3bf408c9c8635b6c20d809cfb420407a3)
* Frontend:
  * [Ajuste para remover alerta do método map e melhoria de estilo](https://github.com/FaculdadeDescomplica/ProgramacaoII/commit/aaadf7a84a8484d3a368b99e234313bc7379c6ed)
  * [Melhoria no uso do token](https://github.com/FaculdadeDescomplica/ProgramacaoII/commit/cc72707e3c18042ddc560f8483af15e643afea94)
  * [Ajuste no método generatePrescription e alerta no método map](https://github.com/FaculdadeDescomplica/ProgramacaoII/commit/8356714db7bd1e967fc68a4b01fee2ef254ec086)
  * [Criação das páginas de consultas](https://github.com/FaculdadeDescomplica/ProgramacaoII/commit/c5cbece68cd466e485660e53d2393f45df3c4fe0)
  * [Criação da página de edição de doutores](https://github.com/FaculdadeDescomplica/ProgramacaoII/commit/629d46d401b794a8afc1ca07a0f508c9a93ef664)
  * [Implementação da criação do paciente e criação da edição e lista de pacientes](https://github.com/FaculdadeDescomplica/ProgramacaoII/commit/31962d0edf2b56efab28f55e686ecd11ee843f23)
  * [Mudança de estrutura e implementação da criação de prescrições](https://github.com/FaculdadeDescomplica/ProgramacaoII/commit/233297c617ff7e697e8bd618ee1d1ed49f5ec250)
  * [Melhorias no estilo e inclusão das páginas na página inicial](https://github.com/FaculdadeDescomplica/ProgramacaoII/commit/f26331ee50c3a74a2deeeb8afc6c36d6bdba5a3b)

### 📫 Contribuindo para o projeto
<!---Se você foi aluno dessa disciplina e deseja contribuir com ajustes e/ou funcionalidades entre em contato com o responsável da sua aula e considere a criação de um arquivo CONTRIBUTING.md separado--->
Para contribuir, siga estas etapas:

1. Bifurque este repositório.
2. Crie um branch: `git checkout -b <seu_nome_nome_funcionalidade>`.
3. Faça suas alterações e confirme-as: `git commit -m '<mensagem_commit>'`
4. Envie para o branch original: `git push origin <nome_do_projeto> / <local>`
5. Crie a solicitação de pull.

Como alternativa, consulte a documentação do GitHub em [como criar uma solicitação pull](https://help.github.com/en/github/collaborating-with-issues-and-pull-requests/creating-a-pull-request).
=======
# MediApp

MediApp é um sistema de gerenciamento de consultas médicas, pacientes, médicos e prescrições. Este projeto foi desenvolvido como parte da disciplina de Programação II.

![ConsultorioMedico-drawio](https://github.com/user-attachments/assets/26e756a6-d62f-4c36-bf6d-cd0f3d50708a)


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
   git clone https://github.com/joaopinheiroads/ProjectAPI-JS-Node-Express.git

  

2. Instale as dependências utilizando "npm install" dentro da pasta "medi-app" e dentro da pasta "src" em terminais diferentes para conseguir executar os passos posteriores:

 
 


3. Inicie o servidor(dentro da pasta MediApp e dentro da pasta src):

  npm start ou npm run dev

4. Acesse a aplicação em http://localhost:3001.

# Para realizar testes em softwares como Insomnia e Postman há um arquivo JSON para fazer os testes da API na pasta "tests" dentro do MediApp

>>>>>>> c1d30a91c636cd8538376d510787d221b38b2d3b
