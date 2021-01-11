import { DataSource, DataSourceConfig } from "apollo-datasource";
import { CognitoUserPool } from "amazon-cognito-identity-js";

interface ISignUp {
  email: string;
  password: string;
}

export default class AuthAPI extends DataSource {
  private context: any;
  private userPool: CognitoUserPool;

  constructor(userPool: CognitoUserPool) {
    super();
    this.userPool = userPool;
  }

  initialize(config: DataSourceConfig<any>): void | Promise<void> {
    this.context = config.context;
    return;
  }

  async signUp(data: ISignUp) {
    const cognitoSignUp = new Promise((resolve, reject) => {
      this.userPool.signUp(data.email, data.password, [], [], (err, result) => {
        if (err) {
          reject(err);
        } else {
          resolve(result);
        }
      });
    });
    return await cognitoSignUp
      .then((result) => {
        return result;
      })
      .catch((error) => {
        throw new Error(error.message);
      });
  }
}
