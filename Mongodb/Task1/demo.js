const {MongoClient}=require("mongodb");
// const url = "mongodb://localhost:27017";
const url = "mongodb://localhost:27017";
const client = new MongoClient(url);

async function run() {
    try{
        await client.connect();
        console.log("Connected to Mongo!!");
        const db= client.db("myDatabase");
        const users = db.collection("users");

        await users.insertOne({name:"Gavy", city:"Kurukshetra"});

        const allUsers= await users.find().toArray();
        console.log(allUsers);
    }
    finally{
        await client.close();
    }
}
run().catch(console.error);