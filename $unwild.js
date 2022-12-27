//unwild -> operation performed on array
//db.persons.aggregate([
//{$unwind:"$tags"},
//{$project:{name:1,tags:1}}
//])

//unwild and group

db.persons.aggregate([
{$unwind:"$tags"},
{$group:{_id:"$tags"}}
])