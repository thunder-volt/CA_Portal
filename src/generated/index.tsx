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
  role?: Maybe<UserRole>;
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
  deleteTask: Scalars['Boolean'];
  deleteUser: Scalars['Boolean'];
  editCoordAllocation: Scalars['Boolean'];
  editProfile?: Maybe<Scalars['Boolean']>;
  editTask: Scalars['Boolean'];
  editTaskSubmission: Scalars['Boolean'];
  fillQuestionnaire: Scalars['Boolean'];
  login?: Maybe<User>;
  logoutUser: Scalars['Boolean'];
  reqForgotPassVerification: Scalars['Boolean'];
  resendVerificationMail: Scalars['Boolean'];
  resetPassword: Scalars['Boolean'];
  reviewTask: Scalars['Boolean'];
  sendSupportMail: Scalars['Boolean'];
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


export type MutationDeleteTaskArgs = {
  taskid: Scalars['String'];
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


export type MutationResendVerificationMailArgs = {
  data: RequestForgotPassInput;
};


export type MutationResetPasswordArgs = {
  data: ResetPasswordInput;
};


export type MutationReviewTaskArgs = {
  data: ReviewTaskInput;
};


export type MutationSendSupportMailArgs = {
  data: SendSupportMailInput;
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
  city: Scalars['String'];
  college: Scalars['String'];
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

export type SendSupportMailInput = {
  content: Scalars['String'];
  email: Scalars['String'];
  name: Scalars['String'];
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
  totalPoints?: Maybe<Scalars['Float']>;
};

export enum UserRole {
  Admin = 'ADMIN',
  Registered = 'REGISTERED',
  Rejected = 'REJECTED',
  Selected = 'SELECTED'
}

export type Questionnaire = {
  Degree: Scalars['String'];
  Q1: Scalars['String'];
  Q2: Scalars['String'];
  Q3: Scalars['String'];
  Q4: Scalars['String'];
  Q5: Scalars['String'];
  Q6: Scalars['String'];
  branch: Scalars['String'];
  city: Scalars['String'];
  college: Scalars['String'];
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

export type GetQuestionnaireQueryVariables = Exact<{ [key: string]: never; }>;


export type GetQuestionnaireQuery = { getQuestionnaire: { college: string, collegeaddress: string, city: string, state: string, Degree: string, branch: string, year: string, postaladdress: string, pcity: string, pstate: string, pincode: string, contactno: string, whatsappno: string, Q1: string, Q2: string, Q3: string, Q4: string, Q5: string, Q6: string } };

export type GetUserQueryVariables = Exact<{
  userId: Scalars['String'];
}>;


export type GetUserQuery = { getUser?: Maybe<{ name: string, email: string, role: string, coord?: Maybe<string>, totalPoints?: Maybe<number>, taskReviews: Array<{ points?: Maybe<number>, review?: Maybe<string> }> }> };

export type LoginMutationVariables = Exact<{
  loginInput: LoginInput;
}>;


export type LoginMutation = { login?: Maybe<{ name: string, email: string, role: string, id: string }> };

export type CreateUserMutationVariables = Exact<{
  createUserInput: CreateUserInput;
}>;


export type CreateUserMutation = { createUser: boolean };

export type LogoutUserMutationVariables = Exact<{ [key: string]: never; }>;


export type LogoutUserMutation = { logoutUser: boolean };

export type VerifyUserMutationVariables = Exact<{
  token: Scalars['String'];
}>;


export type VerifyUserMutation = { verifyUser: boolean };

export type ResendVerificationMailMutationVariables = Exact<{
  requestForgotPassInput: RequestForgotPassInput;
}>;


export type ResendVerificationMailMutation = { resendVerificationMail: boolean };

export type ReqForgotPassVerificationMutationVariables = Exact<{
  requestForgotPassInput: RequestForgotPassInput;
}>;


export type ReqForgotPassVerificationMutation = { reqForgotPassVerification: boolean };

export type ResetPasswordMutationVariables = Exact<{
  resetPasswordInput: ResetPasswordInput;
}>;


export type ResetPasswordMutation = { resetPassword: boolean };

export type ApplicationResultMutationVariables = Exact<{
  data: ApplicationResultInput;
}>;


export type ApplicationResultMutation = { applicationResult: boolean };

export type GetUsersQueryVariables = Exact<{
  filter?: Maybe<GetUsersFilter>;
  Skip?: Maybe<Scalars['Float']>;
  limit?: Maybe<Scalars['Float']>;
}>;


export type GetUsersQuery = { getUsers?: Maybe<{ count: number, users: Array<{ name: string, id: string, caID?: Maybe<string>, email: string, role: string, coord?: Maybe<string>, totalPoints?: Maybe<number>, taskReviews: Array<{ points?: Maybe<number>, review?: Maybe<string>, reviewID: string, taskurl: string }> }> }> };

export type GetQuestionnaireByUserIdQueryVariables = Exact<{
  userid: Scalars['String'];
}>;


export type GetQuestionnaireByUserIdQuery = { getQuestionnaireByUserId: { college: string, collegeaddress: string, city: string, state: string, Degree: string, branch: string, year: string, postaladdress: string, pcity: string, pstate: string, pincode: string, contactno: string, whatsappno: string, Q1: string, Q2: string, Q3: string, Q4: string, Q5: string, Q6: string } };

export type GetTasksQueryVariables = Exact<{
  skip?: Maybe<Scalars['Float']>;
  limit?: Maybe<Scalars['Float']>;
}>;


export type GetTasksQuery = { getTasks: Array<{ id: string, brief: string, details: string, maxPoints: number, deadline: string, status: string, taskReviews: Array<{ review?: Maybe<string> }> }> };

export type GetTasksAdminQueryVariables = Exact<{
  skip?: Maybe<Scalars['Float']>;
  limit?: Maybe<Scalars['Float']>;
}>;


export type GetTasksAdminQuery = { getTasks: Array<{ id: string, brief: string, details: string, maxPoints: number, taskReviewsCount: number, status: string, taskReviews: Array<{ review?: Maybe<string> }> }> };

export type GetTaskreviewQueryVariables = Exact<{
  filter: FilterTaskReview;
}>;


export type GetTaskreviewQuery = { getTaskreview: Array<{ points?: Maybe<number>, review?: Maybe<string>, taskurl: string, reviewID: string }> };

export type FillQuestionnaireMutationVariables = Exact<{
  questionnaireInput: QuestionnaireInput;
}>;


export type FillQuestionnaireMutation = { fillQuestionnaire: boolean };

export type SendSupportMailMutationVariables = Exact<{
  sendSupportMailInput: SendSupportMailInput;
}>;


export type SendSupportMailMutation = { sendSupportMail: boolean };

export type CreateTaskMutationVariables = Exact<{
  data: TaskInput;
}>;


export type CreateTaskMutation = { createTask: boolean };

export type ReviewTaskMutationVariables = Exact<{
  data: ReviewTaskInput;
}>;


export type ReviewTaskMutation = { reviewTask: boolean };

export type SubmitTaskMutationVariables = Exact<{
  data: SubmitTaskInput;
}>;


export type SubmitTaskMutation = { submitTask: boolean };

export type LeaderBoardQueryVariables = Exact<{
  limit?: Maybe<Scalars['Float']>;
  skip?: Maybe<Scalars['Float']>;
}>;


export type LeaderBoardQuery = { leaderBoard?: Maybe<{ users: Array<{ name: string, totalPoints?: Maybe<number> }> }> };

export type DeleteTaskMutationVariables = Exact<{
  taskid: Scalars['String'];
}>;


export type DeleteTaskMutation = { deleteTask: boolean };

export type EditTaskSubmissionMutationVariables = Exact<{
  data: SubmitTaskInput;
}>;


export type EditTaskSubmissionMutation = { editTaskSubmission: boolean };


export const GetQuestionnaireDocument = gql`
    query getQuestionnaire {
  getQuestionnaire {
    college
    collegeaddress
    city
    state
    Degree
    branch
    year
    postaladdress
    pcity
    pstate
    pincode
    contactno
    whatsappno
    Q1
    Q2
    Q3
    Q4
    Q5
    Q6
  }
}
    `;

/**
 * __useGetQuestionnaireQuery__
 *
 * To run a query within a React component, call `useGetQuestionnaireQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetQuestionnaireQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetQuestionnaireQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetQuestionnaireQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<GetQuestionnaireQuery, GetQuestionnaireQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return ApolloReactHooks.useQuery<GetQuestionnaireQuery, GetQuestionnaireQueryVariables>(GetQuestionnaireDocument, options);
      }
export function useGetQuestionnaireLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<GetQuestionnaireQuery, GetQuestionnaireQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return ApolloReactHooks.useLazyQuery<GetQuestionnaireQuery, GetQuestionnaireQueryVariables>(GetQuestionnaireDocument, options);
        }
export type GetQuestionnaireQueryHookResult = ReturnType<typeof useGetQuestionnaireQuery>;
export type GetQuestionnaireLazyQueryHookResult = ReturnType<typeof useGetQuestionnaireLazyQuery>;
export type GetQuestionnaireQueryResult = ApolloReactCommon.QueryResult<GetQuestionnaireQuery, GetQuestionnaireQueryVariables>;
export function refetchGetQuestionnaireQuery(variables?: GetQuestionnaireQueryVariables) {
      return { query: GetQuestionnaireDocument, variables: variables }
    }
export const GetUserDocument = gql`
    query getUser($userId: String!) {
  getUser(userId: $userId) {
    name
    email
    role
    coord
    totalPoints
    taskReviews {
      points
      review
    }
  }
}
    `;

/**
 * __useGetUserQuery__
 *
 * To run a query within a React component, call `useGetUserQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetUserQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetUserQuery({
 *   variables: {
 *      userId: // value for 'userId'
 *   },
 * });
 */
export function useGetUserQuery(baseOptions: ApolloReactHooks.QueryHookOptions<GetUserQuery, GetUserQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return ApolloReactHooks.useQuery<GetUserQuery, GetUserQueryVariables>(GetUserDocument, options);
      }
export function useGetUserLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<GetUserQuery, GetUserQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return ApolloReactHooks.useLazyQuery<GetUserQuery, GetUserQueryVariables>(GetUserDocument, options);
        }
export type GetUserQueryHookResult = ReturnType<typeof useGetUserQuery>;
export type GetUserLazyQueryHookResult = ReturnType<typeof useGetUserLazyQuery>;
export type GetUserQueryResult = ApolloReactCommon.QueryResult<GetUserQuery, GetUserQueryVariables>;
export function refetchGetUserQuery(variables?: GetUserQueryVariables) {
      return { query: GetUserDocument, variables: variables }
    }
export const LoginDocument = gql`
    mutation login($loginInput: LoginInput!) {
  login(data: $loginInput) {
    name
    email
    role
    id
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
export const VerifyUserDocument = gql`
    mutation verifyUser($token: String!) {
  verifyUser(token: $token)
}
    `;
export type VerifyUserMutationFn = ApolloReactCommon.MutationFunction<VerifyUserMutation, VerifyUserMutationVariables>;

/**
 * __useVerifyUserMutation__
 *
 * To run a mutation, you first call `useVerifyUserMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useVerifyUserMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [verifyUserMutation, { data, loading, error }] = useVerifyUserMutation({
 *   variables: {
 *      token: // value for 'token'
 *   },
 * });
 */
export function useVerifyUserMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<VerifyUserMutation, VerifyUserMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return ApolloReactHooks.useMutation<VerifyUserMutation, VerifyUserMutationVariables>(VerifyUserDocument, options);
      }
export type VerifyUserMutationHookResult = ReturnType<typeof useVerifyUserMutation>;
export type VerifyUserMutationResult = ApolloReactCommon.MutationResult<VerifyUserMutation>;
export type VerifyUserMutationOptions = ApolloReactCommon.BaseMutationOptions<VerifyUserMutation, VerifyUserMutationVariables>;
export const ResendVerificationMailDocument = gql`
    mutation resendVerificationMail($requestForgotPassInput: RequestForgotPassInput!) {
  resendVerificationMail(data: $requestForgotPassInput)
}
    `;
export type ResendVerificationMailMutationFn = ApolloReactCommon.MutationFunction<ResendVerificationMailMutation, ResendVerificationMailMutationVariables>;

/**
 * __useResendVerificationMailMutation__
 *
 * To run a mutation, you first call `useResendVerificationMailMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useResendVerificationMailMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [resendVerificationMailMutation, { data, loading, error }] = useResendVerificationMailMutation({
 *   variables: {
 *      requestForgotPassInput: // value for 'requestForgotPassInput'
 *   },
 * });
 */
export function useResendVerificationMailMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<ResendVerificationMailMutation, ResendVerificationMailMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return ApolloReactHooks.useMutation<ResendVerificationMailMutation, ResendVerificationMailMutationVariables>(ResendVerificationMailDocument, options);
      }
export type ResendVerificationMailMutationHookResult = ReturnType<typeof useResendVerificationMailMutation>;
export type ResendVerificationMailMutationResult = ApolloReactCommon.MutationResult<ResendVerificationMailMutation>;
export type ResendVerificationMailMutationOptions = ApolloReactCommon.BaseMutationOptions<ResendVerificationMailMutation, ResendVerificationMailMutationVariables>;
export const ReqForgotPassVerificationDocument = gql`
    mutation reqForgotPassVerification($requestForgotPassInput: RequestForgotPassInput!) {
  reqForgotPassVerification(data: $requestForgotPassInput)
}
    `;
export type ReqForgotPassVerificationMutationFn = ApolloReactCommon.MutationFunction<ReqForgotPassVerificationMutation, ReqForgotPassVerificationMutationVariables>;

/**
 * __useReqForgotPassVerificationMutation__
 *
 * To run a mutation, you first call `useReqForgotPassVerificationMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useReqForgotPassVerificationMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [reqForgotPassVerificationMutation, { data, loading, error }] = useReqForgotPassVerificationMutation({
 *   variables: {
 *      requestForgotPassInput: // value for 'requestForgotPassInput'
 *   },
 * });
 */
export function useReqForgotPassVerificationMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<ReqForgotPassVerificationMutation, ReqForgotPassVerificationMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return ApolloReactHooks.useMutation<ReqForgotPassVerificationMutation, ReqForgotPassVerificationMutationVariables>(ReqForgotPassVerificationDocument, options);
      }
export type ReqForgotPassVerificationMutationHookResult = ReturnType<typeof useReqForgotPassVerificationMutation>;
export type ReqForgotPassVerificationMutationResult = ApolloReactCommon.MutationResult<ReqForgotPassVerificationMutation>;
export type ReqForgotPassVerificationMutationOptions = ApolloReactCommon.BaseMutationOptions<ReqForgotPassVerificationMutation, ReqForgotPassVerificationMutationVariables>;
export const ResetPasswordDocument = gql`
    mutation resetPassword($resetPasswordInput: ResetPasswordInput!) {
  resetPassword(data: $resetPasswordInput)
}
    `;
export type ResetPasswordMutationFn = ApolloReactCommon.MutationFunction<ResetPasswordMutation, ResetPasswordMutationVariables>;

/**
 * __useResetPasswordMutation__
 *
 * To run a mutation, you first call `useResetPasswordMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useResetPasswordMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [resetPasswordMutation, { data, loading, error }] = useResetPasswordMutation({
 *   variables: {
 *      resetPasswordInput: // value for 'resetPasswordInput'
 *   },
 * });
 */
export function useResetPasswordMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<ResetPasswordMutation, ResetPasswordMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return ApolloReactHooks.useMutation<ResetPasswordMutation, ResetPasswordMutationVariables>(ResetPasswordDocument, options);
      }
export type ResetPasswordMutationHookResult = ReturnType<typeof useResetPasswordMutation>;
export type ResetPasswordMutationResult = ApolloReactCommon.MutationResult<ResetPasswordMutation>;
export type ResetPasswordMutationOptions = ApolloReactCommon.BaseMutationOptions<ResetPasswordMutation, ResetPasswordMutationVariables>;
export const ApplicationResultDocument = gql`
    mutation applicationResult($data: ApplicationResultInput!) {
  applicationResult(data: $data)
}
    `;
export type ApplicationResultMutationFn = ApolloReactCommon.MutationFunction<ApplicationResultMutation, ApplicationResultMutationVariables>;

/**
 * __useApplicationResultMutation__
 *
 * To run a mutation, you first call `useApplicationResultMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useApplicationResultMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [applicationResultMutation, { data, loading, error }] = useApplicationResultMutation({
 *   variables: {
 *      data: // value for 'data'
 *   },
 * });
 */
export function useApplicationResultMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<ApplicationResultMutation, ApplicationResultMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return ApolloReactHooks.useMutation<ApplicationResultMutation, ApplicationResultMutationVariables>(ApplicationResultDocument, options);
      }
export type ApplicationResultMutationHookResult = ReturnType<typeof useApplicationResultMutation>;
export type ApplicationResultMutationResult = ApolloReactCommon.MutationResult<ApplicationResultMutation>;
export type ApplicationResultMutationOptions = ApolloReactCommon.BaseMutationOptions<ApplicationResultMutation, ApplicationResultMutationVariables>;
export const GetUsersDocument = gql`
    query getUsers($filter: GetUsersFilter, $Skip: Float, $limit: Float) {
  getUsers(filter: $filter, skip: $Skip, limit: $limit) {
    users {
      name
      id
      caID
      email
      role
      coord
      totalPoints
      taskReviews {
        points
        review
        reviewID
        taskurl
      }
    }
    count
  }
}
    `;

/**
 * __useGetUsersQuery__
 *
 * To run a query within a React component, call `useGetUsersQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetUsersQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetUsersQuery({
 *   variables: {
 *      filter: // value for 'filter'
 *      Skip: // value for 'Skip'
 *      limit: // value for 'limit'
 *   },
 * });
 */
export function useGetUsersQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<GetUsersQuery, GetUsersQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return ApolloReactHooks.useQuery<GetUsersQuery, GetUsersQueryVariables>(GetUsersDocument, options);
      }
export function useGetUsersLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<GetUsersQuery, GetUsersQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return ApolloReactHooks.useLazyQuery<GetUsersQuery, GetUsersQueryVariables>(GetUsersDocument, options);
        }
export type GetUsersQueryHookResult = ReturnType<typeof useGetUsersQuery>;
export type GetUsersLazyQueryHookResult = ReturnType<typeof useGetUsersLazyQuery>;
export type GetUsersQueryResult = ApolloReactCommon.QueryResult<GetUsersQuery, GetUsersQueryVariables>;
export function refetchGetUsersQuery(variables?: GetUsersQueryVariables) {
      return { query: GetUsersDocument, variables: variables }
    }
export const GetQuestionnaireByUserIdDocument = gql`
    query getQuestionnaireByUserId($userid: String!) {
  getQuestionnaireByUserId(userid: $userid) {
    college
    collegeaddress
    city
    state
    Degree
    branch
    year
    postaladdress
    pcity
    pstate
    pincode
    contactno
    whatsappno
    Q1
    Q2
    Q3
    Q4
    Q5
    Q6
  }
}
    `;

/**
 * __useGetQuestionnaireByUserIdQuery__
 *
 * To run a query within a React component, call `useGetQuestionnaireByUserIdQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetQuestionnaireByUserIdQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetQuestionnaireByUserIdQuery({
 *   variables: {
 *      userid: // value for 'userid'
 *   },
 * });
 */
export function useGetQuestionnaireByUserIdQuery(baseOptions: ApolloReactHooks.QueryHookOptions<GetQuestionnaireByUserIdQuery, GetQuestionnaireByUserIdQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return ApolloReactHooks.useQuery<GetQuestionnaireByUserIdQuery, GetQuestionnaireByUserIdQueryVariables>(GetQuestionnaireByUserIdDocument, options);
      }
export function useGetQuestionnaireByUserIdLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<GetQuestionnaireByUserIdQuery, GetQuestionnaireByUserIdQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return ApolloReactHooks.useLazyQuery<GetQuestionnaireByUserIdQuery, GetQuestionnaireByUserIdQueryVariables>(GetQuestionnaireByUserIdDocument, options);
        }
export type GetQuestionnaireByUserIdQueryHookResult = ReturnType<typeof useGetQuestionnaireByUserIdQuery>;
export type GetQuestionnaireByUserIdLazyQueryHookResult = ReturnType<typeof useGetQuestionnaireByUserIdLazyQuery>;
export type GetQuestionnaireByUserIdQueryResult = ApolloReactCommon.QueryResult<GetQuestionnaireByUserIdQuery, GetQuestionnaireByUserIdQueryVariables>;
export function refetchGetQuestionnaireByUserIdQuery(variables?: GetQuestionnaireByUserIdQueryVariables) {
      return { query: GetQuestionnaireByUserIdDocument, variables: variables }
    }
export const GetTasksDocument = gql`
    query getTasks($skip: Float, $limit: Float) {
  getTasks(skip: $skip, limit: $limit) {
    id
    brief
    details
    maxPoints
    deadline
    taskReviews {
      review
    }
    status
  }
}
    `;

/**
 * __useGetTasksQuery__
 *
 * To run a query within a React component, call `useGetTasksQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetTasksQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetTasksQuery({
 *   variables: {
 *      skip: // value for 'skip'
 *      limit: // value for 'limit'
 *   },
 * });
 */
export function useGetTasksQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<GetTasksQuery, GetTasksQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return ApolloReactHooks.useQuery<GetTasksQuery, GetTasksQueryVariables>(GetTasksDocument, options);
      }
export function useGetTasksLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<GetTasksQuery, GetTasksQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return ApolloReactHooks.useLazyQuery<GetTasksQuery, GetTasksQueryVariables>(GetTasksDocument, options);
        }
export type GetTasksQueryHookResult = ReturnType<typeof useGetTasksQuery>;
export type GetTasksLazyQueryHookResult = ReturnType<typeof useGetTasksLazyQuery>;
export type GetTasksQueryResult = ApolloReactCommon.QueryResult<GetTasksQuery, GetTasksQueryVariables>;
export function refetchGetTasksQuery(variables?: GetTasksQueryVariables) {
      return { query: GetTasksDocument, variables: variables }
    }
export const GetTasksAdminDocument = gql`
    query getTasksAdmin($skip: Float, $limit: Float) {
  getTasks(skip: $skip, limit: $limit) {
    id
    brief
    details
    maxPoints
    taskReviewsCount
    taskReviews {
      review
    }
    status
  }
}
    `;

/**
 * __useGetTasksAdminQuery__
 *
 * To run a query within a React component, call `useGetTasksAdminQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetTasksAdminQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetTasksAdminQuery({
 *   variables: {
 *      skip: // value for 'skip'
 *      limit: // value for 'limit'
 *   },
 * });
 */
export function useGetTasksAdminQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<GetTasksAdminQuery, GetTasksAdminQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return ApolloReactHooks.useQuery<GetTasksAdminQuery, GetTasksAdminQueryVariables>(GetTasksAdminDocument, options);
      }
export function useGetTasksAdminLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<GetTasksAdminQuery, GetTasksAdminQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return ApolloReactHooks.useLazyQuery<GetTasksAdminQuery, GetTasksAdminQueryVariables>(GetTasksAdminDocument, options);
        }
export type GetTasksAdminQueryHookResult = ReturnType<typeof useGetTasksAdminQuery>;
export type GetTasksAdminLazyQueryHookResult = ReturnType<typeof useGetTasksAdminLazyQuery>;
export type GetTasksAdminQueryResult = ApolloReactCommon.QueryResult<GetTasksAdminQuery, GetTasksAdminQueryVariables>;
export function refetchGetTasksAdminQuery(variables?: GetTasksAdminQueryVariables) {
      return { query: GetTasksAdminDocument, variables: variables }
    }
export const GetTaskreviewDocument = gql`
    query getTaskreview($filter: FilterTaskReview!) {
  getTaskreview(filter: $filter) {
    points
    review
    taskurl
    reviewID
  }
}
    `;

/**
 * __useGetTaskreviewQuery__
 *
 * To run a query within a React component, call `useGetTaskreviewQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetTaskreviewQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetTaskreviewQuery({
 *   variables: {
 *      filter: // value for 'filter'
 *   },
 * });
 */
export function useGetTaskreviewQuery(baseOptions: ApolloReactHooks.QueryHookOptions<GetTaskreviewQuery, GetTaskreviewQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return ApolloReactHooks.useQuery<GetTaskreviewQuery, GetTaskreviewQueryVariables>(GetTaskreviewDocument, options);
      }
export function useGetTaskreviewLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<GetTaskreviewQuery, GetTaskreviewQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return ApolloReactHooks.useLazyQuery<GetTaskreviewQuery, GetTaskreviewQueryVariables>(GetTaskreviewDocument, options);
        }
export type GetTaskreviewQueryHookResult = ReturnType<typeof useGetTaskreviewQuery>;
export type GetTaskreviewLazyQueryHookResult = ReturnType<typeof useGetTaskreviewLazyQuery>;
export type GetTaskreviewQueryResult = ApolloReactCommon.QueryResult<GetTaskreviewQuery, GetTaskreviewQueryVariables>;
export function refetchGetTaskreviewQuery(variables?: GetTaskreviewQueryVariables) {
      return { query: GetTaskreviewDocument, variables: variables }
    }
export const FillQuestionnaireDocument = gql`
    mutation fillQuestionnaire($questionnaireInput: QuestionnaireInput!) {
  fillQuestionnaire(data: $questionnaireInput)
}
    `;
export type FillQuestionnaireMutationFn = ApolloReactCommon.MutationFunction<FillQuestionnaireMutation, FillQuestionnaireMutationVariables>;

/**
 * __useFillQuestionnaireMutation__
 *
 * To run a mutation, you first call `useFillQuestionnaireMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useFillQuestionnaireMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [fillQuestionnaireMutation, { data, loading, error }] = useFillQuestionnaireMutation({
 *   variables: {
 *      questionnaireInput: // value for 'questionnaireInput'
 *   },
 * });
 */
export function useFillQuestionnaireMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<FillQuestionnaireMutation, FillQuestionnaireMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return ApolloReactHooks.useMutation<FillQuestionnaireMutation, FillQuestionnaireMutationVariables>(FillQuestionnaireDocument, options);
      }
export type FillQuestionnaireMutationHookResult = ReturnType<typeof useFillQuestionnaireMutation>;
export type FillQuestionnaireMutationResult = ApolloReactCommon.MutationResult<FillQuestionnaireMutation>;
export type FillQuestionnaireMutationOptions = ApolloReactCommon.BaseMutationOptions<FillQuestionnaireMutation, FillQuestionnaireMutationVariables>;
export const SendSupportMailDocument = gql`
    mutation sendSupportMail($sendSupportMailInput: SendSupportMailInput!) {
  sendSupportMail(data: $sendSupportMailInput)
}
    `;
export type SendSupportMailMutationFn = ApolloReactCommon.MutationFunction<SendSupportMailMutation, SendSupportMailMutationVariables>;

/**
 * __useSendSupportMailMutation__
 *
 * To run a mutation, you first call `useSendSupportMailMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useSendSupportMailMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [sendSupportMailMutation, { data, loading, error }] = useSendSupportMailMutation({
 *   variables: {
 *      sendSupportMailInput: // value for 'sendSupportMailInput'
 *   },
 * });
 */
export function useSendSupportMailMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<SendSupportMailMutation, SendSupportMailMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return ApolloReactHooks.useMutation<SendSupportMailMutation, SendSupportMailMutationVariables>(SendSupportMailDocument, options);
      }
export type SendSupportMailMutationHookResult = ReturnType<typeof useSendSupportMailMutation>;
export type SendSupportMailMutationResult = ApolloReactCommon.MutationResult<SendSupportMailMutation>;
export type SendSupportMailMutationOptions = ApolloReactCommon.BaseMutationOptions<SendSupportMailMutation, SendSupportMailMutationVariables>;
export const CreateTaskDocument = gql`
    mutation createTask($data: TaskInput!) {
  createTask(data: $data)
}
    `;
export type CreateTaskMutationFn = ApolloReactCommon.MutationFunction<CreateTaskMutation, CreateTaskMutationVariables>;

/**
 * __useCreateTaskMutation__
 *
 * To run a mutation, you first call `useCreateTaskMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateTaskMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createTaskMutation, { data, loading, error }] = useCreateTaskMutation({
 *   variables: {
 *      data: // value for 'data'
 *   },
 * });
 */
export function useCreateTaskMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<CreateTaskMutation, CreateTaskMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return ApolloReactHooks.useMutation<CreateTaskMutation, CreateTaskMutationVariables>(CreateTaskDocument, options);
      }
export type CreateTaskMutationHookResult = ReturnType<typeof useCreateTaskMutation>;
export type CreateTaskMutationResult = ApolloReactCommon.MutationResult<CreateTaskMutation>;
export type CreateTaskMutationOptions = ApolloReactCommon.BaseMutationOptions<CreateTaskMutation, CreateTaskMutationVariables>;
export const ReviewTaskDocument = gql`
    mutation reviewTask($data: ReviewTaskInput!) {
  reviewTask(data: $data)
}
    `;
export type ReviewTaskMutationFn = ApolloReactCommon.MutationFunction<ReviewTaskMutation, ReviewTaskMutationVariables>;

/**
 * __useReviewTaskMutation__
 *
 * To run a mutation, you first call `useReviewTaskMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useReviewTaskMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [reviewTaskMutation, { data, loading, error }] = useReviewTaskMutation({
 *   variables: {
 *      data: // value for 'data'
 *   },
 * });
 */
export function useReviewTaskMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<ReviewTaskMutation, ReviewTaskMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return ApolloReactHooks.useMutation<ReviewTaskMutation, ReviewTaskMutationVariables>(ReviewTaskDocument, options);
      }
export type ReviewTaskMutationHookResult = ReturnType<typeof useReviewTaskMutation>;
export type ReviewTaskMutationResult = ApolloReactCommon.MutationResult<ReviewTaskMutation>;
export type ReviewTaskMutationOptions = ApolloReactCommon.BaseMutationOptions<ReviewTaskMutation, ReviewTaskMutationVariables>;
export const SubmitTaskDocument = gql`
    mutation submitTask($data: SubmitTaskInput!) {
  submitTask(data: $data)
}
    `;
export type SubmitTaskMutationFn = ApolloReactCommon.MutationFunction<SubmitTaskMutation, SubmitTaskMutationVariables>;

/**
 * __useSubmitTaskMutation__
 *
 * To run a mutation, you first call `useSubmitTaskMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useSubmitTaskMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [submitTaskMutation, { data, loading, error }] = useSubmitTaskMutation({
 *   variables: {
 *      data: // value for 'data'
 *   },
 * });
 */
export function useSubmitTaskMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<SubmitTaskMutation, SubmitTaskMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return ApolloReactHooks.useMutation<SubmitTaskMutation, SubmitTaskMutationVariables>(SubmitTaskDocument, options);
      }
export type SubmitTaskMutationHookResult = ReturnType<typeof useSubmitTaskMutation>;
export type SubmitTaskMutationResult = ApolloReactCommon.MutationResult<SubmitTaskMutation>;
export type SubmitTaskMutationOptions = ApolloReactCommon.BaseMutationOptions<SubmitTaskMutation, SubmitTaskMutationVariables>;
export const LeaderBoardDocument = gql`
    query leaderBoard($limit: Float, $skip: Float) {
  leaderBoard(limit: $limit, skip: $skip) {
    users {
      name
      totalPoints
    }
  }
}
    `;

/**
 * __useLeaderBoardQuery__
 *
 * To run a query within a React component, call `useLeaderBoardQuery` and pass it any options that fit your needs.
 * When your component renders, `useLeaderBoardQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useLeaderBoardQuery({
 *   variables: {
 *      limit: // value for 'limit'
 *      skip: // value for 'skip'
 *   },
 * });
 */
export function useLeaderBoardQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<LeaderBoardQuery, LeaderBoardQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return ApolloReactHooks.useQuery<LeaderBoardQuery, LeaderBoardQueryVariables>(LeaderBoardDocument, options);
      }
export function useLeaderBoardLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<LeaderBoardQuery, LeaderBoardQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return ApolloReactHooks.useLazyQuery<LeaderBoardQuery, LeaderBoardQueryVariables>(LeaderBoardDocument, options);
        }
export type LeaderBoardQueryHookResult = ReturnType<typeof useLeaderBoardQuery>;
export type LeaderBoardLazyQueryHookResult = ReturnType<typeof useLeaderBoardLazyQuery>;
export type LeaderBoardQueryResult = ApolloReactCommon.QueryResult<LeaderBoardQuery, LeaderBoardQueryVariables>;
export function refetchLeaderBoardQuery(variables?: LeaderBoardQueryVariables) {
      return { query: LeaderBoardDocument, variables: variables }
    }
export const DeleteTaskDocument = gql`
    mutation deleteTask($taskid: String!) {
  deleteTask(taskid: $taskid)
}
    `;
export type DeleteTaskMutationFn = ApolloReactCommon.MutationFunction<DeleteTaskMutation, DeleteTaskMutationVariables>;

/**
 * __useDeleteTaskMutation__
 *
 * To run a mutation, you first call `useDeleteTaskMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteTaskMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteTaskMutation, { data, loading, error }] = useDeleteTaskMutation({
 *   variables: {
 *      taskid: // value for 'taskid'
 *   },
 * });
 */
export function useDeleteTaskMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<DeleteTaskMutation, DeleteTaskMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return ApolloReactHooks.useMutation<DeleteTaskMutation, DeleteTaskMutationVariables>(DeleteTaskDocument, options);
      }
export type DeleteTaskMutationHookResult = ReturnType<typeof useDeleteTaskMutation>;
export type DeleteTaskMutationResult = ApolloReactCommon.MutationResult<DeleteTaskMutation>;
export type DeleteTaskMutationOptions = ApolloReactCommon.BaseMutationOptions<DeleteTaskMutation, DeleteTaskMutationVariables>;
export const EditTaskSubmissionDocument = gql`
    mutation editTaskSubmission($data: SubmitTaskInput!) {
  editTaskSubmission(data: $data)
}
    `;
export type EditTaskSubmissionMutationFn = ApolloReactCommon.MutationFunction<EditTaskSubmissionMutation, EditTaskSubmissionMutationVariables>;

/**
 * __useEditTaskSubmissionMutation__
 *
 * To run a mutation, you first call `useEditTaskSubmissionMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useEditTaskSubmissionMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [editTaskSubmissionMutation, { data, loading, error }] = useEditTaskSubmissionMutation({
 *   variables: {
 *      data: // value for 'data'
 *   },
 * });
 */
export function useEditTaskSubmissionMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<EditTaskSubmissionMutation, EditTaskSubmissionMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return ApolloReactHooks.useMutation<EditTaskSubmissionMutation, EditTaskSubmissionMutationVariables>(EditTaskSubmissionDocument, options);
      }
export type EditTaskSubmissionMutationHookResult = ReturnType<typeof useEditTaskSubmissionMutation>;
export type EditTaskSubmissionMutationResult = ApolloReactCommon.MutationResult<EditTaskSubmissionMutation>;
export type EditTaskSubmissionMutationOptions = ApolloReactCommon.BaseMutationOptions<EditTaskSubmissionMutation, EditTaskSubmissionMutationVariables>;