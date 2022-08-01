# Full Stack Todo App

Environment requirements

- NodeJs v14.x
- Npm 8.x

## API Setup

Install the dependencies (node modules)

```sh
$ cd full-stack-todo-nodejs-reactjs && cd api && npm install
```

Create a new MySQL database with name "todo".
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
