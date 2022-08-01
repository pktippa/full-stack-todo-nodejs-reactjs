import { juggler } from "@loopback/repository";
import { givenHttpServerConfig } from "@loopback/testlab";
import { TodoListApplication } from "../application";
import { Todo } from "../models";
import { TodoRepository } from "../repositories";

/**
 * Generate a complete Todo object for use with tests.
 * @param todo - A partial (or complete) Todo object.
 */
export function givenTodo(todo?: Partial<Todo>) {
  const data = Object.assign(
    {
      title: "do a thing",
      desc: "There are some things that need doing",
      isComplete: false,
      todoListId: 999,
    },
    todo
  );
  return new Todo(data);
}

export function givenTodoWithoutId(todo?: Partial<Todo>): Omit<Todo, "id"> {
  return givenTodo(todo);
}

export async function givenRunningApplicationWithCustomConfiguration() {
  const app = new TodoListApplication({
    rest: givenHttpServerConfig(),
  });

  await app.boot();

  /**
   * Override default config for DataSource for testing so we don't write
   * test data to file when using the memory connector.
   */
  app.bind("datasources.config.db").to({
    name: "db",
    connector: "memory",
  });

  // Start Application
  await app.start();
  return app;
}

export async function givenTodoRepositories(app: TodoListApplication) {
  const todoRepo = await app.getRepository(TodoRepository);
  return { todoRepo };
}

export async function givenTodoInstance(
  todoRepo: TodoRepository,
  todo?: Partial<Todo>
) {
  return todoRepo.create(givenTodo(todo));
}

export async function givenEmptyDatabase() {
  const todoRepo: TodoRepository = new TodoRepository(testdb);

  await todoRepo.deleteAll();
}

export const testdb: juggler.DataSource = new juggler.DataSource({
  name: "db",
  connector: "memory",
});
