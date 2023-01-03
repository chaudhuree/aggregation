db.products.aggregate([
  {$lookup:{
    from:"categories", localField:"CategoryID",foreignField:"CategoryID", as:"categoryDetails" 
}},

  {
    $lookup: {
      from: "brands", localField: "BrandID", foreignField: "BrandID", as: "brand_details"
    }
  },
  {
    $project: {
      _id: 0,
      ProductName: "$Name",
      BrandID: 1,
      CategoryID: 1,
      brand_details: 1,
      Price: { $toDouble: "$Price" },
      BrandName:{$first:"$brand_details.Name"}, //first because it is an array and we will get the name from first elemet of the array
      CategoryName:{$first:"$categoryDetails.Name"}

    }
  }
])