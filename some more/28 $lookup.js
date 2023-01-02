// brand er jonne brand collectin create korte hobe
// category er jonne category collection create korte hobe
// product er jonne product collection create korte hobe

// brand er brand id ase (primary key)
// category er category id ase (primary key)

// ai brand id and category id dea product collection connected (brand id and category id foreign key)

// product collection theke amra sudhu brand id and category id paiteci but kono details kintu paitecina

// so now , brand and category somporke jante chaile product collecton er sathe brand collection and category collection join dite hobe

// basic structure
db.products.aggregate([
  {$lookup:{
      from:"categories", //j collection er sathe join korbo tar name
      localField:"CategoryID", // product collection er field name jeta collection er key ta dea toiri
      foreignField:"CategoryID", // category collection er field name jeta products er foreign key hoye ase
      as:"category_details" // join korar por result ta j name e rakhte chai
  }},
  {$lookup:{
      from:"brands", //j collection er sathe join korbo tar name
      localField:"BrandID", // product collection er field name jeta collection er key ta dea toiri
      foreignField:"BrandID", // category collection er field name jeta products er foreign key hoye ase
      as:"brand_details" // join korar por result ta j name e rakhte chai
  }}
])
