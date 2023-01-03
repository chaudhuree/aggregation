db.products.aggregate([
  // pipeline 1
  {
    $match: {
      Unit: "lt"
    }
  },
  // pipeline 2
  {
    $addFields: {
      ExtraField: { $toDouble: "$Price" }
    }
  }
])