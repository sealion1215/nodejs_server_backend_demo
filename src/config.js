const dev = {
    dbUri: 'mongodb://localhost:27017/nodejsServer',
    dbUsername: 'mongoUser',
    dbPassword: 'mongoPassword',
    port: 8081,
    tokenSecret: 'testSecret',
    tokenExpireTimeInSec: 3600,
    defaultPassword: 'password',
    defaultEmail: 'abc@123.com'
};

const prod = {
    dbUri: 'mongodb://localhost:27017/nodejsServer',
    dbUsername: 'mongoUser',
    dbPassword: 'mongoPassword',
    port: 8081,
    tokenSecret: 'testSecret',
    tokenExpireTimeInSec: 3600,
    defaultPassword: 'password',
    defaultEmail: 'abc@123.com'
};

exports.configInUse = dev;