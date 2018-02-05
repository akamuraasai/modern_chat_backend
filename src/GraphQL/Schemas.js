import { makeExecutableSchema } from 'graphql-tools';
import { Message, Query as messageQuery } from './Message/Message.typeDef';
import messageResolvers from './Message/Message.resolver';
import { User, Query as userQuery } from './User/User.typeDef';
import userResolvers from './User/User.resolver';

const typeDefs = `
  ${User}
  ${Message}
  type Query {
    ${userQuery}
    ${messageQuery}
  }
`;

const resolvers = {
  Query: {
    ...userResolvers,
    ...messageResolvers,
  },
};

export default makeExecutableSchema({
  typeDefs,
  resolvers,
});
