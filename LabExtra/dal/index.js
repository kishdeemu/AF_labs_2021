const {MongoClient} = require('mongodb');

const uri = 'mongodb://localhost:27017/posts';

const client = new MongoClient(uri,{
    useNewUrlParser:true,
    useUnifiedTopology:true,
});
// let db;
// async function connect(){
//     try {
//         const client = await MongoClient.connect(uri, {
//             useNewUrlParser: true,
//             useUnifiedTopology: true,
//         });
//         db = client.db('posts');
//         console.log("Successfully Connected to mongoDB")
//     }catch (e){
//         console.log(err);
//         process.exit(-1);
//
//     }
// }
// connect();


//connect to mongo db
client.connect(err => {
    if (err) {
        console.log(err);
        process.exit(-1);
    }
    console.log("Successfully connected to Mongo DB");
});

module.exports = client;
