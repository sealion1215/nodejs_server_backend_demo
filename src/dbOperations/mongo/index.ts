import mongoose from 'mongoose';

const connectToDB = async (dbUri: string, username: string, password: string) => {
    const mongoConnection = await mongoose.connect(dbUri, {
        user: username,
        pass: password,
        useNewUrlParser: true,
        useUnifiedTopology: true
    });
    console.log('Connected to db: ', mongoConnection.connection.db.databaseName);
}

export {
    connectToDB
}