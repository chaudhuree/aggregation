// $sum in aggregation accumulators logic
// it is always used with $group stage
db.persons
  .aggregate([

    {
      $group: {
        _id: "$age",
        count: { $sum: 1 }
      }
    }
  ])
// $group dea group kora hoy distinct value gulo k. then jodi mone hoy each group a koyta value ache tahole $count er moddhe $sum:1 dea dile koyta value ache seta dekhabe

// $unwind and $sum
db.persons.aggregate([
  { $unwind: "$tags" },
  { $group: { _id: "$tags", count: { $sum: NumberInt(1) } } }
])

// $avg
db.persons.aggregate([
  { $group: { _id: "$company.location.country", avgAge: { $avg: "$age" } } }
])


// unary operator in aggregation
// $type, $or,$lt,$gt,$and,$multiply
// it is used in $project stage
db.persons.aggregate([
  {
    $project: {
      _id: 0,
      name: 1,
      ageType: { $type: "$age" },
      eyeColorType: { $type: "$eyeColor" }
    }
  }
])

// $out stage

// $out stage is used to write the result of the aggregation pipeline to a collection
// $out stage is used in the last stage of the pipeline
// { $out: <collectionName> }

db.persons.aggregate([
  { $match: { age: { $gt: 30 } } },
  { $out: "personsOlderThan30" }
])

// $allowDiskUse
// $allowDiskUse is used to allow the aggregation pipeline to write data to disk
// { $allowDiskUse: <boolean> }
db.persons.aggregate(
  [],{allowDiskUse:true}
)
    