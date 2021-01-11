import { GraphQLResolveInfo } from "graphql";
export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = {
  [K in keyof T]: T[K];
};
export type MakeOptional<T, K extends keyof T> = Omit<T, K> &
  { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> &
  { [SubKey in K]: Maybe<T[SubKey]> };
export type RequireFields<T, K extends keyof T> = {
  [X in Exclude<keyof T, K>]?: T[X];
} &
  { [P in K]-?: NonNullable<T[P]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
};

export type IQuery = {
  __typename?: "Query";
  user?: Maybe<IUser>;
  users: Array<IUser>;
};

export type IQueryUserArgs = {
  id: Scalars["ID"];
};

export type IMutation = {
  __typename?: "Mutation";
  signUp: IUser;
};

export type IMutationSignUpArgs = {
  input: IPasswordAuthInput;
};

export type IBooleanResult = {
  __typename?: "BooleanResult";
  isSuccess: Scalars["Boolean"];
};

export type IUser = {
  __typename?: "User";
  id: Scalars["ID"];
  sub: Scalars["String"];
};

export type IPasswordAuthInput = {
  email: Scalars["ID"];
  password: Scalars["String"];
};

export type IAdditionalEntityFields = {
  path?: Maybe<Scalars["String"]>;
  type?: Maybe<Scalars["String"]>;
};

export type ResolverTypeWrapper<T> = Promise<T> | T;

export type LegacyStitchingResolver<TResult, TParent, TContext, TArgs> = {
  fragment: string;
  resolve: ResolverFn<TResult, TParent, TContext, TArgs>;
};

export type NewStitchingResolver<TResult, TParent, TContext, TArgs> = {
  selectionSet: string;
  resolve: ResolverFn<TResult, TParent, TContext, TArgs>;
};
export type StitchingResolver<TResult, TParent, TContext, TArgs> =
  | LegacyStitchingResolver<TResult, TParent, TContext, TArgs>
  | NewStitchingResolver<TResult, TParent, TContext, TArgs>;
export type Resolver<TResult, TParent = {}, TContext = {}, TArgs = {}> =
  | ResolverFn<TResult, TParent, TContext, TArgs>
  | StitchingResolver<TResult, TParent, TContext, TArgs>;

export type ResolverFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => Promise<TResult> | TResult;

export type SubscriptionSubscribeFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => AsyncIterator<TResult> | Promise<AsyncIterator<TResult>>;

export type SubscriptionResolveFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

export interface SubscriptionSubscriberObject<
  TResult,
  TKey extends string,
  TParent,
  TContext,
  TArgs
> {
  subscribe: SubscriptionSubscribeFn<
    { [key in TKey]: TResult },
    TParent,
    TContext,
    TArgs
  >;
  resolve?: SubscriptionResolveFn<
    TResult,
    { [key in TKey]: TResult },
    TContext,
    TArgs
  >;
}

export interface SubscriptionResolverObject<TResult, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<any, TParent, TContext, TArgs>;
  resolve: SubscriptionResolveFn<TResult, any, TContext, TArgs>;
}

export type SubscriptionObject<
  TResult,
  TKey extends string,
  TParent,
  TContext,
  TArgs
> =
  | SubscriptionSubscriberObject<TResult, TKey, TParent, TContext, TArgs>
  | SubscriptionResolverObject<TResult, TParent, TContext, TArgs>;

export type SubscriptionResolver<
  TResult,
  TKey extends string,
  TParent = {},
  TContext = {},
  TArgs = {}
> =
  | ((
      ...args: any[]
    ) => SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>)
  | SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>;

export type TypeResolveFn<TTypes, TParent = {}, TContext = {}> = (
  parent: TParent,
  context: TContext,
  info: GraphQLResolveInfo
) => Maybe<TTypes> | Promise<Maybe<TTypes>>;

export type IsTypeOfResolverFn<T = {}, TContext = {}> = (
  obj: T,
  context: TContext,
  info: GraphQLResolveInfo
) => boolean | Promise<boolean>;

export type NextResolverFn<T> = () => Promise<T>;

export type DirectiveResolverFn<
  TResult = {},
  TParent = {},
  TContext = {},
  TArgs = {}
> = (
  next: NextResolverFn<TResult>,
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

/** Mapping between all available schema types and the resolvers types */
export type IResolversTypes = {
  Query: ResolverTypeWrapper<{}>;
  ID: ResolverTypeWrapper<Scalars["ID"]>;
  Mutation: ResolverTypeWrapper<{}>;
  BooleanResult: ResolverTypeWrapper<IBooleanResult>;
  Boolean: ResolverTypeWrapper<Scalars["Boolean"]>;
  User: ResolverTypeWrapper<IUser>;
  String: ResolverTypeWrapper<Scalars["String"]>;
  passwordAuthInput: IPasswordAuthInput;
  AdditionalEntityFields: IAdditionalEntityFields;
};

/** Mapping between all available schema types and the resolvers parents */
export type IResolversParentTypes = {
  Query: {};
  ID: Scalars["ID"];
  Mutation: {};
  BooleanResult: IBooleanResult;
  Boolean: Scalars["Boolean"];
  User: IUser;
  String: Scalars["String"];
  passwordAuthInput: IPasswordAuthInput;
  AdditionalEntityFields: IAdditionalEntityFields;
};

export type IUnionDirectiveArgs = {
  discriminatorField?: Maybe<Scalars["String"]>;
  additionalFields?: Maybe<Array<Maybe<IAdditionalEntityFields>>>;
};

export type IUnionDirectiveResolver<
  Result,
  Parent,
  ContextType = any,
  Args = IUnionDirectiveArgs
> = DirectiveResolverFn<Result, Parent, ContextType, Args>;

export type IAbstractEntityDirectiveArgs = {
  discriminatorField: Scalars["String"];
  additionalFields?: Maybe<Array<Maybe<IAdditionalEntityFields>>>;
};

export type IAbstractEntityDirectiveResolver<
  Result,
  Parent,
  ContextType = any,
  Args = IAbstractEntityDirectiveArgs
> = DirectiveResolverFn<Result, Parent, ContextType, Args>;

export type IEntityDirectiveArgs = {
  embedded?: Maybe<Scalars["Boolean"]>;
  additionalFields?: Maybe<Array<Maybe<IAdditionalEntityFields>>>;
};

export type IEntityDirectiveResolver<
  Result,
  Parent,
  ContextType = any,
  Args = IEntityDirectiveArgs
> = DirectiveResolverFn<Result, Parent, ContextType, Args>;

export type IColumnDirectiveArgs = { overrideType?: Maybe<Scalars["String"]> };

export type IColumnDirectiveResolver<
  Result,
  Parent,
  ContextType = any,
  Args = IColumnDirectiveArgs
> = DirectiveResolverFn<Result, Parent, ContextType, Args>;

export type IIdDirectiveArgs = {};

export type IIdDirectiveResolver<
  Result,
  Parent,
  ContextType = any,
  Args = IIdDirectiveArgs
> = DirectiveResolverFn<Result, Parent, ContextType, Args>;

export type ILinkDirectiveArgs = { overrideType?: Maybe<Scalars["String"]> };

export type ILinkDirectiveResolver<
  Result,
  Parent,
  ContextType = any,
  Args = ILinkDirectiveArgs
> = DirectiveResolverFn<Result, Parent, ContextType, Args>;

export type IEmbeddedDirectiveArgs = {};

export type IEmbeddedDirectiveResolver<
  Result,
  Parent,
  ContextType = any,
  Args = IEmbeddedDirectiveArgs
> = DirectiveResolverFn<Result, Parent, ContextType, Args>;

export type IMapDirectiveArgs = { path: Scalars["String"] };

export type IMapDirectiveResolver<
  Result,
  Parent,
  ContextType = any,
  Args = IMapDirectiveArgs
> = DirectiveResolverFn<Result, Parent, ContextType, Args>;

export type IQueryResolvers<
  ContextType = any,
  ParentType extends IResolversParentTypes["Query"] = IResolversParentTypes["Query"]
> = {
  user?: Resolver<
    Maybe<IResolversTypes["User"]>,
    ParentType,
    ContextType,
    RequireFields<IQueryUserArgs, "id">
  >;
  users?: Resolver<Array<IResolversTypes["User"]>, ParentType, ContextType>;
};

export type IMutationResolvers<
  ContextType = any,
  ParentType extends IResolversParentTypes["Mutation"] = IResolversParentTypes["Mutation"]
> = {
  signUp?: Resolver<
    IResolversTypes["User"],
    ParentType,
    ContextType,
    RequireFields<IMutationSignUpArgs, "input">
  >;
};

export type IBooleanResultResolvers<
  ContextType = any,
  ParentType extends IResolversParentTypes["BooleanResult"] = IResolversParentTypes["BooleanResult"]
> = {
  isSuccess?: Resolver<IResolversTypes["Boolean"], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type IUserResolvers<
  ContextType = any,
  ParentType extends IResolversParentTypes["User"] = IResolversParentTypes["User"]
> = {
  id?: Resolver<IResolversTypes["ID"], ParentType, ContextType>;
  sub?: Resolver<IResolversTypes["String"], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type IResolvers<ContextType = any> = {
  Query?: IQueryResolvers<ContextType>;
  Mutation?: IMutationResolvers<ContextType>;
  BooleanResult?: IBooleanResultResolvers<ContextType>;
  User?: IUserResolvers<ContextType>;
};

export type IDirectiveResolvers<ContextType = any> = {
  union?: IUnionDirectiveResolver<any, any, ContextType>;
  abstractEntity?: IAbstractEntityDirectiveResolver<any, any, ContextType>;
  entity?: IEntityDirectiveResolver<any, any, ContextType>;
  column?: IColumnDirectiveResolver<any, any, ContextType>;
  id?: IIdDirectiveResolver<any, any, ContextType>;
  link?: ILinkDirectiveResolver<any, any, ContextType>;
  embedded?: IEmbeddedDirectiveResolver<any, any, ContextType>;
  map?: IMapDirectiveResolver<any, any, ContextType>;
};

import { ObjectID } from "mongodb";
