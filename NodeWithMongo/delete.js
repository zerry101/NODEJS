const getData=require('./mongodb');


const deleteRecord=async()=>{

    const db=await getData();
    const result=await db.deleteOne({
        name:'note 5'
    });

    if(result.deletedCount>0){

        console.log(result);
        console.log("data deleted");
    }
    else{
        console.log(result);
        console.log(`data have ${result.deletedCount} records of this record `);

    }
}

deleteRecord()