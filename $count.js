//count total number of data in the collection
//different methods and their speed:

//server side method : .001s
//db.persons.aggregate([
//{$count:"allDocumentsCount"}
//])
////or
//db.persons.aggregate([
//{$count:"total"}
//])

//server side count
//db.persons.find({}).count()


//client side method
//db.persons.aggregate([]).itcount()

//client side method
//db.persons.aggregate([]).toArray().length

//example 1

//db.persons.aggregate([
////stage 1
//{$group:{_id:{eyeColor:"$eyeColor"}}},
////stage 2
//{$count:"eyeColor"}
//])

//example 2

//db.persons.aggregate([
////stage 1
//{$group:{_id:{eyeColor:"$eyeColor",age:"$age"}}},  //eyeColor=3, age: 21 total==>63
////stage 2
//{$count:"eyeColor"}
//])


//example 3

db.persons.aggregate([
{$match:{age:{$gte:25}}},
//stage 2
{$group:{_id:{eyeColor:"$eyeColor",age:"$age"}}},  
//stage 3
{$count:"total-eyeColorAndAge"}
])

