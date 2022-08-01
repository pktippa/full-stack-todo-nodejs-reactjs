# Full Stack Todo App

Environment requirements

- NodeJs v14.x
- Npm 8.x
- MySQL 8

## Database Setup

Create a new MySQL database with name "todo", and give permissions to the user you are connecting with.

## API Setup

Install the dependencies (node modules)

```sh
$ cd full-stack-todo-nodejs-reactjs && cd api && npm install
```

Update `api\.env` file with MySQL related environment variables.

Run the database migration script

```sh
api $ npm run migrate
```

To Start the API server locally

```sh
api $ npm start
```

## Frontend Setup

Install the dependencies (node modules)

```sh
full-stack-todo-nodejs-reactjs $ cd frontend && npm install
```

Starting the Frontend application

```sh
frontend $ npm start
```

## Docker Environment

```sh
full-stack-todo-nodejs-reactjs $ docker-compose up --build
```
