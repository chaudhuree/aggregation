
db.products.aggregate([
    {$group:{_id:"$name",totalRows:{$sum:1}}} // how many row in each group
])


db.products.aggregate([
    {$group:{_id:"$name",total:{$sum:"$roll"}}} // Group by sum of roll
])
   

db.products.aggregate([
    {$group:{_id:"$name",total:{$sum:"$salary"}}} // Group by sum of salary
])
   
     