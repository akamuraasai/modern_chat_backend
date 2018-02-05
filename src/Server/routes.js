import { graphqlRestify, graphiqlRestify } from 'apollo-server-restify';
import schema from '../GraphQL/Schemas';
import context from '../GraphQL/Context';

const graphQLOptions = { schema, context };

export default (server) => {
  server.post('/graphql', graphqlRestify(graphQLOptions));
  server.get('/graphql', graphqlRestify(graphQLOptions));

  server.get('/graphiql', graphiqlRestify({
    endpointURL: '/graphql',
  }));
};
