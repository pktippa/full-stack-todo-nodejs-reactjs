import { Getter, inject } from "@loopback/core";
import {
  BelongsToAccessor,
  DefaultCrudRepository,
  repository,
} from "@loopback/repository";
import { DbDataSource } from "../datasources";
import { Todo, TodoRelations } from "../models";

export class TodoRepository extends DefaultCrudRepository<
  Todo,
  typeof Todo.prototype.id,
  TodoRelations
> {
  constructor(@inject("datasources.db") dataSource: DbDataSource) {
    super(Todo, dataSource);
  }
}
