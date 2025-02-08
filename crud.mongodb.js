use("crudDb")

//create

//db.createCollection("courses")
//db.courses.insertOne({
  //  name:"shreevatsa",
    //price:0,
   // assignments:12,
   // projects:45
//})

//let a= db.courses.find ({price:0})
//console.log(a)

//update

//db.courses.updateOne({price:0},{$set:{price:100}})

//delete

db.courses.deleteMany({price:100})