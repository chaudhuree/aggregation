//limit match group
db.persons.aggregate([
{$limit:100},
{$match:{eyeColor:{$ne:"blue"}}},
{$group:{_id:{favoriteFruit:"$favoriteFruit",eyeColor:"$eyeColor"}}}, 
{$sort:{"_id.eyeColor":1,"_id.favoriteFruit":-1}}

])