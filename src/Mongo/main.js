import mongoose from 'mongoose';
import { MONGO_URL } from '../Helpers/consts';

mongoose.connect(MONGO_URL);
mongoose.Promise = global.Promise;

mongoose.connection.on('connected', () => {
  console.log('Connected to MongoDB');
});

mongoose.connection.on('error', (error) => {
  console.log(`Error when connecting: ${error}`);
});

mongoose.connection.on('disconnected', () => {
  console.log('Disconnected from MongoDB');
});

process.on('SIGINT', () => {
  mongoose.connection.close(() => {
    console.log('Connection with MongoDB closed due to application exit');
    process.exit(0);
  });
});
