//unwild -> operation performed on array

//example :01
//data:
// { "_id" : ObjectId("6153419ac5b3f27c3d09b2d2"), "name" : "John", "tags" : [ "tag1", "tag2", "tag3" ] }
// { "_id" : ObjectId("615341b2c5b3f27c3d09b2d3"), "name" : "Jane", "tags" : [ "tag2", "tag3", "tag4" ] }

// code:

//db.persons.aggregate([
//{$unwind:"$tags"},
//{$project:{name:1,tags:1}}
//])

//output:
// { "_id" : ObjectId("6153419ac5b3f27c3d09b2d2"), "name" : "John", "tags" : "tag1" }
// { "_id" : ObjectId("6153419ac5b3f27c3d09b2d2"), "name" : "John", "tags" : "tag2" }
// { "_id" : ObjectId("6153419ac5b3f27c3d09b2d2"), "name" : "John", "tags" : "tag3" }
// { "_id" : ObjectId("615341b2c5b3f27c3d09b2d3"), "name" : "Jane", "tags" : "tag2" }
// { "_id" : ObjectId("615341b2c5b3f27c3d09b2d3"), "name" : "Jane", "tags" : "tag3" }
// { "_id" : ObjectId("615341b2c5b3f27c3d09b2d3"), "name" : "Jane", "tags" : "tag4" }


//example :02
//unwild and group

db.persons.aggregate([
{$unwind:"$tags"},
{$group:{_id:"$tags"}}
])
// output
{ "_id" : "tag one" }
{ "_id" : "tag two" }
{ "_id" : "tag three" }


//example :03
// data:
{
  "_id": ObjectId("61533f82b08f3e3e12afaa72"),
  "title": "To Kill a Mockingbird",
  "authors": ["Harper Lee","John Snow","Eliza Morget"]
},
{
  "_id": ObjectId("61533f8cb08f3e3e12afaa73"),
  "title": "The Great Gatsby",
  "authors": ["F. Scott Fitzgerald","Carbon Finlay"]
}

// code:
db.books.aggregate([
    { $unwind: "$authors" },
    { $project: { _id: 0, author: "$authors" } }
])

// output:
{ "author" : "Harper Lee" }
{ "author" : "John Snow" }
{ "author" : "Eliza Morget" }
{ "author" : "F. Scott Fitzgerald" }
{ "author" : "Carbon Finlay" }
