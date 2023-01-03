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
      ExtraField1: { $toDouble: "$Price" },
      ExtraField2: { $toDouble: "$Price" },
      ExtraField3: { $toDouble: "$Price" }
    }
  }
])