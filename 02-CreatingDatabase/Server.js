const {MongoClient} = require('mongodb')

const URL = ""

const client = new MongoClient(URL) 

const dbName = "ConnectionPractice" 

async function main() {
    
    await client.connect() 
    console.log("Connected successfully to server")

    const db = client.db(dbName)

    const collection = db.collection('document')

    const data = {
        firstName:"Hari2",
        PhoneNo:"9876543210"
    }
//     const insertResult = await collection.insertOne(data);
// console.log('Inserted documents =>', insertResult);

    // const allData = await collection.find({firstName:"Hari2"}).toArray()
    // console.log(allData)


    const deleteData = await collection.findOneAndDelete({firstName:"Hari2"})

      const allData = await collection.find().toArray()
    console.log(allData)
    return 'done'

}

main()
.then(()=>{
    console.log("Connect")
})
.catch(console.error)
.finally(()=>client.close())