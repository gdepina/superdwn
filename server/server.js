import mongoose from 'mongoose';
import config from '../config/config';
import app from './express';

// Connection URL

mongoose.Promise = global.Promise;
mongoose.connect(config.mongoUri);
mongoose.connection.on('connected', () => {
  console.info('Broder la conexion a la base es un exito');
});
mongoose.connection.on('error', () => {
  // eslint-disable-next-line no-undef
  throw new Error(`unable to connect to database: ${mongoUri}`);
});

app.listen(config.port, (err) => {
  if (err) {
    console.log(err);
  }
  console.info('Server started on port %s.', config.port);
});
