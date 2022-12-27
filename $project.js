//project
db.persons.aggregate([

{$project:{
    _id:0,
    name:1,
    info:{ //a new field of info is added with values with renaming them
    eyes:"$eyeColor",
    country:"$company.location.country",
    company:"$company.title"
}
}}, 

])