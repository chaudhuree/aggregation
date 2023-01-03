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
      SplitedName: { $split:[ "$Name", " "] },
      UpperCase: { $toUpper: ["$Details"] }
    }
  }
])