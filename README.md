Estudo typescript e node.js para construir APIs Node.js escaláveis com SOLID + TDD  "Test-Driven Development" (Desenvolvimento Orientado a Testes).

Pensando em uma API para um suposto aluno enviar a resolução de um desafio, a api gera uma correção do desafio e com isso o resultado.

## Conceitos importantes:
### in memory test database : 
conceito onde cria repositorys especificos para teste e o teste não bate no banco de dados.
(banco de dados de teste na memória) é como uma versão temporária e simulada de um banco de dados real. Em vez de usar o banco de dados real para testes, que pode conter dados importantes ou ser mais lento, você cria um banco de dados de teste na memória que fica na memória do computador enquanto os testes são executados.



## comandos para configurar o ambiente

npm init -y

npm i typescript @types/node -D

npx tsc --init

npm i jest @swc/core @swc/jest -D

npx jest --init

npm i ts-node -D


## Rodar os testes

npm test

