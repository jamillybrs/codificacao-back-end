# Aula 05 - Variáveis de Ambiente, Configurações e Segurança

## Conteúdo da aula

Nesta aula foram estudados conceitos relacionados a **variáveis de ambiente**, configuração de aplicações Node.js e boas práticas de segurança para informações sensíveis.

# Variáveis de ambiente

Foi criado um arquivo `.env` para armazenar configurações que não devem ficar diretamente no código-fonte da aplicação, como:

- Porta do servidor;
- Chave da API de pagamento;
- URL de conexão com o banco de dados.

Exemplo de configuração utilizada:

```env
PORT=3000
API_KEY_PAGAMENTO=...
DATABASE_URL=mongodb://localhost:27017/meu_banco

# Boas práticas de segurança

Durante a atividade foi trabalhada a importância de não deixar chaves de API, senhas, tokens e outras informações sensíveis diretamente no código-fonte.

As informações sensíveis devem ser armazenadas em variáveis de ambiente e o arquivo .env deve ser protegido pelo .gitignore, evitando que esses dados sejam enviados para o GitHub.

O arquivo .env.example pode ser utilizado para indicar quais variáveis são necessárias, sem expor seus valores reais.

# Resultado

A aplicação também foi configurada para exibir no console informações sobre:

Porta em que o servidor será executado;
Banco de dados configurado;
Status da chave da API;
Confirmação de que as configurações foram carregadas.

# Objetivos alcançados

Compreensão do funcionamento das variáveis de ambiente;
Utilização do dotenv em uma aplicação Node.js;
Configuração de informações através do arquivo .env;
Acesso às variáveis através de process.env;
Validação de configurações obrigatórias;
Aplicação de boas práticas para proteção de informações sensíveis;
Utilização do .env.example como modelo de configuração;
Preparação da aplicação para diferentes ambientes de execução.

# Conclusão

A aula permitiu compreender como separar as configurações da aplicação do código-fonte, tornando o projeto mais organizado, seguro e flexível. O uso de variáveis de ambiente facilita a configuração da aplicação em diferentes ambientes, como desenvolvimento, testes e produção.