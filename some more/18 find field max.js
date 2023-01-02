db.products.aggregate([
    {$group:{_id:0,max:{$max:"$salary"}}} //id:0 dea bujhay sob datar jonno.mane sobar salary er max ber kore
])