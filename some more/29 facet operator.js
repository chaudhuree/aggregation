// basic syntax
db.products.aggregate([
// pipelien one
  {
    $facet: {
      "A": [{}],
      "B": [{}]
    }
  }

])

// real example with products collection
db.products.aggregate([
// pipelien one
  {
    $facet: {
      "total_products": [{$count: "total"}], //get total number of products
      "samsung": [{$match: {"BrandID": 1652474116}}],//get only products of samsung
      "walton": [{$match: {"BrandID": 1654327435}}], //get only products of walton
      "totalData":[]//get all datums
    }
  }

])

