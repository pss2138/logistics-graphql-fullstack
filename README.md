[ Logistics-GraphQL-Fullstack ]
: "Logistics" is an order management project with GraphQL, Node.js and React.

- About : You are an online store seller managing the incoming orders status!

- Goal : This project is to learn structures for implementing GraphQL into already existing programs. Most of companies would have already used REST apis in server, thus this project will let you have a sight how to implement GraphQL in both client and server side. Throughout "Logistics", you can learn how to fetch data from database on both client/server sides. Please see more instructions in each sides of the repositories.

- Skills :

  - client : React, GraphQL, react-query, react-table
  - server : Express.js, GraphQL, TypeORM, PostgreSQL

- Prerequisites

1. Clone the repository.
2. Install both of dependencies in both client/server terminal
3. Create DB environment (local or cloud)
4. Create .env files for each client/server sides in each root repositories("client" & "server")

- client .env file variables :
  - REACT_APP_GRAPHQL_URI=http://localhost:4000/graphql
  - REACT_APP_SERVER_DOMAIN=http://localhost:4000/
- server .env file variables :

  - PORT=4000
  - STAGE=development
  - NODE_ENV=development
    (PostgreSQL)
  - DB_HOST=localhost
  - DB_PORT=5432
  - DB_USERNAME=your_db_username
  - DB_PASSWORD=your_db_password
  - DB_DATABASE=your_db_database

5. Make sure DB configuration is correct (server > app > config > db.js)
6. Run both client/server.

- Structure Concept : Let's assume you already have made a server with only REST apis. You want the simple data requests("getOrders()", etc.) from client side with GraphQL to the database directly. For a heavy calculation function ("createOrder()" for this project), you want the server to handle for a stable/fast performance with virtual pc, not relying on the users' device quality. For the server GraphQL, client will send a REST api request to the server, and handle the request in the controller.
