const config = {
  env: process.env.NODE_ENV || 'development',
  port: process.env.PORT || 3000,
  mongoUri: 'mongodb+srv://downwondb:downwonpass@cluster0.kcmdovh.mongodb.net/test' ||
    process.env.MONGO_HOST ||
    'mongodb://' + (process.env.IP || 'localhost') + ':' +
    (process.env.MONGO_PORT || '27017') +
    '/mernproject'
}

export default config
//mongodb+srv://adminDb:integracion123@tpointegracion-whfqh.azure.mongodb.net/test?retryWrites=true&w=majority
