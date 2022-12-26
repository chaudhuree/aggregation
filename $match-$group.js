//db.persons.aggregate([
// //stage 1
//{$match:{"gender":"female"}},
// // stage 2
//{$group:{_id:{eyeColor:"$eyeColor"}}}
//
//])

//it can not be done. cz grouping does not has the property gender

//db.persons.aggregate([
//{$group:{_id:{eyeColor:"$eyeColor"}}},
//{$match:{"gender":"female"}},
//
//
//])

//now the grouping has gender property so we can use the command with _id. command
//db.persons.aggregate([
// //stage 2
//{$group:{_id:{eyeColor:"$eyeColor",gender:"$gender"}}},
// //stage 1
//{$match:{"_id.gender":"female"}},
//
//])

//db.persons.aggregate([
////stage 1
//{$match:{"gender":"female"}},
////stage 2
//{$group:{_id:{eyeColor:"$eyeColor",gender:"$gender"}}},
//
//])


//another example
db.persons.aggregate([

//stage 2
{$group:{_id:{eyeColor:"$eyeColor",age:"$age"}}},
//stage 1
{$match:{"_id.eyeColor":"blue"}}

])

