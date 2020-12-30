import { CognitoUserPool } from "amazon-cognito-identity-js";

const poolData = {
  UserPoolId: process.env.COGNITO_USER_POOL_ID,
  ClientId: process.env.COGNITO_CLIENT_ID,
  // ClientId: "123hogehogehoge"
};

export const cognito = new CognitoUserPool(poolData);
