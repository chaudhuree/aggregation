db.persons.aggregate([
    { $group: { _id: 0, totalAge: { $sum: "$age" } } },
    { $project: { _id: 0, totalAge: 1 } }
])
// In this pipeline, the $group operator groups all input documents together into a single group, using _id: 0
// that means it will run on the whole database

// in project _id:0 means in the output exclude the id

//data
{ "_id" : ObjectId("6153419ac5b3f27c3d09b2d2"), "name" : "John", "age" : 35 }
{ "_id" : ObjectId("615341b2c5b3f27c3d09b2d3"), "name" : "Jane", "age" : 27 }
{ "_id" : ObjectId("615341c4c5b3f27c3d09b2d4"), "name" : "Bob", "age" : 42 }


//output
{ "totalAge" : 104 }
