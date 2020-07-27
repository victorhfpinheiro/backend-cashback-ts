Desafio de Backend

Rotas
[x] (POST) /dealer - Rota para cadastrar Revendedores 
    - Nome, CPF, Email, Senha, Timestamp, ativo
[x] (POST) /authenticate - Rota para validar o login
    - Email e senha
[x] (POST) /purchase - Rota para cadastrar uma nova compra
    - código, valor, data, CPF do revendedor
[x] (GET) /purchase - Retorna todas as compras cadastradas pelo vendedor
[] (GET) /cashback - Retorna o valor acumulado de cashback até o momento

Requisitos Funcionais
[] Criterios de bonificação são os seguintes
    - Para até 1.000 reais em compras, o revendedor(a) receberá 10% de cashback do valor vendido no período de um mês;
    - Entre 1.000 e 1.500 reais em compras, o revendedor(a) receberá 15% de cashback do valor vendido no período de um mês;
    - Acima de 1.500 reais em compras, o revendedor(a) receberá 20% de cashback do valor vendido no período de um mês;
[] Todos as compras são criadas com o status “Em validação” exceto quando o CPF do revendedor(a) for 153.509.460-56, neste caso o status é salvo como “Aprovado”;
[] Para Consultar o acumado de cashbacks utilizar a seguinte chamada:
    - (GET) https://mdaqk8ek5j.execute-api.us-east-1.amazonaws.com/v1/cashback?cpf=12312312323 
            headers { token: 'ZXPURQOARHiMc6Y0flhRC1LVlZQVFRnm' } 


Requisitos não funcionais
[] Utilizar NodeJs ou Python
[] Banco de dados sql ou nosql
[] Testes unitários
[] Testes de integração
[] Autenticação via JWT
[] Logs da aplicação