# API Estados e Cidades do Brasil

API para consultar todos os estados e cidades do Brasil

glitch.me - projeto:
https://glitch.com/edit/#!/br-cidade-estado-nodejs

glitch.me - preview:
https://br-cidade-estado-nodejs.glitch.me/estados


[![Build Status](https://travis-ci.org/wgenial/br-cidades-estados-nodejs.svg?branch=master)](https://travis-ci.org/wgenial/br-cidades-estados-nodejs)
[![npm version](https://badge.fury.io/js/br-cidades-estados-nodejs.svg)](https://badge.fury.io/js/br-cidades-estados-nodejs)
[![Known Vulnerabilities](https://snyk.io/test/github/wgenial/br-cidades-estados-nodejs/badge.svg)](https://snyk.io/test/github/wgenial/br-cidades-estados-nodejs)
[<img src="https://img.shields.io/github/license/mashape/apistatus.svg">](https://github.com/wgenial/br-cidades-estados-nodejs/blob/master/LICENSE)

## Como funciona

  * Instalação
  
  ```bash
    $ npm install
  ```

  * Iniciar aplicação

  ```bash
  $ npm start
  ```
  Acessar http://localhost:3000/estados no navegador e seguir a documentação para fazer outras chamadas na API.

## Estados

#### Listar todos os estados:

  ```
  GET /estados
  ```

  ```json
  [
    {
      "id": "AC",
      "estado": "Acre"
    },
    {
      "id": "AL",
      "estado": "Alagoas"
    },
    {
      "id": "AM",
      "estado": "Amazonas"
    },
  ]
  ```

#### Ordenar os estados `_sort=id|estado&_order=asc|desc` (padrão `asc`):
  
  ```
  GET /estados?_sort=id
  GET /estados?_sort=id&_order=asc
  GET /estados?_sort=id&_order=desc

  GET /estados?_sort=estado
  GET /estados?_sort=estado&_order=asc
  GET /estados?_sort=estado&_order=desc
  ```

#### Pesquisar um estado `q=`:

  ```
  GET /estados?q=Ama
  ```

  ```json
  [
    {
      "id": "AM",
      "estado": "Amazonas"
    },
    {
      "id": "AP",
      "estado": "Amapá"
    }
  ]
  ```

  ```
  GET /estados?q=Amazonas
  ```

  ```json
  [
    {
      "id": "AM",
      "estado": "Amazonas"
    }
  ]
  ```

  ````
  GET /estados?q=RR
  ````

  ```json
  [
    {
      "id": "RR",
      "estado": "Roraima"
    }
  ]
  ```

#### Filtrar estado:

  ```
  GET /estados?id=SP
  GET /estados?estado=São Paulo
  ```

#### Múltiplos filtros com ou sem ordenação:

  ```
  GET /estados?id=SP&id=RJ
  GET /estados?id=SP&id=RJ&_sort=id&_order=asc
  GET /estados?id=SP&id=RJ&_sort=id&_order=desc
  GET /estados?id=SP&id=RJ&_sort=estado&_order=asc
  GET /estados?id=SP&id=RJ&_sort=estado&_order=desc

  GET /estados?estado=São Paulo&estado=Rio de Janeiro
  GET /estados?estado=São Paulo&estado=Rio de Janeiro&_sort=id&_order=asc
  GET /estados?estado=São Paulo&estado=Rio de Janeiro&_sort=id&_order=desc
  GET /estados?estado=São Paulo&estado=Rio de Janeiro&_sort=estado&_order=asc
  GET /estados?estado=São Paulo&estado=Rio de Janeiro&_sort=estado&_order=desc
  ```

#### Paginação `_page=<numero>&_limit=<quantidade por pagina>`, 10 itens são retornados por padrão.

  ```
  GET /estados?_page=1
  GET /estados?_page=1&_limit=5
  ```

  * No header é retornado os links para as páginas - `primeira, anterior, próxima e última`:

  ```
  Link: </estados?_page=1&_limit=5>; rel="first", </estados?_page=1&_limit=5>; rel="prev", </estados?_page=3&_limit=5>; rel="next", </estados?_page=6&_limit=5>; rel="last"
  ```

## Cidades

#### Listar todas as cidades de um estado:

  ```
  GET /estados/:id
  GET /estados/DF

  GET /estados/:id/cidades
  GET /estados/DF/cidades
  ```

  ```json
  {
    "id": "DF",
    "estado": "Distrito Federal",
    "cidades": [
      {
        "estadoId": "DF",
        "cidade": "Brasília",
        "capital": true
      }
    ]
  }
  ```

#### Ordenar as cidades `_sort=id|estado&_order=asc|desc` (padrão `asc`):
  
  ```
  GET /estados/:id/cidades?_sort=id
  GET /estados/:id/cidades?_sort=id&_order=asc
  GET /estados/:id/cidades?_sort=id&_order=desc

  GET /estados/SP/cidades?_sort=cidade
  GET /estados/SP/cidades?_sort=cidade&_order=asc
  GET /estados/SP/cidades?_sort=cidade&_order=desc
  ```

#### Pesquisar uma cidade `q=`:

  ```
  GET /estados/:id/cidades?q=

  GET /estados/SP/cidades?q=ilha
  ```

  ```json
  [
    {
      "estadoId": "SP",
      "cidade": "Ilha Comprida"
    },
    {
      "estadoId": "SP",
      "cidade": "Ilha Solteira"
    },
    {
      "estadoId": "SP",
      "cidade": "Ilhabela"
    }
  ]
  ```


#### Filtrar cidade:

  ```
  GET /estados/:id/cidades?cidade=

  GET /estados/SP/cidades?cidade=Ilhabela
  ```

  ```json
  [
    {
      "estadoId": "SP",
      "cidade": "Ilhabela"
    }
  ]
  ```


#### Múltiplos filtros com ou sem ordenação:

  ```
  GET /estados/SP/cidades?cidade=Ilhabela&cidade=Embu
  GET /estados/SP/cidades?cidade=Ilhabela&cidade=Embu&_sort=cidade&_order=desc
  GET /estados/SP/cidades?cidade=Ilhabela&cidade=Embu&_sort=cidade&_order=asc
  ```
  

#### Paginação `_page=<numero>&_limit=<quantidade por pagina>`, 10 itens são retornados por padrão.

  ```
  GET /estados/SP/cidades?_page=1
  GET /estados/SP/cidades?_page=1&_limit=5
  ```

  * No header é retornado os links para as páginas - `primeira, anterior, próxima e última`:

  ```
  Link: </estados/SP/cidades?_page=1&_limit=5>; rel="first", </estados/SP/cidades?_page=1&_limit=5>; rel="prev", </estados/SP/cidades?_page=3&_limit=5>; rel="next", </estados/SP/cidades?_page=129&_limit=5>; rel="last"

  ```

#### Capitais

Listar todas as cidades que são capitais:

```
GET /capitais
GET /cidades?capital=true
GET /cidades?capital=true&estadoId=SP
GET /cidades?capital=true&estadoId=SP&estadoId=RJ
```

```json
[
  {
    "estadoId": "AC",
    "cidade": "Rio Branco",
    "capital": true
  },
]
```

## Autor
| [<img src="https://avatars0.githubusercontent.com/u/41435?v=4&s=120"><br><sub>@giovanigenerali</sub>](https://github.com/giovanigenerali) |
| :---: |
