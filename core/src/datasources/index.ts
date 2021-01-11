import AuthAPI from "./AuthAPI";
import { UserPool } from "../config/auth";
import UserAPI from "./UserAPI";

export interface IDataSource {
  auth: AuthAPI;
  user: UserAPI;
}

export const createDatasource = () => {
  return {
    auth: new AuthAPI(UserPool),
    user: new UserAPI(),
  };
};
