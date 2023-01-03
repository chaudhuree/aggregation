// it returns either true or false
// it is used to compare two values
db.products.aggregate([

  // pipeline 1
  {
    $addFields: { SalaryEqualTo30k: { $eq: ["$salary", 30000] } }
  }
])
// it will a new field which shows salary is equal to 30000 or not