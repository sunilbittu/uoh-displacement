import { MongoClient, ServerApiVersion } from 'mongodb';

if (!process.env.MONGODB_URI) {
    throw new Error('Please add your MongoDB URI to .env.local');
}

const uri = process.env.MONGODB_URI;
const options = {
    serverApi: {
        version: ServerApiVersion.v1,
        strict: true,
        deprecationErrors: true,
    },
    connectTimeoutMS: 10000, // 10 seconds
    socketTimeoutMS: 45000,  // 45 seconds
};

let client;
let clientPromise: Promise<MongoClient>;

// Function to validate MongoDB connection
const validateConnection = async (client: MongoClient): Promise<boolean> => {
    try {
        // Ping the server to verify connection
        await client.db().command({ ping: 1 });
        console.log('Successfully connected to MongoDB.');
        return true;
    } catch (error: any) {
        console.error('MongoDB connection validation failed:', {
            error: error.message,
            code: error.code,
            name: error.name
        });
        return false;
    }
};

// Function to handle MongoDB connection errors
const handleMongoError = (error: any, uri: string) => {
    const url = new URL(uri);
    const username = url.username;
    
    if (error.name === 'MongoServerError' && error.code === 18) {
        console.error('MongoDB Authentication Error:', {
            message: 'Invalid username or password',
            username: username,
            hostname: url.hostname,
            database: url.pathname.slice(1)
        });
        throw new Error('MongoDB authentication failed. Please check your username and password in the connection string.');
    }
    
    console.error('MongoDB connection error:', {
        error: error.message,
        code: error.code,
        name: error.name,
        hostname: url.hostname,
        username: username
    });
    throw error;
};

if (process.env.NODE_ENV === 'development') {
    // In development mode, use a global variable so that the value
    // is preserved across module reloads caused by HMR (Hot Module Replacement).
    let globalWithMongo = global as typeof globalThis & {
        _mongoClientPromise?: Promise<MongoClient>;
    };

    if (!globalWithMongo._mongoClientPromise) {
        client = new MongoClient(uri, options);
        globalWithMongo._mongoClientPromise = client.connect()
            .then(async (client) => {
                const isValid = await validateConnection(client);
                if (!isValid) {
                    throw new Error('Failed to establish valid MongoDB connection');
                }
                return client;
            })
            .catch((error: any) => handleMongoError(error, uri));
    }
    clientPromise = globalWithMongo._mongoClientPromise;
} else {
    // In production mode, it's best to not use a global variable.
    client = new MongoClient(uri, options);
    clientPromise = client.connect()
        .then(async (client) => {
            const isValid = await validateConnection(client);
            if (!isValid) {
                throw new Error('Failed to establish valid MongoDB connection');
            }
            return client;
        })
        .catch((error: any) => handleMongoError(error, uri));
}

export default clientPromise;
