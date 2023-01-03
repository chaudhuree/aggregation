// it has 3 methods $and, $or, $not
// $not only takes one argument and returns the opposite of the argument
// that means if the argument is true then it will return false
// and if the argument is false then it will return true

db.employee.aggregate([

  {
    $addFields: {

      Dhaka35k: {
        $and: [
          { $eq: ["$salary", 35000.0] },
          { $eq: ["$city", "Dhaka"] }
        ]
      },
    Rangpur30k: {
        $and: [
          { $eq: ["$salary", 30000.0] },
          { $eq: ["$city", "Rangpur"] }
        ]
      }
    }
  }


])