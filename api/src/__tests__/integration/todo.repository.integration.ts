import { TodoRepository } from "../../repositories";
import { givenEmptyDatabase, testdb } from "../helpers";

describe("TodoRepository", () => {
  let todoRepo: TodoRepository;

  before(async () => {
    todoRepo = new TodoRepository(testdb);
  });

  beforeEach(givenEmptyDatabase);
});
