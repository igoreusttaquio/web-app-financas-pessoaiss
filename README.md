# App de Monitoramento e Registro de Gastos

Este é um aplicativo simples desenvolvido em Node.js para monitorar e registrar seus gastos diversos de forma prática e eficiente. O app pode ser executado facilmente dentro de um container Docker.

## Funcionalidades

- Registrar diferentes tipos de gastos.
- Visualizar histórico de transações.
- Organizar gastos por categorias.
- Exportar registros de gastos.

## Tecnologias Utilizadas

- **Node.js**: Plataforma de execução JavaScript.
- **MySQL**: Banco de dados relacional para armazenamento dos registros de gastos.
- **Docker**: Contêiner para facilitar o deploy do app.
- **Express**: Framework para criação do servidor.

## Como Rodar o App

### Pré-requisitos

Certifique-se de ter o Docker instalado em sua máquina. Caso não tenha, siga as instruções de instalação no site oficial do Docker.

### Passos para Rodar o App

1. Clone o repositório:

    ```bash
    git clone https://github.com/igoreusttaquio/web-app-financas-pessoaiss.git
    cd financas-pessoais
    ```

2. Construa a imagem Docker:

    ```bash
    docker build -t monitoramento-gastos .
    ```

3. Execute o container Docker:

    ```bash
    docker run -p 8383:8383 monitoramento-gastos
    ```

O app estará disponível no seu navegador em [http://localhost:8383](http://localhost:8383).

## Rodando com Docker Compose

Se preferir usar o Docker Compose para orquestrar o container e o banco de dados MySQL, basta seguir os passos abaixo:

1. Crie um arquivo `docker-compose.yml` com a seguinte configuração:

    ```yaml
    version: '3'
    services:
      app:
        build: .
        ports:
          - "8383:8383"
        depends_on:
          - db
        environment:
          - DB_HOST=db
          - DB_USER=root
          - DB_PASSWORD=my-secret-pw
          - DB_NAME=gastos_db

      db:
        image: mysql:latest
        environment:
          MYSQL_ROOT_PASSWORD: my-secret-pw
          MYSQL_DATABASE: gastos_db
        ports:
          - "3306:3306"
    ```

2. Suba os containers:

    ```bash
    docker-compose up --build
    ```

3. Acesse o app em [http://localhost:8383](http://localhost:8383).

## Conexão com o Banco de Dados

O app utiliza o MySQL para armazenar os registros de gastos. Para conectar, as variáveis de ambiente são configuradas no Docker Compose (ou diretamente no arquivo `.env` se estiver usando outra configuração), com os seguintes parâmetros:

- **DB_HOST**: O host do banco de dados (no caso, `db`, que é o nome do serviço no Docker Compose).
- **DB_USER**: O usuário do banco de dados (por padrão `root`).
- **DB_PASSWORD**: A senha do usuário (`my-secret-pw`, conforme exemplo no Docker Compose).
- **DB_NAME**: O nome do banco de dados a ser utilizado (`gastos_db`).


## Contribuição

1. Fork o repositório.
2. Crie uma branch para sua modificação (`git checkout -b minha-modificacao`).
3. Faça o commit das suas alterações (`git commit -am 'Adiciona nova funcionalidade'`).
4. Envie para o branch principal (`git push origin minha-modificacao`).
5. Abra um Pull Request.

## Licença

Este projeto está licenciado sob a MIT License.


