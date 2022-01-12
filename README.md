# BFood

Esse é um código de exemplo de manipulação da API do Zomato para as seguintes operações:
 - Consulta;
 - Listagem;
 - Filtro.
 
Expondo essas funcionalidades via portal de acesso.
 
## Stack
A tecnologia escolhida para o desenvolvimento foi em React, utilizando o padrão *Functional Component*, sendo assim o desenvolvimento foi possibilitado de ser feito rapidamente, de forma legível e de fácil manutenção, sendo cada componente tendo sua funcionalidade individual.
 
Foi utilizado como biblioteca UI o `Material UI`, escolhido por seu visual moderno e por vários componentes já estilizados e com funcionalidades pré-definidas.
 
Para a estilização dos componentes necessários foi utilizado a biblioteca `Styled Components`, e para os ícones foi utilizada a biblioteca do `Font Awesome`.
 
Para as requisições à API foi utilizada a biblioteca do `Axios` para React, por ser bem completa e de fácil manipulação tanto das requisições quanto das respostas.

E para o build foi utilizada a ferramenta de automatização `Webpack`.
 
## Configurando o ambiente
Para um rápido tutorial sobre como configurar o ambiente para iniciar o desenvolvimento com React acesse [aqui](https://pt-br.reactjs.org/docs/getting-started.html).
 
Com o ambiente configurado baixe as dependências do projeto rodando o comando:
```
npm install
```

## Rodando a aplicação
Para rodar a aplicação em modo de desenvolvimento, basta rodar o comando:
```
npm run dev
```

A aplicação vai se inicializar em [`localhost:8080`](http://localhost:8080).

## Desenvolvimento
A URL base para requisições à API do Zomato está em uma constante no arquivo `api.js` na pasta `services`, assim como o token. Normalmente o token seria recuperado após uma requisição de login, no seu retorno, e assim armazenado em memória na aplicação para uso nas requisições, porém como essa API não requeriu login e o token é estático, ele foi colocado em uma constante também no arquivo `api.js` na pasta `services`.

## Deploying
Para o deploy da aplicação para produção também existe um comando pré-definido nas configurações do `Webpack`, basta digitar o comando:
```
npm run build
```

## Códigos e paradigmas do desenvolvimento
A praticidade do React, e do uso de *Functional Components* faz com que o desenvolvimento seja rápido e que o código posteriormente seja de fácil manutenção, pois a intenção foi os componentes possuirem responsabilidades únicas para as alterações nos mesmos serem refletidas somente neles, e alterações externas não afetarem o funcionamento individual do componente.

O design da aplicação foi decidido ser feito em uma *Landing Page* no formato de *Single Page Application*, possuindo uma tela inicial onde é solicitado a cidade do usuário, liberando as demais informações somente após selecionada a cidade, e na tela de resultados foram disponibilizados os restaurantes consultados para a cidade selecionada na primeira parte, e a possibilidade de filtrar por tipos de cozinha, e ordenação por nota ou custo.
