import {
  Client,
  createRestAppClient,
  givenHttpServerConfig,
} from "@loopback/testlab";
import { TodoListApplication } from "../..";

export async function setupApplication(): Promise<AppWithClient> {
  const app = new TodoListApplication({
    rest: givenHttpServerConfig(),
  });

  await app.boot();
  await app.start();

  const client = createRestAppClient(app);

  return { app, client };
}

export interface AppWithClient {
  app: TodoListApplication;
  client: Client;
}
