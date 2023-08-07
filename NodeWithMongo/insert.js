const getData=require('./mongodb');

const insert=async()=>{

    const db=await getData();

   const result=await db.insertOne({
    name:'note 5',brand:'vivo',price:320,category:'mobile'
   });

   console.log(result);
    // const result=await db.insertOne( 
    //     {name:'note 5',brand:'vivo',price:320,category:'mobile'}
    // )
    
    // console.log(result);
    
}

insert();