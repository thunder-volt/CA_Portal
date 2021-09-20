import { gql } from '@apollo/client';
import * as ApolloReactCommon from '@apollo/client';
import * as ApolloReactHooks from '@apollo/client';
export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
const defaultOptions =  {}
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
};

export type ApplicationResultInput = {
  coord: Scalars['String'];
  id: Scalars['String'];
  isSelected: Scalars['Boolean'];
};

export type CreateUserInput = {
  email: Scalars['String'];
  name: Scalars['String'];
  password: Scalars['String'];
};

export type EditProfileInput = {
  name?: Maybe<Scalars['String']>;
  password?: Maybe<Scalars['String']>;
};

export type FilterTaskReview = {
  reviewID?: Maybe<Scalars['String']>;
  task?: Maybe<Scalars['String']>;
  user?: Maybe<Scalars['String']>;
};

export type GetUsersFilter = {
  coord?: Maybe<Scalars['String']>;
  role?: Maybe<Scalars['String']>;
};

export type GetUsersOutput = {
  count: Scalars['Float'];
  users: Array<User>;
};

export type LoginInput = {
  email: Scalars['String'];
  password: Scalars['String'];
};

export type Mutation = {
  applicationResult: Scalars['Boolean'];
  createTask: Scalars['Boolean'];
  createUser: Scalars['Boolean'];
  deleteUser: Scalars['Boolean'];
  editCoordAllocation: Scalars['Boolean'];
  editProfile?: Maybe<Scalars['Boolean']>;
  editTask: Scalars['Boolean'];
  editTaskSubmission: Scalars['Boolean'];
  fillQuestionnaire: Scalars['Boolean'];
  login?: Maybe<User>;
  logoutUser: Scalars['Boolean'];
  reqForgotPassVerification: Scalars['Boolean'];
  resetPassword: Scalars['Boolean'];
  reviewTask: Scalars['Boolean'];
  submitTask: Scalars['Boolean'];
  updateQuestionnaire: Scalars['Boolean'];
  verifyUser: Scalars['Boolean'];
};


export type MutationApplicationResultArgs = {
  data: ApplicationResultInput;
};


export type MutationCreateTaskArgs = {
  data: TaskInput;
};


export type MutationCreateUserArgs = {
  data: CreateUserInput;
};


export type MutationDeleteUserArgs = {
  deleteUser: Scalars['Boolean'];
};


export type MutationEditCoordAllocationArgs = {
  data: UpdateCoordAllocationInput;
};


export type MutationEditProfileArgs = {
  data: EditProfileInput;
};


export type MutationEditTaskArgs = {
  data: TaskInput;
  taskid: Scalars['String'];
};


export type MutationEditTaskSubmissionArgs = {
  data: SubmitTaskInput;
};


export type MutationFillQuestionnaireArgs = {
  data: QuestionnaireInput;
};


export type MutationLoginArgs = {
  data: LoginInput;
};


export type MutationReqForgotPassVerificationArgs = {
  data: RequestForgotPassInput;
};


export type MutationResetPasswordArgs = {
  data: ResetPasswordInput;
};


export type MutationReviewTaskArgs = {
  data: ReviewTaskInput;
};


export type MutationSubmitTaskArgs = {
  data: SubmitTaskInput;
};


export type MutationUpdateQuestionnaireArgs = {
  data: QuestionnaireInput;
};


export type MutationVerifyUserArgs = {
  token: Scalars['String'];
};

export type Query = {
  getQuestionnaire: Questionnaire;
  getQuestionnaireByUserId: Questionnaire;
  getQuestionnaires: Array<Questionnaire>;
  getTask: Task;
  getTaskreview: Array<TaskReview>;
  getTasks: Array<Task>;
  getUser?: Maybe<User>;
  getUsers?: Maybe<GetUsersOutput>;
  getUsersCount: Scalars['Float'];
  leaderBoard?: Maybe<GetUsersOutput>;
  me?: Maybe<User>;
  searchUser?: Maybe<Array<User>>;
};


export type QueryGetQuestionnaireByUserIdArgs = {
  userid: Scalars['String'];
};


export type QueryGetTaskArgs = {
  taskid: Scalars['String'];
};


export type QueryGetTaskreviewArgs = {
  filter: FilterTaskReview;
};


export type QueryGetTasksArgs = {
  limit?: Maybe<Scalars['Float']>;
  skip?: Maybe<Scalars['Float']>;
};


export type QueryGetUserArgs = {
  userId: Scalars['String'];
};


export type QueryGetUsersArgs = {
  filter?: Maybe<GetUsersFilter>;
  limit?: Maybe<Scalars['Float']>;
  skip?: Maybe<Scalars['Float']>;
};


export type QueryGetUsersCountArgs = {
  filter: GetUsersFilter;
};


export type QueryLeaderBoardArgs = {
  limit?: Maybe<Scalars['Float']>;
  skip?: Maybe<Scalars['Float']>;
};


export type QuerySearchUserArgs = {
  search: Scalars['String'];
};

export type QuestionnaireInput = {
  Degree: Scalars['String'];
  Q1: Scalars['String'];
  Q2: Scalars['String'];
  Q3: Scalars['String'];
  Q4: Scalars['String'];
  Q5: Scalars['String'];
  Q6: Scalars['String'];
  branch: Scalars['String'];
  collegeaddress: Scalars['String'];
  contactno: Scalars['String'];
  pcity: Scalars['String'];
  pincode: Scalars['String'];
  postaladdress: Scalars['String'];
  pstate: Scalars['String'];
  state: Scalars['String'];
  whatsappno: Scalars['String'];
  year: Scalars['String'];
};

export type RequestForgotPassInput = {
  email: Scalars['String'];
};

export type ResetPasswordInput = {
  newPassword: Scalars['String'];
  token: Scalars['String'];
};

export type ReviewTaskInput = {
  points: Scalars['Float'];
  review: Scalars['String'];
  reviewid: Scalars['String'];
};

export type SubmitTaskInput = {
  taskid: Scalars['String'];
  taskurl: Array<Scalars['String']>;
};

export type Task = {
  brief: Scalars['String'];
  createdOn: Scalars['String'];
  deadline: Scalars['String'];
  details: Scalars['String'];
  id: Scalars['ID'];
  maxPoints: Scalars['Float'];
  status: Scalars['String'];
  taskReviews: Array<TaskReview>;
  taskReviewsCount: Scalars['Float'];
};

export type TaskInput = {
  brief: Scalars['String'];
  deadline: Scalars['String'];
  details: Scalars['String'];
  maxPoints: Scalars['Float'];
};

export type TaskReview = {
  points?: Maybe<Scalars['Float']>;
  review?: Maybe<Scalars['String']>;
  reviewID: Scalars['ID'];
  taskurl: Scalars['String'];
};

export type UpdateCoordAllocationInput = {
  coord: Scalars['String'];
  id: Scalars['String'];
};

export type User = {
  caID?: Maybe<Scalars['String']>;
  coord?: Maybe<Scalars['String']>;
  email: Scalars['String'];
  id: Scalars['ID'];
  isVerified: Scalars['Boolean'];
  name: Scalars['String'];
  questionnaire: Questionnaire;
  referral: Scalars['String'];
  role: Scalars['String'];
  taskReviews: Array<TaskReview>;
  totalPoints: Scalars['Float'];
};

export type Questionnaire = {
  Degree: Scalars['String'];
  Q1: Scalars['String'];
  Q2: Scalars['String'];
  Q3: Scalars['String'];
  Q4: Scalars['String'];
  Q5: Scalars['String'];
  Q6: Scalars['String'];
  branch: Scalars['String'];
  collegeaddress: Scalars['String'];
  contactno: Scalars['String'];
  id: Scalars['ID'];
  pcity: Scalars['String'];
  pincode: Scalars['String'];
  postaladdress: Scalars['String'];
  pstate: Scalars['String'];
  state: Scalars['String'];
  whatsappno: Scalars['String'];
  year: Scalars['String'];
};

export type LoginMutationVariables = Exact<{
  loginInput: LoginInput;
}>;


export type LoginMutation = { login?: Maybe<{ name: string, email: string, role: string }> };

export type CreateUserMutationVariables = Exact<{
  createUserInput: CreateUserInput;
}>;


export type CreateUserMutation = { createUser: boolean };

export type LogoutUserMutationVariables = Exact<{ [key: string]: never; }>;


export type LogoutUserMutation = { logoutUser: boolean };


export const LoginDocument = gql`
    mutation login($loginInput: LoginInput!) {
  login(data: $loginInput) {
    name
    email
    role
  }
}
    `;
export type LoginMutationFn = ApolloReactCommon.MutationFunction<LoginMutation, LoginMutationVariables>;

/**
 * __useLoginMutation__
 *
 * To run a mutation, you first call `useLoginMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useLoginMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [loginMutation, { data, loading, error }] = useLoginMutation({
 *   variables: {
 *      loginInput: // value for 'loginInput'
 *   },
 * });
 */
export function useLoginMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<LoginMutation, LoginMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return ApolloReactHooks.useMutation<LoginMutation, LoginMutationVariables>(LoginDocument, options);
      }
export type LoginMutationHookResult = ReturnType<typeof useLoginMutation>;
export type LoginMutationResult = ApolloReactCommon.MutationResult<LoginMutation>;
export type LoginMutationOptions = ApolloReactCommon.BaseMutationOptions<LoginMutation, LoginMutationVariables>;
export const CreateUserDocument = gql`
    mutation createUser($createUserInput: CreateUserInput!) {
  createUser(data: $createUserInput)
}
    `;
export type CreateUserMutationFn = ApolloReactCommon.MutationFunction<CreateUserMutation, CreateUserMutationVariables>;

/**
 * __useCreateUserMutation__
 *
 * To run a mutation, you first call `useCreateUserMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateUserMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createUserMutation, { data, loading, error }] = useCreateUserMutation({
 *   variables: {
 *      createUserInput: // value for 'createUserInput'
 *   },
 * });
 */
export function useCreateUserMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<CreateUserMutation, CreateUserMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return ApolloReactHooks.useMutation<CreateUserMutation, CreateUserMutationVariables>(CreateUserDocument, options);
      }
export type CreateUserMutationHookResult = ReturnType<typeof useCreateUserMutation>;
export type CreateUserMutationResult = ApolloReactCommon.MutationResult<CreateUserMutation>;
export type CreateUserMutationOptions = ApolloReactCommon.BaseMutationOptions<CreateUserMutation, CreateUserMutationVariables>;
export const LogoutUserDocument = gql`
    mutation logoutUser {
  logoutUser
}
    `;
export type LogoutUserMutationFn = ApolloReactCommon.MutationFunction<LogoutUserMutation, LogoutUserMutationVariables>;

/**
 * __useLogoutUserMutation__
 *
 * To run a mutation, you first call `useLogoutUserMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useLogoutUserMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [logoutUserMutation, { data, loading, error }] = useLogoutUserMutation({
 *   variables: {
 *   },
 * });
 */
export function useLogoutUserMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<LogoutUserMutation, LogoutUserMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return ApolloReactHooks.useMutation<LogoutUserMutation, LogoutUserMutationVariables>(LogoutUserDocument, options);
      }
export type LogoutUserMutationHookResult = ReturnType<typeof useLogoutUserMutation>;
export type LogoutUserMutationResult = ApolloReactCommon.MutationResult<LogoutUserMutation>;
export type LogoutUserMutationOptions = ApolloReactCommon.BaseMutationOptions<LogoutUserMutation, LogoutUserMutationVariables>;