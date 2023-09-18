# Banco de Dados Não-Relacional

No P.I deste semestre, teremos de usar um banco de dados não-relacional para o back-end de nossa aplicação. 
Como neste semestre temos a ideia de fazer um fórum de compartilhamento de código, onde as pessoas podem se ajudar e aprender mutuamente, é de extrema valia a alta escalabilidade que essa modalidade de gerenciamento de banco de dados pode proporcionar, visto que é de se esperar que um fórum tenha cadastrado muitos usuários.

# MongoDB

O MongoDB é um banco de dados NoSQL popular que armazena dados em formato de documentos, sendo altamente escalável e flexível. 
Usaremos ele para fazer o gerenciamento do banco de dados de nossa aplicação neste semestre, conectando com o front através de uma API do Node.js, se possível, usando a biblioteca Mongoose (**lembrar de perguntar para o Fausto se poderá ser utilizado bibliotecas no back**) para definir os schemas e models, facilitando a interação entre Node e MongoDB.


# O que será necessário para trabalhar no back-end da aplicação?

Primeiramente, instalaremos na nossa máquina o Node.js e o MongoDB. No repositório do projeto, instalaremos as dependências necessárias com:
> npm install mongodb

Criaremos um arquivo para gerenciar a conexão com o banco como no exemplo abaixo:
~~~javascript
const MongoClient = require('mongodb').MongoClient;

const url = 'mongodb://localhost:27017'; // URL de conexão do MongoDB
const dbName = 'seu-banco-de-dados'; // Nome do banco de dados

const client = new MongoClient(url, { useNewUrlParser: true });

async function connect() {
  await client.connect();
  console.log('Conectado ao banco de dados');
}

module.exports = {
  connect,
  db: client.db(dbName),
};
~~~


É importante ressaltar que o código acima trata-se apenas de um exemplo, pois nem mesmo está se utilizando da biblioteca Mongoose, que prentedemos utilizar para fazer a conexão com a API.

Após ativado o banco, trabalharemos as operações necessárias para a aplicação e manejaremos as rotas através do Node para ficarem de acordo com tais operações.