const getData=require('./mongodb');
// getData().then((data)=>{
//     console.log(data);
//     data.find({}).toArray();
// })


const main=async()=>{
res=await getData();
data=await res.find({}).toArray();
console.log(data);
}

main()

// getData().then((data)=>{
//     data.find({}).toArray().then((res)=>{
//         console.log(res);
//     });
// })

// (async ()=>{
// res=await getData();
// res.find({}).toArray().then((data)=>{
//     console.log(data);
// })
// })()

// async function connect(){
//     const client=new MongoClient(url);

//     try{
//         await client.connect();
//         const db=client.db(database);
//         console.log(`connected to ${db.databaseName}`);
//     }
//     catch(ex){
//         console.error(`Someting bad happened ${ex}`);

//     }
//     finally{
//         client.cloase();
//     }

// }

// connect();