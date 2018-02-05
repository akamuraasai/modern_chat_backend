import { makeExecutableSchema } from 'graphql-tools';
import {
  Message,
  Query as messageQuery,
  Mutation as messageMutation,
} from './Message/Message.typeDef';

import {
  Query as messageQueryResolver,
  Mutation as messageMutationResolver,
} from './Message/Message.resolver';

import {
  User,
  Query as userQuery,
  Mutation as userMutation,
} from './User/User.typeDef';

import {
  Query as userQueryResolver,
  Mutation as userMutationResolver,
} from './User/User.resolver';

const typeDefs = `
  ${User}
  ${Message}
  type Query {
    ${userQuery}
    ${messageQuery}
  }
  type Mutation {
    ${messageMutation}
    ${userMutation}
  }
`;

const resolvers = {
  Query: {
    ...userQueryResolver,
    ...messageQueryResolver,
  },
  Mutation: {
    ...userMutationResolver,
    ...messageMutationResolver,
  },
};

export default makeExecutableSchema({
  typeDefs,
  resolvers,
});
