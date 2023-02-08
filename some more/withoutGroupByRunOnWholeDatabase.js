//it will run for the whole database
db.persons
    .aggregate([   
    {$group:{_id:0,sum:{$sum:"$salary"}}}
        ])
