//distinct value gulo dea group toiri hoy
//like: alada eyeColor koyta ache
//koyjon er ase aita na kintu.just koyta 
//alada alada eyeColor ache

//koyta alada name ache

//db.persons
//    .aggregate([
//    
//    {$group:{_id:"$name"}}
//        ])

//db.persons
//    .aggregate([
//    
//    {$group:{_id:"$eyeColor"}}
//        ])

//db.persons
//    .aggregate([
//    
//    {$group:{_id:"$gender"}}
//        ])


//nested

//db.persons
//    .aggregate([
//    
//    {$group:{_id:
//        {eyeColor:"$eyeColor",
//            favoriteFruit:"$favoriteFruit"}
//        }}
//        ])

db.persons
    .aggregate([
    
    {$group:{_id:
        {eyeColor:"$eyeColor",
            age:"$age"}
        }}
        ])















