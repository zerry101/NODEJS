const {MongoClient}=require('mongodb');
const url="mongodb://127.0.0.1:27017";
const database='e-comm';
const client = new MongoClient(url);

async function getData(){
    let result=await client.connect();
    console.log(`Connected successfully to server`);

    let db=result.db(database);
    let collection= db.collection('products');
    return collection;
    // let response= await collection.find({}).toArray();

    // console.log(response);

}


module.exports=getData;