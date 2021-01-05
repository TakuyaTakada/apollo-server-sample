import { CONTEXT, Inject, Injectable } from "graphql-modules";

@Injectable({
  global: true,
})
export class AuthProvider {
  constructor(context) {}

  signUp(email, password) {
    console.log(email, password);
    return true;
  }
}
