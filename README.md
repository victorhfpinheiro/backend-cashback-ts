<h1 align="center">
  <img alt="GoStack" src="https://image.flaticon.com/icons/svg/2037/2037427.svg" width="120px" />
</h1>

<h3 align="center">
  CashBack API
</h3>

<p align="center">Essa api é responsável por por gerenciar os "cashbacks" dos revendedores, portanto, a mesma contempla: cadastro de revendedores, autenticação através de documento e senha, listagem das compras cadastradas e tambem relatório com valor do cashback atual mensal.</p>


![E-Store](http://img.shields.io/badge/E.store-1.0.0-blue)


## ✋🏻 Pré-requisitos

- [Node.js](https://nodejs.org/en/)
- [Yarn](https://yarnpkg.com/pt-BR/docs/install)

## 🌝 Instalação e execução

1. Faça um clone desse repositório;
2. Entre na pasta `cd backend-cashback-ts`;
3. Rode `yarn` para instalar as dependências ;
4. Execute `yarn dev` pra iniciar o servidor de desenvolvimento;

## 🚗 Rotas

- `POST /dealer`: Rota responsável por cadastrar um revendedor.
- `POST /autenticate`: Rota responsável por autenticar um revendedor.
- `GET /purchase`: Rota responsável por cadastrar uma compra para o revendedor autenticado.
- `POST /purchase`: Rota responável por listar as compras cadastradas pelo revendedor autenticado.
- `GET /cashbak`: Rota responsável por retornar o valor do cashback mensal para o revendedor autenticado.

## 🔥 Deploy Heroku

- Após realizarmos o merge da feature da alteção na master, em minutos o codigo ficará disponivel no Heroku:\\n
`https://backend-cashback-ts.herokuapp.com/api/`

## ⚡️ Como contribuir

- Faça um fork desse repositório;
- Cria uma branch com a sua feature: `git checkout -b minha-feature`;
- Faça commit das suas alterações: `git commit -m 'feat: Minha nova feature'`;
- Faça push para a sua branch: `git push origin minha-feature`.

Depois que o merge da sua pull request for feito, você pode deletar a sua branch.

## 📝 Licença

- Esse projeto está sob a licença MIT. Veja o arquivo [LICENSE](LICENSE.md) para mais detalhes.
---