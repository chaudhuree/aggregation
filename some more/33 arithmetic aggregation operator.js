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
      ExtraField1: { $divide: [10,2] },
      ExtraField2: { $multiply: [10,4] },
      ExtraField3: { $sq: [9] }
    }
  }
])