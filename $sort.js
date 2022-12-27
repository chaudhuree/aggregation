//db.persons.aggregate([
//{$sort:{age:1}}, //asc
////{$sort:{age:-1}} //desc
//])

//sort by two value
db.persons.aggregate([
{$sort:{age:1,gender:-1}} //it will first sort by age. then if have same age of different data then sort desc by gender
])