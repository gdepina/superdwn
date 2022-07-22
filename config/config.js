const config = {
  env: process.env.NODE_ENV || 'development',
  port: process.env.PORT || 3000,
  mongoUri: 'mongodb+srv://retarded:LsmUUw74dFQQlwCE@cluster0.q5d4q.mongodb.net/test' ||
    process.env.MONGO_HOST ||
    'mongodb://' + (process.env.IP || 'localhost') + ':' +
    (process.env.MONGO_PORT || '27017') +
    '/mernproject'
}

export default config
//mongodb+srv://adminDb:integracion123@tpointegracion-whfqh.azure.mongodb.net/test?retryWrites=true&w=majority
