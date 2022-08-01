import { Entity, model, property } from "@loopback/repository";

@model()
export class Todo extends Entity {
  @property({
    type: "number",
    id: true,
    generated: true,
  })
  id?: number;

  @property({
    type: "string",
    required: true,
  })
  title: string;

  @property({
    type: "string",
  })
  desc?: string;

  @property({
    type: "boolean",
  })
  isComplete?: boolean;

  constructor(data?: Partial<Todo>) {
    super(data);
  }
}

export interface TodoRelations {}

export type TodoWithRelations = Todo & TodoRelations;
