import restify from 'restify';
import { SERVER_PORT } from '../Helpers/consts';
import routes from './routes';

const server = restify.createServer({
  title: 'The Modern Chat',
});

server.use(restify.plugins.bodyParser());
server.use(restify.plugins.queryParser());
routes(server);

export default () => {
  server.listen(SERVER_PORT, () => {
    console.log(`Running on port ${SERVER_PORT}.`);
  });
};
