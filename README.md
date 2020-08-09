# nodejs_server_backend_demo

database: mongodb

initialize the project:
npm install
mongorestore --db nodejsServer initialData
createTestUser: db.createUser({"user":"mongoUser","pwd":"mongoPassword",roles:["dbAdmin","readWrite"]})

run the project:
npm run start

config file:
config.js

TODO:
get clinicRecord by date instead of all records of a clinic
