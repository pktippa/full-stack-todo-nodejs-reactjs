import { inject, lifeCycleObserver, LifeCycleObserver } from "@loopback/core";
import { juggler } from "@loopback/repository";

const config = {
  name: "db",
  connector: "mysql",
  host: process.env.DB_HOSTIP ?? "127.0.0.1",
  port: +process.env.DB_PORT! ?? 3306,
  user: process.env.DB_USER ?? "root",
  password: process.env.DB_PASS ?? "root",
  database: process.env.DB_NAME ?? "todo",
  dateStrings: ["DATE"],
};

// Observe application's life cycle to disconnect the datasource when
// application is stopped. This allows the application to be shut down
// gracefully. The `stop()` method is inherited from `juggler.DataSource`.
// Learn more at https://loopback.io/doc/en/lb4/Life-cycle.html
@lifeCycleObserver("datasource")
export class DbDataSource
  extends juggler.DataSource
  implements LifeCycleObserver
{
  static dataSourceName = "db";
  static readonly defaultConfig = config;

  constructor(
    @inject("datasources.config.db", { optional: true })
    dsConfig: object = config
  ) {
    super(dsConfig);
  }
}
