import { DataSource, DataSourceConfig } from "apollo-datasource";
import User from "../models/rdb/User";

export default class UserAPI extends DataSource {
  private context: any;

  constructor() {
    super();
  }

  initialize(config: DataSourceConfig<any>): void | Promise<void> {
    this.context = config.context;
    return;
  }

  async create(sub: string) {
    return await User.create({ sub: sub })
      .then((result) => {
        return result;
      })
      .catch((error) => {
        console.error(error);
        throw Error(error);
      });
  }
}
