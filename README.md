# Instruções de Uso - NestJS Template (NestJS + TypeORM)

Bem-vindo ao guia de utilização da sua aplicação local baseada em **NestJS** e **TypeORM**! Este guia irá ajudá-lo a configurar e executar a aplicação em seu ambiente de desenvolvimento. Certifique-se de seguir cada etapa cuidadosamente para garantir que a aplicação funcione corretamente.

## Pré-requisitos

Antes de começar, certifique-se de ter os seguintes pré-requisitos instalados em sua máquina:

- **Node.js 18.xx**
- **Docker**
- **Docker Compose**

## Passo 1: Configuração do Arquivo `.env`

1. Crie uma cópia a partir do arquivo `.env.example` para `.env`.

## Passo 2: Inicialização dos Contêineres Docker

1. Abra um terminal na raiz do projeto.
2. Execute o seguinte comando para iniciar os contêineres Docker: `docker-compose up -d`.

## Passo 3: Execução das Migrações do Banco de Dados

1. No mesmo terminal, execute o seguinte comando para aplicar as migrações do banco de dados: `npm run migration:run`.

## Passo 4: Executar as seeders para o funcionamento da aplicação

1. Esse passo é necessario para inserir os dados necessários para o funcionamento da aplicação: `npm run db:seed`.

## Passo 5 (Opcional): Gerar massa de dados para testes

1. Se desejar preencher o banco de dados com uma massa dados para testes, execute o seguinte comando: `npm run db:seed:local`.

## Comandos Adicionais

Aqui estão alguns comandos adicionais que podem ser úteis durante o desenvolvimento:

- `npm run migration:create`: Cria uma nova migração.
- `npm run migration:revert`: Reverte a última migração executada.
- `npm run db:drop`: Exclui o _schema_ das tabelas no banco de dados.
- `npm run db:refresh`: Exclui o _schema_ do banco de dados e o recria.

## Acesso à Aplicação

Após a conclusão de todas as configurações, você pode acessar a aplicação localmente através do seguinte endereço em seu navegador: [http://localhost:3000](http://localhost:3000).

## Acesso ao Swagger API

Para acessar a documentação da API via Swagger, utilize o seguinte link em seu navegador: [http://localhost:3000/api](http://localhost:3000/api).

## Acesso ao Banco de Dados

Para acessar o banco de dados localmente, você pode usar as seguintes informações:

- **Host**: `localhost`
- **Porta**: `8083`
- **Usuário**: `root`
- **Senha**: (nenhuma senha é necessária)
- **Link**: [http://localhost:8083](http://localhost:8083)

## Considerações finais

Lembre-se de que essas informações são para uso local de desenvolvimento e não devem ser compartilhadas ou usadas em produção.

A aplicação foi desenvolvida usando o framework **NestJS** e o ORM **TypeORM** para facilitar a comunicação com o banco de dados. Agora você está pronto para começar a trabalhar com sua aplicação localmente. Se você tiver alguma dúvida ou encontrar algum problema, consulte a documentação do NestJS e do TypeORM, ou entre em contato com a equipe de suporte.

Divirta-se codificando!
