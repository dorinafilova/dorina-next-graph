export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
};

export type Author = {
  __typename?: 'Author';
  id: Scalars['ID'];
  name?: Maybe<Scalars['String']>;
  novelID?: Maybe<Scalars['String']>;
};

export type Mutation = {
  __typename?: 'Mutation';
  addAuthor?: Maybe<Author>;
  addNovel?: Maybe<Novel>;
  deleteAuthor?: Maybe<Author>;
  deleteNovel?: Maybe<Novel>;
  updateNovel?: Maybe<Novel>;
};


export type MutationAddAuthorArgs = {
  name?: InputMaybe<Scalars['String']>;
  novelId: Scalars['ID'];
};


export type MutationAddNovelArgs = {
  image?: InputMaybe<Scalars['String']>;
  title?: InputMaybe<Scalars['String']>;
};


export type MutationDeleteAuthorArgs = {
  id: Scalars['ID'];
};


export type MutationDeleteNovelArgs = {
  id: Scalars['ID'];
};


export type MutationUpdateNovelArgs = {
  id: Scalars['ID'];
  image?: InputMaybe<Scalars['String']>;
  title?: InputMaybe<Scalars['String']>;
};

export type Novel = {
  __typename?: 'Novel';
  author?: Maybe<Array<Maybe<Author>>>;
  createdAt?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  image?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['String']>;
};

export type Query = {
  __typename?: 'Query';
  novel?: Maybe<Novel>;
  novels?: Maybe<Array<Maybe<Novel>>>;
};


export type QueryNovelArgs = {
  id: Scalars['ID'];
};
