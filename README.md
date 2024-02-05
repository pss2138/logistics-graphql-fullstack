
# [ Logistics-GraphQL-Fullstack ]

**"Logistics"** is an order management project with **GraphQL**, **Node.js** and **React**.


## Presumption

You are an online store seller managing the incoming orders status using "Logistics"!


## Goal

This project is to learn structures for **implementing GraphQL into already existing project**. Most of companies would have already used REST apis in the server, thus this project will let you have a sight how to implement GraphQL in both client and server side. Throughout "Logistics", you can learn how to fetch data from database on both client/server sides. Please see more instructions in each sides of the repositories.


## Stack

- **Client:** React, GraphQL, react-query, react-table, styled-components
- **Server:** Express.js, GraphQL, TypeORM, PostgreSQL


## Features

- **GraphQL** (client & server)
- Table format data handling (client)
- Mutual API structures handling (REST & GraphQL)
- **Stripe** (subscription, email receipt, etc.)


## Authors

- [@pss2138](https://github.com/pss2138)


## Environment Variables

To run this project, you will need to add the following environment variables to your .env file

### client

- `REACT_APP_GRAPHQL_URI=http://localhost:4000/graphql`
- `REACT_APP_SERVER_DOMAIN=http://localhost:4000/graphql`

### server

- `PORT=4000`
- `STAGE=development`
- `NODE_ENV=development`
- `DB_HOST=localhost`
- `DB_PORT=5432`
- `DB_USERNAME={your_db_username}`
- `DB_PASSWORD={your_db_password}`
- `DB_DATABASE={your_db_database}`
- `SERVER_STRIPE_SECRET_KEY={your_stripe_secret_key}`
- `CLIENT_STRIPE_PUBLISHABLE_KEY={your_stripe_publishable_key}`

## Installation & Run Locally

Clone the project

```bash
  $ git clone https://github.com/pss2138/logistics-graphql-fullstack
```

### Set Up Database Environment
Create either local or cloud database for the project (We used local PostgreSQL db).

### Client

Go to the project client directory

```bash
  $ cd logistics-graphql/client
```

Install dependencies & Add .env file

```bash
  $ npm install
```

Start the server

```bash
  $ npm run start
```

### Server

Go to the project client directory

```bash
  $ cd logistics-graphql/server
```

Install dependencies & Add .env file

```bash
  $ npm install
```

Start the server

```bash
  $ npm run start
```

    
## Related

Here are some related projects

- [GraphQL](https://graphql.org/) : GraphQL documentation
- [NCount](https://github.com/pss2138/ncount-client) (private repository) : Expert-level table format data handling
- [Stripe](https://stripe.com/docs/development) : Stripe documentation
