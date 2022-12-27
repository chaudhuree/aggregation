//project
db.persons.aggregate([

{$group:{_id:{age:"$age",eyeColor:"$eyeColor"}}}, 
{$sort:{"_id.age":1,"_id.eyeColor":-1}}

])