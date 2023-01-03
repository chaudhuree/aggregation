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
      createatthedate: "$CreatedDate",
      createattheday: { $dayOfYear: "$CreatedDate" },
      createattheyear: { $year: "$CreatedDate" },
    }
  }
])